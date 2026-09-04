let Nv, zv, bp;
let __tla = (async ()=>{
    function jp(e, t) {
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
    zv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    bp = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    Nv = function(e) {
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
    }, yl = {}, fc = {
        exports: {}
    }, W = {};
    var oo = Symbol.for("react.element"), Pp = Symbol.for("react.portal"), Mp = Symbol.for("react.fragment"), Lp = Symbol.for("react.strict_mode"), Op = Symbol.for("react.profiler"), Dp = Symbol.for("react.provider"), Ap = Symbol.for("react.context"), Fp = Symbol.for("react.forward_ref"), $p = Symbol.for("react.suspense"), Up = Symbol.for("react.memo"), Bp = Symbol.for("react.lazy"), Sa = Symbol.iterator;
    function Wp(e) {
        return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var pc = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, mc = Object.assign, hc = {};
    function sr(e, t, n) {
        this.props = e, this.context = t, this.refs = hc, this.updater = n || pc;
    }
    sr.prototype.isReactComponent = {};
    sr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    sr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function gc() {}
    gc.prototype = sr.prototype;
    function gs(e, t, n) {
        this.props = e, this.context = t, this.refs = hc, this.updater = n || pc;
    }
    var xs = gs.prototype = new gc;
    xs.constructor = gs;
    mc(xs, sr.prototype);
    xs.isPureReactComponent = !0;
    var ka = Array.isArray, xc = Object.prototype.hasOwnProperty, ys = {
        current: null
    }, yc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function vc(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)xc.call(t, r) && !yc.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: oo,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: ys.current
        };
    }
    function Vp(e, t) {
        return {
            $$typeof: oo,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function vs(e) {
        return typeof e == "object" && e !== null && e.$$typeof === oo;
    }
    function Gp(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var _a = /\/+/g;
    function Fl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Gp("" + e.key) : t.toString(36);
    }
    function Ro(e, t, n, r, o) {
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
                    case oo:
                    case Pp:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + Fl(i, 0) : r, ka(o) ? (n = "", e != null && (n = e.replace(_a, "$&/") + "/"), Ro(o, t, n, "", function(u) {
            return u;
        })) : o != null && (vs(o) && (o = Vp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(_a, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", ka(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + Fl(l, s);
            i += Ro(l, t, n, a, o);
        }
        else if (a = Wp(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + Fl(l, s++), i += Ro(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function co(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return Ro(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Hp(e) {
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
    }, jo = {
        transition: null
    }, Kp = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: jo,
        ReactCurrentOwner: ys
    };
    function wc() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    W.Children = {
        map: co,
        forEach: function(e, t, n) {
            co(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return co(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return co(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!vs(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    W.Component = sr;
    W.Fragment = Mp;
    W.Profiler = Op;
    W.PureComponent = gs;
    W.StrictMode = Lp;
    W.Suspense = $p;
    W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kp;
    W.act = wc;
    W.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = mc({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = ys.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)xc.call(t, a) && !yc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: oo,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    W.createContext = function(e) {
        return e = {
            $$typeof: Ap,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Dp,
            _context: e
        }, e.Consumer = e;
    };
    W.createElement = vc;
    W.createFactory = function(e) {
        var t = vc.bind(null, e);
        return t.type = e, t;
    };
    W.createRef = function() {
        return {
            current: null
        };
    };
    W.forwardRef = function(e) {
        return {
            $$typeof: Fp,
            render: e
        };
    };
    W.isValidElement = vs;
    W.lazy = function(e) {
        return {
            $$typeof: Bp,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Hp
        };
    };
    W.memo = function(e, t) {
        return {
            $$typeof: Up,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    W.startTransition = function(e) {
        var t = jo.transition;
        jo.transition = {};
        try {
            e();
        } finally{
            jo.transition = t;
        }
    };
    W.unstable_act = wc;
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
    fc.exports = W;
    var C = fc.exports;
    const ne = bp(C), Sc = jp({
        __proto__: null,
        default: ne
    }, [
        C
    ]);
    var Qp = C, qp = Symbol.for("react.element"), Yp = Symbol.for("react.fragment"), Xp = Object.prototype.hasOwnProperty, Zp = Qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Jp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function kc(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Xp.call(t, r) && !Jp.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: qp,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Zp.current
        };
    }
    yl.Fragment = Yp;
    yl.jsx = kc;
    yl.jsxs = kc;
    dc.exports = yl;
    var v = dc.exports, gi = {}, _c = {
        exports: {}
    }, Ye = {}, Cc = {
        exports: {}
    }, Ec = {};
    (function(e) {
        function t(E, P) {
            var T = E.length;
            E.push(P);
            e: for(; 0 < T;){
                var A = T - 1 >>> 1, V = E[A];
                if (0 < o(V, P)) E[A] = P, E[T] = V, T = A;
                else break e;
            }
        }
        function n(E) {
            return E.length === 0 ? null : E[0];
        }
        function r(E) {
            if (E.length === 0) return null;
            var P = E[0], T = E.pop();
            if (T !== P) {
                E[0] = T;
                e: for(var A = 0, V = E.length, oe = V >>> 1; A < oe;){
                    var Ee = 2 * (A + 1) - 1, Z = E[Ee], Y = Ee + 1, De = E[Y];
                    if (0 > o(Z, T)) Y < V && 0 > o(De, Z) ? (E[A] = De, E[Y] = T, A = Y) : (E[A] = Z, E[Ee] = T, A = Ee);
                    else if (Y < V && 0 > o(De, T)) E[A] = De, E[Y] = T, A = Y;
                    else break e;
                }
            }
            return P;
        }
        function o(E, P) {
            var T = E.sortIndex - P.sortIndex;
            return T !== 0 ? T : E.id - P.id;
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
        var a = [], u = [], d = 1, c = null, f = 3, g = !1, m = !1, w = !1, y = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function h(E) {
            for(var P = n(u); P !== null;){
                if (P.callback === null) r(u);
                else if (P.startTime <= E) r(u), P.sortIndex = P.expirationTime, t(a, P);
                else break;
                P = n(u);
            }
        }
        function S(E) {
            if (w = !1, h(E), !m) if (n(a) !== null) m = !0, Q(k);
            else {
                var P = n(u);
                P !== null && b(S, P.startTime - E);
            }
        }
        function k(E, P) {
            m = !1, w && (w = !1, x(_), _ = -1), g = !0;
            var T = f;
            try {
                for(h(P), c = n(a); c !== null && (!(c.expirationTime > P) || E && !q());){
                    var A = c.callback;
                    if (typeof A == "function") {
                        c.callback = null, f = c.priorityLevel;
                        var V = A(c.expirationTime <= P);
                        P = e.unstable_now(), typeof V == "function" ? c.callback = V : c === n(a) && r(a), h(P);
                    } else r(a);
                    c = n(a);
                }
                if (c !== null) var oe = !0;
                else {
                    var Ee = n(u);
                    Ee !== null && b(S, Ee.startTime - P), oe = !1;
                }
                return oe;
            } finally{
                c = null, f = T, g = !1;
            }
        }
        var z = !1, N = null, _ = -1, D = 5, O = -1;
        function q() {
            return !(e.unstable_now() - O < D);
        }
        function ae() {
            if (N !== null) {
                var E = e.unstable_now();
                O = E;
                var P = !0;
                try {
                    P = N(!0, E);
                } finally{
                    P ? me() : (z = !1, N = null);
                }
            } else z = !1;
        }
        var me;
        if (typeof p == "function") me = function() {
            p(ae);
        };
        else if (typeof MessageChannel < "u") {
            var Ce = new MessageChannel, he = Ce.port2;
            Ce.port1.onmessage = ae, me = function() {
                he.postMessage(null);
            };
        } else me = function() {
            y(ae, 0);
        };
        function Q(E) {
            N = E, z || (z = !0, me());
        }
        function b(E, P) {
            _ = y(function() {
                E(e.unstable_now());
            }, P);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
            E.callback = null;
        }, e.unstable_continueExecution = function() {
            m || g || (m = !0, Q(k));
        }, e.unstable_forceFrameRate = function(E) {
            0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < E ? Math.floor(1e3 / E) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(E) {
            switch(f){
                case 1:
                case 2:
                case 3:
                    var P = 3;
                    break;
                default:
                    P = f;
            }
            var T = f;
            f = P;
            try {
                return E();
            } finally{
                f = T;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(E, P) {
            switch(E){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    E = 3;
            }
            var T = f;
            f = E;
            try {
                return P();
            } finally{
                f = T;
            }
        }, e.unstable_scheduleCallback = function(E, P, T) {
            var A = e.unstable_now();
            switch(typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? A + T : A) : T = A, E){
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
            return V = T + V, E = {
                id: d++,
                callback: P,
                priorityLevel: E,
                startTime: T,
                expirationTime: V,
                sortIndex: -1
            }, T > A ? (E.sortIndex = T, t(u, E), n(a) === null && E === n(u) && (w ? (x(_), _ = -1) : w = !0, b(S, T - A))) : (E.sortIndex = V, t(a, E), m || g || (m = !0, Q(k))), E;
        }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(E) {
            var P = f;
            return function() {
                var T = f;
                f = P;
                try {
                    return E.apply(this, arguments);
                } finally{
                    f = T;
                }
            };
        };
    })(Ec);
    Cc.exports = Ec;
    var em = Cc.exports;
    var tm = C, qe = em;
    function I(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Tc = new Set, Fr = {};
    function En(e, t) {
        Jn(e, t), Jn(e + "Capture", t);
    }
    function Jn(e, t) {
        for(Fr[e] = t, e = 0; e < t.length; e++)Tc.add(t[e]);
    }
    var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xi = Object.prototype.hasOwnProperty, nm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ca = {}, Ea = {};
    function rm(e) {
        return xi.call(Ea, e) ? !0 : xi.call(Ca, e) ? !1 : nm.test(e) ? Ea[e] = !0 : (Ca[e] = !0, !1);
    }
    function om(e, t, n, r) {
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
    function lm(e, t, n, r) {
        if (t === null || typeof t > "u" || om(e, t, n, r)) return !0;
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
    var _e = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        _e[e] = new Oe(e, 0, !1, e, null, !1, !1);
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
        _e[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        _e[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var ws = /[\-:]([a-z])/g;
    function Ss(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(ws, Ss);
        _e[t] = new Oe(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(ws, Ss);
        _e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(ws, Ss);
        _e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    _e.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        _e[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function ks(e, t, n, r) {
        var o = _e.hasOwnProperty(t) ? _e[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lm(t, n, o, r) && (n = null), r || o === null ? rm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var jt = tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, fo = Symbol.for("react.element"), Mn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), _s = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), Ic = Symbol.for("react.provider"), zc = Symbol.for("react.context"), Cs = Symbol.for("react.forward_ref"), vi = Symbol.for("react.suspense"), wi = Symbol.for("react.suspense_list"), Es = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Nc = Symbol.for("react.offscreen"), Ta = Symbol.iterator;
    function fr(e) {
        return e === null || typeof e != "object" ? null : (e = Ta && e[Ta] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var se = Object.assign, $l;
    function _r(e) {
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
        return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
    }
    function im(e) {
        switch(e.tag){
            case 5:
                return _r(e.type);
            case 16:
                return _r("Lazy");
            case 13:
                return _r("Suspense");
            case 19:
                return _r("SuspenseList");
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
            case Ln:
                return "Fragment";
            case Mn:
                return "Portal";
            case yi:
                return "Profiler";
            case _s:
                return "StrictMode";
            case vi:
                return "Suspense";
            case wi:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case zc:
                return (e.displayName || "Context") + ".Consumer";
            case Ic:
                return (e._context.displayName || "Context") + ".Provider";
            case Cs:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Es:
                return t = e.displayName || null, t !== null ? t : Si(e.type) || "Memo";
            case Dt:
                t = e._payload, e = e._init;
                try {
                    return Si(e(t));
                } catch  {}
        }
        return null;
    }
    function sm(e) {
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
                return t === _s ? "StrictMode" : "Mode";
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
    function Zt(e) {
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
    function am(e) {
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
    function po(e) {
        e._valueTracker || (e._valueTracker = am(e));
    }
    function jc(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Rc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
    function Ia(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = Zt(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function bc(e, t) {
        t = t.checked, t != null && ks(e, "checked", t, !1);
    }
    function _i(e, t) {
        bc(e, t);
        var n = Zt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Ci(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ci(e, t.type, Zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function za(e, t, n) {
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
    var Cr = Array.isArray;
    function Hn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + Zt(n), t = null, o = 0; o < e.length; o++){
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
    function Na(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(I(92));
                if (Cr(n)) {
                    if (1 < n.length) throw Error(I(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: Zt(n)
        };
    }
    function Pc(e, t) {
        var n = Zt(t.value), r = Zt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Ra(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Mc(e) {
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
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Mc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var mo, Lc = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(mo = mo || document.createElement("div"), mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mo.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function $r(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Nr = {
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
    }, um = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Nr).forEach(function(e) {
        um.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Nr[t] = Nr[e];
        });
    });
    function Oc(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nr.hasOwnProperty(e) && Nr[e] ? ("" + t).trim() : t + "px";
    }
    function Dc(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Oc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var cm = se({
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
            if (cm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
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
    function Ts(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Ri = null, Kn = null, Qn = null;
    function ja(e) {
        if (e = so(e)) {
            if (typeof Ri != "function") throw Error(I(280));
            var t = e.stateNode;
            t && (t = _l(t), Ri(e.stateNode, e.type, t));
        }
    }
    function Ac(e) {
        Kn ? Qn ? Qn.push(e) : Qn = [
            e
        ] : Kn = e;
    }
    function Fc() {
        if (Kn) {
            var e = Kn, t = Qn;
            if (Qn = Kn = null, ja(e), t) for(e = 0; e < t.length; e++)ja(t[e]);
        }
    }
    function $c(e, t) {
        return e(t);
    }
    function Uc() {}
    var Wl = !1;
    function Bc(e, t, n) {
        if (Wl) return e(t, n);
        Wl = !0;
        try {
            return $c(e, t, n);
        } finally{
            Wl = !1, (Kn !== null || Qn !== null) && (Uc(), Fc());
        }
    }
    function Ur(e, t) {
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
    if (It) try {
        var pr = {};
        Object.defineProperty(pr, "passive", {
            get: function() {
                ji = !0;
            }
        }), window.addEventListener("test", pr, pr), window.removeEventListener("test", pr, pr);
    } catch  {
        ji = !1;
    }
    function dm(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (d) {
            this.onError(d);
        }
    }
    var Rr = !1, Go = null, Ho = !1, bi = null, fm = {
        onError: function(e) {
            Rr = !0, Go = e;
        }
    };
    function pm(e, t, n, r, o, l, i, s, a) {
        Rr = !1, Go = null, dm.apply(fm, arguments);
    }
    function mm(e, t, n, r, o, l, i, s, a) {
        if (pm.apply(this, arguments), Rr) {
            if (Rr) {
                var u = Go;
                Rr = !1, Go = null;
            } else throw Error(I(198));
            Ho || (Ho = !0, bi = u);
        }
    }
    function Tn(e) {
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
    function ba(e) {
        if (Tn(e) !== e) throw Error(I(188));
    }
    function hm(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Tn(e), t === null) throw Error(I(188));
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
                    if (l === n) return ba(o), e;
                    if (l === r) return ba(o), t;
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
        return e = hm(e), e !== null ? Gc(e) : null;
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
    var Hc = qe.unstable_scheduleCallback, Pa = qe.unstable_cancelCallback, gm = qe.unstable_shouldYield, xm = qe.unstable_requestPaint, fe = qe.unstable_now, ym = qe.unstable_getCurrentPriorityLevel, Is = qe.unstable_ImmediatePriority, Kc = qe.unstable_UserBlockingPriority, Ko = qe.unstable_NormalPriority, vm = qe.unstable_LowPriority, Qc = qe.unstable_IdlePriority, vl = null, yt = null;
    function wm(e) {
        if (yt && typeof yt.onCommitFiberRoot == "function") try {
            yt.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var dt = Math.clz32 ? Math.clz32 : _m, Sm = Math.log, km = Math.LN2;
    function _m(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Sm(e) / km | 0) | 0;
    }
    var ho = 64, go = 4194304;
    function Er(e) {
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
            s !== 0 ? r = Er(s) : (l &= i, l !== 0 && (r = Er(l)));
        } else i = n & ~o, i !== 0 ? r = Er(i) : l !== 0 && (r = Er(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - dt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function Cm(e, t) {
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
    function Em(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - dt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = Cm(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function Pi(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function qc() {
        var e = ho;
        return ho <<= 1, !(ho & 4194240) && (ho = 64), e;
    }
    function Vl(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function lo(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
    }
    function Tm(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - dt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function zs(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - dt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var X = 0;
    function Yc(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Xc, Ns, Zc, Jc, ed, Mi = !1, xo = [], Wt = null, Vt = null, Gt = null, Br = new Map, Wr = new Map, Ft = [], Im = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Ma(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Wt = null;
                break;
            case "dragenter":
            case "dragleave":
                Vt = null;
                break;
            case "mouseover":
            case "mouseout":
                Gt = null;
                break;
            case "pointerover":
            case "pointerout":
                Br.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Wr.delete(t.pointerId);
        }
    }
    function mr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = so(t), t !== null && Ns(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function zm(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Wt = mr(Wt, e, t, n, r, o), !0;
            case "dragenter":
                return Vt = mr(Vt, e, t, n, r, o), !0;
            case "mouseover":
                return Gt = mr(Gt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Br.set(l, mr(Br.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Wr.set(l, mr(Wr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function td(e) {
        var t = pn(e.target);
        if (t !== null) {
            var n = Tn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Wc(n), t !== null) {
                        e.blockedOn = t, ed(e.priority, function() {
                            Zc(n);
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
    function bo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = Li(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Ni = r, n.target.dispatchEvent(r), Ni = null;
            } else return t = so(n), t !== null && Ns(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function La(e, t, n) {
        bo(e) && n.delete(t);
    }
    function Nm() {
        Mi = !1, Wt !== null && bo(Wt) && (Wt = null), Vt !== null && bo(Vt) && (Vt = null), Gt !== null && bo(Gt) && (Gt = null), Br.forEach(La), Wr.forEach(La);
    }
    function hr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Mi || (Mi = !0, qe.unstable_scheduleCallback(qe.unstable_NormalPriority, Nm)));
    }
    function Vr(e) {
        function t(o) {
            return hr(o, e);
        }
        if (0 < xo.length) {
            hr(xo[0], e);
            for(var n = 1; n < xo.length; n++){
                var r = xo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Wt !== null && hr(Wt, e), Vt !== null && hr(Vt, e), Gt !== null && hr(Gt, e), Br.forEach(t), Wr.forEach(t), n = 0; n < Ft.length; n++)r = Ft[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Ft.length && (n = Ft[0], n.blockedOn === null);)td(n), n.blockedOn === null && Ft.shift();
    }
    var qn = jt.ReactCurrentBatchConfig, qo = !0;
    function Rm(e, t, n, r) {
        var o = X, l = qn.transition;
        qn.transition = null;
        try {
            X = 1, Rs(e, t, n, r);
        } finally{
            X = o, qn.transition = l;
        }
    }
    function jm(e, t, n, r) {
        var o = X, l = qn.transition;
        qn.transition = null;
        try {
            X = 4, Rs(e, t, n, r);
        } finally{
            X = o, qn.transition = l;
        }
    }
    function Rs(e, t, n, r) {
        if (qo) {
            var o = Li(e, t, n, r);
            if (o === null) ei(e, t, r, Yo, n), Ma(e, r);
            else if (zm(o, e, t, n, r)) r.stopPropagation();
            else if (Ma(e, r), t & 4 && -1 < Im.indexOf(e)) {
                for(; o !== null;){
                    var l = so(o);
                    if (l !== null && Xc(l), l = Li(e, t, n, r), l === null && ei(e, t, r, Yo, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else ei(e, t, r, null, n);
        }
    }
    var Yo = null;
    function Li(e, t, n, r) {
        if (Yo = null, e = Ts(r), e = pn(e), e !== null) if (t = Tn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Wc(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return Yo = e, null;
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
                switch(ym()){
                    case Is:
                        return 1;
                    case Kc:
                        return 4;
                    case Ko:
                    case vm:
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
    var Ut = null, js = null, Po = null;
    function rd() {
        if (Po) return Po;
        var e, t = js, n = t.length, r, o = "value" in Ut ? Ut.value : Ut.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return Po = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Mo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function yo() {
        return !0;
    }
    function Oa() {
        return !1;
    }
    function Xe(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? yo : Oa, this.isPropagationStopped = Oa, this;
        }
        return se(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yo);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yo);
            },
            persist: function() {},
            isPersistent: yo
        }), t;
    }
    var ar = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, bs = Xe(ar), io = se({}, ar, {
        view: 0,
        detail: 0
    }), bm = Xe(io), Gl, Hl, gr, wl = se({}, io, {
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
        getModifierState: Ps,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== gr && (gr && e.type === "mousemove" ? (Gl = e.screenX - gr.screenX, Hl = e.screenY - gr.screenY) : Hl = Gl = 0, gr = e), Gl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Hl;
        }
    }), Da = Xe(wl), Pm = se({}, wl, {
        dataTransfer: 0
    }), Mm = Xe(Pm), Lm = se({}, io, {
        relatedTarget: 0
    }), Kl = Xe(Lm), Om = se({}, ar, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Dm = Xe(Om), Am = se({}, ar, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Fm = Xe(Am), $m = se({}, ar, {
        data: 0
    }), Aa = Xe($m), Um = {
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
    }, Bm = {
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
    }, Wm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Vm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Wm[e]) ? !!t[e] : !1;
    }
    function Ps() {
        return Vm;
    }
    var Gm = se({}, io, {
        key: function(e) {
            if (e.key) {
                var t = Um[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = Mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bm[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ps,
        charCode: function(e) {
            return e.type === "keypress" ? Mo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Hm = Xe(Gm), Km = se({}, wl, {
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
    }), Fa = Xe(Km), Qm = se({}, io, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ps
    }), qm = Xe(Qm), Ym = se({}, ar, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Xm = Xe(Ym), Zm = se({}, wl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Jm = Xe(Zm), eh = [
        9,
        13,
        27,
        32
    ], Ms = It && "CompositionEvent" in window, jr = null;
    It && "documentMode" in document && (jr = document.documentMode);
    var th = It && "TextEvent" in window && !jr, od = It && (!Ms || jr && 8 < jr && 11 >= jr), $a = " ", Ua = !1;
    function ld(e, t) {
        switch(e){
            case "keyup":
                return eh.indexOf(t.keyCode) !== -1;
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
    var On = !1;
    function nh(e, t) {
        switch(e){
            case "compositionend":
                return id(t);
            case "keypress":
                return t.which !== 32 ? null : (Ua = !0, $a);
            case "textInput":
                return e = t.data, e === $a && Ua ? null : e;
            default:
                return null;
        }
    }
    function rh(e, t) {
        if (On) return e === "compositionend" || !Ms && ld(e, t) ? (e = rd(), Po = js = Ut = null, On = !1, e) : null;
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
    var oh = {
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
    function Ba(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!oh[e.type] : t === "textarea";
    }
    function sd(e, t, n, r) {
        Ac(r), t = Xo(t, "onChange"), 0 < t.length && (n = new bs("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var br = null, Gr = null;
    function lh(e) {
        yd(e, 0);
    }
    function Sl(e) {
        var t = Fn(e);
        if (jc(t)) return e;
    }
    function ih(e, t) {
        if (e === "change") return t;
    }
    var ad = !1;
    if (It) {
        var Ql;
        if (It) {
            var ql = "oninput" in document;
            if (!ql) {
                var Wa = document.createElement("div");
                Wa.setAttribute("oninput", "return;"), ql = typeof Wa.oninput == "function";
            }
            Ql = ql;
        } else Ql = !1;
        ad = Ql && (!document.documentMode || 9 < document.documentMode);
    }
    function Va() {
        br && (br.detachEvent("onpropertychange", ud), Gr = br = null);
    }
    function ud(e) {
        if (e.propertyName === "value" && Sl(Gr)) {
            var t = [];
            sd(t, Gr, e, Ts(e)), Bc(lh, t);
        }
    }
    function sh(e, t, n) {
        e === "focusin" ? (Va(), br = t, Gr = n, br.attachEvent("onpropertychange", ud)) : e === "focusout" && Va();
    }
    function ah(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(Gr);
    }
    function uh(e, t) {
        if (e === "click") return Sl(t);
    }
    function ch(e, t) {
        if (e === "input" || e === "change") return Sl(t);
    }
    function dh(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var pt = typeof Object.is == "function" ? Object.is : dh;
    function Hr(e, t) {
        if (pt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!xi.call(t, o) || !pt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Ga(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Ha(e, t) {
        var n = Ga(e);
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
            n = Ga(n);
        }
    }
    function cd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function dd() {
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
    function Ls(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function fh(e) {
        var t = dd(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && cd(n.ownerDocument.documentElement, n)) {
            if (r !== null && Ls(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Ha(n, l);
                    var i = Ha(n, r);
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
    var ph = It && "documentMode" in document && 11 >= document.documentMode, Dn = null, Oi = null, Pr = null, Di = !1;
    function Ka(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Di || Dn == null || Dn !== Vo(r) || (r = Dn, "selectionStart" in r && Ls(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Pr && Hr(Pr, r) || (Pr = r, r = Xo(Oi, "onSelect"), 0 < r.length && (t = new bs("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Dn)));
    }
    function vo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var An = {
        animationend: vo("Animation", "AnimationEnd"),
        animationiteration: vo("Animation", "AnimationIteration"),
        animationstart: vo("Animation", "AnimationStart"),
        transitionend: vo("Transition", "TransitionEnd")
    }, Yl = {}, fd = {};
    It && (fd = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);
    function kl(e) {
        if (Yl[e]) return Yl[e];
        if (!An[e]) return e;
        var t = An[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in fd) return Yl[e] = t[n];
        return e;
    }
    var pd = kl("animationend"), md = kl("animationiteration"), hd = kl("animationstart"), gd = kl("transitionend"), xd = new Map, Qa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function en(e, t) {
        xd.set(e, t), En(t, [
            e
        ]);
    }
    for(var Xl = 0; Xl < Qa.length; Xl++){
        var Zl = Qa[Xl], mh = Zl.toLowerCase(), hh = Zl[0].toUpperCase() + Zl.slice(1);
        en(mh, "on" + hh);
    }
    en(pd, "onAnimationEnd");
    en(md, "onAnimationIteration");
    en(hd, "onAnimationStart");
    en("dblclick", "onDoubleClick");
    en("focusin", "onFocus");
    en("focusout", "onBlur");
    en(gd, "onTransitionEnd");
    Jn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    Jn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    Jn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    Jn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    En("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
    function qa(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, mm(r, t, void 0, e), e.currentTarget = null;
    }
    function yd(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    qa(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    qa(o, s, u), l = a;
                }
            }
        }
        if (Ho) throw e = bi, Ho = !1, bi = null, e;
    }
    function ee(e, t) {
        var n = t[Bi];
        n === void 0 && (n = t[Bi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (vd(t, e, 2, !1), n.add(r));
    }
    function Jl(e, t, n) {
        var r = 0;
        t && (r |= 4), vd(n, e, r, t);
    }
    var wo = "_reactListening" + Math.random().toString(36).slice(2);
    function Kr(e) {
        if (!e[wo]) {
            e[wo] = !0, Tc.forEach(function(n) {
                n !== "selectionchange" && (gh.has(n) || Jl(n, !1, e), Jl(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[wo] || (t[wo] = !0, Jl("selectionchange", !1, t));
        }
    }
    function vd(e, t, n, r) {
        switch(nd(t)){
            case 1:
                var o = Rm;
                break;
            case 4:
                o = jm;
                break;
            default:
                o = Rs;
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
                    if (i = pn(s), i === null) return;
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
            var u = l, d = Ts(n), c = [];
            e: {
                var f = xd.get(e);
                if (f !== void 0) {
                    var g = bs, m = e;
                    switch(e){
                        case "keypress":
                            if (Mo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            g = Hm;
                            break;
                        case "focusin":
                            m = "focus", g = Kl;
                            break;
                        case "focusout":
                            m = "blur", g = Kl;
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
                            g = Da;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            g = Mm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            g = qm;
                            break;
                        case pd:
                        case md:
                        case hd:
                            g = Dm;
                            break;
                        case gd:
                            g = Xm;
                            break;
                        case "scroll":
                            g = bm;
                            break;
                        case "wheel":
                            g = Jm;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            g = Fm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            g = Fa;
                    }
                    var w = (t & 4) !== 0, y = !w && e === "scroll", x = w ? f !== null ? f + "Capture" : null : f;
                    w = [];
                    for(var p = u, h; p !== null;){
                        h = p;
                        var S = h.stateNode;
                        if (h.tag === 5 && S !== null && (h = S, x !== null && (S = Ur(p, x), S != null && w.push(Qr(p, S, h)))), y) break;
                        p = p.return;
                    }
                    0 < w.length && (f = new g(f, m, null, n, d), c.push({
                        event: f,
                        listeners: w
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (f = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", f && n !== Ni && (m = n.relatedTarget || n.fromElement) && (pn(m) || m[zt])) break e;
                    if ((g || f) && (f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window, g ? (m = n.relatedTarget || n.toElement, g = u, m = m ? pn(m) : null, m !== null && (y = Tn(m), m !== y || m.tag !== 5 && m.tag !== 6) && (m = null)) : (g = null, m = u), g !== m)) {
                        if (w = Da, S = "onMouseLeave", x = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = Fa, S = "onPointerLeave", x = "onPointerEnter", p = "pointer"), y = g == null ? f : Fn(g), h = m == null ? f : Fn(m), f = new w(S, p + "leave", g, n, d), f.target = y, f.relatedTarget = h, S = null, pn(d) === u && (w = new w(x, p + "enter", m, n, d), w.target = h, w.relatedTarget = y, S = w), y = S, g && m) t: {
                            for(w = g, x = m, p = 0, h = w; h; h = jn(h))p++;
                            for(h = 0, S = x; S; S = jn(S))h++;
                            for(; 0 < p - h;)w = jn(w), p--;
                            for(; 0 < h - p;)x = jn(x), h--;
                            for(; p--;){
                                if (w === x || x !== null && w === x.alternate) break t;
                                w = jn(w), x = jn(x);
                            }
                            w = null;
                        }
                        else w = null;
                        g !== null && Ya(c, f, g, w, !1), m !== null && y !== null && Ya(c, y, m, w, !0);
                    }
                }
                e: {
                    if (f = u ? Fn(u) : window, g = f.nodeName && f.nodeName.toLowerCase(), g === "select" || g === "input" && f.type === "file") var k = ih;
                    else if (Ba(f)) if (ad) k = ch;
                    else {
                        k = ah;
                        var z = sh;
                    }
                    else (g = f.nodeName) && g.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = uh);
                    if (k && (k = k(e, u))) {
                        sd(c, k, n, d);
                        break e;
                    }
                    z && z(e, f, u), e === "focusout" && (z = f._wrapperState) && z.controlled && f.type === "number" && Ci(f, "number", f.value);
                }
                switch(z = u ? Fn(u) : window, e){
                    case "focusin":
                        (Ba(z) || z.contentEditable === "true") && (Dn = z, Oi = u, Pr = null);
                        break;
                    case "focusout":
                        Pr = Oi = Dn = null;
                        break;
                    case "mousedown":
                        Di = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Di = !1, Ka(c, n, d);
                        break;
                    case "selectionchange":
                        if (ph) break;
                    case "keydown":
                    case "keyup":
                        Ka(c, n, d);
                }
                var N;
                if (Ms) e: {
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
                else On ? ld(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
                _ && (od && n.locale !== "ko" && (On || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && On && (N = rd()) : (Ut = d, js = "value" in Ut ? Ut.value : Ut.textContent, On = !0)), z = Xo(u, _), 0 < z.length && (_ = new Aa(_, e, null, n, d), c.push({
                    event: _,
                    listeners: z
                }), N ? _.data = N : (N = id(n), N !== null && (_.data = N)))), (N = th ? nh(e, n) : rh(e, n)) && (u = Xo(u, "onBeforeInput"), 0 < u.length && (d = new Aa("onBeforeInput", "beforeinput", null, n, d), c.push({
                    event: d,
                    listeners: u
                }), d.data = N));
            }
            yd(c, t);
        });
    }
    function Qr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function Xo(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Ur(e, n), l != null && r.unshift(Qr(e, l, o)), l = Ur(e, t), l != null && r.push(Qr(e, l, o))), e = e.return;
        }
        return r;
    }
    function jn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Ya(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = Ur(n, l), a != null && i.unshift(Qr(n, a, s))) : o || (a = Ur(n, l), a != null && i.push(Qr(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var xh = /\r\n?/g, yh = /\u0000|\uFFFD/g;
    function Xa(e) {
        return (typeof e == "string" ? e : "" + e).replace(xh, `
`).replace(yh, "");
    }
    function So(e, t, n) {
        if (t = Xa(t), Xa(e) !== t && n) throw Error(I(425));
    }
    function Zo() {}
    var Ai = null, Fi = null;
    function $i(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Ui = typeof setTimeout == "function" ? setTimeout : void 0, vh = typeof clearTimeout == "function" ? clearTimeout : void 0, Za = typeof Promise == "function" ? Promise : void 0, wh = typeof queueMicrotask == "function" ? queueMicrotask : typeof Za < "u" ? function(e) {
        return Za.resolve(null).then(e).catch(Sh);
    } : Ui;
    function Sh(e) {
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
                    e.removeChild(o), Vr(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        Vr(t);
    }
    function Ht(e) {
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
    function Ja(e) {
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
    var ur = Math.random().toString(36).slice(2), xt = "__reactFiber$" + ur, qr = "__reactProps$" + ur, zt = "__reactContainer$" + ur, Bi = "__reactEvents$" + ur, kh = "__reactListeners$" + ur, _h = "__reactHandles$" + ur;
    function pn(e) {
        var t = e[xt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[zt] || n[xt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = Ja(e); e !== null;){
                    if (n = e[xt]) return n;
                    e = Ja(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function so(e) {
        return e = e[xt] || e[zt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Fn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(I(33));
    }
    function _l(e) {
        return e[qr] || null;
    }
    var Wi = [], $n = -1;
    function tn(e) {
        return {
            current: e
        };
    }
    function te(e) {
        0 > $n || (e.current = Wi[$n], Wi[$n] = null, $n--);
    }
    function J(e, t) {
        $n++, Wi[$n] = e.current, e.current = t;
    }
    var Jt = {}, Ne = tn(Jt), Be = tn(!1), wn = Jt;
    function er(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Jt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function We(e) {
        return e = e.childContextTypes, e != null;
    }
    function Jo() {
        te(Be), te(Ne);
    }
    function eu(e, t, n) {
        if (Ne.current !== Jt) throw Error(I(168));
        J(Ne, t), J(Be, n);
    }
    function wd(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(I(108, sm(e) || "Unknown", o));
        return se({}, n, r);
    }
    function el(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, wn = Ne.current, J(Ne, e), J(Be, Be.current), !0;
    }
    function tu(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(I(169));
        n ? (e = wd(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, te(Be), te(Ne), J(Ne, e)) : te(Be), J(Be, n);
    }
    var _t = null, Cl = !1, ni = !1;
    function Sd(e) {
        _t === null ? _t = [
            e
        ] : _t.push(e);
    }
    function Ch(e) {
        Cl = !0, Sd(e);
    }
    function nn() {
        if (!ni && _t !== null) {
            ni = !0;
            var e = 0, t = X;
            try {
                var n = _t;
                for(X = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                _t = null, Cl = !1;
            } catch (o) {
                throw _t !== null && (_t = _t.slice(e + 1)), Hc(Is, nn), o;
            } finally{
                X = t, ni = !1;
            }
        }
        return null;
    }
    var Un = [], Bn = 0, tl = null, nl = 0, Ze = [], Je = 0, Sn = null, Ct = 1, Et = "";
    function cn(e, t) {
        Un[Bn++] = nl, Un[Bn++] = tl, tl = e, nl = t;
    }
    function kd(e, t, n) {
        Ze[Je++] = Ct, Ze[Je++] = Et, Ze[Je++] = Sn, Sn = e;
        var r = Ct;
        e = Et;
        var o = 32 - dt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - dt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Ct = 1 << 32 - dt(t) + o | n << o | r, Et = l + e;
        } else Ct = 1 << l | n << o | r, Et = e;
    }
    function Os(e) {
        e.return !== null && (cn(e, 1), kd(e, 1, 0));
    }
    function Ds(e) {
        for(; e === tl;)tl = Un[--Bn], Un[Bn] = null, nl = Un[--Bn], Un[Bn] = null;
        for(; e === Sn;)Sn = Ze[--Je], Ze[Je] = null, Et = Ze[--Je], Ze[Je] = null, Ct = Ze[--Je], Ze[Je] = null;
    }
    var Qe = null, Ke = null, re = !1, ut = null;
    function _d(e, t) {
        var n = tt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function nu(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = Ht(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Sn !== null ? {
                    id: Ct,
                    overflow: Et
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, Ke = null, !0) : !1;
            default:
                return !1;
        }
    }
    function Vi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Gi(e) {
        if (re) {
            var t = Ke;
            if (t) {
                var n = t;
                if (!nu(e, t)) {
                    if (Vi(e)) throw Error(I(418));
                    t = Ht(n.nextSibling);
                    var r = Qe;
                    t && nu(e, t) ? _d(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Qe = e);
                }
            } else {
                if (Vi(e)) throw Error(I(418));
                e.flags = e.flags & -4097 | 2, re = !1, Qe = e;
            }
        }
    }
    function ru(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Qe = e;
    }
    function ko(e) {
        if (e !== Qe) return !1;
        if (!re) return ru(e), re = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps)), t && (t = Ke)) {
            if (Vi(e)) throw Cd(), Error(I(418));
            for(; t;)_d(e, t), t = Ht(t.nextSibling);
        }
        if (ru(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Ke = Ht(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                Ke = null;
            }
        } else Ke = Qe ? Ht(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Cd() {
        for(var e = Ke; e;)e = Ht(e.nextSibling);
    }
    function tr() {
        Ke = Qe = null, re = !1;
    }
    function As(e) {
        ut === null ? ut = [
            e
        ] : ut.push(e);
    }
    var Eh = jt.ReactCurrentBatchConfig;
    function xr(e, t, n) {
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
    function _o(e, t) {
        throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function ou(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Ed(e) {
        function t(x, p) {
            if (e) {
                var h = x.deletions;
                h === null ? (x.deletions = [
                    p
                ], x.flags |= 16) : h.push(p);
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
            return x = Yt(x, p), x.index = 0, x.sibling = null, x;
        }
        function l(x, p, h) {
            return x.index = h, e ? (h = x.alternate, h !== null ? (h = h.index, h < p ? (x.flags |= 2, p) : h) : (x.flags |= 2, p)) : (x.flags |= 1048576, p);
        }
        function i(x) {
            return e && x.alternate === null && (x.flags |= 2), x;
        }
        function s(x, p, h, S) {
            return p === null || p.tag !== 6 ? (p = ui(h, x.mode, S), p.return = x, p) : (p = o(p, h), p.return = x, p);
        }
        function a(x, p, h, S) {
            var k = h.type;
            return k === Ln ? d(x, p, h.props.children, S, h.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Dt && ou(k) === p.type) ? (S = o(p, h.props), S.ref = xr(x, p, h), S.return = x, S) : (S = Uo(h.type, h.key, h.props, null, x.mode, S), S.ref = xr(x, p, h), S.return = x, S);
        }
        function u(x, p, h, S) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== h.containerInfo || p.stateNode.implementation !== h.implementation ? (p = ci(h, x.mode, S), p.return = x, p) : (p = o(p, h.children || []), p.return = x, p);
        }
        function d(x, p, h, S, k) {
            return p === null || p.tag !== 7 ? (p = xn(h, x.mode, S, k), p.return = x, p) : (p = o(p, h), p.return = x, p);
        }
        function c(x, p, h) {
            if (typeof p == "string" && p !== "" || typeof p == "number") return p = ui("" + p, x.mode, h), p.return = x, p;
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case fo:
                        return h = Uo(p.type, p.key, p.props, null, x.mode, h), h.ref = xr(x, null, p), h.return = x, h;
                    case Mn:
                        return p = ci(p, x.mode, h), p.return = x, p;
                    case Dt:
                        var S = p._init;
                        return c(x, S(p._payload), h);
                }
                if (Cr(p) || fr(p)) return p = xn(p, x.mode, h, null), p.return = x, p;
                _o(x, p);
            }
            return null;
        }
        function f(x, p, h, S) {
            var k = p !== null ? p.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number") return k !== null ? null : s(x, p, "" + h, S);
            if (typeof h == "object" && h !== null) {
                switch(h.$$typeof){
                    case fo:
                        return h.key === k ? a(x, p, h, S) : null;
                    case Mn:
                        return h.key === k ? u(x, p, h, S) : null;
                    case Dt:
                        return k = h._init, f(x, p, k(h._payload), S);
                }
                if (Cr(h) || fr(h)) return k !== null ? null : d(x, p, h, S, null);
                _o(x, h);
            }
            return null;
        }
        function g(x, p, h, S, k) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return x = x.get(h) || null, s(p, x, "" + S, k);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case fo:
                        return x = x.get(S.key === null ? h : S.key) || null, a(p, x, S, k);
                    case Mn:
                        return x = x.get(S.key === null ? h : S.key) || null, u(p, x, S, k);
                    case Dt:
                        var z = S._init;
                        return g(x, p, h, z(S._payload), k);
                }
                if (Cr(S) || fr(S)) return x = x.get(h) || null, d(p, x, S, k, null);
                _o(p, S);
            }
            return null;
        }
        function m(x, p, h, S) {
            for(var k = null, z = null, N = p, _ = p = 0, D = null; N !== null && _ < h.length; _++){
                N.index > _ ? (D = N, N = null) : D = N.sibling;
                var O = f(x, N, h[_], S);
                if (O === null) {
                    N === null && (N = D);
                    break;
                }
                e && N && O.alternate === null && t(x, N), p = l(O, p, _), z === null ? k = O : z.sibling = O, z = O, N = D;
            }
            if (_ === h.length) return n(x, N), re && cn(x, _), k;
            if (N === null) {
                for(; _ < h.length; _++)N = c(x, h[_], S), N !== null && (p = l(N, p, _), z === null ? k = N : z.sibling = N, z = N);
                return re && cn(x, _), k;
            }
            for(N = r(x, N); _ < h.length; _++)D = g(N, x, _, h[_], S), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? _ : D.key), p = l(D, p, _), z === null ? k = D : z.sibling = D, z = D);
            return e && N.forEach(function(q) {
                return t(x, q);
            }), re && cn(x, _), k;
        }
        function w(x, p, h, S) {
            var k = fr(h);
            if (typeof k != "function") throw Error(I(150));
            if (h = k.call(h), h == null) throw Error(I(151));
            for(var z = k = null, N = p, _ = p = 0, D = null, O = h.next(); N !== null && !O.done; _++, O = h.next()){
                N.index > _ ? (D = N, N = null) : D = N.sibling;
                var q = f(x, N, O.value, S);
                if (q === null) {
                    N === null && (N = D);
                    break;
                }
                e && N && q.alternate === null && t(x, N), p = l(q, p, _), z === null ? k = q : z.sibling = q, z = q, N = D;
            }
            if (O.done) return n(x, N), re && cn(x, _), k;
            if (N === null) {
                for(; !O.done; _++, O = h.next())O = c(x, O.value, S), O !== null && (p = l(O, p, _), z === null ? k = O : z.sibling = O, z = O);
                return re && cn(x, _), k;
            }
            for(N = r(x, N); !O.done; _++, O = h.next())O = g(N, x, _, O.value, S), O !== null && (e && O.alternate !== null && N.delete(O.key === null ? _ : O.key), p = l(O, p, _), z === null ? k = O : z.sibling = O, z = O);
            return e && N.forEach(function(ae) {
                return t(x, ae);
            }), re && cn(x, _), k;
        }
        function y(x, p, h, S) {
            if (typeof h == "object" && h !== null && h.type === Ln && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                switch(h.$$typeof){
                    case fo:
                        e: {
                            for(var k = h.key, z = p; z !== null;){
                                if (z.key === k) {
                                    if (k = h.type, k === Ln) {
                                        if (z.tag === 7) {
                                            n(x, z.sibling), p = o(z, h.props.children), p.return = x, x = p;
                                            break e;
                                        }
                                    } else if (z.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Dt && ou(k) === z.type) {
                                        n(x, z.sibling), p = o(z, h.props), p.ref = xr(x, z, h), p.return = x, x = p;
                                        break e;
                                    }
                                    n(x, z);
                                    break;
                                } else t(x, z);
                                z = z.sibling;
                            }
                            h.type === Ln ? (p = xn(h.props.children, x.mode, S, h.key), p.return = x, x = p) : (S = Uo(h.type, h.key, h.props, null, x.mode, S), S.ref = xr(x, p, h), S.return = x, x = S);
                        }
                        return i(x);
                    case Mn:
                        e: {
                            for(z = h.key; p !== null;){
                                if (p.key === z) if (p.tag === 4 && p.stateNode.containerInfo === h.containerInfo && p.stateNode.implementation === h.implementation) {
                                    n(x, p.sibling), p = o(p, h.children || []), p.return = x, x = p;
                                    break e;
                                } else {
                                    n(x, p);
                                    break;
                                }
                                else t(x, p);
                                p = p.sibling;
                            }
                            p = ci(h, x.mode, S), p.return = x, x = p;
                        }
                        return i(x);
                    case Dt:
                        return z = h._init, y(x, p, z(h._payload), S);
                }
                if (Cr(h)) return m(x, p, h, S);
                if (fr(h)) return w(x, p, h, S);
                _o(x, h);
            }
            return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, p !== null && p.tag === 6 ? (n(x, p.sibling), p = o(p, h), p.return = x, x = p) : (n(x, p), p = ui(h, x.mode, S), p.return = x, x = p), i(x)) : n(x, p);
        }
        return y;
    }
    var nr = Ed(!0), Td = Ed(!1), rl = tn(null), ol = null, Wn = null, Fs = null;
    function $s() {
        Fs = Wn = ol = null;
    }
    function Us(e) {
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
    function Yn(e, t) {
        ol = e, Fs = Wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), e.firstContext = null);
    }
    function ot(e) {
        var t = e._currentValue;
        if (Fs !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Wn === null) {
            if (ol === null) throw Error(I(308));
            Wn = e, ol.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Wn = Wn.next = e;
        return t;
    }
    var mn = null;
    function Bs(e) {
        mn === null ? mn = [
            e
        ] : mn.push(e);
    }
    function Id(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, Bs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Nt(e, r);
    }
    function Nt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var At = !1;
    function Ws(e) {
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
    function zd(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Tt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function Kt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, K & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Nt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, Bs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Nt(e, n);
    }
    function Lo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, zs(e, n);
        }
    }
    function lu(e, t) {
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
        At = !1;
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
                        var m = e, w = s;
                        switch(f = t, g = n, w.tag){
                            case 1:
                                if (m = w.payload, typeof m == "function") {
                                    c = m.call(g, c, f);
                                    break e;
                                }
                                c = m;
                                break e;
                            case 3:
                                m.flags = m.flags & -65537 | 128;
                            case 0:
                                if (m = w.payload, f = typeof m == "function" ? m.call(g, c, f) : m, f == null) break e;
                                c = se({}, c, f);
                                break e;
                            case 2:
                                At = !0;
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
            _n |= i, e.lanes = i, e.memoizedState = c;
        }
    }
    function iu(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(I(191, o));
                o.call(r);
            }
        }
    }
    var ao = {}, vt = tn(ao), Yr = tn(ao), Xr = tn(ao);
    function hn(e) {
        if (e === ao) throw Error(I(174));
        return e;
    }
    function Vs(e, t) {
        switch(J(Xr, t), J(Yr, e), J(vt, ao), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ti(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ti(t, e);
        }
        te(vt), J(vt, t);
    }
    function rr() {
        te(vt), te(Yr), te(Xr);
    }
    function Nd(e) {
        hn(Xr.current);
        var t = hn(vt.current), n = Ti(t, e.type);
        t !== n && (J(Yr, e), J(vt, n));
    }
    function Gs(e) {
        Yr.current === e && (te(vt), te(Yr));
    }
    var le = tn(0);
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
    function Hs() {
        for(var e = 0; e < ri.length; e++)ri[e]._workInProgressVersionPrimary = null;
        ri.length = 0;
    }
    var Oo = jt.ReactCurrentDispatcher, oi = jt.ReactCurrentBatchConfig, kn = 0, ie = null, xe = null, ve = null, sl = !1, Mr = !1, Zr = 0, Th = 0;
    function Te() {
        throw Error(I(321));
    }
    function Ks(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!pt(e[n], t[n])) return !1;
        return !0;
    }
    function Qs(e, t, n, r, o, l) {
        if (kn = l, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Oo.current = e === null || e.memoizedState === null ? Rh : jh, e = n(r, o), Mr) {
            l = 0;
            do {
                if (Mr = !1, Zr = 0, 25 <= l) throw Error(I(301));
                l += 1, ve = xe = null, t.updateQueue = null, Oo.current = bh, e = n(r, o);
            }while (Mr);
        }
        if (Oo.current = al, t = xe !== null && xe.next !== null, kn = 0, ve = xe = ie = null, sl = !1, t) throw Error(I(300));
        return e;
    }
    function qs() {
        var e = Zr !== 0;
        return Zr = 0, e;
    }
    function ht() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ve === null ? ie.memoizedState = ve = e : ve = ve.next = e, ve;
    }
    function lt() {
        if (xe === null) {
            var e = ie.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = xe.next;
        var t = ve === null ? ie.memoizedState : ve.next;
        if (t !== null) ve = t, xe = e;
        else {
            if (e === null) throw Error(I(310));
            xe = e, e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null
            }, ve === null ? ie.memoizedState = ve = e : ve = ve.next = e;
        }
        return ve;
    }
    function Jr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function li(e) {
        var t = lt(), n = t.queue;
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
                var d = u.lane;
                if ((kn & d) === d) a !== null && (a = a.next = {
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
                    a === null ? (s = a = c, i = r) : a = a.next = c, ie.lanes |= d, _n |= d;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, pt(r, t.memoizedState) || ($e = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ie.lanes |= l, _n |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function ii(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            pt(l, t.memoizedState) || ($e = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Rd() {}
    function jd(e, t) {
        var n = ie, r = lt(), o = t(), l = !pt(r.memoizedState, o);
        if (l && (r.memoizedState = o, $e = !0), r = r.queue, Ys(Md.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || ve !== null && ve.memoizedState.tag & 1) {
            if (n.flags |= 2048, eo(9, Pd.bind(null, n, r, o, t), void 0, null), we === null) throw Error(I(349));
            kn & 30 || bd(n, t, o);
        }
        return o;
    }
    function bd(e, t, n) {
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
    function Pd(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Ld(t) && Od(e);
    }
    function Md(e, t, n) {
        return n(function() {
            Ld(t) && Od(e);
        });
    }
    function Ld(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !pt(e, n);
        } catch  {
            return !0;
        }
    }
    function Od(e) {
        var t = Nt(e, 1);
        t !== null && ft(t, e, 1, -1);
    }
    function su(e) {
        var t = ht();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Jr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Nh.bind(null, ie, e), [
            t.memoizedState,
            e
        ];
    }
    function eo(e, t, n, r) {
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
    function Dd() {
        return lt().memoizedState;
    }
    function Do(e, t, n, r) {
        var o = ht();
        ie.flags |= e, o.memoizedState = eo(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function El(e, t, n, r) {
        var o = lt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (xe !== null) {
            var i = xe.memoizedState;
            if (l = i.destroy, r !== null && Ks(r, i.deps)) {
                o.memoizedState = eo(t, n, l, r);
                return;
            }
        }
        ie.flags |= e, o.memoizedState = eo(1 | t, n, l, r);
    }
    function au(e, t) {
        return Do(8390656, 8, e, t);
    }
    function Ys(e, t) {
        return El(2048, 8, e, t);
    }
    function Ad(e, t) {
        return El(4, 2, e, t);
    }
    function Fd(e, t) {
        return El(4, 4, e, t);
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
        ]) : null, El(4, 4, $d.bind(null, t, e), n);
    }
    function Xs() {}
    function Bd(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Wd(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Ks(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Vd(e, t, n) {
        return kn & 21 ? (pt(n, t) || (n = qc(), ie.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $e = !0), e.memoizedState = n);
    }
    function Ih(e, t) {
        var n = X;
        X = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = oi.transition;
        oi.transition = {};
        try {
            e(!1), t();
        } finally{
            X = n, oi.transition = r;
        }
    }
    function Gd() {
        return lt().memoizedState;
    }
    function zh(e, t, n) {
        var r = qt(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Hd(e)) Kd(t, n);
        else if (n = Id(e, t, n, r), n !== null) {
            var o = Me();
            ft(n, e, r, o), Qd(n, t, r);
        }
    }
    function Nh(e, t, n) {
        var r = qt(e), o = {
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
                if (o.hasEagerState = !0, o.eagerState = s, pt(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, Bs(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Id(e, t, o, r), n !== null && (o = Me(), ft(n, e, r, o), Qd(n, t, r));
        }
    }
    function Hd(e) {
        var t = e.alternate;
        return e === ie || t !== null && t === ie;
    }
    function Kd(e, t) {
        Mr = sl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Qd(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, zs(e, n);
        }
    }
    var al = {
        readContext: ot,
        useCallback: Te,
        useContext: Te,
        useEffect: Te,
        useImperativeHandle: Te,
        useInsertionEffect: Te,
        useLayoutEffect: Te,
        useMemo: Te,
        useReducer: Te,
        useRef: Te,
        useState: Te,
        useDebugValue: Te,
        useDeferredValue: Te,
        useTransition: Te,
        useMutableSource: Te,
        useSyncExternalStore: Te,
        useId: Te,
        unstable_isNewReconciler: !1
    }, Rh = {
        readContext: ot,
        useCallback: function(e, t) {
            return ht().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: ot,
        useEffect: au,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, Do(4194308, 4, $d.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return Do(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return Do(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = ht();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = ht();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = zh.bind(null, ie, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = ht();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: su,
        useDebugValue: Xs,
        useDeferredValue: function(e) {
            return ht().memoizedState = e;
        },
        useTransition: function() {
            var e = su(!1), t = e[0];
            return e = Ih.bind(null, e[1]), ht().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ie, o = ht();
            if (re) {
                if (n === void 0) throw Error(I(407));
                n = n();
            } else {
                if (n = t(), we === null) throw Error(I(349));
                kn & 30 || bd(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, au(Md.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, eo(9, Pd.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = ht(), t = we.identifierPrefix;
            if (re) {
                var n = Et, r = Ct;
                n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Th++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, jh = {
        readContext: ot,
        useCallback: Bd,
        useContext: ot,
        useEffect: Ys,
        useImperativeHandle: Ud,
        useInsertionEffect: Ad,
        useLayoutEffect: Fd,
        useMemo: Wd,
        useReducer: li,
        useRef: Dd,
        useState: function() {
            return li(Jr);
        },
        useDebugValue: Xs,
        useDeferredValue: function(e) {
            var t = lt();
            return Vd(t, xe.memoizedState, e);
        },
        useTransition: function() {
            var e = li(Jr)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Rd,
        useSyncExternalStore: jd,
        useId: Gd,
        unstable_isNewReconciler: !1
    }, bh = {
        readContext: ot,
        useCallback: Bd,
        useContext: ot,
        useEffect: Ys,
        useImperativeHandle: Ud,
        useInsertionEffect: Ad,
        useLayoutEffect: Fd,
        useMemo: Wd,
        useReducer: ii,
        useRef: Dd,
        useState: function() {
            return ii(Jr);
        },
        useDebugValue: Xs,
        useDeferredValue: function(e) {
            var t = lt();
            return xe === null ? t.memoizedState = e : Vd(t, xe.memoizedState, e);
        },
        useTransition: function() {
            var e = ii(Jr)[0], t = lt().memoizedState;
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
    function st(e, t) {
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
            return (e = e._reactInternals) ? Tn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = qt(e), l = Tt(r, o);
            l.payload = t, n != null && (l.callback = n), t = Kt(e, l, o), t !== null && (ft(t, e, o, r), Lo(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = qt(e), l = Tt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Kt(e, l, o), t !== null && (ft(t, e, o, r), Lo(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Me(), r = qt(e), o = Tt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = Kt(e, o, r), t !== null && (ft(t, e, r, n), Lo(t, e, r));
        }
    };
    function uu(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(o, l) : !0;
    }
    function qd(e, t, n) {
        var r = !1, o = Jt, l = t.contextType;
        return typeof l == "object" && l !== null ? l = ot(l) : (o = We(t) ? wn : Ne.current, r = t.contextTypes, l = (r = r != null) ? er(e, o) : Jt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Tl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function cu(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
    }
    function Qi(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, Ws(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = ot(l) : (l = We(t) ? wn : Ne.current, o.context = er(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ki(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Tl.enqueueReplaceState(o, o.state, null), ll(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function or(e, t) {
        try {
            var n = "", r = t;
            do n += im(r), r = r.return;
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
    function Yd(e, t, n) {
        n = Tt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            cl || (cl = !0, ls = r), qi(e, t);
        }, n;
    }
    function Xd(e, t, n) {
        n = Tt(-1, n), n.tag = 3;
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
            qi(e, t), typeof r != "function" && (Qt === null ? Qt = new Set([
                this
            ]) : Qt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function du(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Ph;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Kh.bind(null, e, t, n), t.then(e, e));
    }
    function fu(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function pu(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Kt(n, t, 1))), n.lanes |= 1), e);
    }
    var Mh = jt.ReactCurrentOwner, $e = !1;
    function be(e, t, n, r) {
        t.child = e === null ? Td(t, null, n, r) : nr(t, e.child, n, r);
    }
    function mu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return Yn(t, o), r = Qs(e, t, n, r, l, o), n = qs(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (re && n && Os(t), t.flags |= 1, be(e, t, r, o), t.child);
    }
    function hu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !la(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Zd(e, t, l, r, o)) : (e = Uo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Hr, n(i, r) && e.ref === t.ref) return Rt(e, t, o);
        }
        return t.flags |= 1, e = Yt(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Zd(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Hr(l, r) && e.ref === t.ref) if ($e = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && ($e = !0);
            else return t.lanes = e.lanes, Rt(e, t, o);
        }
        return Yi(e, t, n, r, o);
    }
    function Jd(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, J(Gn, He), He |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, J(Gn, He), He |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, J(Gn, He), He |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, J(Gn, He), He |= r;
        return be(e, t, o, n), t.child;
    }
    function ef(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Yi(e, t, n, r, o) {
        var l = We(n) ? wn : Ne.current;
        return l = er(t, l), Yn(t, o), n = Qs(e, t, n, r, l, o), r = qs(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (re && r && Os(t), t.flags |= 1, be(e, t, n, o), t.child);
    }
    function gu(e, t, n, r, o) {
        if (We(n)) {
            var l = !0;
            el(t);
        } else l = !1;
        if (Yn(t, o), t.stateNode === null) Ao(e, t), qd(t, n, r), Qi(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = ot(u) : (u = We(n) ? wn : Ne.current, u = er(t, u));
            var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && cu(t, i, r, u), At = !1;
            var f = t.memoizedState;
            i.state = f, ll(t, r, i, o), a = t.memoizedState, s !== r || f !== a || Be.current || At ? (typeof d == "function" && (Ki(t, n, d, r), a = t.memoizedState), (s = At || uu(t, n, s, r, f, a, u)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, zd(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : st(t.type, s), i.props = u, c = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = We(n) ? wn : Ne.current, a = er(t, a));
            var g = n.getDerivedStateFromProps;
            (d = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || f !== a) && cu(t, i, r, a), At = !1, f = t.memoizedState, i.state = f, ll(t, r, i, o);
            var m = t.memoizedState;
            s !== c || f !== m || Be.current || At ? (typeof g == "function" && (Ki(t, n, g, r), m = t.memoizedState), (u = At || uu(t, n, u, r, f, m, a) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, m, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, m, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), i.props = r, i.state = m, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Xi(e, t, n, r, l, o);
    }
    function Xi(e, t, n, r, o, l) {
        ef(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && tu(t, n, !1), Rt(e, t, l);
        r = t.stateNode, Mh.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = nr(t, e.child, null, l), t.child = nr(t, null, s, l)) : be(e, t, s, l), t.memoizedState = r.state, o && tu(t, n, !0), t.child;
    }
    function tf(e) {
        var t = e.stateNode;
        t.pendingContext ? eu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && eu(e, t.context, !1), Vs(e, t.containerInfo);
    }
    function xu(e, t, n, r, o) {
        return tr(), As(o), t.flags |= 256, be(e, t, n, r), t.child;
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
    function nf(e, t, n) {
        var r = t.pendingProps, o = le.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), J(le, o & 1), e === null) return Gi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Nl(i, r, 0, null), e = xn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ji(n), t.memoizedState = Zi, e) : Zs(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Lh(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Yt(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Yt(s, l) : (l = xn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ji(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Zi, r;
        }
        return l = e.child, e = l.sibling, r = Yt(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function Zs(e, t) {
        return t = Nl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Co(e, t, n, r) {
        return r !== null && As(r), nr(t, e.child, null, n), e = Zs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Lh(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = si(Error(I(422))), Co(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Nl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = xn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && nr(t, e.child, null, i), t.child.memoizedState = Ji(i), t.memoizedState = Zi, l);
        if (!(t.mode & 1)) return Co(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(I(419)), r = si(l, r, void 0), Co(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, $e || s) {
            if (r = we, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Nt(e, o), ft(r, e, o, -1));
            }
            return oa(), r = si(Error(I(421))), Co(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ke = Ht(o.nextSibling), Qe = t, re = !0, ut = null, e !== null && (Ze[Je++] = Ct, Ze[Je++] = Et, Ze[Je++] = Sn, Ct = e.id, Et = e.overflow, Sn = t), t = Zs(t, r.children), t.flags |= 4096, t);
    }
    function yu(e, t, n) {
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
    function rf(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (be(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && yu(e, n, t);
                else if (e.tag === 19) yu(e, n, t);
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
        if (J(le, r), !(t.mode & 1)) t.memoizedState = null;
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
    function Ao(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Rt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(I(153));
        if (t.child !== null) {
            for(e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function Oh(e, t, n) {
        switch(t.tag){
            case 3:
                tf(t), tr();
                break;
            case 5:
                Nd(t);
                break;
            case 1:
                We(t.type) && el(t);
                break;
            case 4:
                Vs(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                J(rl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (J(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? nf(e, t, n) : (J(le, le.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
                J(le, le.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return rf(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), J(le, le.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Jd(e, t, n);
        }
        return Rt(e, t, n);
    }
    var of, es, lf, sf;
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
    es = function() {};
    lf = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, hn(vt.current);
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
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
            for(u in r){
                var a = r[u];
                if (s = o?.[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in a)a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Fr.hasOwnProperty(u) ? (a != null && u === "onScroll" && ee("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    sf = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function yr(e, t) {
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
    function Ie(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function Dh(e, t, n) {
        var r = t.pendingProps;
        switch(Ds(t), t.tag){
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
                return Ie(t), null;
            case 1:
                return We(t.type) && Jo(), Ie(t), null;
            case 3:
                return r = t.stateNode, rr(), te(Be), te(Ne), Hs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ko(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (as(ut), ut = null))), es(e, t), Ie(t), null;
            case 5:
                Gs(t);
                var o = hn(Xr.current);
                if (n = t.type, e !== null && t.stateNode != null) lf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(I(166));
                        return Ie(t), null;
                    }
                    if (e = hn(vt.current), ko(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[xt] = t, r[qr] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < Tr.length; o++)ee(Tr[o], r);
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
                                Ia(r, l), ee("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, ee("invalid", r);
                                break;
                            case "textarea":
                                Na(r, l), ee("invalid", r);
                        }
                        Ii(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && So(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && So(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Fr.hasOwnProperty(i) && s != null && i === "onScroll" && ee("scroll", r);
                        }
                        switch(n){
                            case "input":
                                po(r), za(r, l, !0);
                                break;
                            case "textarea":
                                po(r), Ra(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = Zo);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[xt] = t, e[qr] = r, of(e, t, !1, !1), t.stateNode = e;
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
                                    for(o = 0; o < Tr.length; o++)ee(Tr[o], e);
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
                                    Ia(e, r), o = ki(e, r), ee("invalid", e);
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
                                    Na(e, r), o = Ei(e, r), ee("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Ii(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? Dc(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Lc(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && $r(e, a) : typeof a == "number" && $r(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Fr.hasOwnProperty(l) ? a != null && l === "onScroll" && ee("scroll", e) : a != null && ks(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    po(e), za(e, r, !1);
                                    break;
                                case "textarea":
                                    po(e), Ra(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + Zt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? Hn(e, !!r.multiple, l, !1) : r.defaultValue != null && Hn(e, !!r.multiple, r.defaultValue, !0);
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
                return Ie(t), null;
            case 6:
                if (e && t.stateNode != null) sf(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
                    if (n = hn(Xr.current), hn(vt.current), ko(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[xt] = t, (l = r.nodeValue !== n) && (e = Qe, e !== null)) switch(e.tag){
                            case 3:
                                So(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && So(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[xt] = t, t.stateNode = r;
                }
                return Ie(t), null;
            case 13:
                if (te(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (re && Ke !== null && t.mode & 1 && !(t.flags & 128)) Cd(), tr(), t.flags |= 98560, l = !1;
                    else if (l = ko(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(I(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(I(317));
                            l[xt] = t;
                        } else tr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Ie(t), l = !1;
                    } else ut !== null && (as(ut), ut = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ye === 0 && (ye = 3) : oa())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
            case 4:
                return rr(), es(e, t), e === null && Kr(t.stateNode.containerInfo), Ie(t), null;
            case 10:
                return Us(t.type._context), Ie(t), null;
            case 17:
                return We(t.type) && Jo(), Ie(t), null;
            case 19:
                if (te(le), l = t.memoizedState, l === null) return Ie(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) yr(l, !1);
                else {
                    if (ye !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = il(e), i !== null) {
                            for(t.flags |= 128, yr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return J(le, le.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && fe() > lr && (t.flags |= 128, r = !0, yr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = il(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !re) return Ie(t), null;
                    } else 2 * fe() - l.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, yr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = fe(), t.sibling = null, n = le.current, J(le, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
            case 22:
            case 23:
                return ra(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(I(156, t.tag));
    }
    function Ah(e, t) {
        switch(Ds(t), t.tag){
            case 1:
                return We(t.type) && Jo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return rr(), te(Be), te(Ne), Hs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return Gs(t), null;
            case 13:
                if (te(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(I(340));
                    tr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return te(le), null;
            case 4:
                return rr(), null;
            case 10:
                return Us(t.type._context), null;
            case 22:
            case 23:
                return ra(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Eo = !1, ze = !1, Fh = typeof WeakSet == "function" ? WeakSet : Set, j = null;
    function Vn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            ce(e, t, r);
        }
        else n.current = null;
    }
    function ts(e, t, n) {
        try {
            n();
        } catch (r) {
            ce(e, t, r);
        }
    }
    var vu = !1;
    function $h(e, t) {
        if (Ai = qo, e = dd(), Ls(e)) {
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
        }, qo = !1, j = t; j !== null;)if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else for(; j !== null;){
            t = j;
            try {
                var m = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (m !== null) {
                            var w = m.memoizedProps, y = m.memoizedState, x = t.stateNode, p = x.getSnapshotBeforeUpdate(t.elementType === t.type ? w : st(t.type, w), y);
                            x.__reactInternalSnapshotBeforeUpdate = p;
                        }
                        break;
                    case 3:
                        var h = t.stateNode.containerInfo;
                        h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
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
                ce(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, j = e;
                break;
            }
            j = t.return;
        }
        return m = vu, vu = !1, m;
    }
    function Lr(e, t, n) {
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
    function af(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, af(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xt], delete t[qr], delete t[Bi], delete t[kh], delete t[_h])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function uf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function wu(e) {
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
    var Se = null, at = !1;
    function bt(e, t, n) {
        for(n = n.child; n !== null;)cf(e, t, n), n = n.sibling;
    }
    function cf(e, t, n) {
        if (yt && typeof yt.onCommitFiberUnmount == "function") try {
            yt.onCommitFiberUnmount(vl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                ze || Vn(n, t);
            case 6:
                var r = Se, o = at;
                Se = null, bt(e, t, n), Se = r, at = o, Se !== null && (at ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
                break;
            case 18:
                Se !== null && (at ? (e = Se, n = n.stateNode, e.nodeType === 8 ? ti(e.parentNode, n) : e.nodeType === 1 && ti(e, n), Vr(e)) : ti(Se, n.stateNode));
                break;
            case 4:
                r = Se, o = at, Se = n.stateNode.containerInfo, at = !0, bt(e, t, n), Se = r, at = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && ts(n, t, i), o = o.next;
                    }while (o !== r);
                }
                bt(e, t, n);
                break;
            case 1:
                if (!ze && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    ce(n, t, s);
                }
                bt(e, t, n);
                break;
            case 21:
                bt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, bt(e, t, n), ze = r) : bt(e, t, n);
                break;
            default:
                bt(e, t, n);
        }
    }
    function Su(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Fh), t.forEach(function(r) {
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
                            Se = s.stateNode, at = !1;
                            break e;
                        case 3:
                            Se = s.stateNode.containerInfo, at = !0;
                            break e;
                        case 4:
                            Se = s.stateNode.containerInfo, at = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (Se === null) throw Error(I(160));
                cf(l, i, o), Se = null, at = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                ce(o, t, u);
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
                if (it(t, e), mt(e), r & 4) {
                    try {
                        Lr(3, e, e.return), Il(3, e);
                    } catch (w) {
                        ce(e, e.return, w);
                    }
                    try {
                        Lr(5, e, e.return);
                    } catch (w) {
                        ce(e, e.return, w);
                    }
                }
                break;
            case 1:
                it(t, e), mt(e), r & 512 && n !== null && Vn(n, n.return);
                break;
            case 5:
                if (it(t, e), mt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        $r(o, "");
                    } catch (w) {
                        ce(e, e.return, w);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && bc(o, l), zi(s, i);
                        var u = zi(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var d = a[i], c = a[i + 1];
                            d === "style" ? Dc(o, c) : d === "dangerouslySetInnerHTML" ? Lc(o, c) : d === "children" ? $r(o, c) : ks(o, d, c, u);
                        }
                        switch(s){
                            case "input":
                                _i(o, l);
                                break;
                            case "textarea":
                                Pc(o, l);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var g = l.value;
                                g != null ? Hn(o, !!l.multiple, g, !1) : f !== !!l.multiple && (l.defaultValue != null ? Hn(o, !!l.multiple, l.defaultValue, !0) : Hn(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[qr] = l;
                    } catch (w) {
                        ce(e, e.return, w);
                    }
                }
                break;
            case 6:
                if (it(t, e), mt(e), r & 4) {
                    if (e.stateNode === null) throw Error(I(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (w) {
                        ce(e, e.return, w);
                    }
                }
                break;
            case 3:
                if (it(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Vr(t.containerInfo);
                } catch (w) {
                    ce(e, e.return, w);
                }
                break;
            case 4:
                it(t, e), mt(e);
                break;
            case 13:
                it(t, e), mt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ta = fe())), r & 4 && Su(e);
                break;
            case 22:
                if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (u = ze) || d, it(t, e), ze = u) : it(t, e), mt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for(j = e, d = e.child; d !== null;){
                        for(c = j = d; j !== null;){
                            switch(f = j, g = f.child, f.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Lr(4, f, f.return);
                                    break;
                                case 1:
                                    Vn(f, f.return);
                                    var m = f.stateNode;
                                    if (typeof m.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                        } catch (w) {
                                            ce(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Vn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        _u(c);
                                        continue;
                                    }
                            }
                            g !== null ? (g.return = f, j = g) : _u(c);
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
                                    ce(e, e.return, w);
                                }
                            }
                        } else if (c.tag === 6) {
                            if (d === null) try {
                                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                            } catch (w) {
                                ce(e, e.return, w);
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
                it(t, e), mt(e), r & 4 && Su(e);
                break;
            case 21:
                break;
            default:
                it(t, e), mt(e);
        }
    }
    function mt(e) {
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
                        r.flags & 32 && ($r(o, ""), r.flags &= -33);
                        var l = wu(e);
                        os(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = wu(e);
                        rs(e, s, i);
                        break;
                    default:
                        throw Error(I(161));
                }
            } catch (a) {
                ce(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Uh(e, t, n) {
        j = e, ff(e);
    }
    function ff(e, t, n) {
        for(var r = (e.mode & 1) !== 0; j !== null;){
            var o = j, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Eo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || ze;
                    s = Eo;
                    var u = ze;
                    if (Eo = i, (ze = a) && !u) for(j = o; j !== null;)i = j, a = i.child, i.tag === 22 && i.memoizedState !== null ? Cu(o) : a !== null ? (a.return = i, j = a) : Cu(o);
                    for(; l !== null;)j = l, ff(l), l = l.sibling;
                    j = o, Eo = s, ze = u;
                }
                ku(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, j = l) : ku(e);
        }
    }
    function ku(e) {
        for(; j !== null;){
            var t = j;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            ze || Il(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : st(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && iu(t, l, r);
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
                                iu(t, i, n);
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
                                        c !== null && Vr(c);
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
                    ze || t.flags & 512 && ns(t);
                } catch (f) {
                    ce(t, t.return, f);
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
    function _u(e) {
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
    function Cu(e) {
        for(; j !== null;){
            var t = j;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Il(4, t);
                        } catch (a) {
                            ce(t, n, a);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (a) {
                                ce(t, o, a);
                            }
                        }
                        var l = t.return;
                        try {
                            ns(t);
                        } catch (a) {
                            ce(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            ns(t);
                        } catch (a) {
                            ce(t, i, a);
                        }
                }
            } catch (a) {
                ce(t, t.return, a);
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
    var Bh = Math.ceil, ul = jt.ReactCurrentDispatcher, Js = jt.ReactCurrentOwner, rt = jt.ReactCurrentBatchConfig, K = 0, we = null, pe = null, ke = 0, He = 0, Gn = tn(0), ye = 0, to = null, _n = 0, zl = 0, ea = 0, Or = null, Fe = null, ta = 0, lr = 1 / 0, St = null, cl = !1, ls = null, Qt = null, To = !1, Bt = null, dl = 0, Dr = 0, is = null, Fo = -1, $o = 0;
    function Me() {
        return K & 6 ? fe() : Fo !== -1 ? Fo : Fo = fe();
    }
    function qt(e) {
        return e.mode & 1 ? K & 2 && ke !== 0 ? ke & -ke : Eh.transition !== null ? ($o === 0 && ($o = qc()), $o) : (e = X, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nd(e.type)), e) : 1;
    }
    function ft(e, t, n, r) {
        if (50 < Dr) throw Dr = 0, is = null, Error(I(185));
        lo(e, n, r), (!(K & 2) || e !== we) && (e === we && (!(K & 2) && (zl |= n), ye === 4 && $t(e, ke)), Ve(e, r), n === 1 && K === 0 && !(t.mode & 1) && (lr = fe() + 500, Cl && nn()));
    }
    function Ve(e, t) {
        var n = e.callbackNode;
        Em(e, t);
        var r = Qo(e, e === we ? ke : 0);
        if (r === 0) n !== null && Pa(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Pa(n), t === 1) e.tag === 0 ? Ch(Eu.bind(null, e)) : Sd(Eu.bind(null, e)), wh(function() {
                !(K & 6) && nn();
            }), n = null;
            else {
                switch(Yc(r)){
                    case 1:
                        n = Is;
                        break;
                    case 4:
                        n = Kc;
                        break;
                    case 16:
                        n = Ko;
                        break;
                    case 536870912:
                        n = Qc;
                        break;
                    default:
                        n = Ko;
                }
                n = wf(n, pf.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function pf(e, t) {
        if (Fo = -1, $o = 0, K & 6) throw Error(I(327));
        var n = e.callbackNode;
        if (Xn() && e.callbackNode !== n) return null;
        var r = Qo(e, e === we ? ke : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
        else {
            t = r;
            var o = K;
            K |= 2;
            var l = hf();
            (we !== e || ke !== t) && (St = null, lr = fe() + 500, gn(e, t));
            do try {
                Gh();
                break;
            } catch (s) {
                mf(e, s);
            }
            while (!0);
            $s(), ul.current = l, K = o, pe !== null ? t = 0 : (we = null, ke = 0, t = ye);
        }
        if (t !== 0) {
            if (t === 2 && (o = Pi(e), o !== 0 && (r = o, t = ss(e, o))), t === 1) throw n = to, gn(e, 0), $t(e, r), Ve(e, fe()), n;
            if (t === 6) $t(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Wh(o) && (t = fl(e, r), t === 2 && (l = Pi(e), l !== 0 && (r = l, t = ss(e, l))), t === 1)) throw n = to, gn(e, 0), $t(e, r), Ve(e, fe()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(I(345));
                    case 2:
                        dn(e, Fe, St);
                        break;
                    case 3:
                        if ($t(e, r), (r & 130023424) === r && (t = ta + 500 - fe(), 10 < t)) {
                            if (Qo(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Me(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = Ui(dn.bind(null, e, Fe, St), t);
                            break;
                        }
                        dn(e, Fe, St);
                        break;
                    case 4:
                        if ($t(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - dt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bh(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Ui(dn.bind(null, e, Fe, St), r);
                            break;
                        }
                        dn(e, Fe, St);
                        break;
                    case 5:
                        dn(e, Fe, St);
                        break;
                    default:
                        throw Error(I(329));
                }
            }
        }
        return Ve(e, fe()), e.callbackNode === n ? pf.bind(null, e) : null;
    }
    function ss(e, t) {
        var n = Or;
        return e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && as(t)), e;
    }
    function as(e) {
        Fe === null ? Fe = e : Fe.push.apply(Fe, e);
    }
    function Wh(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!pt(l(), o)) return !1;
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
    function $t(e, t) {
        for(t &= ~ea, t &= ~zl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - dt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Eu(e) {
        if (K & 6) throw Error(I(327));
        Xn();
        var t = Qo(e, 0);
        if (!(t & 1)) return Ve(e, fe()), null;
        var n = fl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Pi(e);
            r !== 0 && (t = r, n = ss(e, r));
        }
        if (n === 1) throw n = to, gn(e, 0), $t(e, t), Ve(e, fe()), n;
        if (n === 6) throw Error(I(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, dn(e, Fe, St), Ve(e, fe()), null;
    }
    function na(e, t) {
        var n = K;
        K |= 1;
        try {
            return e(t);
        } finally{
            K = n, K === 0 && (lr = fe() + 500, Cl && nn());
        }
    }
    function Cn(e) {
        Bt !== null && Bt.tag === 0 && !(K & 6) && Xn();
        var t = K;
        K |= 1;
        var n = rt.transition, r = X;
        try {
            if (rt.transition = null, X = 1, e) return e();
        } finally{
            X = r, rt.transition = n, K = t, !(K & 6) && nn();
        }
    }
    function ra() {
        He = Gn.current, te(Gn);
    }
    function gn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, vh(n)), pe !== null) for(n = pe.return; n !== null;){
            var r = n;
            switch(Ds(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && Jo();
                    break;
                case 3:
                    rr(), te(Be), te(Ne), Hs();
                    break;
                case 5:
                    Gs(r);
                    break;
                case 4:
                    rr();
                    break;
                case 13:
                    te(le);
                    break;
                case 19:
                    te(le);
                    break;
                case 10:
                    Us(r.type._context);
                    break;
                case 22:
                case 23:
                    ra();
            }
            n = n.return;
        }
        if (we = e, pe = e = Yt(e.current, null), ke = He = t, ye = 0, to = null, ea = zl = _n = 0, Fe = Or = null, mn !== null) {
            for(t = 0; t < mn.length; t++)if (n = mn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            mn = null;
        }
        return e;
    }
    function mf(e, t) {
        do {
            var n = pe;
            try {
                if ($s(), Oo.current = al, sl) {
                    for(var r = ie.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    sl = !1;
                }
                if (kn = 0, ve = xe = ie = null, Mr = !1, Zr = 0, Js.current = null, n === null || n.return === null) {
                    ye = 1, to = t, pe = null;
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
                        var g = fu(i);
                        if (g !== null) {
                            g.flags &= -257, pu(g, i, s, l, t), g.mode & 1 && du(l, u, t), t = g, a = u;
                            var m = t.updateQueue;
                            if (m === null) {
                                var w = new Set;
                                w.add(a), t.updateQueue = w;
                            } else m.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                du(l, u, t), oa();
                                break e;
                            }
                            a = Error(I(426));
                        }
                    } else if (re && s.mode & 1) {
                        var y = fu(i);
                        if (y !== null) {
                            !(y.flags & 65536) && (y.flags |= 256), pu(y, i, s, l, t), As(or(a, s));
                            break e;
                        }
                    }
                    l = a = or(a, s), ye !== 4 && (ye = 2), Or === null ? Or = [
                        l
                    ] : Or.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var x = Yd(l, a, t);
                                lu(l, x);
                                break e;
                            case 1:
                                s = a;
                                var p = l.type, h = l.stateNode;
                                if (!(l.flags & 128) && (typeof p.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Qt === null || !Qt.has(h)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = Xd(l, s, t);
                                    lu(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                xf(n);
            } catch (k) {
                t = k, pe === n && n !== null && (pe = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function hf() {
        var e = ul.current;
        return ul.current = al, e === null ? al : e;
    }
    function oa() {
        (ye === 0 || ye === 3 || ye === 2) && (ye = 4), we === null || !(_n & 268435455) && !(zl & 268435455) || $t(we, ke);
    }
    function fl(e, t) {
        var n = K;
        K |= 2;
        var r = hf();
        (we !== e || ke !== t) && (St = null, gn(e, t));
        do try {
            Vh();
            break;
        } catch (o) {
            mf(e, o);
        }
        while (!0);
        if ($s(), K = n, ul.current = r, pe !== null) throw Error(I(261));
        return we = null, ke = 0, ye;
    }
    function Vh() {
        for(; pe !== null;)gf(pe);
    }
    function Gh() {
        for(; pe !== null && !gm();)gf(pe);
    }
    function gf(e) {
        var t = vf(e.alternate, e, He);
        e.memoizedProps = e.pendingProps, t === null ? xf(e) : pe = t, Js.current = null;
    }
    function xf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Ah(n, t), n !== null) {
                    n.flags &= 32767, pe = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    ye = 6, pe = null;
                    return;
                }
            } else if (n = Dh(n, t, He), n !== null) {
                pe = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                pe = t;
                return;
            }
            pe = t = e;
        }while (t !== null);
        ye === 0 && (ye = 5);
    }
    function dn(e, t, n) {
        var r = X, o = rt.transition;
        try {
            rt.transition = null, X = 1, Hh(e, t, n, r);
        } finally{
            rt.transition = o, X = r;
        }
        return null;
    }
    function Hh(e, t, n, r) {
        do Xn();
        while (Bt !== null);
        if (K & 6) throw Error(I(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Tm(e, l), e === we && (pe = we = null, ke = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || To || (To = !0, wf(Ko, function() {
            return Xn(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = rt.transition, rt.transition = null;
            var i = X;
            X = 1;
            var s = K;
            K |= 4, Js.current = null, $h(e, n), df(n, e), fh(Fi), qo = !!Ai, Fi = Ai = null, e.current = n, Uh(n), xm(), K = s, X = i, rt.transition = l;
        } else e.current = n;
        if (To && (To = !1, Bt = e, dl = o), l = e.pendingLanes, l === 0 && (Qt = null), wm(n.stateNode), Ve(e, fe()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (cl) throw cl = !1, e = ls, ls = null, e;
        return dl & 1 && e.tag !== 0 && Xn(), l = e.pendingLanes, l & 1 ? e === is ? Dr++ : (Dr = 0, is = e) : Dr = 0, nn(), null;
    }
    function Xn() {
        if (Bt !== null) {
            var e = Yc(dl), t = rt.transition, n = X;
            try {
                if (rt.transition = null, X = 16 > e ? 16 : e, Bt === null) var r = !1;
                else {
                    if (e = Bt, Bt = null, dl = 0, K & 6) throw Error(I(331));
                    var o = K;
                    for(K |= 4, j = e.current; j !== null;){
                        var l = j, i = l.child;
                        if (j.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var a = 0; a < s.length; a++){
                                    var u = s[a];
                                    for(j = u; j !== null;){
                                        var d = j;
                                        switch(d.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                Lr(8, d, l);
                                        }
                                        var c = d.child;
                                        if (c !== null) c.return = d, j = c;
                                        else for(; j !== null;){
                                            d = j;
                                            var f = d.sibling, g = d.return;
                                            if (af(d), d === u) {
                                                j = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                f.return = g, j = f;
                                                break;
                                            }
                                            j = g;
                                        }
                                    }
                                }
                                var m = l.alternate;
                                if (m !== null) {
                                    var w = m.child;
                                    if (w !== null) {
                                        m.child = null;
                                        do {
                                            var y = w.sibling;
                                            w.sibling = null, w = y;
                                        }while (w !== null);
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
                                    Lr(9, l, l.return);
                            }
                            var x = l.sibling;
                            if (x !== null) {
                                x.return = l.return, j = x;
                                break e;
                            }
                            j = l.return;
                        }
                    }
                    var p = e.current;
                    for(j = p; j !== null;){
                        i = j;
                        var h = i.child;
                        if (i.subtreeFlags & 2064 && h !== null) h.return = i, j = h;
                        else e: for(i = p; j !== null;){
                            if (s = j, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Il(9, s);
                                }
                            } catch (k) {
                                ce(s, s.return, k);
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
                    if (K = o, nn(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
                        yt.onPostCommitFiberRoot(vl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                X = n, rt.transition = t;
            }
        }
        return !1;
    }
    function Tu(e, t, n) {
        t = or(n, t), t = Yd(e, t, 1), e = Kt(e, t, 1), t = Me(), e !== null && (lo(e, 1, t), Ve(e, t));
    }
    function ce(e, t, n) {
        if (e.tag === 3) Tu(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Tu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qt === null || !Qt.has(r))) {
                    e = or(n, e), e = Xd(t, e, 1), t = Kt(t, e, 1), e = Me(), t !== null && (lo(t, 1, e), Ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Kh(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, we === e && (ke & n) === n && (ye === 4 || ye === 3 && (ke & 130023424) === ke && 500 > fe() - ta ? gn(e, 0) : ea |= n), Ve(e, t);
    }
    function yf(e, t) {
        t === 0 && (e.mode & 1 ? (t = go, go <<= 1, !(go & 130023424) && (go = 4194304)) : t = 1);
        var n = Me();
        e = Nt(e, t), e !== null && (lo(e, t, n), Ve(e, n));
    }
    function Qh(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), yf(e, n);
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
        r !== null && r.delete(t), yf(e, n);
    }
    var vf;
    vf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) $e = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return $e = !1, Oh(e, t, n);
            $e = !!(e.flags & 131072);
        }
        else $e = !1, re && t.flags & 1048576 && kd(t, nl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                Ao(e, t), e = t.pendingProps;
                var o = er(t, Ne.current);
                Yn(t, n), o = Qs(null, t, r, e, o, n);
                var l = qs();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (l = !0, el(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ws(t), o.updater = Tl, t.stateNode = o, o._reactInternals = t, Qi(t, r, e, n), t = Xi(null, t, r, !0, l, n)) : (t.tag = 0, re && l && Os(t), be(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(Ao(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Xh(r), e = st(r, e), o){
                        case 0:
                            t = Yi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = gu(null, t, r, e, n);
                            break e;
                        case 11:
                            t = mu(null, t, r, e, n);
                            break e;
                        case 14:
                            t = hu(null, t, r, st(r.type, e), n);
                            break e;
                    }
                    throw Error(I(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), Yi(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), gu(e, t, r, o, n);
            case 3:
                e: {
                    if (tf(t), e === null) throw Error(I(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, zd(e, t), ll(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = or(Error(I(423)), t), t = xu(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = or(Error(I(424)), t), t = xu(e, t, r, n, o);
                        break e;
                    } else for(Ke = Ht(t.stateNode.containerInfo.firstChild), Qe = t, re = !0, ut = null, n = Td(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (tr(), r === o) {
                            t = Rt(e, t, n);
                            break e;
                        }
                        be(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Nd(t), e === null && Gi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, $i(r, o) ? i = null : l !== null && $i(r, l) && (t.flags |= 32), ef(e, t), be(e, t, i, n), t.child;
            case 6:
                return e === null && Gi(t), null;
            case 13:
                return nf(e, t, n);
            case 4:
                return Vs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = nr(t, null, r, n) : be(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), mu(e, t, r, o, n);
            case 7:
                return be(e, t, t.pendingProps, n), t.child;
            case 8:
                return be(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return be(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, J(rl, r._currentValue), r._currentValue = i, l !== null) if (pt(l.value, i)) {
                        if (l.children === o.children && !Be.current) {
                            t = Rt(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var a = s.firstContext; a !== null;){
                                if (a.context === r) {
                                    if (l.tag === 1) {
                                        a = Tt(-1, n & -n), a.tag = 2;
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
                    be(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, Yn(t, n), o = ot(o), r = r(o), t.flags |= 1, be(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = st(r, t.pendingProps), o = st(r.type, o), hu(e, t, r, o, n);
            case 15:
                return Zd(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : st(r, o), Ao(e, t), t.tag = 1, We(r) ? (e = !0, el(t)) : e = !1, Yn(t, n), qd(t, r, o), Qi(t, r, o, n), Xi(null, t, r, !0, e, n);
            case 19:
                return rf(e, t, n);
            case 22:
                return Jd(e, t, n);
        }
        throw Error(I(156, t.tag));
    };
    function wf(e, t) {
        return Hc(e, t);
    }
    function Yh(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function tt(e, t, n, r) {
        return new Yh(e, t, n, r);
    }
    function la(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Xh(e) {
        if (typeof e == "function") return la(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Cs) return 11;
            if (e === Es) return 14;
        }
        return 2;
    }
    function Yt(e, t) {
        var n = e.alternate;
        return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function Uo(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") la(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Ln:
                return xn(n.children, o, l, t);
            case _s:
                i = 8, o |= 8;
                break;
            case yi:
                return e = tt(12, n, t, o | 2), e.elementType = yi, e.lanes = l, e;
            case vi:
                return e = tt(13, n, t, o), e.elementType = vi, e.lanes = l, e;
            case wi:
                return e = tt(19, n, t, o), e.elementType = wi, e.lanes = l, e;
            case Nc:
                return Nl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Ic:
                        i = 10;
                        break e;
                    case zc:
                        i = 9;
                        break e;
                    case Cs:
                        i = 11;
                        break e;
                    case Es:
                        i = 14;
                        break e;
                    case Dt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(I(130, e == null ? e : typeof e, ""));
        }
        return t = tt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function xn(e, t, n, r) {
        return e = tt(7, e, r, t), e.lanes = n, e;
    }
    function Nl(e, t, n, r) {
        return e = tt(22, e, r, t), e.elementType = Nc, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function ui(e, t, n) {
        return e = tt(6, e, null, t), e.lanes = n, e;
    }
    function ci(e, t, n) {
        return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function Zh(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vl(0), this.expirationTimes = Vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function ia(e, t, n, r, o, l, i, s, a) {
        return e = new Zh(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = tt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Ws(l), e;
    }
    function Jh(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Mn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Sf(e) {
        if (!e) return Jt;
        e = e._reactInternals;
        e: {
            if (Tn(e) !== e || e.tag !== 1) throw Error(I(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (We(t.type)) {
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
            if (We(n)) return wd(e, n, t);
        }
        return t;
    }
    function kf(e, t, n, r, o, l, i, s, a) {
        return e = ia(n, r, !0, e, o, l, i, s, a), e.context = Sf(null), n = e.current, r = Me(), o = qt(n), l = Tt(r, o), l.callback = t ?? null, Kt(n, l, o), e.current.lanes = o, lo(e, o, r), Ve(e, r), e;
    }
    function Rl(e, t, n, r) {
        var o = t.current, l = Me(), i = qt(o);
        return n = Sf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kt(o, t, i), e !== null && (ft(e, o, i, l), Lo(e, o, i)), i;
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
    function Iu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function sa(e, t) {
        Iu(e, t), (e = e.alternate) && Iu(e, t);
    }
    function eg() {
        return null;
    }
    var _f = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function aa(e) {
        this._internalRoot = e;
    }
    jl.prototype.render = aa.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(I(409));
        Rl(e, t, null, null);
    };
    jl.prototype.unmount = aa.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Cn(function() {
                Rl(null, e, null, null);
            }), t[zt] = null;
        }
    };
    function jl(e) {
        this._internalRoot = e;
    }
    jl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Jc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Ft.length && t !== 0 && t < Ft[n].priority; n++);
            Ft.splice(n, 0, e), n === 0 && td(e);
        }
    };
    function ua(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function bl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function zu() {}
    function tg(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = pl(i);
                    l.call(u);
                };
            }
            var i = kf(t, r, e, 0, null, !1, !1, "", zu);
            return e._reactRootContainer = i, e[zt] = i.current, Kr(e.nodeType === 8 ? e.parentNode : e), Cn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = pl(a);
                s.call(u);
            };
        }
        var a = ia(e, 0, !1, null, null, !1, !1, "", zu);
        return e._reactRootContainer = a, e[zt] = a.current, Kr(e.nodeType === 8 ? e.parentNode : e), Cn(function() {
            Rl(t, a, n, r);
        }), a;
    }
    function Pl(e, t, n, r, o) {
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
        } else i = tg(n, t, e, o, r);
        return pl(i);
    }
    Xc = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Er(t.pendingLanes);
                    n !== 0 && (zs(t, n | 1), Ve(t, fe()), !(K & 6) && (lr = fe() + 500, nn()));
                }
                break;
            case 13:
                Cn(function() {
                    var r = Nt(e, 1);
                    if (r !== null) {
                        var o = Me();
                        ft(r, e, 1, o);
                    }
                }), sa(e, 1);
        }
    };
    Ns = function(e) {
        if (e.tag === 13) {
            var t = Nt(e, 134217728);
            if (t !== null) {
                var n = Me();
                ft(t, e, 134217728, n);
            }
            sa(e, 134217728);
        }
    };
    Zc = function(e) {
        if (e.tag === 13) {
            var t = qt(e), n = Nt(e, t);
            if (n !== null) {
                var r = Me();
                ft(n, e, t, r);
            }
            sa(e, t);
        }
    };
    Jc = function() {
        return X;
    };
    ed = function(e, t) {
        var n = X;
        try {
            return X = e, t();
        } finally{
            X = n;
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
                            jc(r), _i(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Pc(e, n);
                break;
            case "select":
                t = n.value, t != null && Hn(e, !!n.multiple, t, !1);
        }
    };
    $c = na;
    Uc = Cn;
    var ng = {
        usingClientEntryPoint: !1,
        Events: [
            so,
            Fn,
            _l,
            Ac,
            Fc,
            na
        ]
    }, vr = {
        findFiberByHostInstance: pn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, rg = {
        bundleType: vr.bundleType,
        version: vr.version,
        rendererPackageName: vr.rendererPackageName,
        rendererConfig: vr.rendererConfig,
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
            return e = Vc(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: vr.findFiberByHostInstance || eg,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Io.isDisabled && Io.supportsFiber) try {
            vl = Io.inject(rg), yt = Io;
        } catch  {}
    }
    Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ng;
    Ye.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ua(t)) throw Error(I(200));
        return Jh(e, t, null, n);
    };
    Ye.createRoot = function(e, t) {
        if (!ua(e)) throw Error(I(299));
        var n = !1, r = "", o = _f;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ia(e, 1, !1, null, null, n, !1, r, o), e[zt] = t.current, Kr(e.nodeType === 8 ? e.parentNode : e), new aa(t);
    };
    Ye.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
        return e = Vc(t), e = e === null ? null : e.stateNode, e;
    };
    Ye.flushSync = function(e) {
        return Cn(e);
    };
    Ye.hydrate = function(e, t, n) {
        if (!bl(t)) throw Error(I(200));
        return Pl(null, e, t, !0, n);
    };
    Ye.hydrateRoot = function(e, t, n) {
        if (!ua(e)) throw Error(I(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = _f;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kf(t, null, e, 1, n ?? null, o, !1, l, i), e[zt] = t.current, Kr(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new jl(t);
    };
    Ye.render = function(e, t, n) {
        if (!bl(t)) throw Error(I(200));
        return Pl(null, e, t, !1, n);
    };
    Ye.unmountComponentAtNode = function(e) {
        if (!bl(e)) throw Error(I(40));
        return e._reactRootContainer ? (Cn(function() {
            Pl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[zt] = null;
            });
        }), !0) : !1;
    };
    Ye.unstable_batchedUpdates = na;
    Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!bl(n)) throw Error(I(200));
        if (e == null || e._reactInternals === void 0) throw Error(I(38));
        return Pl(e, t, n, !1, r);
    };
    Ye.version = "18.3.1-next-f1338f8080-20240426";
    function Cf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cf);
        } catch (e) {
            console.error(e);
        }
    }
    Cf(), _c.exports = Ye;
    var og = _c.exports, Nu = og;
    gi.createRoot = Nu.createRoot, gi.hydrateRoot = Nu.hydrateRoot;
    const lg = "modulepreload", ig = function(e) {
        return "/grid-draw/" + e;
    }, Ru = {}, ca = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = ig(a), a in Ru) return;
                Ru[a] = !0;
                const u = a.endsWith(".css"), d = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${d}`)) return;
                const c = document.createElement("link");
                if (c.rel = u ? "stylesheet" : lg, u || (c.as = "script"), c.crossOrigin = "", c.href = a, s && c.setAttribute("nonce", s), document.head.appendChild(c), u) return new Promise((f, g)=>{
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
    }, ju = (e)=>{
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
    }, sg = (e)=>e ? ju(e) : ju, ag = (e)=>e;
    function ug(e, t = ag) {
        const n = ne.useSyncExternalStore(e.subscribe, ne.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), ne.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return ne.useDebugValue(n), n;
    }
    const bu = (e)=>{
        const t = sg(e), n = (r)=>ug(t, r);
        return Object.assign(n, t), n;
    }, Ef = (e)=>e ? bu(e) : bu, cg = 1.75;
    function di(e) {
        return {
            r: e.minRow - cg,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function Tf(e) {
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
    function Zn(e) {
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
    function dg(e, t, n) {
        if (e.length === 0) return 0;
        let r = 1 / 0, o = -1 / 0, l = 1 / 0, i = -1 / 0;
        for (const a of e)r = Math.min(r, a.r), o = Math.max(o, a.r), l = Math.min(l, a.c), i = Math.max(i, a.c);
        const s = Math.hypot((o - r) * t, (i - l) * t);
        return Math.min(9 / n, s / 4);
    }
    function fg(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, d = (a - e) * (a - e) + (u - t) * (u - t);
            d <= i && (l = s, i = d);
        }
        return l;
    }
    const If = [
        1,
        1.5,
        2,
        3,
        5
    ], us = [
        1,
        1.5,
        2,
        3,
        5
    ], zf = [
        {
            value: 0,
            label: "Center"
        },
        {
            value: 1,
            label: "Inside"
        },
        {
            value: 2,
            label: "Outside"
        }
    ], nt = 8, Ir = [
        1,
        2,
        4,
        8
    ], Ot = (e)=>Math.round(e * 10), cs = (e)=>e / 10;
    function ml(e, t) {
        const n = e.get_square(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: n[3]
        };
    }
    function da(e, t) {
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
    function fa(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            fill: n[4],
            outline: n[5],
            width: n[6],
            strokeAlign: n[7]
        };
    }
    function Pu(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Mu(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Lu(e, t) {
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
    function Ou(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Nf(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            url: e.get_image_url(t)
        };
    }
    function an(e) {
        return e.map((t)=>`${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Rf(e, t) {
        return e.type === t.type && e.index === t.index;
    }
    function zr(e, t) {
        return t.some((n)=>Rf(n, e));
    }
    function pg(e, t) {
        return zr(e, t) ? t : [
            ...t,
            e
        ];
    }
    function mg(e, t) {
        return t.filter((n)=>!Rf(n, e));
    }
    function fi(e, t) {
        t.type === "cell" ? e.highlight_square(t.index) : t.type === "line" ? e.highlight_line(t.index) : t.type === "rect" ? e.highlight_rect(t.index) : t.type === "text" ? e.highlight_text(t.index) : e.highlight_image(t.index);
    }
    function jf(e) {
        return [
            e[0],
            e[1],
            e[0] + e[4],
            e[1] + e[3]
        ];
    }
    function hg(e, t) {
        return t.type === "line" ? Tf(e.get_line(t.index)) : t.type === "rect" ? Zn(e.get_rect(t.index)) : t.type === "image" ? Zn(e.get_image(t.index)) : t.type === "text" ? Zn(jf(e.get_text(t.index))) : [];
    }
    function Du(e, t, n, r, o, l) {
        const i = hg(e, t);
        return fg(n, r, i, o, dg(i, o, l));
    }
    function et(e) {
        return (t)=>t.type === e;
    }
    function Ue(e, t) {
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
    function gg(e, t) {
        const n = Ue(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function Au(e, t, n, r, o) {
        const l = Ue(t, e);
        if (!l) return {
            deltaRow: n,
            deltaCol: r
        };
        const i = nt / o, s = (a)=>Math.round(a / i) * i;
        return {
            deltaRow: s(l.minRow + n) - l.minRow,
            deltaCol: s(l.minCol + r) - l.minCol
        };
    }
    function Ar(e, t, n = {}) {
        const r = Ue(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, d = [], c = [], f = [], g = [], m = [];
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
                y[5],
                y[6],
                y[7]
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
            m.push([
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
            images: m,
            sub: nt
        };
    }
    function xg(e) {
        return typeof e == "object" && e !== null;
    }
    function yg(e) {
        return Array.isArray(e);
    }
    function Ae(e) {
        return typeof e == "number" ? e : void 0;
    }
    function vg(e) {
        if (yg(e)) {
            const t = e[0], n = e[1];
            return typeof t != "number" || typeof n != "number" ? null : e.length >= 9 ? {
                r: t,
                c: n,
                color: Ae(e[2]),
                size: Ae(e[3]),
                boxW: Ae(e[4]),
                boxH: Ae(e[5]),
                halign: Ae(e[6]),
                valign: Ae(e[7]),
                text: e[8]
            } : {
                r: t,
                c: n,
                color: Ae(e[2]),
                size: Ae(e[3]),
                text: e[4]
            };
        }
        return xg(e) ? typeof e.r != "number" || typeof e.c != "number" ? null : {
            r: e.r,
            c: e.c,
            color: Ae(e.color),
            size: Ae(e.size),
            boxW: Ae(e.boxW),
            boxH: Ae(e.boxH),
            halign: Ae(e.halign),
            valign: Ae(e.valign),
            text: e.text
        } : null;
    }
    function Fu(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function kt(e, t, n, r, o) {
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
    function $u(e, t, n, r, o, l) {
        const i = kt(e, t, r, o, l), s = kt(e + n - 1, t + n - 1, r, o, l);
        return {
            r: Math.min(i.r, s.r),
            c: Math.min(i.c, s.c)
        };
    }
    function bf(e) {
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
    const wg = (e, t)=>({
            copy: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n || r.length === 0) return;
                const o = gg(r, n);
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
                        outline: c[5],
                        width: c[6] ?? 10,
                        strokeAlign: c[7] ?? 0
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
                for (const m of r.cells)a.push({
                    kind: "addSquare",
                    idx: u,
                    square: {
                        r: s.row + m.relRow,
                        c: s.col + m.relCol,
                        color: m.color,
                        size: m.size ?? 1
                    }
                }), l.push({
                    type: "cell",
                    index: u
                }), u++;
                for (const m of r.lines){
                    const w = s.row + m.relR1, y = s.col + m.relC1, x = s.row + m.relR2, p = s.col + m.relC2;
                    a.push({
                        kind: "addLine",
                        idx: d,
                        line: {
                            r1: w,
                            c1: y,
                            r2: x,
                            c2: p,
                            color: m.color,
                            width: m.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: d
                    }), d++;
                }
                for (const m of r.rects){
                    const w = s.row + m.relR1, y = s.col + m.relC1, x = s.row + m.relR2, p = s.col + m.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: w,
                            c1: y,
                            r2: x,
                            c2: p,
                            fill: m.color,
                            outline: m.outline,
                            width: m.width,
                            strokeAlign: m.strokeAlign
                        }
                    }), l.push({
                        type: "rect",
                        index: c
                    }), c++;
                }
                for (const m of r.texts ?? []){
                    const w = s.row + m.relR, y = s.col + m.relC;
                    a.push({
                        kind: "addText",
                        idx: f,
                        text: {
                            r: w,
                            c: y,
                            color: m.color,
                            size: m.size,
                            boxW: m.boxW,
                            boxH: m.boxH,
                            halign: m.halign,
                            valign: m.valign,
                            text: m.text
                        }
                    }), l.push({
                        type: "text",
                        index: f
                    }), f++;
                }
                for (const m of r.images ?? [])a.push({
                    kind: "addImage",
                    idx: g,
                    image: {
                        r1: s.row + m.relR1,
                        c1: s.col + m.relC1,
                        r2: s.row + m.relR2,
                        c2: s.col + m.relC2,
                        url: m.url
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
                const l = r.filter(et("cell")).map((c)=>c.index).sort((c, f)=>f - c), i = r.filter(et("line")).map((c)=>c.index).sort((c, f)=>f - c), s = r.filter(et("rect")).map((c)=>c.index).sort((c, f)=>f - c), a = r.filter(et("text")).map((c)=>c.index).sort((c, f)=>f - c), u = r.filter(et("image")).map((c)=>c.index).sort((c, f)=>f - c), d = [];
                for (const c of l)d.push({
                    kind: "deleteSquare",
                    idx: c,
                    square: ml(n, c)
                });
                for (const c of i)d.push({
                    kind: "deleteLine",
                    idx: c,
                    line: da(n, c)
                });
                for (const c of s)d.push({
                    kind: "deleteRect",
                    idx: c,
                    rect: fa(n, c)
                });
                for (const c of a)d.push({
                    kind: "deleteText",
                    idx: c,
                    text: Ml(n, c)
                });
                for (const c of u)d.push({
                    kind: "deleteImage",
                    idx: c,
                    image: Nf(n, c)
                });
                t().commitEdits(d), e({
                    selectedItems: []
                }), n.render(), o();
            }
        }), Uu = new Map;
    function Sg() {
        ca(()=>Promise.resolve().then(()=>Wg), void 0).then((e)=>e.useGridStore.getState().grid?.render());
    }
    function pa(e) {
        const t = Uu.get(e);
        if (t) return t;
        const n = new Image;
        return n.crossOrigin = "anonymous", n.decoding = "async", n.onload = ()=>{
            Sg();
        }, n.onerror = ()=>{}, n.src = e, Uu.set(e, n), n;
    }
    function kg(e) {
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
    function _g(e, t) {
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
            case "resizeRectStroke":
            case "alignRectStroke":
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
        switch(_g(e, t), t.kind){
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
            case "resizeRectStroke":
                e.set_rect_line_width(t.idx, t.to);
                break;
            case "alignRectStroke":
                e.set_rect_stroke_align(t.idx, t.to);
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
                e.insert_rect(t.idx, t.rect.r1, t.rect.c1, t.rect.r2, t.rect.c2, t.rect.fill, t.rect.outline, t.rect.width, t.rect.strokeAlign);
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
            case "resizeRectStroke":
            case "alignRectStroke":
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
    function Mf(e, t) {
        if (e.kind !== t.kind) return null;
        switch(e.kind){
            case "recolorLine":
            case "resizeLine":
            case "recolorRectFill":
            case "recolorRectOutline":
            case "resizeRectStroke":
            case "alignRectStroke":
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
                        const o = Mf(e.edits[r], t.edits[r]);
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
    const Cg = 100, Eg = 600;
    class Tg {
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
            this.undoStack.push(t), this.undoStack.length > Cg && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (Bo(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Eg) {
                const i = this.undoStack[this.undoStack.length - 1], s = Mf(i, n);
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
            if (n.some(ds) || r.some(ds)) {
                this.clear();
                return;
            }
            this.undoStack = n, this.redoStack = r, this.pending = null, this.lastCoalesceKey = null;
        }
    }
    const Ig = new Set([
        "setCell",
        "setCellColor",
        "setCellState"
    ]);
    function ds(e) {
        return Ig.has(String(e.kind)) ? !0 : e.kind === "batch" && e.edits.some(ds);
    }
    const Pe = new Tg, zg = (e, t)=>({
            commitEdits: (n, r)=>{
                const { grid: o } = t();
                !o || n.length === 0 || (Pe.commit(o, n.length === 1 ? n[0] : {
                    kind: "batch",
                    edits: n
                }, r), e({
                    historyTick: t().historyTick + 1
                }));
            },
            undo: ()=>{
                const { grid: n } = t();
                n && Pe.undoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            redo: ()=>{
                const { grid: n } = t();
                n && Pe.redoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            canUndo: ()=>Pe.canUndo(),
            canRedo: ()=>Pe.canRedo(),
            resetHistory: ()=>{
                Pe.clear(), e({
                    historyTick: t().historyTick + 1
                });
            },
            exportHistory: ()=>Pe.exportStacks()
        }), Ng = (e, t)=>({
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
                const o = Ar(n, r);
                if (!o) return;
                const l = Ue(r, n), i = l ? [
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
                const i = Ar(n, r);
                if (!i) return null;
                const s = Ue(r, n), a = l ?? [
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
                const g = nt / (n.sub ?? 1);
                for (const m of n.cells ?? []){
                    const [w, y, x] = m, p = m.length >= 4 ? m[3] : g === 1 ? 1 : nt;
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
                for (const [m, w, y, x, p, h] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: u,
                    line: {
                        r1: r + m * g,
                        c1: o + w * g,
                        r2: r + y * g,
                        c2: o + x * g,
                        color: p,
                        width: h ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: u
                }), u++;
                for (const [m, w, y, x, p, h, S, k] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: d,
                    rect: {
                        r1: r + m * g,
                        c1: o + w * g,
                        r2: r + y * g,
                        c2: o + x * g,
                        fill: p,
                        outline: h,
                        width: S ?? 10,
                        strokeAlign: k ?? 0
                    }
                }), s.push({
                    type: "rect",
                    index: d
                }), d++;
                for (const m of n.texts ?? []){
                    const w = vg(m);
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
                for (const m of n.images ?? []){
                    if (!Array.isArray(m) || m.length < 5) continue;
                    const [w, y, x, p, h] = m;
                    typeof h == "string" && (i.push({
                        kind: "addImage",
                        idx: f,
                        image: {
                            r1: r + w * g,
                            c1: o + y * g,
                            r2: r + x * g,
                            c2: o + p * g,
                            url: h
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
                return n ? Ar(n, bf(n), {
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
                o && (t().loadDesign(n), r && ((r.undo?.length ?? 0) > 0 || (r.redo?.length ?? 0) > 0) ? Pe.importStacks(r) : Pe.clear(), e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection());
            },
            updateOutputs: ()=>{
                const { grid: n, selectedItems: r } = t(), o = r.filter(et("cell"));
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
                ], i = o.map((h)=>ml(n, h.index));
                let s = 1 / 0, a = 1 / 0, u = -1 / 0, d = -1 / 0;
                for (const h of i)s = Math.min(s, h.r), a = Math.min(a, h.c), u = Math.max(u, h.r + h.size - 1), d = Math.max(d, h.c + h.size - 1);
                const c = i.map((h)=>({
                        row: h.r - s,
                        col: h.c - a,
                        size: h.size,
                        color: l[h.color] ?? "#000000"
                    }));
                c.sort((h, S)=>h.row - S.row || h.col - S.col);
                const f = i.every((h)=>h.size === i[0].size && (h.r - s) % h.size === 0 && (h.c - a) % h.size === 0) ? i[0].size : 1, g = Math.ceil((u - s + 1) / f), m = Math.ceil((d - a + 1) / f), w = [], y = [];
                for (const h of c)h.color === "#000000" && (w.push(h.row / f), y.push(h.col / f));
                const x = w.map(()=>"1.0").join(", "), p = `import torch

indices = torch.tensor([[${w.join(", ")}], [${y.join(", ")}]])
values = torch.tensor([${x}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${g}, ${m}))
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
                        const g = l[f] ?? 0, m = typeof u.size == "number" && u.size >= 1 ? u.size : 1, w = r.add_square(o.row + d, o.col + c, g, m);
                        s.push({
                            type: "cell",
                            index: w
                        });
                    }
                    else {
                        const u = nt / t().subdivision;
                        for(let d = 0; d < i.length; d++){
                            const c = i[d];
                            if (Array.isArray(c)) for(let f = 0; f < c.length; f++){
                                const g = c[f];
                                if (g && typeof g == "object" && g.color) {
                                    const m = l[g.color] ?? 0, w = r.add_square(o.row + d * u, o.col + f * u, m, u);
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
                    const s = [], a = nt / t().subdivision;
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
                    image: Nf(n, l)
                });
                for(let l = n.get_text_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteText",
                    idx: l,
                    text: Ml(n, l)
                });
                for(let l = n.get_rect_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteRect",
                    idx: l,
                    rect: fa(n, l)
                });
                for(let l = n.get_line_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteLine",
                    idx: l,
                    line: da(n, l)
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
        }), Rg = (e, t)=>({
            setSelectedItems: (n)=>{
                e({
                    selectedItems: n
                }), t().renderSelection(), setTimeout(()=>t().updateOutputs(), 0);
            },
            selectAll: ()=>{
                const { grid: n } = t();
                if (!n) return;
                t().textEdit && t().commitTextEdit();
                const r = bf(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = pg(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = mg(n, r);
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
                const m = r.get_image_count();
                for(let y = 0; y < m; y++)r.image_intersects_box(y, i, a, s, u) && d.push({
                    type: "image",
                    index: y
                });
                const w = [
                    ...l
                ];
                for (const y of d)zr(y, w) || w.push(y);
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
                const { deltaRow: a, deltaCol: u } = Au(r, l, n.row - o.row, n.col - o.col, t().subdivision);
                if (a !== 0 || u !== 0) {
                    const d = [], c = [], f = l.filter(et("cell"));
                    for (const k of f)c.push({
                        kind: "moveSquare",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "cell",
                        index: k.index
                    });
                    const g = [], m = l.filter(et("line"));
                    for (const k of m)g.push({
                        kind: "moveLine",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "line",
                        index: k.index
                    });
                    const w = [], y = l.filter(et("rect"));
                    for (const k of y)w.push({
                        kind: "moveRect",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "rect",
                        index: k.index
                    });
                    const x = [], p = l.filter(et("text"));
                    for (const k of p)x.push({
                        kind: "moveText",
                        idx: k.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "text",
                        index: k.index
                    });
                    const h = [], S = l.filter(et("image"));
                    for (const k of S)h.push({
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
                        ...h
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
                    const m = Ue(u, a);
                    if (m) {
                        const w = di(m), y = 10 / s;
                        if (Math.hypot(n - w.c * d, r - w.r * d) <= y) {
                            t().startRotate(n, r);
                            return;
                        }
                    }
                }
                if (u.length === 1 && !i) {
                    const m = u[0];
                    if (m.type !== "cell") {
                        const w = Du(a, m, n, r, d, s);
                        if (w) {
                            t().startResize({
                                shape: m.type,
                                index: m.index,
                                handle: w.handle
                            });
                            return;
                        }
                    }
                }
                const c = Ue(u, a), f = c != null && o >= c.minRow && o <= c.maxRow && l >= c.minCol && l <= c.maxCol, g = t().hitTestShapes(n, r);
                g && !i && zr(g, u) && u.length > 1 ? (t().startDragSelection({
                    row: o,
                    col: l
                }), t().renderSelection()) : f && u.length > 0 && !i && !g ? (t().startDragSelection({
                    row: o,
                    col: l
                }, !0), t().renderSelection()) : g ? i && !zr(g, u) ? t().addItemToSelection(g) : i ? t().removeItemFromSelection(g) : (t().setSelectedItems([
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
                const u = s.get_cell_size(), d = Ue(a, s);
                if (d) {
                    const g = di(d);
                    if (Math.hypot(n - g.c * u, r - g.r * u) <= 10 / i) return "rotate";
                }
                if (a.length === 1) {
                    const g = a[0];
                    if (g.type !== "cell" && Du(s, g, n, r, u, i)) return "resize";
                }
                const c = t().hitTestShapes(n, r), f = d != null && o >= d.minRow && o <= d.maxRow && l >= d.minCol && l <= d.maxCol;
                return c != null && zr(c, a) || f ? "move" : "none";
            },
            renderDragPreview: (n)=>{
                const { grid: r, selectDragStart: o, selectedItems: l, subdivision: i } = t();
                if (!r || !o || l.length === 0) return;
                const { deltaRow: s, deltaCol: a } = Au(r, l, n.row - o.row, n.col - o.col, i);
                r.render();
                for (const u of l)if (u.type === "cell") {
                    const d = ml(r, u.index);
                    r.preview_square(d.r + s, d.c + a, d.size, d.color);
                } else if (u.type === "line") {
                    const d = da(r, u.index);
                    r.preview_line(d.r1 + s, d.c1 + a, d.r2 + s, d.c2 + a, d.color, d.width);
                } else if (u.type === "rect") {
                    const d = fa(r, u.index);
                    r.preview_rect(d.r1 + s, d.c1 + a, d.r2 + s, d.c2 + a, d.fill, d.outline, d.width, d.strokeAlign);
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
                            const l = Tf(n.get_line(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "rect") {
                            const l = Zn(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "text") {
                            const l = Zn(jf(n.get_text(o.index)));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "image") {
                            const l = Zn(n.get_image(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = Ue(r, n);
                        if (o) {
                            const l = di(o);
                            n.draw_rotate_handle(l.r, l.c, o.minRow, l.c);
                        }
                    }
                }
            },
            getSelectedCells: ()=>{
                const { grid: n, selectedItems: r } = t();
                return n ? r.filter(et("cell")).map((o)=>{
                    const l = n.get_square(o.index);
                    return {
                        row: l[0],
                        col: l[1]
                    };
                }) : [];
            }
        }), jg = (e, t)=>{
        const n = ()=>{
            const { grid: r, colorIdx: o, outlineIdx: l, rectLineWidth: i, rectStrokeAlign: s } = t();
            r && (r.set_draw_color(o), r.set_outline_color(l), r.set_draw_rect_line_width(Ot(i)), r.set_draw_rect_stroke_align(s));
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
                    coalesceKey: `fill:${an(l)}`
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
                    coalesceKey: `outline:${an(l)}`
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
                    coalesceKey: `size:${an(l)}`
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
                if (!o || (o.set_draw_line_width(Ot(r)), l.length === 0)) return;
                const i = Ot(r), s = [];
                for (const a of l)a.type === "line" && s.push({
                    kind: "resizeLine",
                    idx: a.index,
                    from: o.get_line(a.index)[5],
                    to: i
                });
                s.length !== 0 && (t().commitEdits(s, {
                    coalesceKey: `lineWidth:${an(l)}`
                }), t().renderSelection());
            },
            pickRectLineWidth: (r)=>{
                e({
                    rectLineWidth: r
                });
                const { grid: o, selectedItems: l } = t();
                if (!o || (o.set_draw_rect_line_width(Ot(r)), l.length === 0)) return;
                const i = Ot(r), s = [];
                for (const a of l)a.type === "rect" && s.push({
                    kind: "resizeRectStroke",
                    idx: a.index,
                    from: o.get_rect(a.index)[6],
                    to: i
                });
                s.length !== 0 && (t().commitEdits(s, {
                    coalesceKey: `rectLineWidth:${an(l)}`
                }), t().renderSelection());
            },
            pickRectStrokeAlign: (r)=>{
                e({
                    rectStrokeAlign: r
                });
                const { grid: o, selectedItems: l } = t();
                if (!o || (o.set_draw_rect_stroke_align(r), l.length === 0)) return;
                const i = [];
                for (const s of l)s.type === "rect" && i.push({
                    kind: "alignRectStroke",
                    idx: s.index,
                    from: o.get_rect(s.index)[7],
                    to: r
                });
                i.length !== 0 && (t().commitEdits(i, {
                    coalesceKey: `rectStrokeAlign:${an(l)}`
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
                    coalesceKey: `align:${an(i)}`
                }), t().renderSelection());
            },
            setSubdivision: (r)=>{
                const o = Ir.includes(r) ? r : 1;
                e({
                    subdivision: o
                });
                const { grid: l } = t();
                l?.set_subdivision(o);
            },
            cycleSubdivision: ()=>{
                const r = t().subdivision, o = Ir[(Ir.indexOf(r) + 1) % Ir.length];
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
                Pe.beginBatch(), t().commitEdits([
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
                    o?.editing && Pe.endBatch(), r?.render();
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
                    ]), Pe.endBatch();
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
                ]), Pe.cancelBatch()), r?.render();
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
                Pe.beginBatch();
            },
            drawCellAt: (r, o, l)=>{
                const { grid: i, colorIdx: s, subdivision: a } = t();
                if (!i) return;
                const u = nt / a;
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
                        const g = d[f], m = i.get_square(g);
                        c.push({
                            kind: "deleteSquare",
                            idx: g,
                            square: {
                                r: m[0],
                                c: m[1],
                                color: m[2],
                                size: m[3]
                            }
                        });
                    }
                    c.length > 0 && t().commitEdits(c);
                }
            },
            endDrawStroke: ()=>{
                Pe.endBatch(), e({
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
                            width: Ot(u)
                        }
                    }
                ]), t().updateOutputs());
            },
            commitRect: (r, o, l, i)=>{
                const { grid: s, colorIdx: a, outlineIdx: u, rectLineWidth: d, rectStrokeAlign: c } = t();
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
                            outline: u,
                            width: Ot(d),
                            strokeAlign: c
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
    }, bg = (e, t)=>({
            startResize: (n)=>{
                const { grid: r } = t(), o = r ? n.shape === "line" ? Pu(r, n.index) : n.shape === "rect" ? Mu(r, n.index) : n.shape === "image" ? Ou(r, n.index) : Lu(r, n.index) : null;
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
                        to: Pu(r, o.index)
                    }
                ])) : o.shape === "rect" ? (r.resize_rect(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Mu(r, o.index)
                    }
                ])) : o.shape === "image" ? (r.resize_image(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setImageGeom",
                        idx: o.index,
                        from: l,
                        to: Ou(r, o.index)
                    }
                ])) : (r.resize_text(o.index, o.handle, n.row, n.col), l && "boxW" in l && t().commitEdits([
                    {
                        kind: "setTextFrame",
                        idx: o.index,
                        from: l,
                        to: Lu(r, o.index)
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
                const i = Ue(l, o);
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
                const { cx: s, cy: a, startAngle: u } = i, d = Fu(Math.atan2(r - a, n - s) - u);
                if (o.render(), d === 0) {
                    t().renderSelection();
                    return;
                }
                const c = Ue(l, o);
                if (!c) return;
                const f = Math.round((c.minRow + c.maxRow) / 2), g = Math.round((c.minCol + c.maxCol) / 2);
                for (const m of l)if (m.type === "cell") {
                    const w = o.get_square(m.index);
                    if (w.length < 4) continue;
                    const y = $u(w[0], w[1], w[3], d, f, g);
                    o.preview_square(y.r, y.c, w[3], w[2]);
                } else if (m.type === "line") {
                    const w = o.get_line(m.index);
                    if (w.length >= 6) {
                        const y = kt(w[0], w[1], d, f, g), x = kt(w[2], w[3], d, f, g);
                        o.preview_line(y.r, y.c, x.r, x.c, w[4], w[5]);
                    }
                } else if (m.type === "rect") {
                    const w = o.get_rect(m.index);
                    if (w.length >= 6) {
                        const y = kt(w[0], w[1], d, f, g), x = kt(w[2], w[3], d, f, g);
                        o.preview_rect(y.r, y.c, x.r, x.c, w[4], w[5], w[6], w[7]);
                    }
                } else if (m.type === "text") {
                    const w = o.get_text(m.index);
                    if (w.length >= 7) {
                        const y = kt(w[0], w[1], d, f, g);
                        o.preview_text(y.r, y.c, w[2], o.get_text_size(m.index), w[3], w[4], w[5], w[6], o.get_text_string(m.index));
                    }
                } else if (m.type === "image") {
                    const w = o.get_image(m.index);
                    if (w.length >= 4) {
                        const y = kt(w[0], w[1], d, f, g);
                        o.preview_image(y.r, y.c, y.r + (w[2] - w[0]), y.c + (w[3] - w[1]), pa(o.get_image_url(m.index)));
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
                const { cx: s, cy: a, startAngle: u } = i, d = Fu(Math.atan2(r - a, n - s) - u), c = Ue(l, o);
                if (d === 0 || !c) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const f = Math.round((c.minRow + c.maxRow) / 2), g = Math.round((c.minCol + c.maxCol) / 2), m = (x, p)=>kt(x, p, d, f, g), w = [], y = [];
                for (const x of l)if (x.type === "cell") {
                    const p = o.get_square(x.index);
                    if (p.length < 4) continue;
                    const h = $u(p[0], p[1], p[3], d, f, g);
                    w.push({
                        kind: "moveSquare",
                        idx: x.index,
                        dRow: h.r - p[0],
                        dCol: h.c - p[1]
                    }), y.push({
                        type: "cell",
                        index: x.index
                    });
                } else if (x.type === "line") {
                    const p = o.get_line(x.index);
                    if (p.length < 5) continue;
                    const h = m(p[0], p[1]), S = m(p[2], p[3]);
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
                            r1: h.r,
                            c1: h.c,
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
                    const h = m(p[0], p[1]), S = m(p[2], p[3]);
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
                            r1: h.r,
                            c1: h.c,
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
                    const h = m(p[0], p[1]);
                    w.push({
                        kind: "moveText",
                        idx: x.index,
                        dRow: h.r - p[0],
                        dCol: h.c - p[1]
                    }), y.push({
                        type: "text",
                        index: x.index
                    });
                } else if (x.type === "image") {
                    const p = o.get_image(x.index);
                    if (p.length < 4) continue;
                    const h = m(p[0], p[1]);
                    w.push({
                        kind: "moveImage",
                        idx: x.index,
                        dRow: h.r - p[0],
                        dCol: h.c - p[1]
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
        rectLineWidth: 1,
        rectStrokeAlign: 0,
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
    }, B = Ef()((...e)=>({
            ...Pg,
            ...zg(...e),
            ...jg(...e),
            ...Rg(...e),
            ...bg(...e),
            ...wg(...e),
            ...Ng(...e)
        })), Mg = ()=>B((e)=>e.grid), Lg = ()=>B((e)=>e.tool), Og = ()=>B((e)=>e.colorIdx), Dg = ()=>B((e)=>e.outlineIdx), Ag = ()=>B((e)=>e.selectedItems), Fg = ()=>B((e)=>e.clipboard), $g = ()=>B((e)=>e.jsonOutput), Ug = ()=>B((e)=>e.tensorOutput), Bg = ()=>B((e)=>e.selectMode), Wg = Object.freeze(Object.defineProperty({
        __proto__: null,
        CELL_UNITS: nt,
        LINE_WIDTHS: us,
        STROKE_ALIGNS: zf,
        SUBDIVISIONS: Ir,
        TEXT_SIZES: If,
        getSelectionBoundsAll: Ue,
        serializeSelection: Ar,
        tenthsToWidth: cs,
        useClipboard: Fg,
        useColorIdx: Og,
        useGrid: Mg,
        useGridStore: B,
        useJsonOutput: $g,
        useOutlineIdx: Dg,
        useSelectMode: Bg,
        useSelectedItems: Ag,
        useTensorOutput: Ug,
        useTool: Lg,
        widthToTenths: Ot
    }, Symbol.toStringTag, {
        value: "Module"
    })), Bu = 10;
    function Vg() {
        const e = import.meta;
        if (!("env" in e)) return !1;
        const t = e.env;
        return typeof t == "object" && t !== null && "DEV" in t && t.DEV === !0;
    }
    function Gg(e) {
        const t = e.get_schema_version?.();
        (t !== Bu || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${Bu}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function Hg(e, t, n) {
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
                    const s = await ca(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    if (Gg(a), B.getState().setGrid(a), Vg()) {
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
    function Lf(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Lf(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Of() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Lf(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Wu = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Vu = Of, Df = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Vu(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const d = n?.[u], c = l?.[u];
                if (d === null) return null;
                const f = Wu(d) || Wu(c);
                return o[u][f];
            }), s = n && Object.entries(n).reduce((u, d)=>{
                let [c, f] = d;
                return f === void 0 || (u[c] = f), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d)=>{
                let { class: c, className: f, ...g } = d;
                return Object.entries(g).every((m)=>{
                    let [w, y] = m;
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
            return Vu(e, i, a, n?.class, n?.className);
        };
    function Gu(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Af(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Gu(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Gu(e[o], null);
                }
            };
        };
    }
    function fs(...e) {
        return C.useCallback(Af(...e), e);
    }
    function hl(e) {
        const t = Qg(e), n = C.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = C.Children.toArray(l), a = s.find(Yg);
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
    var Kg = hl("Slot");
    function Qg(e) {
        const t = C.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (C.isValidElement(o)) {
                const i = Zg(o), s = Xg(l, o.props);
                return o.type !== C.Fragment && (s.ref = r ? Af(r, i) : i), C.cloneElement(o, s);
            }
            return C.Children.count(o) > 1 ? C.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var qg = Symbol("radix.slottable");
    function Yg(e) {
        return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qg;
    }
    function Xg(e, t) {
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
    function Zg(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var Jg = [
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
    ], no = Jg.reduce((e, t)=>{
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
    function ma(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = C.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (c)=>{
                const { scope: f, children: g, ...m } = c, w = f?.[e]?.[a] || s, y = C.useMemo(()=>m, Object.values(m));
                return v.jsx(w.Provider, {
                    value: y,
                    children: g
                });
            };
            u.displayName = l + "Provider";
            function d(c, f) {
                const g = f?.[e]?.[a] || s, m = C.useContext(g);
                if (m) return m;
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
            ex(o, ...t)
        ];
    }
    function ex(...e) {
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
    function tx(e) {
        const t = e + "CollectionProvider", [n, r] = ma(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (w)=>{
            const { scope: y, children: x } = w, p = ne.useRef(null), h = ne.useRef(new Map).current;
            return v.jsx(o, {
                scope: y,
                itemMap: h,
                collectionRef: p,
                children: x
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = hl(s), u = ne.forwardRef((w, y)=>{
            const { scope: x, children: p } = w, h = l(s, x), S = fs(y, h.collectionRef);
            return v.jsx(a, {
                ref: S,
                children: p
            });
        });
        u.displayName = s;
        const d = e + "CollectionItemSlot", c = "data-radix-collection-item", f = hl(d), g = ne.forwardRef((w, y)=>{
            const { scope: x, children: p, ...h } = w, S = ne.useRef(null), k = fs(y, S), z = l(d, x);
            return ne.useEffect(()=>(z.itemMap.set(S, {
                    ref: S,
                    ...h
                }), ()=>void z.itemMap.delete(S))), v.jsx(f, {
                [c]: "",
                ref: k,
                children: p
            });
        });
        g.displayName = d;
        function m(w) {
            const y = l(e + "CollectionConsumer", w);
            return ne.useCallback(()=>{
                const p = y.collectionRef.current;
                if (!p) return [];
                const h = Array.from(p.querySelectorAll(`[${c}]`));
                return Array.from(y.itemMap.values()).sort((z, N)=>h.indexOf(z.ref.current) - h.indexOf(N.ref.current));
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
            m,
            r
        ];
    }
    function yn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Ff = globalThis?.document ? C.useLayoutEffect : ()=>{}, nx = Sc[" useInsertionEffect ".trim().toString()] || Ff;
    function Ll({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = rx({
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
                const c = ox(d) ? d(e) : d;
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
    function rx({ defaultProp: e, onChange: t }) {
        const [n, r] = C.useState(e), o = C.useRef(n), l = C.useRef(t);
        return nx(()=>{
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
    function ox(e) {
        return typeof e == "function";
    }
    var lx = Sc[" useId ".trim().toString()] || (()=>{}), ix = 0;
    function sx(e) {
        const [t, n] = C.useState(lx());
        return Ff(()=>{
            n((r)=>r ?? String(ix++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var ax = C.createContext(void 0);
    function $f(e) {
        const t = C.useContext(ax);
        return e || t || "ltr";
    }
    function ux(e) {
        const t = C.useRef(e);
        return C.useEffect(()=>{
            t.current = e;
        }), C.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var pi = "rovingFocusGroup.onEntryFocus", cx = {
        bubbles: !1,
        cancelable: !0
    }, uo = "RovingFocusGroup", [ps, Uf, dx] = tx(uo), [fx, Bf] = ma(uo, [
        dx
    ]), [px, mx] = fx(uo), Wf = C.forwardRef((e, t)=>v.jsx(ps.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: v.jsx(ps.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: v.jsx(hx, {
                    ...e,
                    ref: t
                })
            })
        }));
    Wf.displayName = uo;
    var hx = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...c } = e, f = C.useRef(null), g = fs(t, f), m = $f(l), [w, y] = Ll({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: uo
        }), [x, p] = C.useState(!1), h = ux(u), S = Uf(n), k = C.useRef(!1), [z, N] = C.useState(0);
        return C.useEffect(()=>{
            const _ = f.current;
            if (_) return _.addEventListener(pi, h), ()=>_.removeEventListener(pi, h);
        }, [
            h
        ]), v.jsx(px, {
            scope: n,
            orientation: r,
            dir: m,
            loop: o,
            currentTabStopId: w,
            onItemFocus: C.useCallback((_)=>y(_), [
                y
            ]),
            onItemShiftTab: C.useCallback(()=>p(!0), []),
            onFocusableItemAdd: C.useCallback(()=>N((_)=>_ + 1), []),
            onFocusableItemRemove: C.useCallback(()=>N((_)=>_ - 1), []),
            children: v.jsx(no.div, {
                tabIndex: x || z === 0 ? -1 : 0,
                "data-orientation": r,
                ...c,
                ref: g,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: yn(e.onMouseDown, ()=>{
                    k.current = !0;
                }),
                onFocus: yn(e.onFocus, (_)=>{
                    const D = !k.current;
                    if (_.target === _.currentTarget && D && !x) {
                        const O = new CustomEvent(pi, cx);
                        if (_.currentTarget.dispatchEvent(O), !O.defaultPrevented) {
                            const q = S().filter((Q)=>Q.focusable), ae = q.find((Q)=>Q.active), me = q.find((Q)=>Q.id === w), he = [
                                ae,
                                me,
                                ...q
                            ].filter(Boolean).map((Q)=>Q.ref.current);
                            Hf(he, d);
                        }
                    }
                    k.current = !1;
                }),
                onBlur: yn(e.onBlur, ()=>p(!1))
            })
        });
    }), Vf = "RovingFocusGroupItem", Gf = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = sx(), u = l || a, d = mx(Vf, n), c = d.currentTabStopId === u, f = Uf(n), { onFocusableItemAdd: g, onFocusableItemRemove: m, currentTabStopId: w } = d;
        return C.useEffect(()=>{
            if (r) return g(), ()=>m();
        }, [
            r,
            g,
            m
        ]), v.jsx(ps.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: v.jsx(no.span, {
                tabIndex: c ? 0 : -1,
                "data-orientation": d.orientation,
                ...s,
                ref: t,
                onMouseDown: yn(e.onMouseDown, (y)=>{
                    r ? d.onItemFocus(u) : y.preventDefault();
                }),
                onFocus: yn(e.onFocus, ()=>d.onItemFocus(u)),
                onKeyDown: yn(e.onKeyDown, (y)=>{
                    if (y.key === "Tab" && y.shiftKey) {
                        d.onItemShiftTab();
                        return;
                    }
                    if (y.target !== y.currentTarget) return;
                    const x = yx(y, d.orientation, d.dir);
                    if (x !== void 0) {
                        if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                        y.preventDefault();
                        let h = f().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (x === "last") h.reverse();
                        else if (x === "prev" || x === "next") {
                            x === "prev" && h.reverse();
                            const S = h.indexOf(y.currentTarget);
                            h = d.loop ? vx(h, S + 1) : h.slice(S + 1);
                        }
                        setTimeout(()=>Hf(h));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: c,
                    hasTabStop: w != null
                }) : i
            })
        });
    });
    Gf.displayName = Vf;
    var gx = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function xx(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function yx(e, t, n) {
        const r = xx(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return gx[r];
    }
    function Hf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function vx(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var wx = Wf, Sx = Gf, Kf = "Toggle", Qf = C.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = Ll({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Kf
        });
        return v.jsx(no.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: yn(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Qf.displayName = Kf;
    var rn = "ToggleGroup", [qf] = ma(rn, [
        Bf
    ]), Yf = Bf(), ha = ne.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return v.jsx(kx, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return v.jsx(_x, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${rn}\``);
    });
    ha.displayName = rn;
    var [Xf, Zf] = qf(rn), kx = ne.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Ll({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: rn
        });
        return v.jsx(Xf, {
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
            children: v.jsx(Jf, {
                ...l,
                ref: t
            })
        });
    }), _x = ne.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Ll({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: rn
        }), a = ne.useCallback((d)=>s((c = [])=>[
                    ...c,
                    d
                ]), [
            s
        ]), u = ne.useCallback((d)=>s((c = [])=>c.filter((f)=>f !== d)), [
            s
        ]);
        return v.jsx(Xf, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: v.jsx(Jf, {
                ...l,
                ref: t
            })
        });
    });
    ha.displayName = rn;
    var [Cx, Ex] = qf(rn), Jf = ne.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = Yf(n), d = $f(i), c = {
            role: "group",
            dir: d,
            ...a
        };
        return v.jsx(Cx, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? v.jsx(wx, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: d,
                loop: s,
                children: v.jsx(no.div, {
                    ...c,
                    ref: t
                })
            }) : v.jsx(no.div, {
                ...c,
                ref: t
            })
        });
    }), gl = "ToggleGroupItem", ep = ne.forwardRef((e, t)=>{
        const n = Zf(gl, e.__scopeToggleGroup), r = Ex(gl, e.__scopeToggleGroup), o = Yf(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = ne.useRef(null);
        return r.rovingFocus ? v.jsx(Sx, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: v.jsx(Hu, {
                ...s,
                ref: t
            })
        }) : v.jsx(Hu, {
            ...s,
            ref: t
        });
    });
    ep.displayName = gl;
    var Hu = ne.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = Zf(gl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return v.jsx(Qf, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Tx = ha, Ix = ep;
    const zx = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Nx = (e, t)=>({
            classGroupId: e,
            validator: t
        }), tp = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), xl = "-", Ku = [], Rx = "arbitrary..", jx = (e)=>{
        const t = Px(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return bx(i);
                const s = i.split(xl), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return np(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? zx(u, a) : a : u || Ku;
                }
                return n[i] || Ku;
            }
        };
    }, np = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = np(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(xl) : e.slice(t).join(xl), a = i.length;
        for(let u = 0; u < a; u++){
            const d = i[u];
            if (d.validator(s)) return d.classGroupId;
        }
    }, bx = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Rx + r : void 0;
        })(), Px = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Mx(n, t);
    }, Mx = (e, t)=>{
        const n = tp();
        for(const r in e){
            const o = e[r];
            ga(o, n, r, t);
        }
        return n;
    }, ga = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Lx(i, t, n, r);
        }
    }, Lx = (e, t, n, r)=>{
        if (typeof e == "string") {
            Ox(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Dx(e, t, n, r);
            return;
        }
        Ax(e, t, n, r);
    }, Ox = (e, t, n)=>{
        const r = e === "" ? t : rp(t, e);
        r.classGroupId = n;
    }, Dx = (e, t, n, r)=>{
        if (Fx(e)) {
            ga(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Nx(n, e));
    }, Ax = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            ga(a, rp(t, s), n, r);
        }
    }, rp = (e, t)=>{
        let n = e;
        const r = t.split(xl), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = tp(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Fx = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, $x = (e)=>{
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
    }, ms = "!", Qu = ":", Ux = [], qu = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Bx = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const d = o.length;
            for(let w = 0; w < d; w++){
                const y = o[w];
                if (i === 0 && s === 0) {
                    if (y === Qu) {
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
            c.endsWith(ms) ? (f = c.slice(0, -1), g = !0) : c.startsWith(ms) && (f = c.slice(1), g = !0);
            const m = u && u > a ? u - a : void 0;
            return qu(l, g, f, m);
        };
        if (t) {
            const o = t + Qu, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : qu(Ux, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Wx = (e)=>{
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
    }, Vx = (e)=>({
            cache: $x(e.cacheSize),
            parseClassName: Bx(e),
            sortModifiers: Wx(e),
            ...jx(e)
        }), Gx = /\s+/, Hx = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Gx);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const d = s[u], { isExternal: c, modifiers: f, hasImportantModifier: g, baseClassName: m, maybePostfixModifierPosition: w } = n(d);
            if (c) {
                a = d + (a.length > 0 ? " " + a : a);
                continue;
            }
            let y = !!w, x = r(y ? m.substring(0, w) : m);
            if (!x) {
                if (!y) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (x = r(m), !x) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                y = !1;
            }
            const p = f.length === 0 ? "" : f.length === 1 ? f[0] : l(f).join(":"), h = g ? p + ms : p, S = h + x;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const k = o(x, y);
            for(let z = 0; z < k.length; ++z){
                const N = k[z];
                i.push(h + N);
            }
            a = d + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, Kx = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = op(n)) && (o && (o += " "), o += r);
        return o;
    }, op = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = op(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Qx = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((d, c)=>c(d), e());
            return n = Vx(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const d = Hx(a, n);
            return o(a, d), d;
        };
        return l = i, (...a)=>l(Kx(...a));
    }, qx = [], ge = (e)=>{
        const t = (n)=>n[e] || qx;
        return t.isThemeGetter = !0, t;
    }, lp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ip = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Yx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Xx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ey = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ty = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Pt = (e)=>Yx.test(e), U = (e)=>!!e && !Number.isNaN(Number(e)), Mt = (e)=>!!e && Number.isInteger(Number(e)), mi = (e)=>e.endsWith("%") && U(e.slice(0, -1)), wt = (e)=>Xx.test(e), sp = ()=>!0, ny = (e)=>Zx.test(e) && !Jx.test(e), xa = ()=>!1, ry = (e)=>ey.test(e), oy = (e)=>ty.test(e), ly = (e)=>!M(e) && !L(e), iy = (e)=>on(e, cp, xa), M = (e)=>lp.test(e), un = (e)=>on(e, dp, ny), Yu = (e)=>on(e, my, U), sy = (e)=>on(e, pp, sp), ay = (e)=>on(e, fp, xa), Xu = (e)=>on(e, ap, xa), uy = (e)=>on(e, up, oy), zo = (e)=>on(e, mp, ry), L = (e)=>ip.test(e), wr = (e)=>In(e, dp), cy = (e)=>In(e, fp), Zu = (e)=>In(e, ap), dy = (e)=>In(e, cp), fy = (e)=>In(e, up), No = (e)=>In(e, mp, !0), py = (e)=>In(e, pp, !0), on = (e, t, n)=>{
        const r = lp.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, In = (e, t, n = !1)=>{
        const r = ip.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, ap = (e)=>e === "position" || e === "percentage", up = (e)=>e === "image" || e === "url", cp = (e)=>e === "length" || e === "size" || e === "bg-size", dp = (e)=>e === "length", my = (e)=>e === "number", fp = (e)=>e === "family-name", pp = (e)=>e === "number" || e === "weight", mp = (e)=>e === "shadow", hy = ()=>{
        const e = ge("color"), t = ge("font"), n = ge("text"), r = ge("font-weight"), o = ge("tracking"), l = ge("leading"), i = ge("breakpoint"), s = ge("container"), a = ge("spacing"), u = ge("radius"), d = ge("shadow"), c = ge("inset-shadow"), f = ge("text-shadow"), g = ge("drop-shadow"), m = ge("blur"), w = ge("perspective"), y = ge("aspect"), x = ge("ease"), p = ge("animate"), h = ()=>[
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
                L,
                M
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
                L,
                M,
                a
            ], D = ()=>[
                Pt,
                "full",
                "auto",
                ..._()
            ], O = ()=>[
                Mt,
                "none",
                "subgrid",
                L,
                M
            ], q = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Mt,
                        L,
                        M
                    ]
                },
                Mt,
                L,
                M
            ], ae = ()=>[
                Mt,
                "auto",
                L,
                M
            ], me = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                L,
                M
            ], Ce = ()=>[
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
            ], he = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], Q = ()=>[
                "auto",
                ..._()
            ], b = ()=>[
                Pt,
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
            ], E = ()=>[
                Pt,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ..._()
            ], P = ()=>[
                Pt,
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
                L,
                M
            ], A = ()=>[
                ...S(),
                Zu,
                Xu,
                {
                    position: [
                        L,
                        M
                    ]
                }
            ], V = ()=>[
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
                dy,
                iy,
                {
                    size: [
                        L,
                        M
                    ]
                }
            ], Ee = ()=>[
                mi,
                wr,
                un
            ], Z = ()=>[
                "",
                "none",
                "full",
                u,
                L,
                M
            ], Y = ()=>[
                "",
                U,
                wr,
                un
            ], De = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], sn = ()=>[
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
            ], ue = ()=>[
                U,
                mi,
                Zu,
                Xu
            ], Rn = ()=>[
                "",
                "none",
                m,
                L,
                M
            ], R = ()=>[
                "none",
                U,
                L,
                M
            ], Re = ()=>[
                "none",
                U,
                L,
                M
            ], dr = ()=>[
                U,
                L,
                M
            ], $ = ()=>[
                Pt,
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
                    wt
                ],
                breakpoint: [
                    wt
                ],
                color: [
                    sp
                ],
                container: [
                    wt
                ],
                "drop-shadow": [
                    wt
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    ly
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
                    wt
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
                    wt
                ],
                shadow: [
                    wt
                ],
                spacing: [
                    "px",
                    U
                ],
                text: [
                    wt
                ],
                "text-shadow": [
                    wt
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
                            Pt,
                            M,
                            L,
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
                            U,
                            M,
                            L,
                            s
                        ]
                    }
                ],
                "break-after": [
                    {
                        "break-after": h()
                    }
                ],
                "break-before": [
                    {
                        "break-before": h()
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
                            Mt,
                            "auto",
                            L,
                            M
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            Pt,
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
                            Pt,
                            "auto",
                            "initial",
                            "none",
                            M
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            U,
                            L,
                            M
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            U,
                            L,
                            M
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            Mt,
                            "first",
                            "last",
                            "none",
                            L,
                            M
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
                        col: q()
                    }
                ],
                "col-start": [
                    {
                        "col-start": ae()
                    }
                ],
                "col-end": [
                    {
                        "col-end": ae()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": O()
                    }
                ],
                "row-start-end": [
                    {
                        row: q()
                    }
                ],
                "row-start": [
                    {
                        "row-start": ae()
                    }
                ],
                "row-end": [
                    {
                        "row-end": ae()
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
                        "auto-cols": me()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": me()
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
                            ...Ce(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...he(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...he()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...Ce()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...he(),
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
                            ...he(),
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
                        "place-content": Ce()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...he(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...he()
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
                        size: b()
                    }
                ],
                "inline-size": [
                    {
                        inline: [
                            "auto",
                            ...E()
                        ]
                    }
                ],
                "min-inline-size": [
                    {
                        "min-inline": [
                            "auto",
                            ...E()
                        ]
                    }
                ],
                "max-inline-size": [
                    {
                        "max-inline": [
                            "none",
                            ...E()
                        ]
                    }
                ],
                "block-size": [
                    {
                        block: [
                            "auto",
                            ...P()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...P()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...P()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...b()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...b()
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
                            ...b()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...b()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...b()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...b()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            wr,
                            un
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
                            py,
                            sy
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
                            M
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            cy,
                            ay,
                            t
                        ]
                    }
                ],
                "font-features": [
                    {
                        "font-features": [
                            M
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
                            L,
                            M
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            U,
                            "none",
                            L,
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
                            L,
                            M
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
                            L,
                            M
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
                            L,
                            un
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
                            U,
                            "auto",
                            L,
                            M
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
                            L,
                            M
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
                            L,
                            M
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
                        bg: A()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: V()
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
                                    Mt,
                                    L,
                                    M
                                ],
                                radial: [
                                    "",
                                    L,
                                    M
                                ],
                                conic: [
                                    Mt,
                                    L,
                                    M
                                ]
                            },
                            fy,
                            uy
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
                        from: Ee()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Ee()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Ee()
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
                        rounded: Z()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": Z()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": Z()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": Z()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": Z()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": Z()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": Z()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": Z()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": Z()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": Z()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": Z()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": Z()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": Z()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": Z()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": Z()
                    }
                ],
                "border-w": [
                    {
                        border: Y()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": Y()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": Y()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": Y()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": Y()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": Y()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": Y()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": Y()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": Y()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": Y()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": Y()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": Y()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": Y()
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
                            L,
                            M
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            U,
                            wr,
                            un
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
                            No,
                            zo
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
                            No,
                            zo
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
                        ring: Y()
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
                            U,
                            un
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
                        "inset-ring": Y()
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
                            f,
                            No,
                            zo
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
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...sn(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": sn()
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
                        "mask-linear-from": ue()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": ue()
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
                        "mask-t-from": ue()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": ue()
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
                        "mask-r-from": ue()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": ue()
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
                        "mask-b-from": ue()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": ue()
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
                        "mask-l-from": ue()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": ue()
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
                        "mask-x-from": ue()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": ue()
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
                        "mask-y-from": ue()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": ue()
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
                            L,
                            M
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": ue()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": ue()
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
                            U
                        ]
                    }
                ],
                "mask-image-conic-from-pos": [
                    {
                        "mask-conic-from": ue()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": ue()
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
                        mask: A()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: V()
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
                            L,
                            M
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            L,
                            M
                        ]
                    }
                ],
                blur: [
                    {
                        blur: Rn()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            g,
                            No,
                            zo
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
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            U,
                            L,
                            M
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": Rn()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            U,
                            L,
                            M
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
                            L,
                            M
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
                            L,
                            M
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            x,
                            L,
                            M
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            U,
                            L,
                            M
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            p,
                            L,
                            M
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
                            L,
                            M
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
                        rotate: R()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": R()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": R()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": R()
                    }
                ],
                scale: [
                    {
                        scale: Re()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": Re()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": Re()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": Re()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: dr()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": dr()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": dr()
                    }
                ],
                transform: [
                    {
                        transform: [
                            L,
                            M,
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
                        translate: $()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": $()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": $()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": $()
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
                            L,
                            M
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
                            L,
                            M
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
                            U,
                            wr,
                            un,
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
    }, gy = Qx(hy);
    function zn(...e) {
        return gy(Of(e));
    }
    const xy = Df("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
        const l = r ? Kg : "button";
        return v.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: zn(xy({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const yy = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Sr(e) {
        return yy[e] ?? "#000000";
    }
    function vy(e) {
        return typeof e == "object" && e !== null;
    }
    function wy(e) {
        let t, n, r, o, l;
        if (Array.isArray(e)) t = e[0], n = e[1], r = e[2], o = e[3], l = e.length >= 9 ? e[8] : e[4];
        else if (vy(e)) t = e.r, n = e.c, r = e.color, o = e.size, l = e.text;
        else return null;
        return typeof t != "number" || typeof n != "number" ? null : {
            r: t,
            c: n,
            color: typeof r == "number" ? r : 0,
            size: typeof o == "number" ? o : 1,
            text: typeof l == "string" ? l : String(l ?? "")
        };
    }
    function Sy(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, d = s * a + o * 2;
        e.width = u, e.height = d;
        const c = e.getContext("2d");
        if (c) {
            l && (c.fillStyle = l, c.fillRect(0, 0, u, d)), c.translate(o, o);
            for (const f of t.cells ?? []){
                const [g, m, w] = f, y = f.length >= 4 ? f[3] : 1, x = Sr(w);
                x && (c.fillStyle = x, c.fillRect(m * a, g * a, y * a, y * a));
            }
            for (const f of t.images ?? []){
                if (!Array.isArray(f) || f.length < 4) continue;
                const [g, m, w, y] = f, x = Math.min(m, y) * a, p = Math.min(g, w) * a, h = Math.abs(y - m) * a, S = Math.abs(w - g) * a;
                c.fillStyle = "#eef2f7", c.fillRect(x, p, h, S), c.strokeStyle = "#c3ccd8", c.lineWidth = 1, c.strokeRect(x + .5, p + .5, h - 1, S - 1);
            }
            for (const [f, g, m, w, y, x, p, h] of t.rects ?? []){
                const S = Math.min(g, w) * a, k = Math.min(f, m) * a, z = Math.abs(w - g) * a, N = Math.abs(m - f) * a, _ = Sr(y);
                _ && (c.fillStyle = _, c.fillRect(S, k, z, N));
                const D = Sr(x);
                if (D) {
                    const O = Math.max(1, a / 8 * ((p ?? 10) / 10)), q = O / 2, ae = h ?? 0, [me, Ce, he, Q] = ae === 1 ? [
                        S + q,
                        k + q,
                        z - O,
                        N - O
                    ] : ae === 2 ? [
                        S - q,
                        k - q,
                        z + O,
                        N + O
                    ] : [
                        S,
                        k,
                        z,
                        N
                    ];
                    c.strokeStyle = D, c.lineWidth = O, c.strokeRect(me, Ce, he, Q);
                }
            }
            for (const [f, g, m, w, y] of t.lines ?? []){
                const x = Sr(y);
                x && (c.strokeStyle = x, c.lineWidth = Math.max(1, a / 6), c.beginPath(), c.moveTo(g * a, f * a), c.lineTo(w * a, m * a), c.stroke());
            }
            c.textBaseline = "alphabetic";
            for (const f of t.texts ?? []){
                const g = wy(f);
                g && (c.fillStyle = Sr(g.color) ?? "#000000", c.font = `${Math.max(6, g.size * a * nt)}px 'BigBlue Terminal', monospace`, c.fillText(g.text, g.c * a, (g.r + g.size * nt) * a));
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
            Sy(r.current, e, o);
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
    function cr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
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
                const m = Math.max(0, g.clientX - a.current.x), w = Math.max(0, g.clientY - a.current.y);
                i({
                    x: m,
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
            className: zn("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
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
    function Xt(e) {
        return typeof e == "object" && e !== null;
    }
    function Ol(e) {
        return Xt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && typeof e.name == "string" && Xt(e.design);
    }
    function ky(e) {
        return Array.isArray(e) && e.every(Ol);
    }
    function hp(e) {
        return Xt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && Xt(e.input) && Xt(e.output);
    }
    function _y(e) {
        return Array.isArray(e) && e.every(hp);
    }
    function Cy(e) {
        return Xt(e) && typeof e.uploadUrl == "string" && typeof e.publicUrl == "string" && typeof e.key == "string";
    }
    const gp = "https://api.seanneilan.com", ya = "grid-draw-token", hs = "grid-draw-auth-expired";
    function xp() {
        return localStorage.getItem(ya);
    }
    function yp() {
        localStorage.removeItem(ya);
    }
    async function Ey(e, t) {
        const n = await fetch(`${gp}/api/login`, {
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
        if (!Xt(r) || typeof r.token != "string") throw new Error("login failed (malformed response)");
        localStorage.setItem(ya, r.token);
    }
    async function vp(e, t, n) {
        const r = {}, o = xp();
        o && (r.Authorization = `Bearer ${o}`), n !== void 0 && (r["Content-Type"] = "application/json");
        const l = await fetch(`${gp}${t}`, {
            method: e,
            headers: r,
            body: n === void 0 ? void 0 : JSON.stringify(n)
        });
        if (l.status === 401) throw yp(), window.dispatchEvent(new Event(hs)), new Error("session expired — please log in again");
        if (!l.ok) {
            const i = await l.json().catch(()=>null), s = Xt(i) && typeof i.error == "string" ? i.error : void 0;
            throw new Error(s ?? `${e} ${t} failed (${l.status})`);
        }
        return l;
    }
    async function Nn(e, t, n, r) {
        const l = await (await vp(e, t, r)).json();
        if (!n(l)) throw new Error(`${e} ${t}: unexpected response shape`);
        return l;
    }
    async function va(e, t, n) {
        await vp(e, t, n);
    }
    function Ty() {
        return Nn("GET", "/api/designs", ky);
    }
    function Iy(e) {
        return Nn("GET", `/api/designs/${e}`, Ol);
    }
    function zy(e) {
        return Nn("GET", `/api/designs?name=${encodeURIComponent(e)}`, Ol);
    }
    async function Ny(e, t, n) {
        return (await Nn("PUT", "/api/designs", Ol, {
            name: e,
            design: t,
            history: n
        })).id;
    }
    function Ry(e) {
        return va("DELETE", `/api/designs/${e}`);
    }
    function Ju() {
        return Nn("GET", "/api/examples", _y);
    }
    async function jy(e, t, n) {
        return (await Nn("POST", "/api/examples", hp, {
            input: e,
            output: t,
            delta: n
        })).id;
    }
    function by(e, t, n, r) {
        return va("PUT", `/api/examples/${e}`, {
            input: t,
            output: n,
            delta: r
        });
    }
    function Py(e) {
        return va("DELETE", `/api/examples/${e}`);
    }
    async function My(e) {
        const t = e.type || "application/octet-stream", { uploadUrl: n, publicUrl: r } = await Nn("POST", "/api/images/presign", Cy, {
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
    const ro = 31;
    function Ly(e) {
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
    function Oy(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = Ly(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function ec(e, t) {
        return e >= 0 && e <= ro && t >= 0 && t <= ro;
    }
    function tc(e, t) {
        if (t instanceof e.SymbolicTensor) return t;
        throw new Error("expected a SymbolicTensor from layer.apply");
    }
    const ct = ro + 1, wp = "indexeddb://grid-draw-coord-model";
    let nc, ir = null;
    async function wa() {
        return nc ??= ca(()=>import("./index2.js"), []), nc;
    }
    function Dy(e) {
        const t = e.input({
            shape: [
                2 * ct
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
        const r = tc(e, e.layers.dense({
            units: ct,
            activation: "softmax",
            name: "r"
        }).apply(n)), o = tc(e, e.layers.dense({
            units: ct,
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
    function Sp(e, t) {
        const n = new Float32Array(t.length * 2 * ct);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * ct + r] = 1, n[l * 2 * ct + ct + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * ct
        ]);
    }
    function rc(e, t) {
        const n = new Float32Array(t.length * ct);
        return t.forEach((r, o)=>{
            n[o * ct + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            ct
        ]);
    }
    async function Ay() {
        const e = await wa();
        try {
            return ir = await e.loadLayersModel(wp), !0;
        } catch  {
            return ir = null, !1;
        }
    }
    async function Fy(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await wa(), { pairs: s, skippedExamples: a } = Oy(e), u = [];
        let d = 0;
        for (const y of s)ec(y[0], y[1]) && ec(y[2], y[3]) ? u.push(y) : d++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const c = Sp(i, u.map((y)=>[
                y[0],
                y[1]
            ])), f = rc(i, u.map((y)=>y[2])), g = rc(i, u.map((y)=>y[3])), m = Dy(i);
        m.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let w = NaN;
        return await m.fit(c, [
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
        }), c.dispose(), f.dispose(), g.dispose(), ir?.dispose(), ir = m, await m.save(wp), {
            pairs: u.length,
            droppedPoints: d,
            skippedExamples: a,
            finalLoss: w
        };
    }
    async function $y(e) {
        if (!ir) throw new Error("No model yet — train one first.");
        const t = ir, n = await wa(), r = e.cells ?? [];
        if (r.length === 0) return {
            w: 1,
            h: 1,
            cells: [],
            lines: [],
            rects: [],
            texts: [],
            sub: nt
        };
        const o = r.map(([u, d])=>[
                Math.max(0, Math.min(ro, u)),
                Math.max(0, Math.min(ro, d))
            ]), l = n.tidy(()=>{
            const u = Sp(n, o), d = t.predict(u), c = Array.isArray(d) ? d : [
                d
            ], f = c[0], g = c[1], m = f.argMax(1).dataSync(), w = g.argMax(1).dataSync();
            return r.map((y, x)=>[
                    m[x],
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
            sub: nt
        };
    }
    const de = Ef((e, t)=>({
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
                        designs: await Ty(),
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
                const l = await Ny(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>zy(n),
            getDrawingById: (n)=>Iy(n),
            saveExamplePair: async (n, r, o)=>{
                await jy(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await by(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await Ry(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await Py(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Ay();
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
                    const r = await Fy(n, {
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
            runPredict: (n)=>$y(n)
        })), kp = "/grid-draw/";
    function Uy(e) {
        window.location.href = `${kp}design/${encodeURIComponent(e)}/`;
    }
    function By() {
        window.location.href = kp;
    }
    function _p({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = de((y)=>y.designs), o = de((y)=>y.examples), l = de((y)=>y.loadingDesigns || y.loadingExamples), i = de((y)=>y.error), s = de((y)=>y.loadDesigns), a = de((y)=>y.loadExamples), u = de((y)=>y.deleteDrawing), d = de((y)=>y.deleteExamplePair), c = C.useCallback(()=>{
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
        ]), m = C.useCallback((y)=>{
            n ? n(y) : Uy(y);
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
                                                    onClick: ()=>m(y.name),
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
        return e ? v.jsxs(cr, {
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
                            onClick: By,
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
                                yp(), window.location.reload();
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
    const Wy = "/grid-draw/";
    function oc({ design: e, label: t, onClick: n }) {
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
    function Vy({ input: e, output: t, onInput: n, onOutput: r }) {
        return v.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                v.jsx(oc, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                v.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                v.jsx(oc, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function Cp({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = de((a)=>a.examples), o = de((a)=>a.error), l = de((a)=>a.loadExamples);
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
                                        v.jsx(Vy, {
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
        return e ? v.jsx(cr, {
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
                                window.location.href = Wy;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const vn = 2, gt = 8, ln = 48, kr = "/grid-draw/", Ep = [
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
    function Gy(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function lc() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - ln)
        };
    }
    const Hy = .25, Ky = 12;
    function Qy(e, t) {
        const [n, r] = C.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), o = C.useRef(n);
        o.current = n;
        const l = C.useRef(!1), [i, s] = C.useState(!1), a = C.useRef(null), u = C.useCallback((c)=>{
            if (r(c), !e) return;
            e.set_camera(c.x, c.y, c.zoom);
            const f = B.getState();
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
                const m = o.current, w = g.deltaY < 0 ? 1.1 : 1 / 1.1, y = Math.min(Ky, Math.max(Hy, m.zoom * w));
                if (y === m.zoom) return;
                const x = g.clientX, p = g.clientY - ln, h = m.x + x * (1 / m.zoom - 1 / y), S = m.y + p * (1 / m.zoom - 1 / y);
                u({
                    x: h,
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
                g.code !== "Space" || B.getState().textEdit || (g.preventDefault(), l.current = !0, s(!0));
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
    function fn(e, t) {
        const n = e.currentTarget, r = n.getBoundingClientRect(), o = (e.clientX - r.left) * (n.width / r.width), l = (e.clientY - r.top) * (n.height / r.height);
        return {
            x: o / t.zoom + t.x,
            y: l / t.zoom + t.y
        };
    }
    function Tp(e) {
        return gt / e;
    }
    function bn(e, t, n) {
        const { x: r, y: o } = fn(e, t), l = Tp(n), i = (s)=>Math.floor(Math.floor(s / vn) / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function Lt(e, t, n) {
        const { x: r, y: o } = fn(e, t), l = Tp(n), i = (s)=>Math.round(s / vn / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function qy({ camRef: e, applyCamera: t, isSpaceDown: n, panRef: r }) {
        const { tool: o, isDrawing: l, lineStart: i, rectStart: s, subdivision: a, beginTextEdit: u, selectedItems: d, selectMode: c, isSelecting: f, selectBoxStart: g, selectDragStart: m, updateBoxSelection: w, finishBoxSelection: y, cancelBoxSelection: x, finishDragSelection: p, cancelDragSelection: h, updateResize: S, finishResize: k, cancelResize: z, updateRotate: N, finishRotate: _, cancelRotate: D, setMousePos: O, pressSelectAt: q, renderDragPreview: ae, hoverAffordanceAt: me, doubleClickAt: Ce, pressDrawAt: he, dragDrawAt: Q, endDrawStroke: b, stopDrawing: E, startLine: P, renderLinePreview: T, commitLine: A, finishLine: V, cancelLine: oe, startRect: Ee, renderRectPreview: Z, commitRect: Y, finishRect: De, cancelRect: sn } = B(), ue = C.useCallback(($)=>{
            if ($.button === 1 || $.button === 0 && n.current) {
                $.preventDefault(), r.current = {
                    x: $.clientX,
                    y: $.clientY,
                    camX: e.current.x,
                    camY: e.current.y
                }, $.currentTarget.style.cursor = "grabbing";
                return;
            }
            if (o === "draw") {
                const { col: G, row: F } = bn($, e.current, a);
                he({
                    row: F,
                    col: G
                });
            } else if (o === "line") {
                const { col: G, row: F } = Lt($, e.current, a);
                P({
                    row: F,
                    col: G
                });
            } else if (o === "rect") {
                const { col: G, row: F } = Lt($, e.current, a);
                Ee({
                    row: F,
                    col: G
                });
            } else if (o === "text") {
                const { col: G, row: F } = bn($, e.current, a);
                u({
                    row: F,
                    col: G
                });
            } else if (o === "select") {
                const { col: G, row: F } = bn($, e.current, a), { x: je, y: Dl } = fn($, e.current);
                q({
                    x: je,
                    y: Dl,
                    row: F,
                    col: G,
                    shift: $.shiftKey,
                    zoom: e.current.zoom
                });
            }
        }, [
            o,
            a,
            he,
            P,
            Ee,
            u,
            q,
            e,
            n,
            r
        ]), Rn = C.useCallback(($)=>{
            if (o !== "select" || n.current) return;
            const { x: G, y: F } = fn($, e.current);
            Ce({
                x: G,
                y: F
            });
        }, [
            o,
            Ce,
            e,
            n
        ]), R = C.useCallback(($)=>{
            if (r.current) {
                const F = r.current, je = e.current.zoom;
                t({
                    x: F.camX - ($.clientX - F.x) / je,
                    y: F.camY - ($.clientY - F.y) / je,
                    zoom: je
                });
                return;
            }
            const G = bn($, e.current, a);
            if (O(G), o === "select") {
                const F = $.currentTarget;
                if (f && (c === "resize" || c === "rotate")) F.style.cursor = "grabbing";
                else if (f && c === "drag") F.style.cursor = "move";
                else {
                    const { x: je, y: Dl } = fn($, e.current), Al = me({
                        x: je,
                        y: Dl,
                        row: G.row,
                        col: G.col,
                        zoom: e.current.zoom
                    });
                    F.style.cursor = Al === "rotate" || Al === "resize" ? "grab" : Al === "move" ? "move" : "crosshair";
                }
            } else $.currentTarget.style.cursor = "crosshair";
            if (!(!l && !f)) if (o === "draw" && l) Q({
                row: G.row,
                col: G.col
            });
            else if (o === "line" && i) {
                const { col: F, row: je } = Lt($, e.current, a);
                T({
                    row: je,
                    col: F
                });
            } else if (o === "rect" && s) {
                const { col: F, row: je } = Lt($, e.current, a);
                Z({
                    row: je,
                    col: F
                });
            } else if (o === "select" && f && c === "resize") {
                const { col: F, row: je } = Lt($, e.current, a);
                S({
                    row: je,
                    col: F
                });
            } else if (o === "select" && f && c === "rotate") {
                const { x: F, y: je } = fn($, e.current);
                N(F, je);
            } else o === "select" && f && (c === "box" && g ? w({
                row: G.row,
                col: G.col
            }) : c === "drag" && m && d.length > 0 && ae({
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
            m,
            d,
            O,
            me,
            Q,
            T,
            Z,
            w,
            ae,
            S,
            N,
            e,
            r,
            t
        ]), Re = C.useCallback(($)=>{
            if (r.current) {
                r.current = null, $.currentTarget.style.cursor = n.current ? "grab" : "crosshair";
                return;
            }
            if (o === "draw") b(), E();
            else if (o === "line") {
                if (i) {
                    const { col: G, row: F } = Lt($, e.current, a);
                    A(i.row, i.col, F, G);
                }
                V();
            } else if (o === "rect") {
                if (s) {
                    const { col: G, row: F } = Lt($, e.current, a);
                    Y(s.row, s.col, F, G);
                }
                De();
            } else if (o === "select") {
                if (c === "rotate") {
                    const { x: G, y: F } = fn($, e.current);
                    _(G, F);
                } else if (c === "resize") {
                    const { col: G, row: F } = Lt($, e.current, a);
                    k({
                        row: F,
                        col: G
                    });
                } else if (c === "box") {
                    const { col: G, row: F } = bn($, e.current, a);
                    y({
                        row: F,
                        col: G
                    });
                } else if (c === "drag") {
                    const { col: G, row: F } = bn($, e.current, a);
                    p({
                        row: F,
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
            E,
            V,
            De,
            y,
            p,
            k,
            _,
            b,
            A,
            Y,
            e,
            n,
            r
        ]), dr = C.useCallback(()=>{
            if (r.current) {
                r.current = null;
                return;
            }
            o === "draw" ? E() : o === "line" ? oe() : o === "rect" ? sn() : o === "select" && (c === "box" ? x() : c === "drag" ? h() : c === "resize" ? z() : c === "rotate" && D());
        }, [
            o,
            c,
            E,
            oe,
            sn,
            x,
            h,
            z,
            D,
            r
        ]);
        return {
            handleMouseDown: ue,
            handleDoubleClick: Rn,
            handleMouseMove: R,
            handleMouseUp: Re,
            handleMouseLeave: dr
        };
    }
    function Yy() {
        const { tool: e, setTool: t, setColorIdx: n, selectedItems: r, deleteSelected: o, selectAll: l, clipboard: i, copy: s, paste: a, cycleSubdivision: u, undo: d, redo: c } = B();
        C.useEffect(()=>{
            const f = (g)=>{
                if (B.getState().textEdit) return;
                g.key === "\\" && t(e === "line" ? "draw" : "line"), g.key === "m" && t(e === "rect" ? "draw" : "rect"), g.key === "t" && t(e === "text" ? "draw" : "text"), g.key === "s" && t(e === "select" ? "draw" : "select"), (g.key === "Delete" || g.key === "Backspace") && r.length > 0 && (g.preventDefault(), o()), (g.ctrlKey || g.metaKey) && g.key.toLowerCase() === "a" && (g.preventDefault(), l()), (g.ctrlKey || g.metaKey) && g.key === "c" && r.length > 0 && (g.preventDefault(), s()), (g.ctrlKey || g.metaKey) && g.key === "v" && i && (g.preventDefault(), a()), (g.ctrlKey || g.metaKey) && g.key.toLowerCase() === "g" && (g.preventDefault(), u()), (g.ctrlKey || g.metaKey) && !g.shiftKey && g.key.toLowerCase() === "z" && (g.preventDefault(), d()), (g.ctrlKey || g.metaKey) && (g.shiftKey && g.key.toLowerCase() === "z" || g.key.toLowerCase() === "y") && (g.preventDefault(), c());
                const m = parseInt(g.key);
                m >= 1 && m <= 7 && n(m - 1);
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
    function Xy(e, t, n, r) {
        const i = (m)=>e[m * 4] > 227 && e[m * 4 + 1] > 227 && e[m * 4 + 2] > 227, s = new Uint8Array(t * n), a = new Int32Array(t * n);
        let u = 0, d = 0;
        const c = (m)=>{
            !s[m] && i(m) && (s[m] = 1, a[d++] = m);
        };
        for(let m = 0; m < t; m++)c(m), c((n - 1) * t + m);
        for(let m = 0; m < n; m++)c(m * t), c(m * t + (t - 1));
        for(; u < d;){
            const m = a[u++], w = m % t;
            w > 0 && c(m - 1), w < t - 1 && c(m + 1), m >= t && c(m - t), m < t * (n - 1) && c(m + t);
        }
        let f = 0;
        for(let m = 0; m < t * n; m++)s[m] && (e[m * 4 + 3] = 0, f++);
        if (f === 0 || r?.feather === !1) return f;
        const g = new Uint8ClampedArray(t * n);
        for(let m = 0; m < n; m++)for(let w = 0; w < t; w++){
            let y = 0, x = 0;
            for(let p = -1; p <= 1; p++)for(let h = -1; h <= 1; h++){
                const S = w + h, k = m + p;
                S >= 0 && S < t && k >= 0 && k < n && (y += e[(k * t + S) * 4 + 3], x++);
            }
            g[m * t + w] = y / x;
        }
        for(let m = 0; m < t * n; m++)e[m * 4 + 3] = g[m];
        return f;
    }
    async function Zy(e) {
        const t = await createImageBitmap(e);
        try {
            const n = document.createElement("canvas");
            n.width = t.width, n.height = t.height;
            const r = n.getContext("2d");
            if (!r) throw new Error("canvas 2d context unavailable");
            r.drawImage(t, 0, 0);
            const o = r.getImageData(0, 0, t.width, t.height);
            if (Xy(o.data, t.width, t.height) === 0) return e;
            r.putImageData(o, 0, 0);
            const i = await new Promise((s)=>n.toBlob(s, "image/png"));
            if (!i) throw new Error("PNG encode failed");
            return i;
        } finally{
            t.close();
        }
    }
    const ic = 16;
    function Jy(e, t) {
        const n = B((u)=>u.placeImage), r = C.useRef(null), [o, l] = C.useState(""), [i, s] = C.useState(!1), a = C.useCallback(async (u)=>{
            try {
                let d;
                if (typeof u == "string") d = u;
                else {
                    let k = u;
                    i && (l("Removing background…"), k = await Zy(k)), l("Uploading…"), d = await My(k);
                }
                l("Loading…");
                const { width: c, height: f } = await kg(d), g = Math.max(c, f) || 1, m = Math.max(1, Math.round(c / g * ic)), w = Math.max(1, Math.round(f / g * ic)), y = e.current, x = Math.round((y.x + t.w / 2 / y.zoom) / vn / gt) * gt, p = Math.round((y.y + t.h / 2 / y.zoom) / vn / gt) * gt, h = x - Math.round(m / 2) * gt, S = p - Math.round(w / 2) * gt;
                n(d, {
                    r1: S,
                    c1: h,
                    r2: S + w * gt,
                    c2: h + m * gt
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
                if (B.getState().textEdit) return;
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
    const ev = 600;
    function tv() {
        const e = import.meta;
        if ("env" in e) {
            const t = e.env;
            if (typeof t == "object" && t !== null && "BASE_URL" in t && typeof t.BASE_URL == "string") return t.BASE_URL;
        }
        return "/grid-draw/";
    }
    const nv = tv();
    let sc, Ip = !1;
    function hi(e) {
        Ip = e;
    }
    function rv() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function ov(e) {
        return e.cells.length + e.lines.length + e.rects.length + e.texts.length + (e.images?.length ?? 0) > 0;
    }
    function lv() {
        clearTimeout(sc), sc = setTimeout(iv, ev);
    }
    async function iv() {
        const e = B.getState();
        if (!e.grid) return;
        const t = e.serializeWholeGrid();
        if (!t) return;
        let n = e.currentName;
        if (!n) {
            if (Ip || !ov(t)) return;
            n = rv(), e.setCurrentName(n), window.history.replaceState({}, "", `${nv}design/${n}/`);
        }
        e.setSaveState("saving");
        try {
            await de.getState().saveDrawing(n, t, e.exportHistory()), B.getState().setSaveState("saved");
        } catch (r) {
            B.getState().setSaveState("error", r instanceof Error ? r.message : String(r));
        }
    }
    B.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && lv();
    });
    function sv(e) {
        const { clear: t, resetHistory: n, setSaveState: r, buildTrainingExample: o, finishTrainingCapture: l, serializeWholeGrid: i, loadDesignWithHistory: s, setCurrentName: a } = B(), u = de((b)=>b.getDrawing), d = de((b)=>b.getDrawingById), c = de((b)=>b.saveExamplePair), f = de((b)=>b.updateExamplePair), g = de((b)=>b.runPredict), m = de((b)=>b.trainModel), w = de((b)=>b.initModel), y = de((b)=>b.modelStatus), x = de((b)=>b.training), [p, h] = C.useState(""), [S, k] = C.useState(!1), [z, N] = C.useState(!1), [_, D] = C.useState(null);
        C.useEffect(()=>{
            if (!e) return;
            let b = !1;
            const E = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (E) return u(E[1]).then((T)=>{
                b || (s(T.design, T.history ?? null), a(T.name));
            }).catch(()=>h(`No drawing named "${E[1]}".`)), ()=>{
                b = !0;
            };
            const P = new URLSearchParams(window.location.search).get("load");
            if (P) return d(Number(P)).then((T)=>{
                b || (s(T.design, T.history ?? null), a(T.name), window.history.replaceState({}, "", `${kr}design/${encodeURIComponent(T.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", kr);
            }), ()=>{
                b = !0;
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
            const b = o();
            if (!b) {
                h("Select the output region first.");
                return;
            }
            h("Saving…");
            try {
                await c(b.input, b.output, b.delta), l(), h("Saved.");
            } catch (E) {
                h(`Save failed: ${E instanceof Error ? E.message : String(E)}`);
            }
        }, [
            o,
            l,
            c
        ]), q = C.useCallback(async ()=>{
            h("Training in the browser…");
            try {
                await m(), h("Model trained. Try Predict from Selection.");
            } catch (b) {
                h(`Train failed: ${b instanceof Error ? b.message : String(b)}`);
            }
        }, [
            m
        ]), ae = C.useCallback(async ()=>{
            const { grid: b, selectedItems: E } = B.getState();
            if (!b) return;
            const P = Ar(b, E);
            if (!P) {
                h("Select an input region to predict from.");
                return;
            }
            const T = Ue(E, b), A = T ? T.minRow : 0, V = T ? T.minCol : 0;
            h("Predicting…");
            try {
                const oe = await g(P);
                B.getState().placeDesign(oe, A, V), h(Gy(oe) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (oe) {
                h(`Predict failed: ${oe instanceof Error ? oe.message : String(oe)}`);
            }
        }, [
            g
        ]), me = C.useCallback(async (b)=>{
            const E = await u(b);
            s(E.design, E.history ?? null), a(E.name), D(null), hi(!1), window.history.replaceState({}, "", `${kr}design/${encodeURIComponent(E.name)}/`), k(!1);
        }, [
            s,
            a,
            u
        ]), Ce = C.useCallback((b, E)=>{
            const P = E === "input" ? b.input : b.output, T = E === "input" ? b.output : b.input;
            s(P, null), a(null), hi(!0), D({
                id: b.id,
                half: E,
                otherHalf: T
            }), window.history.replaceState({}, "", kr), N(!1), h(`Editing example #${b.id} (${E}) — click "Update example" to save over it.`);
        }, [
            s,
            a
        ]), he = C.useCallback(async ()=>{
            if (!_) return;
            const b = i();
            if (!b) {
                h("Nothing to save — draw something first.");
                return;
            }
            const { id: E, half: P, otherHalf: T } = _, A = P === "input" ? b : T, V = P === "output" ? b : T;
            h(`Updating example #${E}…`);
            try {
                await f(E, A, V), h(`Example #${E} (${P}) updated.`);
            } catch (oe) {
                h(`Update failed: ${oe instanceof Error ? oe.message : String(oe)}`);
            }
        }, [
            _,
            i,
            f
        ]), Q = C.useCallback(()=>{
            a(null), D(null), hi(!1), t(), n(), r("idle"), window.history.replaceState({}, "", kr), h("");
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
            startTraining: q,
            predictFromSelection: ae,
            openDrawing: me,
            editExampleHalf: Ce,
            saveExampleUpdate: he,
            newDrawing: Q
        };
    }
    function av({ cam: e }) {
        const t = B((f)=>f.textEdit), n = B((f)=>f.colorIdx), r = B((f)=>f.setTextEditText), o = B((f)=>f.commitTextEdit), l = B((f)=>f.cancelTextEdit), i = C.useRef(null), s = t ? `${t.row},${t.col},${t.editing?.idx ?? "new"}` : null;
        if (C.useEffect(()=>{
            if (s === null) return;
            const f = i.current;
            f && (f.focus({
                preventScroll: !0
            }), f.setSelectionRange(f.value.length, f.value.length));
        }, [
            s
        ]), !t) return null;
        const a = t.size * gt * vn * e.zoom, u = (t.col * vn - e.x) * e.zoom, d = (t.row * vn - e.y) * e.zoom + ln, c = Ep[t.editing?.original.color ?? n]?.hex ?? "#000000";
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
                    B.getState().textEdit && i.current?.focus({
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
    const zp = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const uv = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const cv = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const ac = (e)=>{
        const t = cv(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var dv = {
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
    const fv = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const pv = C.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>C.createElement("svg", {
            ref: a,
            ...dv,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: zp("lucide", o),
            ...!l && !fv(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, d])=>C.createElement(u, d)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const Np = (e, t)=>{
        const n = C.forwardRef(({ className: r, ...o }, l)=>C.createElement(pv, {
                ref: l,
                iconNode: t,
                className: zp(`lucide-${uv(ac(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = ac(e), n;
    };
    const mv = [
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
    ], hv = Np("redo-2", mv);
    const gv = [
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
    ], xv = Np("undo-2", gv), yv = Df("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function Pn({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return v.jsx(Tx, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: zn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: v.jsx(Rp.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function Ge({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = C.useContext(Rp);
        return v.jsx(Ix, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: zn(yv({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function uc({ activeIdx: e, onPick: t, titleFor: n }) {
        return v.jsx("div", {
            className: "flex gap-1",
            children: Ep.map((r, o)=>v.jsx("button", {
                    onClick: ()=>t(o),
                    title: n(o, r.name),
                    className: zn("w-6 h-6 rounded border-2 transition-all", e === o ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", r.hex === "#ffffff" && "shadow-sm"),
                    style: {
                        backgroundColor: r.hex ?? "transparent",
                        backgroundImage: r.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                        backgroundSize: r.hex === null ? "6px 6px" : void 0,
                        backgroundPosition: r.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                    }
                }, o))
        });
    }
    function vv(e) {
        return e === "draw" || e === "line" || e === "rect" || e === "text" || e === "select";
    }
    function wv({ loading: e, imageInputRef: t, imgStatus: n, removeBg: r, setRemoveBg: o, addImageObject: l, editingExample: i, saveExampleUpdate: s, newDrawing: a, onOpenGallery: u }) {
        const d = B(), { tool: c, setTool: f, colorIdx: g, pickColor: m, outlineIdx: w, pickOutline: y, textSize: x, pickTextSize: p, lineWidth: h, pickLineWidth: S, rectLineWidth: k, pickRectLineWidth: z, rectStrokeAlign: N, pickRectStrokeAlign: _, pickTextAlign: D, subdivision: O, setSubdivision: q, selectedItems: ae, clear: me, undo: Ce, redo: he, canUndo: Q, canRedo: b } = d;
        d.historyTick;
        const { grid: E } = d, P = d.selectedItems.filter((R)=>R.type === "text"), T = d.selectedItems.filter((R)=>R.type === "line"), A = d.selectedItems.filter((R)=>R.type === "rect"), V = (R)=>R.every((Re)=>Re === R[0]) ? String(R[0]) : "", oe = E && P.length > 0 ? V(P.map((R)=>E.get_text_size(R.index))) : String(x), Ee = E && T.length > 0 ? V(T.map((R)=>cs(E.get_line(R.index)[5]))) : String(h), Z = E ? d.selectedItems.filter((R)=>R.type !== "image") : [], Y = (R)=>E ? R.type === "cell" ? E.get_square(R.index)[2] : R.type === "line" ? E.get_line(R.index)[4] : R.type === "rect" ? E.get_rect(R.index)[4] : E.get_text(R.index)[2] : -1, De = Z.length > 0 ? V(Z.map(Y)) === "" ? -1 : Y(Z[0]) : g, sn = E && A.length > 0 ? V(A.map((R)=>E.get_rect(R.index)[5])) === "" ? -1 : E.get_rect(A[0].index)[5] : w, ue = E && A.length > 0 ? V(A.map((R)=>cs(E.get_rect(R.index)[6]))) : String(k), Rn = E && A.length > 0 ? V(A.map((R)=>E.get_rect(R.index)[7])) : String(N);
        return v.jsx(cr, {
            title: "Tools",
            defaultPosition: {
                x: 20,
                y: ln + 20
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
                            v.jsxs(Pn, {
                                type: "single",
                                value: c,
                                onValueChange: (R)=>{
                                    vv(R) && f(R);
                                },
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    v.jsx(Ge, {
                                        value: "draw",
                                        className: "text-xs",
                                        children: "Draw"
                                    }),
                                    v.jsx(Ge, {
                                        value: "line",
                                        className: "text-xs",
                                        children: "Line"
                                    }),
                                    v.jsx(Ge, {
                                        value: "rect",
                                        className: "text-xs",
                                        children: "Rect"
                                    }),
                                    v.jsx(Ge, {
                                        value: "text",
                                        className: "text-xs",
                                        children: "Text"
                                    }),
                                    v.jsx(Ge, {
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
                            v.jsxs(Pn, {
                                type: "single",
                                value: String(O),
                                onValueChange: (R)=>R && q(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    v.jsx(Ge, {
                                        value: "1",
                                        className: "text-xs",
                                        title: "Whole cells",
                                        children: "1×"
                                    }),
                                    v.jsx(Ge, {
                                        value: "2",
                                        className: "text-xs",
                                        title: "Half cells",
                                        children: "½"
                                    }),
                                    v.jsx(Ge, {
                                        value: "4",
                                        className: "text-xs",
                                        title: "Quarter cells",
                                        children: "¼"
                                    }),
                                    v.jsx(Ge, {
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
                                    const Re = R.target.files?.[0];
                                    Re && l(Re), R.target.value = "";
                                }
                            })
                        ]
                    }),
                    (c === "text" || P.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Text size"
                            }),
                            v.jsx(Pn, {
                                type: "single",
                                value: oe,
                                onValueChange: (R)=>R && p(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: If.map((R)=>v.jsxs(Ge, {
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
                    (c === "text" || P.length > 0) && v.jsxs("div", {
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
                                        onClick: ()=>D(0, null),
                                        children: "Left"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>D(1, null),
                                        children: "Center"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>D(2, null),
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
                                        onClick: ()=>D(null, 0),
                                        children: "Top"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>D(null, 1),
                                        children: "Middle"
                                    }),
                                    v.jsx(H, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>D(null, 2),
                                        children: "Bottom"
                                    })
                                ]
                            })
                        ]
                    }),
                    (c === "line" || T.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Line width"
                            }),
                            v.jsx(Pn, {
                                type: "single",
                                value: Ee,
                                onValueChange: (R)=>R && S(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: us.map((R)=>v.jsxs(Ge, {
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
                    (ae.length === 0 || Z.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Color"
                            }),
                            v.jsx(uc, {
                                activeIdx: De,
                                onPick: m,
                                titleFor: (R, Re)=>`${R + 1}: ${Re}`
                            })
                        ]
                    }),
                    (c === "rect" || A.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Outline (rects)"
                            }),
                            v.jsx(uc, {
                                activeIdx: sn,
                                onPick: y,
                                titleFor: (R, Re)=>R === 6 ? "No outline" : Re
                            })
                        ]
                    }),
                    (c === "rect" || A.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Outline width"
                            }),
                            v.jsx(Pn, {
                                type: "single",
                                value: ue,
                                onValueChange: (R)=>R && z(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: us.map((R)=>v.jsxs(Ge, {
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
                    (c === "rect" || A.length > 0) && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Stroke align"
                            }),
                            v.jsx(Pn, {
                                type: "single",
                                value: Rn,
                                onValueChange: (R)=>R && _(Number(R)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: zf.map((R)=>v.jsx(Ge, {
                                        value: String(R.value),
                                        className: "text-xs",
                                        children: R.label
                                    }, R.value))
                            })
                        ]
                    }),
                    v.jsxs("div", {
                        className: "flex gap-1",
                        children: [
                            v.jsx(H, {
                                variant: "outline",
                                onClick: Ce,
                                disabled: e || !Q(),
                                size: "sm",
                                className: "flex-1",
                                title: "Undo (Ctrl/Cmd+Z)",
                                children: v.jsx(xv, {
                                    className: "w-4 h-4"
                                })
                            }),
                            v.jsx(H, {
                                variant: "outline",
                                onClick: he,
                                disabled: e || !b(),
                                size: "sm",
                                className: "flex-1",
                                title: "Redo (Ctrl/Cmd+Shift+Z)",
                                children: v.jsx(hv, {
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
                        onClick: me,
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
    function Sv() {
        const { selectedItems: e, getSelectedCells: t, jsonOutput: n, tensorOutput: r, importJson: o, importTensor: l } = B(), i = t();
        return v.jsx(cr, {
            title: "Selection Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: ln + 20
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
    function kv({ loading: e, trainStatus: t, modelStatus: n, training: r, saveTrainingExample: o, startTraining: l, predictFromSelection: i, onViewTrainingData: s }) {
        const { selectedItems: a, captureMode: u, captureInput: d, startTrainingCapture: c, captureSetInput: f, cancelTrainingCapture: g } = B();
        return v.jsx(cr, {
            title: "Training Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: ln + 360
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
    function _v({ training: e }) {
        const t = e.total > 0 ? Math.min(100, Math.round(e.epoch / e.total * 100)) : e.status === "done" ? 100 : 0, n = e.status === "error" ? "bg-red-500" : e.status === "done" ? "bg-green-500" : "bg-blue-500";
        return v.jsx(cr, {
            title: "Training",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: ln + 540
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
                            className: zn("h-full", n),
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
    function Cv() {
        const [e, t] = C.useState(()=>lc()), n = C.useRef(null), { grid: r, loading: o, error: l } = Hg(n, e.w, e.h), i = B((z)=>z.currentName), s = B((z)=>z.saveState), { cam: a, camRef: u, applyCamera: d, resetView: c, spaceHeld: f, isSpaceDown: g, panRef: m } = Qy(r, n), { handleMouseDown: w, handleDoubleClick: y, handleMouseMove: x, handleMouseUp: p, handleMouseLeave: h } = qy({
            camRef: u,
            applyCamera: d,
            isSpaceDown: g,
            panRef: m
        });
        Yy();
        const S = Jy(u, e), k = sv(r);
        return C.useEffect(()=>{
            const z = ()=>{
                const N = lc();
                if (t(N), !r) return;
                r.set_viewport(N.w, N.h);
                const _ = B.getState();
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
                    className: zn("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: ln,
                        cursor: o ? "wait" : f ? "grab" : "crosshair"
                    },
                    onMouseDown: w,
                    onDoubleClick: y,
                    onMouseMove: x,
                    onMouseUp: p,
                    onMouseLeave: h
                }),
                v.jsx(av, {
                    cam: a
                }),
                v.jsx(wv, {
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
                v.jsx(Sv, {}),
                v.jsx(kv, {
                    loading: o,
                    trainStatus: k.trainStatus,
                    modelStatus: k.modelStatus,
                    training: k.training,
                    saveTrainingExample: k.saveTrainingExample,
                    startTraining: k.startTraining,
                    predictFromSelection: k.predictFromSelection,
                    onViewTrainingData: ()=>k.setTrainingOpen(!0)
                }),
                k.training && v.jsx(_v, {
                    training: k.training
                }),
                k.galleryOpen && v.jsx(_p, {
                    asModal: !0,
                    onClose: ()=>k.setGalleryOpen(!1),
                    onOpenDesign: k.openDrawing
                }),
                k.trainingOpen && v.jsx(Cp, {
                    asModal: !0,
                    onClose: ()=>k.setTrainingOpen(!1),
                    onEditExample: k.editExampleHalf
                })
            ]
        });
    }
    function Ev({ onSuccess: e }) {
        const [t, n] = C.useState(""), [r, o] = C.useState(""), [l, i] = C.useState(null), [s, a] = C.useState(!1), u = async (d)=>{
            d.preventDefault(), a(!0), i(null);
            try {
                await Ey(t, r), e();
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
    function Tv() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function Iv() {
        const e = Tv(), [t, n] = C.useState(()=>xp() !== null);
        return C.useEffect(()=>{
            const r = ()=>n(!1);
            return window.addEventListener(hs, r), ()=>window.removeEventListener(hs, r);
        }, []), t ? v.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? v.jsx(_p, {}) : e === "training" ? v.jsx(Cp, {}) : v.jsx(Cv, {})
        }) : v.jsx(Ev, {
            onSuccess: ()=>n(!0)
        });
    }
    const cc = document.getElementById("grid-draw-root");
    cc && gi.createRoot(cc).render(v.jsx(ne.StrictMode, {
        children: v.jsx(Iv, {})
    }));
})();
export { Nv as a, zv as c, bp as g, __tla };
