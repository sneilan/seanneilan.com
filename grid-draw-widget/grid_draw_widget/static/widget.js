function _a(A, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const r in n)
        if (r !== "default" && !(r in A)) {
          const o = Object.getOwnPropertyDescriptor(n, r);
          o && Object.defineProperty(A, r, o.get ? o : {
            enumerable: !0,
            get: () => n[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(A, Symbol.toStringTag, { value: "Module" }));
}
function Ta(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Hs = { exports: {} }, ao = {}, Ks = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var On = Symbol.for("react.element"), ba = Symbol.for("react.portal"), Pa = Symbol.for("react.fragment"), qa = Symbol.for("react.strict_mode"), ja = Symbol.for("react.profiler"), za = Symbol.for("react.provider"), Za = Symbol.for("react.context"), Wa = Symbol.for("react.forward_ref"), Oa = Symbol.for("react.suspense"), Xa = Symbol.for("react.memo"), Va = Symbol.for("react.lazy"), Ql = Symbol.iterator;
function $a(A) {
  return A === null || typeof A != "object" ? null : (A = Ql && A[Ql] || A["@@iterator"], typeof A == "function" ? A : null);
}
var _s = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Ts = Object.assign, bs = {};
function $t(A, e, t) {
  this.props = A, this.context = e, this.refs = bs, this.updater = t || _s;
}
$t.prototype.isReactComponent = {};
$t.prototype.setState = function(A, e) {
  if (typeof A != "object" && typeof A != "function" && A != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, A, e, "setState");
};
$t.prototype.forceUpdate = function(A) {
  this.updater.enqueueForceUpdate(this, A, "forceUpdate");
};
function Ps() {
}
Ps.prototype = $t.prototype;
function ig(A, e, t) {
  this.props = A, this.context = e, this.refs = bs, this.updater = t || _s;
}
var gg = ig.prototype = new Ps();
gg.constructor = ig;
Ts(gg, $t.prototype);
gg.isPureReactComponent = !0;
var Cl = Array.isArray, qs = Object.prototype.hasOwnProperty, lg = { current: null }, js = { key: !0, ref: !0, __self: !0, __source: !0 };
function zs(A, e, t) {
  var n, r = {}, o = null, i = null;
  if (e != null) for (n in e.ref !== void 0 && (i = e.ref), e.key !== void 0 && (o = "" + e.key), e) qs.call(e, n) && !js.hasOwnProperty(n) && (r[n] = e[n]);
  var g = arguments.length - 2;
  if (g === 1) r.children = t;
  else if (1 < g) {
    for (var l = Array(g), s = 0; s < g; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  if (A && A.defaultProps) for (n in g = A.defaultProps, g) r[n] === void 0 && (r[n] = g[n]);
  return { $$typeof: On, type: A, key: o, ref: i, props: r, _owner: lg.current };
}
function AQ(A, e) {
  return { $$typeof: On, type: A.type, key: e, ref: A.ref, props: A.props, _owner: A._owner };
}
function sg(A) {
  return typeof A == "object" && A !== null && A.$$typeof === On;
}
function eQ(A) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + A.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var El = /\/+/g;
function No(A, e) {
  return typeof A == "object" && A !== null && A.key != null ? eQ("" + A.key) : e.toString(36);
}
function mr(A, e, t, n, r) {
  var o = typeof A;
  (o === "undefined" || o === "boolean") && (A = null);
  var i = !1;
  if (A === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (A.$$typeof) {
        case On:
        case ba:
          i = !0;
      }
  }
  if (i) return i = A, r = r(i), A = n === "" ? "." + No(i, 0) : n, Cl(r) ? (t = "", A != null && (t = A.replace(El, "$&/") + "/"), mr(r, e, t, "", function(s) {
    return s;
  })) : r != null && (sg(r) && (r = AQ(r, t + (!r.key || i && i.key === r.key ? "" : ("" + r.key).replace(El, "$&/") + "/") + A)), e.push(r)), 1;
  if (i = 0, n = n === "" ? "." : n + ":", Cl(A)) for (var g = 0; g < A.length; g++) {
    o = A[g];
    var l = n + No(o, g);
    i += mr(o, e, t, l, r);
  }
  else if (l = $a(A), typeof l == "function") for (A = l.call(A), g = 0; !(o = A.next()).done; ) o = o.value, l = n + No(o, g++), i += mr(o, e, t, l, r);
  else if (o === "object") throw e = String(A), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(A).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function or(A, e, t) {
  if (A == null) return A;
  var n = [], r = 0;
  return mr(A, n, "", "", function(o) {
    return e.call(t, o, r++);
  }), n;
}
function tQ(A) {
  if (A._status === -1) {
    var e = A._result;
    e = e(), e.then(function(t) {
      (A._status === 0 || A._status === -1) && (A._status = 1, A._result = t);
    }, function(t) {
      (A._status === 0 || A._status === -1) && (A._status = 2, A._result = t);
    }), A._status === -1 && (A._status = 0, A._result = e);
  }
  if (A._status === 1) return A._result.default;
  throw A._result;
}
var FA = { current: null }, kr = { transition: null }, nQ = { ReactCurrentDispatcher: FA, ReactCurrentBatchConfig: kr, ReactCurrentOwner: lg };
function Zs() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = { map: or, forEach: function(A, e, t) {
  or(A, function() {
    e.apply(this, arguments);
  }, t);
}, count: function(A) {
  var e = 0;
  return or(A, function() {
    e++;
  }), e;
}, toArray: function(A) {
  return or(A, function(e) {
    return e;
  }) || [];
}, only: function(A) {
  if (!sg(A)) throw Error("React.Children.only expected to receive a single React element child.");
  return A;
} };
K.Component = $t;
K.Fragment = Pa;
K.Profiler = ja;
K.PureComponent = ig;
K.StrictMode = qa;
K.Suspense = Oa;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nQ;
K.act = Zs;
K.cloneElement = function(A, e, t) {
  if (A == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + A + ".");
  var n = Ts({}, A.props), r = A.key, o = A.ref, i = A._owner;
  if (e != null) {
    if (e.ref !== void 0 && (o = e.ref, i = lg.current), e.key !== void 0 && (r = "" + e.key), A.type && A.type.defaultProps) var g = A.type.defaultProps;
    for (l in e) qs.call(e, l) && !js.hasOwnProperty(l) && (n[l] = e[l] === void 0 && g !== void 0 ? g[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = t;
  else if (1 < l) {
    g = Array(l);
    for (var s = 0; s < l; s++) g[s] = arguments[s + 2];
    n.children = g;
  }
  return { $$typeof: On, type: A.type, key: r, ref: o, props: n, _owner: i };
};
K.createContext = function(A) {
  return A = { $$typeof: Za, _currentValue: A, _currentValue2: A, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, A.Provider = { $$typeof: za, _context: A }, A.Consumer = A;
};
K.createElement = zs;
K.createFactory = function(A) {
  var e = zs.bind(null, A);
  return e.type = A, e;
};
K.createRef = function() {
  return { current: null };
};
K.forwardRef = function(A) {
  return { $$typeof: Wa, render: A };
};
K.isValidElement = sg;
K.lazy = function(A) {
  return { $$typeof: Va, _payload: { _status: -1, _result: A }, _init: tQ };
};
K.memo = function(A, e) {
  return { $$typeof: Xa, type: A, compare: e === void 0 ? null : e };
};
K.startTransition = function(A) {
  var e = kr.transition;
  kr.transition = {};
  try {
    A();
  } finally {
    kr.transition = e;
  }
};
K.unstable_act = Zs;
K.useCallback = function(A, e) {
  return FA.current.useCallback(A, e);
};
K.useContext = function(A) {
  return FA.current.useContext(A);
};
K.useDebugValue = function() {
};
K.useDeferredValue = function(A) {
  return FA.current.useDeferredValue(A);
};
K.useEffect = function(A, e) {
  return FA.current.useEffect(A, e);
};
K.useId = function() {
  return FA.current.useId();
};
K.useImperativeHandle = function(A, e, t) {
  return FA.current.useImperativeHandle(A, e, t);
};
K.useInsertionEffect = function(A, e) {
  return FA.current.useInsertionEffect(A, e);
};
K.useLayoutEffect = function(A, e) {
  return FA.current.useLayoutEffect(A, e);
};
K.useMemo = function(A, e) {
  return FA.current.useMemo(A, e);
};
K.useReducer = function(A, e, t) {
  return FA.current.useReducer(A, e, t);
};
K.useRef = function(A) {
  return FA.current.useRef(A);
};
K.useState = function(A) {
  return FA.current.useState(A);
};
K.useSyncExternalStore = function(A, e, t) {
  return FA.current.useSyncExternalStore(A, e, t);
};
K.useTransition = function() {
  return FA.current.useTransition();
};
K.version = "18.3.1";
Ks.exports = K;
var v = Ks.exports;
const eA = /* @__PURE__ */ Ta(v), Ws = /* @__PURE__ */ _a({
  __proto__: null,
  default: eA
}, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rQ = v, oQ = Symbol.for("react.element"), iQ = Symbol.for("react.fragment"), gQ = Object.prototype.hasOwnProperty, lQ = rQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, sQ = { key: !0, ref: !0, __self: !0, __source: !0 };
function Os(A, e, t) {
  var n, r = {}, o = null, i = null;
  t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
  for (n in e) gQ.call(e, n) && !sQ.hasOwnProperty(n) && (r[n] = e[n]);
  if (A && A.defaultProps) for (n in e = A.defaultProps, e) r[n] === void 0 && (r[n] = e[n]);
  return { $$typeof: oQ, type: A, key: o, ref: i, props: r, _owner: lQ.current };
}
ao.Fragment = iQ;
ao.jsx = Os;
ao.jsxs = Os;
Hs.exports = ao;
var h = Hs.exports, Xs = { exports: {} }, bA = {}, Vs = { exports: {} }, $s = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(A) {
  function e(F, Y) {
    var D = F.length;
    F.push(Y);
    A: for (; 0 < D; ) {
      var z = D - 1 >>> 1, V = F[z];
      if (0 < r(V, Y)) F[z] = Y, F[D] = V, D = z;
      else break A;
    }
  }
  function t(F) {
    return F.length === 0 ? null : F[0];
  }
  function n(F) {
    if (F.length === 0) return null;
    var Y = F[0], D = F.pop();
    if (D !== Y) {
      F[0] = D;
      A: for (var z = 0, V = F.length, VA = V >>> 1; z < VA; ) {
        var MA = 2 * (z + 1) - 1, rA = F[MA], Z = MA + 1, qA = F[Z];
        if (0 > r(rA, D)) Z < V && 0 > r(qA, rA) ? (F[z] = qA, F[Z] = D, z = Z) : (F[z] = rA, F[MA] = D, z = MA);
        else if (Z < V && 0 > r(qA, D)) F[z] = qA, F[Z] = D, z = Z;
        else break A;
      }
    }
    return Y;
  }
  function r(F, Y) {
    var D = F.sortIndex - Y.sortIndex;
    return D !== 0 ? D : F.id - Y.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    A.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, g = i.now();
    A.unstable_now = function() {
      return i.now() - g;
    };
  }
  var l = [], s = [], E = 1, B = null, a = 3, u = !1, c = !1, f = !1, p = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function C(F) {
    for (var Y = t(s); Y !== null; ) {
      if (Y.callback === null) n(s);
      else if (Y.startTime <= F) n(s), Y.sortIndex = Y.expirationTime, e(l, Y);
      else break;
      Y = t(s);
    }
  }
  function w(F) {
    if (f = !1, C(F), !c) if (t(l) !== null) c = !0, j(m);
    else {
      var Y = t(s);
      Y !== null && GA(w, Y.startTime - F);
    }
  }
  function m(F, Y) {
    c = !1, f && (f = !1, Q(d), d = -1), u = !0;
    var D = a;
    try {
      for (C(Y), B = t(l); B !== null && (!(B.expirationTime > Y) || F && !iA()); ) {
        var z = B.callback;
        if (typeof z == "function") {
          B.callback = null, a = B.priorityLevel;
          var V = z(B.expirationTime <= Y);
          Y = A.unstable_now(), typeof V == "function" ? B.callback = V : B === t(l) && n(l), C(Y);
        } else n(l);
        B = t(l);
      }
      if (B !== null) var VA = !0;
      else {
        var MA = t(s);
        MA !== null && GA(w, MA.startTime - Y), VA = !1;
      }
      return VA;
    } finally {
      B = null, a = D, u = !1;
    }
  }
  var k = !1, G = null, d = -1, x = 5, J = -1;
  function iA() {
    return !(A.unstable_now() - J < x);
  }
  function DA() {
    if (G !== null) {
      var F = A.unstable_now();
      J = F;
      var Y = !0;
      try {
        Y = G(!0, F);
      } finally {
        Y ? YA() : (k = !1, G = null);
      }
    } else k = !1;
  }
  var YA;
  if (typeof I == "function") YA = function() {
    I(DA);
  };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(), sA = ie.port2;
    ie.port1.onmessage = DA, YA = function() {
      sA.postMessage(null);
    };
  } else YA = function() {
    p(DA, 0);
  };
  function j(F) {
    G = F, k || (k = !0, YA());
  }
  function GA(F, Y) {
    d = p(function() {
      F(A.unstable_now());
    }, Y);
  }
  A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(F) {
    F.callback = null;
  }, A.unstable_continueExecution = function() {
    c || u || (c = !0, j(m));
  }, A.unstable_forceFrameRate = function(F) {
    0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : x = 0 < F ? Math.floor(1e3 / F) : 5;
  }, A.unstable_getCurrentPriorityLevel = function() {
    return a;
  }, A.unstable_getFirstCallbackNode = function() {
    return t(l);
  }, A.unstable_next = function(F) {
    switch (a) {
      case 1:
      case 2:
      case 3:
        var Y = 3;
        break;
      default:
        Y = a;
    }
    var D = a;
    a = Y;
    try {
      return F();
    } finally {
      a = D;
    }
  }, A.unstable_pauseExecution = function() {
  }, A.unstable_requestPaint = function() {
  }, A.unstable_runWithPriority = function(F, Y) {
    switch (F) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        F = 3;
    }
    var D = a;
    a = F;
    try {
      return Y();
    } finally {
      a = D;
    }
  }, A.unstable_scheduleCallback = function(F, Y, D) {
    var z = A.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? z + D : z) : D = z, F) {
      case 1:
        var V = -1;
        break;
      case 2:
        V = 250;
        break;
      case 5:
        V = 1073741823;
        break;
      case 4:
        V = 1e4;
        break;
      default:
        V = 5e3;
    }
    return V = D + V, F = { id: E++, callback: Y, priorityLevel: F, startTime: D, expirationTime: V, sortIndex: -1 }, D > z ? (F.sortIndex = D, e(s, F), t(l) === null && F === t(s) && (f ? (Q(d), d = -1) : f = !0, GA(w, D - z))) : (F.sortIndex = V, e(l, F), c || u || (c = !0, j(m))), F;
  }, A.unstable_shouldYield = iA, A.unstable_wrapCallback = function(F) {
    var Y = a;
    return function() {
      var D = a;
      a = Y;
      try {
        return F.apply(this, arguments);
      } finally {
        a = D;
      }
    };
  };
})($s);
Vs.exports = $s;
var BQ = Vs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IQ = v, TA = BQ;
function y(A) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + A, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + A + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var AB = /* @__PURE__ */ new Set(), Nn = {};
function ct(A, e) {
  qt(A, e), qt(A + "Capture", e);
}
function qt(A, e) {
  for (Nn[A] = e, A = 0; A < e.length; A++) AB.add(e[A]);
}
var we = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ii = Object.prototype.hasOwnProperty, aQ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ul = {}, cl = {};
function QQ(A) {
  return Ii.call(cl, A) ? !0 : Ii.call(ul, A) ? !1 : aQ.test(A) ? cl[A] = !0 : (ul[A] = !0, !1);
}
function CQ(A, e, t, n) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : t !== null ? !t.acceptsBooleans : (A = A.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-");
    default:
      return !1;
  }
}
function EQ(A, e, t, n) {
  if (e === null || typeof e > "u" || CQ(A, e, t, n)) return !0;
  if (n) return !1;
  if (t !== null) switch (t.type) {
    case 3:
      return !e;
    case 4:
      return e === !1;
    case 5:
      return isNaN(e);
    case 6:
      return isNaN(e) || 1 > e;
  }
  return !1;
}
function vA(A, e, t, n, r, o, i) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = r, this.mustUseProperty = t, this.propertyName = A, this.type = e, this.sanitizeURL = o, this.removeEmptyString = i;
}
var fA = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(A) {
  fA[A] = new vA(A, 0, !1, A, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(A) {
  var e = A[0];
  fA[e] = new vA(e, 1, !1, A[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(A) {
  fA[A] = new vA(A, 2, !1, A.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(A) {
  fA[A] = new vA(A, 2, !1, A, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(A) {
  fA[A] = new vA(A, 3, !1, A.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(A) {
  fA[A] = new vA(A, 3, !0, A, null, !1, !1);
});
["capture", "download"].forEach(function(A) {
  fA[A] = new vA(A, 4, !1, A, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(A) {
  fA[A] = new vA(A, 6, !1, A, null, !1, !1);
});
["rowSpan", "start"].forEach(function(A) {
  fA[A] = new vA(A, 5, !1, A.toLowerCase(), null, !1, !1);
});
var Bg = /[\-:]([a-z])/g;
function Ig(A) {
  return A[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(A) {
  var e = A.replace(
    Bg,
    Ig
  );
  fA[e] = new vA(e, 1, !1, A, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(A) {
  var e = A.replace(Bg, Ig);
  fA[e] = new vA(e, 1, !1, A, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(A) {
  var e = A.replace(Bg, Ig);
  fA[e] = new vA(e, 1, !1, A, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(A) {
  fA[A] = new vA(A, 1, !1, A.toLowerCase(), null, !1, !1);
});
fA.xlinkHref = new vA("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(A) {
  fA[A] = new vA(A, 1, !1, A.toLowerCase(), null, !0, !0);
});
function ag(A, e, t, n) {
  var r = fA.hasOwnProperty(e) ? fA[e] : null;
  (r !== null ? r.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (EQ(e, t, r, n) && (t = null), n || r === null ? QQ(e) && (t === null ? A.removeAttribute(e) : A.setAttribute(e, "" + t)) : r.mustUseProperty ? A[r.propertyName] = t === null ? r.type === 3 ? !1 : "" : t : (e = r.attributeName, n = r.attributeNamespace, t === null ? A.removeAttribute(e) : (r = r.type, t = r === 3 || r === 4 && t === !0 ? "" : "" + t, n ? A.setAttributeNS(n, e, t) : A.setAttribute(e, t))));
}
var De = IQ.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ir = Symbol.for("react.element"), St = Symbol.for("react.portal"), Ft = Symbol.for("react.fragment"), Qg = Symbol.for("react.strict_mode"), ai = Symbol.for("react.profiler"), eB = Symbol.for("react.provider"), tB = Symbol.for("react.context"), Cg = Symbol.for("react.forward_ref"), Qi = Symbol.for("react.suspense"), Ci = Symbol.for("react.suspense_list"), Eg = Symbol.for("react.memo"), Ge = Symbol.for("react.lazy"), nB = Symbol.for("react.offscreen"), dl = Symbol.iterator;
function on(A) {
  return A === null || typeof A != "object" ? null : (A = dl && A[dl] || A["@@iterator"], typeof A == "function" ? A : null);
}
var nA = Object.assign, Ro;
function En(A) {
  if (Ro === void 0) try {
    throw Error();
  } catch (t) {
    var e = t.stack.trim().match(/\n( *(at )?)/);
    Ro = e && e[1] || "";
  }
  return `
` + Ro + A;
}
var Lo = !1;
function Uo(A, e) {
  if (!A || Lo) return "";
  Lo = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e) if (e = function() {
      throw Error();
    }, Object.defineProperty(e.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(e, []);
      } catch (s) {
        var n = s;
      }
      Reflect.construct(A, [], e);
    } else {
      try {
        e.call();
      } catch (s) {
        n = s;
      }
      A.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (s) {
        n = s;
      }
      A();
    }
  } catch (s) {
    if (s && n && typeof s.stack == "string") {
      for (var r = s.stack.split(`
`), o = n.stack.split(`
`), i = r.length - 1, g = o.length - 1; 1 <= i && 0 <= g && r[i] !== o[g]; ) g--;
      for (; 1 <= i && 0 <= g; i--, g--) if (r[i] !== o[g]) {
        if (i !== 1 || g !== 1)
          do
            if (i--, g--, 0 > g || r[i] !== o[g]) {
              var l = `
` + r[i].replace(" at new ", " at ");
              return A.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", A.displayName)), l;
            }
          while (1 <= i && 0 <= g);
        break;
      }
    }
  } finally {
    Lo = !1, Error.prepareStackTrace = t;
  }
  return (A = A ? A.displayName || A.name : "") ? En(A) : "";
}
function uQ(A) {
  switch (A.tag) {
    case 5:
      return En(A.type);
    case 16:
      return En("Lazy");
    case 13:
      return En("Suspense");
    case 19:
      return En("SuspenseList");
    case 0:
    case 2:
    case 15:
      return A = Uo(A.type, !1), A;
    case 11:
      return A = Uo(A.type.render, !1), A;
    case 1:
      return A = Uo(A.type, !0), A;
    default:
      return "";
  }
}
function Ei(A) {
  if (A == null) return null;
  if (typeof A == "function") return A.displayName || A.name || null;
  if (typeof A == "string") return A;
  switch (A) {
    case Ft:
      return "Fragment";
    case St:
      return "Portal";
    case ai:
      return "Profiler";
    case Qg:
      return "StrictMode";
    case Qi:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof A == "object") switch (A.$$typeof) {
    case tB:
      return (A.displayName || "Context") + ".Consumer";
    case eB:
      return (A._context.displayName || "Context") + ".Provider";
    case Cg:
      var e = A.render;
      return A = A.displayName, A || (A = e.displayName || e.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
    case Eg:
      return e = A.displayName || null, e !== null ? e : Ei(A.type) || "Memo";
    case Ge:
      e = A._payload, A = A._init;
      try {
        return Ei(A(e));
      } catch {
      }
  }
  return null;
}
function cQ(A) {
  var e = A.type;
  switch (A.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return A = e.render, A = A.displayName || A.name || "", e.displayName || (A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ei(e);
    case 8:
      return e === Qg ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function qe(A) {
  switch (typeof A) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return A;
    case "object":
      return A;
    default:
      return "";
  }
}
function rB(A) {
  var e = A.type;
  return (A = A.nodeName) && A.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function dQ(A) {
  var e = rB(A) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(A.constructor.prototype, e), n = "" + A[e];
  if (!A.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var r = t.get, o = t.set;
    return Object.defineProperty(A, e, { configurable: !0, get: function() {
      return r.call(this);
    }, set: function(i) {
      n = "" + i, o.call(this, i);
    } }), Object.defineProperty(A, e, { enumerable: t.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(i) {
      n = "" + i;
    }, stopTracking: function() {
      A._valueTracker = null, delete A[e];
    } };
  }
}
function gr(A) {
  A._valueTracker || (A._valueTracker = dQ(A));
}
function oB(A) {
  if (!A) return !1;
  var e = A._valueTracker;
  if (!e) return !0;
  var t = e.getValue(), n = "";
  return A && (n = rB(A) ? A.checked ? "true" : "false" : A.value), A = n, A !== t ? (e.setValue(A), !0) : !1;
}
function Hr(A) {
  if (A = A || (typeof document < "u" ? document : void 0), typeof A > "u") return null;
  try {
    return A.activeElement || A.body;
  } catch {
    return A.body;
  }
}
function ui(A, e) {
  var t = e.checked;
  return nA({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? A._wrapperState.initialChecked });
}
function fl(A, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue, n = e.checked != null ? e.checked : e.defaultChecked;
  t = qe(e.value != null ? e.value : t), A._wrapperState = { initialChecked: n, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function iB(A, e) {
  e = e.checked, e != null && ag(A, "checked", e, !1);
}
function ci(A, e) {
  iB(A, e);
  var t = qe(e.value), n = e.type;
  if (t != null) n === "number" ? (t === 0 && A.value === "" || A.value != t) && (A.value = "" + t) : A.value !== "" + t && (A.value = "" + t);
  else if (n === "submit" || n === "reset") {
    A.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? di(A, e.type, t) : e.hasOwnProperty("defaultValue") && di(A, e.type, qe(e.defaultValue)), e.checked == null && e.defaultChecked != null && (A.defaultChecked = !!e.defaultChecked);
}
function wl(A, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + A._wrapperState.initialValue, t || e === A.value || (A.value = e), A.defaultValue = e;
  }
  t = A.name, t !== "" && (A.name = ""), A.defaultChecked = !!A._wrapperState.initialChecked, t !== "" && (A.name = t);
}
function di(A, e, t) {
  (e !== "number" || Hr(A.ownerDocument) !== A) && (t == null ? A.defaultValue = "" + A._wrapperState.initialValue : A.defaultValue !== "" + t && (A.defaultValue = "" + t));
}
var un = Array.isArray;
function Ht(A, e, t, n) {
  if (A = A.options, e) {
    e = {};
    for (var r = 0; r < t.length; r++) e["$" + t[r]] = !0;
    for (t = 0; t < A.length; t++) r = e.hasOwnProperty("$" + A[t].value), A[t].selected !== r && (A[t].selected = r), r && n && (A[t].defaultSelected = !0);
  } else {
    for (t = "" + qe(t), e = null, r = 0; r < A.length; r++) {
      if (A[r].value === t) {
        A[r].selected = !0, n && (A[r].defaultSelected = !0);
        return;
      }
      e !== null || A[r].disabled || (e = A[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function fi(A, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(y(91));
  return nA({}, e, { value: void 0, defaultValue: void 0, children: "" + A._wrapperState.initialValue });
}
function pl(A, e) {
  var t = e.value;
  if (t == null) {
    if (t = e.children, e = e.defaultValue, t != null) {
      if (e != null) throw Error(y(92));
      if (un(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  A._wrapperState = { initialValue: qe(t) };
}
function gB(A, e) {
  var t = qe(e.value), n = qe(e.defaultValue);
  t != null && (t = "" + t, t !== A.value && (A.value = t), e.defaultValue == null && A.defaultValue !== t && (A.defaultValue = t)), n != null && (A.defaultValue = "" + n);
}
function hl(A) {
  var e = A.textContent;
  e === A._wrapperState.initialValue && e !== "" && e !== null && (A.value = e);
}
function lB(A) {
  switch (A) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wi(A, e) {
  return A == null || A === "http://www.w3.org/1999/xhtml" ? lB(e) : A === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A;
}
var lr, sB = function(A) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
    MSApp.execUnsafeLocalFunction(function() {
      return A(e, t, n, r);
    });
  } : A;
}(function(A, e) {
  if (A.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in A) A.innerHTML = e;
  else {
    for (lr = lr || document.createElement("div"), lr.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = lr.firstChild; A.firstChild; ) A.removeChild(A.firstChild);
    for (; e.firstChild; ) A.appendChild(e.firstChild);
  }
});
function Rn(A, e) {
  if (e) {
    var t = A.firstChild;
    if (t && t === A.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  A.textContent = e;
}
var pn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, fQ = ["Webkit", "ms", "Moz", "O"];
Object.keys(pn).forEach(function(A) {
  fQ.forEach(function(e) {
    e = e + A.charAt(0).toUpperCase() + A.substring(1), pn[e] = pn[A];
  });
});
function BB(A, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || pn.hasOwnProperty(A) && pn[A] ? ("" + e).trim() : e + "px";
}
function IB(A, e) {
  A = A.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var n = t.indexOf("--") === 0, r = BB(t, e[t], n);
    t === "float" && (t = "cssFloat"), n ? A.setProperty(t, r) : A[t] = r;
  }
}
var wQ = nA({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function pi(A, e) {
  if (e) {
    if (wQ[A] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(y(137, A));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(y(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(y(62));
  }
}
function hi(A, e) {
  if (A.indexOf("-") === -1) return typeof e.is == "string";
  switch (A) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var yi = null;
function ug(A) {
  return A = A.target || A.srcElement || window, A.correspondingUseElement && (A = A.correspondingUseElement), A.nodeType === 3 ? A.parentNode : A;
}
var Di = null, Kt = null, _t = null;
function yl(A) {
  if (A = $n(A)) {
    if (typeof Di != "function") throw Error(y(280));
    var e = A.stateNode;
    e && (e = co(e), Di(A.stateNode, A.type, e));
  }
}
function aB(A) {
  Kt ? _t ? _t.push(A) : _t = [A] : Kt = A;
}
function QB() {
  if (Kt) {
    var A = Kt, e = _t;
    if (_t = Kt = null, yl(A), e) for (A = 0; A < e.length; A++) yl(e[A]);
  }
}
function CB(A, e) {
  return A(e);
}
function EB() {
}
var xo = !1;
function uB(A, e, t) {
  if (xo) return A(e, t);
  xo = !0;
  try {
    return CB(A, e, t);
  } finally {
    xo = !1, (Kt !== null || _t !== null) && (EB(), QB());
  }
}
function Ln(A, e) {
  var t = A.stateNode;
  if (t === null) return null;
  var n = co(t);
  if (n === null) return null;
  t = n[e];
  A: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || (A = A.type, n = !(A === "button" || A === "input" || A === "select" || A === "textarea")), A = !n;
      break A;
    default:
      A = !1;
  }
  if (A) return null;
  if (t && typeof t != "function") throw Error(y(231, e, typeof t));
  return t;
}
var mi = !1;
if (we) try {
  var gn = {};
  Object.defineProperty(gn, "passive", { get: function() {
    mi = !0;
  } }), window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
} catch {
  mi = !1;
}
function pQ(A, e, t, n, r, o, i, g, l) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, s);
  } catch (E) {
    this.onError(E);
  }
}
var hn = !1, Kr = null, _r = !1, ki = null, hQ = { onError: function(A) {
  hn = !0, Kr = A;
} };
function yQ(A, e, t, n, r, o, i, g, l) {
  hn = !1, Kr = null, pQ.apply(hQ, arguments);
}
function DQ(A, e, t, n, r, o, i, g, l) {
  if (yQ.apply(this, arguments), hn) {
    if (hn) {
      var s = Kr;
      hn = !1, Kr = null;
    } else throw Error(y(198));
    _r || (_r = !0, ki = s);
  }
}
function dt(A) {
  var e = A, t = A;
  if (A.alternate) for (; e.return; ) e = e.return;
  else {
    A = e;
    do
      e = A, e.flags & 4098 && (t = e.return), A = e.return;
    while (A);
  }
  return e.tag === 3 ? t : null;
}
function cB(A) {
  if (A.tag === 13) {
    var e = A.memoizedState;
    if (e === null && (A = A.alternate, A !== null && (e = A.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function Dl(A) {
  if (dt(A) !== A) throw Error(y(188));
}
function mQ(A) {
  var e = A.alternate;
  if (!e) {
    if (e = dt(A), e === null) throw Error(y(188));
    return e !== A ? null : A;
  }
  for (var t = A, n = e; ; ) {
    var r = t.return;
    if (r === null) break;
    var o = r.alternate;
    if (o === null) {
      if (n = r.return, n !== null) {
        t = n;
        continue;
      }
      break;
    }
    if (r.child === o.child) {
      for (o = r.child; o; ) {
        if (o === t) return Dl(r), A;
        if (o === n) return Dl(r), e;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== n.return) t = r, n = o;
    else {
      for (var i = !1, g = r.child; g; ) {
        if (g === t) {
          i = !0, t = r, n = o;
          break;
        }
        if (g === n) {
          i = !0, n = r, t = o;
          break;
        }
        g = g.sibling;
      }
      if (!i) {
        for (g = o.child; g; ) {
          if (g === t) {
            i = !0, t = o, n = r;
            break;
          }
          if (g === n) {
            i = !0, n = o, t = r;
            break;
          }
          g = g.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (t.alternate !== n) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? A : e;
}
function dB(A) {
  return A = mQ(A), A !== null ? fB(A) : null;
}
function fB(A) {
  if (A.tag === 5 || A.tag === 6) return A;
  for (A = A.child; A !== null; ) {
    var e = fB(A);
    if (e !== null) return e;
    A = A.sibling;
  }
  return null;
}
var wB = TA.unstable_scheduleCallback, ml = TA.unstable_cancelCallback, kQ = TA.unstable_shouldYield, SQ = TA.unstable_requestPaint, lA = TA.unstable_now, FQ = TA.unstable_getCurrentPriorityLevel, cg = TA.unstable_ImmediatePriority, pB = TA.unstable_UserBlockingPriority, Tr = TA.unstable_NormalPriority, vQ = TA.unstable_LowPriority, hB = TA.unstable_IdlePriority, Qo = null, Be = null;
function GQ(A) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(Qo, A, void 0, (A.current.flags & 128) === 128);
  } catch {
  }
}
var ne = Math.clz32 ? Math.clz32 : RQ, MQ = Math.log, NQ = Math.LN2;
function RQ(A) {
  return A >>>= 0, A === 0 ? 32 : 31 - (MQ(A) / NQ | 0) | 0;
}
var sr = 64, Br = 4194304;
function cn(A) {
  switch (A & -A) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return A & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return A & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return A;
  }
}
function br(A, e) {
  var t = A.pendingLanes;
  if (t === 0) return 0;
  var n = 0, r = A.suspendedLanes, o = A.pingedLanes, i = t & 268435455;
  if (i !== 0) {
    var g = i & ~r;
    g !== 0 ? n = cn(g) : (o &= i, o !== 0 && (n = cn(o)));
  } else i = t & ~r, i !== 0 ? n = cn(i) : o !== 0 && (n = cn(o));
  if (n === 0) return 0;
  if (e !== 0 && e !== n && !(e & r) && (r = n & -n, o = e & -e, r >= o || r === 16 && (o & 4194240) !== 0)) return e;
  if (n & 4 && (n |= t & 16), e = A.entangledLanes, e !== 0) for (A = A.entanglements, e &= n; 0 < e; ) t = 31 - ne(e), r = 1 << t, n |= A[t], e &= ~r;
  return n;
}
function LQ(A, e) {
  switch (A) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function UQ(A, e) {
  for (var t = A.suspendedLanes, n = A.pingedLanes, r = A.expirationTimes, o = A.pendingLanes; 0 < o; ) {
    var i = 31 - ne(o), g = 1 << i, l = r[i];
    l === -1 ? (!(g & t) || g & n) && (r[i] = LQ(g, e)) : l <= e && (A.expiredLanes |= g), o &= ~g;
  }
}
function Si(A) {
  return A = A.pendingLanes & -1073741825, A !== 0 ? A : A & 1073741824 ? 1073741824 : 0;
}
function yB() {
  var A = sr;
  return sr <<= 1, !(sr & 4194240) && (sr = 64), A;
}
function Yo(A) {
  for (var e = [], t = 0; 31 > t; t++) e.push(A);
  return e;
}
function Xn(A, e, t) {
  A.pendingLanes |= e, e !== 536870912 && (A.suspendedLanes = 0, A.pingedLanes = 0), A = A.eventTimes, e = 31 - ne(e), A[e] = t;
}
function xQ(A, e) {
  var t = A.pendingLanes & ~e;
  A.pendingLanes = e, A.suspendedLanes = 0, A.pingedLanes = 0, A.expiredLanes &= e, A.mutableReadLanes &= e, A.entangledLanes &= e, e = A.entanglements;
  var n = A.eventTimes;
  for (A = A.expirationTimes; 0 < t; ) {
    var r = 31 - ne(t), o = 1 << r;
    e[r] = 0, n[r] = -1, A[r] = -1, t &= ~o;
  }
}
function dg(A, e) {
  var t = A.entangledLanes |= e;
  for (A = A.entanglements; t; ) {
    var n = 31 - ne(t), r = 1 << n;
    r & e | A[n] & e && (A[n] |= e), t &= ~r;
  }
}
var P = 0;
function DB(A) {
  return A &= -A, 1 < A ? 4 < A ? A & 268435455 ? 16 : 536870912 : 4 : 1;
}
var mB, fg, kB, SB, FB, Fi = !1, Ir = [], Ye = null, Je = null, He = null, Un = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new Map(), Ne = [], YQ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function kl(A, e) {
  switch (A) {
    case "focusin":
    case "focusout":
      Ye = null;
      break;
    case "dragenter":
    case "dragleave":
      Je = null;
      break;
    case "mouseover":
    case "mouseout":
      He = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      xn.delete(e.pointerId);
  }
}
function ln(A, e, t, n, r, o) {
  return A === null || A.nativeEvent !== o ? (A = { blockedOn: e, domEventName: t, eventSystemFlags: n, nativeEvent: o, targetContainers: [r] }, e !== null && (e = $n(e), e !== null && fg(e)), A) : (A.eventSystemFlags |= n, e = A.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), A);
}
function JQ(A, e, t, n, r) {
  switch (e) {
    case "focusin":
      return Ye = ln(Ye, A, e, t, n, r), !0;
    case "dragenter":
      return Je = ln(Je, A, e, t, n, r), !0;
    case "mouseover":
      return He = ln(He, A, e, t, n, r), !0;
    case "pointerover":
      var o = r.pointerId;
      return Un.set(o, ln(Un.get(o) || null, A, e, t, n, r)), !0;
    case "gotpointercapture":
      return o = r.pointerId, xn.set(o, ln(xn.get(o) || null, A, e, t, n, r)), !0;
  }
  return !1;
}
function vB(A) {
  var e = it(A.target);
  if (e !== null) {
    var t = dt(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = cB(t), e !== null) {
          A.blockedOn = e, FB(A.priority, function() {
            kB(t);
          });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        A.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  A.blockedOn = null;
}
function Sr(A) {
  if (A.blockedOn !== null) return !1;
  for (var e = A.targetContainers; 0 < e.length; ) {
    var t = vi(A.domEventName, A.eventSystemFlags, e[0], A.nativeEvent);
    if (t === null) {
      t = A.nativeEvent;
      var n = new t.constructor(t.type, t);
      yi = n, t.target.dispatchEvent(n), yi = null;
    } else return e = $n(t), e !== null && fg(e), A.blockedOn = t, !1;
    e.shift();
  }
  return !0;
}
function Sl(A, e, t) {
  Sr(A) && t.delete(e);
}
function HQ() {
  Fi = !1, Ye !== null && Sr(Ye) && (Ye = null), Je !== null && Sr(Je) && (Je = null), He !== null && Sr(He) && (He = null), Un.forEach(Sl), xn.forEach(Sl);
}
function sn(A, e) {
  A.blockedOn === e && (A.blockedOn = null, Fi || (Fi = !0, TA.unstable_scheduleCallback(TA.unstable_NormalPriority, HQ)));
}
function Yn(A) {
  function e(r) {
    return sn(r, A);
  }
  if (0 < Ir.length) {
    sn(Ir[0], A);
    for (var t = 1; t < Ir.length; t++) {
      var n = Ir[t];
      n.blockedOn === A && (n.blockedOn = null);
    }
  }
  for (Ye !== null && sn(Ye, A), Je !== null && sn(Je, A), He !== null && sn(He, A), Un.forEach(e), xn.forEach(e), t = 0; t < Ne.length; t++) n = Ne[t], n.blockedOn === A && (n.blockedOn = null);
  for (; 0 < Ne.length && (t = Ne[0], t.blockedOn === null); ) vB(t), t.blockedOn === null && Ne.shift();
}
var Tt = De.ReactCurrentBatchConfig, Pr = !0;
function KQ(A, e, t, n) {
  var r = P, o = Tt.transition;
  Tt.transition = null;
  try {
    P = 1, wg(A, e, t, n);
  } finally {
    P = r, Tt.transition = o;
  }
}
function _Q(A, e, t, n) {
  var r = P, o = Tt.transition;
  Tt.transition = null;
  try {
    P = 4, wg(A, e, t, n);
  } finally {
    P = r, Tt.transition = o;
  }
}
function wg(A, e, t, n) {
  if (Pr) {
    var r = vi(A, e, t, n);
    if (r === null) zo(A, e, n, qr, t), kl(A, n);
    else if (JQ(r, A, e, t, n)) n.stopPropagation();
    else if (kl(A, n), e & 4 && -1 < YQ.indexOf(A)) {
      for (; r !== null; ) {
        var o = $n(r);
        if (o !== null && mB(o), o = vi(A, e, t, n), o === null && zo(A, e, n, qr, t), o === r) break;
        r = o;
      }
      r !== null && n.stopPropagation();
    } else zo(A, e, n, null, t);
  }
}
var qr = null;
function vi(A, e, t, n) {
  if (qr = null, A = ug(n), A = it(A), A !== null) if (e = dt(A), e === null) A = null;
  else if (t = e.tag, t === 13) {
    if (A = cB(e), A !== null) return A;
    A = null;
  } else if (t === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    A = null;
  } else e !== A && (A = null);
  return qr = A, null;
}
function GB(A) {
  switch (A) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (FQ()) {
        case cg:
          return 1;
        case pB:
          return 4;
        case Tr:
        case vQ:
          return 16;
        case hB:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Le = null, pg = null, Fr = null;
function MB() {
  if (Fr) return Fr;
  var A, e = pg, t = e.length, n, r = "value" in Le ? Le.value : Le.textContent, o = r.length;
  for (A = 0; A < t && e[A] === r[A]; A++) ;
  var i = t - A;
  for (n = 1; n <= i && e[t - n] === r[o - n]; n++) ;
  return Fr = r.slice(A, 1 < n ? 1 - n : void 0);
}
function vr(A) {
  var e = A.keyCode;
  return "charCode" in A ? (A = A.charCode, A === 0 && e === 13 && (A = 13)) : A = e, A === 10 && (A = 13), 32 <= A || A === 13 ? A : 0;
}
function ar() {
  return !0;
}
function Fl() {
  return !1;
}
function PA(A) {
  function e(t, n, r, o, i) {
    this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var g in A) A.hasOwnProperty(g) && (t = A[g], this[g] = t ? t(o) : o[g]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : Fl, this.isPropagationStopped = Fl, this;
  }
  return nA(e.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = ar);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = ar);
  }, persist: function() {
  }, isPersistent: ar }), e;
}
var An = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(A) {
  return A.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hg = PA(An), Vn = nA({}, An, { view: 0, detail: 0 }), TQ = PA(Vn), Jo, Ho, Bn, Co = nA({}, Vn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yg, button: 0, buttons: 0, relatedTarget: function(A) {
  return A.relatedTarget === void 0 ? A.fromElement === A.srcElement ? A.toElement : A.fromElement : A.relatedTarget;
}, movementX: function(A) {
  return "movementX" in A ? A.movementX : (A !== Bn && (Bn && A.type === "mousemove" ? (Jo = A.screenX - Bn.screenX, Ho = A.screenY - Bn.screenY) : Ho = Jo = 0, Bn = A), Jo);
}, movementY: function(A) {
  return "movementY" in A ? A.movementY : Ho;
} }), vl = PA(Co), bQ = nA({}, Co, { dataTransfer: 0 }), PQ = PA(bQ), qQ = nA({}, Vn, { relatedTarget: 0 }), Ko = PA(qQ), jQ = nA({}, An, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zQ = PA(jQ), ZQ = nA({}, An, { clipboardData: function(A) {
  return "clipboardData" in A ? A.clipboardData : window.clipboardData;
} }), WQ = PA(ZQ), OQ = nA({}, An, { data: 0 }), Gl = PA(OQ), XQ = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, VQ = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, $Q = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function AC(A) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(A) : (A = $Q[A]) ? !!e[A] : !1;
}
function yg() {
  return AC;
}
var eC = nA({}, Vn, { key: function(A) {
  if (A.key) {
    var e = XQ[A.key] || A.key;
    if (e !== "Unidentified") return e;
  }
  return A.type === "keypress" ? (A = vr(A), A === 13 ? "Enter" : String.fromCharCode(A)) : A.type === "keydown" || A.type === "keyup" ? VQ[A.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yg, charCode: function(A) {
  return A.type === "keypress" ? vr(A) : 0;
}, keyCode: function(A) {
  return A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
}, which: function(A) {
  return A.type === "keypress" ? vr(A) : A.type === "keydown" || A.type === "keyup" ? A.keyCode : 0;
} }), tC = PA(eC), nC = nA({}, Co, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ml = PA(nC), rC = nA({}, Vn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yg }), oC = PA(rC), iC = nA({}, An, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gC = PA(iC), lC = nA({}, Co, {
  deltaX: function(A) {
    return "deltaX" in A ? A.deltaX : "wheelDeltaX" in A ? -A.wheelDeltaX : 0;
  },
  deltaY: function(A) {
    return "deltaY" in A ? A.deltaY : "wheelDeltaY" in A ? -A.wheelDeltaY : "wheelDelta" in A ? -A.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), sC = PA(lC), BC = [9, 13, 27, 32], Dg = we && "CompositionEvent" in window, yn = null;
we && "documentMode" in document && (yn = document.documentMode);
var IC = we && "TextEvent" in window && !yn, NB = we && (!Dg || yn && 8 < yn && 11 >= yn), Nl = " ", Rl = !1;
function RB(A, e) {
  switch (A) {
    case "keyup":
      return BC.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function LB(A) {
  return A = A.detail, typeof A == "object" && "data" in A ? A.data : null;
}
var vt = !1;
function aC(A, e) {
  switch (A) {
    case "compositionend":
      return LB(e);
    case "keypress":
      return e.which !== 32 ? null : (Rl = !0, Nl);
    case "textInput":
      return A = e.data, A === Nl && Rl ? null : A;
    default:
      return null;
  }
}
function QC(A, e) {
  if (vt) return A === "compositionend" || !Dg && RB(A, e) ? (A = MB(), Fr = pg = Le = null, vt = !1, A) : null;
  switch (A) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return NB && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var CC = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ll(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e === "input" ? !!CC[A.type] : e === "textarea";
}
function UB(A, e, t, n) {
  aB(n), e = jr(e, "onChange"), 0 < e.length && (t = new hg("onChange", "change", null, t, n), A.push({ event: t, listeners: e }));
}
var Dn = null, Jn = null;
function EC(A) {
  jB(A, 0);
}
function Eo(A) {
  var e = Nt(A);
  if (oB(e)) return A;
}
function uC(A, e) {
  if (A === "change") return e;
}
var xB = !1;
if (we) {
  var _o;
  if (we) {
    var To = "oninput" in document;
    if (!To) {
      var Ul = document.createElement("div");
      Ul.setAttribute("oninput", "return;"), To = typeof Ul.oninput == "function";
    }
    _o = To;
  } else _o = !1;
  xB = _o && (!document.documentMode || 9 < document.documentMode);
}
function xl() {
  Dn && (Dn.detachEvent("onpropertychange", YB), Jn = Dn = null);
}
function YB(A) {
  if (A.propertyName === "value" && Eo(Jn)) {
    var e = [];
    UB(e, Jn, A, ug(A)), uB(EC, e);
  }
}
function cC(A, e, t) {
  A === "focusin" ? (xl(), Dn = e, Jn = t, Dn.attachEvent("onpropertychange", YB)) : A === "focusout" && xl();
}
function dC(A) {
  if (A === "selectionchange" || A === "keyup" || A === "keydown") return Eo(Jn);
}
function fC(A, e) {
  if (A === "click") return Eo(e);
}
function wC(A, e) {
  if (A === "input" || A === "change") return Eo(e);
}
function pC(A, e) {
  return A === e && (A !== 0 || 1 / A === 1 / e) || A !== A && e !== e;
}
var oe = typeof Object.is == "function" ? Object.is : pC;
function Hn(A, e) {
  if (oe(A, e)) return !0;
  if (typeof A != "object" || A === null || typeof e != "object" || e === null) return !1;
  var t = Object.keys(A), n = Object.keys(e);
  if (t.length !== n.length) return !1;
  for (n = 0; n < t.length; n++) {
    var r = t[n];
    if (!Ii.call(e, r) || !oe(A[r], e[r])) return !1;
  }
  return !0;
}
function Yl(A) {
  for (; A && A.firstChild; ) A = A.firstChild;
  return A;
}
function Jl(A, e) {
  var t = Yl(A);
  A = 0;
  for (var n; t; ) {
    if (t.nodeType === 3) {
      if (n = A + t.textContent.length, A <= e && n >= e) return { node: t, offset: e - A };
      A = n;
    }
    A: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break A;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Yl(t);
  }
}
function JB(A, e) {
  return A && e ? A === e ? !0 : A && A.nodeType === 3 ? !1 : e && e.nodeType === 3 ? JB(A, e.parentNode) : "contains" in A ? A.contains(e) : A.compareDocumentPosition ? !!(A.compareDocumentPosition(e) & 16) : !1 : !1;
}
function HB() {
  for (var A = window, e = Hr(); e instanceof A.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) A = e.contentWindow;
    else break;
    e = Hr(A.document);
  }
  return e;
}
function mg(A) {
  var e = A && A.nodeName && A.nodeName.toLowerCase();
  return e && (e === "input" && (A.type === "text" || A.type === "search" || A.type === "tel" || A.type === "url" || A.type === "password") || e === "textarea" || A.contentEditable === "true");
}
function hC(A) {
  var e = HB(), t = A.focusedElem, n = A.selectionRange;
  if (e !== t && t && t.ownerDocument && JB(t.ownerDocument.documentElement, t)) {
    if (n !== null && mg(t)) {
      if (e = n.start, A = n.end, A === void 0 && (A = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(A, t.value.length);
      else if (A = (e = t.ownerDocument || document) && e.defaultView || window, A.getSelection) {
        A = A.getSelection();
        var r = t.textContent.length, o = Math.min(n.start, r);
        n = n.end === void 0 ? o : Math.min(n.end, r), !A.extend && o > n && (r = n, n = o, o = r), r = Jl(t, o);
        var i = Jl(
          t,
          n
        );
        r && i && (A.rangeCount !== 1 || A.anchorNode !== r.node || A.anchorOffset !== r.offset || A.focusNode !== i.node || A.focusOffset !== i.offset) && (e = e.createRange(), e.setStart(r.node, r.offset), A.removeAllRanges(), o > n ? (A.addRange(e), A.extend(i.node, i.offset)) : (e.setEnd(i.node, i.offset), A.addRange(e)));
      }
    }
    for (e = [], A = t; A = A.parentNode; ) A.nodeType === 1 && e.push({ element: A, left: A.scrollLeft, top: A.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) A = e[t], A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
  }
}
var yC = we && "documentMode" in document && 11 >= document.documentMode, Gt = null, Gi = null, mn = null, Mi = !1;
function Hl(A, e, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  Mi || Gt == null || Gt !== Hr(n) || (n = Gt, "selectionStart" in n && mg(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), mn && Hn(mn, n) || (mn = n, n = jr(Gi, "onSelect"), 0 < n.length && (e = new hg("onSelect", "select", null, e, t), A.push({ event: e, listeners: n }), e.target = Gt)));
}
function Qr(A, e) {
  var t = {};
  return t[A.toLowerCase()] = e.toLowerCase(), t["Webkit" + A] = "webkit" + e, t["Moz" + A] = "moz" + e, t;
}
var Mt = { animationend: Qr("Animation", "AnimationEnd"), animationiteration: Qr("Animation", "AnimationIteration"), animationstart: Qr("Animation", "AnimationStart"), transitionend: Qr("Transition", "TransitionEnd") }, bo = {}, KB = {};
we && (KB = document.createElement("div").style, "AnimationEvent" in window || (delete Mt.animationend.animation, delete Mt.animationiteration.animation, delete Mt.animationstart.animation), "TransitionEvent" in window || delete Mt.transitionend.transition);
function uo(A) {
  if (bo[A]) return bo[A];
  if (!Mt[A]) return A;
  var e = Mt[A], t;
  for (t in e) if (e.hasOwnProperty(t) && t in KB) return bo[A] = e[t];
  return A;
}
var _B = uo("animationend"), TB = uo("animationiteration"), bB = uo("animationstart"), PB = uo("transitionend"), qB = /* @__PURE__ */ new Map(), Kl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ze(A, e) {
  qB.set(A, e), ct(e, [A]);
}
for (var Po = 0; Po < Kl.length; Po++) {
  var qo = Kl[Po], DC = qo.toLowerCase(), mC = qo[0].toUpperCase() + qo.slice(1);
  ze(DC, "on" + mC);
}
ze(_B, "onAnimationEnd");
ze(TB, "onAnimationIteration");
ze(bB, "onAnimationStart");
ze("dblclick", "onDoubleClick");
ze("focusin", "onFocus");
ze("focusout", "onBlur");
ze(PB, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
ct("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ct("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ct("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ct("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ct("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var dn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kC = new Set("cancel close invalid load scroll toggle".split(" ").concat(dn));
function _l(A, e, t) {
  var n = A.type || "unknown-event";
  A.currentTarget = t, DQ(n, e, void 0, A), A.currentTarget = null;
}
function jB(A, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < A.length; t++) {
    var n = A[t], r = n.event;
    n = n.listeners;
    A: {
      var o = void 0;
      if (e) for (var i = n.length - 1; 0 <= i; i--) {
        var g = n[i], l = g.instance, s = g.currentTarget;
        if (g = g.listener, l !== o && r.isPropagationStopped()) break A;
        _l(r, g, s), o = l;
      }
      else for (i = 0; i < n.length; i++) {
        if (g = n[i], l = g.instance, s = g.currentTarget, g = g.listener, l !== o && r.isPropagationStopped()) break A;
        _l(r, g, s), o = l;
      }
    }
  }
  if (_r) throw A = ki, _r = !1, ki = null, A;
}
function O(A, e) {
  var t = e[xi];
  t === void 0 && (t = e[xi] = /* @__PURE__ */ new Set());
  var n = A + "__bubble";
  t.has(n) || (zB(e, A, 2, !1), t.add(n));
}
function jo(A, e, t) {
  var n = 0;
  e && (n |= 4), zB(t, A, n, e);
}
var Cr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(A) {
  if (!A[Cr]) {
    A[Cr] = !0, AB.forEach(function(t) {
      t !== "selectionchange" && (kC.has(t) || jo(t, !1, A), jo(t, !0, A));
    });
    var e = A.nodeType === 9 ? A : A.ownerDocument;
    e === null || e[Cr] || (e[Cr] = !0, jo("selectionchange", !1, e));
  }
}
function zB(A, e, t, n) {
  switch (GB(e)) {
    case 1:
      var r = KQ;
      break;
    case 4:
      r = _Q;
      break;
    default:
      r = wg;
  }
  t = r.bind(null, e, t, A), r = void 0, !mi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), n ? r !== void 0 ? A.addEventListener(e, t, { capture: !0, passive: r }) : A.addEventListener(e, t, !0) : r !== void 0 ? A.addEventListener(e, t, { passive: r }) : A.addEventListener(e, t, !1);
}
function zo(A, e, t, n, r) {
  var o = n;
  if (!(e & 1) && !(e & 2) && n !== null) A: for (; ; ) {
    if (n === null) return;
    var i = n.tag;
    if (i === 3 || i === 4) {
      var g = n.stateNode.containerInfo;
      if (g === r || g.nodeType === 8 && g.parentNode === r) break;
      if (i === 4) for (i = n.return; i !== null; ) {
        var l = i.tag;
        if ((l === 3 || l === 4) && (l = i.stateNode.containerInfo, l === r || l.nodeType === 8 && l.parentNode === r)) return;
        i = i.return;
      }
      for (; g !== null; ) {
        if (i = it(g), i === null) return;
        if (l = i.tag, l === 5 || l === 6) {
          n = o = i;
          continue A;
        }
        g = g.parentNode;
      }
    }
    n = n.return;
  }
  uB(function() {
    var s = o, E = ug(t), B = [];
    A: {
      var a = qB.get(A);
      if (a !== void 0) {
        var u = hg, c = A;
        switch (A) {
          case "keypress":
            if (vr(t) === 0) break A;
          case "keydown":
          case "keyup":
            u = tC;
            break;
          case "focusin":
            c = "focus", u = Ko;
            break;
          case "focusout":
            c = "blur", u = Ko;
            break;
          case "beforeblur":
          case "afterblur":
            u = Ko;
            break;
          case "click":
            if (t.button === 2) break A;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            u = vl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            u = PQ;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            u = oC;
            break;
          case _B:
          case TB:
          case bB:
            u = zQ;
            break;
          case PB:
            u = gC;
            break;
          case "scroll":
            u = TQ;
            break;
          case "wheel":
            u = sC;
            break;
          case "copy":
          case "cut":
          case "paste":
            u = WQ;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            u = Ml;
        }
        var f = (e & 4) !== 0, p = !f && A === "scroll", Q = f ? a !== null ? a + "Capture" : null : a;
        f = [];
        for (var I = s, C; I !== null; ) {
          C = I;
          var w = C.stateNode;
          if (C.tag === 5 && w !== null && (C = w, Q !== null && (w = Ln(I, Q), w != null && f.push(_n(I, w, C)))), p) break;
          I = I.return;
        }
        0 < f.length && (a = new u(a, c, null, t, E), B.push({ event: a, listeners: f }));
      }
    }
    if (!(e & 7)) {
      A: {
        if (a = A === "mouseover" || A === "pointerover", u = A === "mouseout" || A === "pointerout", a && t !== yi && (c = t.relatedTarget || t.fromElement) && (it(c) || c[pe])) break A;
        if ((u || a) && (a = E.window === E ? E : (a = E.ownerDocument) ? a.defaultView || a.parentWindow : window, u ? (c = t.relatedTarget || t.toElement, u = s, c = c ? it(c) : null, c !== null && (p = dt(c), c !== p || c.tag !== 5 && c.tag !== 6) && (c = null)) : (u = null, c = s), u !== c)) {
          if (f = vl, w = "onMouseLeave", Q = "onMouseEnter", I = "mouse", (A === "pointerout" || A === "pointerover") && (f = Ml, w = "onPointerLeave", Q = "onPointerEnter", I = "pointer"), p = u == null ? a : Nt(u), C = c == null ? a : Nt(c), a = new f(w, I + "leave", u, t, E), a.target = p, a.relatedTarget = C, w = null, it(E) === s && (f = new f(Q, I + "enter", c, t, E), f.target = C, f.relatedTarget = p, w = f), p = w, u && c) e: {
            for (f = u, Q = c, I = 0, C = f; C; C = kt(C)) I++;
            for (C = 0, w = Q; w; w = kt(w)) C++;
            for (; 0 < I - C; ) f = kt(f), I--;
            for (; 0 < C - I; ) Q = kt(Q), C--;
            for (; I--; ) {
              if (f === Q || Q !== null && f === Q.alternate) break e;
              f = kt(f), Q = kt(Q);
            }
            f = null;
          }
          else f = null;
          u !== null && Tl(B, a, u, f, !1), c !== null && p !== null && Tl(B, p, c, f, !0);
        }
      }
      A: {
        if (a = s ? Nt(s) : window, u = a.nodeName && a.nodeName.toLowerCase(), u === "select" || u === "input" && a.type === "file") var m = uC;
        else if (Ll(a)) if (xB) m = wC;
        else {
          m = dC;
          var k = cC;
        }
        else (u = a.nodeName) && u.toLowerCase() === "input" && (a.type === "checkbox" || a.type === "radio") && (m = fC);
        if (m && (m = m(A, s))) {
          UB(B, m, t, E);
          break A;
        }
        k && k(A, a, s), A === "focusout" && (k = a._wrapperState) && k.controlled && a.type === "number" && di(a, "number", a.value);
      }
      switch (k = s ? Nt(s) : window, A) {
        case "focusin":
          (Ll(k) || k.contentEditable === "true") && (Gt = k, Gi = s, mn = null);
          break;
        case "focusout":
          mn = Gi = Gt = null;
          break;
        case "mousedown":
          Mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Mi = !1, Hl(B, t, E);
          break;
        case "selectionchange":
          if (yC) break;
        case "keydown":
        case "keyup":
          Hl(B, t, E);
      }
      var G;
      if (Dg) A: {
        switch (A) {
          case "compositionstart":
            var d = "onCompositionStart";
            break A;
          case "compositionend":
            d = "onCompositionEnd";
            break A;
          case "compositionupdate":
            d = "onCompositionUpdate";
            break A;
        }
        d = void 0;
      }
      else vt ? RB(A, t) && (d = "onCompositionEnd") : A === "keydown" && t.keyCode === 229 && (d = "onCompositionStart");
      d && (NB && t.locale !== "ko" && (vt || d !== "onCompositionStart" ? d === "onCompositionEnd" && vt && (G = MB()) : (Le = E, pg = "value" in Le ? Le.value : Le.textContent, vt = !0)), k = jr(s, d), 0 < k.length && (d = new Gl(d, A, null, t, E), B.push({ event: d, listeners: k }), G ? d.data = G : (G = LB(t), G !== null && (d.data = G)))), (G = IC ? aC(A, t) : QC(A, t)) && (s = jr(s, "onBeforeInput"), 0 < s.length && (E = new Gl("onBeforeInput", "beforeinput", null, t, E), B.push({ event: E, listeners: s }), E.data = G));
    }
    jB(B, e);
  });
}
function _n(A, e, t) {
  return { instance: A, listener: e, currentTarget: t };
}
function jr(A, e) {
  for (var t = e + "Capture", n = []; A !== null; ) {
    var r = A, o = r.stateNode;
    r.tag === 5 && o !== null && (r = o, o = Ln(A, t), o != null && n.unshift(_n(A, o, r)), o = Ln(A, e), o != null && n.push(_n(A, o, r))), A = A.return;
  }
  return n;
}
function kt(A) {
  if (A === null) return null;
  do
    A = A.return;
  while (A && A.tag !== 5);
  return A || null;
}
function Tl(A, e, t, n, r) {
  for (var o = e._reactName, i = []; t !== null && t !== n; ) {
    var g = t, l = g.alternate, s = g.stateNode;
    if (l !== null && l === n) break;
    g.tag === 5 && s !== null && (g = s, r ? (l = Ln(t, o), l != null && i.unshift(_n(t, l, g))) : r || (l = Ln(t, o), l != null && i.push(_n(t, l, g)))), t = t.return;
  }
  i.length !== 0 && A.push({ event: e, listeners: i });
}
var SC = /\r\n?/g, FC = /\u0000|\uFFFD/g;
function bl(A) {
  return (typeof A == "string" ? A : "" + A).replace(SC, `
`).replace(FC, "");
}
function Er(A, e, t) {
  if (e = bl(e), bl(A) !== e && t) throw Error(y(425));
}
function zr() {
}
var Ni = null, Ri = null;
function Li(A, e) {
  return A === "textarea" || A === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var Ui = typeof setTimeout == "function" ? setTimeout : void 0, vC = typeof clearTimeout == "function" ? clearTimeout : void 0, Pl = typeof Promise == "function" ? Promise : void 0, GC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pl < "u" ? function(A) {
  return Pl.resolve(null).then(A).catch(MC);
} : Ui;
function MC(A) {
  setTimeout(function() {
    throw A;
  });
}
function Zo(A, e) {
  var t = e, n = 0;
  do {
    var r = t.nextSibling;
    if (A.removeChild(t), r && r.nodeType === 8) if (t = r.data, t === "/$") {
      if (n === 0) {
        A.removeChild(r), Yn(e);
        return;
      }
      n--;
    } else t !== "$" && t !== "$?" && t !== "$!" || n++;
    t = r;
  } while (t);
  Yn(e);
}
function Ke(A) {
  for (; A != null; A = A.nextSibling) {
    var e = A.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = A.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return A;
}
function ql(A) {
  A = A.previousSibling;
  for (var e = 0; A; ) {
    if (A.nodeType === 8) {
      var t = A.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return A;
        e--;
      } else t === "/$" && e++;
    }
    A = A.previousSibling;
  }
  return null;
}
var en = Math.random().toString(36).slice(2), se = "__reactFiber$" + en, Tn = "__reactProps$" + en, pe = "__reactContainer$" + en, xi = "__reactEvents$" + en, NC = "__reactListeners$" + en, RC = "__reactHandles$" + en;
function it(A) {
  var e = A[se];
  if (e) return e;
  for (var t = A.parentNode; t; ) {
    if (e = t[pe] || t[se]) {
      if (t = e.alternate, e.child !== null || t !== null && t.child !== null) for (A = ql(A); A !== null; ) {
        if (t = A[se]) return t;
        A = ql(A);
      }
      return e;
    }
    A = t, t = A.parentNode;
  }
  return null;
}
function $n(A) {
  return A = A[se] || A[pe], !A || A.tag !== 5 && A.tag !== 6 && A.tag !== 13 && A.tag !== 3 ? null : A;
}
function Nt(A) {
  if (A.tag === 5 || A.tag === 6) return A.stateNode;
  throw Error(y(33));
}
function co(A) {
  return A[Tn] || null;
}
var Yi = [], Rt = -1;
function Ze(A) {
  return { current: A };
}
function X(A) {
  0 > Rt || (A.current = Yi[Rt], Yi[Rt] = null, Rt--);
}
function W(A, e) {
  Rt++, Yi[Rt] = A.current, A.current = e;
}
var je = {}, yA = Ze(je), LA = Ze(!1), at = je;
function jt(A, e) {
  var t = A.type.contextTypes;
  if (!t) return je;
  var n = A.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
  var r = {}, o;
  for (o in t) r[o] = e[o];
  return n && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = e, A.__reactInternalMemoizedMaskedChildContext = r), r;
}
function UA(A) {
  return A = A.childContextTypes, A != null;
}
function Zr() {
  X(LA), X(yA);
}
function jl(A, e, t) {
  if (yA.current !== je) throw Error(y(168));
  W(yA, e), W(LA, t);
}
function ZB(A, e, t) {
  var n = A.stateNode;
  if (e = e.childContextTypes, typeof n.getChildContext != "function") return t;
  n = n.getChildContext();
  for (var r in n) if (!(r in e)) throw Error(y(108, cQ(A) || "Unknown", r));
  return nA({}, t, n);
}
function Wr(A) {
  return A = (A = A.stateNode) && A.__reactInternalMemoizedMergedChildContext || je, at = yA.current, W(yA, A), W(LA, LA.current), !0;
}
function zl(A, e, t) {
  var n = A.stateNode;
  if (!n) throw Error(y(169));
  t ? (A = ZB(A, e, at), n.__reactInternalMemoizedMergedChildContext = A, X(LA), X(yA), W(yA, A)) : X(LA), W(LA, t);
}
var Ee = null, fo = !1, Wo = !1;
function WB(A) {
  Ee === null ? Ee = [A] : Ee.push(A);
}
function LC(A) {
  fo = !0, WB(A);
}
function We() {
  if (!Wo && Ee !== null) {
    Wo = !0;
    var A = 0, e = P;
    try {
      var t = Ee;
      for (P = 1; A < t.length; A++) {
        var n = t[A];
        do
          n = n(!0);
        while (n !== null);
      }
      Ee = null, fo = !1;
    } catch (r) {
      throw Ee !== null && (Ee = Ee.slice(A + 1)), wB(cg, We), r;
    } finally {
      P = e, Wo = !1;
    }
  }
  return null;
}
var Lt = [], Ut = 0, Or = null, Xr = 0, jA = [], zA = 0, Qt = null, ce = 1, de = "";
function nt(A, e) {
  Lt[Ut++] = Xr, Lt[Ut++] = Or, Or = A, Xr = e;
}
function OB(A, e, t) {
  jA[zA++] = ce, jA[zA++] = de, jA[zA++] = Qt, Qt = A;
  var n = ce;
  A = de;
  var r = 32 - ne(n) - 1;
  n &= ~(1 << r), t += 1;
  var o = 32 - ne(e) + r;
  if (30 < o) {
    var i = r - r % 5;
    o = (n & (1 << i) - 1).toString(32), n >>= i, r -= i, ce = 1 << 32 - ne(e) + r | t << r | n, de = o + A;
  } else ce = 1 << o | t << r | n, de = A;
}
function kg(A) {
  A.return !== null && (nt(A, 1), OB(A, 1, 0));
}
function Sg(A) {
  for (; A === Or; ) Or = Lt[--Ut], Lt[Ut] = null, Xr = Lt[--Ut], Lt[Ut] = null;
  for (; A === Qt; ) Qt = jA[--zA], jA[zA] = null, de = jA[--zA], jA[zA] = null, ce = jA[--zA], jA[zA] = null;
}
var _A = null, KA = null, $ = !1, te = null;
function XB(A, e) {
  var t = ZA(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = A, e = A.deletions, e === null ? (A.deletions = [t], A.flags |= 16) : e.push(t);
}
function Zl(A, e) {
  switch (A.tag) {
    case 5:
      var t = A.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (A.stateNode = e, _A = A, KA = Ke(e.firstChild), !0) : !1;
    case 6:
      return e = A.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (A.stateNode = e, _A = A, KA = null, !0) : !1;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Qt !== null ? { id: ce, overflow: de } : null, A.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = ZA(18, null, null, 0), t.stateNode = e, t.return = A, A.child = t, _A = A, KA = null, !0) : !1;
    default:
      return !1;
  }
}
function Ji(A) {
  return (A.mode & 1) !== 0 && (A.flags & 128) === 0;
}
function Hi(A) {
  if ($) {
    var e = KA;
    if (e) {
      var t = e;
      if (!Zl(A, e)) {
        if (Ji(A)) throw Error(y(418));
        e = Ke(t.nextSibling);
        var n = _A;
        e && Zl(A, e) ? XB(n, t) : (A.flags = A.flags & -4097 | 2, $ = !1, _A = A);
      }
    } else {
      if (Ji(A)) throw Error(y(418));
      A.flags = A.flags & -4097 | 2, $ = !1, _A = A;
    }
  }
}
function Wl(A) {
  for (A = A.return; A !== null && A.tag !== 5 && A.tag !== 3 && A.tag !== 13; ) A = A.return;
  _A = A;
}
function ur(A) {
  if (A !== _A) return !1;
  if (!$) return Wl(A), $ = !0, !1;
  var e;
  if ((e = A.tag !== 3) && !(e = A.tag !== 5) && (e = A.type, e = e !== "head" && e !== "body" && !Li(A.type, A.memoizedProps)), e && (e = KA)) {
    if (Ji(A)) throw VB(), Error(y(418));
    for (; e; ) XB(A, e), e = Ke(e.nextSibling);
  }
  if (Wl(A), A.tag === 13) {
    if (A = A.memoizedState, A = A !== null ? A.dehydrated : null, !A) throw Error(y(317));
    A: {
      for (A = A.nextSibling, e = 0; A; ) {
        if (A.nodeType === 8) {
          var t = A.data;
          if (t === "/$") {
            if (e === 0) {
              KA = Ke(A.nextSibling);
              break A;
            }
            e--;
          } else t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        A = A.nextSibling;
      }
      KA = null;
    }
  } else KA = _A ? Ke(A.stateNode.nextSibling) : null;
  return !0;
}
function VB() {
  for (var A = KA; A; ) A = Ke(A.nextSibling);
}
function zt() {
  KA = _A = null, $ = !1;
}
function Fg(A) {
  te === null ? te = [A] : te.push(A);
}
var UC = De.ReactCurrentBatchConfig;
function In(A, e, t) {
  if (A = t.ref, A !== null && typeof A != "function" && typeof A != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(y(309));
        var n = t.stateNode;
      }
      if (!n) throw Error(y(147, A));
      var r = n, o = "" + A;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === o ? e.ref : (e = function(i) {
        var g = r.refs;
        i === null ? delete g[o] : g[o] = i;
      }, e._stringRef = o, e);
    }
    if (typeof A != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, A));
  }
  return A;
}
function cr(A, e) {
  throw A = Object.prototype.toString.call(e), Error(y(31, A === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : A));
}
function Ol(A) {
  var e = A._init;
  return e(A._payload);
}
function $B(A) {
  function e(Q, I) {
    if (A) {
      var C = Q.deletions;
      C === null ? (Q.deletions = [I], Q.flags |= 16) : C.push(I);
    }
  }
  function t(Q, I) {
    if (!A) return null;
    for (; I !== null; ) e(Q, I), I = I.sibling;
    return null;
  }
  function n(Q, I) {
    for (Q = /* @__PURE__ */ new Map(); I !== null; ) I.key !== null ? Q.set(I.key, I) : Q.set(I.index, I), I = I.sibling;
    return Q;
  }
  function r(Q, I) {
    return Q = Pe(Q, I), Q.index = 0, Q.sibling = null, Q;
  }
  function o(Q, I, C) {
    return Q.index = C, A ? (C = Q.alternate, C !== null ? (C = C.index, C < I ? (Q.flags |= 2, I) : C) : (Q.flags |= 2, I)) : (Q.flags |= 1048576, I);
  }
  function i(Q) {
    return A && Q.alternate === null && (Q.flags |= 2), Q;
  }
  function g(Q, I, C, w) {
    return I === null || I.tag !== 6 ? (I = ti(C, Q.mode, w), I.return = Q, I) : (I = r(I, C), I.return = Q, I);
  }
  function l(Q, I, C, w) {
    var m = C.type;
    return m === Ft ? E(Q, I, C.props.children, w, C.key) : I !== null && (I.elementType === m || typeof m == "object" && m !== null && m.$$typeof === Ge && Ol(m) === I.type) ? (w = r(I, C.props), w.ref = In(Q, I, C), w.return = Q, w) : (w = xr(C.type, C.key, C.props, null, Q.mode, w), w.ref = In(Q, I, C), w.return = Q, w);
  }
  function s(Q, I, C, w) {
    return I === null || I.tag !== 4 || I.stateNode.containerInfo !== C.containerInfo || I.stateNode.implementation !== C.implementation ? (I = ni(C, Q.mode, w), I.return = Q, I) : (I = r(I, C.children || []), I.return = Q, I);
  }
  function E(Q, I, C, w, m) {
    return I === null || I.tag !== 7 ? (I = Bt(C, Q.mode, w, m), I.return = Q, I) : (I = r(I, C), I.return = Q, I);
  }
  function B(Q, I, C) {
    if (typeof I == "string" && I !== "" || typeof I == "number") return I = ti("" + I, Q.mode, C), I.return = Q, I;
    if (typeof I == "object" && I !== null) {
      switch (I.$$typeof) {
        case ir:
          return C = xr(I.type, I.key, I.props, null, Q.mode, C), C.ref = In(Q, null, I), C.return = Q, C;
        case St:
          return I = ni(I, Q.mode, C), I.return = Q, I;
        case Ge:
          var w = I._init;
          return B(Q, w(I._payload), C);
      }
      if (un(I) || on(I)) return I = Bt(I, Q.mode, C, null), I.return = Q, I;
      cr(Q, I);
    }
    return null;
  }
  function a(Q, I, C, w) {
    var m = I !== null ? I.key : null;
    if (typeof C == "string" && C !== "" || typeof C == "number") return m !== null ? null : g(Q, I, "" + C, w);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ir:
          return C.key === m ? l(Q, I, C, w) : null;
        case St:
          return C.key === m ? s(Q, I, C, w) : null;
        case Ge:
          return m = C._init, a(
            Q,
            I,
            m(C._payload),
            w
          );
      }
      if (un(C) || on(C)) return m !== null ? null : E(Q, I, C, w, null);
      cr(Q, C);
    }
    return null;
  }
  function u(Q, I, C, w, m) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return Q = Q.get(C) || null, g(I, Q, "" + w, m);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ir:
          return Q = Q.get(w.key === null ? C : w.key) || null, l(I, Q, w, m);
        case St:
          return Q = Q.get(w.key === null ? C : w.key) || null, s(I, Q, w, m);
        case Ge:
          var k = w._init;
          return u(Q, I, C, k(w._payload), m);
      }
      if (un(w) || on(w)) return Q = Q.get(C) || null, E(I, Q, w, m, null);
      cr(I, w);
    }
    return null;
  }
  function c(Q, I, C, w) {
    for (var m = null, k = null, G = I, d = I = 0, x = null; G !== null && d < C.length; d++) {
      G.index > d ? (x = G, G = null) : x = G.sibling;
      var J = a(Q, G, C[d], w);
      if (J === null) {
        G === null && (G = x);
        break;
      }
      A && G && J.alternate === null && e(Q, G), I = o(J, I, d), k === null ? m = J : k.sibling = J, k = J, G = x;
    }
    if (d === C.length) return t(Q, G), $ && nt(Q, d), m;
    if (G === null) {
      for (; d < C.length; d++) G = B(Q, C[d], w), G !== null && (I = o(G, I, d), k === null ? m = G : k.sibling = G, k = G);
      return $ && nt(Q, d), m;
    }
    for (G = n(Q, G); d < C.length; d++) x = u(G, Q, d, C[d], w), x !== null && (A && x.alternate !== null && G.delete(x.key === null ? d : x.key), I = o(x, I, d), k === null ? m = x : k.sibling = x, k = x);
    return A && G.forEach(function(iA) {
      return e(Q, iA);
    }), $ && nt(Q, d), m;
  }
  function f(Q, I, C, w) {
    var m = on(C);
    if (typeof m != "function") throw Error(y(150));
    if (C = m.call(C), C == null) throw Error(y(151));
    for (var k = m = null, G = I, d = I = 0, x = null, J = C.next(); G !== null && !J.done; d++, J = C.next()) {
      G.index > d ? (x = G, G = null) : x = G.sibling;
      var iA = a(Q, G, J.value, w);
      if (iA === null) {
        G === null && (G = x);
        break;
      }
      A && G && iA.alternate === null && e(Q, G), I = o(iA, I, d), k === null ? m = iA : k.sibling = iA, k = iA, G = x;
    }
    if (J.done) return t(
      Q,
      G
    ), $ && nt(Q, d), m;
    if (G === null) {
      for (; !J.done; d++, J = C.next()) J = B(Q, J.value, w), J !== null && (I = o(J, I, d), k === null ? m = J : k.sibling = J, k = J);
      return $ && nt(Q, d), m;
    }
    for (G = n(Q, G); !J.done; d++, J = C.next()) J = u(G, Q, d, J.value, w), J !== null && (A && J.alternate !== null && G.delete(J.key === null ? d : J.key), I = o(J, I, d), k === null ? m = J : k.sibling = J, k = J);
    return A && G.forEach(function(DA) {
      return e(Q, DA);
    }), $ && nt(Q, d), m;
  }
  function p(Q, I, C, w) {
    if (typeof C == "object" && C !== null && C.type === Ft && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case ir:
          A: {
            for (var m = C.key, k = I; k !== null; ) {
              if (k.key === m) {
                if (m = C.type, m === Ft) {
                  if (k.tag === 7) {
                    t(Q, k.sibling), I = r(k, C.props.children), I.return = Q, Q = I;
                    break A;
                  }
                } else if (k.elementType === m || typeof m == "object" && m !== null && m.$$typeof === Ge && Ol(m) === k.type) {
                  t(Q, k.sibling), I = r(k, C.props), I.ref = In(Q, k, C), I.return = Q, Q = I;
                  break A;
                }
                t(Q, k);
                break;
              } else e(Q, k);
              k = k.sibling;
            }
            C.type === Ft ? (I = Bt(C.props.children, Q.mode, w, C.key), I.return = Q, Q = I) : (w = xr(C.type, C.key, C.props, null, Q.mode, w), w.ref = In(Q, I, C), w.return = Q, Q = w);
          }
          return i(Q);
        case St:
          A: {
            for (k = C.key; I !== null; ) {
              if (I.key === k) if (I.tag === 4 && I.stateNode.containerInfo === C.containerInfo && I.stateNode.implementation === C.implementation) {
                t(Q, I.sibling), I = r(I, C.children || []), I.return = Q, Q = I;
                break A;
              } else {
                t(Q, I);
                break;
              }
              else e(Q, I);
              I = I.sibling;
            }
            I = ni(C, Q.mode, w), I.return = Q, Q = I;
          }
          return i(Q);
        case Ge:
          return k = C._init, p(Q, I, k(C._payload), w);
      }
      if (un(C)) return c(Q, I, C, w);
      if (on(C)) return f(Q, I, C, w);
      cr(Q, C);
    }
    return typeof C == "string" && C !== "" || typeof C == "number" ? (C = "" + C, I !== null && I.tag === 6 ? (t(Q, I.sibling), I = r(I, C), I.return = Q, Q = I) : (t(Q, I), I = ti(C, Q.mode, w), I.return = Q, Q = I), i(Q)) : t(Q, I);
  }
  return p;
}
var Zt = $B(!0), AI = $B(!1), Vr = Ze(null), $r = null, xt = null, vg = null;
function Gg() {
  vg = xt = $r = null;
}
function Mg(A) {
  var e = Vr.current;
  X(Vr), A._currentValue = e;
}
function Ki(A, e, t) {
  for (; A !== null; ) {
    var n = A.alternate;
    if ((A.childLanes & e) !== e ? (A.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), A === t) break;
    A = A.return;
  }
}
function bt(A, e) {
  $r = A, vg = xt = null, A = A.dependencies, A !== null && A.firstContext !== null && (A.lanes & e && (RA = !0), A.firstContext = null);
}
function OA(A) {
  var e = A._currentValue;
  if (vg !== A) if (A = { context: A, memoizedValue: e, next: null }, xt === null) {
    if ($r === null) throw Error(y(308));
    xt = A, $r.dependencies = { lanes: 0, firstContext: A };
  } else xt = xt.next = A;
  return e;
}
var gt = null;
function Ng(A) {
  gt === null ? gt = [A] : gt.push(A);
}
function eI(A, e, t, n) {
  var r = e.interleaved;
  return r === null ? (t.next = t, Ng(e)) : (t.next = r.next, r.next = t), e.interleaved = t, he(A, n);
}
function he(A, e) {
  A.lanes |= e;
  var t = A.alternate;
  for (t !== null && (t.lanes |= e), t = A, A = A.return; A !== null; ) A.childLanes |= e, t = A.alternate, t !== null && (t.childLanes |= e), t = A, A = A.return;
  return t.tag === 3 ? t.stateNode : null;
}
var Me = !1;
function Rg(A) {
  A.updateQueue = { baseState: A.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function tI(A, e) {
  A = A.updateQueue, e.updateQueue === A && (e.updateQueue = { baseState: A.baseState, firstBaseUpdate: A.firstBaseUpdate, lastBaseUpdate: A.lastBaseUpdate, shared: A.shared, effects: A.effects });
}
function fe(A, e) {
  return { eventTime: A, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function _e(A, e, t) {
  var n = A.updateQueue;
  if (n === null) return null;
  if (n = n.shared, _ & 2) {
    var r = n.pending;
    return r === null ? e.next = e : (e.next = r.next, r.next = e), n.pending = e, he(A, t);
  }
  return r = n.interleaved, r === null ? (e.next = e, Ng(n)) : (e.next = r.next, r.next = e), n.interleaved = e, he(A, t);
}
function Gr(A, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var n = e.lanes;
    n &= A.pendingLanes, t |= n, e.lanes = t, dg(A, t);
  }
}
function Xl(A, e) {
  var t = A.updateQueue, n = A.alternate;
  if (n !== null && (n = n.updateQueue, t === n)) {
    var r = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? r = o = i : o = o.next = i, t = t.next;
      } while (t !== null);
      o === null ? r = o = e : o = o.next = e;
    } else r = o = e;
    t = { baseState: n.baseState, firstBaseUpdate: r, lastBaseUpdate: o, shared: n.shared, effects: n.effects }, A.updateQueue = t;
    return;
  }
  A = t.lastBaseUpdate, A === null ? t.firstBaseUpdate = e : A.next = e, t.lastBaseUpdate = e;
}
function Ao(A, e, t, n) {
  var r = A.updateQueue;
  Me = !1;
  var o = r.firstBaseUpdate, i = r.lastBaseUpdate, g = r.shared.pending;
  if (g !== null) {
    r.shared.pending = null;
    var l = g, s = l.next;
    l.next = null, i === null ? o = s : i.next = s, i = l;
    var E = A.alternate;
    E !== null && (E = E.updateQueue, g = E.lastBaseUpdate, g !== i && (g === null ? E.firstBaseUpdate = s : g.next = s, E.lastBaseUpdate = l));
  }
  if (o !== null) {
    var B = r.baseState;
    i = 0, E = s = l = null, g = o;
    do {
      var a = g.lane, u = g.eventTime;
      if ((n & a) === a) {
        E !== null && (E = E.next = {
          eventTime: u,
          lane: 0,
          tag: g.tag,
          payload: g.payload,
          callback: g.callback,
          next: null
        });
        A: {
          var c = A, f = g;
          switch (a = e, u = t, f.tag) {
            case 1:
              if (c = f.payload, typeof c == "function") {
                B = c.call(u, B, a);
                break A;
              }
              B = c;
              break A;
            case 3:
              c.flags = c.flags & -65537 | 128;
            case 0:
              if (c = f.payload, a = typeof c == "function" ? c.call(u, B, a) : c, a == null) break A;
              B = nA({}, B, a);
              break A;
            case 2:
              Me = !0;
          }
        }
        g.callback !== null && g.lane !== 0 && (A.flags |= 64, a = r.effects, a === null ? r.effects = [g] : a.push(g));
      } else u = { eventTime: u, lane: a, tag: g.tag, payload: g.payload, callback: g.callback, next: null }, E === null ? (s = E = u, l = B) : E = E.next = u, i |= a;
      if (g = g.next, g === null) {
        if (g = r.shared.pending, g === null) break;
        a = g, g = a.next, a.next = null, r.lastBaseUpdate = a, r.shared.pending = null;
      }
    } while (!0);
    if (E === null && (l = B), r.baseState = l, r.firstBaseUpdate = s, r.lastBaseUpdate = E, e = r.shared.interleaved, e !== null) {
      r = e;
      do
        i |= r.lane, r = r.next;
      while (r !== e);
    } else o === null && (r.shared.lanes = 0);
    Et |= i, A.lanes = i, A.memoizedState = B;
  }
}
function Vl(A, e, t) {
  if (A = e.effects, e.effects = null, A !== null) for (e = 0; e < A.length; e++) {
    var n = A[e], r = n.callback;
    if (r !== null) {
      if (n.callback = null, n = t, typeof r != "function") throw Error(y(191, r));
      r.call(n);
    }
  }
}
var Ar = {}, Ie = Ze(Ar), bn = Ze(Ar), Pn = Ze(Ar);
function lt(A) {
  if (A === Ar) throw Error(y(174));
  return A;
}
function Lg(A, e) {
  switch (W(Pn, e), W(bn, A), W(Ie, Ar), A = e.nodeType, A) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : wi(null, "");
      break;
    default:
      A = A === 8 ? e.parentNode : e, e = A.namespaceURI || null, A = A.tagName, e = wi(e, A);
  }
  X(Ie), W(Ie, e);
}
function Wt() {
  X(Ie), X(bn), X(Pn);
}
function nI(A) {
  lt(Pn.current);
  var e = lt(Ie.current), t = wi(e, A.type);
  e !== t && (W(bn, A), W(Ie, t));
}
function Ug(A) {
  bn.current === A && (X(Ie), X(bn));
}
var AA = Ze(0);
function eo(A) {
  for (var e = A; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === A) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === A) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var Oo = [];
function xg() {
  for (var A = 0; A < Oo.length; A++) Oo[A]._workInProgressVersionPrimary = null;
  Oo.length = 0;
}
var Mr = De.ReactCurrentDispatcher, Xo = De.ReactCurrentBatchConfig, Ct = 0, tA = null, aA = null, EA = null, to = !1, kn = !1, qn = 0, xC = 0;
function wA() {
  throw Error(y(321));
}
function Yg(A, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < A.length; t++) if (!oe(A[t], e[t])) return !1;
  return !0;
}
function Jg(A, e, t, n, r, o) {
  if (Ct = o, tA = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Mr.current = A === null || A.memoizedState === null ? KC : _C, A = t(n, r), kn) {
    o = 0;
    do {
      if (kn = !1, qn = 0, 25 <= o) throw Error(y(301));
      o += 1, EA = aA = null, e.updateQueue = null, Mr.current = TC, A = t(n, r);
    } while (kn);
  }
  if (Mr.current = no, e = aA !== null && aA.next !== null, Ct = 0, EA = aA = tA = null, to = !1, e) throw Error(y(300));
  return A;
}
function Hg() {
  var A = qn !== 0;
  return qn = 0, A;
}
function le() {
  var A = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return EA === null ? tA.memoizedState = EA = A : EA = EA.next = A, EA;
}
function XA() {
  if (aA === null) {
    var A = tA.alternate;
    A = A !== null ? A.memoizedState : null;
  } else A = aA.next;
  var e = EA === null ? tA.memoizedState : EA.next;
  if (e !== null) EA = e, aA = A;
  else {
    if (A === null) throw Error(y(310));
    aA = A, A = { memoizedState: aA.memoizedState, baseState: aA.baseState, baseQueue: aA.baseQueue, queue: aA.queue, next: null }, EA === null ? tA.memoizedState = EA = A : EA = EA.next = A;
  }
  return EA;
}
function jn(A, e) {
  return typeof e == "function" ? e(A) : e;
}
function Vo(A) {
  var e = XA(), t = e.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = A;
  var n = aA, r = n.baseQueue, o = t.pending;
  if (o !== null) {
    if (r !== null) {
      var i = r.next;
      r.next = o.next, o.next = i;
    }
    n.baseQueue = r = o, t.pending = null;
  }
  if (r !== null) {
    o = r.next, n = n.baseState;
    var g = i = null, l = null, s = o;
    do {
      var E = s.lane;
      if ((Ct & E) === E) l !== null && (l = l.next = { lane: 0, action: s.action, hasEagerState: s.hasEagerState, eagerState: s.eagerState, next: null }), n = s.hasEagerState ? s.eagerState : A(n, s.action);
      else {
        var B = {
          lane: E,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        };
        l === null ? (g = l = B, i = n) : l = l.next = B, tA.lanes |= E, Et |= E;
      }
      s = s.next;
    } while (s !== null && s !== o);
    l === null ? i = n : l.next = g, oe(n, e.memoizedState) || (RA = !0), e.memoizedState = n, e.baseState = i, e.baseQueue = l, t.lastRenderedState = n;
  }
  if (A = t.interleaved, A !== null) {
    r = A;
    do
      o = r.lane, tA.lanes |= o, Et |= o, r = r.next;
    while (r !== A);
  } else r === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function $o(A) {
  var e = XA(), t = e.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = A;
  var n = t.dispatch, r = t.pending, o = e.memoizedState;
  if (r !== null) {
    t.pending = null;
    var i = r = r.next;
    do
      o = A(o, i.action), i = i.next;
    while (i !== r);
    oe(o, e.memoizedState) || (RA = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), t.lastRenderedState = o;
  }
  return [o, n];
}
function rI() {
}
function oI(A, e) {
  var t = tA, n = XA(), r = e(), o = !oe(n.memoizedState, r);
  if (o && (n.memoizedState = r, RA = !0), n = n.queue, Kg(lI.bind(null, t, n, A), [A]), n.getSnapshot !== e || o || EA !== null && EA.memoizedState.tag & 1) {
    if (t.flags |= 2048, zn(9, gI.bind(null, t, n, r, e), void 0, null), uA === null) throw Error(y(349));
    Ct & 30 || iI(t, e, r);
  }
  return r;
}
function iI(A, e, t) {
  A.flags |= 16384, A = { getSnapshot: e, value: t }, e = tA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tA.updateQueue = e, e.stores = [A]) : (t = e.stores, t === null ? e.stores = [A] : t.push(A));
}
function gI(A, e, t, n) {
  e.value = t, e.getSnapshot = n, sI(e) && BI(A);
}
function lI(A, e, t) {
  return t(function() {
    sI(e) && BI(A);
  });
}
function sI(A) {
  var e = A.getSnapshot;
  A = A.value;
  try {
    var t = e();
    return !oe(A, t);
  } catch {
    return !0;
  }
}
function BI(A) {
  var e = he(A, 1);
  e !== null && re(e, A, 1, -1);
}
function $l(A) {
  var e = le();
  return typeof A == "function" && (A = A()), e.memoizedState = e.baseState = A, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: jn, lastRenderedState: A }, e.queue = A, A = A.dispatch = HC.bind(null, tA, A), [e.memoizedState, A];
}
function zn(A, e, t, n) {
  return A = { tag: A, create: e, destroy: t, deps: n, next: null }, e = tA.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, tA.updateQueue = e, e.lastEffect = A.next = A) : (t = e.lastEffect, t === null ? e.lastEffect = A.next = A : (n = t.next, t.next = A, A.next = n, e.lastEffect = A)), A;
}
function II() {
  return XA().memoizedState;
}
function Nr(A, e, t, n) {
  var r = le();
  tA.flags |= A, r.memoizedState = zn(1 | e, t, void 0, n === void 0 ? null : n);
}
function wo(A, e, t, n) {
  var r = XA();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (aA !== null) {
    var i = aA.memoizedState;
    if (o = i.destroy, n !== null && Yg(n, i.deps)) {
      r.memoizedState = zn(e, t, o, n);
      return;
    }
  }
  tA.flags |= A, r.memoizedState = zn(1 | e, t, o, n);
}
function As(A, e) {
  return Nr(8390656, 8, A, e);
}
function Kg(A, e) {
  return wo(2048, 8, A, e);
}
function aI(A, e) {
  return wo(4, 2, A, e);
}
function QI(A, e) {
  return wo(4, 4, A, e);
}
function CI(A, e) {
  if (typeof e == "function") return A = A(), e(A), function() {
    e(null);
  };
  if (e != null) return A = A(), e.current = A, function() {
    e.current = null;
  };
}
function EI(A, e, t) {
  return t = t != null ? t.concat([A]) : null, wo(4, 4, CI.bind(null, e, A), t);
}
function _g() {
}
function uI(A, e) {
  var t = XA();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && Yg(e, n[1]) ? n[0] : (t.memoizedState = [A, e], A);
}
function cI(A, e) {
  var t = XA();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && Yg(e, n[1]) ? n[0] : (A = A(), t.memoizedState = [A, e], A);
}
function dI(A, e, t) {
  return Ct & 21 ? (oe(t, e) || (t = yB(), tA.lanes |= t, Et |= t, A.baseState = !0), e) : (A.baseState && (A.baseState = !1, RA = !0), A.memoizedState = t);
}
function YC(A, e) {
  var t = P;
  P = t !== 0 && 4 > t ? t : 4, A(!0);
  var n = Xo.transition;
  Xo.transition = {};
  try {
    A(!1), e();
  } finally {
    P = t, Xo.transition = n;
  }
}
function fI() {
  return XA().memoizedState;
}
function JC(A, e, t) {
  var n = be(A);
  if (t = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null }, wI(A)) pI(e, t);
  else if (t = eI(A, e, t, n), t !== null) {
    var r = SA();
    re(t, A, n, r), hI(t, e, n);
  }
}
function HC(A, e, t) {
  var n = be(A), r = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (wI(A)) pI(e, r);
  else {
    var o = A.alternate;
    if (A.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null)) try {
      var i = e.lastRenderedState, g = o(i, t);
      if (r.hasEagerState = !0, r.eagerState = g, oe(g, i)) {
        var l = e.interleaved;
        l === null ? (r.next = r, Ng(e)) : (r.next = l.next, l.next = r), e.interleaved = r;
        return;
      }
    } catch {
    } finally {
    }
    t = eI(A, e, r, n), t !== null && (r = SA(), re(t, A, n, r), hI(t, e, n));
  }
}
function wI(A) {
  var e = A.alternate;
  return A === tA || e !== null && e === tA;
}
function pI(A, e) {
  kn = to = !0;
  var t = A.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), A.pending = e;
}
function hI(A, e, t) {
  if (t & 4194240) {
    var n = e.lanes;
    n &= A.pendingLanes, t |= n, e.lanes = t, dg(A, t);
  }
}
var no = { readContext: OA, useCallback: wA, useContext: wA, useEffect: wA, useImperativeHandle: wA, useInsertionEffect: wA, useLayoutEffect: wA, useMemo: wA, useReducer: wA, useRef: wA, useState: wA, useDebugValue: wA, useDeferredValue: wA, useTransition: wA, useMutableSource: wA, useSyncExternalStore: wA, useId: wA, unstable_isNewReconciler: !1 }, KC = { readContext: OA, useCallback: function(A, e) {
  return le().memoizedState = [A, e === void 0 ? null : e], A;
}, useContext: OA, useEffect: As, useImperativeHandle: function(A, e, t) {
  return t = t != null ? t.concat([A]) : null, Nr(
    4194308,
    4,
    CI.bind(null, e, A),
    t
  );
}, useLayoutEffect: function(A, e) {
  return Nr(4194308, 4, A, e);
}, useInsertionEffect: function(A, e) {
  return Nr(4, 2, A, e);
}, useMemo: function(A, e) {
  var t = le();
  return e = e === void 0 ? null : e, A = A(), t.memoizedState = [A, e], A;
}, useReducer: function(A, e, t) {
  var n = le();
  return e = t !== void 0 ? t(e) : e, n.memoizedState = n.baseState = e, A = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: A, lastRenderedState: e }, n.queue = A, A = A.dispatch = JC.bind(null, tA, A), [n.memoizedState, A];
}, useRef: function(A) {
  var e = le();
  return A = { current: A }, e.memoizedState = A;
}, useState: $l, useDebugValue: _g, useDeferredValue: function(A) {
  return le().memoizedState = A;
}, useTransition: function() {
  var A = $l(!1), e = A[0];
  return A = YC.bind(null, A[1]), le().memoizedState = A, [e, A];
}, useMutableSource: function() {
}, useSyncExternalStore: function(A, e, t) {
  var n = tA, r = le();
  if ($) {
    if (t === void 0) throw Error(y(407));
    t = t();
  } else {
    if (t = e(), uA === null) throw Error(y(349));
    Ct & 30 || iI(n, e, t);
  }
  r.memoizedState = t;
  var o = { value: t, getSnapshot: e };
  return r.queue = o, As(lI.bind(
    null,
    n,
    o,
    A
  ), [A]), n.flags |= 2048, zn(9, gI.bind(null, n, o, t, e), void 0, null), t;
}, useId: function() {
  var A = le(), e = uA.identifierPrefix;
  if ($) {
    var t = de, n = ce;
    t = (n & ~(1 << 32 - ne(n) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = qn++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else t = xC++, e = ":" + e + "r" + t.toString(32) + ":";
  return A.memoizedState = e;
}, unstable_isNewReconciler: !1 }, _C = {
  readContext: OA,
  useCallback: uI,
  useContext: OA,
  useEffect: Kg,
  useImperativeHandle: EI,
  useInsertionEffect: aI,
  useLayoutEffect: QI,
  useMemo: cI,
  useReducer: Vo,
  useRef: II,
  useState: function() {
    return Vo(jn);
  },
  useDebugValue: _g,
  useDeferredValue: function(A) {
    var e = XA();
    return dI(e, aA.memoizedState, A);
  },
  useTransition: function() {
    var A = Vo(jn)[0], e = XA().memoizedState;
    return [A, e];
  },
  useMutableSource: rI,
  useSyncExternalStore: oI,
  useId: fI,
  unstable_isNewReconciler: !1
}, TC = { readContext: OA, useCallback: uI, useContext: OA, useEffect: Kg, useImperativeHandle: EI, useInsertionEffect: aI, useLayoutEffect: QI, useMemo: cI, useReducer: $o, useRef: II, useState: function() {
  return $o(jn);
}, useDebugValue: _g, useDeferredValue: function(A) {
  var e = XA();
  return aA === null ? e.memoizedState = A : dI(e, aA.memoizedState, A);
}, useTransition: function() {
  var A = $o(jn)[0], e = XA().memoizedState;
  return [A, e];
}, useMutableSource: rI, useSyncExternalStore: oI, useId: fI, unstable_isNewReconciler: !1 };
function Ae(A, e) {
  if (A && A.defaultProps) {
    e = nA({}, e), A = A.defaultProps;
    for (var t in A) e[t] === void 0 && (e[t] = A[t]);
    return e;
  }
  return e;
}
function _i(A, e, t, n) {
  e = A.memoizedState, t = t(n, e), t = t == null ? e : nA({}, e, t), A.memoizedState = t, A.lanes === 0 && (A.updateQueue.baseState = t);
}
var po = { isMounted: function(A) {
  return (A = A._reactInternals) ? dt(A) === A : !1;
}, enqueueSetState: function(A, e, t) {
  A = A._reactInternals;
  var n = SA(), r = be(A), o = fe(n, r);
  o.payload = e, t != null && (o.callback = t), e = _e(A, o, r), e !== null && (re(e, A, r, n), Gr(e, A, r));
}, enqueueReplaceState: function(A, e, t) {
  A = A._reactInternals;
  var n = SA(), r = be(A), o = fe(n, r);
  o.tag = 1, o.payload = e, t != null && (o.callback = t), e = _e(A, o, r), e !== null && (re(e, A, r, n), Gr(e, A, r));
}, enqueueForceUpdate: function(A, e) {
  A = A._reactInternals;
  var t = SA(), n = be(A), r = fe(t, n);
  r.tag = 2, e != null && (r.callback = e), e = _e(A, r, n), e !== null && (re(e, A, n, t), Gr(e, A, n));
} };
function es(A, e, t, n, r, o, i) {
  return A = A.stateNode, typeof A.shouldComponentUpdate == "function" ? A.shouldComponentUpdate(n, o, i) : e.prototype && e.prototype.isPureReactComponent ? !Hn(t, n) || !Hn(r, o) : !0;
}
function yI(A, e, t) {
  var n = !1, r = je, o = e.contextType;
  return typeof o == "object" && o !== null ? o = OA(o) : (r = UA(e) ? at : yA.current, n = e.contextTypes, o = (n = n != null) ? jt(A, r) : je), e = new e(t, o), A.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = po, A.stateNode = e, e._reactInternals = A, n && (A = A.stateNode, A.__reactInternalMemoizedUnmaskedChildContext = r, A.__reactInternalMemoizedMaskedChildContext = o), e;
}
function ts(A, e, t, n) {
  A = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, n), e.state !== A && po.enqueueReplaceState(e, e.state, null);
}
function Ti(A, e, t, n) {
  var r = A.stateNode;
  r.props = t, r.state = A.memoizedState, r.refs = {}, Rg(A);
  var o = e.contextType;
  typeof o == "object" && o !== null ? r.context = OA(o) : (o = UA(e) ? at : yA.current, r.context = jt(A, o)), r.state = A.memoizedState, o = e.getDerivedStateFromProps, typeof o == "function" && (_i(A, e, o, t), r.state = A.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), e !== r.state && po.enqueueReplaceState(r, r.state, null), Ao(A, t, r, n), r.state = A.memoizedState), typeof r.componentDidMount == "function" && (A.flags |= 4194308);
}
function Ot(A, e) {
  try {
    var t = "", n = e;
    do
      t += uQ(n), n = n.return;
    while (n);
    var r = t;
  } catch (o) {
    r = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: A, source: e, stack: r, digest: null };
}
function Ai(A, e, t) {
  return { value: A, source: null, stack: t ?? null, digest: e ?? null };
}
function bi(A, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var bC = typeof WeakMap == "function" ? WeakMap : Map;
function DI(A, e, t) {
  t = fe(-1, t), t.tag = 3, t.payload = { element: null };
  var n = e.value;
  return t.callback = function() {
    oo || (oo = !0, $i = n), bi(A, e);
  }, t;
}
function mI(A, e, t) {
  t = fe(-1, t), t.tag = 3;
  var n = A.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var r = e.value;
    t.payload = function() {
      return n(r);
    }, t.callback = function() {
      bi(A, e);
    };
  }
  var o = A.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    bi(A, e), typeof n != "function" && (Te === null ? Te = /* @__PURE__ */ new Set([this]) : Te.add(this));
    var i = e.stack;
    this.componentDidCatch(e.value, { componentStack: i !== null ? i : "" });
  }), t;
}
function ns(A, e, t) {
  var n = A.pingCache;
  if (n === null) {
    n = A.pingCache = new bC();
    var r = /* @__PURE__ */ new Set();
    n.set(e, r);
  } else r = n.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), n.set(e, r));
  r.has(t) || (r.add(t), A = nE.bind(null, A, e, t), e.then(A, A));
}
function rs(A) {
  do {
    var e;
    if ((e = A.tag === 13) && (e = A.memoizedState, e = e !== null ? e.dehydrated !== null : !0), e) return A;
    A = A.return;
  } while (A !== null);
  return null;
}
function os(A, e, t, n, r) {
  return A.mode & 1 ? (A.flags |= 65536, A.lanes = r, A) : (A === e ? A.flags |= 65536 : (A.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = fe(-1, 1), e.tag = 2, _e(t, e, 1))), t.lanes |= 1), A);
}
var PC = De.ReactCurrentOwner, RA = !1;
function kA(A, e, t, n) {
  e.child = A === null ? AI(e, null, t, n) : Zt(e, A.child, t, n);
}
function is(A, e, t, n, r) {
  t = t.render;
  var o = e.ref;
  return bt(e, r), n = Jg(A, e, t, n, o, r), t = Hg(), A !== null && !RA ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~r, ye(A, e, r)) : ($ && t && kg(e), e.flags |= 1, kA(A, e, n, r), e.child);
}
function gs(A, e, t, n, r) {
  if (A === null) {
    var o = t.type;
    return typeof o == "function" && !Wg(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = o, kI(A, e, o, n, r)) : (A = xr(t.type, null, n, e, e.mode, r), A.ref = e.ref, A.return = e, e.child = A);
  }
  if (o = A.child, !(A.lanes & r)) {
    var i = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Hn, t(i, n) && A.ref === e.ref) return ye(A, e, r);
  }
  return e.flags |= 1, A = Pe(o, n), A.ref = e.ref, A.return = e, e.child = A;
}
function kI(A, e, t, n, r) {
  if (A !== null) {
    var o = A.memoizedProps;
    if (Hn(o, n) && A.ref === e.ref) if (RA = !1, e.pendingProps = n = o, (A.lanes & r) !== 0) A.flags & 131072 && (RA = !0);
    else return e.lanes = A.lanes, ye(A, e, r);
  }
  return Pi(A, e, t, n, r);
}
function SI(A, e, t) {
  var n = e.pendingProps, r = n.children, o = A !== null ? A.memoizedState : null;
  if (n.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(Jt, HA), HA |= t;
  else {
    if (!(t & 1073741824)) return A = o !== null ? o.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: A, cachePool: null, transitions: null }, e.updateQueue = null, W(Jt, HA), HA |= A, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = o !== null ? o.baseLanes : t, W(Jt, HA), HA |= n;
  }
  else o !== null ? (n = o.baseLanes | t, e.memoizedState = null) : n = t, W(Jt, HA), HA |= n;
  return kA(A, e, r, t), e.child;
}
function FI(A, e) {
  var t = e.ref;
  (A === null && t !== null || A !== null && A.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function Pi(A, e, t, n, r) {
  var o = UA(t) ? at : yA.current;
  return o = jt(e, o), bt(e, r), t = Jg(A, e, t, n, o, r), n = Hg(), A !== null && !RA ? (e.updateQueue = A.updateQueue, e.flags &= -2053, A.lanes &= ~r, ye(A, e, r)) : ($ && n && kg(e), e.flags |= 1, kA(A, e, t, r), e.child);
}
function ls(A, e, t, n, r) {
  if (UA(t)) {
    var o = !0;
    Wr(e);
  } else o = !1;
  if (bt(e, r), e.stateNode === null) Rr(A, e), yI(e, t, n), Ti(e, t, n, r), n = !0;
  else if (A === null) {
    var i = e.stateNode, g = e.memoizedProps;
    i.props = g;
    var l = i.context, s = t.contextType;
    typeof s == "object" && s !== null ? s = OA(s) : (s = UA(t) ? at : yA.current, s = jt(e, s));
    var E = t.getDerivedStateFromProps, B = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    B || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (g !== n || l !== s) && ts(e, i, n, s), Me = !1;
    var a = e.memoizedState;
    i.state = a, Ao(e, n, i, r), l = e.memoizedState, g !== n || a !== l || LA.current || Me ? (typeof E == "function" && (_i(e, t, E, n), l = e.memoizedState), (g = Me || es(e, t, g, n, a, l, s)) ? (B || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = l), i.props = n, i.state = l, i.context = s, n = g) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
  } else {
    i = e.stateNode, tI(A, e), g = e.memoizedProps, s = e.type === e.elementType ? g : Ae(e.type, g), i.props = s, B = e.pendingProps, a = i.context, l = t.contextType, typeof l == "object" && l !== null ? l = OA(l) : (l = UA(t) ? at : yA.current, l = jt(e, l));
    var u = t.getDerivedStateFromProps;
    (E = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (g !== B || a !== l) && ts(e, i, n, l), Me = !1, a = e.memoizedState, i.state = a, Ao(e, n, i, r);
    var c = e.memoizedState;
    g !== B || a !== c || LA.current || Me ? (typeof u == "function" && (_i(e, t, u, n), c = e.memoizedState), (s = Me || es(e, t, s, n, a, c, l) || !1) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, c, l), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(n, c, l)), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || g === A.memoizedProps && a === A.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || g === A.memoizedProps && a === A.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = c), i.props = n, i.state = c, i.context = l, n = s) : (typeof i.componentDidUpdate != "function" || g === A.memoizedProps && a === A.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || g === A.memoizedProps && a === A.memoizedState || (e.flags |= 1024), n = !1);
  }
  return qi(A, e, t, n, o, r);
}
function qi(A, e, t, n, r, o) {
  FI(A, e);
  var i = (e.flags & 128) !== 0;
  if (!n && !i) return r && zl(e, t, !1), ye(A, e, o);
  n = e.stateNode, PC.current = e;
  var g = i && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return e.flags |= 1, A !== null && i ? (e.child = Zt(e, A.child, null, o), e.child = Zt(e, null, g, o)) : kA(A, e, g, o), e.memoizedState = n.state, r && zl(e, t, !0), e.child;
}
function vI(A) {
  var e = A.stateNode;
  e.pendingContext ? jl(A, e.pendingContext, e.pendingContext !== e.context) : e.context && jl(A, e.context, !1), Lg(A, e.containerInfo);
}
function ss(A, e, t, n, r) {
  return zt(), Fg(r), e.flags |= 256, kA(A, e, t, n), e.child;
}
var ji = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(A) {
  return { baseLanes: A, cachePool: null, transitions: null };
}
function GI(A, e, t) {
  var n = e.pendingProps, r = AA.current, o = !1, i = (e.flags & 128) !== 0, g;
  if ((g = i) || (g = A !== null && A.memoizedState === null ? !1 : (r & 2) !== 0), g ? (o = !0, e.flags &= -129) : (A === null || A.memoizedState !== null) && (r |= 1), W(AA, r & 1), A === null)
    return Hi(e), A = e.memoizedState, A !== null && (A = A.dehydrated, A !== null) ? (e.mode & 1 ? A.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (i = n.children, A = n.fallback, o ? (n = e.mode, o = e.child, i = { mode: "hidden", children: i }, !(n & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Do(i, n, 0, null), A = Bt(A, n, t, null), o.return = e, A.return = e, o.sibling = A, e.child = o, e.child.memoizedState = zi(t), e.memoizedState = ji, A) : Tg(e, i));
  if (r = A.memoizedState, r !== null && (g = r.dehydrated, g !== null)) return qC(A, e, i, n, g, r, t);
  if (o) {
    o = n.fallback, i = e.mode, r = A.child, g = r.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(i & 1) && e.child !== r ? (n = e.child, n.childLanes = 0, n.pendingProps = l, e.deletions = null) : (n = Pe(r, l), n.subtreeFlags = r.subtreeFlags & 14680064), g !== null ? o = Pe(g, o) : (o = Bt(o, i, t, null), o.flags |= 2), o.return = e, n.return = e, n.sibling = o, e.child = n, n = o, o = e.child, i = A.child.memoizedState, i = i === null ? zi(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = A.childLanes & ~t, e.memoizedState = ji, n;
  }
  return o = A.child, A = o.sibling, n = Pe(o, { mode: "visible", children: n.children }), !(e.mode & 1) && (n.lanes = t), n.return = e, n.sibling = null, A !== null && (t = e.deletions, t === null ? (e.deletions = [A], e.flags |= 16) : t.push(A)), e.child = n, e.memoizedState = null, n;
}
function Tg(A, e) {
  return e = Do({ mode: "visible", children: e }, A.mode, 0, null), e.return = A, A.child = e;
}
function dr(A, e, t, n) {
  return n !== null && Fg(n), Zt(e, A.child, null, t), A = Tg(e, e.pendingProps.children), A.flags |= 2, e.memoizedState = null, A;
}
function qC(A, e, t, n, r, o, i) {
  if (t)
    return e.flags & 256 ? (e.flags &= -257, n = Ai(Error(y(422))), dr(A, e, i, n)) : e.memoizedState !== null ? (e.child = A.child, e.flags |= 128, null) : (o = n.fallback, r = e.mode, n = Do({ mode: "visible", children: n.children }, r, 0, null), o = Bt(o, r, i, null), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, e.mode & 1 && Zt(e, A.child, null, i), e.child.memoizedState = zi(i), e.memoizedState = ji, o);
  if (!(e.mode & 1)) return dr(A, e, i, null);
  if (r.data === "$!") {
    if (n = r.nextSibling && r.nextSibling.dataset, n) var g = n.dgst;
    return n = g, o = Error(y(419)), n = Ai(o, n, void 0), dr(A, e, i, n);
  }
  if (g = (i & A.childLanes) !== 0, RA || g) {
    if (n = uA, n !== null) {
      switch (i & -i) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      r = r & (n.suspendedLanes | i) ? 0 : r, r !== 0 && r !== o.retryLane && (o.retryLane = r, he(A, r), re(n, A, r, -1));
    }
    return Zg(), n = Ai(Error(y(421))), dr(A, e, i, n);
  }
  return r.data === "$?" ? (e.flags |= 128, e.child = A.child, e = rE.bind(null, A), r._reactRetry = e, null) : (A = o.treeContext, KA = Ke(r.nextSibling), _A = e, $ = !0, te = null, A !== null && (jA[zA++] = ce, jA[zA++] = de, jA[zA++] = Qt, ce = A.id, de = A.overflow, Qt = e), e = Tg(e, n.children), e.flags |= 4096, e);
}
function Bs(A, e, t) {
  A.lanes |= e;
  var n = A.alternate;
  n !== null && (n.lanes |= e), Ki(A.return, e, t);
}
function ei(A, e, t, n, r) {
  var o = A.memoizedState;
  o === null ? A.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: n, tail: t, tailMode: r } : (o.isBackwards = e, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = t, o.tailMode = r);
}
function MI(A, e, t) {
  var n = e.pendingProps, r = n.revealOrder, o = n.tail;
  if (kA(A, e, n.children, t), n = AA.current, n & 2) n = n & 1 | 2, e.flags |= 128;
  else {
    if (A !== null && A.flags & 128) A: for (A = e.child; A !== null; ) {
      if (A.tag === 13) A.memoizedState !== null && Bs(A, t, e);
      else if (A.tag === 19) Bs(A, t, e);
      else if (A.child !== null) {
        A.child.return = A, A = A.child;
        continue;
      }
      if (A === e) break A;
      for (; A.sibling === null; ) {
        if (A.return === null || A.return === e) break A;
        A = A.return;
      }
      A.sibling.return = A.return, A = A.sibling;
    }
    n &= 1;
  }
  if (W(AA, n), !(e.mode & 1)) e.memoizedState = null;
  else switch (r) {
    case "forwards":
      for (t = e.child, r = null; t !== null; ) A = t.alternate, A !== null && eo(A) === null && (r = t), t = t.sibling;
      t = r, t === null ? (r = e.child, e.child = null) : (r = t.sibling, t.sibling = null), ei(e, !1, r, t, o);
      break;
    case "backwards":
      for (t = null, r = e.child, e.child = null; r !== null; ) {
        if (A = r.alternate, A !== null && eo(A) === null) {
          e.child = r;
          break;
        }
        A = r.sibling, r.sibling = t, t = r, r = A;
      }
      ei(e, !0, t, null, o);
      break;
    case "together":
      ei(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Rr(A, e) {
  !(e.mode & 1) && A !== null && (A.alternate = null, e.alternate = null, e.flags |= 2);
}
function ye(A, e, t) {
  if (A !== null && (e.dependencies = A.dependencies), Et |= e.lanes, !(t & e.childLanes)) return null;
  if (A !== null && e.child !== A.child) throw Error(y(153));
  if (e.child !== null) {
    for (A = e.child, t = Pe(A, A.pendingProps), e.child = t, t.return = e; A.sibling !== null; ) A = A.sibling, t = t.sibling = Pe(A, A.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function jC(A, e, t) {
  switch (e.tag) {
    case 3:
      vI(e), zt();
      break;
    case 5:
      nI(e);
      break;
    case 1:
      UA(e.type) && Wr(e);
      break;
    case 4:
      Lg(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context, r = e.memoizedProps.value;
      W(Vr, n._currentValue), n._currentValue = r;
      break;
    case 13:
      if (n = e.memoizedState, n !== null)
        return n.dehydrated !== null ? (W(AA, AA.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? GI(A, e, t) : (W(AA, AA.current & 1), A = ye(A, e, t), A !== null ? A.sibling : null);
      W(AA, AA.current & 1);
      break;
    case 19:
      if (n = (t & e.childLanes) !== 0, A.flags & 128) {
        if (n) return MI(A, e, t);
        e.flags |= 128;
      }
      if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), W(AA, AA.current), n) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, SI(A, e, t);
  }
  return ye(A, e, t);
}
var NI, Zi, RI, LI;
NI = function(A, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) A.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Zi = function() {
};
RI = function(A, e, t, n) {
  var r = A.memoizedProps;
  if (r !== n) {
    A = e.stateNode, lt(Ie.current);
    var o = null;
    switch (t) {
      case "input":
        r = ui(A, r), n = ui(A, n), o = [];
        break;
      case "select":
        r = nA({}, r, { value: void 0 }), n = nA({}, n, { value: void 0 }), o = [];
        break;
      case "textarea":
        r = fi(A, r), n = fi(A, n), o = [];
        break;
      default:
        typeof r.onClick != "function" && typeof n.onClick == "function" && (A.onclick = zr);
    }
    pi(t, n);
    var i;
    t = null;
    for (s in r) if (!n.hasOwnProperty(s) && r.hasOwnProperty(s) && r[s] != null) if (s === "style") {
      var g = r[s];
      for (i in g) g.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
    } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Nn.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in n) {
      var l = n[s];
      if (g = r?.[s], n.hasOwnProperty(s) && l !== g && (l != null || g != null)) if (s === "style") if (g) {
        for (i in g) !g.hasOwnProperty(i) || l && l.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
        for (i in l) l.hasOwnProperty(i) && g[i] !== l[i] && (t || (t = {}), t[i] = l[i]);
      } else t || (o || (o = []), o.push(
        s,
        t
      )), t = l;
      else s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, g = g ? g.__html : void 0, l != null && g !== l && (o = o || []).push(s, l)) : s === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(s, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Nn.hasOwnProperty(s) ? (l != null && s === "onScroll" && O("scroll", A), o || g === l || (o = [])) : (o = o || []).push(s, l));
    }
    t && (o = o || []).push("style", t);
    var s = o;
    (e.updateQueue = s) && (e.flags |= 4);
  }
};
LI = function(A, e, t, n) {
  t !== n && (e.flags |= 4);
};
function an(A, e) {
  if (!$) switch (A.tailMode) {
    case "hidden":
      e = A.tail;
      for (var t = null; e !== null; ) e.alternate !== null && (t = e), e = e.sibling;
      t === null ? A.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = A.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e || A.tail === null ? A.tail = null : A.tail.sibling = null : n.sibling = null;
  }
}
function pA(A) {
  var e = A.alternate !== null && A.alternate.child === A.child, t = 0, n = 0;
  if (e) for (var r = A.child; r !== null; ) t |= r.lanes | r.childLanes, n |= r.subtreeFlags & 14680064, n |= r.flags & 14680064, r.return = A, r = r.sibling;
  else for (r = A.child; r !== null; ) t |= r.lanes | r.childLanes, n |= r.subtreeFlags, n |= r.flags, r.return = A, r = r.sibling;
  return A.subtreeFlags |= n, A.childLanes = t, e;
}
function zC(A, e, t) {
  var n = e.pendingProps;
  switch (Sg(e), e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pA(e), null;
    case 1:
      return UA(e.type) && Zr(), pA(e), null;
    case 3:
      return n = e.stateNode, Wt(), X(LA), X(yA), xg(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (A === null || A.child === null) && (ur(e) ? e.flags |= 4 : A === null || A.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, te !== null && (tg(te), te = null))), Zi(A, e), pA(e), null;
    case 5:
      Ug(e);
      var r = lt(Pn.current);
      if (t = e.type, A !== null && e.stateNode != null) RI(A, e, t, n, r), A.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(y(166));
          return pA(e), null;
        }
        if (A = lt(Ie.current), ur(e)) {
          n = e.stateNode, t = e.type;
          var o = e.memoizedProps;
          switch (n[se] = e, n[Tn] = o, A = (e.mode & 1) !== 0, t) {
            case "dialog":
              O("cancel", n), O("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", n);
              break;
            case "video":
            case "audio":
              for (r = 0; r < dn.length; r++) O(dn[r], n);
              break;
            case "source":
              O("error", n);
              break;
            case "img":
            case "image":
            case "link":
              O(
                "error",
                n
              ), O("load", n);
              break;
            case "details":
              O("toggle", n);
              break;
            case "input":
              fl(n, o), O("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!o.multiple }, O("invalid", n);
              break;
            case "textarea":
              pl(n, o), O("invalid", n);
          }
          pi(t, o), r = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var g = o[i];
            i === "children" ? typeof g == "string" ? n.textContent !== g && (o.suppressHydrationWarning !== !0 && Er(n.textContent, g, A), r = ["children", g]) : typeof g == "number" && n.textContent !== "" + g && (o.suppressHydrationWarning !== !0 && Er(
              n.textContent,
              g,
              A
            ), r = ["children", "" + g]) : Nn.hasOwnProperty(i) && g != null && i === "onScroll" && O("scroll", n);
          }
          switch (t) {
            case "input":
              gr(n), wl(n, o, !0);
              break;
            case "textarea":
              gr(n), hl(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = zr);
          }
          n = r, e.updateQueue = n, n !== null && (e.flags |= 4);
        } else {
          i = r.nodeType === 9 ? r : r.ownerDocument, A === "http://www.w3.org/1999/xhtml" && (A = lB(t)), A === "http://www.w3.org/1999/xhtml" ? t === "script" ? (A = i.createElement("div"), A.innerHTML = "<script><\/script>", A = A.removeChild(A.firstChild)) : typeof n.is == "string" ? A = i.createElement(t, { is: n.is }) : (A = i.createElement(t), t === "select" && (i = A, n.multiple ? i.multiple = !0 : n.size && (i.size = n.size))) : A = i.createElementNS(A, t), A[se] = e, A[Tn] = n, NI(A, e, !1, !1), e.stateNode = A;
          A: {
            switch (i = hi(t, n), t) {
              case "dialog":
                O("cancel", A), O("close", A), r = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", A), r = n;
                break;
              case "video":
              case "audio":
                for (r = 0; r < dn.length; r++) O(dn[r], A);
                r = n;
                break;
              case "source":
                O("error", A), r = n;
                break;
              case "img":
              case "image":
              case "link":
                O(
                  "error",
                  A
                ), O("load", A), r = n;
                break;
              case "details":
                O("toggle", A), r = n;
                break;
              case "input":
                fl(A, n), r = ui(A, n), O("invalid", A);
                break;
              case "option":
                r = n;
                break;
              case "select":
                A._wrapperState = { wasMultiple: !!n.multiple }, r = nA({}, n, { value: void 0 }), O("invalid", A);
                break;
              case "textarea":
                pl(A, n), r = fi(A, n), O("invalid", A);
                break;
              default:
                r = n;
            }
            pi(t, r), g = r;
            for (o in g) if (g.hasOwnProperty(o)) {
              var l = g[o];
              o === "style" ? IB(A, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && sB(A, l)) : o === "children" ? typeof l == "string" ? (t !== "textarea" || l !== "") && Rn(A, l) : typeof l == "number" && Rn(A, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Nn.hasOwnProperty(o) ? l != null && o === "onScroll" && O("scroll", A) : l != null && ag(A, o, l, i));
            }
            switch (t) {
              case "input":
                gr(A), wl(A, n, !1);
                break;
              case "textarea":
                gr(A), hl(A);
                break;
              case "option":
                n.value != null && A.setAttribute("value", "" + qe(n.value));
                break;
              case "select":
                A.multiple = !!n.multiple, o = n.value, o != null ? Ht(A, !!n.multiple, o, !1) : n.defaultValue != null && Ht(
                  A,
                  !!n.multiple,
                  n.defaultValue,
                  !0
                );
                break;
              default:
                typeof r.onClick == "function" && (A.onclick = zr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break A;
              case "img":
                n = !0;
                break A;
              default:
                n = !1;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return pA(e), null;
    case 6:
      if (A && e.stateNode != null) LI(A, e, A.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(y(166));
        if (t = lt(Pn.current), lt(Ie.current), ur(e)) {
          if (n = e.stateNode, t = e.memoizedProps, n[se] = e, (o = n.nodeValue !== t) && (A = _A, A !== null)) switch (A.tag) {
            case 3:
              Er(n.nodeValue, t, (A.mode & 1) !== 0);
              break;
            case 5:
              A.memoizedProps.suppressHydrationWarning !== !0 && Er(n.nodeValue, t, (A.mode & 1) !== 0);
          }
          o && (e.flags |= 4);
        } else n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n), n[se] = e, e.stateNode = n;
      }
      return pA(e), null;
    case 13:
      if (X(AA), n = e.memoizedState, A === null || A.memoizedState !== null && A.memoizedState.dehydrated !== null) {
        if ($ && KA !== null && e.mode & 1 && !(e.flags & 128)) VB(), zt(), e.flags |= 98560, o = !1;
        else if (o = ur(e), n !== null && n.dehydrated !== null) {
          if (A === null) {
            if (!o) throw Error(y(318));
            if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(y(317));
            o[se] = e;
          } else zt(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          pA(e), o = !1;
        } else te !== null && (tg(te), te = null), o = !0;
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (n = n !== null, n !== (A !== null && A.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (A === null || AA.current & 1 ? QA === 0 && (QA = 3) : Zg())), e.updateQueue !== null && (e.flags |= 4), pA(e), null);
    case 4:
      return Wt(), Zi(A, e), A === null && Kn(e.stateNode.containerInfo), pA(e), null;
    case 10:
      return Mg(e.type._context), pA(e), null;
    case 17:
      return UA(e.type) && Zr(), pA(e), null;
    case 19:
      if (X(AA), o = e.memoizedState, o === null) return pA(e), null;
      if (n = (e.flags & 128) !== 0, i = o.rendering, i === null) if (n) an(o, !1);
      else {
        if (QA !== 0 || A !== null && A.flags & 128) for (A = e.child; A !== null; ) {
          if (i = eo(A), i !== null) {
            for (e.flags |= 128, an(o, !1), n = i.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = t, t = e.child; t !== null; ) o = t, A = n, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = A, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, A = i.dependencies, o.dependencies = A === null ? null : { lanes: A.lanes, firstContext: A.firstContext }), t = t.sibling;
            return W(AA, AA.current & 1 | 2), e.child;
          }
          A = A.sibling;
        }
        o.tail !== null && lA() > Xt && (e.flags |= 128, n = !0, an(o, !1), e.lanes = 4194304);
      }
      else {
        if (!n) if (A = eo(i), A !== null) {
          if (e.flags |= 128, n = !0, t = A.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), an(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !$) return pA(e), null;
        } else 2 * lA() - o.renderingStartTime > Xt && t !== 1073741824 && (e.flags |= 128, n = !0, an(o, !1), e.lanes = 4194304);
        o.isBackwards ? (i.sibling = e.child, e.child = i) : (t = o.last, t !== null ? t.sibling = i : e.child = i, o.last = i);
      }
      return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = lA(), e.sibling = null, t = AA.current, W(AA, n ? t & 1 | 2 : t & 1), e) : (pA(e), null);
    case 22:
    case 23:
      return zg(), n = e.memoizedState !== null, A !== null && A.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? HA & 1073741824 && (pA(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : pA(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, e.tag));
}
function ZC(A, e) {
  switch (Sg(e), e.tag) {
    case 1:
      return UA(e.type) && Zr(), A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 3:
      return Wt(), X(LA), X(yA), xg(), A = e.flags, A & 65536 && !(A & 128) ? (e.flags = A & -65537 | 128, e) : null;
    case 5:
      return Ug(e), null;
    case 13:
      if (X(AA), A = e.memoizedState, A !== null && A.dehydrated !== null) {
        if (e.alternate === null) throw Error(y(340));
        zt();
      }
      return A = e.flags, A & 65536 ? (e.flags = A & -65537 | 128, e) : null;
    case 19:
      return X(AA), null;
    case 4:
      return Wt(), null;
    case 10:
      return Mg(e.type._context), null;
    case 22:
    case 23:
      return zg(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fr = !1, hA = !1, WC = typeof WeakSet == "function" ? WeakSet : Set, M = null;
function Yt(A, e) {
  var t = A.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    oA(A, e, n);
  }
  else t.current = null;
}
function Wi(A, e, t) {
  try {
    t();
  } catch (n) {
    oA(A, e, n);
  }
}
var Is = !1;
function OC(A, e) {
  if (Ni = Pr, A = HB(), mg(A)) {
    if ("selectionStart" in A) var t = { start: A.selectionStart, end: A.selectionEnd };
    else A: {
      t = (t = A.ownerDocument) && t.defaultView || window;
      var n = t.getSelection && t.getSelection();
      if (n && n.rangeCount !== 0) {
        t = n.anchorNode;
        var r = n.anchorOffset, o = n.focusNode;
        n = n.focusOffset;
        try {
          t.nodeType, o.nodeType;
        } catch {
          t = null;
          break A;
        }
        var i = 0, g = -1, l = -1, s = 0, E = 0, B = A, a = null;
        e: for (; ; ) {
          for (var u; B !== t || r !== 0 && B.nodeType !== 3 || (g = i + r), B !== o || n !== 0 && B.nodeType !== 3 || (l = i + n), B.nodeType === 3 && (i += B.nodeValue.length), (u = B.firstChild) !== null; )
            a = B, B = u;
          for (; ; ) {
            if (B === A) break e;
            if (a === t && ++s === r && (g = i), a === o && ++E === n && (l = i), (u = B.nextSibling) !== null) break;
            B = a, a = B.parentNode;
          }
          B = u;
        }
        t = g === -1 || l === -1 ? null : { start: g, end: l };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Ri = { focusedElem: A, selectionRange: t }, Pr = !1, M = e; M !== null; ) if (e = M, A = e.child, (e.subtreeFlags & 1028) !== 0 && A !== null) A.return = e, M = A;
  else for (; M !== null; ) {
    e = M;
    try {
      var c = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (c !== null) {
            var f = c.memoizedProps, p = c.memoizedState, Q = e.stateNode, I = Q.getSnapshotBeforeUpdate(e.elementType === e.type ? f : Ae(e.type, f), p);
            Q.__reactInternalSnapshotBeforeUpdate = I;
          }
          break;
        case 3:
          var C = e.stateNode.containerInfo;
          C.nodeType === 1 ? C.textContent = "" : C.nodeType === 9 && C.documentElement && C.removeChild(C.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(y(163));
      }
    } catch (w) {
      oA(e, e.return, w);
    }
    if (A = e.sibling, A !== null) {
      A.return = e.return, M = A;
      break;
    }
    M = e.return;
  }
  return c = Is, Is = !1, c;
}
function Sn(A, e, t) {
  var n = e.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var r = n = n.next;
    do {
      if ((r.tag & A) === A) {
        var o = r.destroy;
        r.destroy = void 0, o !== void 0 && Wi(e, t, o);
      }
      r = r.next;
    } while (r !== n);
  }
}
function ho(A, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var t = e = e.next;
    do {
      if ((t.tag & A) === A) {
        var n = t.create;
        t.destroy = n();
      }
      t = t.next;
    } while (t !== e);
  }
}
function Oi(A) {
  var e = A.ref;
  if (e !== null) {
    var t = A.stateNode;
    switch (A.tag) {
      case 5:
        A = t;
        break;
      default:
        A = t;
    }
    typeof e == "function" ? e(A) : e.current = A;
  }
}
function UI(A) {
  var e = A.alternate;
  e !== null && (A.alternate = null, UI(e)), A.child = null, A.deletions = null, A.sibling = null, A.tag === 5 && (e = A.stateNode, e !== null && (delete e[se], delete e[Tn], delete e[xi], delete e[NC], delete e[RC])), A.stateNode = null, A.return = null, A.dependencies = null, A.memoizedProps = null, A.memoizedState = null, A.pendingProps = null, A.stateNode = null, A.updateQueue = null;
}
function xI(A) {
  return A.tag === 5 || A.tag === 3 || A.tag === 4;
}
function as(A) {
  A: for (; ; ) {
    for (; A.sibling === null; ) {
      if (A.return === null || xI(A.return)) return null;
      A = A.return;
    }
    for (A.sibling.return = A.return, A = A.sibling; A.tag !== 5 && A.tag !== 6 && A.tag !== 18; ) {
      if (A.flags & 2 || A.child === null || A.tag === 4) continue A;
      A.child.return = A, A = A.child;
    }
    if (!(A.flags & 2)) return A.stateNode;
  }
}
function Xi(A, e, t) {
  var n = A.tag;
  if (n === 5 || n === 6) A = A.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(A, e) : t.insertBefore(A, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(A, t)) : (e = t, e.appendChild(A)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = zr));
  else if (n !== 4 && (A = A.child, A !== null)) for (Xi(A, e, t), A = A.sibling; A !== null; ) Xi(A, e, t), A = A.sibling;
}
function Vi(A, e, t) {
  var n = A.tag;
  if (n === 5 || n === 6) A = A.stateNode, e ? t.insertBefore(A, e) : t.appendChild(A);
  else if (n !== 4 && (A = A.child, A !== null)) for (Vi(A, e, t), A = A.sibling; A !== null; ) Vi(A, e, t), A = A.sibling;
}
var cA = null, ee = !1;
function me(A, e, t) {
  for (t = t.child; t !== null; ) YI(A, e, t), t = t.sibling;
}
function YI(A, e, t) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(Qo, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      hA || Yt(t, e);
    case 6:
      var n = cA, r = ee;
      cA = null, me(A, e, t), cA = n, ee = r, cA !== null && (ee ? (A = cA, t = t.stateNode, A.nodeType === 8 ? A.parentNode.removeChild(t) : A.removeChild(t)) : cA.removeChild(t.stateNode));
      break;
    case 18:
      cA !== null && (ee ? (A = cA, t = t.stateNode, A.nodeType === 8 ? Zo(A.parentNode, t) : A.nodeType === 1 && Zo(A, t), Yn(A)) : Zo(cA, t.stateNode));
      break;
    case 4:
      n = cA, r = ee, cA = t.stateNode.containerInfo, ee = !0, me(A, e, t), cA = n, ee = r;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!hA && (n = t.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        r = n = n.next;
        do {
          var o = r, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && Wi(t, e, i), r = r.next;
        } while (r !== n);
      }
      me(A, e, t);
      break;
    case 1:
      if (!hA && (Yt(t, e), n = t.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = t.memoizedProps, n.state = t.memoizedState, n.componentWillUnmount();
      } catch (g) {
        oA(t, e, g);
      }
      me(A, e, t);
      break;
    case 21:
      me(A, e, t);
      break;
    case 22:
      t.mode & 1 ? (hA = (n = hA) || t.memoizedState !== null, me(A, e, t), hA = n) : me(A, e, t);
      break;
    default:
      me(A, e, t);
  }
}
function Qs(A) {
  var e = A.updateQueue;
  if (e !== null) {
    A.updateQueue = null;
    var t = A.stateNode;
    t === null && (t = A.stateNode = new WC()), e.forEach(function(n) {
      var r = oE.bind(null, A, n);
      t.has(n) || (t.add(n), n.then(r, r));
    });
  }
}
function $A(A, e) {
  var t = e.deletions;
  if (t !== null) for (var n = 0; n < t.length; n++) {
    var r = t[n];
    try {
      var o = A, i = e, g = i;
      A: for (; g !== null; ) {
        switch (g.tag) {
          case 5:
            cA = g.stateNode, ee = !1;
            break A;
          case 3:
            cA = g.stateNode.containerInfo, ee = !0;
            break A;
          case 4:
            cA = g.stateNode.containerInfo, ee = !0;
            break A;
        }
        g = g.return;
      }
      if (cA === null) throw Error(y(160));
      YI(o, i, r), cA = null, ee = !1;
      var l = r.alternate;
      l !== null && (l.return = null), r.return = null;
    } catch (s) {
      oA(r, e, s);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) JI(e, A), e = e.sibling;
}
function JI(A, e) {
  var t = A.alternate, n = A.flags;
  switch (A.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ($A(e, A), ge(A), n & 4) {
        try {
          Sn(3, A, A.return), ho(3, A);
        } catch (f) {
          oA(A, A.return, f);
        }
        try {
          Sn(5, A, A.return);
        } catch (f) {
          oA(A, A.return, f);
        }
      }
      break;
    case 1:
      $A(e, A), ge(A), n & 512 && t !== null && Yt(t, t.return);
      break;
    case 5:
      if ($A(e, A), ge(A), n & 512 && t !== null && Yt(t, t.return), A.flags & 32) {
        var r = A.stateNode;
        try {
          Rn(r, "");
        } catch (f) {
          oA(A, A.return, f);
        }
      }
      if (n & 4 && (r = A.stateNode, r != null)) {
        var o = A.memoizedProps, i = t !== null ? t.memoizedProps : o, g = A.type, l = A.updateQueue;
        if (A.updateQueue = null, l !== null) try {
          g === "input" && o.type === "radio" && o.name != null && iB(r, o), hi(g, i);
          var s = hi(g, o);
          for (i = 0; i < l.length; i += 2) {
            var E = l[i], B = l[i + 1];
            E === "style" ? IB(r, B) : E === "dangerouslySetInnerHTML" ? sB(r, B) : E === "children" ? Rn(r, B) : ag(r, E, B, s);
          }
          switch (g) {
            case "input":
              ci(r, o);
              break;
            case "textarea":
              gB(r, o);
              break;
            case "select":
              var a = r._wrapperState.wasMultiple;
              r._wrapperState.wasMultiple = !!o.multiple;
              var u = o.value;
              u != null ? Ht(r, !!o.multiple, u, !1) : a !== !!o.multiple && (o.defaultValue != null ? Ht(
                r,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Ht(r, !!o.multiple, o.multiple ? [] : "", !1));
          }
          r[Tn] = o;
        } catch (f) {
          oA(A, A.return, f);
        }
      }
      break;
    case 6:
      if ($A(e, A), ge(A), n & 4) {
        if (A.stateNode === null) throw Error(y(162));
        r = A.stateNode, o = A.memoizedProps;
        try {
          r.nodeValue = o;
        } catch (f) {
          oA(A, A.return, f);
        }
      }
      break;
    case 3:
      if ($A(e, A), ge(A), n & 4 && t !== null && t.memoizedState.isDehydrated) try {
        Yn(e.containerInfo);
      } catch (f) {
        oA(A, A.return, f);
      }
      break;
    case 4:
      $A(e, A), ge(A);
      break;
    case 13:
      $A(e, A), ge(A), r = A.child, r.flags & 8192 && (o = r.memoizedState !== null, r.stateNode.isHidden = o, !o || r.alternate !== null && r.alternate.memoizedState !== null || (qg = lA())), n & 4 && Qs(A);
      break;
    case 22:
      if (E = t !== null && t.memoizedState !== null, A.mode & 1 ? (hA = (s = hA) || E, $A(e, A), hA = s) : $A(e, A), ge(A), n & 8192) {
        if (s = A.memoizedState !== null, (A.stateNode.isHidden = s) && !E && A.mode & 1) for (M = A, E = A.child; E !== null; ) {
          for (B = M = E; M !== null; ) {
            switch (a = M, u = a.child, a.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Sn(4, a, a.return);
                break;
              case 1:
                Yt(a, a.return);
                var c = a.stateNode;
                if (typeof c.componentWillUnmount == "function") {
                  n = a, t = a.return;
                  try {
                    e = n, c.props = e.memoizedProps, c.state = e.memoizedState, c.componentWillUnmount();
                  } catch (f) {
                    oA(n, t, f);
                  }
                }
                break;
              case 5:
                Yt(a, a.return);
                break;
              case 22:
                if (a.memoizedState !== null) {
                  Es(B);
                  continue;
                }
            }
            u !== null ? (u.return = a, M = u) : Es(B);
          }
          E = E.sibling;
        }
        A: for (E = null, B = A; ; ) {
          if (B.tag === 5) {
            if (E === null) {
              E = B;
              try {
                r = B.stateNode, s ? (o = r.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (g = B.stateNode, l = B.memoizedProps.style, i = l != null && l.hasOwnProperty("display") ? l.display : null, g.style.display = BB("display", i));
              } catch (f) {
                oA(A, A.return, f);
              }
            }
          } else if (B.tag === 6) {
            if (E === null) try {
              B.stateNode.nodeValue = s ? "" : B.memoizedProps;
            } catch (f) {
              oA(A, A.return, f);
            }
          } else if ((B.tag !== 22 && B.tag !== 23 || B.memoizedState === null || B === A) && B.child !== null) {
            B.child.return = B, B = B.child;
            continue;
          }
          if (B === A) break A;
          for (; B.sibling === null; ) {
            if (B.return === null || B.return === A) break A;
            E === B && (E = null), B = B.return;
          }
          E === B && (E = null), B.sibling.return = B.return, B = B.sibling;
        }
      }
      break;
    case 19:
      $A(e, A), ge(A), n & 4 && Qs(A);
      break;
    case 21:
      break;
    default:
      $A(
        e,
        A
      ), ge(A);
  }
}
function ge(A) {
  var e = A.flags;
  if (e & 2) {
    try {
      A: {
        for (var t = A.return; t !== null; ) {
          if (xI(t)) {
            var n = t;
            break A;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (n.tag) {
        case 5:
          var r = n.stateNode;
          n.flags & 32 && (Rn(r, ""), n.flags &= -33);
          var o = as(A);
          Vi(A, o, r);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo, g = as(A);
          Xi(A, g, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (l) {
      oA(A, A.return, l);
    }
    A.flags &= -3;
  }
  e & 4096 && (A.flags &= -4097);
}
function XC(A, e, t) {
  M = A, HI(A);
}
function HI(A, e, t) {
  for (var n = (A.mode & 1) !== 0; M !== null; ) {
    var r = M, o = r.child;
    if (r.tag === 22 && n) {
      var i = r.memoizedState !== null || fr;
      if (!i) {
        var g = r.alternate, l = g !== null && g.memoizedState !== null || hA;
        g = fr;
        var s = hA;
        if (fr = i, (hA = l) && !s) for (M = r; M !== null; ) i = M, l = i.child, i.tag === 22 && i.memoizedState !== null ? us(r) : l !== null ? (l.return = i, M = l) : us(r);
        for (; o !== null; ) M = o, HI(o), o = o.sibling;
        M = r, fr = g, hA = s;
      }
      Cs(A);
    } else r.subtreeFlags & 8772 && o !== null ? (o.return = r, M = o) : Cs(A);
  }
}
function Cs(A) {
  for (; M !== null; ) {
    var e = M;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            hA || ho(5, e);
            break;
          case 1:
            var n = e.stateNode;
            if (e.flags & 4 && !hA) if (t === null) n.componentDidMount();
            else {
              var r = e.elementType === e.type ? t.memoizedProps : Ae(e.type, t.memoizedProps);
              n.componentDidUpdate(r, t.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var o = e.updateQueue;
            o !== null && Vl(e, o, n);
            break;
          case 3:
            var i = e.updateQueue;
            if (i !== null) {
              if (t = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  t = e.child.stateNode;
                  break;
                case 1:
                  t = e.child.stateNode;
              }
              Vl(e, i, t);
            }
            break;
          case 5:
            var g = e.stateNode;
            if (t === null && e.flags & 4) {
              t = g;
              var l = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && t.focus();
                  break;
                case "img":
                  l.src && (t.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (e.memoizedState === null) {
              var s = e.alternate;
              if (s !== null) {
                var E = s.memoizedState;
                if (E !== null) {
                  var B = E.dehydrated;
                  B !== null && Yn(B);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(y(163));
        }
        hA || e.flags & 512 && Oi(e);
      } catch (a) {
        oA(e, e.return, a);
      }
    }
    if (e === A) {
      M = null;
      break;
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, M = t;
      break;
    }
    M = e.return;
  }
}
function Es(A) {
  for (; M !== null; ) {
    var e = M;
    if (e === A) {
      M = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      t.return = e.return, M = t;
      break;
    }
    M = e.return;
  }
}
function us(A) {
  for (; M !== null; ) {
    var e = M;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            ho(4, e);
          } catch (l) {
            oA(e, t, l);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var r = e.return;
            try {
              n.componentDidMount();
            } catch (l) {
              oA(e, r, l);
            }
          }
          var o = e.return;
          try {
            Oi(e);
          } catch (l) {
            oA(e, o, l);
          }
          break;
        case 5:
          var i = e.return;
          try {
            Oi(e);
          } catch (l) {
            oA(e, i, l);
          }
      }
    } catch (l) {
      oA(e, e.return, l);
    }
    if (e === A) {
      M = null;
      break;
    }
    var g = e.sibling;
    if (g !== null) {
      g.return = e.return, M = g;
      break;
    }
    M = e.return;
  }
}
var VC = Math.ceil, ro = De.ReactCurrentDispatcher, bg = De.ReactCurrentOwner, WA = De.ReactCurrentBatchConfig, _ = 0, uA = null, BA = null, dA = 0, HA = 0, Jt = Ze(0), QA = 0, Zn = null, Et = 0, yo = 0, Pg = 0, Fn = null, NA = null, qg = 0, Xt = 1 / 0, Qe = null, oo = !1, $i = null, Te = null, wr = !1, Ue = null, io = 0, vn = 0, Ag = null, Lr = -1, Ur = 0;
function SA() {
  return _ & 6 ? lA() : Lr !== -1 ? Lr : Lr = lA();
}
function be(A) {
  return A.mode & 1 ? _ & 2 && dA !== 0 ? dA & -dA : UC.transition !== null ? (Ur === 0 && (Ur = yB()), Ur) : (A = P, A !== 0 || (A = window.event, A = A === void 0 ? 16 : GB(A.type)), A) : 1;
}
function re(A, e, t, n) {
  if (50 < vn) throw vn = 0, Ag = null, Error(y(185));
  Xn(A, t, n), (!(_ & 2) || A !== uA) && (A === uA && (!(_ & 2) && (yo |= t), QA === 4 && Re(A, dA)), xA(A, n), t === 1 && _ === 0 && !(e.mode & 1) && (Xt = lA() + 500, fo && We()));
}
function xA(A, e) {
  var t = A.callbackNode;
  UQ(A, e);
  var n = br(A, A === uA ? dA : 0);
  if (n === 0) t !== null && ml(t), A.callbackNode = null, A.callbackPriority = 0;
  else if (e = n & -n, A.callbackPriority !== e) {
    if (t != null && ml(t), e === 1) A.tag === 0 ? LC(cs.bind(null, A)) : WB(cs.bind(null, A)), GC(function() {
      !(_ & 6) && We();
    }), t = null;
    else {
      switch (DB(n)) {
        case 1:
          t = cg;
          break;
        case 4:
          t = pB;
          break;
        case 16:
          t = Tr;
          break;
        case 536870912:
          t = hB;
          break;
        default:
          t = Tr;
      }
      t = zI(t, KI.bind(null, A));
    }
    A.callbackPriority = e, A.callbackNode = t;
  }
}
function KI(A, e) {
  if (Lr = -1, Ur = 0, _ & 6) throw Error(y(327));
  var t = A.callbackNode;
  if (Pt() && A.callbackNode !== t) return null;
  var n = br(A, A === uA ? dA : 0);
  if (n === 0) return null;
  if (n & 30 || n & A.expiredLanes || e) e = go(A, n);
  else {
    e = n;
    var r = _;
    _ |= 2;
    var o = TI();
    (uA !== A || dA !== e) && (Qe = null, Xt = lA() + 500, st(A, e));
    do
      try {
        eE();
        break;
      } catch (g) {
        _I(A, g);
      }
    while (!0);
    Gg(), ro.current = o, _ = r, BA !== null ? e = 0 : (uA = null, dA = 0, e = QA);
  }
  if (e !== 0) {
    if (e === 2 && (r = Si(A), r !== 0 && (n = r, e = eg(A, r))), e === 1) throw t = Zn, st(A, 0), Re(A, n), xA(A, lA()), t;
    if (e === 6) Re(A, n);
    else {
      if (r = A.current.alternate, !(n & 30) && !$C(r) && (e = go(A, n), e === 2 && (o = Si(A), o !== 0 && (n = o, e = eg(A, o))), e === 1)) throw t = Zn, st(A, 0), Re(A, n), xA(A, lA()), t;
      switch (A.finishedWork = r, A.finishedLanes = n, e) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          rt(A, NA, Qe);
          break;
        case 3:
          if (Re(A, n), (n & 130023424) === n && (e = qg + 500 - lA(), 10 < e)) {
            if (br(A, 0) !== 0) break;
            if (r = A.suspendedLanes, (r & n) !== n) {
              SA(), A.pingedLanes |= A.suspendedLanes & r;
              break;
            }
            A.timeoutHandle = Ui(rt.bind(null, A, NA, Qe), e);
            break;
          }
          rt(A, NA, Qe);
          break;
        case 4:
          if (Re(A, n), (n & 4194240) === n) break;
          for (e = A.eventTimes, r = -1; 0 < n; ) {
            var i = 31 - ne(n);
            o = 1 << i, i = e[i], i > r && (r = i), n &= ~o;
          }
          if (n = r, n = lA() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * VC(n / 1960)) - n, 10 < n) {
            A.timeoutHandle = Ui(rt.bind(null, A, NA, Qe), n);
            break;
          }
          rt(A, NA, Qe);
          break;
        case 5:
          rt(A, NA, Qe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return xA(A, lA()), A.callbackNode === t ? KI.bind(null, A) : null;
}
function eg(A, e) {
  var t = Fn;
  return A.current.memoizedState.isDehydrated && (st(A, e).flags |= 256), A = go(A, e), A !== 2 && (e = NA, NA = t, e !== null && tg(e)), A;
}
function tg(A) {
  NA === null ? NA = A : NA.push.apply(NA, A);
}
function $C(A) {
  for (var e = A; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var n = 0; n < t.length; n++) {
        var r = t[n], o = r.getSnapshot;
        r = r.value;
        try {
          if (!oe(o(), r)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (t = e.child, e.subtreeFlags & 16384 && t !== null) t.return = e, e = t;
    else {
      if (e === A) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === A) return !0;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return !0;
}
function Re(A, e) {
  for (e &= ~Pg, e &= ~yo, A.suspendedLanes |= e, A.pingedLanes &= ~e, A = A.expirationTimes; 0 < e; ) {
    var t = 31 - ne(e), n = 1 << t;
    A[t] = -1, e &= ~n;
  }
}
function cs(A) {
  if (_ & 6) throw Error(y(327));
  Pt();
  var e = br(A, 0);
  if (!(e & 1)) return xA(A, lA()), null;
  var t = go(A, e);
  if (A.tag !== 0 && t === 2) {
    var n = Si(A);
    n !== 0 && (e = n, t = eg(A, n));
  }
  if (t === 1) throw t = Zn, st(A, 0), Re(A, e), xA(A, lA()), t;
  if (t === 6) throw Error(y(345));
  return A.finishedWork = A.current.alternate, A.finishedLanes = e, rt(A, NA, Qe), xA(A, lA()), null;
}
function jg(A, e) {
  var t = _;
  _ |= 1;
  try {
    return A(e);
  } finally {
    _ = t, _ === 0 && (Xt = lA() + 500, fo && We());
  }
}
function ut(A) {
  Ue !== null && Ue.tag === 0 && !(_ & 6) && Pt();
  var e = _;
  _ |= 1;
  var t = WA.transition, n = P;
  try {
    if (WA.transition = null, P = 1, A) return A();
  } finally {
    P = n, WA.transition = t, _ = e, !(_ & 6) && We();
  }
}
function zg() {
  HA = Jt.current, X(Jt);
}
function st(A, e) {
  A.finishedWork = null, A.finishedLanes = 0;
  var t = A.timeoutHandle;
  if (t !== -1 && (A.timeoutHandle = -1, vC(t)), BA !== null) for (t = BA.return; t !== null; ) {
    var n = t;
    switch (Sg(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && Zr();
        break;
      case 3:
        Wt(), X(LA), X(yA), xg();
        break;
      case 5:
        Ug(n);
        break;
      case 4:
        Wt();
        break;
      case 13:
        X(AA);
        break;
      case 19:
        X(AA);
        break;
      case 10:
        Mg(n.type._context);
        break;
      case 22:
      case 23:
        zg();
    }
    t = t.return;
  }
  if (uA = A, BA = A = Pe(A.current, null), dA = HA = e, QA = 0, Zn = null, Pg = yo = Et = 0, NA = Fn = null, gt !== null) {
    for (e = 0; e < gt.length; e++) if (t = gt[e], n = t.interleaved, n !== null) {
      t.interleaved = null;
      var r = n.next, o = t.pending;
      if (o !== null) {
        var i = o.next;
        o.next = r, n.next = i;
      }
      t.pending = n;
    }
    gt = null;
  }
  return A;
}
function _I(A, e) {
  do {
    var t = BA;
    try {
      if (Gg(), Mr.current = no, to) {
        for (var n = tA.memoizedState; n !== null; ) {
          var r = n.queue;
          r !== null && (r.pending = null), n = n.next;
        }
        to = !1;
      }
      if (Ct = 0, EA = aA = tA = null, kn = !1, qn = 0, bg.current = null, t === null || t.return === null) {
        QA = 1, Zn = e, BA = null;
        break;
      }
      A: {
        var o = A, i = t.return, g = t, l = e;
        if (e = dA, g.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var s = l, E = g, B = E.tag;
          if (!(E.mode & 1) && (B === 0 || B === 11 || B === 15)) {
            var a = E.alternate;
            a ? (E.updateQueue = a.updateQueue, E.memoizedState = a.memoizedState, E.lanes = a.lanes) : (E.updateQueue = null, E.memoizedState = null);
          }
          var u = rs(i);
          if (u !== null) {
            u.flags &= -257, os(u, i, g, o, e), u.mode & 1 && ns(o, s, e), e = u, l = s;
            var c = e.updateQueue;
            if (c === null) {
              var f = /* @__PURE__ */ new Set();
              f.add(l), e.updateQueue = f;
            } else c.add(l);
            break A;
          } else {
            if (!(e & 1)) {
              ns(o, s, e), Zg();
              break A;
            }
            l = Error(y(426));
          }
        } else if ($ && g.mode & 1) {
          var p = rs(i);
          if (p !== null) {
            !(p.flags & 65536) && (p.flags |= 256), os(p, i, g, o, e), Fg(Ot(l, g));
            break A;
          }
        }
        o = l = Ot(l, g), QA !== 4 && (QA = 2), Fn === null ? Fn = [o] : Fn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, e &= -e, o.lanes |= e;
              var Q = DI(o, l, e);
              Xl(o, Q);
              break A;
            case 1:
              g = l;
              var I = o.type, C = o.stateNode;
              if (!(o.flags & 128) && (typeof I.getDerivedStateFromError == "function" || C !== null && typeof C.componentDidCatch == "function" && (Te === null || !Te.has(C)))) {
                o.flags |= 65536, e &= -e, o.lanes |= e;
                var w = mI(o, g, e);
                Xl(o, w);
                break A;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      PI(t);
    } catch (m) {
      e = m, BA === t && t !== null && (BA = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function TI() {
  var A = ro.current;
  return ro.current = no, A === null ? no : A;
}
function Zg() {
  (QA === 0 || QA === 3 || QA === 2) && (QA = 4), uA === null || !(Et & 268435455) && !(yo & 268435455) || Re(uA, dA);
}
function go(A, e) {
  var t = _;
  _ |= 2;
  var n = TI();
  (uA !== A || dA !== e) && (Qe = null, st(A, e));
  do
    try {
      AE();
      break;
    } catch (r) {
      _I(A, r);
    }
  while (!0);
  if (Gg(), _ = t, ro.current = n, BA !== null) throw Error(y(261));
  return uA = null, dA = 0, QA;
}
function AE() {
  for (; BA !== null; ) bI(BA);
}
function eE() {
  for (; BA !== null && !kQ(); ) bI(BA);
}
function bI(A) {
  var e = jI(A.alternate, A, HA);
  A.memoizedProps = A.pendingProps, e === null ? PI(A) : BA = e, bg.current = null;
}
function PI(A) {
  var e = A;
  do {
    var t = e.alternate;
    if (A = e.return, e.flags & 32768) {
      if (t = ZC(t, e), t !== null) {
        t.flags &= 32767, BA = t;
        return;
      }
      if (A !== null) A.flags |= 32768, A.subtreeFlags = 0, A.deletions = null;
      else {
        QA = 6, BA = null;
        return;
      }
    } else if (t = zC(t, e, HA), t !== null) {
      BA = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      BA = e;
      return;
    }
    BA = e = A;
  } while (e !== null);
  QA === 0 && (QA = 5);
}
function rt(A, e, t) {
  var n = P, r = WA.transition;
  try {
    WA.transition = null, P = 1, tE(A, e, t, n);
  } finally {
    WA.transition = r, P = n;
  }
  return null;
}
function tE(A, e, t, n) {
  do
    Pt();
  while (Ue !== null);
  if (_ & 6) throw Error(y(327));
  t = A.finishedWork;
  var r = A.finishedLanes;
  if (t === null) return null;
  if (A.finishedWork = null, A.finishedLanes = 0, t === A.current) throw Error(y(177));
  A.callbackNode = null, A.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (xQ(A, o), A === uA && (BA = uA = null, dA = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || wr || (wr = !0, zI(Tr, function() {
    return Pt(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = WA.transition, WA.transition = null;
    var i = P;
    P = 1;
    var g = _;
    _ |= 4, bg.current = null, OC(A, t), JI(t, A), hC(Ri), Pr = !!Ni, Ri = Ni = null, A.current = t, XC(t), SQ(), _ = g, P = i, WA.transition = o;
  } else A.current = t;
  if (wr && (wr = !1, Ue = A, io = r), o = A.pendingLanes, o === 0 && (Te = null), GQ(t.stateNode), xA(A, lA()), e !== null) for (n = A.onRecoverableError, t = 0; t < e.length; t++) r = e[t], n(r.value, { componentStack: r.stack, digest: r.digest });
  if (oo) throw oo = !1, A = $i, $i = null, A;
  return io & 1 && A.tag !== 0 && Pt(), o = A.pendingLanes, o & 1 ? A === Ag ? vn++ : (vn = 0, Ag = A) : vn = 0, We(), null;
}
function Pt() {
  if (Ue !== null) {
    var A = DB(io), e = WA.transition, t = P;
    try {
      if (WA.transition = null, P = 16 > A ? 16 : A, Ue === null) var n = !1;
      else {
        if (A = Ue, Ue = null, io = 0, _ & 6) throw Error(y(331));
        var r = _;
        for (_ |= 4, M = A.current; M !== null; ) {
          var o = M, i = o.child;
          if (M.flags & 16) {
            var g = o.deletions;
            if (g !== null) {
              for (var l = 0; l < g.length; l++) {
                var s = g[l];
                for (M = s; M !== null; ) {
                  var E = M;
                  switch (E.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Sn(8, E, o);
                  }
                  var B = E.child;
                  if (B !== null) B.return = E, M = B;
                  else for (; M !== null; ) {
                    E = M;
                    var a = E.sibling, u = E.return;
                    if (UI(E), E === s) {
                      M = null;
                      break;
                    }
                    if (a !== null) {
                      a.return = u, M = a;
                      break;
                    }
                    M = u;
                  }
                }
              }
              var c = o.alternate;
              if (c !== null) {
                var f = c.child;
                if (f !== null) {
                  c.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, M = i;
          else A: for (; M !== null; ) {
            if (o = M, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Sn(9, o, o.return);
            }
            var Q = o.sibling;
            if (Q !== null) {
              Q.return = o.return, M = Q;
              break A;
            }
            M = o.return;
          }
        }
        var I = A.current;
        for (M = I; M !== null; ) {
          i = M;
          var C = i.child;
          if (i.subtreeFlags & 2064 && C !== null) C.return = i, M = C;
          else A: for (i = I; M !== null; ) {
            if (g = M, g.flags & 2048) try {
              switch (g.tag) {
                case 0:
                case 11:
                case 15:
                  ho(9, g);
              }
            } catch (m) {
              oA(g, g.return, m);
            }
            if (g === i) {
              M = null;
              break A;
            }
            var w = g.sibling;
            if (w !== null) {
              w.return = g.return, M = w;
              break A;
            }
            M = g.return;
          }
        }
        if (_ = r, We(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(Qo, A);
        } catch {
        }
        n = !0;
      }
      return n;
    } finally {
      P = t, WA.transition = e;
    }
  }
  return !1;
}
function ds(A, e, t) {
  e = Ot(t, e), e = DI(A, e, 1), A = _e(A, e, 1), e = SA(), A !== null && (Xn(A, 1, e), xA(A, e));
}
function oA(A, e, t) {
  if (A.tag === 3) ds(A, A, t);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      ds(e, A, t);
      break;
    } else if (e.tag === 1) {
      var n = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Te === null || !Te.has(n))) {
        A = Ot(t, A), A = mI(e, A, 1), e = _e(e, A, 1), A = SA(), e !== null && (Xn(e, 1, A), xA(e, A));
        break;
      }
    }
    e = e.return;
  }
}
function nE(A, e, t) {
  var n = A.pingCache;
  n !== null && n.delete(e), e = SA(), A.pingedLanes |= A.suspendedLanes & t, uA === A && (dA & t) === t && (QA === 4 || QA === 3 && (dA & 130023424) === dA && 500 > lA() - qg ? st(A, 0) : Pg |= t), xA(A, e);
}
function qI(A, e) {
  e === 0 && (A.mode & 1 ? (e = Br, Br <<= 1, !(Br & 130023424) && (Br = 4194304)) : e = 1);
  var t = SA();
  A = he(A, e), A !== null && (Xn(A, e, t), xA(A, t));
}
function rE(A) {
  var e = A.memoizedState, t = 0;
  e !== null && (t = e.retryLane), qI(A, t);
}
function oE(A, e) {
  var t = 0;
  switch (A.tag) {
    case 13:
      var n = A.stateNode, r = A.memoizedState;
      r !== null && (t = r.retryLane);
      break;
    case 19:
      n = A.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  n !== null && n.delete(e), qI(A, t);
}
var jI;
jI = function(A, e, t) {
  if (A !== null) if (A.memoizedProps !== e.pendingProps || LA.current) RA = !0;
  else {
    if (!(A.lanes & t) && !(e.flags & 128)) return RA = !1, jC(A, e, t);
    RA = !!(A.flags & 131072);
  }
  else RA = !1, $ && e.flags & 1048576 && OB(e, Xr, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var n = e.type;
      Rr(A, e), A = e.pendingProps;
      var r = jt(e, yA.current);
      bt(e, t), r = Jg(null, e, n, A, r, t);
      var o = Hg();
      return e.flags |= 1, typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, UA(n) ? (o = !0, Wr(e)) : o = !1, e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, Rg(e), r.updater = po, e.stateNode = r, r._reactInternals = e, Ti(e, n, A, t), e = qi(null, e, n, !0, o, t)) : (e.tag = 0, $ && o && kg(e), kA(null, e, r, t), e = e.child), e;
    case 16:
      n = e.elementType;
      A: {
        switch (Rr(A, e), A = e.pendingProps, r = n._init, n = r(n._payload), e.type = n, r = e.tag = gE(n), A = Ae(n, A), r) {
          case 0:
            e = Pi(null, e, n, A, t);
            break A;
          case 1:
            e = ls(null, e, n, A, t);
            break A;
          case 11:
            e = is(null, e, n, A, t);
            break A;
          case 14:
            e = gs(null, e, n, Ae(n.type, A), t);
            break A;
        }
        throw Error(y(
          306,
          n,
          ""
        ));
      }
      return e;
    case 0:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : Ae(n, r), Pi(A, e, n, r, t);
    case 1:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : Ae(n, r), ls(A, e, n, r, t);
    case 3:
      A: {
        if (vI(e), A === null) throw Error(y(387));
        n = e.pendingProps, o = e.memoizedState, r = o.element, tI(A, e), Ao(e, n, null, t);
        var i = e.memoizedState;
        if (n = i.element, o.isDehydrated) if (o = { element: n, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
          r = Ot(Error(y(423)), e), e = ss(A, e, n, t, r);
          break A;
        } else if (n !== r) {
          r = Ot(Error(y(424)), e), e = ss(A, e, n, t, r);
          break A;
        } else for (KA = Ke(e.stateNode.containerInfo.firstChild), _A = e, $ = !0, te = null, t = AI(e, null, n, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (zt(), n === r) {
            e = ye(A, e, t);
            break A;
          }
          kA(A, e, n, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return nI(e), A === null && Hi(e), n = e.type, r = e.pendingProps, o = A !== null ? A.memoizedProps : null, i = r.children, Li(n, r) ? i = null : o !== null && Li(n, o) && (e.flags |= 32), FI(A, e), kA(A, e, i, t), e.child;
    case 6:
      return A === null && Hi(e), null;
    case 13:
      return GI(A, e, t);
    case 4:
      return Lg(e, e.stateNode.containerInfo), n = e.pendingProps, A === null ? e.child = Zt(e, null, n, t) : kA(A, e, n, t), e.child;
    case 11:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : Ae(n, r), is(A, e, n, r, t);
    case 7:
      return kA(A, e, e.pendingProps, t), e.child;
    case 8:
      return kA(A, e, e.pendingProps.children, t), e.child;
    case 12:
      return kA(A, e, e.pendingProps.children, t), e.child;
    case 10:
      A: {
        if (n = e.type._context, r = e.pendingProps, o = e.memoizedProps, i = r.value, W(Vr, n._currentValue), n._currentValue = i, o !== null) if (oe(o.value, i)) {
          if (o.children === r.children && !LA.current) {
            e = ye(A, e, t);
            break A;
          }
        } else for (o = e.child, o !== null && (o.return = e); o !== null; ) {
          var g = o.dependencies;
          if (g !== null) {
            i = o.child;
            for (var l = g.firstContext; l !== null; ) {
              if (l.context === n) {
                if (o.tag === 1) {
                  l = fe(-1, t & -t), l.tag = 2;
                  var s = o.updateQueue;
                  if (s !== null) {
                    s = s.shared;
                    var E = s.pending;
                    E === null ? l.next = l : (l.next = E.next, E.next = l), s.pending = l;
                  }
                }
                o.lanes |= t, l = o.alternate, l !== null && (l.lanes |= t), Ki(
                  o.return,
                  t,
                  e
                ), g.lanes |= t;
                break;
              }
              l = l.next;
            }
          } else if (o.tag === 10) i = o.type === e.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(y(341));
            i.lanes |= t, g = i.alternate, g !== null && (g.lanes |= t), Ki(i, t, e), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === e) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        kA(A, e, r.children, t), e = e.child;
      }
      return e;
    case 9:
      return r = e.type, n = e.pendingProps.children, bt(e, t), r = OA(r), n = n(r), e.flags |= 1, kA(A, e, n, t), e.child;
    case 14:
      return n = e.type, r = Ae(n, e.pendingProps), r = Ae(n.type, r), gs(A, e, n, r, t);
    case 15:
      return kI(A, e, e.type, e.pendingProps, t);
    case 17:
      return n = e.type, r = e.pendingProps, r = e.elementType === n ? r : Ae(n, r), Rr(A, e), e.tag = 1, UA(n) ? (A = !0, Wr(e)) : A = !1, bt(e, t), yI(e, n, r), Ti(e, n, r, t), qi(null, e, n, !0, A, t);
    case 19:
      return MI(A, e, t);
    case 22:
      return SI(A, e, t);
  }
  throw Error(y(156, e.tag));
};
function zI(A, e) {
  return wB(A, e);
}
function iE(A, e, t, n) {
  this.tag = A, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function ZA(A, e, t, n) {
  return new iE(A, e, t, n);
}
function Wg(A) {
  return A = A.prototype, !(!A || !A.isReactComponent);
}
function gE(A) {
  if (typeof A == "function") return Wg(A) ? 1 : 0;
  if (A != null) {
    if (A = A.$$typeof, A === Cg) return 11;
    if (A === Eg) return 14;
  }
  return 2;
}
function Pe(A, e) {
  var t = A.alternate;
  return t === null ? (t = ZA(A.tag, e, A.key, A.mode), t.elementType = A.elementType, t.type = A.type, t.stateNode = A.stateNode, t.alternate = A, A.alternate = t) : (t.pendingProps = e, t.type = A.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = A.flags & 14680064, t.childLanes = A.childLanes, t.lanes = A.lanes, t.child = A.child, t.memoizedProps = A.memoizedProps, t.memoizedState = A.memoizedState, t.updateQueue = A.updateQueue, e = A.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = A.sibling, t.index = A.index, t.ref = A.ref, t;
}
function xr(A, e, t, n, r, o) {
  var i = 2;
  if (n = A, typeof A == "function") Wg(A) && (i = 1);
  else if (typeof A == "string") i = 5;
  else A: switch (A) {
    case Ft:
      return Bt(t.children, r, o, e);
    case Qg:
      i = 8, r |= 8;
      break;
    case ai:
      return A = ZA(12, t, e, r | 2), A.elementType = ai, A.lanes = o, A;
    case Qi:
      return A = ZA(13, t, e, r), A.elementType = Qi, A.lanes = o, A;
    case Ci:
      return A = ZA(19, t, e, r), A.elementType = Ci, A.lanes = o, A;
    case nB:
      return Do(t, r, o, e);
    default:
      if (typeof A == "object" && A !== null) switch (A.$$typeof) {
        case eB:
          i = 10;
          break A;
        case tB:
          i = 9;
          break A;
        case Cg:
          i = 11;
          break A;
        case Eg:
          i = 14;
          break A;
        case Ge:
          i = 16, n = null;
          break A;
      }
      throw Error(y(130, A == null ? A : typeof A, ""));
  }
  return e = ZA(i, t, e, r), e.elementType = A, e.type = n, e.lanes = o, e;
}
function Bt(A, e, t, n) {
  return A = ZA(7, A, n, e), A.lanes = t, A;
}
function Do(A, e, t, n) {
  return A = ZA(22, A, n, e), A.elementType = nB, A.lanes = t, A.stateNode = { isHidden: !1 }, A;
}
function ti(A, e, t) {
  return A = ZA(6, A, null, e), A.lanes = t, A;
}
function ni(A, e, t) {
  return e = ZA(4, A.children !== null ? A.children : [], A.key, e), e.lanes = t, e.stateNode = { containerInfo: A.containerInfo, pendingChildren: null, implementation: A.implementation }, e;
}
function lE(A, e, t, n, r) {
  this.tag = e, this.containerInfo = A, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yo(0), this.expirationTimes = Yo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yo(0), this.identifierPrefix = n, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null;
}
function Og(A, e, t, n, r, o, i, g, l) {
  return A = new lE(A, e, t, g, l), e === 1 ? (e = 1, o === !0 && (e |= 8)) : e = 0, o = ZA(3, null, null, e), A.current = o, o.stateNode = A, o.memoizedState = { element: n, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rg(o), A;
}
function sE(A, e, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: St, key: n == null ? null : "" + n, children: A, containerInfo: e, implementation: t };
}
function ZI(A) {
  if (!A) return je;
  A = A._reactInternals;
  A: {
    if (dt(A) !== A || A.tag !== 1) throw Error(y(170));
    var e = A;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break A;
        case 1:
          if (UA(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break A;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(y(171));
  }
  if (A.tag === 1) {
    var t = A.type;
    if (UA(t)) return ZB(A, t, e);
  }
  return e;
}
function WI(A, e, t, n, r, o, i, g, l) {
  return A = Og(t, n, !0, A, r, o, i, g, l), A.context = ZI(null), t = A.current, n = SA(), r = be(t), o = fe(n, r), o.callback = e ?? null, _e(t, o, r), A.current.lanes = r, Xn(A, r, n), xA(A, n), A;
}
function mo(A, e, t, n) {
  var r = e.current, o = SA(), i = be(r);
  return t = ZI(t), e.context === null ? e.context = t : e.pendingContext = t, e = fe(o, i), e.payload = { element: A }, n = n === void 0 ? null : n, n !== null && (e.callback = n), A = _e(r, e, i), A !== null && (re(A, r, i, o), Gr(A, r, i)), i;
}
function lo(A) {
  if (A = A.current, !A.child) return null;
  switch (A.child.tag) {
    case 5:
      return A.child.stateNode;
    default:
      return A.child.stateNode;
  }
}
function fs(A, e) {
  if (A = A.memoizedState, A !== null && A.dehydrated !== null) {
    var t = A.retryLane;
    A.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Xg(A, e) {
  fs(A, e), (A = A.alternate) && fs(A, e);
}
function BE() {
  return null;
}
var OI = typeof reportError == "function" ? reportError : function(A) {
  console.error(A);
};
function Vg(A) {
  this._internalRoot = A;
}
ko.prototype.render = Vg.prototype.render = function(A) {
  var e = this._internalRoot;
  if (e === null) throw Error(y(409));
  mo(A, e, null, null);
};
ko.prototype.unmount = Vg.prototype.unmount = function() {
  var A = this._internalRoot;
  if (A !== null) {
    this._internalRoot = null;
    var e = A.containerInfo;
    ut(function() {
      mo(null, A, null, null);
    }), e[pe] = null;
  }
};
function ko(A) {
  this._internalRoot = A;
}
ko.prototype.unstable_scheduleHydration = function(A) {
  if (A) {
    var e = SB();
    A = { blockedOn: null, target: A, priority: e };
    for (var t = 0; t < Ne.length && e !== 0 && e < Ne[t].priority; t++) ;
    Ne.splice(t, 0, A), t === 0 && vB(A);
  }
};
function $g(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11);
}
function So(A) {
  return !(!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11 && (A.nodeType !== 8 || A.nodeValue !== " react-mount-point-unstable "));
}
function ws() {
}
function IE(A, e, t, n, r) {
  if (r) {
    if (typeof n == "function") {
      var o = n;
      n = function() {
        var s = lo(i);
        o.call(s);
      };
    }
    var i = WI(e, n, A, 0, null, !1, !1, "", ws);
    return A._reactRootContainer = i, A[pe] = i.current, Kn(A.nodeType === 8 ? A.parentNode : A), ut(), i;
  }
  for (; r = A.lastChild; ) A.removeChild(r);
  if (typeof n == "function") {
    var g = n;
    n = function() {
      var s = lo(l);
      g.call(s);
    };
  }
  var l = Og(A, 0, !1, null, null, !1, !1, "", ws);
  return A._reactRootContainer = l, A[pe] = l.current, Kn(A.nodeType === 8 ? A.parentNode : A), ut(function() {
    mo(e, l, t, n);
  }), l;
}
function Fo(A, e, t, n, r) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof r == "function") {
      var g = r;
      r = function() {
        var l = lo(i);
        g.call(l);
      };
    }
    mo(e, i, A, r);
  } else i = IE(t, e, A, r, n);
  return lo(i);
}
mB = function(A) {
  switch (A.tag) {
    case 3:
      var e = A.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = cn(e.pendingLanes);
        t !== 0 && (dg(e, t | 1), xA(e, lA()), !(_ & 6) && (Xt = lA() + 500, We()));
      }
      break;
    case 13:
      ut(function() {
        var n = he(A, 1);
        if (n !== null) {
          var r = SA();
          re(n, A, 1, r);
        }
      }), Xg(A, 1);
  }
};
fg = function(A) {
  if (A.tag === 13) {
    var e = he(A, 134217728);
    if (e !== null) {
      var t = SA();
      re(e, A, 134217728, t);
    }
    Xg(A, 134217728);
  }
};
kB = function(A) {
  if (A.tag === 13) {
    var e = be(A), t = he(A, e);
    if (t !== null) {
      var n = SA();
      re(t, A, e, n);
    }
    Xg(A, e);
  }
};
SB = function() {
  return P;
};
FB = function(A, e) {
  var t = P;
  try {
    return P = A, e();
  } finally {
    P = t;
  }
};
Di = function(A, e, t) {
  switch (e) {
    case "input":
      if (ci(A, t), e = t.name, t.type === "radio" && e != null) {
        for (t = A; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
          var n = t[e];
          if (n !== A && n.form === A.form) {
            var r = co(n);
            if (!r) throw Error(y(90));
            oB(n), ci(n, r);
          }
        }
      }
      break;
    case "textarea":
      gB(A, t);
      break;
    case "select":
      e = t.value, e != null && Ht(A, !!t.multiple, e, !1);
  }
};
CB = jg;
EB = ut;
var aE = { usingClientEntryPoint: !1, Events: [$n, Nt, co, aB, QB, jg] }, Qn = { findFiberByHostInstance: it, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, QE = { bundleType: Qn.bundleType, version: Qn.version, rendererPackageName: Qn.rendererPackageName, rendererConfig: Qn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: De.ReactCurrentDispatcher, findHostInstanceByFiber: function(A) {
  return A = dB(A), A === null ? null : A.stateNode;
}, findFiberByHostInstance: Qn.findFiberByHostInstance || BE, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!pr.isDisabled && pr.supportsFiber) try {
    Qo = pr.inject(QE), Be = pr;
  } catch {
  }
}
bA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aE;
bA.createPortal = function(A, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$g(e)) throw Error(y(200));
  return sE(A, e, null, t);
};
bA.createRoot = function(A, e) {
  if (!$g(A)) throw Error(y(299));
  var t = !1, n = "", r = OI;
  return e != null && (e.unstable_strictMode === !0 && (t = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (r = e.onRecoverableError)), e = Og(A, 1, !1, null, null, t, !1, n, r), A[pe] = e.current, Kn(A.nodeType === 8 ? A.parentNode : A), new Vg(e);
};
bA.findDOMNode = function(A) {
  if (A == null) return null;
  if (A.nodeType === 1) return A;
  var e = A._reactInternals;
  if (e === void 0)
    throw typeof A.render == "function" ? Error(y(188)) : (A = Object.keys(A).join(","), Error(y(268, A)));
  return A = dB(e), A = A === null ? null : A.stateNode, A;
};
bA.flushSync = function(A) {
  return ut(A);
};
bA.hydrate = function(A, e, t) {
  if (!So(e)) throw Error(y(200));
  return Fo(null, A, e, !0, t);
};
bA.hydrateRoot = function(A, e, t) {
  if (!$g(A)) throw Error(y(405));
  var n = t != null && t.hydratedSources || null, r = !1, o = "", i = OI;
  if (t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), e = WI(e, null, A, 1, t ?? null, r, !1, o, i), A[pe] = e.current, Kn(A), n) for (A = 0; A < n.length; A++) t = n[A], r = t._getVersion, r = r(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(
    t,
    r
  );
  return new ko(e);
};
bA.render = function(A, e, t) {
  if (!So(e)) throw Error(y(200));
  return Fo(null, A, e, !1, t);
};
bA.unmountComponentAtNode = function(A) {
  if (!So(A)) throw Error(y(40));
  return A._reactRootContainer ? (ut(function() {
    Fo(null, null, A, !1, function() {
      A._reactRootContainer = null, A[pe] = null;
    });
  }), !0) : !1;
};
bA.unstable_batchedUpdates = jg;
bA.unstable_renderSubtreeIntoContainer = function(A, e, t, n) {
  if (!So(t)) throw Error(y(200));
  if (A == null || A._reactInternals === void 0) throw Error(y(38));
  return Fo(A, e, t, !1, n);
};
bA.version = "18.3.1-next-f1338f8080-20240426";
function XI() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XI);
    } catch (A) {
      console.error(A);
    }
}
XI(), Xs.exports = bA;
var CE = Xs.exports, VI, ps = CE;
VI = ps.createRoot, ps.hydrateRoot;
function EE(A, e, t) {
  const [n, r] = v.useState({
    grid: null,
    loading: !0,
    error: null,
    initialized: !1
  }), o = v.useRef(!1);
  return v.useEffect(() => {
    if (o.current) return;
    const i = A.current;
    i && (o.current = !0, (async () => {
      try {
        const g = await Promise.resolve().then(() => rc);
        await g.default();
        const l = g.GridCanvas.from_canvas(i, e, t);
        r({
          grid: l,
          loading: !1,
          error: null,
          initialized: !0
        });
      } catch (g) {
        o.current = !1, r((l) => ({
          ...l,
          loading: !1,
          error: g instanceof Error ? g.message : String(g)
        }));
      }
    })());
  }, [A.current, e, t]), n;
}
const hs = (A) => {
  let e;
  const t = /* @__PURE__ */ new Set(), n = (s, E) => {
    const B = typeof s == "function" ? s(e) : s;
    if (!Object.is(B, e)) {
      const a = e;
      e = E ?? (typeof B != "object" || B === null) ? B : Object.assign({}, e, B), t.forEach((u) => u(e, a));
    }
  }, r = () => e, g = { setState: n, getState: r, getInitialState: () => l, subscribe: (s) => (t.add(s), () => t.delete(s)) }, l = e = A(n, r, g);
  return g;
}, uE = (A) => A ? hs(A) : hs, cE = (A) => A;
function dE(A, e = cE) {
  const t = eA.useSyncExternalStore(
    A.subscribe,
    eA.useCallback(() => e(A.getState()), [A, e]),
    eA.useCallback(() => e(A.getInitialState()), [A, e])
  );
  return eA.useDebugValue(t), t;
}
const ys = (A) => {
  const e = uE(A), t = (n) => dE(e, n);
  return Object.assign(t, e), t;
}, fE = (A) => A ? ys(A) : ys;
function $I(A) {
  return A.length === 0 ? null : {
    minRow: Math.min(...A.map((e) => e.row)),
    maxRow: Math.max(...A.map((e) => e.row)),
    minCol: Math.min(...A.map((e) => e.col)),
    maxCol: Math.max(...A.map((e) => e.col))
  };
}
function Aa(A, e) {
  return A.type !== e.type ? !1 : A.type === "cell" && e.type === "cell" ? A.row === e.row && A.col === e.col : A.type === "line" && e.type === "line" || A.type === "rect" && e.type === "rect" ? A.index === e.index : !1;
}
function ea(A, e) {
  return e.some((t) => Aa(t, A));
}
function wE(A, e) {
  return ea(A, e) ? e : [...e, A];
}
function pE(A, e) {
  return e.filter((t) => !Aa(t, A));
}
function Al(A, e) {
  if (A.length === 0) return null;
  let t = 1 / 0, n = 1 / 0, r = -1 / 0, o = -1 / 0;
  for (const i of A)
    if (i.type === "cell")
      t = Math.min(t, i.row), n = Math.min(n, i.col), r = Math.max(r, i.row), o = Math.max(o, i.col);
    else if (i.type === "line") {
      const g = e.get_line(i.index);
      g.length >= 4 && (t = Math.min(t, g[0], g[2]), n = Math.min(n, g[1], g[3]), r = Math.max(r, g[0], g[2]), o = Math.max(o, g[1], g[3]));
    } else if (i.type === "rect") {
      const g = e.get_rect(i.index);
      g.length >= 4 && (t = Math.min(t, g[0], g[2]), n = Math.min(n, g[1], g[3]), r = Math.max(r, g[0], g[2]), o = Math.max(o, g[1], g[3]));
    }
  return t === 1 / 0 ? null : { minRow: t, minCol: n, maxRow: r, maxCol: o };
}
function hE(A, e) {
  const t = Al(A, e);
  return t ? { minRow: t.minRow, minCol: t.minCol } : null;
}
const yE = fE((A, e) => ({
  // Initial state
  grid: null,
  gridSize: { rows: 10, cols: 10 },
  tool: "draw",
  colorIdx: 0,
  isDrawing: !1,
  drawMode: !1,
  lineStart: null,
  rectStart: null,
  selectedItems: [],
  clipboard: null,
  mousePos: { row: 0, col: 0 },
  selectMode: null,
  selectBoxStart: null,
  selectDragStart: null,
  isSelecting: !1,
  previousSelection: [],
  jsonOutput: "",
  tensorOutput: "",
  // Grid actions
  setGrid: (t) => A({ grid: t }),
  setGridSize: (t) => A({ gridSize: t }),
  // Drawing actions
  setTool: (t) => A({ tool: t }),
  setColorIdx: (t) => A({ colorIdx: t }),
  startDrawing: (t) => A({ isDrawing: !0, drawMode: t }),
  stopDrawing: () => A({ isDrawing: !1 }),
  startLine: (t) => A({ lineStart: t, isDrawing: !0 }),
  finishLine: () => A({ lineStart: null, isDrawing: !1 }),
  startRect: (t) => A({ rectStart: t, isDrawing: !0 }),
  finishRect: () => A({ rectStart: null, isDrawing: !1 }),
  // Selection actions
  setSelectedItems: (t) => {
    A({ selectedItems: t }), setTimeout(() => e().updateOutputs(), 0);
  },
  addItemToSelection: (t) => {
    const { selectedItems: n } = e(), r = wE(t, n);
    A({ selectedItems: r }), e().renderSelection(), e().updateOutputs();
  },
  removeItemFromSelection: (t) => {
    const { selectedItems: n } = e(), r = pE(t, n);
    A({ selectedItems: r }), e().renderSelection(), e().updateOutputs();
  },
  clearSelection: () => {
    A({ selectedItems: [] }), e().updateOutputs();
  },
  startBoxSelection: (t, n) => {
    const { selectedItems: r, grid: o } = e(), i = n ? [...r] : [];
    A({
      selectMode: "box",
      selectBoxStart: t,
      isSelecting: !0,
      previousSelection: i,
      selectedItems: n ? r : []
    }), o?.render();
  },
  updateBoxSelection: (t) => {
    const { grid: n, selectBoxStart: r, previousSelection: o } = e();
    if (!(!n || !r)) {
      n.render_with_selection_box(r.row, r.col, t.row, t.col);
      for (const i of o)
        i.type === "cell" ? n.highlight_cell(i.row, i.col) : i.type === "line" ? n.highlight_line(i.index) : i.type === "rect" && n.highlight_rect(i.index);
    }
  },
  finishBoxSelection: (t) => {
    const { grid: n, selectBoxStart: r, previousSelection: o } = e();
    if (!n || !r) {
      A({ selectMode: null, selectBoxStart: null, isSelecting: !1, previousSelection: [] });
      return;
    }
    const i = Math.min(r.row, t.row), g = Math.max(r.row, t.row), l = Math.min(r.col, t.col), s = Math.max(r.col, t.col), E = n.get_rows(), B = n.get_cols(), a = [];
    for (let p = i; p <= g && p < E; p++)
      for (let Q = l; Q <= s && Q < B; Q++)
        n.get_cell(p, Q) && a.push({ type: "cell", row: p, col: Q });
    const u = n.get_line_count();
    for (let p = 0; p < u; p++)
      n.line_intersects_box(p, i, l, g, s) && a.push({ type: "line", index: p });
    const c = n.get_rect_count();
    for (let p = 0; p < c; p++)
      n.rect_intersects_box(p, i, l, g, s) && a.push({ type: "rect", index: p });
    let f = [...o];
    for (const p of a)
      ea(p, f) || f.push(p);
    A({
      selectedItems: f,
      selectMode: null,
      selectBoxStart: null,
      isSelecting: !1,
      previousSelection: []
    }), e().renderSelection(), e().updateOutputs();
  },
  cancelBoxSelection: () => {
    const { previousSelection: t } = e();
    A({
      selectMode: null,
      selectBoxStart: null,
      isSelecting: !1,
      selectedItems: t,
      previousSelection: []
    }), e().renderSelection();
  },
  startDragSelection: (t) => {
    A({
      selectMode: "drag",
      selectDragStart: t,
      isSelecting: !0
    });
  },
  finishDragSelection: (t) => {
    const { grid: n, selectDragStart: r, selectedItems: o, updateOutputs: i } = e();
    if (!n || !r || o.length === 0) {
      A({ selectMode: null, selectDragStart: null, isSelecting: !1 });
      return;
    }
    const g = t.row - r.row, l = t.col - r.col;
    if (g !== 0 || l !== 0) {
      const s = n.get_rows(), E = n.get_cols(), B = [];
      for (const c of o)
        if (c.type === "cell") {
          const f = c.row + g, p = c.col + l;
          f >= 0 && f < s && p >= 0 && p < E && (n.move_cell(c.row, c.col, f, p), B.push({ type: "cell", row: f, col: p }));
        }
      const a = o.filter((c) => c.type === "line");
      for (const c of a)
        n.move_line(c.index, g, l), B.push({ type: "line", index: c.index });
      const u = o.filter((c) => c.type === "rect");
      for (const c of u)
        n.move_rect(c.index, g, l), B.push({ type: "rect", index: c.index });
      A({
        selectedItems: B,
        selectMode: null,
        selectDragStart: null,
        isSelecting: !1
      }), i(), e().renderSelection();
    } else
      A({ selectMode: null, selectDragStart: null, isSelecting: !1 }), e().renderSelection();
  },
  cancelDragSelection: () => {
    A({ selectMode: null, selectDragStart: null, isSelecting: !1 }), e().renderSelection();
  },
  setMousePos: (t) => A({ mousePos: t }),
  // Hit test for shapes - returns the topmost shape at position
  hitTestShapes: (t, n) => {
    const { grid: r } = e();
    if (!r) return null;
    const o = r.hit_test_line(t, n, 8);
    if (o >= 0)
      return { type: "line", index: o };
    const i = r.hit_test_rect(t, n);
    if (i >= 0)
      return { type: "rect", index: i };
    const g = r.get_cell_size(), l = Math.floor(t / g), s = Math.floor(n / g);
    return s >= 0 && s < r.get_rows() && l >= 0 && l < r.get_cols() && r.get_cell(s, l) ? { type: "cell", row: s, col: l } : null;
  },
  // Clipboard actions
  copy: () => {
    const { grid: t, selectedItems: n } = e();
    if (!t || n.length === 0) return;
    const r = hE(n, t);
    if (!r) return;
    const o = [], i = [], g = [];
    for (const l of n)
      if (l.type === "cell")
        o.push({
          relRow: l.row - r.minRow,
          relCol: l.col - r.minCol,
          color: t.get_cell_color(l.row, l.col)
        });
      else if (l.type === "line") {
        const s = t.get_line(l.index);
        s.length >= 5 && i.push({
          relR1: s[0] - r.minRow,
          relC1: s[1] - r.minCol,
          relR2: s[2] - r.minRow,
          relC2: s[3] - r.minCol,
          color: s[4]
        });
      } else if (l.type === "rect") {
        const s = t.get_rect(l.index);
        s.length >= 5 && g.push({
          relR1: s[0] - r.minRow,
          relC1: s[1] - r.minCol,
          relR2: s[2] - r.minRow,
          relC2: s[3] - r.minCol,
          color: s[4]
        });
      }
    A({ clipboard: { cells: o, lines: i, rects: g } });
  },
  paste: () => {
    const { grid: t, clipboard: n, mousePos: r, updateOutputs: o } = e();
    if (!t || !n) return;
    const i = t.get_rows(), g = t.get_cols(), l = [];
    for (const s of n.cells) {
      const E = r.row + s.relRow, B = r.col + s.relCol;
      E >= 0 && E < i && B >= 0 && B < g && (t.set_draw_color(s.color), t.set_cell(E, B, !0), l.push({ type: "cell", row: E, col: B }));
    }
    for (const s of n.lines) {
      const E = r.row + s.relR1, B = r.col + s.relC1, a = r.row + s.relR2, u = r.col + s.relC2;
      E >= 0 && B >= 0 && a >= 0 && u >= 0 && (t.add_line(E, B, a, u, s.color), l.push({ type: "line", index: t.get_line_count() - 1 }));
    }
    for (const s of n.rects) {
      const E = r.row + s.relR1, B = r.col + s.relC1, a = r.row + s.relR2, u = r.col + s.relC2;
      E >= 0 && B >= 0 && a >= 0 && u >= 0 && (t.add_rect(E, B, a, u, s.color), l.push({ type: "rect", index: t.get_rect_count() - 1 }));
    }
    t.render(), A({ selectedItems: l }), e().renderSelection(), o();
  },
  deleteSelected: () => {
    const { grid: t, selectedItems: n, updateOutputs: r } = e();
    if (!t || n.length === 0) return;
    const o = n.filter((g) => g.type === "line").map((g) => g.index).sort((g, l) => l - g), i = n.filter((g) => g.type === "rect").map((g) => g.index).sort((g, l) => l - g);
    for (const g of n)
      g.type === "cell" && t.delete_cell(g.row, g.col);
    for (const g of o)
      t.delete_line(g);
    for (const g of i)
      t.delete_rect(g);
    A({ selectedItems: [] }), t.render(), r();
  },
  // Output actions - sparse format for cells
  updateOutputs: () => {
    const { grid: t, selectedItems: n } = e(), r = n.filter((a) => a.type === "cell");
    if (!t || r.length === 0) {
      A({ jsonOutput: "", tensorOutput: "" });
      return;
    }
    const o = ["#000000", "#ffffff", "#cc3333", "#ffcc00", "#2266dd", "#22aa22", null], i = [], g = r.map((a) => ({ row: a.row, col: a.col })), l = $I(g);
    if (!l) {
      A({ jsonOutput: "", tensorOutput: "" });
      return;
    }
    for (const a of r)
      if (t.get_cell(a.row, a.col)) {
        const u = t.get_cell_color(a.row, a.col), c = o[u] ?? "#000000";
        i.push({
          row: a.row - l.minRow,
          col: a.col - l.minCol,
          color: c
        });
      }
    i.sort((a, u) => a.row - u.row || a.col - u.col);
    const s = l.maxRow - l.minRow + 1, E = l.maxCol - l.minCol + 1, B = Array.from({ length: s }, () => Array(E).fill(0));
    for (const a of i)
      a.color === "#000000" && (B[a.row][a.col] = 1);
    A({
      jsonOutput: JSON.stringify(i, null, 2),
      tensorOutput: JSON.stringify(B)
    });
  },
  importJson: (t) => {
    const { grid: n, mousePos: r } = e();
    if (!n || !t.trim()) return;
    const o = {
      "#000000": 0,
      "#ffffff": 1,
      "#cc3333": 2,
      "#ffcc00": 3,
      "#2266dd": 4,
      "#22aa22": 5
    };
    try {
      const i = JSON.parse(t);
      if (!Array.isArray(i)) return;
      const g = n.get_rows(), l = n.get_cols(), s = [];
      if (i.length > 0 && typeof i[0] == "object" && "row" in i[0] && "col" in i[0])
        for (const B of i) {
          if (typeof B != "object" || B === null) continue;
          const a = B.row, u = B.col, c = B.color;
          if (typeof a != "number" || typeof u != "number") continue;
          const f = r.row + a, p = r.col + u;
          if (f >= 0 && f < g && p >= 0 && p < l) {
            const Q = o[c] ?? 0;
            n.set_draw_color(Q), n.set_cell(f, p, !0), s.push({ type: "cell", row: f, col: p });
          }
        }
      else
        for (let B = 0; B < i.length; B++) {
          const a = i[B];
          if (Array.isArray(a))
            for (let u = 0; u < a.length; u++) {
              const c = r.row + B, f = r.col + u;
              if (c >= g || f >= l) continue;
              const p = a[u];
              if (p && typeof p == "object" && p.color) {
                const Q = o[p.color] ?? 0;
                n.set_draw_color(Q), n.set_cell(c, f, !0), s.push({ type: "cell", row: c, col: f });
              }
            }
        }
      s.length > 0 && A({ selectedItems: s }), n.render(), e().renderSelection();
    } catch {
    }
  },
  importTensor: (t) => {
    const { grid: n, mousePos: r } = e();
    if (!(!n || !t.trim()))
      try {
        let o = t.trim();
        o.startsWith("tensor(") && (o = o.slice(7), o.endsWith(")") && (o = o.slice(0, -1)));
        const i = JSON.parse(o);
        if (!Array.isArray(i)) return;
        const g = n.get_rows(), l = n.get_cols(), s = [];
        n.set_draw_color(0);
        for (let E = 0; E < i.length; E++) {
          const B = i[E];
          if (Array.isArray(B))
            for (let a = 0; a < B.length; a++) {
              const u = r.row + E, c = r.col + a;
              if (u >= g || c >= l) continue;
              Number(B[a]) > 0.5 && (n.set_cell(u, c, !0), s.push({ type: "cell", row: u, col: c }));
            }
        }
        s.length > 0 && A({ selectedItems: s }), n.render(), e().renderSelection();
      } catch {
      }
  },
  clear: () => {
    const { grid: t, updateOutputs: n } = e();
    t?.clear(), A({ selectedItems: [] }), n();
  },
  // Rendering helpers
  renderSelection: () => {
    const { grid: t, selectedItems: n } = e();
    if (t) {
      t.render();
      for (const r of n)
        r.type === "cell" ? t.highlight_cell(r.row, r.col) : r.type === "line" ? t.highlight_line(r.index) : r.type === "rect" && t.highlight_rect(r.index);
      if (n.length > 1) {
        const r = Al(n, t);
        r && t.draw_selection_box(r.minRow, r.minCol, r.maxRow + 1, r.maxCol + 1);
      }
    }
  },
  // Helper to get selected cells only
  getSelectedCells: () => {
    const { selectedItems: t } = e();
    return t.filter((n) => n.type === "cell").map((n) => ({ row: n.row, col: n.col }));
  }
}));
function ta(A) {
  var e, t, n = "";
  if (typeof A == "string" || typeof A == "number") n += A;
  else if (typeof A == "object") if (Array.isArray(A)) {
    var r = A.length;
    for (e = 0; e < r; e++) A[e] && (t = ta(A[e])) && (n && (n += " "), n += t);
  } else for (t in A) A[t] && (n && (n += " "), n += t);
  return n;
}
function na() {
  for (var A, e, t = 0, n = "", r = arguments.length; t < r; t++) (A = arguments[t]) && (e = ta(A)) && (n && (n += " "), n += e);
  return n;
}
const Ds = (A) => typeof A == "boolean" ? `${A}` : A === 0 ? "0" : A, ms = na, ra = (A, e) => (t) => {
  var n;
  if (e?.variants == null) return ms(A, t?.class, t?.className);
  const { variants: r, defaultVariants: o } = e, i = Object.keys(r).map((s) => {
    const E = t?.[s], B = o?.[s];
    if (E === null) return null;
    const a = Ds(E) || Ds(B);
    return r[s][a];
  }), g = t && Object.entries(t).reduce((s, E) => {
    let [B, a] = E;
    return a === void 0 || (s[B] = a), s;
  }, {}), l = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((s, E) => {
    let { class: B, className: a, ...u } = E;
    return Object.entries(u).every((c) => {
      let [f, p] = c;
      return Array.isArray(p) ? p.includes({
        ...o,
        ...g
      }[f]) : {
        ...o,
        ...g
      }[f] === p;
    }) ? [
      ...s,
      B,
      a
    ] : s;
  }, []);
  return ms(A, i, l, t?.class, t?.className);
};
function ks(A, e) {
  if (typeof A == "function")
    return A(e);
  A != null && (A.current = e);
}
function oa(...A) {
  return (e) => {
    let t = !1;
    const n = A.map((r) => {
      const o = ks(r, e);
      return !t && typeof o == "function" && (t = !0), o;
    });
    if (t)
      return () => {
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          typeof o == "function" ? o() : ks(A[r], null);
        }
      };
  };
}
function ng(...A) {
  return v.useCallback(oa(...A), A);
}
// @__NO_SIDE_EFFECTS__
function so(A) {
  const e = /* @__PURE__ */ mE(A), t = v.forwardRef((n, r) => {
    const { children: o, ...i } = n, g = v.Children.toArray(o), l = g.find(SE);
    if (l) {
      const s = l.props.children, E = g.map((B) => B === l ? v.Children.count(s) > 1 ? v.Children.only(null) : v.isValidElement(s) ? s.props.children : null : B);
      return /* @__PURE__ */ h.jsx(e, { ...i, ref: r, children: v.isValidElement(s) ? v.cloneElement(s, void 0, E) : null });
    }
    return /* @__PURE__ */ h.jsx(e, { ...i, ref: r, children: o });
  });
  return t.displayName = `${A}.Slot`, t;
}
var DE = /* @__PURE__ */ so("Slot");
// @__NO_SIDE_EFFECTS__
function mE(A) {
  const e = v.forwardRef((t, n) => {
    const { children: r, ...o } = t;
    if (v.isValidElement(r)) {
      const i = vE(r), g = FE(o, r.props);
      return r.type !== v.Fragment && (g.ref = n ? oa(n, i) : i), v.cloneElement(r, g);
    }
    return v.Children.count(r) > 1 ? v.Children.only(null) : null;
  });
  return e.displayName = `${A}.SlotClone`, e;
}
var kE = Symbol("radix.slottable");
function SE(A) {
  return v.isValidElement(A) && typeof A.type == "function" && "__radixId" in A.type && A.type.__radixId === kE;
}
function FE(A, e) {
  const t = { ...e };
  for (const n in e) {
    const r = A[n], o = e[n];
    /^on[A-Z]/.test(n) ? r && o ? t[n] = (...g) => {
      const l = o(...g);
      return r(...g), l;
    } : r && (t[n] = r) : n === "style" ? t[n] = { ...r, ...o } : n === "className" && (t[n] = [r, o].filter(Boolean).join(" "));
  }
  return { ...A, ...t };
}
function vE(A) {
  let e = Object.getOwnPropertyDescriptor(A.props, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? A.ref : (e = Object.getOwnPropertyDescriptor(A, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? A.props.ref : A.props.ref || A.ref);
}
var GE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Wn = GE.reduce((A, e) => {
  const t = /* @__PURE__ */ so(`Primitive.${e}`), n = v.forwardRef((r, o) => {
    const { asChild: i, ...g } = r, l = i ? t : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h.jsx(l, { ...g, ref: o });
  });
  return n.displayName = `Primitive.${e}`, { ...A, [e]: n };
}, {});
function el(A, e = []) {
  let t = [];
  function n(o, i) {
    const g = v.createContext(i), l = t.length;
    t = [...t, i];
    const s = (B) => {
      const { scope: a, children: u, ...c } = B, f = a?.[A]?.[l] || g, p = v.useMemo(() => c, Object.values(c));
      return /* @__PURE__ */ h.jsx(f.Provider, { value: p, children: u });
    };
    s.displayName = o + "Provider";
    function E(B, a) {
      const u = a?.[A]?.[l] || g, c = v.useContext(u);
      if (c) return c;
      if (i !== void 0) return i;
      throw new Error(`\`${B}\` must be used within \`${o}\``);
    }
    return [s, E];
  }
  const r = () => {
    const o = t.map((i) => v.createContext(i));
    return function(g) {
      const l = g?.[A] || o;
      return v.useMemo(
        () => ({ [`__scope${A}`]: { ...g, [A]: l } }),
        [g, l]
      );
    };
  };
  return r.scopeName = A, [n, ME(r, ...e)];
}
function ME(...A) {
  const e = A[0];
  if (A.length === 1) return e;
  const t = () => {
    const n = A.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return function(o) {
      const i = n.reduce((g, { useScope: l, scopeName: s }) => {
        const B = l(o)[`__scope${s}`];
        return { ...g, ...B };
      }, {});
      return v.useMemo(() => ({ [`__scope${e.scopeName}`]: i }), [i]);
    };
  };
  return t.scopeName = e.scopeName, t;
}
function NE(A) {
  const e = A + "CollectionProvider", [t, n] = el(e), [r, o] = t(
    e,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (f) => {
    const { scope: p, children: Q } = f, I = eA.useRef(null), C = eA.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h.jsx(r, { scope: p, itemMap: C, collectionRef: I, children: Q });
  };
  i.displayName = e;
  const g = A + "CollectionSlot", l = /* @__PURE__ */ so(g), s = eA.forwardRef(
    (f, p) => {
      const { scope: Q, children: I } = f, C = o(g, Q), w = ng(p, C.collectionRef);
      return /* @__PURE__ */ h.jsx(l, { ref: w, children: I });
    }
  );
  s.displayName = g;
  const E = A + "CollectionItemSlot", B = "data-radix-collection-item", a = /* @__PURE__ */ so(E), u = eA.forwardRef(
    (f, p) => {
      const { scope: Q, children: I, ...C } = f, w = eA.useRef(null), m = ng(p, w), k = o(E, Q);
      return eA.useEffect(() => (k.itemMap.set(w, { ref: w, ...C }), () => void k.itemMap.delete(w))), /* @__PURE__ */ h.jsx(a, { [B]: "", ref: m, children: I });
    }
  );
  u.displayName = E;
  function c(f) {
    const p = o(A + "CollectionConsumer", f);
    return eA.useCallback(() => {
      const I = p.collectionRef.current;
      if (!I) return [];
      const C = Array.from(I.querySelectorAll(`[${B}]`));
      return Array.from(p.itemMap.values()).sort(
        (k, G) => C.indexOf(k.ref.current) - C.indexOf(G.ref.current)
      );
    }, [p.collectionRef, p.itemMap]);
  }
  return [
    { Provider: i, Slot: s, ItemSlot: u },
    c,
    n
  ];
}
function It(A, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(r) {
    if (A?.(r), t === !1 || !r.defaultPrevented)
      return e?.(r);
  };
}
var ia = globalThis?.document ? v.useLayoutEffect : () => {
}, RE = Ws[" useInsertionEffect ".trim().toString()] || ia;
function vo({
  prop: A,
  defaultProp: e,
  onChange: t = () => {
  },
  caller: n
}) {
  const [r, o, i] = LE({
    defaultProp: e,
    onChange: t
  }), g = A !== void 0, l = g ? A : r;
  {
    const E = v.useRef(A !== void 0);
    v.useEffect(() => {
      const B = E.current;
      B !== g && console.warn(
        `${n} is changing from ${B ? "controlled" : "uncontrolled"} to ${g ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), E.current = g;
    }, [g, n]);
  }
  const s = v.useCallback(
    (E) => {
      if (g) {
        const B = UE(E) ? E(A) : E;
        B !== A && i.current?.(B);
      } else
        o(E);
    },
    [g, A, o, i]
  );
  return [l, s];
}
function LE({
  defaultProp: A,
  onChange: e
}) {
  const [t, n] = v.useState(A), r = v.useRef(t), o = v.useRef(e);
  return RE(() => {
    o.current = e;
  }, [e]), v.useEffect(() => {
    r.current !== t && (o.current?.(t), r.current = t);
  }, [t, r]), [t, n, o];
}
function UE(A) {
  return typeof A == "function";
}
var xE = Ws[" useId ".trim().toString()] || (() => {
}), YE = 0;
function JE(A) {
  const [e, t] = v.useState(xE());
  return ia(() => {
    t((n) => n ?? String(YE++));
  }, [A]), e ? `radix-${e}` : "";
}
var HE = v.createContext(void 0);
function ga(A) {
  const e = v.useContext(HE);
  return A || e || "ltr";
}
function KE(A) {
  const e = v.useRef(A);
  return v.useEffect(() => {
    e.current = A;
  }), v.useMemo(() => (...t) => e.current?.(...t), []);
}
var ri = "rovingFocusGroup.onEntryFocus", _E = { bubbles: !1, cancelable: !0 }, er = "RovingFocusGroup", [rg, la, TE] = NE(er), [bE, sa] = el(
  er,
  [TE]
), [PE, qE] = bE(er), Ba = v.forwardRef(
  (A, e) => /* @__PURE__ */ h.jsx(rg.Provider, { scope: A.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(rg.Slot, { scope: A.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(jE, { ...A, ref: e }) }) })
);
Ba.displayName = er;
var jE = v.forwardRef((A, e) => {
  const {
    __scopeRovingFocusGroup: t,
    orientation: n,
    loop: r = !1,
    dir: o,
    currentTabStopId: i,
    defaultCurrentTabStopId: g,
    onCurrentTabStopIdChange: l,
    onEntryFocus: s,
    preventScrollOnEntryFocus: E = !1,
    ...B
  } = A, a = v.useRef(null), u = ng(e, a), c = ga(o), [f, p] = vo({
    prop: i,
    defaultProp: g ?? null,
    onChange: l,
    caller: er
  }), [Q, I] = v.useState(!1), C = KE(s), w = la(t), m = v.useRef(!1), [k, G] = v.useState(0);
  return v.useEffect(() => {
    const d = a.current;
    if (d)
      return d.addEventListener(ri, C), () => d.removeEventListener(ri, C);
  }, [C]), /* @__PURE__ */ h.jsx(
    PE,
    {
      scope: t,
      orientation: n,
      dir: c,
      loop: r,
      currentTabStopId: f,
      onItemFocus: v.useCallback(
        (d) => p(d),
        [p]
      ),
      onItemShiftTab: v.useCallback(() => I(!0), []),
      onFocusableItemAdd: v.useCallback(
        () => G((d) => d + 1),
        []
      ),
      onFocusableItemRemove: v.useCallback(
        () => G((d) => d - 1),
        []
      ),
      children: /* @__PURE__ */ h.jsx(
        Wn.div,
        {
          tabIndex: Q || k === 0 ? -1 : 0,
          "data-orientation": n,
          ...B,
          ref: u,
          style: { outline: "none", ...A.style },
          onMouseDown: It(A.onMouseDown, () => {
            m.current = !0;
          }),
          onFocus: It(A.onFocus, (d) => {
            const x = !m.current;
            if (d.target === d.currentTarget && x && !Q) {
              const J = new CustomEvent(ri, _E);
              if (d.currentTarget.dispatchEvent(J), !J.defaultPrevented) {
                const iA = w().filter((j) => j.focusable), DA = iA.find((j) => j.active), YA = iA.find((j) => j.id === f), sA = [DA, YA, ...iA].filter(
                  Boolean
                ).map((j) => j.ref.current);
                Qa(sA, E);
              }
            }
            m.current = !1;
          }),
          onBlur: It(A.onBlur, () => I(!1))
        }
      )
    }
  );
}), Ia = "RovingFocusGroupItem", aa = v.forwardRef(
  (A, e) => {
    const {
      __scopeRovingFocusGroup: t,
      focusable: n = !0,
      active: r = !1,
      tabStopId: o,
      children: i,
      ...g
    } = A, l = JE(), s = o || l, E = qE(Ia, t), B = E.currentTabStopId === s, a = la(t), { onFocusableItemAdd: u, onFocusableItemRemove: c, currentTabStopId: f } = E;
    return v.useEffect(() => {
      if (n)
        return u(), () => c();
    }, [n, u, c]), /* @__PURE__ */ h.jsx(
      rg.ItemSlot,
      {
        scope: t,
        id: s,
        focusable: n,
        active: r,
        children: /* @__PURE__ */ h.jsx(
          Wn.span,
          {
            tabIndex: B ? 0 : -1,
            "data-orientation": E.orientation,
            ...g,
            ref: e,
            onMouseDown: It(A.onMouseDown, (p) => {
              n ? E.onItemFocus(s) : p.preventDefault();
            }),
            onFocus: It(A.onFocus, () => E.onItemFocus(s)),
            onKeyDown: It(A.onKeyDown, (p) => {
              if (p.key === "Tab" && p.shiftKey) {
                E.onItemShiftTab();
                return;
              }
              if (p.target !== p.currentTarget) return;
              const Q = WE(p, E.orientation, E.dir);
              if (Q !== void 0) {
                if (p.metaKey || p.ctrlKey || p.altKey || p.shiftKey) return;
                p.preventDefault();
                let C = a().filter((w) => w.focusable).map((w) => w.ref.current);
                if (Q === "last") C.reverse();
                else if (Q === "prev" || Q === "next") {
                  Q === "prev" && C.reverse();
                  const w = C.indexOf(p.currentTarget);
                  C = E.loop ? OE(C, w + 1) : C.slice(w + 1);
                }
                setTimeout(() => Qa(C));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: B, hasTabStop: f != null }) : i
          }
        )
      }
    );
  }
);
aa.displayName = Ia;
var zE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ZE(A, e) {
  return e !== "rtl" ? A : A === "ArrowLeft" ? "ArrowRight" : A === "ArrowRight" ? "ArrowLeft" : A;
}
function WE(A, e, t) {
  const n = ZE(A.key, t);
  if (!(e === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(e === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return zE[n];
}
function Qa(A, e = !1) {
  const t = document.activeElement;
  for (const n of A)
    if (n === t || (n.focus({ preventScroll: e }), document.activeElement !== t)) return;
}
function OE(A, e) {
  return A.map((t, n) => A[(e + n) % A.length]);
}
var XE = Ba, VE = aa, Ca = "Toggle", Ea = v.forwardRef((A, e) => {
  const { pressed: t, defaultPressed: n, onPressedChange: r, ...o } = A, [i, g] = vo({
    prop: t,
    onChange: r,
    defaultProp: n ?? !1,
    caller: Ca
  });
  return /* @__PURE__ */ h.jsx(
    Wn.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": A.disabled ? "" : void 0,
      ...o,
      ref: e,
      onClick: It(A.onClick, () => {
        A.disabled || g(!i);
      })
    }
  );
});
Ea.displayName = Ca;
var Oe = "ToggleGroup", [ua] = el(Oe, [
  sa
]), ca = sa(), tl = eA.forwardRef((A, e) => {
  const { type: t, ...n } = A;
  if (t === "single") {
    const r = n;
    return /* @__PURE__ */ h.jsx($E, { ...r, ref: e });
  }
  if (t === "multiple") {
    const r = n;
    return /* @__PURE__ */ h.jsx(Au, { ...r, ref: e });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Oe}\``);
});
tl.displayName = Oe;
var [da, fa] = ua(Oe), $E = eA.forwardRef((A, e) => {
  const {
    value: t,
    defaultValue: n,
    onValueChange: r = () => {
    },
    ...o
  } = A, [i, g] = vo({
    prop: t,
    defaultProp: n ?? "",
    onChange: r,
    caller: Oe
  });
  return /* @__PURE__ */ h.jsx(
    da,
    {
      scope: A.__scopeToggleGroup,
      type: "single",
      value: eA.useMemo(() => i ? [i] : [], [i]),
      onItemActivate: g,
      onItemDeactivate: eA.useCallback(() => g(""), [g]),
      children: /* @__PURE__ */ h.jsx(wa, { ...o, ref: e })
    }
  );
}), Au = eA.forwardRef((A, e) => {
  const {
    value: t,
    defaultValue: n,
    onValueChange: r = () => {
    },
    ...o
  } = A, [i, g] = vo({
    prop: t,
    defaultProp: n ?? [],
    onChange: r,
    caller: Oe
  }), l = eA.useCallback(
    (E) => g((B = []) => [...B, E]),
    [g]
  ), s = eA.useCallback(
    (E) => g((B = []) => B.filter((a) => a !== E)),
    [g]
  );
  return /* @__PURE__ */ h.jsx(
    da,
    {
      scope: A.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: l,
      onItemDeactivate: s,
      children: /* @__PURE__ */ h.jsx(wa, { ...o, ref: e })
    }
  );
});
tl.displayName = Oe;
var [eu, tu] = ua(Oe), wa = eA.forwardRef(
  (A, e) => {
    const {
      __scopeToggleGroup: t,
      disabled: n = !1,
      rovingFocus: r = !0,
      orientation: o,
      dir: i,
      loop: g = !0,
      ...l
    } = A, s = ca(t), E = ga(i), B = { role: "group", dir: E, ...l };
    return /* @__PURE__ */ h.jsx(eu, { scope: t, rovingFocus: r, disabled: n, children: r ? /* @__PURE__ */ h.jsx(
      XE,
      {
        asChild: !0,
        ...s,
        orientation: o,
        dir: E,
        loop: g,
        children: /* @__PURE__ */ h.jsx(Wn.div, { ...B, ref: e })
      }
    ) : /* @__PURE__ */ h.jsx(Wn.div, { ...B, ref: e }) });
  }
), Bo = "ToggleGroupItem", pa = eA.forwardRef(
  (A, e) => {
    const t = fa(Bo, A.__scopeToggleGroup), n = tu(Bo, A.__scopeToggleGroup), r = ca(A.__scopeToggleGroup), o = t.value.includes(A.value), i = n.disabled || A.disabled, g = { ...A, pressed: o, disabled: i }, l = eA.useRef(null);
    return n.rovingFocus ? /* @__PURE__ */ h.jsx(
      VE,
      {
        asChild: !0,
        ...r,
        focusable: !i,
        active: o,
        ref: l,
        children: /* @__PURE__ */ h.jsx(Ss, { ...g, ref: e })
      }
    ) : /* @__PURE__ */ h.jsx(Ss, { ...g, ref: e });
  }
);
pa.displayName = Bo;
var Ss = eA.forwardRef(
  (A, e) => {
    const { __scopeToggleGroup: t, value: n, ...r } = A, o = fa(Bo, t), i = { role: "radio", "aria-checked": A.pressed, "aria-pressed": void 0 }, g = o.type === "single" ? i : void 0;
    return /* @__PURE__ */ h.jsx(
      Ea,
      {
        ...g,
        ...r,
        ref: e,
        onPressedChange: (l) => {
          l ? o.onItemActivate(n) : o.onItemDeactivate(n);
        }
      }
    );
  }
), nu = tl, ru = pa;
const ou = (A, e) => {
  const t = new Array(A.length + e.length);
  for (let n = 0; n < A.length; n++)
    t[n] = A[n];
  for (let n = 0; n < e.length; n++)
    t[A.length + n] = e[n];
  return t;
}, iu = (A, e) => ({
  classGroupId: A,
  validator: e
}), ha = (A = /* @__PURE__ */ new Map(), e = null, t) => ({
  nextPart: A,
  validators: e,
  classGroupId: t
}), Io = "-", Fs = [], gu = "arbitrary..", lu = (A) => {
  const e = Bu(A), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = A;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return su(i);
      const g = i.split(Io), l = g[0] === "" && g.length > 1 ? 1 : 0;
      return ya(g, l, e);
    },
    getConflictingClassGroupIds: (i, g) => {
      if (g) {
        const l = n[i], s = t[i];
        return l ? s ? ou(s, l) : l : s || Fs;
      }
      return t[i] || Fs;
    }
  };
}, ya = (A, e, t) => {
  if (A.length - e === 0)
    return t.classGroupId;
  const r = A[e], o = t.nextPart.get(r);
  if (o) {
    const s = ya(A, e + 1, o);
    if (s) return s;
  }
  const i = t.validators;
  if (i === null)
    return;
  const g = e === 0 ? A.join(Io) : A.slice(e).join(Io), l = i.length;
  for (let s = 0; s < l; s++) {
    const E = i[s];
    if (E.validator(g))
      return E.classGroupId;
  }
}, su = (A) => A.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const e = A.slice(1, -1), t = e.indexOf(":"), n = e.slice(0, t);
  return n ? gu + n : void 0;
})(), Bu = (A) => {
  const {
    theme: e,
    classGroups: t
  } = A;
  return Iu(t, e);
}, Iu = (A, e) => {
  const t = ha();
  for (const n in A) {
    const r = A[n];
    nl(r, t, n, e);
  }
  return t;
}, nl = (A, e, t, n) => {
  const r = A.length;
  for (let o = 0; o < r; o++) {
    const i = A[o];
    au(i, e, t, n);
  }
}, au = (A, e, t, n) => {
  if (typeof A == "string") {
    Qu(A, e, t);
    return;
  }
  if (typeof A == "function") {
    Cu(A, e, t, n);
    return;
  }
  Eu(A, e, t, n);
}, Qu = (A, e, t) => {
  const n = A === "" ? e : Da(e, A);
  n.classGroupId = t;
}, Cu = (A, e, t, n) => {
  if (uu(A)) {
    nl(A(n), e, t, n);
    return;
  }
  e.validators === null && (e.validators = []), e.validators.push(iu(t, A));
}, Eu = (A, e, t, n) => {
  const r = Object.entries(A), o = r.length;
  for (let i = 0; i < o; i++) {
    const [g, l] = r[i];
    nl(l, Da(e, g), t, n);
  }
}, Da = (A, e) => {
  let t = A;
  const n = e.split(Io), r = n.length;
  for (let o = 0; o < r; o++) {
    const i = n[o];
    let g = t.nextPart.get(i);
    g || (g = ha(), t.nextPart.set(i, g)), t = g;
  }
  return t;
}, uu = (A) => "isThemeGetter" in A && A.isThemeGetter === !0, cu = (A) => {
  if (A < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const r = (o, i) => {
    t[o] = i, e++, e > A && (e = 0, n = t, t = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let i = t[o];
      if (i !== void 0)
        return i;
      if ((i = n[o]) !== void 0)
        return r(o, i), i;
    },
    set(o, i) {
      o in t ? t[o] = i : r(o, i);
    }
  };
}, og = "!", vs = ":", du = [], Gs = (A, e, t, n, r) => ({
  modifiers: A,
  hasImportantModifier: e,
  baseClassName: t,
  maybePostfixModifierPosition: n,
  isExternal: r
}), fu = (A) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = A;
  let n = (r) => {
    const o = [];
    let i = 0, g = 0, l = 0, s;
    const E = r.length;
    for (let f = 0; f < E; f++) {
      const p = r[f];
      if (i === 0 && g === 0) {
        if (p === vs) {
          o.push(r.slice(l, f)), l = f + 1;
          continue;
        }
        if (p === "/") {
          s = f;
          continue;
        }
      }
      p === "[" ? i++ : p === "]" ? i-- : p === "(" ? g++ : p === ")" && g--;
    }
    const B = o.length === 0 ? r : r.slice(l);
    let a = B, u = !1;
    B.endsWith(og) ? (a = B.slice(0, -1), u = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      B.startsWith(og) && (a = B.slice(1), u = !0)
    );
    const c = s && s > l ? s - l : void 0;
    return Gs(o, u, a, c);
  };
  if (e) {
    const r = e + vs, o = n;
    n = (i) => i.startsWith(r) ? o(i.slice(r.length)) : Gs(du, !1, i, void 0, !0);
  }
  if (t) {
    const r = n;
    n = (o) => t({
      className: o,
      parseClassName: r
    });
  }
  return n;
}, wu = (A) => {
  const e = /* @__PURE__ */ new Map();
  return A.orderSensitiveModifiers.forEach((t, n) => {
    e.set(t, 1e6 + n);
  }), (t) => {
    const n = [];
    let r = [];
    for (let o = 0; o < t.length; o++) {
      const i = t[o], g = i[0] === "[", l = e.has(i);
      g || l ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(i)) : r.push(i);
    }
    return r.length > 0 && (r.sort(), n.push(...r)), n;
  };
}, pu = (A) => ({
  cache: cu(A.cacheSize),
  parseClassName: fu(A),
  sortModifiers: wu(A),
  ...lu(A)
}), hu = /\s+/, yu = (A, e) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: r,
    sortModifiers: o
  } = e, i = [], g = A.trim().split(hu);
  let l = "";
  for (let s = g.length - 1; s >= 0; s -= 1) {
    const E = g[s], {
      isExternal: B,
      modifiers: a,
      hasImportantModifier: u,
      baseClassName: c,
      maybePostfixModifierPosition: f
    } = t(E);
    if (B) {
      l = E + (l.length > 0 ? " " + l : l);
      continue;
    }
    let p = !!f, Q = n(p ? c.substring(0, f) : c);
    if (!Q) {
      if (!p) {
        l = E + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (Q = n(c), !Q) {
        l = E + (l.length > 0 ? " " + l : l);
        continue;
      }
      p = !1;
    }
    const I = a.length === 0 ? "" : a.length === 1 ? a[0] : o(a).join(":"), C = u ? I + og : I, w = C + Q;
    if (i.indexOf(w) > -1)
      continue;
    i.push(w);
    const m = r(Q, p);
    for (let k = 0; k < m.length; ++k) {
      const G = m[k];
      i.push(C + G);
    }
    l = E + (l.length > 0 ? " " + l : l);
  }
  return l;
}, Du = (...A) => {
  let e = 0, t, n, r = "";
  for (; e < A.length; )
    (t = A[e++]) && (n = ma(t)) && (r && (r += " "), r += n);
  return r;
}, ma = (A) => {
  if (typeof A == "string")
    return A;
  let e, t = "";
  for (let n = 0; n < A.length; n++)
    A[n] && (e = ma(A[n])) && (t && (t += " "), t += e);
  return t;
}, mu = (A, ...e) => {
  let t, n, r, o;
  const i = (l) => {
    const s = e.reduce((E, B) => B(E), A());
    return t = pu(s), n = t.cache.get, r = t.cache.set, o = g, g(l);
  }, g = (l) => {
    const s = n(l);
    if (s)
      return s;
    const E = yu(l, t);
    return r(l, E), E;
  };
  return o = i, (...l) => o(Du(...l));
}, ku = [], IA = (A) => {
  const e = (t) => t[A] || ku;
  return e.isThemeGetter = !0, e;
}, ka = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sa = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Su = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Fu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Mu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Nu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (A) => Su.test(A), H = (A) => !!A && !Number.isNaN(Number(A)), Se = (A) => !!A && Number.isInteger(Number(A)), oi = (A) => A.endsWith("%") && H(A.slice(0, -1)), ae = (A) => Fu.test(A), Fa = () => !0, Ru = (A) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  vu.test(A) && !Gu.test(A)
), rl = () => !1, Lu = (A) => Mu.test(A), Uu = (A) => Nu.test(A), xu = (A) => !R(A) && !L(A), Yu = (A) => Xe(A, Ma, rl), R = (A) => ka.test(A), et = (A) => Xe(A, Na, Ru), Ms = (A) => Xe(A, qu, H), Ju = (A) => Xe(A, La, Fa), Hu = (A) => Xe(A, Ra, rl), Ns = (A) => Xe(A, va, rl), Ku = (A) => Xe(A, Ga, Uu), hr = (A) => Xe(A, Ua, Lu), L = (A) => Sa.test(A), Cn = (A) => ft(A, Na), _u = (A) => ft(A, Ra), Rs = (A) => ft(A, va), Tu = (A) => ft(A, Ma), bu = (A) => ft(A, Ga), yr = (A) => ft(A, Ua, !0), Pu = (A) => ft(A, La, !0), Xe = (A, e, t) => {
  const n = ka.exec(A);
  return n ? n[1] ? e(n[1]) : t(n[2]) : !1;
}, ft = (A, e, t = !1) => {
  const n = Sa.exec(A);
  return n ? n[1] ? e(n[1]) : t : !1;
}, va = (A) => A === "position" || A === "percentage", Ga = (A) => A === "image" || A === "url", Ma = (A) => A === "length" || A === "size" || A === "bg-size", Na = (A) => A === "length", qu = (A) => A === "number", Ra = (A) => A === "family-name", La = (A) => A === "number" || A === "weight", Ua = (A) => A === "shadow", ju = () => {
  const A = IA("color"), e = IA("font"), t = IA("text"), n = IA("font-weight"), r = IA("tracking"), o = IA("leading"), i = IA("breakpoint"), g = IA("container"), l = IA("spacing"), s = IA("radius"), E = IA("shadow"), B = IA("inset-shadow"), a = IA("text-shadow"), u = IA("drop-shadow"), c = IA("blur"), f = IA("perspective"), p = IA("aspect"), Q = IA("ease"), I = IA("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], m = () => [...w(), L, R], k = () => ["auto", "hidden", "clip", "visible", "scroll"], G = () => ["auto", "contain", "none"], d = () => [L, R, l], x = () => [ke, "full", "auto", ...d()], J = () => [Se, "none", "subgrid", L, R], iA = () => ["auto", {
    span: ["full", Se, L, R]
  }, Se, L, R], DA = () => [Se, "auto", L, R], YA = () => ["auto", "min", "max", "fr", L, R], ie = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], sA = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], j = () => ["auto", ...d()], GA = () => [ke, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...d()], F = () => [ke, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...d()], Y = () => [ke, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...d()], D = () => [A, L, R], z = () => [...w(), Rs, Ns, {
    position: [L, R]
  }], V = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], VA = () => ["auto", "cover", "contain", Tu, Yu, {
    size: [L, R]
  }], MA = () => [oi, Cn, et], rA = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    s,
    L,
    R
  ], Z = () => ["", H, Cn, et], qA = () => ["solid", "dashed", "dotted", "double"], tn = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], gA = () => [H, oi, Rs, Ns], tr = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    c,
    L,
    R
  ], wt = () => ["none", H, L, R], pt = () => ["none", H, L, R], nn = () => [H, L, R], ht = () => [ke, "full", ...d()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ae],
      breakpoint: [ae],
      color: [Fa],
      container: [ae],
      "drop-shadow": [ae],
      ease: ["in", "out", "in-out"],
      font: [xu],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ae],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ae],
      shadow: [ae],
      spacing: ["px", H],
      text: [ae],
      "text-shadow": [ae],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", ke, R, L, p]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [H, R, L, g]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: m()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: G()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": G()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": G()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: x()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": x()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": x()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": x(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: x()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": x(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: x()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": x()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": x()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: x()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: x()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: x()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: x()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Se, "auto", L, R]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ke, "full", "auto", g, ...d()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [H, ke, "auto", "initial", "none", R]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", H, L, R]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", H, L, R]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Se, "first", "last", "none", L, R]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": J()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: iA()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": DA()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": DA()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": J()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: iA()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": DA()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": DA()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": YA()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": YA()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: d()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": d()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": d()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ie(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...sA(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...sA()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ie()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...sA(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...sA(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ie()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...sA(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...sA()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: d()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: d()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: d()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: d()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: d()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: d()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: d()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: d()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: d()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: d()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: d()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: j()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: j()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: j()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: j()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: j()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: j()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: j()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: j()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: j()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: j()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: j()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": d()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": d()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: GA()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...F()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...F()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...F()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...Y()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...Y()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...Y()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [g, "screen", ...GA()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          g,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...GA()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          g,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...GA()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...GA()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...GA()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...GA()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, Cn, et]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, Pu, Ju]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", oi, R]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_u, Hu, e]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [R]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, L, R]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [H, "none", L, Ms]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...d()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", L, R]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", L, R]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...qA(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [H, "from-font", "auto", L, et]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [H, "auto", L, R]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: d()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L, R]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", L, R]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: z()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: V()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: VA()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Se, L, R],
          radial: ["", L, R],
          conic: [Se, L, R]
        }, bu, Ku]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: MA()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: MA()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: MA()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: rA()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": rA()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": rA()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": rA()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": rA()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": rA()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": rA()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": rA()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": rA()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": rA()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": rA()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": rA()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": rA()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": rA()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": rA()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Z()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Z()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Z()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Z()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Z()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": Z()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": Z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Z()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": Z()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...qA(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...qA(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: D()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": D()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...qA(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [H, L, R]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", H, Cn, et]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          E,
          yr,
          hr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", B, yr, hr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Z()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [H, et]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", a, yr, hr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [H, L, R]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...tn(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": tn()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [H]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": gA()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": gA()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": gA()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": gA()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": gA()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": gA()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": gA()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": gA()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": gA()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": gA()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": gA()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": gA()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": gA()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": gA()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [L, R]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": gA()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": gA()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": w()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [H]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": gA()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": gA()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: z()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: V()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: VA()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", L, R]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          L,
          R
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: tr()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [H, L, R]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [H, L, R]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          yr,
          hr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", H, L, R]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [H, L, R]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", H, L, R]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [H, L, R]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", H, L, R]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          L,
          R
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": tr()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [H, L, R]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [H, L, R]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", H, L, R]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [H, L, R]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", H, L, R]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [H, L, R]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [H, L, R]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", H, L, R]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": d()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": d()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": d()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", L, R]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [H, "initial", L, R]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Q, L, R]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [H, L, R]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", I, L, R]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [f, L, R]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": m()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: wt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": wt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": wt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": wt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: pt()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": pt()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": pt()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": pt()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: nn()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": nn()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": nn()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [L, R, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: m()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ht()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ht()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ht()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ht()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: D()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: D()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L, R]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": d()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": d()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": d()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": d()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": d()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": d()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": d()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": d()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": d()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": d()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": d()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": d()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": d()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": d()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": d()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": d()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": d()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": d()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": d()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": d()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": d()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": d()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", L, R]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [H, Cn, et, Ms]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, zu = /* @__PURE__ */ mu(ju);
function ue(...A) {
  return zu(na(A));
}
const Zu = ra(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function ii({
  className: A,
  variant: e = "default",
  size: t = "default",
  asChild: n = !1,
  ...r
}) {
  const o = n ? DE : "button";
  return /* @__PURE__ */ h.jsx(
    o,
    {
      "data-slot": "button",
      "data-variant": e,
      "data-size": t,
      className: ue(Zu({ variant: e, size: t, className: A })),
      ...r
    }
  );
}
const Wu = ra(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), xa = v.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function Ls({
  className: A,
  variant: e,
  size: t,
  spacing: n = 0,
  children: r,
  ...o
}) {
  return /* @__PURE__ */ h.jsx(
    nu,
    {
      "data-slot": "toggle-group",
      "data-variant": e,
      "data-size": t,
      "data-spacing": n,
      style: { "--gap": n },
      className: ue(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        A
      ),
      ...o,
      children: /* @__PURE__ */ h.jsx(xa.Provider, { value: { variant: e, size: t, spacing: n }, children: r })
    }
  );
}
function Fe({
  className: A,
  children: e,
  variant: t,
  size: n,
  ...r
}) {
  const o = v.useContext(xa);
  return /* @__PURE__ */ h.jsx(
    ru,
    {
      "data-slot": "toggle-group-item",
      "data-variant": o.variant || t,
      "data-size": o.size || n,
      "data-spacing": o.spacing,
      className: ue(
        Wu({
          variant: o.variant || t,
          size: o.size || n
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        A
      ),
      ...r,
      children: e
    }
  );
}
function gi({
  title: A,
  defaultPosition: e,
  children: t,
  className: n
}) {
  const [r, o] = v.useState(e), i = v.useRef(!1), g = v.useRef({ x: 0, y: 0 }), l = v.useCallback((s) => {
    i.current = !0, g.current = {
      x: s.clientX - r.x,
      y: s.clientY - r.y
    };
    const E = (a) => {
      if (!i.current) return;
      const u = Math.max(0, a.clientX - g.current.x), c = Math.max(0, a.clientY - g.current.y);
      o({ x: u, y: c });
    }, B = () => {
      i.current = !1, window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", B);
    };
    window.addEventListener("mousemove", E), window.addEventListener("mouseup", B);
  }, [r]);
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: ue(
        "fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200",
        n
      ),
      style: {
        left: r.x,
        top: r.y
      },
      children: [
        /* @__PURE__ */ h.jsx(
          "div",
          {
            className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg",
            onMouseDown: l,
            children: A
          }
        ),
        /* @__PURE__ */ h.jsx("div", { className: "p-3", children: t })
      ]
    }
  );
}
const xe = 16, ot = 48, Us = [
  { hex: "#000000", name: "Black" },
  { hex: "#ffffff", name: "White" },
  { hex: "#cc3333", name: "Red" },
  { hex: "#ffcc00", name: "Yellow" },
  { hex: "#2266dd", name: "Blue" },
  { hex: "#22aa22", name: "Green" },
  { hex: null, name: "Transparent" }
];
function xs(A, e) {
  if (A && e) {
    const r = Math.floor(A / xe), o = Math.floor((e - ot) / xe);
    return { rows: Math.max(10, o), cols: Math.max(10, r) };
  }
  const t = Math.floor(window.innerWidth / xe), n = Math.floor((window.innerHeight - ot) / xe);
  return { rows: Math.max(10, n), cols: Math.max(10, t) };
}
function Ou({ anywidgetModel: A, widgetWidth: e, widgetHeight: t } = {}) {
  const n = !!A, [r, o] = v.useState(() => xs(e, t)), i = v.useRef(null), { grid: g, loading: l, error: s } = EE(i, r.rows, r.cols), E = yE(), {
    tool: B,
    setTool: a,
    colorIdx: u,
    setColorIdx: c,
    isDrawing: f,
    drawMode: p,
    startDrawing: Q,
    stopDrawing: I,
    lineStart: C,
    startLine: w,
    finishLine: m,
    rectStart: k,
    startRect: G,
    finishRect: d,
    selectedItems: x,
    setSelectedItems: J,
    clipboard: iA,
    copy: DA,
    paste: YA,
    deleteSelected: ie,
    selectMode: sA,
    isSelecting: j,
    selectBoxStart: GA,
    selectDragStart: F,
    startBoxSelection: Y,
    updateBoxSelection: D,
    finishBoxSelection: z,
    cancelBoxSelection: V,
    startDragSelection: VA,
    finishDragSelection: MA,
    cancelDragSelection: rA,
    setMousePos: Z,
    addItemToSelection: qA,
    removeItemFromSelection: tn,
    hitTestShapes: gA,
    getSelectedCells: tr,
    jsonOutput: wt,
    tensorOutput: pt,
    importJson: nn,
    importTensor: ht,
    clear: ol,
    updateOutputs: Ve,
    renderSelection: il,
    setGrid: gl
  } = E, rn = tr();
  v.useEffect(() => {
    gl(g);
  }, [g, gl]), v.useEffect(() => {
    if (n) return;
    const N = () => {
      const U = xs();
      o(U), g && g.resize(U.rows, U.cols);
    };
    return window.addEventListener("resize", N), () => window.removeEventListener("resize", N);
  }, [g, n]);
  const Ka = v.useCallback(() => {
    if (!A || !g) return;
    const N = g.export_pytorch_tensor(), U = g.export_json();
    try {
      const b = JSON.parse(N), q = JSON.parse(U);
      A.set("tensor_data", b), A.set("json_data", q), A.save_changes();
    } catch (b) {
      console.error("Failed to send data to Python:", b);
    }
  }, [A, g]);
  v.useEffect(() => {
    if (n) return;
    const N = (U) => {
      U.key === "\\" && a(B === "line" ? "draw" : "line"), U.key === "m" && a(B === "rect" ? "draw" : "rect"), U.key === "s" && a(B === "select" ? "draw" : "select"), (U.key === "Delete" || U.key === "Backspace") && x.length > 0 && (U.preventDefault(), ie()), (U.ctrlKey || U.metaKey) && U.key === "c" && x.length > 0 && (U.preventDefault(), DA()), (U.ctrlKey || U.metaKey) && U.key === "v" && iA && (U.preventDefault(), YA());
      const b = parseInt(U.key);
      b >= 1 && b <= 7 && c(b - 1);
    };
    return window.addEventListener("keydown", N), () => window.removeEventListener("keydown", N);
  }, [B, a, c, x, ie, DA, YA, iA, n]);
  const Go = (N) => {
    const U = N.currentTarget, b = U.getBoundingClientRect(), q = U.width / b.width, T = U.height / b.height;
    return {
      x: (N.clientX - b.left) * q,
      y: (N.clientY - b.top) * T
    };
  }, yt = (N) => {
    const { x: U, y: b } = Go(N);
    return { col: Math.floor(U / xe), row: Math.floor(b / xe) };
  }, Dt = (N) => {
    const { x: U, y: b } = Go(N), q = g?.get_cols() ?? r.cols, T = g?.get_rows() ?? r.rows, mA = Math.max(0, Math.min(q, Math.round(U / xe))), mt = Math.max(0, Math.min(T, Math.round(b / xe)));
    return { col: mA, row: mt };
  }, ll = (N) => x.some((U) => U.type !== N.type ? !1 : U.type === "cell" && N.type === "cell" ? U.row === N.row && U.col === N.col : U.type === "line" && N.type === "line" || U.type === "rect" && N.type === "rect" ? U.index === N.index : !1), sl = v.useCallback(
    (N) => {
      if (!g) return;
      g.set_draw_color(u);
      const U = g.get_cols(), b = g.get_rows();
      if (B === "draw") {
        const { col: q, row: T } = yt(N);
        if (q >= U || T >= b) return;
        const mA = u === 6 ? !1 : !g.get_cell(T, q);
        Q(mA), g.set_cell(T, q, mA), Ve();
      } else if (B === "line") {
        const { col: q, row: T } = Dt(N);
        w({ row: T, col: q }), g.render_with_line(T, q, T, q);
      } else if (B === "rect") {
        const { col: q, row: T } = Dt(N);
        G({ row: T, col: q }), g.render_with_rect(T, q, T, q);
      } else if (B === "select") {
        const { col: q, row: T } = yt(N), { x: mA, y: mt } = Go(N);
        if (q >= U || T >= b) return;
        const $e = N.shiftKey, At = Al(x, g), Mo = At && T >= At.minRow && T <= At.maxRow && q >= At.minCol && q <= At.maxCol, CA = gA(mA, mt);
        Mo && x.length > 0 && !$e && !CA ? (VA({ row: T, col: q }), il()) : CA ? $e && !ll(CA) ? qA(CA) : $e && ll(CA) ? tn(CA) : (J([CA]), VA({ row: T, col: q }), g.render(), CA.type === "cell" ? g.highlight_cell(CA.row, CA.col) : CA.type === "line" ? g.highlight_line(CA.index) : CA.type === "rect" && g.highlight_rect(CA.index)) : Y({ row: T, col: q }, $e);
      }
    },
    [g, B, u, x, rn, gA, Q, w, G, Y, VA, qA, tn, J, Ve, il]
  ), Bl = v.useCallback(
    (N) => {
      if (!g) return;
      const U = yt(N);
      if (Z(U), !f && !j) return;
      const b = g.get_cols(), q = g.get_rows();
      if (B === "draw" && f) {
        const { col: T, row: mA } = yt(N);
        if (T >= b || mA >= q) return;
        g.set_cell(mA, T, p), Ve();
      } else if (B === "line" && C) {
        const { col: T, row: mA } = Dt(N);
        g.render_with_line(C.row, C.col, mA, T);
      } else if (B === "rect" && k) {
        const { col: T, row: mA } = Dt(N);
        g.render_with_rect(k.row, k.col, mA, T);
      } else if (B === "select" && j) {
        const { col: T, row: mA } = yt(N), mt = Math.max(0, Math.min(b - 1, T)), $e = Math.max(0, Math.min(q - 1, mA));
        if (sA === "box" && GA)
          D({ row: $e, col: mt });
        else if (sA === "drag" && F && x.length > 0) {
          const At = $e - F.row, Mo = mt - F.col;
          g.render();
          const CA = [];
          for (const JA of x)
            if (JA.type === "cell") {
              const nr = JA.row + At, rr = JA.col + Mo;
              nr >= 0 && nr < q && rr >= 0 && rr < b && (g.highlight_cell(nr, rr), CA.push({ row: nr, col: rr }));
            } else JA.type === "line" ? g.highlight_line(JA.index) : JA.type === "rect" && g.highlight_rect(JA.index);
          if (CA.length > 1) {
            const JA = $I(CA);
            JA && g.draw_selection_box(JA.minRow, JA.minCol, JA.maxRow + 1, JA.maxCol + 1);
          }
        }
      }
    },
    [g, B, f, j, p, C, k, sA, GA, F, x, Z, D, Ve]
  ), Il = v.useCallback(
    (N) => {
      if (g) {
        if (B === "draw")
          I();
        else if (B === "line") {
          if (C) {
            const { col: U, row: b } = Dt(N);
            g.draw_line(C.row, C.col, b, U), Ve();
          }
          m();
        } else if (B === "rect") {
          if (k) {
            const { col: U, row: b } = Dt(N);
            g.draw_rect(k.row, k.col, b, U), Ve();
          }
          d();
        } else if (B === "select") {
          const { col: U, row: b } = yt(N);
          sA === "box" ? z({ row: b, col: U }) : sA === "drag" && MA({ row: b, col: U });
        }
      }
    },
    [g, B, C, k, sA, I, m, d, z, MA, Ve]
  ), al = v.useCallback(() => {
    B === "draw" ? I() : B === "line" ? (g && g.render(), m()) : B === "rect" ? (g && g.render(), d()) : B === "select" && (sA === "box" ? V() : sA === "drag" && rA());
  }, [g, B, sA, I, m, d, V, rA]);
  return s ? /* @__PURE__ */ h.jsx("div", { className: ue(
    "flex items-center justify-center bg-gray-100",
    n ? "w-full h-full" : "min-h-screen"
  ), children: /* @__PURE__ */ h.jsx("div", { className: "bg-white p-6 rounded-lg shadow-lg", children: /* @__PURE__ */ h.jsxs("p", { className: "text-red-600", children: [
    "Error loading WASM: ",
    s
  ] }) }) }) : n ? /* @__PURE__ */ h.jsxs(
    "div",
    {
      className: "relative bg-gray-50 border rounded overflow-hidden",
      style: { width: e, height: t },
      children: [
        /* @__PURE__ */ h.jsxs("header", { className: "absolute top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4", children: [
          /* @__PURE__ */ h.jsx("h1", { className: "text-lg font-bold", children: "Grid Draw" }),
          l && /* @__PURE__ */ h.jsx("span", { className: "ml-4 text-sm text-gray-500", children: "Loading..." }),
          /* @__PURE__ */ h.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ h.jsx(
            ii,
            {
              variant: "default",
              onClick: Ka,
              disabled: l,
              size: "sm",
              children: "Send to Python"
            }
          ) })
        ] }),
        /* @__PURE__ */ h.jsx(
          "canvas",
          {
            ref: i,
            className: ue(
              "absolute left-0 right-0 bottom-0",
              l && "opacity-50"
            ),
            style: {
              top: ot,
              cursor: l ? "wait" : "crosshair"
            },
            onMouseDown: sl,
            onMouseMove: Bl,
            onMouseUp: Il,
            onMouseLeave: al
          }
        ),
        /* @__PURE__ */ h.jsx(gi, { title: "Tools", defaultPosition: { x: 20, y: ot + 20 }, children: /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("label", { className: "text-xs font-medium text-gray-500 mb-1 block", children: "Mode" }),
            /* @__PURE__ */ h.jsxs(
              Ls,
              {
                type: "single",
                value: B,
                onValueChange: (N) => N && a(N),
                variant: "outline",
                className: "flex-wrap",
                children: [
                  /* @__PURE__ */ h.jsx(Fe, { value: "draw", className: "text-xs", children: "Draw" }),
                  /* @__PURE__ */ h.jsx(Fe, { value: "line", className: "text-xs", children: "Line" }),
                  /* @__PURE__ */ h.jsx(Fe, { value: "rect", className: "text-xs", children: "Rect" }),
                  /* @__PURE__ */ h.jsx(Fe, { value: "select", className: "text-xs", children: "Select" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("label", { className: "text-xs font-medium text-gray-500 mb-1 block", children: "Color" }),
            /* @__PURE__ */ h.jsx("div", { className: "flex gap-1", children: Us.map((N, U) => /* @__PURE__ */ h.jsx(
              "button",
              {
                onClick: () => c(U),
                title: N.name,
                className: ue(
                  "w-6 h-6 rounded border-2 transition-all",
                  u === U ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400",
                  N.hex === "#ffffff" && "shadow-sm"
                ),
                style: {
                  backgroundColor: N.hex ?? "transparent",
                  backgroundImage: N.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                  backgroundSize: N.hex === null ? "6px 6px" : void 0,
                  backgroundPosition: N.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                }
              },
              U
            )) })
          ] }),
          /* @__PURE__ */ h.jsx(
            ii,
            {
              variant: "destructive",
              onClick: ol,
              disabled: l,
              size: "sm",
              className: "w-full",
              children: "Clear Grid"
            }
          )
        ] }) })
      ]
    }
  ) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsxs("header", { className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4", children: [
      /* @__PURE__ */ h.jsx("h1", { className: "text-xl font-bold", children: "Grid Draw" }),
      l && /* @__PURE__ */ h.jsx("span", { className: "ml-4 text-sm text-gray-500", children: "Loading..." })
    ] }),
    /* @__PURE__ */ h.jsx(
      "canvas",
      {
        ref: i,
        className: ue(
          "fixed left-0 right-0 bottom-0",
          l && "opacity-50"
        ),
        style: {
          top: ot,
          cursor: l ? "wait" : "crosshair"
        },
        onMouseDown: sl,
        onMouseMove: Bl,
        onMouseUp: Il,
        onMouseLeave: al
      }
    ),
    /* @__PURE__ */ h.jsx(gi, { title: "Tools", defaultPosition: { x: 20, y: ot + 20 }, children: /* @__PURE__ */ h.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("label", { className: "text-xs font-medium text-gray-500 mb-1 block", children: "Mode" }),
        /* @__PURE__ */ h.jsxs(
          Ls,
          {
            type: "single",
            value: B,
            onValueChange: (N) => N && a(N),
            variant: "outline",
            className: "flex-wrap",
            children: [
              /* @__PURE__ */ h.jsx(Fe, { value: "draw", className: "text-xs", children: "Draw" }),
              /* @__PURE__ */ h.jsx(Fe, { value: "line", className: "text-xs", children: "Line" }),
              /* @__PURE__ */ h.jsx(Fe, { value: "rect", className: "text-xs", children: "Rect" }),
              /* @__PURE__ */ h.jsx(Fe, { value: "select", className: "text-xs", children: "Select" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("label", { className: "text-xs font-medium text-gray-500 mb-1 block", children: "Color" }),
        /* @__PURE__ */ h.jsx("div", { className: "flex gap-1", children: Us.map((N, U) => /* @__PURE__ */ h.jsx(
          "button",
          {
            onClick: () => c(U),
            title: `${U + 1}: ${N.name}`,
            className: ue(
              "w-6 h-6 rounded border-2 transition-all",
              u === U ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400",
              N.hex === "#ffffff" && "shadow-sm"
            ),
            style: {
              backgroundColor: N.hex ?? "transparent",
              backgroundImage: N.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
              backgroundSize: N.hex === null ? "6px 6px" : void 0,
              backgroundPosition: N.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
            }
          },
          U
        )) })
      ] }),
      /* @__PURE__ */ h.jsx(
        ii,
        {
          variant: "destructive",
          onClick: ol,
          disabled: l,
          size: "sm",
          className: "w-full",
          children: "Clear Grid"
        }
      ),
      /* @__PURE__ */ h.jsx("p", { className: "text-xs text-gray-400", children: "\\ line, m rect, s select, 1-7 colors" })
    ] }) }),
    /* @__PURE__ */ h.jsx(
      gi,
      {
        title: "Selection Data",
        defaultPosition: { x: Math.max(20, window.innerWidth - 340), y: ot + 20 },
        children: /* @__PURE__ */ h.jsxs("div", { className: "space-y-3 w-72", children: [
          rn.length > 0 && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("label", { className: "text-xs font-medium text-gray-500 mb-1 block", children: "JSON (sparse)" }),
              /* @__PURE__ */ h.jsx(
                "textarea",
                {
                  value: wt,
                  onChange: (N) => nn(N.target.value),
                  placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                  className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] }),
            /* @__PURE__ */ h.jsxs("div", { children: [
              /* @__PURE__ */ h.jsx("label", { className: "text-xs font-medium text-gray-500 mb-1 block", children: "2D Array (black = 1)" }),
              /* @__PURE__ */ h.jsx(
                "textarea",
                {
                  value: pt,
                  onChange: (N) => ht(N.target.value),
                  placeholder: "[[1, 0], [0, 1], ...]",
                  className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "text-xs text-gray-400", children: x.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${x.length} item${x.length !== 1 ? "s" : ""} selected${rn.length > 0 ? ` (${rn.length} cell${rn.length !== 1 ? "s" : ""})` : ""}.` })
        ] })
      }
    )
  ] });
}
function Xu({ model: A, el: e }) {
  const t = document.createElement("div");
  t.style.width = "100%", t.style.height = "100%", t.style.position = "relative", e.appendChild(t);
  const n = A.get("width") ?? 800, r = A.get("height") ?? 600, o = VI(t);
  return o.render(
    /* @__PURE__ */ h.jsx(
      Ou,
      {
        anywidgetModel: A,
        widgetWidth: n,
        widgetHeight: r
      }
    )
  ), () => {
    o.unmount(), t.remove();
  };
}
const oc = { render: Xu };
let S;
function ve(A) {
  const e = S.__externref_table_alloc();
  return S.__wbindgen_externrefs.set(e, A), e;
}
function Ys(A, e) {
  return A = A >>> 0, Vu().subarray(A / 4, A / 4 + e);
}
function Ce(A, e) {
  return A = A >>> 0, Ac(A, e);
}
let fn = null;
function Vu() {
  return (fn === null || fn.byteLength === 0) && (fn = new Uint32Array(S.memory.buffer)), fn;
}
let wn = null;
function Yr() {
  return (wn === null || wn.byteLength === 0) && (wn = new Uint8Array(S.memory.buffer)), wn;
}
function Js(A, e) {
  try {
    return A.apply(this, e);
  } catch (t) {
    const n = ve(t);
    S.__wbindgen_exn_store(n);
  }
}
function tt(A) {
  return A == null;
}
function li(A, e, t) {
  if (t === void 0) {
    const g = Gn.encode(A), l = e(g.length, 1) >>> 0;
    return Yr().subarray(l, l + g.length).set(g), Mn = g.length, l;
  }
  let n = A.length, r = e(n, 1) >>> 0;
  const o = Yr();
  let i = 0;
  for (; i < n; i++) {
    const g = A.charCodeAt(i);
    if (g > 127) break;
    o[r + i] = g;
  }
  if (i !== n) {
    i !== 0 && (A = A.slice(i)), r = t(r, n, n = i + A.length * 3, 1) >>> 0;
    const g = Yr().subarray(r + i, r + n), l = Gn.encodeInto(A, g);
    i += l.written, r = t(r, n, i, 1) >>> 0;
  }
  return Mn = i, r;
}
function Dr(A) {
  const e = S.__wbindgen_externrefs.get(A);
  return S.__externref_table_dealloc(A), e;
}
let Jr = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
Jr.decode();
const $u = 2146435072;
let si = 0;
function Ac(A, e) {
  return si += e, si >= $u && (Jr = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }), Jr.decode(), si = e), Jr.decode(Yr().subarray(A, A + e));
}
const Gn = new TextEncoder();
"encodeInto" in Gn || (Gn.encodeInto = function(A, e) {
  const t = Gn.encode(A);
  return e.set(t), {
    read: A.length,
    written: t.length
  };
});
let Mn = 0;
const Bi = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((A) => S.__wbg_gridcanvas_free(A >>> 0, 1));
class Vt {
  static __wrap(e) {
    e = e >>> 0;
    const t = Object.create(Vt.prototype);
    return t.__wbg_ptr = e, Bi.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Bi.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    S.__wbg_gridcanvas_free(e, 0);
  }
  /**
   * Create a GridCanvas from an existing canvas element (for shadow DOM contexts)
   * @param {HTMLCanvasElement} canvas
   * @param {number} rows
   * @param {number} cols
   * @returns {GridCanvas}
   */
  static from_canvas(e, t, n) {
    const r = S.gridcanvas_from_canvas(e, t, n);
    if (r[2])
      throw Dr(r[1]);
    return Vt.__wrap(r[0]);
  }
  /**
   * @param {string} canvas_id
   * @param {number} rows
   * @param {number} cols
   */
  constructor(e, t, n) {
    const r = li(e, S.__wbindgen_malloc, S.__wbindgen_realloc), o = Mn, i = S.gridcanvas_new(r, o, t, n);
    if (i[2])
      throw Dr(i[1]);
    return this.__wbg_ptr = i[0] >>> 0, Bi.register(this, this.__wbg_ptr, this), this;
  }
  /**
   * @param {number} rows
   * @param {number} cols
   */
  resize(e, t) {
    S.gridcanvas_resize(this.__wbg_ptr, e, t);
  }
  /**
   * @returns {string}
   */
  export_json() {
    let e, t;
    try {
      const n = S.gridcanvas_export_json(this.__wbg_ptr);
      return e = n[0], t = n[1], Ce(n[0], n[1]);
    } finally {
      S.__wbindgen_free(e, t, 1);
    }
  }
  /**
   * @param {string} json_str
   */
  import_json(e) {
    const t = li(e, S.__wbindgen_malloc, S.__wbindgen_realloc), n = Mn, r = S.gridcanvas_import_json(this.__wbg_ptr, t, n);
    if (r[1])
      throw Dr(r[0]);
  }
  /**
   * @param {string} tensor_str
   */
  import_tensor(e) {
    const t = li(e, S.__wbindgen_malloc, S.__wbindgen_realloc), n = Mn, r = S.gridcanvas_import_tensor(this.__wbg_ptr, t, n);
    if (r[1])
      throw Dr(r[0]);
  }
  /**
   * @returns {number}
   */
  get_data_zone_size() {
    return S.gridcanvas_get_data_zone_size(this.__wbg_ptr) >>> 0;
  }
  /**
   * @returns {string}
   */
  export_pytorch_tensor() {
    let e, t;
    try {
      const n = S.gridcanvas_export_pytorch_tensor(this.__wbg_ptr);
      return e = n[0], t = n[1], Ce(n[0], n[1]);
    } finally {
      S.__wbindgen_free(e, t, 1);
    }
  }
  /**
   * @returns {number}
   */
  get_data_zone_start_col() {
    return S.gridcanvas_get_data_zone_start_col(this.__wbg_ptr) >>> 0;
  }
  /**
   * @returns {number}
   */
  get_data_zone_start_row() {
    return S.gridcanvas_get_data_zone_start_row(this.__wbg_ptr) >>> 0;
  }
  /**
   * @param {number} row
   * @param {number} col
   */
  delete_cell(e, t) {
    S.gridcanvas_delete_cell(this.__wbg_ptr, e, t);
  }
  /**
   * @param {number} x
   * @param {number} y
   */
  handle_click(e, t) {
    S.gridcanvas_handle_click(this.__wbg_ptr, e, t);
  }
  /**
   * @returns {number}
   */
  get_cell_size() {
    return S.gridcanvas_get_cell_size(this.__wbg_ptr);
  }
  /**
   * @param {number} row
   * @param {number} col
   * @returns {number}
   */
  get_cell_color(e, t) {
    return S.gridcanvas_get_cell_color(this.__wbg_ptr, e, t);
  }
  /**
   * @param {number} idx
   */
  set_draw_color(e) {
    S.gridcanvas_set_draw_color(this.__wbg_ptr, e);
  }
  clear() {
    S.gridcanvas_clear(this.__wbg_ptr);
  }
  /**
   * @param {number} row
   * @param {number} col
   * @returns {boolean}
   */
  get_cell(e, t) {
    return S.gridcanvas_get_cell(this.__wbg_ptr, e, t) !== 0;
  }
  /**
   * @returns {number}
   */
  get_cols() {
    return S.gridcanvas_get_cols(this.__wbg_ptr) >>> 0;
  }
  /**
   * @returns {number}
   */
  get_rows() {
    return S.gridcanvas_get_rows(this.__wbg_ptr) >>> 0;
  }
  /**
   * @param {number} row
   * @param {number} col
   * @param {boolean} value
   */
  set_cell(e, t, n) {
    S.gridcanvas_set_cell(this.__wbg_ptr, e, t, n);
  }
  /**
   * @param {number} from_row
   * @param {number} from_col
   * @param {number} to_row
   * @param {number} to_col
   */
  move_cell(e, t, n, r) {
    S.gridcanvas_move_cell(this.__wbg_ptr, e, t, n, r);
  }
  /**
   * @param {number} row
   * @param {number} col
   */
  highlight_cell(e, t) {
    S.gridcanvas_highlight_cell(this.__wbg_ptr, e, t);
  }
  /**
   * @param {number} idx
   */
  highlight_line(e) {
    S.gridcanvas_highlight_line(this.__wbg_ptr, e);
  }
  /**
   * @param {number} idx
   */
  highlight_rect(e) {
    S.gridcanvas_highlight_rect(this.__wbg_ptr, e);
  }
  /**
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   */
  render_with_line(e, t, n, r) {
    S.gridcanvas_render_with_line(this.__wbg_ptr, e, t, n, r);
  }
  /**
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   */
  render_with_rect(e, t, n, r) {
    S.gridcanvas_render_with_rect(this.__wbg_ptr, e, t, n, r);
  }
  /**
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   */
  draw_selection_box(e, t, n, r) {
    S.gridcanvas_draw_selection_box(this.__wbg_ptr, e, t, n, r);
  }
  /**
   * @param {number} row
   * @param {number} col
   */
  render_with_selection(e, t) {
    S.gridcanvas_render_with_selection(this.__wbg_ptr, e, t);
  }
  /**
   * @param {number} sel_row
   * @param {number} sel_col
   * @param {number} preview_row
   * @param {number} preview_col
   */
  render_with_drag_preview(e, t, n, r) {
    S.gridcanvas_render_with_drag_preview(this.__wbg_ptr, e, t, n, r);
  }
  /**
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   */
  render_with_selection_box(e, t, n, r) {
    S.gridcanvas_render_with_selection_box(this.__wbg_ptr, e, t, n, r);
  }
  render() {
    S.gridcanvas_render(this.__wbg_ptr);
  }
  /**
   * @param {number} idx
   */
  delete_line(e) {
    S.gridcanvas_delete_line(this.__wbg_ptr, e);
  }
  /**
   * @param {number} idx
   */
  delete_rect(e) {
    S.gridcanvas_delete_rect(this.__wbg_ptr, e);
  }
  /**
   * Hit test for lines. Returns the index of the line hit, or -1 if none.
   * Tolerance is in pixels.
   * @param {number} x
   * @param {number} y
   * @param {number} tolerance
   * @returns {number}
   */
  hit_test_line(e, t, n) {
    return S.gridcanvas_hit_test_line(this.__wbg_ptr, e, t, n);
  }
  /**
   * Hit test for rectangles. Returns the index of the rect hit, or -1 if none.
   * @param {number} x
   * @param {number} y
   * @returns {number}
   */
  hit_test_rect(e, t) {
    return S.gridcanvas_hit_test_rect(this.__wbg_ptr, e, t);
  }
  /**
   * @returns {number}
   */
  get_line_count() {
    return S.gridcanvas_get_line_count(this.__wbg_ptr) >>> 0;
  }
  /**
   * @returns {number}
   */
  get_rect_count() {
    return S.gridcanvas_get_rect_count(this.__wbg_ptr) >>> 0;
  }
  /**
   * Check if a line intersects a box (for box selection)
   * @param {number} line_idx
   * @param {number} box_r1
   * @param {number} box_c1
   * @param {number} box_r2
   * @param {number} box_c2
   * @returns {boolean}
   */
  line_intersects_box(e, t, n, r, o) {
    return S.gridcanvas_line_intersects_box(this.__wbg_ptr, e, t, n, r, o) !== 0;
  }
  /**
   * Check if a rect intersects a box (for box selection)
   * @param {number} rect_idx
   * @param {number} box_r1
   * @param {number} box_c1
   * @param {number} box_r2
   * @param {number} box_c2
   * @returns {boolean}
   */
  rect_intersects_box(e, t, n, r, o) {
    return S.gridcanvas_rect_intersects_box(this.__wbg_ptr, e, t, n, r, o) !== 0;
  }
  /**
   * Add a line directly (for paste operations)
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   * @param {number} color
   */
  add_line(e, t, n, r, o) {
    S.gridcanvas_add_line(this.__wbg_ptr, e, t, n, r, o);
  }
  /**
   * Add a rect directly (for paste operations)
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   * @param {number} color
   */
  add_rect(e, t, n, r, o) {
    S.gridcanvas_add_rect(this.__wbg_ptr, e, t, n, r, o);
  }
  /**
   * @param {number} idx
   * @returns {Uint32Array}
   */
  get_line(e) {
    const t = S.gridcanvas_get_line(this.__wbg_ptr, e);
    var n = Ys(t[0], t[1]).slice();
    return S.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  /**
   * @param {number} idx
   * @returns {Uint32Array}
   */
  get_rect(e) {
    const t = S.gridcanvas_get_rect(this.__wbg_ptr, e);
    var n = Ys(t[0], t[1]).slice();
    return S.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  /**
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   */
  draw_line(e, t, n, r) {
    S.gridcanvas_draw_line(this.__wbg_ptr, e, t, n, r);
  }
  /**
   * @param {number} r1
   * @param {number} c1
   * @param {number} r2
   * @param {number} c2
   */
  draw_rect(e, t, n, r) {
    S.gridcanvas_draw_rect(this.__wbg_ptr, e, t, n, r);
  }
  /**
   * @param {number} idx
   * @param {number} delta_row
   * @param {number} delta_col
   */
  move_line(e, t, n) {
    S.gridcanvas_move_line(this.__wbg_ptr, e, t, n);
  }
  /**
   * @param {number} idx
   * @param {number} delta_row
   * @param {number} delta_col
   */
  move_rect(e, t, n) {
    S.gridcanvas_move_rect(this.__wbg_ptr, e, t, n);
  }
}
Symbol.dispose && (Vt.prototype[Symbol.dispose] = Vt.prototype.free);
const ec = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function tc(A, e) {
  if (typeof Response == "function" && A instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(A, e);
      } catch (n) {
        if (A.ok && ec.has(A.type) && A.headers.get("Content-Type") !== "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
        else
          throw n;
      }
    const t = await A.arrayBuffer();
    return await WebAssembly.instantiate(t, e);
  } else {
    const t = await WebAssembly.instantiate(A, e);
    return t instanceof WebAssembly.Instance ? { instance: t, module: A } : t;
  }
}
function Ya() {
  const A = {};
  return A.wbg = {}, A.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(e) {
    return e === void 0;
  }, A.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(e, t) {
    throw new Error(Ce(e, t));
  }, A.wbg.__wbg_beginPath_08eae248f93ea32d = function(e) {
    e.beginPath();
  }, A.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return Js(function(e, t) {
      return e.call(t);
    }, arguments);
  }, A.wbg.__wbg_document_5b745e82ba551ca5 = function(e) {
    const t = e.document;
    return tt(t) ? 0 : ve(t);
  }, A.wbg.__wbg_fillRect_84131220403e26a4 = function(e, t, n, r, o) {
    e.fillRect(t, n, r, o);
  }, A.wbg.__wbg_getContext_01f42b234e833f0a = function() {
    return Js(function(e, t, n) {
      const r = e.getContext(Ce(t, n));
      return tt(r) ? 0 : ve(r);
    }, arguments);
  }, A.wbg.__wbg_getElementById_e05488d2143c2b21 = function(e, t, n) {
    const r = e.getElementById(Ce(t, n));
    return tt(r) ? 0 : ve(r);
  }, A.wbg.__wbg_instanceof_CanvasRenderingContext2d_d070139aaac1459f = function(e) {
    let t;
    try {
      t = e instanceof CanvasRenderingContext2D;
    } catch {
      t = !1;
    }
    return t;
  }, A.wbg.__wbg_instanceof_HtmlCanvasElement_c4251b1b6a15edcc = function(e) {
    let t;
    try {
      t = e instanceof HTMLCanvasElement;
    } catch {
      t = !1;
    }
    return t;
  }, A.wbg.__wbg_instanceof_Window_b5cf7783caa68180 = function(e) {
    let t;
    try {
      t = e instanceof Window;
    } catch {
      t = !1;
    }
    return t;
  }, A.wbg.__wbg_lineTo_4b884d8cebfc8c54 = function(e, t, n) {
    e.lineTo(t, n);
  }, A.wbg.__wbg_moveTo_36127921f1ca46a5 = function(e, t, n) {
    e.moveTo(t, n);
  }, A.wbg.__wbg_new_no_args_cb138f77cf6151ee = function(e, t) {
    return new Function(Ce(e, t));
  }, A.wbg.__wbg_set_fillStyle_c9a0550307cd4671 = function(e, t, n) {
    e.fillStyle = Ce(t, n);
  }, A.wbg.__wbg_set_globalAlpha_5b9512a71ef816b8 = function(e, t) {
    e.globalAlpha = t;
  }, A.wbg.__wbg_set_height_6f8f8ef4cb40e496 = function(e, t) {
    e.height = t >>> 0;
  }, A.wbg.__wbg_set_lineWidth_feda4b79a15c660b = function(e, t) {
    e.lineWidth = t;
  }, A.wbg.__wbg_set_strokeStyle_697a576d2d3fbeaa = function(e, t, n) {
    e.strokeStyle = Ce(t, n);
  }, A.wbg.__wbg_set_width_7ff7a22c6e9f423e = function(e, t) {
    e.width = t >>> 0;
  }, A.wbg.__wbg_static_accessor_GLOBAL_769e6b65d6557335 = function() {
    const e = typeof global > "u" ? null : global;
    return tt(e) ? 0 : ve(e);
  }, A.wbg.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1 = function() {
    const e = typeof globalThis > "u" ? null : globalThis;
    return tt(e) ? 0 : ve(e);
  }, A.wbg.__wbg_static_accessor_SELF_08f5a74c69739274 = function() {
    const e = typeof self > "u" ? null : self;
    return tt(e) ? 0 : ve(e);
  }, A.wbg.__wbg_static_accessor_WINDOW_a8924b26aa92d024 = function() {
    const e = typeof window > "u" ? null : window;
    return tt(e) ? 0 : ve(e);
  }, A.wbg.__wbg_strokeRect_31a396bc4462b669 = function(e, t, n, r, o) {
    e.strokeRect(t, n, r, o);
  }, A.wbg.__wbg_stroke_a18b81eb49ff370e = function(e) {
    e.stroke();
  }, A.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(e, t) {
    return Ce(e, t);
  }, A.wbg.__wbindgen_init_externref_table = function() {
    const e = S.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
  }, A;
}
function Ja(A, e) {
  return S = A.exports, Ha.__wbindgen_wasm_module = e, fn = null, wn = null, S.__wbindgen_start(), S;
}
function nc(A) {
  if (S !== void 0) return S;
  typeof A < "u" && (Object.getPrototypeOf(A) === Object.prototype ? { module: A } = A : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = Ya();
  A instanceof WebAssembly.Module || (A = new WebAssembly.Module(A));
  const t = new WebAssembly.Instance(A, e);
  return Ja(t, A);
}
async function Ha(A) {
  if (S !== void 0) return S;
  typeof A < "u" && (Object.getPrototypeOf(A) === Object.prototype ? { module_or_path: A } = A : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof A > "u" && (A = new URL("data:application/wasm;base64,AGFzbQEAAAABswIuYAJ/fwBgAn9/AX9gAX8AYAN/f38AYAN/f38Bf2AFf39/f38AYAF/AX9gAAJ/f2AEf39/fwBgAAF/YAFvAX9gBn9/f39/fwF/YAR/f39/AX9gBn9/f39/fwBgAAN/f39gAABgA398fABgBX9/f39/AX9gA29/fwF/YAFvAGAFb3x8fHwAYAJvfABgA29/fwBgA298fABgAm9/AGACf38Bb2ADf35+AGADf39/An9/YAJ/fwJ/f2ABfwJ/f2ACfHwBfGAFf3x8fHwAYAJ/fABgAm9vAW9gB39/f39/f38AYAR/fHx8AX9gA398fAF/YAR/f39/A39/f2ADb39/A39/f2ABfwF8YAV/f31/fwBgBH99f38AYAV/f35/fwBgBH9+f38AYAV/f3x/fwBgBH98f38AAtMJHAN3YmcoX193YmdfaW5zdGFuY2VvZl9XaW5kb3dfYjVjZjc3ODNjYWE2ODE4MAAKA3diZx9fX3diZ19kb2N1bWVudF81Yjc0NWU4MmJhNTUxY2E1AAoDd2JnJV9fd2JnX2dldEVsZW1lbnRCeUlkX2UwNTQ4OGQyMTQzYzJiMjEAEgN3Ymc6X193YmdfaW5zdGFuY2VvZl9DYW52YXNSZW5kZXJpbmdDb250ZXh0MmRfZDA3MDEzOWFhYWMxNDU5ZgAKA3diZyBfX3diZ19iZWdpblBhdGhfMDhlYWUyNDhmOTNlYTMyZAATA3diZyFfX3diZ19zdHJva2VSZWN0XzMxYTM5NmJjNDQ2MmI2NjkAFAN3YmckX193Ymdfc2V0X2xpbmVXaWR0aF9mZWRhNGI3OWExNWM2NjBiABUDd2JnJl9fd2JnX3NldF9nbG9iYWxBbHBoYV81Yjk1MTJhNzFlZjgxNmI4ABUDd2JnJF9fd2JnX3NldF9maWxsU3R5bGVfYzlhMDU1MDMwN2NkNDY3MQAWA3diZyZfX3diZ19zZXRfc3Ryb2tlU3R5bGVfNjk3YTU3NmQyZDNmYmVhYQAWA3diZx1fX3diZ19zdHJva2VfYTE4YjgxZWI0OWZmMzcwZQATA3diZx1fX3diZ19saW5lVG9fNGI4ODRkOGNlYmZjOGM1NAAXA3diZx1fX3diZ19tb3ZlVG9fMzYxMjc5MjFmMWNhNDZhNQAXA3diZx9fX3diZ19maWxsUmVjdF84NDEzMTIyMDQwM2UyNmE0ABQDd2JnIV9fd2JnX3NldF9oZWlnaHRfNmY4ZjhlZjRjYjQwZTQ5NgAYA3diZyFfX3diZ19nZXRDb250ZXh0XzAxZjQyYjIzNGU4MzNmMGEAEgN3YmcgX193Ymdfc2V0X3dpZHRoXzdmZjdhMjJjNmU5ZjQyM2UAGAN3YmczX193YmdfaW5zdGFuY2VvZl9IdG1sQ2FudmFzRWxlbWVudF9jNDI1MWIxYjZhMTVlZGNjAAoDd2JnIl9fd2JnX25ld19ub19hcmdzX2NiMTM4Zjc3Y2Y2MTUxZWUAGQN3YmcyX193Ymdfc3RhdGljX2FjY2Vzc29yX0dMT0JBTF9USElTXzYwY2YwMmRiNGRlOGUxYzEACQN3YmcrX193Ymdfc3RhdGljX2FjY2Vzc29yX1NFTEZfMDhmNWE3NGM2OTczOTI3NAAJA3diZy1fX3diZ19zdGF0aWNfYWNjZXNzb3JfR0xPQkFMXzc2OWU2YjY1ZDY1NTczMzUACQN3YmctX193Ymdfc3RhdGljX2FjY2Vzc29yX1dJTkRPV19hODkyNGIyNmFhOTJkMDI0AAkDd2JnG19fd2JnX2NhbGxfYWJiNGZmNDZjZTM4YmU0MAAhA3diZydfX3diZ19fX3diaW5kZ2VuX3Rocm93X2RkMjQ0MTdlZDM2ZmM0NmUAAAN3YmcuX193YmdfX193YmluZGdlbl9pc191bmRlZmluZWRfZjZiOTVlYWI1ODllMDI2OQAKA3diZx9fX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlAA8Dd2JnIF9fd2JpbmRnZW5fY2FzdF8yMjQxYjZhZjRjNGIyOTQxABkDwwHBAQYCAQMLAgQAAAwIAQgiAAAaAwEABgAGAwkIAQEBBQkAAAUAAgAFDQUCAwEAAQMFBQMDDQ0aAwACAAAADQMIAQUACAgDAxAAAAAAAgMDBgYEBAQCCwsBBAUIAwAIBAYGBgADBQYGBQUFBSMkAQERAgMDAAACAgEGAgwlJicbGwsCHBwFKBEqLAIdHQgEAgIeHgICAgIAAAABAwIDBB8fBQEMAwEAAQYAAwMQEAQEAgEgIAAAAA8PAgIAAAEBAgIBAAIECQJwATAwbwCAAQUDAQARBgkBfwFBgIDAAAsH2Qs5Bm1lbW9yeQIAFV9fd2JnX2dyaWRjYW52YXNfZnJlZQA7FmdyaWRjYW52YXNfZnJvbV9jYW52YXMAlgEOZ3JpZGNhbnZhc19uZXcAlQERZ3JpZGNhbnZhc19yZXNpemUAXxBncmlkY2FudmFzX2NsZWFyAGYWZ3JpZGNhbnZhc19kZWxldGVfY2VsbABgHWdyaWRjYW52YXNfZHJhd19zZWxlY3Rpb25fYm94AH4WZ3JpZGNhbnZhc19leHBvcnRfanNvbgCkASBncmlkY2FudmFzX2V4cG9ydF9weXRvcmNoX3RlbnNvcgClARNncmlkY2FudmFzX2dldF9jZWxsAHgZZ3JpZGNhbnZhc19nZXRfY2VsbF9jb2xvcgByGGdyaWRjYW52YXNfZ2V0X2NlbGxfc2l6ZQCXARNncmlkY2FudmFzX2dldF9jb2xzAH8dZ3JpZGNhbnZhc19nZXRfZGF0YV96b25lX3NpemUAkgEiZ3JpZGNhbnZhc19nZXRfZGF0YV96b25lX3N0YXJ0X2NvbABpImdyaWRjYW52YXNfZ2V0X2RhdGFfem9uZV9zdGFydF9yb3cAahNncmlkY2FudmFzX2dldF9yb3dzAIABF2dyaWRjYW52YXNfaGFuZGxlX2NsaWNrAGEZZ3JpZGNhbnZhc19oaWdobGlnaHRfY2VsbACLARlncmlkY2FudmFzX2hpZ2hsaWdodF9saW5lAI0BGWdyaWRjYW52YXNfaGlnaGxpZ2h0X3JlY3QAjgEWZ3JpZGNhbnZhc19pbXBvcnRfanNvbgCYARhncmlkY2FudmFzX2ltcG9ydF90ZW5zb3IAmQEUZ3JpZGNhbnZhc19tb3ZlX2NlbGwAWxFncmlkY2FudmFzX3JlbmRlcgCTASNncmlkY2FudmFzX3JlbmRlcl93aXRoX2RyYWdfcHJldmlldwCBARtncmlkY2FudmFzX3JlbmRlcl93aXRoX2xpbmUAggEbZ3JpZGNhbnZhc19yZW5kZXJfd2l0aF9yZWN0AIMBIGdyaWRjYW52YXNfcmVuZGVyX3dpdGhfc2VsZWN0aW9uAIwBJGdyaWRjYW52YXNfcmVuZGVyX3dpdGhfc2VsZWN0aW9uX2JveACEARNncmlkY2FudmFzX3NldF9jZWxsAFkZZ3JpZGNhbnZhc19zZXRfZHJhd19jb2xvcgBiE2dyaWRjYW52YXNfYWRkX2xpbmUAThNncmlkY2FudmFzX2FkZF9yZWN0AE8WZ3JpZGNhbnZhc19kZWxldGVfbGluZQBjFmdyaWRjYW52YXNfZGVsZXRlX3JlY3QAZBRncmlkY2FudmFzX2RyYXdfbGluZQBKFGdyaWRjYW52YXNfZHJhd19yZWN0AEsTZ3JpZGNhbnZhc19nZXRfbGluZQCcARlncmlkY2FudmFzX2dldF9saW5lX2NvdW50AHkTZ3JpZGNhbnZhc19nZXRfcmVjdACdARlncmlkY2FudmFzX2dldF9yZWN0X2NvdW50AHoYZ3JpZGNhbnZhc19oaXRfdGVzdF9saW5lAIUBGGdyaWRjYW52YXNfaGl0X3Rlc3RfcmVjdACGAR5ncmlkY2FudmFzX2xpbmVfaW50ZXJzZWN0c19ib3gAbxRncmlkY2FudmFzX21vdmVfbGluZQBdFGdyaWRjYW52YXNfbW92ZV9yZWN0AF4eZ3JpZGNhbnZhc19yZWN0X2ludGVyc2VjdHNfYm94AHAUX193YmluZGdlbl9leG5fc3RvcmUAtQEXX19leHRlcm5yZWZfdGFibGVfYWxsb2MAOhVfX3diaW5kZ2VuX2V4dGVybnJlZnMBARlfX2V4dGVybnJlZl90YWJsZV9kZWFsbG9jAFMRX193YmluZGdlbl9tYWxsb2MAhwESX193YmluZGdlbl9yZWFsbG9jAJQBD19fd2JpbmRnZW5fZnJlZQC2ARBfX3diaW5kZ2VuX3N0YXJ0ABoJVQEAQQELL0ZxWqwBrQGuAa8BNKcBpgGeAaEBngGeAZ8BoAFXoAGiAZoBG2WpAWs3xwGoAYgBPEfbAb4Bdr8B1AGwAbEBqQFtOMgB1gHAAZEBSNcBuwEMASQKzd4DwQHNJQIJfwF+IwBBEGsiCCQAAkACQAJAAkACQCAAQfUBTwRAIABBzP97SwRAQQAhAAwGCyAAQQtqIgJBeHEhBUHMg8IAKAIAIglFDQRBHyEGQQAgBWshAyAAQfT//wdNBEAgBUEmIAJBCHZnIgBrdkEBcSAAQQF0a0E+aiEGCyAGQQJ0QbCAwgBqKAIAIgJFBEBBACEADAILIAVBGSAGQQF2a0EAIAZBH0cbdCEEQQAhAANAAkAgAigCBEF4cSIHIAVJDQAgByAFayIHIANPDQAgAiEBIAciAw0AQQAhAyAB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HCAAIAMoAkAiBCABQQJ0ajYCECAAIAQgBUECdGo2AgwgAEEMahA/IAMQHQsgAEEgaiQAIAIoAghBADYCACACKAIMIgAgACgCAEEBayIANgIAIABFBEAgAkEMahBECyACQRBqJAALHAAjAEEQayIAJABB9IPCAEEBOgAAIABBEGokAAv1AQEFfyMAQRBrIgEkACABQQRqIAAQXCABKAIEIQAjAEEgayICJAAgAkEUaiIDIAAoAlQQPiACQQhqIgQgAyAAKAJQEE0gABCQASAAQQRBDBBRIABBCGogAkEQaiIFKAIANgIAIAAgAikCCDcCACADIAAoAlQQQCAEIAMgACgCUBBMIABBDGoiAxCPASADQQRBDBBRIABBFGogBSgCADYCACAAIAIpAgg3AgwgAEEANgJEIABBADYCOCAAEB0gAkEgaiQAIAEoAghBADYCACABKAIMIgAgACgCAEEBayIANgIAIABFBEAgAUEMahBECyABQRBqJAALTgEBfyACIAFrIgIgACgCACAAKAIIIgNrSwRAIAAgAyACQQFBARBzIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIC04CAX8BfiMAQSBrIgMkACADIAE2AgwgAyAANgIIIANCgICAgCAiBCADQQhqrYQ3AxggAyAEIANBDGqthDcDEEHYgcAAIANBEGogAhB9AAtAAQJ/IwBBEGsiASQAIAFBBGoiAiAAEFYgASgCBCgCVCEAIAIQigEgAUEQaiQAIABBCmsiAUEAIAAgAU8bQQF2C0ABAn8jAEEQayIBJAAgAUEEaiICIAAQViABKAIEKAJQIQAgAhCKASABQRBqJAAgAEEKayIBQQAgACABTxtBAXYLRwEBfyAAKAIAIAAoAggiA2sgAkkEQCAAIAMgAhBFIAAoAgghAwsgAgRAIAAoAgQgA2ogASAC/AoAAAsgACACIANqNgIIQQALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwtHAQF/IAAoAgAgACgCCCIDayACSQRAIAAgAyACEEkgACgCCCEDCyACBEAgACgCBCADaiABIAL8CgAACyAAIAIgA2o2AghBAAtEAQF/IwBBEGsiASQAIAFBCGogACAA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DQADQCACLQAAQTBrIgpBCUsNAiACQQFqIQIgCiAEQQpsaiEEIAVBAWsiBQ0ACwsgAygCmAEiAiADKAKQAUYEQCADQZABahBuCyADKAKUASACQQJ0aiAENgIAIAMgAkEBajYCmAELIANBADYCpAEMAgsgAygCmAEhAgsgAkECSQ0AIAMoApQBIgUoAgAhCkEAIQ0gAkECRwRAIAUoAgghDQsgCiAPaiIEIBVPDQAgBSgCBCICQQlLIApBCUtyDQAgAiAOaiICIBRPDQACQAJAAkAgBCAJSQRAIAIgEyAEQQxsIgVqIgooAggiFk8NASAKKAIEIAJqQQE6AAAgBCAITw0CIAIgBSASaiIEKAIIIgVPDQMgBCgCBCACaiANOgAADAQLIAQgCUGEjsAAEGgACyACIBZBlI7AABBoAAsgBCAIQaSOwAAQaAALIAIgBUG0jsAAEGgACyABIBFHDQALCyADQZwBahDTASADQZABahDSAQwECyAHIAYgASAAQcSMwAAQugEACyAHIAYgACAGQbSMwAAQugEACyAEIABBAWoiBU8NAAsLIANB0ABqIAcgBkHUjMAAECgCQAJAIAMoAlBBAXFFDQACQCADKAJUIgJFDQAgAiAGTwRAIAIgBkYNAQwDCyACIAdqLAAAQb9/TA0CCyALQTBqIQogAiAHaiEIIAYgAmshBEEAIQUDQCAFIAhqIQkCfyAEIAVrIgBBB00EQEEAIQFBACAARQ0BGgNAQQEgASAJai0AAEHbAEYNAhogACABQQFqIgFHDQALIAAhAUEADAELIANByABqQdsAIAkgABA1IAMoAkwhASADKAJIC0EBcUUNAQJAIAEgBWoiACAETw0AIAAgCGotAABB2wBHDQACQAJAIAAgAmoiAEUNACAAIAZPBEAgACAGRg0BDAILIAAgB2osAABBv39MDQELIANBQGsgACAHaiAGIABrEDMgAygCQEEBcUUNAwJAIABBAWoiASADKAJEIgIgAGoiAEsNAAJAIAFFDQAgASAGTwRAIAEgBkYNAQwCCyABIAdqLAAAQUBIDQELAkAgAEUNACAAIAZPBEAgACAGRw0CDAELIAAgB2osAABBv39MDQELIANBADYCjAEgA0KAgICAwAA3AoQBIANBADYCmAEgA0KAgICAEDcCkAECQCACQQFrIgBFDQAgACABIAdqIgFq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LEYNAyACQYCAxABGDQwLIAJBMGtBCkkgAHFFDQkgAygCmAEhBEEBIQAgA0GQAWoQowEgAygClAEgAygCmAFqIAI6AAAgAyAEQQFqNgKYAQwJCyADQQA2ApgBIANBADYCjAFBASEADAgLIABBACEARQ0HIAMoApgBIgJFDQUgA0EIaiADKAKUASACEB8gAygCCCECIAMoAgwiBQ4CBQECCyAAQQAhAA0DDAYLIAItAAAiBEEraw4DAwEDAQsgAi0AACEECyACIARB/wFxQStGIgRqIQICQCAFIARrIgVBCU8EQEEAIQQDQCAFRQ0CIAStQgp+IhdCIIinDQQgAi0AAEEwayIEQQlLDQQgAkEBaiECIAVBAWshBSAEIAQgF6dqIgRNDQALDAMLQQAhBCAFRQ0AA0AgAi0AAEEwayINQQlLDQMgAkEBaiECIA0gBEEKbGohBCAFQQFrIgUNAAsLIAMoAowBIgIgAygChAFGBEAgA0GEAWoQbgsgAygCiAEgAkECdGogBDYCACADIAJBAWoiAjYCjAEMAgtBASEAIAMoApgBIgJFDQIgA0EQaiADKAKUASACEB8gAygCECECAkACQAJAAkAgAygCFCIFDgIDAAELIAItAAAiBEEraw4DAgECAQsgAi0AACEECyACIARB/wFxQStGIgRqIQICQCAFIARrIgVBCU8EQEEAIQQDQCAFRQ0CIAStQgp+IhdCIIinDQMgAi0AAEEwayIEQQlLDQMgAkEBaiECIAVBAWshBSAEIAQgF6dqIgRNDQALDAILQQAhBCAFRQ0AA0AgAi0AAEEwayINQQlLDQIgAkEBaiECIA0gBEEKbGohBCAFQQFrIgUNAAsLIAMoAowBIgIgAygChAFGBEAgA0GEAWoQbgsgAygCiAEgAkECdGogBDYCACADIAJBAWo2AowBCyADQQA2ApgBDAILIAMoAowBIQILIAJBBUkNACADKAKIASICKAIAIQQgAigCBCEFIAIoAgghDSACKAIMIREgAyACKAIQNgKsASADIA4gEWo2AqgBIAMgDSAPajYCpAEgAyAFIA5qNgKgASADIAQgD2o2ApwBIAogA0GcAWogCRBYCyABIAhHDQALCyADQZABahDTASADQYQBakEEQQQQUQwECyAHIAYgASAAQbSNwAAQugEACyAHIAYgACAGQaSNwAAQugEA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JAACQAJAAkACQCABQQVsIgFBBWoiBiADKAI4IgdLBEAgAEEANgIIIABCgICAgMAANwIADAELIAFBe08NASADKAI0IQcgBEEEakEFQQBBBEEEEEMgBCgCCCEGIAQoAgRBAUYNAiAAIAQoAgwiAzYCBCAAIAY2AgAgAEEFNgIIIAMgByABQQJ0aiIBKQIANwIAIANBCGogAUEIaikCADcCACADQRBqIAFBEGooAgA2AgALIARBEGokAAwCCyABIAYgB0GklMAAEHcACyAGIAQoAgwQsgEACyAIEIoBIAJBEGogABBUIAJBCGogAigCECACKAIUEL0BIAUgAikDCDcCACACQTBqJAAgBSgCACAFKAIEIAVBEGokAAvOAgEHfyMAQRBrIgUkACMAQTBrIgIkACACQRhqIgggABBWIAJBJGohACACKAIYIQMjAEEQayIEJAACQAJAAkACQCABQQVsIgFBBWoiBiADKAJEIgdLBEAgAEEANgIIIABCgICAgMAANwIADAELIAFBe08NASADKAJAIQcgBEEEakEFQQBBBEEEEEMgBCgCCCEGIAQoAgRBAUYNAiAAIAQoAgwiAzYCBCAAIAY2AgAgAEEFNgIIIAMgByABQQJ0aiIBKQIANwIAIANBCGogAUEIaikCADcCACADQRBqIAFBEGooAgA2AgALIARBEGokAAwCCyABIAYgB0G0lMAAEHcACyAGIAQoAgwQsgEACyAIEIoBIAJBEGogABBUIAJBCGogAigCECACKAIUEL0BIAUgAikDCDcCACACQTBqJAAgBSgCACAFKAIEIAVBEGokAAsjACAABEAgACACIAMgBCABKAIQEQgADwtBtJrAAEEyEM8BAAsjACAABEAgACACIAMgBCABKAIQESkADwtBtJrAAEEyEM8BAAsjACAABEAgACACIAMgBCABKAIQEQwADwtBtJrAAEEyEM8BAAsjACAABEAgACACIAMgBCABKAIQESsADwtBtJrAAEEyEM8BAAsjACAABEAgACACIAMgBCABKAIQES0ADwtBtJrAAEEyEM8BAAsgAQF/IAAoAggiASAAKAIARgRAIAAgAUEBQQFBARBzCwujDAEYfyMAQRBrIg8kACMAQTBrIgokACAKQRhqIhIgABBWIApBJGohESAKKAIYIQQjAEHgAGsiASQAIAFBOGpBAkEAQQFB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ZGUgwAggKGJ5dGVzIMAGKSBvZiBgwAFgwAAWc2xpY2UgaW5kZXggc3RhcnRzIGF0IMANIGJ1dCBlbmRzIGF0IMAAIGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgwBIgYnV0IHRoZSBpbmRleCBpcyDAABJyYW5nZSBzdGFydCBpbmRleCDAIiBvdXQgb2YgcmFuZ2UgZm9yIHNsaWNlIG9mIGxlbmd0aCDAABByYW5nZSBlbmQgaW5kZXggwCIgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGggwADAAjogwABzcmMvaW1wb3J0X2V4cG9ydC5ycwBsaWJyYXJ5L2FsbG9jL3NyYy9mbXQucnMAc3JjL2NlbGxzLnJzAHNyYy9zaGFwZXMucnMAbGlicmFyeS9hbGxvYy9zcmMvc3RyLnJzAGxpYnJhcnkvY29yZS9zcmMvbnVtL2RlYzJmbHQvZGVjaW1hbF9zZXEucnMAL3J1c3RjLzAxZjZkZGY3NTg4ZjQyYWUyZDdlYjBhMmYyMWQ0NGU4ZTk2Njc0Y2YvbGlicmFyeS9jb3JlL3NyYy9zdHIvcGF0dGVybi5ycwBsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMAc3JjL3JlbmRlcmluZy5ycwAvaG9tZS9zbmVpbGFuLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTE5NDljZjhjNmI1YjU1N2Yvd2FzbS1iaW5kZ2VuLTAuMi4xMDYvc3JjL2V4dGVybnJlZi5ycwBsaWJyYXJ5L2NvcmUvc3JjL251bS9kZWMyZmx0L3BhcnNlLnJzAGxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy9tb2QucnMAL3J1c3RjLzAxZjZkZGY3NTg4ZjQyYWUyZDdlYjBhMmYyMWQ0NGU4ZTk2Njc0Y2YvbGlicmFyeS9hbGxvYy9zcmMvdmVjL21vZC5ycwAvcnVzdC9kZXBzL2RsbWFsbG9jLTAuMi4xMS9zcmMvZGxtYWxsb2MucnMAbGlicmFyeS9zdGQvc3JjL2FsbG9jLnJzAC9ob21lL3NuZWlsYW4vLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi9vbmNlX2NlbGwtMS4yMS4zL3NyYy9saWIucnMAbGlicmFyeS9jb3JlL3NyYy91bmljb2RlL3VuaWNvZGVfZGF0YS5ycwAVbWVtb3J5IGFsbG9jYXRpb24gb2YgwA0gYnl0ZXMgZmFpbGVkAAUgICAgW8ACLCDAAiwgwAFdAAUgICAgW8ACLCDAAiwgwAIsIMACLCDAAV0ATm8gMmQgY29udGV4dE5vIHdpbmRvd05vIGRvY3VtZW50Q2FudmFzIG5vdCBmb3VuZAAASwQQAAoAAABuAAAAKwAAAEsEEAAKAAAAbgAAAC4AAABLBBAACgAAAG4AAAAZAAAASwQQAAoAAABuAAAAHAAAAEsEEAAKAAAAbwAAADQAAABLBBAACgAAAG8AAAA3AAAASwQQAAoAAABvAAAAGwAAAEsEEAAKAAAAbwAAAB4AAAAjMDAwMDAwI2NjMzMzMyNmZmNjMDAjMjI2NmRkIzIyYWEyMiAgImNlbGxzIjogWwoKICBdLAogICJsaW5lcyI6IFsKICAicmVjdHMiOiBbCgogIF0KfSwKhQEQABQAAAAiAAAAHQAAAIUBEAAUAAAAIgAAACIAAACFARAAFAAAACcAAABiAAAAhQEQABQAAAAnAAAAZwAAACJjZWxscyIAhQEQABQAAACUAAAALgAAAIUBEAAUAAAAlgAAAE0AAACFARAAFAAAAJcAAAAuAAAAImxpbmVzIgCFARAAFAAAAJ8AAAAuAAAAhQEQABQAAAChAAAATQAAAIUBEAAUAAAAogAAAC4AAAAicmVjdHMiAIUBEAAUAAAAqgAAAC4AAACFARAAFAAAAKwAAABNAAAAhQEQABQAAACtAAAALgAAAIUBEAAUAAAAiQAAABoAAACFARAAFAAAAIkAAAAdAAAAhQEQABQAAACKAAAAIQAAAIUBEAAUAAAAigAAACQAAACFARAAFAAAAOMAAAAqAAAAhQEQABQAAADjAAAAMwAAAIUBEAAUAAAA5AAAADEAAACFARAAFAAAAOQAAAA6AAAAZmFsc2UAAACFARAAFAAAAIoBAAAqAAAAhQEQABQAAACXAQAAIgAAAIUBEAAUAAAAlwEAACsAAACFARAAFAAAAJgBAAApAAAAhQEQABQAAACYAQAAMgAAAIUBEAAUAAAAZgEAABoAAACFARAAFAAAAGYBAAAdAAAAhQEQABQAAABnAQAAIQAAAIUBEAAUAAAAZwEAACQAAAAgIFsAhQEQABQAAABxAAAAJwAAAIUBEAAUAAAAcQAAACwAAACFARAAFAAAAHEAAABFAAAAhQEQABQAAABxAAAASgAAACwgAACzARAADAAAAF0AAAAWAAAAswEQAAwAAABdAAAAGwAAALMBEAAMAAAADAAAAC0AAACzARAADAAAAAwAAAAyAAAAswEQAAwAAAAqAAAAOwAAALMBEAAMAAAAKgAAAEAAAACzARAADAAAACsAAAAdAAAAswEQAAwAAAArAAAAIgAAALMBEAAMAAAAIgAAABYAAACzARAADAAAACIAAAAbAAAAswEQAAwAAAA4AAAAGgAAALMBEAAMAAAAOAAAAB8AAACzARAADAAAADUAAAAaAAAAswEQAAwAAAA1AAAAHwAAALMBEAAMAAAANgAAACEAAACzARAADAAAADYAAAAmAAAAswEQAAwAAABQAAAAGQAAALMBEAAMAAAAUAAAACMAAACzARAADAAAAFEAAAAtAAAAswEQAAwAAABRAAAANwAAALMBEAAMAAAAUwAAABoAAACzARAADAAAAFMAAAAiAAAAswEQAAwAAABUAAAAIQAAALMBEAAMAAAAVAAAACkAAADAARAADQAAAMoAAAAjAAAAwAEQAA0AAADLAAAAIwAAAMABEAANAAAAzAAAACMAAADAARAADQAAAM0AAAAjAAAAwAEQAA0AAADsAAAAIwAAAMABEAANAAAA7QAAACMAAADAARAADQAAAO4AAAAjAAAAwAEQAA0AAADvAAAAIwAAAMABEAANAAAAIAAAAB0AAADAARAADQAAACoAAAAdAAAAwAEQAA0AAACgAAAAJgAAAMABEAANAAAAoQAAACYAAADAARAADQAAAKIAAAAmAAAAwAEQAA0AAACjAAAAJgAAAMABEAANAAAAswAAACYAAADAARAADQAAALQAAAAmAAAAwAEQAA0AAAC1AAAAJgAAAMABEAANAAAAtgAAACYAAAAjZmY4ODAwAH8CEAAQAAAAwwAAACYAAAB/AhAAEAAAAMQAAAAmAAAAfwIQABAAAADFAAAAJgAAAH8CEAAQAAAAxgAAACYAAAB/AhAAEAAAANcAAAAmAAAAfwIQABAA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OgEAADsBAAA8AQAAPQEAAD4BAAA/AQAAQAEAAEEBAABCAQAAQwEAAEQBAABFAQAARgEAAEcBAABIAQAASgEAAEsBAABMAQAATQEAAE4BAABPAQAAUAEAAFEBAABSAQAAUwEAAFQBAABVAQAAVgEAAFcBAABYAQAAWQEAAFoBAABbAQAAXAEAAF0BAABeAQAAXwEAAGABAABhAQAAYgEAAGMBAABkAQAAZQEAAGYBAABnAQAAaAEAAGkBAABqAQAAawEAAGwBAABtAQAAbgEAAG8BAABwAQAAcQEAAHIBAABzAQAAdAEAAHUBAAB2AQAAdwEAAHgBAAD/AAAAeQEAAHoBAAB7AQAAfAEAAH0BAAB+AQAAgQEAAFMCAACCAQAAgwEAAIQBAACFAQAAhgEAAFQCAACHAQAAiAEAAIkBAABWAgAAigEAAFcCAACLAQAAjAEAAI4BAADdAQAAjwEAAFkCAACQAQAAWwIAAJEBAACSAQAAkwEAAGACAACUAQAAYwIAAJYBAABpAgAAlwEAAGgCAACYAQAAmQEAAJwBAABvAgAAnQEAAHICAACfAQAAdQIAAKABAAChAQAAogEAAKMBAACkAQAApQEAAKYBAACAAgAApwEAAKgBAACpAQAAgwIAAKwBAACtAQAArgEAAIgCAACvAQAAsAEAALEBAACKAgAAsgEAAIsCAACzAQAAtAEAALUBAAC2AQAAtwEAAJICAAC4AQAAuQEAALwBAAC9AQAAxAEAAMYBAADFAQAAxgEAAMcBAADJAQAAyAEAAMkBAADKAQAAzAEAAMsBAADMAQAAzQEAAM4BAADPAQAA0AEAANEBAADSAQAA0wEAANQBAADVAQAA1gEAANcBAADYAQAA2QEAANoBAADbAQAA3AEAAN4BAADfAQAA4AEAAOEBAADiAQAA4wEAAOQBAADlAQAA5gEAAOcBAADoAQAA6QEAAOoBAADrAQAA7AEAAO0BAADuAQAA7wEAAPEBAADzAQAA8gEAAPMBAAD0AQAA9QEAAPYBAACVAQAA9wEAAL8BAAD4AQAA+QEAAPoBAAD7AQAA/AEAAP0BAAD+AQAA/wEAAAACAAABAgAAAgIAAAMCAAAEAgAABQIAAAYCAAAHAgAACAIAAAkCAAAKAgAACwIAAAwCAAANAgAADgIAAA8CAAAQAgAAEQIAABICAAATAgAA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HgUAAB8FAAAgBQAAIQUAACIFAAAjBQAAJAUAACUFAAAmBQAAJwUAACgFAAApBQAAKgUAACsFAAAsBQAALQUAAC4FAAAvBQAAMQUAAGEFAAAyBQAAYgUAADMFAABjBQAANAUAAGQFAAA1BQAAZQUAADYFAABmBQAANwUAAGcFAAA4BQAAaAUAADkFAABpBQAAOgUAAGoFAAA7BQAAawUAADwFAABsBQAAPQUAAG0FAAA+BQAAbgUAAD8FAABvBQAAQAUAAHAFAABBBQAAcQUAAEIFAAByBQAAQwUAAHMFAABEBQAAdAUAAEUFAAB1BQAARgUAAHYFAABHBQAAdwUAAEgFAAB4BQAASQUAAHkFAABKBQAAegUAAEsFAAB7BQAATAUAAHwFAABNBQAAfQUAAE4FAAB+BQAATwUAAH8FAABQBQAAgAUAAFEFAACBBQAAUgUAAIIFAABTBQAAgwUAAFQFAACEBQAAVQUAAIUFAABWBQAAhgUAAKAQAAAALQAAoRAAAAEtAACiEAAAAi0AAKMQAAADLQAApBAAAAQtAAClEAAABS0AAKYQAAAGLQAApxAAAActAACoEAAACC0AAKkQAAAJLQAAqhAAAAotAACrEAAACy0AAKwQAAAMLQAArRAAAA0tAACuEAAADi0AAK8QAAAPLQAAsBAAABAtAACxEAAAES0AALIQAAASLQAAsxAAABMtAAC0EAAAFC0AALUQAAAVLQAAthAAABYtAAC3EAAAFy0AALgQAAAYLQAAuRAAABktAAC6EAAAGi0AALsQAAAbLQAAvBAAABwtAAC9EAAAHS0AAL4QAAAeLQAAvxAAAB8tAADAEAAAIC0AAMEQAAAhLQAAwhAAACItAADDEAAAIy0AAMQQAAAkLQAAxRAAACUtAADHEAAAJy0AAM0QAAAtLQAAoBMAAHCrAAChEwAAcasAAKITAAByqwAAoxMAAHOrAACkEwAAdKsAAKUTAAB1qwAAphMAAHarAACnEwAAd6sAAKgTAAB4qwAAqRMAAHmrAACqEwAAeqsAAKsTAAB7qwAArBMAAHyrAACtEwAAfasAAK4TAAB+qwAArxMAAH+rAACwEwAAgKsAALETAACBqwAAshMAAIKrAACzEwAAg6sAALQTAACEqwAAtRMAAIWrAAC2EwAAhqsAALcTAACHqwAAuBMAAIirAAC5EwAA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ZiEAAHYhAABnIQAAdyEAAGghAAB4IQAAaSEAAHkhAABqIQAAeiEAAGshAAB7IQAAbCEAAHwhAABtIQAAfSEAAG4hAAB+IQAAbyEAAH8hAACDIQAAhCEAALYkAADQJAAAtyQAANEkAAC4JAAA0iQAALkkAADTJAAAuiQAANQkAAC7JAAA1SQAALwkAADWJAAAvSQAANckAAC+JAAA2CQAAL8kAADZJAAAwCQAANokAADBJAAA2yQAAMIkAADcJAAAwyQAAN0kAADEJAAA3iQAAMUkAADfJAAAxiQAAOAkAADHJAAA4SQAAMgkAADiJAAAySQAAOMkAADKJAAA5CQAAMskAADlJAAAzCQAAOYkAADNJAAA5yQAAM4kAADoJAAAzyQAAOkkAAAALAAAMCwAAAEsAAAxLAAAAiwAADIsAAADLAAAMywAAAQsAAA0LAAABSwAADUsAAAGLAAANiwAAAcsAAA3LAAACCwAADgsAAAJLAAAOSwAAAosAAA6LAAACywAADssAAAMLAAAPCwAAA0sAAA9LAAADiwAAD4sAAAPLAAAPywAABAsAABALAAAESwAAEEsAAASLAAAQiwAABMsAABDLAAAFCwAAEQsAAAVLAAARSwAABYsAABGLAAAFywAAEcsAAAYLAAASCwAABksAABJLAAAGiwAAEosAAAbLAAASywAABwsAABMLAAAHSwAAE0sAAAeLAAATiwAAB8sAABPLAAAICwAAFAsAAAhLAAAUSwAACIsAABSLAAAIywAAFMsAAAkLAAAVCwAACUsAABVLAAAJiwAAFYsAAAnLAAAVywAACgsAABYLAAAKSwAAFksAAAqLAAAWiwAACssAABbLAAALCwAAFwsAAAtLAAAXSwAAC4sAABeLAAALywAAF8sAABgLAAAYSwAAGIsAABrAgAAYywAAH0dAABkLAAAfQIAAGcsAABoLAAAaSwAAGosAABrLAAAbCwAAG0sAABRAgAAbiwAAHECAABvLAAAUAIAAHAsAABSAgAAciwAAHMsAAB1LAAAdiwAAH4sAAA/AgAAfywAAEACAACALAAAgSwAAIIsAACDLAAAhCwAAIUsAACGLAAAhywAAIgsAACJLAAAiiwAAIssAACMLAAAjSwAAI4sAACPLAAAkCwAAJEsAACSLAAAkywAAJQsAACVLAAAliwAAJcsAACYLAAAmSwAAJosAACbLAAAnCwAAJ0sAACeLAAAnywAAKAsAAChLAAAoiwAAKMsAACkLAAApSwAAKYsAACnLAAAqCwAAKksAACqLAAAqywAAKwsAACtLAAAriwAAK8sAACwLAAAsSwAALIsAACzLAAAtCwAALUsAAC2LAAAtywAALgsAAC5LAAAuiwAALssAAC8LAAAvSwAAL4sAAC/LAAAwCwAAMEsAADCLAAAwywAAMQsAADFLAAAxiwAAMcsAADILAAAySwAAMosAADLLAAAzCwAAM0sAADOLAAAzywAANAsAADRLAAA0iwAANMsAADULAAA1SwAANYsAADXLAAA2CwAANksAADaLAAA2ywAANwsAADdLAAA3iwAAN8sAADgLAAA4SwAAOIsAADjLAAA6ywAAOwsAADtLAAA7iwAAPIsAADzLAAAQKYAAEGmAABCpgAAQ6YAAESmAABFpgAARqYAAEemAABIpgAASaYAAEqmAABLpgAATKYAAE2mAABOpgAAT6YAAFCmAABRpgAAUqYAAFOmAABUpgAAVaYAAFamAABXpgAAWKYAAFmmAABapgAAW6YAAFymAABdpgAAXqYAAF+mAABgpgAAYaYAAGKmAABjpgAAZKYAAGWmAABmpgAAZ6YAAGimAABppgAAaqYAAGumAABspgAAbaYAAICmAACBpgAAgqYAAIOmAACEpgAAhaYAAIamAACHpgAAiKYAAImmAACKpgAAi6YAAIymAACNpgAAjqYAAI+mAACQpgAAkaYAAJKmAACTpgAAlKYAAJWmAACWpgAAl6YAAJimAACZpgAAmqYAAJumAAAipwAAI6cAACSnAAAlpwAAJqcAACenAAAopwAAKacAACqnAAArpwAALKcAAC2nAAAupwAAL6cAADKnAAAzpwAANKcAADWnAAA2pwAAN6cAADinAAA5pwAAOqcAADunAAA8pwAAPacAAD6nAAA/pwAAQKcAAEGnAABCpwAAQ6cAAESnAABFpwAARqcAAEenAABIpwAASacAAEqnAABLpwAATKcAAE2nAABOpwAAT6cAAFCnAABRpwAAUqcAAFOnAABUpwAAVacAAFanAABXpwAAWKcAAFmnAABapwAAW6cAAFynAABdpwAAXqcAAF+nAABgpwAAYacAAGKnAABjpwAAZKcAAGWnAABmpwAAZ6cAAGinAABppwAAaqcAAGunAABspwAAbacAAG6nAABvpwAAeacAAHqnAAB7pwAAfKcAAH2nAAB5HQAAfqcAAH+nAACApwAAgacAAIKnAACDpwAAhKcAAIWnAACGpwAAh6cAAIunAACMpwAAjacAAGUCAACQpwAAkacAAJKnAACTpwAAlqcAAJenAACYpwAAmacAAJqnAACbpwAAnKcAAJ2nAACepwAAn6cAAKCnAAChpwAAoqcAAKOnAACkpwAApacAAKanAACnpwAAqKcAAKmnAACqpwAAZgIAAKunAABcAgAArKcAAGECAACtpwAAbAIAAK6nAABqAgAAsKcAAJ4CAACxpwAAhwIAALKnAACdAgAAs6cAAFOrAAC0pwAAtacAALanAAC3pwAAuKcAALmnAAC6pwAAu6cAALynAAC9pwAAvqcAAL+nAADApwAAwacAAMKnAADDpwAAxKcAAJSnAADFpwAAggIAAManAACOHQAAx6cAAMinAADJpwAAyqcAAMunAABkAgAAzKcAAM2nAADOpwAAz6cAANCnAADRpwAA0qcAANOnAADUpwAA1acAANanAADXpwAA2KcAANmnAADapwAA26cAANynAACbAQAA9acAAPanAAAh/wAAQf8AACL/AABC/wAAI/8AAEP/AAAk/wAARP8AACX/AABF/wAAJv8AAEb/AAAn/wAAR/8AACj/AABI/wAAKf8AAEn/AAAq/wAASv8AACv/AABL/wAALP8AAEz/AAAt/wAATf8AAC7/AABO/wAAL/8AAE//AAAw/wAAUP8AADH/AABR/wAAMv8AAFL/AAAz/wAAU/8AADT/AABU/wAANf8AAFX/AAA2/wAAVv8AADf/AABX/wAAOP8AAFj/AAA5/wAAWf8AADr/AABa/wAAAAQBACgEAQABBAEAKQQBAAIEAQAqBAEAAwQBACsEAQAEBAEALAQBAAUEAQAtBAEABgQBAC4EAQAHBAEALwQBAAgEAQAwBAEACQQBADEEAQAKBAEAMgQBAAsEAQAzBAEADAQBADQEAQANBAEANQQBAA4EAQA2BAEADwQBADcEAQAQBAEAOAQBABEEAQA5BAEAEgQBADoEAQATBAEAOwQBABQEAQA8BAEAFQQBAD0EAQAWBAEAPgQBABcEAQA/BAEAGAQBAEAEAQAZBAEAQQQBABoEAQBCBAEAGwQBAEMEAQAcBAEA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", import.meta.url));
  const e = Ya();
  (typeof A == "string" || typeof Request == "function" && A instanceof Request || typeof URL == "function" && A instanceof URL) && (A = fetch(A));
  const { instance: t, module: n } = await tc(await A, e);
  return Ja(t, n);
}
const rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GridCanvas: Vt,
  default: Ha,
  initSync: nc
}, Symbol.toStringTag, { value: "Module" }));
export {
  oc as default,
  Xu as render
};
