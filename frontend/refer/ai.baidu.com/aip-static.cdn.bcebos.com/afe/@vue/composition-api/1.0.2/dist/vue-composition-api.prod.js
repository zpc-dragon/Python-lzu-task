!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("vue"))
    : "function" == typeof define && define.amd
    ? define(["exports", "vue"], e)
    : e(
        ((n =
          "undefined" != typeof globalThis
            ? globalThis
            : n || self).VueCompositionAPI = {}),
        n.Vue
      );
})(this, function (n, e) {
  "use strict";
  function t(n) {
    return n && "object" == typeof n && "default" in n ? n : { default: n };
  }
  var r = t(e);
  function o(n) {
    return "function" == typeof n && /native code/.test(n.toString());
  }
  var i =
      "undefined" != typeof Symbol &&
      o(Symbol) &&
      "undefined" != typeof Reflect &&
      o(Reflect.ownKeys),
    u = function (n) {
      return n;
    };
  function f(n, e, t) {
    var r = t.get,
      o = t.set;
    Object.defineProperty(n, e, {
      enumerable: !0,
      configurable: !0,
      get: r || u,
      set: o || u,
    });
  }
  function a(n, e, t, r) {
    Object.defineProperty(n, e, {
      value: t,
      enumerable: !!r,
      writable: !0,
      configurable: !0,
    });
  }
  function c(n, e) {
    return Object.hasOwnProperty.call(n, e);
  }
  function l(n) {
    return Array.isArray(n);
  }
  var v = Object.prototype.toString,
    s = function (n) {
      return v.call(n);
    };
  function d(n) {
    var e = parseFloat(String(n));
    return e >= 0 && Math.floor(e) === e && isFinite(n) && e <= 4294967295;
  }
  function p(n) {
    return null !== n && "object" == typeof n;
  }
  function _(n) {
    return (
      "[object Object]" ===
      (function (n) {
        return Object.prototype.toString.call(n);
      })(n)
    );
  }
  function y(n) {
    return "function" == typeof n;
  }
  function b(n, e) {
    r.default.util.warn(n, e);
  }
  var h = void 0;
  try {
    var g = require("vue");
    g && j(g)
      ? (h = g)
      : g && "default" in g && j(g.default) && (h = g.default);
  } catch (n) {}
  var m = null,
    w = null,
    $ = "__composition_api_installed__";
  function j(n) {
    return n && "function" == typeof n && "Vue" === n.name;
  }
  function x() {
    return m;
  }
  function O(n) {
    w = n;
  }
  function S() {
    return w ? R(w) : null;
  }
  var k,
    E = new WeakMap();
  function R(n) {
    if (E.has(n)) return E.get(n);
    var e = {
      proxy: n,
      update: n.$forceUpdate,
      uid: n._uid,
      emit: n.$emit.bind(n),
      parent: null,
      root: null,
    };
    return (
      ["data", "props", "attrs", "refs", "vnode", "slots"].forEach(function (
        t
      ) {
        f(e, t, {
          get: function () {
            return n["$" + t];
          },
        });
      }),
      f(e, "isMounted", {
        get: function () {
          return n._isMounted;
        },
      }),
      f(e, "isUnmounted", {
        get: function () {
          return n._isDestroyed;
        },
      }),
      f(e, "isDeactivated", {
        get: function () {
          return n._inactive;
        },
      }),
      f(e, "emitted", {
        get: function () {
          return n._events;
        },
      }),
      E.set(n, e),
      n.$parent && (e.parent = R(n.$parent)),
      n.$root && (e.root = R(n.$root)),
      e
    );
  }
  function M(n) {
    var e = S();
    return null == e ? void 0 : e.proxy;
  }
  function C(n, e) {
    void 0 === e && (e = {});
    var t = n.config.silent;
    n.config.silent = !0;
    var r = new n(e);
    return (n.config.silent = t), r;
  }
  function P(n, e) {
    return function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      if (n.$scopedSlots[e]) return n.$scopedSlots[e].apply(n, t);
    };
  }
  var D = function () {
    return (D =
      Object.assign ||
      function (n) {
        for (var e, t = 1, r = arguments.length; t < r; t++)
          for (var o in (e = arguments[t]))
            Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
        return n;
      }).apply(this, arguments);
  };
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */ function U(
    n
  ) {
    var e = "function" == typeof Symbol && Symbol.iterator,
      t = e && n[e],
      r = 0;
    if (t) return t.call(n);
    if (n && "number" == typeof n.length)
      return {
        next: function () {
          return (
            n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n }
          );
        },
      };
    throw new TypeError(
      e ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function V(n, e) {
    var t = "function" == typeof Symbol && n[Symbol.iterator];
    if (!t) return n;
    var r,
      o,
      i = t.call(n),
      u = [];
    try {
      for (; (void 0 === e || e-- > 0) && !(r = i.next()).done; )
        u.push(r.value);
    } catch (n) {
      o = { error: n };
    } finally {
      try {
        r && !r.done && (t = i.return) && t.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return u;
  }
  function B(n, e) {
    for (var t = 0, r = e.length, o = n.length; t < r; t++, o++) n[o] = e[t];
    return n;
  }
  function T(n) {
    return i ? Symbol.for(n) : n;
  }
  var W = T("composition-api.preFlushQueue"),
    A = T("composition-api.postFlushQueue"),
    z = "composition-api.refKey",
    F = new WeakMap(),
    I = new WeakMap(),
    K = new WeakMap(),
    q = function (n) {
      f(this, "value", { get: n.get, set: n.set });
    };
  function Q(n, e) {
    var t = new q(n),
      r = Object.seal(t);
    return K.set(r, !0), r;
  }
  function G(n) {
    var e;
    if (H(n)) return n;
    var t = un((((e = {})[z] = n), e));
    return Q({
      get: function () {
        return t[z];
      },
      set: function (n) {
        return (t[z] = n);
      },
    });
  }
  function H(n) {
    return n instanceof q;
  }
  function J(n) {
    return H(n) ? n.value : n;
  }
  function L(n) {
    if (!_(n)) return n;
    var e = {};
    for (var t in n) e[t] = N(n, t);
    return e;
  }
  function N(n, e) {
    var t = n[e];
    return H(t)
      ? t
      : Q({
          get: function () {
            return n[e];
          },
          set: function (t) {
            return (n[e] = t);
          },
        });
  }
  function X(n) {
    var e;
    return Boolean(
      n &&
        c(n, "__ob__") &&
        "object" == typeof n.__ob__ &&
        (null === (e = n.__ob__) || void 0 === e ? void 0 : e.__raw__)
    );
  }
  function Y(n) {
    var e;
    return Boolean(
      n &&
        c(n, "__ob__") &&
        "object" == typeof n.__ob__ &&
        !(null === (e = n.__ob__) || void 0 === e ? void 0 : e.__raw__)
    );
  }
  function Z(n) {
    if (
      !(
        !_(n) ||
        X(n) ||
        l(n) ||
        H(n) ||
        (function (n) {
          var e = x();
          return e && n instanceof e;
        })(n) ||
        F.has(n)
      )
    ) {
      F.set(n, !0);
      for (var e = Object.keys(n), t = 0; t < e.length; t++) nn(n, e[t]);
    }
  }
  function nn(n, e, t) {
    if ("__ob__" !== e && !X(n[e])) {
      var r,
        o,
        i = Object.getOwnPropertyDescriptor(n, e);
      if (i) {
        if (!1 === i.configurable) return;
        (r = i.get),
          (o = i.set),
          (r && !o) || 2 !== arguments.length || (t = n[e]);
      }
      Z(t),
        f(n, e, {
          get: function () {
            var o = r ? r.call(n) : t;
            return e !== z && H(o) ? o.value : o;
          },
          set: function (i) {
            if (!r || o) {
              var u = r ? r.call(n) : t;
              e !== z && H(u) && !H(i)
                ? (u.value = i)
                : o
                ? o.call(n, i)
                : (t = i),
                Z(i);
            }
          },
        });
    }
  }
  function en(n) {
    var e,
      t = m || h;
    t.observable
      ? (e = t.observable(n))
      : (e = C(t, { data: { $$state: n } })._data.$$state);
    return c(e, "__ob__") || tn(e), e;
  }
  function tn(n, e) {
    var t, r;
    if ((void 0 === e && (e = new Set()), !e.has(n))) {
      a(
        n,
        "__ob__",
        (function (n) {
          void 0 === n && (n = {});
          return {
            value: n,
            dep: { notify: u, depend: u, addSub: u, removeSub: u },
          };
        })(n)
      ),
        e.add(n);
      try {
        for (var o = U(Object.keys(n)), i = o.next(); !i.done; i = o.next()) {
          var f = n[i.value];
          (_(f) || l(f)) && !X(f) && Object.isExtensible(f) && tn(f, e);
        }
      } catch (n) {
        t = { error: n };
      } finally {
        try {
          i && !i.done && (r = o.return) && r.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
    }
  }
  function rn() {
    return en({}).__ob__;
  }
  function on(n) {
    var e, t;
    if (!p(n)) return n;
    if ((!_(n) && !l(n)) || X(n) || !Object.isExtensible(n)) return n;
    var r = en(l(n) ? [] : {});
    Z(r);
    var o = r.__ob__,
      i = function (e) {
        var t,
          i,
          u = n[e],
          a = Object.getOwnPropertyDescriptor(n, e);
        if (a) {
          if (!1 === a.configurable) return "continue";
          (t = a.get), (i = a.set);
        }
        f(r, e, {
          get: function () {
            var e,
              r = t ? t.call(n) : u;
            return null === (e = o.dep) || void 0 === e || e.depend(), r;
          },
          set: function (e) {
            var r;
            (t && !i) ||
              (i ? i.call(n, e) : (u = e),
              null === (r = o.dep) || void 0 === r || r.notify());
          },
        });
      };
    try {
      for (var u = U(Object.keys(n)), a = u.next(); !a.done; a = u.next()) {
        i(a.value);
      }
    } catch (n) {
      e = { error: n };
    } finally {
      try {
        a && !a.done && (t = u.return) && t.call(u);
      } finally {
        if (e) throw e.error;
      }
    }
    return r;
  }
  function un(n) {
    if (!p(n)) return n;
    if ((!_(n) && !l(n)) || X(n) || !Object.isExtensible(n)) return n;
    var e = en(n);
    return Z(e), e;
  }
  function fn(n) {
    return function (e) {
      var t,
        r = M(((t = n)[0].toUpperCase(), t.slice(1)));
      r &&
        (function (n, e, t, r) {
          var o = e.$options,
            i = n.config.optionMergeStrategies[t];
          o[t] = i(
            o[t],
            (function (n, e) {
              return function () {
                for (var t, r = [], o = 0; o < arguments.length; o++)
                  r[o] = arguments[o];
                var i = null === (t = S()) || void 0 === t ? void 0 : t.proxy;
                O(n);
                try {
                  return e.apply(void 0, B([], V(r)));
                } finally {
                  O(i);
                }
              };
            })(e, r)
          );
        })(x(), r, n, e);
    };
  }
  var an,
    cn = fn("beforeMount"),
    ln = fn("mounted"),
    vn = fn("beforeUpdate"),
    sn = fn("updated"),
    dn = fn("beforeDestroy"),
    pn = fn("destroyed"),
    _n = fn("errorCaptured"),
    yn = fn("activated"),
    bn = fn("deactivated"),
    hn = fn("serverPrefetch");
  function gn() {
    $n(this, W);
  }
  function mn() {
    $n(this, A);
  }
  function wn() {
    var n,
      e = null === (n = S()) || void 0 === n ? void 0 : n.proxy;
    return (
      e
        ? (function (n) {
            return void 0 !== n[W];
          })(e) ||
          (function (n) {
            (n[W] = []),
              (n[A] = []),
              n.$on("hook:beforeUpdate", gn),
              n.$on("hook:updated", mn);
          })(e)
        : (an || (an = C(x())), (e = an)),
      e
    );
  }
  function $n(n, e) {
    for (var t = n[e], r = 0; r < t.length; r++) t[r]();
    t.length = 0;
  }
  function jn(n, e, t) {
    var r = function () {
      n.$nextTick(function () {
        n[W].length && $n(n, W), n[A].length && $n(n, A);
      });
    };
    switch (t) {
      case "pre":
        r(), n[W].push(e);
        break;
      case "post":
        r(), n[A].push(e);
        break;
      default:
        !(function (n, e) {
          if (!n) throw new Error("[vue-composition-api] " + e);
        })(!1, 'flush must be one of ["post", "pre", "sync"], but got ' + t);
    }
  }
  function xn(n, e) {
    var t = n.teardown;
    n.teardown = function () {
      for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
      t.apply(n, r), e();
    };
  }
  function On(n, e, t, r) {
    var o,
      i,
      f = r.flush,
      a = "sync" === f,
      c = function (n) {
        i = function () {
          try {
            n();
          } catch (n) {
            !(function (n, e, t) {
              if ("undefined" == typeof window || "undefined" == typeof console)
                throw n;
              console.error(n);
            })(n);
          }
        };
      },
      v = function () {
        i && (i(), (i = null));
      },
      s = function (e) {
        return a || n === an
          ? e
          : function () {
              for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              return jn(
                n,
                function () {
                  e.apply(void 0, B([], V(t)));
                },
                f
              );
            };
      };
    if (null === t) {
      var d = !1,
        p = (function (n, e, t, r) {
          var o = n._watchers.length;
          return (
            n.$watch(e, t, {
              immediate: r.immediateInvokeCallback,
              deep: r.deep,
              lazy: r.noRun,
              sync: r.sync,
              before: r.before,
            }),
            n._watchers[o]
          );
        })(
          n,
          function () {
            if (!d)
              try {
                (d = !0), e(c);
              } finally {
                d = !1;
              }
          },
          u,
          { deep: r.deep || !1, sync: a, before: v }
        );
      xn(p, v), (p.lazy = !1);
      var _ = p.get.bind(p);
      return (
        (p.get = s(_)),
        function () {
          p.teardown();
        }
      );
    }
    var b,
      h = r.deep;
    if (
      (H(e)
        ? (b = function () {
            return e.value;
          })
        : Y(e)
        ? ((b = function () {
            return e;
          }),
          (h = !0))
        : (b = l(e)
            ? function () {
                return e.map(function (n) {
                  return H(n) ? n.value : Y(n) ? Sn(n) : y(n) ? n() : u;
                });
              }
            : y(e)
            ? e
            : u),
      h)
    ) {
      var g = b;
      b = function () {
        return Sn(g());
      };
    }
    var m = function (n, e) {
        return v(), t(n, e, c);
      },
      w = s(m);
    if (r.immediate) {
      var $ = w,
        j = function (n, e) {
          return (j = $), m(n, l(n) ? [] : e);
        };
      w = function (n, e) {
        return j(n, e);
      };
    }
    var x = n.$watch(b, w, { immediate: r.immediate, deep: h, sync: a }),
      O = n._watchers[n._watchers.length - 1];
    return (
      Y(O.value) &&
        (null === (o = O.value.__ob__) || void 0 === o ? void 0 : o.dep) &&
        h &&
        O.value.__ob__.dep.addSub({
          update: function () {
            O.run();
          },
        }),
      xn(O, v),
      function () {
        x();
      }
    );
  }
  function Sn(n, e) {
    if ((void 0 === e && (e = new Set()), !p(n) || e.has(n))) return n;
    if ((e.add(n), H(n))) Sn(n.value, e);
    else if (l(n)) for (var t = 0; t < n.length; t++) Sn(n[t], e);
    else if (
      "[object Set]" === s(n) ||
      (function (n) {
        return "[object Map]" === s(n);
      })(n)
    )
      n.forEach(function (n) {
        Sn(n, e);
      });
    else if (_(n)) for (var r in n) Sn(n[r], e);
    return n;
  }
  var kn = {};
  var En = {},
    Rn = function (n) {
      var e;
      void 0 === n && (n = "$style");
      var t = S();
      if (!t) return En;
      var r = null === (e = t.proxy) || void 0 === e ? void 0 : e[n];
      return r || En;
    },
    Mn = Rn;
  var Cn;
  var Pn = {
    set: function (n, e, t) {
      (n.__composition_api_state__ = n.__composition_api_state__ || {})[e] = t;
    },
    get: function (n, e) {
      return (n.__composition_api_state__ || {})[e];
    },
  };
  function Dn(n) {
    var e = Pn.get(n, "rawBindings") || {};
    if (e && Object.keys(e).length) {
      for (
        var t = n.$refs, r = Pn.get(n, "refs") || [], o = 0;
        o < r.length;
        o++
      ) {
        var i = e[(a = r[o])];
        !t[a] && i && H(i) && (i.value = null);
      }
      var u = Object.keys(t),
        f = [];
      for (o = 0; o < u.length; o++) {
        var a;
        i = e[(a = u[o])];
        t[a] && i && H(i) && ((i.value = t[a]), f.push(a));
      }
      Pn.set(n, "refs", f);
    }
  }
  function Un(n, e) {
    var t = n.$options._parentVnode;
    if (t) {
      for (
        var r = Pn.get(n, "slots") || [],
          o = (function (n, e) {
            var t;
            if (n) {
              if (n._normalized) return n._normalized;
              for (var r in ((t = {}), n)) n[r] && "$" !== r[0] && (t[r] = !0);
            } else t = {};
            for (var r in e) (r in t) || (t[r] = !0);
            return t;
          })(t.data.scopedSlots, n.$slots),
          i = 0;
        i < r.length;
        i++
      ) {
        o[(f = r[i])] || delete e[f];
      }
      var u = Object.keys(o);
      for (i = 0; i < u.length; i++) {
        var f;
        e[(f = u[i])] || (e[f] = P(n, f));
      }
      Pn.set(n, "slots", u);
    }
  }
  function Vn(n, e, t) {
    var r = w;
    O(n);
    try {
      return e(n);
    } catch (n) {
      if (!t) throw n;
      t(n);
    } finally {
      O(r);
    }
  }
  function Bn(n) {
    function e(n, t) {
      if (
        (void 0 === t && (t = new Set()),
        !t.has(n) && _(n) && !H(n) && !Y(n) && !X(n))
      ) {
        var r = x().util.defineReactive;
        Object.keys(n).forEach(function (o) {
          var i = n[o];
          r(n, o, i), i && (t.add(i), e(i, t));
        });
      }
    }
    function t(n, e) {
      return (
        void 0 === e && (e = new Map()),
        e.has(n)
          ? e.get(n)
          : (e.set(n, !1),
            l(n) && Y(n)
              ? (e.set(n, !0), !0)
              : !(!_(n) || X(n)) &&
                Object.keys(n).some(function (r) {
                  return t(n[r], e);
                }))
      );
    }
    n.mixin({
      beforeCreate: function () {
        var n = this,
          r = n.$options,
          o = r.setup,
          i = r.render;
        i &&
          (r.render = function () {
            for (var e = this, t = [], r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            return Vn(n, function () {
              return i.apply(e, t);
            });
          });
        if (!o) return;
        if ("function" != typeof o) return;
        var u = r.data;
        r.data = function () {
          return (
            (function (n, r) {
              void 0 === r && (r = {});
              var o,
                i = n.$options.setup,
                u = (function (n) {
                  var e = { slots: {} },
                    t = ["attrs"],
                    r = ["emit"];
                  return (
                    [
                      "root",
                      "parent",
                      "refs",
                      "listeners",
                      "isServer",
                      "ssrContext",
                    ].forEach(function (t) {
                      var r = "$" + t;
                      f(e, t, {
                        get: function () {
                          return n[r];
                        },
                        set: function () {},
                      });
                    }),
                    t.forEach(function (t) {
                      var r = "$" + t;
                      f(e, t, {
                        get: function () {
                          var e,
                            t,
                            o = un({}),
                            i = n[r],
                            u = function (e) {
                              f(o, e, {
                                get: function () {
                                  return n[r][e];
                                },
                              });
                            };
                          try {
                            for (
                              var a = U(Object.keys(i)), c = a.next();
                              !c.done;
                              c = a.next()
                            ) {
                              u(c.value);
                            }
                          } catch (n) {
                            e = { error: n };
                          } finally {
                            try {
                              c && !c.done && (t = a.return) && t.call(a);
                            } finally {
                              if (e) throw e.error;
                            }
                          }
                          return o;
                        },
                        set: function () {},
                      });
                    }),
                    r.forEach(function (t) {
                      var r = "$" + t;
                      f(e, t, {
                        get: function () {
                          return function () {
                            for (var e = [], t = 0; t < arguments.length; t++)
                              e[t] = arguments[t];
                            n[r].apply(n, e);
                          };
                        },
                      });
                    }),
                    e
                  );
                })(n);
              if (
                (a(r, "__ob__", rn()),
                Un(n, u.slots),
                Vn(n, function () {
                  o = i(r, u);
                }),
                !o)
              )
                return;
              if (y(o)) {
                var v = o;
                return void (n.$options.render = function () {
                  return (
                    Un(n, u.slots),
                    Vn(n, function () {
                      return v();
                    })
                  );
                });
              }
              if (_(o)) {
                Y(o) && (o = L(o)), Pn.set(n, "rawBindings", o);
                var s = o;
                Object.keys(s).forEach(function (r) {
                  var o = s[r];
                  H(o) ||
                    (Y(o)
                      ? l(o) && (o = G(o))
                      : y(o)
                      ? (o = o.bind(n))
                      : p(o)
                      ? t(o) && e(o)
                      : (o = G(o))),
                    (function (n, e, t) {
                      var r = n.$options.props;
                      e in n ||
                        (r && c(r, e)) ||
                        (H(t)
                          ? f(n, e, {
                              get: function () {
                                return t.value;
                              },
                              set: function (n) {
                                t.value = n;
                              },
                            })
                          : f(n, e, {
                              get: function () {
                                return Y(t) && t.__ob__.dep.depend(), t;
                              },
                              set: function (n) {
                                t = n;
                              },
                            }));
                    })(n, r, o);
                });
              }
            })(n, n.$props),
            "function" == typeof u ? u.call(n, n) : u || {}
          );
        };
      },
      mounted: function () {
        Dn(this);
      },
      updated: function () {
        var n;
        Dn(this),
          (null === (n = this.$vnode) || void 0 === n ? void 0 : n.context) &&
            Dn(this.$vnode.context);
      },
    });
  }
  function Tn(n, e) {
    if (!n) return e;
    if (!e) return n;
    for (
      var t, r, o, u = i ? Reflect.ownKeys(n) : Object.keys(n), f = 0;
      f < u.length;
      f++
    )
      "__ob__" !== (t = u[f]) &&
        ((r = e[t]),
        (o = n[t]),
        c(e, t)
          ? r !== o && _(r) && !H(r) && _(o) && !H(o) && Tn(o, r)
          : (e[t] = o));
    return e;
  }
  function Wn(n) {
    (function (n) {
      return c(n, $);
    })(n) ||
      ((n.config.optionMergeStrategies.setup = function (n, e) {
        return function (t, r) {
          return Tn(
            "function" == typeof n ? n(t, r) || {} : void 0,
            "function" == typeof e ? e(t, r) || {} : void 0
          );
        };
      }),
      (function (n) {
        (m = n),
          Object.defineProperty(n, $, {
            configurable: !0,
            writable: !0,
            value: !0,
          });
      })(n),
      Bn(n));
  }
  var An = {
    install: function (n) {
      return Wn(n);
    },
  };
  "undefined" != typeof window && window.Vue && window.Vue.use(An),
    (n.computed = function (n) {
      var e,
        t,
        r,
        o,
        i,
        f = null === (e = S()) || void 0 === e ? void 0 : e.proxy;
      if (
        ("function" == typeof n ? (t = n) : ((t = n.get), (r = n.set)),
        f && !f.$isServer)
      ) {
        var a,
          c = (function () {
            if (!k) {
              var n = C(x(), {
                  computed: {
                    value: function () {
                      return 0;
                    },
                  },
                }),
                e = n._computedWatchers.value.constructor,
                t = n._data.__ob__.dep.constructor;
              (k = { Watcher: e, Dep: t }), n.$destroy();
            }
            return k;
          })(),
          l = c.Watcher,
          v = c.Dep;
        (i = function () {
          return (
            a || (a = new l(f, t, u, { lazy: !0 })),
            a.dirty && a.evaluate(),
            v.target && a.depend(),
            a.value
          );
        }),
          (o = function (n) {
            r && r(n);
          });
      } else {
        var s = C(x(), { computed: { $$state: { get: t, set: r } } });
        f &&
          f.$on("hook:destroyed", function () {
            return s.$destroy();
          }),
          (i = function () {
            return s.$$state;
          }),
          (o = function (n) {
            s.$$state = n;
          });
      }
      return Q({ get: i, set: o });
    }),
    (n.createApp = function (n, e) {
      void 0 === e && (e = void 0);
      var t = x(),
        r = void 0;
      return {
        config: t.config,
        use: t.use.bind(t),
        mixin: t.mixin.bind(t),
        component: t.component.bind(t),
        directive: t.directive.bind(t),
        mount: function (o, i) {
          return r || ((r = new t(D({ propsData: e }, n))).$mount(o, i), r);
        },
        unmount: function () {
          r && (r.$destroy(), (r = void 0));
        },
      };
    }),
    (n.createRef = Q),
    (n.customRef = function (n) {
      var e = G(0);
      return Q(
        n(
          function () {
            e.value;
          },
          function () {
            ++e.value;
          }
        )
      );
    }),
    (n.default = An),
    (n.defineAsyncComponent = function (n) {
      y(n) && (n = { loader: n });
      var e = n.loader,
        t = n.loadingComponent,
        r = n.errorComponent,
        o = n.delay,
        i = void 0 === o ? 200 : o,
        u = n.timeout;
      n.suspensible;
      var f = n.onError,
        a = null,
        c = 0,
        l = function () {
          var n;
          return (
            a ||
            (n = a =
              e()
                .catch(function (n) {
                  if (((n = n instanceof Error ? n : new Error(String(n))), f))
                    return new Promise(function (e, t) {
                      f(
                        n,
                        function () {
                          return e((c++, (a = null), l()));
                        },
                        function () {
                          return t(n);
                        },
                        c + 1
                      );
                    });
                  throw n;
                })
                .then(function (e) {
                  return n !== a && a
                    ? a
                    : (e &&
                        (e.__esModule || "Module" === e[Symbol.toStringTag]) &&
                        (e = e.default),
                      e);
                }))
          );
        };
      return function () {
        return { component: l(), delay: i, timeout: u, error: r, loading: t };
      };
    }),
    (n.defineComponent = function (n) {
      return n;
    }),
    (n.del = function (n, e) {
      if ((x().util.warn, l(n) && d(e))) n.splice(e, 1);
      else {
        var t = n.__ob__;
        n._isVue ||
          (t && t.vmCount) ||
          (c(n, e) && (delete n[e], t && t.dep.notify()));
      }
    }),
    (n.getCurrentInstance = S),
    (n.h = function () {
      for (var n, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var r = null === (n = S()) || void 0 === n ? void 0 : n.proxy;
      return r
        ? r.$createElement.apply(r, e)
        : (Cn || (Cn = C(x()).$createElement), Cn.apply(Cn, e));
    }),
    (n.inject = function (n, e, t) {
      var r;
      void 0 === t && (t = !1);
      var o = null === (r = S()) || void 0 === r ? void 0 : r.proxy;
      if (o) {
        if (!n) return e;
        var i = (function (n, e) {
          for (var t = e; t; ) {
            if (t._provided && c(t._provided, n)) return t._provided[n];
            t = t.$parent;
          }
          return kn;
        })(n, o);
        return i !== kn ? i : t && y(e) ? e() : e;
      }
    }),
    (n.isRaw = X),
    (n.isReactive = Y),
    (n.isReadonly = function (n) {
      return K.has(n);
    }),
    (n.isRef = H),
    (n.markRaw = function (n) {
      if ((!_(n) && !l(n)) || !Object.isExtensible(n)) return n;
      var e = rn();
      return (e.__raw__ = !0), a(n, "__ob__", e), I.set(n, !0), n;
    }),
    (n.nextTick = function () {
      for (var n, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return null === (n = x()) || void 0 === n
        ? void 0
        : n.nextTick.apply(this, e);
    }),
    (n.onActivated = yn),
    (n.onBeforeMount = cn),
    (n.onBeforeUnmount = dn),
    (n.onBeforeUpdate = vn),
    (n.onDeactivated = bn),
    (n.onErrorCaptured = _n),
    (n.onMounted = ln),
    (n.onServerPrefetch = hn),
    (n.onUnmounted = pn),
    (n.onUpdated = sn),
    (n.provide = function (n, e) {
      var t = M();
      if (t) {
        if (!t._provided) {
          var r = {};
          f(t, "_provided", {
            get: function () {
              return r;
            },
            set: function (n) {
              return Object.assign(r, n);
            },
          });
        }
        t._provided[n] = e;
      }
    }),
    (n.proxyRefs = function (n) {
      var e, t, r;
      if (Y(n)) return n;
      var o = un((((e = {})[z] = n), e)),
        i = function (n) {
          f(o, n, {
            get: function () {
              return H(o[z][n]) ? o[z][n].value : o[z][n];
            },
            set: function (e) {
              if (H(o[z][n])) return (o[z][n].value = J(e));
              o[z][n] = J(e);
            },
          });
        };
      try {
        for (var u = U(Object.keys(n)), a = u.next(); !a.done; a = u.next()) {
          i(a.value);
        }
      } catch (n) {
        t = { error: n };
      } finally {
        try {
          a && !a.done && (r = u.return) && r.call(u);
        } finally {
          if (t) throw t.error;
        }
      }
      return o;
    }),
    (n.reactive = un),
    (n.readonly = function (n) {
      return n;
    }),
    (n.ref = G),
    (n.set = function (n, e, t) {
      var r,
        o = x().util;
      o.warn;
      var i = o.defineReactive;
      if (l(n)) {
        if (d(e))
          return (n.length = Math.max(n.length, e)), n.splice(e, 1, t), t;
        if ("length" === e && t !== n.length)
          return (
            (n.length = t),
            null === (r = n.__ob__) || void 0 === r || r.dep.notify(),
            t
          );
      }
      if (e in n && !(e in Object.prototype)) return (n[e] = t), t;
      var u = n.__ob__;
      return n._isVue || (u && u.vmCount)
        ? t
        : u
        ? (i(u.value, e, t), nn(n, e, t), u.dep.notify(), t)
        : ((n[e] = t), t);
    }),
    (n.shallowReactive = on),
    (n.shallowReadonly = function (n) {
      var e, t;
      if (!p(n)) return n;
      if ((!_(n) && !l(n)) || (!Object.isExtensible(n) && !H(n))) return n;
      var r = H(n) ? new q({}) : Y(n) ? en({}) : {},
        o = un({}).__ob__,
        i = function (e) {
          var t,
            i = n[e],
            u = Object.getOwnPropertyDescriptor(n, e);
          if (u) {
            if (!1 === u.configurable && !H(n)) return "continue";
            t = u.get;
          }
          f(r, e, {
            get: function () {
              var e = t ? t.call(n) : i;
              return o.dep.depend(), e;
            },
            set: function (n) {},
          });
        };
      try {
        for (var u = U(Object.keys(n)), a = u.next(); !a.done; a = u.next()) {
          i(a.value);
        }
      } catch (n) {
        e = { error: n };
      } finally {
        try {
          a && !a.done && (t = u.return) && t.call(u);
        } finally {
          if (e) throw e.error;
        }
      }
      return K.set(r, !0), r;
    }),
    (n.shallowRef = function (n) {
      var e;
      if (H(n)) return n;
      var t = on((((e = {})[z] = n), e));
      return Q({
        get: function () {
          return t[z];
        },
        set: function (n) {
          return (t[z] = n);
        },
      });
    }),
    (n.toRaw = function (n) {
      var e, t;
      return X(n) || !Object.isExtensible(n)
        ? n
        : (null ===
            (t = null === (e = n) || void 0 === e ? void 0 : e.__ob__) ||
          void 0 === t
            ? void 0
            : t.value) || n;
    }),
    (n.toRef = N),
    (n.toRefs = L),
    (n.triggerRef = function (n) {
      H(n) && (n.value = n.value);
    }),
    (n.unref = J),
    (n.useCSSModule = Mn),
    (n.useCssModule = Rn),
    (n.version = "1.0.2"),
    (n.warn = function (n) {
      var e;
      b(n, null === (e = S()) || void 0 === e ? void 0 : e.proxy);
    }),
    (n.watch = function (n, e, t) {
      var r = null;
      "function" == typeof e ? (r = e) : ((t = e), (r = null));
      var o = (function (n) {
        return D({ immediate: !1, deep: !1, flush: "pre" }, n);
      })(t);
      return On(wn(), n, r, o);
    }),
    (n.watchEffect = function (n, e) {
      var t = (function (n) {
        return D({ flush: "pre" }, n);
      })(e);
      return On(wn(), n, null, t);
    }),
    Object.defineProperty(n, "__esModule", { value: !0 });
});
