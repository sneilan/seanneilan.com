let Lv, bv, Fp;
let __tla = (async ()=>{
    function Ap(e, t) {
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
    bv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    Fp = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    Lv = function(e) {
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
    var mc = {
        exports: {}
    }, Tl = {}, hc = {
        exports: {}
    }, U = {};
    var uo = Symbol.for("react.element"), $p = Symbol.for("react.portal"), Up = Symbol.for("react.fragment"), Bp = Symbol.for("react.strict_mode"), Wp = Symbol.for("react.profiler"), Vp = Symbol.for("react.provider"), Gp = Symbol.for("react.context"), Hp = Symbol.for("react.forward_ref"), Kp = Symbol.for("react.suspense"), Qp = Symbol.for("react.memo"), qp = Symbol.for("react.lazy"), Ca = Symbol.iterator;
    function Yp(e) {
        return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var gc = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, xc = Object.assign, yc = {};
    function pr(e, t, n) {
        this.props = e, this.context = t, this.refs = yc, this.updater = n || gc;
    }
    pr.prototype.isReactComponent = {};
    pr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    pr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function vc() {}
    vc.prototype = pr.prototype;
    function ws(e, t, n) {
        this.props = e, this.context = t, this.refs = yc, this.updater = n || gc;
    }
    var Ss = ws.prototype = new vc;
    Ss.constructor = ws;
    xc(Ss, pr.prototype);
    Ss.isPureReactComponent = !0;
    var Ea = Array.isArray, wc = Object.prototype.hasOwnProperty, ks = {
        current: null
    }, Sc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function kc(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)wc.call(t, r) && !Sc.hasOwnProperty(r) && (o[r] = t[r]);
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
            _owner: ks.current
        };
    }
    function Xp(e, t) {
        return {
            $$typeof: uo,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function _s(e) {
        return typeof e == "object" && e !== null && e.$$typeof === uo;
    }
    function Zp(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Ta = /\/+/g;
    function Vl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Zp("" + e.key) : t.toString(36);
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
                    case $p:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + Vl(i, 0) : r, Ea(o) ? (n = "", e != null && (n = e.replace(Ta, "$&/") + "/"), Ao(o, t, n, "", function(u) {
            return u;
        })) : o != null && (_s(o) && (o = Xp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Ta, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Ea(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + Vl(l, s);
            i += Ao(l, t, n, a, o);
        }
        else if (a = Yp(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + Vl(l, s++), i += Ao(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function yo(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return Ao(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Jp(e) {
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
    }, em = {
        ReactCurrentDispatcher: De,
        ReactCurrentBatchConfig: Fo,
        ReactCurrentOwner: ks
    };
    function _c() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    U.Children = {
        map: yo,
        forEach: function(e, t, n) {
            yo(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return yo(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return yo(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!_s(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    U.Component = pr;
    U.Fragment = Up;
    U.Profiler = Wp;
    U.PureComponent = ws;
    U.StrictMode = Bp;
    U.Suspense = Kp;
    U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em;
    U.act = _c;
    U.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = xc({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = ks.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)wc.call(t, a) && !Sc.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
            $$typeof: Gp,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Vp,
            _context: e
        }, e.Consumer = e;
    };
    U.createElement = kc;
    U.createFactory = function(e) {
        var t = kc.bind(null, e);
        return t.type = e, t;
    };
    U.createRef = function() {
        return {
            current: null
        };
    };
    U.forwardRef = function(e) {
        return {
            $$typeof: Hp,
            render: e
        };
    };
    U.isValidElement = _s;
    U.lazy = function(e) {
        return {
            $$typeof: qp,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Jp
        };
    };
    U.memo = function(e, t) {
        return {
            $$typeof: Qp,
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
    U.unstable_act = _c;
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
    hc.exports = U;
    var C = hc.exports;
    const oe = Fp(C), Cc = Ap({
        __proto__: null,
        default: oe
    }, [
        C
    ]);
    var tm = C, nm = Symbol.for("react.element"), rm = Symbol.for("react.fragment"), om = Object.prototype.hasOwnProperty, lm = tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, im = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Ec(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)om.call(t, r) && !im.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: nm,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: lm.current
        };
    }
    Tl.Fragment = rm;
    Tl.jsx = Ec;
    Tl.jsxs = Ec;
    mc.exports = Tl;
    var v = mc.exports, vi = {}, Tc = {
        exports: {}
    }, Xe = {}, Nc = {
        exports: {}
    }, Ic = {};
    (function(e) {
        function t(N, b) {
            var E = N.length;
            N.push(b);
            e: for(; 0 < E;){
                var q = E - 1 >>> 1, Z = N[q];
                if (0 < o(Z, b)) N[q] = b, N[E] = Z, E = q;
                else break e;
            }
        }
        function n(N) {
            return N.length === 0 ? null : N[0];
        }
        function r(N) {
            if (N.length === 0) return null;
            var b = N[0], E = N.pop();
            if (E !== b) {
                N[0] = E;
                e: for(var q = 0, Z = N.length, pe = Z >>> 1; q < pe;){
                    var Fe = 2 * (q + 1) - 1, de = N[Fe], J = Fe + 1, Je = N[J];
                    if (0 > o(de, E)) J < Z && 0 > o(Je, de) ? (N[q] = Je, N[J] = E, q = J) : (N[q] = de, N[Fe] = E, q = Fe);
                    else if (J < Z && 0 > o(Je, E)) N[q] = Je, N[J] = E, q = J;
                    else break e;
                }
            }
            return b;
        }
        function o(N, b) {
            var E = N.sortIndex - b.sortIndex;
            return E !== 0 ? E : N.id - b.id;
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
        var a = [], u = [], d = 1, c = null, h = 3, w = !1, g = !1, y = !1, x = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function m(N) {
            for(var b = n(u); b !== null;){
                if (b.callback === null) r(u);
                else if (b.startTime <= N) r(u), b.sortIndex = b.expirationTime, t(a, b);
                else break;
                b = n(u);
            }
        }
        function S(N) {
            if (y = !1, m(N), !g) if (n(a) !== null) g = !0, X(_);
            else {
                var b = n(u);
                b !== null && P(S, b.startTime - N);
            }
        }
        function _(N, b) {
            g = !1, y && (y = !1, f(k), k = -1), w = !0;
            var E = h;
            try {
                for(m(b), c = n(a); c !== null && (!(c.expirationTime > b) || N && !te());){
                    var q = c.callback;
                    if (typeof q == "function") {
                        c.callback = null, h = c.priorityLevel;
                        var Z = q(c.expirationTime <= b);
                        b = e.unstable_now(), typeof Z == "function" ? c.callback = Z : c === n(a) && r(a), m(b);
                    } else r(a);
                    c = n(a);
                }
                if (c !== null) var pe = !0;
                else {
                    var Fe = n(u);
                    Fe !== null && P(S, Fe.startTime - b), pe = !1;
                }
                return pe;
            } finally{
                c = null, h = E, w = !1;
            }
        }
        var T = !1, z = null, k = -1, O = 5, D = -1;
        function te() {
            return !(e.unstable_now() - D < O);
        }
        function ye() {
            if (z !== null) {
                var N = e.unstable_now();
                D = N;
                var b = !0;
                try {
                    b = z(!0, N);
                } finally{
                    b ? Te() : (T = !1, z = null);
                }
            } else T = !1;
        }
        var Te;
        if (typeof p == "function") Te = function() {
            p(ye);
        };
        else if (typeof MessageChannel < "u") {
            var L = new MessageChannel, ce = L.port2;
            L.port1.onmessage = ye, Te = function() {
                ce.postMessage(null);
            };
        } else Te = function() {
            x(ye, 0);
        };
        function X(N) {
            z = N, T || (T = !0, Te());
        }
        function P(N, b) {
            k = x(function() {
                N(e.unstable_now());
            }, b);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
            N.callback = null;
        }, e.unstable_continueExecution = function() {
            g || w || (g = !0, X(_));
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
            var E = h;
            h = b;
            try {
                return N();
            } finally{
                h = E;
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
            var E = h;
            h = N;
            try {
                return b();
            } finally{
                h = E;
            }
        }, e.unstable_scheduleCallback = function(N, b, E) {
            var q = e.unstable_now();
            switch(typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? q + E : q) : E = q, N){
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
            return Z = E + Z, N = {
                id: d++,
                callback: b,
                priorityLevel: N,
                startTime: E,
                expirationTime: Z,
                sortIndex: -1
            }, E > q ? (N.sortIndex = E, t(u, N), n(a) === null && N === n(u) && (y ? (f(k), k = -1) : y = !0, P(S, E - q))) : (N.sortIndex = Z, t(a, N), g || w || (g = !0, X(_))), N;
        }, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(N) {
            var b = h;
            return function() {
                var E = h;
                h = b;
                try {
                    return N.apply(this, arguments);
                } finally{
                    h = E;
                }
            };
        };
    })(Ic);
    Nc.exports = Ic;
    var sm = Nc.exports;
    var am = C, Ye = sm;
    function I(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var zc = new Set, Vr = {};
    function Rn(e, t) {
        lr(e, t), lr(e + "Capture", t);
    }
    function lr(e, t) {
        for(Vr[e] = t, e = 0; e < t.length; e++)zc.add(t[e]);
    }
    var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wi = Object.prototype.hasOwnProperty, um = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Na = {}, Ia = {};
    function cm(e) {
        return wi.call(Ia, e) ? !0 : wi.call(Na, e) ? !1 : um.test(e) ? Ia[e] = !0 : (Na[e] = !0, !1);
    }
    function dm(e, t, n, r) {
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
    function fm(e, t, n, r) {
        if (t === null || typeof t > "u" || dm(e, t, n, r)) return !0;
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
    var ze = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ze[e] = new Ae(e, 0, !1, e, null, !1, !1);
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
        ze[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ze[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Cs = /[\-:]([a-z])/g;
    function Es(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Cs, Es);
        ze[t] = new Ae(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Cs, Es);
        ze[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Cs, Es);
        ze[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    ze.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        ze[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Ts(e, t, n, r) {
        var o = ze.hasOwnProperty(t) ? ze[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (fm(t, n, o, r) && (n = null), r || o === null ? cm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Ft = am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vo = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), $n = Symbol.for("react.fragment"), Ns = Symbol.for("react.strict_mode"), Si = Symbol.for("react.profiler"), Rc = Symbol.for("react.provider"), jc = Symbol.for("react.context"), Is = Symbol.for("react.forward_ref"), ki = Symbol.for("react.suspense"), _i = Symbol.for("react.suspense_list"), zs = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), Pc = Symbol.for("react.offscreen"), za = Symbol.iterator;
    function xr(e) {
        return e === null || typeof e != "object" ? null : (e = za && e[za] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ue = Object.assign, Gl;
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
    function pm(e) {
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
            case Ns:
                return "StrictMode";
            case ki:
                return "Suspense";
            case _i:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case jc:
                return (e.displayName || "Context") + ".Consumer";
            case Rc:
                return (e._context.displayName || "Context") + ".Provider";
            case Is:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case zs:
                return t = e.displayName || null, t !== null ? t : Ci(e.type) || "Memo";
            case Vt:
                t = e._payload, e = e._init;
                try {
                    return Ci(e(t));
                } catch  {}
        }
        return null;
    }
    function mm(e) {
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
                return t === Ns ? "StrictMode" : "Mode";
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
    function on(e) {
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
    function Mc(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function hm(e) {
        var t = Mc(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
        e._valueTracker || (e._valueTracker = hm(e));
    }
    function bc(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Mc(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function Jo(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Ei(e, t) {
        var n = t.checked;
        return ue({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Ra(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = on(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Lc(e, t) {
        t = t.checked, t != null && Ts(e, "checked", t, !1);
    }
    function Ti(e, t) {
        Lc(e, t);
        var n = on(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Ni(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ni(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function ja(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Ni(e, t, n) {
        (t !== "number" || Jo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Rr = Array.isArray;
    function Jn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + on(n), t = null, o = 0; o < e.length; o++){
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
        return ue({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Pa(e, t) {
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
            initialValue: on(n)
        };
    }
    function Oc(e, t) {
        var n = on(t.value), r = on(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Ma(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Dc(e) {
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
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Dc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var So, Ac = function(e) {
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
    }, gm = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(br).forEach(function(e) {
        gm.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), br[t] = br[e];
        });
    });
    function Fc(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || br.hasOwnProperty(e) && br[e] ? ("" + t).trim() : t + "px";
    }
    function $c(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Fc(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var xm = ue({
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
            if (xm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
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
    function Rs(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Mi = null, er = null, tr = null;
    function ba(e) {
        if (e = po(e)) {
            if (typeof Mi != "function") throw Error(I(280));
            var t = e.stateNode;
            t && (t = jl(t), Mi(e.stateNode, e.type, t));
        }
    }
    function Uc(e) {
        er ? tr ? tr.push(e) : tr = [
            e
        ] : er = e;
    }
    function Bc() {
        if (er) {
            var e = er, t = tr;
            if (tr = er = null, ba(e), t) for(e = 0; e < t.length; e++)ba(t[e]);
        }
    }
    function Wc(e, t) {
        return e(t);
    }
    function Vc() {}
    var Ql = !1;
    function Gc(e, t, n) {
        if (Ql) return e(t, n);
        Ql = !0;
        try {
            return Wc(e, t, n);
        } finally{
            Ql = !1, (er !== null || tr !== null) && (Vc(), Bc());
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
    if (Lt) try {
        var yr = {};
        Object.defineProperty(yr, "passive", {
            get: function() {
                bi = !0;
            }
        }), window.addEventListener("test", yr, yr), window.removeEventListener("test", yr, yr);
    } catch  {
        bi = !1;
    }
    function ym(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (d) {
            this.onError(d);
        }
    }
    var Lr = !1, el = null, tl = !1, Li = null, vm = {
        onError: function(e) {
            Lr = !0, el = e;
        }
    };
    function wm(e, t, n, r, o, l, i, s, a) {
        Lr = !1, el = null, ym.apply(vm, arguments);
    }
    function Sm(e, t, n, r, o, l, i, s, a) {
        if (wm.apply(this, arguments), Lr) {
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
    function Hc(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function La(e) {
        if (jn(e) !== e) throw Error(I(188));
    }
    function km(e) {
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
                    if (l === n) return La(o), e;
                    if (l === r) return La(o), t;
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
    function Kc(e) {
        return e = km(e), e !== null ? Qc(e) : null;
    }
    function Qc(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Qc(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var qc = Ye.unstable_scheduleCallback, Oa = Ye.unstable_cancelCallback, _m = Ye.unstable_shouldYield, Cm = Ye.unstable_requestPaint, ge = Ye.unstable_now, Em = Ye.unstable_getCurrentPriorityLevel, js = Ye.unstable_ImmediatePriority, Yc = Ye.unstable_UserBlockingPriority, nl = Ye.unstable_NormalPriority, Tm = Ye.unstable_LowPriority, Xc = Ye.unstable_IdlePriority, Nl = null, kt = null;
    function Nm(e) {
        if (kt && typeof kt.onCommitFiberRoot == "function") try {
            kt.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var ht = Math.clz32 ? Math.clz32 : Rm, Im = Math.log, zm = Math.LN2;
    function Rm(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Im(e) / zm | 0) | 0;
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
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - ht(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function jm(e, t) {
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
    function Pm(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - ht(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = jm(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function Oi(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Zc() {
        var e = ko;
        return ko <<= 1, !(ko & 4194240) && (ko = 64), e;
    }
    function ql(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function co(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = n;
    }
    function Mm(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - ht(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function Ps(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - ht(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Y = 0;
    function Jc(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var ed, Ms, td, nd, rd, Di = !1, Co = [], Yt = null, Xt = null, Zt = null, Kr = new Map, Qr = new Map, Ht = [], bm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Da(e, t) {
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
        }, t !== null && (t = po(t), t !== null && Ms(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Lm(e, t, n, r, o) {
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
    function od(e) {
        var t = vn(e.target);
        if (t !== null) {
            var n = jn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Hc(n), t !== null) {
                        e.blockedOn = t, rd(e.priority, function() {
                            td(n);
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
            } else return t = po(n), t !== null && Ms(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Aa(e, t, n) {
        $o(e) && n.delete(t);
    }
    function Om() {
        Di = !1, Yt !== null && $o(Yt) && (Yt = null), Xt !== null && $o(Xt) && (Xt = null), Zt !== null && $o(Zt) && (Zt = null), Kr.forEach(Aa), Qr.forEach(Aa);
    }
    function wr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Di || (Di = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Om)));
    }
    function qr(e) {
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
        for(Yt !== null && wr(Yt, e), Xt !== null && wr(Xt, e), Zt !== null && wr(Zt, e), Kr.forEach(t), Qr.forEach(t), n = 0; n < Ht.length; n++)r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Ht.length && (n = Ht[0], n.blockedOn === null);)od(n), n.blockedOn === null && Ht.shift();
    }
    var nr = Ft.ReactCurrentBatchConfig, ol = !0;
    function Dm(e, t, n, r) {
        var o = Y, l = nr.transition;
        nr.transition = null;
        try {
            Y = 1, bs(e, t, n, r);
        } finally{
            Y = o, nr.transition = l;
        }
    }
    function Am(e, t, n, r) {
        var o = Y, l = nr.transition;
        nr.transition = null;
        try {
            Y = 4, bs(e, t, n, r);
        } finally{
            Y = o, nr.transition = l;
        }
    }
    function bs(e, t, n, r) {
        if (ol) {
            var o = Ai(e, t, n, r);
            if (o === null) li(e, t, r, ll, n), Da(e, r);
            else if (Lm(o, e, t, n, r)) r.stopPropagation();
            else if (Da(e, r), t & 4 && -1 < bm.indexOf(e)) {
                for(; o !== null;){
                    var l = po(o);
                    if (l !== null && ed(l), l = Ai(e, t, n, r), l === null && li(e, t, r, ll, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else li(e, t, r, null, n);
        }
    }
    var ll = null;
    function Ai(e, t, n, r) {
        if (ll = null, e = Rs(r), e = vn(e), e !== null) if (t = jn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Hc(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return ll = e, null;
    }
    function ld(e) {
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
                switch(Em()){
                    case js:
                        return 1;
                    case Yc:
                        return 4;
                    case nl:
                    case Tm:
                        return 16;
                    case Xc:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Qt = null, Ls = null, Uo = null;
    function id() {
        if (Uo) return Uo;
        var e, t = Ls, n = t.length, r, o = "value" in Qt ? Qt.value : Qt.textContent, l = o.length;
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
    function Fa() {
        return !1;
    }
    function Ze(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Eo : Fa, this.isPropagationStopped = Fa, this;
        }
        return ue(t.prototype, {
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
    }, Os = Ze(mr), fo = ue({}, mr, {
        view: 0,
        detail: 0
    }), Fm = Ze(fo), Yl, Xl, Sr, Il = ue({}, fo, {
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
        getModifierState: Ds,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Yl = e.screenX - Sr.screenX, Xl = e.screenY - Sr.screenY) : Xl = Yl = 0, Sr = e), Yl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Xl;
        }
    }), $a = Ze(Il), $m = ue({}, Il, {
        dataTransfer: 0
    }), Um = Ze($m), Bm = ue({}, fo, {
        relatedTarget: 0
    }), Zl = Ze(Bm), Wm = ue({}, mr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Vm = Ze(Wm), Gm = ue({}, mr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Hm = Ze(Gm), Km = ue({}, mr, {
        data: 0
    }), Ua = Ze(Km), Qm = {
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
    }, qm = {
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
    }, Ym = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Xm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Ym[e]) ? !!t[e] : !1;
    }
    function Ds() {
        return Xm;
    }
    var Zm = ue({}, fo, {
        key: function(e) {
            if (e.key) {
                var t = Qm[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = Bo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qm[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ds,
        charCode: function(e) {
            return e.type === "keypress" ? Bo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Bo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Jm = Ze(Zm), eh = ue({}, Il, {
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
    }), Ba = Ze(eh), th = ue({}, fo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ds
    }), nh = Ze(th), rh = ue({}, mr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), oh = Ze(rh), lh = ue({}, Il, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), ih = Ze(lh), sh = [
        9,
        13,
        27,
        32
    ], As = Lt && "CompositionEvent" in window, Or = null;
    Lt && "documentMode" in document && (Or = document.documentMode);
    var ah = Lt && "TextEvent" in window && !Or, sd = Lt && (!As || Or && 8 < Or && 11 >= Or), Wa = " ", Va = !1;
    function ad(e, t) {
        switch(e){
            case "keyup":
                return sh.indexOf(t.keyCode) !== -1;
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
    function ud(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Un = !1;
    function uh(e, t) {
        switch(e){
            case "compositionend":
                return ud(t);
            case "keypress":
                return t.which !== 32 ? null : (Va = !0, Wa);
            case "textInput":
                return e = t.data, e === Wa && Va ? null : e;
            default:
                return null;
        }
    }
    function ch(e, t) {
        if (Un) return e === "compositionend" || !As && ad(e, t) ? (e = id(), Uo = Ls = Qt = null, Un = !1, e) : null;
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
                return sd && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var dh = {
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
    function Ga(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!dh[e.type] : t === "textarea";
    }
    function cd(e, t, n, r) {
        Uc(r), t = il(t, "onChange"), 0 < t.length && (n = new Os("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Dr = null, Yr = null;
    function fh(e) {
        Sd(e, 0);
    }
    function zl(e) {
        var t = Vn(e);
        if (bc(t)) return e;
    }
    function ph(e, t) {
        if (e === "change") return t;
    }
    var dd = !1;
    if (Lt) {
        var Jl;
        if (Lt) {
            var ei = "oninput" in document;
            if (!ei) {
                var Ha = document.createElement("div");
                Ha.setAttribute("oninput", "return;"), ei = typeof Ha.oninput == "function";
            }
            Jl = ei;
        } else Jl = !1;
        dd = Jl && (!document.documentMode || 9 < document.documentMode);
    }
    function Ka() {
        Dr && (Dr.detachEvent("onpropertychange", fd), Yr = Dr = null);
    }
    function fd(e) {
        if (e.propertyName === "value" && zl(Yr)) {
            var t = [];
            cd(t, Yr, e, Rs(e)), Gc(fh, t);
        }
    }
    function mh(e, t, n) {
        e === "focusin" ? (Ka(), Dr = t, Yr = n, Dr.attachEvent("onpropertychange", fd)) : e === "focusout" && Ka();
    }
    function hh(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return zl(Yr);
    }
    function gh(e, t) {
        if (e === "click") return zl(t);
    }
    function xh(e, t) {
        if (e === "input" || e === "change") return zl(t);
    }
    function yh(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xt = typeof Object.is == "function" ? Object.is : yh;
    function Xr(e, t) {
        if (xt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!wi.call(t, o) || !xt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Qa(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function qa(e, t) {
        var n = Qa(e);
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
            n = Qa(n);
        }
    }
    function pd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function md() {
        for(var e = window, t = Jo(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = Jo(e.document);
        }
        return t;
    }
    function Fs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function vh(e) {
        var t = md(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && pd(n.ownerDocument.documentElement, n)) {
            if (r !== null && Fs(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = qa(n, l);
                    var i = qa(n, r);
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
    var wh = Lt && "documentMode" in document && 11 >= document.documentMode, Bn = null, Fi = null, Ar = null, $i = !1;
    function Ya(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        $i || Bn == null || Bn !== Jo(r) || (r = Bn, "selectionStart" in r && Fs(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Ar && Xr(Ar, r) || (Ar = r, r = il(Fi, "onSelect"), 0 < r.length && (t = new Os("onSelect", "select", null, t, n), e.push({
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
    }, ti = {}, hd = {};
    Lt && (hd = document.createElement("div").style, "AnimationEvent" in window || (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation), "TransitionEvent" in window || delete Wn.transitionend.transition);
    function Rl(e) {
        if (ti[e]) return ti[e];
        if (!Wn[e]) return e;
        var t = Wn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in hd) return ti[e] = t[n];
        return e;
    }
    var gd = Rl("animationend"), xd = Rl("animationiteration"), yd = Rl("animationstart"), vd = Rl("transitionend"), wd = new Map, Xa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function sn(e, t) {
        wd.set(e, t), Rn(t, [
            e
        ]);
    }
    for(var ni = 0; ni < Xa.length; ni++){
        var ri = Xa[ni], Sh = ri.toLowerCase(), kh = ri[0].toUpperCase() + ri.slice(1);
        sn(Sh, "on" + kh);
    }
    sn(gd, "onAnimationEnd");
    sn(xd, "onAnimationIteration");
    sn(yd, "onAnimationStart");
    sn("dblclick", "onDoubleClick");
    sn("focusin", "onFocus");
    sn("focusout", "onBlur");
    sn(vd, "onTransitionEnd");
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
    var Pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), _h = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
    function Za(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Sm(r, t, void 0, e), e.currentTarget = null;
    }
    function Sd(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Za(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    Za(o, s, u), l = a;
                }
            }
        }
        if (tl) throw e = Li, tl = !1, Li = null, e;
    }
    function ne(e, t) {
        var n = t[Gi];
        n === void 0 && (n = t[Gi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (kd(t, e, 2, !1), n.add(r));
    }
    function oi(e, t, n) {
        var r = 0;
        t && (r |= 4), kd(n, e, r, t);
    }
    var No = "_reactListening" + Math.random().toString(36).slice(2);
    function Zr(e) {
        if (!e[No]) {
            e[No] = !0, zc.forEach(function(n) {
                n !== "selectionchange" && (_h.has(n) || oi(n, !1, e), oi(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[No] || (t[No] = !0, oi("selectionchange", !1, t));
        }
    }
    function kd(e, t, n, r) {
        switch(ld(t)){
            case 1:
                var o = Dm;
                break;
            case 4:
                o = Am;
                break;
            default:
                o = bs;
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
        Gc(function() {
            var u = l, d = Rs(n), c = [];
            e: {
                var h = wd.get(e);
                if (h !== void 0) {
                    var w = Os, g = e;
                    switch(e){
                        case "keypress":
                            if (Bo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            w = Jm;
                            break;
                        case "focusin":
                            g = "focus", w = Zl;
                            break;
                        case "focusout":
                            g = "blur", w = Zl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            w = Zl;
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
                            w = $a;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            w = Um;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            w = nh;
                            break;
                        case gd:
                        case xd:
                        case yd:
                            w = Vm;
                            break;
                        case vd:
                            w = oh;
                            break;
                        case "scroll":
                            w = Fm;
                            break;
                        case "wheel":
                            w = ih;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            w = Hm;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            w = Ba;
                    }
                    var y = (t & 4) !== 0, x = !y && e === "scroll", f = y ? h !== null ? h + "Capture" : null : h;
                    y = [];
                    for(var p = u, m; p !== null;){
                        m = p;
                        var S = m.stateNode;
                        if (m.tag === 5 && S !== null && (m = S, f !== null && (S = Hr(p, f), S != null && y.push(Jr(p, S, m)))), x) break;
                        p = p.return;
                    }
                    0 < y.length && (h = new w(h, g, null, n, d), c.push({
                        event: h,
                        listeners: y
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== Pi && (g = n.relatedTarget || n.fromElement) && (vn(g) || g[Ot])) break e;
                    if ((w || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (g = n.relatedTarget || n.toElement, w = u, g = g ? vn(g) : null, g !== null && (x = jn(g), g !== x || g.tag !== 5 && g.tag !== 6) && (g = null)) : (w = null, g = u), w !== g)) {
                        if (y = $a, S = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (y = Ba, S = "onPointerLeave", f = "onPointerEnter", p = "pointer"), x = w == null ? h : Vn(w), m = g == null ? h : Vn(g), h = new y(S, p + "leave", w, n, d), h.target = x, h.relatedTarget = m, S = null, vn(d) === u && (y = new y(f, p + "enter", g, n, d), y.target = m, y.relatedTarget = x, S = y), x = S, w && g) t: {
                            for(y = w, f = g, p = 0, m = y; m; m = An(m))p++;
                            for(m = 0, S = f; S; S = An(S))m++;
                            for(; 0 < p - m;)y = An(y), p--;
                            for(; 0 < m - p;)f = An(f), m--;
                            for(; p--;){
                                if (y === f || f !== null && y === f.alternate) break t;
                                y = An(y), f = An(f);
                            }
                            y = null;
                        }
                        else y = null;
                        w !== null && Ja(c, h, w, y, !1), g !== null && x !== null && Ja(c, x, g, y, !0);
                    }
                }
                e: {
                    if (h = u ? Vn(u) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file") var _ = ph;
                    else if (Ga(h)) if (dd) _ = xh;
                    else {
                        _ = hh;
                        var T = mh;
                    }
                    else (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (_ = gh);
                    if (_ && (_ = _(e, u))) {
                        cd(c, _, n, d);
                        break e;
                    }
                    T && T(e, h, u), e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && Ni(h, "number", h.value);
                }
                switch(T = u ? Vn(u) : window, e){
                    case "focusin":
                        (Ga(T) || T.contentEditable === "true") && (Bn = T, Fi = u, Ar = null);
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
                        $i = !1, Ya(c, n, d);
                        break;
                    case "selectionchange":
                        if (wh) break;
                    case "keydown":
                    case "keyup":
                        Ya(c, n, d);
                }
                var z;
                if (As) e: {
                    switch(e){
                        case "compositionstart":
                            var k = "onCompositionStart";
                            break e;
                        case "compositionend":
                            k = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            k = "onCompositionUpdate";
                            break e;
                    }
                    k = void 0;
                }
                else Un ? ad(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
                k && (sd && n.locale !== "ko" && (Un || k !== "onCompositionStart" ? k === "onCompositionEnd" && Un && (z = id()) : (Qt = d, Ls = "value" in Qt ? Qt.value : Qt.textContent, Un = !0)), T = il(u, k), 0 < T.length && (k = new Ua(k, e, null, n, d), c.push({
                    event: k,
                    listeners: T
                }), z ? k.data = z : (z = ud(n), z !== null && (k.data = z)))), (z = ah ? uh(e, n) : ch(e, n)) && (u = il(u, "onBeforeInput"), 0 < u.length && (d = new Ua("onBeforeInput", "beforeinput", null, n, d), c.push({
                    event: d,
                    listeners: u
                }), d.data = z));
            }
            Sd(c, t);
        });
    }
    function Jr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function il(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Hr(e, n), l != null && r.unshift(Jr(e, l, o)), l = Hr(e, t), l != null && r.push(Jr(e, l, o))), e = e.return;
        }
        return r;
    }
    function An(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Ja(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = Hr(n, l), a != null && i.unshift(Jr(n, a, s))) : o || (a = Hr(n, l), a != null && i.push(Jr(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Ch = /\r\n?/g, Eh = /\u0000|\uFFFD/g;
    function eu(e) {
        return (typeof e == "string" ? e : "" + e).replace(Ch, `
`).replace(Eh, "");
    }
    function Io(e, t, n) {
        if (t = eu(t), eu(e) !== t && n) throw Error(I(425));
    }
    function sl() {}
    var Ui = null, Bi = null;
    function Wi(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var Vi = typeof setTimeout == "function" ? setTimeout : void 0, Th = typeof clearTimeout == "function" ? clearTimeout : void 0, tu = typeof Promise == "function" ? Promise : void 0, Nh = typeof queueMicrotask == "function" ? queueMicrotask : typeof tu < "u" ? function(e) {
        return tu.resolve(null).then(e).catch(Ih);
    } : Vi;
    function Ih(e) {
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
                    e.removeChild(o), qr(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        qr(t);
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
    function nu(e) {
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
    var hr = Math.random().toString(36).slice(2), St = "__reactFiber$" + hr, eo = "__reactProps$" + hr, Ot = "__reactContainer$" + hr, Gi = "__reactEvents$" + hr, zh = "__reactListeners$" + hr, Rh = "__reactHandles$" + hr;
    function vn(e) {
        var t = e[St];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Ot] || n[St]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = nu(e); e !== null;){
                    if (n = e[St]) return n;
                    e = nu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function po(e) {
        return e = e[St] || e[Ot], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
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
    function re(e) {
        0 > Gn || (e.current = Hi[Gn], Hi[Gn] = null, Gn--);
    }
    function ee(e, t) {
        Gn++, Hi[Gn] = e.current, e.current = t;
    }
    var ln = {}, be = an(ln), Ve = an(!1), En = ln;
    function ir(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ln;
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
        re(Ve), re(be);
    }
    function ru(e, t, n) {
        if (be.current !== ln) throw Error(I(168));
        ee(be, t), ee(Ve, n);
    }
    function _d(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(I(108, mm(e) || "Unknown", o));
        return ue({}, n, r);
    }
    function ul(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, En = be.current, ee(be, e), ee(Ve, Ve.current), !0;
    }
    function ou(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(I(169));
        n ? (e = _d(e, t, En), r.__reactInternalMemoizedMergedChildContext = e, re(Ve), re(be), ee(be, e)) : re(Ve), ee(Ve, n);
    }
    var zt = null, Pl = !1, si = !1;
    function Cd(e) {
        zt === null ? zt = [
            e
        ] : zt.push(e);
    }
    function jh(e) {
        Pl = !0, Cd(e);
    }
    function un() {
        if (!si && zt !== null) {
            si = !0;
            var e = 0, t = Y;
            try {
                var n = zt;
                for(Y = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                zt = null, Pl = !1;
            } catch (o) {
                throw zt !== null && (zt = zt.slice(e + 1)), qc(js, un), o;
            } finally{
                Y = t, si = !1;
            }
        }
        return null;
    }
    var Hn = [], Kn = 0, cl = null, dl = 0, et = [], tt = 0, Tn = null, jt = 1, Pt = "";
    function xn(e, t) {
        Hn[Kn++] = dl, Hn[Kn++] = cl, cl = e, dl = t;
    }
    function Ed(e, t, n) {
        et[tt++] = jt, et[tt++] = Pt, et[tt++] = Tn, Tn = e;
        var r = jt;
        e = Pt;
        var o = 32 - ht(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - ht(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, jt = 1 << 32 - ht(t) + o | n << o | r, Pt = l + e;
        } else jt = 1 << l | n << o | r, Pt = e;
    }
    function $s(e) {
        e.return !== null && (xn(e, 1), Ed(e, 1, 0));
    }
    function Us(e) {
        for(; e === cl;)cl = Hn[--Kn], Hn[Kn] = null, dl = Hn[--Kn], Hn[Kn] = null;
        for(; e === Tn;)Tn = et[--tt], et[tt] = null, Pt = et[--tt], et[tt] = null, jt = et[--tt], et[tt] = null;
    }
    var qe = null, Qe = null, le = !1, ft = null;
    function Td(e, t) {
        var n = rt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function lu(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Qe = Jt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Qe = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tn !== null ? {
                    id: jt,
                    overflow: Pt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Qe = null, !0) : !1;
            default:
                return !1;
        }
    }
    function Ki(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Qi(e) {
        if (le) {
            var t = Qe;
            if (t) {
                var n = t;
                if (!lu(e, t)) {
                    if (Ki(e)) throw Error(I(418));
                    t = Jt(n.nextSibling);
                    var r = qe;
                    t && lu(e, t) ? Td(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, qe = e);
                }
            } else {
                if (Ki(e)) throw Error(I(418));
                e.flags = e.flags & -4097 | 2, le = !1, qe = e;
            }
        }
    }
    function iu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        qe = e;
    }
    function zo(e) {
        if (e !== qe) return !1;
        if (!le) return iu(e), le = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Wi(e.type, e.memoizedProps)), t && (t = Qe)) {
            if (Ki(e)) throw Nd(), Error(I(418));
            for(; t;)Td(e, t), t = Jt(t.nextSibling);
        }
        if (iu(e), e.tag === 13) {
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
        } else Qe = qe ? Jt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Nd() {
        for(var e = Qe; e;)e = Jt(e.nextSibling);
    }
    function sr() {
        Qe = qe = null, le = !1;
    }
    function Bs(e) {
        ft === null ? ft = [
            e
        ] : ft.push(e);
    }
    var Ph = Ft.ReactCurrentBatchConfig;
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
    function su(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Id(e) {
        function t(f, p) {
            if (e) {
                var m = f.deletions;
                m === null ? (f.deletions = [
                    p
                ], f.flags |= 16) : m.push(p);
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
            return f = rn(f, p), f.index = 0, f.sibling = null, f;
        }
        function l(f, p, m) {
            return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < p ? (f.flags |= 2, p) : m) : (f.flags |= 2, p)) : (f.flags |= 1048576, p);
        }
        function i(f) {
            return e && f.alternate === null && (f.flags |= 2), f;
        }
        function s(f, p, m, S) {
            return p === null || p.tag !== 6 ? (p = mi(m, f.mode, S), p.return = f, p) : (p = o(p, m), p.return = f, p);
        }
        function a(f, p, m, S) {
            var _ = m.type;
            return _ === $n ? d(f, p, m.props.children, S, m.key) : p !== null && (p.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Vt && su(_) === p.type) ? (S = o(p, m.props), S.ref = kr(f, p, m), S.return = f, S) : (S = qo(m.type, m.key, m.props, null, f.mode, S), S.ref = kr(f, p, m), S.return = f, S);
        }
        function u(f, p, m, S) {
            return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = hi(m, f.mode, S), p.return = f, p) : (p = o(p, m.children || []), p.return = f, p);
        }
        function d(f, p, m, S, _) {
            return p === null || p.tag !== 7 ? (p = _n(m, f.mode, S, _), p.return = f, p) : (p = o(p, m), p.return = f, p);
        }
        function c(f, p, m) {
            if (typeof p == "string" && p !== "" || typeof p == "number") return p = mi("" + p, f.mode, m), p.return = f, p;
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case vo:
                        return m = qo(p.type, p.key, p.props, null, f.mode, m), m.ref = kr(f, null, p), m.return = f, m;
                    case Fn:
                        return p = hi(p, f.mode, m), p.return = f, p;
                    case Vt:
                        var S = p._init;
                        return c(f, S(p._payload), m);
                }
                if (Rr(p) || xr(p)) return p = _n(p, f.mode, m, null), p.return = f, p;
                Ro(f, p);
            }
            return null;
        }
        function h(f, p, m, S) {
            var _ = p !== null ? p.key : null;
            if (typeof m == "string" && m !== "" || typeof m == "number") return _ !== null ? null : s(f, p, "" + m, S);
            if (typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case vo:
                        return m.key === _ ? a(f, p, m, S) : null;
                    case Fn:
                        return m.key === _ ? u(f, p, m, S) : null;
                    case Vt:
                        return _ = m._init, h(f, p, _(m._payload), S);
                }
                if (Rr(m) || xr(m)) return _ !== null ? null : d(f, p, m, S, null);
                Ro(f, m);
            }
            return null;
        }
        function w(f, p, m, S, _) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(m) || null, s(p, f, "" + S, _);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case vo:
                        return f = f.get(S.key === null ? m : S.key) || null, a(p, f, S, _);
                    case Fn:
                        return f = f.get(S.key === null ? m : S.key) || null, u(p, f, S, _);
                    case Vt:
                        var T = S._init;
                        return w(f, p, m, T(S._payload), _);
                }
                if (Rr(S) || xr(S)) return f = f.get(m) || null, d(p, f, S, _, null);
                Ro(p, S);
            }
            return null;
        }
        function g(f, p, m, S) {
            for(var _ = null, T = null, z = p, k = p = 0, O = null; z !== null && k < m.length; k++){
                z.index > k ? (O = z, z = null) : O = z.sibling;
                var D = h(f, z, m[k], S);
                if (D === null) {
                    z === null && (z = O);
                    break;
                }
                e && z && D.alternate === null && t(f, z), p = l(D, p, k), T === null ? _ = D : T.sibling = D, T = D, z = O;
            }
            if (k === m.length) return n(f, z), le && xn(f, k), _;
            if (z === null) {
                for(; k < m.length; k++)z = c(f, m[k], S), z !== null && (p = l(z, p, k), T === null ? _ = z : T.sibling = z, T = z);
                return le && xn(f, k), _;
            }
            for(z = r(f, z); k < m.length; k++)O = w(z, f, k, m[k], S), O !== null && (e && O.alternate !== null && z.delete(O.key === null ? k : O.key), p = l(O, p, k), T === null ? _ = O : T.sibling = O, T = O);
            return e && z.forEach(function(te) {
                return t(f, te);
            }), le && xn(f, k), _;
        }
        function y(f, p, m, S) {
            var _ = xr(m);
            if (typeof _ != "function") throw Error(I(150));
            if (m = _.call(m), m == null) throw Error(I(151));
            for(var T = _ = null, z = p, k = p = 0, O = null, D = m.next(); z !== null && !D.done; k++, D = m.next()){
                z.index > k ? (O = z, z = null) : O = z.sibling;
                var te = h(f, z, D.value, S);
                if (te === null) {
                    z === null && (z = O);
                    break;
                }
                e && z && te.alternate === null && t(f, z), p = l(te, p, k), T === null ? _ = te : T.sibling = te, T = te, z = O;
            }
            if (D.done) return n(f, z), le && xn(f, k), _;
            if (z === null) {
                for(; !D.done; k++, D = m.next())D = c(f, D.value, S), D !== null && (p = l(D, p, k), T === null ? _ = D : T.sibling = D, T = D);
                return le && xn(f, k), _;
            }
            for(z = r(f, z); !D.done; k++, D = m.next())D = w(z, f, k, D.value, S), D !== null && (e && D.alternate !== null && z.delete(D.key === null ? k : D.key), p = l(D, p, k), T === null ? _ = D : T.sibling = D, T = D);
            return e && z.forEach(function(ye) {
                return t(f, ye);
            }), le && xn(f, k), _;
        }
        function x(f, p, m, S) {
            if (typeof m == "object" && m !== null && m.type === $n && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case vo:
                        e: {
                            for(var _ = m.key, T = p; T !== null;){
                                if (T.key === _) {
                                    if (_ = m.type, _ === $n) {
                                        if (T.tag === 7) {
                                            n(f, T.sibling), p = o(T, m.props.children), p.return = f, f = p;
                                            break e;
                                        }
                                    } else if (T.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Vt && su(_) === T.type) {
                                        n(f, T.sibling), p = o(T, m.props), p.ref = kr(f, T, m), p.return = f, f = p;
                                        break e;
                                    }
                                    n(f, T);
                                    break;
                                } else t(f, T);
                                T = T.sibling;
                            }
                            m.type === $n ? (p = _n(m.props.children, f.mode, S, m.key), p.return = f, f = p) : (S = qo(m.type, m.key, m.props, null, f.mode, S), S.ref = kr(f, p, m), S.return = f, f = S);
                        }
                        return i(f);
                    case Fn:
                        e: {
                            for(T = m.key; p !== null;){
                                if (p.key === T) if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                    n(f, p.sibling), p = o(p, m.children || []), p.return = f, f = p;
                                    break e;
                                } else {
                                    n(f, p);
                                    break;
                                }
                                else t(f, p);
                                p = p.sibling;
                            }
                            p = hi(m, f.mode, S), p.return = f, f = p;
                        }
                        return i(f);
                    case Vt:
                        return T = m._init, x(f, p, T(m._payload), S);
                }
                if (Rr(m)) return g(f, p, m, S);
                if (xr(m)) return y(f, p, m, S);
                Ro(f, m);
            }
            return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(f, p.sibling), p = o(p, m), p.return = f, f = p) : (n(f, p), p = mi(m, f.mode, S), p.return = f, f = p), i(f)) : n(f, p);
        }
        return x;
    }
    var ar = Id(!0), zd = Id(!1), fl = an(null), pl = null, Qn = null, Ws = null;
    function Vs() {
        Ws = Qn = pl = null;
    }
    function Gs(e) {
        var t = fl.current;
        re(fl), e._currentValue = t;
    }
    function qi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function rr(e, t) {
        pl = e, Ws = Qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Be = !0), e.firstContext = null);
    }
    function lt(e) {
        var t = e._currentValue;
        if (Ws !== e) if (e = {
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
    function Hs(e) {
        wn === null ? wn = [
            e
        ] : wn.push(e);
    }
    function Rd(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, Hs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Dt(e, r);
    }
    function Dt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Gt = !1;
    function Ks(e) {
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
    function jd(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Mt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function en(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, G & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Dt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, Hs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Dt(e, n);
    }
    function Wo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ps(e, n);
        }
    }
    function au(e, t) {
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
        Gt = !1;
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
                var h = s.lane, w = s.eventTime;
                if ((r & h) === h) {
                    d !== null && (d = d.next = {
                        eventTime: w,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var g = e, y = s;
                        switch(h = t, w = n, y.tag){
                            case 1:
                                if (g = y.payload, typeof g == "function") {
                                    c = g.call(w, c, h);
                                    break e;
                                }
                                c = g;
                                break e;
                            case 3:
                                g.flags = g.flags & -65537 | 128;
                            case 0:
                                if (g = y.payload, h = typeof g == "function" ? g.call(w, c, h) : g, h == null) break e;
                                c = ue({}, c, h);
                                break e;
                            case 2:
                                Gt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [
                        s
                    ] : h.push(s));
                } else w = {
                    eventTime: w,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, d === null ? (u = d = w, a = c) : d = d.next = w, i |= h;
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
    function uu(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(I(191, o));
                o.call(r);
            }
        }
    }
    var mo = {}, _t = an(mo), to = an(mo), no = an(mo);
    function Sn(e) {
        if (e === mo) throw Error(I(174));
        return e;
    }
    function Qs(e, t) {
        switch(ee(no, t), ee(to, e), ee(_t, mo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : zi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = zi(t, e);
        }
        re(_t), ee(_t, t);
    }
    function ur() {
        re(_t), re(to), re(no);
    }
    function Pd(e) {
        Sn(no.current);
        var t = Sn(_t.current), n = zi(t, e.type);
        t !== n && (ee(to, e), ee(_t, n));
    }
    function qs(e) {
        to.current === e && (re(_t), re(to));
    }
    var se = an(0);
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
    function Ys() {
        for(var e = 0; e < ai.length; e++)ai[e]._workInProgressVersionPrimary = null;
        ai.length = 0;
    }
    var Vo = Ft.ReactCurrentDispatcher, ui = Ft.ReactCurrentBatchConfig, Nn = 0, ae = null, ke = null, Ce = null, gl = !1, Fr = !1, ro = 0, Mh = 0;
    function je() {
        throw Error(I(321));
    }
    function Xs(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!xt(e[n], t[n])) return !1;
        return !0;
    }
    function Zs(e, t, n, r, o, l) {
        if (Nn = l, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vo.current = e === null || e.memoizedState === null ? Dh : Ah, e = n(r, o), Fr) {
            l = 0;
            do {
                if (Fr = !1, ro = 0, 25 <= l) throw Error(I(301));
                l += 1, Ce = ke = null, t.updateQueue = null, Vo.current = Fh, e = n(r, o);
            }while (Fr);
        }
        if (Vo.current = xl, t = ke !== null && ke.next !== null, Nn = 0, Ce = ke = ae = null, gl = !1, t) throw Error(I(300));
        return e;
    }
    function Js() {
        var e = ro !== 0;
        return ro = 0, e;
    }
    function vt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ce === null ? ae.memoizedState = Ce = e : Ce = Ce.next = e, Ce;
    }
    function it() {
        if (ke === null) {
            var e = ae.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ke.next;
        var t = Ce === null ? ae.memoizedState : Ce.next;
        if (t !== null) Ce = t, ke = e;
        else {
            if (e === null) throw Error(I(310));
            ke = e, e = {
                memoizedState: ke.memoizedState,
                baseState: ke.baseState,
                baseQueue: ke.baseQueue,
                queue: ke.queue,
                next: null
            }, Ce === null ? ae.memoizedState = Ce = e : Ce = Ce.next = e;
        }
        return Ce;
    }
    function oo(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function ci(e) {
        var t = it(), n = t.queue;
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
                    a === null ? (s = a = c, i = r) : a = a.next = c, ae.lanes |= d, In |= d;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, xt(r, t.memoizedState) || (Be = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ae.lanes |= l, In |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function di(e) {
        var t = it(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            xt(l, t.memoizedState) || (Be = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Md() {}
    function bd(e, t) {
        var n = ae, r = it(), o = t(), l = !xt(r.memoizedState, o);
        if (l && (r.memoizedState = o, Be = !0), r = r.queue, ea(Dd.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || Ce !== null && Ce.memoizedState.tag & 1) {
            if (n.flags |= 2048, lo(9, Od.bind(null, n, r, o, t), void 0, null), Ee === null) throw Error(I(349));
            Nn & 30 || Ld(n, t, o);
        }
        return o;
    }
    function Ld(e, t, n) {
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
    function Od(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Ad(t) && Fd(e);
    }
    function Dd(e, t, n) {
        return n(function() {
            Ad(t) && Fd(e);
        });
    }
    function Ad(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !xt(e, n);
        } catch  {
            return !0;
        }
    }
    function Fd(e) {
        var t = Dt(e, 1);
        t !== null && gt(t, e, 1, -1);
    }
    function cu(e) {
        var t = vt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: oo,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Oh.bind(null, ae, e), [
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
        }, t = ae.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function $d() {
        return it().memoizedState;
    }
    function Go(e, t, n, r) {
        var o = vt();
        ae.flags |= e, o.memoizedState = lo(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Ml(e, t, n, r) {
        var o = it();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ke !== null) {
            var i = ke.memoizedState;
            if (l = i.destroy, r !== null && Xs(r, i.deps)) {
                o.memoizedState = lo(t, n, l, r);
                return;
            }
        }
        ae.flags |= e, o.memoizedState = lo(1 | t, n, l, r);
    }
    function du(e, t) {
        return Go(8390656, 8, e, t);
    }
    function ea(e, t) {
        return Ml(2048, 8, e, t);
    }
    function Ud(e, t) {
        return Ml(4, 2, e, t);
    }
    function Bd(e, t) {
        return Ml(4, 4, e, t);
    }
    function Wd(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Vd(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Ml(4, 4, Wd.bind(null, t, e), n);
    }
    function ta() {}
    function Gd(e, t) {
        var n = it();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Hd(e, t) {
        var n = it();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && Xs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Kd(e, t, n) {
        return Nn & 21 ? (xt(n, t) || (n = Zc(), ae.lanes |= n, In |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Be = !0), e.memoizedState = n);
    }
    function bh(e, t) {
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
    function Qd() {
        return it().memoizedState;
    }
    function Lh(e, t, n) {
        var r = nn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, qd(e)) Yd(t, n);
        else if (n = Rd(e, t, n, r), n !== null) {
            var o = Oe();
            gt(n, e, r, o), Xd(n, t, r);
        }
    }
    function Oh(e, t, n) {
        var r = nn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (qd(e)) Yd(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, xt(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, Hs(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Rd(e, t, o, r), n !== null && (o = Oe(), gt(n, e, r, o), Xd(n, t, r));
        }
    }
    function qd(e) {
        var t = e.alternate;
        return e === ae || t !== null && t === ae;
    }
    function Yd(e, t) {
        Fr = gl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Xd(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Ps(e, n);
        }
    }
    var xl = {
        readContext: lt,
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
    }, Dh = {
        readContext: lt,
        useCallback: function(e, t) {
            return vt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: lt,
        useEffect: du,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, Go(4194308, 4, Wd.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return Go(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return Go(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = vt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = vt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Lh.bind(null, ae, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = vt();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: cu,
        useDebugValue: ta,
        useDeferredValue: function(e) {
            return vt().memoizedState = e;
        },
        useTransition: function() {
            var e = cu(!1), t = e[0];
            return e = bh.bind(null, e[1]), vt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ae, o = vt();
            if (le) {
                if (n === void 0) throw Error(I(407));
                n = n();
            } else {
                if (n = t(), Ee === null) throw Error(I(349));
                Nn & 30 || Ld(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, du(Dd.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, lo(9, Od.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = vt(), t = Ee.identifierPrefix;
            if (le) {
                var n = Pt, r = jt;
                n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ro++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Mh++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Ah = {
        readContext: lt,
        useCallback: Gd,
        useContext: lt,
        useEffect: ea,
        useImperativeHandle: Vd,
        useInsertionEffect: Ud,
        useLayoutEffect: Bd,
        useMemo: Hd,
        useReducer: ci,
        useRef: $d,
        useState: function() {
            return ci(oo);
        },
        useDebugValue: ta,
        useDeferredValue: function(e) {
            var t = it();
            return Kd(t, ke.memoizedState, e);
        },
        useTransition: function() {
            var e = ci(oo)[0], t = it().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Md,
        useSyncExternalStore: bd,
        useId: Qd,
        unstable_isNewReconciler: !1
    }, Fh = {
        readContext: lt,
        useCallback: Gd,
        useContext: lt,
        useEffect: ea,
        useImperativeHandle: Vd,
        useInsertionEffect: Ud,
        useLayoutEffect: Bd,
        useMemo: Hd,
        useReducer: di,
        useRef: $d,
        useState: function() {
            return di(oo);
        },
        useDebugValue: ta,
        useDeferredValue: function(e) {
            var t = it();
            return ke === null ? t.memoizedState = e : Kd(t, ke.memoizedState, e);
        },
        useTransition: function() {
            var e = di(oo)[0], t = it().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Md,
        useSyncExternalStore: bd,
        useId: Qd,
        unstable_isNewReconciler: !1
    };
    function ut(e, t) {
        if (e && e.defaultProps) {
            t = ue({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function Yi(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var bl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? jn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Oe(), o = nn(e), l = Mt(r, o);
            l.payload = t, n != null && (l.callback = n), t = en(e, l, o), t !== null && (gt(t, e, o, r), Wo(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Oe(), o = nn(e), l = Mt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = en(e, l, o), t !== null && (gt(t, e, o, r), Wo(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Oe(), r = nn(e), o = Mt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = en(e, o, r), t !== null && (gt(t, e, r, n), Wo(t, e, r));
        }
    };
    function fu(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(o, l) : !0;
    }
    function Zd(e, t, n) {
        var r = !1, o = ln, l = t.contextType;
        return typeof l == "object" && l !== null ? l = lt(l) : (o = Ge(t) ? En : be.current, r = t.contextTypes, l = (r = r != null) ? ir(e, o) : ln), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = bl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function pu(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bl.enqueueReplaceState(t, t.state, null);
    }
    function Xi(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, Ks(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = lt(l) : (l = Ge(t) ? En : be.current, o.context = ir(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Yi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && bl.enqueueReplaceState(o, o.state, null), ml(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function cr(e, t) {
        try {
            var n = "", r = t;
            do n += pm(r), r = r.return;
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
    function Zi(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var $h = typeof WeakMap == "function" ? WeakMap : Map;
    function Jd(e, t, n) {
        n = Mt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            vl || (vl = !0, as = r), Zi(e, t);
        }, n;
    }
    function ef(e, t, n) {
        n = Mt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                Zi(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Zi(e, t), typeof r != "function" && (tn === null ? tn = new Set([
                this
            ]) : tn.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function mu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new $h;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = eg.bind(null, e, t, n), t.then(e, e));
    }
    function hu(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function gu(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Mt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e);
    }
    var Uh = Ft.ReactCurrentOwner, Be = !1;
    function Le(e, t, n, r) {
        t.child = e === null ? zd(t, null, n, r) : ar(t, e.child, n, r);
    }
    function xu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return rr(t, o), r = Zs(e, t, n, r, l, o), n = Js(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, At(e, t, o)) : (le && n && $s(t), t.flags |= 1, Le(e, t, r, o), t.child);
    }
    function yu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !ua(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, tf(e, t, l, r, o)) : (e = qo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Xr, n(i, r) && e.ref === t.ref) return At(e, t, o);
        }
        return t.flags |= 1, e = rn(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function tf(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Xr(l, r) && e.ref === t.ref) if (Be = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Be = !0);
            else return t.lanes = e.lanes, At(e, t, o);
        }
        return Ji(e, t, n, r, o);
    }
    function nf(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ee(Yn, Ke), Ke |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ee(Yn, Ke), Ke |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, ee(Yn, Ke), Ke |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ee(Yn, Ke), Ke |= r;
        return Le(e, t, o, n), t.child;
    }
    function rf(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Ji(e, t, n, r, o) {
        var l = Ge(n) ? En : be.current;
        return l = ir(t, l), rr(t, o), n = Zs(e, t, n, r, l, o), r = Js(), e !== null && !Be ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, At(e, t, o)) : (le && r && $s(t), t.flags |= 1, Le(e, t, n, o), t.child);
    }
    function vu(e, t, n, r, o) {
        if (Ge(n)) {
            var l = !0;
            ul(t);
        } else l = !1;
        if (rr(t, o), t.stateNode === null) Ho(e, t), Zd(t, n, r), Xi(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = lt(u) : (u = Ge(n) ? En : be.current, u = ir(t, u));
            var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            c || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && pu(t, i, r, u), Gt = !1;
            var h = t.memoizedState;
            i.state = h, ml(t, r, i, o), a = t.memoizedState, s !== r || h !== a || Ve.current || Gt ? (typeof d == "function" && (Yi(t, n, d, r), a = t.memoizedState), (s = Gt || fu(t, n, s, r, h, a, u)) ? (c || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, jd(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ut(t.type, s), i.props = u, c = t.pendingProps, h = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = lt(a) : (a = Ge(n) ? En : be.current, a = ir(t, a));
            var w = n.getDerivedStateFromProps;
            (d = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== c || h !== a) && pu(t, i, r, a), Gt = !1, h = t.memoizedState, i.state = h, ml(t, r, i, o);
            var g = t.memoizedState;
            s !== c || h !== g || Ve.current || Gt ? (typeof w == "function" && (Yi(t, n, w, r), g = t.memoizedState), (u = Gt || fu(t, n, u, r, h, g, a) || !1) ? (d || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, g, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, g, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), i.props = r, i.state = g, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return es(e, t, n, r, l, o);
    }
    function es(e, t, n, r, o, l) {
        rf(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && ou(t, n, !1), At(e, t, l);
        r = t.stateNode, Uh.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = ar(t, e.child, null, l), t.child = ar(t, null, s, l)) : Le(e, t, s, l), t.memoizedState = r.state, o && ou(t, n, !0), t.child;
    }
    function of(e) {
        var t = e.stateNode;
        t.pendingContext ? ru(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ru(e, t.context, !1), Qs(e, t.containerInfo);
    }
    function wu(e, t, n, r, o) {
        return sr(), Bs(o), t.flags |= 256, Le(e, t, n, r), t.child;
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
    function lf(e, t, n) {
        var r = t.pendingProps, o = se.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ee(se, o & 1), e === null) return Qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Dl(i, r, 0, null), e = _n(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ns(n), t.memoizedState = ts, e) : na(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Bh(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = rn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = rn(s, l) : (l = _n(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? ns(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ts, r;
        }
        return l = e.child, e = l.sibling, r = rn(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function na(e, t) {
        return t = Dl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function jo(e, t, n, r) {
        return r !== null && Bs(r), ar(t, e.child, null, n), e = na(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Bh(e, t, n, r, o, l, i) {
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
            if (r = Ee, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Dt(e, o), gt(r, e, o, -1));
            }
            return aa(), r = fi(Error(I(421))), jo(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = tg.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Qe = Jt(o.nextSibling), qe = t, le = !0, ft = null, e !== null && (et[tt++] = jt, et[tt++] = Pt, et[tt++] = Tn, jt = e.id, Pt = e.overflow, Tn = t), t = na(t, r.children), t.flags |= 4096, t);
    }
    function Su(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), qi(e.return, t, n);
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
    function sf(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Le(e, t, r.children, n), r = se.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Su(e, n, t);
                else if (e.tag === 19) Su(e, n, t);
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
    function At(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), In |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(I(153));
        if (t.child !== null) {
            for(e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function Wh(e, t, n) {
        switch(t.tag){
            case 3:
                of(t), sr();
                break;
            case 5:
                Pd(t);
                break;
            case 1:
                Ge(t.type) && ul(t);
                break;
            case 4:
                Qs(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                ee(fl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ee(se, se.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? lf(e, t, n) : (ee(se, se.current & 1), e = At(e, t, n), e !== null ? e.sibling : null);
                ee(se, se.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return sf(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ee(se, se.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, nf(e, t, n);
        }
        return At(e, t, n);
    }
    var af, rs, uf, cf;
    af = function(e, t) {
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
    uf = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, Sn(_t.current);
            var l = null;
            switch(n){
                case "input":
                    o = Ei(e, o), r = Ei(e, r), l = [];
                    break;
                case "select":
                    o = ue({}, o, {
                        value: void 0
                    }), r = ue({}, r, {
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
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Vr.hasOwnProperty(u) ? (a != null && u === "onScroll" && ne("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    cf = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function _r(e, t) {
        if (!le) switch(e.tailMode){
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
    function Vh(e, t, n) {
        var r = t.pendingProps;
        switch(Us(t), t.tag){
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
                return r = t.stateNode, ur(), re(Ve), re(be), Ys(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (ds(ft), ft = null))), rs(e, t), Pe(t), null;
            case 5:
                qs(t);
                var o = Sn(no.current);
                if (n = t.type, e !== null && t.stateNode != null) uf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(I(166));
                        return Pe(t), null;
                    }
                    if (e = Sn(_t.current), zo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[St] = t, r[eo] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                ne("cancel", r), ne("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ne("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < Pr.length; o++)ne(Pr[o], r);
                                break;
                            case "source":
                                ne("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ne("error", r), ne("load", r);
                                break;
                            case "details":
                                ne("toggle", r);
                                break;
                            case "input":
                                Ra(r, l), ne("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, ne("invalid", r);
                                break;
                            case "textarea":
                                Pa(r, l), ne("invalid", r);
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
                            ]) : Vr.hasOwnProperty(i) && s != null && i === "onScroll" && ne("scroll", r);
                        }
                        switch(n){
                            case "input":
                                wo(r), ja(r, l, !0);
                                break;
                            case "textarea":
                                wo(r), Ma(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = sl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Dc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[St] = t, e[eo] = r, af(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = ji(n, r), n){
                                case "dialog":
                                    ne("cancel", e), ne("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ne("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < Pr.length; o++)ne(Pr[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    ne("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ne("error", e), ne("load", e), o = r;
                                    break;
                                case "details":
                                    ne("toggle", e), o = r;
                                    break;
                                case "input":
                                    Ra(e, r), o = Ei(e, r), ne("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = ue({}, r, {
                                        value: void 0
                                    }), ne("invalid", e);
                                    break;
                                case "textarea":
                                    Pa(e, r), o = Ii(e, r), ne("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Ri(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? $c(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ac(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Gr(e, a) : typeof a == "number" && Gr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Vr.hasOwnProperty(l) ? a != null && l === "onScroll" && ne("scroll", e) : a != null && Ts(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    wo(e), ja(e, r, !1);
                                    break;
                                case "textarea":
                                    wo(e), Ma(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + on(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? Jn(e, !!r.multiple, l, !1) : r.defaultValue != null && Jn(e, !!r.multiple, r.defaultValue, !0);
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
                if (e && t.stateNode != null) cf(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
                    if (n = Sn(no.current), Sn(_t.current), zo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (l = r.nodeValue !== n) && (e = qe, e !== null)) switch(e.tag){
                            case 3:
                                Io(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Io(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
                }
                return Pe(t), null;
            case 13:
                if (re(se), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (le && Qe !== null && t.mode & 1 && !(t.flags & 128)) Nd(), sr(), t.flags |= 98560, l = !1;
                    else if (l = zo(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(I(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(I(317));
                            l[St] = t;
                        } else sr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Pe(t), l = !1;
                    } else ft !== null && (ds(ft), ft = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || se.current & 1 ? _e === 0 && (_e = 3) : aa())), t.updateQueue !== null && (t.flags |= 4), Pe(t), null);
            case 4:
                return ur(), rs(e, t), e === null && Zr(t.stateNode.containerInfo), Pe(t), null;
            case 10:
                return Gs(t.type._context), Pe(t), null;
            case 17:
                return Ge(t.type) && al(), Pe(t), null;
            case 19:
                if (re(se), l = t.memoizedState, l === null) return Pe(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) _r(l, !1);
                else {
                    if (_e !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = hl(e), i !== null) {
                            for(t.flags |= 128, _r(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return ee(se, se.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && ge() > dr && (t.flags |= 128, r = !0, _r(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = hl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _r(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !le) return Pe(t), null;
                    } else 2 * ge() - l.renderingStartTime > dr && n !== 1073741824 && (t.flags |= 128, r = !0, _r(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ge(), t.sibling = null, n = se.current, ee(se, r ? n & 1 | 2 : n & 1), t) : (Pe(t), null);
            case 22:
            case 23:
                return sa(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ke & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pe(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(I(156, t.tag));
    }
    function Gh(e, t) {
        switch(Us(t), t.tag){
            case 1:
                return Ge(t.type) && al(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ur(), re(Ve), re(be), Ys(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return qs(t), null;
            case 13:
                if (re(se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(I(340));
                    sr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return re(se), null;
            case 4:
                return ur(), null;
            case 10:
                return Gs(t.type._context), null;
            case 22:
            case 23:
                return sa(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Po = !1, Me = !1, Hh = typeof WeakSet == "function" ? WeakSet : Set, R = null;
    function qn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            fe(e, t, r);
        }
        else n.current = null;
    }
    function os(e, t, n) {
        try {
            n();
        } catch (r) {
            fe(e, t, r);
        }
    }
    var ku = !1;
    function Kh(e, t) {
        if (Ui = ol, e = md(), Fs(e)) {
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
                        for(var w; c !== n || o !== 0 && c.nodeType !== 3 || (s = i + o), c !== l || r !== 0 && c.nodeType !== 3 || (a = i + r), c.nodeType === 3 && (i += c.nodeValue.length), (w = c.firstChild) !== null;)h = c, c = w;
                        for(;;){
                            if (c === e) break t;
                            if (h === n && ++u === o && (s = i), h === l && ++d === r && (a = i), (w = c.nextSibling) !== null) break;
                            c = h, h = c.parentNode;
                        }
                        c = w;
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
                var g = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (g !== null) {
                            var y = g.memoizedProps, x = g.memoizedState, f = t.stateNode, p = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ut(t.type, y), x);
                            f.__reactInternalSnapshotBeforeUpdate = p;
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
                fe(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, R = e;
                break;
            }
            R = t.return;
        }
        return g = ku, ku = !1, g;
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
    function df(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, df(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[eo], delete t[Gi], delete t[zh], delete t[Rh])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function ff(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function _u(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || ff(e.return)) return null;
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
    var Ne = null, ct = !1;
    function $t(e, t, n) {
        for(n = n.child; n !== null;)pf(e, t, n), n = n.sibling;
    }
    function pf(e, t, n) {
        if (kt && typeof kt.onCommitFiberUnmount == "function") try {
            kt.onCommitFiberUnmount(Nl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Me || qn(n, t);
            case 6:
                var r = Ne, o = ct;
                Ne = null, $t(e, t, n), Ne = r, ct = o, Ne !== null && (ct ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
                break;
            case 18:
                Ne !== null && (ct ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n), qr(e)) : ii(Ne, n.stateNode));
                break;
            case 4:
                r = Ne, o = ct, Ne = n.stateNode.containerInfo, ct = !0, $t(e, t, n), Ne = r, ct = o;
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
                $t(e, t, n);
                break;
            case 1:
                if (!Me && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    fe(n, t, s);
                }
                $t(e, t, n);
                break;
            case 21:
                $t(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Me = (r = Me) || n.memoizedState !== null, $t(e, t, n), Me = r) : $t(e, t, n);
                break;
            default:
                $t(e, t, n);
        }
    }
    function Cu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Hh), t.forEach(function(r) {
                var o = ng.bind(null, e, r);
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
                            Ne = s.stateNode, ct = !1;
                            break e;
                        case 3:
                            Ne = s.stateNode.containerInfo, ct = !0;
                            break e;
                        case 4:
                            Ne = s.stateNode.containerInfo, ct = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (Ne === null) throw Error(I(160));
                pf(l, i, o), Ne = null, ct = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                fe(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)mf(t, e), t = t.sibling;
    }
    function mf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (st(t, e), yt(e), r & 4) {
                    try {
                        $r(3, e, e.return), Ll(3, e);
                    } catch (y) {
                        fe(e, e.return, y);
                    }
                    try {
                        $r(5, e, e.return);
                    } catch (y) {
                        fe(e, e.return, y);
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
                        Gr(o, "");
                    } catch (y) {
                        fe(e, e.return, y);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Lc(o, l), ji(s, i);
                        var u = ji(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var d = a[i], c = a[i + 1];
                            d === "style" ? $c(o, c) : d === "dangerouslySetInnerHTML" ? Ac(o, c) : d === "children" ? Gr(o, c) : Ts(o, d, c, u);
                        }
                        switch(s){
                            case "input":
                                Ti(o, l);
                                break;
                            case "textarea":
                                Oc(o, l);
                                break;
                            case "select":
                                var h = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var w = l.value;
                                w != null ? Jn(o, !!l.multiple, w, !1) : h !== !!l.multiple && (l.defaultValue != null ? Jn(o, !!l.multiple, l.defaultValue, !0) : Jn(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[eo] = l;
                    } catch (y) {
                        fe(e, e.return, y);
                    }
                }
                break;
            case 6:
                if (st(t, e), yt(e), r & 4) {
                    if (e.stateNode === null) throw Error(I(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (y) {
                        fe(e, e.return, y);
                    }
                }
                break;
            case 3:
                if (st(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    qr(t.containerInfo);
                } catch (y) {
                    fe(e, e.return, y);
                }
                break;
            case 4:
                st(t, e), yt(e);
                break;
            case 13:
                st(t, e), yt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (la = ge())), r & 4 && Cu(e);
                break;
            case 22:
                if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Me = (u = Me) || d, st(t, e), Me = u) : st(t, e), yt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for(R = e, d = e.child; d !== null;){
                        for(c = R = d; R !== null;){
                            switch(h = R, w = h.child, h.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    $r(4, h, h.return);
                                    break;
                                case 1:
                                    qn(h, h.return);
                                    var g = h.stateNode;
                                    if (typeof g.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                                        } catch (y) {
                                            fe(r, n, y);
                                        }
                                    }
                                    break;
                                case 5:
                                    qn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Tu(c);
                                        continue;
                                    }
                            }
                            w !== null ? (w.return = h, R = w) : Tu(c);
                        }
                        d = d.sibling;
                    }
                    e: for(d = null, c = e;;){
                        if (c.tag === 5) {
                            if (d === null) {
                                d = c;
                                try {
                                    o = c.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = c.stateNode, a = c.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Fc("display", i));
                                } catch (y) {
                                    fe(e, e.return, y);
                                }
                            }
                        } else if (c.tag === 6) {
                            if (d === null) try {
                                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
                            } catch (y) {
                                fe(e, e.return, y);
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
                st(t, e), yt(e), r & 4 && Cu(e);
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
                        if (ff(n)) {
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
                        var l = _u(e);
                        ss(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = _u(e);
                        is(e, s, i);
                        break;
                    default:
                        throw Error(I(161));
                }
            } catch (a) {
                fe(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Qh(e, t, n) {
        R = e, hf(e);
    }
    function hf(e, t, n) {
        for(var r = (e.mode & 1) !== 0; R !== null;){
            var o = R, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Po;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || Me;
                    s = Po;
                    var u = Me;
                    if (Po = i, (Me = a) && !u) for(R = o; R !== null;)i = R, a = i.child, i.tag === 22 && i.memoizedState !== null ? Nu(o) : a !== null ? (a.return = i, R = a) : Nu(o);
                    for(; l !== null;)R = l, hf(l), l = l.sibling;
                    R = o, Po = s, Me = u;
                }
                Eu(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, R = l) : Eu(e);
        }
    }
    function Eu(e) {
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
                                var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && uu(t, l, r);
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
                                uu(t, i, n);
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
                                        c !== null && qr(c);
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
                    fe(t, t.return, h);
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
    function Tu(e) {
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
    function Nu(e) {
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
                            fe(t, n, a);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (a) {
                                fe(t, o, a);
                            }
                        }
                        var l = t.return;
                        try {
                            ls(t);
                        } catch (a) {
                            fe(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            ls(t);
                        } catch (a) {
                            fe(t, i, a);
                        }
                }
            } catch (a) {
                fe(t, t.return, a);
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
    var qh = Math.ceil, yl = Ft.ReactCurrentDispatcher, ra = Ft.ReactCurrentOwner, ot = Ft.ReactCurrentBatchConfig, G = 0, Ee = null, xe = null, Ie = 0, Ke = 0, Yn = an(0), _e = 0, io = null, In = 0, Ol = 0, oa = 0, Ur = null, Ue = null, la = 0, dr = 1 / 0, Nt = null, vl = !1, as = null, tn = null, Mo = !1, qt = null, wl = 0, Br = 0, us = null, Ko = -1, Qo = 0;
    function Oe() {
        return G & 6 ? ge() : Ko !== -1 ? Ko : Ko = ge();
    }
    function nn(e) {
        return e.mode & 1 ? G & 2 && Ie !== 0 ? Ie & -Ie : Ph.transition !== null ? (Qo === 0 && (Qo = Zc()), Qo) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ld(e.type)), e) : 1;
    }
    function gt(e, t, n, r) {
        if (50 < Br) throw Br = 0, us = null, Error(I(185));
        co(e, n, r), (!(G & 2) || e !== Ee) && (e === Ee && (!(G & 2) && (Ol |= n), _e === 4 && Kt(e, Ie)), He(e, r), n === 1 && G === 0 && !(t.mode & 1) && (dr = ge() + 500, Pl && un()));
    }
    function He(e, t) {
        var n = e.callbackNode;
        Pm(e, t);
        var r = rl(e, e === Ee ? Ie : 0);
        if (r === 0) n !== null && Oa(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Oa(n), t === 1) e.tag === 0 ? jh(Iu.bind(null, e)) : Cd(Iu.bind(null, e)), Nh(function() {
                !(G & 6) && un();
            }), n = null;
            else {
                switch(Jc(r)){
                    case 1:
                        n = js;
                        break;
                    case 4:
                        n = Yc;
                        break;
                    case 16:
                        n = nl;
                        break;
                    case 536870912:
                        n = Xc;
                        break;
                    default:
                        n = nl;
                }
                n = _f(n, gf.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function gf(e, t) {
        if (Ko = -1, Qo = 0, G & 6) throw Error(I(327));
        var n = e.callbackNode;
        if (or() && e.callbackNode !== n) return null;
        var r = rl(e, e === Ee ? Ie : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
        else {
            t = r;
            var o = G;
            G |= 2;
            var l = yf();
            (Ee !== e || Ie !== t) && (Nt = null, dr = ge() + 500, kn(e, t));
            do try {
                Zh();
                break;
            } catch (s) {
                xf(e, s);
            }
            while (!0);
            Vs(), yl.current = l, G = o, xe !== null ? t = 0 : (Ee = null, Ie = 0, t = _e);
        }
        if (t !== 0) {
            if (t === 2 && (o = Oi(e), o !== 0 && (r = o, t = cs(e, o))), t === 1) throw n = io, kn(e, 0), Kt(e, r), He(e, ge()), n;
            if (t === 6) Kt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Yh(o) && (t = Sl(e, r), t === 2 && (l = Oi(e), l !== 0 && (r = l, t = cs(e, l))), t === 1)) throw n = io, kn(e, 0), Kt(e, r), He(e, ge()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(I(345));
                    case 2:
                        yn(e, Ue, Nt);
                        break;
                    case 3:
                        if (Kt(e, r), (r & 130023424) === r && (t = la + 500 - ge(), 10 < t)) {
                            if (rl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Oe(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = Vi(yn.bind(null, e, Ue, Nt), t);
                            break;
                        }
                        yn(e, Ue, Nt);
                        break;
                    case 4:
                        if (Kt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - ht(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = ge() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qh(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = Vi(yn.bind(null, e, Ue, Nt), r);
                            break;
                        }
                        yn(e, Ue, Nt);
                        break;
                    case 5:
                        yn(e, Ue, Nt);
                        break;
                    default:
                        throw Error(I(329));
                }
            }
        }
        return He(e, ge()), e.callbackNode === n ? gf.bind(null, e) : null;
    }
    function cs(e, t) {
        var n = Ur;
        return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = Ue, Ue = n, t !== null && ds(t)), e;
    }
    function ds(e) {
        Ue === null ? Ue = e : Ue.push.apply(Ue, e);
    }
    function Yh(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!xt(l(), o)) return !1;
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
    function Kt(e, t) {
        for(t &= ~oa, t &= ~Ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - ht(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Iu(e) {
        if (G & 6) throw Error(I(327));
        or();
        var t = rl(e, 0);
        if (!(t & 1)) return He(e, ge()), null;
        var n = Sl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = Oi(e);
            r !== 0 && (t = r, n = cs(e, r));
        }
        if (n === 1) throw n = io, kn(e, 0), Kt(e, t), He(e, ge()), n;
        if (n === 6) throw Error(I(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, Ue, Nt), He(e, ge()), null;
    }
    function ia(e, t) {
        var n = G;
        G |= 1;
        try {
            return e(t);
        } finally{
            G = n, G === 0 && (dr = ge() + 500, Pl && un());
        }
    }
    function zn(e) {
        qt !== null && qt.tag === 0 && !(G & 6) && or();
        var t = G;
        G |= 1;
        var n = ot.transition, r = Y;
        try {
            if (ot.transition = null, Y = 1, e) return e();
        } finally{
            Y = r, ot.transition = n, G = t, !(G & 6) && un();
        }
    }
    function sa() {
        Ke = Yn.current, re(Yn);
    }
    function kn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Th(n)), xe !== null) for(n = xe.return; n !== null;){
            var r = n;
            switch(Us(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && al();
                    break;
                case 3:
                    ur(), re(Ve), re(be), Ys();
                    break;
                case 5:
                    qs(r);
                    break;
                case 4:
                    ur();
                    break;
                case 13:
                    re(se);
                    break;
                case 19:
                    re(se);
                    break;
                case 10:
                    Gs(r.type._context);
                    break;
                case 22:
                case 23:
                    sa();
            }
            n = n.return;
        }
        if (Ee = e, xe = e = rn(e.current, null), Ie = Ke = t, _e = 0, io = null, oa = Ol = In = 0, Ue = Ur = null, wn !== null) {
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
    function xf(e, t) {
        do {
            var n = xe;
            try {
                if (Vs(), Vo.current = xl, gl) {
                    for(var r = ae.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    gl = !1;
                }
                if (Nn = 0, Ce = ke = ae = null, Fr = !1, ro = 0, ra.current = null, n === null || n.return === null) {
                    _e = 1, io = t, xe = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = Ie, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, d = s, c = d.tag;
                        if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
                            var h = d.alternate;
                            h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var w = hu(i);
                        if (w !== null) {
                            w.flags &= -257, gu(w, i, s, l, t), w.mode & 1 && mu(l, u, t), t = w, a = u;
                            var g = t.updateQueue;
                            if (g === null) {
                                var y = new Set;
                                y.add(a), t.updateQueue = y;
                            } else g.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                mu(l, u, t), aa();
                                break e;
                            }
                            a = Error(I(426));
                        }
                    } else if (le && s.mode & 1) {
                        var x = hu(i);
                        if (x !== null) {
                            !(x.flags & 65536) && (x.flags |= 256), gu(x, i, s, l, t), Bs(cr(a, s));
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
                                var f = Jd(l, a, t);
                                au(l, f);
                                break e;
                            case 1:
                                s = a;
                                var p = l.type, m = l.stateNode;
                                if (!(l.flags & 128) && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (tn === null || !tn.has(m)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = ef(l, s, t);
                                    au(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                wf(n);
            } catch (_) {
                t = _, xe === n && n !== null && (xe = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function yf() {
        var e = yl.current;
        return yl.current = xl, e === null ? xl : e;
    }
    function aa() {
        (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Ee === null || !(In & 268435455) && !(Ol & 268435455) || Kt(Ee, Ie);
    }
    function Sl(e, t) {
        var n = G;
        G |= 2;
        var r = yf();
        (Ee !== e || Ie !== t) && (Nt = null, kn(e, t));
        do try {
            Xh();
            break;
        } catch (o) {
            xf(e, o);
        }
        while (!0);
        if (Vs(), G = n, yl.current = r, xe !== null) throw Error(I(261));
        return Ee = null, Ie = 0, _e;
    }
    function Xh() {
        for(; xe !== null;)vf(xe);
    }
    function Zh() {
        for(; xe !== null && !_m();)vf(xe);
    }
    function vf(e) {
        var t = kf(e.alternate, e, Ke);
        e.memoizedProps = e.pendingProps, t === null ? wf(e) : xe = t, ra.current = null;
    }
    function wf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = Gh(n, t), n !== null) {
                    n.flags &= 32767, xe = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    _e = 6, xe = null;
                    return;
                }
            } else if (n = Vh(n, t, Ke), n !== null) {
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
    function yn(e, t, n) {
        var r = Y, o = ot.transition;
        try {
            ot.transition = null, Y = 1, Jh(e, t, n, r);
        } finally{
            ot.transition = o, Y = r;
        }
        return null;
    }
    function Jh(e, t, n, r) {
        do or();
        while (qt !== null);
        if (G & 6) throw Error(I(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Mm(e, l), e === Ee && (xe = Ee = null, Ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Mo || (Mo = !0, _f(nl, function() {
            return or(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = ot.transition, ot.transition = null;
            var i = Y;
            Y = 1;
            var s = G;
            G |= 4, ra.current = null, Kh(e, n), mf(n, e), vh(Bi), ol = !!Ui, Bi = Ui = null, e.current = n, Qh(n), Cm(), G = s, Y = i, ot.transition = l;
        } else e.current = n;
        if (Mo && (Mo = !1, qt = e, wl = o), l = e.pendingLanes, l === 0 && (tn = null), Nm(n.stateNode), He(e, ge()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (vl) throw vl = !1, e = as, as = null, e;
        return wl & 1 && e.tag !== 0 && or(), l = e.pendingLanes, l & 1 ? e === us ? Br++ : (Br = 0, us = e) : Br = 0, un(), null;
    }
    function or() {
        if (qt !== null) {
            var e = Jc(wl), t = ot.transition, n = Y;
            try {
                if (ot.transition = null, Y = 16 > e ? 16 : e, qt === null) var r = !1;
                else {
                    if (e = qt, qt = null, wl = 0, G & 6) throw Error(I(331));
                    var o = G;
                    for(G |= 4, R = e.current; R !== null;){
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
                                            var h = d.sibling, w = d.return;
                                            if (df(d), d === u) {
                                                R = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                h.return = w, R = h;
                                                break;
                                            }
                                            R = w;
                                        }
                                    }
                                }
                                var g = l.alternate;
                                if (g !== null) {
                                    var y = g.child;
                                    if (y !== null) {
                                        g.child = null;
                                        do {
                                            var x = y.sibling;
                                            y.sibling = null, y = x;
                                        }while (y !== null);
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
                        var m = i.child;
                        if (i.subtreeFlags & 2064 && m !== null) m.return = i, R = m;
                        else e: for(i = p; R !== null;){
                            if (s = R, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ll(9, s);
                                }
                            } catch (_) {
                                fe(s, s.return, _);
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
                    if (G = o, un(), kt && typeof kt.onPostCommitFiberRoot == "function") try {
                        kt.onPostCommitFiberRoot(Nl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                Y = n, ot.transition = t;
            }
        }
        return !1;
    }
    function zu(e, t, n) {
        t = cr(n, t), t = Jd(e, t, 1), e = en(e, t, 1), t = Oe(), e !== null && (co(e, 1, t), He(e, t));
    }
    function fe(e, t, n) {
        if (e.tag === 3) zu(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                zu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
                    e = cr(n, e), e = ef(t, e, 1), t = en(t, e, 1), e = Oe(), t !== null && (co(t, 1, e), He(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function eg(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Oe(), e.pingedLanes |= e.suspendedLanes & n, Ee === e && (Ie & n) === n && (_e === 4 || _e === 3 && (Ie & 130023424) === Ie && 500 > ge() - la ? kn(e, 0) : oa |= n), He(e, t);
    }
    function Sf(e, t) {
        t === 0 && (e.mode & 1 ? (t = _o, _o <<= 1, !(_o & 130023424) && (_o = 4194304)) : t = 1);
        var n = Oe();
        e = Dt(e, t), e !== null && (co(e, t, n), He(e, n));
    }
    function tg(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), Sf(e, n);
    }
    function ng(e, t) {
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
        r !== null && r.delete(t), Sf(e, n);
    }
    var kf;
    kf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Be = !1, Wh(e, t, n);
            Be = !!(e.flags & 131072);
        }
        else Be = !1, le && t.flags & 1048576 && Ed(t, dl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                Ho(e, t), e = t.pendingProps;
                var o = ir(t, be.current);
                rr(t, n), o = Zs(null, t, r, e, o, n);
                var l = Js();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ge(r) ? (l = !0, ul(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Ks(t), o.updater = bl, t.stateNode = o, o._reactInternals = t, Xi(t, r, e, n), t = es(null, t, r, !0, l, n)) : (t.tag = 0, le && l && $s(t), Le(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(Ho(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = og(r), e = ut(r, e), o){
                        case 0:
                            t = Ji(null, t, r, e, n);
                            break e;
                        case 1:
                            t = vu(null, t, r, e, n);
                            break e;
                        case 11:
                            t = xu(null, t, r, e, n);
                            break e;
                        case 14:
                            t = yu(null, t, r, ut(r.type, e), n);
                            break e;
                    }
                    throw Error(I(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Ji(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), vu(e, t, r, o, n);
            case 3:
                e: {
                    if (of(t), e === null) throw Error(I(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, jd(e, t), ml(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = cr(Error(I(423)), t), t = wu(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = cr(Error(I(424)), t), t = wu(e, t, r, n, o);
                        break e;
                    } else for(Qe = Jt(t.stateNode.containerInfo.firstChild), qe = t, le = !0, ft = null, n = zd(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (sr(), r === o) {
                            t = At(e, t, n);
                            break e;
                        }
                        Le(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Pd(t), e === null && Qi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Wi(r, o) ? i = null : l !== null && Wi(r, l) && (t.flags |= 32), rf(e, t), Le(e, t, i, n), t.child;
            case 6:
                return e === null && Qi(t), null;
            case 13:
                return lf(e, t, n);
            case 4:
                return Qs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ar(t, null, r, n) : Le(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), xu(e, t, r, o, n);
            case 7:
                return Le(e, t, t.pendingProps, n), t.child;
            case 8:
                return Le(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Le(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, ee(fl, r._currentValue), r._currentValue = i, l !== null) if (xt(l.value, i)) {
                        if (l.children === o.children && !Ve.current) {
                            t = At(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var a = s.firstContext; a !== null;){
                                if (a.context === r) {
                                    if (l.tag === 1) {
                                        a = Mt(-1, n & -n), a.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var d = u.pending;
                                            d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                                        }
                                    }
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), qi(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(I(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), qi(i, n, t), i = l.sibling;
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
                return o = t.type, r = t.pendingProps.children, rr(t, n), o = lt(o), r = r(o), t.flags |= 1, Le(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), yu(e, t, r, o, n);
            case 15:
                return tf(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Ho(e, t), t.tag = 1, Ge(r) ? (e = !0, ul(t)) : e = !1, rr(t, n), Zd(t, r, o), Xi(t, r, o, n), es(null, t, r, !0, e, n);
            case 19:
                return sf(e, t, n);
            case 22:
                return nf(e, t, n);
        }
        throw Error(I(156, t.tag));
    };
    function _f(e, t) {
        return qc(e, t);
    }
    function rg(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function rt(e, t, n, r) {
        return new rg(e, t, n, r);
    }
    function ua(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function og(e) {
        if (typeof e == "function") return ua(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Is) return 11;
            if (e === zs) return 14;
        }
        return 2;
    }
    function rn(e, t) {
        var n = e.alternate;
        return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function qo(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") ua(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case $n:
                return _n(n.children, o, l, t);
            case Ns:
                i = 8, o |= 8;
                break;
            case Si:
                return e = rt(12, n, t, o | 2), e.elementType = Si, e.lanes = l, e;
            case ki:
                return e = rt(13, n, t, o), e.elementType = ki, e.lanes = l, e;
            case _i:
                return e = rt(19, n, t, o), e.elementType = _i, e.lanes = l, e;
            case Pc:
                return Dl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Rc:
                        i = 10;
                        break e;
                    case jc:
                        i = 9;
                        break e;
                    case Is:
                        i = 11;
                        break e;
                    case zs:
                        i = 14;
                        break e;
                    case Vt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(I(130, e == null ? e : typeof e, ""));
        }
        return t = rt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function _n(e, t, n, r) {
        return e = rt(7, e, r, t), e.lanes = n, e;
    }
    function Dl(e, t, n, r) {
        return e = rt(22, e, r, t), e.elementType = Pc, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function mi(e, t, n) {
        return e = rt(6, e, null, t), e.lanes = n, e;
    }
    function hi(e, t, n) {
        return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function lg(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function ca(e, t, n, r, o, l, i, s, a) {
        return e = new lg(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = rt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Ks(l), e;
    }
    function ig(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Fn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Cf(e) {
        if (!e) return ln;
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
            if (Ge(n)) return _d(e, n, t);
        }
        return t;
    }
    function Ef(e, t, n, r, o, l, i, s, a) {
        return e = ca(n, r, !0, e, o, l, i, s, a), e.context = Cf(null), n = e.current, r = Oe(), o = nn(n), l = Mt(r, o), l.callback = t ?? null, en(n, l, o), e.current.lanes = o, co(e, o, r), He(e, r), e;
    }
    function Al(e, t, n, r) {
        var o = t.current, l = Oe(), i = nn(o);
        return n = Cf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Mt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(o, t, i), e !== null && (gt(e, o, i, l), Wo(e, o, i)), i;
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
    function Ru(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function da(e, t) {
        Ru(e, t), (e = e.alternate) && Ru(e, t);
    }
    function sg() {
        return null;
    }
    var Tf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function fa(e) {
        this._internalRoot = e;
    }
    Fl.prototype.render = fa.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(I(409));
        Al(e, t, null, null);
    };
    Fl.prototype.unmount = fa.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            zn(function() {
                Al(null, e, null, null);
            }), t[Ot] = null;
        }
    };
    function Fl(e) {
        this._internalRoot = e;
    }
    Fl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = nd();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
            Ht.splice(n, 0, e), n === 0 && od(e);
        }
    };
    function pa(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function $l(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function ju() {}
    function ag(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = kl(i);
                    l.call(u);
                };
            }
            var i = Ef(t, r, e, 0, null, !1, !1, "", ju);
            return e._reactRootContainer = i, e[Ot] = i.current, Zr(e.nodeType === 8 ? e.parentNode : e), zn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = kl(a);
                s.call(u);
            };
        }
        var a = ca(e, 0, !1, null, null, !1, !1, "", ju);
        return e._reactRootContainer = a, e[Ot] = a.current, Zr(e.nodeType === 8 ? e.parentNode : e), zn(function() {
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
        } else i = ag(n, t, e, o, r);
        return kl(i);
    }
    ed = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = jr(t.pendingLanes);
                    n !== 0 && (Ps(t, n | 1), He(t, ge()), !(G & 6) && (dr = ge() + 500, un()));
                }
                break;
            case 13:
                zn(function() {
                    var r = Dt(e, 1);
                    if (r !== null) {
                        var o = Oe();
                        gt(r, e, 1, o);
                    }
                }), da(e, 1);
        }
    };
    Ms = function(e) {
        if (e.tag === 13) {
            var t = Dt(e, 134217728);
            if (t !== null) {
                var n = Oe();
                gt(t, e, 134217728, n);
            }
            da(e, 134217728);
        }
    };
    td = function(e) {
        if (e.tag === 13) {
            var t = nn(e), n = Dt(e, t);
            if (n !== null) {
                var r = Oe();
                gt(n, e, t, r);
            }
            da(e, t);
        }
    };
    nd = function() {
        return Y;
    };
    rd = function(e, t) {
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
                            bc(r), Ti(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Oc(e, n);
                break;
            case "select":
                t = n.value, t != null && Jn(e, !!n.multiple, t, !1);
        }
    };
    Wc = ia;
    Vc = zn;
    var ug = {
        usingClientEntryPoint: !1,
        Events: [
            po,
            Vn,
            jl,
            Uc,
            Bc,
            ia
        ]
    }, Cr = {
        findFiberByHostInstance: vn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, cg = {
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
        currentDispatcherRef: Ft.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Kc(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Cr.findFiberByHostInstance || sg,
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
            Nl = bo.inject(cg), kt = bo;
        } catch  {}
    }
    Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug;
    Xe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!pa(t)) throw Error(I(200));
        return ig(e, t, null, n);
    };
    Xe.createRoot = function(e, t) {
        if (!pa(e)) throw Error(I(299));
        var n = !1, r = "", o = Tf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ca(e, 1, !1, null, null, n, !1, r, o), e[Ot] = t.current, Zr(e.nodeType === 8 ? e.parentNode : e), new fa(t);
    };
    Xe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
        return e = Kc(t), e = e === null ? null : e.stateNode, e;
    };
    Xe.flushSync = function(e) {
        return zn(e);
    };
    Xe.hydrate = function(e, t, n) {
        if (!$l(t)) throw Error(I(200));
        return Ul(null, e, t, !0, n);
    };
    Xe.hydrateRoot = function(e, t, n) {
        if (!pa(e)) throw Error(I(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Tf;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ef(t, null, e, 1, n ?? null, o, !1, l, i), e[Ot] = t.current, Zr(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Fl(t);
    };
    Xe.render = function(e, t, n) {
        if (!$l(t)) throw Error(I(200));
        return Ul(null, e, t, !1, n);
    };
    Xe.unmountComponentAtNode = function(e) {
        if (!$l(e)) throw Error(I(40));
        return e._reactRootContainer ? (zn(function() {
            Ul(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Ot] = null;
            });
        }), !0) : !1;
    };
    Xe.unstable_batchedUpdates = ia;
    Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!$l(n)) throw Error(I(200));
        if (e == null || e._reactInternals === void 0) throw Error(I(38));
        return Ul(e, t, n, !1, r);
    };
    Xe.version = "18.3.1-next-f1338f8080-20240426";
    function Nf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nf);
        } catch (e) {
            console.error(e);
        }
    }
    Nf(), Tc.exports = Xe;
    var dg = Tc.exports, Pu = dg;
    vi.createRoot = Pu.createRoot, vi.hydrateRoot = Pu.hydrateRoot;
    const fg = "modulepreload", pg = function(e) {
        return "/grid-draw/" + e;
    }, Mu = {}, ma = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = pg(a), a in Mu) return;
                Mu[a] = !0;
                const u = a.endsWith(".css"), d = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${d}`)) return;
                const c = document.createElement("link");
                if (c.rel = u ? "stylesheet" : fg, u || (c.as = "script"), c.crossOrigin = "", c.href = a, s && c.setAttribute("nonce", s), document.head.appendChild(c), u) return new Promise((h, w)=>{
                    c.addEventListener("load", h), c.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${a}`)));
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
    }, bu = (e)=>{
        let t;
        const n = new Set, r = (u, d)=>{
            const c = typeof u == "function" ? u(t) : u;
            if (!Object.is(c, t)) {
                const h = t;
                t = d ?? (typeof c != "object" || c === null) ? c : Object.assign({}, t, c), n.forEach((w)=>w(t, h));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, mg = (e)=>e ? bu(e) : bu, hg = (e)=>e;
    function gg(e, t = hg) {
        const n = oe.useSyncExternalStore(e.subscribe, oe.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), oe.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return oe.useDebugValue(n), n;
    }
    const Lu = (e)=>{
        const t = mg(e), n = (r)=>gg(t, r);
        return Object.assign(n, t), n;
    }, If = (e)=>e ? Lu(e) : Lu, zf = [
        1,
        1.5,
        2,
        3,
        5
    ], Rf = [
        1,
        1.5,
        2,
        3,
        5
    ], mt = 8, Mr = [
        1,
        2,
        4,
        8
    ], Yo = (e)=>Math.round(e * 10), xg = (e)=>e / 10;
    function fs(e, t) {
        const n = e.get_square(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: n[3]
        };
    }
    function jf(e, t) {
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
    function Pf(e, t) {
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
    function Ou(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Du(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Au(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            boxW: n[3],
            boxH: n[4]
        };
    }
    function Mf(e, t) {
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
    function Fu(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function bf(e, t) {
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
        return e.map((t)=>`${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Lf(e, t) {
        return e.type === t.type && e.index === t.index;
    }
    function Xn(e, t) {
        return t.some((n)=>Lf(n, e));
    }
    function yg(e, t) {
        return Xn(e, t) ? t : [
            ...t,
            e
        ];
    }
    function vg(e, t) {
        return t.filter((n)=>!Lf(n, e));
    }
    function nt(e) {
        return (t)=>t.type === e;
    }
    function We(e, t) {
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
    function wg(e, t) {
        const n = We(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function Wr(e, t, n = {}) {
        const r = We(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, d = [], c = [], h = [], w = [], g = [];
        for (const y of t)if (y.type === "cell") {
            const x = e.get_square(y.index);
            d.push([
                x[0] - a,
                x[1] - u,
                x[2],
                x[3]
            ]);
        } else if (y.type === "line") {
            const x = e.get_line(y.index);
            c.push([
                x[0] - a,
                x[1] - u,
                x[2] - a,
                x[3] - u,
                x[4],
                x[5]
            ]);
        } else if (y.type === "rect") {
            const x = e.get_rect(y.index);
            h.push([
                x[0] - a,
                x[1] - u,
                x[2] - a,
                x[3] - u,
                x[4],
                x[5]
            ]);
        } else if (y.type === "text") {
            const x = e.get_text(y.index);
            w.push([
                x[0] - a,
                x[1] - u,
                x[2],
                e.get_text_size(y.index),
                x[3],
                x[4],
                x[5],
                x[6],
                e.get_text_string(y.index)
            ]);
        } else if (y.type === "image") {
            const x = e.get_image(y.index);
            g.push([
                x[0] - a,
                x[1] - u,
                x[2] - a,
                x[3] - u,
                e.get_image_url(y.index)
            ]);
        }
        return {
            w: s - u + 1,
            h: i - a + 1,
            cells: d,
            lines: c,
            rects: h,
            texts: w,
            images: g,
            sub: mt
        };
    }
    function Sg(e) {
        return typeof e == "object" && e !== null;
    }
    function kg(e) {
        return Array.isArray(e);
    }
    function $e(e) {
        return typeof e == "number" ? e : void 0;
    }
    function _g(e) {
        if (kg(e)) {
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
        return Sg(e) ? typeof e.r != "number" || typeof e.c != "number" ? null : {
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
    function $u(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function It(e, t, n, r, o) {
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
    function Uu(e, t, n, r, o, l) {
        const i = It(e, t, r, o, l), s = It(e + n - 1, t + n - 1, r, o, l);
        return {
            r: Math.min(i.r, s.r),
            c: Math.min(i.c, s.c)
        };
    }
    function Of(e) {
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
    const Cg = (e, t)=>({
            copy: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n || r.length === 0) return;
                const o = wg(r, n);
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
                let u = n.get_square_count(), d = n.get_line_count(), c = n.get_rect_count(), h = n.get_text_count(), w = n.get_image_count();
                for (const g of r.cells)a.push({
                    kind: "addSquare",
                    idx: u,
                    square: {
                        r: s.row + g.relRow,
                        c: s.col + g.relCol,
                        color: g.color,
                        size: g.size ?? 1
                    }
                }), l.push({
                    type: "cell",
                    index: u
                }), u++;
                for (const g of r.lines){
                    const y = s.row + g.relR1, x = s.col + g.relC1, f = s.row + g.relR2, p = s.col + g.relC2;
                    a.push({
                        kind: "addLine",
                        idx: d,
                        line: {
                            r1: y,
                            c1: x,
                            r2: f,
                            c2: p,
                            color: g.color,
                            width: g.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: d
                    }), d++;
                }
                for (const g of r.rects){
                    const y = s.row + g.relR1, x = s.col + g.relC1, f = s.row + g.relR2, p = s.col + g.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: y,
                            c1: x,
                            r2: f,
                            c2: p,
                            fill: g.color,
                            outline: g.outline
                        }
                    }), l.push({
                        type: "rect",
                        index: c
                    }), c++;
                }
                for (const g of r.texts ?? []){
                    const y = s.row + g.relR, x = s.col + g.relC;
                    a.push({
                        kind: "addText",
                        idx: h,
                        text: {
                            r: y,
                            c: x,
                            color: g.color,
                            size: g.size,
                            boxW: g.boxW,
                            boxH: g.boxH,
                            halign: g.halign,
                            valign: g.valign,
                            text: g.text
                        }
                    }), l.push({
                        type: "text",
                        index: h
                    }), h++;
                }
                for (const g of r.images ?? [])a.push({
                    kind: "addImage",
                    idx: w,
                    image: {
                        r1: s.row + g.relR1,
                        c1: s.col + g.relC1,
                        r2: s.row + g.relR2,
                        c2: s.col + g.relC2,
                        url: g.url
                    }
                }), l.push({
                    type: "image",
                    index: w
                }), w++;
                t().commitEdits(a), n.render(), e({
                    selectedItems: l
                }), t().renderSelection(), o();
            },
            deleteSelected: ()=>{
                const { grid: n, selectedItems: r, updateOutputs: o } = t();
                if (!n || r.length === 0) return;
                const l = r.filter(nt("cell")).map((c)=>c.index).sort((c, h)=>h - c), i = r.filter(nt("line")).map((c)=>c.index).sort((c, h)=>h - c), s = r.filter(nt("rect")).map((c)=>c.index).sort((c, h)=>h - c), a = r.filter(nt("text")).map((c)=>c.index).sort((c, h)=>h - c), u = r.filter(nt("image")).map((c)=>c.index).sort((c, h)=>h - c), d = [];
                for (const c of l)d.push({
                    kind: "deleteSquare",
                    idx: c,
                    square: fs(n, c)
                });
                for (const c of i)d.push({
                    kind: "deleteLine",
                    idx: c,
                    line: jf(n, c)
                });
                for (const c of s)d.push({
                    kind: "deleteRect",
                    idx: c,
                    rect: Pf(n, c)
                });
                for (const c of a)d.push({
                    kind: "deleteText",
                    idx: c,
                    text: Mf(n, c)
                });
                for (const c of u)d.push({
                    kind: "deleteImage",
                    idx: c,
                    image: bf(n, c)
                });
                t().commitEdits(d), e({
                    selectedItems: []
                }), n.render(), o();
            }
        }), Bu = new Map;
    function Eg() {
        ma(()=>Promise.resolve().then(()=>Qg), void 0).then((e)=>e.useGridStore.getState().grid?.render());
    }
    function ha(e) {
        const t = Bu.get(e);
        if (t) return t;
        const n = new Image;
        return n.crossOrigin = "anonymous", n.decoding = "async", n.onload = ()=>{
            Eg();
        }, n.onerror = ()=>{}, n.src = e, Bu.set(e, n), n;
    }
    function Tg(e) {
        return new Promise((t, n)=>{
            const r = ha(e);
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
    function Ng(e, t) {
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
    function Xo(e, t) {
        switch(Ng(e, t), t.kind){
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
                e.insert_image(t.idx, t.image.r1, t.image.c1, t.image.r2, t.image.c2, t.image.url, ha(t.image.url));
                break;
            case "deleteImage":
                e.delete_image(t.idx);
                break;
            case "batch":
                e.set_render_paused?.(!0);
                try {
                    for (const n of t.edits)Xo(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function Df(e) {
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
                    ].reverse().map(Df)
                };
        }
    }
    function Af(e, t) {
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
                        const o = Af(e.edits[r], t.edits[r]);
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
    const Ig = 100, zg = 600;
    class Rg {
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
            this.undoStack.push(t), this.undoStack.length > Ig && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (Xo(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= zg) {
                const i = this.undoStack[this.undoStack.length - 1], s = Af(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (Xo(t, Df(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (Xo(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
            if (n.some(ps) || r.some(ps)) {
                this.clear();
                return;
            }
            this.undoStack = n, this.redoStack = r, this.pending = null, this.lastCoalesceKey = null;
        }
    }
    const jg = new Set([
        "setCell",
        "setCellColor",
        "setCellState"
    ]);
    function ps(e) {
        return jg.has(String(e.kind)) ? !0 : e.kind === "batch" && e.edits.some(ps);
    }
    const dt = new Rg, Pg = (e, t)=>({
            commitEdits: (n, r)=>{
                const { grid: o } = t();
                !o || n.length === 0 || (dt.commit(o, n.length === 1 ? n[0] : {
                    kind: "batch",
                    edits: n
                }, r), e({
                    historyTick: t().historyTick + 1
                }));
            },
            undo: ()=>{
                const { grid: n } = t();
                n && dt.undoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            redo: ()=>{
                const { grid: n } = t();
                n && dt.redoLast(n) && (e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection(), t().updateOutputs());
            },
            canUndo: ()=>dt.canUndo(),
            canRedo: ()=>dt.canRedo(),
            resetHistory: ()=>{
                dt.clear(), e({
                    historyTick: t().historyTick + 1
                });
            },
            exportHistory: ()=>dt.exportStacks()
        }), Mg = (e, t)=>({
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
                let a = l.get_square_count(), u = l.get_line_count(), d = l.get_rect_count(), c = l.get_text_count(), h = l.get_image_count();
                const w = mt / (n.sub ?? 1);
                for (const g of n.cells ?? []){
                    const [y, x, f] = g, p = g.length >= 4 ? g[3] : w === 1 ? 1 : mt;
                    i.push({
                        kind: "addSquare",
                        idx: a,
                        square: {
                            r: r + y * w,
                            c: o + x * w,
                            color: f,
                            size: p
                        }
                    }), s.push({
                        type: "cell",
                        index: a
                    }), a++;
                }
                for (const [g, y, x, f, p, m] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: u,
                    line: {
                        r1: r + g * w,
                        c1: o + y * w,
                        r2: r + x * w,
                        c2: o + f * w,
                        color: p,
                        width: m ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: u
                }), u++;
                for (const [g, y, x, f, p, m] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: d,
                    rect: {
                        r1: r + g * w,
                        c1: o + y * w,
                        r2: r + x * w,
                        c2: o + f * w,
                        fill: p,
                        outline: m
                    }
                }), s.push({
                    type: "rect",
                    index: d
                }), d++;
                for (const g of n.texts ?? []){
                    const y = _g(g);
                    y && (i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + y.r * w,
                            c: o + y.c * w,
                            color: y.color ?? 0,
                            size: y.size ?? 1,
                            boxW: (y.boxW ?? 0) * w,
                            boxH: (y.boxH ?? 0) * w,
                            halign: y.halign ?? 0,
                            valign: y.valign ?? 0,
                            text: String(y.text ?? "")
                        }
                    }), s.push({
                        type: "text",
                        index: c
                    }), c++);
                }
                for (const g of n.images ?? []){
                    if (!Array.isArray(g) || g.length < 5) continue;
                    const [y, x, f, p, m] = g;
                    typeof m == "string" && (i.push({
                        kind: "addImage",
                        idx: h,
                        image: {
                            r1: r + y * w,
                            c1: o + x * w,
                            r2: r + f * w,
                            c2: o + p * w,
                            url: m
                        }
                    }), s.push({
                        type: "image",
                        index: h
                    }), h++);
                }
                i.length !== 0 && (t().commitEdits(i), l.render(), e({
                    selectedItems: s
                }), t().renderSelection(), t().updateOutputs());
            },
            serializeWholeGrid: ()=>{
                const { grid: n } = t();
                return n ? Wr(n, Of(n), {
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
                o && (t().loadDesign(n), r && ((r.undo?.length ?? 0) > 0 || (r.redo?.length ?? 0) > 0) ? dt.importStacks(r) : dt.clear(), e({
                    selectedItems: [],
                    historyTick: t().historyTick + 1
                }), t().renderSelection());
            },
            updateOutputs: ()=>{
                const { grid: n, selectedItems: r } = t(), o = r.filter(nt("cell"));
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
                ], i = o.map((m)=>fs(n, m.index));
                let s = 1 / 0, a = 1 / 0, u = -1 / 0, d = -1 / 0;
                for (const m of i)s = Math.min(s, m.r), a = Math.min(a, m.c), u = Math.max(u, m.r + m.size - 1), d = Math.max(d, m.c + m.size - 1);
                const c = i.map((m)=>({
                        row: m.r - s,
                        col: m.c - a,
                        size: m.size,
                        color: l[m.color] ?? "#000000"
                    }));
                c.sort((m, S)=>m.row - S.row || m.col - S.col);
                const h = i.every((m)=>m.size === i[0].size && (m.r - s) % m.size === 0 && (m.c - a) % m.size === 0) ? i[0].size : 1, w = Math.ceil((u - s + 1) / h), g = Math.ceil((d - a + 1) / h), y = [], x = [];
                for (const m of c)m.color === "#000000" && (y.push(m.row / h), x.push(m.col / h));
                const f = y.map(()=>"1.0").join(", "), p = `import torch

indices = torch.tensor([[${y.join(", ")}], [${x.join(", ")}]])
values = torch.tensor([${f}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${w}, ${g}))
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
                        const d = u.row, c = u.col, h = u.color;
                        if (typeof d != "number" || typeof c != "number") continue;
                        const w = l[h] ?? 0, g = typeof u.size == "number" && u.size >= 1 ? u.size : 1, y = r.add_square(o.row + d, o.col + c, w, g);
                        s.push({
                            type: "cell",
                            index: y
                        });
                    }
                    else {
                        const u = mt / t().subdivision;
                        for(let d = 0; d < i.length; d++){
                            const c = i[d];
                            if (Array.isArray(c)) for(let h = 0; h < c.length; h++){
                                const w = c[h];
                                if (w && typeof w == "object" && w.color) {
                                    const g = l[w.color] ?? 0, y = r.add_square(o.row + d * u, o.col + h * u, g, u);
                                    s.push({
                                        type: "cell",
                                        index: y
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
                    const s = [], a = mt / t().subdivision;
                    for(let u = 0; u < i.length; u++){
                        const d = i[u];
                        if (Array.isArray(d)) {
                            for(let c = 0; c < d.length; c++)if (Number(d[c]) > .5) {
                                const w = r.add_square(o.row + u * a, o.col + c * a, 0, a);
                                s.push({
                                    type: "cell",
                                    index: w
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
                    image: bf(n, l)
                });
                for(let l = n.get_text_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteText",
                    idx: l,
                    text: Mf(n, l)
                });
                for(let l = n.get_rect_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteRect",
                    idx: l,
                    rect: Pf(n, l)
                });
                for(let l = n.get_line_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteLine",
                    idx: l,
                    line: jf(n, l)
                });
                for(let l = n.get_square_count() - 1; l >= 0; l--)o.push({
                    kind: "deleteSquare",
                    idx: l,
                    square: fs(n, l)
                });
                t().commitEdits(o), e({
                    selectedItems: []
                }), r();
            }
        }), bg = 1.75;
    function ms(e) {
        return {
            r: e.minRow - bg,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function hs(e) {
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
    function Rt(e) {
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
    function Wu(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, d = (a - e) * (a - e) + (u - t) * (u - t);
            d <= i && (l = s, i = d);
        }
        return l;
    }
    const Lg = (e, t)=>({
            setSelectedItems: (n)=>{
                e({
                    selectedItems: n
                }), t().renderSelection(), setTimeout(()=>t().updateOutputs(), 0);
            },
            selectAll: ()=>{
                const { grid: n } = t();
                if (!n) return;
                t().textEdit && t().commitTextEdit();
                const r = Of(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = yg(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = vg(n, r);
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
                    for (const i of l)i.type === "cell" ? r.highlight_square(i.index) : i.type === "line" ? r.highlight_line(i.index) : i.type === "rect" ? r.highlight_rect(i.index) : i.type === "text" ? r.highlight_text(i.index) : i.type === "image" && r.highlight_image(i.index);
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
                for (const x of r.squares_in_box(i, a, s, u))d.push({
                    type: "cell",
                    index: x
                });
                const c = r.get_line_count();
                for(let x = 0; x < c; x++)r.line_intersects_box(x, i, a, s, u) && d.push({
                    type: "line",
                    index: x
                });
                const h = r.get_rect_count();
                for(let x = 0; x < h; x++)r.rect_intersects_box(x, i, a, s, u) && d.push({
                    type: "rect",
                    index: x
                });
                const w = r.get_text_count();
                for(let x = 0; x < w; x++)r.text_intersects_box(x, i, a, s, u) && d.push({
                    type: "text",
                    index: x
                });
                const g = r.get_image_count();
                for(let x = 0; x < g; x++)r.image_intersects_box(x, i, a, s, u) && d.push({
                    type: "image",
                    index: x
                });
                const y = [
                    ...l
                ];
                for (const x of d)Xn(x, y) || y.push(x);
                e({
                    selectedItems: y,
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
                    const d = [], c = [], h = l.filter(nt("cell"));
                    for (const _ of h)c.push({
                        kind: "moveSquare",
                        idx: _.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "cell",
                        index: _.index
                    });
                    const w = [], g = l.filter(nt("line"));
                    for (const _ of g)w.push({
                        kind: "moveLine",
                        idx: _.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "line",
                        index: _.index
                    });
                    const y = [], x = l.filter(nt("rect"));
                    for (const _ of x)y.push({
                        kind: "moveRect",
                        idx: _.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "rect",
                        index: _.index
                    });
                    const f = [], p = l.filter(nt("text"));
                    for (const _ of p)f.push({
                        kind: "moveText",
                        idx: _.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "text",
                        index: _.index
                    });
                    const m = [], S = l.filter(nt("image"));
                    for (const _ of S)m.push({
                        kind: "moveImage",
                        idx: _.index,
                        dRow: a,
                        dCol: u
                    }), d.push({
                        type: "image",
                        index: _.index
                    });
                    t().commitEdits([
                        ...c,
                        ...w,
                        ...y,
                        ...f,
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
                const u = o.get_cell_size(), d = Math.floor(n / u), c = Math.floor(r / u), h = o.square_at(c, d);
                return h >= 0 ? {
                    type: "cell",
                    index: h
                } : null;
            },
            renderSelection: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (n) {
                    n.render();
                    for (const o of r)o.type === "cell" ? n.highlight_square(o.index) : o.type === "line" ? n.highlight_line(o.index) : o.type === "rect" ? n.highlight_rect(o.index) : o.type === "text" ? n.highlight_text(o.index) : o.type === "image" && n.highlight_image(o.index);
                    if (r.length === 1) {
                        const o = r[0];
                        if (o.type === "line") {
                            const l = hs(n.get_line(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "rect") {
                            const l = Rt(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "text") {
                            const l = n.get_text(o.index), i = Rt([
                                l[0],
                                l[1],
                                l[0] + l[4],
                                l[1] + l[3]
                            ]);
                            for (const s of i)n.draw_handle(s.r, s.c);
                        } else if (o.type === "image") {
                            const l = Rt(n.get_image(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = We(r, n);
                        if (o) {
                            const l = ms(o);
                            n.draw_rotate_handle(l.r, l.c, o.minRow, l.c);
                        }
                    }
                }
            },
            getSelectedCells: ()=>{
                const { grid: n, selectedItems: r } = t();
                return n ? r.filter(nt("cell")).map((o)=>{
                    const l = n.get_square(o.index);
                    return {
                        row: l[0],
                        col: l[1]
                    };
                }) : [];
            }
        }), Og = (e, t)=>({
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
                    kind: "recolorSquare",
                    idx: i.index,
                    from: r.get_square(i.index)[2],
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
                if (!r || (r.set_draw_line_width(Yo(n)), o.length === 0)) return;
                const l = Yo(n), i = [];
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
                dt.beginBatch();
            },
            drawCellAt: (n, r, o)=>{
                const { grid: l, colorIdx: i, subdivision: s } = t();
                if (!l) return;
                const a = mt / s;
                if (o && i < 6) {
                    const u = l.squares_in_box(n, r, n + a - 1, r + a - 1);
                    for(let d = u.length - 1; d >= 0; d--){
                        const c = l.get_square(u[d]);
                        if (c[0] === n && c[1] === r && c[3] === a) {
                            c[2] !== i && t().commitEdits([
                                {
                                    kind: "recolorSquare",
                                    idx: u[d],
                                    from: c[2],
                                    to: i
                                }
                            ]);
                            return;
                        }
                    }
                    t().commitEdits([
                        {
                            kind: "addSquare",
                            idx: l.get_square_count(),
                            square: {
                                r: n,
                                c: r,
                                color: i,
                                size: a
                            }
                        }
                    ]);
                } else {
                    const u = l.squares_in_box(n, r, n + a - 1, r + a - 1), d = [];
                    for(let c = u.length - 1; c >= 0; c--){
                        const h = u[c], w = l.get_square(h);
                        d.push({
                            kind: "deleteSquare",
                            idx: h,
                            square: {
                                r: w[0],
                                c: w[1],
                                color: w[2],
                                size: w[3]
                            }
                        });
                    }
                    d.length > 0 && t().commitEdits(d);
                }
            },
            endDrawStroke: ()=>{
                dt.endBatch(), e({
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
                            width: Yo(a)
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
        }), Dg = (e, t)=>({
            startResize: (n)=>{
                const { grid: r } = t(), o = r ? n.shape === "line" ? Ou(r, n.index) : n.shape === "rect" ? Du(r, n.index) : n.shape === "image" ? Fu(r, n.index) : Au(r, n.index) : null;
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
                        to: Ou(r, o.index)
                    }
                ])) : o.shape === "rect" ? (r.resize_rect(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Du(r, o.index)
                    }
                ])) : o.shape === "image" ? (r.resize_image(o.index, o.handle, n.row, n.col), l && !("boxW" in l) && t().commitEdits([
                    {
                        kind: "setImageGeom",
                        idx: o.index,
                        from: l,
                        to: Fu(r, o.index)
                    }
                ])) : (r.resize_text(o.index, o.handle, n.row, n.col), l && "boxW" in l && t().commitEdits([
                    {
                        kind: "setTextFrame",
                        idx: o.index,
                        from: l,
                        to: Au(r, o.index)
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
                const { cx: s, cy: a, startAngle: u } = i, d = $u(Math.atan2(r - a, n - s) - u);
                if (o.render(), d === 0) {
                    t().renderSelection();
                    return;
                }
                const c = We(l, o);
                if (!c) return;
                const h = Math.round((c.minRow + c.maxRow) / 2), w = Math.round((c.minCol + c.maxCol) / 2);
                for (const g of l)if (g.type === "cell") {
                    const y = o.get_square(g.index);
                    if (y.length < 4) continue;
                    const x = Uu(y[0], y[1], y[3], d, h, w);
                    o.preview_square(x.r, x.c, y[3], y[2]);
                } else if (g.type === "line") {
                    const y = o.get_line(g.index);
                    if (y.length >= 6) {
                        const x = It(y[0], y[1], d, h, w), f = It(y[2], y[3], d, h, w);
                        o.preview_line(x.r, x.c, f.r, f.c, y[4], y[5]);
                    }
                } else if (g.type === "rect") {
                    const y = o.get_rect(g.index);
                    if (y.length >= 6) {
                        const x = It(y[0], y[1], d, h, w), f = It(y[2], y[3], d, h, w);
                        o.preview_rect(x.r, x.c, f.r, f.c, y[4], y[5]);
                    }
                } else if (g.type === "text") {
                    const y = o.get_text(g.index);
                    if (y.length >= 7) {
                        const x = It(y[0], y[1], d, h, w);
                        o.preview_text(x.r, x.c, y[2], o.get_text_size(g.index), y[3], y[4], y[5], y[6], o.get_text_string(g.index));
                    }
                } else if (g.type === "image") {
                    const y = o.get_image(g.index);
                    if (y.length >= 4) {
                        const x = It(y[0], y[1], d, h, w);
                        o.preview_image(x.r, x.c, x.r + (y[2] - y[0]), x.c + (y[3] - y[1]), ha(o.get_image_url(g.index)));
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
                const { cx: s, cy: a, startAngle: u } = i, d = $u(Math.atan2(r - a, n - s) - u), c = We(l, o);
                if (d === 0 || !c) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const h = Math.round((c.minRow + c.maxRow) / 2), w = Math.round((c.minCol + c.maxCol) / 2), g = (f, p)=>It(f, p, d, h, w), y = [], x = [];
                for (const f of l)if (f.type === "cell") {
                    const p = o.get_square(f.index);
                    if (p.length < 4) continue;
                    const m = Uu(p[0], p[1], p[3], d, h, w);
                    y.push({
                        kind: "moveSquare",
                        idx: f.index,
                        dRow: m.r - p[0],
                        dCol: m.c - p[1]
                    }), x.push({
                        type: "cell",
                        index: f.index
                    });
                } else if (f.type === "line") {
                    const p = o.get_line(f.index);
                    if (p.length < 5) continue;
                    const m = g(p[0], p[1]), S = g(p[2], p[3]);
                    y.push({
                        kind: "setLineGeom",
                        idx: f.index,
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
                    }), x.push({
                        type: "line",
                        index: f.index
                    });
                } else if (f.type === "rect") {
                    const p = o.get_rect(f.index);
                    if (p.length < 6) continue;
                    const m = g(p[0], p[1]), S = g(p[2], p[3]);
                    y.push({
                        kind: "setRectGeom",
                        idx: f.index,
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
                    }), x.push({
                        type: "rect",
                        index: f.index
                    });
                } else if (f.type === "text") {
                    const p = o.get_text(f.index);
                    if (p.length < 3) continue;
                    const m = g(p[0], p[1]);
                    y.push({
                        kind: "moveText",
                        idx: f.index,
                        dRow: m.r - p[0],
                        dCol: m.c - p[1]
                    }), x.push({
                        type: "text",
                        index: f.index
                    });
                } else if (f.type === "image") {
                    const p = o.get_image(f.index);
                    if (p.length < 4) continue;
                    const m = g(p[0], p[1]);
                    y.push({
                        kind: "moveImage",
                        idx: f.index,
                        dRow: m.r - p[0],
                        dCol: m.c - p[1]
                    }), x.push({
                        type: "image",
                        index: f.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits(y), e({
                    selectedItems: x
                }), t().renderSelection(), t().updateOutputs();
            },
            cancelRotate: ()=>{
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().renderSelection();
            }
        }), Ag = {
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
    }, Q = If()((...e)=>({
            ...Ag,
            ...Pg(...e),
            ...Og(...e),
            ...Lg(...e),
            ...Dg(...e),
            ...Cg(...e),
            ...Mg(...e)
        })), Fg = ()=>Q((e)=>e.grid), $g = ()=>Q((e)=>e.tool), Ug = ()=>Q((e)=>e.colorIdx), Bg = ()=>Q((e)=>e.outlineIdx), Wg = ()=>Q((e)=>e.selectedItems), Vg = ()=>Q((e)=>e.clipboard), Gg = ()=>Q((e)=>e.jsonOutput), Hg = ()=>Q((e)=>e.tensorOutput), Kg = ()=>Q((e)=>e.selectMode), Qg = Object.freeze(Object.defineProperty({
        __proto__: null,
        CELL_UNITS: mt,
        LINE_WIDTHS: Rf,
        SUBDIVISIONS: Mr,
        TEXT_SIZES: zf,
        getSelectionBoundsAll: We,
        serializeSelection: Wr,
        tenthsToWidth: xg,
        useClipboard: Vg,
        useColorIdx: Ug,
        useGrid: Fg,
        useGridStore: Q,
        useJsonOutput: Gg,
        useOutlineIdx: Bg,
        useSelectMode: Kg,
        useSelectedItems: Wg,
        useTensorOutput: Hg,
        useTool: $g,
        widthToTenths: Yo
    }, Symbol.toStringTag, {
        value: "Module"
    })), Vu = 7;
    function qg() {
        const e = import.meta;
        if (!("env" in e)) return !1;
        const t = e.env;
        return typeof t == "object" && t !== null && "DEV" in t && t.DEV === !0;
    }
    function Yg(e) {
        const t = e.get_schema_version?.();
        (t !== Vu || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${Vu}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function Xg(e, t, n) {
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
                    const s = await ma(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    if (Yg(a), Q.getState().setGrid(a), qg()) {
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
    function Ff(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Ff(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function $f() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Ff(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Gu = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Hu = $f, Uf = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Hu(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const d = n?.[u], c = l?.[u];
                if (d === null) return null;
                const h = Gu(d) || Gu(c);
                return o[u][h];
            }), s = n && Object.entries(n).reduce((u, d)=>{
                let [c, h] = d;
                return h === void 0 || (u[c] = h), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d)=>{
                let { class: c, className: h, ...w } = d;
                return Object.entries(w).every((g)=>{
                    let [y, x] = g;
                    return Array.isArray(x) ? x.includes({
                        ...l,
                        ...s
                    }[y]) : {
                        ...l,
                        ...s
                    }[y] === x;
                }) ? [
                    ...u,
                    c,
                    h
                ] : u;
            }, []);
            return Hu(e, i, a, n?.class, n?.className);
        };
    function Ku(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Bf(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Ku(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Ku(e[o], null);
                }
            };
        };
    }
    function gs(...e) {
        return C.useCallback(Bf(...e), e);
    }
    function _l(e) {
        const t = Jg(e), n = C.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = C.Children.toArray(l), a = s.find(tx);
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
    var Zg = _l("Slot");
    function Jg(e) {
        const t = C.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (C.isValidElement(o)) {
                const i = rx(o), s = nx(l, o.props);
                return o.type !== C.Fragment && (s.ref = r ? Bf(r, i) : i), C.cloneElement(o, s);
            }
            return C.Children.count(o) > 1 ? C.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var ex = Symbol("radix.slottable");
    function tx(e) {
        return C.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ex;
    }
    function nx(e, t) {
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
    function rx(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var ox = [
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
    ], so = ox.reduce((e, t)=>{
        const n = _l(`Primitive.${t}`), r = C.forwardRef((o, l)=>{
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
    function ga(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = C.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (c)=>{
                const { scope: h, children: w, ...g } = c, y = h?.[e]?.[a] || s, x = C.useMemo(()=>g, Object.values(g));
                return v.jsx(y.Provider, {
                    value: x,
                    children: w
                });
            };
            u.displayName = l + "Provider";
            function d(c, h) {
                const w = h?.[e]?.[a] || s, g = C.useContext(w);
                if (g) return g;
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
            lx(o, ...t)
        ];
    }
    function lx(...e) {
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
    function ix(e) {
        const t = e + "CollectionProvider", [n, r] = ga(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (y)=>{
            const { scope: x, children: f } = y, p = oe.useRef(null), m = oe.useRef(new Map).current;
            return v.jsx(o, {
                scope: x,
                itemMap: m,
                collectionRef: p,
                children: f
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = _l(s), u = oe.forwardRef((y, x)=>{
            const { scope: f, children: p } = y, m = l(s, f), S = gs(x, m.collectionRef);
            return v.jsx(a, {
                ref: S,
                children: p
            });
        });
        u.displayName = s;
        const d = e + "CollectionItemSlot", c = "data-radix-collection-item", h = _l(d), w = oe.forwardRef((y, x)=>{
            const { scope: f, children: p, ...m } = y, S = oe.useRef(null), _ = gs(x, S), T = l(d, f);
            return oe.useEffect(()=>(T.itemMap.set(S, {
                    ref: S,
                    ...m
                }), ()=>void T.itemMap.delete(S))), v.jsx(h, {
                [c]: "",
                ref: _,
                children: p
            });
        });
        w.displayName = d;
        function g(y) {
            const x = l(e + "CollectionConsumer", y);
            return oe.useCallback(()=>{
                const p = x.collectionRef.current;
                if (!p) return [];
                const m = Array.from(p.querySelectorAll(`[${c}]`));
                return Array.from(x.itemMap.values()).sort((T, z)=>m.indexOf(T.ref.current) - m.indexOf(z.ref.current));
            }, [
                x.collectionRef,
                x.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: u,
                ItemSlot: w
            },
            g,
            r
        ];
    }
    function Cn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Wf = globalThis?.document ? C.useLayoutEffect : ()=>{}, sx = Cc[" useInsertionEffect ".trim().toString()] || Wf;
    function Bl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = ax({
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
                const c = ux(d) ? d(e) : d;
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
    function ax({ defaultProp: e, onChange: t }) {
        const [n, r] = C.useState(e), o = C.useRef(n), l = C.useRef(t);
        return sx(()=>{
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
    function ux(e) {
        return typeof e == "function";
    }
    var cx = Cc[" useId ".trim().toString()] || (()=>{}), dx = 0;
    function fx(e) {
        const [t, n] = C.useState(cx());
        return Wf(()=>{
            n((r)=>r ?? String(dx++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var px = C.createContext(void 0);
    function Vf(e) {
        const t = C.useContext(px);
        return e || t || "ltr";
    }
    function mx(e) {
        const t = C.useRef(e);
        return C.useEffect(()=>{
            t.current = e;
        }), C.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var gi = "rovingFocusGroup.onEntryFocus", hx = {
        bubbles: !1,
        cancelable: !0
    }, ho = "RovingFocusGroup", [xs, Gf, gx] = ix(ho), [xx, Hf] = ga(ho, [
        gx
    ]), [yx, vx] = xx(ho), Kf = C.forwardRef((e, t)=>v.jsx(xs.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: v.jsx(xs.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: v.jsx(wx, {
                    ...e,
                    ref: t
                })
            })
        }));
    Kf.displayName = ho;
    var wx = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: d = !1, ...c } = e, h = C.useRef(null), w = gs(t, h), g = Vf(l), [y, x] = Bl({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: ho
        }), [f, p] = C.useState(!1), m = mx(u), S = Gf(n), _ = C.useRef(!1), [T, z] = C.useState(0);
        return C.useEffect(()=>{
            const k = h.current;
            if (k) return k.addEventListener(gi, m), ()=>k.removeEventListener(gi, m);
        }, [
            m
        ]), v.jsx(yx, {
            scope: n,
            orientation: r,
            dir: g,
            loop: o,
            currentTabStopId: y,
            onItemFocus: C.useCallback((k)=>x(k), [
                x
            ]),
            onItemShiftTab: C.useCallback(()=>p(!0), []),
            onFocusableItemAdd: C.useCallback(()=>z((k)=>k + 1), []),
            onFocusableItemRemove: C.useCallback(()=>z((k)=>k - 1), []),
            children: v.jsx(so.div, {
                tabIndex: f || T === 0 ? -1 : 0,
                "data-orientation": r,
                ...c,
                ref: w,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: Cn(e.onMouseDown, ()=>{
                    _.current = !0;
                }),
                onFocus: Cn(e.onFocus, (k)=>{
                    const O = !_.current;
                    if (k.target === k.currentTarget && O && !f) {
                        const D = new CustomEvent(gi, hx);
                        if (k.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const te = S().filter((X)=>X.focusable), ye = te.find((X)=>X.active), Te = te.find((X)=>X.id === y), ce = [
                                ye,
                                Te,
                                ...te
                            ].filter(Boolean).map((X)=>X.ref.current);
                            Yf(ce, d);
                        }
                    }
                    _.current = !1;
                }),
                onBlur: Cn(e.onBlur, ()=>p(!1))
            })
        });
    }), Qf = "RovingFocusGroupItem", qf = C.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = fx(), u = l || a, d = vx(Qf, n), c = d.currentTabStopId === u, h = Gf(n), { onFocusableItemAdd: w, onFocusableItemRemove: g, currentTabStopId: y } = d;
        return C.useEffect(()=>{
            if (r) return w(), ()=>g();
        }, [
            r,
            w,
            g
        ]), v.jsx(xs.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: v.jsx(so.span, {
                tabIndex: c ? 0 : -1,
                "data-orientation": d.orientation,
                ...s,
                ref: t,
                onMouseDown: Cn(e.onMouseDown, (x)=>{
                    r ? d.onItemFocus(u) : x.preventDefault();
                }),
                onFocus: Cn(e.onFocus, ()=>d.onItemFocus(u)),
                onKeyDown: Cn(e.onKeyDown, (x)=>{
                    if (x.key === "Tab" && x.shiftKey) {
                        d.onItemShiftTab();
                        return;
                    }
                    if (x.target !== x.currentTarget) return;
                    const f = _x(x, d.orientation, d.dir);
                    if (f !== void 0) {
                        if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                        x.preventDefault();
                        let m = h().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (f === "last") m.reverse();
                        else if (f === "prev" || f === "next") {
                            f === "prev" && m.reverse();
                            const S = m.indexOf(x.currentTarget);
                            m = d.loop ? Cx(m, S + 1) : m.slice(S + 1);
                        }
                        setTimeout(()=>Yf(m));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: c,
                    hasTabStop: y != null
                }) : i
            })
        });
    });
    qf.displayName = Qf;
    var Sx = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function kx(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function _x(e, t, n) {
        const r = kx(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return Sx[r];
    }
    function Yf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function Cx(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Ex = Kf, Tx = qf, Xf = "Toggle", Zf = C.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = Bl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Xf
        });
        return v.jsx(so.button, {
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
    Zf.displayName = Xf;
    var cn = "ToggleGroup", [Jf] = ga(cn, [
        Hf
    ]), ep = Hf(), xa = oe.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return v.jsx(Nx, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return v.jsx(Ix, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${cn}\``);
    });
    xa.displayName = cn;
    var [tp, np] = Jf(cn), Nx = oe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Bl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: cn
        });
        return v.jsx(tp, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: oe.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: oe.useCallback(()=>s(""), [
                s
            ]),
            children: v.jsx(rp, {
                ...l,
                ref: t
            })
        });
    }), Ix = oe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Bl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: cn
        }), a = oe.useCallback((d)=>s((c = [])=>[
                    ...c,
                    d
                ]), [
            s
        ]), u = oe.useCallback((d)=>s((c = [])=>c.filter((h)=>h !== d)), [
            s
        ]);
        return v.jsx(tp, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: v.jsx(rp, {
                ...l,
                ref: t
            })
        });
    });
    xa.displayName = cn;
    var [zx, Rx] = Jf(cn), rp = oe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = ep(n), d = Vf(i), c = {
            role: "group",
            dir: d,
            ...a
        };
        return v.jsx(zx, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? v.jsx(Ex, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: d,
                loop: s,
                children: v.jsx(so.div, {
                    ...c,
                    ref: t
                })
            }) : v.jsx(so.div, {
                ...c,
                ref: t
            })
        });
    }), Cl = "ToggleGroupItem", op = oe.forwardRef((e, t)=>{
        const n = np(Cl, e.__scopeToggleGroup), r = Rx(Cl, e.__scopeToggleGroup), o = ep(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = oe.useRef(null);
        return r.rovingFocus ? v.jsx(Tx, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: v.jsx(Qu, {
                ...s,
                ref: t
            })
        }) : v.jsx(Qu, {
            ...s,
            ref: t
        });
    });
    op.displayName = Cl;
    var Qu = oe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = np(Cl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return v.jsx(Zf, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), jx = xa, Px = op;
    const Mx = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, bx = (e, t)=>({
            classGroupId: e,
            validator: t
        }), lp = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), El = "-", qu = [], Lx = "arbitrary..", Ox = (e)=>{
        const t = Ax(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Dx(i);
                const s = i.split(El), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return ip(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Mx(u, a) : a : u || qu;
                }
                return n[i] || qu;
            }
        };
    }, ip = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = ip(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(El) : e.slice(t).join(El), a = i.length;
        for(let u = 0; u < a; u++){
            const d = i[u];
            if (d.validator(s)) return d.classGroupId;
        }
    }, Dx = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Lx + r : void 0;
        })(), Ax = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Fx(n, t);
    }, Fx = (e, t)=>{
        const n = lp();
        for(const r in e){
            const o = e[r];
            ya(o, n, r, t);
        }
        return n;
    }, ya = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            $x(i, t, n, r);
        }
    }, $x = (e, t, n, r)=>{
        if (typeof e == "string") {
            Ux(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Bx(e, t, n, r);
            return;
        }
        Wx(e, t, n, r);
    }, Ux = (e, t, n)=>{
        const r = e === "" ? t : sp(t, e);
        r.classGroupId = n;
    }, Bx = (e, t, n, r)=>{
        if (Vx(e)) {
            ya(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(bx(n, e));
    }, Wx = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            ya(a, sp(t, s), n, r);
        }
    }, sp = (e, t)=>{
        let n = e;
        const r = t.split(El), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = lp(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Vx = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Gx = (e)=>{
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
    }, ys = "!", Yu = ":", Hx = [], Xu = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Kx = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const d = o.length;
            for(let y = 0; y < d; y++){
                const x = o[y];
                if (i === 0 && s === 0) {
                    if (x === Yu) {
                        l.push(o.slice(a, y)), a = y + 1;
                        continue;
                    }
                    if (x === "/") {
                        u = y;
                        continue;
                    }
                }
                x === "[" ? i++ : x === "]" ? i-- : x === "(" ? s++ : x === ")" && s--;
            }
            const c = l.length === 0 ? o : o.slice(a);
            let h = c, w = !1;
            c.endsWith(ys) ? (h = c.slice(0, -1), w = !0) : c.startsWith(ys) && (h = c.slice(1), w = !0);
            const g = u && u > a ? u - a : void 0;
            return Xu(l, w, h, g);
        };
        if (t) {
            const o = t + Yu, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Xu(Hx, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Qx = (e)=>{
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
    }, qx = (e)=>({
            cache: Gx(e.cacheSize),
            parseClassName: Kx(e),
            sortModifiers: Qx(e),
            ...Ox(e)
        }), Yx = /\s+/, Xx = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Yx);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const d = s[u], { isExternal: c, modifiers: h, hasImportantModifier: w, baseClassName: g, maybePostfixModifierPosition: y } = n(d);
            if (c) {
                a = d + (a.length > 0 ? " " + a : a);
                continue;
            }
            let x = !!y, f = r(x ? g.substring(0, y) : g);
            if (!f) {
                if (!x) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (f = r(g), !f) {
                    a = d + (a.length > 0 ? " " + a : a);
                    continue;
                }
                x = !1;
            }
            const p = h.length === 0 ? "" : h.length === 1 ? h[0] : l(h).join(":"), m = w ? p + ys : p, S = m + f;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const _ = o(f, x);
            for(let T = 0; T < _.length; ++T){
                const z = _[T];
                i.push(m + z);
            }
            a = d + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, Zx = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = ap(n)) && (o && (o += " "), o += r);
        return o;
    }, ap = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = ap(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Jx = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((d, c)=>c(d), e());
            return n = qx(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const d = Xx(a, n);
            return o(a, d), d;
        };
        return l = i, (...a)=>l(Zx(...a));
    }, ey = [], Se = (e)=>{
        const t = (n)=>n[e] || ey;
        return t.isThemeGetter = !0, t;
    }, up = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, cp = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ty = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ny = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ry = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, oy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ly = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, iy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ut = (e)=>ty.test(e), $ = (e)=>!!e && !Number.isNaN(Number(e)), Bt = (e)=>!!e && Number.isInteger(Number(e)), xi = (e)=>e.endsWith("%") && $(e.slice(0, -1)), Et = (e)=>ny.test(e), dp = ()=>!0, sy = (e)=>ry.test(e) && !oy.test(e), va = ()=>!1, ay = (e)=>ly.test(e), uy = (e)=>iy.test(e), cy = (e)=>!j(e) && !M(e), dy = (e)=>dn(e, mp, va), j = (e)=>up.test(e), hn = (e)=>dn(e, hp, sy), Zu = (e)=>dn(e, vy, $), fy = (e)=>dn(e, xp, dp), py = (e)=>dn(e, gp, va), Ju = (e)=>dn(e, fp, va), my = (e)=>dn(e, pp, uy), Lo = (e)=>dn(e, yp, ay), M = (e)=>cp.test(e), Tr = (e)=>Pn(e, hp), hy = (e)=>Pn(e, gp), ec = (e)=>Pn(e, fp), gy = (e)=>Pn(e, mp), xy = (e)=>Pn(e, pp), Oo = (e)=>Pn(e, yp, !0), yy = (e)=>Pn(e, xp, !0), dn = (e, t, n)=>{
        const r = up.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, Pn = (e, t, n = !1)=>{
        const r = cp.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, fp = (e)=>e === "position" || e === "percentage", pp = (e)=>e === "image" || e === "url", mp = (e)=>e === "length" || e === "size" || e === "bg-size", hp = (e)=>e === "length", vy = (e)=>e === "number", gp = (e)=>e === "family-name", xp = (e)=>e === "number" || e === "weight", yp = (e)=>e === "shadow", wy = ()=>{
        const e = Se("color"), t = Se("font"), n = Se("text"), r = Se("font-weight"), o = Se("tracking"), l = Se("leading"), i = Se("breakpoint"), s = Se("container"), a = Se("spacing"), u = Se("radius"), d = Se("shadow"), c = Se("inset-shadow"), h = Se("text-shadow"), w = Se("drop-shadow"), g = Se("blur"), y = Se("perspective"), x = Se("aspect"), f = Se("ease"), p = Se("animate"), m = ()=>[
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
            ], _ = ()=>[
                ...S(),
                M,
                j
            ], T = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], z = ()=>[
                "auto",
                "contain",
                "none"
            ], k = ()=>[
                M,
                j,
                a
            ], O = ()=>[
                Ut,
                "full",
                "auto",
                ...k()
            ], D = ()=>[
                Bt,
                "none",
                "subgrid",
                M,
                j
            ], te = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Bt,
                        M,
                        j
                    ]
                },
                Bt,
                M,
                j
            ], ye = ()=>[
                Bt,
                "auto",
                M,
                j
            ], Te = ()=>[
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
            ], ce = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], X = ()=>[
                "auto",
                ...k()
            ], P = ()=>[
                Ut,
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
                ...k()
            ], N = ()=>[
                Ut,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...k()
            ], b = ()=>[
                Ut,
                "screen",
                "full",
                "lh",
                "dvh",
                "lvh",
                "svh",
                "min",
                "max",
                "fit",
                ...k()
            ], E = ()=>[
                e,
                M,
                j
            ], q = ()=>[
                ...S(),
                ec,
                Ju,
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
            ], pe = ()=>[
                "auto",
                "cover",
                "contain",
                gy,
                dy,
                {
                    size: [
                        M,
                        j
                    ]
                }
            ], Fe = ()=>[
                xi,
                Tr,
                hn
            ], de = ()=>[
                "",
                "none",
                "full",
                u,
                M,
                j
            ], J = ()=>[
                "",
                $,
                Tr,
                hn
            ], Je = ()=>[
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
            ], ie = ()=>[
                $,
                xi,
                ec,
                Ju
            ], On = ()=>[
                "",
                "none",
                g,
                M,
                j
            ], pn = ()=>[
                "none",
                $,
                M,
                j
            ], Ct = ()=>[
                "none",
                $,
                M,
                j
            ], Dn = ()=>[
                $,
                M,
                j
            ], mn = ()=>[
                Ut,
                "full",
                ...k()
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
                    Et
                ],
                breakpoint: [
                    Et
                ],
                color: [
                    dp
                ],
                container: [
                    Et
                ],
                "drop-shadow": [
                    Et
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    cy
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
                    Et
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
                    Et
                ],
                shadow: [
                    Et
                ],
                spacing: [
                    "px",
                    $
                ],
                text: [
                    Et
                ],
                "text-shadow": [
                    Et
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
                            Ut,
                            j,
                            M,
                            x
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
                        object: _()
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
                            Bt,
                            "auto",
                            M,
                            j
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            Ut,
                            "full",
                            "auto",
                            s,
                            ...k()
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
                            Ut,
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
                            Bt,
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
                        col: te()
                    }
                ],
                "col-start": [
                    {
                        "col-start": ye()
                    }
                ],
                "col-end": [
                    {
                        "col-end": ye()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": D()
                    }
                ],
                "row-start-end": [
                    {
                        row: te()
                    }
                ],
                "row-start": [
                    {
                        "row-start": ye()
                    }
                ],
                "row-end": [
                    {
                        "row-end": ye()
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
                        "auto-cols": Te()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": Te()
                    }
                ],
                gap: [
                    {
                        gap: k()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": k()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": k()
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
                            ...ce(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...ce()
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
                            ...ce(),
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
                            ...ce(),
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
                            ...ce(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...ce()
                        ]
                    }
                ],
                p: [
                    {
                        p: k()
                    }
                ],
                px: [
                    {
                        px: k()
                    }
                ],
                py: [
                    {
                        py: k()
                    }
                ],
                ps: [
                    {
                        ps: k()
                    }
                ],
                pe: [
                    {
                        pe: k()
                    }
                ],
                pbs: [
                    {
                        pbs: k()
                    }
                ],
                pbe: [
                    {
                        pbe: k()
                    }
                ],
                pt: [
                    {
                        pt: k()
                    }
                ],
                pr: [
                    {
                        pr: k()
                    }
                ],
                pb: [
                    {
                        pb: k()
                    }
                ],
                pl: [
                    {
                        pl: k()
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
                        "space-x": k()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": k()
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
                            yy,
                            fy
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
                            xi,
                            j
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            hy,
                            py,
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
                            Zu
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ...k()
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
                            ...Je(),
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
                        decoration: E()
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
                        indent: k()
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
                        bg: q()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: Z()
                    }
                ],
                "bg-size": [
                    {
                        bg: pe()
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
                                    M,
                                    j
                                ],
                                radial: [
                                    "",
                                    M,
                                    j
                                ],
                                conic: [
                                    Bt,
                                    M,
                                    j
                                ]
                            },
                            xy,
                            my
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
                        rounded: de()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": de()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": de()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": de()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": de()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": de()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": de()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": de()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": de()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": de()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": de()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": de()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": de()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": de()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": de()
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
                            ...Je(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...Je(),
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
                            ...Je(),
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
                        outline: E()
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
                        shadow: E()
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
                        "inset-shadow": E()
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
                        ring: E()
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
                        "ring-offset": E()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": J()
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
                            h,
                            Oo,
                            Lo
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
                        "mask-linear-from": ie()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": ie()
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
                        "mask-t-from": ie()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": ie()
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
                        "mask-r-from": ie()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": ie()
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
                        "mask-b-from": ie()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": ie()
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
                        "mask-l-from": ie()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": ie()
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
                        "mask-x-from": ie()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": ie()
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
                        "mask-y-from": ie()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": ie()
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
                            j
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": ie()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": ie()
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
                        "mask-conic-from": ie()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": ie()
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
                        mask: q()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: Z()
                    }
                ],
                "mask-size": [
                    {
                        mask: pe()
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
                            w,
                            Oo,
                            Lo
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
                        "border-spacing": k()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": k()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": k()
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
                            y,
                            M,
                            j
                        ]
                    }
                ],
                "perspective-origin": [
                    {
                        "perspective-origin": _()
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
                        origin: _()
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
                        "scroll-m": k()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": k()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": k()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": k()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": k()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": k()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": k()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": k()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": k()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": k()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": k()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": k()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": k()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": k()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": k()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": k()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": k()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": k()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": k()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": k()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": k()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": k()
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
                            ...E()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            $,
                            Tr,
                            hn,
                            Zu
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
    }, Sy = Jx(wy);
    function Mn(...e) {
        return Sy($f(e));
    }
    const ky = Uf("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function V({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? Zg : "button";
        return v.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Mn(ky({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const _y = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Nr(e) {
        return _y[e] ?? "#000000";
    }
    function Cy(e) {
        return typeof e == "object" && e !== null;
    }
    function Ey(e) {
        let t, n, r, o, l;
        if (Array.isArray(e)) t = e[0], n = e[1], r = e[2], o = e[3], l = e.length >= 9 ? e[8] : e[4];
        else if (Cy(e)) t = e.r, n = e.c, r = e.color, o = e.size, l = e.text;
        else return null;
        return typeof t != "number" || typeof n != "number" ? null : {
            r: t,
            c: n,
            color: typeof r == "number" ? r : 0,
            size: typeof o == "number" ? o : 1,
            text: typeof l == "string" ? l : String(l ?? "")
        };
    }
    function Ty(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, d = s * a + o * 2;
        e.width = u, e.height = d;
        const c = e.getContext("2d");
        if (c) {
            l && (c.fillStyle = l, c.fillRect(0, 0, u, d)), c.translate(o, o);
            for (const h of t.cells ?? []){
                const [w, g, y] = h, x = h.length >= 4 ? h[3] : 1, f = Nr(y);
                f && (c.fillStyle = f, c.fillRect(g * a, w * a, x * a, x * a));
            }
            for (const h of t.images ?? []){
                if (!Array.isArray(h) || h.length < 4) continue;
                const [w, g, y, x] = h, f = Math.min(g, x) * a, p = Math.min(w, y) * a, m = Math.abs(x - g) * a, S = Math.abs(y - w) * a;
                c.fillStyle = "#eef2f7", c.fillRect(f, p, m, S), c.strokeStyle = "#c3ccd8", c.lineWidth = 1, c.strokeRect(f + .5, p + .5, m - 1, S - 1);
            }
            for (const [h, w, g, y, x, f] of t.rects ?? []){
                const p = Math.min(w, y) * a, m = Math.min(h, g) * a, S = Math.abs(y - w) * a, _ = Math.abs(g - h) * a, T = Nr(x);
                T && (c.fillStyle = T, c.fillRect(p, m, S, _));
                const z = Nr(f);
                z && (c.strokeStyle = z, c.lineWidth = Math.max(1, a / 8), c.strokeRect(p, m, S, _));
            }
            for (const [h, w, g, y, x] of t.lines ?? []){
                const f = Nr(x);
                f && (c.strokeStyle = f, c.lineWidth = Math.max(1, a / 6), c.beginPath(), c.moveTo(w * a, h * a), c.lineTo(y * a, g * a), c.stroke());
            }
            c.textBaseline = "alphabetic";
            for (const h of t.texts ?? []){
                const w = Ey(h);
                w && (c.fillStyle = Nr(w.color) ?? "#000000", c.font = `${Math.max(6, w.size * a * mt)}px 'BigBlue Terminal', monospace`, c.fillText(w.text, w.c * a, (w.r + w.size * mt) * a));
            }
            c.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function Zo({ design: e, size: t = 96, className: n }) {
        const r = C.useRef(null);
        return C.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            Ty(r.current, e, o);
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
    function gr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = C.useState(t), s = C.useRef(!1), a = C.useRef({
            x: 0,
            y: 0
        }), u = C.useCallback((d)=>{
            s.current = !0, a.current = {
                x: d.clientX - l.x,
                y: d.clientY - l.y
            };
            const c = (w)=>{
                if (!s.current) return;
                const g = Math.max(0, w.clientX - a.current.x), y = Math.max(0, w.clientY - a.current.y);
                i({
                    x: g,
                    y
                });
            }, h = ()=>{
                s.current = !1, window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", h);
            };
            window.addEventListener("mousemove", c), window.addEventListener("mouseup", h);
        }, [
            l
        ]);
        return v.jsxs("div", {
            className: Mn("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
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
    function bt(e) {
        return typeof e == "object" && e !== null;
    }
    function Wl(e) {
        return bt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && typeof e.name == "string" && bt(e.design);
    }
    function Ny(e) {
        return Array.isArray(e) && e.every(Wl);
    }
    function vp(e) {
        return bt(e) && typeof e.id == "number" && typeof e.createdAt == "string" && bt(e.input) && bt(e.output);
    }
    function Iy(e) {
        return Array.isArray(e) && e.every(vp);
    }
    function zy(e) {
        return bt(e) && typeof e.uploadUrl == "string" && typeof e.publicUrl == "string" && typeof e.key == "string";
    }
    function Ry(e) {
        const t = import.meta;
        if (!("env" in t)) return;
        const n = t.env;
        if (bt(n) && typeof n[e] == "string") return n[e];
    }
    const wp = Ry("VITE_API_URL") ?? "https://api.seanneilan.com", wa = "grid-draw-token", vs = "grid-draw-auth-expired";
    function Sp() {
        return localStorage.getItem(wa);
    }
    function kp() {
        localStorage.removeItem(wa);
    }
    async function jy(e, t) {
        const n = await fetch(`${wp}/api/login`, {
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
        if (!bt(r) || typeof r.token != "string") throw new Error("login failed (malformed response)");
        localStorage.setItem(wa, r.token);
    }
    async function _p(e, t, n) {
        const r = {}, o = Sp();
        o && (r.Authorization = `Bearer ${o}`), n !== void 0 && (r["Content-Type"] = "application/json");
        const l = await fetch(`${wp}${t}`, {
            method: e,
            headers: r,
            body: n === void 0 ? void 0 : JSON.stringify(n)
        });
        if (l.status === 401) throw kp(), window.dispatchEvent(new Event(vs)), new Error("session expired — please log in again");
        if (!l.ok) {
            const i = await l.json().catch(()=>null), s = bt(i) && typeof i.error == "string" ? i.error : void 0;
            throw new Error(s ?? `${e} ${t} failed (${l.status})`);
        }
        return l;
    }
    async function bn(e, t, n, r) {
        const l = await (await _p(e, t, r)).json();
        if (!n(l)) throw new Error(`${e} ${t}: unexpected response shape`);
        return l;
    }
    async function Sa(e, t, n) {
        await _p(e, t, n);
    }
    function Py() {
        return bn("GET", "/api/designs", Ny);
    }
    function My(e) {
        return bn("GET", `/api/designs/${e}`, Wl);
    }
    function by(e) {
        return bn("GET", `/api/designs?name=${encodeURIComponent(e)}`, Wl);
    }
    async function Ly(e, t, n) {
        return (await bn("PUT", "/api/designs", Wl, {
            name: e,
            design: t,
            history: n
        })).id;
    }
    function Oy(e) {
        return Sa("DELETE", `/api/designs/${e}`);
    }
    function tc() {
        return bn("GET", "/api/examples", Iy);
    }
    async function Dy(e, t, n) {
        return (await bn("POST", "/api/examples", vp, {
            input: e,
            output: t,
            delta: n
        })).id;
    }
    function Ay(e, t, n, r) {
        return Sa("PUT", `/api/examples/${e}`, {
            input: t,
            output: n,
            delta: r
        });
    }
    function Fy(e) {
        return Sa("DELETE", `/api/examples/${e}`);
    }
    async function $y(e) {
        const t = e.type || "application/octet-stream", { uploadUrl: n, publicUrl: r } = await bn("POST", "/api/images/presign", zy, {
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
    function Uy(e) {
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
    function By(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = Uy(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function nc(e, t) {
        return e >= 0 && e <= ao && t >= 0 && t <= ao;
    }
    function rc(e, t) {
        if (t instanceof e.SymbolicTensor) return t;
        throw new Error("expected a SymbolicTensor from layer.apply");
    }
    const pt = ao + 1, Cp = "indexeddb://grid-draw-coord-model";
    let oc, fr = null;
    async function ka() {
        return oc ??= ma(()=>import("./index2.js"), []), oc;
    }
    function Wy(e) {
        const t = e.input({
            shape: [
                2 * pt
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
        const r = rc(e, e.layers.dense({
            units: pt,
            activation: "softmax",
            name: "r"
        }).apply(n)), o = rc(e, e.layers.dense({
            units: pt,
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
    function Ep(e, t) {
        const n = new Float32Array(t.length * 2 * pt);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * pt + r] = 1, n[l * 2 * pt + pt + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * pt
        ]);
    }
    function lc(e, t) {
        const n = new Float32Array(t.length * pt);
        return t.forEach((r, o)=>{
            n[o * pt + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            pt
        ]);
    }
    async function Vy() {
        const e = await ka();
        try {
            return fr = await e.loadLayersModel(Cp), !0;
        } catch  {
            return fr = null, !1;
        }
    }
    async function Gy(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await ka(), { pairs: s, skippedExamples: a } = By(e), u = [];
        let d = 0;
        for (const x of s)nc(x[0], x[1]) && nc(x[2], x[3]) ? u.push(x) : d++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const c = Ep(i, u.map((x)=>[
                x[0],
                x[1]
            ])), h = lc(i, u.map((x)=>x[2])), w = lc(i, u.map((x)=>x[3])), g = Wy(i);
        g.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let y = NaN;
        return await g.fit(c, [
            h,
            w
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (x, f)=>{
                    const p = f?.loss;
                    typeof p == "number" && (y = p), l?.(x + 1, n, y), await i.nextFrame();
                }
            }
        }), c.dispose(), h.dispose(), w.dispose(), fr?.dispose(), fr = g, await g.save(Cp), {
            pairs: u.length,
            droppedPoints: d,
            skippedExamples: a,
            finalLoss: y
        };
    }
    async function Hy(e) {
        if (!fr) throw new Error("No model yet — train one first.");
        const t = fr, n = await ka(), r = e.cells ?? [];
        if (r.length === 0) return {
            w: 1,
            h: 1,
            cells: [],
            lines: [],
            rects: [],
            texts: [],
            sub: mt
        };
        const o = r.map(([u, d])=>[
                Math.max(0, Math.min(ao, u)),
                Math.max(0, Math.min(ao, d))
            ]), l = n.tidy(()=>{
            const u = Ep(n, o), d = t.predict(u), c = Array.isArray(d) ? d : [
                d
            ], h = c[0], w = c[1], g = h.argMax(1).dataSync(), y = w.argMax(1).dataSync();
            return r.map((x, f)=>[
                    g[f],
                    y[f],
                    x[2],
                    x.length >= 4 ? x[3] : 1
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
            sub: mt
        };
    }
    const he = If((e, t)=>({
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
                        designs: await Py(),
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
                        examples: await tc(),
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
                const l = await Ly(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>by(n),
            getDrawingById: (n)=>My(n),
            saveExamplePair: async (n, r, o)=>{
                await Dy(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await Ay(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await Oy(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await Fy(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Vy();
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
                const n = await tc();
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
                    const r = await Gy(n, {
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
            runPredict: (n)=>Hy(n)
        })), Tp = "/grid-draw/";
    function Ky(e) {
        window.location.href = `${Tp}design/${encodeURIComponent(e)}/`;
    }
    function Qy() {
        window.location.href = Tp;
    }
    function Np({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = he((x)=>x.designs), o = he((x)=>x.examples), l = he((x)=>x.loadingDesigns || x.loadingExamples), i = he((x)=>x.error), s = he((x)=>x.loadDesigns), a = he((x)=>x.loadExamples), u = he((x)=>x.deleteDrawing), d = he((x)=>x.deleteExamplePair), c = C.useCallback(()=>{
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
        const h = C.useCallback((x, f)=>{
            window.confirm(`Delete drawing “${f}”? This can't be undone.`) && u(x);
        }, [
            u
        ]), w = C.useCallback((x)=>{
            window.confirm("Delete this training example? This can't be undone.") && d(x);
        }, [
            d
        ]), g = C.useCallback((x)=>{
            n ? n(x) : Ky(x);
        }, [
            n
        ]), y = v.jsxs(v.Fragment, {
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
                            children: r.map((x)=>v.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        v.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: v.jsx(Zo, {
                                                design: x.design,
                                                size: 120
                                            })
                                        }),
                                        v.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: x.name,
                                            children: x.name
                                        }),
                                        v.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                v.jsx(V, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>g(x.name),
                                                    children: "Open"
                                                }),
                                                v.jsx(V, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-red-600",
                                                    onClick: ()=>h(x.id, x.name),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, x.id))
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
                            children: o.map((x)=>v.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        v.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                v.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        v.jsx(Zo, {
                                                            design: x.input,
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
                                                        v.jsx(Zo, {
                                                            design: x.output,
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
                                        v.jsx(V, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full text-xs text-red-600",
                                            onClick: ()=>w(x.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, x.id))
                        })
                    ]
                })
            ]
        });
        return e ? v.jsxs(gr, {
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
                        v.jsx(V, {
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
                    children: y
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
                        v.jsx(V, {
                            variant: "outline",
                            size: "sm",
                            onClick: Qy,
                            children: "← Editor"
                        }),
                        v.jsx(V, {
                            variant: "outline",
                            size: "sm",
                            onClick: c,
                            children: "Refresh"
                        }),
                        v.jsx(V, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                kp(), window.location.reload();
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
                y
            ]
        });
    }
    const qy = "/grid-draw/";
    function ic({ design: e, label: t, onClick: n }) {
        const r = v.jsx(Zo, {
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
    function Yy({ input: e, output: t, onInput: n, onOutput: r }) {
        return v.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                v.jsx(ic, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                v.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                v.jsx(ic, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function Ip({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = he((a)=>a.examples), o = he((a)=>a.error), l = he((a)=>a.loadExamples);
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
                        v.jsx(V, {
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
                                        v.jsx(Yy, {
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
        return e ? v.jsx(gr, {
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
                        v.jsx(V, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = qy;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const wt = 2, Tt = 8, Ln = 48, Ir = "/grid-draw/", Xy = [
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
    function sc(e) {
        return [
            e[0],
            e[1],
            e[0] + e[4],
            e[1] + e[3]
        ];
    }
    function Zy(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function ac() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - Ln)
        };
    }
    const Jy = .25, ev = 12;
    function tv(e, t) {
        const [n, r] = C.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), o = C.useRef(n);
        o.current = n;
        const l = C.useRef(!1), [i, s] = C.useState(!1), a = C.useRef(null), u = C.useCallback((c)=>{
            if (r(c), !e) return;
            e.set_camera(c.x, c.y, c.zoom);
            const h = Q.getState();
            h.selectedItems.length > 0 && h.renderSelection();
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
            const h = (w)=>{
                w.preventDefault();
                const g = o.current, y = w.deltaY < 0 ? 1.1 : 1 / 1.1, x = Math.min(ev, Math.max(Jy, g.zoom * y));
                if (x === g.zoom) return;
                const f = w.clientX, p = w.clientY - Ln, m = g.x + f * (1 / g.zoom - 1 / x), S = g.y + p * (1 / g.zoom - 1 / x);
                u({
                    x: m,
                    y: S,
                    zoom: x
                });
            };
            return c.addEventListener("wheel", h, {
                passive: !1
            }), ()=>c.removeEventListener("wheel", h);
        }, [
            u,
            t
        ]), C.useEffect(()=>{
            const c = (w)=>{
                w.code !== "Space" || Q.getState().textEdit || (w.preventDefault(), l.current = !0, s(!0));
            }, h = (w)=>{
                w.code === "Space" && (l.current = !1, s(!1));
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
    function Zn(e, t) {
        const n = e.currentTarget, r = n.getBoundingClientRect(), o = (e.clientX - r.left) * (n.width / r.width), l = (e.clientY - r.top) * (n.height / r.height);
        return {
            x: o / t.zoom + t.x,
            y: l / t.zoom + t.y
        };
    }
    function zp(e) {
        return Tt / e;
    }
    function gn(e, t, n) {
        const { x: r, y: o } = Zn(e, t), l = zp(n), i = (s)=>Math.floor(Math.floor(s / wt) / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function Wt(e, t, n) {
        const { x: r, y: o } = Zn(e, t), l = zp(n), i = (s)=>Math.round(s / wt / l) * l;
        return {
            col: i(r),
            row: i(o)
        };
    }
    function nv({ grid: e, camRef: t, applyCamera: n, isSpaceDown: r, panRef: o }) {
        const { tool: l, colorIdx: i, outlineIdx: s, isDrawing: a, drawMode: u, startDrawing: d, stopDrawing: c, lineStart: h, startLine: w, finishLine: g, rectStart: y, startRect: x, finishRect: f, subdivision: p, beginTextEdit: m, selectedItems: S, setSelectedItems: _, selectMode: T, isSelecting: z, selectBoxStart: k, selectDragStart: O, startBoxSelection: D, updateBoxSelection: te, finishBoxSelection: ye, cancelBoxSelection: Te, startDragSelection: L, finishDragSelection: ce, cancelDragSelection: X, startResize: P, updateResize: N, finishResize: b, cancelResize: E, startRotate: q, updateRotate: Z, finishRotate: pe, cancelRotate: Fe, setMousePos: de, addItemToSelection: J, removeItemFromSelection: Je, hitTestShapes: fn, updateOutputs: ie, renderSelection: On, beginDrawStroke: pn, drawCellAt: Ct, endDrawStroke: Dn, commitLine: mn, commitRect: _a } = Q(), bp = C.useCallback((W)=>{
            if (e) {
                if (W.button === 1 || W.button === 0 && r.current) {
                    W.preventDefault(), o.current = {
                        x: W.clientX,
                        y: W.clientY,
                        camX: t.current.x,
                        camY: t.current.y
                    }, W.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (e.set_draw_color(i), e.set_outline_color(s), l === "draw") {
                    const { col: H, row: A } = gn(W, t.current, p), K = i === 6 ? !1 : !e.get_cell(A, H);
                    d(K), pn(), Ct(A, H, K), ie();
                } else if (l === "line") {
                    const { col: H, row: A } = Wt(W, t.current, p);
                    w({
                        row: A,
                        col: H
                    }), e.render_with_line(A, H, A, H);
                } else if (l === "rect") {
                    const { col: H, row: A } = Wt(W, t.current, p);
                    x({
                        row: A,
                        col: H
                    }), e.render_with_rect(A, H, A, H);
                } else if (l === "text") {
                    const { col: H, row: A } = gn(W, t.current, p);
                    m({
                        row: A,
                        col: H
                    });
                } else if (l === "select") {
                    const { col: H, row: A } = gn(W, t.current, p), { x: K, y: ve } = Zn(W, t.current), me = W.shiftKey;
                    if (S.length > 0 && !me) {
                        const Re = We(S, e);
                        if (Re) {
                            const go = ms(Re), xo = 10 / t.current.zoom;
                            if (Math.hypot(K - go.c * wt, ve - go.r * wt) <= xo) {
                                q(K, ve);
                                return;
                            }
                        }
                    }
                    if (S.length === 1 && !me) {
                        const Re = S[0];
                        if (Re.type === "line" || Re.type === "rect" || Re.type === "text" || Re.type === "image") {
                            const go = Re.type === "line" ? hs(e.get_line(Re.index)) : Re.type === "rect" ? Rt(e.get_rect(Re.index)) : Re.type === "image" ? Rt(e.get_image(Re.index)) : Rt(sc(e.get_text(Re.index))), xo = Wu(K, ve, go, wt, 9);
                            if (xo) {
                                P({
                                    shape: Re.type,
                                    index: Re.index,
                                    handle: xo.handle
                                });
                                return;
                            }
                        }
                    }
                    const B = We(S, e), F = B && A >= B.minRow && A <= B.maxRow && H >= B.minCol && H <= B.maxCol, we = fn(K, ve);
                    we && !me && Xn(we, S) && S.length > 1 ? (L({
                        row: A,
                        col: H
                    }), On()) : F && S.length > 0 && !me && !we ? (L({
                        row: A,
                        col: H
                    }, !0), On()) : we ? me && !Xn(we, S) ? J(we) : me && Xn(we, S) ? Je(we) : (_([
                        we
                    ]), L({
                        row: A,
                        col: H
                    }), e.render(), we.type === "cell" ? e.highlight_square(we.index) : we.type === "line" ? e.highlight_line(we.index) : we.type === "rect" ? e.highlight_rect(we.index) : we.type === "image" && e.highlight_image(we.index)) : D({
                        row: A,
                        col: H
                    }, me);
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
            w,
            x,
            D,
            L,
            P,
            q,
            J,
            Je,
            _,
            ie,
            On,
            pn,
            Ct,
            m,
            t,
            r,
            o
        ]), Lp = C.useCallback((W)=>{
            if (!e) return;
            if (o.current) {
                const A = o.current, K = t.current.zoom;
                n({
                    x: A.camX - (W.clientX - A.x) / K,
                    y: A.camY - (W.clientY - A.y) / K,
                    zoom: K
                });
                return;
            }
            const H = gn(W, t.current, p);
            if (de(H), l === "select") {
                const A = W.currentTarget;
                if (z && (T === "resize" || T === "rotate")) A.style.cursor = "grabbing";
                else if (z && T === "drag") A.style.cursor = "move";
                else {
                    const { x: K, y: ve } = Zn(W, t.current);
                    let me = "crosshair";
                    if (S.length > 0) {
                        const B = We(S, e);
                        if (B) {
                            const F = ms(B);
                            Math.hypot(K - F.c * wt, ve - F.r * wt) <= 10 / t.current.zoom && (me = "grab");
                        }
                    }
                    if (me === "crosshair" && S.length === 1) {
                        const B = S[0];
                        if (B.type === "line" || B.type === "rect" || B.type === "text" || B.type === "image") {
                            const F = B.type === "line" ? hs(e.get_line(B.index)) : B.type === "rect" ? Rt(e.get_rect(B.index)) : B.type === "image" ? Rt(e.get_image(B.index)) : Rt(sc(e.get_text(B.index)));
                            Wu(K, ve, F, wt, 9) && (me = "grab");
                        }
                    }
                    if (me === "crosshair" && S.length > 0) {
                        const B = fn(K, ve), F = We(S, e), we = F && H.row >= F.minRow && H.row <= F.maxRow && H.col >= F.minCol && H.col <= F.maxCol;
                        (B && Xn(B, S) || we) && (me = "move");
                    }
                    A.style.cursor = me;
                }
            } else W.currentTarget.style.cursor = "crosshair";
            if (!(!a && !z)) {
                if (l === "draw" && a) {
                    const { col: A, row: K } = gn(W, t.current, p);
                    Ct(K, A, u), ie();
                } else if (l === "line" && h) {
                    const { col: A, row: K } = Wt(W, t.current, p);
                    e.render_with_line(h.row, h.col, K, A);
                } else if (l === "rect" && y) {
                    const { col: A, row: K } = Wt(W, t.current, p);
                    e.render_with_rect(y.row, y.col, K, A);
                } else if (l === "select" && z && T === "resize") {
                    const { col: A, row: K } = Wt(W, t.current, p);
                    N({
                        row: K,
                        col: A
                    });
                } else if (l === "select" && z && T === "rotate") {
                    const { x: A, y: K } = Zn(W, t.current);
                    Z(A, K);
                } else if (l === "select" && z) {
                    const { col: A, row: K } = gn(W, t.current, p);
                    if (T === "box" && k) te({
                        row: K,
                        col: A
                    });
                    else if (T === "drag" && O && S.length > 0) {
                        const ve = K - O.row, me = A - O.col;
                        e.render();
                        for (const B of S)if (B.type === "cell") {
                            const F = e.get_square(B.index);
                            F.length >= 4 && e.preview_square(F[0] + ve, F[1] + me, F[3], F[2]);
                        } else if (B.type === "line") {
                            const F = e.get_line(B.index);
                            F.length >= 6 && e.preview_line(F[0] + ve, F[1] + me, F[2] + ve, F[3] + me, F[4], F[5]);
                        } else if (B.type === "rect") {
                            const F = e.get_rect(B.index);
                            F.length >= 6 && e.preview_rect(F[0] + ve, F[1] + me, F[2] + ve, F[3] + me, F[4], F[5]);
                        } else if (B.type === "text") {
                            const F = e.get_text(B.index);
                            F.length >= 7 && e.preview_text(F[0] + ve, F[1] + me, F[2], e.get_text_size(B.index), F[3], F[4], F[5], F[6], e.get_text_string(B.index));
                        }
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
            y,
            T,
            k,
            O,
            S,
            fn,
            de,
            te,
            N,
            Z,
            ie,
            Ct,
            t,
            o,
            n
        ]), Op = C.useCallback((W)=>{
            if (e) {
                if (o.current) {
                    o.current = null, W.currentTarget.style.cursor = r.current ? "grab" : "crosshair";
                    return;
                }
                if (l === "draw") Dn(), c();
                else if (l === "line") {
                    if (h) {
                        const { col: H, row: A } = Wt(W, t.current, p);
                        mn(h.row, h.col, A, H);
                    }
                    g();
                } else if (l === "rect") {
                    if (y) {
                        const { col: H, row: A } = Wt(W, t.current, p);
                        _a(y.row, y.col, A, H);
                    }
                    f();
                } else if (l === "select") {
                    const { col: H, row: A } = gn(W, t.current, p);
                    if (T === "rotate") {
                        const { x: K, y: ve } = Zn(W, t.current);
                        pe(K, ve);
                    } else if (T === "resize") {
                        const { col: K, row: ve } = Wt(W, t.current, p);
                        b({
                            row: ve,
                            col: K
                        });
                    } else T === "box" ? ye({
                        row: A,
                        col: H
                    }) : T === "drag" && ce({
                        row: A,
                        col: H
                    });
                }
            }
        }, [
            e,
            l,
            p,
            h,
            y,
            T,
            c,
            g,
            f,
            ye,
            ce,
            b,
            pe,
            Dn,
            mn,
            _a,
            t,
            r,
            o
        ]), Dp = C.useCallback(()=>{
            if (o.current) {
                o.current = null;
                return;
            }
            l === "draw" ? c() : l === "line" ? (e && e.render(), g()) : l === "rect" ? (e && e.render(), f()) : l === "select" && (T === "box" ? Te() : T === "drag" ? X() : T === "resize" ? E() : T === "rotate" && Fe());
        }, [
            e,
            l,
            T,
            c,
            g,
            f,
            Te,
            X,
            E,
            Fe,
            o
        ]);
        return {
            handleMouseDown: bp,
            handleMouseMove: Lp,
            handleMouseUp: Op,
            handleMouseLeave: Dp
        };
    }
    function rv() {
        const { tool: e, setTool: t, setColorIdx: n, selectedItems: r, deleteSelected: o, selectAll: l, clipboard: i, copy: s, paste: a, cycleSubdivision: u, undo: d, redo: c, typeTextChar: h, backspaceText: w, commitTextEdit: g, cancelTextEdit: y } = Q();
        C.useEffect(()=>{
            const x = (f)=>{
                if (Q.getState().textEdit) return;
                f.key === "\\" && t(e === "line" ? "draw" : "line"), f.key === "m" && t(e === "rect" ? "draw" : "rect"), f.key === "t" && t(e === "text" ? "draw" : "text"), f.key === "s" && t(e === "select" ? "draw" : "select"), (f.key === "Delete" || f.key === "Backspace") && r.length > 0 && (f.preventDefault(), o()), (f.ctrlKey || f.metaKey) && f.key.toLowerCase() === "a" && (f.preventDefault(), l()), (f.ctrlKey || f.metaKey) && f.key === "c" && r.length > 0 && (f.preventDefault(), s()), (f.ctrlKey || f.metaKey) && f.key === "v" && i && (f.preventDefault(), a()), (f.ctrlKey || f.metaKey) && f.key.toLowerCase() === "g" && (f.preventDefault(), u()), (f.ctrlKey || f.metaKey) && !f.shiftKey && f.key.toLowerCase() === "z" && (f.preventDefault(), d()), (f.ctrlKey || f.metaKey) && (f.shiftKey && f.key.toLowerCase() === "z" || f.key.toLowerCase() === "y") && (f.preventDefault(), c());
                const p = parseInt(f.key);
                p >= 1 && p <= 7 && n(p - 1);
            };
            return window.addEventListener("keydown", x), ()=>window.removeEventListener("keydown", x);
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
            const x = (f)=>{
                if (Q.getState().textEdit) {
                    if (f.key === "Enter") {
                        f.preventDefault(), g();
                        return;
                    }
                    if (f.key === "Escape") {
                        f.preventDefault(), y();
                        return;
                    }
                    if (f.key === "Backspace") {
                        f.preventDefault(), w();
                        return;
                    }
                    f.key.length === 1 && !f.ctrlKey && !f.metaKey && !f.altKey && (f.preventDefault(), h(f.key));
                }
            };
            return window.addEventListener("keydown", x), ()=>window.removeEventListener("keydown", x);
        }, [
            g,
            y,
            w,
            h
        ]);
    }
    function ov(e, t, n, r) {
        const i = (g)=>e[g * 4] > 227 && e[g * 4 + 1] > 227 && e[g * 4 + 2] > 227, s = new Uint8Array(t * n), a = new Int32Array(t * n);
        let u = 0, d = 0;
        const c = (g)=>{
            !s[g] && i(g) && (s[g] = 1, a[d++] = g);
        };
        for(let g = 0; g < t; g++)c(g), c((n - 1) * t + g);
        for(let g = 0; g < n; g++)c(g * t), c(g * t + (t - 1));
        for(; u < d;){
            const g = a[u++], y = g % t;
            y > 0 && c(g - 1), y < t - 1 && c(g + 1), g >= t && c(g - t), g < t * (n - 1) && c(g + t);
        }
        let h = 0;
        for(let g = 0; g < t * n; g++)s[g] && (e[g * 4 + 3] = 0, h++);
        if (h === 0 || r?.feather === !1) return h;
        const w = new Uint8ClampedArray(t * n);
        for(let g = 0; g < n; g++)for(let y = 0; y < t; y++){
            let x = 0, f = 0;
            for(let p = -1; p <= 1; p++)for(let m = -1; m <= 1; m++){
                const S = y + m, _ = g + p;
                S >= 0 && S < t && _ >= 0 && _ < n && (x += e[(_ * t + S) * 4 + 3], f++);
            }
            w[g * t + y] = x / f;
        }
        for(let g = 0; g < t * n; g++)e[g * 4 + 3] = w[g];
        return h;
    }
    async function lv(e) {
        const t = await createImageBitmap(e);
        try {
            const n = document.createElement("canvas");
            n.width = t.width, n.height = t.height;
            const r = n.getContext("2d");
            if (!r) throw new Error("canvas 2d context unavailable");
            r.drawImage(t, 0, 0);
            const o = r.getImageData(0, 0, t.width, t.height);
            if (ov(o.data, t.width, t.height) === 0) return e;
            r.putImageData(o, 0, 0);
            const i = await new Promise((s)=>n.toBlob(s, "image/png"));
            if (!i) throw new Error("PNG encode failed");
            return i;
        } finally{
            t.close();
        }
    }
    const uc = 16;
    function iv(e, t) {
        const n = Q((u)=>u.placeImage), r = C.useRef(null), [o, l] = C.useState(""), [i, s] = C.useState(!1), a = C.useCallback(async (u)=>{
            try {
                let d;
                if (typeof u == "string") d = u;
                else {
                    let _ = u;
                    i && (l("Removing background…"), _ = await lv(_)), l("Uploading…"), d = await $y(_);
                }
                l("Loading…");
                const { width: c, height: h } = await Tg(d), w = Math.max(c, h) || 1, g = Math.max(1, Math.round(c / w * uc)), y = Math.max(1, Math.round(h / w * uc)), x = e.current, f = Math.round((x.x + t.w / 2 / x.zoom) / wt / Tt) * Tt, p = Math.round((x.y + t.h / 2 / x.zoom) / wt / Tt) * Tt, m = f - Math.round(g / 2) * Tt, S = p - Math.round(y / 2) * Tt;
                n(d, {
                    r1: S,
                    c1: m,
                    r2: S + y * Tt,
                    c2: m + g * Tt
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
                        const w = h.getAsFile();
                        if (w) {
                            d.preventDefault(), a(w);
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
    const sv = 600;
    function av() {
        const e = import.meta;
        if ("env" in e) {
            const t = e.env;
            if (typeof t == "object" && t !== null && "BASE_URL" in t && typeof t.BASE_URL == "string") return t.BASE_URL;
        }
        return "/grid-draw/";
    }
    const uv = av();
    let cc, Rp = !1;
    function yi(e) {
        Rp = e;
    }
    function cv() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function dv(e) {
        return e.cells.length + e.lines.length + e.rects.length + e.texts.length + (e.images?.length ?? 0) > 0;
    }
    function fv() {
        clearTimeout(cc), cc = setTimeout(pv, sv);
    }
    async function pv() {
        const e = Q.getState();
        if (!e.grid) return;
        const t = e.serializeWholeGrid();
        if (!t) return;
        let n = e.currentName;
        if (!n) {
            if (Rp || !dv(t)) return;
            n = cv(), e.setCurrentName(n), window.history.replaceState({}, "", `${uv}design/${n}/`);
        }
        e.setSaveState("saving");
        try {
            await he.getState().saveDrawing(n, t, e.exportHistory()), Q.getState().setSaveState("saved");
        } catch (r) {
            Q.getState().setSaveState("error", r instanceof Error ? r.message : String(r));
        }
    }
    Q.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && fv();
    });
    function mv(e) {
        const { clear: t, resetHistory: n, setSaveState: r, buildTrainingExample: o, finishTrainingCapture: l, serializeWholeGrid: i, loadDesignWithHistory: s, setCurrentName: a } = Q(), u = he((P)=>P.getDrawing), d = he((P)=>P.getDrawingById), c = he((P)=>P.saveExamplePair), h = he((P)=>P.updateExamplePair), w = he((P)=>P.runPredict), g = he((P)=>P.trainModel), y = he((P)=>P.initModel), x = he((P)=>P.modelStatus), f = he((P)=>P.training), [p, m] = C.useState(""), [S, _] = C.useState(!1), [T, z] = C.useState(!1), [k, O] = C.useState(null);
        C.useEffect(()=>{
            if (!e) return;
            let P = !1;
            const N = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (N) return u(N[1]).then((E)=>{
                P || (s(E.design, E.history ?? null), a(E.name));
            }).catch(()=>m(`No drawing named "${N[1]}".`)), ()=>{
                P = !0;
            };
            const b = new URLSearchParams(window.location.search).get("load");
            if (b) return d(Number(b)).then((E)=>{
                P || (s(E.design, E.history ?? null), a(E.name), window.history.replaceState({}, "", `${Ir}design/${encodeURIComponent(E.name)}/`));
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
            y();
        }, [
            y
        ]);
        const D = C.useCallback(async ()=>{
            const P = o();
            if (!P) {
                m("Select the output region first.");
                return;
            }
            m("Saving…");
            try {
                await c(P.input, P.output, P.delta), l(), m("Saved.");
            } catch (N) {
                m(`Save failed: ${N instanceof Error ? N.message : String(N)}`);
            }
        }, [
            o,
            l,
            c
        ]), te = C.useCallback(async ()=>{
            m("Training in the browser…");
            try {
                await g(), m("Model trained. Try Predict from Selection.");
            } catch (P) {
                m(`Train failed: ${P instanceof Error ? P.message : String(P)}`);
            }
        }, [
            g
        ]), ye = C.useCallback(async ()=>{
            const { grid: P, selectedItems: N } = Q.getState();
            if (!P) return;
            const b = Wr(P, N);
            if (!b) {
                m("Select an input region to predict from.");
                return;
            }
            const E = We(N, P), q = E ? E.minRow : 0, Z = E ? E.minCol : 0;
            m("Predicting…");
            try {
                const pe = await w(b);
                Q.getState().placeDesign(pe, q, Z), m(Zy(pe) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (pe) {
                m(`Predict failed: ${pe instanceof Error ? pe.message : String(pe)}`);
            }
        }, [
            w
        ]), Te = C.useCallback(async (P)=>{
            const N = await u(P);
            s(N.design, N.history ?? null), a(N.name), O(null), yi(!1), window.history.replaceState({}, "", `${Ir}design/${encodeURIComponent(N.name)}/`), _(!1);
        }, [
            s,
            a,
            u
        ]), L = C.useCallback((P, N)=>{
            const b = N === "input" ? P.input : P.output, E = N === "input" ? P.output : P.input;
            s(b, null), a(null), yi(!0), O({
                id: P.id,
                half: N,
                otherHalf: E
            }), window.history.replaceState({}, "", Ir), z(!1), m(`Editing example #${P.id} (${N}) — click "Update example" to save over it.`);
        }, [
            s,
            a
        ]), ce = C.useCallback(async ()=>{
            if (!k) return;
            const P = i();
            if (!P) {
                m("Nothing to save — draw something first.");
                return;
            }
            const { id: N, half: b, otherHalf: E } = k, q = b === "input" ? P : E, Z = b === "output" ? P : E;
            m(`Updating example #${N}…`);
            try {
                await h(N, q, Z), m(`Example #${N} (${b}) updated.`);
            } catch (pe) {
                m(`Update failed: ${pe instanceof Error ? pe.message : String(pe)}`);
            }
        }, [
            k,
            i,
            h
        ]), X = C.useCallback(()=>{
            a(null), O(null), yi(!1), t(), n(), r("idle"), window.history.replaceState({}, "", Ir), m("");
        }, [
            a,
            t,
            n,
            r
        ]);
        return {
            trainStatus: p,
            galleryOpen: S,
            setGalleryOpen: _,
            trainingOpen: T,
            setTrainingOpen: z,
            editingExample: k,
            modelStatus: x,
            training: f,
            saveTrainingExample: D,
            startTraining: te,
            predictFromSelection: ye,
            openDrawing: Te,
            editExampleHalf: L,
            saveExampleUpdate: ce,
            newDrawing: X
        };
    }
    const jp = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const hv = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const gv = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const dc = (e)=>{
        const t = gv(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var xv = {
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
    const yv = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const vv = C.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>C.createElement("svg", {
            ref: a,
            ...xv,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: jp("lucide", o),
            ...!l && !yv(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, d])=>C.createElement(u, d)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const Pp = (e, t)=>{
        const n = C.forwardRef(({ className: r, ...o }, l)=>C.createElement(vv, {
                ref: l,
                iconNode: t,
                className: jp(`lucide-${hv(dc(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = dc(e), n;
    };
    const wv = [
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
    ], Sv = Pp("redo-2", wv);
    const kv = [
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
    ], _v = Pp("undo-2", kv), Cv = Uf("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), Mp = C.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Do({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return v.jsx(jx, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Mn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: v.jsx(Mp.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function at({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = C.useContext(Mp);
        return v.jsx(Px, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Mn(Cv({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function fc({ activeIdx: e, onPick: t, titleFor: n }) {
        return v.jsx("div", {
            className: "flex gap-1",
            children: Xy.map((r, o)=>v.jsx("button", {
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
    function Ev(e) {
        return e === "draw" || e === "line" || e === "rect" || e === "text" || e === "select";
    }
    function Tv({ loading: e, imageInputRef: t, imgStatus: n, removeBg: r, setRemoveBg: o, addImageObject: l, editingExample: i, saveExampleUpdate: s, newDrawing: a, onOpenGallery: u }) {
        const d = Q(), { tool: c, setTool: h, colorIdx: w, pickColor: g, outlineIdx: y, pickOutline: x, textSize: f, pickTextSize: p, lineWidth: m, pickLineWidth: S, pickTextAlign: _, subdivision: T, setSubdivision: z, selectedItems: k, clear: O, undo: D, redo: te, canUndo: ye, canRedo: Te } = d;
        return d.historyTick, v.jsx(gr, {
            title: "Tools",
            defaultPosition: {
                x: 20,
                y: Ln + 20
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
                            v.jsxs(Do, {
                                type: "single",
                                value: c,
                                onValueChange: (L)=>{
                                    Ev(L) && h(L);
                                },
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    v.jsx(at, {
                                        value: "draw",
                                        className: "text-xs",
                                        children: "Draw"
                                    }),
                                    v.jsx(at, {
                                        value: "line",
                                        className: "text-xs",
                                        children: "Line"
                                    }),
                                    v.jsx(at, {
                                        value: "rect",
                                        className: "text-xs",
                                        children: "Rect"
                                    }),
                                    v.jsx(at, {
                                        value: "text",
                                        className: "text-xs",
                                        children: "Text"
                                    }),
                                    v.jsx(at, {
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
                            v.jsxs(Do, {
                                type: "single",
                                value: String(T),
                                onValueChange: (L)=>L && z(Number(L)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: [
                                    v.jsx(at, {
                                        value: "1",
                                        className: "text-xs",
                                        title: "Whole cells",
                                        children: "1×"
                                    }),
                                    v.jsx(at, {
                                        value: "2",
                                        className: "text-xs",
                                        title: "Half cells",
                                        children: "½"
                                    }),
                                    v.jsx(at, {
                                        value: "4",
                                        className: "text-xs",
                                        title: "Quarter cells",
                                        children: "¼"
                                    }),
                                    v.jsx(at, {
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
                                    v.jsx(V, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>t.current?.click(),
                                        title: "Upload an image (transparent PNG works best)",
                                        children: "Upload"
                                    }),
                                    v.jsx(V, {
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
                                        onChange: (L)=>o(L.target.checked)
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
                                onChange: (L)=>{
                                    const ce = L.target.files?.[0];
                                    ce && l(ce), L.target.value = "";
                                }
                            })
                        ]
                    }),
                    c === "text" && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Text size"
                            }),
                            v.jsx(Do, {
                                type: "single",
                                value: String(f),
                                onValueChange: (L)=>L && p(Number(L)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: zf.map((L)=>v.jsxs(at, {
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
                    k.some((L)=>L.type === "text") && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Text align (drag the box to resize)"
                            }),
                            v.jsxs("div", {
                                className: "flex gap-1 mb-1",
                                children: [
                                    v.jsx(V, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>_(0, null),
                                        children: "Left"
                                    }),
                                    v.jsx(V, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>_(1, null),
                                        children: "Center"
                                    }),
                                    v.jsx(V, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>_(2, null),
                                        children: "Right"
                                    })
                                ]
                            }),
                            v.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    v.jsx(V, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>_(null, 0),
                                        children: "Top"
                                    }),
                                    v.jsx(V, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>_(null, 1),
                                        children: "Middle"
                                    }),
                                    v.jsx(V, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "text-xs flex-1",
                                        onClick: ()=>_(null, 2),
                                        children: "Bottom"
                                    })
                                ]
                            })
                        ]
                    }),
                    c === "line" && v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Line width"
                            }),
                            v.jsx(Do, {
                                type: "single",
                                value: String(m),
                                onValueChange: (L)=>L && S(Number(L)),
                                variant: "outline",
                                className: "flex-wrap",
                                children: Rf.map((L)=>v.jsxs(at, {
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
                    v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Color"
                            }),
                            v.jsx(fc, {
                                activeIdx: w,
                                onPick: g,
                                titleFor: (L, ce)=>`${L + 1}: ${ce}`
                            })
                        ]
                    }),
                    v.jsxs("div", {
                        children: [
                            v.jsx("label", {
                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                children: "Outline (rects)"
                            }),
                            v.jsx(fc, {
                                activeIdx: y,
                                onPick: x,
                                titleFor: (L, ce)=>L === 6 ? "No outline" : ce
                            })
                        ]
                    }),
                    v.jsxs("div", {
                        className: "flex gap-1",
                        children: [
                            v.jsx(V, {
                                variant: "outline",
                                onClick: D,
                                disabled: e || !ye(),
                                size: "sm",
                                className: "flex-1",
                                title: "Undo (Ctrl/Cmd+Z)",
                                children: v.jsx(_v, {
                                    className: "w-4 h-4"
                                })
                            }),
                            v.jsx(V, {
                                variant: "outline",
                                onClick: te,
                                disabled: e || !Te(),
                                size: "sm",
                                className: "flex-1",
                                title: "Redo (Ctrl/Cmd+Shift+Z)",
                                children: v.jsx(Sv, {
                                    className: "w-4 h-4"
                                })
                            })
                        ]
                    }),
                    v.jsx(V, {
                        variant: "outline",
                        onClick: u,
                        size: "sm",
                        className: "w-full",
                        children: "Gallery"
                    }),
                    i && v.jsxs(V, {
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
                    v.jsx(V, {
                        variant: "destructive",
                        onClick: O,
                        disabled: e,
                        size: "sm",
                        className: "w-full",
                        children: "Clear Grid"
                    }),
                    v.jsx(V, {
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
    function Nv() {
        const { selectedItems: e, getSelectedCells: t, jsonOutput: n, tensorOutput: r, importJson: o, importTensor: l } = Q(), i = t();
        return v.jsx(gr, {
            title: "Selection Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: Ln + 20
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
    function Iv({ loading: e, trainStatus: t, modelStatus: n, training: r, saveTrainingExample: o, startTraining: l, predictFromSelection: i, onViewTrainingData: s }) {
        const { selectedItems: a, captureMode: u, captureInput: d, startTrainingCapture: c, captureSetInput: h, cancelTrainingCapture: w } = Q();
        return v.jsx(gr, {
            title: "Training Data",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: Ln + 360
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
                            v.jsx(V, {
                                size: "sm",
                                className: "w-full",
                                onClick: c,
                                disabled: e,
                                children: "Make Training Data"
                            }),
                            v.jsx(V, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: i,
                                disabled: e || a.length === 0 || n !== "ready",
                                title: n !== "ready" ? "Train a model first" : "Map the selection through the model",
                                children: "Predict from Selection"
                            }),
                            v.jsx(V, {
                                size: "sm",
                                variant: "outline",
                                className: "w-full",
                                onClick: l,
                                disabled: e || r?.status === "running",
                                children: r?.status === "running" ? "Training…" : "Start Training Run"
                            }),
                            v.jsx(V, {
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
                                    v.jsx(V, {
                                        size: "sm",
                                        className: "flex-1",
                                        onClick: h,
                                        disabled: a.length === 0,
                                        children: "Next →"
                                    }),
                                    v.jsx(V, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "flex-1",
                                        onClick: w,
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
                                    v.jsx(V, {
                                        size: "sm",
                                        className: "flex-1",
                                        onClick: o,
                                        disabled: a.length === 0,
                                        children: "Save Example"
                                    }),
                                    v.jsx(V, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "flex-1",
                                        onClick: w,
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
    function zv({ training: e }) {
        const t = e.total > 0 ? Math.min(100, Math.round(e.epoch / e.total * 100)) : e.status === "done" ? 100 : 0, n = e.status === "error" ? "bg-red-500" : e.status === "done" ? "bg-green-500" : "bg-blue-500";
        return v.jsx(gr, {
            title: "Training",
            defaultPosition: {
                x: Math.max(20, window.innerWidth - 340),
                y: Ln + 540
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
                            className: Mn("h-full", n),
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
    function Rv() {
        const [e, t] = C.useState(()=>ac()), n = C.useRef(null), { grid: r, loading: o, error: l } = Xg(n, e.w, e.h), i = Q((_)=>_.currentName), s = Q((_)=>_.saveState), { cam: a, camRef: u, applyCamera: d, resetView: c, spaceHeld: h, isSpaceDown: w, panRef: g } = tv(r, n), { handleMouseDown: y, handleMouseMove: x, handleMouseUp: f, handleMouseLeave: p } = nv({
            grid: r,
            camRef: u,
            applyCamera: d,
            isSpaceDown: w,
            panRef: g
        });
        rv();
        const m = iv(u, e), S = mv(r);
        return C.useEffect(()=>{
            const _ = ()=>{
                const T = ac();
                if (t(T), !r) return;
                r.set_viewport(T.w, T.h);
                const z = Q.getState();
                z.selectedItems.length > 0 && z.renderSelection();
            };
            return window.addEventListener("resize", _), ()=>window.removeEventListener("resize", _);
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
                                        v.jsx(V, {
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
                    className: Mn("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: Ln,
                        cursor: o ? "wait" : h ? "grab" : "crosshair"
                    },
                    onMouseDown: y,
                    onMouseMove: x,
                    onMouseUp: f,
                    onMouseLeave: p
                }),
                v.jsx(Tv, {
                    loading: o,
                    imageInputRef: m.imageInputRef,
                    imgStatus: m.imgStatus,
                    removeBg: m.removeBg,
                    setRemoveBg: m.setRemoveBg,
                    addImageObject: m.addImageObject,
                    editingExample: S.editingExample,
                    saveExampleUpdate: S.saveExampleUpdate,
                    newDrawing: S.newDrawing,
                    onOpenGallery: ()=>S.setGalleryOpen(!0)
                }),
                v.jsx(Nv, {}),
                v.jsx(Iv, {
                    loading: o,
                    trainStatus: S.trainStatus,
                    modelStatus: S.modelStatus,
                    training: S.training,
                    saveTrainingExample: S.saveTrainingExample,
                    startTraining: S.startTraining,
                    predictFromSelection: S.predictFromSelection,
                    onViewTrainingData: ()=>S.setTrainingOpen(!0)
                }),
                S.training && v.jsx(zv, {
                    training: S.training
                }),
                S.galleryOpen && v.jsx(Np, {
                    asModal: !0,
                    onClose: ()=>S.setGalleryOpen(!1),
                    onOpenDesign: S.openDrawing
                }),
                S.trainingOpen && v.jsx(Ip, {
                    asModal: !0,
                    onClose: ()=>S.setTrainingOpen(!1),
                    onEditExample: S.editExampleHalf
                })
            ]
        });
    }
    function jv({ onSuccess: e }) {
        const [t, n] = C.useState(""), [r, o] = C.useState(""), [l, i] = C.useState(null), [s, a] = C.useState(!1), u = async (d)=>{
            d.preventDefault(), a(!0), i(null);
            try {
                await jy(t, r), e();
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
                    v.jsx(V, {
                        type: "submit",
                        disabled: s || !t || !r,
                        children: s ? "Signing in…" : "Sign in"
                    })
                ]
            })
        });
    }
    function Pv() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function Mv() {
        const e = Pv(), [t, n] = C.useState(()=>Sp() !== null);
        return C.useEffect(()=>{
            const r = ()=>n(!1);
            return window.addEventListener(vs, r), ()=>window.removeEventListener(vs, r);
        }, []), t ? v.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? v.jsx(Np, {}) : e === "training" ? v.jsx(Ip, {}) : v.jsx(Rv, {})
        }) : v.jsx(jv, {
            onSuccess: ()=>n(!0)
        });
    }
    const pc = document.getElementById("grid-draw-root");
    pc && vi.createRoot(pc).render(v.jsx(oe.StrictMode, {
        children: v.jsx(Mv, {})
    }));
})();
export { Lv as a, bv as c, Fp as g, __tla };
