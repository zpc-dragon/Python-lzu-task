from typing import List, Dict, Any, Optional, ByteString, Tuple
from uuid import uuid4
from hashlib import md5
from warnings import warn
from json import dumps, loads
# from ai import predict
import os
import shutil
import time

__all__ = [
    "login",
    "get_datasets",
    "get_dataset",
    "creat_dataset",
    "delete_dataset",
    "rename_dataset",
    "upload_data",
    "delete_data",
]
import onnxruntime as ort
from PIL import Image
import numpy as np
import time

import glob
from collections import Counter

__all__ = ["predict"]


options = ort.SessionOptions()


if False:
    providers = [
        (
            "CANNExecutionProvider",
            {
                "device_id": 0,
                "op_select_impl_mode": "high_performance",
                "optypelist_for_implmode": "Gelu",
                "enable_cann_graph": True,
            },
        ),
        "CPUExecutionProvider",
    ]
else:
    providers = ["CPUExecutionProvider"]
models = [
    ort.InferenceSession(i, providers=providers)
    for i in glob.glob("static/models/onnx/*.onnx")
]

labels = ["CC", "EC", "HGSC", "LGSC", "MC"]


def predict(img):
    img = Image.open(img).convert("RGB")
    x, y = img.size
    # center crop 2048x2048
    img = img.crop((x // 2 - 1024, y // 2 - 1024, x // 2 + 1024, y // 2 + 1024))
    # resize to 1024x1024
    img = img.resize((1024, 1024), Image.BILINEAR)
    # normalize mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]
    img = np.asarray(img).astype(np.float16)
    img = img.transpose(2, 0, 1)
    img = (img - img.mean(2, keepdims=True)) / img.std(2, keepdims=True)
    img = img * np.array([[[0.229]], [[0.224]], [[0.225]]]) + np.array(
        [[[0.485]], [[0.456]], [[0.406]]]
    )
    # add batch dimension
    img = img[np.newaxis, :, :, :].astype(np.float16)
    # inference
    preds = [model.run(None, {"input.1": img})[0] for model in models]
    preds = Counter([i.argmax() for i in preds])
    preds = labels[preds.most_common(1)[0][0]]
    # print(preds.most_common(1))
    return preds

def _load_json(path: str) -> Optional[Dict[str, Any]]:
    try:
        with open(path, "r") as f:
            return loads(f.read())
    except Exception as e:
        warn(e)
        return None


def _error(default):
    def __(f):
        def _(*args, **kwargs):
            try:
                f(*args, **kwargs)
            except KeyError:
                return default
            except Exception as e:
                warn(e)
                return default

        return _

    return __


def _error(default):
    def __(f):
        return f

    return __


def _dump_json(path: str, data: Dict[str, Any]) -> bool:
    try:
        with open(path, "w") as f:
            f.write(dumps(data))
        return True
    except Exception as e:
        warn(e)
        return False


token2account = {}


@_error("")
def login(account: str, passwd: str) -> str:
    """
    return token if success
    if failed, return empty string
    """
    passwd += "lolita"  # 加盐
    data = _load_json("static/data/accounts.json")
    if account in data:
        if data[account] == md5(passwd.encode()).hexdigest():
            token = uuid4().hex
            token2account[token] = account
            return token
        else:
            return ""
    else:
        data[account] = md5(passwd.encode()).hexdigest()
        _dump_json("static/data/accounts.json", data)
        token = uuid4().hex
        token2account[token] = account
        _dump_json(f"static/data/datasets/{account}.json", {})
        os.mkdir(f"static/data/datasets/{account}")
        return token


@_error([])
def get_datasets(token: str) -> Dict[str, Dict[str, int | str]]:
    """
    return a dict of datasets
    key: id
    value: a dict with keys:
    - name
    - created_time
    - updated_time
    {id: {name: str, created_time: int, updated_time: int}}
    """
    account = token2account[token]
    print(token2account[token])
    data = _load_json(f"static/data/datasets/{account}.json")
    return data


@_error([])
def get_dataset(token: str, dataset_id: str) -> Dict[str, Dict[str, int | str]]:
    """
    return a dict of data
    key: id
    value: a dict with keys:
    - name
    - created_time
    - class
    - path
    """
    account = token2account[token]
    data = _load_json(f"static/data/datasets/{account}/{dataset_id}.json")
    return data


@_error("")
def creat_dataset(token: str, dataset_name: str) -> str:
    """
    return id
    if failed, return empty string
    """
    id = uuid4().hex
    name = dataset_name
    created_time = updated_time = int(time.time())
    print(token2account)
    account = token2account[token]
    data = _load_json(f"static/data/datasets/{account}.json")
    data[id] = {
        "name": name,
        "created_time": created_time,
        "updated_time": updated_time,
    }
    _dump_json(f"static/data/datasets/{account}.json", data)
    _dump_json(
        f"static/data/datasets/{account}/{id}.json",
        {},
    )
    return id


@_error(False)
def delete_dataset(token: str, dataset_id: str) -> bool:
    """
    return success or not
    """
    account = token2account[token]
    data = _load_json(f"static/data/datasets/{account}.json")
    if dataset_id not in data:
        return False
    del data[dataset_id]
    _dump_json(f"static/data/datasets/{account}.json", data)
    data = _load_json(f"static/data/datasets/{account}/{dataset_id}.json")
    for i in data.values():
        os.remove(i["path"])
    return True


@_error(False)
def rename_dataset(token: str, dataset_id: str, new_name: str) -> bool:
    """
    return success or not
    """
    account = token2account[token]
    data = _load_json(f"static/data/datasets/{account}.json")
    if dataset_id not in data:
        return False
    data[dataset_id]["name"] = new_name
    data[dataset_id]["updated_time"] = int(time.time())
    _dump_json(f"static/data/datasets/{account}.json", data)
    return True


@_error([])
def upload_data(
    token: str, dataset_id: str, imgs: List[Tuple[str, ByteString]]
) -> Dict[str, Dict[str, int | str]]:
    """
    input:
    - token
    - dataset_id
    - imgs: a list of (name, data)
    return a dict of data
    key: id
    val: a data, is a dict with keys:
    - name
    - created_time
    - class
    - path
    """
    account = token2account[token]
    data = _load_json(f"static/data/datasets/{account}/{dataset_id}.json")
    for name, img in imgs:
        id = uuid4().hex
        created_time = updated_time = int(time.time())
        path = f"static/data/pictures/{id}.{name.split('.')[-1]}"
        with open(path, "wb") as f:
            f.write(img)
        data[id] = {
            "name": name,
            "created_time": created_time,
            "class": predict(path),
            "path": path,
        }
    _dump_json(f"static/data/datasets/{account}/{dataset_id}.json", data)
    return data


@_error(False)
def delete_data(token: str, dataset_id: str, data_id: str) -> bool:
    """
    return success or not
    """
    account = token2account[token]
    data = _load_json(f"static/data/datasets/{account}/{dataset_id}.json")
    if data_id not in data:
        return False
    os.remove(data[data_id]["path"])
    del data[data_id]
    _dump_json(f"static/data/datasets/{account}/{dataset_id}.json", data)
    return True


if __name__ == "__main__":
    # test
    account = "test"
    password = "aaa"
    token = login(account, password)
    print("login:", token)
    did = creat_dataset(token, "bbb")
    print("creat_dataset:", did)
    rename = rename_dataset(token, did, "ccc")
    print("rename_dataset:", rename)
    with open("9200.png", "rb") as f:
        data = f.read()
    data = upload_data(token, did, [("9200.png", data)])
    print("upload_data:", data)
    data = get_datasets(token)
    print("get_datasets:", data)
    data = get_dataset(token, did)
    print("get_dataset:", data)
    delete = delete_data(token, did, list(data.keys())[0])
    print("delete_data:", delete)
    data = get_dataset(token, did)
    print("get_dataset:", data)
    delete = delete_dataset(token, did)
    print("delete_dataset:", delete)
    data = get_datasets(token)
    print("get_datasets:", data)
