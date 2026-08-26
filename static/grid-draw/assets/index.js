let p0, f0, eh;
let __tla = (async ()=>{
    function qm(e, t) {
        for(var n = 0; n < t.length; n++){
            const r = t[n];
            if (typeof r != "string" && !Array.isArray(r)) {
                for(const o in r)if (o !== "default" && !(o in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, o);
                    l && Object.defineProperty(e, o, l.get ? l : {
                        enumerable: !0,
                        get: ()=>r[o]
                    });
                }
            }
        }
        return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }));
    }
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);
        new MutationObserver((o)=>{
            for (const l of o)if (l.type === "childList") for (const i of l.addedNodes)i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function n(o) {
            const l = {};
            return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? l.credentials = "include" : o.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l;
        }
        function r(o) {
            if (o.ep) return;
            o.ep = !0;
            const l = n(o);
            fetch(o.href, l);
        }
    })();
    f0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    eh = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    p0 = function(e) {
        if (e.__esModule) return e;
        var t = e.default;
        if (typeof t == "function") {
            var n = function r() {
                return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
            };
            n.prototype = t.prototype;
        } else n = {};
        return Object.defineProperty(n, "__esModule", {
            value: !0
        }), Object.keys(e).forEach(function(r) {
            var o = Object.getOwnPropertyDescriptor(e, r);
            Object.defineProperty(n, r, o.get ? o : {
                enumerable: !0,
                get: function() {
                    return e[r];
                }
            });
        }), n;
    };
    var md = {
        exports: {}
    }, Ol = {}, hd = {
        exports: {}
    }, W = {};
    var po = Symbol.for("react.element"), th = Symbol.for("react.portal"), nh = Symbol.for("react.fragment"), rh = Symbol.for("react.strict_mode"), oh = Symbol.for("react.profiler"), lh = Symbol.for("react.provider"), ih = Symbol.for("react.context"), sh = Symbol.for("react.forward_ref"), ah = Symbol.for("react.suspense"), uh = Symbol.for("react.memo"), ch = Symbol.for("react.lazy"), ku = Symbol.iterator;
    function dh(e) {
        return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var gd = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, yd = Object.assign, vd = {};
    function hr(e, t, n) {
        this.props = e, this.context = t, this.refs = vd, this.updater = n || gd;
    }
    hr.prototype.isReactComponent = {};
    hr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    hr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function xd() {}
    xd.prototype = hr.prototype;
    function Ws(e, t, n) {
        this.props = e, this.context = t, this.refs = vd, this.updater = n || gd;
    }
    var Gs = Ws.prototype = new xd;
    Gs.constructor = Ws;
    yd(Gs, hr.prototype);
    Gs.isPureReactComponent = !0;
    var Su = Array.isArray, wd = Object.prototype.hasOwnProperty, Hs = {
        current: null
    }, kd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Sd(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)wd.call(t, r) && !kd.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: po,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Hs.current
        };
    }
    function fh(e, t) {
        return {
            $$typeof: po,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Ks(e) {
        return typeof e == "object" && e !== null && e.$$typeof === po;
    }
    function ph(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Cu = /\/+/g;
    function ai(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? ph("" + e.key) : t.toString(36);
    }
    function Ko(e, t, n, r, o) {
        var l = typeof e;
        (l === "undefined" || l === "boolean") && (e = null);
        var i = !1;
        if (e === null) i = !0;
        else switch(l){
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case po:
                    case th:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + ai(i, 0) : r, Su(o) ? (n = "", e != null && (n = e.replace(Cu, "$&/") + "/"), Ko(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Ks(o) && (o = fh(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Cu, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Su(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + ai(l, s);
            i += Ko(l, t, n, a, o);
        }
        else if (a = dh(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + ai(l, s++), i += Ko(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Io(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return Ko(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function mh(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), t.then(function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
            }, function(n) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
            }), e._status === -1 && (e._status = 0, e._result = t);
        }
        if (e._status === 1) return e._result.default;
        throw e._result;
    }
    var Le = {
        current: null
    }, Qo = {
        transition: null
    }, hh = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: Qo,
        ReactCurrentOwner: Hs
    };
    function Cd() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    W.Children = {
        map: Io,
        forEach: function(e, t, n) {
            Io(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Io(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Io(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Ks(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    W.Component = hr;
    W.Fragment = nh;
    W.Profiler = oh;
    W.PureComponent = Ws;
    W.StrictMode = rh;
    W.Suspense = ah;
    W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hh;
    W.act = Cd;
    W.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = yd({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Hs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)wd.call(t, a) && !kd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: po,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    W.createContext = function(e) {
        return e = {
            $$typeof: ih,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: lh,
            _context: e
        }, e.Consumer = e;
    };
    W.createElement = Sd;
    W.createFactory = function(e) {
        var t = Sd.bind(null, e);
        return t.type = e, t;
    };
    W.createRef = function() {
        return {
            current: null
        };
    };
    W.forwardRef = function(e) {
        return {
            $$typeof: sh,
            render: e
        };
    };
    W.isValidElement = Ks;
    W.lazy = function(e) {
        return {
            $$typeof: ch,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: mh
        };
    };
    W.memo = function(e, t) {
        return {
            $$typeof: uh,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    W.startTransition = function(e) {
        var t = Qo.transition;
        Qo.transition = {};
        try {
            e();
        } finally{
            Qo.transition = t;
        }
    };
    W.unstable_act = Cd;
    W.useCallback = function(e, t) {
        return Le.current.useCallback(e, t);
    };
    W.useContext = function(e) {
        return Le.current.useContext(e);
    };
    W.useDebugValue = function() {};
    W.useDeferredValue = function(e) {
        return Le.current.useDeferredValue(e);
    };
    W.useEffect = function(e, t) {
        return Le.current.useEffect(e, t);
    };
    W.useId = function() {
        return Le.current.useId();
    };
    W.useImperativeHandle = function(e, t, n) {
        return Le.current.useImperativeHandle(e, t, n);
    };
    W.useInsertionEffect = function(e, t) {
        return Le.current.useInsertionEffect(e, t);
    };
    W.useLayoutEffect = function(e, t) {
        return Le.current.useLayoutEffect(e, t);
    };
    W.useMemo = function(e, t) {
        return Le.current.useMemo(e, t);
    };
    W.useReducer = function(e, t, n) {
        return Le.current.useReducer(e, t, n);
    };
    W.useRef = function(e) {
        return Le.current.useRef(e);
    };
    W.useState = function(e) {
        return Le.current.useState(e);
    };
    W.useSyncExternalStore = function(e, t, n) {
        return Le.current.useSyncExternalStore(e, t, n);
    };
    W.useTransition = function() {
        return Le.current.useTransition();
    };
    W.version = "18.3.1";
    hd.exports = W;
    var N = hd.exports;
    const le = eh(N), _d = qm({
        __proto__: null,
        default: le
    }, [
        N
    ]);
    var gh = N, yh = Symbol.for("react.element"), vh = Symbol.for("react.fragment"), xh = Object.prototype.hasOwnProperty, wh = gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, kh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Ed(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)xh.call(t, r) && !kh.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: yh,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: wh.current
        };
    }
    Ol.Fragment = vh;
    Ol.jsx = Ed;
    Ol.jsxs = Ed;
    md.exports = Ol;
    var y = md.exports, $i = {}, Nd = {
        exports: {}
    }, Ye = {}, Id = {
        exports: {}
    }, Rd = {};
    (function(e) {
        function t(M, b) {
            var R = M.length;
            M.push(b);
            e: for(; 0 < R;){
                var Y = R - 1 >>> 1, re = M[Y];
                if (0 < o(re, b)) M[Y] = b, M[R] = re, R = Y;
                else break e;
            }
        }
        function n(M) {
            return M.length === 0 ? null : M[0];
        }
        function r(M) {
            if (M.length === 0) return null;
            var b = M[0], R = M.pop();
            if (R !== b) {
                M[0] = R;
                e: for(var Y = 0, re = M.length, gt = re >>> 1; Y < gt;){
                    var K = 2 * (Y + 1) - 1, X = M[K], q = K + 1, De = M[q];
                    if (0 > o(X, R)) q < re && 0 > o(De, X) ? (M[Y] = De, M[q] = R, Y = q) : (M[Y] = X, M[K] = R, Y = K);
                    else if (q < re && 0 > o(De, R)) M[Y] = De, M[q] = R, Y = q;
                    else break e;
                }
            }
            return b;
        }
        function o(M, b) {
            var R = M.sortIndex - b.sortIndex;
            return R !== 0 ? R : M.id - b.id;
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var l = performance;
            e.unstable_now = function() {
                return l.now();
            };
        } else {
            var i = Date, s = i.now();
            e.unstable_now = function() {
                return i.now() - s;
            };
        }
        var a = [], u = [], c = 1, d = null, f = 3, x = !1, v = !1, h = !1, k = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function p(M) {
            for(var b = n(u); b !== null;){
                if (b.callback === null) r(u);
                else if (b.startTime <= M) r(u), b.sortIndex = b.expirationTime, t(a, b);
                else break;
                b = n(u);
            }
        }
        function S(M) {
            if (h = !1, p(M), !v) if (n(a) !== null) v = !0, J(E);
            else {
                var b = n(u);
                b !== null && $(S, b.startTime - M);
            }
        }
        function E(M, b) {
            v = !1, h && (h = !1, g(_), _ = -1), x = !0;
            var R = f;
            try {
                for(p(b), d = n(a); d !== null && (!(d.expirationTime > b) || M && !ge());){
                    var Y = d.callback;
                    if (typeof Y == "function") {
                        d.callback = null, f = d.priorityLevel;
                        var re = Y(d.expirationTime <= b);
                        b = e.unstable_now(), typeof re == "function" ? d.callback = re : d === n(a) && r(a), p(b);
                    } else r(a);
                    d = n(a);
                }
                if (d !== null) var gt = !0;
                else {
                    var K = n(u);
                    K !== null && $(S, K.startTime - b), gt = !1;
                }
                return gt;
            } finally{
                d = null, f = R, x = !1;
            }
        }
        var z = !1, P = null, _ = -1, B = 5, F = -1;
        function ge() {
            return !(e.unstable_now() - F < B);
        }
        function Pe() {
            if (P !== null) {
                var M = e.unstable_now();
                F = M;
                var b = !0;
                try {
                    b = P(!0, M);
                } finally{
                    b ? Ue() : (z = !1, P = null);
                }
            } else z = !1;
        }
        var Ue;
        if (typeof m == "function") Ue = function() {
            m(Pe);
        };
        else if (typeof MessageChannel < "u") {
            var ht = new MessageChannel, Ve = ht.port2;
            ht.port1.onmessage = Pe, Ue = function() {
                Ve.postMessage(null);
            };
        } else Ue = function() {
            k(Pe, 0);
        };
        function J(M) {
            P = M, z || (z = !0, Ue());
        }
        function $(M, b) {
            _ = k(function() {
                M(e.unstable_now());
            }, b);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
            M.callback = null;
        }, e.unstable_continueExecution = function() {
            v || x || (v = !0, J(E));
        }, e.unstable_forceFrameRate = function(M) {
            0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < M ? Math.floor(1e3 / M) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(M) {
            switch(f){
                case 1:
                case 2:
                case 3:
                    var b = 3;
                    break;
                default:
                    b = f;
            }
            var R = f;
            f = b;
            try {
                return M();
            } finally{
                f = R;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(M, b) {
            switch(M){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    M = 3;
            }
            var R = f;
            f = M;
            try {
                return b();
            } finally{
                f = R;
            }
        }, e.unstable_scheduleCallback = function(M, b, R) {
            var Y = e.unstable_now();
            switch(typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? Y + R : Y) : R = Y, M){
                case 1:
                    var re = -1;
                    break;
                case 2:
                    re = 250;
                    break;
                case 5:
                    re = 1073741823;
                    break;
                case 4:
                    re = 1e4;
                    break;
                default:
                    re = 5e3;
            }
            return re = R + re, M = {
                id: c++,
                callback: b,
                priorityLevel: M,
                startTime: R,
                expirationTime: re,
                sortIndex: -1
            }, R > Y ? (M.sortIndex = R, t(u, M), n(a) === null && M === n(u) && (h ? (g(_), _ = -1) : h = !0, $(S, R - Y))) : (M.sortIndex = re, t(a, M), v || x || (v = !0, J(E))), M;
        }, e.unstable_shouldYield = ge, e.unstable_wrapCallback = function(M) {
            var b = f;
            return function() {
                var R = f;
                f = b;
                try {
                    return M.apply(this, arguments);
                } finally{
                    f = R;
                }
            };
        };
    })(Rd);
    Id.exports = Rd;
    var Sh = Id.exports;
    var Ch = N, Qe = Sh;
    function I(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var zd = new Set, Kr = {};
    function Ln(e, t) {
        sr(e, t), sr(e + "Capture", t);
    }
    function sr(e, t) {
        for(Kr[e] = t, e = 0; e < t.length; e++)zd.add(t[e]);
    }
    var Tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bi = Object.prototype.hasOwnProperty, _h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _u = {}, Eu = {};
    function Eh(e) {
        return Bi.call(Eu, e) ? !0 : Bi.call(_u, e) ? !1 : _h.test(e) ? Eu[e] = !0 : (_u[e] = !0, !1);
    }
    function Nh(e, t, n, r) {
        if (n !== null && n.type === 0) return !1;
        switch(typeof t){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function Ih(e, t, n, r) {
        if (t === null || typeof t > "u" || Nh(e, t, n, r)) return !0;
        if (r) return !1;
        if (n !== null) switch(n.type){
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
        return !1;
    }
    function Oe(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var Ne = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Ne[e] = new Oe(e, 0, !1, e, null, !1, !1);
    });
    [
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "className",
            "class"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ]
    ].forEach(function(e) {
        var t = e[0];
        Ne[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Ne[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Qs = /[\-:]([a-z])/g;
    function Ys(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Qs, Ys);
        Ne[t] = new Oe(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Qs, Ys);
        Ne[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Qs, Ys);
        Ne[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Ne.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        Ne[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Xs(e, t, n, r) {
        var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ih(t, n, o, r) && (n = null), r || o === null ? Eh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Lt = Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ro = Symbol.for("react.element"), Un = Symbol.for("react.portal"), Vn = Symbol.for("react.fragment"), Zs = Symbol.for("react.strict_mode"), Ui = Symbol.for("react.profiler"), Td = Symbol.for("react.provider"), Pd = Symbol.for("react.context"), Js = Symbol.for("react.forward_ref"), Vi = Symbol.for("react.suspense"), Wi = Symbol.for("react.suspense_list"), qs = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), Md = Symbol.for("react.offscreen"), Nu = Symbol.iterator;
    function _r(e) {
        return e === null || typeof e != "object" ? null : (e = Nu && e[Nu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ue = Object.assign, ui;
    function Lr(e) {
        if (ui === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ui = t && t[1] || "";
        }
        return `
` + ui + e;
    }
    var ci = !1;
    function di(e, t) {
        if (!e || ci) return "";
        ci = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t) if (t = function() {
                throw Error();
            }, Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
            else {
                try {
                    throw Error();
                } catch (u) {
                    r = u;
                }
                e();
            }
        } catch (u) {
            if (u && r && typeof u.stack == "string") {
                for(var o = u.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s];)s--;
                for(; 1 <= i && 0 <= s; i--, s--)if (o[i] !== l[s]) {
                    if (i !== 1 || s !== 1) do if (i--, s--, 0 > s || o[i] !== l[s]) {
                        var a = `
` + o[i].replace(" at new ", " at ");
                        return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
                    }
                    while (1 <= i && 0 <= s);
                    break;
                }
            }
        } finally{
            ci = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
    }
    function Rh(e) {
        switch(e.tag){
            case 5:
                return Lr(e.type);
            case 16:
                return Lr("Lazy");
            case 13:
                return Lr("Suspense");
            case 19:
                return Lr("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = di(e.type, !1), e;
            case 11:
                return e = di(e.type.render, !1), e;
            case 1:
                return e = di(e.type, !0), e;
            default:
                return "";
        }
    }
    function Gi(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Vn:
                return "Fragment";
            case Un:
                return "Portal";
            case Ui:
                return "Profiler";
            case Zs:
                return "StrictMode";
            case Vi:
                return "Suspense";
            case Wi:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Pd:
                return (e.displayName || "Context") + ".Consumer";
            case Td:
                return (e._context.displayName || "Context") + ".Provider";
            case Js:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case qs:
                return t = e.displayName || null, t !== null ? t : Gi(e.type) || "Memo";
            case Ut:
                t = e._payload, e = e._init;
                try {
                    return Gi(e(t));
                } catch  {}
        }
        return null;
    }
    function zh(e) {
        var t = e.type;
        switch(e.tag){
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Gi(t);
            case 8:
                return t === Zs ? "StrictMode" : "Mode";
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
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t;
        }
        return null;
    }
    function rn(e) {
        switch(typeof e){
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function jd(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Th(e) {
        var t = jd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var o = n.get, l = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return o.call(this);
                },
                set: function(i) {
                    r = "" + i, l.call(this, i);
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return r;
                },
                setValue: function(i) {
                    r = "" + i;
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t];
                }
            };
        }
    }
    function zo(e) {
        e._valueTracker || (e._valueTracker = Th(e));
    }
    function Ld(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = jd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function al(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Hi(e, t) {
        var n = t.checked;
        return ue({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Iu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = rn(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Od(e, t) {
        t = t.checked, t != null && Xs(e, "checked", t, !1);
    }
    function Ki(e, t) {
        Od(e, t);
        var n = rn(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Qi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qi(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Ru(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Qi(e, t, n) {
        (t !== "number" || al(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Or = Array.isArray;
    function tr(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + rn(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Yi(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
        return ue({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function zu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(I(92));
                if (Or(n)) {
                    if (1 < n.length) throw Error(I(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: rn(n)
        };
    }
    function Dd(e, t) {
        var n = rn(t.value), r = rn(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Tu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function bd(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Xi(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? bd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var To, Ad = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(To = To || document.createElement("div"), To.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = To.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function Qr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Ar = {
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
    }, Ph = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Ar).forEach(function(e) {
        Ph.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Ar[t] = Ar[e];
        });
    });
    function Fd(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ar.hasOwnProperty(e) && Ar[e] ? ("" + t).trim() : t + "px";
    }
    function $d(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Fd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Mh = ue({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Zi(e, t) {
        if (t) {
            if (Mh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(I(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(I(62));
        }
    }
    function Ji(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch(e){
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
    var qi = null;
    function ea(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var es = null, nr = null, rr = null;
    function Pu(e) {
        if (e = go(e)) {
            if (typeof es != "function") throw Error(I(280));
            var t = e.stateNode;
            t && (t = $l(t), es(e.stateNode, e.type, t));
        }
    }
    function Bd(e) {
        nr ? rr ? rr.push(e) : rr = [
            e
        ] : nr = e;
    }
    function Ud() {
        if (nr) {
            var e = nr, t = rr;
            if (rr = nr = null, Pu(e), t) for(e = 0; e < t.length; e++)Pu(t[e]);
        }
    }
    function Vd(e, t) {
        return e(t);
    }
    function Wd() {}
    var fi = !1;
    function Gd(e, t, n) {
        if (fi) return e(t, n);
        fi = !0;
        try {
            return Vd(e, t, n);
        } finally{
            fi = !1, (nr !== null || rr !== null) && (Wd(), Ud());
        }
    }
    function Yr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = $l(n);
        if (r === null) return null;
        n = r[t];
        e: switch(t){
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
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(I(231, t, typeof n));
        return n;
    }
    var ts = !1;
    if (Tt) try {
        var Er = {};
        Object.defineProperty(Er, "passive", {
            get: function() {
                ts = !0;
            }
        }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
    } catch  {
        ts = !1;
    }
    function jh(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (c) {
            this.onError(c);
        }
    }
    var Fr = !1, ul = null, cl = !1, ns = null, Lh = {
        onError: function(e) {
            Fr = !0, ul = e;
        }
    };
    function Oh(e, t, n, r, o, l, i, s, a) {
        Fr = !1, ul = null, jh.apply(Lh, arguments);
    }
    function Dh(e, t, n, r, o, l, i, s, a) {
        if (Oh.apply(this, arguments), Fr) {
            if (Fr) {
                var u = ul;
                Fr = !1, ul = null;
            } else throw Error(I(198));
            cl || (cl = !0, ns = u);
        }
    }
    function On(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Hd(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Mu(e) {
        if (On(e) !== e) throw Error(I(188));
    }
    function bh(e) {
        var t = e.alternate;
        if (!t) {
            if (t = On(e), t === null) throw Error(I(188));
            return t !== e ? null : e;
        }
        for(var n = e, r = t;;){
            var o = n.return;
            if (o === null) break;
            var l = o.alternate;
            if (l === null) {
                if (r = o.return, r !== null) {
                    n = r;
                    continue;
                }
                break;
            }
            if (o.child === l.child) {
                for(l = o.child; l;){
                    if (l === n) return Mu(o), e;
                    if (l === r) return Mu(o), t;
                    l = l.sibling;
                }
                throw Error(I(188));
            }
            if (n.return !== r.return) n = o, r = l;
            else {
                for(var i = !1, s = o.child; s;){
                    if (s === n) {
                        i = !0, n = o, r = l;
                        break;
                    }
                    if (s === r) {
                        i = !0, r = o, n = l;
                        break;
                    }
                    s = s.sibling;
                }
                if (!i) {
                    for(s = l.child; s;){
                        if (s === n) {
                            i = !0, n = l, r = o;
                            break;
                        }
                        if (s === r) {
                            i = !0, r = l, n = o;
                            break;
                        }
                        s = s.sibling;
                    }
                    if (!i) throw Error(I(189));
                }
            }
            if (n.alternate !== r) throw Error(I(190));
        }
        if (n.tag !== 3) throw Error(I(188));
        return n.stateNode.current === n ? e : t;
    }
    function Kd(e) {
        return e = bh(e), e !== null ? Qd(e) : null;
    }
    function Qd(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Qd(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Yd = Qe.unstable_scheduleCallback, ju = Qe.unstable_cancelCallback, Ah = Qe.unstable_shouldYield, Fh = Qe.unstable_requestPaint, he = Qe.unstable_now, $h = Qe.unstable_getCurrentPriorityLevel, ta = Qe.unstable_ImmediatePriority, Xd = Qe.unstable_UserBlockingPriority, dl = Qe.unstable_NormalPriority, Bh = Qe.unstable_LowPriority, Zd = Qe.unstable_IdlePriority, Dl = null, kt = null;
    function Uh(e) {
        if (kt && typeof kt.onCommitFiberRoot == "function") try {
            kt.onCommitFiberRoot(Dl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var ft = Math.clz32 ? Math.clz32 : Gh, Vh = Math.log, Wh = Math.LN2;
    function Gh(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Vh(e) / Wh | 0) | 0;
    }
    var Po = 64, Mo = 4194304;
    function Dr(e) {
        switch(e & -e){
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
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function fl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = Dr(s) : (l &= i, l !== 0 && (r = Dr(l)));
        } else i = n & ~o, i !== 0 ? r = Dr(i) : l !== 0 && (r = Dr(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - ft(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function Hh(e, t) {
        switch(e){
            case 1:
            case 2:
            case 4:
                return t + 250;
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
                return t + 5e3;
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
    function Kh(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - ft(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = Hh(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function rs(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Jd() {
        var e = Po;
        return Po <<= 1, !(Po & 4194240) && (Po = 64), e;
    }
    function pi(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function mo(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n;
    }
    function Qh(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - ft(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function na(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - ft(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Q = 0;
    function qd(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var ef, ra, tf, nf, rf, os = !1, jo = [], Yt = null, Xt = null, Zt = null, Xr = new Map, Zr = new Map, Wt = [], Yh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Lu(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Yt = null;
                break;
            case "dragenter":
            case "dragleave":
                Xt = null;
                break;
            case "mouseover":
            case "mouseout":
                Zt = null;
                break;
            case "pointerover":
            case "pointerout":
                Xr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Zr.delete(t.pointerId);
        }
    }
    function Nr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = go(t), t !== null && ra(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Xh(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Yt = Nr(Yt, e, t, n, r, o), !0;
            case "dragenter":
                return Xt = Nr(Xt, e, t, n, r, o), !0;
            case "mouseover":
                return Zt = Nr(Zt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Xr.set(l, Nr(Xr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Zr.set(l, Nr(Zr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function of(e) {
        var t = Sn(e.target);
        if (t !== null) {
            var n = On(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Hd(n), t !== null) {
                        e.blockedOn = t, rf(e.priority, function() {
                            tf(n);
                        });
                        return;
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function Yo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ls(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                qi = r, n.target.dispatchEvent(r), qi = null;
            } else return t = go(n), t !== null && ra(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Ou(e, t, n) {
        Yo(e) && n.delete(t);
    }
    function Zh() {
        os = !1, Yt !== null && Yo(Yt) && (Yt = null), Xt !== null && Yo(Xt) && (Xt = null), Zt !== null && Yo(Zt) && (Zt = null), Xr.forEach(Ou), Zr.forEach(Ou);
    }
    function Ir(e, t) {
        e.blockedOn === t && (e.blockedOn = null, os || (os = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Zh)));
    }
    function Jr(e) {
        function t(o) {
            return Ir(o, e);
        }
        if (0 < jo.length) {
            Ir(jo[0], e);
            for(var n = 1; n < jo.length; n++){
                var r = jo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Yt !== null && Ir(Yt, e), Xt !== null && Ir(Xt, e), Zt !== null && Ir(Zt, e), Xr.forEach(t), Zr.forEach(t), n = 0; n < Wt.length; n++)r = Wt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Wt.length && (n = Wt[0], n.blockedOn === null);)of(n), n.blockedOn === null && Wt.shift();
    }
    var or = Lt.ReactCurrentBatchConfig, pl = !0;
    function Jh(e, t, n, r) {
        var o = Q, l = or.transition;
        or.transition = null;
        try {
            Q = 1, oa(e, t, n, r);
        } finally{
            Q = o, or.transition = l;
        }
    }
    function qh(e, t, n, r) {
        var o = Q, l = or.transition;
        or.transition = null;
        try {
            Q = 4, oa(e, t, n, r);
        } finally{
            Q = o, or.transition = l;
        }
    }
    function oa(e, t, n, r) {
        if (pl) {
            var o = ls(e, t, n, r);
            if (o === null) Ci(e, t, r, ml, n), Lu(e, r);
            else if (Xh(o, e, t, n, r)) r.stopPropagation();
            else if (Lu(e, r), t & 4 && -1 < Yh.indexOf(e)) {
                for(; o !== null;){
                    var l = go(o);
                    if (l !== null && ef(l), l = ls(e, t, n, r), l === null && Ci(e, t, r, ml, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Ci(e, t, r, null, n);
        }
    }
    var ml = null;
    function ls(e, t, n, r) {
        if (ml = null, e = ea(r), e = Sn(e), e !== null) if (t = On(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Hd(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return ml = e, null;
    }
    function lf(e) {
        switch(e){
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
                switch($h()){
                    case ta:
                        return 1;
                    case Xd:
                        return 4;
                    case dl:
                    case Bh:
                        return 16;
                    case Zd:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Ht = null, la = null, Xo = null;
    function sf() {
        if (Xo) return Xo;
        var e, t = la, n = t.length, r, o = "value" in Ht ? Ht.value : Ht.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return Xo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Zo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Lo() {
        return !0;
    }
    function Du() {
        return !1;
    }
    function Xe(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Lo : Du, this.isPropagationStopped = Du, this;
        }
        return ue(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Lo);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Lo);
            },
            persist: function() {},
            isPersistent: Lo
        }), t;
    }
    var gr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ia = Xe(gr), ho = ue({}, gr, {
        view: 0,
        detail: 0
    }), eg = Xe(ho), mi, hi, Rr, bl = ue({}, ho, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: sa,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Rr && (Rr && e.type === "mousemove" ? (mi = e.screenX - Rr.screenX, hi = e.screenY - Rr.screenY) : hi = mi = 0, Rr = e), mi);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : hi;
        }
    }), bu = Xe(bl), tg = ue({}, bl, {
        dataTransfer: 0
    }), ng = Xe(tg), rg = ue({}, ho, {
        relatedTarget: 0
    }), gi = Xe(rg), og = ue({}, gr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), lg = Xe(og), ig = ue({}, gr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), sg = Xe(ig), ag = ue({}, gr, {
        data: 0
    }), Au = Xe(ag), ug = {
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
    }, cg = {
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
    }, dg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function fg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = dg[e]) ? !!t[e] : !1;
    }
    function sa() {
        return fg;
    }
    var pg = ue({}, ho, {
        key: function(e) {
            if (e.key) {
                var t = ug[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = Zo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cg[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: sa,
        charCode: function(e) {
            return e.type === "keypress" ? Zo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Zo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), mg = Xe(pg), hg = ue({}, bl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), Fu = Xe(hg), gg = ue({}, ho, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: sa
    }), yg = Xe(gg), vg = ue({}, gr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), xg = Xe(vg), wg = ue({}, bl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), kg = Xe(wg), Sg = [
        9,
        13,
        27,
        32
    ], aa = Tt && "CompositionEvent" in window, $r = null;
    Tt && "documentMode" in document && ($r = document.documentMode);
    var Cg = Tt && "TextEvent" in window && !$r, af = Tt && (!aa || $r && 8 < $r && 11 >= $r), $u = " ", Bu = !1;
    function uf(e, t) {
        switch(e){
            case "keyup":
                return Sg.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function cf(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Wn = !1;
    function _g(e, t) {
        switch(e){
            case "compositionend":
                return cf(t);
            case "keypress":
                return t.which !== 32 ? null : (Bu = !0, $u);
            case "textInput":
                return e = t.data, e === $u && Bu ? null : e;
            default:
                return null;
        }
    }
    function Eg(e, t) {
        if (Wn) return e === "compositionend" || !aa && uf(e, t) ? (e = sf(), Xo = la = Ht = null, Wn = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which);
                }
                return null;
            case "compositionend":
                return af && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Ng = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Uu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Ng[e.type] : t === "textarea";
    }
    function df(e, t, n, r) {
        Bd(r), t = hl(t, "onChange"), 0 < t.length && (n = new ia("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Br = null, qr = null;
    function Ig(e) {
        Sf(e, 0);
    }
    function Al(e) {
        var t = Kn(e);
        if (Ld(t)) return e;
    }
    function Rg(e, t) {
        if (e === "change") return t;
    }
    var ff = !1;
    if (Tt) {
        var yi;
        if (Tt) {
            var vi = "oninput" in document;
            if (!vi) {
                var Vu = document.createElement("div");
                Vu.setAttribute("oninput", "return;"), vi = typeof Vu.oninput == "function";
            }
            yi = vi;
        } else yi = !1;
        ff = yi && (!document.documentMode || 9 < document.documentMode);
    }
    function Wu() {
        Br && (Br.detachEvent("onpropertychange", pf), qr = Br = null);
    }
    function pf(e) {
        if (e.propertyName === "value" && Al(qr)) {
            var t = [];
            df(t, qr, e, ea(e)), Gd(Ig, t);
        }
    }
    function zg(e, t, n) {
        e === "focusin" ? (Wu(), Br = t, qr = n, Br.attachEvent("onpropertychange", pf)) : e === "focusout" && Wu();
    }
    function Tg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Al(qr);
    }
    function Pg(e, t) {
        if (e === "click") return Al(t);
    }
    function Mg(e, t) {
        if (e === "input" || e === "change") return Al(t);
    }
    function jg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var mt = typeof Object.is == "function" ? Object.is : jg;
    function eo(e, t) {
        if (mt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Bi.call(t, o) || !mt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Gu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Hu(e, t) {
        var n = Gu(e);
        e = 0;
        for(var r; n;){
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length, e <= t && r >= t) return {
                    node: n,
                    offset: t - e
                };
                e = r;
            }
            e: {
                for(; n;){
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e;
                    }
                    n = n.parentNode;
                }
                n = void 0;
            }
            n = Gu(n);
        }
    }
    function mf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function hf() {
        for(var e = window, t = al(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = al(e.document);
        }
        return t;
    }
    function ua(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Lg(e) {
        var t = hf(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && mf(n.ownerDocument.documentElement, n)) {
            if (r !== null && ua(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Hu(n, l);
                    var i = Hu(n, r);
                    o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
                }
            }
            for(t = [], e = n; e = e.parentNode;)e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for(typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
        }
    }
    var Og = Tt && "documentMode" in document && 11 >= document.documentMode, Gn = null, is = null, Ur = null, ss = !1;
    function Ku(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ss || Gn == null || Gn !== al(r) || (r = Gn, "selectionStart" in r && ua(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Ur && eo(Ur, r) || (Ur = r, r = hl(is, "onSelect"), 0 < r.length && (t = new ia("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Gn)));
    }
    function Oo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Hn = {
        animationend: Oo("Animation", "AnimationEnd"),
        animationiteration: Oo("Animation", "AnimationIteration"),
        animationstart: Oo("Animation", "AnimationStart"),
        transitionend: Oo("Transition", "TransitionEnd")
    }, xi = {}, gf = {};
    Tt && (gf = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
    function Fl(e) {
        if (xi[e]) return xi[e];
        if (!Hn[e]) return e;
        var t = Hn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in gf) return xi[e] = t[n];
        return e;
    }
    var yf = Fl("animationend"), vf = Fl("animationiteration"), xf = Fl("animationstart"), wf = Fl("transitionend"), kf = new Map, Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ln(e, t) {
        kf.set(e, t), Ln(t, [
            e
        ]);
    }
    for(var wi = 0; wi < Qu.length; wi++){
        var ki = Qu[wi], Dg = ki.toLowerCase(), bg = ki[0].toUpperCase() + ki.slice(1);
        ln(Dg, "on" + bg);
    }
    ln(yf, "onAnimationEnd");
    ln(vf, "onAnimationIteration");
    ln(xf, "onAnimationStart");
    ln("dblclick", "onDoubleClick");
    ln("focusin", "onFocus");
    ln("focusout", "onBlur");
    ln(wf, "onTransitionEnd");
    sr("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    sr("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    sr("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    sr("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Ln("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ag = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
    function Yu(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Dh(r, t, void 0, e), e.currentTarget = null;
    }
    function Sf(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Yu(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Yu(o, s, u), l = a;
                }
            }
        }
        if (cl) throw e = ns, cl = !1, ns = null, e;
    }
    function te(e, t) {
        var n = t[fs];
        n === void 0 && (n = t[fs] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Cf(t, e, 2, !1), n.add(r));
    }
    function Si(e, t, n) {
        var r = 0;
        t && (r |= 4), Cf(n, e, r, t);
    }
    var Do = "_reactListening" + Math.random().toString(36).slice(2);
    function to(e) {
        if (!e[Do]) {
            e[Do] = !0, zd.forEach(function(n) {
                n !== "selectionchange" && (Ag.has(n) || Si(n, !1, e), Si(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Do] || (t[Do] = !0, Si("selectionchange", !1, t));
        }
    }
    function Cf(e, t, n, r) {
        switch(lf(t)){
            case 1:
                var o = Jh;
                break;
            case 4:
                o = qh;
                break;
            default:
                o = oa;
        }
        n = o.bind(null, t, n, e), o = void 0, !ts || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function Ci(e, t, n, r, o) {
        var l = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for(;;){
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o) break;
                if (i === 4) for(i = r.return; i !== null;){
                    var a = i.tag;
                    if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
                    i = i.return;
                }
                for(; s !== null;){
                    if (i = Sn(s), i === null) return;
                    if (a = i.tag, a === 5 || a === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        Gd(function() {
            var u = l, c = ea(n), d = [];
            e: {
                var f = kf.get(e);
                if (f !== void 0) {
                    var x = ia, v = e;
                    switch(e){
                        case "keypress":
                            if (Zo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            x = mg;
                            break;
                        case "focusin":
                            v = "focus", x = gi;
                            break;
                        case "focusout":
                            v = "blur", x = gi;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            x = gi;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            x = bu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            x = ng;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            x = yg;
                            break;
                        case yf:
                        case vf:
                        case xf:
                            x = lg;
                            break;
                        case wf:
                            x = xg;
                            break;
                        case "scroll":
                            x = eg;
                            break;
                        case "wheel":
                            x = kg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            x = sg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            x = Fu;
                    }
                    var h = (t & 4) !== 0, k = !h && e === "scroll", g = h ? f !== null ? f + "Capture" : null : f;
                    h = [];
                    for(var m = u, p; m !== null;){
                        p = m;
                        var S = p.stateNode;
                        if (p.tag === 5 && S !== null && (p = S, g !== null && (S = Yr(m, g), S != null && h.push(no(m, S, p)))), k) break;
                        m = m.return;
                    }
                    0 < h.length && (f = new x(f, v, null, n, c), d.push({
                        event: f,
                        listeners: h
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (f = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", f && n !== qi && (v = n.relatedTarget || n.fromElement) && (Sn(v) || v[Pt])) break e;
                    if ((x || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = u, v = v ? Sn(v) : null, v !== null && (k = On(v), v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = u), x !== v)) {
                        if (h = bu, S = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (h = Fu, S = "onPointerLeave", g = "onPointerEnter", m = "pointer"), k = x == null ? f : Kn(x), p = v == null ? f : Kn(v), f = new h(S, m + "leave", x, n, c), f.target = k, f.relatedTarget = p, S = null, Sn(c) === u && (h = new h(g, m + "enter", v, n, c), h.target = p, h.relatedTarget = k, S = h), k = S, x && v) t: {
                            for(h = x, g = v, m = 0, p = h; p; p = $n(p))m++;
                            for(p = 0, S = g; S; S = $n(S))p++;
                            for(; 0 < m - p;)h = $n(h), m--;
                            for(; 0 < p - m;)g = $n(g), p--;
                            for(; m--;){
                                if (h === g || g !== null && h === g.alternate) break t;
                                h = $n(h), g = $n(g);
                            }
                            h = null;
                        }
                        else h = null;
                        x !== null && Xu(d, f, x, h, !1), v !== null && k !== null && Xu(d, k, v, h, !0);
                    }
                }
                e: {
                    if (f = u ? Kn(u) : window, x = f.nodeName && f.nodeName.toLowerCase(), x === "select" || x === "input" && f.type === "file") var E = Rg;
                    else if (Uu(f)) if (ff) E = Mg;
                    else {
                        E = Tg;
                        var z = zg;
                    }
                    else (x = f.nodeName) && x.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = Pg);
                    if (E && (E = E(e, u))) {
                        df(d, E, n, c);
                        break e;
                    }
                    z && z(e, f, u), e === "focusout" && (z = f._wrapperState) && z.controlled && f.type === "number" && Qi(f, "number", f.value);
                }
                switch(z = u ? Kn(u) : window, e){
                    case "focusin":
                        (Uu(z) || z.contentEditable === "true") && (Gn = z, is = u, Ur = null);
                        break;
                    case "focusout":
                        Ur = is = Gn = null;
                        break;
                    case "mousedown":
                        ss = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ss = !1, Ku(d, n, c);
                        break;
                    case "selectionchange":
                        if (Og) break;
                    case "keydown":
                    case "keyup":
                        Ku(d, n, c);
                }
                var P;
                if (aa) e: {
                    switch(e){
                        case "compositionstart":
                            var _ = "onCompositionStart";
                            break e;
                        case "compositionend":
                            _ = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            _ = "onCompositionUpdate";
                            break e;
                    }
                    _ = void 0;
                }
                else Wn ? uf(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
                _ && (af && n.locale !== "ko" && (Wn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Wn && (P = sf()) : (Ht = c, la = "value" in Ht ? Ht.value : Ht.textContent, Wn = !0)), z = hl(u, _), 0 < z.length && (_ = new Au(_, e, null, n, c), d.push({
                    event: _,
                    listeners: z
                }), P ? _.data = P : (P = cf(n), P !== null && (_.data = P)))), (P = Cg ? _g(e, n) : Eg(e, n)) && (u = hl(u, "onBeforeInput"), 0 < u.length && (c = new Au("onBeforeInput", "beforeinput", null, n, c), d.push({
                    event: c,
                    listeners: u
                }), c.data = P));
            }
            Sf(d, t);
        });
    }
    function no(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function hl(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Yr(e, n), l != null && r.unshift(no(e, l, o)), l = Yr(e, t), l != null && r.push(no(e, l, o))), e = e.return;
        }
        return r;
    }
    function $n(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Xu(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = Yr(n, l), a != null && i.unshift(no(n, a, s))) : o || (a = Yr(n, l), a != null && i.push(no(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Fg = /\r\n?/g, $g = /\u0000|\uFFFD/g;
    function Zu(e) {
        return (typeof e == "string" ? e : "" + e).replace(Fg, `
`).replace($g, "");
    }
    function bo(e, t, n) {
        if (t = Zu(t), Zu(e) !== t && n) throw Error(I(425));
    }
    function gl() {}
    var as = null, us = null;
    function cs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ds = typeof setTimeout == "function" ? setTimeout : void 0, Bg = typeof clearTimeout == "function" ? clearTimeout : void 0, Ju = typeof Promise == "function" ? Promise : void 0, Ug = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ju < "u" ? function(e) {
        return Ju.resolve(null).then(e).catch(Vg);
    } : ds;
    function Vg(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function _i(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Jr(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        Jr(t);
    }
    function Jt(e) {
        for(; e != null; e = e.nextSibling){
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null;
            }
        }
        return e;
    }
    function qu(e) {
        e = e.previousSibling;
        for(var t = 0; e;){
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--;
                } else n === "/$" && t++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var yr = Math.random().toString(36).slice(2), wt = "__reactFiber$" + yr, ro = "__reactProps$" + yr, Pt = "__reactContainer$" + yr, fs = "__reactEvents$" + yr, Wg = "__reactListeners$" + yr, Gg = "__reactHandles$" + yr;
    function Sn(e) {
        var t = e[wt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Pt] || n[wt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = qu(e); e !== null;){
                    if (n = e[wt]) return n;
                    e = qu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function go(e) {
        return e = e[wt] || e[Pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Kn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(I(33));
    }
    function $l(e) {
        return e[ro] || null;
    }
    var ps = [], Qn = -1;
    function sn(e) {
        return {
            current: e
        };
    }
    function ne(e) {
        0 > Qn || (e.current = ps[Qn], ps[Qn] = null, Qn--);
    }
    function ee(e, t) {
        Qn++, ps[Qn] = e.current, e.current = t;
    }
    var on = {}, Te = sn(on), Fe = sn(!1), zn = on;
    function ar(e, t) {
        var n = e.type.contextTypes;
        if (!n) return on;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function $e(e) {
        return e = e.childContextTypes, e != null;
    }
    function yl() {
        ne(Fe), ne(Te);
    }
    function ec(e, t, n) {
        if (Te.current !== on) throw Error(I(168));
        ee(Te, t), ee(Fe, n);
    }
    function _f(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(I(108, zh(e) || "Unknown", o));
        return ue({}, n, r);
    }
    function vl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, zn = Te.current, ee(Te, e), ee(Fe, Fe.current), !0;
    }
    function tc(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(I(169));
        n ? (e = _f(e, t, zn), r.__reactInternalMemoizedMergedChildContext = e, ne(Fe), ne(Te), ee(Te, e)) : ne(Fe), ee(Fe, n);
    }
    var Nt = null, Bl = !1, Ei = !1;
    function Ef(e) {
        Nt === null ? Nt = [
            e
        ] : Nt.push(e);
    }
    function Hg(e) {
        Bl = !0, Ef(e);
    }
    function an() {
        if (!Ei && Nt !== null) {
            Ei = !0;
            var e = 0, t = Q;
            try {
                var n = Nt;
                for(Q = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Nt = null, Bl = !1;
            } catch (o) {
                throw Nt !== null && (Nt = Nt.slice(e + 1)), Yd(ta, an), o;
            } finally{
                Q = t, Ei = !1;
            }
        }
        return null;
    }
    var Yn = [], Xn = 0, xl = null, wl = 0, Je = [], qe = 0, Tn = null, It = 1, Rt = "";
    function xn(e, t) {
        Yn[Xn++] = wl, Yn[Xn++] = xl, xl = e, wl = t;
    }
    function Nf(e, t, n) {
        Je[qe++] = It, Je[qe++] = Rt, Je[qe++] = Tn, Tn = e;
        var r = It;
        e = Rt;
        var o = 32 - ft(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - ft(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, It = 1 << 32 - ft(t) + o | n << o | r, Rt = l + e;
        } else It = 1 << l | n << o | r, Rt = e;
    }
    function ca(e) {
        e.return !== null && (xn(e, 1), Nf(e, 1, 0));
    }
    function da(e) {
        for(; e === xl;)xl = Yn[--Xn], Yn[Xn] = null, wl = Yn[--Xn], Yn[Xn] = null;
        for(; e === Tn;)Tn = Je[--qe], Je[qe] = null, Rt = Je[--qe], Je[qe] = null, It = Je[--qe], Je[qe] = null;
    }
    var Ke = null, He = null, ie = !1, ct = null;
    function If(e, t) {
        var n = tt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function nc(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = Jt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? {
                    id: It,
                    overflow: Rt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, He = null, !0) : !1;
            default:
                return !1;
        }
    }
    function ms(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function hs(e) {
        if (ie) {
            var t = He;
            if (t) {
                var n = t;
                if (!nc(e, t)) {
                    if (ms(e)) throw Error(I(418));
                    t = Jt(n.nextSibling);
                    var r = Ke;
                    t && nc(e, t) ? If(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Ke = e);
                }
            } else {
                if (ms(e)) throw Error(I(418));
                e.flags = e.flags & -4097 | 2, ie = !1, Ke = e;
            }
        }
    }
    function rc(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ke = e;
    }
    function Ao(e) {
        if (e !== Ke) return !1;
        if (!ie) return rc(e), ie = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cs(e.type, e.memoizedProps)), t && (t = He)) {
            if (ms(e)) throw Rf(), Error(I(418));
            for(; t;)If(e, t), t = Jt(t.nextSibling);
        }
        if (rc(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                He = Jt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                He = null;
            }
        } else He = Ke ? Jt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Rf() {
        for(var e = He; e;)e = Jt(e.nextSibling);
    }
    function ur() {
        He = Ke = null, ie = !1;
    }
    function fa(e) {
        ct === null ? ct = [
            e
        ] : ct.push(e);
    }
    var Kg = Lt.ReactCurrentBatchConfig;
    function zr(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(I(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(I(147, e));
                var o = r, l = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                    var s = o.refs;
                    i === null ? delete s[l] : s[l] = i;
                }, t._stringRef = l, t);
            }
            if (typeof e != "string") throw Error(I(284));
            if (!n._owner) throw Error(I(290, e));
        }
        return e;
    }
    function Fo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function oc(e) {
        var t = e._init;
        return t(e._payload);
    }
    function zf(e) {
        function t(g, m) {
            if (e) {
                var p = g.deletions;
                p === null ? (g.deletions = [
                    m
                ], g.flags |= 16) : p.push(m);
            }
        }
        function n(g, m) {
            if (!e) return null;
            for(; m !== null;)t(g, m), m = m.sibling;
            return null;
        }
        function r(g, m) {
            for(g = new Map; m !== null;)m.key !== null ? g.set(m.key, m) : g.set(m.index, m), m = m.sibling;
            return g;
        }
        function o(g, m) {
            return g = nn(g, m), g.index = 0, g.sibling = null, g;
        }
        function l(g, m, p) {
            return g.index = p, e ? (p = g.alternate, p !== null ? (p = p.index, p < m ? (g.flags |= 2, m) : p) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
        }
        function i(g) {
            return e && g.alternate === null && (g.flags |= 2), g;
        }
        function s(g, m, p, S) {
            return m === null || m.tag !== 6 ? (m = Mi(p, g.mode, S), m.return = g, m) : (m = o(m, p), m.return = g, m);
        }
        function a(g, m, p, S) {
            var E = p.type;
            return E === Vn ? c(g, m, p.props.children, S, p.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ut && oc(E) === m.type) ? (S = o(m, p.props), S.ref = zr(g, m, p), S.return = g, S) : (S = ol(p.type, p.key, p.props, null, g.mode, S), S.ref = zr(g, m, p), S.return = g, S);
        }
        function u(g, m, p, S) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = ji(p, g.mode, S), m.return = g, m) : (m = o(m, p.children || []), m.return = g, m);
        }
        function c(g, m, p, S, E) {
            return m === null || m.tag !== 7 ? (m = Nn(p, g.mode, S, E), m.return = g, m) : (m = o(m, p), m.return = g, m);
        }
        function d(g, m, p) {
            if (typeof m == "string" && m !== "" || typeof m == "number") return m = Mi("" + m, g.mode, p), m.return = g, m;
            if (typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case Ro:
                        return p = ol(m.type, m.key, m.props, null, g.mode, p), p.ref = zr(g, null, m), p.return = g, p;
                    case Un:
                        return m = ji(m, g.mode, p), m.return = g, m;
                    case Ut:
                        var S = m._init;
                        return d(g, S(m._payload), p);
                }
                if (Or(m) || _r(m)) return m = Nn(m, g.mode, p, null), m.return = g, m;
                Fo(g, m);
            }
            return null;
        }
        function f(g, m, p, S) {
            var E = m !== null ? m.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : s(g, m, "" + p, S);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Ro:
                        return p.key === E ? a(g, m, p, S) : null;
                    case Un:
                        return p.key === E ? u(g, m, p, S) : null;
                    case Ut:
                        return E = p._init, f(g, m, E(p._payload), S);
                }
                if (Or(p) || _r(p)) return E !== null ? null : c(g, m, p, S, null);
                Fo(g, p);
            }
            return null;
        }
        function x(g, m, p, S, E) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(p) || null, s(m, g, "" + S, E);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case Ro:
                        return g = g.get(S.key === null ? p : S.key) || null, a(m, g, S, E);
                    case Un:
                        return g = g.get(S.key === null ? p : S.key) || null, u(m, g, S, E);
                    case Ut:
                        var z = S._init;
                        return x(g, m, p, z(S._payload), E);
                }
                if (Or(S) || _r(S)) return g = g.get(p) || null, c(m, g, S, E, null);
                Fo(m, S);
            }
            return null;
        }
        function v(g, m, p, S) {
            for(var E = null, z = null, P = m, _ = m = 0, B = null; P !== null && _ < p.length; _++){
                P.index > _ ? (B = P, P = null) : B = P.sibling;
                var F = f(g, P, p[_], S);
                if (F === null) {
                    P === null && (P = B);
                    break;
                }
                e && P && F.alternate === null && t(g, P), m = l(F, m, _), z === null ? E = F : z.sibling = F, z = F, P = B;
            }
            if (_ === p.length) return n(g, P), ie && xn(g, _), E;
            if (P === null) {
                for(; _ < p.length; _++)P = d(g, p[_], S), P !== null && (m = l(P, m, _), z === null ? E = P : z.sibling = P, z = P);
                return ie && xn(g, _), E;
            }
            for(P = r(g, P); _ < p.length; _++)B = x(P, g, _, p[_], S), B !== null && (e && B.alternate !== null && P.delete(B.key === null ? _ : B.key), m = l(B, m, _), z === null ? E = B : z.sibling = B, z = B);
            return e && P.forEach(function(ge) {
                return t(g, ge);
            }), ie && xn(g, _), E;
        }
        function h(g, m, p, S) {
            var E = _r(p);
            if (typeof E != "function") throw Error(I(150));
            if (p = E.call(p), p == null) throw Error(I(151));
            for(var z = E = null, P = m, _ = m = 0, B = null, F = p.next(); P !== null && !F.done; _++, F = p.next()){
                P.index > _ ? (B = P, P = null) : B = P.sibling;
                var ge = f(g, P, F.value, S);
                if (ge === null) {
                    P === null && (P = B);
                    break;
                }
                e && P && ge.alternate === null && t(g, P), m = l(ge, m, _), z === null ? E = ge : z.sibling = ge, z = ge, P = B;
            }
            if (F.done) return n(g, P), ie && xn(g, _), E;
            if (P === null) {
                for(; !F.done; _++, F = p.next())F = d(g, F.value, S), F !== null && (m = l(F, m, _), z === null ? E = F : z.sibling = F, z = F);
                return ie && xn(g, _), E;
            }
            for(P = r(g, P); !F.done; _++, F = p.next())F = x(P, g, _, F.value, S), F !== null && (e && F.alternate !== null && P.delete(F.key === null ? _ : F.key), m = l(F, m, _), z === null ? E = F : z.sibling = F, z = F);
            return e && P.forEach(function(Pe) {
                return t(g, Pe);
            }), ie && xn(g, _), E;
        }
        function k(g, m, p, S) {
            if (typeof p == "object" && p !== null && p.type === Vn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Ro:
                        e: {
                            for(var E = p.key, z = m; z !== null;){
                                if (z.key === E) {
                                    if (E = p.type, E === Vn) {
                                        if (z.tag === 7) {
                                            n(g, z.sibling), m = o(z, p.props.children), m.return = g, g = m;
                                            break e;
                                        }
                                    } else if (z.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ut && oc(E) === z.type) {
                                        n(g, z.sibling), m = o(z, p.props), m.ref = zr(g, z, p), m.return = g, g = m;
                                        break e;
                                    }
                                    n(g, z);
                                    break;
                                } else t(g, z);
                                z = z.sibling;
                            }
                            p.type === Vn ? (m = Nn(p.props.children, g.mode, S, p.key), m.return = g, g = m) : (S = ol(p.type, p.key, p.props, null, g.mode, S), S.ref = zr(g, m, p), S.return = g, g = S);
                        }
                        return i(g);
                    case Un:
                        e: {
                            for(z = p.key; m !== null;){
                                if (m.key === z) if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                                    n(g, m.sibling), m = o(m, p.children || []), m.return = g, g = m;
                                    break e;
                                } else {
                                    n(g, m);
                                    break;
                                }
                                else t(g, m);
                                m = m.sibling;
                            }
                            m = ji(p, g.mode, S), m.return = g, g = m;
                        }
                        return i(g);
                    case Ut:
                        return z = p._init, k(g, m, z(p._payload), S);
                }
                if (Or(p)) return v(g, m, p, S);
                if (_r(p)) return h(g, m, p, S);
                Fo(g, p);
            }
            return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, p), m.return = g, g = m) : (n(g, m), m = Mi(p, g.mode, S), m.return = g, g = m), i(g)) : n(g, m);
        }
        return k;
    }
    var cr = zf(!0), Tf = zf(!1), kl = sn(null), Sl = null, Zn = null, pa = null;
    function ma() {
        pa = Zn = Sl = null;
    }
    function ha(e) {
        var t = kl.current;
        ne(kl), e._currentValue = t;
    }
    function gs(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function lr(e, t) {
        Sl = e, pa = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), e.firstContext = null);
    }
    function rt(e) {
        var t = e._currentValue;
        if (pa !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Zn === null) {
            if (Sl === null) throw Error(I(308));
            Zn = e, Sl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Zn = Zn.next = e;
        return t;
    }
    var Cn = null;
    function ga(e) {
        Cn === null ? Cn = [
            e
        ] : Cn.push(e);
    }
    function Pf(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, ga(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mt(e, r);
    }
    function Mt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Vt = !1;
    function ya(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        };
    }
    function Mf(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function zt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function qt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, H & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, ga(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mt(e, n);
    }
    function Jo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
        }
    }
    function lc(e, t) {
        var n = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, n === r)) {
            var o = null, l = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var i = {
                        eventTime: n.eventTime,
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: n.callback,
                        next: null
                    };
                    l === null ? o = l = i : l = l.next = i, n = n.next;
                }while (n !== null);
                l === null ? o = l = t : l = l.next = t;
            } else o = l = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = n;
            return;
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
    }
    function Cl(e, t, n, r) {
        var o = e.updateQueue;
        Vt = !1;
        var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
        if (s !== null) {
            o.shared.pending = null;
            var a = s, u = a.next;
            a.next = null, i === null ? l = u : i.next = u, i = a;
            var c = e.alternate;
            c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== i && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
        }
        if (l !== null) {
            var d = o.baseState;
            i = 0, c = u = a = null, s = l;
            do {
                var f = s.lane, x = s.eventTime;
                if ((r & f) === f) {
                    c !== null && (c = c.next = {
                        eventTime: x,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var v = e, h = s;
                        switch(f = t, x = n, h.tag){
                            case 1:
                                if (v = h.payload, typeof v == "function") {
                                    d = v.call(x, d, f);
                                    break e;
                                }
                                d = v;
                                break e;
                            case 3:
                                v.flags = v.flags & -65537 | 128;
                            case 0:
                                if (v = h.payload, f = typeof v == "function" ? v.call(x, d, f) : v, f == null) break e;
                                d = ue({}, d, f);
                                break e;
                            case 2:
                                Vt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [
                        s
                    ] : f.push(s));
                } else x = {
                    eventTime: x,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, c === null ? (u = c = x, a = d) : c = c.next = x, i |= f;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
                }
            }while (!0);
            if (c === null && (a = d), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            Mn |= i, e.lanes = i, e.memoizedState = d;
        }
    }
    function ic(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(I(191, o));
                o.call(r);
            }
        }
    }
    var yo = {}, St = sn(yo), oo = sn(yo), lo = sn(yo);
    function _n(e) {
        if (e === yo) throw Error(I(174));
        return e;
    }
    function va(e, t) {
        switch(ee(lo, t), ee(oo, e), ee(St, yo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Xi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xi(t, e);
        }
        ne(St), ee(St, t);
    }
    function dr() {
        ne(St), ne(oo), ne(lo);
    }
    function jf(e) {
        _n(lo.current);
        var t = _n(St.current), n = Xi(t, e.type);
        t !== n && (ee(oo, e), ee(St, n));
    }
    function xa(e) {
        oo.current === e && (ne(St), ne(oo));
    }
    var se = sn(0);
    function _l(e) {
        for(var t = e; t !== null;){
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if (t.flags & 128) return t;
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === e) return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
        return null;
    }
    var Ni = [];
    function wa() {
        for(var e = 0; e < Ni.length; e++)Ni[e]._workInProgressVersionPrimary = null;
        Ni.length = 0;
    }
    var qo = Lt.ReactCurrentDispatcher, Ii = Lt.ReactCurrentBatchConfig, Pn = 0, ae = null, xe = null, ke = null, El = !1, Vr = !1, io = 0, Qg = 0;
    function Ie() {
        throw Error(I(321));
    }
    function ka(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!mt(e[n], t[n])) return !1;
        return !0;
    }
    function Sa(e, t, n, r, o, l) {
        if (Pn = l, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, qo.current = e === null || e.memoizedState === null ? Jg : qg, e = n(r, o), Vr) {
            l = 0;
            do {
                if (Vr = !1, io = 0, 25 <= l) throw Error(I(301));
                l += 1, ke = xe = null, t.updateQueue = null, qo.current = ey, e = n(r, o);
            }while (Vr);
        }
        if (qo.current = Nl, t = xe !== null && xe.next !== null, Pn = 0, ke = xe = ae = null, El = !1, t) throw Error(I(300));
        return e;
    }
    function Ca() {
        var e = io !== 0;
        return io = 0, e;
    }
    function xt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ke === null ? ae.memoizedState = ke = e : ke = ke.next = e, ke;
    }
    function ot() {
        if (xe === null) {
            var e = ae.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = xe.next;
        var t = ke === null ? ae.memoizedState : ke.next;
        if (t !== null) ke = t, xe = e;
        else {
            if (e === null) throw Error(I(310));
            xe = e, e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null
            }, ke === null ? ae.memoizedState = ke = e : ke = ke.next = e;
        }
        return ke;
    }
    function so(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Ri(e) {
        var t = ot(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = xe, o = r.baseQueue, l = n.pending;
        if (l !== null) {
            if (o !== null) {
                var i = o.next;
                o.next = l.next, l.next = i;
            }
            r.baseQueue = o = l, n.pending = null;
        }
        if (o !== null) {
            l = o.next, r = r.baseState;
            var s = i = null, a = null, u = l;
            do {
                var c = u.lane;
                if ((Pn & c) === c) a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                else {
                    var d = {
                        lane: c,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    };
                    a === null ? (s = a = d, i = r) : a = a.next = d, ae.lanes |= c, Mn |= c;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, mt(r, t.memoizedState) || (Ae = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ae.lanes |= l, Mn |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function zi(e) {
        var t = ot(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            mt(l, t.memoizedState) || (Ae = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Lf() {}
    function Of(e, t) {
        var n = ae, r = ot(), o = t(), l = !mt(r.memoizedState, o);
        if (l && (r.memoizedState = o, Ae = !0), r = r.queue, _a(Af.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || ke !== null && ke.memoizedState.tag & 1) {
            if (n.flags |= 2048, ao(9, bf.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(I(349));
            Pn & 30 || Df(n, t, o);
        }
        return o;
    }
    function Df(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = ae.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ae.updateQueue = t, t.stores = [
            e
        ]) : (n = t.stores, n === null ? t.stores = [
            e
        ] : n.push(e));
    }
    function bf(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Ff(t) && $f(e);
    }
    function Af(e, t, n) {
        return n(function() {
            Ff(t) && $f(e);
        });
    }
    function Ff(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !mt(e, n);
        } catch  {
            return !0;
        }
    }
    function $f(e) {
        var t = Mt(e, 1);
        t !== null && pt(t, e, 1, -1);
    }
    function sc(e) {
        var t = xt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: so,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Zg.bind(null, ae, e), [
            t.memoizedState,
            e
        ];
    }
    function ao(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = ae.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Bf() {
        return ot().memoizedState;
    }
    function el(e, t, n, r) {
        var o = xt();
        ae.flags |= e, o.memoizedState = ao(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Ul(e, t, n, r) {
        var o = ot();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (xe !== null) {
            var i = xe.memoizedState;
            if (l = i.destroy, r !== null && ka(r, i.deps)) {
                o.memoizedState = ao(t, n, l, r);
                return;
            }
        }
        ae.flags |= e, o.memoizedState = ao(1 | t, n, l, r);
    }
    function ac(e, t) {
        return el(8390656, 8, e, t);
    }
    function _a(e, t) {
        return Ul(2048, 8, e, t);
    }
    function Uf(e, t) {
        return Ul(4, 2, e, t);
    }
    function Vf(e, t) {
        return Ul(4, 4, e, t);
    }
    function Wf(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Gf(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Ul(4, 4, Wf.bind(null, t, e), n);
    }
    function Ea() {}
    function Hf(e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ka(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Kf(e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ka(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Qf(e, t, n) {
        return Pn & 21 ? (mt(n, t) || (n = Jd(), ae.lanes |= n, Mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ae = !0), e.memoizedState = n);
    }
    function Yg(e, t) {
        var n = Q;
        Q = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Ii.transition;
        Ii.transition = {};
        try {
            e(!1), t();
        } finally{
            Q = n, Ii.transition = r;
        }
    }
    function Yf() {
        return ot().memoizedState;
    }
    function Xg(e, t, n) {
        var r = tn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Xf(e)) Zf(t, n);
        else if (n = Pf(e, t, n, r), n !== null) {
            var o = je();
            pt(n, e, r, o), Jf(n, t, r);
        }
    }
    function Zg(e, t, n) {
        var r = tn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Xf(e)) Zf(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, mt(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, ga(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Pf(e, t, o, r), n !== null && (o = je(), pt(n, e, r, o), Jf(n, t, r));
        }
    }
    function Xf(e) {
        var t = e.alternate;
        return e === ae || t !== null && t === ae;
    }
    function Zf(e, t) {
        Vr = El = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Jf(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
        }
    }
    var Nl = {
        readContext: rt,
        useCallback: Ie,
        useContext: Ie,
        useEffect: Ie,
        useImperativeHandle: Ie,
        useInsertionEffect: Ie,
        useLayoutEffect: Ie,
        useMemo: Ie,
        useReducer: Ie,
        useRef: Ie,
        useState: Ie,
        useDebugValue: Ie,
        useDeferredValue: Ie,
        useTransition: Ie,
        useMutableSource: Ie,
        useSyncExternalStore: Ie,
        useId: Ie,
        unstable_isNewReconciler: !1
    }, Jg = {
        readContext: rt,
        useCallback: function(e, t) {
            return xt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: rt,
        useEffect: ac,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, el(4194308, 4, Wf.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return el(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return el(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = xt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = xt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Xg.bind(null, ae, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = xt();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: sc,
        useDebugValue: Ea,
        useDeferredValue: function(e) {
            return xt().memoizedState = e;
        },
        useTransition: function() {
            var e = sc(!1), t = e[0];
            return e = Yg.bind(null, e[1]), xt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ae, o = xt();
            if (ie) {
                if (n === void 0) throw Error(I(407));
                n = n();
            } else {
                if (n = t(), Se === null) throw Error(I(349));
                Pn & 30 || Df(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, ac(Af.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, ao(9, bf.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = xt(), t = Se.identifierPrefix;
            if (ie) {
                var n = Rt, r = It;
                n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = io++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Qg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, qg = {
        readContext: rt,
        useCallback: Hf,
        useContext: rt,
        useEffect: _a,
        useImperativeHandle: Gf,
        useInsertionEffect: Uf,
        useLayoutEffect: Vf,
        useMemo: Kf,
        useReducer: Ri,
        useRef: Bf,
        useState: function() {
            return Ri(so);
        },
        useDebugValue: Ea,
        useDeferredValue: function(e) {
            var t = ot();
            return Qf(t, xe.memoizedState, e);
        },
        useTransition: function() {
            var e = Ri(so)[0], t = ot().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Lf,
        useSyncExternalStore: Of,
        useId: Yf,
        unstable_isNewReconciler: !1
    }, ey = {
        readContext: rt,
        useCallback: Hf,
        useContext: rt,
        useEffect: _a,
        useImperativeHandle: Gf,
        useInsertionEffect: Uf,
        useLayoutEffect: Vf,
        useMemo: Kf,
        useReducer: zi,
        useRef: Bf,
        useState: function() {
            return zi(so);
        },
        useDebugValue: Ea,
        useDeferredValue: function(e) {
            var t = ot();
            return xe === null ? t.memoizedState = e : Qf(t, xe.memoizedState, e);
        },
        useTransition: function() {
            var e = zi(so)[0], t = ot().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Lf,
        useSyncExternalStore: Of,
        useId: Yf,
        unstable_isNewReconciler: !1
    };
    function at(e, t) {
        if (e && e.defaultProps) {
            t = ue({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function ys(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Vl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? On(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = je(), o = tn(e), l = zt(r, o);
            l.payload = t, n != null && (l.callback = n), t = qt(e, l, o), t !== null && (pt(t, e, o, r), Jo(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = je(), o = tn(e), l = zt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = qt(e, l, o), t !== null && (pt(t, e, o, r), Jo(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = je(), r = tn(e), o = zt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = qt(e, o, r), t !== null && (pt(t, e, r, n), Jo(t, e, r));
        }
    };
    function uc(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !eo(n, r) || !eo(o, l) : !0;
    }
    function qf(e, t, n) {
        var r = !1, o = on, l = t.contextType;
        return typeof l == "object" && l !== null ? l = rt(l) : (o = $e(t) ? zn : Te.current, r = t.contextTypes, l = (r = r != null) ? ar(e, o) : on), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function cc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Vl.enqueueReplaceState(t, t.state, null);
    }
    function vs(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, ya(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = rt(l) : (l = $e(t) ? zn : Te.current, o.context = ar(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ys(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Vl.enqueueReplaceState(o, o.state, null), Cl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function fr(e, t) {
        try {
            var n = "", r = t;
            do n += Rh(r), r = r.return;
            while (r);
            var o = n;
        } catch (l) {
            o = `
Error generating stack: ` + l.message + `
` + l.stack;
        }
        return {
            value: e,
            source: t,
            stack: o,
            digest: null
        };
    }
    function Ti(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function xs(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var ty = typeof WeakMap == "function" ? WeakMap : Map;
    function ep(e, t, n) {
        n = zt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Rl || (Rl = !0, zs = r), xs(e, t);
        }, n;
    }
    function tp(e, t, n) {
        n = zt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                xs(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            xs(e, t), typeof r != "function" && (en === null ? en = new Set([
                this
            ]) : en.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function dc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new ty;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = hy.bind(null, e, t, n), t.then(e, e));
    }
    function fc(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function pc(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = zt(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e);
    }
    var ny = Lt.ReactCurrentOwner, Ae = !1;
    function Me(e, t, n, r) {
        t.child = e === null ? Tf(t, null, n, r) : cr(t, e.child, n, r);
    }
    function mc(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return lr(t, o), r = Sa(e, t, n, r, l, o), n = Ca(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (ie && n && ca(t), t.flags |= 1, Me(e, t, r, o), t.child);
    }
    function hc(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !ja(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, np(e, t, l, r, o)) : (e = ol(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : eo, n(i, r) && e.ref === t.ref) return jt(e, t, o);
        }
        return t.flags |= 1, e = nn(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function np(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (eo(l, r) && e.ref === t.ref) if (Ae = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Ae = !0);
            else return t.lanes = e.lanes, jt(e, t, o);
        }
        return ws(e, t, n, r, o);
    }
    function rp(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ee(qn, We), We |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ee(qn, We), We |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, ee(qn, We), We |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ee(qn, We), We |= r;
        return Me(e, t, o, n), t.child;
    }
    function op(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function ws(e, t, n, r, o) {
        var l = $e(n) ? zn : Te.current;
        return l = ar(t, l), lr(t, o), n = Sa(e, t, n, r, l, o), r = Ca(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (ie && r && ca(t), t.flags |= 1, Me(e, t, n, o), t.child);
    }
    function gc(e, t, n, r, o) {
        if ($e(n)) {
            var l = !0;
            vl(t);
        } else l = !1;
        if (lr(t, o), t.stateNode === null) tl(e, t), qf(t, n, r), vs(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = rt(u) : (u = $e(n) ? zn : Te.current, u = ar(t, u));
            var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && cc(t, i, r, u), Vt = !1;
            var f = t.memoizedState;
            i.state = f, Cl(t, r, i, o), a = t.memoizedState, s !== r || f !== a || Fe.current || Vt ? (typeof c == "function" && (ys(t, n, c, r), a = t.memoizedState), (s = Vt || uc(t, n, s, r, f, a, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Mf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : at(t.type, s), i.props = u, d = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = rt(a) : (a = $e(n) ? zn : Te.current, a = ar(t, a));
            var x = n.getDerivedStateFromProps;
            (c = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || f !== a) && cc(t, i, r, a), Vt = !1, f = t.memoizedState, i.state = f, Cl(t, r, i, o);
            var v = t.memoizedState;
            s !== d || f !== v || Fe.current || Vt ? (typeof x == "function" && (ys(t, n, x, r), v = t.memoizedState), (u = Vt || uc(t, n, u, r, f, v, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return ks(e, t, n, r, l, o);
    }
    function ks(e, t, n, r, o, l) {
        op(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && tc(t, n, !1), jt(e, t, l);
        r = t.stateNode, ny.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = cr(t, e.child, null, l), t.child = cr(t, null, s, l)) : Me(e, t, s, l), t.memoizedState = r.state, o && tc(t, n, !0), t.child;
    }
    function lp(e) {
        var t = e.stateNode;
        t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1), va(e, t.containerInfo);
    }
    function yc(e, t, n, r, o) {
        return ur(), fa(o), t.flags |= 256, Me(e, t, n, r), t.child;
    }
    var Ss = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Cs(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function ip(e, t, n) {
        var r = t.pendingProps, o = se.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ee(se, o & 1), e === null) return hs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Hl(i, r, 0, null), e = Nn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Cs(n), t.memoizedState = Ss, e) : Na(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return ry(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = nn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = nn(s, l) : (l = Nn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Cs(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ss, r;
        }
        return l = e.child, e = l.sibling, r = nn(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function Na(e, t) {
        return t = Hl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function $o(e, t, n, r) {
        return r !== null && fa(r), cr(t, e.child, null, n), e = Na(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function ry(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Ti(Error(I(422))), $o(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Hl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = Nn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && cr(t, e.child, null, i), t.child.memoizedState = Cs(i), t.memoizedState = Ss, l);
        if (!(t.mode & 1)) return $o(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(I(419)), r = Ti(l, r, void 0), $o(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Ae || s) {
            if (r = Se, r !== null) {
                switch(i & -i){
                    case 4:
                        o = 2;
                        break;
                    case 16:
                        o = 8;
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
                        o = 32;
                        break;
                    case 536870912:
                        o = 268435456;
                        break;
                    default:
                        o = 0;
                }
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Mt(e, o), pt(r, e, o, -1));
            }
            return Ma(), r = Ti(Error(I(421))), $o(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gy.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, He = Jt(o.nextSibling), Ke = t, ie = !0, ct = null, e !== null && (Je[qe++] = It, Je[qe++] = Rt, Je[qe++] = Tn, It = e.id, Rt = e.overflow, Tn = t), t = Na(t, r.children), t.flags |= 4096, t);
    }
    function vc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), gs(e.return, t, n);
    }
    function Pi(e, t, n, r, o) {
        var l = e.memoizedState;
        l === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o
        } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
    }
    function sp(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Me(e, t, r.children, n), r = se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && vc(e, n, t);
                else if (e.tag === 19) vc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === t) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (ee(se, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && _l(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Pi(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && _l(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                Pi(t, !0, n, null, l);
                break;
            case "together":
                Pi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function tl(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function jt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Mn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(I(153));
        if (t.child !== null) {
            for(e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function oy(e, t, n) {
        switch(t.tag){
            case 3:
                lp(t), ur();
                break;
            case 5:
                jf(t);
                break;
            case 1:
                $e(t.type) && vl(t);
                break;
            case 4:
                va(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                ee(kl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ee(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ip(e, t, n) : (ee(se, se.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
                ee(se, se.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return sp(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ee(se, se.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, rp(e, t, n);
        }
        return jt(e, t, n);
    }
    var ap, _s, up, cp;
    ap = function(e, t) {
        for(var n = t.child; n !== null;){
            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t) break;
            for(; n.sibling === null;){
                if (n.return === null || n.return === t) return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
    };
    _s = function() {};
    up = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, _n(St.current);
            var l = null;
            switch(n){
                case "input":
                    o = Hi(e, o), r = Hi(e, r), l = [];
                    break;
                case "select":
                    o = ue({}, o, {
                        value: void 0
                    }), r = ue({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Yi(e, o), r = Yi(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = gl);
            }
            Zi(n, r);
            var i;
            n = null;
            for(u in o)if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
                var s = o[u];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Kr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
            for(u in r){
                var a = r[u];
                if (s = o?.[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in a)a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Kr.hasOwnProperty(u) ? (a != null && u === "onScroll" && te("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    cp = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function Tr(e, t) {
        if (!ie) switch(e.tailMode){
            case "hidden":
                t = e.tail;
                for(var n = null; t !== null;)t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for(var r = null; n !== null;)n.alternate !== null && (r = n), n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }
    function Re(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function ly(e, t, n) {
        var r = t.pendingProps;
        switch(da(t), t.tag){
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
                return Re(t), null;
            case 1:
                return $e(t.type) && yl(), Re(t), null;
            case 3:
                return r = t.stateNode, dr(), ne(Fe), ne(Te), wa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ct !== null && (Ms(ct), ct = null))), _s(e, t), Re(t), null;
            case 5:
                xa(t);
                var o = _n(lo.current);
                if (n = t.type, e !== null && t.stateNode != null) up(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(I(166));
                        return Re(t), null;
                    }
                    if (e = _n(St.current), Ao(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[wt] = t, r[ro] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                te("cancel", r), te("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                te("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < br.length; o++)te(br[o], r);
                                break;
                            case "source":
                                te("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                te("error", r), te("load", r);
                                break;
                            case "details":
                                te("toggle", r);
                                break;
                            case "input":
                                Iu(r, l), te("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, te("invalid", r);
                                break;
                            case "textarea":
                                zu(r, l), te("invalid", r);
                        }
                        Zi(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && bo(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && bo(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Kr.hasOwnProperty(i) && s != null && i === "onScroll" && te("scroll", r);
                        }
                        switch(n){
                            case "input":
                                zo(r), Ru(r, l, !0);
                                break;
                            case "textarea":
                                zo(r), Tu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = gl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[wt] = t, e[ro] = r, ap(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = Ji(n, r), n){
                                case "dialog":
                                    te("cancel", e), te("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    te("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < br.length; o++)te(br[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    te("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    te("error", e), te("load", e), o = r;
                                    break;
                                case "details":
                                    te("toggle", e), o = r;
                                    break;
                                case "input":
                                    Iu(e, r), o = Hi(e, r), te("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = ue({}, r, {
                                        value: void 0
                                    }), te("invalid", e);
                                    break;
                                case "textarea":
                                    zu(e, r), o = Yi(e, r), te("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Zi(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? $d(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ad(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Qr(e, a) : typeof a == "number" && Qr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Kr.hasOwnProperty(l) ? a != null && l === "onScroll" && te("scroll", e) : a != null && Xs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    zo(e), Ru(e, r, !1);
                                    break;
                                case "textarea":
                                    zo(e), Tu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + rn(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? tr(e, !!r.multiple, l, !1) : r.defaultValue != null && tr(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = gl);
                            }
                            switch(n){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
                }
                return Re(t), null;
            case 6:
                if (e && t.stateNode != null) cp(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
                    if (n = _n(lo.current), _n(St.current), Ao(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (l = r.nodeValue !== n) && (e = Ke, e !== null)) switch(e.tag){
                            case 3:
                                bo(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && bo(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
                }
                return Re(t), null;
            case 13:
                if (ne(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ie && He !== null && t.mode & 1 && !(t.flags & 128)) Rf(), ur(), t.flags |= 98560, l = !1;
                    else if (l = Ao(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(I(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(I(317));
                            l[wt] = t;
                        } else ur(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Re(t), l = !1;
                    } else ct !== null && (Ms(ct), ct = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? we === 0 && (we = 3) : Ma())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
            case 4:
                return dr(), _s(e, t), e === null && to(t.stateNode.containerInfo), Re(t), null;
            case 10:
                return ha(t.type._context), Re(t), null;
            case 17:
                return $e(t.type) && yl(), Re(t), null;
            case 19:
                if (ne(se), l = t.memoizedState, l === null) return Re(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) Tr(l, !1);
                else {
                    if (we !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = _l(e), i !== null) {
                            for(t.flags |= 128, Tr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return ee(se, se.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && he() > pr && (t.flags |= 128, r = !0, Tr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = _l(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Tr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ie) return Re(t), null;
                    } else 2 * he() - l.renderingStartTime > pr && n !== 1073741824 && (t.flags |= 128, r = !0, Tr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = he(), t.sibling = null, n = se.current, ee(se, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
            case 22:
            case 23:
                return Pa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(I(156, t.tag));
    }
    function iy(e, t) {
        switch(da(t), t.tag){
            case 1:
                return $e(t.type) && yl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return dr(), ne(Fe), ne(Te), wa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return xa(t), null;
            case 13:
                if (ne(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(I(340));
                    ur();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ne(se), null;
            case 4:
                return dr(), null;
            case 10:
                return ha(t.type._context), null;
            case 22:
            case 23:
                return Pa(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Bo = !1, ze = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, j = null;
    function Jn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            pe(e, t, r);
        }
        else n.current = null;
    }
    function Es(e, t, n) {
        try {
            n();
        } catch (r) {
            pe(e, t, r);
        }
    }
    var xc = !1;
    function ay(e, t) {
        if (as = pl, e = hf(), ua(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset, l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, l.nodeType;
                    } catch  {
                        n = null;
                        break e;
                    }
                    var i = 0, s = -1, a = -1, u = 0, c = 0, d = e, f = null;
                    t: for(;;){
                        for(var x; d !== n || o !== 0 && d.nodeType !== 3 || (s = i + o), d !== l || r !== 0 && d.nodeType !== 3 || (a = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (x = d.firstChild) !== null;)f = d, d = x;
                        for(;;){
                            if (d === e) break t;
                            if (f === n && ++u === o && (s = i), f === l && ++c === r && (a = i), (x = d.nextSibling) !== null) break;
                            d = f, f = d.parentNode;
                        }
                        d = x;
                    }
                    n = s === -1 || a === -1 ? null : {
                        start: s,
                        end: a
                    };
                } else n = null;
            }
            n = n || {
                start: 0,
                end: 0
            };
        } else n = null;
        for(us = {
            focusedElem: e,
            selectionRange: n
        }, pl = !1, j = t; j !== null;)if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else for(; j !== null;){
            t = j;
            try {
                var v = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (v !== null) {
                            var h = v.memoizedProps, k = v.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? h : at(t.type, h), k);
                            g.__reactInternalSnapshotBeforeUpdate = m;
                        }
                        break;
                    case 3:
                        var p = t.stateNode.containerInfo;
                        p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                        break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw Error(I(163));
                }
            } catch (S) {
                pe(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, j = e;
                break;
            }
            j = t.return;
        }
        return v = xc, xc = !1, v;
    }
    function Wr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && Es(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function Wl(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            }while (n !== t);
        }
    }
    function Ns(e) {
        var t = e.ref;
        if (t !== null) {
            var n = e.stateNode;
            switch(e.tag){
                case 5:
                    e = n;
                    break;
                default:
                    e = n;
            }
            typeof t == "function" ? t(e) : t.current = e;
        }
    }
    function dp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, dp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[ro], delete t[fs], delete t[Wg], delete t[Gg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function fp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function wc(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || fp(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Is(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = gl));
        else if (r !== 4 && (e = e.child, e !== null)) for(Is(e, t, n), e = e.sibling; e !== null;)Is(e, t, n), e = e.sibling;
    }
    function Rs(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Rs(e, t, n), e = e.sibling; e !== null;)Rs(e, t, n), e = e.sibling;
    }
    var _e = null, ut = !1;
    function Ft(e, t, n) {
        for(n = n.child; n !== null;)pp(e, t, n), n = n.sibling;
    }
    function pp(e, t, n) {
        if (kt && typeof kt.onCommitFiberUnmount == "function") try {
            kt.onCommitFiberUnmount(Dl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                ze || Jn(n, t);
            case 6:
                var r = _e, o = ut;
                _e = null, Ft(e, t, n), _e = r, ut = o, _e !== null && (ut ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
                break;
            case 18:
                _e !== null && (ut ? (e = _e, n = n.stateNode, e.nodeType === 8 ? _i(e.parentNode, n) : e.nodeType === 1 && _i(e, n), Jr(e)) : _i(_e, n.stateNode));
                break;
            case 4:
                r = _e, o = ut, _e = n.stateNode.containerInfo, ut = !0, Ft(e, t, n), _e = r, ut = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Es(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Ft(e, t, n);
                break;
            case 1:
                if (!ze && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    pe(n, t, s);
                }
                Ft(e, t, n);
                break;
            case 21:
                Ft(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, Ft(e, t, n), ze = r) : Ft(e, t, n);
                break;
            default:
                Ft(e, t, n);
        }
    }
    function kc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new sy), t.forEach(function(r) {
                var o = yy.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function it(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var o = n[r];
            try {
                var l = e, i = t, s = i;
                e: for(; s !== null;){
                    switch(s.tag){
                        case 5:
                            _e = s.stateNode, ut = !1;
                            break e;
                        case 3:
                            _e = s.stateNode.containerInfo, ut = !0;
                            break e;
                        case 4:
                            _e = s.stateNode.containerInfo, ut = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (_e === null) throw Error(I(160));
                pp(l, i, o), _e = null, ut = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                pe(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)mp(t, e), t = t.sibling;
    }
    function mp(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (it(t, e), yt(e), r & 4) {
                    try {
                        Wr(3, e, e.return), Wl(3, e);
                    } catch (h) {
                        pe(e, e.return, h);
                    }
                    try {
                        Wr(5, e, e.return);
                    } catch (h) {
                        pe(e, e.return, h);
                    }
                }
                break;
            case 1:
                it(t, e), yt(e), r & 512 && n !== null && Jn(n, n.return);
                break;
            case 5:
                if (it(t, e), yt(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        Qr(o, "");
                    } catch (h) {
                        pe(e, e.return, h);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Od(o, l), Ji(s, i);
                        var u = Ji(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var c = a[i], d = a[i + 1];
                            c === "style" ? $d(o, d) : c === "dangerouslySetInnerHTML" ? Ad(o, d) : c === "children" ? Qr(o, d) : Xs(o, c, d, u);
                        }
                        switch(s){
                            case "input":
                                Ki(o, l);
                                break;
                            case "textarea":
                                Dd(o, l);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var x = l.value;
                                x != null ? tr(o, !!l.multiple, x, !1) : f !== !!l.multiple && (l.defaultValue != null ? tr(o, !!l.multiple, l.defaultValue, !0) : tr(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[ro] = l;
                    } catch (h) {
                        pe(e, e.return, h);
                    }
                }
                break;
            case 6:
                if (it(t, e), yt(e), r & 4) {
                    if (e.stateNode === null) throw Error(I(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (h) {
                        pe(e, e.return, h);
                    }
                }
                break;
            case 3:
                if (it(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Jr(t.containerInfo);
                } catch (h) {
                    pe(e, e.return, h);
                }
                break;
            case 4:
                it(t, e), yt(e);
                break;
            case 13:
                it(t, e), yt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (za = he())), r & 4 && kc(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (u = ze) || c, it(t, e), ze = u) : it(t, e), yt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for(j = e, c = e.child; c !== null;){
                        for(d = j = c; j !== null;){
                            switch(f = j, x = f.child, f.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Wr(4, f, f.return);
                                    break;
                                case 1:
                                    Jn(f, f.return);
                                    var v = f.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                                        } catch (h) {
                                            pe(r, n, h);
                                        }
                                    }
                                    break;
                                case 5:
                                    Jn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Cc(d);
                                        continue;
                                    }
                            }
                            x !== null ? (x.return = f, j = x) : Cc(d);
                        }
                        c = c.sibling;
                    }
                    e: for(c = null, d = e;;){
                        if (d.tag === 5) {
                            if (c === null) {
                                c = d;
                                try {
                                    o = d.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Fd("display", i));
                                } catch (h) {
                                    pe(e, e.return, h);
                                }
                            }
                        } else if (d.tag === 6) {
                            if (c === null) try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                            } catch (h) {
                                pe(e, e.return, h);
                            }
                        } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                            d.child.return = d, d = d.child;
                            continue;
                        }
                        if (d === e) break e;
                        for(; d.sibling === null;){
                            if (d.return === null || d.return === e) break e;
                            c === d && (c = null), d = d.return;
                        }
                        c === d && (c = null), d.sibling.return = d.return, d = d.sibling;
                    }
                }
                break;
            case 19:
                it(t, e), yt(e), r & 4 && kc(e);
                break;
            case 21:
                break;
            default:
                it(t, e), yt(e);
        }
    }
    function yt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (fp(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(I(160));
                }
                switch(r.tag){
                    case 5:
                        var o = r.stateNode;
                        r.flags & 32 && (Qr(o, ""), r.flags &= -33);
                        var l = wc(e);
                        Rs(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = wc(e);
                        Is(e, s, i);
                        break;
                    default:
                        throw Error(I(161));
                }
            } catch (a) {
                pe(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function uy(e, t, n) {
        j = e, hp(e);
    }
    function hp(e, t, n) {
        for(var r = (e.mode & 1) !== 0; j !== null;){
            var o = j, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Bo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || ze;
                    s = Bo;
                    var u = ze;
                    if (Bo = i, (ze = a) && !u) for(j = o; j !== null;)i = j, a = i.child, i.tag === 22 && i.memoizedState !== null ? _c(o) : a !== null ? (a.return = i, j = a) : _c(o);
                    for(; l !== null;)j = l, hp(l), l = l.sibling;
                    j = o, Bo = s, ze = u;
                }
                Sc(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, j = l) : Sc(e);
        }
    }
    function Sc(e) {
        for(; j !== null;){
            var t = j;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            ze || Wl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && ic(t, l, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (n = null, t.child !== null) switch(t.child.tag){
                                    case 5:
                                        n = t.child.stateNode;
                                        break;
                                    case 1:
                                        n = t.child.stateNode;
                                }
                                ic(t, i, n);
                            }
                            break;
                        case 5:
                            var s = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = s;
                                var a = t.memoizedProps;
                                switch(t.type){
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        a.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        a.src && (n.src = a.src);
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
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var d = c.dehydrated;
                                        d !== null && Jr(d);
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
                            throw Error(I(163));
                    }
                    ze || t.flags & 512 && Ns(t);
                } catch (f) {
                    pe(t, t.return, f);
                }
            }
            if (t === e) {
                j = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, j = n;
                break;
            }
            j = t.return;
        }
    }
    function Cc(e) {
        for(; j !== null;){
            var t = j;
            if (t === e) {
                j = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, j = n;
                break;
            }
            j = t.return;
        }
    }
    function _c(e) {
        for(; j !== null;){
            var t = j;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Wl(4, t);
                        } catch (a) {
                            pe(t, n, a);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (a) {
                                pe(t, o, a);
                            }
                        }
                        var l = t.return;
                        try {
                            Ns(t);
                        } catch (a) {
                            pe(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Ns(t);
                        } catch (a) {
                            pe(t, i, a);
                        }
                }
            } catch (a) {
                pe(t, t.return, a);
            }
            if (t === e) {
                j = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, j = s;
                break;
            }
            j = t.return;
        }
    }
    var cy = Math.ceil, Il = Lt.ReactCurrentDispatcher, Ia = Lt.ReactCurrentOwner, nt = Lt.ReactCurrentBatchConfig, H = 0, Se = null, ye = null, Ee = 0, We = 0, qn = sn(0), we = 0, uo = null, Mn = 0, Gl = 0, Ra = 0, Gr = null, be = null, za = 0, pr = 1 / 0, Et = null, Rl = !1, zs = null, en = null, Uo = !1, Kt = null, zl = 0, Hr = 0, Ts = null, nl = -1, rl = 0;
    function je() {
        return H & 6 ? he() : nl !== -1 ? nl : nl = he();
    }
    function tn(e) {
        return e.mode & 1 ? H & 2 && Ee !== 0 ? Ee & -Ee : Kg.transition !== null ? (rl === 0 && (rl = Jd()), rl) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : lf(e.type)), e) : 1;
    }
    function pt(e, t, n, r) {
        if (50 < Hr) throw Hr = 0, Ts = null, Error(I(185));
        mo(e, n, r), (!(H & 2) || e !== Se) && (e === Se && (!(H & 2) && (Gl |= n), we === 4 && Gt(e, Ee)), Be(e, r), n === 1 && H === 0 && !(t.mode & 1) && (pr = he() + 500, Bl && an()));
    }
    function Be(e, t) {
        var n = e.callbackNode;
        Kh(e, t);
        var r = fl(e, e === Se ? Ee : 0);
        if (r === 0) n !== null && ju(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && ju(n), t === 1) e.tag === 0 ? Hg(Ec.bind(null, e)) : Ef(Ec.bind(null, e)), Ug(function() {
                !(H & 6) && an();
            }), n = null;
            else {
                switch(qd(r)){
                    case 1:
                        n = ta;
                        break;
                    case 4:
                        n = Xd;
                        break;
                    case 16:
                        n = dl;
                        break;
                    case 536870912:
                        n = Zd;
                        break;
                    default:
                        n = dl;
                }
                n = Cp(n, gp.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function gp(e, t) {
        if (nl = -1, rl = 0, H & 6) throw Error(I(327));
        var n = e.callbackNode;
        if (ir() && e.callbackNode !== n) return null;
        var r = fl(e, e === Se ? Ee : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Tl(e, r);
        else {
            t = r;
            var o = H;
            H |= 2;
            var l = vp();
            (Se !== e || Ee !== t) && (Et = null, pr = he() + 500, En(e, t));
            do try {
                py();
                break;
            } catch (s) {
                yp(e, s);
            }
            while (!0);
            ma(), Il.current = l, H = o, ye !== null ? t = 0 : (Se = null, Ee = 0, t = we);
        }
        if (t !== 0) {
            if (t === 2 && (o = rs(e), o !== 0 && (r = o, t = Ps(e, o))), t === 1) throw n = uo, En(e, 0), Gt(e, r), Be(e, he()), n;
            if (t === 6) Gt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !dy(o) && (t = Tl(e, r), t === 2 && (l = rs(e), l !== 0 && (r = l, t = Ps(e, l))), t === 1)) throw n = uo, En(e, 0), Gt(e, r), Be(e, he()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(I(345));
                    case 2:
                        wn(e, be, Et);
                        break;
                    case 3:
                        if (Gt(e, r), (r & 130023424) === r && (t = za + 500 - he(), 10 < t)) {
                            if (fl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                je(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ds(wn.bind(null, e, be, Et), t);
                            break;
                        }
                        wn(e, be, Et);
                        break;
                    case 4:
                        if (Gt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - ft(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cy(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ds(wn.bind(null, e, be, Et), r);
                            break;
                        }
                        wn(e, be, Et);
                        break;
                    case 5:
                        wn(e, be, Et);
                        break;
                    default:
                        throw Error(I(329));
                }
            }
        }
        return Be(e, he()), e.callbackNode === n ? gp.bind(null, e) : null;
    }
    function Ps(e, t) {
        var n = Gr;
        return e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256), e = Tl(e, t), e !== 2 && (t = be, be = n, t !== null && Ms(t)), e;
    }
    function Ms(e) {
        be === null ? be = e : be.push.apply(be, e);
    }
    function dy(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!mt(l(), o)) return !1;
                    } catch  {
                        return !1;
                    }
                }
            }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === e) return !0;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
        }
        return !0;
    }
    function Gt(e, t) {
        for(t &= ~Ra, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - ft(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Ec(e) {
        if (H & 6) throw Error(I(327));
        ir();
        var t = fl(e, 0);
        if (!(t & 1)) return Be(e, he()), null;
        var n = Tl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = rs(e);
            r !== 0 && (t = r, n = Ps(e, r));
        }
        if (n === 1) throw n = uo, En(e, 0), Gt(e, t), Be(e, he()), n;
        if (n === 6) throw Error(I(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, wn(e, be, Et), Be(e, he()), null;
    }
    function Ta(e, t) {
        var n = H;
        H |= 1;
        try {
            return e(t);
        } finally{
            H = n, H === 0 && (pr = he() + 500, Bl && an());
        }
    }
    function jn(e) {
        Kt !== null && Kt.tag === 0 && !(H & 6) && ir();
        var t = H;
        H |= 1;
        var n = nt.transition, r = Q;
        try {
            if (nt.transition = null, Q = 1, e) return e();
        } finally{
            Q = r, nt.transition = n, H = t, !(H & 6) && an();
        }
    }
    function Pa() {
        We = qn.current, ne(qn);
    }
    function En(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Bg(n)), ye !== null) for(n = ye.return; n !== null;){
            var r = n;
            switch(da(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && yl();
                    break;
                case 3:
                    dr(), ne(Fe), ne(Te), wa();
                    break;
                case 5:
                    xa(r);
                    break;
                case 4:
                    dr();
                    break;
                case 13:
                    ne(se);
                    break;
                case 19:
                    ne(se);
                    break;
                case 10:
                    ha(r.type._context);
                    break;
                case 22:
                case 23:
                    Pa();
            }
            n = n.return;
        }
        if (Se = e, ye = e = nn(e.current, null), Ee = We = t, we = 0, uo = null, Ra = Gl = Mn = 0, be = Gr = null, Cn !== null) {
            for(t = 0; t < Cn.length; t++)if (n = Cn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            Cn = null;
        }
        return e;
    }
    function yp(e, t) {
        do {
            var n = ye;
            try {
                if (ma(), qo.current = Nl, El) {
                    for(var r = ae.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    El = !1;
                }
                if (Pn = 0, ke = xe = ae = null, Vr = !1, io = 0, Ia.current = null, n === null || n.return === null) {
                    we = 1, uo = t, ye = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = Ee, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, c = s, d = c.tag;
                        if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                            var f = c.alternate;
                            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
                        }
                        var x = fc(i);
                        if (x !== null) {
                            x.flags &= -257, pc(x, i, s, l, t), x.mode & 1 && dc(l, u, t), t = x, a = u;
                            var v = t.updateQueue;
                            if (v === null) {
                                var h = new Set;
                                h.add(a), t.updateQueue = h;
                            } else v.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                dc(l, u, t), Ma();
                                break e;
                            }
                            a = Error(I(426));
                        }
                    } else if (ie && s.mode & 1) {
                        var k = fc(i);
                        if (k !== null) {
                            !(k.flags & 65536) && (k.flags |= 256), pc(k, i, s, l, t), fa(fr(a, s));
                            break e;
                        }
                    }
                    l = a = fr(a, s), we !== 4 && (we = 2), Gr === null ? Gr = [
                        l
                    ] : Gr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var g = ep(l, a, t);
                                lc(l, g);
                                break e;
                            case 1:
                                s = a;
                                var m = l.type, p = l.stateNode;
                                if (!(l.flags & 128) && (typeof m.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (en === null || !en.has(p)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = tp(l, s, t);
                                    lc(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                wp(n);
            } catch (E) {
                t = E, ye === n && n !== null && (ye = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function vp() {
        var e = Il.current;
        return Il.current = Nl, e === null ? Nl : e;
    }
    function Ma() {
        (we === 0 || we === 3 || we === 2) && (we = 4), Se === null || !(Mn & 268435455) && !(Gl & 268435455) || Gt(Se, Ee);
    }
    function Tl(e, t) {
        var n = H;
        H |= 2;
        var r = vp();
        (Se !== e || Ee !== t) && (Et = null, En(e, t));
        do try {
            fy();
            break;
        } catch (o) {
            yp(e, o);
        }
        while (!0);
        if (ma(), H = n, Il.current = r, ye !== null) throw Error(I(261));
        return Se = null, Ee = 0, we;
    }
    function fy() {
        for(; ye !== null;)xp(ye);
    }
    function py() {
        for(; ye !== null && !Ah();)xp(ye);
    }
    function xp(e) {
        var t = Sp(e.alternate, e, We);
        e.memoizedProps = e.pendingProps, t === null ? wp(e) : ye = t, Ia.current = null;
    }
    function wp(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = iy(n, t), n !== null) {
                    n.flags &= 32767, ye = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    we = 6, ye = null;
                    return;
                }
            } else if (n = ly(n, t, We), n !== null) {
                ye = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                ye = t;
                return;
            }
            ye = t = e;
        }while (t !== null);
        we === 0 && (we = 5);
    }
    function wn(e, t, n) {
        var r = Q, o = nt.transition;
        try {
            nt.transition = null, Q = 1, my(e, t, n, r);
        } finally{
            nt.transition = o, Q = r;
        }
        return null;
    }
    function my(e, t, n, r) {
        do ir();
        while (Kt !== null);
        if (H & 6) throw Error(I(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Qh(e, l), e === Se && (ye = Se = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Uo || (Uo = !0, Cp(dl, function() {
            return ir(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = nt.transition, nt.transition = null;
            var i = Q;
            Q = 1;
            var s = H;
            H |= 4, Ia.current = null, ay(e, n), mp(n, e), Lg(us), pl = !!as, us = as = null, e.current = n, uy(n), Fh(), H = s, Q = i, nt.transition = l;
        } else e.current = n;
        if (Uo && (Uo = !1, Kt = e, zl = o), l = e.pendingLanes, l === 0 && (en = null), Uh(n.stateNode), Be(e, he()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Rl) throw Rl = !1, e = zs, zs = null, e;
        return zl & 1 && e.tag !== 0 && ir(), l = e.pendingLanes, l & 1 ? e === Ts ? Hr++ : (Hr = 0, Ts = e) : Hr = 0, an(), null;
    }
    function ir() {
        if (Kt !== null) {
            var e = qd(zl), t = nt.transition, n = Q;
            try {
                if (nt.transition = null, Q = 16 > e ? 16 : e, Kt === null) var r = !1;
                else {
                    if (e = Kt, Kt = null, zl = 0, H & 6) throw Error(I(331));
                    var o = H;
                    for(H |= 4, j = e.current; j !== null;){
                        var l = j, i = l.child;
                        if (j.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var a = 0; a < s.length; a++){
                                    var u = s[a];
                                    for(j = u; j !== null;){
                                        var c = j;
                                        switch(c.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                Wr(8, c, l);
                                        }
                                        var d = c.child;
                                        if (d !== null) d.return = c, j = d;
                                        else for(; j !== null;){
                                            c = j;
                                            var f = c.sibling, x = c.return;
                                            if (dp(c), c === u) {
                                                j = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                f.return = x, j = f;
                                                break;
                                            }
                                            j = x;
                                        }
                                    }
                                }
                                var v = l.alternate;
                                if (v !== null) {
                                    var h = v.child;
                                    if (h !== null) {
                                        v.child = null;
                                        do {
                                            var k = h.sibling;
                                            h.sibling = null, h = k;
                                        }while (h !== null);
                                    }
                                }
                                j = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, j = i;
                        else e: for(; j !== null;){
                            if (l = j, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    Wr(9, l, l.return);
                            }
                            var g = l.sibling;
                            if (g !== null) {
                                g.return = l.return, j = g;
                                break e;
                            }
                            j = l.return;
                        }
                    }
                    var m = e.current;
                    for(j = m; j !== null;){
                        i = j;
                        var p = i.child;
                        if (i.subtreeFlags & 2064 && p !== null) p.return = i, j = p;
                        else e: for(i = m; j !== null;){
                            if (s = j, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Wl(9, s);
                                }
                            } catch (E) {
                                pe(s, s.return, E);
                            }
                            if (s === i) {
                                j = null;
                                break e;
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return, j = S;
                                break e;
                            }
                            j = s.return;
                        }
                    }
                    if (H = o, an(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
                        kt.onPostCommitFiberRoot(Dl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                Q = n, nt.transition = t;
            }
        }
        return !1;
    }
    function Nc(e, t, n) {
        t = fr(n, t), t = ep(e, t, 1), e = qt(e, t, 1), t = je(), e !== null && (mo(e, 1, t), Be(e, t));
    }
    function pe(e, t, n) {
        if (e.tag === 3) Nc(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Nc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
                    e = fr(n, e), e = tp(t, e, 1), t = qt(t, e, 1), e = je(), t !== null && (mo(t, 1, e), Be(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function hy(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 130023424) === Ee && 500 > he() - za ? En(e, 0) : Ra |= n), Be(e, t);
    }
    function kp(e, t) {
        t === 0 && (e.mode & 1 ? (t = Mo, Mo <<= 1, !(Mo & 130023424) && (Mo = 4194304)) : t = 1);
        var n = je();
        e = Mt(e, t), e !== null && (mo(e, t, n), Be(e, n));
    }
    function gy(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), kp(e, n);
    }
    function yy(e, t) {
        var n = 0;
        switch(e.tag){
            case 13:
                var r = e.stateNode, o = e.memoizedState;
                o !== null && (n = o.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(I(314));
        }
        r !== null && r.delete(t), kp(e, n);
    }
    var Sp;
    Sp = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) Ae = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ae = !1, oy(e, t, n);
            Ae = !!(e.flags & 131072);
        }
        else Ae = !1, ie && t.flags & 1048576 && Nf(t, wl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                tl(e, t), e = t.pendingProps;
                var o = ar(t, Te.current);
                lr(t, n), o = Sa(null, t, r, e, o, n);
                var l = Ca();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (l = !0, vl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ya(t), o.updater = Vl, t.stateNode = o, o._reactInternals = t, vs(t, r, e, n), t = ks(null, t, r, !0, l, n)) : (t.tag = 0, ie && l && ca(t), Me(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(tl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = xy(r), e = at(r, e), o){
                        case 0:
                            t = ws(null, t, r, e, n);
                            break e;
                        case 1:
                            t = gc(null, t, r, e, n);
                            break e;
                        case 11:
                            t = mc(null, t, r, e, n);
                            break e;
                        case 14:
                            t = hc(null, t, r, at(r.type, e), n);
                            break e;
                    }
                    throw Error(I(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), ws(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), gc(e, t, r, o, n);
            case 3:
                e: {
                    if (lp(t), e === null) throw Error(I(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Mf(e, t), Cl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = fr(Error(I(423)), t), t = yc(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = fr(Error(I(424)), t), t = yc(e, t, r, n, o);
                        break e;
                    } else for(He = Jt(t.stateNode.containerInfo.firstChild), Ke = t, ie = !0, ct = null, n = Tf(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (ur(), r === o) {
                            t = jt(e, t, n);
                            break e;
                        }
                        Me(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return jf(t), e === null && hs(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, cs(r, o) ? i = null : l !== null && cs(r, l) && (t.flags |= 32), op(e, t), Me(e, t, i, n), t.child;
            case 6:
                return e === null && hs(t), null;
            case 13:
                return ip(e, t, n);
            case 4:
                return va(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = cr(t, null, r, n) : Me(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), mc(e, t, r, o, n);
            case 7:
                return Me(e, t, t.pendingProps, n), t.child;
            case 8:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, ee(kl, r._currentValue), r._currentValue = i, l !== null) if (mt(l.value, i)) {
                        if (l.children === o.children && !Fe.current) {
                            t = jt(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var a = s.firstContext; a !== null;){
                                if (a.context === r) {
                                    if (l.tag === 1) {
                                        a = zt(-1, n & -n), a.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                                        }
                                    }
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), gs(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(I(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), gs(i, n, t), i = l.sibling;
                        } else i = l.child;
                        if (i !== null) i.return = l;
                        else for(i = l; i !== null;){
                            if (i === t) {
                                i = null;
                                break;
                            }
                            if (l = i.sibling, l !== null) {
                                l.return = i.return, i = l;
                                break;
                            }
                            i = i.return;
                        }
                        l = i;
                    }
                    Me(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, lr(t, n), o = rt(o), r = r(o), t.flags |= 1, Me(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = at(r, t.pendingProps), o = at(r.type, o), hc(e, t, r, o, n);
            case 15:
                return np(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), tl(e, t), t.tag = 1, $e(r) ? (e = !0, vl(t)) : e = !1, lr(t, n), qf(t, r, o), vs(t, r, o, n), ks(null, t, r, !0, e, n);
            case 19:
                return sp(e, t, n);
            case 22:
                return rp(e, t, n);
        }
        throw Error(I(156, t.tag));
    };
    function Cp(e, t) {
        return Yd(e, t);
    }
    function vy(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function tt(e, t, n, r) {
        return new vy(e, t, n, r);
    }
    function ja(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function xy(e) {
        if (typeof e == "function") return ja(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Js) return 11;
            if (e === qs) return 14;
        }
        return 2;
    }
    function nn(e, t) {
        var n = e.alternate;
        return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function ol(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") ja(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Vn:
                return Nn(n.children, o, l, t);
            case Zs:
                i = 8, o |= 8;
                break;
            case Ui:
                return e = tt(12, n, t, o | 2), e.elementType = Ui, e.lanes = l, e;
            case Vi:
                return e = tt(13, n, t, o), e.elementType = Vi, e.lanes = l, e;
            case Wi:
                return e = tt(19, n, t, o), e.elementType = Wi, e.lanes = l, e;
            case Md:
                return Hl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Td:
                        i = 10;
                        break e;
                    case Pd:
                        i = 9;
                        break e;
                    case Js:
                        i = 11;
                        break e;
                    case qs:
                        i = 14;
                        break e;
                    case Ut:
                        i = 16, r = null;
                        break e;
                }
                throw Error(I(130, e == null ? e : typeof e, ""));
        }
        return t = tt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function Nn(e, t, n, r) {
        return e = tt(7, e, r, t), e.lanes = n, e;
    }
    function Hl(e, t, n, r) {
        return e = tt(22, e, r, t), e.elementType = Md, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Mi(e, t, n) {
        return e = tt(6, e, null, t), e.lanes = n, e;
    }
    function ji(e, t, n) {
        return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function wy(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = pi(0), this.expirationTimes = pi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function La(e, t, n, r, o, l, i, s, a) {
        return e = new wy(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = tt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, ya(l), e;
    }
    function ky(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Un,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function _p(e) {
        if (!e) return on;
        e = e._reactInternals;
        e: {
            if (On(e) !== e || e.tag !== 1) throw Error(I(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if ($e(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            }while (t !== null);
            throw Error(I(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if ($e(n)) return _f(e, n, t);
        }
        return t;
    }
    function Ep(e, t, n, r, o, l, i, s, a) {
        return e = La(n, r, !0, e, o, l, i, s, a), e.context = _p(null), n = e.current, r = je(), o = tn(n), l = zt(r, o), l.callback = t ?? null, qt(n, l, o), e.current.lanes = o, mo(e, o, r), Be(e, r), e;
    }
    function Kl(e, t, n, r) {
        var o = t.current, l = je(), i = tn(o);
        return n = _p(n), t.context === null ? t.context = n : t.pendingContext = n, t = zt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(o, t, i), e !== null && (pt(e, o, i, l), Jo(e, o, i)), i;
    }
    function Pl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Ic(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Oa(e, t) {
        Ic(e, t), (e = e.alternate) && Ic(e, t);
    }
    function Sy() {
        return null;
    }
    var Np = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Da(e) {
        this._internalRoot = e;
    }
    Ql.prototype.render = Da.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(I(409));
        Kl(e, t, null, null);
    };
    Ql.prototype.unmount = Da.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            jn(function() {
                Kl(null, e, null, null);
            }), t[Pt] = null;
        }
    };
    function Ql(e) {
        this._internalRoot = e;
    }
    Ql.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = nf();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
            Wt.splice(n, 0, e), n === 0 && of(e);
        }
    };
    function ba(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Yl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Rc() {}
    function Cy(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = Pl(i);
                    l.call(u);
                };
            }
            var i = Ep(t, r, e, 0, null, !1, !1, "", Rc);
            return e._reactRootContainer = i, e[Pt] = i.current, to(e.nodeType === 8 ? e.parentNode : e), jn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Pl(a);
                s.call(u);
            };
        }
        var a = La(e, 0, !1, null, null, !1, !1, "", Rc);
        return e._reactRootContainer = a, e[Pt] = a.current, to(e.nodeType === 8 ? e.parentNode : e), jn(function() {
            Kl(t, a, n, r);
        }), a;
    }
    function Xl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = Pl(i);
                    s.call(a);
                };
            }
            Kl(t, i, e, o);
        } else i = Cy(n, t, e, o, r);
        return Pl(i);
    }
    ef = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Dr(t.pendingLanes);
                    n !== 0 && (na(t, n | 1), Be(t, he()), !(H & 6) && (pr = he() + 500, an()));
                }
                break;
            case 13:
                jn(function() {
                    var r = Mt(e, 1);
                    if (r !== null) {
                        var o = je();
                        pt(r, e, 1, o);
                    }
                }), Oa(e, 1);
        }
    };
    ra = function(e) {
        if (e.tag === 13) {
            var t = Mt(e, 134217728);
            if (t !== null) {
                var n = je();
                pt(t, e, 134217728, n);
            }
            Oa(e, 134217728);
        }
    };
    tf = function(e) {
        if (e.tag === 13) {
            var t = tn(e), n = Mt(e, t);
            if (n !== null) {
                var r = je();
                pt(n, e, t, r);
            }
            Oa(e, t);
        }
    };
    nf = function() {
        return Q;
    };
    rf = function(e, t) {
        var n = Q;
        try {
            return Q = e, t();
        } finally{
            Q = n;
        }
    };
    es = function(e, t, n) {
        switch(t){
            case "input":
                if (Ki(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = $l(r);
                            if (!o) throw Error(I(90));
                            Ld(r), Ki(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Dd(e, n);
                break;
            case "select":
                t = n.value, t != null && tr(e, !!n.multiple, t, !1);
        }
    };
    Vd = Ta;
    Wd = jn;
    var _y = {
        usingClientEntryPoint: !1,
        Events: [
            go,
            Kn,
            $l,
            Bd,
            Ud,
            Ta
        ]
    }, Pr = {
        findFiberByHostInstance: Sn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Ey = {
        bundleType: Pr.bundleType,
        version: Pr.version,
        rendererPackageName: Pr.rendererPackageName,
        rendererConfig: Pr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Lt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Kd(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Pr.findFiberByHostInstance || Sy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Vo.isDisabled && Vo.supportsFiber) try {
            Dl = Vo.inject(Ey), kt = Vo;
        } catch  {}
    }
    Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y;
    Ye.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ba(t)) throw Error(I(200));
        return ky(e, t, null, n);
    };
    Ye.createRoot = function(e, t) {
        if (!ba(e)) throw Error(I(299));
        var n = !1, r = "", o = Np;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = La(e, 1, !1, null, null, n, !1, r, o), e[Pt] = t.current, to(e.nodeType === 8 ? e.parentNode : e), new Da(t);
    };
    Ye.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
        return e = Kd(t), e = e === null ? null : e.stateNode, e;
    };
    Ye.flushSync = function(e) {
        return jn(e);
    };
    Ye.hydrate = function(e, t, n) {
        if (!Yl(t)) throw Error(I(200));
        return Xl(null, e, t, !0, n);
    };
    Ye.hydrateRoot = function(e, t, n) {
        if (!ba(e)) throw Error(I(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Np;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ep(t, null, e, 1, n ?? null, o, !1, l, i), e[Pt] = t.current, to(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Ql(t);
    };
    Ye.render = function(e, t, n) {
        if (!Yl(t)) throw Error(I(200));
        return Xl(null, e, t, !1, n);
    };
    Ye.unmountComponentAtNode = function(e) {
        if (!Yl(e)) throw Error(I(40));
        return e._reactRootContainer ? (jn(function() {
            Xl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Pt] = null;
            });
        }), !0) : !1;
    };
    Ye.unstable_batchedUpdates = Ta;
    Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Yl(n)) throw Error(I(200));
        if (e == null || e._reactInternals === void 0) throw Error(I(38));
        return Xl(e, t, n, !1, r);
    };
    Ye.version = "18.3.1-next-f1338f8080-20240426";
    function Ip() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ip);
        } catch (e) {
            console.error(e);
        }
    }
    Ip(), Nd.exports = Ye;
    var Ny = Nd.exports, zc = Ny;
    $i.createRoot = zc.createRoot, $i.hydrateRoot = zc.hydrateRoot;
    const Iy = "modulepreload", Ry = function(e) {
        return "/grid-draw/" + e;
    }, Tc = {}, Rp = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = Ry(a), a in Tc) return;
                Tc[a] = !0;
                const u = a.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${c}`)) return;
                const d = document.createElement("link");
                if (d.rel = u ? "stylesheet" : Iy, u || (d.as = "script"), d.crossOrigin = "", d.href = a, s && d.setAttribute("nonce", s), document.head.appendChild(d), u) return new Promise((f, x)=>{
                    d.addEventListener("load", f), d.addEventListener("error", ()=>x(new Error(`Unable to preload CSS for ${a}`)));
                });
            }));
        }
        function l(i) {
            const s = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (s.payload = i, window.dispatchEvent(s), !s.defaultPrevented) throw i;
        }
        return o.then((i)=>{
            for (const s of i || [])s.status === "rejected" && l(s.reason);
            return t().catch(l);
        });
    }, Pc = (e)=>{
        let t;
        const n = new Set, r = (u, c)=>{
            const d = typeof u == "function" ? u(t) : u;
            if (!Object.is(d, t)) {
                const f = t;
                t = c ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((x)=>x(t, f));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, zy = (e)=>e ? Pc(e) : Pc, Ty = (e)=>e;
    function Py(e, t = Ty) {
        const n = le.useSyncExternalStore(e.subscribe, le.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), le.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return le.useDebugValue(n), n;
    }
    const Mc = (e)=>{
        const t = zy(e), n = (r)=>Py(t, r);
        return Object.assign(n, t), n;
    }, zp = (e)=>e ? Mc(e) : Mc;
    function My(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    const jy = 1.75;
    function js(e) {
        return {
            r: e.minRow - jy,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function Ls(e) {
        return e.length < 4 ? [] : [
            {
                handle: 0,
                r: e[0],
                c: e[1]
            },
            {
                handle: 1,
                r: e[2],
                c: e[3]
            }
        ];
    }
    function Os(e) {
        if (e.length < 4) return [];
        const t = Math.min(e[0], e[2]), n = Math.max(e[0], e[2]), r = Math.min(e[1], e[3]), o = Math.max(e[1], e[3]), l = (t + n) / 2, i = (r + o) / 2;
        return [
            {
                handle: 0,
                r: t,
                c: r
            },
            {
                handle: 1,
                r: t,
                c: i
            },
            {
                handle: 2,
                r: t,
                c: o
            },
            {
                handle: 3,
                r: l,
                c: o
            },
            {
                handle: 4,
                r: n,
                c: o
            },
            {
                handle: 5,
                r: n,
                c: i
            },
            {
                handle: 6,
                r: n,
                c: r
            },
            {
                handle: 7,
                r: l,
                c: r
            }
        ];
    }
    function jc(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, c = (a - e) * (a - e) + (u - t) * (u - t);
            c <= i && (l = s, i = c);
        }
        return l;
    }
    function Ly(e, t) {
        if (typeof e.get_line_count != "function" || typeof e.get_rect_count != "function") return;
        const n = e.get_line_count(), r = e.get_rect_count(), o = typeof e.get_text_count == "function" ? e.get_text_count() : 0, l = (i, s, a)=>{
            if (s < 0 || s > a) throw new RangeError(`applyEdit: ${t.kind} index ${s} out of range (0..${a}) for ${i}`);
        };
        switch(t.kind){
            case "addLine":
                l("lines", t.idx, n);
                break;
            case "addRect":
                l("rects", t.idx, r);
                break;
            case "deleteLine":
            case "recolorLine":
            case "resizeLine":
            case "moveLine":
            case "setLineGeom":
                l("lines", t.idx, n - 1);
                break;
            case "deleteRect":
            case "recolorRectFill":
            case "recolorRectOutline":
            case "moveRect":
            case "setRectGeom":
                l("rects", t.idx, r - 1);
                break;
            case "addText":
                l("texts", t.idx, o);
                break;
            case "deleteText":
            case "recolorText":
            case "resizeText":
            case "moveText":
                l("texts", t.idx, o - 1);
                break;
        }
    }
    function ll(e, t) {
        switch(Ly(e, t), t.kind){
            case "setCell":
                e.set_cell(t.row, t.col, t.to);
                break;
            case "setCellColor":
                e.set_cell_color(t.row, t.col, t.to);
                break;
            case "setCellState":
                t.to.filled ? (e.set_draw_color(t.to.color), e.set_cell(t.row, t.col, !0)) : e.set_cell(t.row, t.col, !1);
                break;
            case "recolorLine":
                e.set_line_color(t.idx, t.to);
                break;
            case "resizeLine":
                e.set_line_width(t.idx, t.to);
                break;
            case "recolorRectFill":
                e.set_rect_fill(t.idx, t.to);
                break;
            case "recolorRectOutline":
                e.set_rect_outline(t.idx, t.to);
                break;
            case "moveLine":
                e.move_line(t.idx, t.dRow, t.dCol);
                break;
            case "moveRect":
                e.move_rect(t.idx, t.dRow, t.dCol);
                break;
            case "setLineGeom":
                e.set_line(t.idx, t.to.r1, t.to.c1, t.to.r2, t.to.c2);
                break;
            case "setRectGeom":
                e.set_rect(t.idx, t.to.r1, t.to.c1, t.to.r2, t.to.c2);
                break;
            case "addLine":
                e.insert_line(t.idx, t.line.r1, t.line.c1, t.line.r2, t.line.c2, t.line.color, t.line.width);
                break;
            case "addRect":
                e.insert_rect(t.idx, t.rect.r1, t.rect.c1, t.rect.r2, t.rect.c2, t.rect.fill, t.rect.outline);
                break;
            case "deleteLine":
                e.delete_line(t.idx);
                break;
            case "deleteRect":
                e.delete_rect(t.idx);
                break;
            case "recolorText":
                e.set_text_color(t.idx, t.to);
                break;
            case "resizeText":
                e.set_text_size(t.idx, t.to);
                break;
            case "moveText":
                e.move_text(t.idx, t.dRow, t.dCol);
                break;
            case "addText":
                e.insert_text(t.idx, t.text.r, t.text.c, t.text.color, t.text.size, t.text.text);
                break;
            case "deleteText":
                e.delete_text(t.idx);
                break;
            case "batch":
                e.set_render_paused?.(!0);
                try {
                    for (const n of t.edits)ll(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function Tp(e) {
        switch(e.kind){
            case "setCell":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "setCellColor":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "setCellState":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "recolorLine":
            case "resizeLine":
            case "recolorRectFill":
            case "recolorRectOutline":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "moveLine":
            case "moveRect":
                return {
                    ...e,
                    dRow: -e.dRow,
                    dCol: -e.dCol
                };
            case "setLineGeom":
            case "setRectGeom":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "addLine":
                return {
                    kind: "deleteLine",
                    idx: e.idx,
                    line: e.line
                };
            case "addRect":
                return {
                    kind: "deleteRect",
                    idx: e.idx,
                    rect: e.rect
                };
            case "deleteLine":
                return {
                    kind: "addLine",
                    idx: e.idx,
                    line: e.line
                };
            case "deleteRect":
                return {
                    kind: "addRect",
                    idx: e.idx,
                    rect: e.rect
                };
            case "recolorText":
            case "resizeText":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "moveText":
                return {
                    ...e,
                    dRow: -e.dRow,
                    dCol: -e.dCol
                };
            case "addText":
                return {
                    kind: "deleteText",
                    idx: e.idx,
                    text: e.text
                };
            case "deleteText":
                return {
                    kind: "addText",
                    idx: e.idx,
                    text: e.text
                };
            case "batch":
                return {
                    kind: "batch",
                    edits: [
                        ...e.edits
                    ].reverse().map(Tp)
                };
        }
    }
    function Pp(e, t) {
        if (e.kind !== t.kind) return null;
        switch(e.kind){
            case "recolorLine":
            case "resizeLine":
            case "recolorRectFill":
            case "recolorRectOutline":
            case "recolorText":
            case "resizeText":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    to: t.to
                } : null;
            case "setCellColor":
                return t.kind === "setCellColor" && e.row === t.row && e.col === t.col ? {
                    ...e,
                    to: t.to
                } : null;
            case "setCellState":
                return t.kind === "setCellState" && e.row === t.row && e.col === t.col ? {
                    ...e,
                    to: t.to
                } : null;
            case "setLineGeom":
            case "setRectGeom":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    to: t.to
                } : null;
            case "moveLine":
            case "moveRect":
            case "moveText":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    dRow: e.dRow + t.dRow,
                    dCol: e.dCol + t.dCol
                } : null;
            case "batch":
                if (t.kind === "batch" && e.edits.length === t.edits.length) {
                    const n = [];
                    for(let r = 0; r < e.edits.length; r++){
                        const o = Pp(e.edits[r], t.edits[r]);
                        if (!o) return null;
                        n.push(o);
                    }
                    return {
                        kind: "batch",
                        edits: n
                    };
                }
                return null;
            default:
                return null;
        }
    }
    const Oy = 100, Dy = 600;
    class by {
        undoStack = [];
        redoStack = [];
        pending = null;
        lastCoalesceKey = null;
        lastCommitTime = 0;
        beginBatch() {
            this.pending && this.endBatch(), this.pending = [];
        }
        endBatch() {
            const t = this.pending;
            this.pending = null, t && t.length > 0 && this.record(t.length === 1 ? t[0] : {
                kind: "batch",
                edits: t
            });
        }
        cancelBatch() {
            this.pending = null;
        }
        isBatching() {
            return this.pending !== null;
        }
        record(t) {
            this.undoStack.push(t), this.undoStack.length > Oy && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (ll(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Dy) {
                const i = this.undoStack[this.undoStack.length - 1], s = Pp(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (ll(t, Tp(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (ll(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        canUndo() {
            return this.undoStack.length > 0;
        }
        canRedo() {
            return this.redoStack.length > 0;
        }
        clear() {
            this.undoStack = [], this.redoStack = [], this.pending = null, this.lastCoalesceKey = null;
        }
        exportStacks() {
            return {
                undo: this.undoStack.slice(),
                redo: this.redoStack.slice()
            };
        }
        importStacks(t) {
            this.undoStack = (t?.undo ?? []).slice(), this.redoStack = (t?.redo ?? []).slice(), this.pending = null, this.lastCoalesceKey = null;
        }
    }
    const st = new by;
    function Lc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            color: n[4],
            width: n[5]
        };
    }
    function Oc(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            fill: n[4],
            outline: n[5]
        };
    }
    function Dc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function bc(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Ac(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: e.get_text_size(t),
            text: e.get_text_string(t)
        };
    }
    const Ay = [
        1,
        1.5,
        2,
        3,
        5
    ], Fy = [
        1,
        1.5,
        2,
        3,
        5
    ], Li = (e)=>Math.round(e * 10);
    function Wo(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Mp(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" ? e.index === t.index : !1;
    }
    function jp(e, t) {
        return t.some((n)=>Mp(n, e));
    }
    function $y(e, t) {
        return jp(e, t) ? t : [
            ...t,
            e
        ];
    }
    function By(e, t) {
        return t.filter((n)=>!Mp(n, e));
    }
    function Ge(e, t) {
        if (e.length === 0) return null;
        let n = 1 / 0, r = 1 / 0, o = -1 / 0, l = -1 / 0;
        for (const i of e)if (i.type === "cell") n = Math.min(n, i.row), r = Math.min(r, i.col), o = Math.max(o, i.row), l = Math.max(l, i.col);
        else if (i.type === "line") {
            const s = t.get_line(i.index);
            s.length >= 4 && (n = Math.min(n, s[0], s[2]), r = Math.min(r, s[1], s[3]), o = Math.max(o, s[0], s[2]), l = Math.max(l, s[1], s[3]));
        } else if (i.type === "rect") {
            const s = t.get_rect(i.index);
            s.length >= 4 && (n = Math.min(n, s[0], s[2]), r = Math.min(r, s[1], s[3]), o = Math.max(o, s[0], s[2]), l = Math.max(l, s[1], s[3]));
        } else if (i.type === "text") {
            const s = t.get_text(i.index);
            s.length >= 5 && (n = Math.min(n, s[0] - s[4]), r = Math.min(r, s[1]), o = Math.max(o, s[0]), l = Math.max(l, s[1] + s[3]));
        }
        return n === 1 / 0 ? null : {
            minRow: n,
            minCol: r,
            maxRow: o,
            maxCol: l
        };
    }
    function Uy(e, t) {
        const n = Ge(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function il(e, t, n = {}) {
        const r = Ge(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, c = [], d = [], f = [], x = [];
        for (const v of t)if (v.type === "cell") c.push([
            v.row - a,
            v.col - u,
            e.get_cell_color(v.row, v.col)
        ]);
        else if (v.type === "line") {
            const h = e.get_line(v.index);
            d.push([
                h[0] - a,
                h[1] - u,
                h[2] - a,
                h[3] - u,
                h[4],
                h[5]
            ]);
        } else if (v.type === "rect") {
            const h = e.get_rect(v.index);
            f.push([
                h[0] - a,
                h[1] - u,
                h[2] - a,
                h[3] - u,
                h[4],
                h[5]
            ]);
        } else if (v.type === "text") {
            const h = e.get_text(v.index);
            x.push([
                h[0] - a,
                h[1] - u,
                h[2],
                e.get_text_size(v.index),
                e.get_text_string(v.index)
            ]);
        }
        return c.sort((v, h)=>v[0] - h[0] || v[1] - h[1]), {
            w: s - u + 1,
            h: i - a + 1,
            cells: c,
            lines: d,
            rects: f,
            texts: x
        };
    }
    function Fc(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function gn(e, t, n, r, o) {
        let l = e, i = t;
        for(let s = 0; s < n; s++){
            const a = r + (i - o), u = o - (l - r);
            l = a, i = u;
        }
        return {
            r: l,
            c: i
        };
    }
    function $c(e) {
        const t = [], n = e.get_filled_cells();
        for(let r = 0; r + 2 < n.length; r += 3)t.push({
            type: "cell",
            row: n[r],
            col: n[r + 1]
        });
        for(let r = 0; r < e.get_line_count(); r++)t.push({
            type: "line",
            index: r
        });
        for(let r = 0; r < e.get_rect_count(); r++)t.push({
            type: "rect",
            index: r
        });
        for(let r = 0; r < e.get_text_count(); r++)t.push({
            type: "text",
            index: r
        });
        return t;
    }
    const et = zp((e, t)=>({
            grid: null,
            gridSize: {
                rows: 10,
                cols: 10
            },
            tool: "draw",
            colorIdx: 0,
            outlineIdx: 6,
            toolStyles: {
                draw: {
                    colorIdx: 0,
                    outlineIdx: 6
                },
                line: {
                    colorIdx: 0,
                    outlineIdx: 6
                },
                rect: {
                    colorIdx: 6,
                    outlineIdx: 0
                },
                text: {
                    colorIdx: 0,
                    outlineIdx: 6
                },
                select: {
                    colorIdx: 0,
                    outlineIdx: 6
                }
            },
            isDrawing: !1,
            drawMode: !1,
            lineStart: null,
            rectStart: null,
            textEdit: null,
            textSize: 1,
            lineWidth: 1,
            selectedItems: [],
            clipboard: null,
            mousePos: {
                row: 0,
                col: 0
            },
            selectMode: null,
            selectBoxStart: null,
            selectDragStart: null,
            dragStartedOnEmpty: !1,
            isSelecting: !1,
            previousSelection: [],
            resizeTarget: null,
            resizeOrigin: null,
            rotateOrigin: null,
            captureMode: "idle",
            captureInput: null,
            captureInputOrigin: null,
            jsonOutput: "",
            tensorOutput: "",
            historyTick: 0,
            currentName: null,
            saveState: "idle",
            saveMessage: "",
            setGrid: (n)=>e({
                    grid: n
                }),
            setGridSize: (n)=>e({
                    gridSize: n
                }),
            setCurrentName: (n)=>e({
                    currentName: n
                }),
            setSaveState: (n, r = "")=>e({
                    saveState: n,
                    saveMessage: r
                }),
            setTool: (n)=>{
                t().textEdit && t().commitTextEdit();
                const r = t().toolStyles[n];
                e({
                    tool: n,
                    colorIdx: r.colorIdx,
                    outlineIdx: r.outlineIdx
                });
            },
            setColorIdx: (n)=>e((r)=>({
                        colorIdx: n,
                        toolStyles: {
                            ...r.toolStyles,
                            [r.tool]: {
                                ...r.toolStyles[r.tool],
                                colorIdx: n
                            }
                        }
                    })),
            setOutlineIdx: (n)=>e((r)=>({
                        outlineIdx: n,
                        toolStyles: {
                            ...r.toolStyles,
                            [r.tool]: {
                                ...r.toolStyles[r.tool],
                                outlineIdx: n
                            }
                        }
                    })),
            pickColor: (n)=>{
                e((i)=>({
                        colorIdx: n,
                        toolStyles: {
                            ...i.toolStyles,
                            [i.tool]: {
                                ...i.toolStyles[i.tool],
                                colorIdx: n
                            }
                        }
                    }));
                const { grid: r, selectedItems: o } = t();
                if (!r || o.length === 0) return;
                const l = [];
                for (const i of o)i.type === "cell" ? l.push({
                    kind: "setCellColor",
                    row: i.row,
                    col: i.col,
                    from: r.get_cell_color(i.row, i.col),
                    to: n
                }) : i.type === "line" ? l.push({
                    kind: "recolorLine",
                    idx: i.index,
                    from: r.get_line(i.index)[4],
                    to: n
                }) : i.type === "rect" ? l.push({
                    kind: "recolorRectFill",
                    idx: i.index,
                    from: r.get_rect(i.index)[4],
                    to: n
                }) : i.type === "text" && l.push({
                    kind: "recolorText",
                    idx: i.index,
                    from: r.get_text(i.index)[2],
                    to: n
                });
                t().commitEdits(l, {
                    coalesceKey: `fill:${Wo(o)}`
                }), t().renderSelection(), t().updateOutputs();
            },
            pickOutline: (n)=>{
                e((i)=>({
                        outlineIdx: n,
                        toolStyles: {
                            ...i.toolStyles,
                            [i.tool]: {
                                ...i.toolStyles[i.tool],
                                outlineIdx: n
                            }
                        }
                    }));
                const { grid: r, selectedItems: o } = t();
                if (!r || o.length === 0) return;
                const l = [];
                for (const i of o)i.type === "rect" && l.push({
                    kind: "recolorRectOutline",
                    idx: i.index,
                    from: r.get_rect(i.index)[5],
                    to: n
                });
                t().commitEdits(l, {
                    coalesceKey: `outline:${Wo(o)}`
                }), t().renderSelection(), t().updateOutputs();
            },
            startDrawing: (n)=>e({
                    isDrawing: !0,
                    drawMode: n
                }),
            stopDrawing: ()=>e({
                    isDrawing: !1
                }),
            startLine: (n)=>e({
                    lineStart: n,
                    isDrawing: !0
                }),
            finishLine: ()=>e({
                    lineStart: null,
                    isDrawing: !1
                }),
            startRect: (n)=>e({
                    rectStart: n,
                    isDrawing: !0
                }),
            finishRect: ()=>e({
                    rectStart: null,
                    isDrawing: !1
                }),
            setTextSize: (n)=>e({
                    textSize: n
                }),
            pickTextSize: (n)=>{
                e({
                    textSize: n
                });
                const { grid: r, selectedItems: o, textEdit: l, colorIdx: i } = t();
                if (l) {
                    const a = {
                        ...l,
                        size: n
                    };
                    e({
                        textEdit: a
                    }), r?.render_text_preview(a.row, a.col, i, a.size, a.text);
                    return;
                }
                if (!r || o.length === 0) return;
                const s = [];
                for (const a of o)a.type === "text" && s.push({
                    kind: "resizeText",
                    idx: a.index,
                    from: r.get_text_size(a.index),
                    to: n
                });
                s.length !== 0 && (t().commitEdits(s, {
                    coalesceKey: `size:${Wo(o)}`
                }), t().renderSelection());
            },
            setLineWidth: (n)=>e({
                    lineWidth: n
                }),
            pickLineWidth: (n)=>{
                e({
                    lineWidth: n
                });
                const { grid: r, selectedItems: o } = t();
                if (!r || (r.set_draw_line_width(Li(n)), o.length === 0)) return;
                const l = Li(n), i = [];
                for (const s of o)s.type === "line" && i.push({
                    kind: "resizeLine",
                    idx: s.index,
                    from: r.get_line(s.index)[5],
                    to: l
                });
                i.length !== 0 && (t().commitEdits(i, {
                    coalesceKey: `lineWidth:${Wo(o)}`
                }), t().renderSelection());
            },
            beginTextEdit: (n)=>{
                t().textEdit && t().commitTextEdit();
                const { grid: r, colorIdx: o, textSize: l } = t(), i = n.row + 1;
                e({
                    textEdit: {
                        row: i,
                        col: n.col,
                        size: l,
                        text: ""
                    },
                    selectedItems: []
                }), r && r.render_text_preview(i, n.col, o, l, "");
            },
            typeTextChar: (n)=>{
                const { grid: r, textEdit: o, colorIdx: l } = t();
                if (!o) return;
                const i = {
                    ...o,
                    text: o.text + n
                };
                e({
                    textEdit: i
                }), r && r.render_text_preview(i.row, i.col, l, i.size, i.text);
            },
            backspaceText: ()=>{
                const { grid: n, textEdit: r, colorIdx: o } = t();
                if (!r) return;
                const l = {
                    ...r,
                    text: r.text.slice(0, -1)
                };
                e({
                    textEdit: l
                }), n && n.render_text_preview(l.row, l.col, o, l.size, l.text);
            },
            commitTextEdit: ()=>{
                const { grid: n, textEdit: r, colorIdx: o } = t();
                if (e({
                    textEdit: null
                }), !n || !r || r.text.length === 0) {
                    n?.render();
                    return;
                }
                t().commitEdits([
                    {
                        kind: "addText",
                        idx: n.get_text_count(),
                        text: {
                            r: r.row,
                            c: r.col,
                            color: o,
                            size: r.size,
                            text: r.text
                        }
                    }
                ]), n.render();
            },
            cancelTextEdit: ()=>{
                const { grid: n } = t();
                e({
                    textEdit: null
                }), n?.render();
            },
            setSelectedItems: (n)=>{
                e({
                    selectedItems: n
                }), t().renderSelection(), setTimeout(()=>t().updateOutputs(), 0);
            },
            selectAll: ()=>{
                const { grid: n } = t();
                if (!n) return;
                t().textEdit && t().commitTextEdit();
                const r = $c(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = $y(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = By(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            clearSelection: ()=>{
                e({
                    selectedItems: []
                }), t().updateOutputs();
            },
            startBoxSelection: (n, r)=>{
                const { selectedItems: o, grid: l } = t(), i = r ? [
                    ...o
                ] : [];
                e({
                    selectMode: "box",
                    selectBoxStart: n,
                    isSelecting: !0,
                    previousSelection: i,
                    selectedItems: r ? o : []
                }), l?.render();
            },
            updateBoxSelection: (n)=>{
                const { grid: r, selectBoxStart: o, previousSelection: l } = t();
                if (!(!r || !o)) {
                    r.render_with_selection_box(o.row, o.col, n.row, n.col);
                    for (const i of l)i.type === "cell" ? r.highlight_cell(i.row, i.col) : i.type === "line" ? r.highlight_line(i.index) : i.type === "rect" ? r.highlight_rect(i.index) : i.type === "text" && r.highlight_text(i.index);
                }
            },
            finishBoxSelection: (n)=>{
                const { grid: r, selectBoxStart: o, previousSelection: l } = t();
                if (!r || !o) {
                    e({
                        selectMode: null,
                        selectBoxStart: null,
                        isSelecting: !1,
                        previousSelection: []
                    });
                    return;
                }
                const i = Math.min(o.row, n.row), s = Math.max(o.row, n.row), a = Math.min(o.col, n.col), u = Math.max(o.col, n.col), c = [];
                for(let h = i; h <= s; h++)for(let k = a; k <= u; k++)r.get_cell(h, k) && c.push({
                    type: "cell",
                    row: h,
                    col: k
                });
                const d = r.get_line_count();
                for(let h = 0; h < d; h++)r.line_intersects_box(h, i, a, s, u) && c.push({
                    type: "line",
                    index: h
                });
                const f = r.get_rect_count();
                for(let h = 0; h < f; h++)r.rect_intersects_box(h, i, a, s, u) && c.push({
                    type: "rect",
                    index: h
                });
                const x = r.get_text_count();
                for(let h = 0; h < x; h++)r.text_intersects_box(h, i, a, s, u) && c.push({
                    type: "text",
                    index: h
                });
                let v = [
                    ...l
                ];
                for (const h of c)jp(h, v) || v.push(h);
                e({
                    selectedItems: v,
                    selectMode: null,
                    selectBoxStart: null,
                    isSelecting: !1,
                    previousSelection: []
                }), t().renderSelection(), t().updateOutputs();
            },
            cancelBoxSelection: ()=>{
                const { previousSelection: n } = t();
                e({
                    selectMode: null,
                    selectBoxStart: null,
                    isSelecting: !1,
                    selectedItems: n,
                    previousSelection: []
                }), t().renderSelection();
            },
            startDragSelection: (n, r = !1)=>{
                e({
                    selectMode: "drag",
                    selectDragStart: n,
                    dragStartedOnEmpty: r,
                    isSelecting: !0
                });
            },
            finishDragSelection: (n)=>{
                const { grid: r, selectDragStart: o, selectedItems: l, dragStartedOnEmpty: i, updateOutputs: s } = t();
                if (!r || !o || l.length === 0) {
                    e({
                        selectMode: null,
                        selectDragStart: null,
                        dragStartedOnEmpty: !1,
                        isSelecting: !1
                    });
                    return;
                }
                const a = n.row - o.row, u = n.col - o.col;
                if (a !== 0 || u !== 0) {
                    const c = [], d = [], f = [];
                    for (const p of l)if (p.type === "cell") {
                        if (!r.get_cell(p.row, p.col)) continue;
                        const S = r.get_cell_color(p.row, p.col), E = p.row + a, z = p.col + u;
                        d.push({
                            kind: "setCellState",
                            row: p.row,
                            col: p.col,
                            from: {
                                filled: !0,
                                color: S
                            },
                            to: {
                                filled: !1,
                                color: S
                            }
                        }), f.push({
                            kind: "setCellState",
                            row: E,
                            col: z,
                            from: {
                                filled: r.get_cell(E, z),
                                color: r.get_cell_color(E, z)
                            },
                            to: {
                                filled: !0,
                                color: S
                            }
                        }), c.push({
                            type: "cell",
                            row: E,
                            col: z
                        });
                    }
                    const x = [], v = l.filter((p)=>p.type === "line");
                    for (const p of v)x.push({
                        kind: "moveLine",
                        idx: p.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "line",
                        index: p.index
                    });
                    const h = [], k = l.filter((p)=>p.type === "rect");
                    for (const p of k)h.push({
                        kind: "moveRect",
                        idx: p.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "rect",
                        index: p.index
                    });
                    const g = [], m = l.filter((p)=>p.type === "text");
                    for (const p of m)g.push({
                        kind: "moveText",
                        idx: p.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "text",
                        index: p.index
                    });
                    t().commitEdits([
                        ...d,
                        ...f,
                        ...x,
                        ...h,
                        ...g
                    ]), e({
                        selectedItems: c,
                        selectMode: null,
                        selectDragStart: null,
                        dragStartedOnEmpty: !1,
                        isSelecting: !1
                    }), s(), t().renderSelection();
                } else e({
                    selectMode: null,
                    selectDragStart: null,
                    dragStartedOnEmpty: !1,
                    isSelecting: !1,
                    selectedItems: i ? [] : l
                }), r.render(), i || t().renderSelection(), i && s();
            },
            cancelDragSelection: ()=>{
                e({
                    selectMode: null,
                    selectDragStart: null,
                    dragStartedOnEmpty: !1,
                    isSelecting: !1
                }), t().renderSelection();
            },
            startResize: (n)=>{
                const { grid: r } = t(), o = r ? n.shape === "line" ? Dc(r, n.index) : bc(r, n.index) : null;
                e({
                    selectMode: "resize",
                    resizeTarget: n,
                    resizeOrigin: o,
                    isSelecting: !0
                });
            },
            updateResize: (n)=>{
                const { grid: r, resizeTarget: o } = t();
                !r || !o || (o.shape === "line" ? r.set_line_endpoint(o.index, o.handle, n.row, n.col) : r.resize_rect(o.index, o.handle, n.row, n.col), t().renderSelection());
            },
            finishResize: (n)=>{
                const { grid: r, resizeTarget: o, resizeOrigin: l } = t();
                r && o && (o.shape === "line" ? (r.set_line_endpoint(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setLineGeom",
                        idx: o.index,
                        from: l,
                        to: Dc(r, o.index)
                    }
                ])) : (r.resize_rect(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: bc(r, o.index)
                    }
                ]))), e({
                    selectMode: null,
                    resizeTarget: null,
                    resizeOrigin: null,
                    isSelecting: !1
                }), t().renderSelection(), t().updateOutputs();
            },
            cancelResize: ()=>{
                const { grid: n, resizeTarget: r, resizeOrigin: o } = t();
                n && r && o && (r.shape === "line" ? n.set_line(r.index, o.r1, o.c1, o.r2, o.c2) : n.set_rect(r.index, o.r1, o.c1, o.r2, o.c2)), e({
                    selectMode: null,
                    resizeTarget: null,
                    resizeOrigin: null,
                    isSelecting: !1
                }), t().renderSelection();
            },
            startRotate: (n, r)=>{
                const { grid: o, selectedItems: l } = t();
                if (!o) return;
                const i = Ge(l, o);
                if (!i) return;
                const s = o.get_cell_size(), a = (i.minCol + i.maxCol) / 2 * s, u = (i.minRow + i.maxRow) / 2 * s;
                e({
                    selectMode: "rotate",
                    isSelecting: !0,
                    rotateOrigin: {
                        cx: a,
                        cy: u,
                        startAngle: Math.atan2(r - u, n - a)
                    }
                });
            },
            updateRotate: (n, r)=>{
                const { grid: o, selectedItems: l, rotateOrigin: i } = t();
                if (!o || !i) return;
                const { cx: s, cy: a, startAngle: u } = i, c = Fc(Math.atan2(r - a, n - s) - u);
                if (o.render(), c === 0) {
                    t().renderSelection();
                    return;
                }
                const d = Ge(l, o);
                if (!d) return;
                const f = Math.round((d.minRow + d.maxRow) / 2), x = Math.round((d.minCol + d.maxCol) / 2);
                for (const v of l)if (v.type === "cell") {
                    const h = gn(v.row, v.col, c, f, x);
                    o.preview_cell(h.r, h.c, o.get_cell_color(v.row, v.col));
                } else if (v.type === "line") {
                    const h = o.get_line(v.index);
                    if (h.length >= 6) {
                        const k = gn(h[0], h[1], c, f, x), g = gn(h[2], h[3], c, f, x);
                        o.preview_line(k.r, k.c, g.r, g.c, h[4], h[5]);
                    }
                } else if (v.type === "rect") {
                    const h = o.get_rect(v.index);
                    if (h.length >= 6) {
                        const k = gn(h[0], h[1], c, f, x), g = gn(h[2], h[3], c, f, x);
                        o.preview_rect(k.r, k.c, g.r, g.c, h[4], h[5]);
                    }
                } else if (v.type === "text") {
                    const h = o.get_text(v.index);
                    if (h.length >= 3) {
                        const k = gn(h[0], h[1], c, f, x);
                        o.preview_text(k.r, k.c, h[2], o.get_text_size(v.index), o.get_text_string(v.index));
                    }
                }
            },
            finishRotate: (n, r)=>{
                const { grid: o, selectedItems: l, rotateOrigin: i } = t();
                if (!o || !i) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    });
                    return;
                }
                const { cx: s, cy: a, startAngle: u } = i, c = Fc(Math.atan2(r - a, n - s) - u), d = Ge(l, o);
                if (c === 0 || !d) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const f = Math.round((d.minRow + d.maxRow) / 2), x = Math.round((d.minCol + d.maxCol) / 2), v = (p, S)=>gn(p, S, c, f, x), h = [], k = [], g = [], m = [];
                for (const p of l)if (p.type === "cell") {
                    if (!o.get_cell(p.row, p.col)) continue;
                    const S = o.get_cell_color(p.row, p.col), E = v(p.row, p.col);
                    h.push({
                        kind: "setCellState",
                        row: p.row,
                        col: p.col,
                        from: {
                            filled: !0,
                            color: S
                        },
                        to: {
                            filled: !1,
                            color: S
                        }
                    }), k.push({
                        kind: "setCellState",
                        row: E.r,
                        col: E.c,
                        from: {
                            filled: o.get_cell(E.r, E.c),
                            color: o.get_cell_color(E.r, E.c)
                        },
                        to: {
                            filled: !0,
                            color: S
                        }
                    }), m.push({
                        type: "cell",
                        row: E.r,
                        col: E.c
                    });
                } else if (p.type === "line") {
                    const S = o.get_line(p.index);
                    if (S.length < 5) continue;
                    const E = v(S[0], S[1]), z = v(S[2], S[3]);
                    g.push({
                        kind: "setLineGeom",
                        idx: p.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: E.r,
                            c1: E.c,
                            r2: z.r,
                            c2: z.c
                        }
                    }), m.push({
                        type: "line",
                        index: p.index
                    });
                } else if (p.type === "rect") {
                    const S = o.get_rect(p.index);
                    if (S.length < 6) continue;
                    const E = v(S[0], S[1]), z = v(S[2], S[3]);
                    g.push({
                        kind: "setRectGeom",
                        idx: p.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: E.r,
                            c1: E.c,
                            r2: z.r,
                            c2: z.c
                        }
                    }), m.push({
                        type: "rect",
                        index: p.index
                    });
                } else if (p.type === "text") {
                    const S = o.get_text(p.index);
                    if (S.length < 3) continue;
                    const E = v(S[0], S[1]);
                    g.push({
                        kind: "moveText",
                        idx: p.index,
                        dRow: E.r - S[0],
                        dCol: E.c - S[1]
                    }), m.push({
                        type: "text",
                        index: p.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits([
                    ...h,
                    ...k,
                    ...g
                ]), e({
                    selectedItems: m
                }), t().renderSelection(), t().updateOutputs();
            },
            cancelRotate: ()=>{
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().renderSelection();
            },
            setMousePos: (n)=>e({
                    mousePos: n
                }),
            commitEdits: (n, r)=>{
                const { grid: o } = t();
                !o || n.length === 0 || (st.commit(o, n.length === 1 ? n[0] : {
                    kind: "batch",
                    edits: n
                }, r), e({
                    historyTick: t().historyTick + 1
                }));
            },
            undo: ()=>{
                const { grid: n } = t();
                n && st.undoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            redo: ()=>{
                const { grid: n } = t();
                n && st.redoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            canUndo: ()=>st.canUndo(),
            canRedo: ()=>st.canRedo(),
            resetHistory: ()=>{
                st.clear(), e({
                    historyTick: t().historyTick + 1
                });
            },
            beginDrawStroke: ()=>{
                st.beginBatch();
            },
            drawCellAt: (n, r, o)=>{
                const { grid: l, colorIdx: i } = t();
                if (!l) return;
                const s = o && i < 6 ? {
                    filled: !0,
                    color: i
                } : {
                    filled: !1,
                    color: i < 6 ? i : l.get_cell_color(n, r)
                }, a = {
                    filled: l.get_cell(n, r),
                    color: l.get_cell_color(n, r)
                };
                a.filled === s.filled && (!s.filled || a.color === s.color) || t().commitEdits([
                    {
                        kind: "setCellState",
                        row: n,
                        col: r,
                        from: a,
                        to: s
                    }
                ]);
            },
            endDrawStroke: ()=>{
                st.endBatch(), e({
                    historyTick: t().historyTick + 1
                }), t().updateOutputs();
            },
            commitLine: (n, r, o, l)=>{
                const { grid: i, colorIdx: s, lineWidth: a } = t();
                i && (t().commitEdits([
                    {
                        kind: "addLine",
                        idx: i.get_line_count(),
                        line: {
                            r1: n,
                            c1: r,
                            r2: o,
                            c2: l,
                            color: s,
                            width: Li(a)
                        }
                    }
                ]), t().updateOutputs());
            },
            commitRect: (n, r, o, l)=>{
                const { grid: i, colorIdx: s, outlineIdx: a } = t();
                i && (t().commitEdits([
                    {
                        kind: "addRect",
                        idx: i.get_rect_count(),
                        rect: {
                            r1: n,
                            c1: r,
                            r2: o,
                            c2: l,
                            fill: s,
                            outline: a
                        }
                    }
                ]), t().updateOutputs());
            },
            hitTestShapes: (n, r)=>{
                const { grid: o } = t();
                if (!o) return null;
                const l = o.hit_test_line(n, r, 8);
                if (l >= 0) return {
                    type: "line",
                    index: l
                };
                const i = o.hit_test_text(n, r);
                if (i >= 0) return {
                    type: "text",
                    index: i
                };
                const s = o.hit_test_rect(n, r);
                if (s >= 0) return {
                    type: "rect",
                    index: s
                };
                const a = o.get_cell_size(), u = Math.floor(n / a), c = Math.floor(r / a);
                return o.get_cell(c, u) ? {
                    type: "cell",
                    row: c,
                    col: u
                } : null;
            },
            copy: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n || r.length === 0) return;
                const o = Uy(r, n);
                if (!o) return;
                const l = [], i = [], s = [], a = [];
                for (const u of r)if (u.type === "cell") l.push({
                    relRow: u.row - o.minRow,
                    relCol: u.col - o.minCol,
                    color: n.get_cell_color(u.row, u.col)
                });
                else if (u.type === "line") {
                    const c = n.get_line(u.index);
                    c.length >= 6 && i.push({
                        relR1: c[0] - o.minRow,
                        relC1: c[1] - o.minCol,
                        relR2: c[2] - o.minRow,
                        relC2: c[3] - o.minCol,
                        color: c[4],
                        width: c[5]
                    });
                } else if (u.type === "rect") {
                    const c = n.get_rect(u.index);
                    c.length >= 6 && s.push({
                        relR1: c[0] - o.minRow,
                        relC1: c[1] - o.minCol,
                        relR2: c[2] - o.minRow,
                        relC2: c[3] - o.minCol,
                        color: c[4],
                        outline: c[5]
                    });
                } else if (u.type === "text") {
                    const c = n.get_text(u.index);
                    c.length >= 3 && a.push({
                        relR: c[0] - o.minRow,
                        relC: c[1] - o.minCol,
                        color: c[2],
                        size: n.get_text_size(u.index),
                        text: n.get_text_string(u.index)
                    });
                }
                e({
                    clipboard: {
                        cells: l,
                        lines: i,
                        rects: s,
                        texts: a,
                        originRow: o.minRow,
                        originCol: o.minCol
                    }
                });
            },
            paste: ()=>{
                const { grid: n, clipboard: r, updateOutputs: o } = t();
                if (!n || !r) return;
                const l = [], i = 1, s = {
                    row: r.originRow + i,
                    col: r.originCol + i
                }, a = [];
                let u = n.get_line_count(), c = n.get_rect_count(), d = n.get_text_count();
                for (const f of r.cells){
                    const x = s.row + f.relRow, v = s.col + f.relCol;
                    a.push({
                        kind: "setCellState",
                        row: x,
                        col: v,
                        from: {
                            filled: n.get_cell(x, v),
                            color: n.get_cell_color(x, v)
                        },
                        to: {
                            filled: !0,
                            color: f.color
                        }
                    }), l.push({
                        type: "cell",
                        row: x,
                        col: v
                    });
                }
                for (const f of r.lines){
                    const x = s.row + f.relR1, v = s.col + f.relC1, h = s.row + f.relR2, k = s.col + f.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: x,
                            c1: v,
                            r2: h,
                            c2: k,
                            color: f.color,
                            width: f.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const f of r.rects){
                    const x = s.row + f.relR1, v = s.col + f.relC1, h = s.row + f.relR2, k = s.col + f.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: x,
                            c1: v,
                            r2: h,
                            c2: k,
                            fill: f.color,
                            outline: f.outline
                        }
                    }), l.push({
                        type: "rect",
                        index: c
                    }), c++;
                }
                for (const f of r.texts ?? []){
                    const x = s.row + f.relR, v = s.col + f.relC;
                    a.push({
                        kind: "addText",
                        idx: d,
                        text: {
                            r: x,
                            c: v,
                            color: f.color,
                            size: f.size,
                            text: f.text
                        }
                    }), l.push({
                        type: "text",
                        index: d
                    }), d++;
                }
                t().commitEdits(a), n.render(), e({
                    selectedItems: l
                }), t().renderSelection(), o();
            },
            deleteSelected: ()=>{
                const { grid: n, selectedItems: r, updateOutputs: o } = t();
                if (!n || r.length === 0) return;
                const l = r.filter((u)=>u.type === "line").map((u)=>u.index).sort((u, c)=>c - u), i = r.filter((u)=>u.type === "rect").map((u)=>u.index).sort((u, c)=>c - u), s = r.filter((u)=>u.type === "text").map((u)=>u.index).sort((u, c)=>c - u), a = [];
                for (const u of r)if (u.type === "cell") {
                    const c = n.get_cell_color(u.row, u.col);
                    a.push({
                        kind: "setCellState",
                        row: u.row,
                        col: u.col,
                        from: {
                            filled: !0,
                            color: c
                        },
                        to: {
                            filled: !1,
                            color: c
                        }
                    });
                }
                for (const u of l)a.push({
                    kind: "deleteLine",
                    idx: u,
                    line: Lc(n, u)
                });
                for (const u of i)a.push({
                    kind: "deleteRect",
                    idx: u,
                    rect: Oc(n, u)
                });
                for (const u of s)a.push({
                    kind: "deleteText",
                    idx: u,
                    text: Ac(n, u)
                });
                t().commitEdits(a), e({
                    selectedItems: []
                }), n.render(), o();
            },
            startTrainingCapture: ()=>{
                t().textEdit && t().commitTextEdit(), e({
                    captureMode: "input",
                    captureInput: null,
                    captureInputOrigin: null,
                    selectedItems: [],
                    tool: "select"
                }), t().renderSelection();
            },
            captureSetInput: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n) return;
                const o = il(n, r);
                if (!o) return;
                const l = Ge(r, n), i = l ? [
                    l.minRow,
                    l.minCol
                ] : [
                    0,
                    0
                ];
                e({
                    captureInput: o,
                    captureInputOrigin: i,
                    captureMode: "output",
                    selectedItems: []
                }), t().renderSelection();
            },
            buildTrainingExample: ()=>{
                const { grid: n, selectedItems: r, captureInput: o, captureInputOrigin: l } = t();
                if (!n || !o) return null;
                const i = il(n, r);
                if (!i) return null;
                const s = Ge(r, n), a = l ?? [
                    0,
                    0
                ], u = s ? [
                    s.minRow,
                    s.minCol
                ] : [
                    0,
                    0
                ], c = [
                    u[0] - a[0],
                    u[1] - a[1]
                ];
                return {
                    input: o,
                    output: i,
                    delta: c
                };
            },
            finishTrainingCapture: ()=>{
                e({
                    captureMode: "idle",
                    captureInput: null,
                    captureInputOrigin: null,
                    selectedItems: []
                }), t().renderSelection();
            },
            cancelTrainingCapture: ()=>{
                e({
                    captureMode: "idle",
                    captureInput: null,
                    captureInputOrigin: null,
                    selectedItems: []
                }), t().renderSelection();
            },
            placeDesign: (n, r, o)=>{
                const { grid: l } = t();
                if (!l) return;
                const i = [], s = [];
                let a = l.get_line_count(), u = l.get_rect_count(), c = l.get_text_count();
                for (const [d, f, x] of n.cells ?? []){
                    const v = r + d, h = o + f;
                    i.push({
                        kind: "setCellState",
                        row: v,
                        col: h,
                        from: {
                            filled: l.get_cell(v, h),
                            color: l.get_cell_color(v, h)
                        },
                        to: {
                            filled: !0,
                            color: x
                        }
                    }), s.push({
                        type: "cell",
                        row: v,
                        col: h
                    });
                }
                for (const [d, f, x, v, h, k] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + d,
                        c1: o + f,
                        r2: r + x,
                        c2: o + v,
                        color: h,
                        width: k ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [d, f, x, v, h, k] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + d,
                        c1: o + f,
                        r2: r + x,
                        c2: o + v,
                        fill: h,
                        outline: k
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const d of n.texts ?? []){
                    const f = Array.isArray(d) ? {
                        r: d[0],
                        c: d[1],
                        color: d[2],
                        size: d[3],
                        text: d[4]
                    } : d;
                    !f || typeof f.r != "number" || typeof f.c != "number" || (i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + f.r,
                            c: o + f.c,
                            color: f.color ?? 0,
                            size: f.size ?? 1,
                            text: String(f.text ?? "")
                        }
                    }), s.push({
                        type: "text",
                        index: c
                    }), c++);
                }
                i.length !== 0 && (t().commitEdits(i), l.render(), e({
                    selectedItems: s
                }), t().renderSelection(), t().updateOutputs());
            },
            serializeWholeGrid: ()=>{
                const { grid: n } = t();
                return n ? il(n, $c(n), {
                    absolute: !0
                }) : null;
            },
            loadDesign: (n)=>{
                const { grid: r } = t();
                r && (t().clear(), t().placeDesign(n, 0, 0), e({
                    selectedItems: []
                }), t().renderSelection());
            },
            exportHistory: ()=>st.exportStacks(),
            loadDesignWithHistory: (n, r)=>{
                const { grid: o } = t();
                o && (t().loadDesign(n), r && ((r.undo?.length ?? 0) > 0 || (r.redo?.length ?? 0) > 0) ? st.importStacks(r) : st.clear(), e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection());
            },
            updateOutputs: ()=>{
                const { grid: n, selectedItems: r } = t(), o = r.filter((h)=>h.type === "cell");
                if (!n || o.length === 0) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                const l = [
                    "#000000",
                    "#ffffff",
                    "#cc3333",
                    "#ffcc00",
                    "#2266dd",
                    "#22aa22",
                    null
                ], i = [], s = o.map((h)=>({
                        row: h.row,
                        col: h.col
                    })), a = My(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const h of o)if (n.get_cell(h.row, h.col)) {
                    const k = n.get_cell_color(h.row, h.col), g = l[k] ?? "#000000";
                    i.push({
                        row: h.row - a.minRow,
                        col: h.col - a.minCol,
                        color: g
                    });
                }
                i.sort((h, k)=>h.row - k.row || h.col - k.col);
                const u = a.maxRow - a.minRow + 1, c = a.maxCol - a.minCol + 1, d = [], f = [];
                for (const h of i)h.color === "#000000" && (d.push(h.row), f.push(h.col));
                const x = d.map(()=>"1.0").join(", "), v = `import torch

indices = torch.tensor([[${d.join(", ")}], [${f.join(", ")}]])
values = torch.tensor([${x}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${u}, ${c}))
sparse = sparse.coalesce()`;
                e({
                    jsonOutput: JSON.stringify(i, null, 2),
                    tensorOutput: v
                });
            },
            importJson: (n)=>{
                const { grid: r, mousePos: o } = t();
                if (!r || !n.trim()) return;
                const l = {
                    "#000000": 0,
                    "#ffffff": 1,
                    "#cc3333": 2,
                    "#ffcc00": 3,
                    "#2266dd": 4,
                    "#22aa22": 5
                };
                try {
                    const i = JSON.parse(n);
                    if (!Array.isArray(i)) return;
                    const s = [];
                    if (i.length > 0 && typeof i[0] == "object" && "row" in i[0] && "col" in i[0]) for (const u of i){
                        if (typeof u != "object" || u === null) continue;
                        const c = u.row, d = u.col, f = u.color;
                        if (typeof c != "number" || typeof d != "number") continue;
                        const x = o.row + c, v = o.col + d, h = l[f] ?? 0;
                        r.set_draw_color(h), r.set_cell(x, v, !0), s.push({
                            type: "cell",
                            row: x,
                            col: v
                        });
                    }
                    else for(let u = 0; u < i.length; u++){
                        const c = i[u];
                        if (Array.isArray(c)) for(let d = 0; d < c.length; d++){
                            const f = o.row + u, x = o.col + d, v = c[d];
                            if (v && typeof v == "object" && v.color) {
                                const h = l[v.color] ?? 0;
                                r.set_draw_color(h), r.set_cell(f, x, !0), s.push({
                                    type: "cell",
                                    row: f,
                                    col: x
                                });
                            }
                        }
                    }
                    s.length > 0 && e({
                        selectedItems: s
                    }), r.render(), t().renderSelection();
                } catch  {}
            },
            importTensor: (n)=>{
                const { grid: r, mousePos: o } = t();
                if (!(!r || !n.trim())) try {
                    let l = n.trim();
                    l.startsWith("tensor(") && (l = l.slice(7), l.endsWith(")") && (l = l.slice(0, -1)));
                    const i = JSON.parse(l);
                    if (!Array.isArray(i)) return;
                    const s = [];
                    r.set_draw_color(0);
                    for(let a = 0; a < i.length; a++){
                        const u = i[a];
                        if (Array.isArray(u)) for(let c = 0; c < u.length; c++){
                            const d = o.row + a, f = o.col + c;
                            Number(u[c]) > .5 && (r.set_cell(d, f, !0), s.push({
                                type: "cell",
                                row: d,
                                col: f
                            }));
                        }
                    }
                    s.length > 0 && e({
                        selectedItems: s
                    }), r.render(), t().renderSelection();
                } catch  {}
            },
            clear: ()=>{
                const { grid: n, updateOutputs: r } = t();
                if (!n) return;
                const o = [];
                for(let i = n.get_text_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteText",
                    idx: i,
                    text: Ac(n, i)
                });
                for(let i = n.get_rect_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteRect",
                    idx: i,
                    rect: Oc(n, i)
                });
                for(let i = n.get_line_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteLine",
                    idx: i,
                    line: Lc(n, i)
                });
                const l = n.get_filled_cells();
                for(let i = 0; i + 2 < l.length; i += 3){
                    const s = l[i], a = l[i + 1], u = l[i + 2];
                    o.push({
                        kind: "setCellState",
                        row: s,
                        col: a,
                        from: {
                            filled: !0,
                            color: u
                        },
                        to: {
                            filled: !1,
                            color: u
                        }
                    });
                }
                t().commitEdits(o), e({
                    selectedItems: []
                }), r();
            },
            renderSelection: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (n) {
                    n.render();
                    for (const o of r)o.type === "cell" ? n.highlight_cell(o.row, o.col) : o.type === "line" ? n.highlight_line(o.index) : o.type === "rect" ? n.highlight_rect(o.index) : o.type === "text" && n.highlight_text(o.index);
                    if (r.length === 1) {
                        const o = r[0];
                        if (o.type === "line") {
                            const l = Ls(n.get_line(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "rect") {
                            const l = Os(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = Ge(r, n);
                        if (o) {
                            const l = js(o);
                            n.draw_rotate_handle(l.r, l.c, o.minRow, l.c);
                        }
                    }
                }
            },
            getSelectedCells: ()=>{
                const { selectedItems: n } = t();
                return n.filter((r)=>r.type === "cell").map((r)=>({
                        row: r.row,
                        col: r.col
                    }));
            }
        })), Bc = 5;
    function Vy(e) {
        const t = e.get_schema_version?.();
        (t !== Bc || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${Bc}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function Wy(e, t, n) {
        const [r, o] = N.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = N.useRef(!1);
        return N.useEffect(()=>{
            if (l.current) return;
            const i = e.current;
            i && (l.current = !0, (async ()=>{
                try {
                    const s = await Rp(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    Vy(a), et.getState().setGrid(a), o({
                        grid: a,
                        loading: !1,
                        error: null,
                        initialized: !0
                    }), typeof document < "u" && document.fonts?.load && document.fonts.load("16px 'BigBlue Terminal'").then(()=>a.render()).catch(()=>{});
                } catch (s) {
                    l.current = !1, o((a)=>({
                            ...a,
                            loading: !1,
                            error: s instanceof Error ? s.message : String(s)
                        }));
                }
            })());
        }, [
            e.current,
            t,
            n
        ]), r;
    }
    const Lp = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const Gy = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const Hy = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const Uc = (e)=>{
        const t = Hy(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var Ky = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    const Qy = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const Yy = N.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>N.createElement("svg", {
            ref: a,
            ...Ky,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Lp("lucide", o),
            ...!l && !Qy(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, c])=>N.createElement(u, c)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const Op = (e, t)=>{
        const n = N.forwardRef(({ className: r, ...o }, l)=>N.createElement(Yy, {
                ref: l,
                iconNode: t,
                className: Lp(`lucide-${Gy(Uc(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = Uc(e), n;
    };
    const Xy = [
        [
            "path",
            {
                d: "m15 14 5-5-5-5",
                key: "12vg1m"
            }
        ],
        [
            "path",
            {
                d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
                key: "6uklza"
            }
        ]
    ], Zy = Op("redo-2", Xy);
    const Jy = [
        [
            "path",
            {
                d: "M9 14 4 9l5-5",
                key: "102s5s"
            }
        ],
        [
            "path",
            {
                d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
                key: "f3b9sd"
            }
        ]
    ], qy = Op("undo-2", Jy);
    function Dp(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Dp(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function bp() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Dp(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Vc = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Wc = bp, Ap = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Wc(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const c = n?.[u], d = l?.[u];
                if (c === null) return null;
                const f = Vc(c) || Vc(d);
                return o[u][f];
            }), s = n && Object.entries(n).reduce((u, c)=>{
                let [d, f] = c;
                return f === void 0 || (u[d] = f), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c)=>{
                let { class: d, className: f, ...x } = c;
                return Object.entries(x).every((v)=>{
                    let [h, k] = v;
                    return Array.isArray(k) ? k.includes({
                        ...l,
                        ...s
                    }[h]) : {
                        ...l,
                        ...s
                    }[h] === k;
                }) ? [
                    ...u,
                    d,
                    f
                ] : u;
            }, []);
            return Wc(e, i, a, n?.class, n?.className);
        };
    function Gc(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Fp(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Gc(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Gc(e[o], null);
                }
            };
        };
    }
    function Ds(...e) {
        return N.useCallback(Fp(...e), e);
    }
    function Ml(e) {
        const t = tv(e), n = N.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = N.Children.toArray(l), a = s.find(rv);
            if (a) {
                const u = a.props.children, c = s.map((d)=>d === a ? N.Children.count(u) > 1 ? N.Children.only(null) : N.isValidElement(u) ? u.props.children : null : d);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: N.isValidElement(u) ? N.cloneElement(u, void 0, c) : null
                });
            }
            return y.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var ev = Ml("Slot");
    function tv(e) {
        const t = N.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (N.isValidElement(o)) {
                const i = lv(o), s = ov(l, o.props);
                return o.type !== N.Fragment && (s.ref = r ? Fp(r, i) : i), N.cloneElement(o, s);
            }
            return N.Children.count(o) > 1 ? N.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var nv = Symbol("radix.slottable");
    function rv(e) {
        return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === nv;
    }
    function ov(e, t) {
        const n = {
            ...t
        };
        for(const r in t){
            const o = e[r], l = t[r];
            /^on[A-Z]/.test(r) ? o && l ? n[r] = (...s)=>{
                const a = l(...s);
                return o(...s), a;
            } : o && (n[r] = o) : r === "style" ? n[r] = {
                ...o,
                ...l
            } : r === "className" && (n[r] = [
                o,
                l
            ].filter(Boolean).join(" "));
        }
        return {
            ...e,
            ...n
        };
    }
    function lv(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var iv = [
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
    ], co = iv.reduce((e, t)=>{
        const n = Ml(`Primitive.${t}`), r = N.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, a = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), y.jsx(a, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function Aa(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = N.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (d)=>{
                const { scope: f, children: x, ...v } = d, h = f?.[e]?.[a] || s, k = N.useMemo(()=>v, Object.values(v));
                return y.jsx(h.Provider, {
                    value: k,
                    children: x
                });
            };
            u.displayName = l + "Provider";
            function c(d, f) {
                const x = f?.[e]?.[a] || s, v = N.useContext(x);
                if (v) return v;
                if (i !== void 0) return i;
                throw new Error(`\`${d}\` must be used within \`${l}\``);
            }
            return [
                u,
                c
            ];
        }
        const o = ()=>{
            const l = n.map((i)=>N.createContext(i));
            return function(s) {
                const a = s?.[e] || l;
                return N.useMemo(()=>({
                        [`__scope${e}`]: {
                            ...s,
                            [e]: a
                        }
                    }), [
                    s,
                    a
                ]);
            };
        };
        return o.scopeName = e, [
            r,
            sv(o, ...t)
        ];
    }
    function sv(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: a, scopeName: u })=>{
                    const d = a(l)[`__scope${u}`];
                    return {
                        ...s,
                        ...d
                    };
                }, {});
                return N.useMemo(()=>({
                        [`__scope${t.scopeName}`]: i
                    }), [
                    i
                ]);
            };
        };
        return n.scopeName = t.scopeName, n;
    }
    function av(e) {
        const t = e + "CollectionProvider", [n, r] = Aa(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (h)=>{
            const { scope: k, children: g } = h, m = le.useRef(null), p = le.useRef(new Map).current;
            return y.jsx(o, {
                scope: k,
                itemMap: p,
                collectionRef: m,
                children: g
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = Ml(s), u = le.forwardRef((h, k)=>{
            const { scope: g, children: m } = h, p = l(s, g), S = Ds(k, p.collectionRef);
            return y.jsx(a, {
                ref: S,
                children: m
            });
        });
        u.displayName = s;
        const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = Ml(c), x = le.forwardRef((h, k)=>{
            const { scope: g, children: m, ...p } = h, S = le.useRef(null), E = Ds(k, S), z = l(c, g);
            return le.useEffect(()=>(z.itemMap.set(S, {
                    ref: S,
                    ...p
                }), ()=>void z.itemMap.delete(S))), y.jsx(f, {
                [d]: "",
                ref: E,
                children: m
            });
        });
        x.displayName = c;
        function v(h) {
            const k = l(e + "CollectionConsumer", h);
            return le.useCallback(()=>{
                const m = k.collectionRef.current;
                if (!m) return [];
                const p = Array.from(m.querySelectorAll(`[${d}]`));
                return Array.from(k.itemMap.values()).sort((z, P)=>p.indexOf(z.ref.current) - p.indexOf(P.ref.current));
            }, [
                k.collectionRef,
                k.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: u,
                ItemSlot: x
            },
            v,
            r
        ];
    }
    function In(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var $p = globalThis?.document ? N.useLayoutEffect : ()=>{}, uv = _d[" useInsertionEffect ".trim().toString()] || $p;
    function Zl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = cv({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, a = s ? e : o;
        {
            const c = N.useRef(e !== void 0);
            N.useEffect(()=>{
                const d = c.current;
                d !== s && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = s;
            }, [
                s,
                r
            ]);
        }
        const u = N.useCallback((c)=>{
            if (s) {
                const d = dv(c) ? c(e) : c;
                d !== e && i.current?.(d);
            } else l(c);
        }, [
            s,
            e,
            l,
            i
        ]);
        return [
            a,
            u
        ];
    }
    function cv({ defaultProp: e, onChange: t }) {
        const [n, r] = N.useState(e), o = N.useRef(n), l = N.useRef(t);
        return uv(()=>{
            l.current = t;
        }, [
            t
        ]), N.useEffect(()=>{
            o.current !== n && (l.current?.(n), o.current = n);
        }, [
            n,
            o
        ]), [
            n,
            r,
            l
        ];
    }
    function dv(e) {
        return typeof e == "function";
    }
    var fv = _d[" useId ".trim().toString()] || (()=>{}), pv = 0;
    function mv(e) {
        const [t, n] = N.useState(fv());
        return $p(()=>{
            n((r)=>r ?? String(pv++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var hv = N.createContext(void 0);
    function Bp(e) {
        const t = N.useContext(hv);
        return e || t || "ltr";
    }
    function gv(e) {
        const t = N.useRef(e);
        return N.useEffect(()=>{
            t.current = e;
        }), N.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Oi = "rovingFocusGroup.onEntryFocus", yv = {
        bubbles: !1,
        cancelable: !0
    }, vo = "RovingFocusGroup", [bs, Up, vv] = av(vo), [xv, Vp] = Aa(vo, [
        vv
    ]), [wv, kv] = xv(vo), Wp = N.forwardRef((e, t)=>y.jsx(bs.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: y.jsx(bs.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: y.jsx(Sv, {
                    ...e,
                    ref: t
                })
            })
        }));
    Wp.displayName = vo;
    var Sv = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: c = !1, ...d } = e, f = N.useRef(null), x = Ds(t, f), v = Bp(l), [h, k] = Zl({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: vo
        }), [g, m] = N.useState(!1), p = gv(u), S = Up(n), E = N.useRef(!1), [z, P] = N.useState(0);
        return N.useEffect(()=>{
            const _ = f.current;
            if (_) return _.addEventListener(Oi, p), ()=>_.removeEventListener(Oi, p);
        }, [
            p
        ]), y.jsx(wv, {
            scope: n,
            orientation: r,
            dir: v,
            loop: o,
            currentTabStopId: h,
            onItemFocus: N.useCallback((_)=>k(_), [
                k
            ]),
            onItemShiftTab: N.useCallback(()=>m(!0), []),
            onFocusableItemAdd: N.useCallback(()=>P((_)=>_ + 1), []),
            onFocusableItemRemove: N.useCallback(()=>P((_)=>_ - 1), []),
            children: y.jsx(co.div, {
                tabIndex: g || z === 0 ? -1 : 0,
                "data-orientation": r,
                ...d,
                ref: x,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: In(e.onMouseDown, ()=>{
                    E.current = !0;
                }),
                onFocus: In(e.onFocus, (_)=>{
                    const B = !E.current;
                    if (_.target === _.currentTarget && B && !g) {
                        const F = new CustomEvent(Oi, yv);
                        if (_.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                            const ge = S().filter((J)=>J.focusable), Pe = ge.find((J)=>J.active), Ue = ge.find((J)=>J.id === h), Ve = [
                                Pe,
                                Ue,
                                ...ge
                            ].filter(Boolean).map((J)=>J.ref.current);
                            Kp(Ve, c);
                        }
                    }
                    E.current = !1;
                }),
                onBlur: In(e.onBlur, ()=>m(!1))
            })
        });
    }), Gp = "RovingFocusGroupItem", Hp = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = mv(), u = l || a, c = kv(Gp, n), d = c.currentTabStopId === u, f = Up(n), { onFocusableItemAdd: x, onFocusableItemRemove: v, currentTabStopId: h } = c;
        return N.useEffect(()=>{
            if (r) return x(), ()=>v();
        }, [
            r,
            x,
            v
        ]), y.jsx(bs.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: y.jsx(co.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": c.orientation,
                ...s,
                ref: t,
                onMouseDown: In(e.onMouseDown, (k)=>{
                    r ? c.onItemFocus(u) : k.preventDefault();
                }),
                onFocus: In(e.onFocus, ()=>c.onItemFocus(u)),
                onKeyDown: In(e.onKeyDown, (k)=>{
                    if (k.key === "Tab" && k.shiftKey) {
                        c.onItemShiftTab();
                        return;
                    }
                    if (k.target !== k.currentTarget) return;
                    const g = Ev(k, c.orientation, c.dir);
                    if (g !== void 0) {
                        if (k.metaKey || k.ctrlKey || k.altKey || k.shiftKey) return;
                        k.preventDefault();
                        let p = f().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (g === "last") p.reverse();
                        else if (g === "prev" || g === "next") {
                            g === "prev" && p.reverse();
                            const S = p.indexOf(k.currentTarget);
                            p = c.loop ? Nv(p, S + 1) : p.slice(S + 1);
                        }
                        setTimeout(()=>Kp(p));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: d,
                    hasTabStop: h != null
                }) : i
            })
        });
    });
    Hp.displayName = Gp;
    var Cv = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function _v(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function Ev(e, t, n) {
        const r = _v(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return Cv[r];
    }
    function Kp(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function Nv(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Iv = Wp, Rv = Hp, Qp = "Toggle", Yp = N.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = Zl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Qp
        });
        return y.jsx(co.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: In(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Yp.displayName = Qp;
    var un = "ToggleGroup", [Xp] = Aa(un, [
        Vp
    ]), Zp = Vp(), Fa = le.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return y.jsx(zv, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return y.jsx(Tv, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${un}\``);
    });
    Fa.displayName = un;
    var [Jp, qp] = Xp(un), zv = le.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Zl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: un
        });
        return y.jsx(Jp, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: le.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: le.useCallback(()=>s(""), [
                s
            ]),
            children: y.jsx(em, {
                ...l,
                ref: t
            })
        });
    }), Tv = le.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Zl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: un
        }), a = le.useCallback((c)=>s((d = [])=>[
                    ...d,
                    c
                ]), [
            s
        ]), u = le.useCallback((c)=>s((d = [])=>d.filter((f)=>f !== c)), [
            s
        ]);
        return y.jsx(Jp, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: y.jsx(em, {
                ...l,
                ref: t
            })
        });
    });
    Fa.displayName = un;
    var [Pv, Mv] = Xp(un), em = le.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = Zp(n), c = Bp(i), d = {
            role: "group",
            dir: c,
            ...a
        };
        return y.jsx(Pv, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? y.jsx(Iv, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: c,
                loop: s,
                children: y.jsx(co.div, {
                    ...d,
                    ref: t
                })
            }) : y.jsx(co.div, {
                ...d,
                ref: t
            })
        });
    }), jl = "ToggleGroupItem", tm = le.forwardRef((e, t)=>{
        const n = qp(jl, e.__scopeToggleGroup), r = Mv(jl, e.__scopeToggleGroup), o = Zp(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = le.useRef(null);
        return r.rovingFocus ? y.jsx(Rv, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: y.jsx(Hc, {
                ...s,
                ref: t
            })
        }) : y.jsx(Hc, {
            ...s,
            ref: t
        });
    });
    tm.displayName = jl;
    var Hc = le.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = qp(jl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return y.jsx(Yp, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), jv = Fa, Lv = tm;
    const Ov = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Dv = (e, t)=>({
            classGroupId: e,
            validator: t
        }), nm = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Ll = "-", Kc = [], bv = "arbitrary..", Av = (e)=>{
        const t = $v(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Fv(i);
                const s = i.split(Ll), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return rm(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Ov(u, a) : a : u || Kc;
                }
                return n[i] || Kc;
            }
        };
    }, rm = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = rm(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Ll) : e.slice(t).join(Ll), a = i.length;
        for(let u = 0; u < a; u++){
            const c = i[u];
            if (c.validator(s)) return c.classGroupId;
        }
    }, Fv = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? bv + r : void 0;
        })(), $v = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Bv(n, t);
    }, Bv = (e, t)=>{
        const n = nm();
        for(const r in e){
            const o = e[r];
            $a(o, n, r, t);
        }
        return n;
    }, $a = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Uv(i, t, n, r);
        }
    }, Uv = (e, t, n, r)=>{
        if (typeof e == "string") {
            Vv(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Wv(e, t, n, r);
            return;
        }
        Gv(e, t, n, r);
    }, Vv = (e, t, n)=>{
        const r = e === "" ? t : om(t, e);
        r.classGroupId = n;
    }, Wv = (e, t, n, r)=>{
        if (Hv(e)) {
            $a(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Dv(n, e));
    }, Gv = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            $a(a, om(t, s), n, r);
        }
    }, om = (e, t)=>{
        let n = e;
        const r = t.split(Ll), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = nm(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Hv = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Kv = (e)=>{
        if (e < 1) return {
            get: ()=>{},
            set: ()=>{}
        };
        let t = 0, n = Object.create(null), r = Object.create(null);
        const o = (l, i)=>{
            n[l] = i, t++, t > e && (t = 0, r = n, n = Object.create(null));
        };
        return {
            get (l) {
                let i = n[l];
                if (i !== void 0) return i;
                if ((i = r[l]) !== void 0) return o(l, i), i;
            },
            set (l, i) {
                l in n ? n[l] = i : o(l, i);
            }
        };
    }, As = "!", Qc = ":", Qv = [], Yc = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Yv = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const c = o.length;
            for(let h = 0; h < c; h++){
                const k = o[h];
                if (i === 0 && s === 0) {
                    if (k === Qc) {
                        l.push(o.slice(a, h)), a = h + 1;
                        continue;
                    }
                    if (k === "/") {
                        u = h;
                        continue;
                    }
                }
                k === "[" ? i++ : k === "]" ? i-- : k === "(" ? s++ : k === ")" && s--;
            }
            const d = l.length === 0 ? o : o.slice(a);
            let f = d, x = !1;
            d.endsWith(As) ? (f = d.slice(0, -1), x = !0) : d.startsWith(As) && (f = d.slice(1), x = !0);
            const v = u && u > a ? u - a : void 0;
            return Yc(l, x, f, v);
        };
        if (t) {
            const o = t + Qc, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Yc(Qv, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Xv = (e)=>{
        const t = new Map;
        return e.orderSensitiveModifiers.forEach((n, r)=>{
            t.set(n, 1e6 + r);
        }), (n)=>{
            const r = [];
            let o = [];
            for(let l = 0; l < n.length; l++){
                const i = n[l], s = i[0] === "[", a = t.has(i);
                s || a ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
            }
            return o.length > 0 && (o.sort(), r.push(...o)), r;
        };
    }, Zv = (e)=>({
            cache: Kv(e.cacheSize),
            parseClassName: Yv(e),
            sortModifiers: Xv(e),
            ...Av(e)
        }), Jv = /\s+/, qv = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Jv);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const c = s[u], { isExternal: d, modifiers: f, hasImportantModifier: x, baseClassName: v, maybePostfixModifierPosition: h } = n(c);
            if (d) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            let k = !!h, g = r(k ? v.substring(0, h) : v);
            if (!g) {
                if (!k) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (g = r(v), !g) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                k = !1;
            }
            const m = f.length === 0 ? "" : f.length === 1 ? f[0] : l(f).join(":"), p = x ? m + As : m, S = p + g;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const E = o(g, k);
            for(let z = 0; z < E.length; ++z){
                const P = E[z];
                i.push(p + P);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, ex = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = lm(n)) && (o && (o += " "), o += r);
        return o;
    }, lm = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = lm(e[r])) && (n && (n += " "), n += t);
        return n;
    }, tx = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((c, d)=>d(c), e());
            return n = Zv(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const c = qv(a, n);
            return o(a, c), c;
        };
        return l = i, (...a)=>l(ex(...a));
    }, nx = [], ve = (e)=>{
        const t = (n)=>n[e] || nx;
        return t.isThemeGetter = !0, t;
    }, im = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, sm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, rx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ox = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ix = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, sx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ax = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e)=>rx.test(e), U = (e)=>!!e && !Number.isNaN(Number(e)), Bt = (e)=>!!e && Number.isInteger(Number(e)), Di = (e)=>e.endsWith("%") && U(e.slice(0, -1)), _t = (e)=>ox.test(e), am = ()=>!0, ux = (e)=>lx.test(e) && !ix.test(e), Ba = ()=>!1, cx = (e)=>sx.test(e), dx = (e)=>ax.test(e), fx = (e)=>!L(e) && !O(e), px = (e)=>cn(e, dm, Ba), L = (e)=>im.test(e), yn = (e)=>cn(e, fm, ux), Xc = (e)=>cn(e, kx, U), mx = (e)=>cn(e, mm, am), hx = (e)=>cn(e, pm, Ba), Zc = (e)=>cn(e, um, Ba), gx = (e)=>cn(e, cm, dx), Go = (e)=>cn(e, hm, cx), O = (e)=>sm.test(e), Mr = (e)=>Dn(e, fm), yx = (e)=>Dn(e, pm), Jc = (e)=>Dn(e, um), vx = (e)=>Dn(e, dm), xx = (e)=>Dn(e, cm), Ho = (e)=>Dn(e, hm, !0), wx = (e)=>Dn(e, mm, !0), cn = (e, t, n)=>{
        const r = im.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, Dn = (e, t, n = !1)=>{
        const r = sm.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, um = (e)=>e === "position" || e === "percentage", cm = (e)=>e === "image" || e === "url", dm = (e)=>e === "length" || e === "size" || e === "bg-size", fm = (e)=>e === "length", kx = (e)=>e === "number", pm = (e)=>e === "family-name", mm = (e)=>e === "number" || e === "weight", hm = (e)=>e === "shadow", Sx = ()=>{
        const e = ve("color"), t = ve("font"), n = ve("text"), r = ve("font-weight"), o = ve("tracking"), l = ve("leading"), i = ve("breakpoint"), s = ve("container"), a = ve("spacing"), u = ve("radius"), c = ve("shadow"), d = ve("inset-shadow"), f = ve("text-shadow"), x = ve("drop-shadow"), v = ve("blur"), h = ve("perspective"), k = ve("aspect"), g = ve("ease"), m = ve("animate"), p = ()=>[
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column"
            ], S = ()=>[
                "center",
                "top",
                "bottom",
                "left",
                "right",
                "top-left",
                "left-top",
                "top-right",
                "right-top",
                "bottom-right",
                "right-bottom",
                "bottom-left",
                "left-bottom"
            ], E = ()=>[
                ...S(),
                O,
                L
            ], z = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], P = ()=>[
                "auto",
                "contain",
                "none"
            ], _ = ()=>[
                O,
                L,
                a
            ], B = ()=>[
                $t,
                "full",
                "auto",
                ..._()
            ], F = ()=>[
                Bt,
                "none",
                "subgrid",
                O,
                L
            ], ge = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Bt,
                        O,
                        L
                    ]
                },
                Bt,
                O,
                L
            ], Pe = ()=>[
                Bt,
                "auto",
                O,
                L
            ], Ue = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                O,
                L
            ], ht = ()=>[
                "start",
                "end",
                "center",
                "between",
                "around",
                "evenly",
                "stretch",
                "baseline",
                "center-safe",
                "end-safe"
            ], Ve = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], J = ()=>[
                "auto",
                ..._()
            ], $ = ()=>[
                $t,
                "auto",
                "full",
                "dvw",
                "dvh",
                "lvw",
                "lvh",
                "svw",
                "svh",
                "min",
                "max",
                "fit",
                ..._()
            ], M = ()=>[
                $t,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ..._()
            ], b = ()=>[
                $t,
                "screen",
                "full",
                "lh",
                "dvh",
                "lvh",
                "svh",
                "min",
                "max",
                "fit",
                ..._()
            ], R = ()=>[
                e,
                O,
                L
            ], Y = ()=>[
                ...S(),
                Jc,
                Zc,
                {
                    position: [
                        O,
                        L
                    ]
                }
            ], re = ()=>[
                "no-repeat",
                {
                    repeat: [
                        "",
                        "x",
                        "y",
                        "space",
                        "round"
                    ]
                }
            ], gt = ()=>[
                "auto",
                "cover",
                "contain",
                vx,
                px,
                {
                    size: [
                        O,
                        L
                    ]
                }
            ], K = ()=>[
                Di,
                Mr,
                yn
            ], X = ()=>[
                "",
                "none",
                "full",
                u,
                O,
                L
            ], q = ()=>[
                "",
                U,
                Mr,
                yn
            ], De = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], vr = ()=>[
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity"
            ], me = ()=>[
                U,
                Di,
                Jc,
                Zc
            ], xr = ()=>[
                "",
                "none",
                v,
                O,
                L
            ], dn = ()=>[
                "none",
                U,
                O,
                L
            ], Ct = ()=>[
                "none",
                U,
                O,
                L
            ], bn = ()=>[
                U,
                O,
                L
            ], fn = ()=>[
                $t,
                "full",
                ..._()
            ];
        return {
            cacheSize: 500,
            theme: {
                animate: [
                    "spin",
                    "ping",
                    "pulse",
                    "bounce"
                ],
                aspect: [
                    "video"
                ],
                blur: [
                    _t
                ],
                breakpoint: [
                    _t
                ],
                color: [
                    am
                ],
                container: [
                    _t
                ],
                "drop-shadow": [
                    _t
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    fx
                ],
                "font-weight": [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black"
                ],
                "inset-shadow": [
                    _t
                ],
                leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose"
                ],
                perspective: [
                    "dramatic",
                    "near",
                    "normal",
                    "midrange",
                    "distant",
                    "none"
                ],
                radius: [
                    _t
                ],
                shadow: [
                    _t
                ],
                spacing: [
                    "px",
                    U
                ],
                text: [
                    _t
                ],
                "text-shadow": [
                    _t
                ],
                tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest"
                ]
            },
            classGroups: {
                aspect: [
                    {
                        aspect: [
                            "auto",
                            "square",
                            $t,
                            L,
                            O,
                            k
                        ]
                    }
                ],
                container: [
                    "container"
                ],
                columns: [
                    {
                        columns: [
                            U,
                            L,
                            O,
                            s
                        ]
                    }
                ],
                "break-after": [
                    {
                        "break-after": p()
                    }
                ],
                "break-before": [
                    {
                        "break-before": p()
                    }
                ],
                "break-inside": [
                    {
                        "break-inside": [
                            "auto",
                            "avoid",
                            "avoid-page",
                            "avoid-column"
                        ]
                    }
                ],
                "box-decoration": [
                    {
                        "box-decoration": [
                            "slice",
                            "clone"
                        ]
                    }
                ],
                box: [
                    {
                        box: [
                            "border",
                            "content"
                        ]
                    }
                ],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden"
                ],
                sr: [
                    "sr-only",
                    "not-sr-only"
                ],
                float: [
                    {
                        float: [
                            "right",
                            "left",
                            "none",
                            "start",
                            "end"
                        ]
                    }
                ],
                clear: [
                    {
                        clear: [
                            "left",
                            "right",
                            "both",
                            "none",
                            "start",
                            "end"
                        ]
                    }
                ],
                isolation: [
                    "isolate",
                    "isolation-auto"
                ],
                "object-fit": [
                    {
                        object: [
                            "contain",
                            "cover",
                            "fill",
                            "none",
                            "scale-down"
                        ]
                    }
                ],
                "object-position": [
                    {
                        object: E()
                    }
                ],
                overflow: [
                    {
                        overflow: z()
                    }
                ],
                "overflow-x": [
                    {
                        "overflow-x": z()
                    }
                ],
                "overflow-y": [
                    {
                        "overflow-y": z()
                    }
                ],
                overscroll: [
                    {
                        overscroll: P()
                    }
                ],
                "overscroll-x": [
                    {
                        "overscroll-x": P()
                    }
                ],
                "overscroll-y": [
                    {
                        "overscroll-y": P()
                    }
                ],
                position: [
                    "static",
                    "fixed",
                    "absolute",
                    "relative",
                    "sticky"
                ],
                inset: [
                    {
                        inset: B()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": B()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": B()
                    }
                ],
                start: [
                    {
                        "inset-s": B(),
                        start: B()
                    }
                ],
                end: [
                    {
                        "inset-e": B(),
                        end: B()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": B()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": B()
                    }
                ],
                top: [
                    {
                        top: B()
                    }
                ],
                right: [
                    {
                        right: B()
                    }
                ],
                bottom: [
                    {
                        bottom: B()
                    }
                ],
                left: [
                    {
                        left: B()
                    }
                ],
                visibility: [
                    "visible",
                    "invisible",
                    "collapse"
                ],
                z: [
                    {
                        z: [
                            Bt,
                            "auto",
                            O,
                            L
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            $t,
                            "full",
                            "auto",
                            s,
                            ..._()
                        ]
                    }
                ],
                "flex-direction": [
                    {
                        flex: [
                            "row",
                            "row-reverse",
                            "col",
                            "col-reverse"
                        ]
                    }
                ],
                "flex-wrap": [
                    {
                        flex: [
                            "nowrap",
                            "wrap",
                            "wrap-reverse"
                        ]
                    }
                ],
                flex: [
                    {
                        flex: [
                            U,
                            $t,
                            "auto",
                            "initial",
                            "none",
                            L
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            Bt,
                            "first",
                            "last",
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                "grid-cols": [
                    {
                        "grid-cols": F()
                    }
                ],
                "col-start-end": [
                    {
                        col: ge()
                    }
                ],
                "col-start": [
                    {
                        "col-start": Pe()
                    }
                ],
                "col-end": [
                    {
                        "col-end": Pe()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": F()
                    }
                ],
                "row-start-end": [
                    {
                        row: ge()
                    }
                ],
                "row-start": [
                    {
                        "row-start": Pe()
                    }
                ],
                "row-end": [
                    {
                        "row-end": Pe()
                    }
                ],
                "grid-flow": [
                    {
                        "grid-flow": [
                            "row",
                            "col",
                            "dense",
                            "row-dense",
                            "col-dense"
                        ]
                    }
                ],
                "auto-cols": [
                    {
                        "auto-cols": Ue()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": Ue()
                    }
                ],
                gap: [
                    {
                        gap: _()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": _()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": _()
                    }
                ],
                "justify-content": [
                    {
                        justify: [
                            ...ht(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...Ve(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...Ve()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...ht()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...Ve(),
                            {
                                baseline: [
                                    "",
                                    "last"
                                ]
                            }
                        ]
                    }
                ],
                "align-self": [
                    {
                        self: [
                            "auto",
                            ...Ve(),
                            {
                                baseline: [
                                    "",
                                    "last"
                                ]
                            }
                        ]
                    }
                ],
                "place-content": [
                    {
                        "place-content": ht()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...Ve(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...Ve()
                        ]
                    }
                ],
                p: [
                    {
                        p: _()
                    }
                ],
                px: [
                    {
                        px: _()
                    }
                ],
                py: [
                    {
                        py: _()
                    }
                ],
                ps: [
                    {
                        ps: _()
                    }
                ],
                pe: [
                    {
                        pe: _()
                    }
                ],
                pbs: [
                    {
                        pbs: _()
                    }
                ],
                pbe: [
                    {
                        pbe: _()
                    }
                ],
                pt: [
                    {
                        pt: _()
                    }
                ],
                pr: [
                    {
                        pr: _()
                    }
                ],
                pb: [
                    {
                        pb: _()
                    }
                ],
                pl: [
                    {
                        pl: _()
                    }
                ],
                m: [
                    {
                        m: J()
                    }
                ],
                mx: [
                    {
                        mx: J()
                    }
                ],
                my: [
                    {
                        my: J()
                    }
                ],
                ms: [
                    {
                        ms: J()
                    }
                ],
                me: [
                    {
                        me: J()
                    }
                ],
                mbs: [
                    {
                        mbs: J()
                    }
                ],
                mbe: [
                    {
                        mbe: J()
                    }
                ],
                mt: [
                    {
                        mt: J()
                    }
                ],
                mr: [
                    {
                        mr: J()
                    }
                ],
                mb: [
                    {
                        mb: J()
                    }
                ],
                ml: [
                    {
                        ml: J()
                    }
                ],
                "space-x": [
                    {
                        "space-x": _()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": _()
                    }
                ],
                "space-y-reverse": [
                    "space-y-reverse"
                ],
                size: [
                    {
                        size: $()
                    }
                ],
                "inline-size": [
                    {
                        inline: [
                            "auto",
                            ...M()
                        ]
                    }
                ],
                "min-inline-size": [
                    {
                        "min-inline": [
                            "auto",
                            ...M()
                        ]
                    }
                ],
                "max-inline-size": [
                    {
                        "max-inline": [
                            "none",
                            ...M()
                        ]
                    }
                ],
                "block-size": [
                    {
                        block: [
                            "auto",
                            ...b()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...b()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...b()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...$()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...$()
                        ]
                    }
                ],
                "max-w": [
                    {
                        "max-w": [
                            s,
                            "screen",
                            "none",
                            "prose",
                            {
                                screen: [
                                    i
                                ]
                            },
                            ...$()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...$()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...$()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...$()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            Mr,
                            yn
                        ]
                    }
                ],
                "font-smoothing": [
                    "antialiased",
                    "subpixel-antialiased"
                ],
                "font-style": [
                    "italic",
                    "not-italic"
                ],
                "font-weight": [
                    {
                        font: [
                            r,
                            wx,
                            mx
                        ]
                    }
                ],
                "font-stretch": [
                    {
                        "font-stretch": [
                            "ultra-condensed",
                            "extra-condensed",
                            "condensed",
                            "semi-condensed",
                            "normal",
                            "semi-expanded",
                            "expanded",
                            "extra-expanded",
                            "ultra-expanded",
                            Di,
                            L
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            yx,
                            hx,
                            t
                        ]
                    }
                ],
                "font-features": [
                    {
                        "font-features": [
                            L
                        ]
                    }
                ],
                "fvn-normal": [
                    "normal-nums"
                ],
                "fvn-ordinal": [
                    "ordinal"
                ],
                "fvn-slashed-zero": [
                    "slashed-zero"
                ],
                "fvn-figure": [
                    "lining-nums",
                    "oldstyle-nums"
                ],
                "fvn-spacing": [
                    "proportional-nums",
                    "tabular-nums"
                ],
                "fvn-fraction": [
                    "diagonal-fractions",
                    "stacked-fractions"
                ],
                tracking: [
                    {
                        tracking: [
                            o,
                            O,
                            L
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            U,
                            "none",
                            O,
                            Xc
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ..._()
                        ]
                    }
                ],
                "list-image": [
                    {
                        "list-image": [
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                "list-style-position": [
                    {
                        list: [
                            "inside",
                            "outside"
                        ]
                    }
                ],
                "list-style-type": [
                    {
                        list: [
                            "disc",
                            "decimal",
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                "text-alignment": [
                    {
                        text: [
                            "left",
                            "center",
                            "right",
                            "justify",
                            "start",
                            "end"
                        ]
                    }
                ],
                "placeholder-color": [
                    {
                        placeholder: R()
                    }
                ],
                "text-color": [
                    {
                        text: R()
                    }
                ],
                "text-decoration": [
                    "underline",
                    "overline",
                    "line-through",
                    "no-underline"
                ],
                "text-decoration-style": [
                    {
                        decoration: [
                            ...De(),
                            "wavy"
                        ]
                    }
                ],
                "text-decoration-thickness": [
                    {
                        decoration: [
                            U,
                            "from-font",
                            "auto",
                            O,
                            yn
                        ]
                    }
                ],
                "text-decoration-color": [
                    {
                        decoration: R()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            U,
                            "auto",
                            O,
                            L
                        ]
                    }
                ],
                "text-transform": [
                    "uppercase",
                    "lowercase",
                    "capitalize",
                    "normal-case"
                ],
                "text-overflow": [
                    "truncate",
                    "text-ellipsis",
                    "text-clip"
                ],
                "text-wrap": [
                    {
                        text: [
                            "wrap",
                            "nowrap",
                            "balance",
                            "pretty"
                        ]
                    }
                ],
                indent: [
                    {
                        indent: _()
                    }
                ],
                "vertical-align": [
                    {
                        align: [
                            "baseline",
                            "top",
                            "middle",
                            "bottom",
                            "text-top",
                            "text-bottom",
                            "sub",
                            "super",
                            O,
                            L
                        ]
                    }
                ],
                whitespace: [
                    {
                        whitespace: [
                            "normal",
                            "nowrap",
                            "pre",
                            "pre-line",
                            "pre-wrap",
                            "break-spaces"
                        ]
                    }
                ],
                break: [
                    {
                        break: [
                            "normal",
                            "words",
                            "all",
                            "keep"
                        ]
                    }
                ],
                wrap: [
                    {
                        wrap: [
                            "break-word",
                            "anywhere",
                            "normal"
                        ]
                    }
                ],
                hyphens: [
                    {
                        hyphens: [
                            "none",
                            "manual",
                            "auto"
                        ]
                    }
                ],
                content: [
                    {
                        content: [
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                "bg-attachment": [
                    {
                        bg: [
                            "fixed",
                            "local",
                            "scroll"
                        ]
                    }
                ],
                "bg-clip": [
                    {
                        "bg-clip": [
                            "border",
                            "padding",
                            "content",
                            "text"
                        ]
                    }
                ],
                "bg-origin": [
                    {
                        "bg-origin": [
                            "border",
                            "padding",
                            "content"
                        ]
                    }
                ],
                "bg-position": [
                    {
                        bg: Y()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: re()
                    }
                ],
                "bg-size": [
                    {
                        bg: gt()
                    }
                ],
                "bg-image": [
                    {
                        bg: [
                            "none",
                            {
                                linear: [
                                    {
                                        to: [
                                            "t",
                                            "tr",
                                            "r",
                                            "br",
                                            "b",
                                            "bl",
                                            "l",
                                            "tl"
                                        ]
                                    },
                                    Bt,
                                    O,
                                    L
                                ],
                                radial: [
                                    "",
                                    O,
                                    L
                                ],
                                conic: [
                                    Bt,
                                    O,
                                    L
                                ]
                            },
                            xx,
                            gx
                        ]
                    }
                ],
                "bg-color": [
                    {
                        bg: R()
                    }
                ],
                "gradient-from-pos": [
                    {
                        from: K()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: K()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: K()
                    }
                ],
                "gradient-from": [
                    {
                        from: R()
                    }
                ],
                "gradient-via": [
                    {
                        via: R()
                    }
                ],
                "gradient-to": [
                    {
                        to: R()
                    }
                ],
                rounded: [
                    {
                        rounded: X()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": X()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": X()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": X()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": X()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": X()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": X()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": X()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": X()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": X()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": X()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": X()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": X()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": X()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": X()
                    }
                ],
                "border-w": [
                    {
                        border: q()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": q()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": q()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": q()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": q()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": q()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": q()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": q()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": q()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": q()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": q()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": q()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": q()
                    }
                ],
                "divide-y-reverse": [
                    "divide-y-reverse"
                ],
                "border-style": [
                    {
                        border: [
                            ...De(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...De(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "border-color": [
                    {
                        border: R()
                    }
                ],
                "border-color-x": [
                    {
                        "border-x": R()
                    }
                ],
                "border-color-y": [
                    {
                        "border-y": R()
                    }
                ],
                "border-color-s": [
                    {
                        "border-s": R()
                    }
                ],
                "border-color-e": [
                    {
                        "border-e": R()
                    }
                ],
                "border-color-bs": [
                    {
                        "border-bs": R()
                    }
                ],
                "border-color-be": [
                    {
                        "border-be": R()
                    }
                ],
                "border-color-t": [
                    {
                        "border-t": R()
                    }
                ],
                "border-color-r": [
                    {
                        "border-r": R()
                    }
                ],
                "border-color-b": [
                    {
                        "border-b": R()
                    }
                ],
                "border-color-l": [
                    {
                        "border-l": R()
                    }
                ],
                "divide-color": [
                    {
                        divide: R()
                    }
                ],
                "outline-style": [
                    {
                        outline: [
                            ...De(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            U,
                            Mr,
                            yn
                        ]
                    }
                ],
                "outline-color": [
                    {
                        outline: R()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            c,
                            Ho,
                            Go
                        ]
                    }
                ],
                "shadow-color": [
                    {
                        shadow: R()
                    }
                ],
                "inset-shadow": [
                    {
                        "inset-shadow": [
                            "none",
                            d,
                            Ho,
                            Go
                        ]
                    }
                ],
                "inset-shadow-color": [
                    {
                        "inset-shadow": R()
                    }
                ],
                "ring-w": [
                    {
                        ring: q()
                    }
                ],
                "ring-w-inset": [
                    "ring-inset"
                ],
                "ring-color": [
                    {
                        ring: R()
                    }
                ],
                "ring-offset-w": [
                    {
                        "ring-offset": [
                            U,
                            yn
                        ]
                    }
                ],
                "ring-offset-color": [
                    {
                        "ring-offset": R()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": q()
                    }
                ],
                "inset-ring-color": [
                    {
                        "inset-ring": R()
                    }
                ],
                "text-shadow": [
                    {
                        "text-shadow": [
                            "none",
                            f,
                            Ho,
                            Go
                        ]
                    }
                ],
                "text-shadow-color": [
                    {
                        "text-shadow": R()
                    }
                ],
                opacity: [
                    {
                        opacity: [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...vr(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": vr()
                    }
                ],
                "mask-clip": [
                    {
                        "mask-clip": [
                            "border",
                            "padding",
                            "content",
                            "fill",
                            "stroke",
                            "view"
                        ]
                    },
                    "mask-no-clip"
                ],
                "mask-composite": [
                    {
                        mask: [
                            "add",
                            "subtract",
                            "intersect",
                            "exclude"
                        ]
                    }
                ],
                "mask-image-linear-pos": [
                    {
                        "mask-linear": [
                            U
                        ]
                    }
                ],
                "mask-image-linear-from-pos": [
                    {
                        "mask-linear-from": me()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": me()
                    }
                ],
                "mask-image-linear-from-color": [
                    {
                        "mask-linear-from": R()
                    }
                ],
                "mask-image-linear-to-color": [
                    {
                        "mask-linear-to": R()
                    }
                ],
                "mask-image-t-from-pos": [
                    {
                        "mask-t-from": me()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": me()
                    }
                ],
                "mask-image-t-from-color": [
                    {
                        "mask-t-from": R()
                    }
                ],
                "mask-image-t-to-color": [
                    {
                        "mask-t-to": R()
                    }
                ],
                "mask-image-r-from-pos": [
                    {
                        "mask-r-from": me()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": me()
                    }
                ],
                "mask-image-r-from-color": [
                    {
                        "mask-r-from": R()
                    }
                ],
                "mask-image-r-to-color": [
                    {
                        "mask-r-to": R()
                    }
                ],
                "mask-image-b-from-pos": [
                    {
                        "mask-b-from": me()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": me()
                    }
                ],
                "mask-image-b-from-color": [
                    {
                        "mask-b-from": R()
                    }
                ],
                "mask-image-b-to-color": [
                    {
                        "mask-b-to": R()
                    }
                ],
                "mask-image-l-from-pos": [
                    {
                        "mask-l-from": me()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": me()
                    }
                ],
                "mask-image-l-from-color": [
                    {
                        "mask-l-from": R()
                    }
                ],
                "mask-image-l-to-color": [
                    {
                        "mask-l-to": R()
                    }
                ],
                "mask-image-x-from-pos": [
                    {
                        "mask-x-from": me()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": me()
                    }
                ],
                "mask-image-x-from-color": [
                    {
                        "mask-x-from": R()
                    }
                ],
                "mask-image-x-to-color": [
                    {
                        "mask-x-to": R()
                    }
                ],
                "mask-image-y-from-pos": [
                    {
                        "mask-y-from": me()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": me()
                    }
                ],
                "mask-image-y-from-color": [
                    {
                        "mask-y-from": R()
                    }
                ],
                "mask-image-y-to-color": [
                    {
                        "mask-y-to": R()
                    }
                ],
                "mask-image-radial": [
                    {
                        "mask-radial": [
                            O,
                            L
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": me()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": me()
                    }
                ],
                "mask-image-radial-from-color": [
                    {
                        "mask-radial-from": R()
                    }
                ],
                "mask-image-radial-to-color": [
                    {
                        "mask-radial-to": R()
                    }
                ],
                "mask-image-radial-shape": [
                    {
                        "mask-radial": [
                            "circle",
                            "ellipse"
                        ]
                    }
                ],
                "mask-image-radial-size": [
                    {
                        "mask-radial": [
                            {
                                closest: [
                                    "side",
                                    "corner"
                                ],
                                farthest: [
                                    "side",
                                    "corner"
                                ]
                            }
                        ]
                    }
                ],
                "mask-image-radial-pos": [
                    {
                        "mask-radial-at": S()
                    }
                ],
                "mask-image-conic-pos": [
                    {
                        "mask-conic": [
                            U
                        ]
                    }
                ],
                "mask-image-conic-from-pos": [
                    {
                        "mask-conic-from": me()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": me()
                    }
                ],
                "mask-image-conic-from-color": [
                    {
                        "mask-conic-from": R()
                    }
                ],
                "mask-image-conic-to-color": [
                    {
                        "mask-conic-to": R()
                    }
                ],
                "mask-mode": [
                    {
                        mask: [
                            "alpha",
                            "luminance",
                            "match"
                        ]
                    }
                ],
                "mask-origin": [
                    {
                        "mask-origin": [
                            "border",
                            "padding",
                            "content",
                            "fill",
                            "stroke",
                            "view"
                        ]
                    }
                ],
                "mask-position": [
                    {
                        mask: Y()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: re()
                    }
                ],
                "mask-size": [
                    {
                        mask: gt()
                    }
                ],
                "mask-type": [
                    {
                        "mask-type": [
                            "alpha",
                            "luminance"
                        ]
                    }
                ],
                "mask-image": [
                    {
                        mask: [
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                blur: [
                    {
                        blur: xr()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            x,
                            Ho,
                            Go
                        ]
                    }
                ],
                "drop-shadow-color": [
                    {
                        "drop-shadow": R()
                    }
                ],
                grayscale: [
                    {
                        grayscale: [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": xr()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            U,
                            O,
                            L
                        ]
                    }
                ],
                "border-collapse": [
                    {
                        border: [
                            "collapse",
                            "separate"
                        ]
                    }
                ],
                "border-spacing": [
                    {
                        "border-spacing": _()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": _()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": _()
                    }
                ],
                "table-layout": [
                    {
                        table: [
                            "auto",
                            "fixed"
                        ]
                    }
                ],
                caption: [
                    {
                        caption: [
                            "top",
                            "bottom"
                        ]
                    }
                ],
                transition: [
                    {
                        transition: [
                            "",
                            "all",
                            "colors",
                            "opacity",
                            "shadow",
                            "transform",
                            "none",
                            O,
                            L
                        ]
                    }
                ],
                "transition-behavior": [
                    {
                        transition: [
                            "normal",
                            "discrete"
                        ]
                    }
                ],
                duration: [
                    {
                        duration: [
                            U,
                            "initial",
                            O,
                            L
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            g,
                            O,
                            L
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            U,
                            O,
                            L
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            m,
                            O,
                            L
                        ]
                    }
                ],
                backface: [
                    {
                        backface: [
                            "hidden",
                            "visible"
                        ]
                    }
                ],
                perspective: [
                    {
                        perspective: [
                            h,
                            O,
                            L
                        ]
                    }
                ],
                "perspective-origin": [
                    {
                        "perspective-origin": E()
                    }
                ],
                rotate: [
                    {
                        rotate: dn()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": dn()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": dn()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": dn()
                    }
                ],
                scale: [
                    {
                        scale: Ct()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": Ct()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": Ct()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": Ct()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: bn()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": bn()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": bn()
                    }
                ],
                transform: [
                    {
                        transform: [
                            O,
                            L,
                            "",
                            "none",
                            "gpu",
                            "cpu"
                        ]
                    }
                ],
                "transform-origin": [
                    {
                        origin: E()
                    }
                ],
                "transform-style": [
                    {
                        transform: [
                            "3d",
                            "flat"
                        ]
                    }
                ],
                translate: [
                    {
                        translate: fn()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": fn()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": fn()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": fn()
                    }
                ],
                "translate-none": [
                    "translate-none"
                ],
                accent: [
                    {
                        accent: R()
                    }
                ],
                appearance: [
                    {
                        appearance: [
                            "none",
                            "auto"
                        ]
                    }
                ],
                "caret-color": [
                    {
                        caret: R()
                    }
                ],
                "color-scheme": [
                    {
                        scheme: [
                            "normal",
                            "dark",
                            "light",
                            "light-dark",
                            "only-dark",
                            "only-light"
                        ]
                    }
                ],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            O,
                            L
                        ]
                    }
                ],
                "field-sizing": [
                    {
                        "field-sizing": [
                            "fixed",
                            "content"
                        ]
                    }
                ],
                "pointer-events": [
                    {
                        "pointer-events": [
                            "auto",
                            "none"
                        ]
                    }
                ],
                resize: [
                    {
                        resize: [
                            "none",
                            "",
                            "y",
                            "x"
                        ]
                    }
                ],
                "scroll-behavior": [
                    {
                        scroll: [
                            "auto",
                            "smooth"
                        ]
                    }
                ],
                "scroll-m": [
                    {
                        "scroll-m": _()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": _()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": _()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": _()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": _()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": _()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": _()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": _()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": _()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": _()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": _()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": _()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": _()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": _()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": _()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": _()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": _()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": _()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": _()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": _()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": _()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": _()
                    }
                ],
                "snap-align": [
                    {
                        snap: [
                            "start",
                            "end",
                            "center",
                            "align-none"
                        ]
                    }
                ],
                "snap-stop": [
                    {
                        snap: [
                            "normal",
                            "always"
                        ]
                    }
                ],
                "snap-type": [
                    {
                        snap: [
                            "none",
                            "x",
                            "y",
                            "both"
                        ]
                    }
                ],
                "snap-strictness": [
                    {
                        snap: [
                            "mandatory",
                            "proximity"
                        ]
                    }
                ],
                touch: [
                    {
                        touch: [
                            "auto",
                            "none",
                            "manipulation"
                        ]
                    }
                ],
                "touch-x": [
                    {
                        "touch-pan": [
                            "x",
                            "left",
                            "right"
                        ]
                    }
                ],
                "touch-y": [
                    {
                        "touch-pan": [
                            "y",
                            "up",
                            "down"
                        ]
                    }
                ],
                "touch-pz": [
                    "touch-pinch-zoom"
                ],
                select: [
                    {
                        select: [
                            "none",
                            "text",
                            "all",
                            "auto"
                        ]
                    }
                ],
                "will-change": [
                    {
                        "will-change": [
                            "auto",
                            "scroll",
                            "contents",
                            "transform",
                            O,
                            L
                        ]
                    }
                ],
                fill: [
                    {
                        fill: [
                            "none",
                            ...R()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            U,
                            Mr,
                            yn,
                            Xc
                        ]
                    }
                ],
                stroke: [
                    {
                        stroke: [
                            "none",
                            ...R()
                        ]
                    }
                ],
                "forced-color-adjust": [
                    {
                        "forced-color-adjust": [
                            "auto",
                            "none"
                        ]
                    }
                ]
            },
            conflictingClassGroups: {
                overflow: [
                    "overflow-x",
                    "overflow-y"
                ],
                overscroll: [
                    "overscroll-x",
                    "overscroll-y"
                ],
                inset: [
                    "inset-x",
                    "inset-y",
                    "inset-bs",
                    "inset-be",
                    "start",
                    "end",
                    "top",
                    "right",
                    "bottom",
                    "left"
                ],
                "inset-x": [
                    "right",
                    "left"
                ],
                "inset-y": [
                    "top",
                    "bottom"
                ],
                flex: [
                    "basis",
                    "grow",
                    "shrink"
                ],
                gap: [
                    "gap-x",
                    "gap-y"
                ],
                p: [
                    "px",
                    "py",
                    "ps",
                    "pe",
                    "pbs",
                    "pbe",
                    "pt",
                    "pr",
                    "pb",
                    "pl"
                ],
                px: [
                    "pr",
                    "pl"
                ],
                py: [
                    "pt",
                    "pb"
                ],
                m: [
                    "mx",
                    "my",
                    "ms",
                    "me",
                    "mbs",
                    "mbe",
                    "mt",
                    "mr",
                    "mb",
                    "ml"
                ],
                mx: [
                    "mr",
                    "ml"
                ],
                my: [
                    "mt",
                    "mb"
                ],
                size: [
                    "w",
                    "h"
                ],
                "font-size": [
                    "leading"
                ],
                "fvn-normal": [
                    "fvn-ordinal",
                    "fvn-slashed-zero",
                    "fvn-figure",
                    "fvn-spacing",
                    "fvn-fraction"
                ],
                "fvn-ordinal": [
                    "fvn-normal"
                ],
                "fvn-slashed-zero": [
                    "fvn-normal"
                ],
                "fvn-figure": [
                    "fvn-normal"
                ],
                "fvn-spacing": [
                    "fvn-normal"
                ],
                "fvn-fraction": [
                    "fvn-normal"
                ],
                "line-clamp": [
                    "display",
                    "overflow"
                ],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl"
                ],
                "rounded-s": [
                    "rounded-ss",
                    "rounded-es"
                ],
                "rounded-e": [
                    "rounded-se",
                    "rounded-ee"
                ],
                "rounded-t": [
                    "rounded-tl",
                    "rounded-tr"
                ],
                "rounded-r": [
                    "rounded-tr",
                    "rounded-br"
                ],
                "rounded-b": [
                    "rounded-br",
                    "rounded-bl"
                ],
                "rounded-l": [
                    "rounded-tl",
                    "rounded-bl"
                ],
                "border-spacing": [
                    "border-spacing-x",
                    "border-spacing-y"
                ],
                "border-w": [
                    "border-w-x",
                    "border-w-y",
                    "border-w-s",
                    "border-w-e",
                    "border-w-bs",
                    "border-w-be",
                    "border-w-t",
                    "border-w-r",
                    "border-w-b",
                    "border-w-l"
                ],
                "border-w-x": [
                    "border-w-r",
                    "border-w-l"
                ],
                "border-w-y": [
                    "border-w-t",
                    "border-w-b"
                ],
                "border-color": [
                    "border-color-x",
                    "border-color-y",
                    "border-color-s",
                    "border-color-e",
                    "border-color-bs",
                    "border-color-be",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l"
                ],
                "border-color-x": [
                    "border-color-r",
                    "border-color-l"
                ],
                "border-color-y": [
                    "border-color-t",
                    "border-color-b"
                ],
                translate: [
                    "translate-x",
                    "translate-y",
                    "translate-none"
                ],
                "translate-none": [
                    "translate",
                    "translate-x",
                    "translate-y",
                    "translate-z"
                ],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mbs",
                    "scroll-mbe",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml"
                ],
                "scroll-mx": [
                    "scroll-mr",
                    "scroll-ml"
                ],
                "scroll-my": [
                    "scroll-mt",
                    "scroll-mb"
                ],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pbs",
                    "scroll-pbe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl"
                ],
                "scroll-px": [
                    "scroll-pr",
                    "scroll-pl"
                ],
                "scroll-py": [
                    "scroll-pt",
                    "scroll-pb"
                ],
                touch: [
                    "touch-x",
                    "touch-y",
                    "touch-pz"
                ],
                "touch-x": [
                    "touch"
                ],
                "touch-y": [
                    "touch"
                ],
                "touch-pz": [
                    "touch"
                ]
            },
            conflictingClassGroupModifiers: {
                "font-size": [
                    "leading"
                ]
            },
            orderSensitiveModifiers: [
                "*",
                "**",
                "after",
                "backdrop",
                "before",
                "details-content",
                "file",
                "first-letter",
                "first-line",
                "marker",
                "placeholder",
                "selection"
            ]
        };
    }, Cx = tx(Sx);
    function Qt(...e) {
        return Cx(bp(e));
    }
    const _x = Ap("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    });
    function oe({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? ev : "button";
        return y.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Qt(_x({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const Ex = Ap("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), gm = N.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function bi({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return y.jsx(jv, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Qt("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: y.jsx(gm.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function vn({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = N.useContext(gm);
        return y.jsx(Lv, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Qt(Ex({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function er({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = N.useState(t), s = N.useRef(!1), a = N.useRef({
            x: 0,
            y: 0
        }), u = N.useCallback((c)=>{
            s.current = !0, a.current = {
                x: c.clientX - l.x,
                y: c.clientY - l.y
            };
            const d = (x)=>{
                if (!s.current) return;
                const v = Math.max(0, x.clientX - a.current.x), h = Math.max(0, x.clientY - a.current.y);
                i({
                    x: v,
                    y: h
                });
            }, f = ()=>{
                s.current = !1, window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", f);
            };
            window.addEventListener("mousemove", d), window.addEventListener("mouseup", f);
        }, [
            l
        ]);
        return y.jsxs("div", {
            className: Qt("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: l.x,
                top: l.y
            },
            children: [
                y.jsxs("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg flex items-center justify-between gap-2",
                    onMouseDown: u,
                    children: [
                        y.jsx("span", {
                            children: e
                        }),
                        o && y.jsx("button", {
                            type: "button",
                            "aria-label": "Close",
                            className: "text-gray-400 hover:text-gray-700 cursor-pointer leading-none px-1",
                            onMouseDown: (c)=>c.stopPropagation(),
                            onClick: o,
                            children: "✕"
                        })
                    ]
                }),
                y.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const Nx = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function jr(e) {
        return Nx[e] ?? "#000000";
    }
    function Ix(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, c = s * a + o * 2;
        e.width = u, e.height = c;
        const d = e.getContext("2d");
        if (d) {
            l && (d.fillStyle = l, d.fillRect(0, 0, u, c)), d.translate(o, o);
            for (const [f, x, v] of t.cells ?? []){
                const h = jr(v);
                h && (d.fillStyle = h, d.fillRect(x * a, f * a, a, a));
            }
            for (const [f, x, v, h, k, g] of t.rects ?? []){
                const m = Math.min(x, h) * a, p = Math.min(f, v) * a, S = Math.abs(h - x) * a, E = Math.abs(v - f) * a, z = jr(k);
                z && (d.fillStyle = z, d.fillRect(m, p, S, E));
                const P = jr(g);
                P && (d.strokeStyle = P, d.lineWidth = Math.max(1, a / 8), d.strokeRect(m, p, S, E));
            }
            for (const [f, x, v, h, k] of t.lines ?? []){
                const g = jr(k);
                g && (d.strokeStyle = g, d.lineWidth = Math.max(1, a / 6), d.beginPath(), d.moveTo(x * a, f * a), d.lineTo(h * a, v * a), d.stroke());
            }
            d.textBaseline = "alphabetic";
            for (const f of t.texts ?? []){
                const x = Array.isArray(f) ? {
                    r: f[0],
                    c: f[1],
                    color: f[2],
                    size: f[3],
                    text: f[4]
                } : f;
                !x || typeof x.r != "number" || typeof x.c != "number" || (d.fillStyle = jr(x.color) ?? "#000000", d.font = `${Math.max(6, (x.size ?? 1) * a)}px 'BigBlue Terminal', monospace`, d.fillText(String(x.text ?? ""), x.c * a, x.r * a));
            }
            d.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function sl({ design: e, size: t = 96, className: n }) {
        const r = N.useRef(null);
        return N.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            Ix(r.current, e, o);
        }, [
            e,
            t
        ]), y.jsx("canvas", {
            ref: r,
            className: n,
            style: {
                imageRendering: "pixelated"
            }
        });
    }
    const Fs = (e, t)=>t.some((n)=>e instanceof n);
    let qc, ed;
    function Rx() {
        return qc || (qc = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction
        ]);
    }
    function zx() {
        return ed || (ed = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey
        ]);
    }
    const $s = new WeakMap, Ai = new WeakMap, Jl = new WeakMap;
    function Tx(e) {
        const t = new Promise((n, r)=>{
            const o = ()=>{
                e.removeEventListener("success", l), e.removeEventListener("error", i);
            }, l = ()=>{
                n(Rn(e.result)), o();
            }, i = ()=>{
                r(e.error), o();
            };
            e.addEventListener("success", l), e.addEventListener("error", i);
        });
        return Jl.set(t, e), t;
    }
    function Px(e) {
        if ($s.has(e)) return;
        const t = new Promise((n, r)=>{
            const o = ()=>{
                e.removeEventListener("complete", l), e.removeEventListener("error", i), e.removeEventListener("abort", i);
            }, l = ()=>{
                n(), o();
            }, i = ()=>{
                r(e.error || new DOMException("AbortError", "AbortError")), o();
            };
            e.addEventListener("complete", l), e.addEventListener("error", i), e.addEventListener("abort", i);
        });
        $s.set(e, t);
    }
    let Bs = {
        get (e, t, n) {
            if (e instanceof IDBTransaction) {
                if (t === "done") return $s.get(e);
                if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
            }
            return Rn(e[t]);
        },
        set (e, t, n) {
            return e[t] = n, !0;
        },
        has (e, t) {
            return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
        }
    };
    function ym(e) {
        Bs = e(Bs);
    }
    function Mx(e) {
        return zx().includes(e) ? function(...t) {
            return e.apply(Us(this), t), Rn(this.request);
        } : function(...t) {
            return Rn(e.apply(Us(this), t));
        };
    }
    function jx(e) {
        return typeof e == "function" ? Mx(e) : (e instanceof IDBTransaction && Px(e), Fs(e, Rx()) ? new Proxy(e, Bs) : e);
    }
    function Rn(e) {
        if (e instanceof IDBRequest) return Tx(e);
        if (Ai.has(e)) return Ai.get(e);
        const t = jx(e);
        return t !== e && (Ai.set(e, t), Jl.set(t, e)), t;
    }
    const Us = (e)=>Jl.get(e);
    function Lx(e, t, { blocked: n, upgrade: r, blocking: o, terminated: l } = {}) {
        const i = indexedDB.open(e, t), s = Rn(i);
        return r && i.addEventListener("upgradeneeded", (a)=>{
            r(Rn(i.result), a.oldVersion, a.newVersion, Rn(i.transaction), a);
        }), n && i.addEventListener("blocked", (a)=>n(a.oldVersion, a.newVersion, a)), s.then((a)=>{
            l && a.addEventListener("close", ()=>l()), o && a.addEventListener("versionchange", (u)=>o(u.oldVersion, u.newVersion, u));
        }).catch(()=>{}), s;
    }
    const Ox = [
        "get",
        "getKey",
        "getAll",
        "getAllKeys",
        "count"
    ], Dx = [
        "put",
        "add",
        "delete",
        "clear"
    ], Fi = new Map;
    function td(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
        if (Fi.get(t)) return Fi.get(t);
        const n = t.replace(/FromIndex$/, ""), r = t !== n, o = Dx.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(o || Ox.includes(n))) return;
        const l = async function(i, ...s) {
            const a = this.transaction(i, o ? "readwrite" : "readonly");
            let u = a.store;
            return r && (u = u.index(s.shift())), (await Promise.all([
                u[n](...s),
                o && a.done
            ]))[0];
        };
        return Fi.set(t, l), l;
    }
    ym((e)=>({
            ...e,
            get: (t, n, r)=>td(t, n) || e.get(t, n, r),
            has: (t, n)=>!!td(t, n) || e.has(t, n)
        }));
    const bx = [
        "continue",
        "continuePrimaryKey",
        "advance"
    ], nd = {}, Vs = new WeakMap, vm = new WeakMap, Ax = {
        get (e, t) {
            if (!bx.includes(t)) return e[t];
            let n = nd[t];
            return n || (n = nd[t] = function(...r) {
                Vs.set(this, vm.get(this)[t](...r));
            }), n;
        }
    };
    async function* Fx(...e) {
        let t = this;
        if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
        t = t;
        const n = new Proxy(t, Ax);
        for(vm.set(n, t), Jl.set(n, Us(t)); t;)yield n, t = await (Vs.get(n) || t.continue()), Vs.delete(n);
    }
    function rd(e, t) {
        return t === Symbol.asyncIterator && Fs(e, [
            IDBIndex,
            IDBObjectStore,
            IDBCursor
        ]) || t === "iterate" && Fs(e, [
            IDBIndex,
            IDBObjectStore
        ]);
    }
    ym((e)=>({
            ...e,
            get (t, n, r) {
                return rd(t, n) ? Fx : e.get(t, n, r);
            },
            has (t, n) {
                return rd(t, n) || e.has(t, n);
            }
        }));
    let od;
    function Ot() {
        return od ??= Lx("grid-draw", 1, {
            upgrade (e) {
                e.createObjectStore("designs", {
                    keyPath: "id",
                    autoIncrement: !0
                }).createIndex("by-name", "name", {
                    unique: !0
                }), e.createObjectStore("examples", {
                    keyPath: "id",
                    autoIncrement: !0
                });
            }
        }), od;
    }
    function xm() {
        return new Date().toISOString();
    }
    async function $x() {
        return (await Ot()).getAll("designs");
    }
    async function Bx(e) {
        const t = await (await Ot()).get("designs", e);
        if (!t) throw new Error(`design ${e} not found`);
        return t;
    }
    async function Ux(e) {
        const t = await (await Ot()).getFromIndex("designs", "by-name", e);
        if (!t) throw new Error(`design "${e}" not found`);
        return t;
    }
    async function Vx(e, t, n) {
        const r = (await Ot()).transaction("designs", "readwrite"), o = await r.store.index("by-name").get(e);
        if (o) return await r.store.put({
            ...o,
            name: e,
            design: t,
            history: n
        }), await r.done, o.id;
        const l = await r.store.add({
            createdAt: xm(),
            name: e,
            design: t,
            history: n
        });
        return await r.done, l;
    }
    async function Wx(e) {
        await (await Ot()).delete("designs", e);
    }
    async function ld() {
        return (await (await Ot()).getAll("examples")).reverse();
    }
    async function Gx(e, t, n) {
        return await (await Ot()).add("examples", {
            createdAt: xm(),
            input: e,
            output: t,
            delta: n
        });
    }
    async function Hx(e, t, n, r) {
        const o = (await Ot()).transaction("examples", "readwrite"), l = await o.store.get(e);
        if (!l) throw new Error(`example ${e} not found`);
        await o.store.put({
            ...l,
            input: t,
            output: n,
            delta: r ?? l.delta
        }), await o.done;
    }
    async function Kx(e) {
        await (await Ot()).delete("examples", e);
    }
    const fo = 31;
    function Qx(e) {
        const t = e.input?.cells ?? [], n = e.output?.cells ?? [];
        if (t.length === 0 || n.length === 0) return {
            pairs: [],
            skipped: "empty"
        };
        if (t.length !== n.length) return {
            pairs: [],
            skipped: "count-mismatch"
        };
        const [r, o] = e.delta ?? [
            0,
            0
        ], l = [];
        for(let i = 0; i < t.length; i++){
            const [s, a] = t[i], [u, c] = n[i];
            l.push([
                s,
                a,
                u + r,
                c + o
            ]);
        }
        return {
            pairs: l,
            skipped: null
        };
    }
    function Yx(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = Qx(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function id(e, t) {
        return e >= 0 && e <= fo && t >= 0 && t <= fo;
    }
    const dt = fo + 1, wm = "indexeddb://grid-draw-coord-model";
    let sd, mr = null;
    async function Ua() {
        return sd ??= Rp(()=>import("./index2.js"), []), sd;
    }
    function Xx(e) {
        const t = e.input({
            shape: [
                2 * dt
            ]
        });
        let n = e.layers.dense({
            units: 128,
            activation: "relu"
        }).apply(t);
        n = e.layers.dense({
            units: 128,
            activation: "relu"
        }).apply(n);
        const r = e.layers.dense({
            units: dt,
            activation: "softmax",
            name: "r"
        }).apply(n), o = e.layers.dense({
            units: dt,
            activation: "softmax",
            name: "c"
        }).apply(n);
        return e.model({
            inputs: t,
            outputs: [
                r,
                o
            ]
        });
    }
    function km(e, t) {
        const n = new Float32Array(t.length * 2 * dt);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * dt + r] = 1, n[l * 2 * dt + dt + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * dt
        ]);
    }
    function ad(e, t) {
        const n = new Float32Array(t.length * dt);
        return t.forEach((r, o)=>{
            n[o * dt + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            dt
        ]);
    }
    async function Zx() {
        const e = await Ua();
        try {
            return mr = await e.loadLayersModel(wm), !0;
        } catch  {
            return mr = null, !1;
        }
    }
    async function Jx(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await Ua(), { pairs: s, skippedExamples: a } = Yx(e), u = [];
        let c = 0;
        for (const k of s)id(k[0], k[1]) && id(k[2], k[3]) ? u.push(k) : c++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const d = km(i, u.map((k)=>[
                k[0],
                k[1]
            ])), f = ad(i, u.map((k)=>k[2])), x = ad(i, u.map((k)=>k[3])), v = Xx(i);
        v.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let h = NaN;
        return await v.fit(d, [
            f,
            x
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (k, g)=>{
                    h = g?.loss ?? h, l?.(k + 1, n, h), await i.nextFrame();
                }
            }
        }), d.dispose(), f.dispose(), x.dispose(), mr?.dispose(), mr = v, await v.save(wm), {
            pairs: u.length,
            droppedPoints: c,
            skippedExamples: a,
            finalLoss: h
        };
    }
    async function qx(e) {
        if (!mr) throw new Error("No model yet — train one first.");
        const t = await Ua(), n = e.cells ?? [];
        if (n.length === 0) return {
            w: 1,
            h: 1,
            cells: [],
            lines: [],
            rects: [],
            texts: []
        };
        const r = n.map(([a, u])=>[
                Math.max(0, Math.min(fo, a)),
                Math.max(0, Math.min(fo, u))
            ]), o = t.tidy(()=>{
            const a = km(t, r), [u, c] = mr.predict(a), d = u.argMax(1).dataSync(), f = c.argMax(1).dataSync();
            return n.map(([, , x], v)=>[
                    d[v],
                    f[v],
                    x
                ]);
        }), l = new Map;
        let i = 0, s = 0;
        for (const a of o)l.set(`${a[0]},${a[1]}`, a), i = Math.max(i, a[0]), s = Math.max(s, a[1]);
        return {
            w: s + 1,
            h: i + 1,
            cells: [
                ...l.values()
            ],
            lines: [],
            rects: [],
            texts: []
        };
    }
    const fe = zp((e, t)=>({
            designs: [],
            examples: [],
            loadingDesigns: !1,
            loadingExamples: !1,
            error: null,
            modelStatus: "none",
            training: null,
            loadDesigns: async ()=>{
                e({
                    loadingDesigns: !0
                });
                try {
                    e({
                        designs: await $x(),
                        error: null
                    });
                } catch (n) {
                    e({
                        error: String(n)
                    });
                } finally{
                    e({
                        loadingDesigns: !1
                    });
                }
            },
            loadExamples: async ()=>{
                e({
                    loadingExamples: !0
                });
                try {
                    e({
                        examples: await ld(),
                        error: null
                    });
                } catch (n) {
                    e({
                        error: String(n)
                    });
                } finally{
                    e({
                        loadingExamples: !1
                    });
                }
            },
            saveDrawing: async (n, r, o)=>{
                const l = await Vx(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>Ux(n),
            getDrawingById: (n)=>Bx(n),
            saveExamplePair: async (n, r, o)=>{
                await Gx(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await Hx(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await Wx(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await Kx(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Zx();
                    e({
                        modelStatus: n ? "ready" : "none"
                    });
                } catch (n) {
                    e({
                        modelStatus: "none",
                        error: String(n)
                    });
                }
            },
            trainModel: async ()=>{
                const n = await ld();
                e({
                    examples: n,
                    training: {
                        status: "running",
                        epoch: 0,
                        total: 0,
                        loss: NaN,
                        message: "Preparing…"
                    }
                });
                try {
                    const r = await Jx(n, {
                        onEpoch: (l, i, s)=>e({
                                training: {
                                    status: "running",
                                    epoch: l,
                                    total: i,
                                    loss: s,
                                    message: `Training… epoch ${l}/${i}`
                                }
                            })
                    }), o = r.skippedExamples || r.droppedPoints ? ` (${r.pairs} pairs; skipped ${r.skippedExamples} examples, ${r.droppedPoints} out-of-range points)` : ` (${r.pairs} pairs)`;
                    e({
                        modelStatus: "ready",
                        training: {
                            status: "done",
                            epoch: 0,
                            total: 0,
                            loss: r.finalLoss,
                            message: `Done — loss ${r.finalLoss.toFixed(4)}${o}`
                        }
                    });
                } catch (r) {
                    throw e({
                        training: {
                            status: "error",
                            epoch: 0,
                            total: 0,
                            loss: NaN,
                            message: String(r)
                        }
                    }), r;
                }
            },
            runPredict: (n)=>qx(n)
        })), Sm = "/grid-draw/";
    function e0(e) {
        window.location.href = `${Sm}design/${encodeURIComponent(e)}/`;
    }
    function t0() {
        window.location.href = Sm;
    }
    function Cm({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = fe((k)=>k.designs), o = fe((k)=>k.examples), l = fe((k)=>k.loadingDesigns || k.loadingExamples), i = fe((k)=>k.error), s = fe((k)=>k.loadDesigns), a = fe((k)=>k.loadExamples), u = fe((k)=>k.deleteDrawing), c = fe((k)=>k.deleteExamplePair), d = N.useCallback(()=>{
            s(), a();
        }, [
            s,
            a
        ]);
        N.useEffect(()=>{
            d();
        }, [
            d
        ]);
        const f = N.useCallback((k, g)=>{
            window.confirm(`Delete drawing “${g}”? This can't be undone.`) && u(k);
        }, [
            u
        ]), x = N.useCallback((k)=>{
            window.confirm("Delete this training example? This can't be undone.") && c(k);
        }, [
            c
        ]), v = N.useCallback((k)=>{
            n ? n(k) : e0(k);
        }, [
            n
        ]), h = y.jsxs(y.Fragment, {
            children: [
                l && y.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "Loading…"
                }),
                y.jsxs("section", {
                    className: "mb-10",
                    children: [
                        y.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Saved drawings (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && !l && y.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No saved drawings yet — use “Save to Gallery” in the editor."
                        }),
                        y.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4",
                            children: r.map((k)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        y.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: y.jsx(sl, {
                                                design: k.design,
                                                size: 120
                                            })
                                        }),
                                        y.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: k.name,
                                            children: k.name
                                        }),
                                        y.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                y.jsx(oe, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>v(k.name),
                                                    children: "Open"
                                                }),
                                                y.jsx(oe, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-red-600",
                                                    onClick: ()=>f(k.id, k.name),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, k.id))
                        })
                    ]
                }),
                y.jsxs("section", {
                    children: [
                        y.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                o.length,
                                ")"
                            ]
                        }),
                        o.length === 0 && !l && y.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — capture some with “Make Training Data”."
                        }),
                        y.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4",
                            children: o.map((k)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        y.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                y.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        y.jsx(sl, {
                                                            design: k.input,
                                                            size: 80
                                                        }),
                                                        y.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "input"
                                                        })
                                                    ]
                                                }),
                                                y.jsx("span", {
                                                    className: "text-gray-300",
                                                    children: "→"
                                                }),
                                                y.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        y.jsx(sl, {
                                                            design: k.output,
                                                            size: 80
                                                        }),
                                                        y.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "output"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        y.jsx(oe, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full text-xs text-red-600",
                                            onClick: ()=>x(k.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, k.id))
                        })
                    ]
                })
            ]
        });
        return e ? y.jsxs(er, {
            title: "Gallery",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 880) / 2),
                y: 64
            },
            className: "w-[880px] max-w-[95vw] z-30",
            children: [
                y.jsxs("div", {
                    className: "mb-3 flex items-center gap-3",
                    children: [
                        y.jsx(oe, {
                            variant: "outline",
                            size: "sm",
                            onClick: d,
                            children: "Refresh"
                        }),
                        i && y.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                y.jsx("div", {
                    className: "max-h-[70vh] overflow-auto pr-1",
                    children: h
                })
            ]
        }) : y.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                y.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        y.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Gallery"
                        }),
                        y.jsx(oe, {
                            variant: "outline",
                            size: "sm",
                            onClick: t0,
                            children: "← Editor"
                        }),
                        y.jsx(oe, {
                            variant: "outline",
                            size: "sm",
                            onClick: d,
                            children: "Refresh"
                        }),
                        i && y.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                h
            ]
        });
    }
    const n0 = "/grid-draw/";
    function ud({ design: e, label: t, onClick: n }) {
        const r = y.jsx(sl, {
            design: e,
            size: 84
        });
        return y.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
                n ? y.jsx("button", {
                    type: "button",
                    onClick: n,
                    title: `Load this ${t} into the editor`,
                    className: "rounded ring-1 ring-transparent hover:ring-blue-400 hover:ring-2 focus:outline-none focus:ring-blue-500 cursor-pointer",
                    children: r
                }) : r,
                y.jsx("span", {
                    className: "text-[10px] text-gray-400 mt-1",
                    children: t
                })
            ]
        });
    }
    function r0({ input: e, output: t, onInput: n, onOutput: r }) {
        return y.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                y.jsx(ud, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                y.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                y.jsx(ud, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function _m({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = fe((a)=>a.examples), o = fe((a)=>a.error), l = fe((a)=>a.loadExamples);
        N.useEffect(()=>{
            l();
        }, [
            l
        ]);
        const s = y.jsxs(y.Fragment, {
            children: [
                y.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        y.jsx(oe, {
                            variant: "outline",
                            size: "sm",
                            onClick: l,
                            children: "Refresh"
                        }),
                        o && y.jsx("span", {
                            className: "text-sm text-red-500",
                            children: o
                        })
                    ]
                }),
                y.jsxs("section", {
                    children: [
                        y.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && y.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — use “Make Training Data”."
                        }),
                        y.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4",
                            children: r.map((a)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-1",
                                    children: [
                                        y.jsx(r0, {
                                            input: a.input,
                                            output: a.output,
                                            onInput: n && (()=>n(a, "input")),
                                            onOutput: n && (()=>n(a, "output"))
                                        }),
                                        y.jsxs("span", {
                                            className: "text-[10px] text-gray-400",
                                            children: [
                                                "#",
                                                a.id
                                            ]
                                        })
                                    ]
                                }, a.id))
                        })
                    ]
                })
            ]
        });
        return e ? y.jsx(er, {
            title: "Training Data",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 900) / 2),
                y: 64
            },
            className: "w-[900px] max-w-[95vw] z-30",
            children: y.jsx("div", {
                className: "max-h-[72vh] overflow-auto pr-1",
                children: s
            })
        }) : y.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                y.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        y.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Training Data"
                        }),
                        y.jsx(oe, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = n0;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const vt = 16, kn = 48, Bn = "/grid-draw/", cd = [
        {
            hex: "#000000",
            name: "Black"
        },
        {
            hex: "#ffffff",
            name: "White"
        },
        {
            hex: "#cc3333",
            name: "Red"
        },
        {
            hex: "#ffcc00",
            name: "Yellow"
        },
        {
            hex: "#2266dd",
            name: "Blue"
        },
        {
            hex: "#22aa22",
            name: "Green"
        },
        {
            hex: null,
            name: "Transparent"
        }
    ];
    function o0() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function l0(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function dd() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - kn)
        };
    }
    function i0() {
        const [e, t] = N.useState(()=>dd()), n = N.useRef(null), { grid: r, loading: o, error: l } = Wy(n, e.w, e.h), i = et(), { tool: s, setTool: a, colorIdx: u, setColorIdx: c, pickColor: d, outlineIdx: f, pickOutline: x, isDrawing: v, drawMode: h, startDrawing: k, stopDrawing: g, lineStart: m, startLine: p, finishLine: S, rectStart: E, startRect: z, finishRect: P, textSize: _, pickTextSize: B, lineWidth: F, pickLineWidth: ge, beginTextEdit: Pe, typeTextChar: Ue, backspaceText: ht, commitTextEdit: Ve, cancelTextEdit: J, selectedItems: $, setSelectedItems: M, selectAll: b, clipboard: R, copy: Y, paste: re, deleteSelected: gt, selectMode: K, isSelecting: X, selectBoxStart: q, selectDragStart: De, startBoxSelection: vr, updateBoxSelection: me, finishBoxSelection: xr, cancelBoxSelection: dn, startDragSelection: Ct, finishDragSelection: bn, cancelDragSelection: fn, startResize: Va, updateResize: Wa, finishResize: Ga, cancelResize: Ha, startRotate: Ka, updateRotate: Qa, finishRotate: Ya, cancelRotate: Xa, setMousePos: Za, addItemToSelection: Ja, removeItemFromSelection: qa, hitTestShapes: xo, getSelectedCells: Em, jsonOutput: Nm, tensorOutput: Im, importJson: Rm, importTensor: zm, clear: ql, updateOutputs: wr, renderSelection: ei, beginDrawStroke: eu, drawCellAt: wo, endDrawStroke: tu, commitLine: nu, commitRect: ru, undo: ti, redo: ni, canUndo: Tm, canRedo: Pm, captureMode: ri, captureInput: kr, startTrainingCapture: Mm, captureSetInput: jm, buildTrainingExample: ou, finishTrainingCapture: lu, cancelTrainingCapture: iu, serializeWholeGrid: ko, exportHistory: su, loadDesignWithHistory: pn, currentName: au, setCurrentName: lt, saveState: oi, setSaveState: uu, resetHistory: cu } = i;
        i.historyTick;
        const du = fe((w)=>w.saveDrawing), So = fe((w)=>w.getDrawing), fu = fe((w)=>w.getDrawingById), pu = fe((w)=>w.saveExamplePair), mu = fe((w)=>w.updateExamplePair), hu = fe((w)=>w.runPredict), gu = fe((w)=>w.trainModel), yu = fe((w)=>w.initModel), vu = fe((w)=>w.modelStatus), Ce = fe((w)=>w.training), Sr = Em(), [xu, ce] = N.useState(""), [Lm, li] = N.useState(!1), [Om, ii] = N.useState(!1), [Dt, si] = N.useState(null), [An, Dm] = N.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), bm = .25, Am = 12, bt = N.useRef(An);
        bt.current = An;
        const Cr = N.useCallback((w)=>{
            Dm(w), r?.set_camera(w.x, w.y, w.zoom);
        }, [
            r
        ]), Co = N.useRef(!1), [Fm, wu] = N.useState(!1), mn = N.useRef(null), $m = N.useCallback(async ()=>{
            const w = ko();
            if (!w || w.cells.length + w.lines.length + w.rects.length + w.texts.length === 0) {
                ce("Nothing to save — draw something first.");
                return;
            }
            const C = o0();
            ce("Saving to gallery…");
            try {
                await du(C, w, su()), lt(C), window.history.replaceState({}, "", `${Bn}design/${C}/`), ce(`Saved as ${C}. Auto-saving changes.`);
            } catch (T) {
                ce(`Save failed: ${T instanceof Error ? T.message : String(T)}`);
            }
        }, [
            ko,
            su,
            lt,
            du
        ]);
        N.useEffect(()=>{
            if (!r) return;
            let w = !1;
            const C = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (C) return So(C[1]).then((D)=>{
                w || (pn(D.design, D.history ?? null), lt(D.name));
            }).catch(()=>ce(`No drawing named "${C[1]}".`)), ()=>{
                w = !0;
            };
            const T = new URLSearchParams(window.location.search).get("load");
            if (T) return fu(Number(T)).then((D)=>{
                w || (pn(D.design, D.history ?? null), lt(D.name), window.history.replaceState({}, "", `${Bn}design/${encodeURIComponent(D.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Bn);
            }), ()=>{
                w = !0;
            };
        }, [
            r,
            pn,
            lt,
            So,
            fu
        ]), N.useEffect(()=>{
            yu();
        }, [
            yu
        ]);
        const Bm = N.useCallback(async ()=>{
            const w = ou();
            if (!w) {
                ce("Select the output region first.");
                return;
            }
            ce("Saving…");
            try {
                await pu(w.input, w.output, w.delta), lu(), ce("Saved.");
            } catch (C) {
                ce(`Save failed: ${C instanceof Error ? C.message : String(C)}`);
            }
        }, [
            ou,
            lu,
            pu
        ]), Um = N.useCallback(async ()=>{
            ce("Training in the browser…");
            try {
                await gu(), ce("Model trained. Try Predict from Selection.");
            } catch (w) {
                ce(`Train failed: ${w instanceof Error ? w.message : String(w)}`);
            }
        }, [
            gu
        ]), Vm = N.useCallback(async ()=>{
            const { grid: w, selectedItems: C } = et.getState();
            if (!w) return;
            const T = il(w, C);
            if (!T) {
                ce("Select an input region to predict from.");
                return;
            }
            const D = Ge(C, w), Z = D ? D.minRow : 0, G = D ? D.minCol : 0;
            ce("Predicting…");
            try {
                const A = await hu(T);
                et.getState().placeDesign(A, Z, G), ce(l0(A) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (A) {
                ce(`Predict failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            hu
        ]), Wm = N.useCallback(async (w)=>{
            const C = await So(w);
            pn(C.design, C.history ?? null), lt(C.name), si(null), window.history.replaceState({}, "", `${Bn}design/${encodeURIComponent(C.name)}/`), li(!1);
        }, [
            pn,
            lt,
            So
        ]), Gm = N.useCallback((w, C)=>{
            const T = C === "input" ? w.input : w.output, D = C === "input" ? w.output : w.input;
            pn(T, null), lt(null), si({
                id: w.id,
                half: C,
                otherHalf: D
            }), window.history.replaceState({}, "", Bn), ii(!1), ce(`Editing example #${w.id} (${C}) — click "Update example" to save over it.`);
        }, [
            pn,
            lt
        ]), Hm = N.useCallback(async ()=>{
            if (!Dt) return;
            const w = ko();
            if (!w) {
                ce("Nothing to save — draw something first.");
                return;
            }
            const { id: C, half: T, otherHalf: D } = Dt, Z = T === "input" ? w : D, G = T === "output" ? w : D;
            ce(`Updating example #${C}…`);
            try {
                await mu(C, Z, G), ce(`Example #${C} (${T}) updated.`);
            } catch (A) {
                ce(`Update failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            Dt,
            ko,
            mu
        ]), Km = N.useCallback(()=>{
            lt(null), si(null), ql(), cu(), uu("idle"), window.history.replaceState({}, "", Bn), ce("");
        }, [
            lt,
            ql,
            cu,
            uu
        ]);
        N.useEffect(()=>{
            const w = ()=>{
                const C = dd();
                t(C), r?.set_viewport(C.w, C.h);
            };
            return window.addEventListener("resize", w), ()=>window.removeEventListener("resize", w);
        }, [
            r
        ]), N.useEffect(()=>{
            const w = (C)=>{
                if (et.getState().textEdit) return;
                C.key === "\\" && a(s === "line" ? "draw" : "line"), C.key === "m" && a(s === "rect" ? "draw" : "rect"), C.key === "t" && a(s === "text" ? "draw" : "text"), C.key === "s" && a(s === "select" ? "draw" : "select"), (C.key === "Delete" || C.key === "Backspace") && $.length > 0 && (C.preventDefault(), gt()), (C.ctrlKey || C.metaKey) && C.key.toLowerCase() === "a" && (C.preventDefault(), b()), (C.ctrlKey || C.metaKey) && C.key === "c" && $.length > 0 && (C.preventDefault(), Y()), (C.ctrlKey || C.metaKey) && C.key === "v" && R && (C.preventDefault(), re()), (C.ctrlKey || C.metaKey) && !C.shiftKey && C.key.toLowerCase() === "z" && (C.preventDefault(), ti()), (C.ctrlKey || C.metaKey) && (C.shiftKey && C.key.toLowerCase() === "z" || C.key.toLowerCase() === "y") && (C.preventDefault(), ni());
                const T = parseInt(C.key);
                T >= 1 && T <= 7 && c(T - 1);
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            s,
            a,
            c,
            $,
            gt,
            Y,
            re,
            R,
            ti,
            ni,
            b
        ]), N.useEffect(()=>{
            const w = (C)=>{
                if (et.getState().textEdit) {
                    if (C.key === "Enter") {
                        C.preventDefault(), Ve();
                        return;
                    }
                    if (C.key === "Escape") {
                        C.preventDefault(), J();
                        return;
                    }
                    if (C.key === "Backspace") {
                        C.preventDefault(), ht();
                        return;
                    }
                    C.key.length === 1 && !C.ctrlKey && !C.metaKey && !C.altKey && (C.preventDefault(), Ue(C.key));
                }
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            Ve,
            J,
            ht,
            Ue
        ]), N.useEffect(()=>{
            const w = n.current;
            if (!w) return;
            const C = (T)=>{
                T.preventDefault();
                const D = bt.current, Z = T.deltaY < 0 ? 1.1 : 1 / 1.1, G = Math.min(Am, Math.max(bm, D.zoom * Z));
                if (G === D.zoom) return;
                const A = T.clientX, V = T.clientY - kn, de = D.x + A * (1 / D.zoom - 1 / G), Ze = D.y + V * (1 / D.zoom - 1 / G);
                Cr({
                    x: de,
                    y: Ze,
                    zoom: G
                });
            };
            return w.addEventListener("wheel", C, {
                passive: !1
            }), ()=>w.removeEventListener("wheel", C);
        }, [
            Cr
        ]), N.useEffect(()=>{
            const w = (T)=>{
                T.code !== "Space" || et.getState().textEdit || (T.preventDefault(), Co.current = !0, wu(!0));
            }, C = (T)=>{
                T.code === "Space" && (Co.current = !1, wu(!1));
            };
            return window.addEventListener("keydown", w), window.addEventListener("keyup", C), ()=>{
                window.removeEventListener("keydown", w), window.removeEventListener("keyup", C);
            };
        }, []);
        const Qm = N.useCallback(()=>Cr({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            Cr
        ]), Fn = (w)=>{
            const C = w.currentTarget, T = C.getBoundingClientRect(), D = (w.clientX - T.left) * (C.width / T.width), Z = (w.clientY - T.top) * (C.height / T.height), G = bt.current;
            return {
                x: D / G.zoom + G.x,
                y: Z / G.zoom + G.y
            };
        }, hn = (w)=>{
            const { x: C, y: T } = Fn(w);
            return {
                col: Math.floor(C / vt),
                row: Math.floor(T / vt)
            };
        }, At = (w)=>{
            const { x: C, y: T } = Fn(w);
            return {
                col: Math.round(C / vt),
                row: Math.round(T / vt)
            };
        }, _o = (w)=>$.some((C)=>C.type !== w.type ? !1 : C.type === "cell" && w.type === "cell" ? C.row === w.row && C.col === w.col : C.type === "line" && w.type === "line" || C.type === "rect" && w.type === "rect" || C.type === "text" && w.type === "text" ? C.index === w.index : !1), Ym = N.useCallback((w)=>{
            if (r) {
                if (w.button === 1 || w.button === 0 && Co.current) {
                    w.preventDefault(), mn.current = {
                        x: w.clientX,
                        y: w.clientY,
                        camX: bt.current.x,
                        camY: bt.current.y
                    }, w.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (r.set_draw_color(u), r.set_outline_color(f), s === "draw") {
                    const { col: C, row: T } = hn(w), D = u === 6 ? !1 : !r.get_cell(T, C);
                    k(D), eu(), wo(T, C, D), wr();
                } else if (s === "line") {
                    const { col: C, row: T } = At(w);
                    p({
                        row: T,
                        col: C
                    }), r.render_with_line(T, C, T, C);
                } else if (s === "rect") {
                    const { col: C, row: T } = At(w);
                    z({
                        row: T,
                        col: C
                    }), r.render_with_rect(T, C, T, C);
                } else if (s === "text") {
                    const { col: C, row: T } = hn(w);
                    Pe({
                        row: T,
                        col: C
                    });
                } else if (s === "select") {
                    const { col: C, row: T } = hn(w), { x: D, y: Z } = Fn(w), G = w.shiftKey;
                    if ($.length > 0 && !G) {
                        const Ze = Ge($, r);
                        if (Ze) {
                            const Eo = js(Ze), No = 10 / bt.current.zoom;
                            if (Math.hypot(D - Eo.c * vt, Z - Eo.r * vt) <= No) {
                                Ka(D, Z);
                                return;
                            }
                        }
                    }
                    if ($.length === 1 && !G) {
                        const Ze = $[0];
                        if (Ze.type === "line" || Ze.type === "rect") {
                            const Eo = Ze.type === "line" ? Ls(r.get_line(Ze.index)) : Os(r.get_rect(Ze.index)), No = jc(D, Z, Eo, vt, 9);
                            if (No) {
                                Va({
                                    shape: Ze.type,
                                    index: Ze.index,
                                    handle: No.handle
                                });
                                return;
                            }
                        }
                    }
                    const A = Ge($, r), V = A && T >= A.minRow && T <= A.maxRow && C >= A.minCol && C <= A.maxCol, de = xo(D, Z);
                    de && !G && _o(de) && $.length > 1 ? (Ct({
                        row: T,
                        col: C
                    }), ei()) : V && $.length > 0 && !G && !de ? (Ct({
                        row: T,
                        col: C
                    }, !0), ei()) : de ? G && !_o(de) ? Ja(de) : G && _o(de) ? qa(de) : (M([
                        de
                    ]), Ct({
                        row: T,
                        col: C
                    }), r.render(), de.type === "cell" ? r.highlight_cell(de.row, de.col) : de.type === "line" ? r.highlight_line(de.index) : de.type === "rect" && r.highlight_rect(de.index)) : vr({
                        row: T,
                        col: C
                    }, G);
                }
            }
        }, [
            r,
            s,
            u,
            f,
            $,
            Sr,
            xo,
            k,
            p,
            z,
            vr,
            Ct,
            Va,
            Ka,
            Ja,
            qa,
            M,
            wr,
            ei,
            eu,
            wo,
            Pe
        ]), Xm = N.useCallback((w)=>{
            if (!r) return;
            if (mn.current) {
                const T = mn.current, D = bt.current.zoom;
                Cr({
                    x: T.camX - (w.clientX - T.x) / D,
                    y: T.camY - (w.clientY - T.y) / D,
                    zoom: D
                });
                return;
            }
            const C = hn(w);
            if (Za(C), s === "select") {
                const T = w.currentTarget;
                if (X && (K === "resize" || K === "rotate")) T.style.cursor = "grabbing";
                else if (X && K === "drag") T.style.cursor = "move";
                else {
                    const { x: D, y: Z } = Fn(w);
                    let G = "crosshair";
                    if ($.length > 0) {
                        const A = Ge($, r);
                        if (A) {
                            const V = js(A);
                            Math.hypot(D - V.c * vt, Z - V.r * vt) <= 10 / bt.current.zoom && (G = "grab");
                        }
                    }
                    if (G === "crosshair" && $.length === 1) {
                        const A = $[0];
                        if (A.type === "line" || A.type === "rect") {
                            const V = A.type === "line" ? Ls(r.get_line(A.index)) : Os(r.get_rect(A.index));
                            jc(D, Z, V, vt, 9) && (G = "grab");
                        }
                    }
                    if (G === "crosshair" && $.length > 0) {
                        const A = xo(D, Z), V = Ge($, r), de = V && C.row >= V.minRow && C.row <= V.maxRow && C.col >= V.minCol && C.col <= V.maxCol;
                        (A && _o(A) || de) && (G = "move");
                    }
                    T.style.cursor = G;
                }
            } else w.currentTarget.style.cursor = "crosshair";
            if (!(!v && !X)) {
                if (s === "draw" && v) {
                    const { col: T, row: D } = hn(w);
                    wo(D, T, h), wr();
                } else if (s === "line" && m) {
                    const { col: T, row: D } = At(w);
                    r.render_with_line(m.row, m.col, D, T);
                } else if (s === "rect" && E) {
                    const { col: T, row: D } = At(w);
                    r.render_with_rect(E.row, E.col, D, T);
                } else if (s === "select" && X && K === "resize") {
                    const { col: T, row: D } = At(w);
                    Wa({
                        row: D,
                        col: T
                    });
                } else if (s === "select" && X && K === "rotate") {
                    const { x: T, y: D } = Fn(w);
                    Qa(T, D);
                } else if (s === "select" && X) {
                    const { col: T, row: D } = hn(w);
                    if (K === "box" && q) me({
                        row: D,
                        col: T
                    });
                    else if (K === "drag" && De && $.length > 0) {
                        const Z = D - De.row, G = T - De.col;
                        r.render();
                        for (const A of $)if (A.type === "cell") {
                            const V = A.row + Z, de = A.col + G;
                            r.preview_cell(V, de, r.get_cell_color(A.row, A.col));
                        } else if (A.type === "line") {
                            const V = r.get_line(A.index);
                            V.length >= 6 && r.preview_line(V[0] + Z, V[1] + G, V[2] + Z, V[3] + G, V[4], V[5]);
                        } else if (A.type === "rect") {
                            const V = r.get_rect(A.index);
                            V.length >= 6 && r.preview_rect(V[0] + Z, V[1] + G, V[2] + Z, V[3] + G, V[4], V[5]);
                        } else if (A.type === "text") {
                            const V = r.get_text(A.index);
                            V.length >= 3 && r.preview_text(V[0] + Z, V[1] + G, V[2], r.get_text_size(A.index), r.get_text_string(A.index));
                        }
                    }
                }
            }
        }, [
            r,
            s,
            v,
            X,
            h,
            m,
            E,
            K,
            q,
            De,
            $,
            xo,
            Za,
            me,
            Wa,
            Qa,
            wr,
            wo
        ]), Zm = N.useCallback((w)=>{
            if (r) {
                if (mn.current) {
                    mn.current = null, w.currentTarget.style.cursor = Co.current ? "grab" : "crosshair";
                    return;
                }
                if (s === "draw") tu(), g();
                else if (s === "line") {
                    if (m) {
                        const { col: C, row: T } = At(w);
                        nu(m.row, m.col, T, C);
                    }
                    S();
                } else if (s === "rect") {
                    if (E) {
                        const { col: C, row: T } = At(w);
                        ru(E.row, E.col, T, C);
                    }
                    P();
                } else if (s === "select") {
                    const { col: C, row: T } = hn(w);
                    if (K === "rotate") {
                        const { x: D, y: Z } = Fn(w);
                        Ya(D, Z);
                    } else if (K === "resize") {
                        const { col: D, row: Z } = At(w);
                        Ga({
                            row: Z,
                            col: D
                        });
                    } else K === "box" ? xr({
                        row: T,
                        col: C
                    }) : K === "drag" && bn({
                        row: T,
                        col: C
                    });
                }
            }
        }, [
            r,
            s,
            m,
            E,
            K,
            g,
            S,
            P,
            xr,
            bn,
            Ga,
            Ya,
            wr,
            tu,
            nu,
            ru
        ]), Jm = N.useCallback(()=>{
            if (mn.current) {
                mn.current = null;
                return;
            }
            s === "draw" ? g() : s === "line" ? (r && r.render(), S()) : s === "rect" ? (r && r.render(), P()) : s === "select" && (K === "box" ? dn() : K === "drag" ? fn() : K === "resize" ? Ha() : K === "rotate" && Xa());
        }, [
            r,
            s,
            K,
            g,
            S,
            P,
            dn,
            fn,
            Ha,
            Xa
        ]);
        return l ? y.jsx("div", {
            className: "flex items-center justify-center bg-gray-100 min-h-screen",
            children: y.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: y.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        l
                    ]
                })
            })
        }) : y.jsxs(y.Fragment, {
            children: [
                y.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        y.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Grid Draw"
                        }),
                        o && y.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        }),
                        y.jsxs("div", {
                            className: "ml-auto flex items-center gap-3",
                            children: [
                                au && y.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        au,
                                        oi === "saving" && " · saving…",
                                        oi === "saved" && " · saved",
                                        oi === "error" && " · save failed"
                                    ]
                                }),
                                (An.zoom !== 1 || An.x !== 0 || An.y !== 0) && y.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        y.jsxs("span", {
                                            className: "text-sm text-gray-500 tabular-nums",
                                            children: [
                                                Math.round(An.zoom * 100),
                                                "%"
                                            ]
                                        }),
                                        y.jsx(oe, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: Qm,
                                            children: "Reset view"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                y.jsx("canvas", {
                    ref: n,
                    className: Qt("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: kn,
                        cursor: o ? "wait" : Fm ? "grab" : "crosshair"
                    },
                    onMouseDown: Ym,
                    onMouseMove: Xm,
                    onMouseUp: Zm,
                    onMouseLeave: Jm
                }),
                y.jsx(er, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: kn + 20
                    },
                    children: y.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            y.jsxs("div", {
                                children: [
                                    y.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    y.jsxs(bi, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (w)=>w && a(w),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            y.jsx(vn, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            y.jsx(vn, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            y.jsx(vn, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            y.jsx(vn, {
                                                value: "text",
                                                className: "text-xs",
                                                children: "Text"
                                            }),
                                            y.jsx(vn, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            s === "text" && y.jsxs("div", {
                                children: [
                                    y.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Text size"
                                    }),
                                    y.jsx(bi, {
                                        type: "single",
                                        value: String(_),
                                        onValueChange: (w)=>w && B(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Ay.map((w)=>y.jsxs(vn, {
                                                value: String(w),
                                                className: "text-xs",
                                                children: [
                                                    w,
                                                    "×"
                                                ]
                                            }, w))
                                    })
                                ]
                            }),
                            s === "line" && y.jsxs("div", {
                                children: [
                                    y.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Line width"
                                    }),
                                    y.jsx(bi, {
                                        type: "single",
                                        value: String(F),
                                        onValueChange: (w)=>w && ge(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Fy.map((w)=>y.jsxs(vn, {
                                                value: String(w),
                                                className: "text-xs",
                                                children: [
                                                    w,
                                                    "×"
                                                ]
                                            }, w))
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                children: [
                                    y.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    y.jsx("div", {
                                        className: "flex gap-1",
                                        children: cd.map((w, C)=>y.jsx("button", {
                                                onClick: ()=>d(C),
                                                title: `${C + 1}: ${w.name}`,
                                                className: Qt("w-6 h-6 rounded border-2 transition-all", u === C ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: w.hex ?? "transparent",
                                                    backgroundImage: w.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: w.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: w.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, C))
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                children: [
                                    y.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Outline (rects)"
                                    }),
                                    y.jsx("div", {
                                        className: "flex gap-1",
                                        children: cd.map((w, C)=>y.jsx("button", {
                                                onClick: ()=>x(C),
                                                title: C === 6 ? "No outline" : w.name,
                                                className: Qt("w-6 h-6 rounded border-2 transition-all", f === C ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: w.hex ?? "transparent",
                                                    backgroundImage: w.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: w.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: w.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, C))
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(oe, {
                                        variant: "outline",
                                        onClick: ti,
                                        disabled: o || !Tm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Undo (Ctrl/Cmd+Z)",
                                        children: y.jsx(qy, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    y.jsx(oe, {
                                        variant: "outline",
                                        onClick: ni,
                                        disabled: o || !Pm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Redo (Ctrl/Cmd+Shift+Z)",
                                        children: y.jsx(Zy, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(oe, {
                                        variant: "outline",
                                        onClick: $m,
                                        disabled: o,
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Save the whole drawing to the gallery",
                                        children: "Save to Gallery"
                                    }),
                                    y.jsx(oe, {
                                        variant: "outline",
                                        onClick: ()=>li(!0),
                                        size: "sm",
                                        className: "flex-1",
                                        children: "Gallery"
                                    })
                                ]
                            }),
                            Dt && y.jsxs(oe, {
                                variant: "outline",
                                onClick: Hm,
                                disabled: o,
                                size: "sm",
                                className: "w-full border-amber-400 text-amber-700 hover:bg-amber-50",
                                title: `Overwrite training example #${Dt.id}'s ${Dt.half} with the current canvas`,
                                children: [
                                    "Update example #",
                                    Dt.id,
                                    " (",
                                    Dt.half,
                                    ")"
                                ]
                            }),
                            y.jsx(oe, {
                                variant: "destructive",
                                onClick: ql,
                                disabled: o,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            y.jsx(oe, {
                                onClick: Km,
                                disabled: o,
                                size: "sm",
                                className: "w-full bg-green-600 hover:bg-green-700 text-white",
                                children: "New Drawing"
                            }),
                            y.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, t text, s select, 1-7 colors, ⌘Z undo"
                            })
                        ]
                    })
                }),
                y.jsx(er, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: kn + 20
                    },
                    children: y.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            Sr.length > 0 && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsxs("div", {
                                        children: [
                                            y.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "JSON (sparse)"
                                            }),
                                            y.jsx("textarea", {
                                                value: Nm,
                                                onChange: (w)=>Rm(w.target.value),
                                                placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    }),
                                    y.jsxs("div", {
                                        children: [
                                            y.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "2D Array (black = 1)"
                                            }),
                                            y.jsx("textarea", {
                                                value: Im,
                                                onChange: (w)=>zm(w.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            y.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: $.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${$.length} item${$.length !== 1 ? "s" : ""} selected${Sr.length > 0 ? ` (${Sr.length} cell${Sr.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                }),
                y.jsx(er, {
                    title: "Training Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: kn + 360
                    },
                    children: y.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            ri === "idle" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        className: "w-full",
                                        onClick: Mm,
                                        disabled: o,
                                        children: "Make Training Data"
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Vm,
                                        disabled: o || $.length === 0 || vu !== "ready",
                                        title: vu !== "ready" ? "Train a model first" : "Map the selection through the model",
                                        children: "Predict from Selection"
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Um,
                                        disabled: o || Ce?.status === "running",
                                        children: Ce?.status === "running" ? "Training…" : "Start Training Run"
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: ()=>ii(!0),
                                        children: "View Training Data"
                                    })
                                ]
                            }),
                            ri === "input" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs font-medium text-blue-600",
                                        children: "Step 1/2 — select the INPUT, then click Next."
                                    }),
                                    y.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            $.length,
                                            " item(s) selected."
                                        ]
                                    }),
                                    y.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            y.jsx(oe, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: jm,
                                                disabled: $.length === 0,
                                                children: "Next →"
                                            }),
                                            y.jsx(oe, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: iu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ri === "output" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs font-medium text-green-600",
                                        children: "Step 2/2 — select the OUTPUT, then Save."
                                    }),
                                    y.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Input: ",
                                            kr ? `${kr.cells.length}c ${kr.lines.length}l ${kr.rects.length}r ${kr.texts.length}t` : "—",
                                            " · Output: ",
                                            $.length,
                                            " item(s)"
                                        ]
                                    }),
                                    y.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            y.jsx(oe, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Bm,
                                                disabled: $.length === 0,
                                                children: "Save Example"
                                            }),
                                            y.jsx(oe, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: iu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            xu && y.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: xu
                            })
                        ]
                    })
                }),
                Ce && y.jsx(er, {
                    title: "Training",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: kn + 540
                    },
                    children: y.jsx("div", {
                        className: "space-y-2 w-72 text-xs",
                        children: (()=>{
                            const w = Ce.total > 0 ? Math.min(100, Math.round(Ce.epoch / Ce.total * 100)) : Ce.status === "done" ? 100 : 0, C = Ce.status === "error" ? "bg-red-500" : Ce.status === "done" ? "bg-green-500" : "bg-blue-500";
                            return y.jsxs(y.Fragment, {
                                children: [
                                    y.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                            y.jsx("span", {
                                                className: "font-medium",
                                                children: "In-browser model"
                                            }),
                                            y.jsx("span", {
                                                className: "text-gray-400",
                                                children: Ce.status
                                            })
                                        ]
                                    }),
                                    y.jsx("div", {
                                        className: "h-1.5 bg-gray-200 rounded overflow-hidden",
                                        children: y.jsx("div", {
                                            className: Qt("h-full", C),
                                            style: {
                                                width: `${w}%`
                                            }
                                        })
                                    }),
                                    y.jsxs("div", {
                                        className: "flex justify-between text-gray-400",
                                        children: [
                                            y.jsx("span", {
                                                children: Ce.total > 0 ? `epoch ${Ce.epoch}/${Ce.total} (${w}%)` : ""
                                            }),
                                            Number.isFinite(Ce.loss) && y.jsxs("span", {
                                                children: [
                                                    "loss ",
                                                    Ce.loss.toFixed(4)
                                                ]
                                            })
                                        ]
                                    }),
                                    Ce.message && y.jsx("p", {
                                        className: "text-gray-400",
                                        children: Ce.message
                                    })
                                ]
                            });
                        })()
                    })
                }),
                Lm && y.jsx(Cm, {
                    asModal: !0,
                    onClose: ()=>li(!1),
                    onOpenDesign: Wm
                }),
                Om && y.jsx(_m, {
                    asModal: !0,
                    onClose: ()=>ii(!1),
                    onEditExample: Gm
                })
            ]
        });
    }
    function s0() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function a0() {
        const e = s0();
        return y.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? y.jsx(Cm, {}) : e === "training" ? y.jsx(_m, {}) : y.jsx(i0, {})
        });
    }
    const u0 = 600;
    let fd;
    function c0() {
        et.getState().currentName && (clearTimeout(fd), fd = setTimeout(d0, u0));
    }
    async function d0() {
        const e = et.getState();
        if (!e.currentName || !e.grid) return;
        const t = e.serializeWholeGrid();
        if (t) {
            e.setSaveState("saving");
            try {
                await fe.getState().saveDrawing(e.currentName, t, e.exportHistory()), et.getState().setSaveState("saved");
            } catch (n) {
                et.getState().setSaveState("error", n instanceof Error ? n.message : String(n));
            }
        }
    }
    et.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && c0();
    });
    const pd = document.getElementById("grid-draw-root");
    pd && $i.createRoot(pd).render(y.jsx(le.StrictMode, {
        children: y.jsx(a0, {})
    }));
})();
export { p0 as a, f0 as c, eh as g, __tla };
