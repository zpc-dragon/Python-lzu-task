from django.shortcuts import render, redirect
import os
from django.conf import settings
from django.http import HttpResponse
from home.forms import LoginForm
from django.contrib import auth
from PY import upload_data, predict, get_dataset, get_datasets, creat_dataset
from PY import login as py_login
# Create your views here.
token = ''


def usr(request, token):
    return render(request, 'usr.html', {'token': token, 'datasets': get_datasets(token)})


def submit_creat_dataset(request):
    if request.method == 'POST':
        # 获取提交的数据
        global token
        dataset_name = request.POST.get('dataset_name')
        print(token, dataset_name)
        dataset_id = creat_dataset(token, dataset_name)
        # 在这里处理你的逻辑，比如保存数据到数据库等

        # 返回一个简单的响应，你可以根据实际需求进行修改
        return HttpResponse(f'Token: {token}, Dataset Name: {dataset_name}, dataset_id: {dataset_id},Creat Dataset Success!')

    # 如果是 GET 请求，可以根据实际需求返回一个页面或其他响应
    return HttpResponse('Invalid request method')

from django.urls import reverse

def home(request):
    print('home')
    if request.method == "POST":
        print("post")
        dataset_id = request.POST.get('dataset_id')
        dataset_name = get_datasets(token)[dataset_id]['name']
        print(dataset_name)
        return redirect(reverse('home'))
    else:
        print('get')
        return render(request, 'home.html')


def login(request):
    if request.method == "POST":
        login_form = LoginForm(request.POST)
        if login_form.is_valid():
            cd = login_form.cleaned_data
            # print(login_form)
            global token
            token = py_login(cd['username'], cd['password'])
            # user = auth.authenticate(username=cd['username'],password=cd['password'])
            # if user:
            #     '''用户登陆后，Django会自动调用默认的session应用，
            #         将用户的id存至session中，通常情况下，login与authenticate
            #         配合使用'''
            #     login(request,user)
            # return HttpResponse('成功登录')
            print(cd["username"], cd['password'])
            return redirect('usr', token=token)
            # else:
            #     return HttpResponse('登录失败')
        else:
            return HttpResponse("输入不合法")
    else:
        return render(request, 'login.html')


def upload_files(request):  # 参考（django）01 django实现前端上传图片到后端保存_django保存图片-CSDN博客.pdf
    # 由前端指定的name获取到图片数据
    img = request.FILES.get('img')
    # 获取图片的全文件名
    img_name = img.name
    token = img.token
    dataset_id = img.dataset_id
    # 截取文件后缀和文件名
    mobile = os.path.splitext(img_name)[0]
    ext = os.path.splitext(img_name)[1]
    # 重定义文件名
    img_name = f'avatar-{mobile}{ext}'
    # 从配置文件中载入图片保存路径
    img_path = os.path.join(settings.IMG_UPLOAD, img_name)
    # 写入文件
    with open(img_path, 'ab') as fp:
        # 如果上传的图片非常大，就通过chunks()方法分割成多个片段来上传
        for chunk in img.chunks():
            fp.write(chunk)
    upload_data(token, dataset_id, [(img_name, img.read())])
    # # 上传到AI库里立即perdict？
    # preds = predict(img_path)
    return HttpResponse('success')
