(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory(require("@vue/composition-api"));
  else if (typeof define === "function" && define.amd)
    define(["@vue/composition-api"], factory);
  else if (typeof exports === "object")
    exports["i18n"] = factory(require("@vue/composition-api"));
  else root["i18n"] = factory(root["@vue/composition-api"]);
})(
  typeof self !== "undefined" ? self : this,
  function (__WEBPACK_EXTERNAL_MODULE__8165__) {
    return /******/ (function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/ var installedModules = {};
      /******/
      /******/ // The require function
      /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
          /******/ return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (installedModules[moduleId] = {
          /******/ i: moduleId,
          /******/ l: false,
          /******/ exports: {},
          /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        );
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/ __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/ __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
          /******/ Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter,
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          });
          /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
          mode & 4 &&
          typeof value === "object" &&
          value &&
          value.__esModule
        )
          return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, "default", {
          enumerable: true,
          value: value,
        });
        /******/ if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(
              ns,
              key,
              function (key) {
                return value[key];
              }.bind(null, key)
            );
        /******/ return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
          module && module.__esModule
            ? /******/ function getDefault() {
                return module["default"];
              }
            : /******/ function getModuleExports() {
                return module;
              };
        /******/ __webpack_require__.d(getter, "a", getter);
        /******/ return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/ __webpack_require__.p = "";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/ return __webpack_require__((__webpack_require__.s = "fae3"));
      /******/
    })(
      /************************************************************************/
      /******/ {
        /***/ "00ee": /***/ function (module, exports, __webpack_require__) {
          var wellKnownSymbol = __webpack_require__("b622");

          var TO_STRING_TAG = wellKnownSymbol("toStringTag");
          var test = {};

          test[TO_STRING_TAG] = "z";

          module.exports = String(test) === "[object z]";

          /***/
        },

        /***/ "06cf": /***/ function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__("83ab");
          var propertyIsEnumerableModule = __webpack_require__("d1e7");
          var createPropertyDescriptor = __webpack_require__("5c6c");
          var toIndexedObject = __webpack_require__("fc6a");
          var toPrimitive = __webpack_require__("c04e");
          var has = __webpack_require__("5135");
          var IE8_DOM_DEFINE = __webpack_require__("0cfb");

          var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

          // `Object.getOwnPropertyDescriptor` method
          // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
          exports.f = DESCRIPTORS
            ? nativeGetOwnPropertyDescriptor
            : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                  } catch (error) {
                    /* empty */
                  }
                if (has(O, P))
                  return createPropertyDescriptor(
                    !propertyIsEnumerableModule.f.call(O, P),
                    O[P]
                  );
              };

          /***/
        },

        /***/ "0cfb": /***/ function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__("83ab");
          var fails = __webpack_require__("d039");
          var createElement = __webpack_require__("cc12");

          // Thank's IE8 for his funny defineProperty
          module.exports =
            !DESCRIPTORS &&
            !fails(function () {
              return (
                Object.defineProperty(createElement("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a != 7
              );
            });

          /***/
        },

        /***/ 1276: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
          var isRegExp = __webpack_require__("44e7");
          var anObject = __webpack_require__("825a");
          var requireObjectCoercible = __webpack_require__("1d80");
          var speciesConstructor = __webpack_require__("4840");
          var advanceStringIndex = __webpack_require__("8aa5");
          var toLength = __webpack_require__("50c4");
          var callRegExpExec = __webpack_require__("14c3");
          var regexpExec = __webpack_require__("9263");
          var fails = __webpack_require__("d039");

          var arrayPush = [].push;
          var min = Math.min;
          var MAX_UINT32 = 0xffffffff;

          // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
          var SUPPORTS_Y = !fails(function () {
            return !RegExp(MAX_UINT32, "y");
          });

          // @@split logic
          fixRegExpWellKnownSymbolLogic(
            "split",
            2,
            function (SPLIT, nativeSplit, maybeCallNative) {
              var internalSplit;
              if (
                "abbc".split(/(b)*/)[1] == "c" ||
                "test".split(/(?:)/, -1).length != 4 ||
                "ab".split(/(?:ab)*/).length != 2 ||
                ".".split(/(.?)(.?)/).length != 4 ||
                ".".split(/()()/).length > 1 ||
                "".split(/.?/).length
              ) {
                // based on es5-shim implementation, need to rework it
                internalSplit = function (separator, limit) {
                  var string = String(requireObjectCoercible(this));
                  var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                  if (lim === 0) return [];
                  if (separator === undefined) return [string];
                  // If `separator` is not a regex, use native split
                  if (!isRegExp(separator)) {
                    return nativeSplit.call(string, separator, lim);
                  }
                  var output = [];
                  var flags =
                    (separator.ignoreCase ? "i" : "") +
                    (separator.multiline ? "m" : "") +
                    (separator.unicode ? "u" : "") +
                    (separator.sticky ? "y" : "");
                  var lastLastIndex = 0;
                  // Make `global` and avoid `lastIndex` issues by working with a copy
                  var separatorCopy = new RegExp(separator.source, flags + "g");
                  var match, lastIndex, lastLength;
                  while ((match = regexpExec.call(separatorCopy, string))) {
                    lastIndex = separatorCopy.lastIndex;
                    if (lastIndex > lastLastIndex) {
                      output.push(string.slice(lastLastIndex, match.index));
                      if (match.length > 1 && match.index < string.length)
                        arrayPush.apply(output, match.slice(1));
                      lastLength = match[0].length;
                      lastLastIndex = lastIndex;
                      if (output.length >= lim) break;
                    }
                    if (separatorCopy.lastIndex === match.index)
                      separatorCopy.lastIndex++; // Avoid an infinite loop
                  }
                  if (lastLastIndex === string.length) {
                    if (lastLength || !separatorCopy.test("")) output.push("");
                  } else output.push(string.slice(lastLastIndex));
                  return output.length > lim ? output.slice(0, lim) : output;
                };
                // Chakra, V8
              } else if ("0".split(undefined, 0).length) {
                internalSplit = function (separator, limit) {
                  return separator === undefined && limit === 0
                    ? []
                    : nativeSplit.call(this, separator, limit);
                };
              } else internalSplit = nativeSplit;

              return [
                // `String.prototype.split` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.split
                function split(separator, limit) {
                  var O = requireObjectCoercible(this);
                  var splitter =
                    separator == undefined ? undefined : separator[SPLIT];
                  return splitter !== undefined
                    ? splitter.call(separator, O, limit)
                    : internalSplit.call(String(O), separator, limit);
                },
                // `RegExp.prototype[@@split]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                //
                // NOTE: This cannot be properly polyfilled in engines that don't support
                // the 'y' flag.
                function (regexp, limit) {
                  var res = maybeCallNative(
                    internalSplit,
                    regexp,
                    this,
                    limit,
                    internalSplit !== nativeSplit
                  );
                  if (res.done) return res.value;

                  var rx = anObject(regexp);
                  var S = String(this);
                  var C = speciesConstructor(rx, RegExp);

                  var unicodeMatching = rx.unicode;
                  var flags =
                    (rx.ignoreCase ? "i" : "") +
                    (rx.multiline ? "m" : "") +
                    (rx.unicode ? "u" : "") +
                    (SUPPORTS_Y ? "y" : "g");

                  // ^(? + rx + ) is needed, in combination with some S slicing, to
                  // simulate the 'y' flag.
                  var splitter = new C(
                    SUPPORTS_Y ? rx : "^(?:" + rx.source + ")",
                    flags
                  );
                  var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                  if (lim === 0) return [];
                  if (S.length === 0)
                    return callRegExpExec(splitter, S) === null ? [S] : [];
                  var p = 0;
                  var q = 0;
                  var A = [];
                  while (q < S.length) {
                    splitter.lastIndex = SUPPORTS_Y ? q : 0;
                    var z = callRegExpExec(
                      splitter,
                      SUPPORTS_Y ? S : S.slice(q)
                    );
                    var e;
                    if (
                      z === null ||
                      (e = min(
                        toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)),
                        S.length
                      )) === p
                    ) {
                      q = advanceStringIndex(S, q, unicodeMatching);
                    } else {
                      A.push(S.slice(p, q));
                      if (A.length === lim) return A;
                      for (var i = 1; i <= z.length - 1; i++) {
                        A.push(z[i]);
                        if (A.length === lim) return A;
                      }
                      q = p = e;
                    }
                  }
                  A.push(S.slice(p));
                  return A;
                },
              ];
            },
            !SUPPORTS_Y
          );

          /***/
        },

        /***/ "13d5": /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var $ = __webpack_require__("23e7");
          var $reduce = __webpack_require__("d58f").left;
          var arrayMethodIsStrict = __webpack_require__("a640");
          var arrayMethodUsesToLength = __webpack_require__("ae40");

          var STRICT_METHOD = arrayMethodIsStrict("reduce");
          var USES_TO_LENGTH = arrayMethodUsesToLength("reduce", { 1: 0 });

          // `Array.prototype.reduce` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
          $(
            {
              target: "Array",
              proto: true,
              forced: !STRICT_METHOD || !USES_TO_LENGTH,
            },
            {
              reduce: function reduce(callbackfn /* , initialValue */) {
                return $reduce(
                  this,
                  callbackfn,
                  arguments.length,
                  arguments.length > 1 ? arguments[1] : undefined
                );
              },
            }
          );

          /***/
        },

        /***/ "14c3": /***/ function (module, exports, __webpack_require__) {
          var classof = __webpack_require__("c6b6");
          var regexpExec = __webpack_require__("9263");

          // `RegExpExec` abstract operation
          // https://tc39.github.io/ecma262/#sec-regexpexec
          module.exports = function (R, S) {
            var exec = R.exec;
            if (typeof exec === "function") {
              var result = exec.call(R, S);
              if (typeof result !== "object") {
                throw TypeError(
                  "RegExp exec method returned something other than an Object or null"
                );
              }
              return result;
            }

            if (classof(R) !== "RegExp") {
              throw TypeError("RegExp#exec called on incompatible receiver");
            }

            return regexpExec.call(R, S);
          };

          /***/
        },

        /***/ "1c0b": /***/ function (module, exports) {
          module.exports = function (it) {
            if (typeof it != "function") {
              throw TypeError(String(it) + " is not a function");
            }
            return it;
          };

          /***/
        },

        /***/ "1d80": /***/ function (module, exports) {
          // `RequireObjectCoercible` abstract operation
          // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
          module.exports = function (it) {
            if (it == undefined) throw TypeError("Can't call method on " + it);
            return it;
          };

          /***/
        },

        /***/ "1dde": /***/ function (module, exports, __webpack_require__) {
          var fails = __webpack_require__("d039");
          var wellKnownSymbol = __webpack_require__("b622");
          var V8_VERSION = __webpack_require__("2d00");

          var SPECIES = wellKnownSymbol("species");

          module.exports = function (METHOD_NAME) {
            // We can't use this feature detection in V8 since it causes
            // deoptimization and serious performance degradation
            // https://github.com/zloirock/core-js/issues/677
            return (
              V8_VERSION >= 51 ||
              !fails(function () {
                var array = [];
                var constructor = (array.constructor = {});
                constructor[SPECIES] = function () {
                  return { foo: 1 };
                };
                return array[METHOD_NAME](Boolean).foo !== 1;
              })
            );
          };

          /***/
        },

        /***/ "23cb": /***/ function (module, exports, __webpack_require__) {
          var toInteger = __webpack_require__("a691");

          var max = Math.max;
          var min = Math.min;

          // Helper for a popular repeating case of the spec:
          // Let integer be ? ToInteger(index).
          // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
          module.exports = function (index, length) {
            var integer = toInteger(index);
            return integer < 0
              ? max(integer + length, 0)
              : min(integer, length);
          };

          /***/
        },

        /***/ "23e7": /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
          var createNonEnumerableProperty = __webpack_require__("9112");
          var redefine = __webpack_require__("6eeb");
          var setGlobal = __webpack_require__("ce4e");
          var copyConstructorProperties = __webpack_require__("e893");
          var isForced = __webpack_require__("94ca");

          /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
          module.exports = function (options, source) {
            var TARGET = options.target;
            var GLOBAL = options.global;
            var STATIC = options.stat;
            var FORCED, target, key, targetProperty, sourceProperty, descriptor;
            if (GLOBAL) {
              target = global;
            } else if (STATIC) {
              target = global[TARGET] || setGlobal(TARGET, {});
            } else {
              target = (global[TARGET] || {}).prototype;
            }
            if (target)
              for (key in source) {
                sourceProperty = source[key];
                if (options.noTargetGet) {
                  descriptor = getOwnPropertyDescriptor(target, key);
                  targetProperty = descriptor && descriptor.value;
                } else targetProperty = target[key];
                FORCED = isForced(
                  GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key,
                  options.forced
                );
                // contained in target
                if (!FORCED && targetProperty !== undefined) {
                  if (typeof sourceProperty === typeof targetProperty) continue;
                  copyConstructorProperties(sourceProperty, targetProperty);
                }
                // add a flag to not completely full polyfills
                if (options.sham || (targetProperty && targetProperty.sham)) {
                  createNonEnumerableProperty(sourceProperty, "sham", true);
                }
                // extend global
                redefine(target, key, sourceProperty, options);
              }
          };

          /***/
        },

        /***/ "241c": /***/ function (module, exports, __webpack_require__) {
          var internalObjectKeys = __webpack_require__("ca84");
          var enumBugKeys = __webpack_require__("7839");

          var hiddenKeys = enumBugKeys.concat("length", "prototype");

          // `Object.getOwnPropertyNames` method
          // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
          exports.f =
            Object.getOwnPropertyNames ||
            function getOwnPropertyNames(O) {
              return internalObjectKeys(O, hiddenKeys);
            };

          /***/
        },

        /***/ "25f0": /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var redefine = __webpack_require__("6eeb");
          var anObject = __webpack_require__("825a");
          var fails = __webpack_require__("d039");
          var flags = __webpack_require__("ad6d");

          var TO_STRING = "toString";
          var RegExpPrototype = RegExp.prototype;
          var nativeToString = RegExpPrototype[TO_STRING];

          var NOT_GENERIC = fails(function () {
            return nativeToString.call({ source: "a", flags: "b" }) != "/a/b";
          });
          // FF44- RegExp#toString has a wrong name
          var INCORRECT_NAME = nativeToString.name != TO_STRING;

          // `RegExp.prototype.toString` method
          // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
          if (NOT_GENERIC || INCORRECT_NAME) {
            redefine(
              RegExp.prototype,
              TO_STRING,
              function toString() {
                var R = anObject(this);
                var p = String(R.source);
                var rf = R.flags;
                var f = String(
                  rf === undefined &&
                    R instanceof RegExp &&
                    !("flags" in RegExpPrototype)
                    ? flags.call(R)
                    : rf
                );
                return "/" + p + "/" + f;
              },
              { unsafe: true }
            );
          }

          /***/
        },

        /***/ 2626: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var getBuiltIn = __webpack_require__("d066");
          var definePropertyModule = __webpack_require__("9bf2");
          var wellKnownSymbol = __webpack_require__("b622");
          var DESCRIPTORS = __webpack_require__("83ab");

          var SPECIES = wellKnownSymbol("species");

          module.exports = function (CONSTRUCTOR_NAME) {
            var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
            var defineProperty = definePropertyModule.f;

            if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
              defineProperty(Constructor, SPECIES, {
                configurable: true,
                get: function () {
                  return this;
                },
              });
            }
          };

          /***/
        },

        /***/ "2d00": /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var userAgent = __webpack_require__("342f");

          var process = global.process;
          var versions = process && process.versions;
          var v8 = versions && versions.v8;
          var match, version;

          if (v8) {
            match = v8.split(".");
            version = match[0] + match[1];
          } else if (userAgent) {
            match = userAgent.match(/Edge\/(\d+)/);
            if (!match || match[1] >= 74) {
              match = userAgent.match(/Chrome\/(\d+)/);
              if (match) version = match[1];
            }
          }

          module.exports = version && +version;

          /***/
        },

        /***/ "342f": /***/ function (module, exports, __webpack_require__) {
          var getBuiltIn = __webpack_require__("d066");

          module.exports = getBuiltIn("navigator", "userAgent") || "";

          /***/
        },

        /***/ "3bbe": /***/ function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__("861d");

          module.exports = function (it) {
            if (!isObject(it) && it !== null) {
              throw TypeError("Can't set " + String(it) + " as a prototype");
            }
            return it;
          };

          /***/
        },

        /***/ "428f": /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");

          module.exports = global;

          /***/
        },

        /***/ "44ad": /***/ function (module, exports, __webpack_require__) {
          var fails = __webpack_require__("d039");
          var classof = __webpack_require__("c6b6");

          var split = "".split;

          // fallback for non-array-like ES3 and non-enumerable old V8 strings
          module.exports = fails(function () {
            // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
            // eslint-disable-next-line no-prototype-builtins
            return !Object("z").propertyIsEnumerable(0);
          })
            ? function (it) {
                return classof(it) == "String"
                  ? split.call(it, "")
                  : Object(it);
              }
            : Object;

          /***/
        },

        /***/ "44e7": /***/ function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__("861d");
          var classof = __webpack_require__("c6b6");
          var wellKnownSymbol = __webpack_require__("b622");

          var MATCH = wellKnownSymbol("match");

          // `IsRegExp` abstract operation
          // https://tc39.github.io/ecma262/#sec-isregexp
          module.exports = function (it) {
            var isRegExp;
            return (
              isObject(it) &&
              ((isRegExp = it[MATCH]) !== undefined
                ? !!isRegExp
                : classof(it) == "RegExp")
            );
          };

          /***/
        },

        /***/ 4840: /***/ function (module, exports, __webpack_require__) {
          var anObject = __webpack_require__("825a");
          var aFunction = __webpack_require__("1c0b");
          var wellKnownSymbol = __webpack_require__("b622");

          var SPECIES = wellKnownSymbol("species");

          // `SpeciesConstructor` abstract operation
          // https://tc39.github.io/ecma262/#sec-speciesconstructor
          module.exports = function (O, defaultConstructor) {
            var C = anObject(O).constructor;
            var S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined
              ? defaultConstructor
              : aFunction(S);
          };

          /***/
        },

        /***/ 4930: /***/ function (module, exports, __webpack_require__) {
          var fails = __webpack_require__("d039");

          module.exports =
            !!Object.getOwnPropertySymbols &&
            !fails(function () {
              // Chrome 38 Symbol has incorrect toString conversion
              // eslint-disable-next-line no-undef
              return !String(Symbol());
            });

          /***/
        },

        /***/ "4d63": /***/ function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__("83ab");
          var global = __webpack_require__("da84");
          var isForced = __webpack_require__("94ca");
          var inheritIfRequired = __webpack_require__("7156");
          var defineProperty = __webpack_require__("9bf2").f;
          var getOwnPropertyNames = __webpack_require__("241c").f;
          var isRegExp = __webpack_require__("44e7");
          var getFlags = __webpack_require__("ad6d");
          var stickyHelpers = __webpack_require__("9f7f");
          var redefine = __webpack_require__("6eeb");
          var fails = __webpack_require__("d039");
          var setInternalState = __webpack_require__("69f3").set;
          var setSpecies = __webpack_require__("2626");
          var wellKnownSymbol = __webpack_require__("b622");

          var MATCH = wellKnownSymbol("match");
          var NativeRegExp = global.RegExp;
          var RegExpPrototype = NativeRegExp.prototype;
          var re1 = /a/g;
          var re2 = /a/g;

          // "new" should create a new object, old webkit bug
          var CORRECT_NEW = new NativeRegExp(re1) !== re1;

          var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

          var FORCED =
            DESCRIPTORS &&
            isForced(
              "RegExp",
              !CORRECT_NEW ||
                UNSUPPORTED_Y ||
                fails(function () {
                  re2[MATCH] = false;
                  // RegExp constructor can alter flags and IsRegExp works correct with @@match
                  return (
                    NativeRegExp(re1) != re1 ||
                    NativeRegExp(re2) == re2 ||
                    NativeRegExp(re1, "i") != "/a/i"
                  );
                })
            );

          // `RegExp` constructor
          // https://tc39.github.io/ecma262/#sec-regexp-constructor
          if (FORCED) {
            var RegExpWrapper = function RegExp(pattern, flags) {
              var thisIsRegExp = this instanceof RegExpWrapper;
              var patternIsRegExp = isRegExp(pattern);
              var flagsAreUndefined = flags === undefined;
              var sticky;

              if (
                !thisIsRegExp &&
                patternIsRegExp &&
                pattern.constructor === RegExpWrapper &&
                flagsAreUndefined
              ) {
                return pattern;
              }

              if (CORRECT_NEW) {
                if (patternIsRegExp && !flagsAreUndefined)
                  pattern = pattern.source;
              } else if (pattern instanceof RegExpWrapper) {
                if (flagsAreUndefined) flags = getFlags.call(pattern);
                pattern = pattern.source;
              }

              if (UNSUPPORTED_Y) {
                sticky = !!flags && flags.indexOf("y") > -1;
                if (sticky) flags = flags.replace(/y/g, "");
              }

              var result = inheritIfRequired(
                CORRECT_NEW
                  ? new NativeRegExp(pattern, flags)
                  : NativeRegExp(pattern, flags),
                thisIsRegExp ? this : RegExpPrototype,
                RegExpWrapper
              );

              if (UNSUPPORTED_Y && sticky)
                setInternalState(result, { sticky: sticky });

              return result;
            };
            var proxy = function (key) {
              key in RegExpWrapper ||
                defineProperty(RegExpWrapper, key, {
                  configurable: true,
                  get: function () {
                    return NativeRegExp[key];
                  },
                  set: function (it) {
                    NativeRegExp[key] = it;
                  },
                });
            };
            var keys = getOwnPropertyNames(NativeRegExp);
            var index = 0;
            while (keys.length > index) proxy(keys[index++]);
            RegExpPrototype.constructor = RegExpWrapper;
            RegExpWrapper.prototype = RegExpPrototype;
            redefine(global, "RegExp", RegExpWrapper);
          }

          // https://tc39.github.io/ecma262/#sec-get-regexp-@@species
          setSpecies("RegExp");

          /***/
        },

        /***/ "4d64": /***/ function (module, exports, __webpack_require__) {
          var toIndexedObject = __webpack_require__("fc6a");
          var toLength = __webpack_require__("50c4");
          var toAbsoluteIndex = __webpack_require__("23cb");

          // `Array.prototype.{ indexOf, includes }` methods implementation
          var createMethod = function (IS_INCLUDES) {
            return function ($this, el, fromIndex) {
              var O = toIndexedObject($this);
              var length = toLength(O.length);
              var index = toAbsoluteIndex(fromIndex, length);
              var value;
              // Array#includes uses SameValueZero equality algorithm
              // eslint-disable-next-line no-self-compare
              if (IS_INCLUDES && el != el)
                while (length > index) {
                  value = O[index++];
                  // eslint-disable-next-line no-self-compare
                  if (value != value) return true;
                  // Array#indexOf ignores holes, Array#includes - not
                }
              else
                for (; length > index; index++) {
                  if ((IS_INCLUDES || index in O) && O[index] === el)
                    return IS_INCLUDES || index || 0;
                }
              return !IS_INCLUDES && -1;
            };
          };

          module.exports = {
            // `Array.prototype.includes` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            includes: createMethod(true),
            // `Array.prototype.indexOf` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            indexOf: createMethod(false),
          };

          /***/
        },

        /***/ "4fad": /***/ function (module, exports, __webpack_require__) {
          var $ = __webpack_require__("23e7");
          var $entries = __webpack_require__("6f53").entries;

          // `Object.entries` method
          // https://tc39.github.io/ecma262/#sec-object.entries
          $(
            { target: "Object", stat: true },
            {
              entries: function entries(O) {
                return $entries(O);
              },
            }
          );

          /***/
        },

        /***/ "50c4": /***/ function (module, exports, __webpack_require__) {
          var toInteger = __webpack_require__("a691");

          var min = Math.min;

          // `ToLength` abstract operation
          // https://tc39.github.io/ecma262/#sec-tolength
          module.exports = function (argument) {
            return argument > 0
              ? min(toInteger(argument), 0x1fffffffffffff)
              : 0; // 2 ** 53 - 1 == 9007199254740991
          };

          /***/
        },

        /***/ 5135: /***/ function (module, exports) {
          var hasOwnProperty = {}.hasOwnProperty;

          module.exports = function (it, key) {
            return hasOwnProperty.call(it, key);
          };

          /***/
        },

        /***/ 5319: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
          var anObject = __webpack_require__("825a");
          var toObject = __webpack_require__("7b0b");
          var toLength = __webpack_require__("50c4");
          var toInteger = __webpack_require__("a691");
          var requireObjectCoercible = __webpack_require__("1d80");
          var advanceStringIndex = __webpack_require__("8aa5");
          var regExpExec = __webpack_require__("14c3");

          var max = Math.max;
          var min = Math.min;
          var floor = Math.floor;
          var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
          var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

          var maybeToString = function (it) {
            return it === undefined ? it : String(it);
          };

          // @@replace logic
          fixRegExpWellKnownSymbolLogic(
            "replace",
            2,
            function (REPLACE, nativeReplace, maybeCallNative, reason) {
              var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE =
                reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
              var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
              var UNSAFE_SUBSTITUTE =
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";

              return [
                // `String.prototype.replace` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                function replace(searchValue, replaceValue) {
                  var O = requireObjectCoercible(this);
                  var replacer =
                    searchValue == undefined ? undefined : searchValue[REPLACE];
                  return replacer !== undefined
                    ? replacer.call(searchValue, O, replaceValue)
                    : nativeReplace.call(String(O), searchValue, replaceValue);
                },
                // `RegExp.prototype[@@replace]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                function (regexp, replaceValue) {
                  if (
                    (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE &&
                      REPLACE_KEEPS_$0) ||
                    (typeof replaceValue === "string" &&
                      replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
                  ) {
                    var res = maybeCallNative(
                      nativeReplace,
                      regexp,
                      this,
                      replaceValue
                    );
                    if (res.done) return res.value;
                  }

                  var rx = anObject(regexp);
                  var S = String(this);

                  var functionalReplace = typeof replaceValue === "function";
                  if (!functionalReplace) replaceValue = String(replaceValue);

                  var global = rx.global;
                  if (global) {
                    var fullUnicode = rx.unicode;
                    rx.lastIndex = 0;
                  }
                  var results = [];
                  while (true) {
                    var result = regExpExec(rx, S);
                    if (result === null) break;

                    results.push(result);
                    if (!global) break;

                    var matchStr = String(result[0]);
                    if (matchStr === "")
                      rx.lastIndex = advanceStringIndex(
                        S,
                        toLength(rx.lastIndex),
                        fullUnicode
                      );
                  }

                  var accumulatedResult = "";
                  var nextSourcePosition = 0;
                  for (var i = 0; i < results.length; i++) {
                    result = results[i];

                    var matched = String(result[0]);
                    var position = max(
                      min(toInteger(result.index), S.length),
                      0
                    );
                    var captures = [];
                    // NOTE: This is equivalent to
                    //   captures = result.slice(1).map(maybeToString)
                    // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                    // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                    // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                    for (var j = 1; j < result.length; j++)
                      captures.push(maybeToString(result[j]));
                    var namedCaptures = result.groups;
                    if (functionalReplace) {
                      var replacerArgs = [matched].concat(
                        captures,
                        position,
                        S
                      );
                      if (namedCaptures !== undefined)
                        replacerArgs.push(namedCaptures);
                      var replacement = String(
                        replaceValue.apply(undefined, replacerArgs)
                      );
                    } else {
                      replacement = getSubstitution(
                        matched,
                        S,
                        position,
                        captures,
                        namedCaptures,
                        replaceValue
                      );
                    }
                    if (position >= nextSourcePosition) {
                      accumulatedResult +=
                        S.slice(nextSourcePosition, position) + replacement;
                      nextSourcePosition = position + matched.length;
                    }
                  }
                  return accumulatedResult + S.slice(nextSourcePosition);
                },
              ];

              // https://tc39.github.io/ecma262/#sec-getsubstitution
              function getSubstitution(
                matched,
                str,
                position,
                captures,
                namedCaptures,
                replacement
              ) {
                var tailPos = position + matched.length;
                var m = captures.length;
                var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                if (namedCaptures !== undefined) {
                  namedCaptures = toObject(namedCaptures);
                  symbols = SUBSTITUTION_SYMBOLS;
                }
                return nativeReplace.call(
                  replacement,
                  symbols,
                  function (match, ch) {
                    var capture;
                    switch (ch.charAt(0)) {
                      case "$":
                        return "$";
                      case "&":
                        return matched;
                      case "`":
                        return str.slice(0, position);
                      case "'":
                        return str.slice(tailPos);
                      case "<":
                        capture = namedCaptures[ch.slice(1, -1)];
                        break;
                      default: // \d\d?
                        var n = +ch;
                        if (n === 0) return match;
                        if (n > m) {
                          var f = floor(n / 10);
                          if (f === 0) return match;
                          if (f <= m)
                            return captures[f - 1] === undefined
                              ? ch.charAt(1)
                              : captures[f - 1] + ch.charAt(1);
                          return match;
                        }
                        capture = captures[n - 1];
                    }
                    return capture === undefined ? "" : capture;
                  }
                );
              }
            }
          );

          /***/
        },

        /***/ 5692: /***/ function (module, exports, __webpack_require__) {
          var IS_PURE = __webpack_require__("c430");
          var store = __webpack_require__("c6cd");

          (module.exports = function (key, value) {
            return (
              store[key] || (store[key] = value !== undefined ? value : {})
            );
          })("versions", []).push({
            version: "3.6.5",
            mode: IS_PURE ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
          });

          /***/
        },

        /***/ "56ef": /***/ function (module, exports, __webpack_require__) {
          var getBuiltIn = __webpack_require__("d066");
          var getOwnPropertyNamesModule = __webpack_require__("241c");
          var getOwnPropertySymbolsModule = __webpack_require__("7418");
          var anObject = __webpack_require__("825a");

          // all object keys, includes non-enumerable and symbols
          module.exports =
            getBuiltIn("Reflect", "ownKeys") ||
            function ownKeys(it) {
              var keys = getOwnPropertyNamesModule.f(anObject(it));
              var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
              return getOwnPropertySymbols
                ? keys.concat(getOwnPropertySymbols(it))
                : keys;
            };

          /***/
        },

        /***/ "5c6c": /***/ function (module, exports) {
          module.exports = function (bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value,
            };
          };

          /***/
        },

        /***/ "60da": /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var DESCRIPTORS = __webpack_require__("83ab");
          var fails = __webpack_require__("d039");
          var objectKeys = __webpack_require__("df75");
          var getOwnPropertySymbolsModule = __webpack_require__("7418");
          var propertyIsEnumerableModule = __webpack_require__("d1e7");
          var toObject = __webpack_require__("7b0b");
          var IndexedObject = __webpack_require__("44ad");

          var nativeAssign = Object.assign;
          var defineProperty = Object.defineProperty;

          // `Object.assign` method
          // https://tc39.github.io/ecma262/#sec-object.assign
          module.exports =
            !nativeAssign ||
            fails(function () {
              // should have correct order of operations (Edge bug)
              if (
                DESCRIPTORS &&
                nativeAssign(
                  { b: 1 },
                  nativeAssign(
                    defineProperty({}, "a", {
                      enumerable: true,
                      get: function () {
                        defineProperty(this, "b", {
                          value: 3,
                          enumerable: false,
                        });
                      },
                    }),
                    { b: 2 }
                  )
                ).b !== 1
              )
                return true;
              // should work with symbols and should have deterministic property order (V8 bug)
              var A = {};
              var B = {};
              // eslint-disable-next-line no-undef
              var symbol = Symbol();
              var alphabet = "abcdefghijklmnopqrst";
              A[symbol] = 7;
              alphabet.split("").forEach(function (chr) {
                B[chr] = chr;
              });
              return (
                nativeAssign({}, A)[symbol] != 7 ||
                objectKeys(nativeAssign({}, B)).join("") != alphabet
              );
            })
              ? function assign(target, source) {
                  // eslint-disable-line no-unused-vars
                  var T = toObject(target);
                  var argumentsLength = arguments.length;
                  var index = 1;
                  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                  var propertyIsEnumerable = propertyIsEnumerableModule.f;
                  while (argumentsLength > index) {
                    var S = IndexedObject(arguments[index++]);
                    var keys = getOwnPropertySymbols
                      ? objectKeys(S).concat(getOwnPropertySymbols(S))
                      : objectKeys(S);
                    var length = keys.length;
                    var j = 0;
                    var key;
                    while (length > j) {
                      key = keys[j++];
                      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
                        T[key] = S[key];
                    }
                  }
                  return T;
                }
              : nativeAssign;

          /***/
        },

        /***/ 6547: /***/ function (module, exports, __webpack_require__) {
          var toInteger = __webpack_require__("a691");
          var requireObjectCoercible = __webpack_require__("1d80");

          // `String.prototype.{ codePointAt, at }` methods implementation
          var createMethod = function (CONVERT_TO_STRING) {
            return function ($this, pos) {
              var S = String(requireObjectCoercible($this));
              var position = toInteger(pos);
              var size = S.length;
              var first, second;
              if (position < 0 || position >= size)
                return CONVERT_TO_STRING ? "" : undefined;
              first = S.charCodeAt(position);
              return first < 0xd800 ||
                first > 0xdbff ||
                position + 1 === size ||
                (second = S.charCodeAt(position + 1)) < 0xdc00 ||
                second > 0xdfff
                ? CONVERT_TO_STRING
                  ? S.charAt(position)
                  : first
                : CONVERT_TO_STRING
                ? S.slice(position, position + 2)
                : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
            };
          };

          module.exports = {
            // `String.prototype.codePointAt` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
            codeAt: createMethod(false),
            // `String.prototype.at` method
            // https://github.com/mathiasbynens/String.prototype.at
            charAt: createMethod(true),
          };

          /***/
        },

        /***/ "65f0": /***/ function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__("861d");
          var isArray = __webpack_require__("e8b5");
          var wellKnownSymbol = __webpack_require__("b622");

          var SPECIES = wellKnownSymbol("species");

          // `ArraySpeciesCreate` abstract operation
          // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
          module.exports = function (originalArray, length) {
            var C;
            if (isArray(originalArray)) {
              C = originalArray.constructor;
              // cross-realm fallback
              if (
                typeof C == "function" &&
                (C === Array || isArray(C.prototype))
              )
                C = undefined;
              else if (isObject(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
              }
            }
            return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
          };

          /***/
        },

        /***/ "69f3": /***/ function (module, exports, __webpack_require__) {
          var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
          var global = __webpack_require__("da84");
          var isObject = __webpack_require__("861d");
          var createNonEnumerableProperty = __webpack_require__("9112");
          var objectHas = __webpack_require__("5135");
          var sharedKey = __webpack_require__("f772");
          var hiddenKeys = __webpack_require__("d012");

          var WeakMap = global.WeakMap;
          var set, get, has;

          var enforce = function (it) {
            return has(it) ? get(it) : set(it, {});
          };

          var getterFor = function (TYPE) {
            return function (it) {
              var state;
              if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw TypeError("Incompatible receiver, " + TYPE + " required");
              }
              return state;
            };
          };

          if (NATIVE_WEAK_MAP) {
            var store = new WeakMap();
            var wmget = store.get;
            var wmhas = store.has;
            var wmset = store.set;
            set = function (it, metadata) {
              wmset.call(store, it, metadata);
              return metadata;
            };
            get = function (it) {
              return wmget.call(store, it) || {};
            };
            has = function (it) {
              return wmhas.call(store, it);
            };
          } else {
            var STATE = sharedKey("state");
            hiddenKeys[STATE] = true;
            set = function (it, metadata) {
              createNonEnumerableProperty(it, STATE, metadata);
              return metadata;
            };
            get = function (it) {
              return objectHas(it, STATE) ? it[STATE] : {};
            };
            has = function (it) {
              return objectHas(it, STATE);
            };
          }

          module.exports = {
            set: set,
            get: get,
            has: has,
            enforce: enforce,
            getterFor: getterFor,
          };

          /***/
        },

        /***/ "6eeb": /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var createNonEnumerableProperty = __webpack_require__("9112");
          var has = __webpack_require__("5135");
          var setGlobal = __webpack_require__("ce4e");
          var inspectSource = __webpack_require__("8925");
          var InternalStateModule = __webpack_require__("69f3");

          var getInternalState = InternalStateModule.get;
          var enforceInternalState = InternalStateModule.enforce;
          var TEMPLATE = String(String).split("String");

          (module.exports = function (O, key, value, options) {
            var unsafe = options ? !!options.unsafe : false;
            var simple = options ? !!options.enumerable : false;
            var noTargetGet = options ? !!options.noTargetGet : false;
            if (typeof value == "function") {
              if (typeof key == "string" && !has(value, "name"))
                createNonEnumerableProperty(value, "name", key);
              enforceInternalState(value).source = TEMPLATE.join(
                typeof key == "string" ? key : ""
              );
            }
            if (O === global) {
              if (simple) O[key] = value;
              else setGlobal(key, value);
              return;
            } else if (!unsafe) {
              delete O[key];
            } else if (!noTargetGet && O[key]) {
              simple = true;
            }
            if (simple) O[key] = value;
            else createNonEnumerableProperty(O, key, value);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
          })(Function.prototype, "toString", function toString() {
            return (
              (typeof this == "function" && getInternalState(this).source) ||
              inspectSource(this)
            );
          });

          /***/
        },

        /***/ "6f53": /***/ function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__("83ab");
          var objectKeys = __webpack_require__("df75");
          var toIndexedObject = __webpack_require__("fc6a");
          var propertyIsEnumerable = __webpack_require__("d1e7").f;

          // `Object.{ entries, values }` methods implementation
          var createMethod = function (TO_ENTRIES) {
            return function (it) {
              var O = toIndexedObject(it);
              var keys = objectKeys(O);
              var length = keys.length;
              var i = 0;
              var result = [];
              var key;
              while (length > i) {
                key = keys[i++];
                if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
                  result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
                }
              }
              return result;
            };
          };

          module.exports = {
            // `Object.entries` method
            // https://tc39.github.io/ecma262/#sec-object.entries
            entries: createMethod(true),
            // `Object.values` method
            // https://tc39.github.io/ecma262/#sec-object.values
            values: createMethod(false),
          };

          /***/
        },

        /***/ 7156: /***/ function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__("861d");
          var setPrototypeOf = __webpack_require__("d2bb");

          // makes subclassing work correct for wrapped built-ins
          module.exports = function ($this, dummy, Wrapper) {
            var NewTarget, NewTargetPrototype;
            if (
              // it can work only with native `setPrototypeOf`
              setPrototypeOf &&
              // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
              typeof (NewTarget = dummy.constructor) == "function" &&
              NewTarget !== Wrapper &&
              isObject((NewTargetPrototype = NewTarget.prototype)) &&
              NewTargetPrototype !== Wrapper.prototype
            )
              setPrototypeOf($this, NewTargetPrototype);
            return $this;
          };

          /***/
        },

        /***/ 7418: /***/ function (module, exports) {
          exports.f = Object.getOwnPropertySymbols;

          /***/
        },

        /***/ 7839: /***/ function (module, exports) {
          // IE8- don't enum bug keys
          module.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];

          /***/
        },

        /***/ "7b0b": /***/ function (module, exports, __webpack_require__) {
          var requireObjectCoercible = __webpack_require__("1d80");

          // `ToObject` abstract operation
          // https://tc39.github.io/ecma262/#sec-toobject
          module.exports = function (argument) {
            return Object(requireObjectCoercible(argument));
          };

          /***/
        },

        /***/ "7f9a": /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var inspectSource = __webpack_require__("8925");

          var WeakMap = global.WeakMap;

          module.exports =
            typeof WeakMap === "function" &&
            /native code/.test(inspectSource(WeakMap));

          /***/
        },

        /***/ 8165: /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE__8165__;

          /***/
        },

        /***/ "825a": /***/ function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__("861d");

          module.exports = function (it) {
            if (!isObject(it)) {
              throw TypeError(String(it) + " is not an object");
            }
            return it;
          };

          /***/
        },

        /***/ "83ab": /***/ function (module, exports, __webpack_require__) {
          var fails = __webpack_require__("d039");

          // Thank's IE8 for his funny defineProperty
          module.exports = !fails(function () {
            return (
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1] != 7
            );
          });

          /***/
        },

        /***/ 8418: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var toPrimitive = __webpack_require__("c04e");
          var definePropertyModule = __webpack_require__("9bf2");
          var createPropertyDescriptor = __webpack_require__("5c6c");

          module.exports = function (object, key, value) {
            var propertyKey = toPrimitive(key);
            if (propertyKey in object)
              definePropertyModule.f(
                object,
                propertyKey,
                createPropertyDescriptor(0, value)
              );
            else object[propertyKey] = value;
          };

          /***/
        },

        /***/ "861d": /***/ function (module, exports) {
          module.exports = function (it) {
            return typeof it === "object"
              ? it !== null
              : typeof it === "function";
          };

          /***/
        },

        /***/ 8875: /***/ function (module, exports, __webpack_require__) {
          var __WEBPACK_AMD_DEFINE_FACTORY__,
            __WEBPACK_AMD_DEFINE_ARRAY__,
            __WEBPACK_AMD_DEFINE_RESULT__; // addapted from the document.currentScript polyfill by Adam Miller
          // MIT license
          // source: https://github.com/amiller-gh/currentScript-polyfill

          // added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

          (function (root, factory) {
            if (true) {
              !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
              (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
              (__WEBPACK_AMD_DEFINE_RESULT__ =
                typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function"
                  ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                      exports,
                      __WEBPACK_AMD_DEFINE_ARRAY__
                    )
                  : __WEBPACK_AMD_DEFINE_FACTORY__),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
            } else {
            }
          })(typeof self !== "undefined" ? self : this, function () {
            function getCurrentScript() {
              const descriptor = Object.getOwnPropertyDescriptor(
                document,
                "currentScript"
              );
              // for chrome
              if (
                !descriptor &&
                "currentScript" in document &&
                document.currentScript
              ) {
                return document.currentScript;
              }

              // for other browsers with native support for currentScript
              if (
                descriptor &&
                descriptor.get !== getCurrentScript &&
                document.currentScript
              ) {
                return document.currentScript;
              }

              // IE 8-10 support script readyState
              // IE 11+ & Firefox support stack trace
              try {
                throw new Error();
              } catch (err) {
                // Find the second match for the "at" string to get file src url from stack.
                var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                  ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/gi,
                  stackDetails =
                    ieStackRegExp.exec(err.stack) ||
                    ffStackRegExp.exec(err.stack),
                  scriptLocation = (stackDetails && stackDetails[1]) || false,
                  line = (stackDetails && stackDetails[2]) || false,
                  currentLocation = document.location.href.replace(
                    document.location.hash,
                    ""
                  ),
                  pageSource,
                  inlineScriptSourceRegExp,
                  inlineScriptSource,
                  scripts = document.getElementsByTagName("script"); // Live NodeList collection

                if (scriptLocation === currentLocation) {
                  pageSource = document.documentElement.outerHTML;
                  inlineScriptSourceRegExp = new RegExp(
                    "(?:[^\\n]+?\\n){0," +
                      (line - 2) +
                      "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*",
                    "i"
                  );
                  inlineScriptSource = pageSource
                    .replace(inlineScriptSourceRegExp, "$1")
                    .trim();
                }

                for (var i = 0; i < scripts.length; i++) {
                  // If ready state is interactive, return the script tag
                  if (scripts[i].readyState === "interactive") {
                    return scripts[i];
                  }

                  // If src matches, return the script tag
                  if (scripts[i].src === scriptLocation) {
                    return scripts[i];
                  }

                  // If inline source matches, return the script tag
                  if (
                    scriptLocation === currentLocation &&
                    scripts[i].innerHTML &&
                    scripts[i].innerHTML.trim() === inlineScriptSource
                  ) {
                    return scripts[i];
                  }
                }

                // If no match, return null
                return null;
              }
            }

            return getCurrentScript;
          });

          /***/
        },

        /***/ 8925: /***/ function (module, exports, __webpack_require__) {
          var store = __webpack_require__("c6cd");

          var functionToString = Function.toString;

          // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
          if (typeof store.inspectSource != "function") {
            store.inspectSource = function (it) {
              return functionToString.call(it);
            };
          }

          module.exports = store.inspectSource;

          /***/
        },

        /***/ "8aa5": /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var charAt = __webpack_require__("6547").charAt;

          // `AdvanceStringIndex` abstract operation
          // https://tc39.github.io/ecma262/#sec-advancestringindex
          module.exports = function (S, index, unicode) {
            return index + (unicode ? charAt(S, index).length : 1);
          };

          /***/
        },

        /***/ "90e3": /***/ function (module, exports) {
          var id = 0;
          var postfix = Math.random();

          module.exports = function (key) {
            return (
              "Symbol(" +
              String(key === undefined ? "" : key) +
              ")_" +
              (++id + postfix).toString(36)
            );
          };

          /***/
        },

        /***/ 9112: /***/ function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__("83ab");
          var definePropertyModule = __webpack_require__("9bf2");
          var createPropertyDescriptor = __webpack_require__("5c6c");

          module.exports = DESCRIPTORS
            ? function (object, key, value) {
                return definePropertyModule.f(
                  object,
                  key,
                  createPropertyDescriptor(1, value)
                );
              }
            : function (object, key, value) {
                object[key] = value;
                return object;
              };

          /***/
        },

        /***/ 9263: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var regexpFlags = __webpack_require__("ad6d");
          var stickyHelpers = __webpack_require__("9f7f");

          var nativeExec = RegExp.prototype.exec;
          // This always refers to the native implementation, because the
          // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
          // which loads this file before patching the method.
          var nativeReplace = String.prototype.replace;

          var patchedExec = nativeExec;

          var UPDATES_LAST_INDEX_WRONG = (function () {
            var re1 = /a/;
            var re2 = /b*/g;
            nativeExec.call(re1, "a");
            nativeExec.call(re2, "a");
            return re1.lastIndex !== 0 || re2.lastIndex !== 0;
          })();

          var UNSUPPORTED_Y =
            stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

          // nonparticipating capturing group, copied from es5-shim's String#split patch.
          var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;

          var PATCH =
            UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

          if (PATCH) {
            patchedExec = function exec(str) {
              var re = this;
              var lastIndex, reCopy, match, i;
              var sticky = UNSUPPORTED_Y && re.sticky;
              var flags = regexpFlags.call(re);
              var source = re.source;
              var charsAdded = 0;
              var strCopy = str;

              if (sticky) {
                flags = flags.replace("y", "");
                if (flags.indexOf("g") === -1) {
                  flags += "g";
                }

                strCopy = String(str).slice(re.lastIndex);
                // Support anchored sticky behavior.
                if (
                  re.lastIndex > 0 &&
                  (!re.multiline ||
                    (re.multiline && str[re.lastIndex - 1] !== "\n"))
                ) {
                  source = "(?: " + source + ")";
                  strCopy = " " + strCopy;
                  charsAdded++;
                }
                // ^(? + rx + ) is needed, in combination with some str slicing, to
                // simulate the 'y' flag.
                reCopy = new RegExp("^(?:" + source + ")", flags);
              }

              if (NPCG_INCLUDED) {
                reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
              }
              if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

              match = nativeExec.call(sticky ? reCopy : re, strCopy);

              if (sticky) {
                if (match) {
                  match.input = match.input.slice(charsAdded);
                  match[0] = match[0].slice(charsAdded);
                  match.index = re.lastIndex;
                  re.lastIndex += match[0].length;
                } else re.lastIndex = 0;
              } else if (UPDATES_LAST_INDEX_WRONG && match) {
                re.lastIndex = re.global
                  ? match.index + match[0].length
                  : lastIndex;
              }
              if (NPCG_INCLUDED && match && match.length > 1) {
                // Fix browsers whose `exec` methods don't consistently return `undefined`
                // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                nativeReplace.call(match[0], reCopy, function () {
                  for (i = 1; i < arguments.length - 2; i++) {
                    if (arguments[i] === undefined) match[i] = undefined;
                  }
                });
              }

              return match;
            };
          }

          module.exports = patchedExec;

          /***/
        },

        /***/ "94ca": /***/ function (module, exports, __webpack_require__) {
          var fails = __webpack_require__("d039");

          var replacement = /#|\.prototype\./;

          var isForced = function (feature, detection) {
            var value = data[normalize(feature)];
            return value == POLYFILL
              ? true
              : value == NATIVE
              ? false
              : typeof detection == "function"
              ? fails(detection)
              : !!detection;
          };

          var normalize = (isForced.normalize = function (string) {
            return String(string).replace(replacement, ".").toLowerCase();
          });

          var data = (isForced.data = {});
          var NATIVE = (isForced.NATIVE = "N");
          var POLYFILL = (isForced.POLYFILL = "P");

          module.exports = isForced;

          /***/
        },

        /***/ "99af": /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var $ = __webpack_require__("23e7");
          var fails = __webpack_require__("d039");
          var isArray = __webpack_require__("e8b5");
          var isObject = __webpack_require__("861d");
          var toObject = __webpack_require__("7b0b");
          var toLength = __webpack_require__("50c4");
          var createProperty = __webpack_require__("8418");
          var arraySpeciesCreate = __webpack_require__("65f0");
          var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
          var wellKnownSymbol = __webpack_require__("b622");
          var V8_VERSION = __webpack_require__("2d00");

          var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
          var MAX_SAFE_INTEGER = 0x1fffffffffffff;
          var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";

          // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/679
          var IS_CONCAT_SPREADABLE_SUPPORT =
            V8_VERSION >= 51 ||
            !fails(function () {
              var array = [];
              array[IS_CONCAT_SPREADABLE] = false;
              return array.concat()[0] !== array;
            });

          var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");

          var isConcatSpreadable = function (O) {
            if (!isObject(O)) return false;
            var spreadable = O[IS_CONCAT_SPREADABLE];
            return spreadable !== undefined ? !!spreadable : isArray(O);
          };

          var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

          // `Array.prototype.concat` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.concat
          // with adding support of @@isConcatSpreadable and @@species
          $(
            { target: "Array", proto: true, forced: FORCED },
            {
              concat: function concat(arg) {
                // eslint-disable-line no-unused-vars
                var O = toObject(this);
                var A = arraySpeciesCreate(O, 0);
                var n = 0;
                var i, k, length, len, E;
                for (i = -1, length = arguments.length; i < length; i++) {
                  E = i === -1 ? O : arguments[i];
                  if (isConcatSpreadable(E)) {
                    len = toLength(E.length);
                    if (n + len > MAX_SAFE_INTEGER)
                      throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    for (k = 0; k < len; k++, n++)
                      if (k in E) createProperty(A, n, E[k]);
                  } else {
                    if (n >= MAX_SAFE_INTEGER)
                      throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    createProperty(A, n++, E);
                  }
                }
                A.length = n;
                return A;
              },
            }
          );

          /***/
        },

        /***/ "9bf2": /***/ function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__("83ab");
          var IE8_DOM_DEFINE = __webpack_require__("0cfb");
          var anObject = __webpack_require__("825a");
          var toPrimitive = __webpack_require__("c04e");

          var nativeDefineProperty = Object.defineProperty;

          // `Object.defineProperty` method
          // https://tc39.github.io/ecma262/#sec-object.defineproperty
          exports.f = DESCRIPTORS
            ? nativeDefineProperty
            : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeDefineProperty(O, P, Attributes);
                  } catch (error) {
                    /* empty */
                  }
                if ("get" in Attributes || "set" in Attributes)
                  throw TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
              };

          /***/
        },

        /***/ "9f7f": /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var fails = __webpack_require__("d039");

          // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
          // so we use an intermediate function.
          function RE(s, f) {
            return RegExp(s, f);
          }

          exports.UNSUPPORTED_Y = fails(function () {
            // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
            var re = RE("a", "y");
            re.lastIndex = 2;
            return re.exec("abcd") != null;
          });

          exports.BROKEN_CARET = fails(function () {
            // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
            var re = RE("^r", "gy");
            re.lastIndex = 2;
            return re.exec("str") != null;
          });

          /***/
        },

        /***/ a15b: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var $ = __webpack_require__("23e7");
          var IndexedObject = __webpack_require__("44ad");
          var toIndexedObject = __webpack_require__("fc6a");
          var arrayMethodIsStrict = __webpack_require__("a640");

          var nativeJoin = [].join;

          var ES3_STRINGS = IndexedObject != Object;
          var STRICT_METHOD = arrayMethodIsStrict("join", ",");

          // `Array.prototype.join` method
          // https://tc39.github.io/ecma262/#sec-array.prototype.join
          $(
            {
              target: "Array",
              proto: true,
              forced: ES3_STRINGS || !STRICT_METHOD,
            },
            {
              join: function join(separator) {
                return nativeJoin.call(
                  toIndexedObject(this),
                  separator === undefined ? "," : separator
                );
              },
            }
          );

          /***/
        },

        /***/ a640: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var fails = __webpack_require__("d039");

          module.exports = function (METHOD_NAME, argument) {
            var method = [][METHOD_NAME];
            return (
              !!method &&
              fails(function () {
                // eslint-disable-next-line no-useless-call,no-throw-literal
                method.call(
                  null,
                  argument ||
                    function () {
                      throw 1;
                    },
                  1
                );
              })
            );
          };

          /***/
        },

        /***/ a691: /***/ function (module, exports) {
          var ceil = Math.ceil;
          var floor = Math.floor;

          // `ToInteger` abstract operation
          // https://tc39.github.io/ecma262/#sec-tointeger
          module.exports = function (argument) {
            return isNaN((argument = +argument))
              ? 0
              : (argument > 0 ? floor : ceil)(argument);
          };

          /***/
        },

        /***/ ac1f: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var $ = __webpack_require__("23e7");
          var exec = __webpack_require__("9263");

          $(
            { target: "RegExp", proto: true, forced: /./.exec !== exec },
            {
              exec: exec,
            }
          );

          /***/
        },

        /***/ ad6d: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var anObject = __webpack_require__("825a");

          // `RegExp.prototype.flags` getter implementation
          // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
          module.exports = function () {
            var that = anObject(this);
            var result = "";
            if (that.global) result += "g";
            if (that.ignoreCase) result += "i";
            if (that.multiline) result += "m";
            if (that.dotAll) result += "s";
            if (that.unicode) result += "u";
            if (that.sticky) result += "y";
            return result;
          };

          /***/
        },

        /***/ ae40: /***/ function (module, exports, __webpack_require__) {
          var DESCRIPTORS = __webpack_require__("83ab");
          var fails = __webpack_require__("d039");
          var has = __webpack_require__("5135");

          var defineProperty = Object.defineProperty;
          var cache = {};

          var thrower = function (it) {
            throw it;
          };

          module.exports = function (METHOD_NAME, options) {
            if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
            if (!options) options = {};
            var method = [][METHOD_NAME];
            var ACCESSORS = has(options, "ACCESSORS")
              ? options.ACCESSORS
              : false;
            var argument0 = has(options, 0) ? options[0] : thrower;
            var argument1 = has(options, 1) ? options[1] : undefined;

            return (cache[METHOD_NAME] =
              !!method &&
              !fails(function () {
                if (ACCESSORS && !DESCRIPTORS) return true;
                var O = { length: -1 };

                if (ACCESSORS)
                  defineProperty(O, 1, { enumerable: true, get: thrower });
                else O[1] = 1;

                method.call(O, argument0, argument1);
              }));
          };

          /***/
        },

        /***/ b041: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
          var classof = __webpack_require__("f5df");

          // `Object.prototype.toString` method implementation
          // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
          module.exports = TO_STRING_TAG_SUPPORT
            ? {}.toString
            : function toString() {
                return "[object " + classof(this) + "]";
              };

          /***/
        },

        /***/ b622: /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var shared = __webpack_require__("5692");
          var has = __webpack_require__("5135");
          var uid = __webpack_require__("90e3");
          var NATIVE_SYMBOL = __webpack_require__("4930");
          var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

          var WellKnownSymbolsStore = shared("wks");
          var Symbol = global.Symbol;
          var createWellKnownSymbol = USE_SYMBOL_AS_UID
            ? Symbol
            : (Symbol && Symbol.withoutSetter) || uid;

          module.exports = function (name) {
            if (!has(WellKnownSymbolsStore, name)) {
              if (NATIVE_SYMBOL && has(Symbol, name))
                WellKnownSymbolsStore[name] = Symbol[name];
              else
                WellKnownSymbolsStore[name] = createWellKnownSymbol(
                  "Symbol." + name
                );
            }
            return WellKnownSymbolsStore[name];
          };

          /***/
        },

        /***/ c04e: /***/ function (module, exports, __webpack_require__) {
          var isObject = __webpack_require__("861d");

          // `ToPrimitive` abstract operation
          // https://tc39.github.io/ecma262/#sec-toprimitive
          // instead of the ES6 spec version, we didn't implement @@toPrimitive case
          // and the second argument - flag - preferred type is a string
          module.exports = function (input, PREFERRED_STRING) {
            if (!isObject(input)) return input;
            var fn, val;
            if (
              PREFERRED_STRING &&
              typeof (fn = input.toString) == "function" &&
              !isObject((val = fn.call(input)))
            )
              return val;
            if (
              typeof (fn = input.valueOf) == "function" &&
              !isObject((val = fn.call(input)))
            )
              return val;
            if (
              !PREFERRED_STRING &&
              typeof (fn = input.toString) == "function" &&
              !isObject((val = fn.call(input)))
            )
              return val;
            throw TypeError("Can't convert object to primitive value");
          };

          /***/
        },

        /***/ c430: /***/ function (module, exports) {
          module.exports = false;

          /***/
        },

        /***/ c6b6: /***/ function (module, exports) {
          var toString = {}.toString;

          module.exports = function (it) {
            return toString.call(it).slice(8, -1);
          };

          /***/
        },

        /***/ c6cd: /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var setGlobal = __webpack_require__("ce4e");

          var SHARED = "__core-js_shared__";
          var store = global[SHARED] || setGlobal(SHARED, {});

          module.exports = store;

          /***/
        },

        /***/ c8ba: /***/ function (module, exports) {
          var g;

          // This works in non-strict mode
          g = (function () {
            return this;
          })();

          try {
            // This works if eval is allowed (see CSP)
            g = g || new Function("return this")();
          } catch (e) {
            // This works if the window reference is available
            if (typeof window === "object") g = window;
          }

          // g can still be undefined, but nothing to do about it...
          // We return undefined, instead of nothing here, so it's
          // easier to handle this case. if(!global) { ...}

          module.exports = g;

          /***/
        },

        /***/ ca84: /***/ function (module, exports, __webpack_require__) {
          var has = __webpack_require__("5135");
          var toIndexedObject = __webpack_require__("fc6a");
          var indexOf = __webpack_require__("4d64").indexOf;
          var hiddenKeys = __webpack_require__("d012");

          module.exports = function (object, names) {
            var O = toIndexedObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O)
              !has(hiddenKeys, key) && has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while (names.length > i)
              if (has(O, (key = names[i++]))) {
                ~indexOf(result, key) || result.push(key);
              }
            return result;
          };

          /***/
        },

        /***/ cc12: /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var isObject = __webpack_require__("861d");

          var document = global.document;
          // typeof document.createElement is 'object' in old IE
          var EXISTS = isObject(document) && isObject(document.createElement);

          module.exports = function (it) {
            return EXISTS ? document.createElement(it) : {};
          };

          /***/
        },

        /***/ cca6: /***/ function (module, exports, __webpack_require__) {
          var $ = __webpack_require__("23e7");
          var assign = __webpack_require__("60da");

          // `Object.assign` method
          // https://tc39.github.io/ecma262/#sec-object.assign
          $(
            { target: "Object", stat: true, forced: Object.assign !== assign },
            {
              assign: assign,
            }
          );

          /***/
        },

        /***/ ce4e: /***/ function (module, exports, __webpack_require__) {
          var global = __webpack_require__("da84");
          var createNonEnumerableProperty = __webpack_require__("9112");

          module.exports = function (key, value) {
            try {
              createNonEnumerableProperty(global, key, value);
            } catch (error) {
              global[key] = value;
            }
            return value;
          };

          /***/
        },

        /***/ d012: /***/ function (module, exports) {
          module.exports = {};

          /***/
        },

        /***/ d039: /***/ function (module, exports) {
          module.exports = function (exec) {
            try {
              return !!exec();
            } catch (error) {
              return true;
            }
          };

          /***/
        },

        /***/ d066: /***/ function (module, exports, __webpack_require__) {
          var path = __webpack_require__("428f");
          var global = __webpack_require__("da84");

          var aFunction = function (variable) {
            return typeof variable == "function" ? variable : undefined;
          };

          module.exports = function (namespace, method) {
            return arguments.length < 2
              ? aFunction(path[namespace]) || aFunction(global[namespace])
              : (path[namespace] && path[namespace][method]) ||
                  (global[namespace] && global[namespace][method]);
          };

          /***/
        },

        /***/ d1e7: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
          var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

          // Nashorn ~ JDK8 bug
          var NASHORN_BUG =
            getOwnPropertyDescriptor &&
            !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

          // `Object.prototype.propertyIsEnumerable` method implementation
          // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
          exports.f = NASHORN_BUG
            ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
              }
            : nativePropertyIsEnumerable;

          /***/
        },

        /***/ d2bb: /***/ function (module, exports, __webpack_require__) {
          var anObject = __webpack_require__("825a");
          var aPossiblePrototype = __webpack_require__("3bbe");

          // `Object.setPrototypeOf` method
          // https://tc39.github.io/ecma262/#sec-object.setprototypeof
          // Works with __proto__ only. Old v8 can't work with null proto objects.
          /* eslint-disable no-proto */
          module.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var CORRECT_SETTER = false;
                  var test = {};
                  var setter;
                  try {
                    setter = Object.getOwnPropertyDescriptor(
                      Object.prototype,
                      "__proto__"
                    ).set;
                    setter.call(test, []);
                    CORRECT_SETTER = test instanceof Array;
                  } catch (error) {
                    /* empty */
                  }
                  return function setPrototypeOf(O, proto) {
                    anObject(O);
                    aPossiblePrototype(proto);
                    if (CORRECT_SETTER) setter.call(O, proto);
                    else O.__proto__ = proto;
                    return O;
                  };
                })()
              : undefined);

          /***/
        },

        /***/ d3b7: /***/ function (module, exports, __webpack_require__) {
          var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
          var redefine = __webpack_require__("6eeb");
          var toString = __webpack_require__("b041");

          // `Object.prototype.toString` method
          // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
          if (!TO_STRING_TAG_SUPPORT) {
            redefine(Object.prototype, "toString", toString, { unsafe: true });
          }

          /***/
        },

        /***/ d58f: /***/ function (module, exports, __webpack_require__) {
          var aFunction = __webpack_require__("1c0b");
          var toObject = __webpack_require__("7b0b");
          var IndexedObject = __webpack_require__("44ad");
          var toLength = __webpack_require__("50c4");

          // `Array.prototype.{ reduce, reduceRight }` methods implementation
          var createMethod = function (IS_RIGHT) {
            return function (that, callbackfn, argumentsLength, memo) {
              aFunction(callbackfn);
              var O = toObject(that);
              var self = IndexedObject(O);
              var length = toLength(O.length);
              var index = IS_RIGHT ? length - 1 : 0;
              var i = IS_RIGHT ? -1 : 1;
              if (argumentsLength < 2)
                while (true) {
                  if (index in self) {
                    memo = self[index];
                    index += i;
                    break;
                  }
                  index += i;
                  if (IS_RIGHT ? index < 0 : length <= index) {
                    throw TypeError(
                      "Reduce of empty array with no initial value"
                    );
                  }
                }
              for (; IS_RIGHT ? index >= 0 : length > index; index += i)
                if (index in self) {
                  memo = callbackfn(memo, self[index], index, O);
                }
              return memo;
            };
          };

          module.exports = {
            // `Array.prototype.reduce` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
            left: createMethod(false),
            // `Array.prototype.reduceRight` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
            right: createMethod(true),
          };

          /***/
        },

        /***/ d784: /***/ function (module, exports, __webpack_require__) {
          "use strict";

          // TODO: Remove from `core-js@4` since it's moved to entry points
          __webpack_require__("ac1f");
          var redefine = __webpack_require__("6eeb");
          var fails = __webpack_require__("d039");
          var wellKnownSymbol = __webpack_require__("b622");
          var regexpExec = __webpack_require__("9263");
          var createNonEnumerableProperty = __webpack_require__("9112");

          var SPECIES = wellKnownSymbol("species");

          var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
            // #replace needs built-in support for named groups.
            // #match works fine because it just return the exec results, even if it has
            // a "grops" property.
            var re = /./;
            re.exec = function () {
              var result = [];
              result.groups = { a: "7" };
              return result;
            };
            return "".replace(re, "$<a>") !== "7";
          });

          // IE <= 11 replaces $0 with the whole match, as if it was $&
          // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
          var REPLACE_KEEPS_$0 = (function () {
            return "a".replace(/./, "$0") === "$0";
          })();

          var REPLACE = wellKnownSymbol("replace");
          // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
          var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
            if (/./[REPLACE]) {
              return /./[REPLACE]("a", "$0") === "";
            }
            return false;
          })();

          // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
          // Weex JS has frozen built-in prototypes, so use try / catch wrapper
          var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
            var re = /(?:)/;
            var originalExec = re.exec;
            re.exec = function () {
              return originalExec.apply(this, arguments);
            };
            var result = "ab".split(re);
            return (
              result.length !== 2 || result[0] !== "a" || result[1] !== "b"
            );
          });

          module.exports = function (KEY, length, exec, sham) {
            var SYMBOL = wellKnownSymbol(KEY);

            var DELEGATES_TO_SYMBOL = !fails(function () {
              // String methods call symbol-named RegEp methods
              var O = {};
              O[SYMBOL] = function () {
                return 7;
              };
              return ""[KEY](O) != 7;
            });

            var DELEGATES_TO_EXEC =
              DELEGATES_TO_SYMBOL &&
              !fails(function () {
                // Symbol-named RegExp methods call .exec
                var execCalled = false;
                var re = /a/;

                if (KEY === "split") {
                  // We can't use real regex here since it causes deoptimization
                  // and serious performance degradation in V8
                  // https://github.com/zloirock/core-js/issues/306
                  re = {};
                  // RegExp[@@split] doesn't call the regex's exec method, but first creates
                  // a new one. We need to return the patched regex when creating the new one.
                  re.constructor = {};
                  re.constructor[SPECIES] = function () {
                    return re;
                  };
                  re.flags = "";
                  re[SYMBOL] = /./[SYMBOL];
                }

                re.exec = function () {
                  execCalled = true;
                  return null;
                };

                re[SYMBOL]("");
                return !execCalled;
              });

            if (
              !DELEGATES_TO_SYMBOL ||
              !DELEGATES_TO_EXEC ||
              (KEY === "replace" &&
                !(
                  REPLACE_SUPPORTS_NAMED_GROUPS &&
                  REPLACE_KEEPS_$0 &&
                  !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                )) ||
              (KEY === "split" && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
            ) {
              var nativeRegExpMethod = /./[SYMBOL];
              var methods = exec(
                SYMBOL,
                ""[KEY],
                function (nativeMethod, regexp, str, arg2, forceStringMethod) {
                  if (regexp.exec === regexpExec) {
                    if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                      // The native String method already delegates to @@method (this
                      // polyfilled function), leasing to infinite recursion.
                      // We avoid it by directly calling the native @@method method.
                      return {
                        done: true,
                        value: nativeRegExpMethod.call(regexp, str, arg2),
                      };
                    }
                    return {
                      done: true,
                      value: nativeMethod.call(str, regexp, arg2),
                    };
                  }
                  return { done: false };
                },
                {
                  REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
                  REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                }
              );
              var stringMethod = methods[0];
              var regexMethod = methods[1];

              redefine(String.prototype, KEY, stringMethod);
              redefine(
                RegExp.prototype,
                SYMBOL,
                length == 2
                  ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                    function (string, arg) {
                      return regexMethod.call(string, this, arg);
                    }
                  : // 21.2.5.6 RegExp.prototype[@@match](string)
                    // 21.2.5.9 RegExp.prototype[@@search](string)
                    function (string) {
                      return regexMethod.call(string, this);
                    }
              );
            }

            if (sham)
              createNonEnumerableProperty(
                RegExp.prototype[SYMBOL],
                "sham",
                true
              );
          };

          /***/
        },

        /***/ da84: /***/ function (module, exports, __webpack_require__) {
          /* WEBPACK VAR INJECTION */ (function (global) {
            var check = function (it) {
              return it && it.Math == Math && it;
            };

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            module.exports =
              // eslint-disable-next-line no-undef
              check(typeof globalThis == "object" && globalThis) ||
              check(typeof window == "object" && window) ||
              check(typeof self == "object" && self) ||
              check(typeof global == "object" && global) ||
              // eslint-disable-next-line no-new-func
              Function("return this")();

            /* WEBPACK VAR INJECTION */
          }.call(this, __webpack_require__("c8ba")));

          /***/
        },

        /***/ df75: /***/ function (module, exports, __webpack_require__) {
          var internalObjectKeys = __webpack_require__("ca84");
          var enumBugKeys = __webpack_require__("7839");

          // `Object.keys` method
          // https://tc39.github.io/ecma262/#sec-object.keys
          module.exports =
            Object.keys ||
            function keys(O) {
              return internalObjectKeys(O, enumBugKeys);
            };

          /***/
        },

        /***/ e893: /***/ function (module, exports, __webpack_require__) {
          var has = __webpack_require__("5135");
          var ownKeys = __webpack_require__("56ef");
          var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
          var definePropertyModule = __webpack_require__("9bf2");

          module.exports = function (target, source) {
            var keys = ownKeys(source);
            var defineProperty = definePropertyModule.f;
            var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (!has(target, key))
                defineProperty(
                  target,
                  key,
                  getOwnPropertyDescriptor(source, key)
                );
            }
          };

          /***/
        },

        /***/ e8b5: /***/ function (module, exports, __webpack_require__) {
          var classof = __webpack_require__("c6b6");

          // `IsArray` abstract operation
          // https://tc39.github.io/ecma262/#sec-isarray
          module.exports =
            Array.isArray ||
            function isArray(arg) {
              return classof(arg) == "Array";
            };

          /***/
        },

        /***/ f5df: /***/ function (module, exports, __webpack_require__) {
          var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
          var classofRaw = __webpack_require__("c6b6");
          var wellKnownSymbol = __webpack_require__("b622");

          var TO_STRING_TAG = wellKnownSymbol("toStringTag");
          // ES3 wrong here
          var CORRECT_ARGUMENTS =
            classofRaw(
              (function () {
                return arguments;
              })()
            ) == "Arguments";

          // fallback for IE11 Script Access Denied error
          var tryGet = function (it, key) {
            try {
              return it[key];
            } catch (error) {
              /* empty */
            }
          };

          // getting tag from ES6+ `Object.prototype.toString`
          module.exports = TO_STRING_TAG_SUPPORT
            ? classofRaw
            : function (it) {
                var O, tag, result;
                return it === undefined
                  ? "Undefined"
                  : it === null
                  ? "Null"
                  : // @@toStringTag case
                  typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG)) ==
                    "string"
                  ? tag
                  : // builtinTag case
                  CORRECT_ARGUMENTS
                  ? classofRaw(O)
                  : // ES3 arguments fallback
                  (result = classofRaw(O)) == "Object" &&
                    typeof O.callee == "function"
                  ? "Arguments"
                  : result;
              };

          /***/
        },

        /***/ f772: /***/ function (module, exports, __webpack_require__) {
          var shared = __webpack_require__("5692");
          var uid = __webpack_require__("90e3");

          var keys = shared("keys");

          module.exports = function (key) {
            return keys[key] || (keys[key] = uid(key));
          };

          /***/
        },

        /***/ fae3: /***/ function (
          module,
          __webpack_exports__,
          __webpack_require__
        ) {
          "use strict";
          // ESM COMPAT FLAG
          __webpack_require__.r(__webpack_exports__);

          // EXPORTS
          __webpack_require__.d(__webpack_exports__, "flatten", function () {
            return /* reexport */ flatten;
          });
          __webpack_require__.d(
            __webpack_exports__,
            "addLocalResource",
            function () {
              return /* reexport */ addLocalResource;
            }
          );
          __webpack_require__.d(__webpack_exports__, "i18n", function () {
            return /* reexport */ i18n;
          });
          __webpack_require__.d(__webpack_exports__, "useT", function () {
            return /* reexport */ useT;
          });

          // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
          // This file is imported into lib/wc client bundles.

          if (typeof window !== "undefined") {
            var currentScript = window.document.currentScript;
            if (true) {
              var getCurrentScript = __webpack_require__("8875");
              currentScript = getCurrentScript();

              // for backward compatibility, because previously we directly included the polyfill
              if (!("currentScript" in document)) {
                Object.defineProperty(document, "currentScript", {
                  get: getCurrentScript,
                });
              }
            }

            var src =
              currentScript &&
              currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
            if (src) {
              __webpack_require__.p = src[1]; // eslint-disable-line
            }
          }

          // Indicate to webpack that this file can be concatenated
          /* harmony default export */ var setPublicPath = null;

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
          var es_array_concat = __webpack_require__("99af");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
          var es_array_join = __webpack_require__("a15b");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
          var es_array_reduce = __webpack_require__("13d5");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
          var es_object_assign = __webpack_require__("cca6");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
          var es_object_entries = __webpack_require__("4fad");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
          var es_object_to_string = __webpack_require__("d3b7");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.constructor.js
          var es_regexp_constructor = __webpack_require__("4d63");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
          var es_regexp_exec = __webpack_require__("ac1f");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
          var es_regexp_to_string = __webpack_require__("25f0");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
          var es_string_replace = __webpack_require__("5319");

          // EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
          var es_string_split = __webpack_require__("1276");

          // CONCATENATED MODULE: ./src/core.ts

          var __assign =
            (undefined && undefined.__assign) ||
            function () {
              __assign =
                Object.assign ||
                function (t) {
                  for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];

                    for (var p in s) {
                      if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                  }

                  return t;
                };

              return __assign.apply(this, arguments);
            };

          function flatten(target, paths) {
            var _a;

            if (paths === void 0) {
              paths = [];
            }

            if (typeof target === "string") {
              return (_a = {}), (_a[paths.join(".")] = target), _a;
            }

            return Object.entries(target).reduce(function (memo, _a) {
              var k = _a[0],
                v = _a[1];
              return __assign(__assign({}, memo), flatten(v, paths.concat(k)));
            }, {});
          }

          var template = function template(t, injects) {
            var result = t;

            for (
              var _i = 0, _a = Object.entries(injects);
              _i < _a.length;
              _i++
            ) {
              var _b = _a[_i],
                k = _b[0],
                v = _b[1];
              result = result.replace(new RegExp("{{" + k + "}}", "g"), v);
            }

            return result;
          };

          var I18n =
            /** @class */
            (function () {
              function I18n() {
                this.warehouse = {};
              }

              I18n.prototype.addLocalResource = function (nsOrKv, kv) {
                var ns = typeof nsOrKv === "string" ? nsOrKv : undefined;
                var translations = flatten(ns ? kv : nsOrKv);

                if (ns != null) {
                  this.warehouse[ns] = translations;
                }

                return ns != null
                  ? this.getT(ns)
                  : this.getT("translations", {
                      translations: translations,
                    });
              };

              I18n.prototype.removeResource = function (ns) {
                delete this.warehouse[ns];
              };

              I18n.prototype.t = function (identifier, injects, options) {
                if (injects === void 0) {
                  injects = {};
                }

                if (options === void 0) {
                  options = {
                    defaultNS: "global",
                  };
                }

                return this.translate(
                  __assign(__assign({}, options), {
                    host: this.warehouse,
                  }),
                  identifier,
                  injects
                );
              };

              I18n.prototype.getT = function (defaultNS, host) {
                return this.translate.bind(this, {
                  defaultNS: defaultNS,
                  host: host || this.warehouse,
                });
              };

              I18n.prototype.getTmpT = function (kv) {
                var _a;

                var tmpNS = "1";
                var options = {
                  defaultNS: tmpNS,
                  host: ((_a = {}), (_a[tmpNS] = kv), _a),
                };
                return this.tmpTranslate.bind(this, options);
              };

              I18n.prototype.tmpTranslate = function (
                options,
                identifier,
                injects
              ) {
                if (injects === void 0) {
                  injects = {};
                }

                var hasNS = identifier.split(":").length > 1;
                return hasNS
                  ? this.t(identifier, injects)
                  : this.translate(options, identifier, injects);
              };

              I18n.prototype.translate = function (
                options,
                identifier,
                injects
              ) {
                if (injects === void 0) {
                  injects = {};
                }

                var source = identifier || "";
                var chunks = source.split(":");
                var ns = chunks.length > 1 ? chunks.shift() : options.defaultNS;

                var _a = chunks.pop().split("|"),
                  key = _a[0],
                  fallbackKey = _a[1];

                var value = options.host[ns] ? options.host[ns][key] : "";
                var fallback = fallbackKey
                  ? this.translate(options, fallbackKey, injects)
                  : "";
                return template(
                  (value !== null && value !== void 0
                    ? value
                    : fallback || key
                  ).toString(),
                  injects
                );
              };

              return I18n;
            })();

          var i18n = new I18n();
          var addLocalResource = i18n.addLocalResource.bind(i18n);

          // EXTERNAL MODULE: external "@vue/composition-api"
          var composition_api_ = __webpack_require__("8165");

          // CONCATENATED MODULE: ./src/hooks.ts

          var hooks_getInstance = function getInstance() {
            var vm = Object(composition_api_["getCurrentInstance"])();

            if (!vm) {
              return vm;
            }

            return vm.proxy || vm;
          };

          var identity = function identity(v) {
            return v;
          };

          var useT = function useT() {
            var vm = hooks_getInstance();
            return function (key, injects) {
              if (injects === void 0) {
                injects = {};
              }

              if (!vm) {
                return key;
              }

              var t = vm.$i18n ? vm.$i18n.t || identity : identity;
              return t(key, injects);
            };
          };
          // CONCATENATED MODULE: ./src/index.ts

          // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js

          /***/
        },

        /***/ fc6a: /***/ function (module, exports, __webpack_require__) {
          // toObject with fallback for non-array-like ES3 strings
          var IndexedObject = __webpack_require__("44ad");
          var requireObjectCoercible = __webpack_require__("1d80");

          module.exports = function (it) {
            return IndexedObject(requireObjectCoercible(it));
          };

          /***/
        },

        /***/ fdbf: /***/ function (module, exports, __webpack_require__) {
          var NATIVE_SYMBOL = __webpack_require__("4930");

          module.exports =
            NATIVE_SYMBOL &&
            // eslint-disable-next-line no-undef
            !Symbol.sham &&
            // eslint-disable-next-line no-undef
            typeof Symbol.iterator == "symbol";

          /***/
        },

        /******/
      }
    );
  }
);
//# sourceMappingURL=i18n.umd.js.map
