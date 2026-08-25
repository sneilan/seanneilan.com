let s0, i0, Zm;
let __tla = (async ()=>{
    function Xm(e, t) {
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
    i0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    Zm = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    s0 = function(e) {
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
    var dd = {
        exports: {}
    }, Ll = {}, fd = {
        exports: {}
    }, G = {};
    var po = Symbol.for("react.element"), Jm = Symbol.for("react.portal"), qm = Symbol.for("react.fragment"), eh = Symbol.for("react.strict_mode"), th = Symbol.for("react.profiler"), nh = Symbol.for("react.provider"), rh = Symbol.for("react.context"), oh = Symbol.for("react.forward_ref"), lh = Symbol.for("react.suspense"), ih = Symbol.for("react.memo"), sh = Symbol.for("react.lazy"), yu = Symbol.iterator;
    function ah(e) {
        return e === null || typeof e != "object" ? null : (e = yu && e[yu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var pd = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, md = Object.assign, hd = {};
    function gr(e, t, n) {
        this.props = e, this.context = t, this.refs = hd, this.updater = n || pd;
    }
    gr.prototype.isReactComponent = {};
    gr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    gr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function gd() {}
    gd.prototype = gr.prototype;
    function Us(e, t, n) {
        this.props = e, this.context = t, this.refs = hd, this.updater = n || pd;
    }
    var Vs = Us.prototype = new gd;
    Vs.constructor = Us;
    md(Vs, gr.prototype);
    Vs.isPureReactComponent = !0;
    var vu = Array.isArray, yd = Object.prototype.hasOwnProperty, Gs = {
        current: null
    }, vd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function xd(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)yd.call(t, r) && !vd.hasOwnProperty(r) && (o[r] = t[r]);
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
            _owner: Gs.current
        };
    }
    function uh(e, t) {
        return {
            $$typeof: po,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Ws(e) {
        return typeof e == "object" && e !== null && e.$$typeof === po;
    }
    function ch(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var xu = /\/+/g;
    function si(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? ch("" + e.key) : t.toString(36);
    }
    function Ho(e, t, n, r, o) {
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
                    case Jm:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + si(i, 0) : r, vu(o) ? (n = "", e != null && (n = e.replace(xu, "$&/") + "/"), Ho(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Ws(o) && (o = uh(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(xu, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", vu(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + si(l, s);
            i += Ho(l, t, n, a, o);
        }
        else if (a = ah(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + si(l, s++), i += Ho(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Ro(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return Ho(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function dh(e) {
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
    }, Ko = {
        transition: null
    }, fh = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: Ko,
        ReactCurrentOwner: Gs
    };
    function wd() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    G.Children = {
        map: Ro,
        forEach: function(e, t, n) {
            Ro(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Ro(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Ro(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Ws(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    G.Component = gr;
    G.Fragment = qm;
    G.Profiler = th;
    G.PureComponent = Us;
    G.StrictMode = eh;
    G.Suspense = lh;
    G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fh;
    G.act = wd;
    G.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = md({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Gs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)yd.call(t, a) && !vd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
    G.createContext = function(e) {
        return e = {
            $$typeof: rh,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: nh,
            _context: e
        }, e.Consumer = e;
    };
    G.createElement = xd;
    G.createFactory = function(e) {
        var t = xd.bind(null, e);
        return t.type = e, t;
    };
    G.createRef = function() {
        return {
            current: null
        };
    };
    G.forwardRef = function(e) {
        return {
            $$typeof: oh,
            render: e
        };
    };
    G.isValidElement = Ws;
    G.lazy = function(e) {
        return {
            $$typeof: sh,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: dh
        };
    };
    G.memo = function(e, t) {
        return {
            $$typeof: ih,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    G.startTransition = function(e) {
        var t = Ko.transition;
        Ko.transition = {};
        try {
            e();
        } finally{
            Ko.transition = t;
        }
    };
    G.unstable_act = wd;
    G.useCallback = function(e, t) {
        return Le.current.useCallback(e, t);
    };
    G.useContext = function(e) {
        return Le.current.useContext(e);
    };
    G.useDebugValue = function() {};
    G.useDeferredValue = function(e) {
        return Le.current.useDeferredValue(e);
    };
    G.useEffect = function(e, t) {
        return Le.current.useEffect(e, t);
    };
    G.useId = function() {
        return Le.current.useId();
    };
    G.useImperativeHandle = function(e, t, n) {
        return Le.current.useImperativeHandle(e, t, n);
    };
    G.useInsertionEffect = function(e, t) {
        return Le.current.useInsertionEffect(e, t);
    };
    G.useLayoutEffect = function(e, t) {
        return Le.current.useLayoutEffect(e, t);
    };
    G.useMemo = function(e, t) {
        return Le.current.useMemo(e, t);
    };
    G.useReducer = function(e, t, n) {
        return Le.current.useReducer(e, t, n);
    };
    G.useRef = function(e) {
        return Le.current.useRef(e);
    };
    G.useState = function(e) {
        return Le.current.useState(e);
    };
    G.useSyncExternalStore = function(e, t, n) {
        return Le.current.useSyncExternalStore(e, t, n);
    };
    G.useTransition = function() {
        return Le.current.useTransition();
    };
    G.version = "18.3.1";
    fd.exports = G;
    var N = fd.exports;
    const re = Zm(N), Sd = Xm({
        __proto__: null,
        default: re
    }, [
        N
    ]);
    var ph = N, mh = Symbol.for("react.element"), hh = Symbol.for("react.fragment"), gh = Object.prototype.hasOwnProperty, yh = ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, vh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function kd(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)gh.call(t, r) && !vh.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: mh,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: yh.current
        };
    }
    Ll.Fragment = hh;
    Ll.jsx = kd;
    Ll.jsxs = kd;
    dd.exports = Ll;
    var y = dd.exports, Ai = {}, Cd = {
        exports: {}
    }, Ye = {}, _d = {
        exports: {}
    }, Ed = {};
    (function(e) {
        function t(M, b) {
            var I = M.length;
            M.push(b);
            e: for(; 0 < I;){
                var Y = I - 1 >>> 1, B = M[Y];
                if (0 < o(B, b)) M[Y] = b, M[I] = B, I = Y;
                else break e;
            }
        }
        function n(M) {
            return M.length === 0 ? null : M[0];
        }
        function r(M) {
            if (M.length === 0) return null;
            var b = M[0], I = M.pop();
            if (I !== b) {
                M[0] = I;
                e: for(var Y = 0, B = M.length, Pe = B >>> 1; Y < Pe;){
                    var be = 2 * (Y + 1) - 1, ne = M[be], J = be + 1, Ze = M[J];
                    if (0 > o(ne, I)) J < B && 0 > o(Ze, ne) ? (M[Y] = Ze, M[J] = I, Y = J) : (M[Y] = ne, M[be] = I, Y = be);
                    else if (J < B && 0 > o(Ze, I)) M[Y] = Ze, M[J] = I, Y = J;
                    else break e;
                }
            }
            return b;
        }
        function o(M, b) {
            var I = M.sortIndex - b.sortIndex;
            return I !== 0 ? I : M.id - b.id;
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
        var a = [], u = [], c = 1, f = null, d = 3, x = !1, v = !1, h = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
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
            if (h = !1, p(M), !v) if (n(a) !== null) v = !0, Z(E);
            else {
                var b = n(u);
                b !== null && De(S, b.startTime - M);
            }
        }
        function E(M, b) {
            v = !1, h && (h = !1, g(_), _ = -1), x = !0;
            var I = d;
            try {
                for(p(b), f = n(a); f !== null && (!(f.expirationTime > b) || M && !fe());){
                    var Y = f.callback;
                    if (typeof Y == "function") {
                        f.callback = null, d = f.priorityLevel;
                        var B = Y(f.expirationTime <= b);
                        b = e.unstable_now(), typeof B == "function" ? f.callback = B : f === n(a) && r(a), p(b);
                    } else r(a);
                    f = n(a);
                }
                if (f !== null) var Pe = !0;
                else {
                    var be = n(u);
                    be !== null && De(S, be.startTime - b), Pe = !1;
                }
                return Pe;
            } finally{
                f = null, d = I, x = !1;
            }
        }
        var T = !1, P = null, _ = -1, U = 5, A = -1;
        function fe() {
            return !(e.unstable_now() - A < U);
        }
        function ze() {
            if (P !== null) {
                var M = e.unstable_now();
                A = M;
                var b = !0;
                try {
                    b = P(!0, M);
                } finally{
                    b ? Ve() : (T = !1, P = null);
                }
            } else T = !1;
        }
        var Ve;
        if (typeof m == "function") Ve = function() {
            m(ze);
        };
        else if (typeof MessageChannel < "u") {
            var gt = new MessageChannel, $ = gt.port2;
            gt.port1.onmessage = ze, Ve = function() {
                $.postMessage(null);
            };
        } else Ve = function() {
            C(ze, 0);
        };
        function Z(M) {
            P = M, T || (T = !0, Ve());
        }
        function De(M, b) {
            _ = C(function() {
                M(e.unstable_now());
            }, b);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
            M.callback = null;
        }, e.unstable_continueExecution = function() {
            v || x || (v = !0, Z(E));
        }, e.unstable_forceFrameRate = function(M) {
            0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < M ? Math.floor(1e3 / M) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return d;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(M) {
            switch(d){
                case 1:
                case 2:
                case 3:
                    var b = 3;
                    break;
                default:
                    b = d;
            }
            var I = d;
            d = b;
            try {
                return M();
            } finally{
                d = I;
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
            var I = d;
            d = M;
            try {
                return b();
            } finally{
                d = I;
            }
        }, e.unstable_scheduleCallback = function(M, b, I) {
            var Y = e.unstable_now();
            switch(typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? Y + I : Y) : I = Y, M){
                case 1:
                    var B = -1;
                    break;
                case 2:
                    B = 250;
                    break;
                case 5:
                    B = 1073741823;
                    break;
                case 4:
                    B = 1e4;
                    break;
                default:
                    B = 5e3;
            }
            return B = I + B, M = {
                id: c++,
                callback: b,
                priorityLevel: M,
                startTime: I,
                expirationTime: B,
                sortIndex: -1
            }, I > Y ? (M.sortIndex = I, t(u, M), n(a) === null && M === n(u) && (h ? (g(_), _ = -1) : h = !0, De(S, I - Y))) : (M.sortIndex = B, t(a, M), v || x || (v = !0, Z(E))), M;
        }, e.unstable_shouldYield = fe, e.unstable_wrapCallback = function(M) {
            var b = d;
            return function() {
                var I = d;
                d = b;
                try {
                    return M.apply(this, arguments);
                } finally{
                    d = I;
                }
            };
        };
    })(Ed);
    _d.exports = Ed;
    var xh = _d.exports;
    var wh = N, Qe = xh;
    function R(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Nd = new Set, Kr = {};
    function jn(e, t) {
        ar(e, t), ar(e + "Capture", t);
    }
    function ar(e, t) {
        for(Kr[e] = t, e = 0; e < t.length; e++)Nd.add(t[e]);
    }
    var Tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Fi = Object.prototype.hasOwnProperty, Sh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wu = {}, Su = {};
    function kh(e) {
        return Fi.call(Su, e) ? !0 : Fi.call(wu, e) ? !1 : Sh.test(e) ? Su[e] = !0 : (wu[e] = !0, !1);
    }
    function Ch(e, t, n, r) {
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
    function _h(e, t, n, r) {
        if (t === null || typeof t > "u" || Ch(e, t, n, r)) return !0;
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
    var Ee = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Ee[e] = new Oe(e, 0, !1, e, null, !1, !1);
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
        Ee[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Ee[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Hs = /[\-:]([a-z])/g;
    function Ks(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Hs, Ks);
        Ee[t] = new Oe(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Hs, Ks);
        Ee[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Hs, Ks);
        Ee[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Ee.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        Ee[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Qs(e, t, n, r) {
        var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_h(t, n, o, r) && (n = null), r || o === null ? kh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var jt = wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Io = Symbol.for("react.element"), Vn = Symbol.for("react.portal"), Gn = Symbol.for("react.fragment"), Ys = Symbol.for("react.strict_mode"), $i = Symbol.for("react.profiler"), Rd = Symbol.for("react.provider"), Id = Symbol.for("react.context"), Xs = Symbol.for("react.forward_ref"), Bi = Symbol.for("react.suspense"), Ui = Symbol.for("react.suspense_list"), Zs = Symbol.for("react.memo"), $t = Symbol.for("react.lazy"), Td = Symbol.for("react.offscreen"), ku = Symbol.iterator;
    function _r(e) {
        return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var se = Object.assign, ai;
    function Lr(e) {
        if (ai === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ai = t && t[1] || "";
        }
        return `
` + ai + e;
    }
    var ui = !1;
    function ci(e, t) {
        if (!e || ui) return "";
        ui = !0;
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
            ui = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
    }
    function Eh(e) {
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
                return e = ci(e.type, !1), e;
            case 11:
                return e = ci(e.type.render, !1), e;
            case 1:
                return e = ci(e.type, !0), e;
            default:
                return "";
        }
    }
    function Vi(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Gn:
                return "Fragment";
            case Vn:
                return "Portal";
            case $i:
                return "Profiler";
            case Ys:
                return "StrictMode";
            case Bi:
                return "Suspense";
            case Ui:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Id:
                return (e.displayName || "Context") + ".Consumer";
            case Rd:
                return (e._context.displayName || "Context") + ".Provider";
            case Xs:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Zs:
                return t = e.displayName || null, t !== null ? t : Vi(e.type) || "Memo";
            case $t:
                t = e._payload, e = e._init;
                try {
                    return Vi(e(t));
                } catch  {}
        }
        return null;
    }
    function Nh(e) {
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
                return Vi(t);
            case 8:
                return t === Ys ? "StrictMode" : "Mode";
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
    function tn(e) {
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
    function zd(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Rh(e) {
        var t = zd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function To(e) {
        e._valueTracker || (e._valueTracker = Rh(e));
    }
    function Pd(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = zd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function sl(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Gi(e, t) {
        var n = t.checked;
        return se({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Cu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = tn(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Md(e, t) {
        t = t.checked, t != null && Qs(e, "checked", t, !1);
    }
    function Wi(e, t) {
        Md(e, t);
        var n = tn(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Hi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Hi(e, t.type, tn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function _u(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Hi(e, t, n) {
        (t !== "number" || sl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Or = Array.isArray;
    function nr(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + tn(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Ki(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
        return se({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Eu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(R(92));
                if (Or(n)) {
                    if (1 < n.length) throw Error(R(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: tn(n)
        };
    }
    function jd(e, t) {
        var n = tn(t.value), r = tn(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Nu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Ld(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Qi(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Ld(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var zo, Od = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(zo = zo || document.createElement("div"), zo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zo.firstChild; e.firstChild;)e.removeChild(e.firstChild);
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
    }, Ih = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Ar).forEach(function(e) {
        Ih.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Ar[t] = Ar[e];
        });
    });
    function Dd(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ar.hasOwnProperty(e) && Ar[e] ? ("" + t).trim() : t + "px";
    }
    function bd(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Dd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Th = se({
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
    function Yi(e, t) {
        if (t) {
            if (Th[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(R(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(R(62));
        }
    }
    function Xi(e, t) {
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
    var Zi = null;
    function Js(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Ji = null, rr = null, or = null;
    function Ru(e) {
        if (e = go(e)) {
            if (typeof Ji != "function") throw Error(R(280));
            var t = e.stateNode;
            t && (t = Fl(t), Ji(e.stateNode, e.type, t));
        }
    }
    function Ad(e) {
        rr ? or ? or.push(e) : or = [
            e
        ] : rr = e;
    }
    function Fd() {
        if (rr) {
            var e = rr, t = or;
            if (or = rr = null, Ru(e), t) for(e = 0; e < t.length; e++)Ru(t[e]);
        }
    }
    function $d(e, t) {
        return e(t);
    }
    function Bd() {}
    var di = !1;
    function Ud(e, t, n) {
        if (di) return e(t, n);
        di = !0;
        try {
            return $d(e, t, n);
        } finally{
            di = !1, (rr !== null || or !== null) && (Bd(), Fd());
        }
    }
    function Yr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Fl(n);
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
        if (n && typeof n != "function") throw Error(R(231, t, typeof n));
        return n;
    }
    var qi = !1;
    if (Tt) try {
        var Er = {};
        Object.defineProperty(Er, "passive", {
            get: function() {
                qi = !0;
            }
        }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
    } catch  {
        qi = !1;
    }
    function zh(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (c) {
            this.onError(c);
        }
    }
    var Fr = !1, al = null, ul = !1, es = null, Ph = {
        onError: function(e) {
            Fr = !0, al = e;
        }
    };
    function Mh(e, t, n, r, o, l, i, s, a) {
        Fr = !1, al = null, zh.apply(Ph, arguments);
    }
    function jh(e, t, n, r, o, l, i, s, a) {
        if (Mh.apply(this, arguments), Fr) {
            if (Fr) {
                var u = al;
                Fr = !1, al = null;
            } else throw Error(R(198));
            ul || (ul = !0, es = u);
        }
    }
    function Ln(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Vd(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Iu(e) {
        if (Ln(e) !== e) throw Error(R(188));
    }
    function Lh(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Ln(e), t === null) throw Error(R(188));
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
                    if (l === n) return Iu(o), e;
                    if (l === r) return Iu(o), t;
                    l = l.sibling;
                }
                throw Error(R(188));
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
                    if (!i) throw Error(R(189));
                }
            }
            if (n.alternate !== r) throw Error(R(190));
        }
        if (n.tag !== 3) throw Error(R(188));
        return n.stateNode.current === n ? e : t;
    }
    function Gd(e) {
        return e = Lh(e), e !== null ? Wd(e) : null;
    }
    function Wd(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Wd(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Hd = Qe.unstable_scheduleCallback, Tu = Qe.unstable_cancelCallback, Oh = Qe.unstable_shouldYield, Dh = Qe.unstable_requestPaint, me = Qe.unstable_now, bh = Qe.unstable_getCurrentPriorityLevel, qs = Qe.unstable_ImmediatePriority, Kd = Qe.unstable_UserBlockingPriority, cl = Qe.unstable_NormalPriority, Ah = Qe.unstable_LowPriority, Qd = Qe.unstable_IdlePriority, Ol = null, St = null;
    function Fh(e) {
        if (St && typeof St.onCommitFiberRoot == "function") try {
            St.onCommitFiberRoot(Ol, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var pt = Math.clz32 ? Math.clz32 : Uh, $h = Math.log, Bh = Math.LN2;
    function Uh(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - ($h(e) / Bh | 0) | 0;
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
    function dl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = Dr(s) : (l &= i, l !== 0 && (r = Dr(l)));
        } else i = n & ~o, i !== 0 ? r = Dr(i) : l !== 0 && (r = Dr(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - pt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function Vh(e, t) {
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
    function Gh(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - pt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = Vh(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function ts(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Yd() {
        var e = Po;
        return Po <<= 1, !(Po & 4194240) && (Po = 64), e;
    }
    function fi(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function mo(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
    }
    function Wh(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - pt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function ea(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - pt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Q = 0;
    function Xd(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Zd, ta, Jd, qd, ef, ns = !1, jo = [], Kt = null, Qt = null, Yt = null, Xr = new Map, Zr = new Map, Ut = [], Hh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function zu(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Kt = null;
                break;
            case "dragenter":
            case "dragleave":
                Qt = null;
                break;
            case "mouseover":
            case "mouseout":
                Yt = null;
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
        }, t !== null && (t = go(t), t !== null && ta(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Kh(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Kt = Nr(Kt, e, t, n, r, o), !0;
            case "dragenter":
                return Qt = Nr(Qt, e, t, n, r, o), !0;
            case "mouseover":
                return Yt = Nr(Yt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Xr.set(l, Nr(Xr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Zr.set(l, Nr(Zr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function tf(e) {
        var t = Sn(e.target);
        if (t !== null) {
            var n = Ln(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Vd(n), t !== null) {
                        e.blockedOn = t, ef(e.priority, function() {
                            Jd(n);
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
    function Qo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = rs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Zi = r, n.target.dispatchEvent(r), Zi = null;
            } else return t = go(n), t !== null && ta(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Pu(e, t, n) {
        Qo(e) && n.delete(t);
    }
    function Qh() {
        ns = !1, Kt !== null && Qo(Kt) && (Kt = null), Qt !== null && Qo(Qt) && (Qt = null), Yt !== null && Qo(Yt) && (Yt = null), Xr.forEach(Pu), Zr.forEach(Pu);
    }
    function Rr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, ns || (ns = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Qh)));
    }
    function Jr(e) {
        function t(o) {
            return Rr(o, e);
        }
        if (0 < jo.length) {
            Rr(jo[0], e);
            for(var n = 1; n < jo.length; n++){
                var r = jo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Kt !== null && Rr(Kt, e), Qt !== null && Rr(Qt, e), Yt !== null && Rr(Yt, e), Xr.forEach(t), Zr.forEach(t), n = 0; n < Ut.length; n++)r = Ut[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Ut.length && (n = Ut[0], n.blockedOn === null);)tf(n), n.blockedOn === null && Ut.shift();
    }
    var lr = jt.ReactCurrentBatchConfig, fl = !0;
    function Yh(e, t, n, r) {
        var o = Q, l = lr.transition;
        lr.transition = null;
        try {
            Q = 1, na(e, t, n, r);
        } finally{
            Q = o, lr.transition = l;
        }
    }
    function Xh(e, t, n, r) {
        var o = Q, l = lr.transition;
        lr.transition = null;
        try {
            Q = 4, na(e, t, n, r);
        } finally{
            Q = o, lr.transition = l;
        }
    }
    function na(e, t, n, r) {
        if (fl) {
            var o = rs(e, t, n, r);
            if (o === null) ki(e, t, r, pl, n), zu(e, r);
            else if (Kh(o, e, t, n, r)) r.stopPropagation();
            else if (zu(e, r), t & 4 && -1 < Hh.indexOf(e)) {
                for(; o !== null;){
                    var l = go(o);
                    if (l !== null && Zd(l), l = rs(e, t, n, r), l === null && ki(e, t, r, pl, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else ki(e, t, r, null, n);
        }
    }
    var pl = null;
    function rs(e, t, n, r) {
        if (pl = null, e = Js(r), e = Sn(e), e !== null) if (t = Ln(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Vd(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return pl = e, null;
    }
    function nf(e) {
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
                switch(bh()){
                    case qs:
                        return 1;
                    case Kd:
                        return 4;
                    case cl:
                    case Ah:
                        return 16;
                    case Qd:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Gt = null, ra = null, Yo = null;
    function rf() {
        if (Yo) return Yo;
        var e, t = ra, n = t.length, r, o = "value" in Gt ? Gt.value : Gt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return Yo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Xo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Lo() {
        return !0;
    }
    function Mu() {
        return !1;
    }
    function Xe(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Lo : Mu, this.isPropagationStopped = Mu, this;
        }
        return se(t.prototype, {
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
    var yr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, oa = Xe(yr), ho = se({}, yr, {
        view: 0,
        detail: 0
    }), Zh = Xe(ho), pi, mi, Ir, Dl = se({}, ho, {
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
        getModifierState: la,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Ir && (Ir && e.type === "mousemove" ? (pi = e.screenX - Ir.screenX, mi = e.screenY - Ir.screenY) : mi = pi = 0, Ir = e), pi);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : mi;
        }
    }), ju = Xe(Dl), Jh = se({}, Dl, {
        dataTransfer: 0
    }), qh = Xe(Jh), eg = se({}, ho, {
        relatedTarget: 0
    }), hi = Xe(eg), tg = se({}, yr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ng = Xe(tg), rg = se({}, yr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), og = Xe(rg), lg = se({}, yr, {
        data: 0
    }), Lu = Xe(lg), ig = {
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
    }, sg = {
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
    }, ag = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function ug(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ag[e]) ? !!t[e] : !1;
    }
    function la() {
        return ug;
    }
    var cg = se({}, ho, {
        key: function(e) {
            if (e.key) {
                var t = ig[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = Xo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sg[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: la,
        charCode: function(e) {
            return e.type === "keypress" ? Xo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Xo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), dg = Xe(cg), fg = se({}, Dl, {
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
    }), Ou = Xe(fg), pg = se({}, ho, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: la
    }), mg = Xe(pg), hg = se({}, yr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), gg = Xe(hg), yg = se({}, Dl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), vg = Xe(yg), xg = [
        9,
        13,
        27,
        32
    ], ia = Tt && "CompositionEvent" in window, $r = null;
    Tt && "documentMode" in document && ($r = document.documentMode);
    var wg = Tt && "TextEvent" in window && !$r, of = Tt && (!ia || $r && 8 < $r && 11 >= $r), Du = " ", bu = !1;
    function lf(e, t) {
        switch(e){
            case "keyup":
                return xg.indexOf(t.keyCode) !== -1;
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
    function sf(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Wn = !1;
    function Sg(e, t) {
        switch(e){
            case "compositionend":
                return sf(t);
            case "keypress":
                return t.which !== 32 ? null : (bu = !0, Du);
            case "textInput":
                return e = t.data, e === Du && bu ? null : e;
            default:
                return null;
        }
    }
    function kg(e, t) {
        if (Wn) return e === "compositionend" || !ia && lf(e, t) ? (e = rf(), Yo = ra = Gt = null, Wn = !1, e) : null;
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
                return of && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Cg = {
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
    function Au(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Cg[e.type] : t === "textarea";
    }
    function af(e, t, n, r) {
        Ad(r), t = ml(t, "onChange"), 0 < t.length && (n = new oa("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Br = null, qr = null;
    function _g(e) {
        xf(e, 0);
    }
    function bl(e) {
        var t = Qn(e);
        if (Pd(t)) return e;
    }
    function Eg(e, t) {
        if (e === "change") return t;
    }
    var uf = !1;
    if (Tt) {
        var gi;
        if (Tt) {
            var yi = "oninput" in document;
            if (!yi) {
                var Fu = document.createElement("div");
                Fu.setAttribute("oninput", "return;"), yi = typeof Fu.oninput == "function";
            }
            gi = yi;
        } else gi = !1;
        uf = gi && (!document.documentMode || 9 < document.documentMode);
    }
    function $u() {
        Br && (Br.detachEvent("onpropertychange", cf), qr = Br = null);
    }
    function cf(e) {
        if (e.propertyName === "value" && bl(qr)) {
            var t = [];
            af(t, qr, e, Js(e)), Ud(_g, t);
        }
    }
    function Ng(e, t, n) {
        e === "focusin" ? ($u(), Br = t, qr = n, Br.attachEvent("onpropertychange", cf)) : e === "focusout" && $u();
    }
    function Rg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return bl(qr);
    }
    function Ig(e, t) {
        if (e === "click") return bl(t);
    }
    function Tg(e, t) {
        if (e === "input" || e === "change") return bl(t);
    }
    function zg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ht = typeof Object.is == "function" ? Object.is : zg;
    function eo(e, t) {
        if (ht(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Fi.call(t, o) || !ht(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Bu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Uu(e, t) {
        var n = Bu(e);
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
            n = Bu(n);
        }
    }
    function df(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? df(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function ff() {
        for(var e = window, t = sl(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = sl(e.document);
        }
        return t;
    }
    function sa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Pg(e) {
        var t = ff(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && df(n.ownerDocument.documentElement, n)) {
            if (r !== null && sa(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Uu(n, l);
                    var i = Uu(n, r);
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
    var Mg = Tt && "documentMode" in document && 11 >= document.documentMode, Hn = null, os = null, Ur = null, ls = !1;
    function Vu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ls || Hn == null || Hn !== sl(r) || (r = Hn, "selectionStart" in r && sa(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Ur && eo(Ur, r) || (Ur = r, r = ml(os, "onSelect"), 0 < r.length && (t = new oa("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Hn)));
    }
    function Oo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Kn = {
        animationend: Oo("Animation", "AnimationEnd"),
        animationiteration: Oo("Animation", "AnimationIteration"),
        animationstart: Oo("Animation", "AnimationStart"),
        transitionend: Oo("Transition", "TransitionEnd")
    }, vi = {}, pf = {};
    Tt && (pf = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
    function Al(e) {
        if (vi[e]) return vi[e];
        if (!Kn[e]) return e;
        var t = Kn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in pf) return vi[e] = t[n];
        return e;
    }
    var mf = Al("animationend"), hf = Al("animationiteration"), gf = Al("animationstart"), yf = Al("transitionend"), vf = new Map, Gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function rn(e, t) {
        vf.set(e, t), jn(t, [
            e
        ]);
    }
    for(var xi = 0; xi < Gu.length; xi++){
        var wi = Gu[xi], jg = wi.toLowerCase(), Lg = wi[0].toUpperCase() + wi.slice(1);
        rn(jg, "on" + Lg);
    }
    rn(mf, "onAnimationEnd");
    rn(hf, "onAnimationIteration");
    rn(gf, "onAnimationStart");
    rn("dblclick", "onDoubleClick");
    rn("focusin", "onFocus");
    rn("focusout", "onBlur");
    rn(yf, "onTransitionEnd");
    ar("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    ar("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    ar("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    ar("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    jn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Og = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
    function Wu(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, jh(r, t, void 0, e), e.currentTarget = null;
    }
    function xf(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Wu(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Wu(o, s, u), l = a;
                }
            }
        }
        if (ul) throw e = es, ul = !1, es = null, e;
    }
    function ee(e, t) {
        var n = t[cs];
        n === void 0 && (n = t[cs] = new Set);
        var r = e + "__bubble";
        n.has(r) || (wf(t, e, 2, !1), n.add(r));
    }
    function Si(e, t, n) {
        var r = 0;
        t && (r |= 4), wf(n, e, r, t);
    }
    var Do = "_reactListening" + Math.random().toString(36).slice(2);
    function to(e) {
        if (!e[Do]) {
            e[Do] = !0, Nd.forEach(function(n) {
                n !== "selectionchange" && (Og.has(n) || Si(n, !1, e), Si(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Do] || (t[Do] = !0, Si("selectionchange", !1, t));
        }
    }
    function wf(e, t, n, r) {
        switch(nf(t)){
            case 1:
                var o = Yh;
                break;
            case 4:
                o = Xh;
                break;
            default:
                o = na;
        }
        n = o.bind(null, t, n, e), o = void 0, !qi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function ki(e, t, n, r, o) {
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
        Ud(function() {
            var u = l, c = Js(n), f = [];
            e: {
                var d = vf.get(e);
                if (d !== void 0) {
                    var x = oa, v = e;
                    switch(e){
                        case "keypress":
                            if (Xo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            x = dg;
                            break;
                        case "focusin":
                            v = "focus", x = hi;
                            break;
                        case "focusout":
                            v = "blur", x = hi;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            x = hi;
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
                            x = ju;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            x = qh;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            x = mg;
                            break;
                        case mf:
                        case hf:
                        case gf:
                            x = ng;
                            break;
                        case yf:
                            x = gg;
                            break;
                        case "scroll":
                            x = Zh;
                            break;
                        case "wheel":
                            x = vg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            x = og;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            x = Ou;
                    }
                    var h = (t & 4) !== 0, C = !h && e === "scroll", g = h ? d !== null ? d + "Capture" : null : d;
                    h = [];
                    for(var m = u, p; m !== null;){
                        p = m;
                        var S = p.stateNode;
                        if (p.tag === 5 && S !== null && (p = S, g !== null && (S = Yr(m, g), S != null && h.push(no(m, S, p)))), C) break;
                        m = m.return;
                    }
                    0 < h.length && (d = new x(d, v, null, n, c), f.push({
                        event: d,
                        listeners: h
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (d = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", d && n !== Zi && (v = n.relatedTarget || n.fromElement) && (Sn(v) || v[zt])) break e;
                    if ((x || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = u, v = v ? Sn(v) : null, v !== null && (C = Ln(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = u), x !== v)) {
                        if (h = ju, S = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (h = Ou, S = "onPointerLeave", g = "onPointerEnter", m = "pointer"), C = x == null ? d : Qn(x), p = v == null ? d : Qn(v), d = new h(S, m + "leave", x, n, c), d.target = C, d.relatedTarget = p, S = null, Sn(c) === u && (h = new h(g, m + "enter", v, n, c), h.target = p, h.relatedTarget = C, S = h), C = S, x && v) t: {
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
                        x !== null && Hu(f, d, x, h, !1), v !== null && C !== null && Hu(f, C, v, h, !0);
                    }
                }
                e: {
                    if (d = u ? Qn(u) : window, x = d.nodeName && d.nodeName.toLowerCase(), x === "select" || x === "input" && d.type === "file") var E = Eg;
                    else if (Au(d)) if (uf) E = Tg;
                    else {
                        E = Rg;
                        var T = Ng;
                    }
                    else (x = d.nodeName) && x.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = Ig);
                    if (E && (E = E(e, u))) {
                        af(f, E, n, c);
                        break e;
                    }
                    T && T(e, d, u), e === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && Hi(d, "number", d.value);
                }
                switch(T = u ? Qn(u) : window, e){
                    case "focusin":
                        (Au(T) || T.contentEditable === "true") && (Hn = T, os = u, Ur = null);
                        break;
                    case "focusout":
                        Ur = os = Hn = null;
                        break;
                    case "mousedown":
                        ls = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ls = !1, Vu(f, n, c);
                        break;
                    case "selectionchange":
                        if (Mg) break;
                    case "keydown":
                    case "keyup":
                        Vu(f, n, c);
                }
                var P;
                if (ia) e: {
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
                else Wn ? lf(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
                _ && (of && n.locale !== "ko" && (Wn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Wn && (P = rf()) : (Gt = c, ra = "value" in Gt ? Gt.value : Gt.textContent, Wn = !0)), T = ml(u, _), 0 < T.length && (_ = new Lu(_, e, null, n, c), f.push({
                    event: _,
                    listeners: T
                }), P ? _.data = P : (P = sf(n), P !== null && (_.data = P)))), (P = wg ? Sg(e, n) : kg(e, n)) && (u = ml(u, "onBeforeInput"), 0 < u.length && (c = new Lu("onBeforeInput", "beforeinput", null, n, c), f.push({
                    event: c,
                    listeners: u
                }), c.data = P));
            }
            xf(f, t);
        });
    }
    function no(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function ml(e, t) {
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
    function Hu(e, t, n, r, o) {
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
    var Dg = /\r\n?/g, bg = /\u0000|\uFFFD/g;
    function Ku(e) {
        return (typeof e == "string" ? e : "" + e).replace(Dg, `
`).replace(bg, "");
    }
    function bo(e, t, n) {
        if (t = Ku(t), Ku(e) !== t && n) throw Error(R(425));
    }
    function hl() {}
    var is = null, ss = null;
    function as(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var us = typeof setTimeout == "function" ? setTimeout : void 0, Ag = typeof clearTimeout == "function" ? clearTimeout : void 0, Qu = typeof Promise == "function" ? Promise : void 0, Fg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qu < "u" ? function(e) {
        return Qu.resolve(null).then(e).catch($g);
    } : us;
    function $g(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Ci(e, t) {
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
    function Xt(e) {
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
    function Yu(e) {
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
    var vr = Math.random().toString(36).slice(2), wt = "__reactFiber$" + vr, ro = "__reactProps$" + vr, zt = "__reactContainer$" + vr, cs = "__reactEvents$" + vr, Bg = "__reactListeners$" + vr, Ug = "__reactHandles$" + vr;
    function Sn(e) {
        var t = e[wt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[zt] || n[wt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = Yu(e); e !== null;){
                    if (n = e[wt]) return n;
                    e = Yu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function go(e) {
        return e = e[wt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Qn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(R(33));
    }
    function Fl(e) {
        return e[ro] || null;
    }
    var ds = [], Yn = -1;
    function on(e) {
        return {
            current: e
        };
    }
    function te(e) {
        0 > Yn || (e.current = ds[Yn], ds[Yn] = null, Yn--);
    }
    function q(e, t) {
        Yn++, ds[Yn] = e.current, e.current = t;
    }
    var nn = {}, Te = on(nn), $e = on(!1), In = nn;
    function ur(e, t) {
        var n = e.type.contextTypes;
        if (!n) return nn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Be(e) {
        return e = e.childContextTypes, e != null;
    }
    function gl() {
        te($e), te(Te);
    }
    function Xu(e, t, n) {
        if (Te.current !== nn) throw Error(R(168));
        q(Te, t), q($e, n);
    }
    function Sf(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(R(108, Nh(e) || "Unknown", o));
        return se({}, n, r);
    }
    function yl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nn, In = Te.current, q(Te, e), q($e, $e.current), !0;
    }
    function Zu(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(R(169));
        n ? (e = Sf(e, t, In), r.__reactInternalMemoizedMergedChildContext = e, te($e), te(Te), q(Te, e)) : te($e), q($e, n);
    }
    var Et = null, $l = !1, _i = !1;
    function kf(e) {
        Et === null ? Et = [
            e
        ] : Et.push(e);
    }
    function Vg(e) {
        $l = !0, kf(e);
    }
    function ln() {
        if (!_i && Et !== null) {
            _i = !0;
            var e = 0, t = Q;
            try {
                var n = Et;
                for(Q = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Et = null, $l = !1;
            } catch (o) {
                throw Et !== null && (Et = Et.slice(e + 1)), Hd(qs, ln), o;
            } finally{
                Q = t, _i = !1;
            }
        }
        return null;
    }
    var Xn = [], Zn = 0, vl = null, xl = 0, qe = [], et = 0, Tn = null, Nt = 1, Rt = "";
    function vn(e, t) {
        Xn[Zn++] = xl, Xn[Zn++] = vl, vl = e, xl = t;
    }
    function Cf(e, t, n) {
        qe[et++] = Nt, qe[et++] = Rt, qe[et++] = Tn, Tn = e;
        var r = Nt;
        e = Rt;
        var o = 32 - pt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - pt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Nt = 1 << 32 - pt(t) + o | n << o | r, Rt = l + e;
        } else Nt = 1 << l | n << o | r, Rt = e;
    }
    function aa(e) {
        e.return !== null && (vn(e, 1), Cf(e, 1, 0));
    }
    function ua(e) {
        for(; e === vl;)vl = Xn[--Zn], Xn[Zn] = null, xl = Xn[--Zn], Xn[Zn] = null;
        for(; e === Tn;)Tn = qe[--et], qe[et] = null, Rt = qe[--et], qe[et] = null, Nt = qe[--et], qe[et] = null;
    }
    var Ke = null, He = null, oe = !1, dt = null;
    function _f(e, t) {
        var n = nt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function Ju(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = Xt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? {
                    id: Nt,
                    overflow: Rt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, He = null, !0) : !1;
            default:
                return !1;
        }
    }
    function fs(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ps(e) {
        if (oe) {
            var t = He;
            if (t) {
                var n = t;
                if (!Ju(e, t)) {
                    if (fs(e)) throw Error(R(418));
                    t = Xt(n.nextSibling);
                    var r = Ke;
                    t && Ju(e, t) ? _f(r, n) : (e.flags = e.flags & -4097 | 2, oe = !1, Ke = e);
                }
            } else {
                if (fs(e)) throw Error(R(418));
                e.flags = e.flags & -4097 | 2, oe = !1, Ke = e;
            }
        }
    }
    function qu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ke = e;
    }
    function Ao(e) {
        if (e !== Ke) return !1;
        if (!oe) return qu(e), oe = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !as(e.type, e.memoizedProps)), t && (t = He)) {
            if (fs(e)) throw Ef(), Error(R(418));
            for(; t;)_f(e, t), t = Xt(t.nextSibling);
        }
        if (qu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                He = Xt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                He = null;
            }
        } else He = Ke ? Xt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Ef() {
        for(var e = He; e;)e = Xt(e.nextSibling);
    }
    function cr() {
        He = Ke = null, oe = !1;
    }
    function ca(e) {
        dt === null ? dt = [
            e
        ] : dt.push(e);
    }
    var Gg = jt.ReactCurrentBatchConfig;
    function Tr(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(R(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(R(147, e));
                var o = r, l = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                    var s = o.refs;
                    i === null ? delete s[l] : s[l] = i;
                }, t._stringRef = l, t);
            }
            if (typeof e != "string") throw Error(R(284));
            if (!n._owner) throw Error(R(290, e));
        }
        return e;
    }
    function Fo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function ec(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Nf(e) {
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
            return g = en(g, m), g.index = 0, g.sibling = null, g;
        }
        function l(g, m, p) {
            return g.index = p, e ? (p = g.alternate, p !== null ? (p = p.index, p < m ? (g.flags |= 2, m) : p) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
        }
        function i(g) {
            return e && g.alternate === null && (g.flags |= 2), g;
        }
        function s(g, m, p, S) {
            return m === null || m.tag !== 6 ? (m = Pi(p, g.mode, S), m.return = g, m) : (m = o(m, p), m.return = g, m);
        }
        function a(g, m, p, S) {
            var E = p.type;
            return E === Gn ? c(g, m, p.props.children, S, p.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === $t && ec(E) === m.type) ? (S = o(m, p.props), S.ref = Tr(g, m, p), S.return = g, S) : (S = rl(p.type, p.key, p.props, null, g.mode, S), S.ref = Tr(g, m, p), S.return = g, S);
        }
        function u(g, m, p, S) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = Mi(p, g.mode, S), m.return = g, m) : (m = o(m, p.children || []), m.return = g, m);
        }
        function c(g, m, p, S, E) {
            return m === null || m.tag !== 7 ? (m = En(p, g.mode, S, E), m.return = g, m) : (m = o(m, p), m.return = g, m);
        }
        function f(g, m, p) {
            if (typeof m == "string" && m !== "" || typeof m == "number") return m = Pi("" + m, g.mode, p), m.return = g, m;
            if (typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case Io:
                        return p = rl(m.type, m.key, m.props, null, g.mode, p), p.ref = Tr(g, null, m), p.return = g, p;
                    case Vn:
                        return m = Mi(m, g.mode, p), m.return = g, m;
                    case $t:
                        var S = m._init;
                        return f(g, S(m._payload), p);
                }
                if (Or(m) || _r(m)) return m = En(m, g.mode, p, null), m.return = g, m;
                Fo(g, m);
            }
            return null;
        }
        function d(g, m, p, S) {
            var E = m !== null ? m.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : s(g, m, "" + p, S);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Io:
                        return p.key === E ? a(g, m, p, S) : null;
                    case Vn:
                        return p.key === E ? u(g, m, p, S) : null;
                    case $t:
                        return E = p._init, d(g, m, E(p._payload), S);
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
                    case Io:
                        return g = g.get(S.key === null ? p : S.key) || null, a(m, g, S, E);
                    case Vn:
                        return g = g.get(S.key === null ? p : S.key) || null, u(m, g, S, E);
                    case $t:
                        var T = S._init;
                        return x(g, m, p, T(S._payload), E);
                }
                if (Or(S) || _r(S)) return g = g.get(p) || null, c(m, g, S, E, null);
                Fo(m, S);
            }
            return null;
        }
        function v(g, m, p, S) {
            for(var E = null, T = null, P = m, _ = m = 0, U = null; P !== null && _ < p.length; _++){
                P.index > _ ? (U = P, P = null) : U = P.sibling;
                var A = d(g, P, p[_], S);
                if (A === null) {
                    P === null && (P = U);
                    break;
                }
                e && P && A.alternate === null && t(g, P), m = l(A, m, _), T === null ? E = A : T.sibling = A, T = A, P = U;
            }
            if (_ === p.length) return n(g, P), oe && vn(g, _), E;
            if (P === null) {
                for(; _ < p.length; _++)P = f(g, p[_], S), P !== null && (m = l(P, m, _), T === null ? E = P : T.sibling = P, T = P);
                return oe && vn(g, _), E;
            }
            for(P = r(g, P); _ < p.length; _++)U = x(P, g, _, p[_], S), U !== null && (e && U.alternate !== null && P.delete(U.key === null ? _ : U.key), m = l(U, m, _), T === null ? E = U : T.sibling = U, T = U);
            return e && P.forEach(function(fe) {
                return t(g, fe);
            }), oe && vn(g, _), E;
        }
        function h(g, m, p, S) {
            var E = _r(p);
            if (typeof E != "function") throw Error(R(150));
            if (p = E.call(p), p == null) throw Error(R(151));
            for(var T = E = null, P = m, _ = m = 0, U = null, A = p.next(); P !== null && !A.done; _++, A = p.next()){
                P.index > _ ? (U = P, P = null) : U = P.sibling;
                var fe = d(g, P, A.value, S);
                if (fe === null) {
                    P === null && (P = U);
                    break;
                }
                e && P && fe.alternate === null && t(g, P), m = l(fe, m, _), T === null ? E = fe : T.sibling = fe, T = fe, P = U;
            }
            if (A.done) return n(g, P), oe && vn(g, _), E;
            if (P === null) {
                for(; !A.done; _++, A = p.next())A = f(g, A.value, S), A !== null && (m = l(A, m, _), T === null ? E = A : T.sibling = A, T = A);
                return oe && vn(g, _), E;
            }
            for(P = r(g, P); !A.done; _++, A = p.next())A = x(P, g, _, A.value, S), A !== null && (e && A.alternate !== null && P.delete(A.key === null ? _ : A.key), m = l(A, m, _), T === null ? E = A : T.sibling = A, T = A);
            return e && P.forEach(function(ze) {
                return t(g, ze);
            }), oe && vn(g, _), E;
        }
        function C(g, m, p, S) {
            if (typeof p == "object" && p !== null && p.type === Gn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case Io:
                        e: {
                            for(var E = p.key, T = m; T !== null;){
                                if (T.key === E) {
                                    if (E = p.type, E === Gn) {
                                        if (T.tag === 7) {
                                            n(g, T.sibling), m = o(T, p.props.children), m.return = g, g = m;
                                            break e;
                                        }
                                    } else if (T.elementType === E || typeof E == "object" && E !== null && E.$$typeof === $t && ec(E) === T.type) {
                                        n(g, T.sibling), m = o(T, p.props), m.ref = Tr(g, T, p), m.return = g, g = m;
                                        break e;
                                    }
                                    n(g, T);
                                    break;
                                } else t(g, T);
                                T = T.sibling;
                            }
                            p.type === Gn ? (m = En(p.props.children, g.mode, S, p.key), m.return = g, g = m) : (S = rl(p.type, p.key, p.props, null, g.mode, S), S.ref = Tr(g, m, p), S.return = g, g = S);
                        }
                        return i(g);
                    case Vn:
                        e: {
                            for(T = p.key; m !== null;){
                                if (m.key === T) if (m.tag === 4 && m.stateNode.containerInfo === p.containerInfo && m.stateNode.implementation === p.implementation) {
                                    n(g, m.sibling), m = o(m, p.children || []), m.return = g, g = m;
                                    break e;
                                } else {
                                    n(g, m);
                                    break;
                                }
                                else t(g, m);
                                m = m.sibling;
                            }
                            m = Mi(p, g.mode, S), m.return = g, g = m;
                        }
                        return i(g);
                    case $t:
                        return T = p._init, C(g, m, T(p._payload), S);
                }
                if (Or(p)) return v(g, m, p, S);
                if (_r(p)) return h(g, m, p, S);
                Fo(g, p);
            }
            return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, p), m.return = g, g = m) : (n(g, m), m = Pi(p, g.mode, S), m.return = g, g = m), i(g)) : n(g, m);
        }
        return C;
    }
    var dr = Nf(!0), Rf = Nf(!1), wl = on(null), Sl = null, Jn = null, da = null;
    function fa() {
        da = Jn = Sl = null;
    }
    function pa(e) {
        var t = wl.current;
        te(wl), e._currentValue = t;
    }
    function ms(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function ir(e, t) {
        Sl = e, da = Jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
    }
    function ot(e) {
        var t = e._currentValue;
        if (da !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Jn === null) {
            if (Sl === null) throw Error(R(308));
            Jn = e, Sl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Jn = Jn.next = e;
        return t;
    }
    var kn = null;
    function ma(e) {
        kn === null ? kn = [
            e
        ] : kn.push(e);
    }
    function If(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, ma(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Pt(e, r);
    }
    function Pt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Bt = !1;
    function ha(e) {
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
    function Tf(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function It(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function Zt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, K & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Pt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, ma(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Pt(e, n);
    }
    function Zo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ea(e, n);
        }
    }
    function tc(e, t) {
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
    function kl(e, t, n, r) {
        var o = e.updateQueue;
        Bt = !1;
        var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
        if (s !== null) {
            o.shared.pending = null;
            var a = s, u = a.next;
            a.next = null, i === null ? l = u : i.next = u, i = a;
            var c = e.alternate;
            c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== i && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = a));
        }
        if (l !== null) {
            var f = o.baseState;
            i = 0, c = u = a = null, s = l;
            do {
                var d = s.lane, x = s.eventTime;
                if ((r & d) === d) {
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
                        switch(d = t, x = n, h.tag){
                            case 1:
                                if (v = h.payload, typeof v == "function") {
                                    f = v.call(x, f, d);
                                    break e;
                                }
                                f = v;
                                break e;
                            case 3:
                                v.flags = v.flags & -65537 | 128;
                            case 0:
                                if (v = h.payload, d = typeof v == "function" ? v.call(x, f, d) : v, d == null) break e;
                                f = se({}, f, d);
                                break e;
                            case 2:
                                Bt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [
                        s
                    ] : d.push(s));
                } else x = {
                    eventTime: x,
                    lane: d,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, c === null ? (u = c = x, a = f) : c = c.next = x, i |= d;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
                }
            }while (!0);
            if (c === null && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            Pn |= i, e.lanes = i, e.memoizedState = f;
        }
    }
    function nc(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
                o.call(r);
            }
        }
    }
    var yo = {}, kt = on(yo), oo = on(yo), lo = on(yo);
    function Cn(e) {
        if (e === yo) throw Error(R(174));
        return e;
    }
    function ga(e, t) {
        switch(q(lo, t), q(oo, e), q(kt, yo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Qi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qi(t, e);
        }
        te(kt), q(kt, t);
    }
    function fr() {
        te(kt), te(oo), te(lo);
    }
    function zf(e) {
        Cn(lo.current);
        var t = Cn(kt.current), n = Qi(t, e.type);
        t !== n && (q(oo, e), q(kt, n));
    }
    function ya(e) {
        oo.current === e && (te(kt), te(oo));
    }
    var le = on(0);
    function Cl(e) {
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
    var Ei = [];
    function va() {
        for(var e = 0; e < Ei.length; e++)Ei[e]._workInProgressVersionPrimary = null;
        Ei.length = 0;
    }
    var Jo = jt.ReactCurrentDispatcher, Ni = jt.ReactCurrentBatchConfig, zn = 0, ie = null, ve = null, we = null, _l = !1, Vr = !1, io = 0, Wg = 0;
    function Ne() {
        throw Error(R(321));
    }
    function xa(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!ht(e[n], t[n])) return !1;
        return !0;
    }
    function wa(e, t, n, r, o, l) {
        if (zn = l, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jo.current = e === null || e.memoizedState === null ? Yg : Xg, e = n(r, o), Vr) {
            l = 0;
            do {
                if (Vr = !1, io = 0, 25 <= l) throw Error(R(301));
                l += 1, we = ve = null, t.updateQueue = null, Jo.current = Zg, e = n(r, o);
            }while (Vr);
        }
        if (Jo.current = El, t = ve !== null && ve.next !== null, zn = 0, we = ve = ie = null, _l = !1, t) throw Error(R(300));
        return e;
    }
    function Sa() {
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
        return we === null ? ie.memoizedState = we = e : we = we.next = e, we;
    }
    function lt() {
        if (ve === null) {
            var e = ie.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ve.next;
        var t = we === null ? ie.memoizedState : we.next;
        if (t !== null) we = t, ve = e;
        else {
            if (e === null) throw Error(R(310));
            ve = e, e = {
                memoizedState: ve.memoizedState,
                baseState: ve.baseState,
                baseQueue: ve.baseQueue,
                queue: ve.queue,
                next: null
            }, we === null ? ie.memoizedState = we = e : we = we.next = e;
        }
        return we;
    }
    function so(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Ri(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(R(311));
        n.lastRenderedReducer = e;
        var r = ve, o = r.baseQueue, l = n.pending;
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
                if ((zn & c) === c) a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                else {
                    var f = {
                        lane: c,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    };
                    a === null ? (s = a = f, i = r) : a = a.next = f, ie.lanes |= c, Pn |= c;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, ht(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ie.lanes |= l, Pn |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Ii(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(R(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            ht(l, t.memoizedState) || (Fe = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Pf() {}
    function Mf(e, t) {
        var n = ie, r = lt(), o = t(), l = !ht(r.memoizedState, o);
        if (l && (r.memoizedState = o, Fe = !0), r = r.queue, ka(Of.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || we !== null && we.memoizedState.tag & 1) {
            if (n.flags |= 2048, ao(9, Lf.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(R(349));
            zn & 30 || jf(n, t, o);
        }
        return o;
    }
    function jf(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = ie.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ie.updateQueue = t, t.stores = [
            e
        ]) : (n = t.stores, n === null ? t.stores = [
            e
        ] : n.push(e));
    }
    function Lf(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Df(t) && bf(e);
    }
    function Of(e, t, n) {
        return n(function() {
            Df(t) && bf(e);
        });
    }
    function Df(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ht(e, n);
        } catch  {
            return !0;
        }
    }
    function bf(e) {
        var t = Pt(e, 1);
        t !== null && mt(t, e, 1, -1);
    }
    function rc(e) {
        var t = xt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: so,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Qg.bind(null, ie, e), [
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
        }, t = ie.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ie.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Af() {
        return lt().memoizedState;
    }
    function qo(e, t, n, r) {
        var o = xt();
        ie.flags |= e, o.memoizedState = ao(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Bl(e, t, n, r) {
        var o = lt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ve !== null) {
            var i = ve.memoizedState;
            if (l = i.destroy, r !== null && xa(r, i.deps)) {
                o.memoizedState = ao(t, n, l, r);
                return;
            }
        }
        ie.flags |= e, o.memoizedState = ao(1 | t, n, l, r);
    }
    function oc(e, t) {
        return qo(8390656, 8, e, t);
    }
    function ka(e, t) {
        return Bl(2048, 8, e, t);
    }
    function Ff(e, t) {
        return Bl(4, 2, e, t);
    }
    function $f(e, t) {
        return Bl(4, 4, e, t);
    }
    function Bf(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Uf(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Bl(4, 4, Bf.bind(null, t, e), n);
    }
    function Ca() {}
    function Vf(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && xa(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Gf(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && xa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Wf(e, t, n) {
        return zn & 21 ? (ht(n, t) || (n = Yd(), ie.lanes |= n, Pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
    }
    function Hg(e, t) {
        var n = Q;
        Q = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Ni.transition;
        Ni.transition = {};
        try {
            e(!1), t();
        } finally{
            Q = n, Ni.transition = r;
        }
    }
    function Hf() {
        return lt().memoizedState;
    }
    function Kg(e, t, n) {
        var r = qt(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Kf(e)) Qf(t, n);
        else if (n = If(e, t, n, r), n !== null) {
            var o = je();
            mt(n, e, r, o), Yf(n, t, r);
        }
    }
    function Qg(e, t, n) {
        var r = qt(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Kf(e)) Qf(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, ht(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, ma(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = If(e, t, o, r), n !== null && (o = je(), mt(n, e, r, o), Yf(n, t, r));
        }
    }
    function Kf(e) {
        var t = e.alternate;
        return e === ie || t !== null && t === ie;
    }
    function Qf(e, t) {
        Vr = _l = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Yf(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ea(e, n);
        }
    }
    var El = {
        readContext: ot,
        useCallback: Ne,
        useContext: Ne,
        useEffect: Ne,
        useImperativeHandle: Ne,
        useInsertionEffect: Ne,
        useLayoutEffect: Ne,
        useMemo: Ne,
        useReducer: Ne,
        useRef: Ne,
        useState: Ne,
        useDebugValue: Ne,
        useDeferredValue: Ne,
        useTransition: Ne,
        useMutableSource: Ne,
        useSyncExternalStore: Ne,
        useId: Ne,
        unstable_isNewReconciler: !1
    }, Yg = {
        readContext: ot,
        useCallback: function(e, t) {
            return xt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: ot,
        useEffect: oc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, qo(4194308, 4, Bf.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return qo(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return qo(4, 2, e, t);
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
            }, r.queue = e, e = e.dispatch = Kg.bind(null, ie, e), [
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
        useState: rc,
        useDebugValue: Ca,
        useDeferredValue: function(e) {
            return xt().memoizedState = e;
        },
        useTransition: function() {
            var e = rc(!1), t = e[0];
            return e = Hg.bind(null, e[1]), xt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ie, o = xt();
            if (oe) {
                if (n === void 0) throw Error(R(407));
                n = n();
            } else {
                if (n = t(), Se === null) throw Error(R(349));
                zn & 30 || jf(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, oc(Of.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, ao(9, Lf.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = xt(), t = Se.identifierPrefix;
            if (oe) {
                var n = Rt, r = Nt;
                n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = io++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Wg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Xg = {
        readContext: ot,
        useCallback: Vf,
        useContext: ot,
        useEffect: ka,
        useImperativeHandle: Uf,
        useInsertionEffect: Ff,
        useLayoutEffect: $f,
        useMemo: Gf,
        useReducer: Ri,
        useRef: Af,
        useState: function() {
            return Ri(so);
        },
        useDebugValue: Ca,
        useDeferredValue: function(e) {
            var t = lt();
            return Wf(t, ve.memoizedState, e);
        },
        useTransition: function() {
            var e = Ri(so)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Pf,
        useSyncExternalStore: Mf,
        useId: Hf,
        unstable_isNewReconciler: !1
    }, Zg = {
        readContext: ot,
        useCallback: Vf,
        useContext: ot,
        useEffect: ka,
        useImperativeHandle: Uf,
        useInsertionEffect: Ff,
        useLayoutEffect: $f,
        useMemo: Gf,
        useReducer: Ii,
        useRef: Af,
        useState: function() {
            return Ii(so);
        },
        useDebugValue: Ca,
        useDeferredValue: function(e) {
            var t = lt();
            return ve === null ? t.memoizedState = e : Wf(t, ve.memoizedState, e);
        },
        useTransition: function() {
            var e = Ii(so)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Pf,
        useSyncExternalStore: Mf,
        useId: Hf,
        unstable_isNewReconciler: !1
    };
    function ut(e, t) {
        if (e && e.defaultProps) {
            t = se({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function hs(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Ul = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Ln(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = je(), o = qt(e), l = It(r, o);
            l.payload = t, n != null && (l.callback = n), t = Zt(e, l, o), t !== null && (mt(t, e, o, r), Zo(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = je(), o = qt(e), l = It(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Zt(e, l, o), t !== null && (mt(t, e, o, r), Zo(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = je(), r = qt(e), o = It(n, r);
            o.tag = 2, t != null && (o.callback = t), t = Zt(e, o, r), t !== null && (mt(t, e, r, n), Zo(t, e, r));
        }
    };
    function lc(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !eo(n, r) || !eo(o, l) : !0;
    }
    function Xf(e, t, n) {
        var r = !1, o = nn, l = t.contextType;
        return typeof l == "object" && l !== null ? l = ot(l) : (o = Be(t) ? In : Te.current, r = t.contextTypes, l = (r = r != null) ? ur(e, o) : nn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function ic(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
    }
    function gs(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, ha(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = ot(l) : (l = Be(t) ? In : Te.current, o.context = ur(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (hs(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ul.enqueueReplaceState(o, o.state, null), kl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function pr(e, t) {
        try {
            var n = "", r = t;
            do n += Eh(r), r = r.return;
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
    function ys(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var Jg = typeof WeakMap == "function" ? WeakMap : Map;
    function Zf(e, t, n) {
        n = It(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Rl || (Rl = !0, Rs = r), ys(e, t);
        }, n;
    }
    function Jf(e, t, n) {
        n = It(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                ys(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            ys(e, t), typeof r != "function" && (Jt === null ? Jt = new Set([
                this
            ]) : Jt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function sc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Jg;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = fy.bind(null, e, t, n), t.then(e, e));
    }
    function ac(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function uc(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = It(-1, 1), t.tag = 2, Zt(n, t, 1))), n.lanes |= 1), e);
    }
    var qg = jt.ReactCurrentOwner, Fe = !1;
    function Me(e, t, n, r) {
        t.child = e === null ? Rf(t, null, n, r) : dr(t, e.child, n, r);
    }
    function cc(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return ir(t, o), r = wa(e, t, n, r, l, o), n = Sa(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mt(e, t, o)) : (oe && n && aa(t), t.flags |= 1, Me(e, t, r, o), t.child);
    }
    function dc(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Pa(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, qf(e, t, l, r, o)) : (e = rl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : eo, n(i, r) && e.ref === t.ref) return Mt(e, t, o);
        }
        return t.flags |= 1, e = en(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function qf(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (eo(l, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
            else return t.lanes = e.lanes, Mt(e, t, o);
        }
        return vs(e, t, n, r, o);
    }
    function ep(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, q(er, Ge), Ge |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, q(er, Ge), Ge |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, q(er, Ge), Ge |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, q(er, Ge), Ge |= r;
        return Me(e, t, o, n), t.child;
    }
    function tp(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function vs(e, t, n, r, o) {
        var l = Be(n) ? In : Te.current;
        return l = ur(t, l), ir(t, o), n = wa(e, t, n, r, l, o), r = Sa(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mt(e, t, o)) : (oe && r && aa(t), t.flags |= 1, Me(e, t, n, o), t.child);
    }
    function fc(e, t, n, r, o) {
        if (Be(n)) {
            var l = !0;
            yl(t);
        } else l = !1;
        if (ir(t, o), t.stateNode === null) el(e, t), Xf(t, n, r), gs(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = ot(u) : (u = Be(n) ? In : Te.current, u = ur(t, u));
            var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && ic(t, i, r, u), Bt = !1;
            var d = t.memoizedState;
            i.state = d, kl(t, r, i, o), a = t.memoizedState, s !== r || d !== a || $e.current || Bt ? (typeof c == "function" && (hs(t, n, c, r), a = t.memoizedState), (s = Bt || lc(t, n, s, r, d, a, u)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Tf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ut(t.type, s), i.props = u, f = t.pendingProps, d = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = Be(n) ? In : Te.current, a = ur(t, a));
            var x = n.getDerivedStateFromProps;
            (c = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== f || d !== a) && ic(t, i, r, a), Bt = !1, d = t.memoizedState, i.state = d, kl(t, r, i, o);
            var v = t.memoizedState;
            s !== f || d !== v || $e.current || Bt ? (typeof x == "function" && (hs(t, n, x, r), v = t.memoizedState), (u = Bt || lc(t, n, u, r, d, v, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return xs(e, t, n, r, l, o);
    }
    function xs(e, t, n, r, o, l) {
        tp(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && Zu(t, n, !1), Mt(e, t, l);
        r = t.stateNode, qg.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = dr(t, e.child, null, l), t.child = dr(t, null, s, l)) : Me(e, t, s, l), t.memoizedState = r.state, o && Zu(t, n, !0), t.child;
    }
    function np(e) {
        var t = e.stateNode;
        t.pendingContext ? Xu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xu(e, t.context, !1), ga(e, t.containerInfo);
    }
    function pc(e, t, n, r, o) {
        return cr(), ca(o), t.flags |= 256, Me(e, t, n, r), t.child;
    }
    var ws = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ss(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function rp(e, t, n) {
        var r = t.pendingProps, o = le.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), q(le, o & 1), e === null) return ps(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Wl(i, r, 0, null), e = En(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ss(n), t.memoizedState = ws, e) : _a(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return ey(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = en(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = en(s, l) : (l = En(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ss(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ws, r;
        }
        return l = e.child, e = l.sibling, r = en(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function _a(e, t) {
        return t = Wl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function $o(e, t, n, r) {
        return r !== null && ca(r), dr(t, e.child, null, n), e = _a(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function ey(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Ti(Error(R(422))), $o(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Wl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = En(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && dr(t, e.child, null, i), t.child.memoizedState = Ss(i), t.memoizedState = ws, l);
        if (!(t.mode & 1)) return $o(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(R(419)), r = Ti(l, r, void 0), $o(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Fe || s) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Pt(e, o), mt(r, e, o, -1));
            }
            return za(), r = Ti(Error(R(421))), $o(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = py.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, He = Xt(o.nextSibling), Ke = t, oe = !0, dt = null, e !== null && (qe[et++] = Nt, qe[et++] = Rt, qe[et++] = Tn, Nt = e.id, Rt = e.overflow, Tn = t), t = _a(t, r.children), t.flags |= 4096, t);
    }
    function mc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), ms(e.return, t, n);
    }
    function zi(e, t, n, r, o) {
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
    function op(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Me(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
                else if (e.tag === 19) mc(e, n, t);
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
        if (q(le, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Cl(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), zi(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Cl(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                zi(t, !0, n, null, l);
                break;
            case "together":
                zi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function el(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Mt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Pn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(R(153));
        if (t.child !== null) {
            for(e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = en(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function ty(e, t, n) {
        switch(t.tag){
            case 3:
                np(t), cr();
                break;
            case 5:
                zf(t);
                break;
            case 1:
                Be(t.type) && yl(t);
                break;
            case 4:
                ga(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                q(wl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (q(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? rp(e, t, n) : (q(le, le.current & 1), e = Mt(e, t, n), e !== null ? e.sibling : null);
                q(le, le.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return op(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), q(le, le.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, ep(e, t, n);
        }
        return Mt(e, t, n);
    }
    var lp, ks, ip, sp;
    lp = function(e, t) {
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
    ks = function() {};
    ip = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, Cn(kt.current);
            var l = null;
            switch(n){
                case "input":
                    o = Gi(e, o), r = Gi(e, r), l = [];
                    break;
                case "select":
                    o = se({}, o, {
                        value: void 0
                    }), r = se({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Ki(e, o), r = Ki(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = hl);
            }
            Yi(n, r);
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
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Kr.hasOwnProperty(u) ? (a != null && u === "onScroll" && ee("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    sp = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function zr(e, t) {
        if (!oe) switch(e.tailMode){
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
    function ny(e, t, n) {
        var r = t.pendingProps;
        switch(ua(t), t.tag){
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
                return Be(t.type) && gl(), Re(t), null;
            case 3:
                return r = t.stateNode, fr(), te($e), te(Te), va(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ao(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (zs(dt), dt = null))), ks(e, t), Re(t), null;
            case 5:
                ya(t);
                var o = Cn(lo.current);
                if (n = t.type, e !== null && t.stateNode != null) ip(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(R(166));
                        return Re(t), null;
                    }
                    if (e = Cn(kt.current), Ao(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[wt] = t, r[ro] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                ee("cancel", r), ee("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ee("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < br.length; o++)ee(br[o], r);
                                break;
                            case "source":
                                ee("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ee("error", r), ee("load", r);
                                break;
                            case "details":
                                ee("toggle", r);
                                break;
                            case "input":
                                Cu(r, l), ee("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, ee("invalid", r);
                                break;
                            case "textarea":
                                Eu(r, l), ee("invalid", r);
                        }
                        Yi(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && bo(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && bo(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Kr.hasOwnProperty(i) && s != null && i === "onScroll" && ee("scroll", r);
                        }
                        switch(n){
                            case "input":
                                To(r), _u(r, l, !0);
                                break;
                            case "textarea":
                                To(r), Nu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = hl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ld(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[wt] = t, e[ro] = r, lp(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = Xi(n, r), n){
                                case "dialog":
                                    ee("cancel", e), ee("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ee("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < br.length; o++)ee(br[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    ee("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ee("error", e), ee("load", e), o = r;
                                    break;
                                case "details":
                                    ee("toggle", e), o = r;
                                    break;
                                case "input":
                                    Cu(e, r), o = Gi(e, r), ee("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = se({}, r, {
                                        value: void 0
                                    }), ee("invalid", e);
                                    break;
                                case "textarea":
                                    Eu(e, r), o = Ki(e, r), ee("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Yi(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? bd(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Od(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Qr(e, a) : typeof a == "number" && Qr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Kr.hasOwnProperty(l) ? a != null && l === "onScroll" && ee("scroll", e) : a != null && Qs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    To(e), _u(e, r, !1);
                                    break;
                                case "textarea":
                                    To(e), Nu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + tn(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? nr(e, !!r.multiple, l, !1) : r.defaultValue != null && nr(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = hl);
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
                if (e && t.stateNode != null) sp(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                    if (n = Cn(lo.current), Cn(kt.current), Ao(t)) {
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
                if (te(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (oe && He !== null && t.mode & 1 && !(t.flags & 128)) Ef(), cr(), t.flags |= 98560, l = !1;
                    else if (l = Ao(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(R(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(R(317));
                            l[wt] = t;
                        } else cr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Re(t), l = !1;
                    } else dt !== null && (zs(dt), dt = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? xe === 0 && (xe = 3) : za())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
            case 4:
                return fr(), ks(e, t), e === null && to(t.stateNode.containerInfo), Re(t), null;
            case 10:
                return pa(t.type._context), Re(t), null;
            case 17:
                return Be(t.type) && gl(), Re(t), null;
            case 19:
                if (te(le), l = t.memoizedState, l === null) return Re(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) zr(l, !1);
                else {
                    if (xe !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Cl(e), i !== null) {
                            for(t.flags |= 128, zr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return q(le, le.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && me() > mr && (t.flags |= 128, r = !0, zr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Cl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), zr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !oe) return Re(t), null;
                    } else 2 * me() - l.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, zr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = me(), t.sibling = null, n = le.current, q(le, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
            case 22:
            case 23:
                return Ta(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ge & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(R(156, t.tag));
    }
    function ry(e, t) {
        switch(ua(t), t.tag){
            case 1:
                return Be(t.type) && gl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return fr(), te($e), te(Te), va(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return ya(t), null;
            case 13:
                if (te(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(R(340));
                    cr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return te(le), null;
            case 4:
                return fr(), null;
            case 10:
                return pa(t.type._context), null;
            case 22:
            case 23:
                return Ta(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Bo = !1, Ie = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, j = null;
    function qn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            de(e, t, r);
        }
        else n.current = null;
    }
    function Cs(e, t, n) {
        try {
            n();
        } catch (r) {
            de(e, t, r);
        }
    }
    var hc = !1;
    function ly(e, t) {
        if (is = fl, e = ff(), sa(e)) {
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
                    var i = 0, s = -1, a = -1, u = 0, c = 0, f = e, d = null;
                    t: for(;;){
                        for(var x; f !== n || o !== 0 && f.nodeType !== 3 || (s = i + o), f !== l || r !== 0 && f.nodeType !== 3 || (a = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (x = f.firstChild) !== null;)d = f, f = x;
                        for(;;){
                            if (f === e) break t;
                            if (d === n && ++u === o && (s = i), d === l && ++c === r && (a = i), (x = f.nextSibling) !== null) break;
                            f = d, d = f.parentNode;
                        }
                        f = x;
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
        for(ss = {
            focusedElem: e,
            selectionRange: n
        }, fl = !1, j = t; j !== null;)if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
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
                            var h = v.memoizedProps, C = v.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? h : ut(t.type, h), C);
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
                        throw Error(R(163));
                }
            } catch (S) {
                de(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, j = e;
                break;
            }
            j = t.return;
        }
        return v = hc, hc = !1, v;
    }
    function Gr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && Cs(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function Vl(e, t) {
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
    function _s(e) {
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
    function ap(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, ap(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[ro], delete t[cs], delete t[Bg], delete t[Ug])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function up(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function gc(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || up(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Es(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = hl));
        else if (r !== 4 && (e = e.child, e !== null)) for(Es(e, t, n), e = e.sibling; e !== null;)Es(e, t, n), e = e.sibling;
    }
    function Ns(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Ns(e, t, n), e = e.sibling; e !== null;)Ns(e, t, n), e = e.sibling;
    }
    var Ce = null, ct = !1;
    function bt(e, t, n) {
        for(n = n.child; n !== null;)cp(e, t, n), n = n.sibling;
    }
    function cp(e, t, n) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
            St.onCommitFiberUnmount(Ol, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Ie || qn(n, t);
            case 6:
                var r = Ce, o = ct;
                Ce = null, bt(e, t, n), Ce = r, ct = o, Ce !== null && (ct ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
                break;
            case 18:
                Ce !== null && (ct ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? Ci(e.parentNode, n) : e.nodeType === 1 && Ci(e, n), Jr(e)) : Ci(Ce, n.stateNode));
                break;
            case 4:
                r = Ce, o = ct, Ce = n.stateNode.containerInfo, ct = !0, bt(e, t, n), Ce = r, ct = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Cs(n, t, i), o = o.next;
                    }while (o !== r);
                }
                bt(e, t, n);
                break;
            case 1:
                if (!Ie && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    de(n, t, s);
                }
                bt(e, t, n);
                break;
            case 21:
                bt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, bt(e, t, n), Ie = r) : bt(e, t, n);
                break;
            default:
                bt(e, t, n);
        }
    }
    function yc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new oy), t.forEach(function(r) {
                var o = my.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function st(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var o = n[r];
            try {
                var l = e, i = t, s = i;
                e: for(; s !== null;){
                    switch(s.tag){
                        case 5:
                            Ce = s.stateNode, ct = !1;
                            break e;
                        case 3:
                            Ce = s.stateNode.containerInfo, ct = !0;
                            break e;
                        case 4:
                            Ce = s.stateNode.containerInfo, ct = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (Ce === null) throw Error(R(160));
                cp(l, i, o), Ce = null, ct = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                de(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)dp(t, e), t = t.sibling;
    }
    function dp(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (st(t, e), yt(e), r & 4) {
                    try {
                        Gr(3, e, e.return), Vl(3, e);
                    } catch (h) {
                        de(e, e.return, h);
                    }
                    try {
                        Gr(5, e, e.return);
                    } catch (h) {
                        de(e, e.return, h);
                    }
                }
                break;
            case 1:
                st(t, e), yt(e), r & 512 && n !== null && qn(n, n.return);
                break;
            case 5:
                if (st(t, e), yt(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        Qr(o, "");
                    } catch (h) {
                        de(e, e.return, h);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Md(o, l), Xi(s, i);
                        var u = Xi(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var c = a[i], f = a[i + 1];
                            c === "style" ? bd(o, f) : c === "dangerouslySetInnerHTML" ? Od(o, f) : c === "children" ? Qr(o, f) : Qs(o, c, f, u);
                        }
                        switch(s){
                            case "input":
                                Wi(o, l);
                                break;
                            case "textarea":
                                jd(o, l);
                                break;
                            case "select":
                                var d = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var x = l.value;
                                x != null ? nr(o, !!l.multiple, x, !1) : d !== !!l.multiple && (l.defaultValue != null ? nr(o, !!l.multiple, l.defaultValue, !0) : nr(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[ro] = l;
                    } catch (h) {
                        de(e, e.return, h);
                    }
                }
                break;
            case 6:
                if (st(t, e), yt(e), r & 4) {
                    if (e.stateNode === null) throw Error(R(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (h) {
                        de(e, e.return, h);
                    }
                }
                break;
            case 3:
                if (st(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Jr(t.containerInfo);
                } catch (h) {
                    de(e, e.return, h);
                }
                break;
            case 4:
                st(t, e), yt(e);
                break;
            case 13:
                st(t, e), yt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Ra = me())), r & 4 && yc(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || c, st(t, e), Ie = u) : st(t, e), yt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for(j = e, c = e.child; c !== null;){
                        for(f = j = c; j !== null;){
                            switch(d = j, x = d.child, d.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Gr(4, d, d.return);
                                    break;
                                case 1:
                                    qn(d, d.return);
                                    var v = d.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = d, n = d.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                                        } catch (h) {
                                            de(r, n, h);
                                        }
                                    }
                                    break;
                                case 5:
                                    qn(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        xc(f);
                                        continue;
                                    }
                            }
                            x !== null ? (x.return = d, j = x) : xc(f);
                        }
                        c = c.sibling;
                    }
                    e: for(c = null, f = e;;){
                        if (f.tag === 5) {
                            if (c === null) {
                                c = f;
                                try {
                                    o = f.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Dd("display", i));
                                } catch (h) {
                                    de(e, e.return, h);
                                }
                            }
                        } else if (f.tag === 6) {
                            if (c === null) try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            } catch (h) {
                                de(e, e.return, h);
                            }
                        } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === e) break e;
                        for(; f.sibling === null;){
                            if (f.return === null || f.return === e) break e;
                            c === f && (c = null), f = f.return;
                        }
                        c === f && (c = null), f.sibling.return = f.return, f = f.sibling;
                    }
                }
                break;
            case 19:
                st(t, e), yt(e), r & 4 && yc(e);
                break;
            case 21:
                break;
            default:
                st(t, e), yt(e);
        }
    }
    function yt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (up(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(R(160));
                }
                switch(r.tag){
                    case 5:
                        var o = r.stateNode;
                        r.flags & 32 && (Qr(o, ""), r.flags &= -33);
                        var l = gc(e);
                        Ns(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = gc(e);
                        Es(e, s, i);
                        break;
                    default:
                        throw Error(R(161));
                }
            } catch (a) {
                de(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function iy(e, t, n) {
        j = e, fp(e);
    }
    function fp(e, t, n) {
        for(var r = (e.mode & 1) !== 0; j !== null;){
            var o = j, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Bo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || Ie;
                    s = Bo;
                    var u = Ie;
                    if (Bo = i, (Ie = a) && !u) for(j = o; j !== null;)i = j, a = i.child, i.tag === 22 && i.memoizedState !== null ? wc(o) : a !== null ? (a.return = i, j = a) : wc(o);
                    for(; l !== null;)j = l, fp(l), l = l.sibling;
                    j = o, Bo = s, Ie = u;
                }
                vc(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, j = l) : vc(e);
        }
    }
    function vc(e) {
        for(; j !== null;){
            var t = j;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Ie || Vl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && nc(t, l, r);
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
                                nc(t, i, n);
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
                                        var f = c.dehydrated;
                                        f !== null && Jr(f);
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
                            throw Error(R(163));
                    }
                    Ie || t.flags & 512 && _s(t);
                } catch (d) {
                    de(t, t.return, d);
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
    function xc(e) {
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
    function wc(e) {
        for(; j !== null;){
            var t = j;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Vl(4, t);
                        } catch (a) {
                            de(t, n, a);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (a) {
                                de(t, o, a);
                            }
                        }
                        var l = t.return;
                        try {
                            _s(t);
                        } catch (a) {
                            de(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            _s(t);
                        } catch (a) {
                            de(t, i, a);
                        }
                }
            } catch (a) {
                de(t, t.return, a);
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
    var sy = Math.ceil, Nl = jt.ReactCurrentDispatcher, Ea = jt.ReactCurrentOwner, rt = jt.ReactCurrentBatchConfig, K = 0, Se = null, ge = null, _e = 0, Ge = 0, er = on(0), xe = 0, uo = null, Pn = 0, Gl = 0, Na = 0, Wr = null, Ae = null, Ra = 0, mr = 1 / 0, _t = null, Rl = !1, Rs = null, Jt = null, Uo = !1, Wt = null, Il = 0, Hr = 0, Is = null, tl = -1, nl = 0;
    function je() {
        return K & 6 ? me() : tl !== -1 ? tl : tl = me();
    }
    function qt(e) {
        return e.mode & 1 ? K & 2 && _e !== 0 ? _e & -_e : Gg.transition !== null ? (nl === 0 && (nl = Yd()), nl) : (e = Q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nf(e.type)), e) : 1;
    }
    function mt(e, t, n, r) {
        if (50 < Hr) throw Hr = 0, Is = null, Error(R(185));
        mo(e, n, r), (!(K & 2) || e !== Se) && (e === Se && (!(K & 2) && (Gl |= n), xe === 4 && Vt(e, _e)), Ue(e, r), n === 1 && K === 0 && !(t.mode & 1) && (mr = me() + 500, $l && ln()));
    }
    function Ue(e, t) {
        var n = e.callbackNode;
        Gh(e, t);
        var r = dl(e, e === Se ? _e : 0);
        if (r === 0) n !== null && Tu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Tu(n), t === 1) e.tag === 0 ? Vg(Sc.bind(null, e)) : kf(Sc.bind(null, e)), Fg(function() {
                !(K & 6) && ln();
            }), n = null;
            else {
                switch(Xd(r)){
                    case 1:
                        n = qs;
                        break;
                    case 4:
                        n = Kd;
                        break;
                    case 16:
                        n = cl;
                        break;
                    case 536870912:
                        n = Qd;
                        break;
                    default:
                        n = cl;
                }
                n = wp(n, pp.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function pp(e, t) {
        if (tl = -1, nl = 0, K & 6) throw Error(R(327));
        var n = e.callbackNode;
        if (sr() && e.callbackNode !== n) return null;
        var r = dl(e, e === Se ? _e : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Tl(e, r);
        else {
            t = r;
            var o = K;
            K |= 2;
            var l = hp();
            (Se !== e || _e !== t) && (_t = null, mr = me() + 500, _n(e, t));
            do try {
                cy();
                break;
            } catch (s) {
                mp(e, s);
            }
            while (!0);
            fa(), Nl.current = l, K = o, ge !== null ? t = 0 : (Se = null, _e = 0, t = xe);
        }
        if (t !== 0) {
            if (t === 2 && (o = ts(e), o !== 0 && (r = o, t = Ts(e, o))), t === 1) throw n = uo, _n(e, 0), Vt(e, r), Ue(e, me()), n;
            if (t === 6) Vt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !ay(o) && (t = Tl(e, r), t === 2 && (l = ts(e), l !== 0 && (r = l, t = Ts(e, l))), t === 1)) throw n = uo, _n(e, 0), Vt(e, r), Ue(e, me()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(R(345));
                    case 2:
                        xn(e, Ae, _t);
                        break;
                    case 3:
                        if (Vt(e, r), (r & 130023424) === r && (t = Ra + 500 - me(), 10 < t)) {
                            if (dl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                je(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = us(xn.bind(null, e, Ae, _t), t);
                            break;
                        }
                        xn(e, Ae, _t);
                        break;
                    case 4:
                        if (Vt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - pt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sy(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = us(xn.bind(null, e, Ae, _t), r);
                            break;
                        }
                        xn(e, Ae, _t);
                        break;
                    case 5:
                        xn(e, Ae, _t);
                        break;
                    default:
                        throw Error(R(329));
                }
            }
        }
        return Ue(e, me()), e.callbackNode === n ? pp.bind(null, e) : null;
    }
    function Ts(e, t) {
        var n = Wr;
        return e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256), e = Tl(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && zs(t)), e;
    }
    function zs(e) {
        Ae === null ? Ae = e : Ae.push.apply(Ae, e);
    }
    function ay(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!ht(l(), o)) return !1;
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
    function Vt(e, t) {
        for(t &= ~Na, t &= ~Gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - pt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Sc(e) {
        if (K & 6) throw Error(R(327));
        sr();
        var t = dl(e, 0);
        if (!(t & 1)) return Ue(e, me()), null;
        var n = Tl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ts(e);
            r !== 0 && (t = r, n = Ts(e, r));
        }
        if (n === 1) throw n = uo, _n(e, 0), Vt(e, t), Ue(e, me()), n;
        if (n === 6) throw Error(R(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, Ae, _t), Ue(e, me()), null;
    }
    function Ia(e, t) {
        var n = K;
        K |= 1;
        try {
            return e(t);
        } finally{
            K = n, K === 0 && (mr = me() + 500, $l && ln());
        }
    }
    function Mn(e) {
        Wt !== null && Wt.tag === 0 && !(K & 6) && sr();
        var t = K;
        K |= 1;
        var n = rt.transition, r = Q;
        try {
            if (rt.transition = null, Q = 1, e) return e();
        } finally{
            Q = r, rt.transition = n, K = t, !(K & 6) && ln();
        }
    }
    function Ta() {
        Ge = er.current, te(er);
    }
    function _n(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Ag(n)), ge !== null) for(n = ge.return; n !== null;){
            var r = n;
            switch(ua(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && gl();
                    break;
                case 3:
                    fr(), te($e), te(Te), va();
                    break;
                case 5:
                    ya(r);
                    break;
                case 4:
                    fr();
                    break;
                case 13:
                    te(le);
                    break;
                case 19:
                    te(le);
                    break;
                case 10:
                    pa(r.type._context);
                    break;
                case 22:
                case 23:
                    Ta();
            }
            n = n.return;
        }
        if (Se = e, ge = e = en(e.current, null), _e = Ge = t, xe = 0, uo = null, Na = Gl = Pn = 0, Ae = Wr = null, kn !== null) {
            for(t = 0; t < kn.length; t++)if (n = kn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            kn = null;
        }
        return e;
    }
    function mp(e, t) {
        do {
            var n = ge;
            try {
                if (fa(), Jo.current = El, _l) {
                    for(var r = ie.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    _l = !1;
                }
                if (zn = 0, we = ve = ie = null, Vr = !1, io = 0, Ea.current = null, n === null || n.return === null) {
                    xe = 1, uo = t, ge = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = _e, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, c = s, f = c.tag;
                        if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                            var d = c.alternate;
                            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
                        }
                        var x = ac(i);
                        if (x !== null) {
                            x.flags &= -257, uc(x, i, s, l, t), x.mode & 1 && sc(l, u, t), t = x, a = u;
                            var v = t.updateQueue;
                            if (v === null) {
                                var h = new Set;
                                h.add(a), t.updateQueue = h;
                            } else v.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                sc(l, u, t), za();
                                break e;
                            }
                            a = Error(R(426));
                        }
                    } else if (oe && s.mode & 1) {
                        var C = ac(i);
                        if (C !== null) {
                            !(C.flags & 65536) && (C.flags |= 256), uc(C, i, s, l, t), ca(pr(a, s));
                            break e;
                        }
                    }
                    l = a = pr(a, s), xe !== 4 && (xe = 2), Wr === null ? Wr = [
                        l
                    ] : Wr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var g = Zf(l, a, t);
                                tc(l, g);
                                break e;
                            case 1:
                                s = a;
                                var m = l.type, p = l.stateNode;
                                if (!(l.flags & 128) && (typeof m.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Jt === null || !Jt.has(p)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = Jf(l, s, t);
                                    tc(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                yp(n);
            } catch (E) {
                t = E, ge === n && n !== null && (ge = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function hp() {
        var e = Nl.current;
        return Nl.current = El, e === null ? El : e;
    }
    function za() {
        (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Se === null || !(Pn & 268435455) && !(Gl & 268435455) || Vt(Se, _e);
    }
    function Tl(e, t) {
        var n = K;
        K |= 2;
        var r = hp();
        (Se !== e || _e !== t) && (_t = null, _n(e, t));
        do try {
            uy();
            break;
        } catch (o) {
            mp(e, o);
        }
        while (!0);
        if (fa(), K = n, Nl.current = r, ge !== null) throw Error(R(261));
        return Se = null, _e = 0, xe;
    }
    function uy() {
        for(; ge !== null;)gp(ge);
    }
    function cy() {
        for(; ge !== null && !Oh();)gp(ge);
    }
    function gp(e) {
        var t = xp(e.alternate, e, Ge);
        e.memoizedProps = e.pendingProps, t === null ? yp(e) : ge = t, Ea.current = null;
    }
    function yp(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = ry(n, t), n !== null) {
                    n.flags &= 32767, ge = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    xe = 6, ge = null;
                    return;
                }
            } else if (n = ny(n, t, Ge), n !== null) {
                ge = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                ge = t;
                return;
            }
            ge = t = e;
        }while (t !== null);
        xe === 0 && (xe = 5);
    }
    function xn(e, t, n) {
        var r = Q, o = rt.transition;
        try {
            rt.transition = null, Q = 1, dy(e, t, n, r);
        } finally{
            rt.transition = o, Q = r;
        }
        return null;
    }
    function dy(e, t, n, r) {
        do sr();
        while (Wt !== null);
        if (K & 6) throw Error(R(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Wh(e, l), e === Se && (ge = Se = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Uo || (Uo = !0, wp(cl, function() {
            return sr(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = rt.transition, rt.transition = null;
            var i = Q;
            Q = 1;
            var s = K;
            K |= 4, Ea.current = null, ly(e, n), dp(n, e), Pg(ss), fl = !!is, ss = is = null, e.current = n, iy(n), Dh(), K = s, Q = i, rt.transition = l;
        } else e.current = n;
        if (Uo && (Uo = !1, Wt = e, Il = o), l = e.pendingLanes, l === 0 && (Jt = null), Fh(n.stateNode), Ue(e, me()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Rl) throw Rl = !1, e = Rs, Rs = null, e;
        return Il & 1 && e.tag !== 0 && sr(), l = e.pendingLanes, l & 1 ? e === Is ? Hr++ : (Hr = 0, Is = e) : Hr = 0, ln(), null;
    }
    function sr() {
        if (Wt !== null) {
            var e = Xd(Il), t = rt.transition, n = Q;
            try {
                if (rt.transition = null, Q = 16 > e ? 16 : e, Wt === null) var r = !1;
                else {
                    if (e = Wt, Wt = null, Il = 0, K & 6) throw Error(R(331));
                    var o = K;
                    for(K |= 4, j = e.current; j !== null;){
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
                                                Gr(8, c, l);
                                        }
                                        var f = c.child;
                                        if (f !== null) f.return = c, j = f;
                                        else for(; j !== null;){
                                            c = j;
                                            var d = c.sibling, x = c.return;
                                            if (ap(c), c === u) {
                                                j = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                d.return = x, j = d;
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
                                            var C = h.sibling;
                                            h.sibling = null, h = C;
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
                                    Gr(9, l, l.return);
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
                                        Vl(9, s);
                                }
                            } catch (E) {
                                de(s, s.return, E);
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
                    if (K = o, ln(), St && typeof St.onPostCommitFiberRoot == "function") try {
                        St.onPostCommitFiberRoot(Ol, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                Q = n, rt.transition = t;
            }
        }
        return !1;
    }
    function kc(e, t, n) {
        t = pr(n, t), t = Zf(e, t, 1), e = Zt(e, t, 1), t = je(), e !== null && (mo(e, 1, t), Ue(e, t));
    }
    function de(e, t, n) {
        if (e.tag === 3) kc(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                kc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r))) {
                    e = pr(n, e), e = Jf(t, e, 1), t = Zt(t, e, 1), e = je(), t !== null && (mo(t, 1, e), Ue(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function fy(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (_e & n) === n && (xe === 4 || xe === 3 && (_e & 130023424) === _e && 500 > me() - Ra ? _n(e, 0) : Na |= n), Ue(e, t);
    }
    function vp(e, t) {
        t === 0 && (e.mode & 1 ? (t = Mo, Mo <<= 1, !(Mo & 130023424) && (Mo = 4194304)) : t = 1);
        var n = je();
        e = Pt(e, t), e !== null && (mo(e, t, n), Ue(e, n));
    }
    function py(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), vp(e, n);
    }
    function my(e, t) {
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
                throw Error(R(314));
        }
        r !== null && r.delete(t), vp(e, n);
    }
    var xp;
    xp = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, ty(e, t, n);
            Fe = !!(e.flags & 131072);
        }
        else Fe = !1, oe && t.flags & 1048576 && Cf(t, xl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                el(e, t), e = t.pendingProps;
                var o = ur(t, Te.current);
                ir(t, n), o = wa(null, t, r, e, o, n);
                var l = Sa();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (l = !0, yl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ha(t), o.updater = Ul, t.stateNode = o, o._reactInternals = t, gs(t, r, e, n), t = xs(null, t, r, !0, l, n)) : (t.tag = 0, oe && l && aa(t), Me(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(el(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = gy(r), e = ut(r, e), o){
                        case 0:
                            t = vs(null, t, r, e, n);
                            break e;
                        case 1:
                            t = fc(null, t, r, e, n);
                            break e;
                        case 11:
                            t = cc(null, t, r, e, n);
                            break e;
                        case 14:
                            t = dc(null, t, r, ut(r.type, e), n);
                            break e;
                    }
                    throw Error(R(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), vs(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), fc(e, t, r, o, n);
            case 3:
                e: {
                    if (np(t), e === null) throw Error(R(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Tf(e, t), kl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = pr(Error(R(423)), t), t = pc(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = pr(Error(R(424)), t), t = pc(e, t, r, n, o);
                        break e;
                    } else for(He = Xt(t.stateNode.containerInfo.firstChild), Ke = t, oe = !0, dt = null, n = Rf(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (cr(), r === o) {
                            t = Mt(e, t, n);
                            break e;
                        }
                        Me(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return zf(t), e === null && ps(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, as(r, o) ? i = null : l !== null && as(r, l) && (t.flags |= 32), tp(e, t), Me(e, t, i, n), t.child;
            case 6:
                return e === null && ps(t), null;
            case 13:
                return rp(e, t, n);
            case 4:
                return ga(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = dr(t, null, r, n) : Me(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), cc(e, t, r, o, n);
            case 7:
                return Me(e, t, t.pendingProps, n), t.child;
            case 8:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, q(wl, r._currentValue), r._currentValue = i, l !== null) if (ht(l.value, i)) {
                        if (l.children === o.children && !$e.current) {
                            t = Mt(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var a = s.firstContext; a !== null;){
                                if (a.context === r) {
                                    if (l.tag === 1) {
                                        a = It(-1, n & -n), a.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                                        }
                                    }
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), ms(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(R(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ms(i, n, t), i = l.sibling;
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
                return o = t.type, r = t.pendingProps.children, ir(t, n), o = ot(o), r = r(o), t.flags |= 1, Me(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), dc(e, t, r, o, n);
            case 15:
                return qf(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), el(e, t), t.tag = 1, Be(r) ? (e = !0, yl(t)) : e = !1, ir(t, n), Xf(t, r, o), gs(t, r, o, n), xs(null, t, r, !0, e, n);
            case 19:
                return op(e, t, n);
            case 22:
                return ep(e, t, n);
        }
        throw Error(R(156, t.tag));
    };
    function wp(e, t) {
        return Hd(e, t);
    }
    function hy(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function nt(e, t, n, r) {
        return new hy(e, t, n, r);
    }
    function Pa(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function gy(e) {
        if (typeof e == "function") return Pa(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Xs) return 11;
            if (e === Zs) return 14;
        }
        return 2;
    }
    function en(e, t) {
        var n = e.alternate;
        return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function rl(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") Pa(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Gn:
                return En(n.children, o, l, t);
            case Ys:
                i = 8, o |= 8;
                break;
            case $i:
                return e = nt(12, n, t, o | 2), e.elementType = $i, e.lanes = l, e;
            case Bi:
                return e = nt(13, n, t, o), e.elementType = Bi, e.lanes = l, e;
            case Ui:
                return e = nt(19, n, t, o), e.elementType = Ui, e.lanes = l, e;
            case Td:
                return Wl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Rd:
                        i = 10;
                        break e;
                    case Id:
                        i = 9;
                        break e;
                    case Xs:
                        i = 11;
                        break e;
                    case Zs:
                        i = 14;
                        break e;
                    case $t:
                        i = 16, r = null;
                        break e;
                }
                throw Error(R(130, e == null ? e : typeof e, ""));
        }
        return t = nt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function En(e, t, n, r) {
        return e = nt(7, e, r, t), e.lanes = n, e;
    }
    function Wl(e, t, n, r) {
        return e = nt(22, e, r, t), e.elementType = Td, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Pi(e, t, n) {
        return e = nt(6, e, null, t), e.lanes = n, e;
    }
    function Mi(e, t, n) {
        return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function yy(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fi(0), this.expirationTimes = fi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Ma(e, t, n, r, o, l, i, s, a) {
        return e = new yy(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = nt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, ha(l), e;
    }
    function vy(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Vn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Sp(e) {
        if (!e) return nn;
        e = e._reactInternals;
        e: {
            if (Ln(e) !== e || e.tag !== 1) throw Error(R(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Be(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            }while (t !== null);
            throw Error(R(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Be(n)) return Sf(e, n, t);
        }
        return t;
    }
    function kp(e, t, n, r, o, l, i, s, a) {
        return e = Ma(n, r, !0, e, o, l, i, s, a), e.context = Sp(null), n = e.current, r = je(), o = qt(n), l = It(r, o), l.callback = t ?? null, Zt(n, l, o), e.current.lanes = o, mo(e, o, r), Ue(e, r), e;
    }
    function Hl(e, t, n, r) {
        var o = t.current, l = je(), i = qt(o);
        return n = Sp(n), t.context === null ? t.context = n : t.pendingContext = n, t = It(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zt(o, t, i), e !== null && (mt(e, o, i, l), Zo(e, o, i)), i;
    }
    function zl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Cc(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function ja(e, t) {
        Cc(e, t), (e = e.alternate) && Cc(e, t);
    }
    function xy() {
        return null;
    }
    var Cp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function La(e) {
        this._internalRoot = e;
    }
    Kl.prototype.render = La.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(R(409));
        Hl(e, t, null, null);
    };
    Kl.prototype.unmount = La.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Mn(function() {
                Hl(null, e, null, null);
            }), t[zt] = null;
        }
    };
    function Kl(e) {
        this._internalRoot = e;
    }
    Kl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = qd();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
            Ut.splice(n, 0, e), n === 0 && tf(e);
        }
    };
    function Oa(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ql(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function _c() {}
    function wy(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = zl(i);
                    l.call(u);
                };
            }
            var i = kp(t, r, e, 0, null, !1, !1, "", _c);
            return e._reactRootContainer = i, e[zt] = i.current, to(e.nodeType === 8 ? e.parentNode : e), Mn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = zl(a);
                s.call(u);
            };
        }
        var a = Ma(e, 0, !1, null, null, !1, !1, "", _c);
        return e._reactRootContainer = a, e[zt] = a.current, to(e.nodeType === 8 ? e.parentNode : e), Mn(function() {
            Hl(t, a, n, r);
        }), a;
    }
    function Yl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = zl(i);
                    s.call(a);
                };
            }
            Hl(t, i, e, o);
        } else i = wy(n, t, e, o, r);
        return zl(i);
    }
    Zd = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Dr(t.pendingLanes);
                    n !== 0 && (ea(t, n | 1), Ue(t, me()), !(K & 6) && (mr = me() + 500, ln()));
                }
                break;
            case 13:
                Mn(function() {
                    var r = Pt(e, 1);
                    if (r !== null) {
                        var o = je();
                        mt(r, e, 1, o);
                    }
                }), ja(e, 1);
        }
    };
    ta = function(e) {
        if (e.tag === 13) {
            var t = Pt(e, 134217728);
            if (t !== null) {
                var n = je();
                mt(t, e, 134217728, n);
            }
            ja(e, 134217728);
        }
    };
    Jd = function(e) {
        if (e.tag === 13) {
            var t = qt(e), n = Pt(e, t);
            if (n !== null) {
                var r = je();
                mt(n, e, t, r);
            }
            ja(e, t);
        }
    };
    qd = function() {
        return Q;
    };
    ef = function(e, t) {
        var n = Q;
        try {
            return Q = e, t();
        } finally{
            Q = n;
        }
    };
    Ji = function(e, t, n) {
        switch(t){
            case "input":
                if (Wi(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = Fl(r);
                            if (!o) throw Error(R(90));
                            Pd(r), Wi(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                jd(e, n);
                break;
            case "select":
                t = n.value, t != null && nr(e, !!n.multiple, t, !1);
        }
    };
    $d = Ia;
    Bd = Mn;
    var Sy = {
        usingClientEntryPoint: !1,
        Events: [
            go,
            Qn,
            Fl,
            Ad,
            Fd,
            Ia
        ]
    }, Pr = {
        findFiberByHostInstance: Sn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, ky = {
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
        currentDispatcherRef: jt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Gd(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Pr.findFiberByHostInstance || xy,
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
            Ol = Vo.inject(ky), St = Vo;
        } catch  {}
    }
    Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy;
    Ye.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Oa(t)) throw Error(R(200));
        return vy(e, t, null, n);
    };
    Ye.createRoot = function(e, t) {
        if (!Oa(e)) throw Error(R(299));
        var n = !1, r = "", o = Cp;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ma(e, 1, !1, null, null, n, !1, r, o), e[zt] = t.current, to(e.nodeType === 8 ? e.parentNode : e), new La(t);
    };
    Ye.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
        return e = Gd(t), e = e === null ? null : e.stateNode, e;
    };
    Ye.flushSync = function(e) {
        return Mn(e);
    };
    Ye.hydrate = function(e, t, n) {
        if (!Ql(t)) throw Error(R(200));
        return Yl(null, e, t, !0, n);
    };
    Ye.hydrateRoot = function(e, t, n) {
        if (!Oa(e)) throw Error(R(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Cp;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kp(t, null, e, 1, n ?? null, o, !1, l, i), e[zt] = t.current, to(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Kl(t);
    };
    Ye.render = function(e, t, n) {
        if (!Ql(t)) throw Error(R(200));
        return Yl(null, e, t, !1, n);
    };
    Ye.unmountComponentAtNode = function(e) {
        if (!Ql(e)) throw Error(R(40));
        return e._reactRootContainer ? (Mn(function() {
            Yl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[zt] = null;
            });
        }), !0) : !1;
    };
    Ye.unstable_batchedUpdates = Ia;
    Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Ql(n)) throw Error(R(200));
        if (e == null || e._reactInternals === void 0) throw Error(R(38));
        return Yl(e, t, n, !1, r);
    };
    Ye.version = "18.3.1-next-f1338f8080-20240426";
    function _p() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p);
        } catch (e) {
            console.error(e);
        }
    }
    _p(), Cd.exports = Ye;
    var Cy = Cd.exports, Ec = Cy;
    Ai.createRoot = Ec.createRoot, Ai.hydrateRoot = Ec.hydrateRoot;
    const _y = "modulepreload", Ey = function(e) {
        return "/grid-draw/" + e;
    }, Nc = {}, Ep = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = Ey(a), a in Nc) return;
                Nc[a] = !0;
                const u = a.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${c}`)) return;
                const f = document.createElement("link");
                if (f.rel = u ? "stylesheet" : _y, u || (f.as = "script"), f.crossOrigin = "", f.href = a, s && f.setAttribute("nonce", s), document.head.appendChild(f), u) return new Promise((d, x)=>{
                    f.addEventListener("load", d), f.addEventListener("error", ()=>x(new Error(`Unable to preload CSS for ${a}`)));
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
    }, Rc = (e)=>{
        let t;
        const n = new Set, r = (u, c)=>{
            const f = typeof u == "function" ? u(t) : u;
            if (!Object.is(f, t)) {
                const d = t;
                t = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((x)=>x(t, d));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, Ny = (e)=>e ? Rc(e) : Rc, Ry = (e)=>e;
    function Iy(e, t = Ry) {
        const n = re.useSyncExternalStore(e.subscribe, re.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), re.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return re.useDebugValue(n), n;
    }
    const Ic = (e)=>{
        const t = Ny(e), n = (r)=>Iy(t, r);
        return Object.assign(n, t), n;
    }, Np = (e)=>e ? Ic(e) : Ic;
    function Ty(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    const zy = 1.75;
    function Ps(e) {
        return {
            r: e.minRow - zy,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function Ms(e) {
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
    function js(e) {
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
    function Tc(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, c = (a - e) * (a - e) + (u - t) * (u - t);
            c <= i && (l = s, i = c);
        }
        return l;
    }
    function Py(e, t) {
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
    function ol(e, t) {
        switch(Py(e, t), t.kind){
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
                e.insert_line(t.idx, t.line.r1, t.line.c1, t.line.r2, t.line.c2, t.line.color);
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
                    for (const n of t.edits)ol(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function Rp(e) {
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
                    ].reverse().map(Rp)
                };
        }
    }
    function Ip(e, t) {
        if (e.kind !== t.kind) return null;
        switch(e.kind){
            case "recolorLine":
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
                        const o = Ip(e.edits[r], t.edits[r]);
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
    const My = 100, jy = 600;
    class Ly {
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
            this.undoStack.push(t), this.undoStack.length > My && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (ol(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= jy) {
                const i = this.undoStack[this.undoStack.length - 1], s = Ip(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (ol(t, Rp(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (ol(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
    const at = new Ly;
    function zc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            color: n[4]
        };
    }
    function Pc(e, t) {
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
    function Mc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function jc(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Lc(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: e.get_text_size(t),
            text: e.get_text_string(t)
        };
    }
    const Oy = [
        1,
        1.5,
        2,
        3,
        5
    ];
    function ji(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Tp(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" ? e.index === t.index : !1;
    }
    function zp(e, t) {
        return t.some((n)=>Tp(n, e));
    }
    function Dy(e, t) {
        return zp(e, t) ? t : [
            ...t,
            e
        ];
    }
    function by(e, t) {
        return t.filter((n)=>!Tp(n, e));
    }
    function We(e, t) {
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
    function Ay(e, t) {
        const n = We(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function ll(e, t, n = {}) {
        const r = We(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, c = [], f = [], d = [], x = [];
        for (const v of t)if (v.type === "cell") c.push([
            v.row - a,
            v.col - u,
            e.get_cell_color(v.row, v.col)
        ]);
        else if (v.type === "line") {
            const h = e.get_line(v.index);
            f.push([
                h[0] - a,
                h[1] - u,
                h[2] - a,
                h[3] - u,
                h[4]
            ]);
        } else if (v.type === "rect") {
            const h = e.get_rect(v.index);
            d.push([
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
            lines: f,
            rects: d,
            texts: x
        };
    }
    function Oc(e) {
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
    function Dc(e) {
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
    const tt = Np((e, t)=>({
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
                    coalesceKey: `fill:${ji(o)}`
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
                    coalesceKey: `outline:${ji(o)}`
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
                const { grid: r, selectedItems: o } = t();
                if (!r || o.length === 0) return;
                const l = [];
                for (const i of o)i.type === "text" && l.push({
                    kind: "resizeText",
                    idx: i.index,
                    from: r.get_text_size(i.index),
                    to: n
                });
                l.length !== 0 && (t().commitEdits(l, {
                    coalesceKey: `size:${ji(o)}`
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
                const r = Dc(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = Dy(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = by(n, r);
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
                for(let h = i; h <= s; h++)for(let C = a; C <= u; C++)r.get_cell(h, C) && c.push({
                    type: "cell",
                    row: h,
                    col: C
                });
                const f = r.get_line_count();
                for(let h = 0; h < f; h++)r.line_intersects_box(h, i, a, s, u) && c.push({
                    type: "line",
                    index: h
                });
                const d = r.get_rect_count();
                for(let h = 0; h < d; h++)r.rect_intersects_box(h, i, a, s, u) && c.push({
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
                for (const h of c)zp(h, v) || v.push(h);
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
                    const c = [], f = [], d = [];
                    for (const p of l)if (p.type === "cell") {
                        if (!r.get_cell(p.row, p.col)) continue;
                        const S = r.get_cell_color(p.row, p.col), E = p.row + a, T = p.col + u;
                        f.push({
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
                        }), d.push({
                            kind: "setCellState",
                            row: E,
                            col: T,
                            from: {
                                filled: r.get_cell(E, T),
                                color: r.get_cell_color(E, T)
                            },
                            to: {
                                filled: !0,
                                color: S
                            }
                        }), c.push({
                            type: "cell",
                            row: E,
                            col: T
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
                    const h = [], C = l.filter((p)=>p.type === "rect");
                    for (const p of C)h.push({
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
                        ...f,
                        ...d,
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
                const { grid: r } = t(), o = r ? n.shape === "line" ? Mc(r, n.index) : jc(r, n.index) : null;
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
                        to: Mc(r, o.index)
                    }
                ])) : (r.resize_rect(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: jc(r, o.index)
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
                const i = We(l, o);
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
                const { cx: s, cy: a, startAngle: u } = i, c = Oc(Math.atan2(r - a, n - s) - u);
                if (o.render(), c === 0) {
                    t().renderSelection();
                    return;
                }
                const f = We(l, o);
                if (!f) return;
                const d = Math.round((f.minRow + f.maxRow) / 2), x = Math.round((f.minCol + f.maxCol) / 2);
                for (const v of l)if (v.type === "cell") {
                    const h = gn(v.row, v.col, c, d, x);
                    o.preview_cell(h.r, h.c, o.get_cell_color(v.row, v.col));
                } else if (v.type === "line") {
                    const h = o.get_line(v.index);
                    if (h.length >= 5) {
                        const C = gn(h[0], h[1], c, d, x), g = gn(h[2], h[3], c, d, x);
                        o.preview_line(C.r, C.c, g.r, g.c, h[4]);
                    }
                } else if (v.type === "rect") {
                    const h = o.get_rect(v.index);
                    if (h.length >= 6) {
                        const C = gn(h[0], h[1], c, d, x), g = gn(h[2], h[3], c, d, x);
                        o.preview_rect(C.r, C.c, g.r, g.c, h[4], h[5]);
                    }
                } else if (v.type === "text") {
                    const h = o.get_text(v.index);
                    if (h.length >= 3) {
                        const C = gn(h[0], h[1], c, d, x);
                        o.preview_text(C.r, C.c, h[2], o.get_text_size(v.index), o.get_text_string(v.index));
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
                const { cx: s, cy: a, startAngle: u } = i, c = Oc(Math.atan2(r - a, n - s) - u), f = We(l, o);
                if (c === 0 || !f) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const d = Math.round((f.minRow + f.maxRow) / 2), x = Math.round((f.minCol + f.maxCol) / 2), v = (p, S)=>gn(p, S, c, d, x), h = [], C = [], g = [], m = [];
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
                    }), C.push({
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
                    const E = v(S[0], S[1]), T = v(S[2], S[3]);
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
                            r2: T.r,
                            c2: T.c
                        }
                    }), m.push({
                        type: "line",
                        index: p.index
                    });
                } else if (p.type === "rect") {
                    const S = o.get_rect(p.index);
                    if (S.length < 6) continue;
                    const E = v(S[0], S[1]), T = v(S[2], S[3]);
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
                            r2: T.r,
                            c2: T.c
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
                    ...C,
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
                !o || n.length === 0 || (at.commit(o, n.length === 1 ? n[0] : {
                    kind: "batch",
                    edits: n
                }, r), e({
                    historyTick: t().historyTick + 1
                }));
            },
            undo: ()=>{
                const { grid: n } = t();
                n && at.undoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            redo: ()=>{
                const { grid: n } = t();
                n && at.redoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            canUndo: ()=>at.canUndo(),
            canRedo: ()=>at.canRedo(),
            resetHistory: ()=>{
                at.clear(), e({
                    historyTick: t().historyTick + 1
                });
            },
            beginDrawStroke: ()=>{
                at.beginBatch();
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
                at.endBatch(), e({
                    historyTick: t().historyTick + 1
                }), t().updateOutputs();
            },
            commitLine: (n, r, o, l)=>{
                const { grid: i, colorIdx: s } = t();
                i && (t().commitEdits([
                    {
                        kind: "addLine",
                        idx: i.get_line_count(),
                        line: {
                            r1: n,
                            c1: r,
                            r2: o,
                            c2: l,
                            color: s
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
                const o = Ay(r, n);
                if (!o) return;
                const l = [], i = [], s = [], a = [];
                for (const u of r)if (u.type === "cell") l.push({
                    relRow: u.row - o.minRow,
                    relCol: u.col - o.minCol,
                    color: n.get_cell_color(u.row, u.col)
                });
                else if (u.type === "line") {
                    const c = n.get_line(u.index);
                    c.length >= 5 && i.push({
                        relR1: c[0] - o.minRow,
                        relC1: c[1] - o.minCol,
                        relR2: c[2] - o.minRow,
                        relC2: c[3] - o.minCol,
                        color: c[4]
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
                let u = n.get_line_count(), c = n.get_rect_count(), f = n.get_text_count();
                for (const d of r.cells){
                    const x = s.row + d.relRow, v = s.col + d.relCol;
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
                            color: d.color
                        }
                    }), l.push({
                        type: "cell",
                        row: x,
                        col: v
                    });
                }
                for (const d of r.lines){
                    const x = s.row + d.relR1, v = s.col + d.relC1, h = s.row + d.relR2, C = s.col + d.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: x,
                            c1: v,
                            r2: h,
                            c2: C,
                            color: d.color
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const d of r.rects){
                    const x = s.row + d.relR1, v = s.col + d.relC1, h = s.row + d.relR2, C = s.col + d.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: x,
                            c1: v,
                            r2: h,
                            c2: C,
                            fill: d.color,
                            outline: d.outline
                        }
                    }), l.push({
                        type: "rect",
                        index: c
                    }), c++;
                }
                for (const d of r.texts ?? []){
                    const x = s.row + d.relR, v = s.col + d.relC;
                    a.push({
                        kind: "addText",
                        idx: f,
                        text: {
                            r: x,
                            c: v,
                            color: d.color,
                            size: d.size,
                            text: d.text
                        }
                    }), l.push({
                        type: "text",
                        index: f
                    }), f++;
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
                    line: zc(n, u)
                });
                for (const u of i)a.push({
                    kind: "deleteRect",
                    idx: u,
                    rect: Pc(n, u)
                });
                for (const u of s)a.push({
                    kind: "deleteText",
                    idx: u,
                    text: Lc(n, u)
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
                const o = ll(n, r);
                if (!o) return;
                const l = We(r, n), i = l ? [
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
                const i = ll(n, r);
                if (!i) return null;
                const s = We(r, n), a = l ?? [
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
                for (const [f, d, x] of n.cells ?? []){
                    const v = r + f, h = o + d;
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
                for (const [f, d, x, v, h] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + f,
                        c1: o + d,
                        r2: r + x,
                        c2: o + v,
                        color: h
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [f, d, x, v, h, C] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + f,
                        c1: o + d,
                        r2: r + x,
                        c2: o + v,
                        fill: h,
                        outline: C
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const f of n.texts ?? []){
                    const d = Array.isArray(f) ? {
                        r: f[0],
                        c: f[1],
                        color: f[2],
                        size: f[3],
                        text: f[4]
                    } : f;
                    !d || typeof d.r != "number" || typeof d.c != "number" || (i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + d.r,
                            c: o + d.c,
                            color: d.color ?? 0,
                            size: d.size ?? 1,
                            text: String(d.text ?? "")
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
                return n ? ll(n, Dc(n), {
                    absolute: !0
                }) : null;
            },
            loadDesign: (n)=>{
                const { grid: r } = t();
                r && (t().clear(), t().placeDesign(n, 0, 0), e({
                    selectedItems: []
                }), t().renderSelection());
            },
            exportHistory: ()=>at.exportStacks(),
            loadDesignWithHistory: (n, r)=>{
                const { grid: o } = t();
                o && (t().loadDesign(n), r && ((r.undo?.length ?? 0) > 0 || (r.redo?.length ?? 0) > 0) ? at.importStacks(r) : at.clear(), e({
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
                    })), a = Ty(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const h of o)if (n.get_cell(h.row, h.col)) {
                    const C = n.get_cell_color(h.row, h.col), g = l[C] ?? "#000000";
                    i.push({
                        row: h.row - a.minRow,
                        col: h.col - a.minCol,
                        color: g
                    });
                }
                i.sort((h, C)=>h.row - C.row || h.col - C.col);
                const u = a.maxRow - a.minRow + 1, c = a.maxCol - a.minCol + 1, f = [], d = [];
                for (const h of i)h.color === "#000000" && (f.push(h.row), d.push(h.col));
                const x = f.map(()=>"1.0").join(", "), v = `import torch

indices = torch.tensor([[${f.join(", ")}], [${d.join(", ")}]])
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
                        const c = u.row, f = u.col, d = u.color;
                        if (typeof c != "number" || typeof f != "number") continue;
                        const x = o.row + c, v = o.col + f, h = l[d] ?? 0;
                        r.set_draw_color(h), r.set_cell(x, v, !0), s.push({
                            type: "cell",
                            row: x,
                            col: v
                        });
                    }
                    else for(let u = 0; u < i.length; u++){
                        const c = i[u];
                        if (Array.isArray(c)) for(let f = 0; f < c.length; f++){
                            const d = o.row + u, x = o.col + f, v = c[f];
                            if (v && typeof v == "object" && v.color) {
                                const h = l[v.color] ?? 0;
                                r.set_draw_color(h), r.set_cell(d, x, !0), s.push({
                                    type: "cell",
                                    row: d,
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
                            const f = o.row + a, d = o.col + c;
                            Number(u[c]) > .5 && (r.set_cell(f, d, !0), s.push({
                                type: "cell",
                                row: f,
                                col: d
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
                    text: Lc(n, i)
                });
                for(let i = n.get_rect_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteRect",
                    idx: i,
                    rect: Pc(n, i)
                });
                for(let i = n.get_line_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteLine",
                    idx: i,
                    line: zc(n, i)
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
                            const l = Ms(n.get_line(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "rect") {
                            const l = js(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = We(r, n);
                        if (o) {
                            const l = Ps(o);
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
        })), bc = 4;
    function Fy(e) {
        const t = e.get_schema_version?.();
        (t !== bc || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${bc}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function $y(e, t, n) {
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
                    const s = await Ep(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    Fy(a), tt.getState().setGrid(a), o({
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
    const Pp = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const By = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const Uy = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const Ac = (e)=>{
        const t = Uy(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var Vy = {
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
    const Gy = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const Wy = N.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>N.createElement("svg", {
            ref: a,
            ...Vy,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Pp("lucide", o),
            ...!l && !Gy(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, c])=>N.createElement(u, c)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const Mp = (e, t)=>{
        const n = N.forwardRef(({ className: r, ...o }, l)=>N.createElement(Wy, {
                ref: l,
                iconNode: t,
                className: Pp(`lucide-${By(Ac(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = Ac(e), n;
    };
    const Hy = [
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
    ], Ky = Mp("redo-2", Hy);
    const Qy = [
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
    ], Yy = Mp("undo-2", Qy);
    function jp(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = jp(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Lp() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = jp(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Fc = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $c = Lp, Op = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return $c(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const c = n?.[u], f = l?.[u];
                if (c === null) return null;
                const d = Fc(c) || Fc(f);
                return o[u][d];
            }), s = n && Object.entries(n).reduce((u, c)=>{
                let [f, d] = c;
                return d === void 0 || (u[f] = d), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c)=>{
                let { class: f, className: d, ...x } = c;
                return Object.entries(x).every((v)=>{
                    let [h, C] = v;
                    return Array.isArray(C) ? C.includes({
                        ...l,
                        ...s
                    }[h]) : {
                        ...l,
                        ...s
                    }[h] === C;
                }) ? [
                    ...u,
                    f,
                    d
                ] : u;
            }, []);
            return $c(e, i, a, n?.class, n?.className);
        };
    function Bc(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Dp(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Bc(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Bc(e[o], null);
                }
            };
        };
    }
    function Ls(...e) {
        return N.useCallback(Dp(...e), e);
    }
    function Pl(e) {
        const t = Zy(e), n = N.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = N.Children.toArray(l), a = s.find(qy);
            if (a) {
                const u = a.props.children, c = s.map((f)=>f === a ? N.Children.count(u) > 1 ? N.Children.only(null) : N.isValidElement(u) ? u.props.children : null : f);
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
    var Xy = Pl("Slot");
    function Zy(e) {
        const t = N.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (N.isValidElement(o)) {
                const i = tv(o), s = ev(l, o.props);
                return o.type !== N.Fragment && (s.ref = r ? Dp(r, i) : i), N.cloneElement(o, s);
            }
            return N.Children.count(o) > 1 ? N.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var Jy = Symbol("radix.slottable");
    function qy(e) {
        return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jy;
    }
    function ev(e, t) {
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
    function tv(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var nv = [
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
    ], co = nv.reduce((e, t)=>{
        const n = Pl(`Primitive.${t}`), r = N.forwardRef((o, l)=>{
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
    function Da(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = N.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (f)=>{
                const { scope: d, children: x, ...v } = f, h = d?.[e]?.[a] || s, C = N.useMemo(()=>v, Object.values(v));
                return y.jsx(h.Provider, {
                    value: C,
                    children: x
                });
            };
            u.displayName = l + "Provider";
            function c(f, d) {
                const x = d?.[e]?.[a] || s, v = N.useContext(x);
                if (v) return v;
                if (i !== void 0) return i;
                throw new Error(`\`${f}\` must be used within \`${l}\``);
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
            rv(o, ...t)
        ];
    }
    function rv(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: a, scopeName: u })=>{
                    const f = a(l)[`__scope${u}`];
                    return {
                        ...s,
                        ...f
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
    function ov(e) {
        const t = e + "CollectionProvider", [n, r] = Da(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (h)=>{
            const { scope: C, children: g } = h, m = re.useRef(null), p = re.useRef(new Map).current;
            return y.jsx(o, {
                scope: C,
                itemMap: p,
                collectionRef: m,
                children: g
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = Pl(s), u = re.forwardRef((h, C)=>{
            const { scope: g, children: m } = h, p = l(s, g), S = Ls(C, p.collectionRef);
            return y.jsx(a, {
                ref: S,
                children: m
            });
        });
        u.displayName = s;
        const c = e + "CollectionItemSlot", f = "data-radix-collection-item", d = Pl(c), x = re.forwardRef((h, C)=>{
            const { scope: g, children: m, ...p } = h, S = re.useRef(null), E = Ls(C, S), T = l(c, g);
            return re.useEffect(()=>(T.itemMap.set(S, {
                    ref: S,
                    ...p
                }), ()=>void T.itemMap.delete(S))), y.jsx(d, {
                [f]: "",
                ref: E,
                children: m
            });
        });
        x.displayName = c;
        function v(h) {
            const C = l(e + "CollectionConsumer", h);
            return re.useCallback(()=>{
                const m = C.collectionRef.current;
                if (!m) return [];
                const p = Array.from(m.querySelectorAll(`[${f}]`));
                return Array.from(C.itemMap.values()).sort((T, P)=>p.indexOf(T.ref.current) - p.indexOf(P.ref.current));
            }, [
                C.collectionRef,
                C.itemMap
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
    function Nn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var bp = globalThis?.document ? N.useLayoutEffect : ()=>{}, lv = Sd[" useInsertionEffect ".trim().toString()] || bp;
    function Xl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = iv({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, a = s ? e : o;
        {
            const c = N.useRef(e !== void 0);
            N.useEffect(()=>{
                const f = c.current;
                f !== s && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = s;
            }, [
                s,
                r
            ]);
        }
        const u = N.useCallback((c)=>{
            if (s) {
                const f = sv(c) ? c(e) : c;
                f !== e && i.current?.(f);
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
    function iv({ defaultProp: e, onChange: t }) {
        const [n, r] = N.useState(e), o = N.useRef(n), l = N.useRef(t);
        return lv(()=>{
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
    function sv(e) {
        return typeof e == "function";
    }
    var av = Sd[" useId ".trim().toString()] || (()=>{}), uv = 0;
    function cv(e) {
        const [t, n] = N.useState(av());
        return bp(()=>{
            n((r)=>r ?? String(uv++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var dv = N.createContext(void 0);
    function Ap(e) {
        const t = N.useContext(dv);
        return e || t || "ltr";
    }
    function fv(e) {
        const t = N.useRef(e);
        return N.useEffect(()=>{
            t.current = e;
        }), N.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Li = "rovingFocusGroup.onEntryFocus", pv = {
        bubbles: !1,
        cancelable: !0
    }, vo = "RovingFocusGroup", [Os, Fp, mv] = ov(vo), [hv, $p] = Da(vo, [
        mv
    ]), [gv, yv] = hv(vo), Bp = N.forwardRef((e, t)=>y.jsx(Os.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: y.jsx(Os.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: y.jsx(vv, {
                    ...e,
                    ref: t
                })
            })
        }));
    Bp.displayName = vo;
    var vv = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: c = !1, ...f } = e, d = N.useRef(null), x = Ls(t, d), v = Ap(l), [h, C] = Xl({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: vo
        }), [g, m] = N.useState(!1), p = fv(u), S = Fp(n), E = N.useRef(!1), [T, P] = N.useState(0);
        return N.useEffect(()=>{
            const _ = d.current;
            if (_) return _.addEventListener(Li, p), ()=>_.removeEventListener(Li, p);
        }, [
            p
        ]), y.jsx(gv, {
            scope: n,
            orientation: r,
            dir: v,
            loop: o,
            currentTabStopId: h,
            onItemFocus: N.useCallback((_)=>C(_), [
                C
            ]),
            onItemShiftTab: N.useCallback(()=>m(!0), []),
            onFocusableItemAdd: N.useCallback(()=>P((_)=>_ + 1), []),
            onFocusableItemRemove: N.useCallback(()=>P((_)=>_ - 1), []),
            children: y.jsx(co.div, {
                tabIndex: g || T === 0 ? -1 : 0,
                "data-orientation": r,
                ...f,
                ref: x,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: Nn(e.onMouseDown, ()=>{
                    E.current = !0;
                }),
                onFocus: Nn(e.onFocus, (_)=>{
                    const U = !E.current;
                    if (_.target === _.currentTarget && U && !g) {
                        const A = new CustomEvent(Li, pv);
                        if (_.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
                            const fe = S().filter((Z)=>Z.focusable), ze = fe.find((Z)=>Z.active), Ve = fe.find((Z)=>Z.id === h), $ = [
                                ze,
                                Ve,
                                ...fe
                            ].filter(Boolean).map((Z)=>Z.ref.current);
                            Gp($, c);
                        }
                    }
                    E.current = !1;
                }),
                onBlur: Nn(e.onBlur, ()=>m(!1))
            })
        });
    }), Up = "RovingFocusGroupItem", Vp = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = cv(), u = l || a, c = yv(Up, n), f = c.currentTabStopId === u, d = Fp(n), { onFocusableItemAdd: x, onFocusableItemRemove: v, currentTabStopId: h } = c;
        return N.useEffect(()=>{
            if (r) return x(), ()=>v();
        }, [
            r,
            x,
            v
        ]), y.jsx(Os.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: y.jsx(co.span, {
                tabIndex: f ? 0 : -1,
                "data-orientation": c.orientation,
                ...s,
                ref: t,
                onMouseDown: Nn(e.onMouseDown, (C)=>{
                    r ? c.onItemFocus(u) : C.preventDefault();
                }),
                onFocus: Nn(e.onFocus, ()=>c.onItemFocus(u)),
                onKeyDown: Nn(e.onKeyDown, (C)=>{
                    if (C.key === "Tab" && C.shiftKey) {
                        c.onItemShiftTab();
                        return;
                    }
                    if (C.target !== C.currentTarget) return;
                    const g = Sv(C, c.orientation, c.dir);
                    if (g !== void 0) {
                        if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey) return;
                        C.preventDefault();
                        let p = d().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (g === "last") p.reverse();
                        else if (g === "prev" || g === "next") {
                            g === "prev" && p.reverse();
                            const S = p.indexOf(C.currentTarget);
                            p = c.loop ? kv(p, S + 1) : p.slice(S + 1);
                        }
                        setTimeout(()=>Gp(p));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: f,
                    hasTabStop: h != null
                }) : i
            })
        });
    });
    Vp.displayName = Up;
    var xv = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function wv(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function Sv(e, t, n) {
        const r = wv(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return xv[r];
    }
    function Gp(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function kv(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Cv = Bp, _v = Vp, Wp = "Toggle", Hp = N.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = Xl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Wp
        });
        return y.jsx(co.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: Nn(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Hp.displayName = Wp;
    var sn = "ToggleGroup", [Kp] = Da(sn, [
        $p
    ]), Qp = $p(), ba = re.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return y.jsx(Ev, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return y.jsx(Nv, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${sn}\``);
    });
    ba.displayName = sn;
    var [Yp, Xp] = Kp(sn), Ev = re.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Xl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: sn
        });
        return y.jsx(Yp, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: re.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: re.useCallback(()=>s(""), [
                s
            ]),
            children: y.jsx(Zp, {
                ...l,
                ref: t
            })
        });
    }), Nv = re.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Xl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: sn
        }), a = re.useCallback((c)=>s((f = [])=>[
                    ...f,
                    c
                ]), [
            s
        ]), u = re.useCallback((c)=>s((f = [])=>f.filter((d)=>d !== c)), [
            s
        ]);
        return y.jsx(Yp, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: y.jsx(Zp, {
                ...l,
                ref: t
            })
        });
    });
    ba.displayName = sn;
    var [Rv, Iv] = Kp(sn), Zp = re.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = Qp(n), c = Ap(i), f = {
            role: "group",
            dir: c,
            ...a
        };
        return y.jsx(Rv, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? y.jsx(Cv, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: c,
                loop: s,
                children: y.jsx(co.div, {
                    ...f,
                    ref: t
                })
            }) : y.jsx(co.div, {
                ...f,
                ref: t
            })
        });
    }), Ml = "ToggleGroupItem", Jp = re.forwardRef((e, t)=>{
        const n = Xp(Ml, e.__scopeToggleGroup), r = Iv(Ml, e.__scopeToggleGroup), o = Qp(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = re.useRef(null);
        return r.rovingFocus ? y.jsx(_v, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: y.jsx(Uc, {
                ...s,
                ref: t
            })
        }) : y.jsx(Uc, {
            ...s,
            ref: t
        });
    });
    Jp.displayName = Ml;
    var Uc = re.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = Xp(Ml, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return y.jsx(Hp, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Tv = ba, zv = Jp;
    const Pv = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Mv = (e, t)=>({
            classGroupId: e,
            validator: t
        }), qp = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), jl = "-", Vc = [], jv = "arbitrary..", Lv = (e)=>{
        const t = Dv(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Ov(i);
                const s = i.split(jl), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return em(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Pv(u, a) : a : u || Vc;
                }
                return n[i] || Vc;
            }
        };
    }, em = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = em(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(jl) : e.slice(t).join(jl), a = i.length;
        for(let u = 0; u < a; u++){
            const c = i[u];
            if (c.validator(s)) return c.classGroupId;
        }
    }, Ov = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? jv + r : void 0;
        })(), Dv = (e)=>{
        const { theme: t, classGroups: n } = e;
        return bv(n, t);
    }, bv = (e, t)=>{
        const n = qp();
        for(const r in e){
            const o = e[r];
            Aa(o, n, r, t);
        }
        return n;
    }, Aa = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Av(i, t, n, r);
        }
    }, Av = (e, t, n, r)=>{
        if (typeof e == "string") {
            Fv(e, t, n);
            return;
        }
        if (typeof e == "function") {
            $v(e, t, n, r);
            return;
        }
        Bv(e, t, n, r);
    }, Fv = (e, t, n)=>{
        const r = e === "" ? t : tm(t, e);
        r.classGroupId = n;
    }, $v = (e, t, n, r)=>{
        if (Uv(e)) {
            Aa(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Mv(n, e));
    }, Bv = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            Aa(a, tm(t, s), n, r);
        }
    }, tm = (e, t)=>{
        let n = e;
        const r = t.split(jl), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = qp(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Uv = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Vv = (e)=>{
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
    }, Ds = "!", Gc = ":", Gv = [], Wc = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Wv = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const c = o.length;
            for(let h = 0; h < c; h++){
                const C = o[h];
                if (i === 0 && s === 0) {
                    if (C === Gc) {
                        l.push(o.slice(a, h)), a = h + 1;
                        continue;
                    }
                    if (C === "/") {
                        u = h;
                        continue;
                    }
                }
                C === "[" ? i++ : C === "]" ? i-- : C === "(" ? s++ : C === ")" && s--;
            }
            const f = l.length === 0 ? o : o.slice(a);
            let d = f, x = !1;
            f.endsWith(Ds) ? (d = f.slice(0, -1), x = !0) : f.startsWith(Ds) && (d = f.slice(1), x = !0);
            const v = u && u > a ? u - a : void 0;
            return Wc(l, x, d, v);
        };
        if (t) {
            const o = t + Gc, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Wc(Gv, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Hv = (e)=>{
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
    }, Kv = (e)=>({
            cache: Vv(e.cacheSize),
            parseClassName: Wv(e),
            sortModifiers: Hv(e),
            ...Lv(e)
        }), Qv = /\s+/, Yv = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Qv);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const c = s[u], { isExternal: f, modifiers: d, hasImportantModifier: x, baseClassName: v, maybePostfixModifierPosition: h } = n(c);
            if (f) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            let C = !!h, g = r(C ? v.substring(0, h) : v);
            if (!g) {
                if (!C) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (g = r(v), !g) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                C = !1;
            }
            const m = d.length === 0 ? "" : d.length === 1 ? d[0] : l(d).join(":"), p = x ? m + Ds : m, S = p + g;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const E = o(g, C);
            for(let T = 0; T < E.length; ++T){
                const P = E[T];
                i.push(p + P);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, Xv = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = nm(n)) && (o && (o += " "), o += r);
        return o;
    }, nm = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = nm(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Zv = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((c, f)=>f(c), e());
            return n = Kv(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const c = Yv(a, n);
            return o(a, c), c;
        };
        return l = i, (...a)=>l(Xv(...a));
    }, Jv = [], ye = (e)=>{
        const t = (n)=>n[e] || Jv;
        return t.isThemeGetter = !0, t;
    }, rm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, om = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qv = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ox = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, At = (e)=>qv.test(e), V = (e)=>!!e && !Number.isNaN(Number(e)), Ft = (e)=>!!e && Number.isInteger(Number(e)), Oi = (e)=>e.endsWith("%") && V(e.slice(0, -1)), Ct = (e)=>ex.test(e), lm = ()=>!0, lx = (e)=>tx.test(e) && !nx.test(e), Fa = ()=>!1, ix = (e)=>rx.test(e), sx = (e)=>ox.test(e), ax = (e)=>!L(e) && !O(e), ux = (e)=>an(e, am, Fa), L = (e)=>rm.test(e), yn = (e)=>an(e, um, lx), Hc = (e)=>an(e, yx, V), cx = (e)=>an(e, dm, lm), dx = (e)=>an(e, cm, Fa), Kc = (e)=>an(e, im, Fa), fx = (e)=>an(e, sm, sx), Go = (e)=>an(e, fm, ix), O = (e)=>om.test(e), Mr = (e)=>On(e, um), px = (e)=>On(e, cm), Qc = (e)=>On(e, im), mx = (e)=>On(e, am), hx = (e)=>On(e, sm), Wo = (e)=>On(e, fm, !0), gx = (e)=>On(e, dm, !0), an = (e, t, n)=>{
        const r = rm.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, On = (e, t, n = !1)=>{
        const r = om.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, im = (e)=>e === "position" || e === "percentage", sm = (e)=>e === "image" || e === "url", am = (e)=>e === "length" || e === "size" || e === "bg-size", um = (e)=>e === "length", yx = (e)=>e === "number", cm = (e)=>e === "family-name", dm = (e)=>e === "number" || e === "weight", fm = (e)=>e === "shadow", vx = ()=>{
        const e = ye("color"), t = ye("font"), n = ye("text"), r = ye("font-weight"), o = ye("tracking"), l = ye("leading"), i = ye("breakpoint"), s = ye("container"), a = ye("spacing"), u = ye("radius"), c = ye("shadow"), f = ye("inset-shadow"), d = ye("text-shadow"), x = ye("drop-shadow"), v = ye("blur"), h = ye("perspective"), C = ye("aspect"), g = ye("ease"), m = ye("animate"), p = ()=>[
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
            ], T = ()=>[
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
            ], U = ()=>[
                At,
                "full",
                "auto",
                ..._()
            ], A = ()=>[
                Ft,
                "none",
                "subgrid",
                O,
                L
            ], fe = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Ft,
                        O,
                        L
                    ]
                },
                Ft,
                O,
                L
            ], ze = ()=>[
                Ft,
                "auto",
                O,
                L
            ], Ve = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                O,
                L
            ], gt = ()=>[
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
            ], $ = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], Z = ()=>[
                "auto",
                ..._()
            ], De = ()=>[
                At,
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
                At,
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
                At,
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
            ], I = ()=>[
                e,
                O,
                L
            ], Y = ()=>[
                ...S(),
                Qc,
                Kc,
                {
                    position: [
                        O,
                        L
                    ]
                }
            ], B = ()=>[
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
            ], Pe = ()=>[
                "auto",
                "cover",
                "contain",
                mx,
                ux,
                {
                    size: [
                        O,
                        L
                    ]
                }
            ], be = ()=>[
                Oi,
                Mr,
                yn
            ], ne = ()=>[
                "",
                "none",
                "full",
                u,
                O,
                L
            ], J = ()=>[
                "",
                V,
                Mr,
                yn
            ], Ze = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], xr = ()=>[
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
            ], pe = ()=>[
                V,
                Oi,
                Qc,
                Kc
            ], un = ()=>[
                "",
                "none",
                v,
                O,
                L
            ], cn = ()=>[
                "none",
                V,
                O,
                L
            ], dn = ()=>[
                "none",
                V,
                O,
                L
            ], bn = ()=>[
                V,
                O,
                L
            ], fn = ()=>[
                At,
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
                    Ct
                ],
                breakpoint: [
                    Ct
                ],
                color: [
                    lm
                ],
                container: [
                    Ct
                ],
                "drop-shadow": [
                    Ct
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    ax
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
                    Ct
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
                    Ct
                ],
                shadow: [
                    Ct
                ],
                spacing: [
                    "px",
                    V
                ],
                text: [
                    Ct
                ],
                "text-shadow": [
                    Ct
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
                            At,
                            L,
                            O,
                            C
                        ]
                    }
                ],
                container: [
                    "container"
                ],
                columns: [
                    {
                        columns: [
                            V,
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
                        overflow: T()
                    }
                ],
                "overflow-x": [
                    {
                        "overflow-x": T()
                    }
                ],
                "overflow-y": [
                    {
                        "overflow-y": T()
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
                        inset: U()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": U()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": U()
                    }
                ],
                start: [
                    {
                        "inset-s": U(),
                        start: U()
                    }
                ],
                end: [
                    {
                        "inset-e": U(),
                        end: U()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": U()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": U()
                    }
                ],
                top: [
                    {
                        top: U()
                    }
                ],
                right: [
                    {
                        right: U()
                    }
                ],
                bottom: [
                    {
                        bottom: U()
                    }
                ],
                left: [
                    {
                        left: U()
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
                            Ft,
                            "auto",
                            O,
                            L
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            At,
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
                            V,
                            At,
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
                            V,
                            O,
                            L
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            V,
                            O,
                            L
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            Ft,
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
                        "grid-cols": A()
                    }
                ],
                "col-start-end": [
                    {
                        col: fe()
                    }
                ],
                "col-start": [
                    {
                        "col-start": ze()
                    }
                ],
                "col-end": [
                    {
                        "col-end": ze()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": A()
                    }
                ],
                "row-start-end": [
                    {
                        row: fe()
                    }
                ],
                "row-start": [
                    {
                        "row-start": ze()
                    }
                ],
                "row-end": [
                    {
                        "row-end": ze()
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
                        "auto-cols": Ve()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": Ve()
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
                            ...gt(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...$(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...$()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...gt()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...$(),
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
                            ...$(),
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
                        "place-content": gt()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...$(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...$()
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
                        m: Z()
                    }
                ],
                mx: [
                    {
                        mx: Z()
                    }
                ],
                my: [
                    {
                        my: Z()
                    }
                ],
                ms: [
                    {
                        ms: Z()
                    }
                ],
                me: [
                    {
                        me: Z()
                    }
                ],
                mbs: [
                    {
                        mbs: Z()
                    }
                ],
                mbe: [
                    {
                        mbe: Z()
                    }
                ],
                mt: [
                    {
                        mt: Z()
                    }
                ],
                mr: [
                    {
                        mr: Z()
                    }
                ],
                mb: [
                    {
                        mb: Z()
                    }
                ],
                ml: [
                    {
                        ml: Z()
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
                        size: De()
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
                            ...De()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...De()
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
                            ...De()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...De()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...De()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...De()
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
                            gx,
                            cx
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
                            Oi,
                            L
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            px,
                            dx,
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
                            V,
                            "none",
                            O,
                            Hc
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
                        placeholder: I()
                    }
                ],
                "text-color": [
                    {
                        text: I()
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
                            ...Ze(),
                            "wavy"
                        ]
                    }
                ],
                "text-decoration-thickness": [
                    {
                        decoration: [
                            V,
                            "from-font",
                            "auto",
                            O,
                            yn
                        ]
                    }
                ],
                "text-decoration-color": [
                    {
                        decoration: I()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            V,
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
                        bg: B()
                    }
                ],
                "bg-size": [
                    {
                        bg: Pe()
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
                                    Ft,
                                    O,
                                    L
                                ],
                                radial: [
                                    "",
                                    O,
                                    L
                                ],
                                conic: [
                                    Ft,
                                    O,
                                    L
                                ]
                            },
                            hx,
                            fx
                        ]
                    }
                ],
                "bg-color": [
                    {
                        bg: I()
                    }
                ],
                "gradient-from-pos": [
                    {
                        from: be()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: be()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: be()
                    }
                ],
                "gradient-from": [
                    {
                        from: I()
                    }
                ],
                "gradient-via": [
                    {
                        via: I()
                    }
                ],
                "gradient-to": [
                    {
                        to: I()
                    }
                ],
                rounded: [
                    {
                        rounded: ne()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": ne()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": ne()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": ne()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": ne()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": ne()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": ne()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": ne()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": ne()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": ne()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": ne()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": ne()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": ne()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": ne()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": ne()
                    }
                ],
                "border-w": [
                    {
                        border: J()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": J()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": J()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": J()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": J()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": J()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": J()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": J()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": J()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": J()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": J()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": J()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": J()
                    }
                ],
                "divide-y-reverse": [
                    "divide-y-reverse"
                ],
                "border-style": [
                    {
                        border: [
                            ...Ze(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...Ze(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "border-color": [
                    {
                        border: I()
                    }
                ],
                "border-color-x": [
                    {
                        "border-x": I()
                    }
                ],
                "border-color-y": [
                    {
                        "border-y": I()
                    }
                ],
                "border-color-s": [
                    {
                        "border-s": I()
                    }
                ],
                "border-color-e": [
                    {
                        "border-e": I()
                    }
                ],
                "border-color-bs": [
                    {
                        "border-bs": I()
                    }
                ],
                "border-color-be": [
                    {
                        "border-be": I()
                    }
                ],
                "border-color-t": [
                    {
                        "border-t": I()
                    }
                ],
                "border-color-r": [
                    {
                        "border-r": I()
                    }
                ],
                "border-color-b": [
                    {
                        "border-b": I()
                    }
                ],
                "border-color-l": [
                    {
                        "border-l": I()
                    }
                ],
                "divide-color": [
                    {
                        divide: I()
                    }
                ],
                "outline-style": [
                    {
                        outline: [
                            ...Ze(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            V,
                            Mr,
                            yn
                        ]
                    }
                ],
                "outline-color": [
                    {
                        outline: I()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            c,
                            Wo,
                            Go
                        ]
                    }
                ],
                "shadow-color": [
                    {
                        shadow: I()
                    }
                ],
                "inset-shadow": [
                    {
                        "inset-shadow": [
                            "none",
                            f,
                            Wo,
                            Go
                        ]
                    }
                ],
                "inset-shadow-color": [
                    {
                        "inset-shadow": I()
                    }
                ],
                "ring-w": [
                    {
                        ring: J()
                    }
                ],
                "ring-w-inset": [
                    "ring-inset"
                ],
                "ring-color": [
                    {
                        ring: I()
                    }
                ],
                "ring-offset-w": [
                    {
                        "ring-offset": [
                            V,
                            yn
                        ]
                    }
                ],
                "ring-offset-color": [
                    {
                        "ring-offset": I()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": J()
                    }
                ],
                "inset-ring-color": [
                    {
                        "inset-ring": I()
                    }
                ],
                "text-shadow": [
                    {
                        "text-shadow": [
                            "none",
                            d,
                            Wo,
                            Go
                        ]
                    }
                ],
                "text-shadow-color": [
                    {
                        "text-shadow": I()
                    }
                ],
                opacity: [
                    {
                        opacity: [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...xr(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": xr()
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
                            V
                        ]
                    }
                ],
                "mask-image-linear-from-pos": [
                    {
                        "mask-linear-from": pe()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": pe()
                    }
                ],
                "mask-image-linear-from-color": [
                    {
                        "mask-linear-from": I()
                    }
                ],
                "mask-image-linear-to-color": [
                    {
                        "mask-linear-to": I()
                    }
                ],
                "mask-image-t-from-pos": [
                    {
                        "mask-t-from": pe()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": pe()
                    }
                ],
                "mask-image-t-from-color": [
                    {
                        "mask-t-from": I()
                    }
                ],
                "mask-image-t-to-color": [
                    {
                        "mask-t-to": I()
                    }
                ],
                "mask-image-r-from-pos": [
                    {
                        "mask-r-from": pe()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": pe()
                    }
                ],
                "mask-image-r-from-color": [
                    {
                        "mask-r-from": I()
                    }
                ],
                "mask-image-r-to-color": [
                    {
                        "mask-r-to": I()
                    }
                ],
                "mask-image-b-from-pos": [
                    {
                        "mask-b-from": pe()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": pe()
                    }
                ],
                "mask-image-b-from-color": [
                    {
                        "mask-b-from": I()
                    }
                ],
                "mask-image-b-to-color": [
                    {
                        "mask-b-to": I()
                    }
                ],
                "mask-image-l-from-pos": [
                    {
                        "mask-l-from": pe()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": pe()
                    }
                ],
                "mask-image-l-from-color": [
                    {
                        "mask-l-from": I()
                    }
                ],
                "mask-image-l-to-color": [
                    {
                        "mask-l-to": I()
                    }
                ],
                "mask-image-x-from-pos": [
                    {
                        "mask-x-from": pe()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": pe()
                    }
                ],
                "mask-image-x-from-color": [
                    {
                        "mask-x-from": I()
                    }
                ],
                "mask-image-x-to-color": [
                    {
                        "mask-x-to": I()
                    }
                ],
                "mask-image-y-from-pos": [
                    {
                        "mask-y-from": pe()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": pe()
                    }
                ],
                "mask-image-y-from-color": [
                    {
                        "mask-y-from": I()
                    }
                ],
                "mask-image-y-to-color": [
                    {
                        "mask-y-to": I()
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
                        "mask-radial-from": pe()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": pe()
                    }
                ],
                "mask-image-radial-from-color": [
                    {
                        "mask-radial-from": I()
                    }
                ],
                "mask-image-radial-to-color": [
                    {
                        "mask-radial-to": I()
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
                            V
                        ]
                    }
                ],
                "mask-image-conic-from-pos": [
                    {
                        "mask-conic-from": pe()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": pe()
                    }
                ],
                "mask-image-conic-from-color": [
                    {
                        "mask-conic-from": I()
                    }
                ],
                "mask-image-conic-to-color": [
                    {
                        "mask-conic-to": I()
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
                        mask: B()
                    }
                ],
                "mask-size": [
                    {
                        mask: Pe()
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
                        blur: un()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            V,
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
                            Wo,
                            Go
                        ]
                    }
                ],
                "drop-shadow-color": [
                    {
                        "drop-shadow": I()
                    }
                ],
                grayscale: [
                    {
                        grayscale: [
                            "",
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            V,
                            O,
                            L
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            V,
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
                        "backdrop-blur": un()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            V,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            V,
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
                            V,
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
                            V,
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
                        rotate: cn()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": cn()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": cn()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": cn()
                    }
                ],
                scale: [
                    {
                        scale: dn()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": dn()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": dn()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": dn()
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
                        accent: I()
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
                        caret: I()
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
                            ...I()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            V,
                            Mr,
                            yn,
                            Hc
                        ]
                    }
                ],
                stroke: [
                    {
                        stroke: [
                            "none",
                            ...I()
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
    }, xx = Zv(vx);
    function Ht(...e) {
        return xx(Lp(e));
    }
    const wx = Op("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function ce({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? Xy : "button";
        return y.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Ht(wx({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const Sx = Op("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), pm = N.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Yc({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return y.jsx(Tv, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Ht("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: y.jsx(pm.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function Bn({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = N.useContext(pm);
        return y.jsx(zv, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Ht(Sx({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function tr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = N.useState(t), s = N.useRef(!1), a = N.useRef({
            x: 0,
            y: 0
        }), u = N.useCallback((c)=>{
            s.current = !0, a.current = {
                x: c.clientX - l.x,
                y: c.clientY - l.y
            };
            const f = (x)=>{
                if (!s.current) return;
                const v = Math.max(0, x.clientX - a.current.x), h = Math.max(0, x.clientY - a.current.y);
                i({
                    x: v,
                    y: h
                });
            }, d = ()=>{
                s.current = !1, window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", d);
            };
            window.addEventListener("mousemove", f), window.addEventListener("mouseup", d);
        }, [
            l
        ]);
        return y.jsxs("div", {
            className: Ht("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
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
    const kx = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function jr(e) {
        return kx[e] ?? "#000000";
    }
    function Cx(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, c = s * a + o * 2;
        e.width = u, e.height = c;
        const f = e.getContext("2d");
        if (f) {
            l && (f.fillStyle = l, f.fillRect(0, 0, u, c)), f.translate(o, o);
            for (const [d, x, v] of t.cells ?? []){
                const h = jr(v);
                h && (f.fillStyle = h, f.fillRect(x * a, d * a, a, a));
            }
            for (const [d, x, v, h, C, g] of t.rects ?? []){
                const m = Math.min(x, h) * a, p = Math.min(d, v) * a, S = Math.abs(h - x) * a, E = Math.abs(v - d) * a, T = jr(C);
                T && (f.fillStyle = T, f.fillRect(m, p, S, E));
                const P = jr(g);
                P && (f.strokeStyle = P, f.lineWidth = Math.max(1, a / 8), f.strokeRect(m, p, S, E));
            }
            for (const [d, x, v, h, C] of t.lines ?? []){
                const g = jr(C);
                g && (f.strokeStyle = g, f.lineWidth = Math.max(1, a / 6), f.beginPath(), f.moveTo(x * a, d * a), f.lineTo(h * a, v * a), f.stroke());
            }
            f.textBaseline = "alphabetic";
            for (const d of t.texts ?? []){
                const x = Array.isArray(d) ? {
                    r: d[0],
                    c: d[1],
                    color: d[2],
                    size: d[3],
                    text: d[4]
                } : d;
                !x || typeof x.r != "number" || typeof x.c != "number" || (f.fillStyle = jr(x.color) ?? "#000000", f.font = `${Math.max(6, (x.size ?? 1) * a)}px 'BigBlue Terminal', monospace`, f.fillText(String(x.text ?? ""), x.c * a, x.r * a));
            }
            f.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function il({ design: e, size: t = 96, className: n }) {
        const r = N.useRef(null);
        return N.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            Cx(r.current, e, o);
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
    const bs = (e, t)=>t.some((n)=>e instanceof n);
    let Xc, Zc;
    function _x() {
        return Xc || (Xc = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction
        ]);
    }
    function Ex() {
        return Zc || (Zc = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey
        ]);
    }
    const As = new WeakMap, Di = new WeakMap, Zl = new WeakMap;
    function Nx(e) {
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
        return Zl.set(t, e), t;
    }
    function Rx(e) {
        if (As.has(e)) return;
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
        As.set(e, t);
    }
    let Fs = {
        get (e, t, n) {
            if (e instanceof IDBTransaction) {
                if (t === "done") return As.get(e);
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
    function mm(e) {
        Fs = e(Fs);
    }
    function Ix(e) {
        return Ex().includes(e) ? function(...t) {
            return e.apply($s(this), t), Rn(this.request);
        } : function(...t) {
            return Rn(e.apply($s(this), t));
        };
    }
    function Tx(e) {
        return typeof e == "function" ? Ix(e) : (e instanceof IDBTransaction && Rx(e), bs(e, _x()) ? new Proxy(e, Fs) : e);
    }
    function Rn(e) {
        if (e instanceof IDBRequest) return Nx(e);
        if (Di.has(e)) return Di.get(e);
        const t = Tx(e);
        return t !== e && (Di.set(e, t), Zl.set(t, e)), t;
    }
    const $s = (e)=>Zl.get(e);
    function zx(e, t, { blocked: n, upgrade: r, blocking: o, terminated: l } = {}) {
        const i = indexedDB.open(e, t), s = Rn(i);
        return r && i.addEventListener("upgradeneeded", (a)=>{
            r(Rn(i.result), a.oldVersion, a.newVersion, Rn(i.transaction), a);
        }), n && i.addEventListener("blocked", (a)=>n(a.oldVersion, a.newVersion, a)), s.then((a)=>{
            l && a.addEventListener("close", ()=>l()), o && a.addEventListener("versionchange", (u)=>o(u.oldVersion, u.newVersion, u));
        }).catch(()=>{}), s;
    }
    const Px = [
        "get",
        "getKey",
        "getAll",
        "getAllKeys",
        "count"
    ], Mx = [
        "put",
        "add",
        "delete",
        "clear"
    ], bi = new Map;
    function Jc(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
        if (bi.get(t)) return bi.get(t);
        const n = t.replace(/FromIndex$/, ""), r = t !== n, o = Mx.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(o || Px.includes(n))) return;
        const l = async function(i, ...s) {
            const a = this.transaction(i, o ? "readwrite" : "readonly");
            let u = a.store;
            return r && (u = u.index(s.shift())), (await Promise.all([
                u[n](...s),
                o && a.done
            ]))[0];
        };
        return bi.set(t, l), l;
    }
    mm((e)=>({
            ...e,
            get: (t, n, r)=>Jc(t, n) || e.get(t, n, r),
            has: (t, n)=>!!Jc(t, n) || e.has(t, n)
        }));
    const jx = [
        "continue",
        "continuePrimaryKey",
        "advance"
    ], qc = {}, Bs = new WeakMap, hm = new WeakMap, Lx = {
        get (e, t) {
            if (!jx.includes(t)) return e[t];
            let n = qc[t];
            return n || (n = qc[t] = function(...r) {
                Bs.set(this, hm.get(this)[t](...r));
            }), n;
        }
    };
    async function* Ox(...e) {
        let t = this;
        if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
        t = t;
        const n = new Proxy(t, Lx);
        for(hm.set(n, t), Zl.set(n, $s(t)); t;)yield n, t = await (Bs.get(n) || t.continue()), Bs.delete(n);
    }
    function ed(e, t) {
        return t === Symbol.asyncIterator && bs(e, [
            IDBIndex,
            IDBObjectStore,
            IDBCursor
        ]) || t === "iterate" && bs(e, [
            IDBIndex,
            IDBObjectStore
        ]);
    }
    mm((e)=>({
            ...e,
            get (t, n, r) {
                return ed(t, n) ? Ox : e.get(t, n, r);
            },
            has (t, n) {
                return ed(t, n) || e.has(t, n);
            }
        }));
    let td;
    function Dn() {
        return td ??= zx("grid-draw", 1, {
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
        }), td;
    }
    function gm() {
        return new Date().toISOString();
    }
    async function Dx() {
        return (await Dn()).getAll("designs");
    }
    async function bx(e) {
        const t = await (await Dn()).get("designs", e);
        if (!t) throw new Error(`design ${e} not found`);
        return t;
    }
    async function Ax(e) {
        const t = await (await Dn()).getFromIndex("designs", "by-name", e);
        if (!t) throw new Error(`design "${e}" not found`);
        return t;
    }
    async function Fx(e, t, n) {
        const r = (await Dn()).transaction("designs", "readwrite"), o = await r.store.index("by-name").get(e);
        if (o) return await r.store.put({
            ...o,
            name: e,
            design: t,
            history: n
        }), await r.done, o.id;
        const l = await r.store.add({
            createdAt: gm(),
            name: e,
            design: t,
            history: n
        });
        return await r.done, l;
    }
    async function nd() {
        return (await (await Dn()).getAll("examples")).reverse();
    }
    async function $x(e, t, n) {
        return await (await Dn()).add("examples", {
            createdAt: gm(),
            input: e,
            output: t,
            delta: n
        });
    }
    async function Bx(e, t, n, r) {
        const o = (await Dn()).transaction("examples", "readwrite"), l = await o.store.get(e);
        if (!l) throw new Error(`example ${e} not found`);
        await o.store.put({
            ...l,
            input: t,
            output: n,
            delta: r ?? l.delta
        }), await o.done;
    }
    const fo = 31;
    function Ux(e) {
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
    function Vx(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = Ux(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function rd(e, t) {
        return e >= 0 && e <= fo && t >= 0 && t <= fo;
    }
    const ft = fo + 1, ym = "indexeddb://grid-draw-coord-model";
    let od, hr = null;
    async function $a() {
        return od ??= Ep(()=>import("./index2.js"), []), od;
    }
    function Gx(e) {
        const t = e.input({
            shape: [
                2 * ft
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
            units: ft,
            activation: "softmax",
            name: "r"
        }).apply(n), o = e.layers.dense({
            units: ft,
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
    function vm(e, t) {
        const n = new Float32Array(t.length * 2 * ft);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * ft + r] = 1, n[l * 2 * ft + ft + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * ft
        ]);
    }
    function ld(e, t) {
        const n = new Float32Array(t.length * ft);
        return t.forEach((r, o)=>{
            n[o * ft + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            ft
        ]);
    }
    async function Wx() {
        const e = await $a();
        try {
            return hr = await e.loadLayersModel(ym), !0;
        } catch  {
            return hr = null, !1;
        }
    }
    async function Hx(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await $a(), { pairs: s, skippedExamples: a } = Vx(e), u = [];
        let c = 0;
        for (const C of s)rd(C[0], C[1]) && rd(C[2], C[3]) ? u.push(C) : c++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const f = vm(i, u.map((C)=>[
                C[0],
                C[1]
            ])), d = ld(i, u.map((C)=>C[2])), x = ld(i, u.map((C)=>C[3])), v = Gx(i);
        v.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let h = NaN;
        return await v.fit(f, [
            d,
            x
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (C, g)=>{
                    h = g?.loss ?? h, l?.(C + 1, n, h), await i.nextFrame();
                }
            }
        }), f.dispose(), d.dispose(), x.dispose(), hr?.dispose(), hr = v, await v.save(ym), {
            pairs: u.length,
            droppedPoints: c,
            skippedExamples: a,
            finalLoss: h
        };
    }
    async function Kx(e) {
        if (!hr) throw new Error("No model yet — train one first.");
        const t = await $a(), n = e.cells ?? [];
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
            const a = vm(t, r), [u, c] = hr.predict(a), f = u.argMax(1).dataSync(), d = c.argMax(1).dataSync();
            return n.map(([, , x], v)=>[
                    f[v],
                    d[v],
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
    const he = Np((e, t)=>({
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
                        designs: await Dx(),
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
                        examples: await nd(),
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
                const l = await Fx(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>Ax(n),
            getDrawingById: (n)=>bx(n),
            saveExamplePair: async (n, r, o)=>{
                await $x(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await Bx(n, r, o, l), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Wx();
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
                const n = await nd();
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
                    const r = await Hx(n, {
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
            runPredict: (n)=>Kx(n)
        })), xm = "/grid-draw/";
    function Qx(e) {
        window.location.href = `${xm}design/${encodeURIComponent(e)}/`;
    }
    function Yx() {
        window.location.href = xm;
    }
    function wm({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = he((d)=>d.designs), o = he((d)=>d.examples), l = he((d)=>d.loadingDesigns || d.loadingExamples), i = he((d)=>d.error), s = he((d)=>d.loadDesigns), a = he((d)=>d.loadExamples), u = N.useCallback(()=>{
            s(), a();
        }, [
            s,
            a
        ]);
        N.useEffect(()=>{
            u();
        }, [
            u
        ]);
        const c = N.useCallback((d)=>{
            n ? n(d) : Qx(d);
        }, [
            n
        ]), f = y.jsxs(y.Fragment, {
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
                            children: r.map((d)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        y.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: y.jsx(il, {
                                                design: d.design,
                                                size: 120
                                            })
                                        }),
                                        y.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: d.name,
                                            children: d.name
                                        }),
                                        y.jsx(ce, {
                                            size: "sm",
                                            className: "w-full text-xs",
                                            onClick: ()=>c(d.name),
                                            children: "Open"
                                        })
                                    ]
                                }, d.id))
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
                            children: o.map((d)=>y.jsx("div", {
                                    className: "bg-white rounded border p-2",
                                    children: y.jsxs("div", {
                                        className: "flex items-center justify-center gap-2",
                                        children: [
                                            y.jsxs("div", {
                                                className: "flex flex-col items-center",
                                                children: [
                                                    y.jsx(il, {
                                                        design: d.input,
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
                                                    y.jsx(il, {
                                                        design: d.output,
                                                        size: 80
                                                    }),
                                                    y.jsx("span", {
                                                        className: "text-[10px] text-gray-400 mt-1",
                                                        children: "output"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, d.id))
                        })
                    ]
                })
            ]
        });
        return e ? y.jsxs(tr, {
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
                        y.jsx(ce, {
                            variant: "outline",
                            size: "sm",
                            onClick: u,
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
                    children: f
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
                        y.jsx(ce, {
                            variant: "outline",
                            size: "sm",
                            onClick: Yx,
                            children: "← Editor"
                        }),
                        y.jsx(ce, {
                            variant: "outline",
                            size: "sm",
                            onClick: u,
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
                f
            ]
        });
    }
    const Xx = "/grid-draw/";
    function id({ design: e, label: t, onClick: n }) {
        const r = y.jsx(il, {
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
    function Zx({ input: e, output: t, onInput: n, onOutput: r }) {
        return y.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                y.jsx(id, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                y.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                y.jsx(id, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function Sm({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = he((a)=>a.examples), o = he((a)=>a.error), l = he((a)=>a.loadExamples);
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
                        y.jsx(ce, {
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
                                        y.jsx(Zx, {
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
        return e ? y.jsx(tr, {
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
                        y.jsx(ce, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = Xx;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const vt = 16, wn = 48, Un = "/grid-draw/", sd = [
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
    function Jx() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function qx(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function ad() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - wn)
        };
    }
    function e0() {
        const [e, t] = N.useState(()=>ad()), n = N.useRef(null), { grid: r, loading: o, error: l } = $y(n, e.w, e.h), i = tt(), { tool: s, setTool: a, colorIdx: u, setColorIdx: c, pickColor: f, outlineIdx: d, pickOutline: x, isDrawing: v, drawMode: h, startDrawing: C, stopDrawing: g, lineStart: m, startLine: p, finishLine: S, rectStart: E, startRect: T, finishRect: P, textSize: _, pickTextSize: U, beginTextEdit: A, typeTextChar: fe, backspaceText: ze, commitTextEdit: Ve, cancelTextEdit: gt, selectedItems: $, setSelectedItems: Z, selectAll: De, clipboard: M, copy: b, paste: I, deleteSelected: Y, selectMode: B, isSelecting: Pe, selectBoxStart: be, selectDragStart: ne, startBoxSelection: J, updateBoxSelection: Ze, finishBoxSelection: xr, cancelBoxSelection: pe, startDragSelection: un, finishDragSelection: cn, cancelDragSelection: dn, startResize: bn, updateResize: fn, finishResize: Ba, cancelResize: Ua, startRotate: Va, updateRotate: Ga, finishRotate: Wa, cancelRotate: Ha, setMousePos: Ka, addItemToSelection: Qa, removeItemFromSelection: Ya, hitTestShapes: xo, getSelectedCells: km, jsonOutput: Cm, tensorOutput: _m, importJson: Em, importTensor: Nm, clear: Jl, updateOutputs: wr, renderSelection: ql, beginDrawStroke: Xa, drawCellAt: wo, endDrawStroke: Za, commitLine: Ja, commitRect: qa, undo: ei, redo: ti, canUndo: Rm, canRedo: Im, captureMode: ni, captureInput: Sr, startTrainingCapture: Tm, captureSetInput: zm, buildTrainingExample: eu, finishTrainingCapture: tu, cancelTrainingCapture: nu, serializeWholeGrid: So, exportHistory: ru, loadDesignWithHistory: pn, currentName: ou, setCurrentName: it, saveState: ri, setSaveState: lu, resetHistory: iu } = i;
        i.historyTick;
        const su = he((w)=>w.saveDrawing), ko = he((w)=>w.getDrawing), au = he((w)=>w.getDrawingById), uu = he((w)=>w.saveExamplePair), cu = he((w)=>w.updateExamplePair), du = he((w)=>w.runPredict), fu = he((w)=>w.trainModel), pu = he((w)=>w.initModel), mu = he((w)=>w.modelStatus), ke = he((w)=>w.training), kr = km(), [hu, ae] = N.useState(""), [Pm, oi] = N.useState(!1), [Mm, li] = N.useState(!1), [Lt, ii] = N.useState(null), [An, jm] = N.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), Lm = .25, Om = 12, Ot = N.useRef(An);
        Ot.current = An;
        const Cr = N.useCallback((w)=>{
            jm(w), r?.set_camera(w.x, w.y, w.zoom);
        }, [
            r
        ]), Co = N.useRef(!1), [Dm, gu] = N.useState(!1), mn = N.useRef(null), bm = N.useCallback(async ()=>{
            const w = So();
            if (!w || w.cells.length + w.lines.length + w.rects.length + w.texts.length === 0) {
                ae("Nothing to save — draw something first.");
                return;
            }
            const k = Jx();
            ae("Saving to gallery…");
            try {
                await su(k, w, ru()), it(k), window.history.replaceState({}, "", `${Un}design/${k}/`), ae(`Saved as ${k}. Auto-saving changes.`);
            } catch (z) {
                ae(`Save failed: ${z instanceof Error ? z.message : String(z)}`);
            }
        }, [
            So,
            ru,
            it,
            su
        ]);
        N.useEffect(()=>{
            if (!r) return;
            let w = !1;
            const k = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (k) return ko(k[1]).then((D)=>{
                w || (pn(D.design, D.history ?? null), it(D.name));
            }).catch(()=>ae(`No drawing named "${k[1]}".`)), ()=>{
                w = !0;
            };
            const z = new URLSearchParams(window.location.search).get("load");
            if (z) return au(Number(z)).then((D)=>{
                w || (pn(D.design, D.history ?? null), it(D.name), window.history.replaceState({}, "", `${Un}design/${encodeURIComponent(D.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Un);
            }), ()=>{
                w = !0;
            };
        }, [
            r,
            pn,
            it,
            ko,
            au
        ]), N.useEffect(()=>{
            pu();
        }, [
            pu
        ]);
        const Am = N.useCallback(async ()=>{
            const w = eu();
            if (!w) {
                ae("Select the output region first.");
                return;
            }
            ae("Saving…");
            try {
                await uu(w.input, w.output, w.delta), tu(), ae("Saved.");
            } catch (k) {
                ae(`Save failed: ${k instanceof Error ? k.message : String(k)}`);
            }
        }, [
            eu,
            tu,
            uu
        ]), Fm = N.useCallback(async ()=>{
            ae("Training in the browser…");
            try {
                await fu(), ae("Model trained. Try Predict from Selection.");
            } catch (w) {
                ae(`Train failed: ${w instanceof Error ? w.message : String(w)}`);
            }
        }, [
            fu
        ]), $m = N.useCallback(async ()=>{
            const { grid: w, selectedItems: k } = tt.getState();
            if (!w) return;
            const z = ll(w, k);
            if (!z) {
                ae("Select an input region to predict from.");
                return;
            }
            const D = We(k, w), X = D ? D.minRow : 0, H = D ? D.minCol : 0;
            ae("Predicting…");
            try {
                const F = await du(z);
                tt.getState().placeDesign(F, X, H), ae(qx(F) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (F) {
                ae(`Predict failed: ${F instanceof Error ? F.message : String(F)}`);
            }
        }, [
            du
        ]), Bm = N.useCallback(async (w)=>{
            const k = await ko(w);
            pn(k.design, k.history ?? null), it(k.name), ii(null), window.history.replaceState({}, "", `${Un}design/${encodeURIComponent(k.name)}/`), oi(!1);
        }, [
            pn,
            it,
            ko
        ]), Um = N.useCallback((w, k)=>{
            const z = k === "input" ? w.input : w.output, D = k === "input" ? w.output : w.input;
            pn(z, null), it(null), ii({
                id: w.id,
                half: k,
                otherHalf: D
            }), window.history.replaceState({}, "", Un), li(!1), ae(`Editing example #${w.id} (${k}) — click "Update example" to save over it.`);
        }, [
            pn,
            it
        ]), Vm = N.useCallback(async ()=>{
            if (!Lt) return;
            const w = So();
            if (!w) {
                ae("Nothing to save — draw something first.");
                return;
            }
            const { id: k, half: z, otherHalf: D } = Lt, X = z === "input" ? w : D, H = z === "output" ? w : D;
            ae(`Updating example #${k}…`);
            try {
                await cu(k, X, H), ae(`Example #${k} (${z}) updated.`);
            } catch (F) {
                ae(`Update failed: ${F instanceof Error ? F.message : String(F)}`);
            }
        }, [
            Lt,
            So,
            cu
        ]), Gm = N.useCallback(()=>{
            it(null), ii(null), Jl(), iu(), lu("idle"), window.history.replaceState({}, "", Un), ae("");
        }, [
            it,
            Jl,
            iu,
            lu
        ]);
        N.useEffect(()=>{
            const w = ()=>{
                const k = ad();
                t(k), r?.set_viewport(k.w, k.h);
            };
            return window.addEventListener("resize", w), ()=>window.removeEventListener("resize", w);
        }, [
            r
        ]), N.useEffect(()=>{
            const w = (k)=>{
                if (tt.getState().textEdit) return;
                k.key === "\\" && a(s === "line" ? "draw" : "line"), k.key === "m" && a(s === "rect" ? "draw" : "rect"), k.key === "t" && a(s === "text" ? "draw" : "text"), k.key === "s" && a(s === "select" ? "draw" : "select"), (k.key === "Delete" || k.key === "Backspace") && $.length > 0 && (k.preventDefault(), Y()), (k.ctrlKey || k.metaKey) && k.key.toLowerCase() === "a" && (k.preventDefault(), De()), (k.ctrlKey || k.metaKey) && k.key === "c" && $.length > 0 && (k.preventDefault(), b()), (k.ctrlKey || k.metaKey) && k.key === "v" && M && (k.preventDefault(), I()), (k.ctrlKey || k.metaKey) && !k.shiftKey && k.key.toLowerCase() === "z" && (k.preventDefault(), ei()), (k.ctrlKey || k.metaKey) && (k.shiftKey && k.key.toLowerCase() === "z" || k.key.toLowerCase() === "y") && (k.preventDefault(), ti());
                const z = parseInt(k.key);
                z >= 1 && z <= 7 && c(z - 1);
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            s,
            a,
            c,
            $,
            Y,
            b,
            I,
            M,
            ei,
            ti,
            De
        ]), N.useEffect(()=>{
            const w = (k)=>{
                if (tt.getState().textEdit) {
                    if (k.key === "Enter") {
                        k.preventDefault(), Ve();
                        return;
                    }
                    if (k.key === "Escape") {
                        k.preventDefault(), gt();
                        return;
                    }
                    if (k.key === "Backspace") {
                        k.preventDefault(), ze();
                        return;
                    }
                    k.key.length === 1 && !k.ctrlKey && !k.metaKey && !k.altKey && (k.preventDefault(), fe(k.key));
                }
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            Ve,
            gt,
            ze,
            fe
        ]), N.useEffect(()=>{
            const w = n.current;
            if (!w) return;
            const k = (z)=>{
                z.preventDefault();
                const D = Ot.current, X = z.deltaY < 0 ? 1.1 : 1 / 1.1, H = Math.min(Om, Math.max(Lm, D.zoom * X));
                if (H === D.zoom) return;
                const F = z.clientX, W = z.clientY - wn, ue = D.x + F * (1 / D.zoom - 1 / H), Je = D.y + W * (1 / D.zoom - 1 / H);
                Cr({
                    x: ue,
                    y: Je,
                    zoom: H
                });
            };
            return w.addEventListener("wheel", k, {
                passive: !1
            }), ()=>w.removeEventListener("wheel", k);
        }, [
            Cr
        ]), N.useEffect(()=>{
            const w = (z)=>{
                z.code !== "Space" || tt.getState().textEdit || (z.preventDefault(), Co.current = !0, gu(!0));
            }, k = (z)=>{
                z.code === "Space" && (Co.current = !1, gu(!1));
            };
            return window.addEventListener("keydown", w), window.addEventListener("keyup", k), ()=>{
                window.removeEventListener("keydown", w), window.removeEventListener("keyup", k);
            };
        }, []);
        const Wm = N.useCallback(()=>Cr({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            Cr
        ]), Fn = (w)=>{
            const k = w.currentTarget, z = k.getBoundingClientRect(), D = (w.clientX - z.left) * (k.width / z.width), X = (w.clientY - z.top) * (k.height / z.height), H = Ot.current;
            return {
                x: D / H.zoom + H.x,
                y: X / H.zoom + H.y
            };
        }, hn = (w)=>{
            const { x: k, y: z } = Fn(w);
            return {
                col: Math.floor(k / vt),
                row: Math.floor(z / vt)
            };
        }, Dt = (w)=>{
            const { x: k, y: z } = Fn(w);
            return {
                col: Math.round(k / vt),
                row: Math.round(z / vt)
            };
        }, _o = (w)=>$.some((k)=>k.type !== w.type ? !1 : k.type === "cell" && w.type === "cell" ? k.row === w.row && k.col === w.col : k.type === "line" && w.type === "line" || k.type === "rect" && w.type === "rect" || k.type === "text" && w.type === "text" ? k.index === w.index : !1), Hm = N.useCallback((w)=>{
            if (r) {
                if (w.button === 1 || w.button === 0 && Co.current) {
                    w.preventDefault(), mn.current = {
                        x: w.clientX,
                        y: w.clientY,
                        camX: Ot.current.x,
                        camY: Ot.current.y
                    }, w.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (r.set_draw_color(u), r.set_outline_color(d), s === "draw") {
                    const { col: k, row: z } = hn(w), D = u === 6 ? !1 : !r.get_cell(z, k);
                    C(D), Xa(), wo(z, k, D), wr();
                } else if (s === "line") {
                    const { col: k, row: z } = Dt(w);
                    p({
                        row: z,
                        col: k
                    }), r.render_with_line(z, k, z, k);
                } else if (s === "rect") {
                    const { col: k, row: z } = Dt(w);
                    T({
                        row: z,
                        col: k
                    }), r.render_with_rect(z, k, z, k);
                } else if (s === "text") {
                    const { col: k, row: z } = hn(w);
                    A({
                        row: z,
                        col: k
                    });
                } else if (s === "select") {
                    const { col: k, row: z } = hn(w), { x: D, y: X } = Fn(w), H = w.shiftKey;
                    if ($.length > 0 && !H) {
                        const Je = We($, r);
                        if (Je) {
                            const Eo = Ps(Je), No = 10 / Ot.current.zoom;
                            if (Math.hypot(D - Eo.c * vt, X - Eo.r * vt) <= No) {
                                Va(D, X);
                                return;
                            }
                        }
                    }
                    if ($.length === 1 && !H) {
                        const Je = $[0];
                        if (Je.type === "line" || Je.type === "rect") {
                            const Eo = Je.type === "line" ? Ms(r.get_line(Je.index)) : js(r.get_rect(Je.index)), No = Tc(D, X, Eo, vt, 9);
                            if (No) {
                                bn({
                                    shape: Je.type,
                                    index: Je.index,
                                    handle: No.handle
                                });
                                return;
                            }
                        }
                    }
                    const F = We($, r), W = F && z >= F.minRow && z <= F.maxRow && k >= F.minCol && k <= F.maxCol, ue = xo(D, X);
                    ue && !H && _o(ue) && $.length > 1 ? (un({
                        row: z,
                        col: k
                    }), ql()) : W && $.length > 0 && !H && !ue ? (un({
                        row: z,
                        col: k
                    }, !0), ql()) : ue ? H && !_o(ue) ? Qa(ue) : H && _o(ue) ? Ya(ue) : (Z([
                        ue
                    ]), un({
                        row: z,
                        col: k
                    }), r.render(), ue.type === "cell" ? r.highlight_cell(ue.row, ue.col) : ue.type === "line" ? r.highlight_line(ue.index) : ue.type === "rect" && r.highlight_rect(ue.index)) : J({
                        row: z,
                        col: k
                    }, H);
                }
            }
        }, [
            r,
            s,
            u,
            d,
            $,
            kr,
            xo,
            C,
            p,
            T,
            J,
            un,
            bn,
            Va,
            Qa,
            Ya,
            Z,
            wr,
            ql,
            Xa,
            wo,
            A
        ]), Km = N.useCallback((w)=>{
            if (!r) return;
            if (mn.current) {
                const z = mn.current, D = Ot.current.zoom;
                Cr({
                    x: z.camX - (w.clientX - z.x) / D,
                    y: z.camY - (w.clientY - z.y) / D,
                    zoom: D
                });
                return;
            }
            const k = hn(w);
            if (Ka(k), s === "select") {
                const z = w.currentTarget;
                if (Pe && (B === "resize" || B === "rotate")) z.style.cursor = "grabbing";
                else if (Pe && B === "drag") z.style.cursor = "move";
                else {
                    const { x: D, y: X } = Fn(w);
                    let H = "crosshair";
                    if ($.length > 0) {
                        const F = We($, r);
                        if (F) {
                            const W = Ps(F);
                            Math.hypot(D - W.c * vt, X - W.r * vt) <= 10 / Ot.current.zoom && (H = "grab");
                        }
                    }
                    if (H === "crosshair" && $.length === 1) {
                        const F = $[0];
                        if (F.type === "line" || F.type === "rect") {
                            const W = F.type === "line" ? Ms(r.get_line(F.index)) : js(r.get_rect(F.index));
                            Tc(D, X, W, vt, 9) && (H = "grab");
                        }
                    }
                    if (H === "crosshair" && $.length > 0) {
                        const F = xo(D, X), W = We($, r), ue = W && k.row >= W.minRow && k.row <= W.maxRow && k.col >= W.minCol && k.col <= W.maxCol;
                        (F && _o(F) || ue) && (H = "move");
                    }
                    z.style.cursor = H;
                }
            } else w.currentTarget.style.cursor = "crosshair";
            if (!(!v && !Pe)) {
                if (s === "draw" && v) {
                    const { col: z, row: D } = hn(w);
                    wo(D, z, h), wr();
                } else if (s === "line" && m) {
                    const { col: z, row: D } = Dt(w);
                    r.render_with_line(m.row, m.col, D, z);
                } else if (s === "rect" && E) {
                    const { col: z, row: D } = Dt(w);
                    r.render_with_rect(E.row, E.col, D, z);
                } else if (s === "select" && Pe && B === "resize") {
                    const { col: z, row: D } = Dt(w);
                    fn({
                        row: D,
                        col: z
                    });
                } else if (s === "select" && Pe && B === "rotate") {
                    const { x: z, y: D } = Fn(w);
                    Ga(z, D);
                } else if (s === "select" && Pe) {
                    const { col: z, row: D } = hn(w);
                    if (B === "box" && be) Ze({
                        row: D,
                        col: z
                    });
                    else if (B === "drag" && ne && $.length > 0) {
                        const X = D - ne.row, H = z - ne.col;
                        r.render();
                        for (const F of $)if (F.type === "cell") {
                            const W = F.row + X, ue = F.col + H;
                            r.preview_cell(W, ue, r.get_cell_color(F.row, F.col));
                        } else if (F.type === "line") {
                            const W = r.get_line(F.index);
                            W.length >= 5 && r.preview_line(W[0] + X, W[1] + H, W[2] + X, W[3] + H, W[4]);
                        } else if (F.type === "rect") {
                            const W = r.get_rect(F.index);
                            W.length >= 6 && r.preview_rect(W[0] + X, W[1] + H, W[2] + X, W[3] + H, W[4], W[5]);
                        } else if (F.type === "text") {
                            const W = r.get_text(F.index);
                            W.length >= 3 && r.preview_text(W[0] + X, W[1] + H, W[2], r.get_text_size(F.index), r.get_text_string(F.index));
                        }
                    }
                }
            }
        }, [
            r,
            s,
            v,
            Pe,
            h,
            m,
            E,
            B,
            be,
            ne,
            $,
            xo,
            Ka,
            Ze,
            fn,
            Ga,
            wr,
            wo
        ]), Qm = N.useCallback((w)=>{
            if (r) {
                if (mn.current) {
                    mn.current = null, w.currentTarget.style.cursor = Co.current ? "grab" : "crosshair";
                    return;
                }
                if (s === "draw") Za(), g();
                else if (s === "line") {
                    if (m) {
                        const { col: k, row: z } = Dt(w);
                        Ja(m.row, m.col, z, k);
                    }
                    S();
                } else if (s === "rect") {
                    if (E) {
                        const { col: k, row: z } = Dt(w);
                        qa(E.row, E.col, z, k);
                    }
                    P();
                } else if (s === "select") {
                    const { col: k, row: z } = hn(w);
                    if (B === "rotate") {
                        const { x: D, y: X } = Fn(w);
                        Wa(D, X);
                    } else if (B === "resize") {
                        const { col: D, row: X } = Dt(w);
                        Ba({
                            row: X,
                            col: D
                        });
                    } else B === "box" ? xr({
                        row: z,
                        col: k
                    }) : B === "drag" && cn({
                        row: z,
                        col: k
                    });
                }
            }
        }, [
            r,
            s,
            m,
            E,
            B,
            g,
            S,
            P,
            xr,
            cn,
            Ba,
            Wa,
            wr,
            Za,
            Ja,
            qa
        ]), Ym = N.useCallback(()=>{
            if (mn.current) {
                mn.current = null;
                return;
            }
            s === "draw" ? g() : s === "line" ? (r && r.render(), S()) : s === "rect" ? (r && r.render(), P()) : s === "select" && (B === "box" ? pe() : B === "drag" ? dn() : B === "resize" ? Ua() : B === "rotate" && Ha());
        }, [
            r,
            s,
            B,
            g,
            S,
            P,
            pe,
            dn,
            Ua,
            Ha
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
                                ou && y.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        ou,
                                        ri === "saving" && " · saving…",
                                        ri === "saved" && " · saved",
                                        ri === "error" && " · save failed"
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
                                        y.jsx(ce, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: Wm,
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
                    className: Ht("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: wn,
                        cursor: o ? "wait" : Dm ? "grab" : "crosshair"
                    },
                    onMouseDown: Hm,
                    onMouseMove: Km,
                    onMouseUp: Qm,
                    onMouseLeave: Ym
                }),
                y.jsx(tr, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: wn + 20
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
                                    y.jsxs(Yc, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (w)=>w && a(w),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            y.jsx(Bn, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            y.jsx(Bn, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            y.jsx(Bn, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            y.jsx(Bn, {
                                                value: "text",
                                                className: "text-xs",
                                                children: "Text"
                                            }),
                                            y.jsx(Bn, {
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
                                    y.jsx(Yc, {
                                        type: "single",
                                        value: String(_),
                                        onValueChange: (w)=>w && U(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Oy.map((w)=>y.jsxs(Bn, {
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
                                        children: sd.map((w, k)=>y.jsx("button", {
                                                onClick: ()=>f(k),
                                                title: `${k + 1}: ${w.name}`,
                                                className: Ht("w-6 h-6 rounded border-2 transition-all", u === k ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: w.hex ?? "transparent",
                                                    backgroundImage: w.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: w.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: w.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, k))
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
                                        children: sd.map((w, k)=>y.jsx("button", {
                                                onClick: ()=>x(k),
                                                title: k === 6 ? "No outline" : w.name,
                                                className: Ht("w-6 h-6 rounded border-2 transition-all", d === k ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: w.hex ?? "transparent",
                                                    backgroundImage: w.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: w.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: w.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, k))
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(ce, {
                                        variant: "outline",
                                        onClick: ei,
                                        disabled: o || !Rm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Undo (Ctrl/Cmd+Z)",
                                        children: y.jsx(Yy, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    y.jsx(ce, {
                                        variant: "outline",
                                        onClick: ti,
                                        disabled: o || !Im(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Redo (Ctrl/Cmd+Shift+Z)",
                                        children: y.jsx(Ky, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(ce, {
                                        variant: "outline",
                                        onClick: bm,
                                        disabled: o,
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Save the whole drawing to the gallery",
                                        children: "Save to Gallery"
                                    }),
                                    y.jsx(ce, {
                                        variant: "outline",
                                        onClick: ()=>oi(!0),
                                        size: "sm",
                                        className: "flex-1",
                                        children: "Gallery"
                                    })
                                ]
                            }),
                            Lt && y.jsxs(ce, {
                                variant: "outline",
                                onClick: Vm,
                                disabled: o,
                                size: "sm",
                                className: "w-full border-amber-400 text-amber-700 hover:bg-amber-50",
                                title: `Overwrite training example #${Lt.id}'s ${Lt.half} with the current canvas`,
                                children: [
                                    "Update example #",
                                    Lt.id,
                                    " (",
                                    Lt.half,
                                    ")"
                                ]
                            }),
                            y.jsx(ce, {
                                variant: "destructive",
                                onClick: Jl,
                                disabled: o,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            y.jsx(ce, {
                                onClick: Gm,
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
                y.jsx(tr, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: wn + 20
                    },
                    children: y.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            kr.length > 0 && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsxs("div", {
                                        children: [
                                            y.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "JSON (sparse)"
                                            }),
                                            y.jsx("textarea", {
                                                value: Cm,
                                                onChange: (w)=>Em(w.target.value),
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
                                                value: _m,
                                                onChange: (w)=>Nm(w.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            y.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: $.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${$.length} item${$.length !== 1 ? "s" : ""} selected${kr.length > 0 ? ` (${kr.length} cell${kr.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                }),
                y.jsx(tr, {
                    title: "Training Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: wn + 360
                    },
                    children: y.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            ni === "idle" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                                    }),
                                    y.jsx(ce, {
                                        size: "sm",
                                        className: "w-full",
                                        onClick: Tm,
                                        disabled: o,
                                        children: "Make Training Data"
                                    }),
                                    y.jsx(ce, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: $m,
                                        disabled: o || $.length === 0 || mu !== "ready",
                                        title: mu !== "ready" ? "Train a model first" : "Map the selection through the model",
                                        children: "Predict from Selection"
                                    }),
                                    y.jsx(ce, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Fm,
                                        disabled: o || ke?.status === "running",
                                        children: ke?.status === "running" ? "Training…" : "Start Training Run"
                                    }),
                                    y.jsx(ce, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: ()=>li(!0),
                                        children: "View Training Data"
                                    })
                                ]
                            }),
                            ni === "input" && y.jsxs(y.Fragment, {
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
                                            y.jsx(ce, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: zm,
                                                disabled: $.length === 0,
                                                children: "Next →"
                                            }),
                                            y.jsx(ce, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: nu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ni === "output" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs font-medium text-green-600",
                                        children: "Step 2/2 — select the OUTPUT, then Save."
                                    }),
                                    y.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Input: ",
                                            Sr ? `${Sr.cells.length}c ${Sr.lines.length}l ${Sr.rects.length}r ${Sr.texts.length}t` : "—",
                                            " · Output: ",
                                            $.length,
                                            " item(s)"
                                        ]
                                    }),
                                    y.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            y.jsx(ce, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Am,
                                                disabled: $.length === 0,
                                                children: "Save Example"
                                            }),
                                            y.jsx(ce, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: nu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            hu && y.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: hu
                            })
                        ]
                    })
                }),
                ke && y.jsx(tr, {
                    title: "Training",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: wn + 540
                    },
                    children: y.jsx("div", {
                        className: "space-y-2 w-72 text-xs",
                        children: (()=>{
                            const w = ke.total > 0 ? Math.min(100, Math.round(ke.epoch / ke.total * 100)) : ke.status === "done" ? 100 : 0, k = ke.status === "error" ? "bg-red-500" : ke.status === "done" ? "bg-green-500" : "bg-blue-500";
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
                                                children: ke.status
                                            })
                                        ]
                                    }),
                                    y.jsx("div", {
                                        className: "h-1.5 bg-gray-200 rounded overflow-hidden",
                                        children: y.jsx("div", {
                                            className: Ht("h-full", k),
                                            style: {
                                                width: `${w}%`
                                            }
                                        })
                                    }),
                                    y.jsxs("div", {
                                        className: "flex justify-between text-gray-400",
                                        children: [
                                            y.jsx("span", {
                                                children: ke.total > 0 ? `epoch ${ke.epoch}/${ke.total} (${w}%)` : ""
                                            }),
                                            Number.isFinite(ke.loss) && y.jsxs("span", {
                                                children: [
                                                    "loss ",
                                                    ke.loss.toFixed(4)
                                                ]
                                            })
                                        ]
                                    }),
                                    ke.message && y.jsx("p", {
                                        className: "text-gray-400",
                                        children: ke.message
                                    })
                                ]
                            });
                        })()
                    })
                }),
                Pm && y.jsx(wm, {
                    asModal: !0,
                    onClose: ()=>oi(!1),
                    onOpenDesign: Bm
                }),
                Mm && y.jsx(Sm, {
                    asModal: !0,
                    onClose: ()=>li(!1),
                    onEditExample: Um
                })
            ]
        });
    }
    function t0() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function n0() {
        const e = t0();
        return y.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? y.jsx(wm, {}) : e === "training" ? y.jsx(Sm, {}) : y.jsx(e0, {})
        });
    }
    const r0 = 600;
    let ud;
    function o0() {
        tt.getState().currentName && (clearTimeout(ud), ud = setTimeout(l0, r0));
    }
    async function l0() {
        const e = tt.getState();
        if (!e.currentName || !e.grid) return;
        const t = e.serializeWholeGrid();
        if (t) {
            e.setSaveState("saving");
            try {
                await he.getState().saveDrawing(e.currentName, t, e.exportHistory()), tt.getState().setSaveState("saved");
            } catch (n) {
                tt.getState().setSaveState("error", n instanceof Error ? n.message : String(n));
            }
        }
    }
    tt.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && o0();
    });
    const cd = document.getElementById("grid-draw-root");
    cd && Ai.createRoot(cd).render(y.jsx(re.StrictMode, {
        children: y.jsx(n0, {})
    }));
})();
export { s0 as a, i0 as c, Zm as g, __tla };
