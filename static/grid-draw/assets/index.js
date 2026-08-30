let zv, Iv, jp;
let __tla = (async ()=>{
    function Rp(e, t) {
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
    Iv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    jp = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    zv = function(e) {
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
    var uc = {
        exports: {}
    }, yl = {}, cc = {
        exports: {}
    }, B = {};
    var to = Symbol.for("react.element"), Pp = Symbol.for("react.portal"), bp = Symbol.for("react.fragment"), Mp = Symbol.for("react.strict_mode"), Lp = Symbol.for("react.profiler"), Op = Symbol.for("react.provider"), Dp = Symbol.for("react.context"), Ap = Symbol.for("react.forward_ref"), Fp = Symbol.for("react.suspense"), $p = Symbol.for("react.memo"), Up = Symbol.for("react.lazy"), va = Symbol.iterator;
    function Bp(e) {
        return e === null || typeof e != "object" ? null : (e = va && e[va] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var dc = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, fc = Object.assign, pc = {};
    function nr(e, t, n) {
        this.props = e, this.context = t, this.refs = pc, this.updater = n || dc;
    }
    nr.prototype.isReactComponent = {};
    nr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    nr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function mc() {}
    mc.prototype = nr.prototype;
    function ms(e, t, n) {
        this.props = e, this.context = t, this.refs = pc, this.updater = n || dc;
    }
    var hs = ms.prototype = new mc;
    hs.constructor = ms;
    fc(hs, nr.prototype);
    hs.isPureReactComponent = !0;
    var wa = Array.isArray, hc = Object.prototype.hasOwnProperty, gs = {
        current: null
    }, gc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function xc(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)hc.call(t, r) && !gc.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: to,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: gs.current
        };
    }
    function Wp(e, t) {
        return {
            $$typeof: to,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function xs(e) {
        return typeof e == "object" && e !== null && e.$$typeof === to;
    }
    function Vp(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Sa = /\/+/g;
    function Fl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Vp("" + e.key) : t.toString(36);
    }
    function No(e, t, n, r, o) {
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
                    case to:
                    case Pp:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + Fl(i, 0) : r, wa(o) ? (n = "", e != null && (n = e.replace(Sa, "$&/") + "/"), No(o, t, n, "", function(u) {
            return u;
        })) : o != null && (xs(o) && (o = Wp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Sa, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", wa(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + Fl(l, s);
            i += No(l, t, n, a, o);
        }
        else if (a = Bp(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + Fl(l, s++), i += No(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function ao(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return No(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Gp(e) {
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
    var be = {
        current: null
    }, Ro = {
        transition: null
    }, Hp = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: Ro,
        ReactCurrentOwner: gs
    };
    function yc() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    B.Children = {
        map: ao,
        forEach: function(e, t, n) {
            ao(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return ao(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return ao(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!xs(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    B.Component = nr;
    B.Fragment = bp;
    B.Profiler = Lp;
    B.PureComponent = ms;
    B.StrictMode = Mp;
    B.Suspense = Fp;
    B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hp;
    B.act = yc;
    B.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = fc({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = gs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)hc.call(t, a) && !gc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: to,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    B.createContext = function(e) {
        return e = {
            $$typeof: Dp,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Op,
            _context: e
        }, e.Consumer = e;
    };
    B.createElement = xc;
    B.createFactory = function(e) {
        var t = xc.bind(null, e);
        return t.type = e, t;
    };
    B.createRef = function() {
        return {
            current: null
        };
    };
    B.forwardRef = function(e) {
        return {
            $$typeof: Ap,
            render: e
        };
    };
    B.isValidElement = xs;
    B.lazy = function(e) {
        return {
            $$typeof: Up,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Gp
        };
    };
    B.memo = function(e, t) {
        return {
            $$typeof: $p,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    B.startTransition = function(e) {
        var t = Ro.transition;
        Ro.transition = {};
        try {
            e();
        } finally{
            Ro.transition = t;
        }
    };
    B.unstable_act = yc;
    B.useCallback = function(e, t) {
        return be.current.useCallback(e, t);
    };
    B.useContext = function(e) {
        return be.current.useContext(e);
    };
    B.useDebugValue = function() {};
    B.useDeferredValue = function(e) {
        return be.current.useDeferredValue(e);
    };
    B.useEffect = function(e, t) {
        return be.current.useEffect(e, t);
    };
    B.useId = function() {
        return be.current.useId();
    };
    B.useImperativeHandle = function(e, t, n) {
        return be.current.useImperativeHandle(e, t, n);
    };
    B.useInsertionEffect = function(e, t) {
        return be.current.useInsertionEffect(e, t);
    };
    B.useLayoutEffect = function(e, t) {
        return be.current.useLayoutEffect(e, t);
    };
    B.useMemo = function(e, t) {
        return be.current.useMemo(e, t);
    };
    B.useReducer = function(e, t, n) {
        return be.current.useReducer(e, t, n);
    };
    B.useRef = function(e) {
        return be.current.useRef(e);
    };
    B.useState = function(e) {
        return be.current.useState(e);
    };
    B.useSyncExternalStore = function(e, t, n) {
        return be.current.useSyncExternalStore(e, t, n);
    };
    B.useTransition = function() {
        return be.current.useTransition();
    };
    B.version = "18.3.1";
    cc.exports = B;
    var C = cc.exports;
    const ne = jp(C), vc = Rp({
        __proto__: null,
        default: ne
    }, [
        C
    ]);
    var Kp = C, Qp = Symbol.for("react.element"), qp = Symbol.for("react.fragment"), Yp = Object.prototype.hasOwnProperty, Xp = Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function wc(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Yp.call(t, r) && !Zp.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: Qp,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Xp.current
        };
    }
    yl.Fragment = qp;
    yl.jsx = wc;
    yl.jsxs = wc;
    uc.exports = yl;
    var v = uc.exports, gi = {}, Sc = {
        exports: {}
    }, He = {}, kc = {
        exports: {}
    }, _c = {};
    (function(e) {
        function t(T, L) {
            var E = T.length;
            T.push(L);
            e: for(; 0 < E;){
                var W = E - 1 >>> 1, q = T[W];
                if (0 < o(q, L)) T[W] = L, T[E] = q, E = W;
                else break e;
            }
        }
        function n(T) {
            return T.length === 0 ? null : T[0];
        }
        function r(T) {
            if (T.length === 0) return null;
            var L = T[0], E = T.pop();
            if (E !== L) {
                T[0] = E;
                e: for(var W = 0, q = T.length, oe = q >>> 1; W < oe;){
                    var Ce = 2 * (W + 1) - 1, R = T[Ce], V = Ce + 1, Qe = T[V];
                    if (0 > o(R, E)) V < q && 0 > o(Qe, R) ? (T[W] = Qe, T[V] = E, W = V) : (T[W] = R, T[Ce] = E, W = Ce);
                    else if (V < q && 0 > o(Qe, E)) T[W] = Qe, T[V] = E, W = V;
                    else break e;
                }
            }
            return L;
        }
        function o(T, L) {
            var E = T.sortIndex - L.sortIndex;
            return E !== 0 ? E : T.id - L.id;
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
        var a = [], u = [], d = 1, c = null, f = 3, g = !1, h = !1, w = !1, y = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function m(T) {
            for(var L = n(u); L !== null;){
                if (L.callback === null) r(u);
                else if (L.startTime <= T) r(u), L.sortIndex = L.expirationTime, t(a, L);
                else break;
                L = n(u);
            }
        }
        function S(T) {
            if (w = !1, m(T), !h) if (n(a) !== null) h = !0, Q(k);
            else {
                var L = n(u);
                L !== null && j(S, L.startTime - T);
            }
        }
        function k(T, L) {
            h = !1, w && (w = !1, x(_), _ = -1), g = !0;
            var E = f;
            try {
                for(m(L), c = n(a); c !== null && (!(c.expirationTime > L) || T && !J());){
                    var W = c.callback;
                    if (typeof W == "function") {
                        c.callback = null, f = c.priorityLevel;
                        var q = W(c.expirationTime <= L);
                        L = e.unstable_now(), typeof q == "function" ? c.callback = q : c === n(a) && r(a), m(L);
                    } else r(a);
                    c = n(a);
                }
                if (c !== null) var oe = !0;
                else {
                    var Ce = n(u);
                    Ce !== null && j(S, Ce.startTime - L), oe = !1;
                }
                return oe;
            } finally{
                c = null, f = E, g = !1;
            }
        }
        var z = !1, N = null, _ = -1, D = 5, O = -1;
        function J() {
            return !(e.unstable_now() - O < D);
        }
        function me() {
            if (N !== null) {
                var T = e.unstable_now();
                O = T;
                var L = !0;
                try {
                    L = N(!0, T);
                } finally{
                    L ? we() : (z = !1, N = null);
                }
            } else z = !1;
        }
        var we;
        if (typeof p == "function") we = function() {
            p(me);
        };
        else if (typeof MessageChannel < "u") {
            var X = new MessageChannel, de = X.port2;
            X.port1.onmessage = me, we = function() {
                de.postMessage(null);
            };
        } else we = function() {
            y(me, 0);
        };
        function Q(T) {
            N = T, z || (z = !0, we());
        }
        function j(T, L) {
            _ = y(function() {
                T(e.unstable_now());
            }, L);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(T) {
            T.callback = null;
        }, e.unstable_continueExecution = function() {
            h || g || (h = !0, Q(k));
        }, e.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < T ? Math.floor(1e3 / T) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(T) {
            switch(f){
                case 1:
                case 2:
                case 3:
                    var L = 3;
                    break;
                default:
                    L = f;
            }
            var E = f;
            f = L;
            try {
                return T();
            } finally{
                f = E;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(T, L) {
            switch(T){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    T = 3;
            }
            var E = f;
            f = T;
            try {
                return L();
            } finally{
                f = E;
            }
        }, e.unstable_scheduleCallback = function(T, L, E) {
            var W = e.unstable_now();
            switch(typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? W + E : W) : E = W, T){
                case 1:
                    var q = -1;
                    break;
                case 2:
                    q = 250;
                    break;
                case 5:
                    q = 1073741823;
                    break;
                case 4:
                    q = 1e4;
                    break;
                default:
                    q = 5e3;
            }
            return q = E + q, T = {
                id: d++,
                callback: L,
                priorityLevel: T,
                startTime: E,
                expirationTime: q,
                sortIndex: -1
            }, E > W ? (T.sortIndex = E, t(u, T), n(a) === null && T === n(u) && (w ? (x(_), _ = -1) : w = !0, j(S, E - W))) : (T.sortIndex = q, t(a, T), h || g || (h = !0, Q(k))), T;
        }, e.unstable_shouldYield = J, e.unstable_wrapCallback = function(T) {
            var L = f;
            return function() {
                var E = f;
                f = L;
                try {
                    return T.apply(this, arguments);
                } finally{
                    f = E;
                }
            };
        };
    })(_c);
    kc.exports = _c;
    var Jp = kc.exports;
    var em = C, Ge = Jp;
    function I(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Cc = new Set, Or = {};
    function wn(e, t) {
        Qn(e, t), Qn(e + "Capture", t);
    }
    function Qn(e, t) {
        for(Or[e] = t, e = 0; e < t.length; e++)Cc.add(t[e]);
    }
    var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = Object.prototype.hasOwnProperty, tm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ka = {}, _a = {};
    function nm(e) {
        return xi.call(_a, e) ? !0 : xi.call(ka, e) ? !1 : tm.test(e) ? _a[e] = !0 : (ka[e] = !0, !1);
    }
    function rm(e, t, n, r) {
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
    function om(e, t, n, r) {
        if (t === null || typeof t > "u" || rm(e, t, n, r)) return !0;
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
    function Me(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var _e = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        _e[e] = new Me(e, 0, !1, e, null, !1, !1);
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
        _e[t] = new Me(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        _e[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        _e[e] = new Me(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        _e[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        _e[e] = new Me(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        _e[e] = new Me(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        _e[e] = new Me(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        _e[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var ys = /[\-:]([a-z])/g;
    function vs(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(ys, vs);
        _e[t] = new Me(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(ys, vs);
        _e[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(ys, vs);
        _e[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        _e[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    _e.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        _e[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function ws(e, t, n, r) {
        var o = _e.hasOwnProperty(t) ? _e[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (om(t, n, o, r) && (n = null), r || o === null ? nm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Nt = em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, uo = Symbol.for("react.element"), Nn = Symbol.for("react.portal"), Rn = Symbol.for("react.fragment"), Ss = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), Ec = Symbol.for("react.provider"), Tc = Symbol.for("react.context"), ks = Symbol.for("react.forward_ref"), vi = Symbol.for("react.suspense"), wi = Symbol.for("react.suspense_list"), _s = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), Ic = Symbol.for("react.offscreen"), Ca = Symbol.iterator;
    function ar(e) {
        return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var se = Object.assign, $l;
    function wr(e) {
        if ($l === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            $l = t && t[1] || "";
        }
        return `
` + $l + e;
    }
    var Ul = !1;
    function Bl(e, t) {
        if (!e || Ul) return "";
        Ul = !0;
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
            Ul = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
    }
    function lm(e) {
        switch(e.tag){
            case 5:
                return wr(e.type);
            case 16:
                return wr("Lazy");
            case 13:
                return wr("Suspense");
            case 19:
                return wr("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Bl(e.type, !1), e;
            case 11:
                return e = Bl(e.type.render, !1), e;
            case 1:
                return e = Bl(e.type, !0), e;
            default:
                return "";
        }
    }
    function Si(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Rn:
                return "Fragment";
            case Nn:
                return "Portal";
            case yi:
                return "Profiler";
            case Ss:
                return "StrictMode";
            case vi:
                return "Suspense";
            case wi:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Tc:
                return (e.displayName || "Context") + ".Consumer";
            case Ec:
                return (e._context.displayName || "Context") + ".Provider";
            case ks:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case _s:
                return t = e.displayName || null, t !== null ? t : Si(e.type) || "Memo";
            case Mt:
                t = e._payload, e = e._init;
                try {
                    return Si(e(t));
                } catch  {}
        }
        return null;
    }
    function im(e) {
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
                return Si(t);
            case 8:
                return t === Ss ? "StrictMode" : "Mode";
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
    function qt(e) {
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
    function zc(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function sm(e) {
        var t = zc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function co(e) {
        e._valueTracker || (e._valueTracker = sm(e));
    }
    function Nc(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = zc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function Vo(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function ki(e, t) {
        var n = t.checked;
        return se({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Ea(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = qt(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Rc(e, t) {
        t = t.checked, t != null && ws(e, "checked", t, !1);
    }
    function _i(e, t) {
        Rc(e, t);
        var n = qt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Ci(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ci(e, t.type, qt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Ta(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Ci(e, t, n) {
        (t !== "number" || Vo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Sr = Array.isArray;
    function Un(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + qt(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Ei(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
        return se({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Ia(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(I(92));
                if (Sr(n)) {
                    if (1 < n.length) throw Error(I(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: qt(n)
        };
    }
    function jc(e, t) {
        var n = qt(t.value), r = qt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function za(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Pc(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Ti(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Pc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var fo, bc = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(fo = fo || document.createElement("div"), fo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fo.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function Dr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Tr = {
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
    }, am = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Tr).forEach(function(e) {
        am.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Tr[t] = Tr[e];
        });
    });
    function Mc(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Tr.hasOwnProperty(e) && Tr[e] ? ("" + t).trim() : t + "px";
    }
    function Lc(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Mc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var um = se({
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
    function Ii(e, t) {
        if (t) {
            if (um[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(I(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(I(62));
        }
    }
    function zi(e, t) {
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
    var Ni = null;
    function Cs(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Ri = null, Bn = null, Wn = null;
    function Na(e) {
        if (e = oo(e)) {
            if (typeof Ri != "function") throw Error(I(280));
            var t = e.stateNode;
            t && (t = _l(t), Ri(e.stateNode, e.type, t));
        }
    }
    function Oc(e) {
        Bn ? Wn ? Wn.push(e) : Wn = [
            e
        ] : Bn = e;
    }
    function Dc() {
        if (Bn) {
            var e = Bn, t = Wn;
            if (Wn = Bn = null, Na(e), t) for(e = 0; e < t.length; e++)Na(t[e]);
        }
    }
    function Ac(e, t) {
        return e(t);
    }
    function Fc() {}
    var Wl = !1;
    function $c(e, t, n) {
        if (Wl) return e(t, n);
        Wl = !0;
        try {
            return Ac(e, t, n);
        } finally{
            Wl = !1, (Bn !== null || Wn !== null) && (Fc(), Dc());
        }
    }
    function Ar(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = _l(n);
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
    var ji = !1;
    if (Et) try {
        var ur = {};
        Object.defineProperty(ur, "passive", {
            get: function() {
                ji = !0;
            }
        }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
    } catch  {
        ji = !1;
    }
    function cm(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (d) {
            this.onError(d);
        }
    }
    var Ir = !1, Go = null, Ho = !1, Pi = null, dm = {
        onError: function(e) {
            Ir = !0, Go = e;
        }
    };
    function fm(e, t, n, r, o, l, i, s, a) {
        Ir = !1, Go = null, cm.apply(dm, arguments);
    }
    function pm(e, t, n, r, o, l, i, s, a) {
        if (fm.apply(this, arguments), Ir) {
            if (Ir) {
                var u = Go;
                Ir = !1, Go = null;
            } else throw Error(I(198));
            Ho || (Ho = !0, Pi = u);
        }
    }
    function Sn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Uc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Ra(e) {
        if (Sn(e) !== e) throw Error(I(188));
    }
    function mm(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Sn(e), t === null) throw Error(I(188));
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
                    if (l === n) return Ra(o), e;
                    if (l === r) return Ra(o), t;
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
    function Bc(e) {
        return e = mm(e), e !== null ? Wc(e) : null;
    }
    function Wc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Wc(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Vc = Ge.unstable_scheduleCallback, ja = Ge.unstable_cancelCallback, hm = Ge.unstable_shouldYield, gm = Ge.unstable_requestPaint, ce = Ge.unstable_now, xm = Ge.unstable_getCurrentPriorityLevel, Es = Ge.unstable_ImmediatePriority, Gc = Ge.unstable_UserBlockingPriority, Ko = Ge.unstable_NormalPriority, ym = Ge.unstable_LowPriority, Hc = Ge.unstable_IdlePriority, vl = null, gt = null;
    function vm(e) {
        if (gt && typeof gt.onCommitFiberRoot == "function") try {
            gt.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var ut = Math.clz32 ? Math.clz32 : km, wm = Math.log, Sm = Math.LN2;
    function km(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (wm(e) / Sm | 0) | 0;
    }
    var po = 64, mo = 4194304;
    function kr(e) {
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
    function Qo(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = kr(s) : (l &= i, l !== 0 && (r = kr(l)));
        } else i = n & ~o, i !== 0 ? r = kr(i) : l !== 0 && (r = kr(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - ut(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function _m(e, t) {
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
    function Cm(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - ut(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = _m(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function bi(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Kc() {
        var e = po;
        return po <<= 1, !(po & 4194240) && (po = 64), e;
    }
    function Vl(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function no(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n;
    }
    function Em(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - ut(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function Ts(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - ut(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Y = 0;
    function Qc(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var qc, Is, Yc, Xc, Zc, Mi = !1, ho = [], $t = null, Ut = null, Bt = null, Fr = new Map, $r = new Map, Ot = [], Tm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Pa(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                $t = null;
                break;
            case "dragenter":
            case "dragleave":
                Ut = null;
                break;
            case "mouseover":
            case "mouseout":
                Bt = null;
                break;
            case "pointerover":
            case "pointerout":
                Fr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                $r.delete(t.pointerId);
        }
    }
    function cr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = oo(t), t !== null && Is(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Im(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return $t = cr($t, e, t, n, r, o), !0;
            case "dragenter":
                return Ut = cr(Ut, e, t, n, r, o), !0;
            case "mouseover":
                return Bt = cr(Bt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Fr.set(l, cr(Fr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, $r.set(l, cr($r.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function Jc(e) {
        var t = an(e.target);
        if (t !== null) {
            var n = Sn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Uc(n), t !== null) {
                        e.blockedOn = t, Zc(e.priority, function() {
                            Yc(n);
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
    function jo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Ni = r, n.target.dispatchEvent(r), Ni = null;
            } else return t = oo(n), t !== null && Is(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function ba(e, t, n) {
        jo(e) && n.delete(t);
    }
    function zm() {
        Mi = !1, $t !== null && jo($t) && ($t = null), Ut !== null && jo(Ut) && (Ut = null), Bt !== null && jo(Bt) && (Bt = null), Fr.forEach(ba), $r.forEach(ba);
    }
    function dr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Mi || (Mi = !0, Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, zm)));
    }
    function Ur(e) {
        function t(o) {
            return dr(o, e);
        }
        if (0 < ho.length) {
            dr(ho[0], e);
            for(var n = 1; n < ho.length; n++){
                var r = ho[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for($t !== null && dr($t, e), Ut !== null && dr(Ut, e), Bt !== null && dr(Bt, e), Fr.forEach(t), $r.forEach(t), n = 0; n < Ot.length; n++)r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Ot.length && (n = Ot[0], n.blockedOn === null);)Jc(n), n.blockedOn === null && Ot.shift();
    }
    var Vn = Nt.ReactCurrentBatchConfig, qo = !0;
    function Nm(e, t, n, r) {
        var o = Y, l = Vn.transition;
        Vn.transition = null;
        try {
            Y = 1, zs(e, t, n, r);
        } finally{
            Y = o, Vn.transition = l;
        }
    }
    function Rm(e, t, n, r) {
        var o = Y, l = Vn.transition;
        Vn.transition = null;
        try {
            Y = 4, zs(e, t, n, r);
        } finally{
            Y = o, Vn.transition = l;
        }
    }
    function zs(e, t, n, r) {
        if (qo) {
            var o = Li(e, t, n, r);
            if (o === null) ei(e, t, r, Yo, n), Pa(e, r);
            else if (Im(o, e, t, n, r)) r.stopPropagation();
            else if (Pa(e, r), t & 4 && -1 < Tm.indexOf(e)) {
                for(; o !== null;){
                    var l = oo(o);
                    if (l !== null && qc(l), l = Li(e, t, n, r), l === null && ei(e, t, r, Yo, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else ei(e, t, r, null, n);
        }
    }
    var Yo = null;
    function Li(e, t, n, r) {
        if (Yo = null, e = Cs(r), e = an(e), e !== null) if (t = Sn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Uc(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return Yo = e, null;
    }
    function ed(e) {
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
                switch(xm()){
                    case Es:
                        return 1;
                    case Gc:
                        return 4;
                    case Ko:
                    case ym:
                        return 16;
                    case Hc:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var At = null, Ns = null, Po = null;
    function td() {
        if (Po) return Po;
        var e, t = Ns, n = t.length, r, o = "value" in At ? At.value : At.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return Po = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function bo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function go() {
        return !0;
    }
    function Ma() {
        return !1;
    }
    function Ke(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? go : Ma, this.isPropagationStopped = Ma, this;
        }
        return se(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = go);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = go);
            },
            persist: function() {},
            isPersistent: go
        }), t;
    }
    var rr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Rs = Ke(rr), ro = se({}, rr, {
        view: 0,
        detail: 0
    }), jm = Ke(ro), Gl, Hl, fr, wl = se({}, ro, {
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
        getModifierState: js,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== fr && (fr && e.type === "mousemove" ? (Gl = e.screenX - fr.screenX, Hl = e.screenY - fr.screenY) : Hl = Gl = 0, fr = e), Gl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Hl;
        }
    }), La = Ke(wl), Pm = se({}, wl, {
        dataTransfer: 0
    }), bm = Ke(Pm), Mm = se({}, ro, {
        relatedTarget: 0
    }), Kl = Ke(Mm), Lm = se({}, rr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Om = Ke(Lm), Dm = se({}, rr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Am = Ke(Dm), Fm = se({}, rr, {
        data: 0
    }), Oa = Ke(Fm), $m = {
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
    }, Um = {
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
    }, Bm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Wm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Bm[e]) ? !!t[e] : !1;
    }
    function js() {
        return Wm;
    }
    var Vm = se({}, ro, {
        key: function(e) {
            if (e.key) {
                var t = $m[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Um[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: js,
        charCode: function(e) {
            return e.type === "keypress" ? bo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Gm = Ke(Vm), Hm = se({}, wl, {
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
    }), Da = Ke(Hm), Km = se({}, ro, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: js
    }), Qm = Ke(Km), qm = se({}, rr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ym = Ke(qm), Xm = se({}, wl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Zm = Ke(Xm), Jm = [
        9,
        13,
        27,
        32
    ], Ps = Et && "CompositionEvent" in window, zr = null;
    Et && "documentMode" in document && (zr = document.documentMode);
    var eh = Et && "TextEvent" in window && !zr, nd = Et && (!Ps || zr && 8 < zr && 11 >= zr), Aa = " ", Fa = !1;
    function rd(e, t) {
        switch(e){
            case "keyup":
                return Jm.indexOf(t.keyCode) !== -1;
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
    function od(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var jn = !1;
    function th(e, t) {
        switch(e){
            case "compositionend":
                return od(t);
            case "keypress":
                return t.which !== 32 ? null : (Fa = !0, Aa);
            case "textInput":
                return e = t.data, e === Aa && Fa ? null : e;
            default:
                return null;
        }
    }
    function nh(e, t) {
        if (jn) return e === "compositionend" || !Ps && rd(e, t) ? (e = td(), Po = Ns = At = null, jn = !1, e) : null;
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
                return nd && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var rh = {
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
    function $a(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!rh[e.type] : t === "textarea";
    }
    function ld(e, t, n, r) {
        Oc(r), t = Xo(t, "onChange"), 0 < t.length && (n = new Rs("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Nr = null, Br = null;
    function oh(e) {
        gd(e, 0);
    }
    function Sl(e) {
        var t = Mn(e);
        if (Nc(t)) return e;
    }
    function lh(e, t) {
        if (e === "change") return t;
    }
    var id = !1;
    if (Et) {
        var Ql;
        if (Et) {
            var ql = "oninput" in document;
            if (!ql) {
                var Ua = document.createElement("div");
                Ua.setAttribute("oninput", "return;"), ql = typeof Ua.oninput == "function";
            }
            Ql = ql;
        } else Ql = !1;
        id = Ql && (!document.documentMode || 9 < document.documentMode);
    }
    function Ba() {
        Nr && (Nr.detachEvent("onpropertychange", sd), Br = Nr = null);
    }
    function sd(e) {
        if (e.propertyName === "value" && Sl(Br)) {
            var t = [];
            ld(t, Br, e, Cs(e)), $c(oh, t);
        }
    }
    function ih(e, t, n) {
        e === "focusin" ? (Ba(), Nr = t, Br = n, Nr.attachEvent("onpropertychange", sd)) : e === "focusout" && Ba();
    }
    function sh(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(Br);
    }
    function ah(e, t) {
        if (e === "click") return Sl(t);
    }
    function uh(e, t) {
        if (e === "input" || e === "change") return Sl(t);
    }
    function ch(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var dt = typeof Object.is == "function" ? Object.is : ch;
    function Wr(e, t) {
        if (dt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!xi.call(t, o) || !dt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Wa(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Va(e, t) {
        var n = Wa(e);
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
            n = Wa(n);
        }
    }
    function ad(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ad(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function ud() {
        for(var e = window, t = Vo(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = Vo(e.document);
        }
        return t;
    }
    function bs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dh(e) {
        var t = ud(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && ad(n.ownerDocument.documentElement, n)) {
            if (r !== null && bs(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Va(n, l);
                    var i = Va(n, r);
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
    var fh = Et && "documentMode" in document && 11 >= document.documentMode, Pn = null, Oi = null, Rr = null, Di = !1;
    function Ga(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Di || Pn == null || Pn !== Vo(r) || (r = Pn, "selectionStart" in r && bs(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Rr && Wr(Rr, r) || (Rr = r, r = Xo(Oi, "onSelect"), 0 < r.length && (t = new Rs("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Pn)));
    }
    function xo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var bn = {
        animationend: xo("Animation", "AnimationEnd"),
        animationiteration: xo("Animation", "AnimationIteration"),
        animationstart: xo("Animation", "AnimationStart"),
        transitionend: xo("Transition", "TransitionEnd")
    }, Yl = {}, cd = {};
    Et && (cd = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
    function kl(e) {
        if (Yl[e]) return Yl[e];
        if (!bn[e]) return e;
        var t = bn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in cd) return Yl[e] = t[n];
        return e;
    }
    var dd = kl("animationend"), fd = kl("animationiteration"), pd = kl("animationstart"), md = kl("transitionend"), hd = new Map, Ha = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Xt(e, t) {
        hd.set(e, t), wn(t, [
            e
        ]);
    }
    for(var Xl = 0; Xl < Ha.length; Xl++){
        var Zl = Ha[Xl], ph = Zl.toLowerCase(), mh = Zl[0].toUpperCase() + Zl.slice(1);
        Xt(ph, "on" + mh);
    }
    Xt(dd, "onAnimationEnd");
    Xt(fd, "onAnimationIteration");
    Xt(pd, "onAnimationStart");
    Xt("dblclick", "onDoubleClick");
    Xt("focusin", "onFocus");
    Xt("focusout", "onBlur");
    Xt(md, "onTransitionEnd");
    Qn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    Qn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    Qn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    Qn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    wn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    wn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    wn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    wn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    wn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    wn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), hh = new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));
    function Ka(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, pm(r, t, void 0, e), e.currentTarget = null;
    }
    function gd(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Ka(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Ka(o, s, u), l = a;
                }
            }
        }
        if (Ho) throw e = Pi, Ho = !1, Pi = null, e;
    }
    function ee(e, t) {
        var n = t[Bi];
        n === void 0 && (n = t[Bi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (xd(t, e, 2, !1), n.add(r));
    }
    function Jl(e, t, n) {
        var r = 0;
        t && (r |= 4), xd(n, e, r, t);
    }
    var yo = "_reactListening" + Math.random().toString(36).slice(2);
    function Vr(e) {
        if (!e[yo]) {
            e[yo] = !0, Cc.forEach(function(n) {
                n !== "selectionchange" && (hh.has(n) || Jl(n, !1, e), Jl(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[yo] || (t[yo] = !0, Jl("selectionchange", !1, t));
        }
    }
    function xd(e, t, n, r) {
        switch(ed(t)){
            case 1:
                var o = Nm;
                break;
            case 4:
                o = Rm;
                break;
            default:
                o = zs;
        }
        n = o.bind(null, t, n, e), o = void 0, !ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function ei(e, t, n, r, o) {
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
                    if (i = an(s), i === null) return;
                    if (a = i.tag, a === 5 || a === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        $c(function() {
            var u = l, d = Cs(n), c = [];
            e: {
                var f = hd.get(e);
                if (f !== void 0) {
                    var g = Rs, h = e;
                    switch(e){
                        case "keypress":
                            if (bo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            g = Gm;
                            break;
                        case "focusin":
                            h = "focus", g = Kl;
                            break;
                        case "focusout":
                            h = "blur", g = Kl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            g = Kl;
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
                            g = La;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            g = bm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            g = Qm;
                            break;
                        case dd:
                        case fd:
                        case pd:
                            g = Om;
                            break;
                        case md:
                            g = Ym;
                            break;
                        case "scroll":
                            g = jm;
                            break;
                        case "wheel":
                            g = Zm;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            g = Am;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            g = Da;
                    }
                    var w = (t & 4) !== 0, y = !w && e === "scroll", x = w ? f !== null ? f + "Capture" : null : f;
                    w = [];
                    for(var p = u, m; p !== null;){
                        m = p;
                        var S = m.stateNode;
                        if (m.tag === 5 && S !== null && (m = S, x !== null && (S = Ar(p, x), S != null && w.push(Gr(p, S, m)))), y) break;
                        p = p.return;
                    }
                    0 < w.length && (f = new g(f, h, null, n, d), c.push({
                        event: f,
                        listeners: w
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== Ni && (h = n.relatedTarget || n.fromElement) && (an(h) || h[Tt])) break e;
                    if ((g || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (h = n.relatedTarget || n.toElement, g = u, h = h ? an(h) : null, h !== null && (y = Sn(h), h !== y || h.tag !== 5 && h.tag !== 6) && (h = null)) : (g = null, h = u), g !== h)) {
                        if (w = La, S = "onMouseLeave", x = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = Da, S = "onPointerLeave", x = "onPointerEnter", p = "pointer"), y = g == null ? f : Mn(g), m = h == null ? f : Mn(h), f = new w(S, p + "leave", g, n, d), f.target = y, f.relatedTarget = m, S = null, an(d) === u && (w = new w(x, p + "enter", h, n, d), w.target = m, w.relatedTarget = y, S = w), y = S, g && h) t: {
                            for(w = g, x = h, p = 0, m = w; m; m = In(m))p++;
                            for(m = 0, S = x; S; S = In(S))m++;
                            for(; 0 < p - m;)w = In(w), p--;
                            for(; 0 < m - p;)x = In(x), m--;
                            for(; p--;){
                                if (w === x || x !== null && w === x.alternate) break t;
                                w = In(w), x = In(x);
                            }
                            w = null;
                        }
                        else w = null;
                        g !== null && Qa(c, f, g, w, !1), h !== null && y !== null && Qa(c, y, h, w, !0);
                    }
                }
                e: {
                    if (f = u ? Mn(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var k = lh;
                    else if ($a(f)) if (id) k = uh;
                    else {
                        k = sh;
                        var z = ih;
                    }
                    else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = ah);
                    if (k && (k = k(e, u))) {
                        ld(c, k, n, d);
                        break e;
                    }
                    z && z(e, f, u), e === "focusout" && (z = f._wrapperState) && z.controlled && f.type === "number" && Ci(f, "number", f.value);
                }
                switch(z = u ? Mn(u) : window, e){
                    case "focusin":
                        ($a(z) || z.contentEditable === "true") && (Pn = z, Oi = u, Rr = null);
                        break;
                    case "focusout":
                        Rr = Oi = Pn = null;
                        break;
                    case "mousedown":
                        Di = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Di = !1, Ga(c, n, d);
                        break;
                    case "selectionchange":
                        if (fh) break;
                    case "keydown":
                    case "keyup":
                        Ga(c, n, d);
                }
                var N;
                if (Ps) e: {
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
                else jn ? rd(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
                _ && (nd && n.locale !== "ko" && (jn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && jn && (N = td()) : (At = d, Ns = "value" in At ? At.value : At.textContent, jn = !0)), z = Xo(u, _), 0 < z.length && (_ = new Oa(_, e, null, n, d), c.push({
                    event: _,
                    listeners: z
                }), N ? _.data = N : (N = od(n), N !== null && (_.data = N)))), (N = eh ? th(e, n) : nh(e, n)) && (u = Xo(u, "onBeforeInput"), 0 < u.length && (d = new Oa("onBeforeInput", "beforeinput", null, n, d), c.push({
                    event: d,
                    listeners: u
                }), d.data = N));
            }
            gd(c, t);
        });
    }
    function Gr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function Xo(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Ar(e, n), l != null && r.unshift(Gr(e, l, o)), l = Ar(e, t), l != null && r.push(Gr(e, l, o))), e = e.return;
        }
        return r;
    }
    function In(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Qa(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = Ar(n, l), a != null && i.unshift(Gr(n, a, s))) : o || (a = Ar(n, l), a != null && i.push(Gr(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var gh = /\r\n?/g, xh = /\u0000|\uFFFD/g;
    function qa(e) {
        return (typeof e == "string" ? e : "" + e).replace(gh, `
`).replace(xh, "");
    }
    function vo(e, t, n) {
        if (t = qa(t), qa(e) !== t && n) throw Error(I(425));
    }
    function Zo() {}
    var Ai = null, Fi = null;
    function $i(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Ui = typeof setTimeout == "function" ? setTimeout : void 0, yh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ya = typeof Promise == "function" ? Promise : void 0, vh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ya < "u" ? function(e) {
        return Ya.resolve(null).then(e).catch(wh);
    } : Ui;
    function wh(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function ti(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Ur(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        Ur(t);
    }
    function Wt(e) {
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
    function Xa(e) {
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
    var or = Math.random().toString(36).slice(2), ht = "__reactFiber$" + or, Hr = "__reactProps$" + or, Tt = "__reactContainer$" + or, Bi = "__reactEvents$" + or, Sh = "__reactListeners$" + or, kh = "__reactHandles$" + or;
    function an(e) {
        var t = e[ht];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Tt] || n[ht]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = Xa(e); e !== null;){
                    if (n = e[ht]) return n;
                    e = Xa(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function oo(e) {
        return e = e[ht] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Mn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(I(33));
    }
    function _l(e) {
        return e[Hr] || null;
    }
    var Wi = [], Ln = -1;
    function Zt(e) {
        return {
            current: e
        };
    }
    function te(e) {
        0 > Ln || (e.current = Wi[Ln], Wi[Ln] = null, Ln--);
    }
    function Z(e, t) {
        Ln++, Wi[Ln] = e.current, e.current = t;
    }
    var Yt = {}, ze = Zt(Yt), Fe = Zt(!1), hn = Yt;
    function qn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Yt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function $e(e) {
        return e = e.childContextTypes, e != null;
    }
    function Jo() {
        te(Fe), te(ze);
    }
    function Za(e, t, n) {
        if (ze.current !== Yt) throw Error(I(168));
        Z(ze, t), Z(Fe, n);
    }
    function yd(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(I(108, im(e) || "Unknown", o));
        return se({}, n, r);
    }
    function el(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt, hn = ze.current, Z(ze, e), Z(Fe, Fe.current), !0;
    }
    function Ja(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(I(169));
        n ? (e = yd(e, t, hn), r.__reactInternalMemoizedMergedChildContext = e, te(Fe), te(ze), Z(ze, e)) : te(Fe), Z(Fe, n);
    }
    var St = null, Cl = !1, ni = !1;
    function vd(e) {
        St === null ? St = [
            e
        ] : St.push(e);
    }
    function _h(e) {
        Cl = !0, vd(e);
    }
    function Jt() {
        if (!ni && St !== null) {
            ni = !0;
            var e = 0, t = Y;
            try {
                var n = St;
                for(Y = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                St = null, Cl = !1;
            } catch (o) {
                throw St !== null && (St = St.slice(e + 1)), Vc(Es, Jt), o;
            } finally{
                Y = t, ni = !1;
            }
        }
        return null;
    }
    var On = [], Dn = 0, tl = null, nl = 0, qe = [], Ye = 0, gn = null, kt = 1, _t = "";
    function on(e, t) {
        On[Dn++] = nl, On[Dn++] = tl, tl = e, nl = t;
    }
    function wd(e, t, n) {
        qe[Ye++] = kt, qe[Ye++] = _t, qe[Ye++] = gn, gn = e;
        var r = kt;
        e = _t;
        var o = 32 - ut(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - ut(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, kt = 1 << 32 - ut(t) + o | n << o | r, _t = l + e;
        } else kt = 1 << l | n << o | r, _t = e;
    }
    function Ms(e) {
        e.return !== null && (on(e, 1), wd(e, 1, 0));
    }
    function Ls(e) {
        for(; e === tl;)tl = On[--Dn], On[Dn] = null, nl = On[--Dn], On[Dn] = null;
        for(; e === gn;)gn = qe[--Ye], qe[Ye] = null, _t = qe[--Ye], qe[Ye] = null, kt = qe[--Ye], qe[Ye] = null;
    }
    var Ve = null, We = null, re = !1, st = null;
    function Sd(e, t) {
        var n = Ze(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function eu(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, We = Wt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, We = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = gn !== null ? {
                    id: kt,
                    overflow: _t
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Ze(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, We = null, !0) : !1;
            default:
                return !1;
        }
    }
    function Vi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Gi(e) {
        if (re) {
            var t = We;
            if (t) {
                var n = t;
                if (!eu(e, t)) {
                    if (Vi(e)) throw Error(I(418));
                    t = Wt(n.nextSibling);
                    var r = Ve;
                    t && eu(e, t) ? Sd(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Ve = e);
                }
            } else {
                if (Vi(e)) throw Error(I(418));
                e.flags = e.flags & -4097 | 2, re = !1, Ve = e;
            }
        }
    }
    function tu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ve = e;
    }
    function wo(e) {
        if (e !== Ve) return !1;
        if (!re) return tu(e), re = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps)), t && (t = We)) {
            if (Vi(e)) throw kd(), Error(I(418));
            for(; t;)Sd(e, t), t = Wt(t.nextSibling);
        }
        if (tu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                We = Wt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                We = null;
            }
        } else We = Ve ? Wt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function kd() {
        for(var e = We; e;)e = Wt(e.nextSibling);
    }
    function Yn() {
        We = Ve = null, re = !1;
    }
    function Os(e) {
        st === null ? st = [
            e
        ] : st.push(e);
    }
    var Ch = Nt.ReactCurrentBatchConfig;
    function pr(e, t, n) {
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
    function So(e, t) {
        throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function nu(e) {
        var t = e._init;
        return t(e._payload);
    }
    function _d(e) {
        function t(x, p) {
            if (e) {
                var m = x.deletions;
                m === null ? (x.deletions = [
                    p
                ], x.flags |= 16) : m.push(p);
            }
        }
        function n(x, p) {
            if (!e) return null;
            for(; p !== null;)t(x, p), p = p.sibling;
            return null;
        }
        function r(x, p) {
            for(x = new Map; p !== null;)p.key !== null ? x.set(p.key, p) : x.set(p.index, p), p = p.sibling;
            return x;
        }
        function o(x, p) {
            return x = Kt(x, p), x.index = 0, x.sibling = null, x;
        }
        function l(x, p, m) {
            return x.index = m, e ? (m = x.alternate, m !== null ? (m = m.index, m < p ? (x.flags |= 2, p) : m) : (x.flags |= 2, p)) : (x.flags |= 1048576, p);
        }
        function i(x) {
            return e && x.alternate === null && (x.flags |= 2), x;
        }
        function s(x, p, m, S) {
            return p === null || p.tag !== 6 ? (p = ui(m, x.mode, S), p.return = x, p) : (p = o(p, m), p.return = x, p);
        }
        function a(x, p, m, S) {
            var k = m.type;
            return k === Rn ? d(x, p, m.props.children, S, m.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Mt && nu(k) === p.type) ? (S = o(p, m.props), S.ref = pr(x, p, m), S.return = x, S) : (S = $o(m.type, m.key, m.props, null, x.mode, S), S.ref = pr(x, p, m), S.return = x, S);
        }
        function u(x, p, m, S) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = ci(m, x.mode, S), p.return = x, p) : (p = o(p, m.children || []), p.return = x, p);
        }
        function d(x, p, m, S, k) {
            return p === null || p.tag !== 7 ? (p = fn(m, x.mode, S, k), p.return = x, p) : (p = o(p, m), p.return = x, p);
        }
        function c(x, p, m) {
            if (typeof p == "string" && p !== "" || typeof p == "number") return p = ui("" + p, x.mode, m), p.return = x, p;
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case uo:
                        return m = $o(p.type, p.key, p.props, null, x.mode, m), m.ref = pr(x, null, p), m.return = x, m;
                    case Nn:
                        return p = ci(p, x.mode, m), p.return = x, p;
                    case Mt:
                        var S = p._init;
                        return c(x, S(p._payload), m);
                }
                if (Sr(p) || ar(p)) return p = fn(p, x.mode, m, null), p.return = x, p;
                So(x, p);
            }
            return null;
        }
        function f(x, p, m, S) {
            var k = p !== null ? p.key : null;
            if (typeof m == "string" && m !== "" || typeof m == "number") return k !== null ? null : s(x, p, "" + m, S);
            if (typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case uo:
                        return m.key === k ? a(x, p, m, S) : null;
                    case Nn:
                        return m.key === k ? u(x, p, m, S) : null;
                    case Mt:
                        return k = m._init, f(x, p, k(m._payload), S);
                }
                if (Sr(m) || ar(m)) return k !== null ? null : d(x, p, m, S, null);
                So(x, m);
            }
            return null;
        }
        function g(x, p, m, S, k) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return x = x.get(m) || null, s(p, x, "" + S, k);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case uo:
                        return x = x.get(S.key === null ? m : S.key) || null, a(p, x, S, k);
                    case Nn:
                        return x = x.get(S.key === null ? m : S.key) || null, u(p, x, S, k);
                    case Mt:
                        var z = S._init;
                        return g(x, p, m, z(S._payload), k);
                }
                if (Sr(S) || ar(S)) return x = x.get(m) || null, d(p, x, S, k, null);
                So(p, S);
            }
            return null;
        }
        function h(x, p, m, S) {
            for(var k = null, z = null, N = p, _ = p = 0, D = null; N !== null && _ < m.length; _++){
                N.index > _ ? (D = N, N = null) : D = N.sibling;
                var O = f(x, N, m[_], S);
                if (O === null) {
                    N === null && (N = D);
                    break;
                }
                e && N && O.alternate === null && t(x, N), p = l(O, p, _), z === null ? k = O : z.sibling = O, z = O, N = D;
            }
            if (_ === m.length) return n(x, N), re && on(x, _), k;
            if (N === null) {
                for(; _ < m.length; _++)N = c(x, m[_], S), N !== null && (p = l(N, p, _), z === null ? k = N : z.sibling = N, z = N);
                return re && on(x, _), k;
            }
            for(N = r(x, N); _ < m.length; _++)D = g(N, x, _, m[_], S), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? _ : D.key), p = l(D, p, _), z === null ? k = D : z.sibling = D, z = D);
            return e && N.forEach(function(J) {
                return t(x, J);
            }), re && on(x, _), k;
        }
        function w(x, p, m, S) {
            var k = ar(m);
            if (typeof k != "function") throw Error(I(150));
            if (m = k.call(m), m == null) throw Error(I(151));
            for(var z = k = null, N = p, _ = p = 0, D = null, O = m.next(); N !== null && !O.done; _++, O = m.next()){
                N.index > _ ? (D = N, N = null) : D = N.sibling;
                var J = f(x, N, O.value, S);
                if (J === null) {
                    N === null && (N = D);
                    break;
                }
                e && N && J.alternate === null && t(x, N), p = l(J, p, _), z === null ? k = J : z.sibling = J, z = J, N = D;
            }
            if (O.done) return n(x, N), re && on(x, _), k;
            if (N === null) {
                for(; !O.done; _++, O = m.next())O = c(x, O.value, S), O !== null && (p = l(O, p, _), z === null ? k = O : z.sibling = O, z = O);
                return re && on(x, _), k;
            }
            for(N = r(x, N); !O.done; _++, O = m.next())O = g(N, x, _, O.value, S), O !== null && (e && O.alternate !== null && N.delete(O.key === null ? _ : O.key), p = l(O, p, _), z === null ? k = O : z.sibling = O, z = O);
            return e && N.forEach(function(me) {
                return t(x, me);
            }), re && on(x, _), k;
        }
        function y(x, p, m, S) {
            if (typeof m == "object" && m !== null && m.type === Rn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case uo:
                        e: {
                            for(var k = m.key, z = p; z !== null;){
                                if (z.key === k) {
                                    if (k = m.type, k === Rn) {
                                        if (z.tag === 7) {
                                            n(x, z.sibling), p = o(z, m.props.children), p.return = x, x = p;
                                            break e;
                                        }
                                    } else if (z.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Mt && nu(k) === z.type) {
                                        n(x, z.sibling), p = o(z, m.props), p.ref = pr(x, z, m), p.return = x, x = p;
                                        break e;
                                    }
                                    n(x, z);
                                    break;
                                } else t(x, z);
                                z = z.sibling;
                            }
                            m.type === Rn ? (p = fn(m.props.children, x.mode, S, m.key), p.return = x, x = p) : (S = $o(m.type, m.key, m.props, null, x.mode, S), S.ref = pr(x, p, m), S.return = x, x = S);
                        }
                        return i(x);
                    case Nn:
                        e: {
                            for(z = m.key; p !== null;){
                                if (p.key === z) if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                    n(x, p.sibling), p = o(p, m.children || []), p.return = x, x = p;
                                    break e;
                                } else {
                                    n(x, p);
                                    break;
                                }
                                else t(x, p);
                                p = p.sibling;
                            }
                            p = ci(m, x.mode, S), p.return = x, x = p;
                        }
                        return i(x);
                    case Mt:
                        return z = m._init, y(x, p, z(m._payload), S);
                }
                if (Sr(m)) return h(x, p, m, S);
                if (ar(m)) return w(x, p, m, S);
                So(x, m);
            }
            return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(x, p.sibling), p = o(p, m), p.return = x, x = p) : (n(x, p), p = ui(m, x.mode, S), p.return = x, x = p), i(x)) : n(x, p);
        }
        return y;
    }
    var Xn = _d(!0), Cd = _d(!1), rl = Zt(null), ol = null, An = null, Ds = null;
    function As() {
        Ds = An = ol = null;
    }
    function Fs(e) {
        var t = rl.current;
        te(rl), e._currentValue = t;
    }
    function Hi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function Gn(e, t) {
        ol = e, Ds = An = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (De = !0), e.firstContext = null);
    }
    function tt(e) {
        var t = e._currentValue;
        if (Ds !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, An === null) {
            if (ol === null) throw Error(I(308));
            An = e, ol.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else An = An.next = e;
        return t;
    }
    var un = null;
    function $s(e) {
        un === null ? un = [
            e
        ] : un.push(e);
    }
    function Ed(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, $s(t)) : (n.next = o.next, o.next = n), t.interleaved = n, It(e, r);
    }
    function It(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Lt = !1;
    function Us(e) {
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
    function Td(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Ct(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function Vt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, K & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, It(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, $s(r)) : (t.next = o.next, o.next = t), r.interleaved = t, It(e, n);
    }
    function Mo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
        }
    }
    function ru(e, t) {
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
    function ll(e, t, n, r) {
        var o = e.updateQueue;
        Lt = !1;
        var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
        if (s !== null) {
            o.shared.pending = null;
            var a = s, u = a.next;
            a.next = null, i === null ? l = u : i.next = u, i = a;
            var d = e.alternate;
            d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== i && (s === null ? d.firstBaseUpdate = u : s.next = u, d.lastBaseUpdate = a));
        }
        if (l !== null) {
            var c = o.baseState;
            i = 0, d = u = a = null, s = l;
            do {
                var f = s.lane, g = s.eventTime;
                if ((r & f) === f) {
                    d !== null && (d = d.next = {
                        eventTime: g,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var h = e, w = s;
                        switch(f = t, g = n, w.tag){
                            case 1:
                                if (h = w.payload, typeof h == "function") {
                                    c = h.call(g, c, f);
                                    break e;
                                }
                                c = h;
                                break e;
                            case 3:
                                h.flags = h.flags & -65537 | 128;
                            case 0:
                                if (h = w.payload, f = typeof h == "function" ? h.call(g, c, f) : h, f == null) break e;
                                c = se({}, c, f);
                                break e;
                            case 2:
                                Lt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [
                        s
                    ] : f.push(s));
                } else g = {
                    eventTime: g,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, d === null ? (u = d = g, a = c) : d = d.next = g, i |= f;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    f = s, s = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null;
                }
            }while (!0);
            if (d === null && (a = c), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            yn |= i, e.lanes = i, e.memoizedState = c;
        }
    }
    function ou(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(I(191, o));
                o.call(r);
            }
        }
    }
    var lo = {}, xt = Zt(lo), Kr = Zt(lo), Qr = Zt(lo);
    function cn(e) {
        if (e === lo) throw Error(I(174));
        return e;
    }
    function Bs(e, t) {
        switch(Z(Qr, t), Z(Kr, e), Z(xt, lo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ti(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ti(t, e);
        }
        te(xt), Z(xt, t);
    }
    function Zn() {
        te(xt), te(Kr), te(Qr);
    }
    function Id(e) {
        cn(Qr.current);
        var t = cn(xt.current), n = Ti(t, e.type);
        t !== n && (Z(Kr, e), Z(xt, n));
    }
    function Ws(e) {
        Kr.current === e && (te(xt), te(Kr));
    }
    var le = Zt(0);
    function il(e) {
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
    var ri = [];
    function Vs() {
        for(var e = 0; e < ri.length; e++)ri[e]._workInProgressVersionPrimary = null;
        ri.length = 0;
    }
    var Lo = Nt.ReactCurrentDispatcher, oi = Nt.ReactCurrentBatchConfig, xn = 0, ie = null, ge = null, ye = null, sl = !1, jr = !1, qr = 0, Eh = 0;
    function Ee() {
        throw Error(I(321));
    }
    function Gs(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!dt(e[n], t[n])) return !1;
        return !0;
    }
    function Hs(e, t, n, r, o, l) {
        if (xn = l, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Lo.current = e === null || e.memoizedState === null ? Nh : Rh, e = n(r, o), jr) {
            l = 0;
            do {
                if (jr = !1, qr = 0, 25 <= l) throw Error(I(301));
                l += 1, ye = ge = null, t.updateQueue = null, Lo.current = jh, e = n(r, o);
            }while (jr);
        }
        if (Lo.current = al, t = ge !== null && ge.next !== null, xn = 0, ye = ge = ie = null, sl = !1, t) throw Error(I(300));
        return e;
    }
    function Ks() {
        var e = qr !== 0;
        return qr = 0, e;
    }
    function pt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ye === null ? ie.memoizedState = ye = e : ye = ye.next = e, ye;
    }
    function nt() {
        if (ge === null) {
            var e = ie.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ge.next;
        var t = ye === null ? ie.memoizedState : ye.next;
        if (t !== null) ye = t, ge = e;
        else {
            if (e === null) throw Error(I(310));
            ge = e, e = {
                memoizedState: ge.memoizedState,
                baseState: ge.baseState,
                baseQueue: ge.baseQueue,
                queue: ge.queue,
                next: null
            }, ye === null ? ie.memoizedState = ye = e : ye = ye.next = e;
        }
        return ye;
    }
    function Yr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function li(e) {
        var t = nt(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = ge, o = r.baseQueue, l = n.pending;
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
                var d = u.lane;
                if ((xn & d) === d) a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                else {
                    var c = {
                        lane: d,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    };
                    a === null ? (s = a = c, i = r) : a = a.next = c, ie.lanes |= d, yn |= d;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, dt(r, t.memoizedState) || (De = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ie.lanes |= l, yn |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function ii(e) {
        var t = nt(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            dt(l, t.memoizedState) || (De = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function zd() {}
    function Nd(e, t) {
        var n = ie, r = nt(), o = t(), l = !dt(r.memoizedState, o);
        if (l && (r.memoizedState = o, De = !0), r = r.queue, Qs(Pd.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || ye !== null && ye.memoizedState.tag & 1) {
            if (n.flags |= 2048, Xr(9, jd.bind(null, n, r, o, t), void 0, null), ve === null) throw Error(I(349));
            xn & 30 || Rd(n, t, o);
        }
        return o;
    }
    function Rd(e, t, n) {
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
    function jd(e, t, n, r) {
        t.value = n, t.getSnapshot = r, bd(t) && Md(e);
    }
    function Pd(e, t, n) {
        return n(function() {
            bd(t) && Md(e);
        });
    }
    function bd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !dt(e, n);
        } catch  {
            return !0;
        }
    }
    function Md(e) {
        var t = It(e, 1);
        t !== null && ct(t, e, 1, -1);
    }
    function lu(e) {
        var t = pt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Yr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = zh.bind(null, ie, e), [
            t.memoizedState,
            e
        ];
    }
    function Xr(e, t, n, r) {
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
    function Ld() {
        return nt().memoizedState;
    }
    function Oo(e, t, n, r) {
        var o = pt();
        ie.flags |= e, o.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function El(e, t, n, r) {
        var o = nt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ge !== null) {
            var i = ge.memoizedState;
            if (l = i.destroy, r !== null && Gs(r, i.deps)) {
                o.memoizedState = Xr(t, n, l, r);
                return;
            }
        }
        ie.flags |= e, o.memoizedState = Xr(1 | t, n, l, r);
    }
    function iu(e, t) {
        return Oo(8390656, 8, e, t);
    }
    function Qs(e, t) {
        return El(2048, 8, e, t);
    }
    function Od(e, t) {
        return El(4, 2, e, t);
    }
    function Dd(e, t) {
        return El(4, 4, e, t);
    }
    function Ad(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Fd(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, El(4, 4, Ad.bind(null, t, e), n);
    }
    function qs() {}
    function $d(e, t) {
        var n = nt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Gs(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Ud(e, t) {
        var n = nt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Gs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Bd(e, t, n) {
        return xn & 21 ? (dt(n, t) || (n = Kc(), ie.lanes |= n, yn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = n);
    }
    function Th(e, t) {
        var n = Y;
        Y = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = oi.transition;
        oi.transition = {};
        try {
            e(!1), t();
        } finally{
            Y = n, oi.transition = r;
        }
    }
    function Wd() {
        return nt().memoizedState;
    }
    function Ih(e, t, n) {
        var r = Ht(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Vd(e)) Gd(t, n);
        else if (n = Ed(e, t, n, r), n !== null) {
            var o = Pe();
            ct(n, e, r, o), Hd(n, t, r);
        }
    }
    function zh(e, t, n) {
        var r = Ht(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Vd(e)) Gd(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, dt(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, $s(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Ed(e, t, o, r), n !== null && (o = Pe(), ct(n, e, r, o), Hd(n, t, r));
        }
    }
    function Vd(e) {
        var t = e.alternate;
        return e === ie || t !== null && t === ie;
    }
    function Gd(e, t) {
        jr = sl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Hd(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ts(e, n);
        }
    }
    var al = {
        readContext: tt,
        useCallback: Ee,
        useContext: Ee,
        useEffect: Ee,
        useImperativeHandle: Ee,
        useInsertionEffect: Ee,
        useLayoutEffect: Ee,
        useMemo: Ee,
        useReducer: Ee,
        useRef: Ee,
        useState: Ee,
        useDebugValue: Ee,
        useDeferredValue: Ee,
        useTransition: Ee,
        useMutableSource: Ee,
        useSyncExternalStore: Ee,
        useId: Ee,
        unstable_isNewReconciler: !1
    }, Nh = {
        readContext: tt,
        useCallback: function(e, t) {
            return pt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: tt,
        useEffect: iu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, Oo(4194308, 4, Ad.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return Oo(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return Oo(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = pt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = pt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Ih.bind(null, ie, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = pt();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: lu,
        useDebugValue: qs,
        useDeferredValue: function(e) {
            return pt().memoizedState = e;
        },
        useTransition: function() {
            var e = lu(!1), t = e[0];
            return e = Th.bind(null, e[1]), pt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ie, o = pt();
            if (re) {
                if (n === void 0) throw Error(I(407));
                n = n();
            } else {
                if (n = t(), ve === null) throw Error(I(349));
                xn & 30 || Rd(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, iu(Pd.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, Xr(9, jd.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = pt(), t = ve.identifierPrefix;
            if (re) {
                var n = _t, r = kt;
                n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Eh++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Rh = {
        readContext: tt,
        useCallback: $d,
        useContext: tt,
        useEffect: Qs,
        useImperativeHandle: Fd,
        useInsertionEffect: Od,
        useLayoutEffect: Dd,
        useMemo: Ud,
        useReducer: li,
        useRef: Ld,
        useState: function() {
            return li(Yr);
        },
        useDebugValue: qs,
        useDeferredValue: function(e) {
            var t = nt();
            return Bd(t, ge.memoizedState, e);
        },
        useTransition: function() {
            var e = li(Yr)[0], t = nt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: zd,
        useSyncExternalStore: Nd,
        useId: Wd,
        unstable_isNewReconciler: !1
    }, jh = {
        readContext: tt,
        useCallback: $d,
        useContext: tt,
        useEffect: Qs,
        useImperativeHandle: Fd,
        useInsertionEffect: Od,
        useLayoutEffect: Dd,
        useMemo: Ud,
        useReducer: ii,
        useRef: Ld,
        useState: function() {
            return ii(Yr);
        },
        useDebugValue: qs,
        useDeferredValue: function(e) {
            var t = nt();
            return ge === null ? t.memoizedState = e : Bd(t, ge.memoizedState, e);
        },
        useTransition: function() {
            var e = ii(Yr)[0], t = nt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: zd,
        useSyncExternalStore: Nd,
        useId: Wd,
        unstable_isNewReconciler: !1
    };
    function lt(e, t) {
        if (e && e.defaultProps) {
            t = se({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function Ki(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Tl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Sn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Pe(), o = Ht(e), l = Ct(r, o);
            l.payload = t, n != null && (l.callback = n), t = Vt(e, l, o), t !== null && (ct(t, e, o, r), Mo(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Pe(), o = Ht(e), l = Ct(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Vt(e, l, o), t !== null && (ct(t, e, o, r), Mo(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Pe(), r = Ht(e), o = Ct(n, r);
            o.tag = 2, t != null && (o.callback = t), t = Vt(e, o, r), t !== null && (ct(t, e, r, n), Mo(t, e, r));
        }
    };
    function su(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Wr(n, r) || !Wr(o, l) : !0;
    }
    function Kd(e, t, n) {
        var r = !1, o = Yt, l = t.contextType;
        return typeof l == "object" && l !== null ? l = tt(l) : (o = $e(t) ? hn : ze.current, r = t.contextTypes, l = (r = r != null) ? qn(e, o) : Yt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Tl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function au(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
    }
    function Qi(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, Us(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = tt(l) : (l = $e(t) ? hn : ze.current, o.context = qn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ki(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Tl.enqueueReplaceState(o, o.state, null), ll(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Jn(e, t) {
        try {
            var n = "", r = t;
            do n += lm(r), r = r.return;
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
    function si(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function qi(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var Ph = typeof WeakMap == "function" ? WeakMap : Map;
    function Qd(e, t, n) {
        n = Ct(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            cl || (cl = !0, ls = r), qi(e, t);
        }, n;
    }
    function qd(e, t, n) {
        n = Ct(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                qi(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            qi(e, t), typeof r != "function" && (Gt === null ? Gt = new Set([
                this
            ]) : Gt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function uu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Ph;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Hh.bind(null, e, t, n), t.then(e, e));
    }
    function cu(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function du(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Vt(n, t, 1))), n.lanes |= 1), e);
    }
    var bh = Nt.ReactCurrentOwner, De = !1;
    function Re(e, t, n, r) {
        t.child = e === null ? Cd(t, null, n, r) : Xn(t, e.child, n, r);
    }
    function fu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return Gn(t, o), r = Hs(e, t, n, r, l, o), n = Ks(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, zt(e, t, o)) : (re && n && Ms(t), t.flags |= 1, Re(e, t, r, o), t.child);
    }
    function pu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !ra(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Yd(e, t, l, r, o)) : (e = $o(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Wr, n(i, r) && e.ref === t.ref) return zt(e, t, o);
        }
        return t.flags |= 1, e = Kt(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Yd(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Wr(l, r) && e.ref === t.ref) if (De = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (De = !0);
            else return t.lanes = e.lanes, zt(e, t, o);
        }
        return Yi(e, t, n, r, o);
    }
    function Xd(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Z($n, Be), Be |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Z($n, Be), Be |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, Z($n, Be), Be |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Z($n, Be), Be |= r;
        return Re(e, t, o, n), t.child;
    }
    function Zd(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Yi(e, t, n, r, o) {
        var l = $e(n) ? hn : ze.current;
        return l = qn(t, l), Gn(t, o), n = Hs(e, t, n, r, l, o), r = Ks(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, zt(e, t, o)) : (re && r && Ms(t), t.flags |= 1, Re(e, t, n, o), t.child);
    }
    function mu(e, t, n, r, o) {
        if ($e(n)) {
            var l = !0;
            el(t);
        } else l = !1;
        if (Gn(t, o), t.stateNode === null) Do(e, t), Kd(t, n, r), Qi(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = tt(u) : (u = $e(n) ? hn : ze.current, u = qn(t, u));
            var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && au(t, i, r, u), Lt = !1;
            var f = t.memoizedState;
            i.state = f, ll(t, r, i, o), a = t.memoizedState, s !== r || f !== a || Fe.current || Lt ? (typeof d == "function" && (Ki(t, n, d, r), a = t.memoizedState), (s = Lt || su(t, n, s, r, f, a, u)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Td(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : lt(t.type, s), i.props = u, c = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = tt(a) : (a = $e(n) ? hn : ze.current, a = qn(t, a));
            var g = n.getDerivedStateFromProps;
            (d = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || f !== a) && au(t, i, r, a), Lt = !1, f = t.memoizedState, i.state = f, ll(t, r, i, o);
            var h = t.memoizedState;
            s !== c || f !== h || Fe.current || Lt ? (typeof g == "function" && (Ki(t, n, g, r), h = t.memoizedState), (u = Lt || su(t, n, u, r, f, h, a) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, h, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, h, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Xi(e, t, n, r, l, o);
    }
    function Xi(e, t, n, r, o, l) {
        Zd(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && Ja(t, n, !1), zt(e, t, l);
        r = t.stateNode, bh.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = Xn(t, e.child, null, l), t.child = Xn(t, null, s, l)) : Re(e, t, s, l), t.memoizedState = r.state, o && Ja(t, n, !0), t.child;
    }
    function Jd(e) {
        var t = e.stateNode;
        t.pendingContext ? Za(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Za(e, t.context, !1), Bs(e, t.containerInfo);
    }
    function hu(e, t, n, r, o) {
        return Yn(), Os(o), t.flags |= 256, Re(e, t, n, r), t.child;
    }
    var Zi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ji(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function ef(e, t, n) {
        var r = t.pendingProps, o = le.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Z(le, o & 1), e === null) return Gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Nl(i, r, 0, null), e = fn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ji(n), t.memoizedState = Zi, e) : Ys(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Mh(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Kt(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Kt(s, l) : (l = fn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ji(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Zi, r;
        }
        return l = e.child, e = l.sibling, r = Kt(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function Ys(e, t) {
        return t = Nl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function ko(e, t, n, r) {
        return r !== null && Os(r), Xn(t, e.child, null, n), e = Ys(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Mh(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = si(Error(I(422))), ko(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Nl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = fn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Xn(t, e.child, null, i), t.child.memoizedState = Ji(i), t.memoizedState = Zi, l);
        if (!(t.mode & 1)) return ko(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(I(419)), r = si(l, r, void 0), ko(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, De || s) {
            if (r = ve, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, It(e, o), ct(r, e, o, -1));
            }
            return na(), r = si(Error(I(421))), ko(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Kh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, We = Wt(o.nextSibling), Ve = t, re = !0, st = null, e !== null && (qe[Ye++] = kt, qe[Ye++] = _t, qe[Ye++] = gn, kt = e.id, _t = e.overflow, gn = t), t = Ys(t, r.children), t.flags |= 4096, t);
    }
    function gu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Hi(e.return, t, n);
    }
    function ai(e, t, n, r, o) {
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
    function tf(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Re(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && gu(e, n, t);
                else if (e.tag === 19) gu(e, n, t);
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
        if (Z(le, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && il(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ai(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && il(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                ai(t, !0, n, null, l);
                break;
            case "together":
                ai(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function Do(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function zt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), yn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(I(153));
        if (t.child !== null) {
            for(e = t.child, n = Kt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = Kt(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function Lh(e, t, n) {
        switch(t.tag){
            case 3:
                Jd(t), Yn();
                break;
            case 5:
                Id(t);
                break;
            case 1:
                $e(t.type) && el(t);
                break;
            case 4:
                Bs(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                Z(rl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Z(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ef(e, t, n) : (Z(le, le.current & 1), e = zt(e, t, n), e !== null ? e.sibling : null);
                Z(le, le.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return tf(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Z(le, le.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Xd(e, t, n);
        }
        return zt(e, t, n);
    }
    var nf, es, rf, of;
    nf = function(e, t) {
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
    es = function() {};
    rf = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, cn(xt.current);
            var l = null;
            switch(n){
                case "input":
                    o = ki(e, o), r = ki(e, r), l = [];
                    break;
                case "select":
                    o = se({}, o, {
                        value: void 0
                    }), r = se({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Ei(e, o), r = Ei(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zo);
            }
            Ii(n, r);
            var i;
            n = null;
            for(u in o)if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
                var s = o[u];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Or.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
            for(u in r){
                var a = r[u];
                if (s = o?.[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in a)a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Or.hasOwnProperty(u) ? (a != null && u === "onScroll" && ee("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    of = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function mr(e, t) {
        if (!re) switch(e.tailMode){
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
    function Te(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function Oh(e, t, n) {
        var r = t.pendingProps;
        switch(Ls(t), t.tag){
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
                return Te(t), null;
            case 1:
                return $e(t.type) && Jo(), Te(t), null;
            case 3:
                return r = t.stateNode, Zn(), te(Fe), te(ze), Vs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (as(st), st = null))), es(e, t), Te(t), null;
            case 5:
                Ws(t);
                var o = cn(Qr.current);
                if (n = t.type, e !== null && t.stateNode != null) rf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(I(166));
                        return Te(t), null;
                    }
                    if (e = cn(xt.current), wo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[ht] = t, r[Hr] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < _r.length; o++)ee(_r[o], r);
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
                                Ea(r, l), ee("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, ee("invalid", r);
                                break;
                            case "textarea":
                                Ia(r, l), ee("invalid", r);
                        }
                        Ii(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && vo(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && vo(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Or.hasOwnProperty(i) && s != null && i === "onScroll" && ee("scroll", r);
                        }
                        switch(n){
                            case "input":
                                co(r), Ta(r, l, !0);
                                break;
                            case "textarea":
                                co(r), za(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = Zo);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ht] = t, e[Hr] = r, nf(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = zi(n, r), n){
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
                                    for(o = 0; o < _r.length; o++)ee(_r[o], e);
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
                                    Ea(e, r), o = ki(e, r), ee("invalid", e);
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
                                    Ia(e, r), o = Ei(e, r), ee("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Ii(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? Lc(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && bc(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Dr(e, a) : typeof a == "number" && Dr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Or.hasOwnProperty(l) ? a != null && l === "onScroll" && ee("scroll", e) : a != null && ws(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    co(e), Ta(e, r, !1);
                                    break;
                                case "textarea":
                                    co(e), za(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + qt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? Un(e, !!r.multiple, l, !1) : r.defaultValue != null && Un(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = Zo);
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
                return Te(t), null;
            case 6:
                if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
                    if (n = cn(Qr.current), cn(xt.current), wo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (l = r.nodeValue !== n) && (e = Ve, e !== null)) switch(e.tag){
                            case 3:
                                vo(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && vo(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ht] = t, t.stateNode = r;
                }
                return Te(t), null;
            case 13:
                if (te(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (re && We !== null && t.mode & 1 && !(t.flags & 128)) kd(), Yn(), t.flags |= 98560, l = !1;
                    else if (l = wo(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(I(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(I(317));
                            l[ht] = t;
                        } else Yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Te(t), l = !1;
                    } else st !== null && (as(st), st = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? xe === 0 && (xe = 3) : na())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
            case 4:
                return Zn(), es(e, t), e === null && Vr(t.stateNode.containerInfo), Te(t), null;
            case 10:
                return Fs(t.type._context), Te(t), null;
            case 17:
                return $e(t.type) && Jo(), Te(t), null;
            case 19:
                if (te(le), l = t.memoizedState, l === null) return Te(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) mr(l, !1);
                else {
                    if (xe !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = il(e), i !== null) {
                            for(t.flags |= 128, mr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return Z(le, le.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && ce() > er && (t.flags |= 128, r = !0, mr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = il(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !re) return Te(t), null;
                    } else 2 * ce() - l.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128, r = !0, mr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ce(), t.sibling = null, n = le.current, Z(le, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
            case 22:
            case 23:
                return ta(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Be & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(I(156, t.tag));
    }
    function Dh(e, t) {
        switch(Ls(t), t.tag){
            case 1:
                return $e(t.type) && Jo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Zn(), te(Fe), te(ze), Vs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Ws(t), null;
            case 13:
                if (te(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(I(340));
                    Yn();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return te(le), null;
            case 4:
                return Zn(), null;
            case 10:
                return Fs(t.type._context), null;
            case 22:
            case 23:
                return ta(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var _o = !1, Ie = !1, Ah = typeof WeakSet == "function" ? WeakSet : Set, P = null;
    function Fn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            ae(e, t, r);
        }
        else n.current = null;
    }
    function ts(e, t, n) {
        try {
            n();
        } catch (r) {
            ae(e, t, r);
        }
    }
    var xu = !1;
    function Fh(e, t) {
        if (Ai = qo, e = ud(), bs(e)) {
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
                    var i = 0, s = -1, a = -1, u = 0, d = 0, c = e, f = null;
                    t: for(;;){
                        for(var g; c !== n || o !== 0 && c.nodeType !== 3 || (s = i + o), c !== l || r !== 0 && c.nodeType !== 3 || (a = i + r), c.nodeType === 3 && (i += c.nodeValue.length), (g = c.firstChild) !== null;)f = c, c = g;
                        for(;;){
                            if (c === e) break t;
                            if (f === n && ++u === o && (s = i), f === l && ++d === r && (a = i), (g = c.nextSibling) !== null) break;
                            c = f, f = c.parentNode;
                        }
                        c = g;
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
        for(Fi = {
            focusedElem: e,
            selectionRange: n
        }, qo = !1, P = t; P !== null;)if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
        else for(; P !== null;){
            t = P;
            try {
                var h = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (h !== null) {
                            var w = h.memoizedProps, y = h.memoizedState, x = t.stateNode, p = x.getSnapshotBeforeUpdate(t.elementType === t.type ? w : lt(t.type, w), y);
                            x.__reactInternalSnapshotBeforeUpdate = p;
                        }
                        break;
                    case 3:
                        var m = t.stateNode.containerInfo;
                        m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
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
                ae(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, P = e;
                break;
            }
            P = t.return;
        }
        return h = xu, xu = !1, h;
    }
    function Pr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && ts(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function Il(e, t) {
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
    function ns(e) {
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
    function lf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, lf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ht], delete t[Hr], delete t[Bi], delete t[Sh], delete t[kh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function sf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function yu(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || sf(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function rs(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zo));
        else if (r !== 4 && (e = e.child, e !== null)) for(rs(e, t, n), e = e.sibling; e !== null;)rs(e, t, n), e = e.sibling;
    }
    function os(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(os(e, t, n), e = e.sibling; e !== null;)os(e, t, n), e = e.sibling;
    }
    var Se = null, it = !1;
    function Rt(e, t, n) {
        for(n = n.child; n !== null;)af(e, t, n), n = n.sibling;
    }
    function af(e, t, n) {
        if (gt && typeof gt.onCommitFiberUnmount == "function") try {
            gt.onCommitFiberUnmount(vl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Ie || Fn(n, t);
            case 6:
                var r = Se, o = it;
                Se = null, Rt(e, t, n), Se = r, it = o, Se !== null && (it ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
                break;
            case 18:
                Se !== null && (it ? (e = Se, n = n.stateNode, e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n), Ur(e)) : ti(Se, n.stateNode));
                break;
            case 4:
                r = Se, o = it, Se = n.stateNode.containerInfo, it = !0, Rt(e, t, n), Se = r, it = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && ts(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Rt(e, t, n);
                break;
            case 1:
                if (!Ie && (Fn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    ae(n, t, s);
                }
                Rt(e, t, n);
                break;
            case 21:
                Rt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Ie = (r = Ie) || n.memoizedState !== null, Rt(e, t, n), Ie = r) : Rt(e, t, n);
                break;
            default:
                Rt(e, t, n);
        }
    }
    function vu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Ah), t.forEach(function(r) {
                var o = Qh.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function rt(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var o = n[r];
            try {
                var l = e, i = t, s = i;
                e: for(; s !== null;){
                    switch(s.tag){
                        case 5:
                            Se = s.stateNode, it = !1;
                            break e;
                        case 3:
                            Se = s.stateNode.containerInfo, it = !0;
                            break e;
                        case 4:
                            Se = s.stateNode.containerInfo, it = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (Se === null) throw Error(I(160));
                af(l, i, o), Se = null, it = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                ae(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)uf(t, e), t = t.sibling;
    }
    function uf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (rt(t, e), ft(e), r & 4) {
                    try {
                        Pr(3, e, e.return), Il(3, e);
                    } catch (w) {
                        ae(e, e.return, w);
                    }
                    try {
                        Pr(5, e, e.return);
                    } catch (w) {
                        ae(e, e.return, w);
                    }
                }
                break;
            case 1:
                rt(t, e), ft(e), r & 512 && n !== null && Fn(n, n.return);
                break;
            case 5:
                if (rt(t, e), ft(e), r & 512 && n !== null && Fn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        Dr(o, "");
                    } catch (w) {
                        ae(e, e.return, w);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Rc(o, l), zi(s, i);
                        var u = zi(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var d = a[i], c = a[i + 1];
                            d === "style" ? Lc(o, c) : d === "dangerouslySetInnerHTML" ? bc(o, c) : d === "children" ? Dr(o, c) : ws(o, d, c, u);
                        }
                        switch(s){
                            case "input":
                                _i(o, l);
                                break;
                            case "textarea":
                                jc(o, l);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var g = l.value;
                                g != null ? Un(o, !!l.multiple, g, !1) : f !== !!l.multiple && (l.defaultValue != null ? Un(o, !!l.multiple, l.defaultValue, !0) : Un(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[Hr] = l;
                    } catch (w) {
                        ae(e, e.return, w);
                    }
                }
                break;
            case 6:
                if (rt(t, e), ft(e), r & 4) {
                    if (e.stateNode === null) throw Error(I(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (w) {
                        ae(e, e.return, w);
                    }
                }
                break;
            case 3:
                if (rt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Ur(t.containerInfo);
                } catch (w) {
                    ae(e, e.return, w);
                }
                break;
            case 4:
                rt(t, e), ft(e);
                break;
            case 13:
                rt(t, e), ft(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Js = ce())), r & 4 && vu(e);
                break;
            case 22:
                if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ie = (u = Ie) || d, rt(t, e), Ie = u) : rt(t, e), ft(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for(P = e, d = e.child; d !== null;){
                        for(c = P = d; P !== null;){
                            switch(f = P, g = f.child, f.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Pr(4, f, f.return);
                                    break;
                                case 1:
                                    Fn(f, f.return);
                                    var h = f.stateNode;
                                    if (typeof h.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount();
                                        } catch (w) {
                                            ae(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Fn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Su(c);
                                        continue;
                                    }
                            }
                            g !== null ? (g.return = f, P = g) : Su(c);
                        }
                        d = d.sibling;
                    }
                    e: for(d = null, c = e;;){
                        if (c.tag === 5) {
                            if (d === null) {
                                d = c;
                                try {
                                    o = c.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = c.stateNode, a = c.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Mc("display", i));
                                } catch (w) {
                                    ae(e, e.return, w);
                                }
                            }
                        } else if (c.tag === 6) {
                            if (d === null) try {
                                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                            } catch (w) {
                                ae(e, e.return, w);
                            }
                        } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
                            c.child.return = c, c = c.child;
                            continue;
                        }
                        if (c === e) break e;
                        for(; c.sibling === null;){
                            if (c.return === null || c.return === e) break e;
                            d === c && (d = null), c = c.return;
                        }
                        d === c && (d = null), c.sibling.return = c.return, c = c.sibling;
                    }
                }
                break;
            case 19:
                rt(t, e), ft(e), r & 4 && vu(e);
                break;
            case 21:
                break;
            default:
                rt(t, e), ft(e);
        }
    }
    function ft(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (sf(n)) {
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
                        r.flags & 32 && (Dr(o, ""), r.flags &= -33);
                        var l = yu(e);
                        os(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = yu(e);
                        rs(e, s, i);
                        break;
                    default:
                        throw Error(I(161));
                }
            } catch (a) {
                ae(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function $h(e, t, n) {
        P = e, cf(e);
    }
    function cf(e, t, n) {
        for(var r = (e.mode & 1) !== 0; P !== null;){
            var o = P, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || _o;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || Ie;
                    s = _o;
                    var u = Ie;
                    if (_o = i, (Ie = a) && !u) for(P = o; P !== null;)i = P, a = i.child, i.tag === 22 && i.memoizedState !== null ? ku(o) : a !== null ? (a.return = i, P = a) : ku(o);
                    for(; l !== null;)P = l, cf(l), l = l.sibling;
                    P = o, _o = s, Ie = u;
                }
                wu(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, P = l) : wu(e);
        }
    }
    function wu(e) {
        for(; P !== null;){
            var t = P;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Ie || Il(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ie) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && ou(t, l, r);
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
                                ou(t, i, n);
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
                                    var d = u.memoizedState;
                                    if (d !== null) {
                                        var c = d.dehydrated;
                                        c !== null && Ur(c);
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
                    Ie || t.flags & 512 && ns(t);
                } catch (f) {
                    ae(t, t.return, f);
                }
            }
            if (t === e) {
                P = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, P = n;
                break;
            }
            P = t.return;
        }
    }
    function Su(e) {
        for(; P !== null;){
            var t = P;
            if (t === e) {
                P = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, P = n;
                break;
            }
            P = t.return;
        }
    }
    function ku(e) {
        for(; P !== null;){
            var t = P;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Il(4, t);
                        } catch (a) {
                            ae(t, n, a);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (a) {
                                ae(t, o, a);
                            }
                        }
                        var l = t.return;
                        try {
                            ns(t);
                        } catch (a) {
                            ae(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            ns(t);
                        } catch (a) {
                            ae(t, i, a);
                        }
                }
            } catch (a) {
                ae(t, t.return, a);
            }
            if (t === e) {
                P = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, P = s;
                break;
            }
            P = t.return;
        }
    }
    var Uh = Math.ceil, ul = Nt.ReactCurrentDispatcher, Xs = Nt.ReactCurrentOwner, et = Nt.ReactCurrentBatchConfig, K = 0, ve = null, pe = null, ke = 0, Be = 0, $n = Zt(0), xe = 0, Zr = null, yn = 0, zl = 0, Zs = 0, br = null, Oe = null, Js = 0, er = 1 / 0, vt = null, cl = !1, ls = null, Gt = null, Co = !1, Ft = null, dl = 0, Mr = 0, is = null, Ao = -1, Fo = 0;
    function Pe() {
        return K & 6 ? ce() : Ao !== -1 ? Ao : Ao = ce();
    }
    function Ht(e) {
        return e.mode & 1 ? K & 2 && ke !== 0 ? ke & -ke : Ch.transition !== null ? (Fo === 0 && (Fo = Kc()), Fo) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ed(e.type)), e) : 1;
    }
    function ct(e, t, n, r) {
        if (50 < Mr) throw Mr = 0, is = null, Error(I(185));
        no(e, n, r), (!(K & 2) || e !== ve) && (e === ve && (!(K & 2) && (zl |= n), xe === 4 && Dt(e, ke)), Ue(e, r), n === 1 && K === 0 && !(t.mode & 1) && (er = ce() + 500, Cl && Jt()));
    }
    function Ue(e, t) {
        var n = e.callbackNode;
        Cm(e, t);
        var r = Qo(e, e === ve ? ke : 0);
        if (r === 0) n !== null && ja(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && ja(n), t === 1) e.tag === 0 ? _h(_u.bind(null, e)) : vd(_u.bind(null, e)), vh(function() {
                !(K & 6) && Jt();
            }), n = null;
            else {
                switch(Qc(r)){
                    case 1:
                        n = Es;
                        break;
                    case 4:
                        n = Gc;
                        break;
                    case 16:
                        n = Ko;
                        break;
                    case 536870912:
                        n = Hc;
                        break;
                    default:
                        n = Ko;
                }
                n = yf(n, df.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function df(e, t) {
        if (Ao = -1, Fo = 0, K & 6) throw Error(I(327));
        var n = e.callbackNode;
        if (Hn() && e.callbackNode !== n) return null;
        var r = Qo(e, e === ve ? ke : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
        else {
            t = r;
            var o = K;
            K |= 2;
            var l = pf();
            (ve !== e || ke !== t) && (vt = null, er = ce() + 500, dn(e, t));
            do try {
                Vh();
                break;
            } catch (s) {
                ff(e, s);
            }
            while (!0);
            As(), ul.current = l, K = o, pe !== null ? t = 0 : (ve = null, ke = 0, t = xe);
        }
        if (t !== 0) {
            if (t === 2 && (o = bi(e), o !== 0 && (r = o, t = ss(e, o))), t === 1) throw n = Zr, dn(e, 0), Dt(e, r), Ue(e, ce()), n;
            if (t === 6) Dt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Bh(o) && (t = fl(e, r), t === 2 && (l = bi(e), l !== 0 && (r = l, t = ss(e, l))), t === 1)) throw n = Zr, dn(e, 0), Dt(e, r), Ue(e, ce()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(I(345));
                    case 2:
                        ln(e, Oe, vt);
                        break;
                    case 3:
                        if (Dt(e, r), (r & 130023424) === r && (t = Js + 500 - ce(), 10 < t)) {
                            if (Qo(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Pe(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = Ui(ln.bind(null, e, Oe, vt), t);
                            break;
                        }
                        ln(e, Oe, vt);
                        break;
                    case 4:
                        if (Dt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - ut(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Uh(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Ui(ln.bind(null, e, Oe, vt), r);
                            break;
                        }
                        ln(e, Oe, vt);
                        break;
                    case 5:
                        ln(e, Oe, vt);
                        break;
                    default:
                        throw Error(I(329));
                }
            }
        }
        return Ue(e, ce()), e.callbackNode === n ? df.bind(null, e) : null;
    }
    function ss(e, t) {
        var n = br;
        return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = Oe, Oe = n, t !== null && as(t)), e;
    }
    function as(e) {
        Oe === null ? Oe = e : Oe.push.apply(Oe, e);
    }
    function Bh(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!dt(l(), o)) return !1;
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
    function Dt(e, t) {
        for(t &= ~Zs, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - ut(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function _u(e) {
        if (K & 6) throw Error(I(327));
        Hn();
        var t = Qo(e, 0);
        if (!(t & 1)) return Ue(e, ce()), null;
        var n = fl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = bi(e);
            r !== 0 && (t = r, n = ss(e, r));
        }
        if (n === 1) throw n = Zr, dn(e, 0), Dt(e, t), Ue(e, ce()), n;
        if (n === 6) throw Error(I(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Oe, vt), Ue(e, ce()), null;
    }
    function ea(e, t) {
        var n = K;
        K |= 1;
        try {
            return e(t);
        } finally{
            K = n, K === 0 && (er = ce() + 500, Cl && Jt());
        }
    }
    function vn(e) {
        Ft !== null && Ft.tag === 0 && !(K & 6) && Hn();
        var t = K;
        K |= 1;
        var n = et.transition, r = Y;
        try {
            if (et.transition = null, Y = 1, e) return e();
        } finally{
            Y = r, et.transition = n, K = t, !(K & 6) && Jt();
        }
    }
    function ta() {
        Be = $n.current, te($n);
    }
    function dn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, yh(n)), pe !== null) for(n = pe.return; n !== null;){
            var r = n;
            switch(Ls(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && Jo();
                    break;
                case 3:
                    Zn(), te(Fe), te(ze), Vs();
                    break;
                case 5:
                    Ws(r);
                    break;
                case 4:
                    Zn();
                    break;
                case 13:
                    te(le);
                    break;
                case 19:
                    te(le);
                    break;
                case 10:
                    Fs(r.type._context);
                    break;
                case 22:
                case 23:
                    ta();
            }
            n = n.return;
        }
        if (ve = e, pe = e = Kt(e.current, null), ke = Be = t, xe = 0, Zr = null, Zs = zl = yn = 0, Oe = br = null, un !== null) {
            for(t = 0; t < un.length; t++)if (n = un[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            un = null;
        }
        return e;
    }
    function ff(e, t) {
        do {
            var n = pe;
            try {
                if (As(), Lo.current = al, sl) {
                    for(var r = ie.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    sl = !1;
                }
                if (xn = 0, ye = ge = ie = null, jr = !1, qr = 0, Xs.current = null, n === null || n.return === null) {
                    xe = 1, Zr = t, pe = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = ke, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, d = s, c = d.tag;
                        if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                            var f = d.alternate;
                            f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var g = cu(i);
                        if (g !== null) {
                            g.flags &= -257, du(g, i, s, l, t), g.mode & 1 && uu(l, u, t), t = g, a = u;
                            var h = t.updateQueue;
                            if (h === null) {
                                var w = new Set;
                                w.add(a), t.updateQueue = w;
                            } else h.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                uu(l, u, t), na();
                                break e;
                            }
                            a = Error(I(426));
                        }
                    } else if (re && s.mode & 1) {
                        var y = cu(i);
                        if (y !== null) {
                            !(y.flags & 65536) && (y.flags |= 256), du(y, i, s, l, t), Os(Jn(a, s));
                            break e;
                        }
                    }
                    l = a = Jn(a, s), xe !== 4 && (xe = 2), br === null ? br = [
                        l
                    ] : br.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var x = Qd(l, a, t);
                                ru(l, x);
                                break e;
                            case 1:
                                s = a;
                                var p = l.type, m = l.stateNode;
                                if (!(l.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Gt === null || !Gt.has(m)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = qd(l, s, t);
                                    ru(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                hf(n);
            } catch (k) {
                t = k, pe === n && n !== null && (pe = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function pf() {
        var e = ul.current;
        return ul.current = al, e === null ? al : e;
    }
    function na() {
        (xe === 0 || xe === 3 || xe === 2) && (xe = 4), ve === null || !(yn & 268435455) && !(zl & 268435455) || Dt(ve, ke);
    }
    function fl(e, t) {
        var n = K;
        K |= 2;
        var r = pf();
        (ve !== e || ke !== t) && (vt = null, dn(e, t));
        do try {
            Wh();
            break;
        } catch (o) {
            ff(e, o);
        }
        while (!0);
        if (As(), K = n, ul.current = r, pe !== null) throw Error(I(261));
        return ve = null, ke = 0, xe;
    }
    function Wh() {
        for(; pe !== null;)mf(pe);
    }
    function Vh() {
        for(; pe !== null && !hm();)mf(pe);
    }
    function mf(e) {
        var t = xf(e.alternate, e, Be);
        e.memoizedProps = e.pendingProps, t === null ? hf(e) : pe = t, Xs.current = null;
    }
    function hf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Dh(n, t), n !== null) {
                    n.flags &= 32767, pe = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    xe = 6, pe = null;
                    return;
                }
            } else if (n = Oh(n, t, Be), n !== null) {
                pe = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                pe = t;
                return;
            }
            pe = t = e;
        }while (t !== null);
        xe === 0 && (xe = 5);
    }
    function ln(e, t, n) {
        var r = Y, o = et.transition;
        try {
            et.transition = null, Y = 1, Gh(e, t, n, r);
        } finally{
            et.transition = o, Y = r;
        }
        return null;
    }
    function Gh(e, t, n, r) {
        do Hn();
        while (Ft !== null);
        if (K & 6) throw Error(I(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Em(e, l), e === ve && (pe = ve = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Co || (Co = !0, yf(Ko, function() {
            return Hn(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = et.transition, et.transition = null;
            var i = Y;
            Y = 1;
            var s = K;
            K |= 4, Xs.current = null, Fh(e, n), uf(n, e), dh(Fi), qo = !!Ai, Fi = Ai = null, e.current = n, $h(n), gm(), K = s, Y = i, et.transition = l;
        } else e.current = n;
        if (Co && (Co = !1, Ft = e, dl = o), l = e.pendingLanes, l === 0 && (Gt = null), vm(n.stateNode), Ue(e, ce()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (cl) throw cl = !1, e = ls, ls = null, e;
        return dl & 1 && e.tag !== 0 && Hn(), l = e.pendingLanes, l & 1 ? e === is ? Mr++ : (Mr = 0, is = e) : Mr = 0, Jt(), null;
    }
    function Hn() {
        if (Ft !== null) {
            var e = Qc(dl), t = et.transition, n = Y;
            try {
                if (et.transition = null, Y = 16 > e ? 16 : e, Ft === null) var r = !1;
                else {
                    if (e = Ft, Ft = null, dl = 0, K & 6) throw Error(I(331));
                    var o = K;
                    for(K |= 4, P = e.current; P !== null;){
                        var l = P, i = l.child;
                        if (P.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var a = 0; a < s.length; a++){
                                    var u = s[a];
                                    for(P = u; P !== null;){
                                        var d = P;
                                        switch(d.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                Pr(8, d, l);
                                        }
                                        var c = d.child;
                                        if (c !== null) c.return = d, P = c;
                                        else for(; P !== null;){
                                            d = P;
                                            var f = d.sibling, g = d.return;
                                            if (lf(d), d === u) {
                                                P = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                f.return = g, P = f;
                                                break;
                                            }
                                            P = g;
                                        }
                                    }
                                }
                                var h = l.alternate;
                                if (h !== null) {
                                    var w = h.child;
                                    if (w !== null) {
                                        h.child = null;
                                        do {
                                            var y = w.sibling;
                                            w.sibling = null, w = y;
                                        }while (w !== null);
                                    }
                                }
                                P = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, P = i;
                        else e: for(; P !== null;){
                            if (l = P, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    Pr(9, l, l.return);
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                x.return = l.return, P = x;
                                break e;
                            }
                            P = l.return;
                        }
                    }
                    var p = e.current;
                    for(P = p; P !== null;){
                        i = P;
                        var m = i.child;
                        if (i.subtreeFlags & 2064 && m !== null) m.return = i, P = m;
                        else e: for(i = p; P !== null;){
                            if (s = P, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Il(9, s);
                                }
                            } catch (k) {
                                ae(s, s.return, k);
                            }
                            if (s === i) {
                                P = null;
                                break e;
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return, P = S;
                                break e;
                            }
                            P = s.return;
                        }
                    }
                    if (K = o, Jt(), gt && typeof gt.onPostCommitFiberRoot == "function") try {
                        gt.onPostCommitFiberRoot(vl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                Y = n, et.transition = t;
            }
        }
        return !1;
    }
    function Cu(e, t, n) {
        t = Jn(n, t), t = Qd(e, t, 1), e = Vt(e, t, 1), t = Pe(), e !== null && (no(e, 1, t), Ue(e, t));
    }
    function ae(e, t, n) {
        if (e.tag === 3) Cu(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Cu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r))) {
                    e = Jn(n, e), e = qd(t, e, 1), t = Vt(t, e, 1), e = Pe(), t !== null && (no(t, 1, e), Ue(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Hh(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (ke & n) === n && (xe === 4 || xe === 3 && (ke & 130023424) === ke && 500 > ce() - Js ? dn(e, 0) : Zs |= n), Ue(e, t);
    }
    function gf(e, t) {
        t === 0 && (e.mode & 1 ? (t = mo, mo <<= 1, !(mo & 130023424) && (mo = 4194304)) : t = 1);
        var n = Pe();
        e = It(e, t), e !== null && (no(e, t, n), Ue(e, n));
    }
    function Kh(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), gf(e, n);
    }
    function Qh(e, t) {
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
        r !== null && r.delete(t), gf(e, n);
    }
    var xf;
    xf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) De = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return De = !1, Lh(e, t, n);
            De = !!(e.flags & 131072);
        }
        else De = !1, re && t.flags & 1048576 && wd(t, nl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                Do(e, t), e = t.pendingProps;
                var o = qn(t, ze.current);
                Gn(t, n), o = Hs(null, t, r, e, o, n);
                var l = Ks();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (l = !0, el(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Us(t), o.updater = Tl, t.stateNode = o, o._reactInternals = t, Qi(t, r, e, n), t = Xi(null, t, r, !0, l, n)) : (t.tag = 0, re && l && Ms(t), Re(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(Do(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Yh(r), e = lt(r, e), o){
                        case 0:
                            t = Yi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = mu(null, t, r, e, n);
                            break e;
                        case 11:
                            t = fu(null, t, r, e, n);
                            break e;
                        case 14:
                            t = pu(null, t, r, lt(r.type, e), n);
                            break e;
                    }
                    throw Error(I(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Yi(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), mu(e, t, r, o, n);
            case 3:
                e: {
                    if (Jd(t), e === null) throw Error(I(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Td(e, t), ll(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = Jn(Error(I(423)), t), t = hu(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = Jn(Error(I(424)), t), t = hu(e, t, r, n, o);
                        break e;
                    } else for(We = Wt(t.stateNode.containerInfo.firstChild), Ve = t, re = !0, st = null, n = Cd(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Yn(), r === o) {
                            t = zt(e, t, n);
                            break e;
                        }
                        Re(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Id(t), e === null && Gi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, $i(r, o) ? i = null : l !== null && $i(r, l) && (t.flags |= 32), Zd(e, t), Re(e, t, i, n), t.child;
            case 6:
                return e === null && Gi(t), null;
            case 13:
                return ef(e, t, n);
            case 4:
                return Bs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Xn(t, null, r, n) : Re(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), fu(e, t, r, o, n);
            case 7:
                return Re(e, t, t.pendingProps, n), t.child;
            case 8:
                return Re(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Re(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, Z(rl, r._currentValue), r._currentValue = i, l !== null) if (dt(l.value, i)) {
                        if (l.children === o.children && !Fe.current) {
                            t = zt(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var a = s.firstContext; a !== null;){
                                if (a.context === r) {
                                    if (l.tag === 1) {
                                        a = Ct(-1, n & -n), a.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                                        }
                                    }
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), Hi(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(I(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Hi(i, n, t), i = l.sibling;
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
                    Re(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, Gn(t, n), o = tt(o), r = r(o), t.flags |= 1, Re(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = lt(r, t.pendingProps), o = lt(r.type, o), pu(e, t, r, o, n);
            case 15:
                return Yd(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Do(e, t), t.tag = 1, $e(r) ? (e = !0, el(t)) : e = !1, Gn(t, n), Kd(t, r, o), Qi(t, r, o, n), Xi(null, t, r, !0, e, n);
            case 19:
                return tf(e, t, n);
            case 22:
                return Xd(e, t, n);
        }
        throw Error(I(156, t.tag));
    };
    function yf(e, t) {
        return Vc(e, t);
    }
    function qh(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ze(e, t, n, r) {
        return new qh(e, t, n, r);
    }
    function ra(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Yh(e) {
        if (typeof e == "function") return ra(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === ks) return 11;
            if (e === _s) return 14;
        }
        return 2;
    }
    function Kt(e, t) {
        var n = e.alternate;
        return n === null ? (n = Ze(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function $o(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") ra(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Rn:
                return fn(n.children, o, l, t);
            case Ss:
                i = 8, o |= 8;
                break;
            case yi:
                return e = Ze(12, n, t, o | 2), e.elementType = yi, e.lanes = l, e;
            case vi:
                return e = Ze(13, n, t, o), e.elementType = vi, e.lanes = l, e;
            case wi:
                return e = Ze(19, n, t, o), e.elementType = wi, e.lanes = l, e;
            case Ic:
                return Nl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Ec:
                        i = 10;
                        break e;
                    case Tc:
                        i = 9;
                        break e;
                    case ks:
                        i = 11;
                        break e;
                    case _s:
                        i = 14;
                        break e;
                    case Mt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(I(130, e == null ? e : typeof e, ""));
        }
        return t = Ze(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function fn(e, t, n, r) {
        return e = Ze(7, e, r, t), e.lanes = n, e;
    }
    function Nl(e, t, n, r) {
        return e = Ze(22, e, r, t), e.elementType = Ic, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function ui(e, t, n) {
        return e = Ze(6, e, null, t), e.lanes = n, e;
    }
    function ci(e, t, n) {
        return t = Ze(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function Xh(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function oa(e, t, n, r, o, l, i, s, a) {
        return e = new Xh(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ze(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Us(l), e;
    }
    function Zh(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Nn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function vf(e) {
        if (!e) return Yt;
        e = e._reactInternals;
        e: {
            if (Sn(e) !== e || e.tag !== 1) throw Error(I(170));
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
            if ($e(n)) return yd(e, n, t);
        }
        return t;
    }
    function wf(e, t, n, r, o, l, i, s, a) {
        return e = oa(n, r, !0, e, o, l, i, s, a), e.context = vf(null), n = e.current, r = Pe(), o = Ht(n), l = Ct(r, o), l.callback = t ?? null, Vt(n, l, o), e.current.lanes = o, no(e, o, r), Ue(e, r), e;
    }
    function Rl(e, t, n, r) {
        var o = t.current, l = Pe(), i = Ht(o);
        return n = vf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vt(o, t, i), e !== null && (ct(e, o, i, l), Mo(e, o, i)), i;
    }
    function pl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Eu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function la(e, t) {
        Eu(e, t), (e = e.alternate) && Eu(e, t);
    }
    function Jh() {
        return null;
    }
    var Sf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function ia(e) {
        this._internalRoot = e;
    }
    jl.prototype.render = ia.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(I(409));
        Rl(e, t, null, null);
    };
    jl.prototype.unmount = ia.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            vn(function() {
                Rl(null, e, null, null);
            }), t[Tt] = null;
        }
    };
    function jl(e) {
        this._internalRoot = e;
    }
    jl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Xc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
            Ot.splice(n, 0, e), n === 0 && Jc(e);
        }
    };
    function sa(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Pl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Tu() {}
    function eg(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = pl(i);
                    l.call(u);
                };
            }
            var i = wf(t, r, e, 0, null, !1, !1, "", Tu);
            return e._reactRootContainer = i, e[Tt] = i.current, Vr(e.nodeType === 8 ? e.parentNode : e), vn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = pl(a);
                s.call(u);
            };
        }
        var a = oa(e, 0, !1, null, null, !1, !1, "", Tu);
        return e._reactRootContainer = a, e[Tt] = a.current, Vr(e.nodeType === 8 ? e.parentNode : e), vn(function() {
            Rl(t, a, n, r);
        }), a;
    }
    function bl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = pl(i);
                    s.call(a);
                };
            }
            Rl(t, i, e, o);
        } else i = eg(n, t, e, o, r);
        return pl(i);
    }
    qc = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = kr(t.pendingLanes);
                    n !== 0 && (Ts(t, n | 1), Ue(t, ce()), !(K & 6) && (er = ce() + 500, Jt()));
                }
                break;
            case 13:
                vn(function() {
                    var r = It(e, 1);
                    if (r !== null) {
                        var o = Pe();
                        ct(r, e, 1, o);
                    }
                }), la(e, 1);
        }
    };
    Is = function(e) {
        if (e.tag === 13) {
            var t = It(e, 134217728);
            if (t !== null) {
                var n = Pe();
                ct(t, e, 134217728, n);
            }
            la(e, 134217728);
        }
    };
    Yc = function(e) {
        if (e.tag === 13) {
            var t = Ht(e), n = It(e, t);
            if (n !== null) {
                var r = Pe();
                ct(n, e, t, r);
            }
            la(e, t);
        }
    };
    Xc = function() {
        return Y;
    };
    Zc = function(e, t) {
        var n = Y;
        try {
            return Y = e, t();
        } finally{
            Y = n;
        }
    };
    Ri = function(e, t, n) {
        switch(t){
            case "input":
                if (_i(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = _l(r);
                            if (!o) throw Error(I(90));
                            Nc(r), _i(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                jc(e, n);
                break;
            case "select":
                t = n.value, t != null && Un(e, !!n.multiple, t, !1);
        }
    };
    Ac = ea;
    Fc = vn;
    var tg = {
        usingClientEntryPoint: !1,
        Events: [
            oo,
            Mn,
            _l,
            Oc,
            Dc,
            ea
        ]
    }, hr = {
        findFiberByHostInstance: an,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, ng = {
        bundleType: hr.bundleType,
        version: hr.version,
        rendererPackageName: hr.rendererPackageName,
        rendererConfig: hr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Nt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Bc(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: hr.findFiberByHostInstance || Jh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Eo.isDisabled && Eo.supportsFiber) try {
            vl = Eo.inject(ng), gt = Eo;
        } catch  {}
    }
    He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tg;
    He.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!sa(t)) throw Error(I(200));
        return Zh(e, t, null, n);
    };
    He.createRoot = function(e, t) {
        if (!sa(e)) throw Error(I(299));
        var n = !1, r = "", o = Sf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = oa(e, 1, !1, null, null, n, !1, r, o), e[Tt] = t.current, Vr(e.nodeType === 8 ? e.parentNode : e), new ia(t);
    };
    He.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
        return e = Bc(t), e = e === null ? null : e.stateNode, e;
    };
    He.flushSync = function(e) {
        return vn(e);
    };
    He.hydrate = function(e, t, n) {
        if (!Pl(t)) throw Error(I(200));
        return bl(null, e, t, !0, n);
    };
    He.hydrateRoot = function(e, t, n) {
        if (!sa(e)) throw Error(I(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Sf;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = wf(t, null, e, 1, n ?? null, o, !1, l, i), e[Tt] = t.current, Vr(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new jl(t);
    };
    He.render = function(e, t, n) {
        if (!Pl(t)) throw Error(I(200));
        return bl(null, e, t, !1, n);
    };
    He.unmountComponentAtNode = function(e) {
        if (!Pl(e)) throw Error(I(40));
        return e._reactRootContainer ? (vn(function() {
            bl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Tt] = null;
            });
        }), !0) : !1;
    };
    He.unstable_batchedUpdates = ea;
    He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Pl(n)) throw Error(I(200));
        if (e == null || e._reactInternals === void 0) throw Error(I(38));
        return bl(e, t, n, !1, r);
    };
    He.version = "18.3.1-next-f1338f8080-20240426";
    function kf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf);
        } catch (e) {
            console.error(e);
        }
    }
    kf(), Sc.exports = He;
    var rg = Sc.exports, Iu = rg;
    gi.createRoot = Iu.createRoot, gi.hydrateRoot = Iu.hydrateRoot;
    const og = "modulepreload", lg = function(e) {
        return "/grid-draw/" + e;
    }, zu = {}, aa = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = lg(a), a in zu) return;
                zu[a] = !0;
                const u = a.endsWith(".css"), d = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${d}`)) return;
                const c = document.createElement("link");
                if (c.rel = u ? "stylesheet" : og, u || (c.as = "script"), c.crossOrigin = "", c.href = a, s && c.setAttribute("nonce", s), document.head.appendChild(c), u) return new Promise((f, g)=>{
                    c.addEventListener("load", f), c.addEventListener("error", ()=>g(new Error(`Unable to preload CSS for ${a}`)));
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
    }, Nu = (e)=>{
        let t;
        const n = new Set, r = (u, d)=>{
            const c = typeof u == "function" ? u(t) : u;
            if (!Object.is(c, t)) {
                const f = t;
                t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((g)=>g(t, f));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, ig = (e)=>e ? Nu(e) : Nu, sg = (e)=>e;
    function ag(e, t = sg) {
        const n = ne.useSyncExternalStore(e.subscribe, ne.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), ne.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return ne.useDebugValue(n), n;
    }
    const Ru = (e)=>{
        const t = ig(e), n = (r)=>ag(t, r);
        return Object.assign(n, t), n;
    }, _f = (e)=>e ? Ru(e) : Ru, ug = 1.75;
    function di(e) {
        return {
            r: e.minRow - ug,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function Cf(e) {
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
    function Kn(e) {
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
    function cg(e, t, n) {
        if (e.length === 0) return 0;
        let r = 1 / 0, o = -1 / 0, l = 1 / 0, i = -1 / 0;
        for (const a of e)r = Math.min(r, a.r), o = Math.max(o, a.r), l = Math.min(l, a.c), i = Math.max(i, a.c);
        const s = Math.hypot((o - r) * t, (i - l) * t);
        return Math.min(9 / n, s / 4);
    }
    function dg(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, d = (a - e) * (a - e) + (u - t) * (u - t);
            d <= i && (l = s, i = d);
        }
        return l;
    }
    const Ef = [
        1,
        1.5,
        2,
        3,
        5
    ], Tf = [
        1,
        1.5,
        2,
        3,
        5
    ], Je = 8, Cr = [
        1,
        2,
        4,
        8
    ], Uo = (e)=>Math.round(e * 10), If = (e)=>e / 10;
    function ml(e, t) {
        const n = e.get_square(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: n[3]
        };
    }
    function ua(e, t) {
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
    function ca(e, t) {
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
    function ju(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Pu(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function bu(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            boxW: n[3],
            boxH: n[4]
        };
    }
    function Ml(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: e.get_text_size(t),
            boxW: n[3],
            boxH: n[4],
            halign: n[5],
            valign: n[6],
            text: e.get_text_string(t)
        };
    }
    function Mu(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function zf(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            url: e.get_image_url(t)
        };
    }
    function gr(e) {
        return e.map((t)=>`${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Nf(e, t) {
        return e.type === t.type && e.index === t.index;
    }
    function Er(e, t) {
        return t.some((n)=>Nf(n, e));
    }
    function fg(e, t) {
        return Er(e, t) ? t : [
            ...t,
            e
        ];
    }
    function pg(e, t) {
        return t.filter((n)=>!Nf(n, e));
    }
    function fi(e, t) {
        t.type === "cell" ? e.highlight_square(t.index) : t.type === "line" ? e.highlight_line(t.index) : t.type === "rect" ? e.highlight_rect(t.index) : t.type === "text" ? e.highlight_text(t.index) : e.highlight_image(t.index);
    }
    function Rf(e) {
        return [
            e[0],
            e[1],
            e[0] + e[4],
            e[1] + e[3]
        ];
    }
    function mg(e, t) {
        return t.type === "line" ? Cf(e.get_line(t.index)) : t.type === "rect" ? Kn(e.get_rect(t.index)) : t.type === "image" ? Kn(e.get_image(t.index)) : t.type === "text" ? Kn(Rf(e.get_text(t.index))) : [];
    }
    function Lu(e, t, n, r, o, l) {
        const i = mg(e, t);
        return dg(n, r, i, o, cg(i, o, l));
    }
    function Xe(e) {
        return (t)=>t.type === e;
    }
    function Ae(e, t) {
        if (e.length === 0) return null;
        let n = 1 / 0, r = 1 / 0, o = -1 / 0, l = -1 / 0;
        for (const i of e)if (i.type === "cell") {
            const s = t.get_square(i.index);
            s.length >= 4 && (n = Math.min(n, s[0]), r = Math.min(r, s[1]), o = Math.max(o, s[0] + s[3] - 1), l = Math.max(l, s[1] + s[3] - 1));
        } else if (i.type === "line") {
            const s = t.get_line(i.index);
            s.length >= 4 && (n = Math.min(n, s[0], s[2]), r = Math.min(r, s[1], s[3]), o = Math.max(o, s[0], s[2]), l = Math.max(l, s[1], s[3]));
        } else if (i.type === "rect") {
            const s = t.get_rect(i.index);
            s.length >= 4 && (n = Math.min(n, s[0], s[2]), r = Math.min(r, s[1], s[3]), o = Math.max(o, s[0], s[2]), l = Math.max(l, s[1], s[3]));
        } else if (i.type === "text") {
            const s = t.get_text(i.index);
            s.length >= 5 && (n = Math.min(n, s[0]), r = Math.min(r, s[1]), o = Math.max(o, s[0] + s[4]), l = Math.max(l, s[1] + s[3]));
        } else if (i.type === "image") {
            const s = t.get_image(i.index);
            s.length >= 4 && (n = Math.min(n, s[0], s[2]), r = Math.min(r, s[1], s[3]), o = Math.max(o, s[0], s[2]), l = Math.max(l, s[1], s[3]));
        }
        return n === 1 / 0 ? null : {
            minRow: n,
            minCol: r,
            maxRow: o,
            maxCol: l
        };
    }
    function hg(e, t) {
        const n = Ae(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function Ou(e, t, n, r, o) {
        const l = Ae(t, e);
        if (!l) return {
            deltaRow: n,
            deltaCol: r
        };
        const i = Je / o, s = (a)=>Math.round(a / i) * i;
        return {
            deltaRow: s(l.minRow + n) - l.minRow,
            deltaCol: s(l.minCol + r) - l.minCol
        };
    }
    function Lr(e, t, n = {}) {
        const r = Ae(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, d = [], c = [], f = [], g = [], h = [];
        for (const w of t)if (w.type === "cell") {
            const y = e.get_square(w.index);
            d.push([
                y[0] - a,
                y[1] - u,
                y[2],
                y[3]
            ]);
        } else if (w.type === "line") {
            const y = e.get_line(w.index);
            c.push([
                y[0] - a,
                y[1] - u,
                y[2] - a,
                y[3] - u,
                y[4],
                y[5]
            ]);
        } else if (w.type === "rect") {
            const y = e.get_rect(w.index);
            f.push([
                y[0] - a,
                y[1] - u,
                y[2] - a,
                y[3] - u,
                y[4],
                y[5]
            ]);
        } else if (w.type === "text") {
            const y = e.get_text(w.index);
            g.push([
                y[0] - a,
                y[1] - u,
                y[2],
                e.get_text_size(w.index),
                y[3],
                y[4],
                y[5],
                y[6],
                e.get_text_string(w.index)
            ]);
        } else if (w.type === "image") {
            const y = e.get_image(w.index);
            h.push([
                y[0] - a,
                y[1] - u,
                y[2] - a,
                y[3] - u,
                e.get_image_url(w.index)
            ]);
        }
        return {
            w: s - u + 1,
            h: i - a + 1,
            cells: d,
            lines: c,
            rects: f,
            texts: g,
            images: h,
            sub: Je
        };
    }
    function gg(e) {
        return typeof e == "object" && e !== null;
    }
    function xg(e) {
        return Array.isArray(e);
    }
    function Le(e) {
        return typeof e == "number" ? e : void 0;
    }
    function yg(e) {
        if (xg(e)) {
            const t = e[0], n = e[1];
            return typeof t != "number" || typeof n != "number" ? null : e.length >= 9 ? {
                r: t,
                c: n,
                color: Le(e[2]),
                size: Le(e[3]),
                boxW: Le(e[4]),
                boxH: Le(e[5]),
                halign: Le(e[6]),
                valign: Le(e[7]),
                text: e[8]
            } : {
                r: t,
                c: n,
                color: Le(e[2]),
                size: Le(e[3]),
                text: e[4]
            };
        }
        return gg(e) ? typeof e.r != "number" || typeof e.c != "number" ? null : {
            r: e.r,
            c: e.c,
            color: Le(e.color),
            size: Le(e.size),
            boxW: Le(e.boxW),
            boxH: Le(e.boxH),
            halign: Le(e.halign),
            valign: Le(e.valign),
            text: e.text
        } : null;
    }
    function Du(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function wt(e, t, n, r, o) {
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
    function Au(e, t, n, r, o, l) {
        const i = wt(e, t, r, o, l), s = wt(e + n - 1, t + n - 1, r, o, l);
        return {
            r: Math.min(i.r, s.r),
            c: Math.min(i.c, s.c)
        };
    }
    function jf(e) {
        const t = [];
        for(let n = 0; n < e.get_square_count(); n++)t.push({
            type: "cell",
            index: n
        });
        for(let n = 0; n < e.get_line_count(); n++)t.push({
            type: "line",
            index: n
        });
        for(let n = 0; n < e.get_rect_count(); n++)t.push({
            type: "rect",
            index: n
        });
        for(let n = 0; n < e.get_text_count(); n++)t.push({
            type: "text",
            index: n
        });
        for(let n = 0; n < e.get_image_count(); n++)t.push({
            type: "image",
            index: n
        });
        return t;
    }
    const vg = (e, t)=>({
            copy: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n || r.length === 0) return;
                const o = hg(r, n);
                if (!o) return;
                const l = [], i = [], s = [], a = [], u = [];
                for (const d of r)if (d.type === "cell") {
                    const c = n.get_square(d.index);
                    l.push({
                        relRow: c[0] - o.minRow,
                        relCol: c[1] - o.minCol,
                        color: c[2],
                        size: c[3]
                    });
                } else if (d.type === "line") {
                    const c = n.get_line(d.index);
                    c.length >= 6 && i.push({
                        relR1: c[0] - o.minRow,
                        relC1: c[1] - o.minCol,
                        relR2: c[2] - o.minRow,
                        relC2: c[3] - o.minCol,
                        color: c[4],
                        width: c[5]
                    });
                } else if (d.type === "rect") {
                    const c = n.get_rect(d.index);
                    c.length >= 6 && s.push({
                        relR1: c[0] - o.minRow,
                        relC1: c[1] - o.minCol,
                        relR2: c[2] - o.minRow,
                        relC2: c[3] - o.minCol,
                        color: c[4],
                        outline: c[5]
                    });
                } else if (d.type === "text") {
                    const c = n.get_text(d.index);
                    c.length >= 7 && a.push({
                        relR: c[0] - o.minRow,
                        relC: c[1] - o.minCol,
                        color: c[2],
                        size: n.get_text_size(d.index),
                        boxW: c[3],
                        boxH: c[4],
                        halign: c[5],
                        valign: c[6],
                        text: n.get_text_string(d.index)
                    });
                } else if (d.type === "image") {
                    const c = n.get_image(d.index);
                    c.length >= 4 && u.push({
                        relR1: c[0] - o.minRow,
                        relC1: c[1] - o.minCol,
                        relR2: c[2] - o.minRow,
                        relC2: c[3] - o.minCol,
                        url: n.get_image_url(d.index)
                    });
                }
                e({
                    clipboard: {
                        cells: l,
                        lines: i,
                        rects: s,
                        texts: a,
                        images: u,
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
                let u = n.get_square_count(), d = n.get_line_count(), c = n.get_rect_count(), f = n.get_text_count(), g = n.get_image_count();
                for (const h of r.cells)a.push({
                    kind: "addSquare",
                    idx: u,
                    square: {
                        r: s.row + h.relRow,
                        c: s.col + h.relCol,
                        color: h.color,
                        size: h.size ?? 1
                    }
                }), l.push({
                    type: "cell",
                    index: u
                }), u++;
                for (const h of r.lines){
                    const w = s.row + h.relR1, y = s.col + h.relC1, x = s.row + h.relR2, p = s.col + h.relC2;
                    a.push({
                        kind: "addLine",
                        idx: d,
                        line: {
                            r1: w,
                            c1: y,
                            r2: x,
                            c2: p,
                            color: h.color,
                            width: h.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: d
                    }), d++;
                }
                for (const h of r.rects){
                    const w = s.row + h.relR1, y = s.col + h.relC1, x = s.row + h.relR2, p = s.col + h.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: w,
                            c1: y,
                            r2: x,
                            c2: p,
                            fill: h.color,
                            outline: h.outline
                        }
                    }), l.push({
                        type: "rect",
                        index: c
                    }), c++;
                }
                for (const h of r.texts ?? []){
                    const w = s.row + h.relR, y = s.col + h.relC;
                    a.push({
                        kind: "addText",
                        idx: f,
                        text: {
                            r: w,
                            c: y,
                            color: h.color,
                            size: h.size,
                            boxW: h.boxW,
                            boxH: h.boxH,
                            halign: h.halign,
                            valign: h.valign,
                            text: h.text
                        }
                    }), l.push({
                        type: "text",
                        index: f
                    }), f++;
                }
                for (const h of r.images ?? [])a.push({
                    kind: "addImage",
                    idx: g,
                    image: {
                        r1: s.row + h.relR1,
                        c1: s.col + h.relC1,
                        r2: s.row + h.relR2,
                        c2: s.col + h.relC2,
                        url: h.url
                    }
                }), l.push({
                    type: "image",
                    index: g
                }), g++;
                t().commitEdits(a), n.render(), e({
                    selectedItems: l
                }), t().renderSelection(), o();
            },
            deleteSelected: ()=>{
                const { grid: n, selectedItems: r, updateOutputs: o } = t();
                if (!n || r.length === 0) return;
                const l = r.filter(Xe("cell")).map((c)=>c.index).sort((c, f)=>f - c), i = r.filter(Xe("line")).map((c)=>c.index).sort((c, f)=>f - c), s = r.filter(Xe("rect")).map((c)=>c.index).sort((c, f)=>f - c), a = r.filter(Xe("text")).map((c)=>c.index).sort((c, f)=>f - c), u = r.filter(Xe("image")).map((c)=>c.index).sort((c, f)=>f - c), d = [];
                for (const c of l)d.push({
                    kind: "deleteSquare",
                    idx: c,
                    square: ml(n, c)
                });
                for (const c of i)d.push({
                    kind: "deleteLine",
                    idx: c,
                    line: ua(n, c)
                });
                for (const c of s)d.push({
                    kind: "deleteRect",
                    idx: c,
                    rect: ca(n, c)
                });
                for (const c of a)d.push({
                    kind: "deleteText",
                    idx: c,
                    text: Ml(n, c)
                });
                for (const c of u)d.push({
                    kind: "deleteImage",
                    idx: c,
                    image: zf(n, c)
                });
                t().commitEdits(d), e({
                    selectedItems: []
                }), n.render(), o();
            }
        }), Fu = new Map;
    function wg() {
        aa(()=>Promise.resolve().then(()=>Bg), void 0).then((e)=>e.useGridStore.getState().grid?.render());
    }
    function da(e) {
        const t = Fu.get(e);
        if (t) return t;
        const n = new Image;
        return n.crossOrigin = "anonymous", n.decoding = "async", n.onload = ()=>{
            wg();
        }, n.onerror = ()=>{}, n.src = e, Fu.set(e, n), n;
    }
    function Sg(e) {
        return new Promise((t, n)=>{
            const r = da(e);
            if (r.complete && r.naturalWidth > 0) {
                t({
                    el: r,
                    width: r.naturalWidth,
                    height: r.naturalHeight
                });
                return;
            }
            r.addEventListener("load", ()=>t({
                    el: r,
                    width: r.naturalWidth,
                    height: r.naturalHeight
                }), {
                once: !0
            }), r.addEventListener("error", ()=>n(new Error(`failed to load image: ${e}`)), {
                once: !0
            });
        });
    }
    function kg(e, t) {
        if (typeof e.get_line_count != "function" || typeof e.get_rect_count != "function") return;
        const n = e.get_line_count(), r = e.get_rect_count(), o = typeof e.get_text_count == "function" ? e.get_text_count() : 0, l = typeof e.get_image_count == "function" ? e.get_image_count() : 0, i = typeof e.get_square_count == "function" ? e.get_square_count() : 0, s = (a, u, d)=>{
            if (u < 0 || u > d) throw new RangeError(`applyEdit: ${t.kind} index ${u} out of range (0..${d}) for ${a}`);
        };
        switch(t.kind){
            case "addSquare":
                s("squares", t.idx, i);
                break;
            case "deleteSquare":
            case "recolorSquare":
            case "moveSquare":
                s("squares", t.idx, i - 1);
                break;
            case "addLine":
                s("lines", t.idx, n);
                break;
            case "addRect":
                s("rects", t.idx, r);
                break;
            case "deleteLine":
            case "recolorLine":
            case "resizeLine":
            case "moveLine":
            case "setLineGeom":
                s("lines", t.idx, n - 1);
                break;
            case "deleteRect":
            case "recolorRectFill":
            case "recolorRectOutline":
            case "moveRect":
            case "setRectGeom":
                s("rects", t.idx, r - 1);
                break;
            case "addText":
                s("texts", t.idx, o);
                break;
            case "deleteText":
            case "recolorText":
            case "resizeText":
            case "alignText":
            case "setTextFrame":
            case "moveText":
                s("texts", t.idx, o - 1);
                break;
            case "addImage":
                s("images", t.idx, l);
                break;
            case "deleteImage":
            case "moveImage":
            case "setImageGeom":
                s("images", t.idx, l - 1);
                break;
        }
    }
    function Bo(e, t) {
        switch(kg(e, t), t.kind){
            case "addSquare":
                e.insert_square(t.idx, t.square.r, t.square.c, t.square.color, t.square.size);
                break;
            case "deleteSquare":
                e.delete_square(t.idx);
                break;
            case "recolorSquare":
                e.set_square_color(t.idx, t.to);
                break;
            case "moveSquare":
                e.move_square(t.idx, t.dRow, t.dCol);
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
                e.insert_text(t.idx, t.text.r, t.text.c, t.text.color, t.text.size, t.text.boxW, t.text.boxH, t.text.halign, t.text.valign, t.text.text);
                break;
            case "alignText":
                e.set_text_align(t.idx, t.to.halign, t.to.valign);
                break;
            case "setTextFrame":
                e.set_text_frame(t.idx, t.to.r, t.to.c, t.to.boxW, t.to.boxH);
                break;
            case "deleteText":
                e.delete_text(t.idx);
                break;
            case "moveImage":
                e.move_image(t.idx, t.dRow, t.dCol);
                break;
            case "setImageGeom":
                e.set_image_geom(t.idx, t.to.r1, t.to.c1, t.to.r2, t.to.c2);
                break;
            case "addImage":
                e.insert_image(t.idx, t.image.r1, t.image.c1, t.image.r2, t.image.c2, t.image.url, da(t.image.url));
                break;
            case "deleteImage":
                e.delete_image(t.idx);
                break;
            case "batch":
                e.set_render_paused?.(!0);
                try {
                    for (const n of t.edits)Bo(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function Pf(e) {
        switch(e.kind){
            case "addSquare":
                return {
                    kind: "deleteSquare",
                    idx: e.idx,
                    square: e.square
                };
            case "deleteSquare":
                return {
                    kind: "addSquare",
                    idx: e.idx,
                    square: e.square
                };
            case "recolorSquare":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "moveSquare":
                return {
                    ...e,
                    dRow: -e.dRow,
                    dCol: -e.dCol
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
            case "alignText":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "setTextFrame":
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
            case "setImageGeom":
                return {
                    ...e,
                    from: e.to,
                    to: e.from
                };
            case "moveImage":
                return {
                    ...e,
                    dRow: -e.dRow,
                    dCol: -e.dCol
                };
            case "addImage":
                return {
                    kind: "deleteImage",
                    idx: e.idx,
                    image: e.image
                };
            case "deleteImage":
                return {
                    kind: "addImage",
                    idx: e.idx,
                    image: e.image
                };
            case "batch":
                return {
                    kind: "batch",
                    edits: [
                        ...e.edits
                    ].reverse().map(Pf)
                };
        }
    }
    function bf(e, t) {
        if (e.kind !== t.kind) return null;
        switch(e.kind){
            case "recolorLine":
            case "resizeLine":
            case "recolorRectFill":
            case "recolorRectOutline":
            case "recolorText":
            case "resizeText":
            case "recolorSquare":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    to: t.to
                } : null;
            case "alignText":
                return t.kind === "alignText" && e.idx === t.idx ? {
                    ...e,
                    to: t.to
                } : null;
            case "setTextFrame":
                return t.kind === "setTextFrame" && e.idx === t.idx ? {
                    ...e,
                    to: t.to
                } : null;
            case "setLineGeom":
            case "setRectGeom":
            case "setImageGeom":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    to: t.to
                } : null;
            case "moveLine":
            case "moveRect":
            case "moveText":
            case "moveImage":
            case "moveSquare":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    dRow: e.dRow + t.dRow,
                    dCol: e.dCol + t.dCol
                } : null;
            case "batch":
                if (t.kind === "batch" && e.edits.length === t.edits.length) {
                    const n = [];
                    for(let r = 0; r < e.edits.length; r++){
                        const o = bf(e.edits[r], t.edits[r]);
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
    const _g = 100, Cg = 600;
    class Eg {
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
            this.undoStack.push(t), this.undoStack.length > _g && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (Bo(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Cg) {
                const i = this.undoStack[this.undoStack.length - 1], s = bf(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (Bo(t, Pf(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (Bo(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
            const n = (t?.undo ?? []).slice(), r = (t?.redo ?? []).slice();
            if (n.some(us) || r.some(us)) {
                this.clear();
                return;
            }
            this.undoStack = n, this.redoStack = r, this.pending = null, this.lastCoalesceKey = null;
        }
    }
    const Tg = new Set([
        "setCell",
        "setCellColor",
        "setCellState"
    ]);
    function us(e) {
        return Tg.has(String(e.kind)) ? !0 : e.kind === "batch" && e.edits.some(us);
    }
    const je = new Eg, Ig = (e, t)=>({
            commitEdits: (n, r)=>{
                const { grid: o } = t();
                !o || n.length === 0 || (je.commit(o, n.length === 1 ? n[0] : {
                    kind: "batch",
                    edits: n
                }, r), e({
                    historyTick: t().historyTick + 1
                }));
            },
            undo: ()=>{
                const { grid: n } = t();
                n && je.undoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            redo: ()=>{
                const { grid: n } = t();
                n && je.redoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            canUndo: ()=>je.canUndo(),
            canRedo: ()=>je.canRedo(),
            resetHistory: ()=>{
                je.clear(), e({
                    historyTick: t().historyTick + 1
                });
            },
            exportHistory: ()=>je.exportStacks()
        }), zg = (e, t)=>({
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
                const o = Lr(n, r);
                if (!o) return;
                const l = Ae(r, n), i = l ? [
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
                const i = Lr(n, r);
                if (!i) return null;
                const s = Ae(r, n), a = l ?? [
                    0,
                    0
                ], u = s ? [
                    s.minRow,
                    s.minCol
                ] : [
                    0,
                    0
                ], d = [
                    u[0] - a[0],
                    u[1] - a[1]
                ];
                return {
                    input: o,
                    output: i,
                    delta: d
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
                let a = l.get_square_count(), u = l.get_line_count(), d = l.get_rect_count(), c = l.get_text_count(), f = l.get_image_count();
                const g = Je / (n.sub ?? 1);
                for (const h of n.cells ?? []){
                    const [w, y, x] = h, p = h.length >= 4 ? h[3] : g === 1 ? 1 : Je;
                    i.push({
                        kind: "addSquare",
                        idx: a,
                        square: {
                            r: r + w * g,
                            c: o + y * g,
                            color: x,
                            size: p
                        }
                    }), s.push({
                        type: "cell",
                        index: a
                    }), a++;
                }
                for (const [h, w, y, x, p, m] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: u,
                    line: {
                        r1: r + h * g,
                        c1: o + w * g,
                        r2: r + y * g,
                        c2: o + x * g,
                        color: p,
                        width: m ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: u
                }), u++;
                for (const [h, w, y, x, p, m] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: d,
                    rect: {
                        r1: r + h * g,
                        c1: o + w * g,
                        r2: r + y * g,
                        c2: o + x * g,
                        fill: p,
                        outline: m
                    }
                }), s.push({
                    type: "rect",
                    index: d
                }), d++;
                for (const h of n.texts ?? []){
                    const w = yg(h);
                    w && (i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + w.r * g,
                            c: o + w.c * g,
                            color: w.color ?? 0,
                            size: w.size ?? 1,
                            boxW: (w.boxW ?? 0) * g,
                            boxH: (w.boxH ?? 0) * g,
                            halign: w.halign ?? 0,
                            valign: w.valign ?? 0,
                            text: String(w.text ?? "")
                        }
                    }), s.push({
                        type: "text",
                        index: c
                    }), c++);
                }
                for (const h of n.images ?? []){
                    if (!Array.isArray(h) || h.length < 5) continue;
                    const [w, y, x, p, m] = h;
                    typeof m == "string" && (i.push({
                        kind: "addImage",
                        idx: f,
                        image: {
                            r1: r + w * g,
                            c1: o + y * g,
                            r2: r + x * g,
                            c2: o + p * g,
                            url: m
                        }
                    }), s.push({
                        type: "image",
                        index: f
                    }), f++);
                }
                i.length !== 0 && (t().commitEdits(i), l.render(), e({
                    selectedItems: s
                }), t().renderSelection(), t().updateOutputs());
            },
            serializeWholeGrid: ()=>{
                const { grid: n } = t();
                return n ? Lr(n, jf(n), {
                    absolute: !0
                }) : null;
            },
            loadDesign: (n)=>{
                const { grid: r } = t();
                r && (t().clear(), t().placeDesign(n, 0, 0), e({
                    selectedItems: []
                }), t().renderSelection());
            },
            loadDesignWithHistory: (n, r)=>{
                const { grid: o } = t();
                o && (t().loadDesign(n), r && ((r.undo?.length ?? 0) > 0 || (r.redo?.length ?? 0) > 0) ? je.importStacks(r) : je.clear(), e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection());
            },
            updateOutputs: ()=>{
                const { grid: n, selectedItems: r } = t(), o = r.filter(Xe("cell"));
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
                ], i = o.map((m)=>ml(n, m.index));
                let s = 1 / 0, a = 1 / 0, u = -1 / 0, d = -1 / 0;
                for (const m of i)s = Math.min(s, m.r), a = Math.min(a, m.c), u = Math.max(u, m.r + m.size - 1), d = Math.max(d, m.c + m.size - 1);
                const c = i.map((m)=>({
                        row: m.r - s,
                        col: m.c - a,
                        size: m.size,
                        color: l[m.color] ?? "#000000"
                    }));
                c.sort((m, S)=>m.row - S.row || m.col - S.col);
                const f = i.every((m)=>m.size === i[0].size && (m.r - s) % m.size === 0 && (m.c - a) % m.size === 0) ? i[0].size : 1, g = Math.ceil((u - s + 1) / f), h = Math.ceil((d - a + 1) / f), w = [], y = [];
                for (const m of c)m.color === "#000000" && (w.push(m.row / f), y.push(m.col / f));
                const x = w.map(()=>"1.0").join(", "), p = `import torch

indices = torch.tensor([[${w.join(", ")}], [${y.join(", ")}]])
values = torch.tensor([${x}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${g}, ${h}))
sparse = sparse.coalesce()`;
                e({
                    jsonOutput: JSON.stringify(c, null, 2),
                    tensorOutput: p
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
                        const d = u.row, c = u.col, f = u.color;
                        if (typeof d != "number" || typeof c != "number") continue;
                        const g = l[f] ?? 0, h = typeof u.size == "number" && u.size >= 1 ? u.size : 1, w = r.add_square(o.row + d, o.col + c, g, h);
                        s.push({
                            type: "cell",
                            index: w
                        });
                    }
                    else {
                        const u = Je / t().subdivision;
                        for(let d = 0; d < i.length; d++){
                            const c = i[d];
                            if (Array.isArray(c)) for(let f = 0; f < c.length; f++){
                                const g = c[f];
                                if (g && typeof g == "object" && g.color) {
                                    const h = l[g.color] ?? 0, w = r.add_square(o.row + d * u, o.col + f * u, h, u);
                                    s.push({
                                        type: "cell",
                                        index: w
                                    });
                                }
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
                    const s = [], a = Je / t().subdivision;
                    for(let u = 0; u < i.length; u++){
                        const d = i[u];
                        if (Array.isArray(d)) {
                            for(let c = 0; c < d.length; c++)if (Number(d[c]) > .5) {
                                const g = r.add_square(o.row + u * a, o.col + c * a, 0, a);
                                s.push({
                                    type: "cell",
                                    index: g
                                });
                            }
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
                for(let l = n.get_image_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteImage",
                    idx: l,
                    image: zf(n, l)
                });
                for(let l = n.get_text_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteText",
                    idx: l,
                    text: Ml(n, l)
                });
                for(let l = n.get_rect_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteRect",
                    idx: l,
                    rect: ca(n, l)
                });
                for(let l = n.get_line_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteLine",
                    idx: l,
                    line: ua(n, l)
                });
                for(let l = n.get_square_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteSquare",
                    idx: l,
                    square: ml(n, l)
                });
                t().commitEdits(o), e({
                    selectedItems: []
                }), r();
            }
        }), Ng = (e, t)=>({
            setSelectedItems: (n)=>{
                e({
                    selectedItems: n
                }), t().renderSelection(), setTimeout(()=>t().updateOutputs(), 0);
            },
            selectAll: ()=>{
                const { grid: n } = t();
                if (!n) return;
                t().textEdit && t().commitTextEdit();
                const r = jf(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = fg(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = pg(n, r);
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
                    for (const i of l)fi(r, i);
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
                const i = Math.min(o.row, n.row), s = Math.max(o.row, n.row), a = Math.min(o.col, n.col), u = Math.max(o.col, n.col), d = [];
                for (const y of r.squares_in_box(i, a, s, u))d.push({
                    type: "cell",
                    index: y
                });
                const c = r.get_line_count();
                for(let y = 0; y < c; y++)r.line_intersects_box(y, i, a, s, u) && d.push({
                    type: "line",
                    index: y
                });
                const f = r.get_rect_count();
                for(let y = 0; y < f; y++)r.rect_intersects_box(y, i, a, s, u) && d.push({
                    type: "rect",
                    index: y
                });
                const g = r.get_text_count();
                for(let y = 0; y < g; y++)r.text_intersects_box(y, i, a, s, u) && d.push({
                    type: "text",
                    index: y
                });
                const h = r.get_image_count();
                for(let y = 0; y < h; y++)r.image_intersects_box(y, i, a, s, u) && d.push({
                    type: "image",
                    index: y
                });
                const w = [
                    ...l
                ];
                for (const y of d)Er(y, w) || w.push(y);
                e({
                    selectedItems: w,
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
                const { deltaRow: a, deltaCol: u } = Ou(r, l, n.row - o.row, n.col - o.col, t().subdivision);
                if (a !== 0 || u !== 0) {
                    const d = [], c = [], f = l.filter(Xe("cell"));
                    for (const k of f)c.push({
                        kind: "moveSquare",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "cell",
                        index: k.index
                    });
                    const g = [], h = l.filter(Xe("line"));
                    for (const k of h)g.push({
                        kind: "moveLine",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "line",
                        index: k.index
                    });
                    const w = [], y = l.filter(Xe("rect"));
                    for (const k of y)w.push({
                        kind: "moveRect",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "rect",
                        index: k.index
                    });
                    const x = [], p = l.filter(Xe("text"));
                    for (const k of p)x.push({
                        kind: "moveText",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "text",
                        index: k.index
                    });
                    const m = [], S = l.filter(Xe("image"));
                    for (const k of S)m.push({
                        kind: "moveImage",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "image",
                        index: k.index
                    });
                    t().commitEdits([
                        ...c,
                        ...g,
                        ...w,
                        ...x,
                        ...m
                    ]), e({
                        selectedItems: d,
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
            pressSelectAt: ({ x: n, y: r, row: o, col: l, shift: i, zoom: s })=>{
                const { grid: a, selectedItems: u } = t();
                if (!a) return;
                t().textEdit && t().commitTextEdit();
                const d = a.get_cell_size();
                if (u.length > 0 && !i) {
                    const h = Ae(u, a);
                    if (h) {
                        const w = di(h), y = 10 / s;
                        if (Math.hypot(n - w.c * d, r - w.r * d) <= y) {
                            t().startRotate(n, r);
                            return;
                        }
                    }
                }
                if (u.length === 1 && !i) {
                    const h = u[0];
                    if (h.type !== "cell") {
                        const w = Lu(a, h, n, r, d, s);
                        if (w) {
                            t().startResize({
                                shape: h.type,
                                index: h.index,
                                handle: w.handle
                            });
                            return;
                        }
                    }
                }
                const c = Ae(u, a), f = c != null && o >= c.minRow && o <= c.maxRow && l >= c.minCol && l <= c.maxCol, g = t().hitTestShapes(n, r);
                g && !i && Er(g, u) && u.length > 1 ? (t().startDragSelection({
                    row: o,
                    col: l
                }), t().renderSelection()) : f && u.length > 0 && !i && !g ? (t().startDragSelection({
                    row: o,
                    col: l
                }, !0), t().renderSelection()) : g ? i && !Er(g, u) ? t().addItemToSelection(g) : i ? t().removeItemFromSelection(g) : (t().setSelectedItems([
                    g
                ]), t().startDragSelection({
                    row: o,
                    col: l
                }), a.render(), fi(a, g)) : t().startBoxSelection({
                    row: o,
                    col: l
                }, i);
            },
            hoverAffordanceAt: ({ x: n, y: r, row: o, col: l, zoom: i })=>{
                const { grid: s, selectedItems: a } = t();
                if (!s || a.length === 0) return "none";
                const u = s.get_cell_size(), d = Ae(a, s);
                if (d) {
                    const g = di(d);
                    if (Math.hypot(n - g.c * u, r - g.r * u) <= 10 / i) return "rotate";
                }
                if (a.length === 1) {
                    const g = a[0];
                    if (g.type !== "cell" && Lu(s, g, n, r, u, i)) return "resize";
                }
                const c = t().hitTestShapes(n, r), f = d != null && o >= d.minRow && o <= d.maxRow && l >= d.minCol && l <= d.maxCol;
                return c != null && Er(c, a) || f ? "move" : "none";
            },
            renderDragPreview: (n)=>{
                const { grid: r, selectDragStart: o, selectedItems: l, subdivision: i } = t();
                if (!r || !o || l.length === 0) return;
                const { deltaRow: s, deltaCol: a } = Ou(r, l, n.row - o.row, n.col - o.col, i);
                r.render();
                for (const u of l)if (u.type === "cell") {
                    const d = ml(r, u.index);
                    r.preview_square(d.r + s, d.c + a, d.size, d.color);
                } else if (u.type === "line") {
                    const d = ua(r, u.index);
                    r.preview_line(d.r1 + s, d.c1 + a, d.r2 + s, d.c2 + a, d.color, d.width);
                } else if (u.type === "rect") {
                    const d = ca(r, u.index);
                    r.preview_rect(d.r1 + s, d.c1 + a, d.r2 + s, d.c2 + a, d.fill, d.outline);
                } else if (u.type === "text") {
                    const d = Ml(r, u.index);
                    r.preview_text(d.r + s, d.c + a, d.color, d.size, d.boxW, d.boxH, d.halign, d.valign, d.text);
                }
            },
            doubleClickAt: ({ x: n, y: r })=>{
                const o = t().hitTestShapes(n, r);
                o?.type === "text" && t().beginTextEditAt(o.index);
            },
            setMousePos: (n)=>e({
                    mousePos: n
                }),
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
                const a = o.hit_test_image(n, r);
                if (a >= 0) return {
                    type: "image",
                    index: a
                };
                const u = o.get_cell_size(), d = Math.floor(n / u), c = Math.floor(r / u), f = o.square_at(c, d);
                return f >= 0 ? {
                    type: "cell",
                    index: f
                } : null;
            },
            renderSelection: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (n) {
                    n.render();
                    for (const o of r)fi(n, o);
                    if (r.length === 1) {
                        const o = r[0];
                        if (o.type === "line") {
                            const l = Cf(n.get_line(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "rect") {
                            const l = Kn(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "text") {
                            const l = Kn(Rf(n.get_text(o.index)));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "image") {
                            const l = Kn(n.get_image(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = Ae(r, n);
                        if (o) {
                            const l = di(o);
                            n.draw_rotate_handle(l.r, l.c, o.minRow, l.c);
                        }
                    }
                }
            },
            getSelectedCells: ()=>{
                const { grid: n, selectedItems: r } = t();
                return n ? r.filter(Xe("cell")).map((o)=>{
                    const l = n.get_square(o.index);
                    return {
                        row: l[0],
                        col: l[1]
                    };
                }) : [];
            }
        }), Rg = (e, t)=>{
        const n = ()=>{
            const { grid: r, colorIdx: o, outlineIdx: l } = t();
            r && (r.set_draw_color(o), r.set_outline_color(l));
        };
        return {
            setGrid: (r)=>{
                e({
                    grid: r
                }), n();
            },
            setGridSize: (r)=>e({
                    gridSize: r
                }),
            setCurrentName: (r)=>e({
                    currentName: r
                }),
            setSaveState: (r, o = "")=>e({
                    saveState: r,
                    saveMessage: o
                }),
            setTool: (r)=>{
                t().textEdit && t().commitTextEdit();
                const o = t().toolStyles[r];
                e({
                    tool: r,
                    colorIdx: o.colorIdx,
                    outlineIdx: o.outlineIdx
                }), n();
            },
            setColorIdx: (r)=>{
                e((o)=>({
                        colorIdx: r,
                        toolStyles: {
                            ...o.toolStyles,
                            [o.tool]: {
                                ...o.toolStyles[o.tool],
                                colorIdx: r
                            }
                        }
                    })), n();
            },
            setOutlineIdx: (r)=>{
                e((o)=>({
                        outlineIdx: r,
                        toolStyles: {
                            ...o.toolStyles,
                            [o.tool]: {
                                ...o.toolStyles[o.tool],
                                outlineIdx: r
                            }
                        }
                    })), n();
            },
            pickColor: (r)=>{
                e((s)=>({
                        colorIdx: r,
                        toolStyles: {
                            ...s.toolStyles,
                            [s.tool]: {
                                ...s.toolStyles[s.tool],
                                colorIdx: r
                            }
                        }
                    })), n();
                const { grid: o, selectedItems: l } = t();
                if (!o || l.length === 0) return;
                const i = [];
                for (const s of l)s.type === "cell" ? i.push({
                    kind: "recolorSquare",
                    idx: s.index,
                    from: o.get_square(s.index)[2],
                    to: r
                }) : s.type === "line" ? i.push({
                    kind: "recolorLine",
                    idx: s.index,
                    from: o.get_line(s.index)[4],
                    to: r
                }) : s.type === "rect" ? i.push({
                    kind: "recolorRectFill",
                    idx: s.index,
                    from: o.get_rect(s.index)[4],
                    to: r
                }) : s.type === "text" && i.push({
                    kind: "recolorText",
                    idx: s.index,
                    from: o.get_text(s.index)[2],
                    to: r
                });
                t().commitEdits(i, {
                    coalesceKey: `fill:${gr(l)}`
                }), t().renderSelection(), t().updateOutputs();
            },
            pickOutline: (r)=>{
                e((s)=>({
                        outlineIdx: r,
                        toolStyles: {
                            ...s.toolStyles,
                            [s.tool]: {
                                ...s.toolStyles[s.tool],
                                outlineIdx: r
                            }
                        }
                    })), n();
                const { grid: o, selectedItems: l } = t();
                if (!o || l.length === 0) return;
                const i = [];
                for (const s of l)s.type === "rect" && i.push({
                    kind: "recolorRectOutline",
                    idx: s.index,
                    from: o.get_rect(s.index)[5],
                    to: r
                });
                t().commitEdits(i, {
                    coalesceKey: `outline:${gr(l)}`
                }), t().renderSelection(), t().updateOutputs();
            },
            startDrawing: (r)=>e({
                    isDrawing: !0,
                    drawMode: r
                }),
            stopDrawing: ()=>e({
                    isDrawing: !1
                }),
            startLine: (r)=>{
                e({
                    lineStart: r,
                    isDrawing: !0
                }), t().grid?.render_with_line(r.row, r.col, r.row, r.col);
            },
            finishLine: ()=>e({
                    lineStart: null,
                    isDrawing: !1
                }),
            startRect: (r)=>{
                e({
                    rectStart: r,
                    isDrawing: !0
                }), t().grid?.render_with_rect(r.row, r.col, r.row, r.col);
            },
            finishRect: ()=>e({
                    rectStart: null,
                    isDrawing: !1
                }),
            renderLinePreview: (r)=>{
                const { grid: o, lineStart: l } = t();
                !o || !l || o.render_with_line(l.row, l.col, r.row, r.col);
            },
            renderRectPreview: (r)=>{
                const { grid: o, rectStart: l } = t();
                !o || !l || o.render_with_rect(l.row, l.col, r.row, r.col);
            },
            cancelLine: ()=>{
                t().grid?.render(), t().finishLine();
            },
            cancelRect: ()=>{
                t().grid?.render(), t().finishRect();
            },
            setTextSize: (r)=>e({
                    textSize: r
                }),
            pickTextSize: (r)=>{
                e({
                    textSize: r
                });
                const { grid: o, selectedItems: l, textEdit: i } = t();
                if (i) {
                    e({
                        textEdit: {
                            ...i,
                            size: r
                        }
                    });
                    return;
                }
                if (!o || l.length === 0) return;
                const s = [];
                for (const a of l)a.type === "text" && s.push({
                    kind: "resizeText",
                    idx: a.index,
                    from: o.get_text_size(a.index),
                    to: r
                });
                s.length !== 0 && (t().commitEdits(s, {
                    coalesceKey: `size:${gr(l)}`
                }), t().renderSelection());
            },
            setLineWidth: (r)=>e({
                    lineWidth: r
                }),
            pickLineWidth: (r)=>{
                e({
                    lineWidth: r
                });
                const { grid: o, selectedItems: l } = t();
                if (!o || (o.set_draw_line_width(Uo(r)), l.length === 0)) return;
                const i = Uo(r), s = [];
                for (const a of l)a.type === "line" && s.push({
                    kind: "resizeLine",
                    idx: a.index,
                    from: o.get_line(a.index)[5],
                    to: i
                });
                s.length !== 0 && (t().commitEdits(s, {
                    coalesceKey: `lineWidth:${gr(l)}`
                }), t().renderSelection());
            },
            pickTextAlign: (r, o)=>{
                const { grid: l, selectedItems: i, textEdit: s } = t();
                if (s) {
                    e({
                        textEdit: {
                            ...s,
                            halign: r ?? s.halign,
                            valign: o ?? s.valign
                        }
                    });
                    return;
                }
                if (!l || i.length === 0) return;
                const a = [];
                for (const u of i)if (u.type === "text") {
                    const d = l.get_text(u.index);
                    a.push({
                        kind: "alignText",
                        idx: u.index,
                        from: {
                            halign: d[5],
                            valign: d[6]
                        },
                        to: {
                            halign: r ?? d[5],
                            valign: o ?? d[6]
                        }
                    });
                }
                a.length !== 0 && (t().commitEdits(a, {
                    coalesceKey: `align:${gr(i)}`
                }), t().renderSelection());
            },
            setSubdivision: (r)=>{
                const o = Cr.includes(r) ? r : 1;
                e({
                    subdivision: o
                });
                const { grid: l } = t();
                l?.set_subdivision(o);
            },
            cycleSubdivision: ()=>{
                const r = t().subdivision, o = Cr[(Cr.indexOf(r) + 1) % Cr.length];
                t().setSubdivision(o);
            },
            beginTextEdit: (r)=>{
                t().textEdit && t().commitTextEdit();
                const { textSize: o } = t();
                e({
                    textEdit: {
                        row: r.row,
                        col: r.col,
                        size: o,
                        text: "",
                        halign: 0,
                        valign: 0
                    },
                    selectedItems: []
                });
            },
            beginTextEditAt: (r)=>{
                const { grid: o } = t();
                if (!o) return;
                t().textEdit && t().commitTextEdit();
                const l = Ml(o, r);
                je.beginBatch(), t().commitEdits([
                    {
                        kind: "deleteText",
                        idx: r,
                        text: l
                    }
                ]), e({
                    textEdit: {
                        row: l.r,
                        col: l.c,
                        size: l.size,
                        text: l.text,
                        halign: l.halign,
                        valign: l.valign,
                        editing: {
                            idx: r,
                            original: l
                        }
                    },
                    selectedItems: []
                });
            },
            setTextEditText: (r)=>{
                const { textEdit: o } = t();
                o && e({
                    textEdit: {
                        ...o,
                        text: r
                    }
                });
            },
            commitTextEdit: ()=>{
                const { grid: r, textEdit: o, colorIdx: l } = t();
                if (e({
                    textEdit: null
                }), !r || !o || o.text.length === 0) {
                    o?.editing && je.endBatch(), r?.render();
                    return;
                }
                if (o.editing) {
                    const { idx: i, original: s } = o.editing;
                    t().commitEdits([
                        {
                            kind: "addText",
                            idx: i,
                            text: {
                                ...s,
                                boxW: 0,
                                boxH: 0,
                                size: o.size,
                                halign: o.halign,
                                valign: o.valign,
                                text: o.text
                            }
                        }
                    ]), je.endBatch();
                } else t().commitEdits([
                    {
                        kind: "addText",
                        idx: r.get_text_count(),
                        text: {
                            r: o.row,
                            c: o.col,
                            color: l,
                            size: o.size,
                            boxW: 0,
                            boxH: 0,
                            halign: o.halign,
                            valign: o.valign,
                            text: o.text
                        }
                    }
                ]);
                r.render();
            },
            cancelTextEdit: ()=>{
                const { grid: r, textEdit: o } = t();
                e({
                    textEdit: null
                }), r && o?.editing && (t().commitEdits([
                    {
                        kind: "addText",
                        idx: o.editing.idx,
                        text: o.editing.original
                    }
                ]), je.cancelBatch()), r?.render();
            },
            pressDrawAt: (r)=>{
                const { grid: o, colorIdx: l } = t();
                if (!o) return;
                const i = l === 6 ? !1 : !o.get_cell(r.row, r.col);
                t().startDrawing(i), t().beginDrawStroke(), t().drawCellAt(r.row, r.col, i), t().updateOutputs();
            },
            dragDrawAt: (r)=>{
                const { isDrawing: o, drawMode: l } = t();
                o && (t().drawCellAt(r.row, r.col, l), t().updateOutputs());
            },
            beginDrawStroke: ()=>{
                je.beginBatch();
            },
            drawCellAt: (r, o, l)=>{
                const { grid: i, colorIdx: s, subdivision: a } = t();
                if (!i) return;
                const u = Je / a;
                if (l && s < 6) {
                    const d = i.squares_in_box(r, o, r + u - 1, o + u - 1);
                    for(let c = d.length - 1; c >= 0; c--){
                        const f = i.get_square(d[c]);
                        if (f[0] === r && f[1] === o && f[3] === u) {
                            f[2] !== s && t().commitEdits([
                                {
                                    kind: "recolorSquare",
                                    idx: d[c],
                                    from: f[2],
                                    to: s
                                }
                            ]);
                            return;
                        }
                    }
                    t().commitEdits([
                        {
                            kind: "addSquare",
                            idx: i.get_square_count(),
                            square: {
                                r,
                                c: o,
                                color: s,
                                size: u
                            }
                        }
                    ]);
                } else {
                    const d = i.squares_in_box(r, o, r + u - 1, o + u - 1), c = [];
                    for(let f = d.length - 1; f >= 0; f--){
                        const g = d[f], h = i.get_square(g);
                        c.push({
                            kind: "deleteSquare",
                            idx: g,
                            square: {
                                r: h[0],
                                c: h[1],
                                color: h[2],
                                size: h[3]
                            }
                        });
                    }
                    c.length > 0 && t().commitEdits(c);
                }
            },
            endDrawStroke: ()=>{
                je.endBatch(), e({
                    historyTick: t().historyTick + 1
                }), t().updateOutputs();
            },
            commitLine: (r, o, l, i)=>{
                const { grid: s, colorIdx: a, lineWidth: u } = t();
                s && (t().commitEdits([
                    {
                        kind: "addLine",
                        idx: s.get_line_count(),
                        line: {
                            r1: r,
                            c1: o,
                            r2: l,
                            c2: i,
                            color: a,
                            width: Uo(u)
                        }
                    }
                ]), t().updateOutputs());
            },
            commitRect: (r, o, l, i)=>{
                const { grid: s, colorIdx: a, outlineIdx: u } = t();
                s && (t().commitEdits([
                    {
                        kind: "addRect",
                        idx: s.get_rect_count(),
                        rect: {
                            r1: r,
                            c1: o,
                            r2: l,
                            c2: i,
                            fill: a,
                            outline: u
                        }
                    }
                ]), t().updateOutputs());
            },
            placeImage: (r, o)=>{
                const { grid: l } = t();
                if (!l) return;
                t().textEdit && t().commitTextEdit();
                const i = l.get_image_count();
                t().commitEdits([
                    {
                        kind: "addImage",
                        idx: i,
                        image: {
                            r1: o.r1,
                            c1: o.c1,
                            r2: o.r2,
                            c2: o.c2,
                            url: r
                        }
                    }
                ]), e({
                    tool: "select",
                    selectedItems: [
                        {
                            type: "image",
                            index: i
                        }
                    ]
                }), l.render(), t().renderSelection(), t().updateOutputs();
            }
        };
    }, jg = (e, t)=>({
            startResize: (n)=>{
                const { grid: r } = t(), o = r ? n.shape === "line" ? ju(r, n.index) : n.shape === "rect" ? Pu(r, n.index) : n.shape === "image" ? Mu(r, n.index) : bu(r, n.index) : null;
                e({
                    selectMode: "resize",
                    resizeTarget: n,
                    resizeOrigin: o,
                    isSelecting: !0
                });
            },
            updateResize: (n)=>{
                const { grid: r, resizeTarget: o } = t();
                !r || !o || (o.shape === "line" ? r.set_line_endpoint(o.index, o.handle, n.row, n.col) : o.shape === "rect" ? r.resize_rect(o.index, o.handle, n.row, n.col) : o.shape === "image" ? r.resize_image(o.index, o.handle, n.row, n.col) : r.resize_text(o.index, o.handle, n.row, n.col), t().renderSelection());
            },
            finishResize: (n)=>{
                const { grid: r, resizeTarget: o, resizeOrigin: l } = t();
                r && o && (o.shape === "line" ? (r.set_line_endpoint(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setLineGeom",
                        idx: o.index,
                        from: l,
                        to: ju(r, o.index)
                    }
                ])) : o.shape === "rect" ? (r.resize_rect(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Pu(r, o.index)
                    }
                ])) : o.shape === "image" ? (r.resize_image(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setImageGeom",
                        idx: o.index,
                        from: l,
                        to: Mu(r, o.index)
                    }
                ])) : (r.resize_text(o.index, o.handle, n.row, n.col), l && "boxW" in l && t().commitEdits([
                    {
                        kind: "setTextFrame",
                        idx: o.index,
                        from: l,
                        to: bu(r, o.index)
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
                if (n && r && o) if ("boxW" in o) {
                    const l = o;
                    n.set_text_frame(r.index, l.r, l.c, l.boxW, l.boxH);
                } else if (r.shape === "image") {
                    const l = o;
                    n.set_image_geom(r.index, l.r1, l.c1, l.r2, l.c2);
                } else {
                    const l = o;
                    r.shape === "line" ? n.set_line(r.index, l.r1, l.c1, l.r2, l.c2) : n.set_rect(r.index, l.r1, l.c1, l.r2, l.c2);
                }
                e({
                    selectMode: null,
                    resizeTarget: null,
                    resizeOrigin: null,
                    isSelecting: !1
                }), t().renderSelection();
            },
            startRotate: (n, r)=>{
                const { grid: o, selectedItems: l } = t();
                if (!o) return;
                const i = Ae(l, o);
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
                const { cx: s, cy: a, startAngle: u } = i, d = Du(Math.atan2(r - a, n - s) - u);
                if (o.render(), d === 0) {
                    t().renderSelection();
                    return;
                }
                const c = Ae(l, o);
                if (!c) return;
                const f = Math.round((c.minRow + c.maxRow) / 2), g = Math.round((c.minCol + c.maxCol) / 2);
                for (const h of l)if (h.type === "cell") {
                    const w = o.get_square(h.index);
                    if (w.length < 4) continue;
                    const y = Au(w[0], w[1], w[3], d, f, g);
                    o.preview_square(y.r, y.c, w[3], w[2]);
                } else if (h.type === "line") {
                    const w = o.get_line(h.index);
                    if (w.length >= 6) {
                        const y = wt(w[0], w[1], d, f, g), x = wt(w[2], w[3], d, f, g);
                        o.preview_line(y.r, y.c, x.r, x.c, w[4], w[5]);
                    }
                } else if (h.type === "rect") {
                    const w = o.get_rect(h.index);
                    if (w.length >= 6) {
                        const y = wt(w[0], w[1], d, f, g), x = wt(w[2], w[3], d, f, g);
                        o.preview_rect(y.r, y.c, x.r, x.c, w[4], w[5]);
                    }
                } else if (h.type === "text") {
                    const w = o.get_text(h.index);
                    if (w.length >= 7) {
                        const y = wt(w[0], w[1], d, f, g);
                        o.preview_text(y.r, y.c, w[2], o.get_text_size(h.index), w[3], w[4], w[5], w[6], o.get_text_string(h.index));
                    }
                } else if (h.type === "image") {
                    const w = o.get_image(h.index);
                    if (w.length >= 4) {
                        const y = wt(w[0], w[1], d, f, g);
                        o.preview_image(y.r, y.c, y.r + (w[2] - w[0]), y.c + (w[3] - w[1]), da(o.get_image_url(h.index)));
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
                const { cx: s, cy: a, startAngle: u } = i, d = Du(Math.atan2(r - a, n - s) - u), c = Ae(l, o);
                if (d === 0 || !c) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const f = Math.round((c.minRow + c.maxRow) / 2), g = Math.round((c.minCol + c.maxCol) / 2), h = (x, p)=>wt(x, p, d, f, g), w = [], y = [];
                for (const x of l)if (x.type === "cell") {
                    const p = o.get_square(x.index);
                    if (p.length < 4) continue;
                    const m = Au(p[0], p[1], p[3], d, f, g);
                    w.push({
                        kind: "moveSquare",
                        idx: x.index,
                        dRow: m.r - p[0],
                        dCol: m.c - p[1]
                    }), y.push({
                        type: "cell",
                        index: x.index
                    });
                } else if (x.type === "line") {
                    const p = o.get_line(x.index);
                    if (p.length < 5) continue;
                    const m = h(p[0], p[1]), S = h(p[2], p[3]);
                    w.push({
                        kind: "setLineGeom",
                        idx: x.index,
                        from: {
                            r1: p[0],
                            c1: p[1],
                            r2: p[2],
                            c2: p[3]
                        },
                        to: {
                            r1: m.r,
                            c1: m.c,
                            r2: S.r,
                            c2: S.c
                        }
                    }), y.push({
                        type: "line",
                        index: x.index
                    });
                } else if (x.type === "rect") {
                    const p = o.get_rect(x.index);
                    if (p.length < 6) continue;
                    const m = h(p[0], p[1]), S = h(p[2], p[3]);
                    w.push({
                        kind: "setRectGeom",
                        idx: x.index,
                        from: {
                            r1: p[0],
                            c1: p[1],
                            r2: p[2],
                            c2: p[3]
                        },
                        to: {
                            r1: m.r,
                            c1: m.c,
                            r2: S.r,
                            c2: S.c
                        }
                    }), y.push({
                        type: "rect",
                        index: x.index
                    });
                } else if (x.type === "text") {
                    const p = o.get_text(x.index);
                    if (p.length < 3) continue;
                    const m = h(p[0], p[1]);
                    w.push({
                        kind: "moveText",
                        idx: x.index,
                        dRow: m.r - p[0],
                        dCol: m.c - p[1]
                    }), y.push({
                        type: "text",
                        index: x.index
                    });
                } else if (x.type === "image") {
                    const p = o.get_image(x.index);
                    if (p.length < 4) continue;
                    const m = h(p[0], p[1]);
                    w.push({
                        kind: "moveImage",
                        idx: x.index,
                        dRow: m.r - p[0],
                        dCol: m.c - p[1]
                    }), y.push({
                        type: "image",
                        index: x.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits(w), e({
                    selectedItems: y
                }), t().renderSelection(), t().updateOutputs();
            },
            cancelRotate: ()=>{
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().renderSelection();
            }
        }), Pg = {
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
        subdivision: 1,
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
        saveMessage: ""
    }, U = _f()((...e)=>({
            ...Pg,
            ...Ig(...e),
            ...Rg(...e),
            ...Ng(...e),
            ...jg(...e),
            ...vg(...e),
            ...zg(...e)
        })), bg = ()=>U((e)=>e.grid), Mg = ()=>U((e)=>e.tool), Lg = ()=>U((e)=>e.colorIdx), Og = ()=>U((e)=>e.outlineIdx), Dg = ()=>U((e)=>e.selectedItems), Ag = ()=>U((e)=>e.clipboard), Fg = ()=>U((e)=>e.jsonOutput), $g = ()=>U((e)=>e.tensorOutput), Ug = ()=>U((e)=>e.selectMode), Bg = Object.freeze(Object.defineProperty({
        __proto__: null,
        CELL_UNITS: Je,
        LINE_WIDTHS: Tf,
        SUBDIVISIONS: Cr,
        TEXT_SIZES: Ef,
        getSelectionBoundsAll: Ae,
        serializeSelection: Lr,
        tenthsToWidth: If,
        useClipboard: Ag,
        useColorIdx: Lg,
        useGrid: bg,
        useGridStore: U,
        useJsonOutput: Fg,
        useOutlineIdx: Og,
        useSelectMode: Ug,
        useSelectedItems: Dg,
        useTensorOutput: $g,
        useTool: Mg,
        widthToTenths: Uo
    }, Symbol.toStringTag, {
        value: "Module"
    })), $u = 9;
    function Wg() {
        const e = import.meta;
        if (!("env" in e)) return !1;
        const t = e.env;
        return typeof t == "object" && t !== null && "DEV" in t && t.DEV === !0;
    }
    function Vg(e) {
        const t = e.get_schema_version?.();
        (t !== $u || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${$u}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function Gg(e, t, n) {
        const [r, o] = C.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = C.useRef(!1);
        return C.useEffect(()=>{
            if (l.current) return;
            const i = e.current;
            i && (l.current = !0, (async ()=>{
                try {
                    const s = await aa(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    if (Vg(a), U.getState().setGrid(a), Wg()) {
                        const u = window;
                        u.__gridForTest = a;
                    }
                    o({
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
    function Mf(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Mf(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Lf() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Mf(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Uu = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Bu = Lf, Of = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Bu(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const d = n?.[u], c = l?.[u];
                if (d === null) return null;
                const f = Uu(d) || Uu(c);
                return o[u][f];
            }), s = n && Object.entries(n).reduce((u, d)=>{
                let [c, f] = d;
                return f === void 0 || (u[c] = f), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d)=>{
                let { class: c, className: f, ...g } = d;
                return Object.entries(g).every((h)=>{
                    let [w, y] = h;
                    return Array.isArray(y) ? y.includes({
                        ...l,
                        ...s
                    }[w]) : {
                        ...l,
                        ...s
                    }[w] === y;
                }) ? [
                    ...u,
                    c,
                    f
                ] : u;
            }, []);
            return Bu(e, i, a, n?.class, n?.className);
        };
    function Wu(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Df(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Wu(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Wu(e[o], null);
                }
            };
        };
    }
    function cs(...e) {
        return C.useCallback(Df(...e), e);
    }
    function hl(e) {
        const t = Kg(e), n = C.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = C.Children.toArray(l), a = s.find(qg);
            if (a) {
                const u = a.props.children, d = s.map((c)=>c === a ? C.Children.count(u) > 1 ? C.Children.only(null) : C.isValidElement(u) ? u.props.children : null : c);
                return v.jsx(t, {
                    ...i,
                    ref: o,
                    children: C.isValidElement(u) ? C.cloneElement(u, void 0, d) : null
                });
            }
            return v.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var Hg = hl("Slot");
    function Kg(e) {
        const t = C.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (C.isValidElement(o)) {
                const i = Xg(o), s = Yg(l, o.props);
                return o.type !== C.Fragment && (s.ref = r ? Df(r, i) : i), C.cloneElement(o, s);
            }
            return C.Children.count(o) > 1 ? C.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var Qg = Symbol("radix.slottable");
    function qg(e) {
        return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Qg;
    }
    function Yg(e, t) {
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
    function Xg(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var Zg = [
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
    ], Jr = Zg.reduce((e, t)=>{
        const n = hl(`Primitive.${t}`), r = C.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, a = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), v.jsx(a, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function fa(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = C.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (c)=>{
                const { scope: f, children: g, ...h } = c, w = f?.[e]?.[a] || s, y = C.useMemo(()=>h, Object.values(h));
                return v.jsx(w.Provider, {
                    value: y,
                    children: g
                });
            };
            u.displayName = l + "Provider";
            function d(c, f) {
                const g = f?.[e]?.[a] || s, h = C.useContext(g);
                if (h) return h;
                if (i !== void 0) return i;
                throw new Error(`\`${c}\` must be used within \`${l}\``);
            }
            return [
                u,
                d
            ];
        }
        const o = ()=>{
            const l = n.map((i)=>C.createContext(i));
            return function(s) {
                const a = s?.[e] || l;
                return C.useMemo(()=>({
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
            Jg(o, ...t)
        ];
    }
    function Jg(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: a, scopeName: u })=>{
                    const c = a(l)[`__scope${u}`];
                    return {
                        ...s,
                        ...c
                    };
                }, {});
                return C.useMemo(()=>({
                        [`__scope${t.scopeName}`]: i
                    }), [
                    i
                ]);
            };
        };
        return n.scopeName = t.scopeName, n;
    }
    function ex(e) {
        const t = e + "CollectionProvider", [n, r] = fa(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (w)=>{
            const { scope: y, children: x } = w, p = ne.useRef(null), m = ne.useRef(new Map).current;
            return v.jsx(o, {
                scope: y,
                itemMap: m,
                collectionRef: p,
                children: x
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = hl(s), u = ne.forwardRef((w, y)=>{
            const { scope: x, children: p } = w, m = l(s, x), S = cs(y, m.collectionRef);
            return v.jsx(a, {
                ref: S,
                children: p
            });
        });
        u.displayName = s;
        const d = e + "CollectionItemSlot", c = "data-radix-collection-item", f = hl(d), g = ne.forwardRef((w, y)=>{
            const { scope: x, children: p, ...m } = w, S = ne.useRef(null), k = cs(y, S), z = l(d, x);
            return ne.useEffect(()=>(z.itemMap.set(S, {
                    ref: S,
                    ...m
                }), ()=>void z.itemMap.delete(S))), v.jsx(f, {
                [c]: "",
                ref: k,
                children: p
            });
        });
        g.displayName = d;
        function h(w) {
            const y = l(e + "CollectionConsumer", w);
            return ne.useCallback(()=>{
                const p = y.collectionRef.current;
                if (!p) return [];
                const m = Array.from(p.querySelectorAll(`[${c}]`));
                return Array.from(y.itemMap.values()).sort((z, N)=>m.indexOf(z.ref.current) - m.indexOf(N.ref.current));
            }, [
                y.collectionRef,
                y.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: u,
                ItemSlot: g
            },
            h,
            r
        ];
    }
    function pn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Af = globalThis?.document ? C.useLayoutEffect : ()=>{}, tx = vc[" useInsertionEffect ".trim().toString()] || Af;
    function Ll({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = nx({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, a = s ? e : o;
        {
            const d = C.useRef(e !== void 0);
            C.useEffect(()=>{
                const c = d.current;
                c !== s && console.warn(`${r} is changing from ${c ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = s;
            }, [
                s,
                r
            ]);
        }
        const u = C.useCallback((d)=>{
            if (s) {
                const c = rx(d) ? d(e) : d;
                c !== e && i.current?.(c);
            } else l(d);
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
    function nx({ defaultProp: e, onChange: t }) {
        const [n, r] = C.useState(e), o = C.useRef(n), l = C.useRef(t);
        return tx(()=>{
            l.current = t;
        }, [
            t
        ]), C.useEffect(()=>{
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
    function rx(e) {
        return typeof e == "function";
    }
    var ox = vc[" useId ".trim().toString()] || (()=>{}), lx = 0;
    function ix(e) {
        const [t, n] = C.useState(ox());
        return Af(()=>{
            n((r)=>r ?? String(lx++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var sx = C.createContext(void 0);
    function Ff(e) {
        const t = C.useContext(sx);
        return e || t || "ltr";
    }
    function ax(e) {
        const t = C.useRef(e);
        return C.useEffect(()=>{
            t.current = e;
        }), C.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var pi = "rovingFocusGroup.onEntryFocus", ux = {
        bubbles: !1,
        cancelable: !0
    }, io = "RovingFocusGroup", [ds, $f, cx] = ex(io), [dx, Uf] = fa(io, [
        cx
    ]), [fx, px] = dx(io), Bf = C.forwardRef((e, t)=>v.jsx(ds.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: v.jsx(ds.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: v.jsx(mx, {
                    ...e,
                    ref: t
                })
            })
        }));
    Bf.displayName = io;
    var mx = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...c } = e, f = C.useRef(null), g = cs(t, f), h = Ff(l), [w, y] = Ll({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: io
        }), [x, p] = C.useState(!1), m = ax(u), S = $f(n), k = C.useRef(!1), [z, N] = C.useState(0);
        return C.useEffect(()=>{
            const _ = f.current;
            if (_) return _.addEventListener(pi, m), ()=>_.removeEventListener(pi, m);
        }, [
            m
        ]), v.jsx(fx, {
            scope: n,
            orientation: r,
            dir: h,
            loop: o,
            currentTabStopId: w,
            onItemFocus: C.useCallback((_)=>y(_), [
                y
            ]),
            onItemShiftTab: C.useCallback(()=>p(!0), []),
            onFocusableItemAdd: C.useCallback(()=>N((_)=>_ + 1), []),
            onFocusableItemRemove: C.useCallback(()=>N((_)=>_ - 1), []),
            children: v.jsx(Jr.div, {
                tabIndex: x || z === 0 ? -1 : 0,
                "data-orientation": r,
                ...c,
                ref: g,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: pn(e.onMouseDown, ()=>{
                    k.current = !0;
                }),
                onFocus: pn(e.onFocus, (_)=>{
                    const D = !k.current;
                    if (_.target === _.currentTarget && D && !x) {
                        const O = new CustomEvent(pi, ux);
                        if (_.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                            const J = S().filter((Q)=>Q.focusable), me = J.find((Q)=>Q.active), we = J.find((Q)=>Q.id === w), de = [
                                me,
                                we,
                                ...J
                            ].filter(Boolean).map((Q)=>Q.ref.current);
                            Gf(de, d);
                        }
                    }
                    k.current = !1;
                }),
                onBlur: pn(e.onBlur, ()=>p(!1))
            })
        });
    }), Wf = "RovingFocusGroupItem", Vf = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = ix(), u = l || a, d = px(Wf, n), c = d.currentTabStopId === u, f = $f(n), { onFocusableItemAdd: g, onFocusableItemRemove: h, currentTabStopId: w } = d;
        return C.useEffect(()=>{
            if (r) return g(), ()=>h();
        }, [
            r,
            g,
            h
        ]), v.jsx(ds.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: v.jsx(Jr.span, {
                tabIndex: c ? 0 : -1,
                "data-orientation": d.orientation,
                ...s,
                ref: t,
                onMouseDown: pn(e.onMouseDown, (y)=>{
                    r ? d.onItemFocus(u) : y.preventDefault();
                }),
                onFocus: pn(e.onFocus, ()=>d.onItemFocus(u)),
                onKeyDown: pn(e.onKeyDown, (y)=>{
                    if (y.key === "Tab" && y.shiftKey) {
                        d.onItemShiftTab();
                        return;
                    }
                    if (y.target !== y.currentTarget) return;
                    const x = xx(y, d.orientation, d.dir);
                    if (x !== void 0) {
                        if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                        y.preventDefault();
                        let m = f().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (x === "last") m.reverse();
                        else if (x === "prev" || x === "next") {
                            x === "prev" && m.reverse();
                            const S = m.indexOf(y.currentTarget);
                            m = d.loop ? yx(m, S + 1) : m.slice(S + 1);
                        }
                        setTimeout(()=>Gf(m));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: c,
                    hasTabStop: w != null
                }) : i
            })
        });
    });
    Vf.displayName = Wf;
    var hx = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function gx(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function xx(e, t, n) {
        const r = gx(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return hx[r];
    }
    function Gf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function yx(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var vx = Bf, wx = Vf, Hf = "Toggle", Kf = C.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = Ll({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Hf
        });
        return v.jsx(Jr.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: pn(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Kf.displayName = Hf;
    var en = "ToggleGroup", [Qf] = fa(en, [
        Uf
    ]), qf = Uf(), pa = ne.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return v.jsx(Sx, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return v.jsx(kx, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${en}\``);
    });
    pa.displayName = en;
    var [Yf, Xf] = Qf(en), Sx = ne.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Ll({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: en
        });
        return v.jsx(Yf, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: ne.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: ne.useCallback(()=>s(""), [
                s
            ]),
            children: v.jsx(Zf, {
                ...l,
                ref: t
            })
        });
    }), kx = ne.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Ll({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: en
        }), a = ne.useCallback((d)=>s((c = [])=>[
                    ...c,
                    d
                ]), [
            s
        ]), u = ne.useCallback((d)=>s((c = [])=>c.filter((f)=>f !== d)), [
            s
        ]);
        return v.jsx(Yf, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: v.jsx(Zf, {
                ...l,
                ref: t
            })
        });
    });
    pa.displayName = en;
    var [_x, Cx] = Qf(en), Zf = ne.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = qf(n), d = Ff(i), c = {
            role: "group",
            dir: d,
            ...a
        };
        return v.jsx(_x, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? v.jsx(vx, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: d,
                loop: s,
                children: v.jsx(Jr.div, {
                    ...c,
                    ref: t
                })
            }) : v.jsx(Jr.div, {
                ...c,
                ref: t
            })
        });
    }), gl = "ToggleGroupItem", Jf = ne.forwardRef((e, t)=>{
        const n = Xf(gl, e.__scopeToggleGroup), r = Cx(gl, e.__scopeToggleGroup), o = qf(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = ne.useRef(null);
        return r.rovingFocus ? v.jsx(wx, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: v.jsx(Vu, {
                ...s,
                ref: t
            })
        }) : v.jsx(Vu, {
            ...s,
            ref: t
        });
    });
    Jf.displayName = gl;
    var Vu = ne.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = Xf(gl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return v.jsx(Kf, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Ex = pa, Tx = Jf;
    const Ix = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, zx = (e, t)=>({
            classGroupId: e,
            validator: t
        }), ep = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), xl = "-", Gu = [], Nx = "arbitrary..", Rx = (e)=>{
        const t = Px(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return jx(i);
                const s = i.split(xl), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return tp(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Ix(u, a) : a : u || Gu;
                }
                return n[i] || Gu;
            }
        };
    }, tp = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = tp(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(xl) : e.slice(t).join(xl), a = i.length;
        for(let u = 0; u < a; u++){
            const d = i[u];
            if (d.validator(s)) return d.classGroupId;
        }
    }, jx = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Nx + r : void 0;
        })(), Px = (e)=>{
        const { theme: t, classGroups: n } = e;
        return bx(n, t);
    }, bx = (e, t)=>{
        const n = ep();
        for(const r in e){
            const o = e[r];
            ma(o, n, r, t);
        }
        return n;
    }, ma = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Mx(i, t, n, r);
        }
    }, Mx = (e, t, n, r)=>{
        if (typeof e == "string") {
            Lx(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Ox(e, t, n, r);
            return;
        }
        Dx(e, t, n, r);
    }, Lx = (e, t, n)=>{
        const r = e === "" ? t : np(t, e);
        r.classGroupId = n;
    }, Ox = (e, t, n, r)=>{
        if (Ax(e)) {
            ma(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(zx(n, e));
    }, Dx = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            ma(a, np(t, s), n, r);
        }
    }, np = (e, t)=>{
        let n = e;
        const r = t.split(xl), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = ep(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Ax = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Fx = (e)=>{
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
    }, fs = "!", Hu = ":", $x = [], Ku = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Ux = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const d = o.length;
            for(let w = 0; w < d; w++){
                const y = o[w];
                if (i === 0 && s === 0) {
                    if (y === Hu) {
                        l.push(o.slice(a, w)), a = w + 1;
                        continue;
                    }
                    if (y === "/") {
                        u = w;
                        continue;
                    }
                }
                y === "[" ? i++ : y === "]" ? i-- : y === "(" ? s++ : y === ")" && s--;
            }
            const c = l.length === 0 ? o : o.slice(a);
            let f = c, g = !1;
            c.endsWith(fs) ? (f = c.slice(0, -1), g = !0) : c.startsWith(fs) && (f = c.slice(1), g = !0);
            const h = u && u > a ? u - a : void 0;
            return Ku(l, g, f, h);
        };
        if (t) {
            const o = t + Hu, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Ku($x, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Bx = (e)=>{
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
    }, Wx = (e)=>({
            cache: Fx(e.cacheSize),
            parseClassName: Ux(e),
            sortModifiers: Bx(e),
            ...Rx(e)
        }), Vx = /\s+/, Gx = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Vx);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const d = s[u], { isExternal: c, modifiers: f, hasImportantModifier: g, baseClassName: h, maybePostfixModifierPosition: w } = n(d);
            if (c) {
                a = d + (a.length > 0 ? " " + a : a);
                continue;
            }
            let y = !!w, x = r(y ? h.substring(0, w) : h);
            if (!x) {
                if (!y) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (x = r(h), !x) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                y = !1;
            }
            const p = f.length === 0 ? "" : f.length === 1 ? f[0] : l(f).join(":"), m = g ? p + fs : p, S = m + x;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const k = o(x, y);
            for(let z = 0; z < k.length; ++z){
                const N = k[z];
                i.push(m + N);
            }
            a = d + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, Hx = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = rp(n)) && (o && (o += " "), o += r);
        return o;
    }, rp = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = rp(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Kx = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((d, c)=>c(d), e());
            return n = Wx(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const d = Gx(a, n);
            return o(a, d), d;
        };
        return l = i, (...a)=>l(Hx(...a));
    }, Qx = [], he = (e)=>{
        const t = (n)=>n[e] || Qx;
        return t.isThemeGetter = !0, t;
    }, op = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, lp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Yx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Jx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ey = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, jt = (e)=>qx.test(e), $ = (e)=>!!e && !Number.isNaN(Number(e)), Pt = (e)=>!!e && Number.isInteger(Number(e)), mi = (e)=>e.endsWith("%") && $(e.slice(0, -1)), yt = (e)=>Yx.test(e), ip = ()=>!0, ty = (e)=>Xx.test(e) && !Zx.test(e), ha = ()=>!1, ny = (e)=>Jx.test(e), ry = (e)=>ey.test(e), oy = (e)=>!b(e) && !M(e), ly = (e)=>tn(e, up, ha), b = (e)=>op.test(e), rn = (e)=>tn(e, cp, ty), Qu = (e)=>tn(e, py, $), iy = (e)=>tn(e, fp, ip), sy = (e)=>tn(e, dp, ha), qu = (e)=>tn(e, sp, ha), ay = (e)=>tn(e, ap, ry), To = (e)=>tn(e, pp, ny), M = (e)=>lp.test(e), xr = (e)=>kn(e, cp), uy = (e)=>kn(e, dp), Yu = (e)=>kn(e, sp), cy = (e)=>kn(e, up), dy = (e)=>kn(e, ap), Io = (e)=>kn(e, pp, !0), fy = (e)=>kn(e, fp, !0), tn = (e, t, n)=>{
        const r = op.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, kn = (e, t, n = !1)=>{
        const r = lp.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, sp = (e)=>e === "position" || e === "percentage", ap = (e)=>e === "image" || e === "url", up = (e)=>e === "length" || e === "size" || e === "bg-size", cp = (e)=>e === "length", py = (e)=>e === "number", dp = (e)=>e === "family-name", fp = (e)=>e === "number" || e === "weight", pp = (e)=>e === "shadow", my = ()=>{
        const e = he("color"), t = he("font"), n = he("text"), r = he("font-weight"), o = he("tracking"), l = he("leading"), i = he("breakpoint"), s = he("container"), a = he("spacing"), u = he("radius"), d = he("shadow"), c = he("inset-shadow"), f = he("text-shadow"), g = he("drop-shadow"), h = he("blur"), w = he("perspective"), y = he("aspect"), x = he("ease"), p = he("animate"), m = ()=>[
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
            ], k = ()=>[
                ...S(),
                M,
                b
            ], z = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], N = ()=>[
                "auto",
                "contain",
                "none"
            ], _ = ()=>[
                M,
                b,
                a
            ], D = ()=>[
                jt,
                "full",
                "auto",
                ..._()
            ], O = ()=>[
                Pt,
                "none",
                "subgrid",
                M,
                b
            ], J = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Pt,
                        M,
                        b
                    ]
                },
                Pt,
                M,
                b
            ], me = ()=>[
                Pt,
                "auto",
                M,
                b
            ], we = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                M,
                b
            ], X = ()=>[
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
            ], de = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], Q = ()=>[
                "auto",
                ..._()
            ], j = ()=>[
                jt,
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
            ], T = ()=>[
                jt,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ..._()
            ], L = ()=>[
                jt,
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
            ], E = ()=>[
                e,
                M,
                b
            ], W = ()=>[
                ...S(),
                Yu,
                qu,
                {
                    position: [
                        M,
                        b
                    ]
                }
            ], q = ()=>[
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
            ], oe = ()=>[
                "auto",
                "cover",
                "contain",
                cy,
                ly,
                {
                    size: [
                        M,
                        b
                    ]
                }
            ], Ce = ()=>[
                mi,
                xr,
                rn
            ], R = ()=>[
                "",
                "none",
                "full",
                u,
                M,
                b
            ], V = ()=>[
                "",
                $,
                xr,
                rn
            ], Qe = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], ir = ()=>[
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
            ], fe = ()=>[
                $,
                mi,
                Yu,
                qu
            ], so = ()=>[
                "",
                "none",
                h,
                M,
                b
            ], En = ()=>[
                "none",
                $,
                M,
                b
            ], Tn = ()=>[
                "none",
                $,
                M,
                b
            ], sr = ()=>[
                $,
                M,
                b
            ], F = ()=>[
                jt,
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
                    yt
                ],
                breakpoint: [
                    yt
                ],
                color: [
                    ip
                ],
                container: [
                    yt
                ],
                "drop-shadow": [
                    yt
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    oy
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
                    yt
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
                    yt
                ],
                shadow: [
                    yt
                ],
                spacing: [
                    "px",
                    $
                ],
                text: [
                    yt
                ],
                "text-shadow": [
                    yt
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
                            jt,
                            b,
                            M,
                            y
                        ]
                    }
                ],
                container: [
                    "container"
                ],
                columns: [
                    {
                        columns: [
                            $,
                            b,
                            M,
                            s
                        ]
                    }
                ],
                "break-after": [
                    {
                        "break-after": m()
                    }
                ],
                "break-before": [
                    {
                        "break-before": m()
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
                        object: k()
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
                        overscroll: N()
                    }
                ],
                "overscroll-x": [
                    {
                        "overscroll-x": N()
                    }
                ],
                "overscroll-y": [
                    {
                        "overscroll-y": N()
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
                        inset: D()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": D()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": D()
                    }
                ],
                start: [
                    {
                        "inset-s": D(),
                        start: D()
                    }
                ],
                end: [
                    {
                        "inset-e": D(),
                        end: D()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": D()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": D()
                    }
                ],
                top: [
                    {
                        top: D()
                    }
                ],
                right: [
                    {
                        right: D()
                    }
                ],
                bottom: [
                    {
                        bottom: D()
                    }
                ],
                left: [
                    {
                        left: D()
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
                            Pt,
                            "auto",
                            M,
                            b
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            jt,
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
                            $,
                            jt,
                            "auto",
                            "initial",
                            "none",
                            b
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            $,
                            M,
                            b
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            $,
                            M,
                            b
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            Pt,
                            "first",
                            "last",
                            "none",
                            M,
                            b
                        ]
                    }
                ],
                "grid-cols": [
                    {
                        "grid-cols": O()
                    }
                ],
                "col-start-end": [
                    {
                        col: J()
                    }
                ],
                "col-start": [
                    {
                        "col-start": me()
                    }
                ],
                "col-end": [
                    {
                        "col-end": me()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": O()
                    }
                ],
                "row-start-end": [
                    {
                        row: J()
                    }
                ],
                "row-start": [
                    {
                        "row-start": me()
                    }
                ],
                "row-end": [
                    {
                        "row-end": me()
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
                        "auto-cols": we()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": we()
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
                            ...X(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...de(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...de()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...X()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...de(),
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
                            ...de(),
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
                        "place-content": X()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...de(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...de()
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
                        m: Q()
                    }
                ],
                mx: [
                    {
                        mx: Q()
                    }
                ],
                my: [
                    {
                        my: Q()
                    }
                ],
                ms: [
                    {
                        ms: Q()
                    }
                ],
                me: [
                    {
                        me: Q()
                    }
                ],
                mbs: [
                    {
                        mbs: Q()
                    }
                ],
                mbe: [
                    {
                        mbe: Q()
                    }
                ],
                mt: [
                    {
                        mt: Q()
                    }
                ],
                mr: [
                    {
                        mr: Q()
                    }
                ],
                mb: [
                    {
                        mb: Q()
                    }
                ],
                ml: [
                    {
                        ml: Q()
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
                        size: j()
                    }
                ],
                "inline-size": [
                    {
                        inline: [
                            "auto",
                            ...T()
                        ]
                    }
                ],
                "min-inline-size": [
                    {
                        "min-inline": [
                            "auto",
                            ...T()
                        ]
                    }
                ],
                "max-inline-size": [
                    {
                        "max-inline": [
                            "none",
                            ...T()
                        ]
                    }
                ],
                "block-size": [
                    {
                        block: [
                            "auto",
                            ...L()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...L()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...L()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...j()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...j()
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
                            ...j()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...j()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...j()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...j()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            xr,
                            rn
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
                            fy,
                            iy
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
                            mi,
                            b
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            uy,
                            sy,
                            t
                        ]
                    }
                ],
                "font-features": [
                    {
                        "font-features": [
                            b
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
                            M,
                            b
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            $,
                            "none",
                            M,
                            Qu
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
                            M,
                            b
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
                            M,
                            b
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
                        placeholder: E()
                    }
                ],
                "text-color": [
                    {
                        text: E()
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
                            ...Qe(),
                            "wavy"
                        ]
                    }
                ],
                "text-decoration-thickness": [
                    {
                        decoration: [
                            $,
                            "from-font",
                            "auto",
                            M,
                            rn
                        ]
                    }
                ],
                "text-decoration-color": [
                    {
                        decoration: E()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            $,
                            "auto",
                            M,
                            b
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
                            M,
                            b
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
                            M,
                            b
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
                        bg: W()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: q()
                    }
                ],
                "bg-size": [
                    {
                        bg: oe()
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
                                    Pt,
                                    M,
                                    b
                                ],
                                radial: [
                                    "",
                                    M,
                                    b
                                ],
                                conic: [
                                    Pt,
                                    M,
                                    b
                                ]
                            },
                            dy,
                            ay
                        ]
                    }
                ],
                "bg-color": [
                    {
                        bg: E()
                    }
                ],
                "gradient-from-pos": [
                    {
                        from: Ce()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Ce()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Ce()
                    }
                ],
                "gradient-from": [
                    {
                        from: E()
                    }
                ],
                "gradient-via": [
                    {
                        via: E()
                    }
                ],
                "gradient-to": [
                    {
                        to: E()
                    }
                ],
                rounded: [
                    {
                        rounded: R()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": R()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": R()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": R()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": R()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": R()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": R()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": R()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": R()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": R()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": R()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": R()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": R()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": R()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": R()
                    }
                ],
                "border-w": [
                    {
                        border: V()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": V()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": V()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": V()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": V()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": V()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": V()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": V()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": V()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": V()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": V()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": V()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": V()
                    }
                ],
                "divide-y-reverse": [
                    "divide-y-reverse"
                ],
                "border-style": [
                    {
                        border: [
                            ...Qe(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...Qe(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "border-color": [
                    {
                        border: E()
                    }
                ],
                "border-color-x": [
                    {
                        "border-x": E()
                    }
                ],
                "border-color-y": [
                    {
                        "border-y": E()
                    }
                ],
                "border-color-s": [
                    {
                        "border-s": E()
                    }
                ],
                "border-color-e": [
                    {
                        "border-e": E()
                    }
                ],
                "border-color-bs": [
                    {
                        "border-bs": E()
                    }
                ],
                "border-color-be": [
                    {
                        "border-be": E()
                    }
                ],
                "border-color-t": [
                    {
                        "border-t": E()
                    }
                ],
                "border-color-r": [
                    {
                        "border-r": E()
                    }
                ],
                "border-color-b": [
                    {
                        "border-b": E()
                    }
                ],
                "border-color-l": [
                    {
                        "border-l": E()
                    }
                ],
                "divide-color": [
                    {
                        divide: E()
                    }
                ],
                "outline-style": [
                    {
                        outline: [
                            ...Qe(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            $,
                            xr,
                            rn
                        ]
                    }
                ],
                "outline-color": [
                    {
                        outline: E()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            d,
                            Io,
                            To
                        ]
                    }
                ],
                "shadow-color": [
                    {
                        shadow: E()
                    }
                ],
                "inset-shadow": [
                    {
                        "inset-shadow": [
                            "none",
                            c,
                            Io,
                            To
                        ]
                    }
                ],
                "inset-shadow-color": [
                    {
                        "inset-shadow": E()
                    }
                ],
                "ring-w": [
                    {
                        ring: V()
                    }
                ],
                "ring-w-inset": [
                    "ring-inset"
                ],
                "ring-color": [
                    {
                        ring: E()
                    }
                ],
                "ring-offset-w": [
                    {
                        "ring-offset": [
                            $,
                            rn
                        ]
                    }
                ],
                "ring-offset-color": [
                    {
                        "ring-offset": E()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": V()
                    }
                ],
                "inset-ring-color": [
                    {
                        "inset-ring": E()
                    }
                ],
                "text-shadow": [
                    {
                        "text-shadow": [
                            "none",
                            f,
                            Io,
                            To
                        ]
                    }
                ],
                "text-shadow-color": [
                    {
                        "text-shadow": E()
                    }
                ],
                opacity: [
                    {
                        opacity: [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...ir(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": ir()
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
                            $
                        ]
                    }
                ],
                "mask-image-linear-from-pos": [
                    {
                        "mask-linear-from": fe()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": fe()
                    }
                ],
                "mask-image-linear-from-color": [
                    {
                        "mask-linear-from": E()
                    }
                ],
                "mask-image-linear-to-color": [
                    {
                        "mask-linear-to": E()
                    }
                ],
                "mask-image-t-from-pos": [
                    {
                        "mask-t-from": fe()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": fe()
                    }
                ],
                "mask-image-t-from-color": [
                    {
                        "mask-t-from": E()
                    }
                ],
                "mask-image-t-to-color": [
                    {
                        "mask-t-to": E()
                    }
                ],
                "mask-image-r-from-pos": [
                    {
                        "mask-r-from": fe()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": fe()
                    }
                ],
                "mask-image-r-from-color": [
                    {
                        "mask-r-from": E()
                    }
                ],
                "mask-image-r-to-color": [
                    {
                        "mask-r-to": E()
                    }
                ],
                "mask-image-b-from-pos": [
                    {
                        "mask-b-from": fe()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": fe()
                    }
                ],
                "mask-image-b-from-color": [
                    {
                        "mask-b-from": E()
                    }
                ],
                "mask-image-b-to-color": [
                    {
                        "mask-b-to": E()
                    }
                ],
                "mask-image-l-from-pos": [
                    {
                        "mask-l-from": fe()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": fe()
                    }
                ],
                "mask-image-l-from-color": [
                    {
                        "mask-l-from": E()
                    }
                ],
                "mask-image-l-to-color": [
                    {
                        "mask-l-to": E()
                    }
                ],
                "mask-image-x-from-pos": [
                    {
                        "mask-x-from": fe()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": fe()
                    }
                ],
                "mask-image-x-from-color": [
                    {
                        "mask-x-from": E()
                    }
                ],
                "mask-image-x-to-color": [
                    {
                        "mask-x-to": E()
                    }
                ],
                "mask-image-y-from-pos": [
                    {
                        "mask-y-from": fe()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": fe()
                    }
                ],
                "mask-image-y-from-color": [
                    {
                        "mask-y-from": E()
                    }
                ],
                "mask-image-y-to-color": [
                    {
                        "mask-y-to": E()
                    }
                ],
                "mask-image-radial": [
                    {
                        "mask-radial": [
                            M,
                            b
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": fe()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": fe()
                    }
                ],
                "mask-image-radial-from-color": [
                    {
                        "mask-radial-from": E()
                    }
                ],
                "mask-image-radial-to-color": [
                    {
                        "mask-radial-to": E()
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
                            $
                        ]
                    }
                ],
                "mask-image-conic-from-pos": [
                    {
                        "mask-conic-from": fe()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": fe()
                    }
                ],
                "mask-image-conic-from-color": [
                    {
                        "mask-conic-from": E()
                    }
                ],
                "mask-image-conic-to-color": [
                    {
                        "mask-conic-to": E()
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
                        mask: W()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: q()
                    }
                ],
                "mask-size": [
                    {
                        mask: oe()
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
                            M,
                            b
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            M,
                            b
                        ]
                    }
                ],
                blur: [
                    {
                        blur: so()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            g,
                            Io,
                            To
                        ]
                    }
                ],
                "drop-shadow-color": [
                    {
                        "drop-shadow": E()
                    }
                ],
                grayscale: [
                    {
                        grayscale: [
                            "",
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            $,
                            M,
                            b
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": so()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            $,
                            M,
                            b
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
                            M,
                            b
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
                            $,
                            "initial",
                            M,
                            b
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            x,
                            M,
                            b
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            $,
                            M,
                            b
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            p,
                            M,
                            b
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
                            w,
                            M,
                            b
                        ]
                    }
                ],
                "perspective-origin": [
                    {
                        "perspective-origin": k()
                    }
                ],
                rotate: [
                    {
                        rotate: En()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": En()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": En()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": En()
                    }
                ],
                scale: [
                    {
                        scale: Tn()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": Tn()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": Tn()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": Tn()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: sr()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": sr()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": sr()
                    }
                ],
                transform: [
                    {
                        transform: [
                            M,
                            b,
                            "",
                            "none",
                            "gpu",
                            "cpu"
                        ]
                    }
                ],
                "transform-origin": [
                    {
                        origin: k()
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
                        translate: F()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": F()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": F()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": F()
                    }
                ],
                "translate-none": [
                    "translate-none"
                ],
                accent: [
                    {
                        accent: E()
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
                        caret: E()
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
                            M,
                            b
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
                            M,
                            b
                        ]
                    }
                ],
                fill: [
                    {
                        fill: [
                            "none",
                            ...E()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            $,
                            xr,
                            rn,
                            Qu
                        ]
                    }
                ],
                stroke: [
                    {
                        stroke: [
                            "none",
                            ...E()
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
    }, hy = Kx(my);
    function _n(...e) {
        return hy(Lf(e));
    }
    const gy = Of("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function H({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? Hg : "button";
        return v.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: _n(gy({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const xy = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function yr(e) {
        return xy[e] ?? "#000000";
    }
    function yy(e) {
        return typeof e == "object" && e !== null;
    }
    function vy(e) {
        let t, n, r, o, l;
        if (Array.isArray(e)) t = e[0], n = e[1], r = e[2], o = e[3], l = e.length >= 9 ? e[8] : e[4];
        else if (yy(e)) t = e.r, n = e.c, r = e.color, o = e.size, l = e.text;
        else return null;
        return typeof t != "number" || typeof n != "number" ? null : {
            r: t,
            c: n,
            color: typeof r == "number" ? r : 0,
            size: typeof o == "number" ? o : 1,
            text: typeof l == "string" ? l : String(l ?? "")
        };
    }
    function wy(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, d = s * a + o * 2;
        e.width = u, e.height = d;
        const c = e.getContext("2d");
        if (c) {
            l && (c.fillStyle = l, c.fillRect(0, 0, u, d)), c.translate(o, o);
            for (const f of t.cells ?? []){
                const [g, h, w] = f, y = f.length >= 4 ? f[3] : 1, x = yr(w);
                x && (c.fillStyle = x, c.fillRect(h * a, g * a, y * a, y * a));
            }
            for (const f of t.images ?? []){
                if (!Array.isArray(f) || f.length < 4) continue;
                const [g, h, w, y] = f, x = Math.min(h, y) * a, p = Math.min(g, w) * a, m = Math.abs(y - h) * a, S = Math.abs(w - g) * a;
                c.fillStyle = "#eef2f7", c.fillRect(x, p, m, S), c.strokeStyle = "#c3ccd8", c.lineWidth = 1, c.strokeRect(x + .5, p + .5, m - 1, S - 1);
            }
            for (const [f, g, h, w, y, x] of t.rects ?? []){
                const p = Math.min(g, w) * a, m = Math.min(f, h) * a, S = Math.abs(w - g) * a, k = Math.abs(h - f) * a, z = yr(y);
                z && (c.fillStyle = z, c.fillRect(p, m, S, k));
                const N = yr(x);
                N && (c.strokeStyle = N, c.lineWidth = Math.max(1, a / 8), c.strokeRect(p, m, S, k));
            }
            for (const [f, g, h, w, y] of t.lines ?? []){
                const x = yr(y);
                x && (c.strokeStyle = x, c.lineWidth = Math.max(1, a / 6), c.beginPath(), c.moveTo(g * a, f * a), c.lineTo(w * a, h * a), c.stroke());
            }
            c.textBaseline = "alphabetic";
            for (const f of t.texts ?? []){
                const g = vy(f);
                g && (c.fillStyle = yr(g.color) ?? "#000000", c.font = `${Math.max(6, g.size * a * Je)}px 'BigBlue Terminal', monospace`, c.fillText(g.text, g.c * a, (g.r + g.size * Je) * a));
            }
            c.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function Wo({ design: e, size: t = 96, className: n }) {
        const r = C.useRef(null);
        return C.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            wy(r.current, e, o);
        }, [
            e,
            t
        ]), v.jsx("canvas", {
            ref: r,
            className: n,
            style: {
                imageRendering: "pixelated"
            }
        });
    }
    function lr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = C.useState(t), s = C.useRef(!1), a = C.useRef({
            x: 0,
            y: 0
        }), u = C.useCallback((d)=>{
            s.current = !0, a.current = {
                x: d.clientX - l.x,
                y: d.clientY - l.y
            };
            const c = (g)=>{
                if (!s.current) return;
                const h = Math.max(0, g.clientX - a.current.x), w = Math.max(0, g.clientY - a.current.y);
                i({
                    x: h,
                    y: w
                });
            }, f = ()=>{
                s.current = !1, window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", f);
            };
            window.addEventListener("mousemove", c), window.addEventListener("mouseup", f);
        }, [
            l
        ]);
        return v.jsxs("div", {
            className: _n("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: l.x,
                top: l.y
            },
            children: [
                v.jsxs("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg flex items-center justify-between gap-2",
                    onMouseDown: u,
                    children: [
                        v.jsx("span", {
                            children: e
                        }),
                        o && v.jsx("button", {
                            type: "button",
                            "aria-label": "Close",
                            className: "text-gray-400 hover:text-gray-700 cursor-pointer leading-none px-1",
                            onMouseDown: (d)=>d.stopPropagation(),
                            onClick: o,
                            children: "✕"
                        })
                    ]
                }),
                v.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    function Qt(e) {
        return typeof e == "object" && e !== null;
    }
    function Ol(e) {
        return Qt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && typeof e.name == "string" && Qt(e.design);
    }
    function Sy(e) {
        return Array.isArray(e) && e.every(Ol);
    }
    function mp(e) {
        return Qt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && Qt(e.input) && Qt(e.output);
    }
    function ky(e) {
        return Array.isArray(e) && e.every(mp);
    }
    function _y(e) {
        return Qt(e) && typeof e.uploadUrl == "string" && typeof e.publicUrl == "string" && typeof e.key == "string";
    }
    const hp = "https://api.seanneilan.com", ga = "grid-draw-token", ps = "grid-draw-auth-expired";
    function gp() {
        return localStorage.getItem(ga);
    }
    function xp() {
        localStorage.removeItem(ga);
    }
    async function Cy(e, t) {
        const n = await fetch(`${hp}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e,
                password: t
            })
        });
        if (n.status === 401) throw new Error("invalid username or password");
        if (!n.ok) throw new Error(`login failed (${n.status})`);
        const r = await n.json();
        if (!Qt(r) || typeof r.token != "string") throw new Error("login failed (malformed response)");
        localStorage.setItem(ga, r.token);
    }
    async function yp(e, t, n) {
        const r = {}, o = gp();
        o && (r.Authorization = `Bearer ${o}`), n !== void 0 && (r["Content-Type"] = "application/json");
        const l = await fetch(`${hp}${t}`, {
            method: e,
            headers: r,
            body: n === void 0 ? void 0 : JSON.stringify(n)
        });
        if (l.status === 401) throw xp(), window.dispatchEvent(new Event(ps)), new Error("session expired — please log in again");
        if (!l.ok) {
            const i = await l.json().catch(()=>null), s = Qt(i) && typeof i.error == "string" ? i.error : void 0;
            throw new Error(s ?? `${e} ${t} failed (${l.status})`);
        }
        return l;
    }
    async function Cn(e, t, n, r) {
        const l = await (await yp(e, t, r)).json();
        if (!n(l)) throw new Error(`${e} ${t}: unexpected response shape`);
        return l;
    }
    async function xa(e, t, n) {
        await yp(e, t, n);
    }
    function Ey() {
        return Cn("GET", "/api/designs", Sy);
    }
    function Ty(e) {
        return Cn("GET", `/api/designs/${e}`, Ol);
    }
    function Iy(e) {
        return Cn("GET", `/api/designs?name=${encodeURIComponent(e)}`, Ol);
    }
    async function zy(e, t, n) {
        return (await Cn("PUT", "/api/designs", Ol, {
            name: e,
            design: t,
            history: n
        })).id;
    }
    function Ny(e) {
        return xa("DELETE", `/api/designs/${e}`);
    }
    function Xu() {
        return Cn("GET", "/api/examples", ky);
    }
    async function Ry(e, t, n) {
        return (await Cn("POST", "/api/examples", mp, {
            input: e,
            output: t,
            delta: n
        })).id;
    }
    function jy(e, t, n, r) {
        return xa("PUT", `/api/examples/${e}`, {
            input: t,
            output: n,
            delta: r
        });
    }
    function Py(e) {
        return xa("DELETE", `/api/examples/${e}`);
    }
    async function by(e) {
        const t = e.type || "application/octet-stream", { uploadUrl: n, publicUrl: r } = await Cn("POST", "/api/images/presign", _y, {
            contentType: t,
            size: e.size
        }), o = await fetch(n, {
            method: "PUT",
            body: e,
            headers: {
                "Content-Type": t
            }
        });
        if (!o.ok) throw new Error(`image upload failed (${o.status})`);
        return r;
    }
    const eo = 31;
    function My(e) {
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
            const [s, a] = t[i], [u, d] = n[i];
            l.push([
                s,
                a,
                u + r,
                d + o
            ]);
        }
        return {
            pairs: l,
            skipped: null
        };
    }
    function Ly(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = My(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function Zu(e, t) {
        return e >= 0 && e <= eo && t >= 0 && t <= eo;
    }
    function Ju(e, t) {
        if (t instanceof e.SymbolicTensor) return t;
        throw new Error("expected a SymbolicTensor from layer.apply");
    }
    const at = eo + 1, vp = "indexeddb://grid-draw-coord-model";
    let ec, tr = null;
    async function ya() {
        return ec ??= aa(()=>import("./index2.js"), []), ec;
    }
    function Oy(e) {
        const t = e.input({
            shape: [
                2 * at
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
        const r = Ju(e, e.layers.dense({
            units: at,
            activation: "softmax",
            name: "r"
        }).apply(n)), o = Ju(e, e.layers.dense({
            units: at,
            activation: "softmax",
            name: "c"
        }).apply(n));
        return e.model({
            inputs: t,
            outputs: [
                r,
                o
            ]
        });
    }
    function wp(e, t) {
        const n = new Float32Array(t.length * 2 * at);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * at + r] = 1, n[l * 2 * at + at + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * at
        ]);
    }
    function tc(e, t) {
        const n = new Float32Array(t.length * at);
        return t.forEach((r, o)=>{
            n[o * at + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            at
        ]);
    }
    async function Dy() {
        const e = await ya();
        try {
            return tr = await e.loadLayersModel(vp), !0;
        } catch  {
            return tr = null, !1;
        }
    }
    async function Ay(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await ya(), { pairs: s, skippedExamples: a } = Ly(e), u = [];
        let d = 0;
        for (const y of s)Zu(y[0], y[1]) && Zu(y[2], y[3]) ? u.push(y) : d++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const c = wp(i, u.map((y)=>[
                y[0],
                y[1]
            ])), f = tc(i, u.map((y)=>y[2])), g = tc(i, u.map((y)=>y[3])), h = Oy(i);
        h.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let w = NaN;
        return await h.fit(c, [
            f,
            g
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (y, x)=>{
                    const p = x?.loss;
                    typeof p == "number" && (w = p), l?.(y + 1, n, w), await i.nextFrame();
                }
            }
        }), c.dispose(), f.dispose(), g.dispose(), tr?.dispose(), tr = h, await h.save(vp), {
            pairs: u.length,
            droppedPoints: d,
            skippedExamples: a,
            finalLoss: w
        };
    }
    async function Fy(e) {
        if (!tr) throw new Error("No model yet — train one first.");
        const t = tr, n = await ya(), r = e.cells ?? [];
        if (r.length === 0) return {
            w: 1,
            h: 1,
            cells: [],
            lines: [],
            rects: [],
            texts: [],
            sub: Je
        };
        const o = r.map(([u, d])=>[
                Math.max(0, Math.min(eo, u)),
                Math.max(0, Math.min(eo, d))
            ]), l = n.tidy(()=>{
            const u = wp(n, o), d = t.predict(u), c = Array.isArray(d) ? d : [
                d
            ], f = c[0], g = c[1], h = f.argMax(1).dataSync(), w = g.argMax(1).dataSync();
            return r.map((y, x)=>[
                    h[x],
                    w[x],
                    y[2],
                    y.length >= 4 ? y[3] : 1
                ]);
        }), i = new Map;
        let s = 0, a = 0;
        for (const u of l)i.set(`${u[0]},${u[1]}`, u), s = Math.max(s, u[0]), a = Math.max(a, u[1]);
        return {
            w: a + 1,
            h: s + 1,
            cells: [
                ...i.values()
            ],
            lines: [],
            rects: [],
            texts: [],
            sub: Je
        };
    }
    const ue = _f((e, t)=>({
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
                        designs: await Ey(),
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
                        examples: await Xu(),
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
                const l = await zy(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>Iy(n),
            getDrawingById: (n)=>Ty(n),
            saveExamplePair: async (n, r, o)=>{
                await Ry(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await jy(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await Ny(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await Py(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Dy();
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
                const n = await Xu();
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
                    const r = await Ay(n, {
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
            runPredict: (n)=>Fy(n)
        })), Sp = "/grid-draw/";
    function $y(e) {
        window.location.href = `${Sp}design/${encodeURIComponent(e)}/`;
    }
    function Uy() {
        window.location.href = Sp;
    }
    function kp({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = ue((y)=>y.designs), o = ue((y)=>y.examples), l = ue((y)=>y.loadingDesigns || y.loadingExamples), i = ue((y)=>y.error), s = ue((y)=>y.loadDesigns), a = ue((y)=>y.loadExamples), u = ue((y)=>y.deleteDrawing), d = ue((y)=>y.deleteExamplePair), c = C.useCallback(()=>{
            s(), a();
        }, [
            s,
            a
        ]);
        C.useEffect(()=>{
            c();
        }, [
            c
        ]);
        const f = C.useCallback((y, x)=>{
            window.confirm(`Delete drawing “${x}”? This can't be undone.`) && u(y);
        }, [
            u
        ]), g = C.useCallback((y)=>{
            window.confirm("Delete this training example? This can't be undone.") && d(y);
        }, [
            d
        ]), h = C.useCallback((y)=>{
            n ? n(y) : $y(y);
        }, [
            n
        ]), w = v.jsxs(v.Fragment, {
            children: [
                l && v.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "Loading…"
                }),
                v.jsxs("section", {
                    className: "mb-10",
                    children: [
                        v.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Saved drawings (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && !l && v.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No saved drawings yet — use “Save to Gallery” in the editor."
                        }),
                        v.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4",
                            children: r.map((y)=>v.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        v.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: v.jsx(Wo, {
                                                design: y.design,
                                                size: 120
                                            })
                                        }),
                                        v.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: y.name,
                                            children: y.name
                                        }),
                                        v.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                v.jsx(H, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>h(y.name),
                                                    children: "Open"
                                                }),
                                                v.jsx(H, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-red-600",
                                                    onClick: ()=>f(y.id, y.name),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, y.id))
                        })
                    ]
                }),
                v.jsxs("section", {
                    children: [
                        v.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                o.length,
                                ")"
                            ]
                        }),
                        o.length === 0 && !l && v.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — capture some with “Make Training Data”."
                        }),
                        v.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4",
                            children: o.map((y)=>v.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        v.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                v.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        v.jsx(Wo, {
                                                            design: y.input,
                                                            size: 80
                                                        }),
                                                        v.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "input"
                                                        })
                                                    ]
                                                }),
                                                v.jsx("span", {
                                                    className: "text-gray-300",
                                                    children: "→"
                                                }),
                                                v.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        v.jsx(Wo, {
                                                            design: y.output,
                                                            size: 80
                                                        }),
                                                        v.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "output"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        v.jsx(H, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full text-xs text-red-600",
                                            onClick: ()=>g(y.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, y.id))
                        })
                    ]
                })
            ]
        });
        return e ? v.jsxs(lr, {
            title: "Gallery",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 880) / 2),
                y: 64
            },
            className: "w-[880px] max-w-[95vw] z-30",
            children: [
                v.jsxs("div", {
                    className: "mb-3 flex items-center gap-3",
                    children: [
                        v.jsx(H, {
                            variant: "outline",
                            size: "sm",
                            onClick: c,
                            children: "Refresh"
                        }),
                        i && v.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                v.jsx("div", {
                    className: "max-h-[70vh] overflow-auto pr-1",
                    children: w
                })
            ]
        }) : v.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                v.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        v.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Gallery"
                        }),
                        v.jsx(H, {
                            variant: "outline",
                            size: "sm",
                            onClick: Uy,
                            children: "← Editor"
                        }),
                        v.jsx(H, {
                            variant: "outline",
                            size: "sm",
                            onClick: c,
                            children: "Refresh"
                        }),
                        v.jsx(H, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                xp(), window.location.reload();
                            },
                            children: "Log out"
                        }),
                        i && v.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                w
            ]
        });
    }
    const By = "/grid-draw/";
    function nc({ design: e, label: t, onClick: n }) {
        const r = v.jsx(Wo, {
            design: e,
            size: 84
        });
        return v.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
                n ? v.jsx("button", {
                    type: "button",
                    onClick: n,
                    title: `Load this ${t} into the editor`,
                    className: "rounded ring-1 ring-transparent hover:ring-blue-400 hover:ring-2 focus:outline-none focus:ring-blue-500 cursor-pointer",
                    children: r
                }) : r,
                v.jsx("span", {
                    className: "text-[10px] text-gray-400 mt-1",
                    children: t
                })
            ]
        });
    }
    function Wy({ input: e, output: t, onInput: n, onOutput: r }) {
        return v.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                v.jsx(nc, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                v.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                v.jsx(nc, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function _p({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = ue((a)=>a.examples), o = ue((a)=>a.error), l = ue((a)=>a.loadExamples);
        C.useEffect(()=>{
            l();
        }, [
            l
        ]);
        const s = v.jsxs(v.Fragment, {
            children: [
                v.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        v.jsx(H, {
                            variant: "outline",
                            size: "sm",
                            onClick: l,
                            children: "Refresh"
                        }),
                        o && v.jsx("span", {
                            className: "text-sm text-red-500",
                            children: o
                        })
                    ]
                }),
                v.jsxs("section", {
                    children: [
                        v.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && v.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — use “Make Training Data”."
                        }),
                        v.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4",
                            children: r.map((a)=>v.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-1",
                                    children: [
                                        v.jsx(Wy, {
                                            input: a.input,
                                            output: a.output,
                                            onInput: n && (()=>n(a, "input")),
                                            onOutput: n && (()=>n(a, "output"))
                                        }),
                                        v.jsxs("span", {
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
        return e ? v.jsx(lr, {
            title: "Training Data",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 900) / 2),
                y: 64
            },
            className: "w-[900px] max-w-[95vw] z-30",
            children: v.jsx("div", {
                className: "max-h-[72vh] overflow-auto pr-1",
                children: s
            })
        }) : v.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                v.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        v.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Training Data"
                        }),
                        v.jsx(H, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = By;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const mn = 2, mt = 8, nn = 48, vr = "/grid-draw/", Cp = [
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
    function Vy(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function rc() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - nn)
        };
    }
    const Gy = .25, Hy = 12;
    function Ky(e, t) {
        const [n, r] = C.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), o = C.useRef(n);
        o.current = n;
        const l = C.useRef(!1), [i, s] = C.useState(!1), a = C.useRef(null), u = C.useCallback((c)=>{
            if (r(c), !e) return;
            e.set_camera(c.x, c.y, c.zoom);
            const f = U.getState();
            f.selectedItems.length > 0 && f.renderSelection();
        }, [
            e
        ]), d = C.useCallback(()=>u({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            u
        ]);
        return C.useEffect(()=>{
            const c = t.current;
            if (!c) return;
            const f = (g)=>{
                g.preventDefault();
                const h = o.current, w = g.deltaY < 0 ? 1.1 : 1 / 1.1, y = Math.min(Hy, Math.max(Gy, h.zoom * w));
                if (y === h.zoom) return;
                const x = g.clientX, p = g.clientY - nn, m = h.x + x * (1 / h.zoom - 1 / y), S = h.y + p * (1 / h.zoom - 1 / y);
                u({
                    x: m,
                    y: S,
                    zoom: y
                });
            };
            return c.addEventListener("wheel", f, {
                passive: !1
            }), ()=>c.removeEventListener("wheel", f);
        }, [
            u,
            t
        ]), C.useEffect(()=>{
            const c = (g)=>{
                g.code !== "Space" || U.getState().textEdit || (g.preventDefault(), l.current = !0, s(!0));
            }, f = (g)=>{
                g.code === "Space" && (l.current = !1, s(!1));
            };
            return window.addEventListener("keydown", c), window.addEventListener("keyup", f), ()=>{
                window.removeEventListener("keydown", c), window.removeEventListener("keyup", f);
            };
        }, []), {
            cam: n,
            camRef: o,
            applyCamera: u,
            resetView: d,
            spaceHeld: i,
            isSpaceDown: l,
            panRef: a
        };
    }
    function sn(e, t) {
        const n = e.currentTarget, r = n.getBoundingClientRect(), o = (e.clientX - r.left) * (n.width / r.width), l = (e.clientY - r.top) * (n.height / r.height);
        return {
            x: o / t.zoom + t.x,
            y: l / t.zoom + t.y
        };
    }
    function Ep(e) {
        return mt / e;
    }
    function zn(e, t, n) {
        const { x: r, y: o } = sn(e, t), l = Ep(n), i = (s)=>Math.floor(Math.floor(s / mn) / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function bt(e, t, n) {
        const { x: r, y: o } = sn(e, t), l = Ep(n), i = (s)=>Math.round(s / mn / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function Qy({ camRef: e, applyCamera: t, isSpaceDown: n, panRef: r }) {
        const { tool: o, isDrawing: l, lineStart: i, rectStart: s, subdivision: a, beginTextEdit: u, selectedItems: d, selectMode: c, isSelecting: f, selectBoxStart: g, selectDragStart: h, updateBoxSelection: w, finishBoxSelection: y, cancelBoxSelection: x, finishDragSelection: p, cancelDragSelection: m, updateResize: S, finishResize: k, cancelResize: z, updateRotate: N, finishRotate: _, cancelRotate: D, setMousePos: O, pressSelectAt: J, renderDragPreview: me, hoverAffordanceAt: we, doubleClickAt: X, pressDrawAt: de, dragDrawAt: Q, endDrawStroke: j, stopDrawing: T, startLine: L, renderLinePreview: E, commitLine: W, finishLine: q, cancelLine: oe, startRect: Ce, renderRectPreview: R, commitRect: V, finishRect: Qe, cancelRect: ir } = U(), fe = C.useCallback((F)=>{
            if (F.button === 1 || F.button === 0 && n.current) {
                F.preventDefault(), r.current = {
                    x: F.clientX,
                    y: F.clientY,
                    camX: e.current.x,
                    camY: e.current.y
                }, F.currentTarget.style.cursor = "grabbing";
                return;
            }
            if (o === "draw") {
                const { col: G, row: A } = zn(F, e.current, a);
                de({
                    row: A,
                    col: G
                });
            } else if (o === "line") {
                const { col: G, row: A } = bt(F, e.current, a);
                L({
                    row: A,
                    col: G
                });
            } else if (o === "rect") {
                const { col: G, row: A } = bt(F, e.current, a);
                Ce({
                    row: A,
                    col: G
                });
            } else if (o === "text") {
                const { col: G, row: A } = zn(F, e.current, a);
                u({
                    row: A,
                    col: G
                });
            } else if (o === "select") {
                const { col: G, row: A } = zn(F, e.current, a), { x: Ne, y: Dl } = sn(F, e.current);
                J({
                    x: Ne,
                    y: Dl,
                    row: A,
                    col: G,
                    shift: F.shiftKey,
                    zoom: e.current.zoom
                });
            }
        }, [
            o,
            a,
            de,
            L,
            Ce,
            u,
            J,
            e,
            n,
            r
        ]), so = C.useCallback((F)=>{
            if (o !== "select" || n.current) return;
            const { x: G, y: A } = sn(F, e.current);
            X({
                x: G,
                y: A
            });
        }, [
            o,
            X,
            e,
            n
        ]), En = C.useCallback((F)=>{
            if (r.current) {
                const A = r.current, Ne = e.current.zoom;
                t({
                    x: A.camX - (F.clientX - A.x) / Ne,
                    y: A.camY - (F.clientY - A.y) / Ne,
                    zoom: Ne
                });
                return;
            }
            const G = zn(F, e.current, a);
            if (O(G), o === "select") {
                const A = F.currentTarget;
                if (f && (c === "resize" || c === "rotate")) A.style.cursor = "grabbing";
                else if (f && c === "drag") A.style.cursor = "move";
                else {
                    const { x: Ne, y: Dl } = sn(F, e.current), Al = we({
                        x: Ne,
                        y: Dl,
                        row: G.row,
                        col: G.col,
                        zoom: e.current.zoom
                    });
                    A.style.cursor = Al === "rotate" || Al === "resize" ? "grab" : Al === "move" ? "move" : "crosshair";
                }
            } else F.currentTarget.style.cursor = "crosshair";
            if (!(!l && !f)) if (o === "draw" && l) Q({
                row: G.row,
                col: G.col
            });
            else if (o === "line" && i) {
                const { col: A, row: Ne } = bt(F, e.current, a);
                E({
                    row: Ne,
                    col: A
                });
            } else if (o === "rect" && s) {
                const { col: A, row: Ne } = bt(F, e.current, a);
                R({
                    row: Ne,
                    col: A
                });
            } else if (o === "select" && f && c === "resize") {
                const { col: A, row: Ne } = bt(F, e.current, a);
                S({
                    row: Ne,
                    col: A
                });
            } else if (o === "select" && f && c === "rotate") {
                const { x: A, y: Ne } = sn(F, e.current);
                N(A, Ne);
            } else o === "select" && f && (c === "box" && g ? w({
                row: G.row,
                col: G.col
            }) : c === "drag" && h && d.length > 0 && me({
                row: G.row,
                col: G.col
            }));
        }, [
            o,
            a,
            l,
            f,
            i,
            s,
            c,
            g,
            h,
            d,
            O,
            we,
            Q,
            E,
            R,
            w,
            me,
            S,
            N,
            e,
            r,
            t
        ]), Tn = C.useCallback((F)=>{
            if (r.current) {
                r.current = null, F.currentTarget.style.cursor = n.current ? "grab" : "crosshair";
                return;
            }
            if (o === "draw") j(), T();
            else if (o === "line") {
                if (i) {
                    const { col: G, row: A } = bt(F, e.current, a);
                    W(i.row, i.col, A, G);
                }
                q();
            } else if (o === "rect") {
                if (s) {
                    const { col: G, row: A } = bt(F, e.current, a);
                    V(s.row, s.col, A, G);
                }
                Qe();
            } else if (o === "select") {
                if (c === "rotate") {
                    const { x: G, y: A } = sn(F, e.current);
                    _(G, A);
                } else if (c === "resize") {
                    const { col: G, row: A } = bt(F, e.current, a);
                    k({
                        row: A,
                        col: G
                    });
                } else if (c === "box") {
                    const { col: G, row: A } = zn(F, e.current, a);
                    y({
                        row: A,
                        col: G
                    });
                } else if (c === "drag") {
                    const { col: G, row: A } = zn(F, e.current, a);
                    p({
                        row: A,
                        col: G
                    });
                }
            }
        }, [
            o,
            a,
            i,
            s,
            c,
            T,
            q,
            Qe,
            y,
            p,
            k,
            _,
            j,
            W,
            V,
            e,
            n,
            r
        ]), sr = C.useCallback(()=>{
            if (r.current) {
                r.current = null;
                return;
            }
            o === "draw" ? T() : o === "line" ? oe() : o === "rect" ? ir() : o === "select" && (c === "box" ? x() : c === "drag" ? m() : c === "resize" ? z() : c === "rotate" && D());
        }, [
            o,
            c,
            T,
            oe,
            ir,
            x,
            m,
            z,
            D,
            r
        ]);
        return {
            handleMouseDown: fe,
            handleDoubleClick: so,
            handleMouseMove: En,
            handleMouseUp: Tn,
            handleMouseLeave: sr
        };
    }
    function qy() {
        const { tool: e, setTool: t, setColorIdx: n, selectedItems: r, deleteSelected: o, selectAll: l, clipboard: i, copy: s, paste: a, cycleSubdivision: u, undo: d, redo: c } = U();
        C.useEffect(()=>{
            const f = (g)=>{
                if (U.getState().textEdit) return;
                g.key === "\\" && t(e === "line" ? "draw" : "line"), g.key === "m" && t(e === "rect" ? "draw" : "rect"), g.key === "t" && t(e === "text" ? "draw" : "text"), g.key === "s" && t(e === "select" ? "draw" : "select"), (g.key === "Delete" || g.key === "Backspace") && r.length > 0 && (g.preventDefault(), o()), (g.ctrlKey || g.metaKey) && g.key.toLowerCase() === "a" && (g.preventDefault(), l()), (g.ctrlKey || g.metaKey) && g.key === "c" && r.length > 0 && (g.preventDefault(), s()), (g.ctrlKey || g.metaKey) && g.key === "v" && i && (g.preventDefault(), a()), (g.ctrlKey || g.metaKey) && g.key.toLowerCase() === "g" && (g.preventDefault(), u()), (g.ctrlKey || g.metaKey) && !g.shiftKey && g.key.toLowerCase() === "z" && (g.preventDefault(), d()), (g.ctrlKey || g.metaKey) && (g.shiftKey && g.key.toLowerCase() === "z" || g.key.toLowerCase() === "y") && (g.preventDefault(), c());
                const h = parseInt(g.key);
                h >= 1 && h <= 7 && n(h - 1);
            };
            return window.addEventListener("keydown", f), ()=>window.removeEventListener("keydown", f);
        }, [
            e,
            t,
            n,
            r,
            o,
            s,
            a,
            i,
            d,
            c,
            l,
            u
        ]);
    }
    function Yy(e, t, n, r) {
        const i = (h)=>e[h * 4] > 227 && e[h * 4 + 1] > 227 && e[h * 4 + 2] > 227, s = new Uint8Array(t * n), a = new Int32Array(t * n);
        let u = 0, d = 0;
        const c = (h)=>{
            !s[h] && i(h) && (s[h] = 1, a[d++] = h);
        };
        for(let h = 0; h < t; h++)c(h), c((n - 1) * t + h);
        for(let h = 0; h < n; h++)c(h * t), c(h * t + (t - 1));
        for(; u < d;){
            const h = a[u++], w = h % t;
            w > 0 && c(h - 1), w < t - 1 && c(h + 1), h >= t && c(h - t), h < t * (n - 1) && c(h + t);
        }
        let f = 0;
        for(let h = 0; h < t * n; h++)s[h] && (e[h * 4 + 3] = 0, f++);
        if (f === 0 || r?.feather === !1) return f;
        const g = new Uint8ClampedArray(t * n);
        for(let h = 0; h < n; h++)for(let w = 0; w < t; w++){
            let y = 0, x = 0;
            for(let p = -1; p <= 1; p++)for(let m = -1; m <= 1; m++){
                const S = w + m, k = h + p;
                S >= 0 && S < t && k >= 0 && k < n && (y += e[(k * t + S) * 4 + 3], x++);
            }
            g[h * t + w] = y / x;
        }
        for(let h = 0; h < t * n; h++)e[h * 4 + 3] = g[h];
        return f;
    }
    async function Xy(e) {
        const t = await createImageBitmap(e);
        try {
            const n = document.createElement("canvas");
            n.width = t.width, n.height = t.height;
            const r = n.getContext("2d");
            if (!r) throw new Error("canvas 2d context unavailable");
            r.drawImage(t, 0, 0);
            const o = r.getImageData(0, 0, t.width, t.height);
            if (Yy(o.data, t.width, t.height) === 0) return e;
            r.putImageData(o, 0, 0);
            const i = await new Promise((s)=>n.toBlob(s, "image/png"));
            if (!i) throw new Error("PNG encode failed");
            return i;
        } finally{
            t.close();
        }
    }
    const oc = 16;
    function Zy(e, t) {
        const n = U((u)=>u.placeImage), r = C.useRef(null), [o, l] = C.useState(""), [i, s] = C.useState(!1), a = C.useCallback(async (u)=>{
            try {
                let d;
                if (typeof u == "string") d = u;
                else {
                    let k = u;
                    i && (l("Removing background…"), k = await Xy(k)), l("Uploading…"), d = await by(k);
                }
                l("Loading…");
                const { width: c, height: f } = await Sg(d), g = Math.max(c, f) || 1, h = Math.max(1, Math.round(c / g * oc)), w = Math.max(1, Math.round(f / g * oc)), y = e.current, x = Math.round((y.x + t.w / 2 / y.zoom) / mn / mt) * mt, p = Math.round((y.y + t.h / 2 / y.zoom) / mn / mt) * mt, m = x - Math.round(h / 2) * mt, S = p - Math.round(w / 2) * mt;
                n(d, {
                    r1: S,
                    c1: m,
                    r2: S + w * mt,
                    c2: m + h * mt
                }), l("");
            } catch (d) {
                l(d instanceof Error ? d.message : "image failed");
            }
        }, [
            n,
            t.w,
            t.h,
            i,
            e
        ]);
        return C.useEffect(()=>{
            const u = (d)=>{
                if (U.getState().textEdit) return;
                const c = d.clipboardData?.items;
                if (c) {
                    for (const f of c)if (f.kind === "file" && f.type.startsWith("image/")) {
                        const g = f.getAsFile();
                        if (g) {
                            d.preventDefault(), a(g);
                            return;
                        }
                    }
                }
            };
            return document.addEventListener("paste", u), ()=>document.removeEventListener("paste", u);
        }, [
            a
        ]), {
            imageInputRef: r,
            imgStatus: o,
            removeBg: i,
            setRemoveBg: s,
            addImageObject: a
        };
    }
    const Jy = 600;
    function ev() {
        const e = import.meta;
        if ("env" in e) {
            const t = e.env;
            if (typeof t == "object" && t !== null && "BASE_URL" in t && typeof t.BASE_URL == "string") return t.BASE_URL;
        }
        return "/grid-draw/";
    }
    const tv = ev();
    let lc, Tp = !1;
    function hi(e) {
        Tp = e;
    }
    function nv() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function rv(e) {
        return e.cells.length + e.lines.length + e.rects.length + e.texts.length + (e.images?.length ?? 0) > 0;
    }
    function ov() {
        clearTimeout(lc), lc = setTimeout(lv, Jy);
    }
    async function lv() {
        const e = U.getState();
        if (!e.grid) return;
        const t = e.serializeWholeGrid();
        if (!t) return;
        let n = e.currentName;
        if (!n) {
            if (Tp || !rv(t)) return;
            n = nv(), e.setCurrentName(n), window.history.replaceState({}, "", `${tv}design/${n}/`);
        }
        e.setSaveState("saving");
        try {
            await ue.getState().saveDrawing(n, t, e.exportHistory()), U.getState().setSaveState("saved");
        } catch (r) {
            U.getState().setSaveState("error", r instanceof Error ? r.message : String(r));
        }
    }
    U.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && ov();
    });
    function iv(e) {
        const { clear: t, resetHistory: n, setSaveState: r, buildTrainingExample: o, finishTrainingCapture: l, serializeWholeGrid: i, loadDesignWithHistory: s, setCurrentName: a } = U(), u = ue((j)=>j.getDrawing), d = ue((j)=>j.getDrawingById), c = ue((j)=>j.saveExamplePair), f = ue((j)=>j.updateExamplePair), g = ue((j)=>j.runPredict), h = ue((j)=>j.trainModel), w = ue((j)=>j.initModel), y = ue((j)=>j.modelStatus), x = ue((j)=>j.training), [p, m] = C.useState(""), [S, k] = C.useState(!1), [z, N] = C.useState(!1), [_, D] = C.useState(null);
        C.useEffect(()=>{
            if (!e) return;
            let j = !1;
            const T = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (T) return u(T[1]).then((E)=>{
                j || (s(E.design, E.history ?? null), a(E.name));
            }).catch(()=>m(`No drawing named "${T[1]}".`)), ()=>{
                j = !0;
            };
            const L = new URLSearchParams(window.location.search).get("load");
            if (L) return d(Number(L)).then((E)=>{
                j || (s(E.design, E.history ?? null), a(E.name), window.history.replaceState({}, "", `${vr}design/${encodeURIComponent(E.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", vr);
            }), ()=>{
                j = !0;
            };
        }, [
            e,
            s,
            a,
            u,
            d
        ]), C.useEffect(()=>{
            w();
        }, [
            w
        ]);
        const O = C.useCallback(async ()=>{
            const j = o();
            if (!j) {
                m("Select the output region first.");
                return;
            }
            m("Saving…");
            try {
                await c(j.input, j.output, j.delta), l(), m("Saved.");
            } catch (T) {
                m(`Save failed: ${T instanceof Error ? T.message : String(T)}`);
            }
        }, [
            o,
            l,
            c
        ]), J = C.useCallback(async ()=>{
            m("Training in the browser…");
            try {
                await h(), m("Model trained. Try Predict from Selection.");
            } catch (j) {
                m(`Train failed: ${j instanceof Error ? j.message : String(j)}`);
            }
        }, [
            h
        ]), me = C.useCallback(async ()=>{
            const { grid: j, selectedItems: T } = U.getState();
            if (!j) return;
            const L = Lr(j, T);
            if (!L) {
                m("Select an input region to predict from.");
                return;
            }
            const E = Ae(T, j), W = E ? E.minRow : 0, q = E ? E.minCol : 0;
            m("Predicting…");
            try {
                const oe = await g(L);
                U.getState().placeDesign(oe, W, q), m(Vy(oe) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (oe) {
                m(`Predict failed: ${oe instanceof Error ? oe.message : String(oe)}`);
            }
        }, [
            g
        ]), we = C.useCallback(async (j)=>{
            const T = await u(j);
            s(T.design, T.history ?? null), a(T.name), D(null), hi(!1), window.history.replaceState({}, "", `${vr}design/${encodeURIComponent(T.name)}/`), k(!1);
        }, [
            s,
            a,
            u
        ]), X = C.useCallback((j, T)=>{
            const L = T === "input" ? j.input : j.output, E = T === "input" ? j.output : j.input;
            s(L, null), a(null), hi(!0), D({
                id: j.id,
                half: T,
                otherHalf: E
            }), window.history.replaceState({}, "", vr), N(!1), m(`Editing example #${j.id} (${T}) — click "Update example" to save over it.`);
        }, [
            s,
            a
        ]), de = C.useCallback(async ()=>{
            if (!_) return;
            const j = i();
            if (!j) {
                m("Nothing to save — draw something first.");
                return;
            }
            const { id: T, half: L, otherHalf: E } = _, W = L === "input" ? j : E, q = L === "output" ? j : E;
            m(`Updating example #${T}…`);
            try {
                await f(T, W, q), m(`Example #${T} (${L}) updated.`);
            } catch (oe) {
                m(`Update failed: ${oe instanceof Error ? oe.message : String(oe)}`);
            }
        }, [
            _,
            i,
            f
        ]), Q = C.useCallback(()=>{
            a(null), D(null), hi(!1), t(), n(), r("idle"), window.history.replaceState({}, "", vr), m("");
        }, [
            a,
            t,
            n,
            r
        ]);
        return {
            trainStatus: p,
            galleryOpen: S,
            setGalleryOpen: k,
            trainingOpen: z,
            setTrainingOpen: N,
            editingExample: _,
            modelStatus: y,
            training: x,
            saveTrainingExample: O,
            startTraining: J,
            predictFromSelection: me,
            openDrawing: we,
            editExampleHalf: X,
            saveExampleUpdate: de,
            newDrawing: Q
        };
    }
    function sv({ cam: e }) {
        const t = U((f)=>f.textEdit), n = U((f)=>f.colorIdx), r = U((f)=>f.setTextEditText), o = U((f)=>f.commitTextEdit), l = U((f)=>f.cancelTextEdit), i = C.useRef(null), s = t ? `${t.row},${t.col},${t.editing?.idx ?? "new"}` : null;
        if (C.useEffect(()=>{
            if (s === null) return;
            const f = i.current;
            f && (f.focus({
                preventScroll: !0
            }), f.setSelectionRange(f.value.length, f.value.length));
        }, [
            s
        ]), !t) return null;
        const a = t.size * mt * mn * e.zoom, u = (t.col * mn - e.x) * e.zoom, d = (t.row * mn - e.y) * e.zoom + nn, c = Cp[t.editing?.original.color ?? n]?.hex ?? "#000000";
        return v.jsx("input", {
            ref: i,
            "aria-label": "Edit text",
            value: t.text,
            onChange: (f)=>r(f.target.value),
            onKeyDown: (f)=>{
                f.stopPropagation(), f.key === "Enter" && (f.preventDefault(), o()), f.key === "Escape" && (f.preventDefault(), l());
            },
            onBlur: ()=>{
                setTimeout(()=>{
                    U.getState().textEdit && i.current?.focus({
                        preventScroll: !0
                    });
                }, 0);
            },
            autoComplete: "off",
            spellCheck: !1,
            style: {
                position: "fixed",
                left: u,
                top: d,
                height: a,
                width: `${Math.max(t.text.length + 1, 2)}ch`,
                minWidth: a,
                font: `${a}px 'BigBlue Terminal', monospace`,
                lineHeight: `${a}px`,
                color: c,
                background: "rgba(255, 255, 255, 0.85)",
                border: "none",
                outline: "1.5px solid #ff8800",
                padding: 0,
                margin: 0,
                zIndex: 40
            }
        });
    }
    const Ip = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const av = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const uv = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const ic = (e)=>{
        const t = uv(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var cv = {
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
    const dv = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const fv = C.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>C.createElement("svg", {
            ref: a,
            ...cv,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Ip("lucide", o),
            ...!l && !dv(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, d])=>C.createElement(u, d)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const zp = (e, t)=>{
        const n = C.forwardRef(({ className: r, ...o }, l)=>C.createElement(fv, {
                ref: l,
                iconNode: t,
                className: Ip(`lucide-${av(ic(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = ic(e), n;
    };
    const pv = [
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
    ], mv = zp("redo-2", pv);
    const hv = [
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
    ], gv = zp("undo-2", hv), xv = Of("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), Np = C.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function zo({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return v.jsx(Ex, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: _n("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: v.jsx(Np.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function ot({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = C.useContext(Np);
        return v.jsx(Tx, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: _n(xv({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function sc({ activeIdx: e, onPick: t, titleFor: n }) {
        return v.jsx("div", {
            className: "flex gap-1",
            children: Cp.map((r, o)=>v.jsx("button", {
                    onClick: ()=>t(o),
                    title: n(o, r.name),
                    className: _n("w-6 h-6 rounded border-2 transition-all", e === o ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", r.hex === "#ffffff" && "shadow-sm"),
                    style: {
                        backgroundColor: r.hex ?? "transparent",
                        backgroundImage: r.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                        backgroundSize: r.hex === null ? "6px 6px" : void 0,
                        backgroundPosition: r.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                    }
                }, o))
        });
    }
    function yv(e) {
        return e === "draw" || e === "line" || e === "rect" || e === "text" || e === "select";
    }
    function vv({ loading: e, imageInputRef: t, imgStatus: n, removeBg: r, setRemoveBg: o, addImageObject: l, editingExample: i, saveExampleUpdate: s, newDrawing: a, onOpenGallery: u }) {
        const d = U(), { tool: c, setTool: f, colorIdx: g, pickColor: h, outlineIdx: w, pickOutline: y, textSize: x, pickTextSize: p, lineWidth: m, pickLineWidth: S, pickTextAlign: k, subdivision: z, setSubdivision: N, selectedItems: _, clear: D, undo: O, redo: J, canUndo: me, canRedo: we } = d;
        d.historyTick;
        const { grid: X } = d, de = d.selectedItems.filter((R)=>R.type === "text"), Q = d.selectedItems.filter((R)=>R.type === "line"), j = d.selectedItems.filter((R)=>R.type === "rect"), T = (R)=>R.every((V)=>V === R[0]) ? String(R[0]) : "", L = X && de.length > 0 ? T(de.map((R)=>X.get_text_size(R.index))) : String(x), E = X && Q.length > 0 ? T(Q.map((R)=>If(X.get_line(R.index)[5]))) : String(m), W = X ? d.selectedItems.filter((R)=>R.type !== "image") : [], q = (R)=>X ? R.type === "cell" ? X.get_square(R.index)[2] : R.type === "line" ? X.get_line(R.index)[4] : R.type === "rect" ? X.get_rect(R.index)[4] : X.get_text(R.index)[2] : -1, oe = W.length > 0 ? T(W.map(q)) === "" ? -1 : q(W[0]) : g, Ce = X && j.length > 0 ? T(j.map((R)=>X.get_rect(R.index)[5])) === "" ? -1 : X.get_rect(j[0].index)[5] : w;
        return v.jsx(lr, {
            title: "Tools",
            defaultPosition: {
                x: 20,
                y: nn + 20
            },
            children: v.jsxs("div", {
                className: "space-y-3",
                children: [
                    v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Mode"
                            }),
                            v.jsxs(zo, {
                                type: "single",
                                value: c,
                                onValueChange: (R)=>{
                                    yv(R) && f(R);
                                },
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    v.jsx(ot, {
                                        value: "draw",
                                        className: "text-xs",
                                        children: "Draw"
                                    }),
                                    v.jsx(ot, {
                                        value: "line",
                                        className: "text-xs",
                                        children: "Line"
                                    }),
                                    v.jsx(ot, {
                                        value: "rect",
                                        className: "text-xs",
                                        children: "Rect"
                                    }),
                                    v.jsx(ot, {
                                        value: "text",
                                        className: "text-xs",
                                        children: "Text"
                                    }),
                                    v.jsx(ot, {
                                        value: "select",
                                        className: "text-xs",
                                        children: "Select"
                                    })
                                ]
                            })
                        ]
                    }),
                    v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Grid (Ctrl+G)"
                            }),
                            v.jsxs(zo, {
                                type: "single",
                                value: String(z),
                                onValueChange: (R)=>R && N(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    v.jsx(ot, {
                                        value: "1",
                                        className: "text-xs",
                                        title: "Whole cells",
                                        children: "1×"
                                    }),
                                    v.jsx(ot, {
                                        value: "2",
                                        className: "text-xs",
                                        title: "Half cells",
                                        children: "½"
                                    }),
                                    v.jsx(ot, {
                                        value: "4",
                                        className: "text-xs",
                                        title: "Quarter cells",
                                        children: "¼"
                                    }),
                                    v.jsx(ot, {
                                        value: "8",
                                        className: "text-xs",
                                        title: "Eighth cells",
                                        children: "⅛"
                                    })
                                ]
                            })
                        ]
                    }),
                    v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Image"
                            }),
                            v.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>t.current?.click(),
                                        title: "Upload an image (transparent PNG works best)",
                                        children: "Upload"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>{
                                            const R = window.prompt("Image URL (transparent PNG works best):");
                                            R && R.trim() && l(R.trim());
                                        },
                                        title: "Add an image by URL",
                                        children: "From URL"
                                    })
                                ]
                            }),
                            v.jsx("p", {
                                className: "text-[10px] text-gray-400 mt-1",
                                children: "…or paste an image (Ctrl/Cmd+V)"
                            }),
                            v.jsxs("label", {
                                className: "flex items-center gap-1.5 text-[10px] text-gray-500 mt-1 cursor-pointer",
                                title: "Flood-fills the white backdrop (connected to the image edges) into transparency before upload. White areas inside the subject are kept.",
                                children: [
                                    v.jsx("input", {
                                        type: "checkbox",
                                        checked: r,
                                        onChange: (R)=>o(R.target.checked)
                                    }),
                                    "Remove white background"
                                ]
                            }),
                            n && v.jsx("p", {
                                className: "text-[10px] text-gray-500 mt-1",
                                children: n
                            }),
                            v.jsx("input", {
                                ref: t,
                                type: "file",
                                accept: "image/png,image/jpeg,image/webp,image/gif",
                                className: "hidden",
                                onChange: (R)=>{
                                    const V = R.target.files?.[0];
                                    V && l(V), R.target.value = "";
                                }
                            })
                        ]
                    }),
                    (c === "text" || de.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Text size"
                            }),
                            v.jsx(zo, {
                                type: "single",
                                value: L,
                                onValueChange: (R)=>R && p(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: Ef.map((R)=>v.jsxs(ot, {
                                        value: String(R),
                                        className: "text-xs",
                                        children: [
                                            R,
                                            "×"
                                        ]
                                    }, R))
                            })
                        ]
                    }),
                    (c === "text" || de.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Text align (drag the box to resize)"
                            }),
                            v.jsxs("div", {
                                className: "flex gap-1 mb-1",
                                children: [
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(0, null),
                                        children: "Left"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(1, null),
                                        children: "Center"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(2, null),
                                        children: "Right"
                                    })
                                ]
                            }),
                            v.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(null, 0),
                                        children: "Top"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(null, 1),
                                        children: "Middle"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(null, 2),
                                        children: "Bottom"
                                    })
                                ]
                            })
                        ]
                    }),
                    (c === "line" || Q.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Line width"
                            }),
                            v.jsx(zo, {
                                type: "single",
                                value: E,
                                onValueChange: (R)=>R && S(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: Tf.map((R)=>v.jsxs(ot, {
                                        value: String(R),
                                        className: "text-xs",
                                        children: [
                                            R,
                                            "×"
                                        ]
                                    }, R))
                            })
                        ]
                    }),
                    (_.length === 0 || W.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Color"
                            }),
                            v.jsx(sc, {
                                activeIdx: oe,
                                onPick: h,
                                titleFor: (R, V)=>`${R + 1}: ${V}`
                            })
                        ]
                    }),
                    (c === "rect" || j.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Outline (rects)"
                            }),
                            v.jsx(sc, {
                                activeIdx: Ce,
                                onPick: y,
                                titleFor: (R, V)=>R === 6 ? "No outline" : V
                            })
                        ]
                    }),
                    v.jsxs("div", {
                        className: "flex gap-1",
                        children: [
                            v.jsx(H, {
                                variant: "outline",
                                onClick: O,
                                disabled: e || !me(),
                                size: "sm",
                                className: "flex-1",
                                title: "Undo (Ctrl/Cmd+Z)",
                                children: v.jsx(gv, {
                                    className: "w-4 h-4"
                                })
                            }),
                            v.jsx(H, {
                                variant: "outline",
                                onClick: J,
                                disabled: e || !we(),
                                size: "sm",
                                className: "flex-1",
                                title: "Redo (Ctrl/Cmd+Shift+Z)",
                                children: v.jsx(mv, {
                                    className: "w-4 h-4"
                                })
                            })
                        ]
                    }),
                    v.jsx(H, {
                        variant: "outline",
                        onClick: u,
                        size: "sm",
                        className: "w-full",
                        children: "Gallery"
                    }),
                    i && v.jsxs(H, {
                        variant: "outline",
                        onClick: s,
                        disabled: e,
                        size: "sm",
                        className: "w-full border-amber-400 text-amber-700 hover:bg-amber-50",
                        title: `Overwrite training example #${i.id}'s ${i.half} with the current canvas`,
                        children: [
                            "Update example #",
                            i.id,
                            " (",
                            i.half,
                            ")"
                        ]
                    }),
                    v.jsx(H, {
                        variant: "destructive",
                        onClick: D,
                        disabled: e,
                        size: "sm",
                        className: "w-full",
                        children: "Clear Grid"
                    }),
                    v.jsx(H, {
                        onClick: a,
                        disabled: e,
                        size: "sm",
                        className: "w-full bg-green-600 hover:bg-green-700 text-white",
                        children: "New Drawing"
                    }),
                    v.jsx("p", {
                        className: "text-xs text-gray-400",
                        children: "\\ line, m rect, t text, s select, 1-7 colors, ⌘Z undo"
                    })
                ]
            })
        });
    }
    function wv() {
        const { selectedItems: e, getSelectedCells: t, jsonOutput: n, tensorOutput: r, importJson: o, importTensor: l } = U(), i = t();
        return v.jsx(lr, {
            title: "Selection Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: nn + 20
            },
            children: v.jsxs("div", {
                className: "space-y-3 w-72",
                children: [
                    i.length > 0 && v.jsxs(v.Fragment, {
                        children: [
                            v.jsxs("div", {
                                children: [
                                    v.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "JSON (sparse)"
                                    }),
                                    v.jsx("textarea", {
                                        value: n,
                                        onChange: (s)=>o(s.target.value),
                                        placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            }),
                            v.jsxs("div", {
                                children: [
                                    v.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "2D Array (black = 1)"
                                    }),
                                    v.jsx("textarea", {
                                        value: r,
                                        onChange: (s)=>l(s.target.value),
                                        placeholder: "[[1, 0], [0, 1], ...]",
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            })
                        ]
                    }),
                    v.jsx("p", {
                        className: "text-xs text-gray-400",
                        children: e.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${e.length} item${e.length !== 1 ? "s" : ""} selected${i.length > 0 ? ` (${i.length} cell${i.length !== 1 ? "s" : ""})` : ""}.`
                    })
                ]
            })
        });
    }
    function Sv({ loading: e, trainStatus: t, modelStatus: n, training: r, saveTrainingExample: o, startTraining: l, predictFromSelection: i, onViewTrainingData: s }) {
        const { selectedItems: a, captureMode: u, captureInput: d, startTrainingCapture: c, captureSetInput: f, cancelTrainingCapture: g } = U();
        return v.jsx(lr, {
            title: "Training Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: nn + 360
            },
            children: v.jsxs("div", {
                className: "space-y-3 w-72",
                children: [
                    u === "idle" && v.jsxs(v.Fragment, {
                        children: [
                            v.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                            }),
                            v.jsx(H, {
                                size: "sm",
                                className: "w-full",
                                onClick: c,
                                disabled: e,
                                children: "Make Training Data"
                            }),
                            v.jsx(H, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: i,
                                disabled: e || a.length === 0 || n !== "ready",
                                title: n !== "ready" ? "Train a model first" : "Map the selection through the model",
                                children: "Predict from Selection"
                            }),
                            v.jsx(H, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: l,
                                disabled: e || r?.status === "running",
                                children: r?.status === "running" ? "Training…" : "Start Training Run"
                            }),
                            v.jsx(H, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: s,
                                children: "View Training Data"
                            })
                        ]
                    }),
                    u === "input" && v.jsxs(v.Fragment, {
                        children: [
                            v.jsx("p", {
                                className: "text-xs font-medium text-blue-600",
                                children: "Step 1/2 — select the INPUT, then click Next."
                            }),
                            v.jsxs("p", {
                                className: "text-xs text-gray-400",
                                children: [
                                    a.length,
                                    " item(s) selected."
                                ]
                            }),
                            v.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    v.jsx(H, {
                                        size: "sm",
                                        className: "flex-1",
                                        onClick: f,
                                        disabled: a.length === 0,
                                        children: "Next →"
                                    }),
                                    v.jsx(H, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "flex-1",
                                        onClick: g,
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }),
                    u === "output" && v.jsxs(v.Fragment, {
                        children: [
                            v.jsx("p", {
                                className: "text-xs font-medium text-green-600",
                                children: "Step 2/2 — select the OUTPUT, then Save."
                            }),
                            v.jsxs("p", {
                                className: "text-xs text-gray-400",
                                children: [
                                    "Input: ",
                                    d ? `${d.cells.length}c ${d.lines.length}l ${d.rects.length}r ${d.texts.length}t` : "—",
                                    " · Output: ",
                                    a.length,
                                    " item(s)"
                                ]
                            }),
                            v.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    v.jsx(H, {
                                        size: "sm",
                                        className: "flex-1",
                                        onClick: o,
                                        disabled: a.length === 0,
                                        children: "Save Example"
                                    }),
                                    v.jsx(H, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "flex-1",
                                        onClick: g,
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }),
                    t && v.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: t
                    })
                ]
            })
        });
    }
    function kv({ training: e }) {
        const t = e.total > 0 ? Math.min(100, Math.round(e.epoch / e.total * 100)) : e.status === "done" ? 100 : 0, n = e.status === "error" ? "bg-red-500" : e.status === "done" ? "bg-green-500" : "bg-blue-500";
        return v.jsx(lr, {
            title: "Training",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: nn + 540
            },
            children: v.jsxs("div", {
                className: "space-y-2 w-72 text-xs",
                children: [
                    v.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                            v.jsx("span", {
                                className: "font-medium",
                                children: "In-browser model"
                            }),
                            v.jsx("span", {
                                className: "text-gray-400",
                                children: e.status
                            })
                        ]
                    }),
                    v.jsx("div", {
                        className: "h-1.5 bg-gray-200 rounded overflow-hidden",
                        children: v.jsx("div", {
                            className: _n("h-full", n),
                            style: {
                                width: `${t}%`
                            }
                        })
                    }),
                    v.jsxs("div", {
                        className: "flex justify-between text-gray-400",
                        children: [
                            v.jsx("span", {
                                children: e.total > 0 ? `epoch ${e.epoch}/${e.total} (${t}%)` : ""
                            }),
                            Number.isFinite(e.loss) && v.jsxs("span", {
                                children: [
                                    "loss ",
                                    e.loss.toFixed(4)
                                ]
                            })
                        ]
                    }),
                    e.message && v.jsx("p", {
                        className: "text-gray-400",
                        children: e.message
                    })
                ]
            })
        });
    }
    function _v() {
        const [e, t] = C.useState(()=>rc()), n = C.useRef(null), { grid: r, loading: o, error: l } = Gg(n, e.w, e.h), i = U((z)=>z.currentName), s = U((z)=>z.saveState), { cam: a, camRef: u, applyCamera: d, resetView: c, spaceHeld: f, isSpaceDown: g, panRef: h } = Ky(r, n), { handleMouseDown: w, handleDoubleClick: y, handleMouseMove: x, handleMouseUp: p, handleMouseLeave: m } = Qy({
            camRef: u,
            applyCamera: d,
            isSpaceDown: g,
            panRef: h
        });
        qy();
        const S = Zy(u, e), k = iv(r);
        return C.useEffect(()=>{
            const z = ()=>{
                const N = rc();
                if (t(N), !r) return;
                r.set_viewport(N.w, N.h);
                const _ = U.getState();
                _.selectedItems.length > 0 && _.renderSelection();
            };
            return window.addEventListener("resize", z), ()=>window.removeEventListener("resize", z);
        }, [
            r
        ]), l ? v.jsx("div", {
            className: "flex items-center justify-center bg-gray-100 min-h-screen",
            children: v.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: v.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        l
                    ]
                })
            })
        }) : v.jsxs(v.Fragment, {
            children: [
                v.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        v.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Sean's Autism World"
                        }),
                        o && v.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        }),
                        v.jsxs("div", {
                            className: "ml-auto flex items-center gap-3",
                            children: [
                                i && v.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        i,
                                        s === "saving" && " · saving…",
                                        s === "saved" && " · saved",
                                        s === "error" && " · save failed"
                                    ]
                                }),
                                (a.zoom !== 1 || a.x !== 0 || a.y !== 0) && v.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        v.jsxs("span", {
                                            className: "text-sm text-gray-500 tabular-nums",
                                            children: [
                                                Math.round(a.zoom * 100),
                                                "%"
                                            ]
                                        }),
                                        v.jsx(H, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: c,
                                            children: "Reset view"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                v.jsx("canvas", {
                    ref: n,
                    className: _n("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: nn,
                        cursor: o ? "wait" : f ? "grab" : "crosshair"
                    },
                    onMouseDown: w,
                    onDoubleClick: y,
                    onMouseMove: x,
                    onMouseUp: p,
                    onMouseLeave: m
                }),
                v.jsx(sv, {
                    cam: a
                }),
                v.jsx(vv, {
                    loading: o,
                    imageInputRef: S.imageInputRef,
                    imgStatus: S.imgStatus,
                    removeBg: S.removeBg,
                    setRemoveBg: S.setRemoveBg,
                    addImageObject: S.addImageObject,
                    editingExample: k.editingExample,
                    saveExampleUpdate: k.saveExampleUpdate,
                    newDrawing: k.newDrawing,
                    onOpenGallery: ()=>k.setGalleryOpen(!0)
                }),
                v.jsx(wv, {}),
                v.jsx(Sv, {
                    loading: o,
                    trainStatus: k.trainStatus,
                    modelStatus: k.modelStatus,
                    training: k.training,
                    saveTrainingExample: k.saveTrainingExample,
                    startTraining: k.startTraining,
                    predictFromSelection: k.predictFromSelection,
                    onViewTrainingData: ()=>k.setTrainingOpen(!0)
                }),
                k.training && v.jsx(kv, {
                    training: k.training
                }),
                k.galleryOpen && v.jsx(kp, {
                    asModal: !0,
                    onClose: ()=>k.setGalleryOpen(!1),
                    onOpenDesign: k.openDrawing
                }),
                k.trainingOpen && v.jsx(_p, {
                    asModal: !0,
                    onClose: ()=>k.setTrainingOpen(!1),
                    onEditExample: k.editExampleHalf
                })
            ]
        });
    }
    function Cv({ onSuccess: e }) {
        const [t, n] = C.useState(""), [r, o] = C.useState(""), [l, i] = C.useState(null), [s, a] = C.useState(!1), u = async (d)=>{
            d.preventDefault(), a(!0), i(null);
            try {
                await Cy(t, r), e();
            } catch (c) {
                i(String(c instanceof Error ? c.message : c));
            } finally{
                a(!1);
            }
        };
        return v.jsx("div", {
            className: "min-h-screen w-full bg-gray-50 flex items-center justify-center p-6",
            children: v.jsxs("form", {
                onSubmit: u,
                className: "bg-white rounded border p-6 w-80 flex flex-col gap-3",
                children: [
                    v.jsx("h1", {
                        className: "text-lg font-semibold",
                        children: "grid-draw"
                    }),
                    v.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        placeholder: "username",
                        autoComplete: "username",
                        value: t,
                        onChange: (d)=>n(d.target.value)
                    }),
                    v.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        type: "password",
                        placeholder: "password",
                        autoComplete: "current-password",
                        value: r,
                        onChange: (d)=>o(d.target.value)
                    }),
                    l && v.jsx("p", {
                        className: "text-sm text-red-500",
                        children: l
                    }),
                    v.jsx(H, {
                        type: "submit",
                        disabled: s || !t || !r,
                        children: s ? "Signing in…" : "Sign in"
                    })
                ]
            })
        });
    }
    function Ev() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function Tv() {
        const e = Ev(), [t, n] = C.useState(()=>gp() !== null);
        return C.useEffect(()=>{
            const r = ()=>n(!1);
            return window.addEventListener(ps, r), ()=>window.removeEventListener(ps, r);
        }, []), t ? v.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? v.jsx(kp, {}) : e === "training" ? v.jsx(_p, {}) : v.jsx(_v, {})
        }) : v.jsx(Cv, {
            onSuccess: ()=>n(!0)
        });
    }
    const ac = document.getElementById("grid-draw-root");
    ac && gi.createRoot(ac).render(v.jsx(ne.StrictMode, {
        children: v.jsx(Tv, {})
    }));
})();
export { zv as a, Iv as c, jp as g, __tla };
