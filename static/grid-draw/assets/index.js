let Pv, jv, Op;
let __tla = (async ()=>{
    function Lp(e, t) {
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
    jv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    Op = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    Pv = function(e) {
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
    var dc = {
        exports: {}
    }, Tl = {}, fc = {
        exports: {}
    }, U = {};
    var uo = Symbol.for("react.element"), Dp = Symbol.for("react.portal"), Ap = Symbol.for("react.fragment"), Fp = Symbol.for("react.strict_mode"), $p = Symbol.for("react.profiler"), Up = Symbol.for("react.provider"), Bp = Symbol.for("react.context"), Wp = Symbol.for("react.forward_ref"), Vp = Symbol.for("react.suspense"), Gp = Symbol.for("react.memo"), Hp = Symbol.for("react.lazy"), ka = Symbol.iterator;
    function Kp(e) {
        return e === null || typeof e != "object" ? null : (e = ka && e[ka] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var pc = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, mc = Object.assign, hc = {};
    function pr(e, t, n) {
        this.props = e, this.context = t, this.refs = hc, this.updater = n || pc;
    }
    pr.prototype.isReactComponent = {};
    pr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    pr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function gc() {}
    gc.prototype = pr.prototype;
    function xs(e, t, n) {
        this.props = e, this.context = t, this.refs = hc, this.updater = n || pc;
    }
    var vs = xs.prototype = new gc;
    vs.constructor = xs;
    mc(vs, pr.prototype);
    vs.isPureReactComponent = !0;
    var _a = Array.isArray, yc = Object.prototype.hasOwnProperty, ws = {
        current: null
    }, xc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function vc(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)yc.call(t, r) && !xc.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: uo,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: ws.current
        };
    }
    function Qp(e, t) {
        return {
            $$typeof: uo,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Ss(e) {
        return typeof e == "object" && e !== null && e.$$typeof === uo;
    }
    function Yp(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Ca = /\/+/g;
    function Vl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Yp("" + e.key) : t.toString(36);
    }
    function Ao(e, t, n, r, o) {
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
                    case uo:
                    case Dp:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + Vl(i, 0) : r, _a(o) ? (n = "", e != null && (n = e.replace(Ca, "$&/") + "/"), Ao(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Ss(o) && (o = Qp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ca, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", _a(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + Vl(l, s);
            i += Ao(l, t, n, a, o);
        }
        else if (a = Kp(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + Vl(l, s++), i += Ao(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function xo(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return Ao(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Xp(e) {
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
    var De = {
        current: null
    }, Fo = {
        transition: null
    }, Zp = {
        ReactCurrentDispatcher: De,
        ReactCurrentBatchConfig: Fo,
        ReactCurrentOwner: ws
    };
    function wc() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    U.Children = {
        map: xo,
        forEach: function(e, t, n) {
            xo(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return xo(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return xo(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Ss(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    U.Component = pr;
    U.Fragment = Ap;
    U.Profiler = $p;
    U.PureComponent = xs;
    U.StrictMode = Fp;
    U.Suspense = Vp;
    U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zp;
    U.act = wc;
    U.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = mc({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = ws.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)yc.call(t, a) && !xc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: uo,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    U.createContext = function(e) {
        return e = {
            $$typeof: Bp,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Up,
            _context: e
        }, e.Consumer = e;
    };
    U.createElement = vc;
    U.createFactory = function(e) {
        var t = vc.bind(null, e);
        return t.type = e, t;
    };
    U.createRef = function() {
        return {
            current: null
        };
    };
    U.forwardRef = function(e) {
        return {
            $$typeof: Wp,
            render: e
        };
    };
    U.isValidElement = Ss;
    U.lazy = function(e) {
        return {
            $$typeof: Hp,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Xp
        };
    };
    U.memo = function(e, t) {
        return {
            $$typeof: Gp,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    U.startTransition = function(e) {
        var t = Fo.transition;
        Fo.transition = {};
        try {
            e();
        } finally{
            Fo.transition = t;
        }
    };
    U.unstable_act = wc;
    U.useCallback = function(e, t) {
        return De.current.useCallback(e, t);
    };
    U.useContext = function(e) {
        return De.current.useContext(e);
    };
    U.useDebugValue = function() {};
    U.useDeferredValue = function(e) {
        return De.current.useDeferredValue(e);
    };
    U.useEffect = function(e, t) {
        return De.current.useEffect(e, t);
    };
    U.useId = function() {
        return De.current.useId();
    };
    U.useImperativeHandle = function(e, t, n) {
        return De.current.useImperativeHandle(e, t, n);
    };
    U.useInsertionEffect = function(e, t) {
        return De.current.useInsertionEffect(e, t);
    };
    U.useLayoutEffect = function(e, t) {
        return De.current.useLayoutEffect(e, t);
    };
    U.useMemo = function(e, t) {
        return De.current.useMemo(e, t);
    };
    U.useReducer = function(e, t, n) {
        return De.current.useReducer(e, t, n);
    };
    U.useRef = function(e) {
        return De.current.useRef(e);
    };
    U.useState = function(e) {
        return De.current.useState(e);
    };
    U.useSyncExternalStore = function(e, t, n) {
        return De.current.useSyncExternalStore(e, t, n);
    };
    U.useTransition = function() {
        return De.current.useTransition();
    };
    U.version = "18.3.1";
    fc.exports = U;
    var C = fc.exports;
    const le = Op(C), Sc = Lp({
        __proto__: null,
        default: le
    }, [
        C
    ]);
    var Jp = C, qp = Symbol.for("react.element"), em = Symbol.for("react.fragment"), tm = Object.prototype.hasOwnProperty, nm = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, rm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function kc(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)tm.call(t, r) && !rm.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: qp,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: nm.current
        };
    }
    Tl.Fragment = em;
    Tl.jsx = kc;
    Tl.jsxs = kc;
    dc.exports = Tl;
    var y = dc.exports, vi = {}, _c = {
        exports: {}
    }, Ze = {}, Cc = {
        exports: {}
    }, Ec = {};
    (function(e) {
        function t(N, b) {
            var T = N.length;
            N.push(b);
            e: for(; 0 < T;){
                var K = T - 1 >>> 1, Z = N[K];
                if (0 < o(Z, b)) N[K] = b, N[T] = Z, T = K;
                else break e;
            }
        }
        function n(N) {
            return N.length === 0 ? null : N[0];
        }
        function r(N) {
            if (N.length === 0) return null;
            var b = N[0], T = N.pop();
            if (T !== b) {
                N[0] = T;
                e: for(var K = 0, Z = N.length, me = Z >>> 1; K < me;){
                    var Fe = 2 * (K + 1) - 1, fe = N[Fe], q = Fe + 1, qe = N[q];
                    if (0 > o(fe, T)) q < Z && 0 > o(qe, fe) ? (N[K] = qe, N[q] = T, K = q) : (N[K] = fe, N[Fe] = T, K = Fe);
                    else if (q < Z && 0 > o(qe, T)) N[K] = qe, N[q] = T, K = q;
                    else break e;
                }
            }
            return b;
        }
        function o(N, b) {
            var T = N.sortIndex - b.sortIndex;
            return T !== 0 ? T : N.id - b.id;
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
        var a = [], u = [], d = 1, c = null, h = 3, v = !1, x = !1, w = !1, m = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function g(N) {
            for(var b = n(u); b !== null;){
                if (b.callback === null) r(u);
                else if (b.startTime <= N) r(u), b.sortIndex = b.expirationTime, t(a, b);
                else break;
                b = n(u);
            }
        }
        function S(N) {
            if (w = !1, g(N), !x) if (n(a) !== null) x = !0, X(k);
            else {
                var b = n(u);
                b !== null && P(S, b.startTime - N);
            }
        }
        function k(N, b) {
            x = !1, w && (w = !1, f(_), _ = -1), v = !0;
            var T = h;
            try {
                for(g(b), c = n(a); c !== null && (!(c.expirationTime > b) || N && !ne());){
                    var K = c.callback;
                    if (typeof K == "function") {
                        c.callback = null, h = c.priorityLevel;
                        var Z = K(c.expirationTime <= b);
                        b = e.unstable_now(), typeof Z == "function" ? c.callback = Z : c === n(a) && r(a), g(b);
                    } else r(a);
                    c = n(a);
                }
                if (c !== null) var me = !0;
                else {
                    var Fe = n(u);
                    Fe !== null && P(S, Fe.startTime - b), me = !1;
                }
                return me;
            } finally{
                c = null, h = T, v = !1;
            }
        }
        var E = !1, z = null, _ = -1, O = 5, D = -1;
        function ne() {
            return !(e.unstable_now() - D < O);
        }
        function ve() {
            if (z !== null) {
                var N = e.unstable_now();
                D = N;
                var b = !0;
                try {
                    b = z(!0, N);
                } finally{
                    b ? Ne() : (E = !1, z = null);
                }
            } else E = !1;
        }
        var Ne;
        if (typeof p == "function") Ne = function() {
            p(ve);
        };
        else if (typeof MessageChannel < "u") {
            var L = new MessageChannel, de = L.port2;
            L.port1.onmessage = ve, Ne = function() {
                de.postMessage(null);
            };
        } else Ne = function() {
            m(ve, 0);
        };
        function X(N) {
            z = N, E || (E = !0, Ne());
        }
        function P(N, b) {
            _ = m(function() {
                N(e.unstable_now());
            }, b);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
            N.callback = null;
        }, e.unstable_continueExecution = function() {
            x || v || (x = !0, X(k));
        }, e.unstable_forceFrameRate = function(N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < N ? Math.floor(1e3 / N) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return h;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(N) {
            switch(h){
                case 1:
                case 2:
                case 3:
                    var b = 3;
                    break;
                default:
                    b = h;
            }
            var T = h;
            h = b;
            try {
                return N();
            } finally{
                h = T;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, b) {
            switch(N){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    N = 3;
            }
            var T = h;
            h = N;
            try {
                return b();
            } finally{
                h = T;
            }
        }, e.unstable_scheduleCallback = function(N, b, T) {
            var K = e.unstable_now();
            switch(typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? K + T : K) : T = K, N){
                case 1:
                    var Z = -1;
                    break;
                case 2:
                    Z = 250;
                    break;
                case 5:
                    Z = 1073741823;
                    break;
                case 4:
                    Z = 1e4;
                    break;
                default:
                    Z = 5e3;
            }
            return Z = T + Z, N = {
                id: d++,
                callback: b,
                priorityLevel: N,
                startTime: T,
                expirationTime: Z,
                sortIndex: -1
            }, T > K ? (N.sortIndex = T, t(u, N), n(a) === null && N === n(u) && (w ? (f(_), _ = -1) : w = !0, P(S, T - K))) : (N.sortIndex = Z, t(a, N), x || v || (x = !0, X(k))), N;
        }, e.unstable_shouldYield = ne, e.unstable_wrapCallback = function(N) {
            var b = h;
            return function() {
                var T = h;
                h = b;
                try {
                    return N.apply(this, arguments);
                } finally{
                    h = T;
                }
            };
        };
    })(Ec);
    Cc.exports = Ec;
    var om = Cc.exports;
    var lm = C, Xe = om;
    function I(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Tc = new Set, Vr = {};
    function Rn(e, t) {
        lr(e, t), lr(e + "Capture", t);
    }
    function lr(e, t) {
        for(Vr[e] = t, e = 0; e < t.length; e++)Tc.add(t[e]);
    }
    var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wi = Object.prototype.hasOwnProperty, im = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ea = {}, Ta = {};
    function sm(e) {
        return wi.call(Ta, e) ? !0 : wi.call(Ea, e) ? !1 : im.test(e) ? Ta[e] = !0 : (Ea[e] = !0, !1);
    }
    function am(e, t, n, r) {
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
    function um(e, t, n, r) {
        if (t === null || typeof t > "u" || am(e, t, n, r)) return !0;
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
    function Ae(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var Re = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Re[e] = new Ae(e, 0, !1, e, null, !1, !1);
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
        Re[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Re[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var ks = /[\-:]([a-z])/g;
    function _s(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(ks, _s);
        Re[t] = new Ae(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(ks, _s);
        Re[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(ks, _s);
        Re[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Re.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        Re[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Cs(e, t, n, r) {
        var o = Re.hasOwnProperty(t) ? Re[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (um(t, n, o, r) && (n = null), r || o === null ? sm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Dt = lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vo = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), $n = Symbol.for("react.fragment"), Es = Symbol.for("react.strict_mode"), Si = Symbol.for("react.profiler"), Nc = Symbol.for("react.provider"), Ic = Symbol.for("react.context"), Ts = Symbol.for("react.forward_ref"), ki = Symbol.for("react.suspense"), _i = Symbol.for("react.suspense_list"), Ns = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), zc = Symbol.for("react.offscreen"), Na = Symbol.iterator;
    function yr(e) {
        return e === null || typeof e != "object" ? null : (e = Na && e[Na] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ce = Object.assign, Gl;
    function zr(e) {
        if (Gl === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Gl = t && t[1] || "";
        }
        return `
` + Gl + e;
    }
    var Hl = !1;
    function Kl(e, t) {
        if (!e || Hl) return "";
        Hl = !0;
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
            Hl = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? zr(e) : "";
    }
    function cm(e) {
        switch(e.tag){
            case 5:
                return zr(e.type);
            case 16:
                return zr("Lazy");
            case 13:
                return zr("Suspense");
            case 19:
                return zr("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = Kl(e.type, !1), e;
            case 11:
                return e = Kl(e.type.render, !1), e;
            case 1:
                return e = Kl(e.type, !0), e;
            default:
                return "";
        }
    }
    function Ci(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case $n:
                return "Fragment";
            case Fn:
                return "Portal";
            case Si:
                return "Profiler";
            case Es:
                return "StrictMode";
            case ki:
                return "Suspense";
            case _i:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Ic:
                return (e.displayName || "Context") + ".Consumer";
            case Nc:
                return (e._context.displayName || "Context") + ".Provider";
            case Ts:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Ns:
                return t = e.displayName || null, t !== null ? t : Ci(e.type) || "Memo";
            case Wt:
                t = e._payload, e = e._init;
                try {
                    return Ci(e(t));
                } catch  {}
        }
        return null;
    }
    function dm(e) {
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
                return Ci(t);
            case 8:
                return t === Es ? "StrictMode" : "Mode";
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
    function Rc(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function fm(e) {
        var t = Rc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function wo(e) {
        e._valueTracker || (e._valueTracker = fm(e));
    }
    function jc(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Rc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function qo(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Ei(e, t) {
        var n = t.checked;
        return ce({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Ia(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = rn(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Pc(e, t) {
        t = t.checked, t != null && Cs(e, "checked", t, !1);
    }
    function Ti(e, t) {
        Pc(e, t);
        var n = rn(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Ni(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ni(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function za(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Ni(e, t, n) {
        (t !== "number" || qo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Rr = Array.isArray;
    function qn(e, t, n, r) {
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
    function Ii(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
        return ce({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Ra(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(I(92));
                if (Rr(n)) {
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
    function Mc(e, t) {
        var n = rn(t.value), r = rn(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function ja(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function bc(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function zi(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? bc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var So, Lc = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(So = So || document.createElement("div"), So.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = So.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function Gr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var br = {
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
    }, pm = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(br).forEach(function(e) {
        pm.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e];
        });
    });
    function Oc(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px";
    }
    function Dc(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Oc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var mm = ce({
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
    function Ri(e, t) {
        if (t) {
            if (mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(I(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(I(62));
        }
    }
    function ji(e, t) {
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
    var Pi = null;
    function Is(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Mi = null, er = null, tr = null;
    function Pa(e) {
        if (e = po(e)) {
            if (typeof Mi != "function") throw Error(I(280));
            var t = e.stateNode;
            t && (t = jl(t), Mi(e.stateNode, e.type, t));
        }
    }
    function Ac(e) {
        er ? tr ? tr.push(e) : tr = [
            e
        ] : er = e;
    }
    function Fc() {
        if (er) {
            var e = er, t = tr;
            if (tr = er = null, Pa(e), t) for(e = 0; e < t.length; e++)Pa(t[e]);
        }
    }
    function $c(e, t) {
        return e(t);
    }
    function Uc() {}
    var Ql = !1;
    function Bc(e, t, n) {
        if (Ql) return e(t, n);
        Ql = !0;
        try {
            return $c(e, t, n);
        } finally{
            Ql = !1, (er !== null || tr !== null) && (Uc(), Fc());
        }
    }
    function Hr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = jl(n);
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
    var bi = !1;
    if (Mt) try {
        var xr = {};
        Object.defineProperty(xr, "passive", {
            get: function() {
                bi = !0;
            }
        }), window.addEventListener("test", xr, xr), window.removeEventListener("test", xr, xr);
    } catch  {
        bi = !1;
    }
    function hm(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (d) {
            this.onError(d);
        }
    }
    var Lr = !1, el = null, tl = !1, Li = null, gm = {
        onError: function(e) {
            Lr = !0, el = e;
        }
    };
    function ym(e, t, n, r, o, l, i, s, a) {
        Lr = !1, el = null, hm.apply(gm, arguments);
    }
    function xm(e, t, n, r, o, l, i, s, a) {
        if (ym.apply(this, arguments), Lr) {
            if (Lr) {
                var u = el;
                Lr = !1, el = null;
            } else throw Error(I(198));
            tl || (tl = !0, Li = u);
        }
    }
    function jn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Wc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Ma(e) {
        if (jn(e) !== e) throw Error(I(188));
    }
    function vm(e) {
        var t = e.alternate;
        if (!t) {
            if (t = jn(e), t === null) throw Error(I(188));
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
                    if (l === n) return Ma(o), e;
                    if (l === r) return Ma(o), t;
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
    function Vc(e) {
        return e = vm(e), e !== null ? Gc(e) : null;
    }
    function Gc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Gc(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Hc = Xe.unstable_scheduleCallback, ba = Xe.unstable_cancelCallback, wm = Xe.unstable_shouldYield, Sm = Xe.unstable_requestPaint, ye = Xe.unstable_now, km = Xe.unstable_getCurrentPriorityLevel, zs = Xe.unstable_ImmediatePriority, Kc = Xe.unstable_UserBlockingPriority, nl = Xe.unstable_NormalPriority, _m = Xe.unstable_LowPriority, Qc = Xe.unstable_IdlePriority, Nl = null, St = null;
    function Cm(e) {
        if (St && typeof St.onCommitFiberRoot == "function") try {
            St.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var pt = Math.clz32 ? Math.clz32 : Nm, Em = Math.log, Tm = Math.LN2;
    function Nm(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Em(e) / Tm | 0) | 0;
    }
    var ko = 64, _o = 4194304;
    function jr(e) {
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
    function rl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = jr(s) : (l &= i, l !== 0 && (r = jr(l)));
        } else i = n & ~o, i !== 0 ? r = jr(i) : l !== 0 && (r = jr(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - pt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function Im(e, t) {
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
    function zm(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - pt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = Im(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function Oi(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Yc() {
        var e = ko;
        return ko <<= 1, !(ko & 4194240) && (ko = 64), e;
    }
    function Yl(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function co(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
    }
    function Rm(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - pt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function Rs(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - pt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Y = 0;
    function Xc(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Zc, js, Jc, qc, ed, Di = !1, Co = [], Yt = null, Xt = null, Zt = null, Kr = new Map, Qr = new Map, Gt = [], jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function La(e, t) {
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
                Kr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Qr.delete(t.pointerId);
        }
    }
    function vr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = po(t), t !== null && js(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Pm(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Yt = vr(Yt, e, t, n, r, o), !0;
            case "dragenter":
                return Xt = vr(Xt, e, t, n, r, o), !0;
            case "mouseover":
                return Zt = vr(Zt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Kr.set(l, vr(Kr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Qr.set(l, vr(Qr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function td(e) {
        var t = vn(e.target);
        if (t !== null) {
            var n = jn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Wc(n), t !== null) {
                        e.blockedOn = t, ed(e.priority, function() {
                            Jc(n);
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
    function $o(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = Ai(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Pi = r, n.target.dispatchEvent(r), Pi = null;
            } else return t = po(n), t !== null && js(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Oa(e, t, n) {
        $o(e) && n.delete(t);
    }
    function Mm() {
        Di = !1, Yt !== null && $o(Yt) && (Yt = null), Xt !== null && $o(Xt) && (Xt = null), Zt !== null && $o(Zt) && (Zt = null), Kr.forEach(Oa), Qr.forEach(Oa);
    }
    function wr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Di || (Di = !0, Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Mm)));
    }
    function Yr(e) {
        function t(o) {
            return wr(o, e);
        }
        if (0 < Co.length) {
            wr(Co[0], e);
            for(var n = 1; n < Co.length; n++){
                var r = Co[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Yt !== null && wr(Yt, e), Xt !== null && wr(Xt, e), Zt !== null && wr(Zt, e), Kr.forEach(t), Qr.forEach(t), n = 0; n < Gt.length; n++)r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Gt.length && (n = Gt[0], n.blockedOn === null);)td(n), n.blockedOn === null && Gt.shift();
    }
    var nr = Dt.ReactCurrentBatchConfig, ol = !0;
    function bm(e, t, n, r) {
        var o = Y, l = nr.transition;
        nr.transition = null;
        try {
            Y = 1, Ps(e, t, n, r);
        } finally{
            Y = o, nr.transition = l;
        }
    }
    function Lm(e, t, n, r) {
        var o = Y, l = nr.transition;
        nr.transition = null;
        try {
            Y = 4, Ps(e, t, n, r);
        } finally{
            Y = o, nr.transition = l;
        }
    }
    function Ps(e, t, n, r) {
        if (ol) {
            var o = Ai(e, t, n, r);
            if (o === null) li(e, t, r, ll, n), La(e, r);
            else if (Pm(o, e, t, n, r)) r.stopPropagation();
            else if (La(e, r), t & 4 && -1 < jm.indexOf(e)) {
                for(; o !== null;){
                    var l = po(o);
                    if (l !== null && Zc(l), l = Ai(e, t, n, r), l === null && li(e, t, r, ll, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else li(e, t, r, null, n);
        }
    }
    var ll = null;
    function Ai(e, t, n, r) {
        if (ll = null, e = Is(r), e = vn(e), e !== null) if (t = jn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Wc(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return ll = e, null;
    }
    function nd(e) {
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
                switch(km()){
                    case zs:
                        return 1;
                    case Kc:
                        return 4;
                    case nl:
                    case _m:
                        return 16;
                    case Qc:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Kt = null, Ms = null, Uo = null;
    function rd() {
        if (Uo) return Uo;
        var e, t = Ms, n = t.length, r, o = "value" in Kt ? Kt.value : Kt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return Uo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Bo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Eo() {
        return !0;
    }
    function Da() {
        return !1;
    }
    function Je(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Eo : Da, this.isPropagationStopped = Da, this;
        }
        return ce(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Eo);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Eo);
            },
            persist: function() {},
            isPersistent: Eo
        }), t;
    }
    var mr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, bs = Je(mr), fo = ce({}, mr, {
        view: 0,
        detail: 0
    }), Om = Je(fo), Xl, Zl, Sr, Il = ce({}, fo, {
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
        getModifierState: Ls,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Xl = e.screenX - Sr.screenX, Zl = e.screenY - Sr.screenY) : Zl = Xl = 0, Sr = e), Xl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Zl;
        }
    }), Aa = Je(Il), Dm = ce({}, Il, {
        dataTransfer: 0
    }), Am = Je(Dm), Fm = ce({}, fo, {
        relatedTarget: 0
    }), Jl = Je(Fm), $m = ce({}, mr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Um = Je($m), Bm = ce({}, mr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Wm = Je(Bm), Vm = ce({}, mr, {
        data: 0
    }), Fa = Je(Vm), Gm = {
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
    }, Hm = {
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
    }, Km = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Qm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Km[e]) ? !!t[e] : !1;
    }
    function Ls() {
        return Qm;
    }
    var Ym = ce({}, fo, {
        key: function(e) {
            if (e.key) {
                var t = Gm[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = Bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hm[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ls,
        charCode: function(e) {
            return e.type === "keypress" ? Bo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Xm = Je(Ym), Zm = ce({}, Il, {
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
    }), $a = Je(Zm), Jm = ce({}, fo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ls
    }), qm = Je(Jm), eh = ce({}, mr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), th = Je(eh), nh = ce({}, Il, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), rh = Je(nh), oh = [
        9,
        13,
        27,
        32
    ], Os = Mt && "CompositionEvent" in window, Or = null;
    Mt && "documentMode" in document && (Or = document.documentMode);
    var lh = Mt && "TextEvent" in window && !Or, od = Mt && (!Os || Or && 8 < Or && 11 >= Or), Ua = " ", Ba = !1;
    function ld(e, t) {
        switch(e){
            case "keyup":
                return oh.indexOf(t.keyCode) !== -1;
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
    function id(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Un = !1;
    function ih(e, t) {
        switch(e){
            case "compositionend":
                return id(t);
            case "keypress":
                return t.which !== 32 ? null : (Ba = !0, Ua);
            case "textInput":
                return e = t.data, e === Ua && Ba ? null : e;
            default:
                return null;
        }
    }
    function sh(e, t) {
        if (Un) return e === "compositionend" || !Os && ld(e, t) ? (e = rd(), Uo = Ms = Kt = null, Un = !1, e) : null;
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
                return od && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var ah = {
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
    function Wa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!ah[e.type] : t === "textarea";
    }
    function sd(e, t, n, r) {
        Ac(r), t = il(t, "onChange"), 0 < t.length && (n = new bs("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Dr = null, Xr = null;
    function uh(e) {
        xd(e, 0);
    }
    function zl(e) {
        var t = Vn(e);
        if (jc(t)) return e;
    }
    function ch(e, t) {
        if (e === "change") return t;
    }
    var ad = !1;
    if (Mt) {
        var ql;
        if (Mt) {
            var ei = "oninput" in document;
            if (!ei) {
                var Va = document.createElement("div");
                Va.setAttribute("oninput", "return;"), ei = typeof Va.oninput == "function";
            }
            ql = ei;
        } else ql = !1;
        ad = ql && (!document.documentMode || 9 < document.documentMode);
    }
    function Ga() {
        Dr && (Dr.detachEvent("onpropertychange", ud), Xr = Dr = null);
    }
    function ud(e) {
        if (e.propertyName === "value" && zl(Xr)) {
            var t = [];
            sd(t, Xr, e, Is(e)), Bc(uh, t);
        }
    }
    function dh(e, t, n) {
        e === "focusin" ? (Ga(), Dr = t, Xr = n, Dr.attachEvent("onpropertychange", ud)) : e === "focusout" && Ga();
    }
    function fh(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(Xr);
    }
    function ph(e, t) {
        if (e === "click") return zl(t);
    }
    function mh(e, t) {
        if (e === "input" || e === "change") return zl(t);
    }
    function hh(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ht = typeof Object.is == "function" ? Object.is : hh;
    function Zr(e, t) {
        if (ht(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!wi.call(t, o) || !ht(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Ha(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Ka(e, t) {
        var n = Ha(e);
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
            n = Ha(n);
        }
    }
    function cd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function dd() {
        for(var e = window, t = qo(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = qo(e.document);
        }
        return t;
    }
    function Ds(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function gh(e) {
        var t = dd(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && cd(n.ownerDocument.documentElement, n)) {
            if (r !== null && Ds(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Ka(n, l);
                    var i = Ka(n, r);
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
    var yh = Mt && "documentMode" in document && 11 >= document.documentMode, Bn = null, Fi = null, Ar = null, $i = !1;
    function Qa(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        $i || Bn == null || Bn !== qo(r) || (r = Bn, "selectionStart" in r && Ds(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Ar && Zr(Ar, r) || (Ar = r, r = il(Fi, "onSelect"), 0 < r.length && (t = new bs("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Bn)));
    }
    function To(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Wn = {
        animationend: To("Animation", "AnimationEnd"),
        animationiteration: To("Animation", "AnimationIteration"),
        animationstart: To("Animation", "AnimationStart"),
        transitionend: To("Transition", "TransitionEnd")
    }, ti = {}, fd = {};
    Mt && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation), "TransitionEvent" in window || delete Wn.transitionend.transition);
    function Rl(e) {
        if (ti[e]) return ti[e];
        if (!Wn[e]) return e;
        var t = Wn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in fd) return ti[e] = t[n];
        return e;
    }
    var pd = Rl("animationend"), md = Rl("animationiteration"), hd = Rl("animationstart"), gd = Rl("transitionend"), yd = new Map, Ya = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function sn(e, t) {
        yd.set(e, t), Rn(t, [
            e
        ]);
    }
    for(var ni = 0; ni < Ya.length; ni++){
        var ri = Ya[ni], xh = ri.toLowerCase(), vh = ri[0].toUpperCase() + ri.slice(1);
        sn(xh, "on" + vh);
    }
    sn(pd, "onAnimationEnd");
    sn(md, "onAnimationIteration");
    sn(hd, "onAnimationStart");
    sn("dblclick", "onDoubleClick");
    sn("focusin", "onFocus");
    sn("focusout", "onBlur");
    sn(gd, "onTransitionEnd");
    lr("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    lr("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    lr("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    lr("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Rn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
    function Xa(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, xm(r, t, void 0, e), e.currentTarget = null;
    }
    function xd(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Xa(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Xa(o, s, u), l = a;
                }
            }
        }
        if (tl) throw e = Li, tl = !1, Li = null, e;
    }
    function re(e, t) {
        var n = t[Gi];
        n === void 0 && (n = t[Gi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (vd(t, e, 2, !1), n.add(r));
    }
    function oi(e, t, n) {
        var r = 0;
        t && (r |= 4), vd(n, e, r, t);
    }
    var No = "_reactListening" + Math.random().toString(36).slice(2);
    function Jr(e) {
        if (!e[No]) {
            e[No] = !0, Tc.forEach(function(n) {
                n !== "selectionchange" && (wh.has(n) || oi(n, !1, e), oi(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[No] || (t[No] = !0, oi("selectionchange", !1, t));
        }
    }
    function vd(e, t, n, r) {
        switch(nd(t)){
            case 1:
                var o = bm;
                break;
            case 4:
                o = Lm;
                break;
            default:
                o = Ps;
        }
        n = o.bind(null, t, n, e), o = void 0, !bi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function li(e, t, n, r, o) {
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
                    if (i = vn(s), i === null) return;
                    if (a = i.tag, a === 5 || a === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        Bc(function() {
            var u = l, d = Is(n), c = [];
            e: {
                var h = yd.get(e);
                if (h !== void 0) {
                    var v = bs, x = e;
                    switch(e){
                        case "keypress":
                            if (Bo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            v = Xm;
                            break;
                        case "focusin":
                            x = "focus", v = Jl;
                            break;
                        case "focusout":
                            x = "blur", v = Jl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            v = Jl;
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
                            v = Aa;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            v = Am;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            v = qm;
                            break;
                        case pd:
                        case md:
                        case hd:
                            v = Um;
                            break;
                        case gd:
                            v = th;
                            break;
                        case "scroll":
                            v = Om;
                            break;
                        case "wheel":
                            v = rh;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            v = Wm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            v = $a;
                    }
                    var w = (t & 4) !== 0, m = !w && e === "scroll", f = w ? h !== null ? h + "Capture" : null : h;
                    w = [];
                    for(var p = u, g; p !== null;){
                        g = p;
                        var S = g.stateNode;
                        if (g.tag === 5 && S !== null && (g = S, f !== null && (S = Hr(p, f), S != null && w.push(qr(p, S, g)))), m) break;
                        p = p.return;
                    }
                    0 < w.length && (h = new v(h, x, null, n, d), c.push({
                        event: h,
                        listeners: w
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== Pi && (x = n.relatedTarget || n.fromElement) && (vn(x) || x[bt])) break e;
                    if ((v || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (x = n.relatedTarget || n.toElement, v = u, x = x ? vn(x) : null, x !== null && (m = jn(x), x !== m || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null, x = u), v !== x)) {
                        if (w = Aa, S = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = $a, S = "onPointerLeave", f = "onPointerEnter", p = "pointer"), m = v == null ? h : Vn(v), g = x == null ? h : Vn(x), h = new w(S, p + "leave", v, n, d), h.target = m, h.relatedTarget = g, S = null, vn(d) === u && (w = new w(f, p + "enter", x, n, d), w.target = g, w.relatedTarget = m, S = w), m = S, v && x) t: {
                            for(w = v, f = x, p = 0, g = w; g; g = An(g))p++;
                            for(g = 0, S = f; S; S = An(S))g++;
                            for(; 0 < p - g;)w = An(w), p--;
                            for(; 0 < g - p;)f = An(f), g--;
                            for(; p--;){
                                if (w === f || f !== null && w === f.alternate) break t;
                                w = An(w), f = An(f);
                            }
                            w = null;
                        }
                        else w = null;
                        v !== null && Za(c, h, v, w, !1), x !== null && m !== null && Za(c, m, x, w, !0);
                    }
                }
                e: {
                    if (h = u ? Vn(u) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var k = ch;
                    else if (Wa(h)) if (ad) k = mh;
                    else {
                        k = fh;
                        var E = dh;
                    }
                    else (v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = ph);
                    if (k && (k = k(e, u))) {
                        sd(c, k, n, d);
                        break e;
                    }
                    E && E(e, h, u), e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && Ni(h, "number", h.value);
                }
                switch(E = u ? Vn(u) : window, e){
                    case "focusin":
                        (Wa(E) || E.contentEditable === "true") && (Bn = E, Fi = u, Ar = null);
                        break;
                    case "focusout":
                        Ar = Fi = Bn = null;
                        break;
                    case "mousedown":
                        $i = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        $i = !1, Qa(c, n, d);
                        break;
                    case "selectionchange":
                        if (yh) break;
                    case "keydown":
                    case "keyup":
                        Qa(c, n, d);
                }
                var z;
                if (Os) e: {
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
                else Un ? ld(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
                _ && (od && n.locale !== "ko" && (Un || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Un && (z = rd()) : (Kt = d, Ms = "value" in Kt ? Kt.value : Kt.textContent, Un = !0)), E = il(u, _), 0 < E.length && (_ = new Fa(_, e, null, n, d), c.push({
                    event: _,
                    listeners: E
                }), z ? _.data = z : (z = id(n), z !== null && (_.data = z)))), (z = lh ? ih(e, n) : sh(e, n)) && (u = il(u, "onBeforeInput"), 0 < u.length && (d = new Fa("onBeforeInput", "beforeinput", null, n, d), c.push({
                    event: d,
                    listeners: u
                }), d.data = z));
            }
            xd(c, t);
        });
    }
    function qr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function il(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Hr(e, n), l != null && r.unshift(qr(e, l, o)), l = Hr(e, t), l != null && r.push(qr(e, l, o))), e = e.return;
        }
        return r;
    }
    function An(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Za(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = Hr(n, l), a != null && i.unshift(qr(n, a, s))) : o || (a = Hr(n, l), a != null && i.push(qr(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Sh = /\r\n?/g, kh = /\u0000|\uFFFD/g;
    function Ja(e) {
        return (typeof e == "string" ? e : "" + e).replace(Sh, `
`).replace(kh, "");
    }
    function Io(e, t, n) {
        if (t = Ja(t), Ja(e) !== t && n) throw Error(I(425));
    }
    function sl() {}
    var Ui = null, Bi = null;
    function Wi(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Vi = typeof setTimeout == "function" ? setTimeout : void 0, _h = typeof clearTimeout == "function" ? clearTimeout : void 0, qa = typeof Promise == "function" ? Promise : void 0, Ch = typeof queueMicrotask == "function" ? queueMicrotask : typeof qa < "u" ? function(e) {
        return qa.resolve(null).then(e).catch(Eh);
    } : Vi;
    function Eh(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function ii(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Yr(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        Yr(t);
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
    function eu(e) {
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
    var hr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + hr, eo = "__reactProps$" + hr, bt = "__reactContainer$" + hr, Gi = "__reactEvents$" + hr, Th = "__reactListeners$" + hr, Nh = "__reactHandles$" + hr;
    function vn(e) {
        var t = e[vt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[bt] || n[vt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = eu(e); e !== null;){
                    if (n = e[vt]) return n;
                    e = eu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function po(e) {
        return e = e[vt] || e[bt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Vn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(I(33));
    }
    function jl(e) {
        return e[eo] || null;
    }
    var Hi = [], Gn = -1;
    function an(e) {
        return {
            current: e
        };
    }
    function oe(e) {
        0 > Gn || (e.current = Hi[Gn], Hi[Gn] = null, Gn--);
    }
    function te(e, t) {
        Gn++, Hi[Gn] = e.current, e.current = t;
    }
    var on = {}, be = an(on), Ve = an(!1), En = on;
    function ir(e, t) {
        var n = e.type.contextTypes;
        if (!n) return on;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Ge(e) {
        return e = e.childContextTypes, e != null;
    }
    function al() {
        oe(Ve), oe(be);
    }
    function tu(e, t, n) {
        if (be.current !== on) throw Error(I(168));
        te(be, t), te(Ve, n);
    }
    function wd(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(I(108, dm(e) || "Unknown", o));
        return ce({}, n, r);
    }
    function ul(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || on, En = be.current, te(be, e), te(Ve, Ve.current), !0;
    }
    function nu(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(I(169));
        n ? (e = wd(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, oe(Ve), oe(be), te(be, e)) : oe(Ve), te(Ve, n);
    }
    var Nt = null, Pl = !1, si = !1;
    function Sd(e) {
        Nt === null ? Nt = [
            e
        ] : Nt.push(e);
    }
    function Ih(e) {
        Pl = !0, Sd(e);
    }
    function un() {
        if (!si && Nt !== null) {
            si = !0;
            var e = 0, t = Y;
            try {
                var n = Nt;
                for(Y = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Nt = null, Pl = !1;
            } catch (o) {
                throw Nt !== null && (Nt = Nt.slice(e + 1)), Hc(zs, un), o;
            } finally{
                Y = t, si = !1;
            }
        }
        return null;
    }
    var Hn = [], Kn = 0, cl = null, dl = 0, et = [], tt = 0, Tn = null, zt = 1, Rt = "";
    function yn(e, t) {
        Hn[Kn++] = dl, Hn[Kn++] = cl, cl = e, dl = t;
    }
    function kd(e, t, n) {
        et[tt++] = zt, et[tt++] = Rt, et[tt++] = Tn, Tn = e;
        var r = zt;
        e = Rt;
        var o = 32 - pt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - pt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, zt = 1 << 32 - pt(t) + o | n << o | r, Rt = l + e;
        } else zt = 1 << l | n << o | r, Rt = e;
    }
    function As(e) {
        e.return !== null && (yn(e, 1), kd(e, 1, 0));
    }
    function Fs(e) {
        for(; e === cl;)cl = Hn[--Kn], Hn[Kn] = null, dl = Hn[--Kn], Hn[Kn] = null;
        for(; e === Tn;)Tn = et[--tt], et[tt] = null, Rt = et[--tt], et[tt] = null, zt = et[--tt], et[tt] = null;
    }
    var Ye = null, Qe = null, ie = !1, dt = null;
    function _d(e, t) {
        var n = nt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function ru(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ye = e, Qe = Jt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ye = e, Qe = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? {
                    id: zt,
                    overflow: Rt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ye = e, Qe = null, !0) : !1;
            default:
                return !1;
        }
    }
    function Ki(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Qi(e) {
        if (ie) {
            var t = Qe;
            if (t) {
                var n = t;
                if (!ru(e, t)) {
                    if (Ki(e)) throw Error(I(418));
                    t = Jt(n.nextSibling);
                    var r = Ye;
                    t && ru(e, t) ? _d(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Ye = e);
                }
            } else {
                if (Ki(e)) throw Error(I(418));
                e.flags = e.flags & -4097 | 2, ie = !1, Ye = e;
            }
        }
    }
    function ou(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ye = e;
    }
    function zo(e) {
        if (e !== Ye) return !1;
        if (!ie) return ou(e), ie = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps)), t && (t = Qe)) {
            if (Ki(e)) throw Cd(), Error(I(418));
            for(; t;)_d(e, t), t = Jt(t.nextSibling);
        }
        if (ou(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Qe = Jt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                Qe = null;
            }
        } else Qe = Ye ? Jt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Cd() {
        for(var e = Qe; e;)e = Jt(e.nextSibling);
    }
    function sr() {
        Qe = Ye = null, ie = !1;
    }
    function $s(e) {
        dt === null ? dt = [
            e
        ] : dt.push(e);
    }
    var zh = Dt.ReactCurrentBatchConfig;
    function kr(e, t, n) {
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
    function Ro(e, t) {
        throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function lu(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Ed(e) {
        function t(f, p) {
            if (e) {
                var g = f.deletions;
                g === null ? (f.deletions = [
                    p
                ], f.flags |= 16) : g.push(p);
            }
        }
        function n(f, p) {
            if (!e) return null;
            for(; p !== null;)t(f, p), p = p.sibling;
            return null;
        }
        function r(f, p) {
            for(f = new Map; p !== null;)p.key !== null ? f.set(p.key, p) : f.set(p.index, p), p = p.sibling;
            return f;
        }
        function o(f, p) {
            return f = nn(f, p), f.index = 0, f.sibling = null, f;
        }
        function l(f, p, g) {
            return f.index = g, e ? (g = f.alternate, g !== null ? (g = g.index, g < p ? (f.flags |= 2, p) : g) : (f.flags |= 2, p)) : (f.flags |= 1048576, p);
        }
        function i(f) {
            return e && f.alternate === null && (f.flags |= 2), f;
        }
        function s(f, p, g, S) {
            return p === null || p.tag !== 6 ? (p = mi(g, f.mode, S), p.return = f, p) : (p = o(p, g), p.return = f, p);
        }
        function a(f, p, g, S) {
            var k = g.type;
            return k === $n ? d(f, p, g.props.children, S, g.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Wt && lu(k) === p.type) ? (S = o(p, g.props), S.ref = kr(f, p, g), S.return = f, S) : (S = Yo(g.type, g.key, g.props, null, f.mode, S), S.ref = kr(f, p, g), S.return = f, S);
        }
        function u(f, p, g, S) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = hi(g, f.mode, S), p.return = f, p) : (p = o(p, g.children || []), p.return = f, p);
        }
        function d(f, p, g, S, k) {
            return p === null || p.tag !== 7 ? (p = _n(g, f.mode, S, k), p.return = f, p) : (p = o(p, g), p.return = f, p);
        }
        function c(f, p, g) {
            if (typeof p == "string" && p !== "" || typeof p == "number") return p = mi("" + p, f.mode, g), p.return = f, p;
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case vo:
                        return g = Yo(p.type, p.key, p.props, null, f.mode, g), g.ref = kr(f, null, p), g.return = f, g;
                    case Fn:
                        return p = hi(p, f.mode, g), p.return = f, p;
                    case Wt:
                        var S = p._init;
                        return c(f, S(p._payload), g);
                }
                if (Rr(p) || yr(p)) return p = _n(p, f.mode, g, null), p.return = f, p;
                Ro(f, p);
            }
            return null;
        }
        function h(f, p, g, S) {
            var k = p !== null ? p.key : null;
            if (typeof g == "string" && g !== "" || typeof g == "number") return k !== null ? null : s(f, p, "" + g, S);
            if (typeof g == "object" && g !== null) {
                switch(g.$$typeof){
                    case vo:
                        return g.key === k ? a(f, p, g, S) : null;
                    case Fn:
                        return g.key === k ? u(f, p, g, S) : null;
                    case Wt:
                        return k = g._init, h(f, p, k(g._payload), S);
                }
                if (Rr(g) || yr(g)) return k !== null ? null : d(f, p, g, S, null);
                Ro(f, g);
            }
            return null;
        }
        function v(f, p, g, S, k) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(g) || null, s(p, f, "" + S, k);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case vo:
                        return f = f.get(S.key === null ? g : S.key) || null, a(p, f, S, k);
                    case Fn:
                        return f = f.get(S.key === null ? g : S.key) || null, u(p, f, S, k);
                    case Wt:
                        var E = S._init;
                        return v(f, p, g, E(S._payload), k);
                }
                if (Rr(S) || yr(S)) return f = f.get(g) || null, d(p, f, S, k, null);
                Ro(p, S);
            }
            return null;
        }
        function x(f, p, g, S) {
            for(var k = null, E = null, z = p, _ = p = 0, O = null; z !== null && _ < g.length; _++){
                z.index > _ ? (O = z, z = null) : O = z.sibling;
                var D = h(f, z, g[_], S);
                if (D === null) {
                    z === null && (z = O);
                    break;
                }
                e && z && D.alternate === null && t(f, z), p = l(D, p, _), E === null ? k = D : E.sibling = D, E = D, z = O;
            }
            if (_ === g.length) return n(f, z), ie && yn(f, _), k;
            if (z === null) {
                for(; _ < g.length; _++)z = c(f, g[_], S), z !== null && (p = l(z, p, _), E === null ? k = z : E.sibling = z, E = z);
                return ie && yn(f, _), k;
            }
            for(z = r(f, z); _ < g.length; _++)O = v(z, f, _, g[_], S), O !== null && (e && O.alternate !== null && z.delete(O.key === null ? _ : O.key), p = l(O, p, _), E === null ? k = O : E.sibling = O, E = O);
            return e && z.forEach(function(ne) {
                return t(f, ne);
            }), ie && yn(f, _), k;
        }
        function w(f, p, g, S) {
            var k = yr(g);
            if (typeof k != "function") throw Error(I(150));
            if (g = k.call(g), g == null) throw Error(I(151));
            for(var E = k = null, z = p, _ = p = 0, O = null, D = g.next(); z !== null && !D.done; _++, D = g.next()){
                z.index > _ ? (O = z, z = null) : O = z.sibling;
                var ne = h(f, z, D.value, S);
                if (ne === null) {
                    z === null && (z = O);
                    break;
                }
                e && z && ne.alternate === null && t(f, z), p = l(ne, p, _), E === null ? k = ne : E.sibling = ne, E = ne, z = O;
            }
            if (D.done) return n(f, z), ie && yn(f, _), k;
            if (z === null) {
                for(; !D.done; _++, D = g.next())D = c(f, D.value, S), D !== null && (p = l(D, p, _), E === null ? k = D : E.sibling = D, E = D);
                return ie && yn(f, _), k;
            }
            for(z = r(f, z); !D.done; _++, D = g.next())D = v(z, f, _, D.value, S), D !== null && (e && D.alternate !== null && z.delete(D.key === null ? _ : D.key), p = l(D, p, _), E === null ? k = D : E.sibling = D, E = D);
            return e && z.forEach(function(ve) {
                return t(f, ve);
            }), ie && yn(f, _), k;
        }
        function m(f, p, g, S) {
            if (typeof g == "object" && g !== null && g.type === $n && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
                switch(g.$$typeof){
                    case vo:
                        e: {
                            for(var k = g.key, E = p; E !== null;){
                                if (E.key === k) {
                                    if (k = g.type, k === $n) {
                                        if (E.tag === 7) {
                                            n(f, E.sibling), p = o(E, g.props.children), p.return = f, f = p;
                                            break e;
                                        }
                                    } else if (E.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Wt && lu(k) === E.type) {
                                        n(f, E.sibling), p = o(E, g.props), p.ref = kr(f, E, g), p.return = f, f = p;
                                        break e;
                                    }
                                    n(f, E);
                                    break;
                                } else t(f, E);
                                E = E.sibling;
                            }
                            g.type === $n ? (p = _n(g.props.children, f.mode, S, g.key), p.return = f, f = p) : (S = Yo(g.type, g.key, g.props, null, f.mode, S), S.ref = kr(f, p, g), S.return = f, f = S);
                        }
                        return i(f);
                    case Fn:
                        e: {
                            for(E = g.key; p !== null;){
                                if (p.key === E) if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(f, p.sibling), p = o(p, g.children || []), p.return = f, f = p;
                                    break e;
                                } else {
                                    n(f, p);
                                    break;
                                }
                                else t(f, p);
                                p = p.sibling;
                            }
                            p = hi(g, f.mode, S), p.return = f, f = p;
                        }
                        return i(f);
                    case Wt:
                        return E = g._init, m(f, p, E(g._payload), S);
                }
                if (Rr(g)) return x(f, p, g, S);
                if (yr(g)) return w(f, p, g, S);
                Ro(f, g);
            }
            return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(f, p.sibling), p = o(p, g), p.return = f, f = p) : (n(f, p), p = mi(g, f.mode, S), p.return = f, f = p), i(f)) : n(f, p);
        }
        return m;
    }
    var ar = Ed(!0), Td = Ed(!1), fl = an(null), pl = null, Qn = null, Us = null;
    function Bs() {
        Us = Qn = pl = null;
    }
    function Ws(e) {
        var t = fl.current;
        oe(fl), e._currentValue = t;
    }
    function Yi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function rr(e, t) {
        pl = e, Us = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null);
    }
    function ot(e) {
        var t = e._currentValue;
        if (Us !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Qn === null) {
            if (pl === null) throw Error(I(308));
            Qn = e, pl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Qn = Qn.next = e;
        return t;
    }
    var wn = null;
    function Vs(e) {
        wn === null ? wn = [
            e
        ] : wn.push(e);
    }
    function Nd(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, Vs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Lt(e, r);
    }
    function Lt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Vt = !1;
    function Gs(e) {
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
    function Id(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function jt(e, t) {
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
        if (r = r.shared, V & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Lt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, Vs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Lt(e, n);
    }
    function Wo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Rs(e, n);
        }
    }
    function iu(e, t) {
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
    function ml(e, t, n, r) {
        var o = e.updateQueue;
        Vt = !1;
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
                var h = s.lane, v = s.eventTime;
                if ((r & h) === h) {
                    d !== null && (d = d.next = {
                        eventTime: v,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var x = e, w = s;
                        switch(h = t, v = n, w.tag){
                            case 1:
                                if (x = w.payload, typeof x == "function") {
                                    c = x.call(v, c, h);
                                    break e;
                                }
                                c = x;
                                break e;
                            case 3:
                                x.flags = x.flags & -65537 | 128;
                            case 0:
                                if (x = w.payload, h = typeof x == "function" ? x.call(v, c, h) : x, h == null) break e;
                                c = ce({}, c, h);
                                break e;
                            case 2:
                                Vt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [
                        s
                    ] : h.push(s));
                } else v = {
                    eventTime: v,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, d === null ? (u = d = v, a = c) : d = d.next = v, i |= h;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
                }
            }while (!0);
            if (d === null && (a = c), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            In |= i, e.lanes = i, e.memoizedState = c;
        }
    }
    function su(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(I(191, o));
                o.call(r);
            }
        }
    }
    var mo = {}, kt = an(mo), to = an(mo), no = an(mo);
    function Sn(e) {
        if (e === mo) throw Error(I(174));
        return e;
    }
    function Hs(e, t) {
        switch(te(no, t), te(to, e), te(kt, mo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zi(t, e);
        }
        oe(kt), te(kt, t);
    }
    function ur() {
        oe(kt), oe(to), oe(no);
    }
    function zd(e) {
        Sn(no.current);
        var t = Sn(kt.current), n = zi(t, e.type);
        t !== n && (te(to, e), te(kt, n));
    }
    function Ks(e) {
        to.current === e && (oe(kt), oe(to));
    }
    var ae = an(0);
    function hl(e) {
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
    var ai = [];
    function Qs() {
        for(var e = 0; e < ai.length; e++)ai[e]._workInProgressVersionPrimary = null;
        ai.length = 0;
    }
    var Vo = Dt.ReactCurrentDispatcher, ui = Dt.ReactCurrentBatchConfig, Nn = 0, ue = null, ke = null, Ee = null, gl = !1, Fr = !1, ro = 0, Rh = 0;
    function je() {
        throw Error(I(321));
    }
    function Ys(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!ht(e[n], t[n])) return !1;
        return !0;
    }
    function Xs(e, t, n, r, o, l) {
        if (Nn = l, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vo.current = e === null || e.memoizedState === null ? bh : Lh, e = n(r, o), Fr) {
            l = 0;
            do {
                if (Fr = !1, ro = 0, 25 <= l) throw Error(I(301));
                l += 1, Ee = ke = null, t.updateQueue = null, Vo.current = Oh, e = n(r, o);
            }while (Fr);
        }
        if (Vo.current = yl, t = ke !== null && ke.next !== null, Nn = 0, Ee = ke = ue = null, gl = !1, t) throw Error(I(300));
        return e;
    }
    function Zs() {
        var e = ro !== 0;
        return ro = 0, e;
    }
    function yt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ee === null ? ue.memoizedState = Ee = e : Ee = Ee.next = e, Ee;
    }
    function lt() {
        if (ke === null) {
            var e = ue.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ke.next;
        var t = Ee === null ? ue.memoizedState : Ee.next;
        if (t !== null) Ee = t, ke = e;
        else {
            if (e === null) throw Error(I(310));
            ke = e, e = {
                memoizedState: ke.memoizedState,
                baseState: ke.baseState,
                baseQueue: ke.baseQueue,
                queue: ke.queue,
                next: null
            }, Ee === null ? ue.memoizedState = Ee = e : Ee = Ee.next = e;
        }
        return Ee;
    }
    function oo(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function ci(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = ke, o = r.baseQueue, l = n.pending;
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
                if ((Nn & d) === d) a !== null && (a = a.next = {
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
                    a === null ? (s = a = c, i = r) : a = a.next = c, ue.lanes |= d, In |= d;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, ht(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ue.lanes |= l, In |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function di(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            ht(l, t.memoizedState) || (Be = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Rd() {}
    function jd(e, t) {
        var n = ue, r = lt(), o = t(), l = !ht(r.memoizedState, o);
        if (l && (r.memoizedState = o, Be = !0), r = r.queue, Js(bd.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || Ee !== null && Ee.memoizedState.tag & 1) {
            if (n.flags |= 2048, lo(9, Md.bind(null, n, r, o, t), void 0, null), Te === null) throw Error(I(349));
            Nn & 30 || Pd(n, t, o);
        }
        return o;
    }
    function Pd(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = ue.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ue.updateQueue = t, t.stores = [
            e
        ]) : (n = t.stores, n === null ? t.stores = [
            e
        ] : n.push(e));
    }
    function Md(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Ld(t) && Od(e);
    }
    function bd(e, t, n) {
        return n(function() {
            Ld(t) && Od(e);
        });
    }
    function Ld(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ht(e, n);
        } catch  {
            return !0;
        }
    }
    function Od(e) {
        var t = Lt(e, 1);
        t !== null && mt(t, e, 1, -1);
    }
    function au(e) {
        var t = yt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: oo,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Mh.bind(null, ue, e), [
            t.memoizedState,
            e
        ];
    }
    function lo(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = ue.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Dd() {
        return lt().memoizedState;
    }
    function Go(e, t, n, r) {
        var o = yt();
        ue.flags |= e, o.memoizedState = lo(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Ml(e, t, n, r) {
        var o = lt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ke !== null) {
            var i = ke.memoizedState;
            if (l = i.destroy, r !== null && Ys(r, i.deps)) {
                o.memoizedState = lo(t, n, l, r);
                return;
            }
        }
        ue.flags |= e, o.memoizedState = lo(1 | t, n, l, r);
    }
    function uu(e, t) {
        return Go(8390656, 8, e, t);
    }
    function Js(e, t) {
        return Ml(2048, 8, e, t);
    }
    function Ad(e, t) {
        return Ml(4, 2, e, t);
    }
    function Fd(e, t) {
        return Ml(4, 4, e, t);
    }
    function $d(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Ud(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Ml(4, 4, $d.bind(null, t, e), n);
    }
    function qs() {}
    function Bd(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ys(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Wd(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ys(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Vd(e, t, n) {
        return Nn & 21 ? (ht(n, t) || (n = Yc(), ue.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n);
    }
    function jh(e, t) {
        var n = Y;
        Y = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = ui.transition;
        ui.transition = {};
        try {
            e(!1), t();
        } finally{
            Y = n, ui.transition = r;
        }
    }
    function Gd() {
        return lt().memoizedState;
    }
    function Ph(e, t, n) {
        var r = tn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Hd(e)) Kd(t, n);
        else if (n = Nd(e, t, n, r), n !== null) {
            var o = Oe();
            mt(n, e, r, o), Qd(n, t, r);
        }
    }
    function Mh(e, t, n) {
        var r = tn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Hd(e)) Kd(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, ht(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, Vs(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Nd(e, t, o, r), n !== null && (o = Oe(), mt(n, e, r, o), Qd(n, t, r));
        }
    }
    function Hd(e) {
        var t = e.alternate;
        return e === ue || t !== null && t === ue;
    }
    function Kd(e, t) {
        Fr = gl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Qd(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Rs(e, n);
        }
    }
    var yl = {
        readContext: ot,
        useCallback: je,
        useContext: je,
        useEffect: je,
        useImperativeHandle: je,
        useInsertionEffect: je,
        useLayoutEffect: je,
        useMemo: je,
        useReducer: je,
        useRef: je,
        useState: je,
        useDebugValue: je,
        useDeferredValue: je,
        useTransition: je,
        useMutableSource: je,
        useSyncExternalStore: je,
        useId: je,
        unstable_isNewReconciler: !1
    }, bh = {
        readContext: ot,
        useCallback: function(e, t) {
            return yt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: ot,
        useEffect: uu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, Go(4194308, 4, $d.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return Go(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return Go(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = yt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = yt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Ph.bind(null, ue, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = yt();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: au,
        useDebugValue: qs,
        useDeferredValue: function(e) {
            return yt().memoizedState = e;
        },
        useTransition: function() {
            var e = au(!1), t = e[0];
            return e = jh.bind(null, e[1]), yt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue, o = yt();
            if (ie) {
                if (n === void 0) throw Error(I(407));
                n = n();
            } else {
                if (n = t(), Te === null) throw Error(I(349));
                Nn & 30 || Pd(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, uu(bd.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, lo(9, Md.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = yt(), t = Te.identifierPrefix;
            if (ie) {
                var n = Rt, r = zt;
                n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ro++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Rh++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Lh = {
        readContext: ot,
        useCallback: Bd,
        useContext: ot,
        useEffect: Js,
        useImperativeHandle: Ud,
        useInsertionEffect: Ad,
        useLayoutEffect: Fd,
        useMemo: Wd,
        useReducer: ci,
        useRef: Dd,
        useState: function() {
            return ci(oo);
        },
        useDebugValue: qs,
        useDeferredValue: function(e) {
            var t = lt();
            return Vd(t, ke.memoizedState, e);
        },
        useTransition: function() {
            var e = ci(oo)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Rd,
        useSyncExternalStore: jd,
        useId: Gd,
        unstable_isNewReconciler: !1
    }, Oh = {
        readContext: ot,
        useCallback: Bd,
        useContext: ot,
        useEffect: Js,
        useImperativeHandle: Ud,
        useInsertionEffect: Ad,
        useLayoutEffect: Fd,
        useMemo: Wd,
        useReducer: di,
        useRef: Dd,
        useState: function() {
            return di(oo);
        },
        useDebugValue: qs,
        useDeferredValue: function(e) {
            var t = lt();
            return ke === null ? t.memoizedState = e : Vd(t, ke.memoizedState, e);
        },
        useTransition: function() {
            var e = di(oo)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Rd,
        useSyncExternalStore: jd,
        useId: Gd,
        unstable_isNewReconciler: !1
    };
    function at(e, t) {
        if (e && e.defaultProps) {
            t = ce({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function Xi(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var bl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? jn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Oe(), o = tn(e), l = jt(r, o);
            l.payload = t, n != null && (l.callback = n), t = qt(e, l, o), t !== null && (mt(t, e, o, r), Wo(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Oe(), o = tn(e), l = jt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = qt(e, l, o), t !== null && (mt(t, e, o, r), Wo(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Oe(), r = tn(e), o = jt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = qt(e, o, r), t !== null && (mt(t, e, r, n), Wo(t, e, r));
        }
    };
    function cu(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Zr(n, r) || !Zr(o, l) : !0;
    }
    function Yd(e, t, n) {
        var r = !1, o = on, l = t.contextType;
        return typeof l == "object" && l !== null ? l = ot(l) : (o = Ge(t) ? En : be.current, r = t.contextTypes, l = (r = r != null) ? ir(e, o) : on), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function du(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bl.enqueueReplaceState(t, t.state, null);
    }
    function Zi(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, Gs(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = ot(l) : (l = Ge(t) ? En : be.current, o.context = ir(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Xi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && bl.enqueueReplaceState(o, o.state, null), ml(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function cr(e, t) {
        try {
            var n = "", r = t;
            do n += cm(r), r = r.return;
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
    function fi(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function Ji(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var Dh = typeof WeakMap == "function" ? WeakMap : Map;
    function Xd(e, t, n) {
        n = jt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            vl || (vl = !0, as = r), Ji(e, t);
        }, n;
    }
    function Zd(e, t, n) {
        n = jt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                Ji(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Ji(e, t), typeof r != "function" && (en === null ? en = new Set([
                this
            ]) : en.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function fu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Dh;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Zh.bind(null, e, t, n), t.then(e, e));
    }
    function pu(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function mu(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, qt(n, t, 1))), n.lanes |= 1), e);
    }
    var Ah = Dt.ReactCurrentOwner, Be = !1;
    function Le(e, t, n, r) {
        t.child = e === null ? Td(t, null, n, r) : ar(t, e.child, n, r);
    }
    function hu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return rr(t, o), r = Xs(e, t, n, r, l, o), n = Zs(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (ie && n && As(t), t.flags |= 1, Le(e, t, r, o), t.child);
    }
    function gu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !sa(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Jd(e, t, l, r, o)) : (e = Yo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Zr, n(i, r) && e.ref === t.ref) return Ot(e, t, o);
        }
        return t.flags |= 1, e = nn(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Jd(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Zr(l, r) && e.ref === t.ref) if (Be = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Be = !0);
            else return t.lanes = e.lanes, Ot(e, t, o);
        }
        return qi(e, t, n, r, o);
    }
    function qd(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, te(Xn, Ke), Ke |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, te(Xn, Ke), Ke |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, te(Xn, Ke), Ke |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, te(Xn, Ke), Ke |= r;
        return Le(e, t, o, n), t.child;
    }
    function ef(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function qi(e, t, n, r, o) {
        var l = Ge(n) ? En : be.current;
        return l = ir(t, l), rr(t, o), n = Xs(e, t, n, r, l, o), r = Zs(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (ie && r && As(t), t.flags |= 1, Le(e, t, n, o), t.child);
    }
    function yu(e, t, n, r, o) {
        if (Ge(n)) {
            var l = !0;
            ul(t);
        } else l = !1;
        if (rr(t, o), t.stateNode === null) Ho(e, t), Yd(t, n, r), Zi(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = ot(u) : (u = Ge(n) ? En : be.current, u = ir(t, u));
            var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && du(t, i, r, u), Vt = !1;
            var h = t.memoizedState;
            i.state = h, ml(t, r, i, o), a = t.memoizedState, s !== r || h !== a || Ve.current || Vt ? (typeof d == "function" && (Xi(t, n, d, r), a = t.memoizedState), (s = Vt || cu(t, n, s, r, h, a, u)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Id(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : at(t.type, s), i.props = u, c = t.pendingProps, h = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = Ge(n) ? En : be.current, a = ir(t, a));
            var v = n.getDerivedStateFromProps;
            (d = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || h !== a) && du(t, i, r, a), Vt = !1, h = t.memoizedState, i.state = h, ml(t, r, i, o);
            var x = t.memoizedState;
            s !== c || h !== x || Ve.current || Vt ? (typeof v == "function" && (Xi(t, n, v, r), x = t.memoizedState), (u = Vt || cu(t, n, u, r, h, x, a) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return es(e, t, n, r, l, o);
    }
    function es(e, t, n, r, o, l) {
        ef(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && nu(t, n, !1), Ot(e, t, l);
        r = t.stateNode, Ah.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = ar(t, e.child, null, l), t.child = ar(t, null, s, l)) : Le(e, t, s, l), t.memoizedState = r.state, o && nu(t, n, !0), t.child;
    }
    function tf(e) {
        var t = e.stateNode;
        t.pendingContext ? tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && tu(e, t.context, !1), Hs(e, t.containerInfo);
    }
    function xu(e, t, n, r, o) {
        return sr(), $s(o), t.flags |= 256, Le(e, t, n, r), t.child;
    }
    var ts = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function ns(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function nf(e, t, n) {
        var r = t.pendingProps, o = ae.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), te(ae, o & 1), e === null) return Qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Dl(i, r, 0, null), e = _n(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ns(n), t.memoizedState = ts, e) : ea(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Fh(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = nn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = nn(s, l) : (l = _n(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? ns(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ts, r;
        }
        return l = e.child, e = l.sibling, r = nn(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function ea(e, t) {
        return t = Dl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function jo(e, t, n, r) {
        return r !== null && $s(r), ar(t, e.child, null, n), e = ea(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Fh(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = fi(Error(I(422))), jo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Dl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = _n(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && ar(t, e.child, null, i), t.child.memoizedState = ns(i), t.memoizedState = ts, l);
        if (!(t.mode & 1)) return jo(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(I(419)), r = fi(l, r, void 0), jo(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Be || s) {
            if (r = Te, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Lt(e, o), mt(r, e, o, -1));
            }
            return ia(), r = fi(Error(I(421))), jo(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Jh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Qe = Jt(o.nextSibling), Ye = t, ie = !0, dt = null, e !== null && (et[tt++] = zt, et[tt++] = Rt, et[tt++] = Tn, zt = e.id, Rt = e.overflow, Tn = t), t = ea(t, r.children), t.flags |= 4096, t);
    }
    function vu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Yi(e.return, t, n);
    }
    function pi(e, t, n, r, o) {
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
    function rf(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Le(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && vu(e, n, t);
                else if (e.tag === 19) vu(e, n, t);
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
        if (te(ae, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && hl(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), pi(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && hl(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                pi(t, !0, n, null, l);
                break;
            case "together":
                pi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function Ho(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Ot(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(I(153));
        if (t.child !== null) {
            for(e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function $h(e, t, n) {
        switch(t.tag){
            case 3:
                tf(t), sr();
                break;
            case 5:
                zd(t);
                break;
            case 1:
                Ge(t.type) && ul(t);
                break;
            case 4:
                Hs(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                te(fl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (te(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? nf(e, t, n) : (te(ae, ae.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
                te(ae, ae.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return rf(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), te(ae, ae.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, qd(e, t, n);
        }
        return Ot(e, t, n);
    }
    var of, rs, lf, sf;
    of = function(e, t) {
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
    rs = function() {};
    lf = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, Sn(kt.current);
            var l = null;
            switch(n){
                case "input":
                    o = Ei(e, o), r = Ei(e, r), l = [];
                    break;
                case "select":
                    o = ce({}, o, {
                        value: void 0
                    }), r = ce({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Ii(e, o), r = Ii(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = sl);
            }
            Ri(n, r);
            var i;
            n = null;
            for(u in o)if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
                var s = o[u];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Vr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
            for(u in r){
                var a = r[u];
                if (s = o?.[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in a)a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vr.hasOwnProperty(u) ? (a != null && u === "onScroll" && re("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    sf = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function _r(e, t) {
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
    function Pe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function Uh(e, t, n) {
        var r = t.pendingProps;
        switch(Fs(t), t.tag){
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
                return Pe(t), null;
            case 1:
                return Ge(t.type) && al(), Pe(t), null;
            case 3:
                return r = t.stateNode, ur(), oe(Ve), oe(be), Qs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (ds(dt), dt = null))), rs(e, t), Pe(t), null;
            case 5:
                Ks(t);
                var o = Sn(no.current);
                if (n = t.type, e !== null && t.stateNode != null) lf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(I(166));
                        return Pe(t), null;
                    }
                    if (e = Sn(kt.current), zo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[vt] = t, r[eo] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                re("cancel", r), re("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                re("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < Pr.length; o++)re(Pr[o], r);
                                break;
                            case "source":
                                re("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                re("error", r), re("load", r);
                                break;
                            case "details":
                                re("toggle", r);
                                break;
                            case "input":
                                Ia(r, l), re("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, re("invalid", r);
                                break;
                            case "textarea":
                                Ra(r, l), re("invalid", r);
                        }
                        Ri(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Io(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Io(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Vr.hasOwnProperty(i) && s != null && i === "onScroll" && re("scroll", r);
                        }
                        switch(n){
                            case "input":
                                wo(r), za(r, l, !0);
                                break;
                            case "textarea":
                                wo(r), ja(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = sl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = bc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[vt] = t, e[eo] = r, of(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = ji(n, r), n){
                                case "dialog":
                                    re("cancel", e), re("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    re("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < Pr.length; o++)re(Pr[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    re("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    re("error", e), re("load", e), o = r;
                                    break;
                                case "details":
                                    re("toggle", e), o = r;
                                    break;
                                case "input":
                                    Ia(e, r), o = Ei(e, r), re("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = ce({}, r, {
                                        value: void 0
                                    }), re("invalid", e);
                                    break;
                                case "textarea":
                                    Ra(e, r), o = Ii(e, r), re("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Ri(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? Dc(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Lc(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Gr(e, a) : typeof a == "number" && Gr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Vr.hasOwnProperty(l) ? a != null && l === "onScroll" && re("scroll", e) : a != null && Cs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    wo(e), za(e, r, !1);
                                    break;
                                case "textarea":
                                    wo(e), ja(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + rn(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? qn(e, !!r.multiple, l, !1) : r.defaultValue != null && qn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = sl);
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
                return Pe(t), null;
            case 6:
                if (e && t.stateNode != null) sf(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
                    if (n = Sn(no.current), Sn(kt.current), zo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (l = r.nodeValue !== n) && (e = Ye, e !== null)) switch(e.tag){
                            case 3:
                                Io(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Io(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
                }
                return Pe(t), null;
            case 13:
                if (oe(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ie && Qe !== null && t.mode & 1 && !(t.flags & 128)) Cd(), sr(), t.flags |= 98560, l = !1;
                    else if (l = zo(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(I(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(I(317));
                            l[vt] = t;
                        } else sr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Pe(t), l = !1;
                    } else dt !== null && (ds(dt), dt = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? _e === 0 && (_e = 3) : ia())), t.updateQueue !== null && (t.flags |= 4), Pe(t), null);
            case 4:
                return ur(), rs(e, t), e === null && Jr(t.stateNode.containerInfo), Pe(t), null;
            case 10:
                return Ws(t.type._context), Pe(t), null;
            case 17:
                return Ge(t.type) && al(), Pe(t), null;
            case 19:
                if (oe(ae), l = t.memoizedState, l === null) return Pe(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) _r(l, !1);
                else {
                    if (_e !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = hl(e), i !== null) {
                            for(t.flags |= 128, _r(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return te(ae, ae.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && ye() > dr && (t.flags |= 128, r = !0, _r(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = hl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _r(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ie) return Pe(t), null;
                    } else 2 * ye() - l.renderingStartTime > dr && n !== 1073741824 && (t.flags |= 128, r = !0, _r(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ye(), t.sibling = null, n = ae.current, te(ae, r ? n & 1 | 2 : n & 1), t) : (Pe(t), null);
            case 22:
            case 23:
                return la(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ke & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(I(156, t.tag));
    }
    function Bh(e, t) {
        switch(Fs(t), t.tag){
            case 1:
                return Ge(t.type) && al(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ur(), oe(Ve), oe(be), Qs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Ks(t), null;
            case 13:
                if (oe(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(I(340));
                    sr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return oe(ae), null;
            case 4:
                return ur(), null;
            case 10:
                return Ws(t.type._context), null;
            case 22:
            case 23:
                return la(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Po = !1, Me = !1, Wh = typeof WeakSet == "function" ? WeakSet : Set, R = null;
    function Yn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            pe(e, t, r);
        }
        else n.current = null;
    }
    function os(e, t, n) {
        try {
            n();
        } catch (r) {
            pe(e, t, r);
        }
    }
    var wu = !1;
    function Vh(e, t) {
        if (Ui = ol, e = dd(), Ds(e)) {
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
                    var i = 0, s = -1, a = -1, u = 0, d = 0, c = e, h = null;
                    t: for(;;){
                        for(var v; c !== n || o !== 0 && c.nodeType !== 3 || (s = i + o), c !== l || r !== 0 && c.nodeType !== 3 || (a = i + r), c.nodeType === 3 && (i += c.nodeValue.length), (v = c.firstChild) !== null;)h = c, c = v;
                        for(;;){
                            if (c === e) break t;
                            if (h === n && ++u === o && (s = i), h === l && ++d === r && (a = i), (v = c.nextSibling) !== null) break;
                            c = h, h = c.parentNode;
                        }
                        c = v;
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
        for(Bi = {
            focusedElem: e,
            selectionRange: n
        }, ol = !1, R = t; R !== null;)if (t = R, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, R = e;
        else for(; R !== null;){
            t = R;
            try {
                var x = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (x !== null) {
                            var w = x.memoizedProps, m = x.memoizedState, f = t.stateNode, p = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : at(t.type, w), m);
                            f.__reactInternalSnapshotBeforeUpdate = p;
                        }
                        break;
                    case 3:
                        var g = t.stateNode.containerInfo;
                        g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
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
                e.return = t.return, R = e;
                break;
            }
            R = t.return;
        }
        return x = wu, wu = !1, x;
    }
    function $r(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && os(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function Ll(e, t) {
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
    function ls(e) {
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
    function af(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, af(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[eo], delete t[Gi], delete t[Th], delete t[Nh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function uf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Su(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || uf(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function is(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sl));
        else if (r !== 4 && (e = e.child, e !== null)) for(is(e, t, n), e = e.sibling; e !== null;)is(e, t, n), e = e.sibling;
    }
    function ss(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(ss(e, t, n), e = e.sibling; e !== null;)ss(e, t, n), e = e.sibling;
    }
    var Ie = null, ut = !1;
    function At(e, t, n) {
        for(n = n.child; n !== null;)cf(e, t, n), n = n.sibling;
    }
    function cf(e, t, n) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
            St.onCommitFiberUnmount(Nl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Me || Yn(n, t);
            case 6:
                var r = Ie, o = ut;
                Ie = null, At(e, t, n), Ie = r, ut = o, Ie !== null && (ut ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ie.removeChild(n.stateNode));
                break;
            case 18:
                Ie !== null && (ut ? (e = Ie, n = n.stateNode, e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n), Yr(e)) : ii(Ie, n.stateNode));
                break;
            case 4:
                r = Ie, o = ut, Ie = n.stateNode.containerInfo, ut = !0, At(e, t, n), Ie = r, ut = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && os(n, t, i), o = o.next;
                    }while (o !== r);
                }
                At(e, t, n);
                break;
            case 1:
                if (!Me && (Yn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    pe(n, t, s);
                }
                At(e, t, n);
                break;
            case 21:
                At(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, At(e, t, n), Me = r) : At(e, t, n);
                break;
            default:
                At(e, t, n);
        }
    }
    function ku(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Wh), t.forEach(function(r) {
                var o = qh.bind(null, e, r);
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
                            Ie = s.stateNode, ut = !1;
                            break e;
                        case 3:
                            Ie = s.stateNode.containerInfo, ut = !0;
                            break e;
                        case 4:
                            Ie = s.stateNode.containerInfo, ut = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (Ie === null) throw Error(I(160));
                cf(l, i, o), Ie = null, ut = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                pe(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)df(t, e), t = t.sibling;
    }
    function df(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (it(t, e), gt(e), r & 4) {
                    try {
                        $r(3, e, e.return), Ll(3, e);
                    } catch (w) {
                        pe(e, e.return, w);
                    }
                    try {
                        $r(5, e, e.return);
                    } catch (w) {
                        pe(e, e.return, w);
                    }
                }
                break;
            case 1:
                it(t, e), gt(e), r & 512 && n !== null && Yn(n, n.return);
                break;
            case 5:
                if (it(t, e), gt(e), r & 512 && n !== null && Yn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        Gr(o, "");
                    } catch (w) {
                        pe(e, e.return, w);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Pc(o, l), ji(s, i);
                        var u = ji(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var d = a[i], c = a[i + 1];
                            d === "style" ? Dc(o, c) : d === "dangerouslySetInnerHTML" ? Lc(o, c) : d === "children" ? Gr(o, c) : Cs(o, d, c, u);
                        }
                        switch(s){
                            case "input":
                                Ti(o, l);
                                break;
                            case "textarea":
                                Mc(o, l);
                                break;
                            case "select":
                                var h = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var v = l.value;
                                v != null ? qn(o, !!l.multiple, v, !1) : h !== !!l.multiple && (l.defaultValue != null ? qn(o, !!l.multiple, l.defaultValue, !0) : qn(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[eo] = l;
                    } catch (w) {
                        pe(e, e.return, w);
                    }
                }
                break;
            case 6:
                if (it(t, e), gt(e), r & 4) {
                    if (e.stateNode === null) throw Error(I(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (w) {
                        pe(e, e.return, w);
                    }
                }
                break;
            case 3:
                if (it(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Yr(t.containerInfo);
                } catch (w) {
                    pe(e, e.return, w);
                }
                break;
            case 4:
                it(t, e), gt(e);
                break;
            case 13:
                it(t, e), gt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ra = ye())), r & 4 && ku(e);
                break;
            case 22:
                if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (u = Me) || d, it(t, e), Me = u) : it(t, e), gt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for(R = e, d = e.child; d !== null;){
                        for(c = R = d; R !== null;){
                            switch(h = R, v = h.child, h.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    $r(4, h, h.return);
                                    break;
                                case 1:
                                    Yn(h, h.return);
                                    var x = h.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                                        } catch (w) {
                                            pe(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Yn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Cu(c);
                                        continue;
                                    }
                            }
                            v !== null ? (v.return = h, R = v) : Cu(c);
                        }
                        d = d.sibling;
                    }
                    e: for(d = null, c = e;;){
                        if (c.tag === 5) {
                            if (d === null) {
                                d = c;
                                try {
                                    o = c.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = c.stateNode, a = c.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Oc("display", i));
                                } catch (w) {
                                    pe(e, e.return, w);
                                }
                            }
                        } else if (c.tag === 6) {
                            if (d === null) try {
                                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                            } catch (w) {
                                pe(e, e.return, w);
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
                it(t, e), gt(e), r & 4 && ku(e);
                break;
            case 21:
                break;
            default:
                it(t, e), gt(e);
        }
    }
    function gt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (uf(n)) {
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
                        r.flags & 32 && (Gr(o, ""), r.flags &= -33);
                        var l = Su(e);
                        ss(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = Su(e);
                        is(e, s, i);
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
    function Gh(e, t, n) {
        R = e, ff(e);
    }
    function ff(e, t, n) {
        for(var r = (e.mode & 1) !== 0; R !== null;){
            var o = R, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Po;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || Me;
                    s = Po;
                    var u = Me;
                    if (Po = i, (Me = a) && !u) for(R = o; R !== null;)i = R, a = i.child, i.tag === 22 && i.memoizedState !== null ? Eu(o) : a !== null ? (a.return = i, R = a) : Eu(o);
                    for(; l !== null;)R = l, ff(l), l = l.sibling;
                    R = o, Po = s, Me = u;
                }
                _u(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, R = l) : _u(e);
        }
    }
    function _u(e) {
        for(; R !== null;){
            var t = R;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Me || Ll(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Me) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : at(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && su(t, l, r);
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
                                su(t, i, n);
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
                                        c !== null && Yr(c);
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
                    Me || t.flags & 512 && ls(t);
                } catch (h) {
                    pe(t, t.return, h);
                }
            }
            if (t === e) {
                R = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, R = n;
                break;
            }
            R = t.return;
        }
    }
    function Cu(e) {
        for(; R !== null;){
            var t = R;
            if (t === e) {
                R = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, R = n;
                break;
            }
            R = t.return;
        }
    }
    function Eu(e) {
        for(; R !== null;){
            var t = R;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Ll(4, t);
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
                            ls(t);
                        } catch (a) {
                            pe(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            ls(t);
                        } catch (a) {
                            pe(t, i, a);
                        }
                }
            } catch (a) {
                pe(t, t.return, a);
            }
            if (t === e) {
                R = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, R = s;
                break;
            }
            R = t.return;
        }
    }
    var Hh = Math.ceil, xl = Dt.ReactCurrentDispatcher, ta = Dt.ReactCurrentOwner, rt = Dt.ReactCurrentBatchConfig, V = 0, Te = null, xe = null, ze = 0, Ke = 0, Xn = an(0), _e = 0, io = null, In = 0, Ol = 0, na = 0, Ur = null, Ue = null, ra = 0, dr = 1 / 0, Tt = null, vl = !1, as = null, en = null, Mo = !1, Qt = null, wl = 0, Br = 0, us = null, Ko = -1, Qo = 0;
    function Oe() {
        return V & 6 ? ye() : Ko !== -1 ? Ko : Ko = ye();
    }
    function tn(e) {
        return e.mode & 1 ? V & 2 && ze !== 0 ? ze & -ze : zh.transition !== null ? (Qo === 0 && (Qo = Yc()), Qo) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nd(e.type)), e) : 1;
    }
    function mt(e, t, n, r) {
        if (50 < Br) throw Br = 0, us = null, Error(I(185));
        co(e, n, r), (!(V & 2) || e !== Te) && (e === Te && (!(V & 2) && (Ol |= n), _e === 4 && Ht(e, ze)), He(e, r), n === 1 && V === 0 && !(t.mode & 1) && (dr = ye() + 500, Pl && un()));
    }
    function He(e, t) {
        var n = e.callbackNode;
        zm(e, t);
        var r = rl(e, e === Te ? ze : 0);
        if (r === 0) n !== null && ba(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && ba(n), t === 1) e.tag === 0 ? Ih(Tu.bind(null, e)) : Sd(Tu.bind(null, e)), Ch(function() {
                !(V & 6) && un();
            }), n = null;
            else {
                switch(Xc(r)){
                    case 1:
                        n = zs;
                        break;
                    case 4:
                        n = Kc;
                        break;
                    case 16:
                        n = nl;
                        break;
                    case 536870912:
                        n = Qc;
                        break;
                    default:
                        n = nl;
                }
                n = wf(n, pf.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function pf(e, t) {
        if (Ko = -1, Qo = 0, V & 6) throw Error(I(327));
        var n = e.callbackNode;
        if (or() && e.callbackNode !== n) return null;
        var r = rl(e, e === Te ? ze : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
        else {
            t = r;
            var o = V;
            V |= 2;
            var l = hf();
            (Te !== e || ze !== t) && (Tt = null, dr = ye() + 500, kn(e, t));
            do try {
                Yh();
                break;
            } catch (s) {
                mf(e, s);
            }
            while (!0);
            Bs(), xl.current = l, V = o, xe !== null ? t = 0 : (Te = null, ze = 0, t = _e);
        }
        if (t !== 0) {
            if (t === 2 && (o = Oi(e), o !== 0 && (r = o, t = cs(e, o))), t === 1) throw n = io, kn(e, 0), Ht(e, r), He(e, ye()), n;
            if (t === 6) Ht(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Kh(o) && (t = Sl(e, r), t === 2 && (l = Oi(e), l !== 0 && (r = l, t = cs(e, l))), t === 1)) throw n = io, kn(e, 0), Ht(e, r), He(e, ye()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(I(345));
                    case 2:
                        xn(e, Ue, Tt);
                        break;
                    case 3:
                        if (Ht(e, r), (r & 130023424) === r && (t = ra + 500 - ye(), 10 < t)) {
                            if (rl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Oe(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = Vi(xn.bind(null, e, Ue, Tt), t);
                            break;
                        }
                        xn(e, Ue, Tt);
                        break;
                    case 4:
                        if (Ht(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - pt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = ye() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hh(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Vi(xn.bind(null, e, Ue, Tt), r);
                            break;
                        }
                        xn(e, Ue, Tt);
                        break;
                    case 5:
                        xn(e, Ue, Tt);
                        break;
                    default:
                        throw Error(I(329));
                }
            }
        }
        return He(e, ye()), e.callbackNode === n ? pf.bind(null, e) : null;
    }
    function cs(e, t) {
        var n = Ur;
        return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && ds(t)), e;
    }
    function ds(e) {
        Ue === null ? Ue = e : Ue.push.apply(Ue, e);
    }
    function Kh(e) {
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
    function Ht(e, t) {
        for(t &= ~na, t &= ~Ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - pt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Tu(e) {
        if (V & 6) throw Error(I(327));
        or();
        var t = rl(e, 0);
        if (!(t & 1)) return He(e, ye()), null;
        var n = Sl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Oi(e);
            r !== 0 && (t = r, n = cs(e, r));
        }
        if (n === 1) throw n = io, kn(e, 0), Ht(e, t), He(e, ye()), n;
        if (n === 6) throw Error(I(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, Ue, Tt), He(e, ye()), null;
    }
    function oa(e, t) {
        var n = V;
        V |= 1;
        try {
            return e(t);
        } finally{
            V = n, V === 0 && (dr = ye() + 500, Pl && un());
        }
    }
    function zn(e) {
        Qt !== null && Qt.tag === 0 && !(V & 6) && or();
        var t = V;
        V |= 1;
        var n = rt.transition, r = Y;
        try {
            if (rt.transition = null, Y = 1, e) return e();
        } finally{
            Y = r, rt.transition = n, V = t, !(V & 6) && un();
        }
    }
    function la() {
        Ke = Xn.current, oe(Xn);
    }
    function kn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, _h(n)), xe !== null) for(n = xe.return; n !== null;){
            var r = n;
            switch(Fs(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && al();
                    break;
                case 3:
                    ur(), oe(Ve), oe(be), Qs();
                    break;
                case 5:
                    Ks(r);
                    break;
                case 4:
                    ur();
                    break;
                case 13:
                    oe(ae);
                    break;
                case 19:
                    oe(ae);
                    break;
                case 10:
                    Ws(r.type._context);
                    break;
                case 22:
                case 23:
                    la();
            }
            n = n.return;
        }
        if (Te = e, xe = e = nn(e.current, null), ze = Ke = t, _e = 0, io = null, na = Ol = In = 0, Ue = Ur = null, wn !== null) {
            for(t = 0; t < wn.length; t++)if (n = wn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            wn = null;
        }
        return e;
    }
    function mf(e, t) {
        do {
            var n = xe;
            try {
                if (Bs(), Vo.current = yl, gl) {
                    for(var r = ue.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    gl = !1;
                }
                if (Nn = 0, Ee = ke = ue = null, Fr = !1, ro = 0, ta.current = null, n === null || n.return === null) {
                    _e = 1, io = t, xe = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = ze, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, d = s, c = d.tag;
                        if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                            var h = d.alternate;
                            h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var v = pu(i);
                        if (v !== null) {
                            v.flags &= -257, mu(v, i, s, l, t), v.mode & 1 && fu(l, u, t), t = v, a = u;
                            var x = t.updateQueue;
                            if (x === null) {
                                var w = new Set;
                                w.add(a), t.updateQueue = w;
                            } else x.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                fu(l, u, t), ia();
                                break e;
                            }
                            a = Error(I(426));
                        }
                    } else if (ie && s.mode & 1) {
                        var m = pu(i);
                        if (m !== null) {
                            !(m.flags & 65536) && (m.flags |= 256), mu(m, i, s, l, t), $s(cr(a, s));
                            break e;
                        }
                    }
                    l = a = cr(a, s), _e !== 4 && (_e = 2), Ur === null ? Ur = [
                        l
                    ] : Ur.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var f = Xd(l, a, t);
                                iu(l, f);
                                break e;
                            case 1:
                                s = a;
                                var p = l.type, g = l.stateNode;
                                if (!(l.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (en === null || !en.has(g)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = Zd(l, s, t);
                                    iu(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                yf(n);
            } catch (k) {
                t = k, xe === n && n !== null && (xe = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function hf() {
        var e = xl.current;
        return xl.current = yl, e === null ? yl : e;
    }
    function ia() {
        (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Te === null || !(In & 268435455) && !(Ol & 268435455) || Ht(Te, ze);
    }
    function Sl(e, t) {
        var n = V;
        V |= 2;
        var r = hf();
        (Te !== e || ze !== t) && (Tt = null, kn(e, t));
        do try {
            Qh();
            break;
        } catch (o) {
            mf(e, o);
        }
        while (!0);
        if (Bs(), V = n, xl.current = r, xe !== null) throw Error(I(261));
        return Te = null, ze = 0, _e;
    }
    function Qh() {
        for(; xe !== null;)gf(xe);
    }
    function Yh() {
        for(; xe !== null && !wm();)gf(xe);
    }
    function gf(e) {
        var t = vf(e.alternate, e, Ke);
        e.memoizedProps = e.pendingProps, t === null ? yf(e) : xe = t, ta.current = null;
    }
    function yf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Bh(n, t), n !== null) {
                    n.flags &= 32767, xe = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    _e = 6, xe = null;
                    return;
                }
            } else if (n = Uh(n, t, Ke), n !== null) {
                xe = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                xe = t;
                return;
            }
            xe = t = e;
        }while (t !== null);
        _e === 0 && (_e = 5);
    }
    function xn(e, t, n) {
        var r = Y, o = rt.transition;
        try {
            rt.transition = null, Y = 1, Xh(e, t, n, r);
        } finally{
            rt.transition = o, Y = r;
        }
        return null;
    }
    function Xh(e, t, n, r) {
        do or();
        while (Qt !== null);
        if (V & 6) throw Error(I(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Rm(e, l), e === Te && (xe = Te = null, ze = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Mo || (Mo = !0, wf(nl, function() {
            return or(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = rt.transition, rt.transition = null;
            var i = Y;
            Y = 1;
            var s = V;
            V |= 4, ta.current = null, Vh(e, n), df(n, e), gh(Bi), ol = !!Ui, Bi = Ui = null, e.current = n, Gh(n), Sm(), V = s, Y = i, rt.transition = l;
        } else e.current = n;
        if (Mo && (Mo = !1, Qt = e, wl = o), l = e.pendingLanes, l === 0 && (en = null), Cm(n.stateNode), He(e, ye()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (vl) throw vl = !1, e = as, as = null, e;
        return wl & 1 && e.tag !== 0 && or(), l = e.pendingLanes, l & 1 ? e === us ? Br++ : (Br = 0, us = e) : Br = 0, un(), null;
    }
    function or() {
        if (Qt !== null) {
            var e = Xc(wl), t = rt.transition, n = Y;
            try {
                if (rt.transition = null, Y = 16 > e ? 16 : e, Qt === null) var r = !1;
                else {
                    if (e = Qt, Qt = null, wl = 0, V & 6) throw Error(I(331));
                    var o = V;
                    for(V |= 4, R = e.current; R !== null;){
                        var l = R, i = l.child;
                        if (R.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var a = 0; a < s.length; a++){
                                    var u = s[a];
                                    for(R = u; R !== null;){
                                        var d = R;
                                        switch(d.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                $r(8, d, l);
                                        }
                                        var c = d.child;
                                        if (c !== null) c.return = d, R = c;
                                        else for(; R !== null;){
                                            d = R;
                                            var h = d.sibling, v = d.return;
                                            if (af(d), d === u) {
                                                R = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                h.return = v, R = h;
                                                break;
                                            }
                                            R = v;
                                        }
                                    }
                                }
                                var x = l.alternate;
                                if (x !== null) {
                                    var w = x.child;
                                    if (w !== null) {
                                        x.child = null;
                                        do {
                                            var m = w.sibling;
                                            w.sibling = null, w = m;
                                        }while (w !== null);
                                    }
                                }
                                R = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, R = i;
                        else e: for(; R !== null;){
                            if (l = R, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    $r(9, l, l.return);
                            }
                            var f = l.sibling;
                            if (f !== null) {
                                f.return = l.return, R = f;
                                break e;
                            }
                            R = l.return;
                        }
                    }
                    var p = e.current;
                    for(R = p; R !== null;){
                        i = R;
                        var g = i.child;
                        if (i.subtreeFlags & 2064 && g !== null) g.return = i, R = g;
                        else e: for(i = p; R !== null;){
                            if (s = R, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ll(9, s);
                                }
                            } catch (k) {
                                pe(s, s.return, k);
                            }
                            if (s === i) {
                                R = null;
                                break e;
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return, R = S;
                                break e;
                            }
                            R = s.return;
                        }
                    }
                    if (V = o, un(), St && typeof St.onPostCommitFiberRoot == "function") try {
                        St.onPostCommitFiberRoot(Nl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                Y = n, rt.transition = t;
            }
        }
        return !1;
    }
    function Nu(e, t, n) {
        t = cr(n, t), t = Xd(e, t, 1), e = qt(e, t, 1), t = Oe(), e !== null && (co(e, 1, t), He(e, t));
    }
    function pe(e, t, n) {
        if (e.tag === 3) Nu(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Nu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
                    e = cr(n, e), e = Zd(t, e, 1), t = qt(t, e, 1), e = Oe(), t !== null && (co(t, 1, e), He(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Zh(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, Te === e && (ze & n) === n && (_e === 4 || _e === 3 && (ze & 130023424) === ze && 500 > ye() - ra ? kn(e, 0) : na |= n), He(e, t);
    }
    function xf(e, t) {
        t === 0 && (e.mode & 1 ? (t = _o, _o <<= 1, !(_o & 130023424) && (_o = 4194304)) : t = 1);
        var n = Oe();
        e = Lt(e, t), e !== null && (co(e, t, n), He(e, n));
    }
    function Jh(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), xf(e, n);
    }
    function qh(e, t) {
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
        r !== null && r.delete(t), xf(e, n);
    }
    var vf;
    vf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Be = !1, $h(e, t, n);
            Be = !!(e.flags & 131072);
        }
        else Be = !1, ie && t.flags & 1048576 && kd(t, dl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                Ho(e, t), e = t.pendingProps;
                var o = ir(t, be.current);
                rr(t, n), o = Xs(null, t, r, e, o, n);
                var l = Zs();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ge(r) ? (l = !0, ul(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Gs(t), o.updater = bl, t.stateNode = o, o._reactInternals = t, Zi(t, r, e, n), t = es(null, t, r, !0, l, n)) : (t.tag = 0, ie && l && As(t), Le(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(Ho(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = tg(r), e = at(r, e), o){
                        case 0:
                            t = qi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = yu(null, t, r, e, n);
                            break e;
                        case 11:
                            t = hu(null, t, r, e, n);
                            break e;
                        case 14:
                            t = gu(null, t, r, at(r.type, e), n);
                            break e;
                    }
                    throw Error(I(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), qi(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), yu(e, t, r, o, n);
            case 3:
                e: {
                    if (tf(t), e === null) throw Error(I(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Id(e, t), ml(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = cr(Error(I(423)), t), t = xu(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = cr(Error(I(424)), t), t = xu(e, t, r, n, o);
                        break e;
                    } else for(Qe = Jt(t.stateNode.containerInfo.firstChild), Ye = t, ie = !0, dt = null, n = Td(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (sr(), r === o) {
                            t = Ot(e, t, n);
                            break e;
                        }
                        Le(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return zd(t), e === null && Qi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Wi(r, o) ? i = null : l !== null && Wi(r, l) && (t.flags |= 32), ef(e, t), Le(e, t, i, n), t.child;
            case 6:
                return e === null && Qi(t), null;
            case 13:
                return nf(e, t, n);
            case 4:
                return Hs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : Le(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), hu(e, t, r, o, n);
            case 7:
                return Le(e, t, t.pendingProps, n), t.child;
            case 8:
                return Le(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Le(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, te(fl, r._currentValue), r._currentValue = i, l !== null) if (ht(l.value, i)) {
                        if (l.children === o.children && !Ve.current) {
                            t = Ot(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var a = s.firstContext; a !== null;){
                                if (a.context === r) {
                                    if (l.tag === 1) {
                                        a = jt(-1, n & -n), a.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                                        }
                                    }
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), Yi(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(I(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Yi(i, n, t), i = l.sibling;
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
                    Le(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, rr(t, n), o = ot(o), r = r(o), t.flags |= 1, Le(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = at(r, t.pendingProps), o = at(r.type, o), gu(e, t, r, o, n);
            case 15:
                return Jd(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : at(r, o), Ho(e, t), t.tag = 1, Ge(r) ? (e = !0, ul(t)) : e = !1, rr(t, n), Yd(t, r, o), Zi(t, r, o, n), es(null, t, r, !0, e, n);
            case 19:
                return rf(e, t, n);
            case 22:
                return qd(e, t, n);
        }
        throw Error(I(156, t.tag));
    };
    function wf(e, t) {
        return Hc(e, t);
    }
    function eg(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function nt(e, t, n, r) {
        return new eg(e, t, n, r);
    }
    function sa(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function tg(e) {
        if (typeof e == "function") return sa(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Ts) return 11;
            if (e === Ns) return 14;
        }
        return 2;
    }
    function nn(e, t) {
        var n = e.alternate;
        return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function Yo(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") sa(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case $n:
                return _n(n.children, o, l, t);
            case Es:
                i = 8, o |= 8;
                break;
            case Si:
                return e = nt(12, n, t, o | 2), e.elementType = Si, e.lanes = l, e;
            case ki:
                return e = nt(13, n, t, o), e.elementType = ki, e.lanes = l, e;
            case _i:
                return e = nt(19, n, t, o), e.elementType = _i, e.lanes = l, e;
            case zc:
                return Dl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Nc:
                        i = 10;
                        break e;
                    case Ic:
                        i = 9;
                        break e;
                    case Ts:
                        i = 11;
                        break e;
                    case Ns:
                        i = 14;
                        break e;
                    case Wt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(I(130, e == null ? e : typeof e, ""));
        }
        return t = nt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function _n(e, t, n, r) {
        return e = nt(7, e, r, t), e.lanes = n, e;
    }
    function Dl(e, t, n, r) {
        return e = nt(22, e, r, t), e.elementType = zc, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function mi(e, t, n) {
        return e = nt(6, e, null, t), e.lanes = n, e;
    }
    function hi(e, t, n) {
        return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function ng(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yl(0), this.expirationTimes = Yl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function aa(e, t, n, r, o, l, i, s, a) {
        return e = new ng(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = nt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Gs(l), e;
    }
    function rg(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Fn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Sf(e) {
        if (!e) return on;
        e = e._reactInternals;
        e: {
            if (jn(e) !== e || e.tag !== 1) throw Error(I(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Ge(t.type)) {
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
            if (Ge(n)) return wd(e, n, t);
        }
        return t;
    }
    function kf(e, t, n, r, o, l, i, s, a) {
        return e = aa(n, r, !0, e, o, l, i, s, a), e.context = Sf(null), n = e.current, r = Oe(), o = tn(n), l = jt(r, o), l.callback = t ?? null, qt(n, l, o), e.current.lanes = o, co(e, o, r), He(e, r), e;
    }
    function Al(e, t, n, r) {
        var o = t.current, l = Oe(), i = tn(o);
        return n = Sf(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qt(o, t, i), e !== null && (mt(e, o, i, l), Wo(e, o, i)), i;
    }
    function kl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Iu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function ua(e, t) {
        Iu(e, t), (e = e.alternate) && Iu(e, t);
    }
    function og() {
        return null;
    }
    var _f = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function ca(e) {
        this._internalRoot = e;
    }
    Fl.prototype.render = ca.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(I(409));
        Al(e, t, null, null);
    };
    Fl.prototype.unmount = ca.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            zn(function() {
                Al(null, e, null, null);
            }), t[bt] = null;
        }
    };
    function Fl(e) {
        this._internalRoot = e;
    }
    Fl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = qc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
            Gt.splice(n, 0, e), n === 0 && td(e);
        }
    };
    function da(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function $l(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function zu() {}
    function lg(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = kl(i);
                    l.call(u);
                };
            }
            var i = kf(t, r, e, 0, null, !1, !1, "", zu);
            return e._reactRootContainer = i, e[bt] = i.current, Jr(e.nodeType === 8 ? e.parentNode : e), zn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = kl(a);
                s.call(u);
            };
        }
        var a = aa(e, 0, !1, null, null, !1, !1, "", zu);
        return e._reactRootContainer = a, e[bt] = a.current, Jr(e.nodeType === 8 ? e.parentNode : e), zn(function() {
            Al(t, a, n, r);
        }), a;
    }
    function Ul(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = kl(i);
                    s.call(a);
                };
            }
            Al(t, i, e, o);
        } else i = lg(n, t, e, o, r);
        return kl(i);
    }
    Zc = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = jr(t.pendingLanes);
                    n !== 0 && (Rs(t, n | 1), He(t, ye()), !(V & 6) && (dr = ye() + 500, un()));
                }
                break;
            case 13:
                zn(function() {
                    var r = Lt(e, 1);
                    if (r !== null) {
                        var o = Oe();
                        mt(r, e, 1, o);
                    }
                }), ua(e, 1);
        }
    };
    js = function(e) {
        if (e.tag === 13) {
            var t = Lt(e, 134217728);
            if (t !== null) {
                var n = Oe();
                mt(t, e, 134217728, n);
            }
            ua(e, 134217728);
        }
    };
    Jc = function(e) {
        if (e.tag === 13) {
            var t = tn(e), n = Lt(e, t);
            if (n !== null) {
                var r = Oe();
                mt(n, e, t, r);
            }
            ua(e, t);
        }
    };
    qc = function() {
        return Y;
    };
    ed = function(e, t) {
        var n = Y;
        try {
            return Y = e, t();
        } finally{
            Y = n;
        }
    };
    Mi = function(e, t, n) {
        switch(t){
            case "input":
                if (Ti(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = jl(r);
                            if (!o) throw Error(I(90));
                            jc(r), Ti(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Mc(e, n);
                break;
            case "select":
                t = n.value, t != null && qn(e, !!n.multiple, t, !1);
        }
    };
    $c = oa;
    Uc = zn;
    var ig = {
        usingClientEntryPoint: !1,
        Events: [
            po,
            Vn,
            jl,
            Ac,
            Fc,
            oa
        ]
    }, Cr = {
        findFiberByHostInstance: vn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, sg = {
        bundleType: Cr.bundleType,
        version: Cr.version,
        rendererPackageName: Cr.rendererPackageName,
        rendererConfig: Cr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Dt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Vc(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Cr.findFiberByHostInstance || og,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!bo.isDisabled && bo.supportsFiber) try {
            Nl = bo.inject(sg), St = bo;
        } catch  {}
    }
    Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig;
    Ze.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!da(t)) throw Error(I(200));
        return rg(e, t, null, n);
    };
    Ze.createRoot = function(e, t) {
        if (!da(e)) throw Error(I(299));
        var n = !1, r = "", o = _f;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = aa(e, 1, !1, null, null, n, !1, r, o), e[bt] = t.current, Jr(e.nodeType === 8 ? e.parentNode : e), new ca(t);
    };
    Ze.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
        return e = Vc(t), e = e === null ? null : e.stateNode, e;
    };
    Ze.flushSync = function(e) {
        return zn(e);
    };
    Ze.hydrate = function(e, t, n) {
        if (!$l(t)) throw Error(I(200));
        return Ul(null, e, t, !0, n);
    };
    Ze.hydrateRoot = function(e, t, n) {
        if (!da(e)) throw Error(I(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = _f;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kf(t, null, e, 1, n ?? null, o, !1, l, i), e[bt] = t.current, Jr(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Fl(t);
    };
    Ze.render = function(e, t, n) {
        if (!$l(t)) throw Error(I(200));
        return Ul(null, e, t, !1, n);
    };
    Ze.unmountComponentAtNode = function(e) {
        if (!$l(e)) throw Error(I(40));
        return e._reactRootContainer ? (zn(function() {
            Ul(null, null, e, !1, function() {
                e._reactRootContainer = null, e[bt] = null;
            });
        }), !0) : !1;
    };
    Ze.unstable_batchedUpdates = oa;
    Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!$l(n)) throw Error(I(200));
        if (e == null || e._reactInternals === void 0) throw Error(I(38));
        return Ul(e, t, n, !1, r);
    };
    Ze.version = "18.3.1-next-f1338f8080-20240426";
    function Cf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf);
        } catch (e) {
            console.error(e);
        }
    }
    Cf(), _c.exports = Ze;
    var ag = _c.exports, Ru = ag;
    vi.createRoot = Ru.createRoot, vi.hydrateRoot = Ru.hydrateRoot;
    const ug = "modulepreload", cg = function(e) {
        return "/grid-draw/" + e;
    }, ju = {}, fa = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = cg(a), a in ju) return;
                ju[a] = !0;
                const u = a.endsWith(".css"), d = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${d}`)) return;
                const c = document.createElement("link");
                if (c.rel = u ? "stylesheet" : ug, u || (c.as = "script"), c.crossOrigin = "", c.href = a, s && c.setAttribute("nonce", s), document.head.appendChild(c), u) return new Promise((h, v)=>{
                    c.addEventListener("load", h), c.addEventListener("error", ()=>v(new Error(`Unable to preload CSS for ${a}`)));
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
    }, Pu = (e)=>{
        let t;
        const n = new Set, r = (u, d)=>{
            const c = typeof u == "function" ? u(t) : u;
            if (!Object.is(c, t)) {
                const h = t;
                t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((v)=>v(t, h));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, dg = (e)=>e ? Pu(e) : Pu, fg = (e)=>e;
    function pg(e, t = fg) {
        const n = le.useSyncExternalStore(e.subscribe, le.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), le.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return le.useDebugValue(n), n;
    }
    const Mu = (e)=>{
        const t = dg(e), n = (r)=>pg(t, r);
        return Object.assign(n, t), n;
    }, Ef = (e)=>e ? Mu(e) : Mu, Tf = [
        1,
        1.5,
        2,
        3,
        5
    ], Nf = [
        1,
        1.5,
        2,
        3,
        5
    ], ln = 8, Mr = [
        1,
        2,
        4,
        8
    ], Xo = (e)=>Math.round(e * 10), mg = (e)=>e / 10;
    function If(e, t) {
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
    function zf(e, t) {
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
    function bu(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Lu(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Ou(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            boxW: n[3],
            boxH: n[4]
        };
    }
    function Rf(e, t) {
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
    function Du(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function jf(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            url: e.get_image_url(t)
        };
    }
    function Er(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Pf(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" || e.type === "image" && t.type === "image" ? e.index === t.index : !1;
    }
    function Zn(e, t) {
        return t.some((n)=>Pf(n, e));
    }
    function hg(e, t) {
        return Zn(e, t) ? t : [
            ...t,
            e
        ];
    }
    function gg(e, t) {
        return t.filter((n)=>!Pf(n, e));
    }
    function wt(e) {
        return (t)=>t.type === e;
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
    function yg(e, t) {
        const n = We(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function Wr(e, t, n = {}) {
        const r = We(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, d = [], c = [], h = [], v = [], x = [];
        for (const w of t)if (w.type === "cell") d.push([
            w.row - a,
            w.col - u,
            e.get_cell_color(w.row, w.col)
        ]);
        else if (w.type === "line") {
            const m = e.get_line(w.index);
            c.push([
                m[0] - a,
                m[1] - u,
                m[2] - a,
                m[3] - u,
                m[4],
                m[5]
            ]);
        } else if (w.type === "rect") {
            const m = e.get_rect(w.index);
            h.push([
                m[0] - a,
                m[1] - u,
                m[2] - a,
                m[3] - u,
                m[4],
                m[5]
            ]);
        } else if (w.type === "text") {
            const m = e.get_text(w.index);
            v.push([
                m[0] - a,
                m[1] - u,
                m[2],
                e.get_text_size(w.index),
                m[3],
                m[4],
                m[5],
                m[6],
                e.get_text_string(w.index)
            ]);
        } else if (w.type === "image") {
            const m = e.get_image(w.index);
            x.push([
                m[0] - a,
                m[1] - u,
                m[2] - a,
                m[3] - u,
                e.get_image_url(w.index)
            ]);
        }
        return d.sort((w, m)=>w[0] - m[0] || w[1] - m[1]), {
            w: s - u + 1,
            h: i - a + 1,
            cells: d,
            lines: c,
            rects: h,
            texts: v,
            images: x,
            sub: ln
        };
    }
    function xg(e) {
        return typeof e == "object" && e !== null;
    }
    function vg(e) {
        return Array.isArray(e);
    }
    function $e(e) {
        return typeof e == "number" ? e : void 0;
    }
    function wg(e) {
        if (vg(e)) {
            const t = e[0], n = e[1];
            return typeof t != "number" || typeof n != "number" ? null : e.length >= 9 ? {
                r: t,
                c: n,
                color: $e(e[2]),
                size: $e(e[3]),
                boxW: $e(e[4]),
                boxH: $e(e[5]),
                halign: $e(e[6]),
                valign: $e(e[7]),
                text: e[8]
            } : {
                r: t,
                c: n,
                color: $e(e[2]),
                size: $e(e[3]),
                text: e[4]
            };
        }
        return xg(e) ? typeof e.r != "number" || typeof e.c != "number" ? null : {
            r: e.r,
            c: e.c,
            color: $e(e.color),
            size: $e(e.size),
            boxW: $e(e.boxW),
            boxH: $e(e.boxH),
            halign: $e(e.halign),
            valign: $e(e.valign),
            text: e.text
        } : null;
    }
    function Au(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function Ft(e, t, n, r, o) {
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
    function Mf(e) {
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
        for(let r = 0; r < e.get_image_count(); r++)t.push({
            type: "image",
            index: r
        });
        return t;
    }
    const Sg = (e, t)=>({
            copy: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n || r.length === 0) return;
                const o = yg(r, n);
                if (!o) return;
                const l = [], i = [], s = [], a = [], u = [];
                for (const d of r)if (d.type === "cell") l.push({
                    relRow: d.row - o.minRow,
                    relCol: d.col - o.minCol,
                    color: n.get_cell_color(d.row, d.col)
                });
                else if (d.type === "line") {
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
                let u = n.get_line_count(), d = n.get_rect_count(), c = n.get_text_count(), h = n.get_image_count();
                for (const v of r.cells){
                    const x = s.row + v.relRow, w = s.col + v.relCol;
                    a.push({
                        kind: "setCellState",
                        row: x,
                        col: w,
                        from: {
                            filled: n.get_cell(x, w),
                            color: n.get_cell_color(x, w)
                        },
                        to: {
                            filled: !0,
                            color: v.color
                        }
                    }), l.push({
                        type: "cell",
                        row: x,
                        col: w
                    });
                }
                for (const v of r.lines){
                    const x = s.row + v.relR1, w = s.col + v.relC1, m = s.row + v.relR2, f = s.col + v.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: x,
                            c1: w,
                            r2: m,
                            c2: f,
                            color: v.color,
                            width: v.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const v of r.rects){
                    const x = s.row + v.relR1, w = s.col + v.relC1, m = s.row + v.relR2, f = s.col + v.relC2;
                    a.push({
                        kind: "addRect",
                        idx: d,
                        rect: {
                            r1: x,
                            c1: w,
                            r2: m,
                            c2: f,
                            fill: v.color,
                            outline: v.outline
                        }
                    }), l.push({
                        type: "rect",
                        index: d
                    }), d++;
                }
                for (const v of r.texts ?? []){
                    const x = s.row + v.relR, w = s.col + v.relC;
                    a.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: x,
                            c: w,
                            color: v.color,
                            size: v.size,
                            boxW: v.boxW,
                            boxH: v.boxH,
                            halign: v.halign,
                            valign: v.valign,
                            text: v.text
                        }
                    }), l.push({
                        type: "text",
                        index: c
                    }), c++;
                }
                for (const v of r.images ?? [])a.push({
                    kind: "addImage",
                    idx: h,
                    image: {
                        r1: s.row + v.relR1,
                        c1: s.col + v.relC1,
                        r2: s.row + v.relR2,
                        c2: s.col + v.relC2,
                        url: v.url
                    }
                }), l.push({
                    type: "image",
                    index: h
                }), h++;
                t().commitEdits(a), n.render(), e({
                    selectedItems: l
                }), t().renderSelection(), o();
            },
            deleteSelected: ()=>{
                const { grid: n, selectedItems: r, updateOutputs: o } = t();
                if (!n || r.length === 0) return;
                const l = r.filter(wt("line")).map((d)=>d.index).sort((d, c)=>c - d), i = r.filter(wt("rect")).map((d)=>d.index).sort((d, c)=>c - d), s = r.filter(wt("text")).map((d)=>d.index).sort((d, c)=>c - d), a = r.filter(wt("image")).map((d)=>d.index).sort((d, c)=>c - d), u = [];
                for (const d of r)if (d.type === "cell") {
                    const c = n.get_cell_color(d.row, d.col);
                    u.push({
                        kind: "setCellState",
                        row: d.row,
                        col: d.col,
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
                for (const d of l)u.push({
                    kind: "deleteLine",
                    idx: d,
                    line: If(n, d)
                });
                for (const d of i)u.push({
                    kind: "deleteRect",
                    idx: d,
                    rect: zf(n, d)
                });
                for (const d of s)u.push({
                    kind: "deleteText",
                    idx: d,
                    text: Rf(n, d)
                });
                for (const d of a)u.push({
                    kind: "deleteImage",
                    idx: d,
                    image: jf(n, d)
                });
                t().commitEdits(u), e({
                    selectedItems: []
                }), n.render(), o();
            }
        });
    function kg(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    const Fu = new Map;
    function _g() {
        fa(()=>Promise.resolve().then(()=>Gg), void 0).then((e)=>e.useGridStore.getState().grid?.render());
    }
    function pa(e) {
        const t = Fu.get(e);
        if (t) return t;
        const n = new Image;
        return n.crossOrigin = "anonymous", n.decoding = "async", n.onload = ()=>{
            _g();
        }, n.onerror = ()=>{}, n.src = e, Fu.set(e, n), n;
    }
    function Cg(e) {
        return new Promise((t, n)=>{
            const r = pa(e);
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
    function Eg(e, t) {
        if (typeof e.get_line_count != "function" || typeof e.get_rect_count != "function") return;
        const n = e.get_line_count(), r = e.get_rect_count(), o = typeof e.get_text_count == "function" ? e.get_text_count() : 0, l = typeof e.get_image_count == "function" ? e.get_image_count() : 0, i = (s, a, u)=>{
            if (a < 0 || a > u) throw new RangeError(`applyEdit: ${t.kind} index ${a} out of range (0..${u}) for ${s}`);
        };
        switch(t.kind){
            case "addLine":
                i("lines", t.idx, n);
                break;
            case "addRect":
                i("rects", t.idx, r);
                break;
            case "deleteLine":
            case "recolorLine":
            case "resizeLine":
            case "moveLine":
            case "setLineGeom":
                i("lines", t.idx, n - 1);
                break;
            case "deleteRect":
            case "recolorRectFill":
            case "recolorRectOutline":
            case "moveRect":
            case "setRectGeom":
                i("rects", t.idx, r - 1);
                break;
            case "addText":
                i("texts", t.idx, o);
                break;
            case "deleteText":
            case "recolorText":
            case "resizeText":
            case "alignText":
            case "setTextFrame":
            case "moveText":
                i("texts", t.idx, o - 1);
                break;
            case "addImage":
                i("images", t.idx, l);
                break;
            case "deleteImage":
            case "moveImage":
            case "setImageGeom":
                i("images", t.idx, l - 1);
                break;
        }
    }
    function Zo(e, t) {
        switch(Eg(e, t), t.kind){
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
                e.insert_image(t.idx, t.image.r1, t.image.c1, t.image.r2, t.image.c2, t.image.url, pa(t.image.url));
                break;
            case "deleteImage":
                e.delete_image(t.idx);
                break;
            case "batch":
                e.set_render_paused?.(!0);
                try {
                    for (const n of t.edits)Zo(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function bf(e) {
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
                    ].reverse().map(bf)
                };
        }
    }
    function Lf(e, t) {
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
            case "setImageGeom":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    to: t.to
                } : null;
            case "moveLine":
            case "moveRect":
            case "moveText":
            case "moveImage":
                return t.kind === e.kind && e.idx === t.idx ? {
                    ...e,
                    dRow: e.dRow + t.dRow,
                    dCol: e.dCol + t.dCol
                } : null;
            case "batch":
                if (t.kind === "batch" && e.edits.length === t.edits.length) {
                    const n = [];
                    for(let r = 0; r < e.edits.length; r++){
                        const o = Lf(e.edits[r], t.edits[r]);
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
    const Tg = 100, Ng = 600;
    class Ig {
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
            this.undoStack.push(t), this.undoStack.length > Tg && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (Zo(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Ng) {
                const i = this.undoStack[this.undoStack.length - 1], s = Lf(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (Zo(t, bf(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (Zo(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
    const ct = new Ig, zg = (e, t)=>({
            commitEdits: (n, r)=>{
                const { grid: o } = t();
                !o || n.length === 0 || (ct.commit(o, n.length === 1 ? n[0] : {
                    kind: "batch",
                    edits: n
                }, r), e({
                    historyTick: t().historyTick + 1
                }));
            },
            undo: ()=>{
                const { grid: n } = t();
                n && ct.undoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            redo: ()=>{
                const { grid: n } = t();
                n && ct.redoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            canUndo: ()=>ct.canUndo(),
            canRedo: ()=>ct.canRedo(),
            resetHistory: ()=>{
                ct.clear(), e({
                    historyTick: t().historyTick + 1
                });
            },
            exportHistory: ()=>ct.exportStacks()
        }), Rg = (e, t)=>({
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
                const o = Wr(n, r);
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
                const i = Wr(n, r);
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
                let a = l.get_line_count(), u = l.get_rect_count(), d = l.get_text_count(), c = l.get_image_count();
                const h = ln / (n.sub ?? 1);
                for (const [v, x, w] of n.cells ?? []){
                    const m = r + v * h, f = o + x * h;
                    i.push({
                        kind: "setCellState",
                        row: m,
                        col: f,
                        from: {
                            filled: l.get_cell(m, f),
                            color: l.get_cell_color(m, f)
                        },
                        to: {
                            filled: !0,
                            color: w
                        }
                    }), s.push({
                        type: "cell",
                        row: m,
                        col: f
                    });
                }
                for (const [v, x, w, m, f, p] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + v * h,
                        c1: o + x * h,
                        r2: r + w * h,
                        c2: o + m * h,
                        color: f,
                        width: p ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [v, x, w, m, f, p] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + v * h,
                        c1: o + x * h,
                        r2: r + w * h,
                        c2: o + m * h,
                        fill: f,
                        outline: p
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const v of n.texts ?? []){
                    const x = wg(v);
                    x && (i.push({
                        kind: "addText",
                        idx: d,
                        text: {
                            r: r + x.r * h,
                            c: o + x.c * h,
                            color: x.color ?? 0,
                            size: x.size ?? 1,
                            boxW: (x.boxW ?? 0) * h,
                            boxH: (x.boxH ?? 0) * h,
                            halign: x.halign ?? 0,
                            valign: x.valign ?? 0,
                            text: String(x.text ?? "")
                        }
                    }), s.push({
                        type: "text",
                        index: d
                    }), d++);
                }
                for (const v of n.images ?? []){
                    if (!Array.isArray(v) || v.length < 5) continue;
                    const [x, w, m, f, p] = v;
                    typeof p == "string" && (i.push({
                        kind: "addImage",
                        idx: c,
                        image: {
                            r1: r + x * h,
                            c1: o + w * h,
                            r2: r + m * h,
                            c2: o + f * h,
                            url: p
                        }
                    }), s.push({
                        type: "image",
                        index: c
                    }), c++);
                }
                i.length !== 0 && (t().commitEdits(i), l.render(), e({
                    selectedItems: s
                }), t().renderSelection(), t().updateOutputs());
            },
            serializeWholeGrid: ()=>{
                const { grid: n } = t();
                return n ? Wr(n, Mf(n), {
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
                o && (t().loadDesign(n), r && ((r.undo?.length ?? 0) > 0 || (r.redo?.length ?? 0) > 0) ? ct.importStacks(r) : ct.clear(), e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection());
            },
            updateOutputs: ()=>{
                const { grid: n, selectedItems: r } = t(), o = r.filter(wt("cell"));
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
                ], i = [], s = o.map((w)=>({
                        row: w.row,
                        col: w.col
                    })), a = kg(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const w of o)if (n.get_cell(w.row, w.col)) {
                    const m = n.get_cell_color(w.row, w.col), f = l[m] ?? "#000000";
                    i.push({
                        row: w.row - a.minRow,
                        col: w.col - a.minCol,
                        color: f
                    });
                }
                i.sort((w, m)=>w.row - m.row || w.col - m.col);
                const u = a.maxRow - a.minRow + 1, d = a.maxCol - a.minCol + 1, c = [], h = [];
                for (const w of i)w.color === "#000000" && (c.push(w.row), h.push(w.col));
                const v = c.map(()=>"1.0").join(", "), x = `import torch

indices = torch.tensor([[${c.join(", ")}], [${h.join(", ")}]])
values = torch.tensor([${v}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${u}, ${d}))
sparse = sparse.coalesce()`;
                e({
                    jsonOutput: JSON.stringify(i, null, 2),
                    tensorOutput: x
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
                        const d = u.row, c = u.col, h = u.color;
                        if (typeof d != "number" || typeof c != "number") continue;
                        const v = o.row + d, x = o.col + c, w = l[h] ?? 0;
                        r.set_draw_color(w), r.set_cell(v, x, !0), s.push({
                            type: "cell",
                            row: v,
                            col: x
                        });
                    }
                    else for(let u = 0; u < i.length; u++){
                        const d = i[u];
                        if (Array.isArray(d)) for(let c = 0; c < d.length; c++){
                            const h = o.row + u, v = o.col + c, x = d[c];
                            if (x && typeof x == "object" && x.color) {
                                const w = l[x.color] ?? 0;
                                r.set_draw_color(w), r.set_cell(h, v, !0), s.push({
                                    type: "cell",
                                    row: h,
                                    col: v
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
                        if (Array.isArray(u)) for(let d = 0; d < u.length; d++){
                            const c = o.row + a, h = o.col + d;
                            Number(u[d]) > .5 && (r.set_cell(c, h, !0), s.push({
                                type: "cell",
                                row: c,
                                col: h
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
                for(let i = n.get_image_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteImage",
                    idx: i,
                    image: jf(n, i)
                });
                for(let i = n.get_text_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteText",
                    idx: i,
                    text: Rf(n, i)
                });
                for(let i = n.get_rect_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteRect",
                    idx: i,
                    rect: zf(n, i)
                });
                for(let i = n.get_line_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteLine",
                    idx: i,
                    line: If(n, i)
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
            }
        }), jg = 1.75;
    function fs(e) {
        return {
            r: e.minRow - jg,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function ps(e) {
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
    function It(e) {
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
    function $u(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, d = (a - e) * (a - e) + (u - t) * (u - t);
            d <= i && (l = s, i = d);
        }
        return l;
    }
    const Pg = (e, t)=>({
            setSelectedItems: (n)=>{
                e({
                    selectedItems: n
                }), t().renderSelection(), setTimeout(()=>t().updateOutputs(), 0);
            },
            selectAll: ()=>{
                const { grid: n } = t();
                if (!n) return;
                t().textEdit && t().commitTextEdit();
                const r = Mf(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = hg(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = gg(n, r);
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
                if (!r || !o) return;
                r.render_with_selection_box(o.row, o.col, n.row, n.col);
                const i = [];
                for (const s of l)s.type === "cell" ? i.push(s.row, s.col) : s.type === "line" ? r.highlight_line(s.index) : s.type === "rect" ? r.highlight_rect(s.index) : s.type === "text" ? r.highlight_text(s.index) : s.type === "image" && r.highlight_image(s.index);
                i.length > 0 && r.highlight_cells(new Int32Array(i));
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
                for(let m = i; m <= s; m++)for(let f = a; f <= u; f++)r.get_cell(m, f) && d.push({
                    type: "cell",
                    row: m,
                    col: f
                });
                const c = r.get_line_count();
                for(let m = 0; m < c; m++)r.line_intersects_box(m, i, a, s, u) && d.push({
                    type: "line",
                    index: m
                });
                const h = r.get_rect_count();
                for(let m = 0; m < h; m++)r.rect_intersects_box(m, i, a, s, u) && d.push({
                    type: "rect",
                    index: m
                });
                const v = r.get_text_count();
                for(let m = 0; m < v; m++)r.text_intersects_box(m, i, a, s, u) && d.push({
                    type: "text",
                    index: m
                });
                const x = r.get_image_count();
                for(let m = 0; m < x; m++)r.image_intersects_box(m, i, a, s, u) && d.push({
                    type: "image",
                    index: m
                });
                const w = [
                    ...l
                ];
                for (const m of d)Zn(m, w) || w.push(m);
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
                const a = n.row - o.row, u = n.col - o.col;
                if (a !== 0 || u !== 0) {
                    const d = [], c = [], h = [];
                    for (const k of l)if (k.type === "cell") {
                        if (!r.get_cell(k.row, k.col)) continue;
                        const E = r.get_cell_color(k.row, k.col), z = k.row + a, _ = k.col + u;
                        c.push({
                            kind: "setCellState",
                            row: k.row,
                            col: k.col,
                            from: {
                                filled: !0,
                                color: E
                            },
                            to: {
                                filled: !1,
                                color: E
                            }
                        }), h.push({
                            kind: "setCellState",
                            row: z,
                            col: _,
                            from: {
                                filled: r.get_cell(z, _),
                                color: r.get_cell_color(z, _)
                            },
                            to: {
                                filled: !0,
                                color: E
                            }
                        }), d.push({
                            type: "cell",
                            row: z,
                            col: _
                        });
                    }
                    const v = [], x = l.filter(wt("line"));
                    for (const k of x)v.push({
                        kind: "moveLine",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "line",
                        index: k.index
                    });
                    const w = [], m = l.filter(wt("rect"));
                    for (const k of m)w.push({
                        kind: "moveRect",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "rect",
                        index: k.index
                    });
                    const f = [], p = l.filter(wt("text"));
                    for (const k of p)f.push({
                        kind: "moveText",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "text",
                        index: k.index
                    });
                    const g = [], S = l.filter(wt("image"));
                    for (const k of S)g.push({
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
                        ...h,
                        ...v,
                        ...w,
                        ...f,
                        ...g
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
                const u = o.get_cell_size(), d = Math.floor(n / u), c = Math.floor(r / u);
                return o.get_cell(c, d) ? {
                    type: "cell",
                    row: c,
                    col: d
                } : null;
            },
            renderSelection: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n) return;
                n.render();
                const o = [];
                for (const l of r)l.type === "cell" ? o.push(l.row, l.col) : l.type === "line" ? n.highlight_line(l.index) : l.type === "rect" ? n.highlight_rect(l.index) : l.type === "text" ? n.highlight_text(l.index) : l.type === "image" && n.highlight_image(l.index);
                if (o.length > 0 && n.highlight_cells(new Int32Array(o)), r.length === 1) {
                    const l = r[0];
                    if (l.type === "line") {
                        const i = ps(n.get_line(l.index));
                        for (const s of i)n.draw_handle(s.r, s.c);
                    } else if (l.type === "rect") {
                        const i = It(n.get_rect(l.index));
                        for (const s of i)n.draw_handle(s.r, s.c);
                    } else if (l.type === "text") {
                        const i = n.get_text(l.index), s = It([
                            i[0],
                            i[1],
                            i[0] + i[4],
                            i[1] + i[3]
                        ]);
                        for (const a of s)n.draw_handle(a.r, a.c);
                    } else if (l.type === "image") {
                        const i = It(n.get_image(l.index));
                        for (const s of i)n.draw_handle(s.r, s.c);
                    }
                }
                if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                    const l = We(r, n);
                    if (l) {
                        const i = fs(l);
                        n.draw_rotate_handle(i.r, i.c, l.minRow, i.c);
                    }
                }
            },
            getSelectedCells: ()=>{
                const { selectedItems: n } = t();
                return n.filter(wt("cell")).map((r)=>({
                        row: r.row,
                        col: r.col
                    }));
            }
        }), Mg = (e, t)=>({
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
                    coalesceKey: `fill:${Er(o)}`
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
                    coalesceKey: `outline:${Er(o)}`
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
                    coalesceKey: `size:${Er(o)}`
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
                if (!r || (r.set_draw_line_width(Xo(n)), o.length === 0)) return;
                const l = Xo(n), i = [];
                for (const s of o)s.type === "line" && i.push({
                    kind: "resizeLine",
                    idx: s.index,
                    from: r.get_line(s.index)[5],
                    to: l
                });
                i.length !== 0 && (t().commitEdits(i, {
                    coalesceKey: `lineWidth:${Er(o)}`
                }), t().renderSelection());
            },
            pickTextAlign: (n, r)=>{
                const { grid: o, selectedItems: l } = t();
                if (!o || l.length === 0) return;
                const i = [];
                for (const s of l)if (s.type === "text") {
                    const a = o.get_text(s.index);
                    i.push({
                        kind: "alignText",
                        idx: s.index,
                        from: {
                            halign: a[5],
                            valign: a[6]
                        },
                        to: {
                            halign: n ?? a[5],
                            valign: r ?? a[6]
                        }
                    });
                }
                i.length !== 0 && (t().commitEdits(i, {
                    coalesceKey: `align:${Er(l)}`
                }), t().renderSelection());
            },
            setSubdivision: (n)=>{
                const r = Mr.includes(n) ? n : 1;
                e({
                    subdivision: r
                });
                const { grid: o } = t();
                o?.set_subdivision(r);
            },
            cycleSubdivision: ()=>{
                const n = t().subdivision, r = Mr[(Mr.indexOf(n) + 1) % Mr.length];
                t().setSubdivision(r);
            },
            beginTextEdit: (n)=>{
                t().textEdit && t().commitTextEdit();
                const { grid: r, colorIdx: o, textSize: l } = t();
                e({
                    textEdit: {
                        row: n.row,
                        col: n.col,
                        size: l,
                        text: ""
                    },
                    selectedItems: []
                }), r && r.render_text_preview(n.row, n.col, o, l, "");
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
                            boxW: 0,
                            boxH: 0,
                            halign: 0,
                            valign: 0,
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
            beginDrawStroke: ()=>{
                ct.beginBatch();
            },
            drawCellAt: (n, r, o)=>{
                const { grid: l, colorIdx: i, subdivision: s } = t();
                if (!l) return;
                const a = ln / s, u = [];
                for(let d = 0; d < a; d++)for(let c = 0; c < a; c++){
                    const h = n + d, v = r + c, x = o && i < 6 ? {
                        filled: !0,
                        color: i
                    } : {
                        filled: !1,
                        color: i < 6 ? i : l.get_cell_color(h, v)
                    }, w = {
                        filled: l.get_cell(h, v),
                        color: l.get_cell_color(h, v)
                    };
                    w.filled === x.filled && (!x.filled || w.color === x.color) || u.push({
                        kind: "setCellState",
                        row: h,
                        col: v,
                        from: w,
                        to: x
                    });
                }
                u.length > 0 && t().commitEdits(u);
            },
            endDrawStroke: ()=>{
                ct.endBatch(), e({
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
                            width: Xo(a)
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
            placeImage: (n, r)=>{
                const { grid: o } = t();
                if (!o) return;
                t().textEdit && t().commitTextEdit();
                const l = o.get_image_count();
                t().commitEdits([
                    {
                        kind: "addImage",
                        idx: l,
                        image: {
                            r1: r.r1,
                            c1: r.c1,
                            r2: r.r2,
                            c2: r.c2,
                            url: n
                        }
                    }
                ]), e({
                    tool: "select",
                    selectedItems: [
                        {
                            type: "image",
                            index: l
                        }
                    ]
                }), o.render(), t().renderSelection(), t().updateOutputs();
            }
        }), bg = (e, t)=>({
            startResize: (n)=>{
                const { grid: r } = t(), o = r ? n.shape === "line" ? bu(r, n.index) : n.shape === "rect" ? Lu(r, n.index) : n.shape === "image" ? Du(r, n.index) : Ou(r, n.index) : null;
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
                        to: bu(r, o.index)
                    }
                ])) : o.shape === "rect" ? (r.resize_rect(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Lu(r, o.index)
                    }
                ])) : o.shape === "image" ? (r.resize_image(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setImageGeom",
                        idx: o.index,
                        from: l,
                        to: Du(r, o.index)
                    }
                ])) : (r.resize_text(o.index, o.handle, n.row, n.col), l && "boxW" in l && t().commitEdits([
                    {
                        kind: "setTextFrame",
                        idx: o.index,
                        from: l,
                        to: Ou(r, o.index)
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
                const { cx: s, cy: a, startAngle: u } = i, d = Au(Math.atan2(r - a, n - s) - u);
                if (o.render(), d === 0) {
                    t().renderSelection();
                    return;
                }
                const c = We(l, o);
                if (!c) return;
                const h = Math.round((c.minRow + c.maxRow) / 2), v = Math.round((c.minCol + c.maxCol) / 2), x = [];
                for (const w of l)if (w.type === "cell") {
                    const m = Ft(w.row, w.col, d, h, v);
                    x.push(m.r, m.c, o.get_cell_color(w.row, w.col));
                } else if (w.type === "line") {
                    const m = o.get_line(w.index);
                    if (m.length >= 6) {
                        const f = Ft(m[0], m[1], d, h, v), p = Ft(m[2], m[3], d, h, v);
                        o.preview_line(f.r, f.c, p.r, p.c, m[4], m[5]);
                    }
                } else if (w.type === "rect") {
                    const m = o.get_rect(w.index);
                    if (m.length >= 6) {
                        const f = Ft(m[0], m[1], d, h, v), p = Ft(m[2], m[3], d, h, v);
                        o.preview_rect(f.r, f.c, p.r, p.c, m[4], m[5]);
                    }
                } else if (w.type === "text") {
                    const m = o.get_text(w.index);
                    if (m.length >= 7) {
                        const f = Ft(m[0], m[1], d, h, v);
                        o.preview_text(f.r, f.c, m[2], o.get_text_size(w.index), m[3], m[4], m[5], m[6], o.get_text_string(w.index));
                    }
                } else if (w.type === "image") {
                    const m = o.get_image(w.index);
                    if (m.length >= 4) {
                        const f = Ft(m[0], m[1], d, h, v);
                        o.preview_image(f.r, f.c, f.r + (m[2] - m[0]), f.c + (m[3] - m[1]), pa(o.get_image_url(w.index)));
                    }
                }
                x.length > 0 && o.preview_cells(new Int32Array(x));
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
                const { cx: s, cy: a, startAngle: u } = i, d = Au(Math.atan2(r - a, n - s) - u), c = We(l, o);
                if (d === 0 || !c) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const h = Math.round((c.minRow + c.maxRow) / 2), v = Math.round((c.minCol + c.maxCol) / 2), x = (g, S)=>Ft(g, S, d, h, v), w = [], m = [], f = [], p = [];
                for (const g of l)if (g.type === "cell") {
                    if (!o.get_cell(g.row, g.col)) continue;
                    const S = o.get_cell_color(g.row, g.col), k = x(g.row, g.col);
                    w.push({
                        kind: "setCellState",
                        row: g.row,
                        col: g.col,
                        from: {
                            filled: !0,
                            color: S
                        },
                        to: {
                            filled: !1,
                            color: S
                        }
                    }), m.push({
                        kind: "setCellState",
                        row: k.r,
                        col: k.c,
                        from: {
                            filled: o.get_cell(k.r, k.c),
                            color: o.get_cell_color(k.r, k.c)
                        },
                        to: {
                            filled: !0,
                            color: S
                        }
                    }), p.push({
                        type: "cell",
                        row: k.r,
                        col: k.c
                    });
                } else if (g.type === "line") {
                    const S = o.get_line(g.index);
                    if (S.length < 5) continue;
                    const k = x(S[0], S[1]), E = x(S[2], S[3]);
                    f.push({
                        kind: "setLineGeom",
                        idx: g.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: k.r,
                            c1: k.c,
                            r2: E.r,
                            c2: E.c
                        }
                    }), p.push({
                        type: "line",
                        index: g.index
                    });
                } else if (g.type === "rect") {
                    const S = o.get_rect(g.index);
                    if (S.length < 6) continue;
                    const k = x(S[0], S[1]), E = x(S[2], S[3]);
                    f.push({
                        kind: "setRectGeom",
                        idx: g.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: k.r,
                            c1: k.c,
                            r2: E.r,
                            c2: E.c
                        }
                    }), p.push({
                        type: "rect",
                        index: g.index
                    });
                } else if (g.type === "text") {
                    const S = o.get_text(g.index);
                    if (S.length < 3) continue;
                    const k = x(S[0], S[1]);
                    f.push({
                        kind: "moveText",
                        idx: g.index,
                        dRow: k.r - S[0],
                        dCol: k.c - S[1]
                    }), p.push({
                        type: "text",
                        index: g.index
                    });
                } else if (g.type === "image") {
                    const S = o.get_image(g.index);
                    if (S.length < 4) continue;
                    const k = x(S[0], S[1]);
                    f.push({
                        kind: "moveImage",
                        idx: g.index,
                        dRow: k.r - S[0],
                        dCol: k.c - S[1]
                    }), p.push({
                        type: "image",
                        index: g.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits([
                    ...w,
                    ...m,
                    ...f
                ]), e({
                    selectedItems: p
                }), t().renderSelection(), t().updateOutputs();
            },
            cancelRotate: ()=>{
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().renderSelection();
            }
        }), Lg = {
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
    }, Q = Ef()((...e)=>({
            ...Lg,
            ...zg(...e),
            ...Mg(...e),
            ...Pg(...e),
            ...bg(...e),
            ...Sg(...e),
            ...Rg(...e)
        })), Og = ()=>Q((e)=>e.grid), Dg = ()=>Q((e)=>e.tool), Ag = ()=>Q((e)=>e.colorIdx), Fg = ()=>Q((e)=>e.outlineIdx), $g = ()=>Q((e)=>e.selectedItems), Ug = ()=>Q((e)=>e.clipboard), Bg = ()=>Q((e)=>e.jsonOutput), Wg = ()=>Q((e)=>e.tensorOutput), Vg = ()=>Q((e)=>e.selectMode), Gg = Object.freeze(Object.defineProperty({
        __proto__: null,
        CELL_UNITS: ln,
        LINE_WIDTHS: Nf,
        SUBDIVISIONS: Mr,
        TEXT_SIZES: Tf,
        getSelectionBoundsAll: We,
        serializeSelection: Wr,
        tenthsToWidth: mg,
        useClipboard: Ug,
        useColorIdx: Ag,
        useGrid: Og,
        useGridStore: Q,
        useJsonOutput: Bg,
        useOutlineIdx: Fg,
        useSelectMode: Vg,
        useSelectedItems: $g,
        useTensorOutput: Wg,
        useTool: Dg,
        widthToTenths: Xo
    }, Symbol.toStringTag, {
        value: "Module"
    })), Uu = 7;
    function Hg() {
        const e = import.meta;
        if (!("env" in e)) return !1;
        const t = e.env;
        return typeof t == "object" && t !== null && "DEV" in t && t.DEV === !0;
    }
    function Kg(e) {
        const t = e.get_schema_version?.();
        (t !== Uu || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${Uu}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function Qg(e, t, n) {
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
                    const s = await fa(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    if (Kg(a), Q.getState().setGrid(a), Hg()) {
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
    function Of(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Of(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Df() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Of(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Bu = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Wu = Df, Af = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Wu(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const d = n?.[u], c = l?.[u];
                if (d === null) return null;
                const h = Bu(d) || Bu(c);
                return o[u][h];
            }), s = n && Object.entries(n).reduce((u, d)=>{
                let [c, h] = d;
                return h === void 0 || (u[c] = h), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d)=>{
                let { class: c, className: h, ...v } = d;
                return Object.entries(v).every((x)=>{
                    let [w, m] = x;
                    return Array.isArray(m) ? m.includes({
                        ...l,
                        ...s
                    }[w]) : {
                        ...l,
                        ...s
                    }[w] === m;
                }) ? [
                    ...u,
                    c,
                    h
                ] : u;
            }, []);
            return Wu(e, i, a, n?.class, n?.className);
        };
    function Vu(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Ff(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Vu(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Vu(e[o], null);
                }
            };
        };
    }
    function ms(...e) {
        return C.useCallback(Ff(...e), e);
    }
    function _l(e) {
        const t = Xg(e), n = C.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = C.Children.toArray(l), a = s.find(Jg);
            if (a) {
                const u = a.props.children, d = s.map((c)=>c === a ? C.Children.count(u) > 1 ? C.Children.only(null) : C.isValidElement(u) ? u.props.children : null : c);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: C.isValidElement(u) ? C.cloneElement(u, void 0, d) : null
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
    var Yg = _l("Slot");
    function Xg(e) {
        const t = C.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (C.isValidElement(o)) {
                const i = ey(o), s = qg(l, o.props);
                return o.type !== C.Fragment && (s.ref = r ? Ff(r, i) : i), C.cloneElement(o, s);
            }
            return C.Children.count(o) > 1 ? C.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var Zg = Symbol("radix.slottable");
    function Jg(e) {
        return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zg;
    }
    function qg(e, t) {
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
    function ey(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var ty = [
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
    ], so = ty.reduce((e, t)=>{
        const n = _l(`Primitive.${t}`), r = C.forwardRef((o, l)=>{
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
    function ma(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = C.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (c)=>{
                const { scope: h, children: v, ...x } = c, w = h?.[e]?.[a] || s, m = C.useMemo(()=>x, Object.values(x));
                return y.jsx(w.Provider, {
                    value: m,
                    children: v
                });
            };
            u.displayName = l + "Provider";
            function d(c, h) {
                const v = h?.[e]?.[a] || s, x = C.useContext(v);
                if (x) return x;
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
            ny(o, ...t)
        ];
    }
    function ny(...e) {
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
    function ry(e) {
        const t = e + "CollectionProvider", [n, r] = ma(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (w)=>{
            const { scope: m, children: f } = w, p = le.useRef(null), g = le.useRef(new Map).current;
            return y.jsx(o, {
                scope: m,
                itemMap: g,
                collectionRef: p,
                children: f
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = _l(s), u = le.forwardRef((w, m)=>{
            const { scope: f, children: p } = w, g = l(s, f), S = ms(m, g.collectionRef);
            return y.jsx(a, {
                ref: S,
                children: p
            });
        });
        u.displayName = s;
        const d = e + "CollectionItemSlot", c = "data-radix-collection-item", h = _l(d), v = le.forwardRef((w, m)=>{
            const { scope: f, children: p, ...g } = w, S = le.useRef(null), k = ms(m, S), E = l(d, f);
            return le.useEffect(()=>(E.itemMap.set(S, {
                    ref: S,
                    ...g
                }), ()=>void E.itemMap.delete(S))), y.jsx(h, {
                [c]: "",
                ref: k,
                children: p
            });
        });
        v.displayName = d;
        function x(w) {
            const m = l(e + "CollectionConsumer", w);
            return le.useCallback(()=>{
                const p = m.collectionRef.current;
                if (!p) return [];
                const g = Array.from(p.querySelectorAll(`[${c}]`));
                return Array.from(m.itemMap.values()).sort((E, z)=>g.indexOf(E.ref.current) - g.indexOf(z.ref.current));
            }, [
                m.collectionRef,
                m.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: u,
                ItemSlot: v
            },
            x,
            r
        ];
    }
    function Cn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var $f = globalThis?.document ? C.useLayoutEffect : ()=>{}, oy = Sc[" useInsertionEffect ".trim().toString()] || $f;
    function Bl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = ly({
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
                const c = iy(d) ? d(e) : d;
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
    function ly({ defaultProp: e, onChange: t }) {
        const [n, r] = C.useState(e), o = C.useRef(n), l = C.useRef(t);
        return oy(()=>{
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
    function iy(e) {
        return typeof e == "function";
    }
    var sy = Sc[" useId ".trim().toString()] || (()=>{}), ay = 0;
    function uy(e) {
        const [t, n] = C.useState(sy());
        return $f(()=>{
            n((r)=>r ?? String(ay++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var cy = C.createContext(void 0);
    function Uf(e) {
        const t = C.useContext(cy);
        return e || t || "ltr";
    }
    function dy(e) {
        const t = C.useRef(e);
        return C.useEffect(()=>{
            t.current = e;
        }), C.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var gi = "rovingFocusGroup.onEntryFocus", fy = {
        bubbles: !1,
        cancelable: !0
    }, ho = "RovingFocusGroup", [hs, Bf, py] = ry(ho), [my, Wf] = ma(ho, [
        py
    ]), [hy, gy] = my(ho), Vf = C.forwardRef((e, t)=>y.jsx(hs.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: y.jsx(hs.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: y.jsx(yy, {
                    ...e,
                    ref: t
                })
            })
        }));
    Vf.displayName = ho;
    var yy = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...c } = e, h = C.useRef(null), v = ms(t, h), x = Uf(l), [w, m] = Bl({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: ho
        }), [f, p] = C.useState(!1), g = dy(u), S = Bf(n), k = C.useRef(!1), [E, z] = C.useState(0);
        return C.useEffect(()=>{
            const _ = h.current;
            if (_) return _.addEventListener(gi, g), ()=>_.removeEventListener(gi, g);
        }, [
            g
        ]), y.jsx(hy, {
            scope: n,
            orientation: r,
            dir: x,
            loop: o,
            currentTabStopId: w,
            onItemFocus: C.useCallback((_)=>m(_), [
                m
            ]),
            onItemShiftTab: C.useCallback(()=>p(!0), []),
            onFocusableItemAdd: C.useCallback(()=>z((_)=>_ + 1), []),
            onFocusableItemRemove: C.useCallback(()=>z((_)=>_ - 1), []),
            children: y.jsx(so.div, {
                tabIndex: f || E === 0 ? -1 : 0,
                "data-orientation": r,
                ...c,
                ref: v,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: Cn(e.onMouseDown, ()=>{
                    k.current = !0;
                }),
                onFocus: Cn(e.onFocus, (_)=>{
                    const O = !k.current;
                    if (_.target === _.currentTarget && O && !f) {
                        const D = new CustomEvent(gi, fy);
                        if (_.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const ne = S().filter((X)=>X.focusable), ve = ne.find((X)=>X.active), Ne = ne.find((X)=>X.id === w), de = [
                                ve,
                                Ne,
                                ...ne
                            ].filter(Boolean).map((X)=>X.ref.current);
                            Kf(de, d);
                        }
                    }
                    k.current = !1;
                }),
                onBlur: Cn(e.onBlur, ()=>p(!1))
            })
        });
    }), Gf = "RovingFocusGroupItem", Hf = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = uy(), u = l || a, d = gy(Gf, n), c = d.currentTabStopId === u, h = Bf(n), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: w } = d;
        return C.useEffect(()=>{
            if (r) return v(), ()=>x();
        }, [
            r,
            v,
            x
        ]), y.jsx(hs.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: y.jsx(so.span, {
                tabIndex: c ? 0 : -1,
                "data-orientation": d.orientation,
                ...s,
                ref: t,
                onMouseDown: Cn(e.onMouseDown, (m)=>{
                    r ? d.onItemFocus(u) : m.preventDefault();
                }),
                onFocus: Cn(e.onFocus, ()=>d.onItemFocus(u)),
                onKeyDown: Cn(e.onKeyDown, (m)=>{
                    if (m.key === "Tab" && m.shiftKey) {
                        d.onItemShiftTab();
                        return;
                    }
                    if (m.target !== m.currentTarget) return;
                    const f = wy(m, d.orientation, d.dir);
                    if (f !== void 0) {
                        if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                        m.preventDefault();
                        let g = h().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (f === "last") g.reverse();
                        else if (f === "prev" || f === "next") {
                            f === "prev" && g.reverse();
                            const S = g.indexOf(m.currentTarget);
                            g = d.loop ? Sy(g, S + 1) : g.slice(S + 1);
                        }
                        setTimeout(()=>Kf(g));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: c,
                    hasTabStop: w != null
                }) : i
            })
        });
    });
    Hf.displayName = Gf;
    var xy = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function vy(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function wy(e, t, n) {
        const r = vy(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return xy[r];
    }
    function Kf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function Sy(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var ky = Vf, _y = Hf, Qf = "Toggle", Yf = C.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = Bl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Qf
        });
        return y.jsx(so.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: Cn(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Yf.displayName = Qf;
    var cn = "ToggleGroup", [Xf] = ma(cn, [
        Wf
    ]), Zf = Wf(), ha = le.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return y.jsx(Cy, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return y.jsx(Ey, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${cn}\``);
    });
    ha.displayName = cn;
    var [Jf, qf] = Xf(cn), Cy = le.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Bl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: cn
        });
        return y.jsx(Jf, {
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
            children: y.jsx(ep, {
                ...l,
                ref: t
            })
        });
    }), Ey = le.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Bl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: cn
        }), a = le.useCallback((d)=>s((c = [])=>[
                    ...c,
                    d
                ]), [
            s
        ]), u = le.useCallback((d)=>s((c = [])=>c.filter((h)=>h !== d)), [
            s
        ]);
        return y.jsx(Jf, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: y.jsx(ep, {
                ...l,
                ref: t
            })
        });
    });
    ha.displayName = cn;
    var [Ty, Ny] = Xf(cn), ep = le.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = Zf(n), d = Uf(i), c = {
            role: "group",
            dir: d,
            ...a
        };
        return y.jsx(Ty, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? y.jsx(ky, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: d,
                loop: s,
                children: y.jsx(so.div, {
                    ...c,
                    ref: t
                })
            }) : y.jsx(so.div, {
                ...c,
                ref: t
            })
        });
    }), Cl = "ToggleGroupItem", tp = le.forwardRef((e, t)=>{
        const n = qf(Cl, e.__scopeToggleGroup), r = Ny(Cl, e.__scopeToggleGroup), o = Zf(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = le.useRef(null);
        return r.rovingFocus ? y.jsx(_y, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: y.jsx(Gu, {
                ...s,
                ref: t
            })
        }) : y.jsx(Gu, {
            ...s,
            ref: t
        });
    });
    tp.displayName = Cl;
    var Gu = le.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = qf(Cl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return y.jsx(Yf, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Iy = ha, zy = tp;
    const Ry = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, jy = (e, t)=>({
            classGroupId: e,
            validator: t
        }), np = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), El = "-", Hu = [], Py = "arbitrary..", My = (e)=>{
        const t = Ly(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return by(i);
                const s = i.split(El), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return rp(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Ry(u, a) : a : u || Hu;
                }
                return n[i] || Hu;
            }
        };
    }, rp = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = rp(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(El) : e.slice(t).join(El), a = i.length;
        for(let u = 0; u < a; u++){
            const d = i[u];
            if (d.validator(s)) return d.classGroupId;
        }
    }, by = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Py + r : void 0;
        })(), Ly = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Oy(n, t);
    }, Oy = (e, t)=>{
        const n = np();
        for(const r in e){
            const o = e[r];
            ga(o, n, r, t);
        }
        return n;
    }, ga = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Dy(i, t, n, r);
        }
    }, Dy = (e, t, n, r)=>{
        if (typeof e == "string") {
            Ay(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Fy(e, t, n, r);
            return;
        }
        $y(e, t, n, r);
    }, Ay = (e, t, n)=>{
        const r = e === "" ? t : op(t, e);
        r.classGroupId = n;
    }, Fy = (e, t, n, r)=>{
        if (Uy(e)) {
            ga(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(jy(n, e));
    }, $y = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            ga(a, op(t, s), n, r);
        }
    }, op = (e, t)=>{
        let n = e;
        const r = t.split(El), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = np(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Uy = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, By = (e)=>{
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
    }, gs = "!", Ku = ":", Wy = [], Qu = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Vy = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const d = o.length;
            for(let w = 0; w < d; w++){
                const m = o[w];
                if (i === 0 && s === 0) {
                    if (m === Ku) {
                        l.push(o.slice(a, w)), a = w + 1;
                        continue;
                    }
                    if (m === "/") {
                        u = w;
                        continue;
                    }
                }
                m === "[" ? i++ : m === "]" ? i-- : m === "(" ? s++ : m === ")" && s--;
            }
            const c = l.length === 0 ? o : o.slice(a);
            let h = c, v = !1;
            c.endsWith(gs) ? (h = c.slice(0, -1), v = !0) : c.startsWith(gs) && (h = c.slice(1), v = !0);
            const x = u && u > a ? u - a : void 0;
            return Qu(l, v, h, x);
        };
        if (t) {
            const o = t + Ku, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Qu(Wy, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Gy = (e)=>{
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
    }, Hy = (e)=>({
            cache: By(e.cacheSize),
            parseClassName: Vy(e),
            sortModifiers: Gy(e),
            ...My(e)
        }), Ky = /\s+/, Qy = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Ky);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const d = s[u], { isExternal: c, modifiers: h, hasImportantModifier: v, baseClassName: x, maybePostfixModifierPosition: w } = n(d);
            if (c) {
                a = d + (a.length > 0 ? " " + a : a);
                continue;
            }
            let m = !!w, f = r(m ? x.substring(0, w) : x);
            if (!f) {
                if (!m) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (f = r(x), !f) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                m = !1;
            }
            const p = h.length === 0 ? "" : h.length === 1 ? h[0] : l(h).join(":"), g = v ? p + gs : p, S = g + f;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const k = o(f, m);
            for(let E = 0; E < k.length; ++E){
                const z = k[E];
                i.push(g + z);
            }
            a = d + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, Yy = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = lp(n)) && (o && (o += " "), o += r);
        return o;
    }, lp = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = lp(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Xy = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((d, c)=>c(d), e());
            return n = Hy(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const d = Qy(a, n);
            return o(a, d), d;
        };
        return l = i, (...a)=>l(Yy(...a));
    }, Zy = [], Se = (e)=>{
        const t = (n)=>n[e] || Zy;
        return t.isThemeGetter = !0, t;
    }, ip = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, sp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Jy = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, qy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, nx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e)=>Jy.test(e), $ = (e)=>!!e && !Number.isNaN(Number(e)), Ut = (e)=>!!e && Number.isInteger(Number(e)), yi = (e)=>e.endsWith("%") && $(e.slice(0, -1)), Ct = (e)=>qy.test(e), ap = ()=>!0, ox = (e)=>ex.test(e) && !tx.test(e), ya = ()=>!1, lx = (e)=>nx.test(e), ix = (e)=>rx.test(e), sx = (e)=>!j(e) && !M(e), ax = (e)=>dn(e, dp, ya), j = (e)=>ip.test(e), hn = (e)=>dn(e, fp, ox), Yu = (e)=>dn(e, gx, $), ux = (e)=>dn(e, mp, ap), cx = (e)=>dn(e, pp, ya), Xu = (e)=>dn(e, up, ya), dx = (e)=>dn(e, cp, ix), Lo = (e)=>dn(e, hp, lx), M = (e)=>sp.test(e), Tr = (e)=>Pn(e, fp), fx = (e)=>Pn(e, pp), Zu = (e)=>Pn(e, up), px = (e)=>Pn(e, dp), mx = (e)=>Pn(e, cp), Oo = (e)=>Pn(e, hp, !0), hx = (e)=>Pn(e, mp, !0), dn = (e, t, n)=>{
        const r = ip.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, Pn = (e, t, n = !1)=>{
        const r = sp.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, up = (e)=>e === "position" || e === "percentage", cp = (e)=>e === "image" || e === "url", dp = (e)=>e === "length" || e === "size" || e === "bg-size", fp = (e)=>e === "length", gx = (e)=>e === "number", pp = (e)=>e === "family-name", mp = (e)=>e === "number" || e === "weight", hp = (e)=>e === "shadow", yx = ()=>{
        const e = Se("color"), t = Se("font"), n = Se("text"), r = Se("font-weight"), o = Se("tracking"), l = Se("leading"), i = Se("breakpoint"), s = Se("container"), a = Se("spacing"), u = Se("radius"), d = Se("shadow"), c = Se("inset-shadow"), h = Se("text-shadow"), v = Se("drop-shadow"), x = Se("blur"), w = Se("perspective"), m = Se("aspect"), f = Se("ease"), p = Se("animate"), g = ()=>[
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
                j
            ], E = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], z = ()=>[
                "auto",
                "contain",
                "none"
            ], _ = ()=>[
                M,
                j,
                a
            ], O = ()=>[
                $t,
                "full",
                "auto",
                ..._()
            ], D = ()=>[
                Ut,
                "none",
                "subgrid",
                M,
                j
            ], ne = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Ut,
                        M,
                        j
                    ]
                },
                Ut,
                M,
                j
            ], ve = ()=>[
                Ut,
                "auto",
                M,
                j
            ], Ne = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                M,
                j
            ], L = ()=>[
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
            ], X = ()=>[
                "auto",
                ..._()
            ], P = ()=>[
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
            ], N = ()=>[
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
            ], T = ()=>[
                e,
                M,
                j
            ], K = ()=>[
                ...S(),
                Zu,
                Xu,
                {
                    position: [
                        M,
                        j
                    ]
                }
            ], Z = ()=>[
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
            ], me = ()=>[
                "auto",
                "cover",
                "contain",
                px,
                ax,
                {
                    size: [
                        M,
                        j
                    ]
                }
            ], Fe = ()=>[
                yi,
                Tr,
                hn
            ], fe = ()=>[
                "",
                "none",
                "full",
                u,
                M,
                j
            ], q = ()=>[
                "",
                $,
                Tr,
                hn
            ], qe = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], fn = ()=>[
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
            ], se = ()=>[
                $,
                yi,
                Zu,
                Xu
            ], On = ()=>[
                "",
                "none",
                x,
                M,
                j
            ], pn = ()=>[
                "none",
                $,
                M,
                j
            ], _t = ()=>[
                "none",
                $,
                M,
                j
            ], Dn = ()=>[
                $,
                M,
                j
            ], mn = ()=>[
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
                    Ct
                ],
                breakpoint: [
                    Ct
                ],
                color: [
                    ap
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
                    sx
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
                    $
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
                            $t,
                            j,
                            M,
                            m
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
                            j,
                            M,
                            s
                        ]
                    }
                ],
                "break-after": [
                    {
                        "break-after": g()
                    }
                ],
                "break-before": [
                    {
                        "break-before": g()
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
                        overflow: E()
                    }
                ],
                "overflow-x": [
                    {
                        "overflow-x": E()
                    }
                ],
                "overflow-y": [
                    {
                        "overflow-y": E()
                    }
                ],
                overscroll: [
                    {
                        overscroll: z()
                    }
                ],
                "overscroll-x": [
                    {
                        "overscroll-x": z()
                    }
                ],
                "overscroll-y": [
                    {
                        "overscroll-y": z()
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
                        inset: O()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": O()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": O()
                    }
                ],
                start: [
                    {
                        "inset-s": O(),
                        start: O()
                    }
                ],
                end: [
                    {
                        "inset-e": O(),
                        end: O()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": O()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": O()
                    }
                ],
                top: [
                    {
                        top: O()
                    }
                ],
                right: [
                    {
                        right: O()
                    }
                ],
                bottom: [
                    {
                        bottom: O()
                    }
                ],
                left: [
                    {
                        left: O()
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
                            Ut,
                            "auto",
                            M,
                            j
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
                            $,
                            $t,
                            "auto",
                            "initial",
                            "none",
                            j
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            $,
                            M,
                            j
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            $,
                            M,
                            j
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            Ut,
                            "first",
                            "last",
                            "none",
                            M,
                            j
                        ]
                    }
                ],
                "grid-cols": [
                    {
                        "grid-cols": D()
                    }
                ],
                "col-start-end": [
                    {
                        col: ne()
                    }
                ],
                "col-start": [
                    {
                        "col-start": ve()
                    }
                ],
                "col-end": [
                    {
                        "col-end": ve()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": D()
                    }
                ],
                "row-start-end": [
                    {
                        row: ne()
                    }
                ],
                "row-start": [
                    {
                        "row-start": ve()
                    }
                ],
                "row-end": [
                    {
                        "row-end": ve()
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
                        "auto-cols": Ne()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": Ne()
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
                            ...L(),
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
                            ...L()
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
                        "place-content": L()
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
                        m: X()
                    }
                ],
                mx: [
                    {
                        mx: X()
                    }
                ],
                my: [
                    {
                        my: X()
                    }
                ],
                ms: [
                    {
                        ms: X()
                    }
                ],
                me: [
                    {
                        me: X()
                    }
                ],
                mbs: [
                    {
                        mbs: X()
                    }
                ],
                mbe: [
                    {
                        mbe: X()
                    }
                ],
                mt: [
                    {
                        mt: X()
                    }
                ],
                mr: [
                    {
                        mr: X()
                    }
                ],
                mb: [
                    {
                        mb: X()
                    }
                ],
                ml: [
                    {
                        ml: X()
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
                        size: P()
                    }
                ],
                "inline-size": [
                    {
                        inline: [
                            "auto",
                            ...N()
                        ]
                    }
                ],
                "min-inline-size": [
                    {
                        "min-inline": [
                            "auto",
                            ...N()
                        ]
                    }
                ],
                "max-inline-size": [
                    {
                        "max-inline": [
                            "none",
                            ...N()
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
                            ...P()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...P()
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
                            ...P()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...P()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...P()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...P()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            Tr,
                            hn
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
                            hx,
                            ux
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
                            yi,
                            j
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            fx,
                            cx,
                            t
                        ]
                    }
                ],
                "font-features": [
                    {
                        "font-features": [
                            j
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
                            j
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            $,
                            "none",
                            M,
                            Yu
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
                            j
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
                            j
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
                        placeholder: T()
                    }
                ],
                "text-color": [
                    {
                        text: T()
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
                            ...qe(),
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
                            hn
                        ]
                    }
                ],
                "text-decoration-color": [
                    {
                        decoration: T()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            $,
                            "auto",
                            M,
                            j
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
                            j
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
                            j
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
                        bg: K()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: Z()
                    }
                ],
                "bg-size": [
                    {
                        bg: me()
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
                                    Ut,
                                    M,
                                    j
                                ],
                                radial: [
                                    "",
                                    M,
                                    j
                                ],
                                conic: [
                                    Ut,
                                    M,
                                    j
                                ]
                            },
                            mx,
                            dx
                        ]
                    }
                ],
                "bg-color": [
                    {
                        bg: T()
                    }
                ],
                "gradient-from-pos": [
                    {
                        from: Fe()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Fe()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Fe()
                    }
                ],
                "gradient-from": [
                    {
                        from: T()
                    }
                ],
                "gradient-via": [
                    {
                        via: T()
                    }
                ],
                "gradient-to": [
                    {
                        to: T()
                    }
                ],
                rounded: [
                    {
                        rounded: fe()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": fe()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": fe()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": fe()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": fe()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": fe()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": fe()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": fe()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": fe()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": fe()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": fe()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": fe()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": fe()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": fe()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": fe()
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
                            ...qe(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...qe(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "border-color": [
                    {
                        border: T()
                    }
                ],
                "border-color-x": [
                    {
                        "border-x": T()
                    }
                ],
                "border-color-y": [
                    {
                        "border-y": T()
                    }
                ],
                "border-color-s": [
                    {
                        "border-s": T()
                    }
                ],
                "border-color-e": [
                    {
                        "border-e": T()
                    }
                ],
                "border-color-bs": [
                    {
                        "border-bs": T()
                    }
                ],
                "border-color-be": [
                    {
                        "border-be": T()
                    }
                ],
                "border-color-t": [
                    {
                        "border-t": T()
                    }
                ],
                "border-color-r": [
                    {
                        "border-r": T()
                    }
                ],
                "border-color-b": [
                    {
                        "border-b": T()
                    }
                ],
                "border-color-l": [
                    {
                        "border-l": T()
                    }
                ],
                "divide-color": [
                    {
                        divide: T()
                    }
                ],
                "outline-style": [
                    {
                        outline: [
                            ...qe(),
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
                            j
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            $,
                            Tr,
                            hn
                        ]
                    }
                ],
                "outline-color": [
                    {
                        outline: T()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            d,
                            Oo,
                            Lo
                        ]
                    }
                ],
                "shadow-color": [
                    {
                        shadow: T()
                    }
                ],
                "inset-shadow": [
                    {
                        "inset-shadow": [
                            "none",
                            c,
                            Oo,
                            Lo
                        ]
                    }
                ],
                "inset-shadow-color": [
                    {
                        "inset-shadow": T()
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
                        ring: T()
                    }
                ],
                "ring-offset-w": [
                    {
                        "ring-offset": [
                            $,
                            hn
                        ]
                    }
                ],
                "ring-offset-color": [
                    {
                        "ring-offset": T()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": q()
                    }
                ],
                "inset-ring-color": [
                    {
                        "inset-ring": T()
                    }
                ],
                "text-shadow": [
                    {
                        "text-shadow": [
                            "none",
                            h,
                            Oo,
                            Lo
                        ]
                    }
                ],
                "text-shadow-color": [
                    {
                        "text-shadow": T()
                    }
                ],
                opacity: [
                    {
                        opacity: [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...fn(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": fn()
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
                        "mask-linear-from": se()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": se()
                    }
                ],
                "mask-image-linear-from-color": [
                    {
                        "mask-linear-from": T()
                    }
                ],
                "mask-image-linear-to-color": [
                    {
                        "mask-linear-to": T()
                    }
                ],
                "mask-image-t-from-pos": [
                    {
                        "mask-t-from": se()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": se()
                    }
                ],
                "mask-image-t-from-color": [
                    {
                        "mask-t-from": T()
                    }
                ],
                "mask-image-t-to-color": [
                    {
                        "mask-t-to": T()
                    }
                ],
                "mask-image-r-from-pos": [
                    {
                        "mask-r-from": se()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": se()
                    }
                ],
                "mask-image-r-from-color": [
                    {
                        "mask-r-from": T()
                    }
                ],
                "mask-image-r-to-color": [
                    {
                        "mask-r-to": T()
                    }
                ],
                "mask-image-b-from-pos": [
                    {
                        "mask-b-from": se()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": se()
                    }
                ],
                "mask-image-b-from-color": [
                    {
                        "mask-b-from": T()
                    }
                ],
                "mask-image-b-to-color": [
                    {
                        "mask-b-to": T()
                    }
                ],
                "mask-image-l-from-pos": [
                    {
                        "mask-l-from": se()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": se()
                    }
                ],
                "mask-image-l-from-color": [
                    {
                        "mask-l-from": T()
                    }
                ],
                "mask-image-l-to-color": [
                    {
                        "mask-l-to": T()
                    }
                ],
                "mask-image-x-from-pos": [
                    {
                        "mask-x-from": se()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": se()
                    }
                ],
                "mask-image-x-from-color": [
                    {
                        "mask-x-from": T()
                    }
                ],
                "mask-image-x-to-color": [
                    {
                        "mask-x-to": T()
                    }
                ],
                "mask-image-y-from-pos": [
                    {
                        "mask-y-from": se()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": se()
                    }
                ],
                "mask-image-y-from-color": [
                    {
                        "mask-y-from": T()
                    }
                ],
                "mask-image-y-to-color": [
                    {
                        "mask-y-to": T()
                    }
                ],
                "mask-image-radial": [
                    {
                        "mask-radial": [
                            M,
                            j
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": se()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": se()
                    }
                ],
                "mask-image-radial-from-color": [
                    {
                        "mask-radial-from": T()
                    }
                ],
                "mask-image-radial-to-color": [
                    {
                        "mask-radial-to": T()
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
                        "mask-conic-from": se()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": se()
                    }
                ],
                "mask-image-conic-from-color": [
                    {
                        "mask-conic-from": T()
                    }
                ],
                "mask-image-conic-to-color": [
                    {
                        "mask-conic-to": T()
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
                        mask: K()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: Z()
                    }
                ],
                "mask-size": [
                    {
                        mask: me()
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
                            j
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            M,
                            j
                        ]
                    }
                ],
                blur: [
                    {
                        blur: On()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            v,
                            Oo,
                            Lo
                        ]
                    }
                ],
                "drop-shadow-color": [
                    {
                        "drop-shadow": T()
                    }
                ],
                grayscale: [
                    {
                        grayscale: [
                            "",
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            $,
                            M,
                            j
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": On()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            $,
                            M,
                            j
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
                            j
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
                            j
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            f,
                            M,
                            j
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            $,
                            M,
                            j
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            p,
                            M,
                            j
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
                            j
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
                        rotate: pn()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": pn()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": pn()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": pn()
                    }
                ],
                scale: [
                    {
                        scale: _t()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": _t()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": _t()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": _t()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: Dn()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": Dn()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": Dn()
                    }
                ],
                transform: [
                    {
                        transform: [
                            M,
                            j,
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
                        translate: mn()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": mn()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": mn()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": mn()
                    }
                ],
                "translate-none": [
                    "translate-none"
                ],
                accent: [
                    {
                        accent: T()
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
                        caret: T()
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
                            j
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
                            j
                        ]
                    }
                ],
                fill: [
                    {
                        fill: [
                            "none",
                            ...T()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            $,
                            Tr,
                            hn,
                            Yu
                        ]
                    }
                ],
                stroke: [
                    {
                        stroke: [
                            "none",
                            ...T()
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
    }, xx = Xy(yx);
    function Mn(...e) {
        return xx(Df(e));
    }
    const vx = Af("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function W({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? Yg : "button";
        return y.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Mn(vx({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const wx = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Nr(e) {
        return wx[e] ?? "#000000";
    }
    function Sx(e) {
        return typeof e == "object" && e !== null;
    }
    function kx(e) {
        let t, n, r, o, l;
        if (Array.isArray(e)) t = e[0], n = e[1], r = e[2], o = e[3], l = e.length >= 9 ? e[8] : e[4];
        else if (Sx(e)) t = e.r, n = e.c, r = e.color, o = e.size, l = e.text;
        else return null;
        return typeof t != "number" || typeof n != "number" ? null : {
            r: t,
            c: n,
            color: typeof r == "number" ? r : 0,
            size: typeof o == "number" ? o : 1,
            text: typeof l == "string" ? l : String(l ?? "")
        };
    }
    function _x(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, d = s * a + o * 2;
        e.width = u, e.height = d;
        const c = e.getContext("2d");
        if (c) {
            l && (c.fillStyle = l, c.fillRect(0, 0, u, d)), c.translate(o, o);
            for (const [h, v, x] of t.cells ?? []){
                const w = Nr(x);
                w && (c.fillStyle = w, c.fillRect(v * a, h * a, a, a));
            }
            for (const h of t.images ?? []){
                if (!Array.isArray(h) || h.length < 4) continue;
                const [v, x, w, m] = h, f = Math.min(x, m) * a, p = Math.min(v, w) * a, g = Math.abs(m - x) * a, S = Math.abs(w - v) * a;
                c.fillStyle = "#eef2f7", c.fillRect(f, p, g, S), c.strokeStyle = "#c3ccd8", c.lineWidth = 1, c.strokeRect(f + .5, p + .5, g - 1, S - 1);
            }
            for (const [h, v, x, w, m, f] of t.rects ?? []){
                const p = Math.min(v, w) * a, g = Math.min(h, x) * a, S = Math.abs(w - v) * a, k = Math.abs(x - h) * a, E = Nr(m);
                E && (c.fillStyle = E, c.fillRect(p, g, S, k));
                const z = Nr(f);
                z && (c.strokeStyle = z, c.lineWidth = Math.max(1, a / 8), c.strokeRect(p, g, S, k));
            }
            for (const [h, v, x, w, m] of t.lines ?? []){
                const f = Nr(m);
                f && (c.strokeStyle = f, c.lineWidth = Math.max(1, a / 6), c.beginPath(), c.moveTo(v * a, h * a), c.lineTo(w * a, x * a), c.stroke());
            }
            c.textBaseline = "alphabetic";
            for (const h of t.texts ?? []){
                const v = kx(h);
                v && (c.fillStyle = Nr(v.color) ?? "#000000", c.font = `${Math.max(6, v.size * a * ln)}px 'BigBlue Terminal', monospace`, c.fillText(v.text, v.c * a, (v.r + v.size * ln) * a));
            }
            c.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function Jo({ design: e, size: t = 96, className: n }) {
        const r = C.useRef(null);
        return C.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            _x(r.current, e, o);
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
    function gr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = C.useState(t), s = C.useRef(!1), a = C.useRef({
            x: 0,
            y: 0
        }), u = C.useCallback((d)=>{
            s.current = !0, a.current = {
                x: d.clientX - l.x,
                y: d.clientY - l.y
            };
            const c = (v)=>{
                if (!s.current) return;
                const x = Math.max(0, v.clientX - a.current.x), w = Math.max(0, v.clientY - a.current.y);
                i({
                    x,
                    y: w
                });
            }, h = ()=>{
                s.current = !1, window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", h);
            };
            window.addEventListener("mousemove", c), window.addEventListener("mouseup", h);
        }, [
            l
        ]);
        return y.jsxs("div", {
            className: Mn("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
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
                            onMouseDown: (d)=>d.stopPropagation(),
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
    function Pt(e) {
        return typeof e == "object" && e !== null;
    }
    function Wl(e) {
        return Pt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && typeof e.name == "string" && Pt(e.design);
    }
    function Cx(e) {
        return Array.isArray(e) && e.every(Wl);
    }
    function gp(e) {
        return Pt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && Pt(e.input) && Pt(e.output);
    }
    function Ex(e) {
        return Array.isArray(e) && e.every(gp);
    }
    function Tx(e) {
        return Pt(e) && typeof e.uploadUrl == "string" && typeof e.publicUrl == "string" && typeof e.key == "string";
    }
    function Nx(e) {
        const t = import.meta;
        if (!("env" in t)) return;
        const n = t.env;
        if (Pt(n) && typeof n[e] == "string") return n[e];
    }
    const yp = Nx("VITE_API_URL") ?? "https://api.seanneilan.com", xa = "grid-draw-token", ys = "grid-draw-auth-expired";
    function xp() {
        return localStorage.getItem(xa);
    }
    function vp() {
        localStorage.removeItem(xa);
    }
    async function Ix(e, t) {
        const n = await fetch(`${yp}/api/login`, {
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
        if (!Pt(r) || typeof r.token != "string") throw new Error("login failed (malformed response)");
        localStorage.setItem(xa, r.token);
    }
    async function wp(e, t, n) {
        const r = {}, o = xp();
        o && (r.Authorization = `Bearer ${o}`), n !== void 0 && (r["Content-Type"] = "application/json");
        const l = await fetch(`${yp}${t}`, {
            method: e,
            headers: r,
            body: n === void 0 ? void 0 : JSON.stringify(n)
        });
        if (l.status === 401) throw vp(), window.dispatchEvent(new Event(ys)), new Error("session expired — please log in again");
        if (!l.ok) {
            const i = await l.json().catch(()=>null), s = Pt(i) && typeof i.error == "string" ? i.error : void 0;
            throw new Error(s ?? `${e} ${t} failed (${l.status})`);
        }
        return l;
    }
    async function bn(e, t, n, r) {
        const l = await (await wp(e, t, r)).json();
        if (!n(l)) throw new Error(`${e} ${t}: unexpected response shape`);
        return l;
    }
    async function va(e, t, n) {
        await wp(e, t, n);
    }
    function zx() {
        return bn("GET", "/api/designs", Cx);
    }
    function Rx(e) {
        return bn("GET", `/api/designs/${e}`, Wl);
    }
    function jx(e) {
        return bn("GET", `/api/designs?name=${encodeURIComponent(e)}`, Wl);
    }
    async function Px(e, t, n) {
        return (await bn("PUT", "/api/designs", Wl, {
            name: e,
            design: t,
            history: n
        })).id;
    }
    function Mx(e) {
        return va("DELETE", `/api/designs/${e}`);
    }
    function Ju() {
        return bn("GET", "/api/examples", Ex);
    }
    async function bx(e, t, n) {
        return (await bn("POST", "/api/examples", gp, {
            input: e,
            output: t,
            delta: n
        })).id;
    }
    function Lx(e, t, n, r) {
        return va("PUT", `/api/examples/${e}`, {
            input: t,
            output: n,
            delta: r
        });
    }
    function Ox(e) {
        return va("DELETE", `/api/examples/${e}`);
    }
    async function Dx(e) {
        const t = e.type || "application/octet-stream", { uploadUrl: n, publicUrl: r } = await bn("POST", "/api/images/presign", Tx, {
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
    const ao = 31;
    function Ax(e) {
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
    function Fx(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = Ax(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function qu(e, t) {
        return e >= 0 && e <= ao && t >= 0 && t <= ao;
    }
    function ec(e, t) {
        if (t instanceof e.SymbolicTensor) return t;
        throw new Error("expected a SymbolicTensor from layer.apply");
    }
    const ft = ao + 1, Sp = "indexeddb://grid-draw-coord-model";
    let tc, fr = null;
    async function wa() {
        return tc ??= fa(()=>import("./index2.js"), []), tc;
    }
    function $x(e) {
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
        const r = ec(e, e.layers.dense({
            units: ft,
            activation: "softmax",
            name: "r"
        }).apply(n)), o = ec(e, e.layers.dense({
            units: ft,
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
    function kp(e, t) {
        const n = new Float32Array(t.length * 2 * ft);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * ft + r] = 1, n[l * 2 * ft + ft + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * ft
        ]);
    }
    function nc(e, t) {
        const n = new Float32Array(t.length * ft);
        return t.forEach((r, o)=>{
            n[o * ft + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            ft
        ]);
    }
    async function Ux() {
        const e = await wa();
        try {
            return fr = await e.loadLayersModel(Sp), !0;
        } catch  {
            return fr = null, !1;
        }
    }
    async function Bx(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await wa(), { pairs: s, skippedExamples: a } = Fx(e), u = [];
        let d = 0;
        for (const m of s)qu(m[0], m[1]) && qu(m[2], m[3]) ? u.push(m) : d++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const c = kp(i, u.map((m)=>[
                m[0],
                m[1]
            ])), h = nc(i, u.map((m)=>m[2])), v = nc(i, u.map((m)=>m[3])), x = $x(i);
        x.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let w = NaN;
        return await x.fit(c, [
            h,
            v
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (m, f)=>{
                    const p = f?.loss;
                    typeof p == "number" && (w = p), l?.(m + 1, n, w), await i.nextFrame();
                }
            }
        }), c.dispose(), h.dispose(), v.dispose(), fr?.dispose(), fr = x, await x.save(Sp), {
            pairs: u.length,
            droppedPoints: d,
            skippedExamples: a,
            finalLoss: w
        };
    }
    async function Wx(e) {
        if (!fr) throw new Error("No model yet — train one first.");
        const t = fr, n = await wa(), r = e.cells ?? [];
        if (r.length === 0) return {
            w: 1,
            h: 1,
            cells: [],
            lines: [],
            rects: [],
            texts: [],
            sub: ln
        };
        const o = r.map(([u, d])=>[
                Math.max(0, Math.min(ao, u)),
                Math.max(0, Math.min(ao, d))
            ]), l = n.tidy(()=>{
            const u = kp(n, o), d = t.predict(u), c = Array.isArray(d) ? d : [
                d
            ], h = c[0], v = c[1], x = h.argMax(1).dataSync(), w = v.argMax(1).dataSync();
            return r.map(([, , m], f)=>[
                    x[f],
                    w[f],
                    m
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
            sub: ln
        };
    }
    const ge = Ef((e, t)=>({
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
                        designs: await zx(),
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
                        examples: await Ju(),
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
                const l = await Px(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>jx(n),
            getDrawingById: (n)=>Rx(n),
            saveExamplePair: async (n, r, o)=>{
                await bx(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await Lx(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await Mx(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await Ox(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Ux();
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
                const n = await Ju();
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
                    const r = await Bx(n, {
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
            runPredict: (n)=>Wx(n)
        })), _p = "/grid-draw/";
    function Vx(e) {
        window.location.href = `${_p}design/${encodeURIComponent(e)}/`;
    }
    function Gx() {
        window.location.href = _p;
    }
    function Cp({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = ge((m)=>m.designs), o = ge((m)=>m.examples), l = ge((m)=>m.loadingDesigns || m.loadingExamples), i = ge((m)=>m.error), s = ge((m)=>m.loadDesigns), a = ge((m)=>m.loadExamples), u = ge((m)=>m.deleteDrawing), d = ge((m)=>m.deleteExamplePair), c = C.useCallback(()=>{
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
        const h = C.useCallback((m, f)=>{
            window.confirm(`Delete drawing “${f}”? This can't be undone.`) && u(m);
        }, [
            u
        ]), v = C.useCallback((m)=>{
            window.confirm("Delete this training example? This can't be undone.") && d(m);
        }, [
            d
        ]), x = C.useCallback((m)=>{
            n ? n(m) : Vx(m);
        }, [
            n
        ]), w = y.jsxs(y.Fragment, {
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
                            children: r.map((m)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        y.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: y.jsx(Jo, {
                                                design: m.design,
                                                size: 120
                                            })
                                        }),
                                        y.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: m.name,
                                            children: m.name
                                        }),
                                        y.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                y.jsx(W, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>x(m.name),
                                                    children: "Open"
                                                }),
                                                y.jsx(W, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-red-600",
                                                    onClick: ()=>h(m.id, m.name),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, m.id))
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
                            children: o.map((m)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        y.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                y.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        y.jsx(Jo, {
                                                            design: m.input,
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
                                                        y.jsx(Jo, {
                                                            design: m.output,
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
                                        y.jsx(W, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full text-xs text-red-600",
                                            onClick: ()=>v(m.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, m.id))
                        })
                    ]
                })
            ]
        });
        return e ? y.jsxs(gr, {
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
                        y.jsx(W, {
                            variant: "outline",
                            size: "sm",
                            onClick: c,
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
                    children: w
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
                        y.jsx(W, {
                            variant: "outline",
                            size: "sm",
                            onClick: Gx,
                            children: "← Editor"
                        }),
                        y.jsx(W, {
                            variant: "outline",
                            size: "sm",
                            onClick: c,
                            children: "Refresh"
                        }),
                        y.jsx(W, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                vp(), window.location.reload();
                            },
                            children: "Log out"
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
                w
            ]
        });
    }
    const Hx = "/grid-draw/";
    function rc({ design: e, label: t, onClick: n }) {
        const r = y.jsx(Jo, {
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
    function Kx({ input: e, output: t, onInput: n, onOutput: r }) {
        return y.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                y.jsx(rc, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                y.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                y.jsx(rc, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function Ep({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = ge((a)=>a.examples), o = ge((a)=>a.error), l = ge((a)=>a.loadExamples);
        C.useEffect(()=>{
            l();
        }, [
            l
        ]);
        const s = y.jsxs(y.Fragment, {
            children: [
                y.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        y.jsx(W, {
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
                                        y.jsx(Kx, {
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
        return e ? y.jsx(gr, {
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
                        y.jsx(W, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = Hx;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const xt = 2, Et = 8, Ln = 48, Ir = "/grid-draw/", Qx = [
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
    function oc(e) {
        return [
            e[0],
            e[1],
            e[0] + e[4],
            e[1] + e[3]
        ];
    }
    function Yx(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function lc() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - Ln)
        };
    }
    const Xx = .25, Zx = 12;
    function Jx(e, t) {
        const [n, r] = C.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), o = C.useRef(n);
        o.current = n;
        const l = C.useRef(!1), [i, s] = C.useState(!1), a = C.useRef(null), u = C.useCallback((c)=>{
            r(c), e?.set_camera(c.x, c.y, c.zoom);
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
            const h = (v)=>{
                v.preventDefault();
                const x = o.current, w = v.deltaY < 0 ? 1.1 : 1 / 1.1, m = Math.min(Zx, Math.max(Xx, x.zoom * w));
                if (m === x.zoom) return;
                const f = v.clientX, p = v.clientY - Ln, g = x.x + f * (1 / x.zoom - 1 / m), S = x.y + p * (1 / x.zoom - 1 / m);
                u({
                    x: g,
                    y: S,
                    zoom: m
                });
            };
            return c.addEventListener("wheel", h, {
                passive: !1
            }), ()=>c.removeEventListener("wheel", h);
        }, [
            u,
            t
        ]), C.useEffect(()=>{
            const c = (v)=>{
                v.code !== "Space" || Q.getState().textEdit || (v.preventDefault(), l.current = !0, s(!0));
            }, h = (v)=>{
                v.code === "Space" && (l.current = !1, s(!1));
            };
            return window.addEventListener("keydown", c), window.addEventListener("keyup", h), ()=>{
                window.removeEventListener("keydown", c), window.removeEventListener("keyup", h);
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
    function Jn(e, t) {
        const n = e.currentTarget, r = n.getBoundingClientRect(), o = (e.clientX - r.left) * (n.width / r.width), l = (e.clientY - r.top) * (n.height / r.height);
        return {
            x: o / t.zoom + t.x,
            y: l / t.zoom + t.y
        };
    }
    function Tp(e) {
        return Et / e;
    }
    function gn(e, t, n) {
        const { x: r, y: o } = Jn(e, t), l = Tp(n), i = (s)=>Math.floor(Math.floor(s / xt) / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function Bt(e, t, n) {
        const { x: r, y: o } = Jn(e, t), l = Tp(n), i = (s)=>Math.round(s / xt / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function qx({ grid: e, camRef: t, applyCamera: n, isSpaceDown: r, panRef: o }) {
        const { tool: l, colorIdx: i, outlineIdx: s, isDrawing: a, drawMode: u, startDrawing: d, stopDrawing: c, lineStart: h, startLine: v, finishLine: x, rectStart: w, startRect: m, finishRect: f, subdivision: p, beginTextEdit: g, selectedItems: S, setSelectedItems: k, selectMode: E, isSelecting: z, selectBoxStart: _, selectDragStart: O, startBoxSelection: D, updateBoxSelection: ne, finishBoxSelection: ve, cancelBoxSelection: Ne, startDragSelection: L, finishDragSelection: de, cancelDragSelection: X, startResize: P, updateResize: N, finishResize: b, cancelResize: T, startRotate: K, updateRotate: Z, finishRotate: me, cancelRotate: Fe, setMousePos: fe, addItemToSelection: q, removeItemFromSelection: qe, hitTestShapes: fn, updateOutputs: se, renderSelection: On, beginDrawStroke: pn, drawCellAt: _t, endDrawStroke: Dn, commitLine: mn, commitRect: Sa } = Q(), jp = C.useCallback((B)=>{
            if (e) {
                if (B.button === 1 || B.button === 0 && r.current) {
                    B.preventDefault(), o.current = {
                        x: B.clientX,
                        y: B.clientY,
                        camX: t.current.x,
                        camY: t.current.y
                    }, B.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (e.set_draw_color(i), e.set_outline_color(s), l === "draw") {
                    const { col: G, row: A } = gn(B, t.current, p), H = i === 6 ? !1 : !e.get_cell(A, G);
                    d(H), pn(), _t(A, G, H), se();
                } else if (l === "line") {
                    const { col: G, row: A } = Bt(B, t.current, p);
                    v({
                        row: A,
                        col: G
                    }), e.render_with_line(A, G, A, G);
                } else if (l === "rect") {
                    const { col: G, row: A } = Bt(B, t.current, p);
                    m({
                        row: A,
                        col: G
                    }), e.render_with_rect(A, G, A, G);
                } else if (l === "text") {
                    const { col: G, row: A } = gn(B, t.current, p);
                    g({
                        row: A,
                        col: G
                    });
                } else if (l === "select") {
                    const { col: G, row: A } = gn(B, t.current, p), { x: H, y: we } = Jn(B, t.current), he = B.shiftKey;
                    if (S.length > 0 && !he) {
                        const Ce = We(S, e);
                        if (Ce) {
                            const go = fs(Ce), yo = 10 / t.current.zoom;
                            if (Math.hypot(H - go.c * xt, we - go.r * xt) <= yo) {
                                K(H, we);
                                return;
                            }
                        }
                    }
                    if (S.length === 1 && !he) {
                        const Ce = S[0];
                        if (Ce.type === "line" || Ce.type === "rect" || Ce.type === "text" || Ce.type === "image") {
                            const go = Ce.type === "line" ? ps(e.get_line(Ce.index)) : Ce.type === "rect" ? It(e.get_rect(Ce.index)) : Ce.type === "image" ? It(e.get_image(Ce.index)) : It(oc(e.get_text(Ce.index))), yo = $u(H, we, go, xt, 9);
                            if (yo) {
                                P({
                                    shape: Ce.type,
                                    index: Ce.index,
                                    handle: yo.handle
                                });
                                return;
                            }
                        }
                    }
                    const J = We(S, e), ee = J && A >= J.minRow && A <= J.maxRow && G >= J.minCol && G <= J.maxCol, F = fn(H, we);
                    F && !he && Zn(F, S) && S.length > 1 ? (L({
                        row: A,
                        col: G
                    }), On()) : ee && S.length > 0 && !he && !F ? (L({
                        row: A,
                        col: G
                    }, !0), On()) : F ? he && !Zn(F, S) ? q(F) : he && Zn(F, S) ? qe(F) : (k([
                        F
                    ]), L({
                        row: A,
                        col: G
                    }), e.render(), F.type === "cell" ? e.highlight_cell(F.row, F.col) : F.type === "line" ? e.highlight_line(F.index) : F.type === "rect" ? e.highlight_rect(F.index) : F.type === "image" && e.highlight_image(F.index)) : D({
                        row: A,
                        col: G
                    }, he);
                }
            }
        }, [
            e,
            l,
            i,
            s,
            p,
            S,
            fn,
            d,
            v,
            m,
            D,
            L,
            P,
            K,
            q,
            qe,
            k,
            se,
            On,
            pn,
            _t,
            g,
            t,
            r,
            o
        ]), Pp = C.useCallback((B)=>{
            if (!e) return;
            if (o.current) {
                const A = o.current, H = t.current.zoom;
                n({
                    x: A.camX - (B.clientX - A.x) / H,
                    y: A.camY - (B.clientY - A.y) / H,
                    zoom: H
                });
                return;
            }
            const G = gn(B, t.current, p);
            if (fe(G), l === "select") {
                const A = B.currentTarget;
                if (z && (E === "resize" || E === "rotate")) A.style.cursor = "grabbing";
                else if (z && E === "drag") A.style.cursor = "move";
                else {
                    const { x: H, y: we } = Jn(B, t.current);
                    let he = "crosshair";
                    if (S.length > 0) {
                        const J = We(S, e);
                        if (J) {
                            const ee = fs(J);
                            Math.hypot(H - ee.c * xt, we - ee.r * xt) <= 10 / t.current.zoom && (he = "grab");
                        }
                    }
                    if (he === "crosshair" && S.length === 1) {
                        const J = S[0];
                        if (J.type === "line" || J.type === "rect" || J.type === "text" || J.type === "image") {
                            const ee = J.type === "line" ? ps(e.get_line(J.index)) : J.type === "rect" ? It(e.get_rect(J.index)) : J.type === "image" ? It(e.get_image(J.index)) : It(oc(e.get_text(J.index)));
                            $u(H, we, ee, xt, 9) && (he = "grab");
                        }
                    }
                    if (he === "crosshair" && S.length > 0) {
                        const J = fn(H, we), ee = We(S, e), F = ee && G.row >= ee.minRow && G.row <= ee.maxRow && G.col >= ee.minCol && G.col <= ee.maxCol;
                        (J && Zn(J, S) || F) && (he = "move");
                    }
                    A.style.cursor = he;
                }
            } else B.currentTarget.style.cursor = "crosshair";
            if (!(!a && !z)) {
                if (l === "draw" && a) {
                    const { col: A, row: H } = gn(B, t.current, p);
                    _t(H, A, u), se();
                } else if (l === "line" && h) {
                    const { col: A, row: H } = Bt(B, t.current, p);
                    e.render_with_line(h.row, h.col, H, A);
                } else if (l === "rect" && w) {
                    const { col: A, row: H } = Bt(B, t.current, p);
                    e.render_with_rect(w.row, w.col, H, A);
                } else if (l === "select" && z && E === "resize") {
                    const { col: A, row: H } = Bt(B, t.current, p);
                    N({
                        row: H,
                        col: A
                    });
                } else if (l === "select" && z && E === "rotate") {
                    const { x: A, y: H } = Jn(B, t.current);
                    Z(A, H);
                } else if (l === "select" && z) {
                    const { col: A, row: H } = gn(B, t.current, p);
                    if (E === "box" && _) ne({
                        row: H,
                        col: A
                    });
                    else if (E === "drag" && O && S.length > 0) {
                        const we = H - O.row, he = A - O.col;
                        e.render();
                        const J = [];
                        for (const ee of S)if (ee.type === "cell") {
                            const F = ee.row + we, Ce = ee.col + he;
                            J.push(F, Ce, e.get_cell_color(ee.row, ee.col));
                        } else if (ee.type === "line") {
                            const F = e.get_line(ee.index);
                            F.length >= 6 && e.preview_line(F[0] + we, F[1] + he, F[2] + we, F[3] + he, F[4], F[5]);
                        } else if (ee.type === "rect") {
                            const F = e.get_rect(ee.index);
                            F.length >= 6 && e.preview_rect(F[0] + we, F[1] + he, F[2] + we, F[3] + he, F[4], F[5]);
                        } else if (ee.type === "text") {
                            const F = e.get_text(ee.index);
                            F.length >= 7 && e.preview_text(F[0] + we, F[1] + he, F[2], e.get_text_size(ee.index), F[3], F[4], F[5], F[6], e.get_text_string(ee.index));
                        }
                        J.length > 0 && e.preview_cells(new Int32Array(J));
                    }
                }
            }
        }, [
            e,
            l,
            p,
            a,
            z,
            u,
            h,
            w,
            E,
            _,
            O,
            S,
            fn,
            fe,
            ne,
            N,
            Z,
            se,
            _t,
            t,
            o,
            n
        ]), Mp = C.useCallback((B)=>{
            if (e) {
                if (o.current) {
                    o.current = null, B.currentTarget.style.cursor = r.current ? "grab" : "crosshair";
                    return;
                }
                if (l === "draw") Dn(), c();
                else if (l === "line") {
                    if (h) {
                        const { col: G, row: A } = Bt(B, t.current, p);
                        mn(h.row, h.col, A, G);
                    }
                    x();
                } else if (l === "rect") {
                    if (w) {
                        const { col: G, row: A } = Bt(B, t.current, p);
                        Sa(w.row, w.col, A, G);
                    }
                    f();
                } else if (l === "select") {
                    const { col: G, row: A } = gn(B, t.current, p);
                    if (E === "rotate") {
                        const { x: H, y: we } = Jn(B, t.current);
                        me(H, we);
                    } else if (E === "resize") {
                        const { col: H, row: we } = Bt(B, t.current, p);
                        b({
                            row: we,
                            col: H
                        });
                    } else E === "box" ? ve({
                        row: A,
                        col: G
                    }) : E === "drag" && de({
                        row: A,
                        col: G
                    });
                }
            }
        }, [
            e,
            l,
            p,
            h,
            w,
            E,
            c,
            x,
            f,
            ve,
            de,
            b,
            me,
            Dn,
            mn,
            Sa,
            t,
            r,
            o
        ]), bp = C.useCallback(()=>{
            if (o.current) {
                o.current = null;
                return;
            }
            l === "draw" ? c() : l === "line" ? (e && e.render(), x()) : l === "rect" ? (e && e.render(), f()) : l === "select" && (E === "box" ? Ne() : E === "drag" ? X() : E === "resize" ? T() : E === "rotate" && Fe());
        }, [
            e,
            l,
            E,
            c,
            x,
            f,
            Ne,
            X,
            T,
            Fe,
            o
        ]);
        return {
            handleMouseDown: jp,
            handleMouseMove: Pp,
            handleMouseUp: Mp,
            handleMouseLeave: bp
        };
    }
    function ev() {
        const { tool: e, setTool: t, setColorIdx: n, selectedItems: r, deleteSelected: o, selectAll: l, clipboard: i, copy: s, paste: a, cycleSubdivision: u, undo: d, redo: c, typeTextChar: h, backspaceText: v, commitTextEdit: x, cancelTextEdit: w } = Q();
        C.useEffect(()=>{
            const m = (f)=>{
                if (Q.getState().textEdit) return;
                f.key === "\\" && t(e === "line" ? "draw" : "line"), f.key === "m" && t(e === "rect" ? "draw" : "rect"), f.key === "t" && t(e === "text" ? "draw" : "text"), f.key === "s" && t(e === "select" ? "draw" : "select"), (f.key === "Delete" || f.key === "Backspace") && r.length > 0 && (f.preventDefault(), o()), (f.ctrlKey || f.metaKey) && f.key.toLowerCase() === "a" && (f.preventDefault(), l()), (f.ctrlKey || f.metaKey) && f.key === "c" && r.length > 0 && (f.preventDefault(), s()), (f.ctrlKey || f.metaKey) && f.key === "v" && i && (f.preventDefault(), a()), (f.ctrlKey || f.metaKey) && f.key.toLowerCase() === "g" && (f.preventDefault(), u()), (f.ctrlKey || f.metaKey) && !f.shiftKey && f.key.toLowerCase() === "z" && (f.preventDefault(), d()), (f.ctrlKey || f.metaKey) && (f.shiftKey && f.key.toLowerCase() === "z" || f.key.toLowerCase() === "y") && (f.preventDefault(), c());
                const p = parseInt(f.key);
                p >= 1 && p <= 7 && n(p - 1);
            };
            return window.addEventListener("keydown", m), ()=>window.removeEventListener("keydown", m);
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
        ]), C.useEffect(()=>{
            const m = (f)=>{
                if (Q.getState().textEdit) {
                    if (f.key === "Enter") {
                        f.preventDefault(), x();
                        return;
                    }
                    if (f.key === "Escape") {
                        f.preventDefault(), w();
                        return;
                    }
                    if (f.key === "Backspace") {
                        f.preventDefault(), v();
                        return;
                    }
                    f.key.length === 1 && !f.ctrlKey && !f.metaKey && !f.altKey && (f.preventDefault(), h(f.key));
                }
            };
            return window.addEventListener("keydown", m), ()=>window.removeEventListener("keydown", m);
        }, [
            x,
            w,
            v,
            h
        ]);
    }
    function tv(e, t, n, r) {
        const i = (x)=>e[x * 4] > 227 && e[x * 4 + 1] > 227 && e[x * 4 + 2] > 227, s = new Uint8Array(t * n), a = new Int32Array(t * n);
        let u = 0, d = 0;
        const c = (x)=>{
            !s[x] && i(x) && (s[x] = 1, a[d++] = x);
        };
        for(let x = 0; x < t; x++)c(x), c((n - 1) * t + x);
        for(let x = 0; x < n; x++)c(x * t), c(x * t + (t - 1));
        for(; u < d;){
            const x = a[u++], w = x % t;
            w > 0 && c(x - 1), w < t - 1 && c(x + 1), x >= t && c(x - t), x < t * (n - 1) && c(x + t);
        }
        let h = 0;
        for(let x = 0; x < t * n; x++)s[x] && (e[x * 4 + 3] = 0, h++);
        if (h === 0 || r?.feather === !1) return h;
        const v = new Uint8ClampedArray(t * n);
        for(let x = 0; x < n; x++)for(let w = 0; w < t; w++){
            let m = 0, f = 0;
            for(let p = -1; p <= 1; p++)for(let g = -1; g <= 1; g++){
                const S = w + g, k = x + p;
                S >= 0 && S < t && k >= 0 && k < n && (m += e[(k * t + S) * 4 + 3], f++);
            }
            v[x * t + w] = m / f;
        }
        for(let x = 0; x < t * n; x++)e[x * 4 + 3] = v[x];
        return h;
    }
    async function nv(e) {
        const t = await createImageBitmap(e);
        try {
            const n = document.createElement("canvas");
            n.width = t.width, n.height = t.height;
            const r = n.getContext("2d");
            if (!r) throw new Error("canvas 2d context unavailable");
            r.drawImage(t, 0, 0);
            const o = r.getImageData(0, 0, t.width, t.height);
            if (tv(o.data, t.width, t.height) === 0) return e;
            r.putImageData(o, 0, 0);
            const i = await new Promise((s)=>n.toBlob(s, "image/png"));
            if (!i) throw new Error("PNG encode failed");
            return i;
        } finally{
            t.close();
        }
    }
    const ic = 16;
    function rv(e, t) {
        const n = Q((u)=>u.placeImage), r = C.useRef(null), [o, l] = C.useState(""), [i, s] = C.useState(!1), a = C.useCallback(async (u)=>{
            try {
                let d;
                if (typeof u == "string") d = u;
                else {
                    let k = u;
                    i && (l("Removing background…"), k = await nv(k)), l("Uploading…"), d = await Dx(k);
                }
                l("Loading…");
                const { width: c, height: h } = await Cg(d), v = Math.max(c, h) || 1, x = Math.max(1, Math.round(c / v * ic)), w = Math.max(1, Math.round(h / v * ic)), m = e.current, f = Math.round((m.x + t.w / 2 / m.zoom) / xt / Et) * Et, p = Math.round((m.y + t.h / 2 / m.zoom) / xt / Et) * Et, g = f - Math.round(x / 2) * Et, S = p - Math.round(w / 2) * Et;
                n(d, {
                    r1: S,
                    c1: g,
                    r2: S + w * Et,
                    c2: g + x * Et
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
                if (Q.getState().textEdit) return;
                const c = d.clipboardData?.items;
                if (c) {
                    for (const h of c)if (h.kind === "file" && h.type.startsWith("image/")) {
                        const v = h.getAsFile();
                        if (v) {
                            d.preventDefault(), a(v);
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
    const ov = 600;
    function lv() {
        const e = import.meta;
        if ("env" in e) {
            const t = e.env;
            if (typeof t == "object" && t !== null && "BASE_URL" in t && typeof t.BASE_URL == "string") return t.BASE_URL;
        }
        return "/grid-draw/";
    }
    const iv = lv();
    let sc, Np = !1;
    function xi(e) {
        Np = e;
    }
    function sv() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function av(e) {
        return e.cells.length + e.lines.length + e.rects.length + e.texts.length + (e.images?.length ?? 0) > 0;
    }
    function uv() {
        clearTimeout(sc), sc = setTimeout(cv, ov);
    }
    async function cv() {
        const e = Q.getState();
        if (!e.grid) return;
        const t = e.serializeWholeGrid();
        if (!t) return;
        let n = e.currentName;
        if (!n) {
            if (Np || !av(t)) return;
            n = sv(), e.setCurrentName(n), window.history.replaceState({}, "", `${iv}design/${n}/`);
        }
        e.setSaveState("saving");
        try {
            await ge.getState().saveDrawing(n, t, e.exportHistory()), Q.getState().setSaveState("saved");
        } catch (r) {
            Q.getState().setSaveState("error", r instanceof Error ? r.message : String(r));
        }
    }
    Q.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && uv();
    });
    function dv(e) {
        const { clear: t, resetHistory: n, setSaveState: r, buildTrainingExample: o, finishTrainingCapture: l, serializeWholeGrid: i, loadDesignWithHistory: s, setCurrentName: a } = Q(), u = ge((P)=>P.getDrawing), d = ge((P)=>P.getDrawingById), c = ge((P)=>P.saveExamplePair), h = ge((P)=>P.updateExamplePair), v = ge((P)=>P.runPredict), x = ge((P)=>P.trainModel), w = ge((P)=>P.initModel), m = ge((P)=>P.modelStatus), f = ge((P)=>P.training), [p, g] = C.useState(""), [S, k] = C.useState(!1), [E, z] = C.useState(!1), [_, O] = C.useState(null);
        C.useEffect(()=>{
            if (!e) return;
            let P = !1;
            const N = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (N) return u(N[1]).then((T)=>{
                P || (s(T.design, T.history ?? null), a(T.name));
            }).catch(()=>g(`No drawing named "${N[1]}".`)), ()=>{
                P = !0;
            };
            const b = new URLSearchParams(window.location.search).get("load");
            if (b) return d(Number(b)).then((T)=>{
                P || (s(T.design, T.history ?? null), a(T.name), window.history.replaceState({}, "", `${Ir}design/${encodeURIComponent(T.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Ir);
            }), ()=>{
                P = !0;
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
        const D = C.useCallback(async ()=>{
            const P = o();
            if (!P) {
                g("Select the output region first.");
                return;
            }
            g("Saving…");
            try {
                await c(P.input, P.output, P.delta), l(), g("Saved.");
            } catch (N) {
                g(`Save failed: ${N instanceof Error ? N.message : String(N)}`);
            }
        }, [
            o,
            l,
            c
        ]), ne = C.useCallback(async ()=>{
            g("Training in the browser…");
            try {
                await x(), g("Model trained. Try Predict from Selection.");
            } catch (P) {
                g(`Train failed: ${P instanceof Error ? P.message : String(P)}`);
            }
        }, [
            x
        ]), ve = C.useCallback(async ()=>{
            const { grid: P, selectedItems: N } = Q.getState();
            if (!P) return;
            const b = Wr(P, N);
            if (!b) {
                g("Select an input region to predict from.");
                return;
            }
            const T = We(N, P), K = T ? T.minRow : 0, Z = T ? T.minCol : 0;
            g("Predicting…");
            try {
                const me = await v(b);
                Q.getState().placeDesign(me, K, Z), g(Yx(me) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (me) {
                g(`Predict failed: ${me instanceof Error ? me.message : String(me)}`);
            }
        }, [
            v
        ]), Ne = C.useCallback(async (P)=>{
            const N = await u(P);
            s(N.design, N.history ?? null), a(N.name), O(null), xi(!1), window.history.replaceState({}, "", `${Ir}design/${encodeURIComponent(N.name)}/`), k(!1);
        }, [
            s,
            a,
            u
        ]), L = C.useCallback((P, N)=>{
            const b = N === "input" ? P.input : P.output, T = N === "input" ? P.output : P.input;
            s(b, null), a(null), xi(!0), O({
                id: P.id,
                half: N,
                otherHalf: T
            }), window.history.replaceState({}, "", Ir), z(!1), g(`Editing example #${P.id} (${N}) — click "Update example" to save over it.`);
        }, [
            s,
            a
        ]), de = C.useCallback(async ()=>{
            if (!_) return;
            const P = i();
            if (!P) {
                g("Nothing to save — draw something first.");
                return;
            }
            const { id: N, half: b, otherHalf: T } = _, K = b === "input" ? P : T, Z = b === "output" ? P : T;
            g(`Updating example #${N}…`);
            try {
                await h(N, K, Z), g(`Example #${N} (${b}) updated.`);
            } catch (me) {
                g(`Update failed: ${me instanceof Error ? me.message : String(me)}`);
            }
        }, [
            _,
            i,
            h
        ]), X = C.useCallback(()=>{
            a(null), O(null), xi(!1), t(), n(), r("idle"), window.history.replaceState({}, "", Ir), g("");
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
            trainingOpen: E,
            setTrainingOpen: z,
            editingExample: _,
            modelStatus: m,
            training: f,
            saveTrainingExample: D,
            startTraining: ne,
            predictFromSelection: ve,
            openDrawing: Ne,
            editExampleHalf: L,
            saveExampleUpdate: de,
            newDrawing: X
        };
    }
    const Ip = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const fv = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const pv = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const ac = (e)=>{
        const t = pv(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var mv = {
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
    const hv = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const gv = C.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>C.createElement("svg", {
            ref: a,
            ...mv,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Ip("lucide", o),
            ...!l && !hv(s) && {
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
        const n = C.forwardRef(({ className: r, ...o }, l)=>C.createElement(gv, {
                ref: l,
                iconNode: t,
                className: Ip(`lucide-${fv(ac(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = ac(e), n;
    };
    const yv = [
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
    ], xv = zp("redo-2", yv);
    const vv = [
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
    ], wv = zp("undo-2", vv), Sv = Af("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), Rp = C.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Do({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return y.jsx(Iy, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Mn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: y.jsx(Rp.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function st({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = C.useContext(Rp);
        return y.jsx(zy, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Mn(Sv({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function uc({ activeIdx: e, onPick: t, titleFor: n }) {
        return y.jsx("div", {
            className: "flex gap-1",
            children: Qx.map((r, o)=>y.jsx("button", {
                    onClick: ()=>t(o),
                    title: n(o, r.name),
                    className: Mn("w-6 h-6 rounded border-2 transition-all", e === o ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", r.hex === "#ffffff" && "shadow-sm"),
                    style: {
                        backgroundColor: r.hex ?? "transparent",
                        backgroundImage: r.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                        backgroundSize: r.hex === null ? "6px 6px" : void 0,
                        backgroundPosition: r.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                    }
                }, o))
        });
    }
    function kv(e) {
        return e === "draw" || e === "line" || e === "rect" || e === "text" || e === "select";
    }
    function _v({ loading: e, imageInputRef: t, imgStatus: n, removeBg: r, setRemoveBg: o, addImageObject: l, editingExample: i, saveExampleUpdate: s, newDrawing: a, onOpenGallery: u }) {
        const d = Q(), { tool: c, setTool: h, colorIdx: v, pickColor: x, outlineIdx: w, pickOutline: m, textSize: f, pickTextSize: p, lineWidth: g, pickLineWidth: S, pickTextAlign: k, subdivision: E, setSubdivision: z, selectedItems: _, clear: O, undo: D, redo: ne, canUndo: ve, canRedo: Ne } = d;
        return d.historyTick, y.jsx(gr, {
            title: "Tools",
            defaultPosition: {
                x: 20,
                y: Ln + 20
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
                            y.jsxs(Do, {
                                type: "single",
                                value: c,
                                onValueChange: (L)=>{
                                    kv(L) && h(L);
                                },
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    y.jsx(st, {
                                        value: "draw",
                                        className: "text-xs",
                                        children: "Draw"
                                    }),
                                    y.jsx(st, {
                                        value: "line",
                                        className: "text-xs",
                                        children: "Line"
                                    }),
                                    y.jsx(st, {
                                        value: "rect",
                                        className: "text-xs",
                                        children: "Rect"
                                    }),
                                    y.jsx(st, {
                                        value: "text",
                                        className: "text-xs",
                                        children: "Text"
                                    }),
                                    y.jsx(st, {
                                        value: "select",
                                        className: "text-xs",
                                        children: "Select"
                                    })
                                ]
                            })
                        ]
                    }),
                    y.jsxs("div", {
                        children: [
                            y.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Grid (Ctrl+G)"
                            }),
                            y.jsxs(Do, {
                                type: "single",
                                value: String(E),
                                onValueChange: (L)=>L && z(Number(L)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    y.jsx(st, {
                                        value: "1",
                                        className: "text-xs",
                                        title: "Whole cells",
                                        children: "1×"
                                    }),
                                    y.jsx(st, {
                                        value: "2",
                                        className: "text-xs",
                                        title: "Half cells",
                                        children: "½"
                                    }),
                                    y.jsx(st, {
                                        value: "4",
                                        className: "text-xs",
                                        title: "Quarter cells",
                                        children: "¼"
                                    }),
                                    y.jsx(st, {
                                        value: "8",
                                        className: "text-xs",
                                        title: "Eighth cells",
                                        children: "⅛"
                                    })
                                ]
                            })
                        ]
                    }),
                    y.jsxs("div", {
                        children: [
                            y.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Image"
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(W, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>t.current?.click(),
                                        title: "Upload an image (transparent PNG works best)",
                                        children: "Upload"
                                    }),
                                    y.jsx(W, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>{
                                            const L = window.prompt("Image URL (transparent PNG works best):");
                                            L && L.trim() && l(L.trim());
                                        },
                                        title: "Add an image by URL",
                                        children: "From URL"
                                    })
                                ]
                            }),
                            y.jsx("p", {
                                className: "text-[10px] text-gray-400 mt-1",
                                children: "…or paste an image (Ctrl/Cmd+V)"
                            }),
                            y.jsxs("label", {
                                className: "flex items-center gap-1.5 text-[10px] text-gray-500 mt-1 cursor-pointer",
                                title: "Flood-fills the white backdrop (connected to the image edges) into transparency before upload. White areas inside the subject are kept.",
                                children: [
                                    y.jsx("input", {
                                        type: "checkbox",
                                        checked: r,
                                        onChange: (L)=>o(L.target.checked)
                                    }),
                                    "Remove white background"
                                ]
                            }),
                            n && y.jsx("p", {
                                className: "text-[10px] text-gray-500 mt-1",
                                children: n
                            }),
                            y.jsx("input", {
                                ref: t,
                                type: "file",
                                accept: "image/png,image/jpeg,image/webp,image/gif",
                                className: "hidden",
                                onChange: (L)=>{
                                    const de = L.target.files?.[0];
                                    de && l(de), L.target.value = "";
                                }
                            })
                        ]
                    }),
                    c === "text" && y.jsxs("div", {
                        children: [
                            y.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Text size"
                            }),
                            y.jsx(Do, {
                                type: "single",
                                value: String(f),
                                onValueChange: (L)=>L && p(Number(L)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: Tf.map((L)=>y.jsxs(st, {
                                        value: String(L),
                                        className: "text-xs",
                                        children: [
                                            L,
                                            "×"
                                        ]
                                    }, L))
                            })
                        ]
                    }),
                    _.some((L)=>L.type === "text") && y.jsxs("div", {
                        children: [
                            y.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Text align (drag the box to resize)"
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1 mb-1",
                                children: [
                                    y.jsx(W, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(0, null),
                                        children: "Left"
                                    }),
                                    y.jsx(W, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(1, null),
                                        children: "Center"
                                    }),
                                    y.jsx(W, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(2, null),
                                        children: "Right"
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(W, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(null, 0),
                                        children: "Top"
                                    }),
                                    y.jsx(W, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>k(null, 1),
                                        children: "Middle"
                                    }),
                                    y.jsx(W, {
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
                    c === "line" && y.jsxs("div", {
                        children: [
                            y.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Line width"
                            }),
                            y.jsx(Do, {
                                type: "single",
                                value: String(g),
                                onValueChange: (L)=>L && S(Number(L)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: Nf.map((L)=>y.jsxs(st, {
                                        value: String(L),
                                        className: "text-xs",
                                        children: [
                                            L,
                                            "×"
                                        ]
                                    }, L))
                            })
                        ]
                    }),
                    y.jsxs("div", {
                        children: [
                            y.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Color"
                            }),
                            y.jsx(uc, {
                                activeIdx: v,
                                onPick: x,
                                titleFor: (L, de)=>`${L + 1}: ${de}`
                            })
                        ]
                    }),
                    y.jsxs("div", {
                        children: [
                            y.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Outline (rects)"
                            }),
                            y.jsx(uc, {
                                activeIdx: w,
                                onPick: m,
                                titleFor: (L, de)=>L === 6 ? "No outline" : de
                            })
                        ]
                    }),
                    y.jsxs("div", {
                        className: "flex gap-1",
                        children: [
                            y.jsx(W, {
                                variant: "outline",
                                onClick: D,
                                disabled: e || !ve(),
                                size: "sm",
                                className: "flex-1",
                                title: "Undo (Ctrl/Cmd+Z)",
                                children: y.jsx(wv, {
                                    className: "w-4 h-4"
                                })
                            }),
                            y.jsx(W, {
                                variant: "outline",
                                onClick: ne,
                                disabled: e || !Ne(),
                                size: "sm",
                                className: "flex-1",
                                title: "Redo (Ctrl/Cmd+Shift+Z)",
                                children: y.jsx(xv, {
                                    className: "w-4 h-4"
                                })
                            })
                        ]
                    }),
                    y.jsx(W, {
                        variant: "outline",
                        onClick: u,
                        size: "sm",
                        className: "w-full",
                        children: "Gallery"
                    }),
                    i && y.jsxs(W, {
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
                    y.jsx(W, {
                        variant: "destructive",
                        onClick: O,
                        disabled: e,
                        size: "sm",
                        className: "w-full",
                        children: "Clear Grid"
                    }),
                    y.jsx(W, {
                        onClick: a,
                        disabled: e,
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
        });
    }
    function Cv() {
        const { selectedItems: e, getSelectedCells: t, jsonOutput: n, tensorOutput: r, importJson: o, importTensor: l } = Q(), i = t();
        return y.jsx(gr, {
            title: "Selection Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: Ln + 20
            },
            children: y.jsxs("div", {
                className: "space-y-3 w-72",
                children: [
                    i.length > 0 && y.jsxs(y.Fragment, {
                        children: [
                            y.jsxs("div", {
                                children: [
                                    y.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "JSON (sparse)"
                                    }),
                                    y.jsx("textarea", {
                                        value: n,
                                        onChange: (s)=>o(s.target.value),
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
                                        value: r,
                                        onChange: (s)=>l(s.target.value),
                                        placeholder: "[[1, 0], [0, 1], ...]",
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            })
                        ]
                    }),
                    y.jsx("p", {
                        className: "text-xs text-gray-400",
                        children: e.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${e.length} item${e.length !== 1 ? "s" : ""} selected${i.length > 0 ? ` (${i.length} cell${i.length !== 1 ? "s" : ""})` : ""}.`
                    })
                ]
            })
        });
    }
    function Ev({ loading: e, trainStatus: t, modelStatus: n, training: r, saveTrainingExample: o, startTraining: l, predictFromSelection: i, onViewTrainingData: s }) {
        const { selectedItems: a, captureMode: u, captureInput: d, startTrainingCapture: c, captureSetInput: h, cancelTrainingCapture: v } = Q();
        return y.jsx(gr, {
            title: "Training Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: Ln + 360
            },
            children: y.jsxs("div", {
                className: "space-y-3 w-72",
                children: [
                    u === "idle" && y.jsxs(y.Fragment, {
                        children: [
                            y.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                            }),
                            y.jsx(W, {
                                size: "sm",
                                className: "w-full",
                                onClick: c,
                                disabled: e,
                                children: "Make Training Data"
                            }),
                            y.jsx(W, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: i,
                                disabled: e || a.length === 0 || n !== "ready",
                                title: n !== "ready" ? "Train a model first" : "Map the selection through the model",
                                children: "Predict from Selection"
                            }),
                            y.jsx(W, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: l,
                                disabled: e || r?.status === "running",
                                children: r?.status === "running" ? "Training…" : "Start Training Run"
                            }),
                            y.jsx(W, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: s,
                                children: "View Training Data"
                            })
                        ]
                    }),
                    u === "input" && y.jsxs(y.Fragment, {
                        children: [
                            y.jsx("p", {
                                className: "text-xs font-medium text-blue-600",
                                children: "Step 1/2 — select the INPUT, then click Next."
                            }),
                            y.jsxs("p", {
                                className: "text-xs text-gray-400",
                                children: [
                                    a.length,
                                    " item(s) selected."
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(W, {
                                        size: "sm",
                                        className: "flex-1",
                                        onClick: h,
                                        disabled: a.length === 0,
                                        children: "Next →"
                                    }),
                                    y.jsx(W, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "flex-1",
                                        onClick: v,
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }),
                    u === "output" && y.jsxs(y.Fragment, {
                        children: [
                            y.jsx("p", {
                                className: "text-xs font-medium text-green-600",
                                children: "Step 2/2 — select the OUTPUT, then Save."
                            }),
                            y.jsxs("p", {
                                className: "text-xs text-gray-400",
                                children: [
                                    "Input: ",
                                    d ? `${d.cells.length}c ${d.lines.length}l ${d.rects.length}r ${d.texts.length}t` : "—",
                                    " · Output: ",
                                    a.length,
                                    " item(s)"
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(W, {
                                        size: "sm",
                                        className: "flex-1",
                                        onClick: o,
                                        disabled: a.length === 0,
                                        children: "Save Example"
                                    }),
                                    y.jsx(W, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "flex-1",
                                        onClick: v,
                                        children: "Cancel"
                                    })
                                ]
                            })
                        ]
                    }),
                    t && y.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: t
                    })
                ]
            })
        });
    }
    function Tv({ training: e }) {
        const t = e.total > 0 ? Math.min(100, Math.round(e.epoch / e.total * 100)) : e.status === "done" ? 100 : 0, n = e.status === "error" ? "bg-red-500" : e.status === "done" ? "bg-green-500" : "bg-blue-500";
        return y.jsx(gr, {
            title: "Training",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: Ln + 540
            },
            children: y.jsxs("div", {
                className: "space-y-2 w-72 text-xs",
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
                                children: e.status
                            })
                        ]
                    }),
                    y.jsx("div", {
                        className: "h-1.5 bg-gray-200 rounded overflow-hidden",
                        children: y.jsx("div", {
                            className: Mn("h-full", n),
                            style: {
                                width: `${t}%`
                            }
                        })
                    }),
                    y.jsxs("div", {
                        className: "flex justify-between text-gray-400",
                        children: [
                            y.jsx("span", {
                                children: e.total > 0 ? `epoch ${e.epoch}/${e.total} (${t}%)` : ""
                            }),
                            Number.isFinite(e.loss) && y.jsxs("span", {
                                children: [
                                    "loss ",
                                    e.loss.toFixed(4)
                                ]
                            })
                        ]
                    }),
                    e.message && y.jsx("p", {
                        className: "text-gray-400",
                        children: e.message
                    })
                ]
            })
        });
    }
    function Nv() {
        const [e, t] = C.useState(()=>lc()), n = C.useRef(null), { grid: r, loading: o, error: l } = Qg(n, e.w, e.h), i = Q((k)=>k.currentName), s = Q((k)=>k.saveState), { cam: a, camRef: u, applyCamera: d, resetView: c, spaceHeld: h, isSpaceDown: v, panRef: x } = Jx(r, n), { handleMouseDown: w, handleMouseMove: m, handleMouseUp: f, handleMouseLeave: p } = qx({
            grid: r,
            camRef: u,
            applyCamera: d,
            isSpaceDown: v,
            panRef: x
        });
        ev();
        const g = rv(u, e), S = dv(r);
        return C.useEffect(()=>{
            const k = ()=>{
                const E = lc();
                t(E), r?.set_viewport(E.w, E.h);
            };
            return window.addEventListener("resize", k), ()=>window.removeEventListener("resize", k);
        }, [
            r
        ]), l ? y.jsx("div", {
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
                            children: "Sean's Autism World"
                        }),
                        o && y.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        }),
                        y.jsxs("div", {
                            className: "ml-auto flex items-center gap-3",
                            children: [
                                i && y.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        i,
                                        s === "saving" && " · saving…",
                                        s === "saved" && " · saved",
                                        s === "error" && " · save failed"
                                    ]
                                }),
                                (a.zoom !== 1 || a.x !== 0 || a.y !== 0) && y.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        y.jsxs("span", {
                                            className: "text-sm text-gray-500 tabular-nums",
                                            children: [
                                                Math.round(a.zoom * 100),
                                                "%"
                                            ]
                                        }),
                                        y.jsx(W, {
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
                y.jsx("canvas", {
                    ref: n,
                    className: Mn("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: Ln,
                        cursor: o ? "wait" : h ? "grab" : "crosshair"
                    },
                    onMouseDown: w,
                    onMouseMove: m,
                    onMouseUp: f,
                    onMouseLeave: p
                }),
                y.jsx(_v, {
                    loading: o,
                    imageInputRef: g.imageInputRef,
                    imgStatus: g.imgStatus,
                    removeBg: g.removeBg,
                    setRemoveBg: g.setRemoveBg,
                    addImageObject: g.addImageObject,
                    editingExample: S.editingExample,
                    saveExampleUpdate: S.saveExampleUpdate,
                    newDrawing: S.newDrawing,
                    onOpenGallery: ()=>S.setGalleryOpen(!0)
                }),
                y.jsx(Cv, {}),
                y.jsx(Ev, {
                    loading: o,
                    trainStatus: S.trainStatus,
                    modelStatus: S.modelStatus,
                    training: S.training,
                    saveTrainingExample: S.saveTrainingExample,
                    startTraining: S.startTraining,
                    predictFromSelection: S.predictFromSelection,
                    onViewTrainingData: ()=>S.setTrainingOpen(!0)
                }),
                S.training && y.jsx(Tv, {
                    training: S.training
                }),
                S.galleryOpen && y.jsx(Cp, {
                    asModal: !0,
                    onClose: ()=>S.setGalleryOpen(!1),
                    onOpenDesign: S.openDrawing
                }),
                S.trainingOpen && y.jsx(Ep, {
                    asModal: !0,
                    onClose: ()=>S.setTrainingOpen(!1),
                    onEditExample: S.editExampleHalf
                })
            ]
        });
    }
    function Iv({ onSuccess: e }) {
        const [t, n] = C.useState(""), [r, o] = C.useState(""), [l, i] = C.useState(null), [s, a] = C.useState(!1), u = async (d)=>{
            d.preventDefault(), a(!0), i(null);
            try {
                await Ix(t, r), e();
            } catch (c) {
                i(String(c instanceof Error ? c.message : c));
            } finally{
                a(!1);
            }
        };
        return y.jsx("div", {
            className: "min-h-screen w-full bg-gray-50 flex items-center justify-center p-6",
            children: y.jsxs("form", {
                onSubmit: u,
                className: "bg-white rounded border p-6 w-80 flex flex-col gap-3",
                children: [
                    y.jsx("h1", {
                        className: "text-lg font-semibold",
                        children: "grid-draw"
                    }),
                    y.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        placeholder: "username",
                        autoComplete: "username",
                        value: t,
                        onChange: (d)=>n(d.target.value)
                    }),
                    y.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        type: "password",
                        placeholder: "password",
                        autoComplete: "current-password",
                        value: r,
                        onChange: (d)=>o(d.target.value)
                    }),
                    l && y.jsx("p", {
                        className: "text-sm text-red-500",
                        children: l
                    }),
                    y.jsx(W, {
                        type: "submit",
                        disabled: s || !t || !r,
                        children: s ? "Signing in…" : "Sign in"
                    })
                ]
            })
        });
    }
    function zv() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function Rv() {
        const e = zv(), [t, n] = C.useState(()=>xp() !== null);
        return C.useEffect(()=>{
            const r = ()=>n(!1);
            return window.addEventListener(ys, r), ()=>window.removeEventListener(ys, r);
        }, []), t ? y.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? y.jsx(Cp, {}) : e === "training" ? y.jsx(Ep, {}) : y.jsx(Nv, {})
        }) : y.jsx(Iv, {
            onSuccess: ()=>n(!0)
        });
    }
    const cc = document.getElementById("grid-draw-root");
    cc && vi.createRoot(cc).render(y.jsx(le.StrictMode, {
        children: y.jsx(Rv, {})
    }));
})();
export { Pv as a, jv as c, Op as g, __tla };
