let E0, C0, uh;
let __tla = (async ()=>{
    function ah(e, t) {
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
    C0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    uh = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    E0 = function(e) {
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
    var Sd = {
        exports: {}
    }, Vl = {}, _d = {
        exports: {}
    }, H = {};
    var wo = Symbol.for("react.element"), ch = Symbol.for("react.portal"), dh = Symbol.for("react.fragment"), fh = Symbol.for("react.strict_mode"), ph = Symbol.for("react.profiler"), mh = Symbol.for("react.provider"), hh = Symbol.for("react.context"), gh = Symbol.for("react.forward_ref"), xh = Symbol.for("react.suspense"), yh = Symbol.for("react.memo"), vh = Symbol.for("react.lazy"), Ru = Symbol.iterator;
    function wh(e) {
        return e === null || typeof e != "object" ? null : (e = Ru && e[Ru] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Cd = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, Ed = Object.assign, Nd = {};
    function wr(e, t, n) {
        this.props = e, this.context = t, this.refs = Nd, this.updater = n || Cd;
    }
    wr.prototype.isReactComponent = {};
    wr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    wr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Td() {}
    Td.prototype = wr.prototype;
    function Bs(e, t, n) {
        this.props = e, this.context = t, this.refs = Nd, this.updater = n || Cd;
    }
    var Vs = Bs.prototype = new Td;
    Vs.constructor = Bs;
    Ed(Vs, wr.prototype);
    Vs.isPureReactComponent = !0;
    var ju = Array.isArray, Id = Object.prototype.hasOwnProperty, Ws = {
        current: null
    }, zd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Rd(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)Id.call(t, r) && !zd.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: wo,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Ws.current
        };
    }
    function kh(e, t) {
        return {
            $$typeof: wo,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Gs(e) {
        return typeof e == "object" && e !== null && e.$$typeof === wo;
    }
    function Sh(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Pu = /\/+/g;
    function hi(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Sh("" + e.key) : t.toString(36);
    }
    function tl(e, t, n, r, o) {
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
                    case wo:
                    case ch:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + hi(i, 0) : r, ju(o) ? (n = "", e != null && (n = e.replace(Pu, "$&/") + "/"), tl(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Gs(o) && (o = kh(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Pu, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", ju(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + hi(l, s);
            i += tl(l, t, n, a, o);
        }
        else if (a = wh(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + hi(l, s++), i += tl(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function bo(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return tl(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function _h(e) {
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
    }, nl = {
        transition: null
    }, Ch = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: nl,
        ReactCurrentOwner: Ws
    };
    function jd() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    H.Children = {
        map: bo,
        forEach: function(e, t, n) {
            bo(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return bo(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return bo(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Gs(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    H.Component = wr;
    H.Fragment = dh;
    H.Profiler = ph;
    H.PureComponent = Bs;
    H.StrictMode = fh;
    H.Suspense = xh;
    H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ch;
    H.act = jd;
    H.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = Ed({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Ws.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)Id.call(t, a) && !zd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: wo,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    H.createContext = function(e) {
        return e = {
            $$typeof: hh,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: mh,
            _context: e
        }, e.Consumer = e;
    };
    H.createElement = Rd;
    H.createFactory = function(e) {
        var t = Rd.bind(null, e);
        return t.type = e, t;
    };
    H.createRef = function() {
        return {
            current: null
        };
    };
    H.forwardRef = function(e) {
        return {
            $$typeof: gh,
            render: e
        };
    };
    H.isValidElement = Gs;
    H.lazy = function(e) {
        return {
            $$typeof: vh,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: _h
        };
    };
    H.memo = function(e, t) {
        return {
            $$typeof: yh,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    H.startTransition = function(e) {
        var t = nl.transition;
        nl.transition = {};
        try {
            e();
        } finally{
            nl.transition = t;
        }
    };
    H.unstable_act = jd;
    H.useCallback = function(e, t) {
        return be.current.useCallback(e, t);
    };
    H.useContext = function(e) {
        return be.current.useContext(e);
    };
    H.useDebugValue = function() {};
    H.useDeferredValue = function(e) {
        return be.current.useDeferredValue(e);
    };
    H.useEffect = function(e, t) {
        return be.current.useEffect(e, t);
    };
    H.useId = function() {
        return be.current.useId();
    };
    H.useImperativeHandle = function(e, t, n) {
        return be.current.useImperativeHandle(e, t, n);
    };
    H.useInsertionEffect = function(e, t) {
        return be.current.useInsertionEffect(e, t);
    };
    H.useLayoutEffect = function(e, t) {
        return be.current.useLayoutEffect(e, t);
    };
    H.useMemo = function(e, t) {
        return be.current.useMemo(e, t);
    };
    H.useReducer = function(e, t, n) {
        return be.current.useReducer(e, t, n);
    };
    H.useRef = function(e) {
        return be.current.useRef(e);
    };
    H.useState = function(e) {
        return be.current.useState(e);
    };
    H.useSyncExternalStore = function(e, t, n) {
        return be.current.useSyncExternalStore(e, t, n);
    };
    H.useTransition = function() {
        return be.current.useTransition();
    };
    H.version = "18.3.1";
    _d.exports = H;
    var N = _d.exports;
    const oe = uh(N), Pd = ah({
        __proto__: null,
        default: oe
    }, [
        N
    ]);
    var Eh = N, Nh = Symbol.for("react.element"), Th = Symbol.for("react.fragment"), Ih = Object.prototype.hasOwnProperty, zh = Eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Rh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Md(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Ih.call(t, r) && !Rh.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: Nh,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: zh.current
        };
    }
    Vl.Fragment = Th;
    Vl.jsx = Md;
    Vl.jsxs = Md;
    Sd.exports = Vl;
    var p = Sd.exports, Vi = {}, Ld = {
        exports: {}
    }, Xe = {}, bd = {
        exports: {}
    }, Od = {};
    (function(e) {
        function t(M, F) {
            var z = M.length;
            M.push(F);
            e: for(; 0 < z;){
                var D = z - 1 >>> 1, re = M[D];
                if (0 < o(re, F)) M[D] = F, M[z] = re, z = D;
                else break e;
            }
        }
        function n(M) {
            return M.length === 0 ? null : M[0];
        }
        function r(M) {
            if (M.length === 0) return null;
            var F = M[0], z = M.pop();
            if (z !== F) {
                M[0] = z;
                e: for(var D = 0, re = M.length, yt = re >>> 1; D < yt;){
                    var Ae = 2 * (D + 1) - 1, ce = M[Ae], Z = Ae + 1, qe = M[Z];
                    if (0 > o(ce, z)) Z < re && 0 > o(qe, ce) ? (M[D] = qe, M[Z] = z, D = Z) : (M[D] = ce, M[Ae] = z, D = Ae);
                    else if (Z < re && 0 > o(qe, z)) M[D] = qe, M[Z] = z, D = Z;
                    else break e;
                }
            }
            return F;
        }
        function o(M, F) {
            var z = M.sortIndex - F.sortIndex;
            return z !== 0 ? z : M.id - F.id;
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
        var a = [], u = [], c = 1, d = null, f = 3, y = !1, w = !1, g = !1, x = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function v(M) {
            for(var F = n(u); F !== null;){
                if (F.callback === null) r(u);
                else if (F.startTime <= M) r(u), F.sortIndex = F.expirationTime, t(a, F);
                else break;
                F = n(u);
            }
        }
        function S(M) {
            if (g = !1, v(M), !w) if (n(a) !== null) w = !0, X(C);
            else {
                var F = n(u);
                F !== null && De(S, F.startTime - M);
            }
        }
        function C(M, F) {
            w = !1, g && (g = !1, m(E), E = -1), y = !0;
            var z = f;
            try {
                for(v(F), d = n(a); d !== null && (!(d.expirationTime > F) || M && !ge());){
                    var D = d.callback;
                    if (typeof D == "function") {
                        d.callback = null, f = d.priorityLevel;
                        var re = D(d.expirationTime <= F);
                        F = e.unstable_now(), typeof re == "function" ? d.callback = re : d === n(a) && r(a), v(F);
                    } else r(a);
                    d = n(a);
                }
                if (d !== null) var yt = !0;
                else {
                    var Ae = n(u);
                    Ae !== null && De(S, Ae.startTime - F), yt = !1;
                }
                return yt;
            } finally{
                d = null, f = z, y = !1;
            }
        }
        var R = !1, j = null, E = -1, V = 5, U = -1;
        function ge() {
            return !(e.unstable_now() - U < V);
        }
        function ve() {
            if (j !== null) {
                var M = e.unstable_now();
                U = M;
                var F = !0;
                try {
                    F = j(!0, M);
                } finally{
                    F ? Ge() : (R = !1, j = null);
                }
            } else R = !1;
        }
        var Ge;
        if (typeof h == "function") Ge = function() {
            h(ve);
        };
        else if (typeof MessageChannel < "u") {
            var xt = new MessageChannel, Je = xt.port2;
            xt.port1.onmessage = ve, Ge = function() {
                Je.postMessage(null);
            };
        } else Ge = function() {
            x(ve, 0);
        };
        function X(M) {
            j = M, R || (R = !0, Ge());
        }
        function De(M, F) {
            E = x(function() {
                M(e.unstable_now());
            }, F);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
            M.callback = null;
        }, e.unstable_continueExecution = function() {
            w || y || (w = !0, X(C));
        }, e.unstable_forceFrameRate = function(M) {
            0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < M ? Math.floor(1e3 / M) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(M) {
            switch(f){
                case 1:
                case 2:
                case 3:
                    var F = 3;
                    break;
                default:
                    F = f;
            }
            var z = f;
            f = F;
            try {
                return M();
            } finally{
                f = z;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(M, F) {
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
            var z = f;
            f = M;
            try {
                return F();
            } finally{
                f = z;
            }
        }, e.unstable_scheduleCallback = function(M, F, z) {
            var D = e.unstable_now();
            switch(typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? D + z : D) : z = D, M){
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
            return re = z + re, M = {
                id: c++,
                callback: F,
                priorityLevel: M,
                startTime: z,
                expirationTime: re,
                sortIndex: -1
            }, z > D ? (M.sortIndex = z, t(u, M), n(a) === null && M === n(u) && (g ? (m(E), E = -1) : g = !0, De(S, z - D))) : (M.sortIndex = re, t(a, M), w || y || (w = !0, X(C))), M;
        }, e.unstable_shouldYield = ge, e.unstable_wrapCallback = function(M) {
            var F = f;
            return function() {
                var z = f;
                f = F;
                try {
                    return M.apply(this, arguments);
                } finally{
                    f = z;
                }
            };
        };
    })(Od);
    bd.exports = Od;
    var jh = bd.exports;
    var Ph = N, Ye = jh;
    function I(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Dd = new Set, eo = {};
    function An(e, t) {
        dr(e, t), dr(e + "Capture", t);
    }
    function dr(e, t) {
        for(eo[e] = t, e = 0; e < t.length; e++)Dd.add(t[e]);
    }
    var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wi = Object.prototype.hasOwnProperty, Mh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Mu = {}, Lu = {};
    function Lh(e) {
        return Wi.call(Lu, e) ? !0 : Wi.call(Mu, e) ? !1 : Mh.test(e) ? Lu[e] = !0 : (Mu[e] = !0, !1);
    }
    function bh(e, t, n, r) {
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
    function Oh(e, t, n, r) {
        if (t === null || typeof t > "u" || bh(e, t, n, r)) return !0;
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
    var Ie = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Ie[e] = new Oe(e, 0, !1, e, null, !1, !1);
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
        Ie[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Ie[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Hs = /[\-:]([a-z])/g;
    function Ks(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Hs, Ks);
        Ie[t] = new Oe(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Hs, Ks);
        Ie[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Hs, Ks);
        Ie[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Ie.xlinkHref = new Oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        Ie[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Qs(e, t, n, r) {
        var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Oh(t, n, o, r) && (n = null), r || o === null ? Lh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var $t = Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oo = Symbol.for("react.element"), Hn = Symbol.for("react.portal"), Kn = Symbol.for("react.fragment"), Ys = Symbol.for("react.strict_mode"), Gi = Symbol.for("react.profiler"), Ad = Symbol.for("react.provider"), Fd = Symbol.for("react.context"), Xs = Symbol.for("react.forward_ref"), Hi = Symbol.for("react.suspense"), Ki = Symbol.for("react.suspense_list"), Zs = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), $d = Symbol.for("react.offscreen"), bu = Symbol.iterator;
    function Ir(e) {
        return e === null || typeof e != "object" ? null : (e = bu && e[bu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ue = Object.assign, gi;
    function Fr(e) {
        if (gi === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            gi = t && t[1] || "";
        }
        return `
` + gi + e;
    }
    var xi = !1;
    function yi(e, t) {
        if (!e || xi) return "";
        xi = !0;
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
            xi = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? Fr(e) : "";
    }
    function Dh(e) {
        switch(e.tag){
            case 5:
                return Fr(e.type);
            case 16:
                return Fr("Lazy");
            case 13:
                return Fr("Suspense");
            case 19:
                return Fr("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = yi(e.type, !1), e;
            case 11:
                return e = yi(e.type.render, !1), e;
            case 1:
                return e = yi(e.type, !0), e;
            default:
                return "";
        }
    }
    function Qi(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Kn:
                return "Fragment";
            case Hn:
                return "Portal";
            case Gi:
                return "Profiler";
            case Ys:
                return "StrictMode";
            case Hi:
                return "Suspense";
            case Ki:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Fd:
                return (e.displayName || "Context") + ".Consumer";
            case Ad:
                return (e._context.displayName || "Context") + ".Provider";
            case Xs:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Zs:
                return t = e.displayName || null, t !== null ? t : Qi(e.type) || "Memo";
            case Kt:
                t = e._payload, e = e._init;
                try {
                    return Qi(e(t));
                } catch  {}
        }
        return null;
    }
    function Ah(e) {
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
                return Qi(t);
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
    function un(e) {
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
    function Ud(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Fh(e) {
        var t = Ud(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Do(e) {
        e._valueTracker || (e._valueTracker = Fh(e));
    }
    function Bd(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Ud(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function gl(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Yi(e, t) {
        var n = t.checked;
        return ue({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Ou(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = un(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Vd(e, t) {
        t = t.checked, t != null && Qs(e, "checked", t, !1);
    }
    function Xi(e, t) {
        Vd(e, t);
        var n = un(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Zi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zi(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Du(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Zi(e, t, n) {
        (t !== "number" || gl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var $r = Array.isArray;
    function lr(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + un(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Ji(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
        return ue({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Au(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(I(92));
                if ($r(n)) {
                    if (1 < n.length) throw Error(I(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: un(n)
        };
    }
    function Wd(e, t) {
        var n = un(t.value), r = un(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Fu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Gd(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function qi(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Gd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Ao, Hd = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Ao = Ao || document.createElement("div"), Ao.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ao.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function to(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Wr = {
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
    }, $h = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Wr).forEach(function(e) {
        $h.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Wr[t] = Wr[e];
        });
    });
    function Kd(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wr.hasOwnProperty(e) && Wr[e] ? ("" + t).trim() : t + "px";
    }
    function Qd(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Kd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Uh = ue({
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
    function es(e, t) {
        if (t) {
            if (Uh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(I(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(I(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(I(62));
        }
    }
    function ts(e, t) {
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
    var ns = null;
    function Js(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var rs = null, ir = null, sr = null;
    function $u(e) {
        if (e = _o(e)) {
            if (typeof rs != "function") throw Error(I(280));
            var t = e.stateNode;
            t && (t = Ql(t), rs(e.stateNode, e.type, t));
        }
    }
    function Yd(e) {
        ir ? sr ? sr.push(e) : sr = [
            e
        ] : ir = e;
    }
    function Xd() {
        if (ir) {
            var e = ir, t = sr;
            if (sr = ir = null, $u(e), t) for(e = 0; e < t.length; e++)$u(t[e]);
        }
    }
    function Zd(e, t) {
        return e(t);
    }
    function Jd() {}
    var vi = !1;
    function qd(e, t, n) {
        if (vi) return e(t, n);
        vi = !0;
        try {
            return Zd(e, t, n);
        } finally{
            vi = !1, (ir !== null || sr !== null) && (Jd(), Xd());
        }
    }
    function no(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Ql(n);
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
    var os = !1;
    if (Ot) try {
        var zr = {};
        Object.defineProperty(zr, "passive", {
            get: function() {
                os = !0;
            }
        }), window.addEventListener("test", zr, zr), window.removeEventListener("test", zr, zr);
    } catch  {
        os = !1;
    }
    function Bh(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (c) {
            this.onError(c);
        }
    }
    var Gr = !1, xl = null, yl = !1, ls = null, Vh = {
        onError: function(e) {
            Gr = !0, xl = e;
        }
    };
    function Wh(e, t, n, r, o, l, i, s, a) {
        Gr = !1, xl = null, Bh.apply(Vh, arguments);
    }
    function Gh(e, t, n, r, o, l, i, s, a) {
        if (Wh.apply(this, arguments), Gr) {
            if (Gr) {
                var u = xl;
                Gr = !1, xl = null;
            } else throw Error(I(198));
            yl || (yl = !0, ls = u);
        }
    }
    function Fn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function ef(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Uu(e) {
        if (Fn(e) !== e) throw Error(I(188));
    }
    function Hh(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Fn(e), t === null) throw Error(I(188));
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
                    if (l === n) return Uu(o), e;
                    if (l === r) return Uu(o), t;
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
    function tf(e) {
        return e = Hh(e), e !== null ? nf(e) : null;
    }
    function nf(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = nf(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var rf = Ye.unstable_scheduleCallback, Bu = Ye.unstable_cancelCallback, Kh = Ye.unstable_shouldYield, Qh = Ye.unstable_requestPaint, he = Ye.unstable_now, Yh = Ye.unstable_getCurrentPriorityLevel, qs = Ye.unstable_ImmediatePriority, of = Ye.unstable_UserBlockingPriority, vl = Ye.unstable_NormalPriority, Xh = Ye.unstable_LowPriority, lf = Ye.unstable_IdlePriority, Wl = null, _t = null;
    function Zh(e) {
        if (_t && typeof _t.onCommitFiberRoot == "function") try {
            _t.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var mt = Math.clz32 ? Math.clz32 : eg, Jh = Math.log, qh = Math.LN2;
    function eg(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Jh(e) / qh | 0) | 0;
    }
    var Fo = 64, $o = 4194304;
    function Ur(e) {
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
    function wl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = Ur(s) : (l &= i, l !== 0 && (r = Ur(l)));
        } else i = n & ~o, i !== 0 ? r = Ur(i) : l !== 0 && (r = Ur(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - mt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function tg(e, t) {
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
    function ng(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - mt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = tg(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function is(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function sf() {
        var e = Fo;
        return Fo <<= 1, !(Fo & 4194240) && (Fo = 64), e;
    }
    function wi(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function ko(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - mt(t), e[t] = n;
    }
    function rg(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - mt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function ea(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - mt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Y = 0;
    function af(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var uf, ta, cf, df, ff, ss = !1, Uo = [], en = null, tn = null, nn = null, ro = new Map, oo = new Map, Yt = [], og = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Vu(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                en = null;
                break;
            case "dragenter":
            case "dragleave":
                tn = null;
                break;
            case "mouseover":
            case "mouseout":
                nn = null;
                break;
            case "pointerover":
            case "pointerout":
                ro.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                oo.delete(t.pointerId);
        }
    }
    function Rr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = _o(t), t !== null && ta(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function lg(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return en = Rr(en, e, t, n, r, o), !0;
            case "dragenter":
                return tn = Rr(tn, e, t, n, r, o), !0;
            case "mouseover":
                return nn = Rr(nn, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return ro.set(l, Rr(ro.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, oo.set(l, Rr(oo.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function pf(e) {
        var t = Tn(e.target);
        if (t !== null) {
            var n = Fn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = ef(n), t !== null) {
                        e.blockedOn = t, ff(e.priority, function() {
                            cf(n);
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
    function rl(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = as(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                ns = r, n.target.dispatchEvent(r), ns = null;
            } else return t = _o(n), t !== null && ta(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Wu(e, t, n) {
        rl(e) && n.delete(t);
    }
    function ig() {
        ss = !1, en !== null && rl(en) && (en = null), tn !== null && rl(tn) && (tn = null), nn !== null && rl(nn) && (nn = null), ro.forEach(Wu), oo.forEach(Wu);
    }
    function jr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, ss || (ss = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, ig)));
    }
    function lo(e) {
        function t(o) {
            return jr(o, e);
        }
        if (0 < Uo.length) {
            jr(Uo[0], e);
            for(var n = 1; n < Uo.length; n++){
                var r = Uo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(en !== null && jr(en, e), tn !== null && jr(tn, e), nn !== null && jr(nn, e), ro.forEach(t), oo.forEach(t), n = 0; n < Yt.length; n++)r = Yt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Yt.length && (n = Yt[0], n.blockedOn === null);)pf(n), n.blockedOn === null && Yt.shift();
    }
    var ar = $t.ReactCurrentBatchConfig, kl = !0;
    function sg(e, t, n, r) {
        var o = Y, l = ar.transition;
        ar.transition = null;
        try {
            Y = 1, na(e, t, n, r);
        } finally{
            Y = o, ar.transition = l;
        }
    }
    function ag(e, t, n, r) {
        var o = Y, l = ar.transition;
        ar.transition = null;
        try {
            Y = 4, na(e, t, n, r);
        } finally{
            Y = o, ar.transition = l;
        }
    }
    function na(e, t, n, r) {
        if (kl) {
            var o = as(e, t, n, r);
            if (o === null) Ri(e, t, r, Sl, n), Vu(e, r);
            else if (lg(o, e, t, n, r)) r.stopPropagation();
            else if (Vu(e, r), t & 4 && -1 < og.indexOf(e)) {
                for(; o !== null;){
                    var l = _o(o);
                    if (l !== null && uf(l), l = as(e, t, n, r), l === null && Ri(e, t, r, Sl, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Ri(e, t, r, null, n);
        }
    }
    var Sl = null;
    function as(e, t, n, r) {
        if (Sl = null, e = Js(r), e = Tn(e), e !== null) if (t = Fn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = ef(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return Sl = e, null;
    }
    function mf(e) {
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
                switch(Yh()){
                    case qs:
                        return 1;
                    case of:
                        return 4;
                    case vl:
                    case Xh:
                        return 16;
                    case lf:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Zt = null, ra = null, ol = null;
    function hf() {
        if (ol) return ol;
        var e, t = ra, n = t.length, r, o = "value" in Zt ? Zt.value : Zt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return ol = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function ll(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Bo() {
        return !0;
    }
    function Gu() {
        return !1;
    }
    function Ze(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Bo : Gu, this.isPropagationStopped = Gu, this;
        }
        return ue(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Bo);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Bo);
            },
            persist: function() {},
            isPersistent: Bo
        }), t;
    }
    var kr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, oa = Ze(kr), So = ue({}, kr, {
        view: 0,
        detail: 0
    }), ug = Ze(So), ki, Si, Pr, Gl = ue({}, So, {
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
            return "movementX" in e ? e.movementX : (e !== Pr && (Pr && e.type === "mousemove" ? (ki = e.screenX - Pr.screenX, Si = e.screenY - Pr.screenY) : Si = ki = 0, Pr = e), ki);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Si;
        }
    }), Hu = Ze(Gl), cg = ue({}, Gl, {
        dataTransfer: 0
    }), dg = Ze(cg), fg = ue({}, So, {
        relatedTarget: 0
    }), _i = Ze(fg), pg = ue({}, kr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), mg = Ze(pg), hg = ue({}, kr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), gg = Ze(hg), xg = ue({}, kr, {
        data: 0
    }), Ku = Ze(xg), yg = {
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
    }, vg = {
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
    }, wg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function kg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = wg[e]) ? !!t[e] : !1;
    }
    function la() {
        return kg;
    }
    var Sg = ue({}, So, {
        key: function(e) {
            if (e.key) {
                var t = yg[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = ll(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vg[e.keyCode] || "Unidentified" : "";
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
            return e.type === "keypress" ? ll(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? ll(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), _g = Ze(Sg), Cg = ue({}, Gl, {
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
    }), Qu = Ze(Cg), Eg = ue({}, So, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: la
    }), Ng = Ze(Eg), Tg = ue({}, kr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Ig = Ze(Tg), zg = ue({}, Gl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Rg = Ze(zg), jg = [
        9,
        13,
        27,
        32
    ], ia = Ot && "CompositionEvent" in window, Hr = null;
    Ot && "documentMode" in document && (Hr = document.documentMode);
    var Pg = Ot && "TextEvent" in window && !Hr, gf = Ot && (!ia || Hr && 8 < Hr && 11 >= Hr), Yu = " ", Xu = !1;
    function xf(e, t) {
        switch(e){
            case "keyup":
                return jg.indexOf(t.keyCode) !== -1;
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
    function yf(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Qn = !1;
    function Mg(e, t) {
        switch(e){
            case "compositionend":
                return yf(t);
            case "keypress":
                return t.which !== 32 ? null : (Xu = !0, Yu);
            case "textInput":
                return e = t.data, e === Yu && Xu ? null : e;
            default:
                return null;
        }
    }
    function Lg(e, t) {
        if (Qn) return e === "compositionend" || !ia && xf(e, t) ? (e = hf(), ol = ra = Zt = null, Qn = !1, e) : null;
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
                return gf && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var bg = {
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
    function Zu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!bg[e.type] : t === "textarea";
    }
    function vf(e, t, n, r) {
        Yd(r), t = _l(t, "onChange"), 0 < t.length && (n = new oa("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Kr = null, io = null;
    function Og(e) {
        Rf(e, 0);
    }
    function Hl(e) {
        var t = Zn(e);
        if (Bd(t)) return e;
    }
    function Dg(e, t) {
        if (e === "change") return t;
    }
    var wf = !1;
    if (Ot) {
        var Ci;
        if (Ot) {
            var Ei = "oninput" in document;
            if (!Ei) {
                var Ju = document.createElement("div");
                Ju.setAttribute("oninput", "return;"), Ei = typeof Ju.oninput == "function";
            }
            Ci = Ei;
        } else Ci = !1;
        wf = Ci && (!document.documentMode || 9 < document.documentMode);
    }
    function qu() {
        Kr && (Kr.detachEvent("onpropertychange", kf), io = Kr = null);
    }
    function kf(e) {
        if (e.propertyName === "value" && Hl(io)) {
            var t = [];
            vf(t, io, e, Js(e)), qd(Og, t);
        }
    }
    function Ag(e, t, n) {
        e === "focusin" ? (qu(), Kr = t, io = n, Kr.attachEvent("onpropertychange", kf)) : e === "focusout" && qu();
    }
    function Fg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hl(io);
    }
    function $g(e, t) {
        if (e === "click") return Hl(t);
    }
    function Ug(e, t) {
        if (e === "input" || e === "change") return Hl(t);
    }
    function Bg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var gt = typeof Object.is == "function" ? Object.is : Bg;
    function so(e, t) {
        if (gt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Wi.call(t, o) || !gt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function ec(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function tc(e, t) {
        var n = ec(e);
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
            n = ec(n);
        }
    }
    function Sf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Sf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function _f() {
        for(var e = window, t = gl(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = gl(e.document);
        }
        return t;
    }
    function sa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Vg(e) {
        var t = _f(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && Sf(n.ownerDocument.documentElement, n)) {
            if (r !== null && sa(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = tc(n, l);
                    var i = tc(n, r);
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
    var Wg = Ot && "documentMode" in document && 11 >= document.documentMode, Yn = null, us = null, Qr = null, cs = !1;
    function nc(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        cs || Yn == null || Yn !== gl(r) || (r = Yn, "selectionStart" in r && sa(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Qr && so(Qr, r) || (Qr = r, r = _l(us, "onSelect"), 0 < r.length && (t = new oa("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Yn)));
    }
    function Vo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Xn = {
        animationend: Vo("Animation", "AnimationEnd"),
        animationiteration: Vo("Animation", "AnimationIteration"),
        animationstart: Vo("Animation", "AnimationStart"),
        transitionend: Vo("Transition", "TransitionEnd")
    }, Ni = {}, Cf = {};
    Ot && (Cf = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);
    function Kl(e) {
        if (Ni[e]) return Ni[e];
        if (!Xn[e]) return e;
        var t = Xn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in Cf) return Ni[e] = t[n];
        return e;
    }
    var Ef = Kl("animationend"), Nf = Kl("animationiteration"), Tf = Kl("animationstart"), If = Kl("transitionend"), zf = new Map, rc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function dn(e, t) {
        zf.set(e, t), An(t, [
            e
        ]);
    }
    for(var Ti = 0; Ti < rc.length; Ti++){
        var Ii = rc[Ti], Gg = Ii.toLowerCase(), Hg = Ii[0].toUpperCase() + Ii.slice(1);
        dn(Gg, "on" + Hg);
    }
    dn(Ef, "onAnimationEnd");
    dn(Nf, "onAnimationIteration");
    dn(Tf, "onAnimationStart");
    dn("dblclick", "onDoubleClick");
    dn("focusin", "onFocus");
    dn("focusout", "onBlur");
    dn(If, "onTransitionEnd");
    dr("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    dr("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    dr("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    dr("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    An("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    An("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    An("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    An("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    An("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    An("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));
    function oc(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Gh(r, t, void 0, e), e.currentTarget = null;
    }
    function Rf(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    oc(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    oc(o, s, u), l = a;
                }
            }
        }
        if (yl) throw e = ls, yl = !1, ls = null, e;
    }
    function te(e, t) {
        var n = t[hs];
        n === void 0 && (n = t[hs] = new Set);
        var r = e + "__bubble";
        n.has(r) || (jf(t, e, 2, !1), n.add(r));
    }
    function zi(e, t, n) {
        var r = 0;
        t && (r |= 4), jf(n, e, r, t);
    }
    var Wo = "_reactListening" + Math.random().toString(36).slice(2);
    function ao(e) {
        if (!e[Wo]) {
            e[Wo] = !0, Dd.forEach(function(n) {
                n !== "selectionchange" && (Kg.has(n) || zi(n, !1, e), zi(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Wo] || (t[Wo] = !0, zi("selectionchange", !1, t));
        }
    }
    function jf(e, t, n, r) {
        switch(mf(t)){
            case 1:
                var o = sg;
                break;
            case 4:
                o = ag;
                break;
            default:
                o = na;
        }
        n = o.bind(null, t, n, e), o = void 0, !os || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function Ri(e, t, n, r, o) {
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
                    if (i = Tn(s), i === null) return;
                    if (a = i.tag, a === 5 || a === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        qd(function() {
            var u = l, c = Js(n), d = [];
            e: {
                var f = zf.get(e);
                if (f !== void 0) {
                    var y = oa, w = e;
                    switch(e){
                        case "keypress":
                            if (ll(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            y = _g;
                            break;
                        case "focusin":
                            w = "focus", y = _i;
                            break;
                        case "focusout":
                            w = "blur", y = _i;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            y = _i;
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
                            y = Hu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            y = dg;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            y = Ng;
                            break;
                        case Ef:
                        case Nf:
                        case Tf:
                            y = mg;
                            break;
                        case If:
                            y = Ig;
                            break;
                        case "scroll":
                            y = ug;
                            break;
                        case "wheel":
                            y = Rg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            y = gg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            y = Qu;
                    }
                    var g = (t & 4) !== 0, x = !g && e === "scroll", m = g ? f !== null ? f + "Capture" : null : f;
                    g = [];
                    for(var h = u, v; h !== null;){
                        v = h;
                        var S = v.stateNode;
                        if (v.tag === 5 && S !== null && (v = S, m !== null && (S = no(h, m), S != null && g.push(uo(h, S, v)))), x) break;
                        h = h.return;
                    }
                    0 < g.length && (f = new y(f, w, null, n, c), d.push({
                        event: f,
                        listeners: g
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (f = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", f && n !== ns && (w = n.relatedTarget || n.fromElement) && (Tn(w) || w[Dt])) break e;
                    if ((y || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? Tn(w) : null, w !== null && (x = Fn(w), w !== x || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
                        if (g = Hu, S = "onMouseLeave", m = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (g = Qu, S = "onPointerLeave", m = "onPointerEnter", h = "pointer"), x = y == null ? f : Zn(y), v = w == null ? f : Zn(w), f = new g(S, h + "leave", y, n, c), f.target = x, f.relatedTarget = v, S = null, Tn(c) === u && (g = new g(m, h + "enter", w, n, c), g.target = v, g.relatedTarget = x, S = g), x = S, y && w) t: {
                            for(g = y, m = w, h = 0, v = g; v; v = Wn(v))h++;
                            for(v = 0, S = m; S; S = Wn(S))v++;
                            for(; 0 < h - v;)g = Wn(g), h--;
                            for(; 0 < v - h;)m = Wn(m), v--;
                            for(; h--;){
                                if (g === m || m !== null && g === m.alternate) break t;
                                g = Wn(g), m = Wn(m);
                            }
                            g = null;
                        }
                        else g = null;
                        y !== null && lc(d, f, y, g, !1), w !== null && x !== null && lc(d, x, w, g, !0);
                    }
                }
                e: {
                    if (f = u ? Zn(u) : window, y = f.nodeName && f.nodeName.toLowerCase(), y === "select" || y === "input" && f.type === "file") var C = Dg;
                    else if (Zu(f)) if (wf) C = Ug;
                    else {
                        C = Fg;
                        var R = Ag;
                    }
                    else (y = f.nodeName) && y.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = $g);
                    if (C && (C = C(e, u))) {
                        vf(d, C, n, c);
                        break e;
                    }
                    R && R(e, f, u), e === "focusout" && (R = f._wrapperState) && R.controlled && f.type === "number" && Zi(f, "number", f.value);
                }
                switch(R = u ? Zn(u) : window, e){
                    case "focusin":
                        (Zu(R) || R.contentEditable === "true") && (Yn = R, us = u, Qr = null);
                        break;
                    case "focusout":
                        Qr = us = Yn = null;
                        break;
                    case "mousedown":
                        cs = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        cs = !1, nc(d, n, c);
                        break;
                    case "selectionchange":
                        if (Wg) break;
                    case "keydown":
                    case "keyup":
                        nc(d, n, c);
                }
                var j;
                if (ia) e: {
                    switch(e){
                        case "compositionstart":
                            var E = "onCompositionStart";
                            break e;
                        case "compositionend":
                            E = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            E = "onCompositionUpdate";
                            break e;
                    }
                    E = void 0;
                }
                else Qn ? xf(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
                E && (gf && n.locale !== "ko" && (Qn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Qn && (j = hf()) : (Zt = c, ra = "value" in Zt ? Zt.value : Zt.textContent, Qn = !0)), R = _l(u, E), 0 < R.length && (E = new Ku(E, e, null, n, c), d.push({
                    event: E,
                    listeners: R
                }), j ? E.data = j : (j = yf(n), j !== null && (E.data = j)))), (j = Pg ? Mg(e, n) : Lg(e, n)) && (u = _l(u, "onBeforeInput"), 0 < u.length && (c = new Ku("onBeforeInput", "beforeinput", null, n, c), d.push({
                    event: c,
                    listeners: u
                }), c.data = j));
            }
            Rf(d, t);
        });
    }
    function uo(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function _l(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = no(e, n), l != null && r.unshift(uo(e, l, o)), l = no(e, t), l != null && r.push(uo(e, l, o))), e = e.return;
        }
        return r;
    }
    function Wn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function lc(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = no(n, l), a != null && i.unshift(uo(n, a, s))) : o || (a = no(n, l), a != null && i.push(uo(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Qg = /\r\n?/g, Yg = /\u0000|\uFFFD/g;
    function ic(e) {
        return (typeof e == "string" ? e : "" + e).replace(Qg, `
`).replace(Yg, "");
    }
    function Go(e, t, n) {
        if (t = ic(t), ic(e) !== t && n) throw Error(I(425));
    }
    function Cl() {}
    var ds = null, fs = null;
    function ps(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ms = typeof setTimeout == "function" ? setTimeout : void 0, Xg = typeof clearTimeout == "function" ? clearTimeout : void 0, sc = typeof Promise == "function" ? Promise : void 0, Zg = typeof queueMicrotask == "function" ? queueMicrotask : typeof sc < "u" ? function(e) {
        return sc.resolve(null).then(e).catch(Jg);
    } : ms;
    function Jg(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function ji(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), lo(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        lo(t);
    }
    function rn(e) {
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
    function ac(e) {
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
    var Sr = Math.random().toString(36).slice(2), St = "__reactFiber$" + Sr, co = "__reactProps$" + Sr, Dt = "__reactContainer$" + Sr, hs = "__reactEvents$" + Sr, qg = "__reactListeners$" + Sr, ex = "__reactHandles$" + Sr;
    function Tn(e) {
        var t = e[St];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Dt] || n[St]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = ac(e); e !== null;){
                    if (n = e[St]) return n;
                    e = ac(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function _o(e) {
        return e = e[St] || e[Dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Zn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(I(33));
    }
    function Ql(e) {
        return e[co] || null;
    }
    var gs = [], Jn = -1;
    function fn(e) {
        return {
            current: e
        };
    }
    function ne(e) {
        0 > Jn || (e.current = gs[Jn], gs[Jn] = null, Jn--);
    }
    function ee(e, t) {
        Jn++, gs[Jn] = e.current, e.current = t;
    }
    var cn = {}, Pe = fn(cn), Be = fn(!1), Mn = cn;
    function fr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return cn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Ve(e) {
        return e = e.childContextTypes, e != null;
    }
    function El() {
        ne(Be), ne(Pe);
    }
    function uc(e, t, n) {
        if (Pe.current !== cn) throw Error(I(168));
        ee(Pe, t), ee(Be, n);
    }
    function Pf(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(I(108, Ah(e) || "Unknown", o));
        return ue({}, n, r);
    }
    function Nl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, Mn = Pe.current, ee(Pe, e), ee(Be, Be.current), !0;
    }
    function cc(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(I(169));
        n ? (e = Pf(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, ne(Be), ne(Pe), ee(Pe, e)) : ne(Be), ee(Be, n);
    }
    var jt = null, Yl = !1, Pi = !1;
    function Mf(e) {
        jt === null ? jt = [
            e
        ] : jt.push(e);
    }
    function tx(e) {
        Yl = !0, Mf(e);
    }
    function pn() {
        if (!Pi && jt !== null) {
            Pi = !0;
            var e = 0, t = Y;
            try {
                var n = jt;
                for(Y = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                jt = null, Yl = !1;
            } catch (o) {
                throw jt !== null && (jt = jt.slice(e + 1)), rf(qs, pn), o;
            } finally{
                Y = t, Pi = !1;
            }
        }
        return null;
    }
    var qn = [], er = 0, Tl = null, Il = 0, et = [], tt = 0, Ln = null, Mt = 1, Lt = "";
    function Cn(e, t) {
        qn[er++] = Il, qn[er++] = Tl, Tl = e, Il = t;
    }
    function Lf(e, t, n) {
        et[tt++] = Mt, et[tt++] = Lt, et[tt++] = Ln, Ln = e;
        var r = Mt;
        e = Lt;
        var o = 32 - mt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - mt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Mt = 1 << 32 - mt(t) + o | n << o | r, Lt = l + e;
        } else Mt = 1 << l | n << o | r, Lt = e;
    }
    function aa(e) {
        e.return !== null && (Cn(e, 1), Lf(e, 1, 0));
    }
    function ua(e) {
        for(; e === Tl;)Tl = qn[--er], qn[er] = null, Il = qn[--er], qn[er] = null;
        for(; e === Ln;)Ln = et[--tt], et[tt] = null, Lt = et[--tt], et[tt] = null, Mt = et[--tt], et[tt] = null;
    }
    var Qe = null, Ke = null, le = !1, ft = null;
    function bf(e, t) {
        var n = nt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function dc(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = rn(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ln !== null ? {
                    id: Mt,
                    overflow: Lt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, Ke = null, !0) : !1;
            default:
                return !1;
        }
    }
    function xs(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ys(e) {
        if (le) {
            var t = Ke;
            if (t) {
                var n = t;
                if (!dc(e, t)) {
                    if (xs(e)) throw Error(I(418));
                    t = rn(n.nextSibling);
                    var r = Qe;
                    t && dc(e, t) ? bf(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Qe = e);
                }
            } else {
                if (xs(e)) throw Error(I(418));
                e.flags = e.flags & -4097 | 2, le = !1, Qe = e;
            }
        }
    }
    function fc(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Qe = e;
    }
    function Ho(e) {
        if (e !== Qe) return !1;
        if (!le) return fc(e), le = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ps(e.type, e.memoizedProps)), t && (t = Ke)) {
            if (xs(e)) throw Of(), Error(I(418));
            for(; t;)bf(e, t), t = rn(t.nextSibling);
        }
        if (fc(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(I(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Ke = rn(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                Ke = null;
            }
        } else Ke = Qe ? rn(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Of() {
        for(var e = Ke; e;)e = rn(e.nextSibling);
    }
    function pr() {
        Ke = Qe = null, le = !1;
    }
    function ca(e) {
        ft === null ? ft = [
            e
        ] : ft.push(e);
    }
    var nx = $t.ReactCurrentBatchConfig;
    function Mr(e, t, n) {
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
    function Ko(e, t) {
        throw e = Object.prototype.toString.call(t), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function pc(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Df(e) {
        function t(m, h) {
            if (e) {
                var v = m.deletions;
                v === null ? (m.deletions = [
                    h
                ], m.flags |= 16) : v.push(h);
            }
        }
        function n(m, h) {
            if (!e) return null;
            for(; h !== null;)t(m, h), h = h.sibling;
            return null;
        }
        function r(m, h) {
            for(m = new Map; h !== null;)h.key !== null ? m.set(h.key, h) : m.set(h.index, h), h = h.sibling;
            return m;
        }
        function o(m, h) {
            return m = an(m, h), m.index = 0, m.sibling = null, m;
        }
        function l(m, h, v) {
            return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < h ? (m.flags |= 2, h) : v) : (m.flags |= 2, h)) : (m.flags |= 1048576, h);
        }
        function i(m) {
            return e && m.alternate === null && (m.flags |= 2), m;
        }
        function s(m, h, v, S) {
            return h === null || h.tag !== 6 ? (h = Fi(v, m.mode, S), h.return = m, h) : (h = o(h, v), h.return = m, h);
        }
        function a(m, h, v, S) {
            var C = v.type;
            return C === Kn ? c(m, h, v.props.children, S, v.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Kt && pc(C) === h.type) ? (S = o(h, v.props), S.ref = Mr(m, h, v), S.return = m, S) : (S = fl(v.type, v.key, v.props, null, m.mode, S), S.ref = Mr(m, h, v), S.return = m, S);
        }
        function u(m, h, v, S) {
            return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = $i(v, m.mode, S), h.return = m, h) : (h = o(h, v.children || []), h.return = m, h);
        }
        function c(m, h, v, S, C) {
            return h === null || h.tag !== 7 ? (h = jn(v, m.mode, S, C), h.return = m, h) : (h = o(h, v), h.return = m, h);
        }
        function d(m, h, v) {
            if (typeof h == "string" && h !== "" || typeof h == "number") return h = Fi("" + h, m.mode, v), h.return = m, h;
            if (typeof h == "object" && h !== null) {
                switch(h.$$typeof){
                    case Oo:
                        return v = fl(h.type, h.key, h.props, null, m.mode, v), v.ref = Mr(m, null, h), v.return = m, v;
                    case Hn:
                        return h = $i(h, m.mode, v), h.return = m, h;
                    case Kt:
                        var S = h._init;
                        return d(m, S(h._payload), v);
                }
                if ($r(h) || Ir(h)) return h = jn(h, m.mode, v, null), h.return = m, h;
                Ko(m, h);
            }
            return null;
        }
        function f(m, h, v, S) {
            var C = h !== null ? h.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number") return C !== null ? null : s(m, h, "" + v, S);
            if (typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case Oo:
                        return v.key === C ? a(m, h, v, S) : null;
                    case Hn:
                        return v.key === C ? u(m, h, v, S) : null;
                    case Kt:
                        return C = v._init, f(m, h, C(v._payload), S);
                }
                if ($r(v) || Ir(v)) return C !== null ? null : c(m, h, v, S, null);
                Ko(m, v);
            }
            return null;
        }
        function y(m, h, v, S, C) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(v) || null, s(h, m, "" + S, C);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case Oo:
                        return m = m.get(S.key === null ? v : S.key) || null, a(h, m, S, C);
                    case Hn:
                        return m = m.get(S.key === null ? v : S.key) || null, u(h, m, S, C);
                    case Kt:
                        var R = S._init;
                        return y(m, h, v, R(S._payload), C);
                }
                if ($r(S) || Ir(S)) return m = m.get(v) || null, c(h, m, S, C, null);
                Ko(h, S);
            }
            return null;
        }
        function w(m, h, v, S) {
            for(var C = null, R = null, j = h, E = h = 0, V = null; j !== null && E < v.length; E++){
                j.index > E ? (V = j, j = null) : V = j.sibling;
                var U = f(m, j, v[E], S);
                if (U === null) {
                    j === null && (j = V);
                    break;
                }
                e && j && U.alternate === null && t(m, j), h = l(U, h, E), R === null ? C = U : R.sibling = U, R = U, j = V;
            }
            if (E === v.length) return n(m, j), le && Cn(m, E), C;
            if (j === null) {
                for(; E < v.length; E++)j = d(m, v[E], S), j !== null && (h = l(j, h, E), R === null ? C = j : R.sibling = j, R = j);
                return le && Cn(m, E), C;
            }
            for(j = r(m, j); E < v.length; E++)V = y(j, m, E, v[E], S), V !== null && (e && V.alternate !== null && j.delete(V.key === null ? E : V.key), h = l(V, h, E), R === null ? C = V : R.sibling = V, R = V);
            return e && j.forEach(function(ge) {
                return t(m, ge);
            }), le && Cn(m, E), C;
        }
        function g(m, h, v, S) {
            var C = Ir(v);
            if (typeof C != "function") throw Error(I(150));
            if (v = C.call(v), v == null) throw Error(I(151));
            for(var R = C = null, j = h, E = h = 0, V = null, U = v.next(); j !== null && !U.done; E++, U = v.next()){
                j.index > E ? (V = j, j = null) : V = j.sibling;
                var ge = f(m, j, U.value, S);
                if (ge === null) {
                    j === null && (j = V);
                    break;
                }
                e && j && ge.alternate === null && t(m, j), h = l(ge, h, E), R === null ? C = ge : R.sibling = ge, R = ge, j = V;
            }
            if (U.done) return n(m, j), le && Cn(m, E), C;
            if (j === null) {
                for(; !U.done; E++, U = v.next())U = d(m, U.value, S), U !== null && (h = l(U, h, E), R === null ? C = U : R.sibling = U, R = U);
                return le && Cn(m, E), C;
            }
            for(j = r(m, j); !U.done; E++, U = v.next())U = y(j, m, E, U.value, S), U !== null && (e && U.alternate !== null && j.delete(U.key === null ? E : U.key), h = l(U, h, E), R === null ? C = U : R.sibling = U, R = U);
            return e && j.forEach(function(ve) {
                return t(m, ve);
            }), le && Cn(m, E), C;
        }
        function x(m, h, v, S) {
            if (typeof v == "object" && v !== null && v.type === Kn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case Oo:
                        e: {
                            for(var C = v.key, R = h; R !== null;){
                                if (R.key === C) {
                                    if (C = v.type, C === Kn) {
                                        if (R.tag === 7) {
                                            n(m, R.sibling), h = o(R, v.props.children), h.return = m, m = h;
                                            break e;
                                        }
                                    } else if (R.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Kt && pc(C) === R.type) {
                                        n(m, R.sibling), h = o(R, v.props), h.ref = Mr(m, R, v), h.return = m, m = h;
                                        break e;
                                    }
                                    n(m, R);
                                    break;
                                } else t(m, R);
                                R = R.sibling;
                            }
                            v.type === Kn ? (h = jn(v.props.children, m.mode, S, v.key), h.return = m, m = h) : (S = fl(v.type, v.key, v.props, null, m.mode, S), S.ref = Mr(m, h, v), S.return = m, m = S);
                        }
                        return i(m);
                    case Hn:
                        e: {
                            for(R = v.key; h !== null;){
                                if (h.key === R) if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                    n(m, h.sibling), h = o(h, v.children || []), h.return = m, m = h;
                                    break e;
                                } else {
                                    n(m, h);
                                    break;
                                }
                                else t(m, h);
                                h = h.sibling;
                            }
                            h = $i(v, m.mode, S), h.return = m, m = h;
                        }
                        return i(m);
                    case Kt:
                        return R = v._init, x(m, h, R(v._payload), S);
                }
                if ($r(v)) return w(m, h, v, S);
                if (Ir(v)) return g(m, h, v, S);
                Ko(m, v);
            }
            return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, h !== null && h.tag === 6 ? (n(m, h.sibling), h = o(h, v), h.return = m, m = h) : (n(m, h), h = Fi(v, m.mode, S), h.return = m, m = h), i(m)) : n(m, h);
        }
        return x;
    }
    var mr = Df(!0), Af = Df(!1), zl = fn(null), Rl = null, tr = null, da = null;
    function fa() {
        da = tr = Rl = null;
    }
    function pa(e) {
        var t = zl.current;
        ne(zl), e._currentValue = t;
    }
    function vs(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function ur(e, t) {
        Rl = e, da = tr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
    }
    function ot(e) {
        var t = e._currentValue;
        if (da !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, tr === null) {
            if (Rl === null) throw Error(I(308));
            tr = e, Rl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else tr = tr.next = e;
        return t;
    }
    var In = null;
    function ma(e) {
        In === null ? In = [
            e
        ] : In.push(e);
    }
    function Ff(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, ma(t)) : (n.next = o.next, o.next = n), t.interleaved = n, At(e, r);
    }
    function At(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Qt = !1;
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
    function $f(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function bt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function on(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, Q & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, At(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, ma(r)) : (t.next = o.next, o.next = t), r.interleaved = t, At(e, n);
    }
    function il(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ea(e, n);
        }
    }
    function mc(e, t) {
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
    function jl(e, t, n, r) {
        var o = e.updateQueue;
        Qt = !1;
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
                var f = s.lane, y = s.eventTime;
                if ((r & f) === f) {
                    c !== null && (c = c.next = {
                        eventTime: y,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var w = e, g = s;
                        switch(f = t, y = n, g.tag){
                            case 1:
                                if (w = g.payload, typeof w == "function") {
                                    d = w.call(y, d, f);
                                    break e;
                                }
                                d = w;
                                break e;
                            case 3:
                                w.flags = w.flags & -65537 | 128;
                            case 0:
                                if (w = g.payload, f = typeof w == "function" ? w.call(y, d, f) : w, f == null) break e;
                                d = ue({}, d, f);
                                break e;
                            case 2:
                                Qt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [
                        s
                    ] : f.push(s));
                } else y = {
                    eventTime: y,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, c === null ? (u = c = y, a = d) : c = c.next = y, i |= f;
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
            On |= i, e.lanes = i, e.memoizedState = d;
        }
    }
    function hc(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(I(191, o));
                o.call(r);
            }
        }
    }
    var Co = {}, Ct = fn(Co), fo = fn(Co), po = fn(Co);
    function zn(e) {
        if (e === Co) throw Error(I(174));
        return e;
    }
    function ga(e, t) {
        switch(ee(po, t), ee(fo, e), ee(Ct, Co), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : qi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = qi(t, e);
        }
        ne(Ct), ee(Ct, t);
    }
    function hr() {
        ne(Ct), ne(fo), ne(po);
    }
    function Uf(e) {
        zn(po.current);
        var t = zn(Ct.current), n = qi(t, e.type);
        t !== n && (ee(fo, e), ee(Ct, n));
    }
    function xa(e) {
        fo.current === e && (ne(Ct), ne(fo));
    }
    var ie = fn(0);
    function Pl(e) {
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
    var Mi = [];
    function ya() {
        for(var e = 0; e < Mi.length; e++)Mi[e]._workInProgressVersionPrimary = null;
        Mi.length = 0;
    }
    var sl = $t.ReactCurrentDispatcher, Li = $t.ReactCurrentBatchConfig, bn = 0, ae = null, ke = null, _e = null, Ml = !1, Yr = !1, mo = 0, rx = 0;
    function ze() {
        throw Error(I(321));
    }
    function va(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!gt(e[n], t[n])) return !1;
        return !0;
    }
    function wa(e, t, n, r, o, l) {
        if (bn = l, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, sl.current = e === null || e.memoizedState === null ? sx : ax, e = n(r, o), Yr) {
            l = 0;
            do {
                if (Yr = !1, mo = 0, 25 <= l) throw Error(I(301));
                l += 1, _e = ke = null, t.updateQueue = null, sl.current = ux, e = n(r, o);
            }while (Yr);
        }
        if (sl.current = Ll, t = ke !== null && ke.next !== null, bn = 0, _e = ke = ae = null, Ml = !1, t) throw Error(I(300));
        return e;
    }
    function ka() {
        var e = mo !== 0;
        return mo = 0, e;
    }
    function kt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return _e === null ? ae.memoizedState = _e = e : _e = _e.next = e, _e;
    }
    function lt() {
        if (ke === null) {
            var e = ae.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ke.next;
        var t = _e === null ? ae.memoizedState : _e.next;
        if (t !== null) _e = t, ke = e;
        else {
            if (e === null) throw Error(I(310));
            ke = e, e = {
                memoizedState: ke.memoizedState,
                baseState: ke.baseState,
                baseQueue: ke.baseQueue,
                queue: ke.queue,
                next: null
            }, _e === null ? ae.memoizedState = _e = e : _e = _e.next = e;
        }
        return _e;
    }
    function ho(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function bi(e) {
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
                var c = u.lane;
                if ((bn & c) === c) a !== null && (a = a.next = {
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
                    a === null ? (s = a = d, i = r) : a = a.next = d, ae.lanes |= c, On |= c;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, gt(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ae.lanes |= l, On |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Oi(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(I(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            gt(l, t.memoizedState) || (Ue = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Bf() {}
    function Vf(e, t) {
        var n = ae, r = lt(), o = t(), l = !gt(r.memoizedState, o);
        if (l && (r.memoizedState = o, Ue = !0), r = r.queue, Sa(Hf.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || _e !== null && _e.memoizedState.tag & 1) {
            if (n.flags |= 2048, go(9, Gf.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(I(349));
            bn & 30 || Wf(n, t, o);
        }
        return o;
    }
    function Wf(e, t, n) {
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
    function Gf(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Kf(t) && Qf(e);
    }
    function Hf(e, t, n) {
        return n(function() {
            Kf(t) && Qf(e);
        });
    }
    function Kf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !gt(e, n);
        } catch  {
            return !0;
        }
    }
    function Qf(e) {
        var t = At(e, 1);
        t !== null && ht(t, e, 1, -1);
    }
    function gc(e) {
        var t = kt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ho,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ix.bind(null, ae, e), [
            t.memoizedState,
            e
        ];
    }
    function go(e, t, n, r) {
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
    function Yf() {
        return lt().memoizedState;
    }
    function al(e, t, n, r) {
        var o = kt();
        ae.flags |= e, o.memoizedState = go(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Xl(e, t, n, r) {
        var o = lt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ke !== null) {
            var i = ke.memoizedState;
            if (l = i.destroy, r !== null && va(r, i.deps)) {
                o.memoizedState = go(t, n, l, r);
                return;
            }
        }
        ae.flags |= e, o.memoizedState = go(1 | t, n, l, r);
    }
    function xc(e, t) {
        return al(8390656, 8, e, t);
    }
    function Sa(e, t) {
        return Xl(2048, 8, e, t);
    }
    function Xf(e, t) {
        return Xl(4, 2, e, t);
    }
    function Zf(e, t) {
        return Xl(4, 4, e, t);
    }
    function Jf(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function qf(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Xl(4, 4, Jf.bind(null, t, e), n);
    }
    function _a() {}
    function ep(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && va(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function tp(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && va(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function np(e, t, n) {
        return bn & 21 ? (gt(n, t) || (n = sf(), ae.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
    }
    function ox(e, t) {
        var n = Y;
        Y = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Li.transition;
        Li.transition = {};
        try {
            e(!1), t();
        } finally{
            Y = n, Li.transition = r;
        }
    }
    function rp() {
        return lt().memoizedState;
    }
    function lx(e, t, n) {
        var r = sn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, op(e)) lp(t, n);
        else if (n = Ff(e, t, n, r), n !== null) {
            var o = Le();
            ht(n, e, r, o), ip(n, t, r);
        }
    }
    function ix(e, t, n) {
        var r = sn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (op(e)) lp(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, gt(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, ma(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Ff(e, t, o, r), n !== null && (o = Le(), ht(n, e, r, o), ip(n, t, r));
        }
    }
    function op(e) {
        var t = e.alternate;
        return e === ae || t !== null && t === ae;
    }
    function lp(e, t) {
        Yr = Ml = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function ip(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ea(e, n);
        }
    }
    var Ll = {
        readContext: ot,
        useCallback: ze,
        useContext: ze,
        useEffect: ze,
        useImperativeHandle: ze,
        useInsertionEffect: ze,
        useLayoutEffect: ze,
        useMemo: ze,
        useReducer: ze,
        useRef: ze,
        useState: ze,
        useDebugValue: ze,
        useDeferredValue: ze,
        useTransition: ze,
        useMutableSource: ze,
        useSyncExternalStore: ze,
        useId: ze,
        unstable_isNewReconciler: !1
    }, sx = {
        readContext: ot,
        useCallback: function(e, t) {
            return kt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: ot,
        useEffect: xc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, al(4194308, 4, Jf.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return al(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return al(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = kt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = kt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = lx.bind(null, ae, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = kt();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: gc,
        useDebugValue: _a,
        useDeferredValue: function(e) {
            return kt().memoizedState = e;
        },
        useTransition: function() {
            var e = gc(!1), t = e[0];
            return e = ox.bind(null, e[1]), kt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ae, o = kt();
            if (le) {
                if (n === void 0) throw Error(I(407));
                n = n();
            } else {
                if (n = t(), Ce === null) throw Error(I(349));
                bn & 30 || Wf(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, xc(Hf.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, go(9, Gf.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = kt(), t = Ce.identifierPrefix;
            if (le) {
                var n = Lt, r = Mt;
                n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = mo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = rx++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, ax = {
        readContext: ot,
        useCallback: ep,
        useContext: ot,
        useEffect: Sa,
        useImperativeHandle: qf,
        useInsertionEffect: Xf,
        useLayoutEffect: Zf,
        useMemo: tp,
        useReducer: bi,
        useRef: Yf,
        useState: function() {
            return bi(ho);
        },
        useDebugValue: _a,
        useDeferredValue: function(e) {
            var t = lt();
            return np(t, ke.memoizedState, e);
        },
        useTransition: function() {
            var e = bi(ho)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Bf,
        useSyncExternalStore: Vf,
        useId: rp,
        unstable_isNewReconciler: !1
    }, ux = {
        readContext: ot,
        useCallback: ep,
        useContext: ot,
        useEffect: Sa,
        useImperativeHandle: qf,
        useInsertionEffect: Xf,
        useLayoutEffect: Zf,
        useMemo: tp,
        useReducer: Oi,
        useRef: Yf,
        useState: function() {
            return Oi(ho);
        },
        useDebugValue: _a,
        useDeferredValue: function(e) {
            var t = lt();
            return ke === null ? t.memoizedState = e : np(t, ke.memoizedState, e);
        },
        useTransition: function() {
            var e = Oi(ho)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Bf,
        useSyncExternalStore: Vf,
        useId: rp,
        unstable_isNewReconciler: !1
    };
    function ct(e, t) {
        if (e && e.defaultProps) {
            t = ue({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function ws(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Zl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Fn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Le(), o = sn(e), l = bt(r, o);
            l.payload = t, n != null && (l.callback = n), t = on(e, l, o), t !== null && (ht(t, e, o, r), il(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Le(), o = sn(e), l = bt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = on(e, l, o), t !== null && (ht(t, e, o, r), il(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Le(), r = sn(e), o = bt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = on(e, o, r), t !== null && (ht(t, e, r, n), il(t, e, r));
        }
    };
    function yc(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !so(n, r) || !so(o, l) : !0;
    }
    function sp(e, t, n) {
        var r = !1, o = cn, l = t.contextType;
        return typeof l == "object" && l !== null ? l = ot(l) : (o = Ve(t) ? Mn : Pe.current, r = t.contextTypes, l = (r = r != null) ? fr(e, o) : cn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Zl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function vc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
    }
    function ks(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, ha(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = ot(l) : (l = Ve(t) ? Mn : Pe.current, o.context = fr(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ws(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Zl.enqueueReplaceState(o, o.state, null), jl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function gr(e, t) {
        try {
            var n = "", r = t;
            do n += Dh(r), r = r.return;
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
    function Di(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function Ss(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var cx = typeof WeakMap == "function" ? WeakMap : Map;
    function ap(e, t, n) {
        n = bt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Ol || (Ol = !0, Ps = r), Ss(e, t);
        }, n;
    }
    function up(e, t, n) {
        n = bt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                Ss(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Ss(e, t), typeof r != "function" && (ln === null ? ln = new Set([
                this
            ]) : ln.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function wc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new cx;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Cx.bind(null, e, t, n), t.then(e, e));
    }
    function kc(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function Sc(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = bt(-1, 1), t.tag = 2, on(n, t, 1))), n.lanes |= 1), e);
    }
    var dx = $t.ReactCurrentOwner, Ue = !1;
    function Me(e, t, n, r) {
        t.child = e === null ? Af(t, null, n, r) : mr(t, e.child, n, r);
    }
    function _c(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return ur(t, o), r = wa(e, t, n, r, l, o), n = ka(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (le && n && aa(t), t.flags |= 1, Me(e, t, r, o), t.child);
    }
    function Cc(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !ja(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, cp(e, t, l, r, o)) : (e = fl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : so, n(i, r) && e.ref === t.ref) return Ft(e, t, o);
        }
        return t.flags |= 1, e = an(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function cp(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (so(l, r) && e.ref === t.ref) if (Ue = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Ue = !0);
            else return t.lanes = e.lanes, Ft(e, t, o);
        }
        return _s(e, t, n, r, o);
    }
    function dp(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ee(rr, He), He |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ee(rr, He), He |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, ee(rr, He), He |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ee(rr, He), He |= r;
        return Me(e, t, o, n), t.child;
    }
    function fp(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function _s(e, t, n, r, o) {
        var l = Ve(n) ? Mn : Pe.current;
        return l = fr(t, l), ur(t, o), n = wa(e, t, n, r, l, o), r = ka(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (le && r && aa(t), t.flags |= 1, Me(e, t, n, o), t.child);
    }
    function Ec(e, t, n, r, o) {
        if (Ve(n)) {
            var l = !0;
            Nl(t);
        } else l = !1;
        if (ur(t, o), t.stateNode === null) ul(e, t), sp(t, n, r), ks(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = ot(u) : (u = Ve(n) ? Mn : Pe.current, u = fr(t, u));
            var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && vc(t, i, r, u), Qt = !1;
            var f = t.memoizedState;
            i.state = f, jl(t, r, i, o), a = t.memoizedState, s !== r || f !== a || Be.current || Qt ? (typeof c == "function" && (ws(t, n, c, r), a = t.memoizedState), (s = Qt || yc(t, n, s, r, f, a, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, $f(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ct(t.type, s), i.props = u, d = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = Ve(n) ? Mn : Pe.current, a = fr(t, a));
            var y = n.getDerivedStateFromProps;
            (c = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || f !== a) && vc(t, i, r, a), Qt = !1, f = t.memoizedState, i.state = f, jl(t, r, i, o);
            var w = t.memoizedState;
            s !== d || f !== w || Be.current || Qt ? (typeof y == "function" && (ws(t, n, y, r), w = t.memoizedState), (u = Qt || yc(t, n, u, r, f, w, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Cs(e, t, n, r, l, o);
    }
    function Cs(e, t, n, r, o, l) {
        fp(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && cc(t, n, !1), Ft(e, t, l);
        r = t.stateNode, dx.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = mr(t, e.child, null, l), t.child = mr(t, null, s, l)) : Me(e, t, s, l), t.memoizedState = r.state, o && cc(t, n, !0), t.child;
    }
    function pp(e) {
        var t = e.stateNode;
        t.pendingContext ? uc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && uc(e, t.context, !1), ga(e, t.containerInfo);
    }
    function Nc(e, t, n, r, o) {
        return pr(), ca(o), t.flags |= 256, Me(e, t, n, r), t.child;
    }
    var Es = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ns(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function mp(e, t, n) {
        var r = t.pendingProps, o = ie.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ee(ie, o & 1), e === null) return ys(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = ei(i, r, 0, null), e = jn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ns(n), t.memoizedState = Es, e) : Ca(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return fx(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = an(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = an(s, l) : (l = jn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ns(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Es, r;
        }
        return l = e.child, e = l.sibling, r = an(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function Ca(e, t) {
        return t = ei({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Qo(e, t, n, r) {
        return r !== null && ca(r), mr(t, e.child, null, n), e = Ca(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function fx(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Di(Error(I(422))), Qo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = ei({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = jn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && mr(t, e.child, null, i), t.child.memoizedState = Ns(i), t.memoizedState = Es, l);
        if (!(t.mode & 1)) return Qo(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(I(419)), r = Di(l, r, void 0), Qo(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Ue || s) {
            if (r = Ce, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, At(e, o), ht(r, e, o, -1));
            }
            return Ra(), r = Di(Error(I(421))), Qo(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ex.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ke = rn(o.nextSibling), Qe = t, le = !0, ft = null, e !== null && (et[tt++] = Mt, et[tt++] = Lt, et[tt++] = Ln, Mt = e.id, Lt = e.overflow, Ln = t), t = Ca(t, r.children), t.flags |= 4096, t);
    }
    function Tc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), vs(e.return, t, n);
    }
    function Ai(e, t, n, r, o) {
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
    function hp(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Me(e, t, r.children, n), r = ie.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
                else if (e.tag === 19) Tc(e, n, t);
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
        if (ee(ie, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Pl(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ai(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Pl(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                Ai(t, !0, n, null, l);
                break;
            case "together":
                Ai(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function ul(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Ft(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(I(153));
        if (t.child !== null) {
            for(e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function px(e, t, n) {
        switch(t.tag){
            case 3:
                pp(t), pr();
                break;
            case 5:
                Uf(t);
                break;
            case 1:
                Ve(t.type) && Nl(t);
                break;
            case 4:
                ga(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                ee(zl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ee(ie, ie.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? mp(e, t, n) : (ee(ie, ie.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
                ee(ie, ie.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return hp(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ee(ie, ie.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, dp(e, t, n);
        }
        return Ft(e, t, n);
    }
    var gp, Ts, xp, yp;
    gp = function(e, t) {
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
    Ts = function() {};
    xp = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, zn(Ct.current);
            var l = null;
            switch(n){
                case "input":
                    o = Yi(e, o), r = Yi(e, r), l = [];
                    break;
                case "select":
                    o = ue({}, o, {
                        value: void 0
                    }), r = ue({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Ji(e, o), r = Ji(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Cl);
            }
            es(n, r);
            var i;
            n = null;
            for(u in o)if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
                var s = o[u];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (eo.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
            for(u in r){
                var a = r[u];
                if (s = o?.[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in a)a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (eo.hasOwnProperty(u) ? (a != null && u === "onScroll" && te("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    yp = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function Lr(e, t) {
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
    function Re(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function mx(e, t, n) {
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
                return Ve(t.type) && El(), Re(t), null;
            case 3:
                return r = t.stateNode, hr(), ne(Be), ne(Pe), ya(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ho(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (bs(ft), ft = null))), Ts(e, t), Re(t), null;
            case 5:
                xa(t);
                var o = zn(po.current);
                if (n = t.type, e !== null && t.stateNode != null) xp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(I(166));
                        return Re(t), null;
                    }
                    if (e = zn(Ct.current), Ho(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[St] = t, r[co] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < Br.length; o++)te(Br[o], r);
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
                                Ou(r, l), te("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, te("invalid", r);
                                break;
                            case "textarea":
                                Au(r, l), te("invalid", r);
                        }
                        es(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Go(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Go(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : eo.hasOwnProperty(i) && s != null && i === "onScroll" && te("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Do(r), Du(r, l, !0);
                                break;
                            case "textarea":
                                Do(r), Fu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = Cl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[St] = t, e[co] = r, gp(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = ts(n, r), n){
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
                                    for(o = 0; o < Br.length; o++)te(Br[o], e);
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
                                    Ou(e, r), o = Yi(e, r), te("invalid", e);
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
                                    Au(e, r), o = Ji(e, r), te("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            es(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? Qd(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Hd(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && to(e, a) : typeof a == "number" && to(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (eo.hasOwnProperty(l) ? a != null && l === "onScroll" && te("scroll", e) : a != null && Qs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    Do(e), Du(e, r, !1);
                                    break;
                                case "textarea":
                                    Do(e), Fu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + un(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? lr(e, !!r.multiple, l, !1) : r.defaultValue != null && lr(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = Cl);
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
                if (e && t.stateNode != null) yp(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
                    if (n = zn(po.current), zn(Ct.current), Ho(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (l = r.nodeValue !== n) && (e = Qe, e !== null)) switch(e.tag){
                            case 3:
                                Go(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Go(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
                }
                return Re(t), null;
            case 13:
                if (ne(ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (le && Ke !== null && t.mode & 1 && !(t.flags & 128)) Of(), pr(), t.flags |= 98560, l = !1;
                    else if (l = Ho(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(I(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(I(317));
                            l[St] = t;
                        } else pr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Re(t), l = !1;
                    } else ft !== null && (bs(ft), ft = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ie.current & 1 ? Se === 0 && (Se = 3) : Ra())), t.updateQueue !== null && (t.flags |= 4), Re(t), null);
            case 4:
                return hr(), Ts(e, t), e === null && ao(t.stateNode.containerInfo), Re(t), null;
            case 10:
                return pa(t.type._context), Re(t), null;
            case 17:
                return Ve(t.type) && El(), Re(t), null;
            case 19:
                if (ne(ie), l = t.memoizedState, l === null) return Re(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) Lr(l, !1);
                else {
                    if (Se !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Pl(e), i !== null) {
                            for(t.flags |= 128, Lr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return ee(ie, ie.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && he() > xr && (t.flags |= 128, r = !0, Lr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Pl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Lr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !le) return Re(t), null;
                    } else 2 * he() - l.renderingStartTime > xr && n !== 1073741824 && (t.flags |= 128, r = !0, Lr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = he(), t.sibling = null, n = ie.current, ee(ie, r ? n & 1 | 2 : n & 1), t) : (Re(t), null);
            case 22:
            case 23:
                return za(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Re(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(I(156, t.tag));
    }
    function hx(e, t) {
        switch(ua(t), t.tag){
            case 1:
                return Ve(t.type) && El(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return hr(), ne(Be), ne(Pe), ya(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return xa(t), null;
            case 13:
                if (ne(ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(I(340));
                    pr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ne(ie), null;
            case 4:
                return hr(), null;
            case 10:
                return pa(t.type._context), null;
            case 22:
            case 23:
                return za(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Yo = !1, je = !1, gx = typeof WeakSet == "function" ? WeakSet : Set, L = null;
    function nr(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            pe(e, t, r);
        }
        else n.current = null;
    }
    function Is(e, t, n) {
        try {
            n();
        } catch (r) {
            pe(e, t, r);
        }
    }
    var Ic = !1;
    function xx(e, t) {
        if (ds = kl, e = _f(), sa(e)) {
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
                        for(var y; d !== n || o !== 0 && d.nodeType !== 3 || (s = i + o), d !== l || r !== 0 && d.nodeType !== 3 || (a = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (y = d.firstChild) !== null;)f = d, d = y;
                        for(;;){
                            if (d === e) break t;
                            if (f === n && ++u === o && (s = i), f === l && ++c === r && (a = i), (y = d.nextSibling) !== null) break;
                            d = f, f = d.parentNode;
                        }
                        d = y;
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
        for(fs = {
            focusedElem: e,
            selectionRange: n
        }, kl = !1, L = t; L !== null;)if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else for(; L !== null;){
            t = L;
            try {
                var w = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (w !== null) {
                            var g = w.memoizedProps, x = w.memoizedState, m = t.stateNode, h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ct(t.type, g), x);
                            m.__reactInternalSnapshotBeforeUpdate = h;
                        }
                        break;
                    case 3:
                        var v = t.stateNode.containerInfo;
                        v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
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
                e.return = t.return, L = e;
                break;
            }
            L = t.return;
        }
        return w = Ic, Ic = !1, w;
    }
    function Xr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && Is(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function Jl(e, t) {
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
    function zs(e) {
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
    function vp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, vp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[co], delete t[hs], delete t[qg], delete t[ex])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function wp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function zc(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || wp(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Rs(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Cl));
        else if (r !== 4 && (e = e.child, e !== null)) for(Rs(e, t, n), e = e.sibling; e !== null;)Rs(e, t, n), e = e.sibling;
    }
    function js(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(js(e, t, n), e = e.sibling; e !== null;)js(e, t, n), e = e.sibling;
    }
    var Ne = null, dt = !1;
    function Vt(e, t, n) {
        for(n = n.child; n !== null;)kp(e, t, n), n = n.sibling;
    }
    function kp(e, t, n) {
        if (_t && typeof _t.onCommitFiberUnmount == "function") try {
            _t.onCommitFiberUnmount(Wl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                je || nr(n, t);
            case 6:
                var r = Ne, o = dt;
                Ne = null, Vt(e, t, n), Ne = r, dt = o, Ne !== null && (dt ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
                break;
            case 18:
                Ne !== null && (dt ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? ji(e.parentNode, n) : e.nodeType === 1 && ji(e, n), lo(e)) : ji(Ne, n.stateNode));
                break;
            case 4:
                r = Ne, o = dt, Ne = n.stateNode.containerInfo, dt = !0, Vt(e, t, n), Ne = r, dt = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Is(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Vt(e, t, n);
                break;
            case 1:
                if (!je && (nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    pe(n, t, s);
                }
                Vt(e, t, n);
                break;
            case 21:
                Vt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, Vt(e, t, n), je = r) : Vt(e, t, n);
                break;
            default:
                Vt(e, t, n);
        }
    }
    function Rc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new gx), t.forEach(function(r) {
                var o = Nx.bind(null, e, r);
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
                            Ne = s.stateNode, dt = !1;
                            break e;
                        case 3:
                            Ne = s.stateNode.containerInfo, dt = !0;
                            break e;
                        case 4:
                            Ne = s.stateNode.containerInfo, dt = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (Ne === null) throw Error(I(160));
                kp(l, i, o), Ne = null, dt = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                pe(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)Sp(t, e), t = t.sibling;
    }
    function Sp(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (st(t, e), vt(e), r & 4) {
                    try {
                        Xr(3, e, e.return), Jl(3, e);
                    } catch (g) {
                        pe(e, e.return, g);
                    }
                    try {
                        Xr(5, e, e.return);
                    } catch (g) {
                        pe(e, e.return, g);
                    }
                }
                break;
            case 1:
                st(t, e), vt(e), r & 512 && n !== null && nr(n, n.return);
                break;
            case 5:
                if (st(t, e), vt(e), r & 512 && n !== null && nr(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        to(o, "");
                    } catch (g) {
                        pe(e, e.return, g);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Vd(o, l), ts(s, i);
                        var u = ts(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var c = a[i], d = a[i + 1];
                            c === "style" ? Qd(o, d) : c === "dangerouslySetInnerHTML" ? Hd(o, d) : c === "children" ? to(o, d) : Qs(o, c, d, u);
                        }
                        switch(s){
                            case "input":
                                Xi(o, l);
                                break;
                            case "textarea":
                                Wd(o, l);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var y = l.value;
                                y != null ? lr(o, !!l.multiple, y, !1) : f !== !!l.multiple && (l.defaultValue != null ? lr(o, !!l.multiple, l.defaultValue, !0) : lr(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[co] = l;
                    } catch (g) {
                        pe(e, e.return, g);
                    }
                }
                break;
            case 6:
                if (st(t, e), vt(e), r & 4) {
                    if (e.stateNode === null) throw Error(I(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (g) {
                        pe(e, e.return, g);
                    }
                }
                break;
            case 3:
                if (st(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    lo(t.containerInfo);
                } catch (g) {
                    pe(e, e.return, g);
                }
                break;
            case 4:
                st(t, e), vt(e);
                break;
            case 13:
                st(t, e), vt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Ta = he())), r & 4 && Rc(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (u = je) || c, st(t, e), je = u) : st(t, e), vt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for(L = e, c = e.child; c !== null;){
                        for(d = L = c; L !== null;){
                            switch(f = L, y = f.child, f.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Xr(4, f, f.return);
                                    break;
                                case 1:
                                    nr(f, f.return);
                                    var w = f.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                                        } catch (g) {
                                            pe(r, n, g);
                                        }
                                    }
                                    break;
                                case 5:
                                    nr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Pc(d);
                                        continue;
                                    }
                            }
                            y !== null ? (y.return = f, L = y) : Pc(d);
                        }
                        c = c.sibling;
                    }
                    e: for(c = null, d = e;;){
                        if (d.tag === 5) {
                            if (c === null) {
                                c = d;
                                try {
                                    o = d.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Kd("display", i));
                                } catch (g) {
                                    pe(e, e.return, g);
                                }
                            }
                        } else if (d.tag === 6) {
                            if (c === null) try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                            } catch (g) {
                                pe(e, e.return, g);
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
                st(t, e), vt(e), r & 4 && Rc(e);
                break;
            case 21:
                break;
            default:
                st(t, e), vt(e);
        }
    }
    function vt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (wp(n)) {
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
                        r.flags & 32 && (to(o, ""), r.flags &= -33);
                        var l = zc(e);
                        js(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = zc(e);
                        Rs(e, s, i);
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
    function yx(e, t, n) {
        L = e, _p(e);
    }
    function _p(e, t, n) {
        for(var r = (e.mode & 1) !== 0; L !== null;){
            var o = L, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Yo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || je;
                    s = Yo;
                    var u = je;
                    if (Yo = i, (je = a) && !u) for(L = o; L !== null;)i = L, a = i.child, i.tag === 22 && i.memoizedState !== null ? Mc(o) : a !== null ? (a.return = i, L = a) : Mc(o);
                    for(; l !== null;)L = l, _p(l), l = l.sibling;
                    L = o, Yo = s, je = u;
                }
                jc(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, L = l) : jc(e);
        }
    }
    function jc(e) {
        for(; L !== null;){
            var t = L;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            je || Jl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !je) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && hc(t, l, r);
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
                                hc(t, i, n);
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
                                        d !== null && lo(d);
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
                    je || t.flags & 512 && zs(t);
                } catch (f) {
                    pe(t, t.return, f);
                }
            }
            if (t === e) {
                L = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, L = n;
                break;
            }
            L = t.return;
        }
    }
    function Pc(e) {
        for(; L !== null;){
            var t = L;
            if (t === e) {
                L = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, L = n;
                break;
            }
            L = t.return;
        }
    }
    function Mc(e) {
        for(; L !== null;){
            var t = L;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Jl(4, t);
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
                            zs(t);
                        } catch (a) {
                            pe(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            zs(t);
                        } catch (a) {
                            pe(t, i, a);
                        }
                }
            } catch (a) {
                pe(t, t.return, a);
            }
            if (t === e) {
                L = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, L = s;
                break;
            }
            L = t.return;
        }
    }
    var vx = Math.ceil, bl = $t.ReactCurrentDispatcher, Ea = $t.ReactCurrentOwner, rt = $t.ReactCurrentBatchConfig, Q = 0, Ce = null, ye = null, Te = 0, He = 0, rr = fn(0), Se = 0, xo = null, On = 0, ql = 0, Na = 0, Zr = null, Fe = null, Ta = 0, xr = 1 / 0, Rt = null, Ol = !1, Ps = null, ln = null, Xo = !1, Jt = null, Dl = 0, Jr = 0, Ms = null, cl = -1, dl = 0;
    function Le() {
        return Q & 6 ? he() : cl !== -1 ? cl : cl = he();
    }
    function sn(e) {
        return e.mode & 1 ? Q & 2 && Te !== 0 ? Te & -Te : nx.transition !== null ? (dl === 0 && (dl = sf()), dl) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : mf(e.type)), e) : 1;
    }
    function ht(e, t, n, r) {
        if (50 < Jr) throw Jr = 0, Ms = null, Error(I(185));
        ko(e, n, r), (!(Q & 2) || e !== Ce) && (e === Ce && (!(Q & 2) && (ql |= n), Se === 4 && Xt(e, Te)), We(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (xr = he() + 500, Yl && pn()));
    }
    function We(e, t) {
        var n = e.callbackNode;
        ng(e, t);
        var r = wl(e, e === Ce ? Te : 0);
        if (r === 0) n !== null && Bu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Bu(n), t === 1) e.tag === 0 ? tx(Lc.bind(null, e)) : Mf(Lc.bind(null, e)), Zg(function() {
                !(Q & 6) && pn();
            }), n = null;
            else {
                switch(af(r)){
                    case 1:
                        n = qs;
                        break;
                    case 4:
                        n = of;
                        break;
                    case 16:
                        n = vl;
                        break;
                    case 536870912:
                        n = lf;
                        break;
                    default:
                        n = vl;
                }
                n = jp(n, Cp.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function Cp(e, t) {
        if (cl = -1, dl = 0, Q & 6) throw Error(I(327));
        var n = e.callbackNode;
        if (cr() && e.callbackNode !== n) return null;
        var r = wl(e, e === Ce ? Te : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Al(e, r);
        else {
            t = r;
            var o = Q;
            Q |= 2;
            var l = Np();
            (Ce !== e || Te !== t) && (Rt = null, xr = he() + 500, Rn(e, t));
            do try {
                Sx();
                break;
            } catch (s) {
                Ep(e, s);
            }
            while (!0);
            fa(), bl.current = l, Q = o, ye !== null ? t = 0 : (Ce = null, Te = 0, t = Se);
        }
        if (t !== 0) {
            if (t === 2 && (o = is(e), o !== 0 && (r = o, t = Ls(e, o))), t === 1) throw n = xo, Rn(e, 0), Xt(e, r), We(e, he()), n;
            if (t === 6) Xt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !wx(o) && (t = Al(e, r), t === 2 && (l = is(e), l !== 0 && (r = l, t = Ls(e, l))), t === 1)) throw n = xo, Rn(e, 0), Xt(e, r), We(e, he()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(I(345));
                    case 2:
                        En(e, Fe, Rt);
                        break;
                    case 3:
                        if (Xt(e, r), (r & 130023424) === r && (t = Ta + 500 - he(), 10 < t)) {
                            if (wl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Le(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ms(En.bind(null, e, Fe, Rt), t);
                            break;
                        }
                        En(e, Fe, Rt);
                        break;
                    case 4:
                        if (Xt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - mt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vx(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ms(En.bind(null, e, Fe, Rt), r);
                            break;
                        }
                        En(e, Fe, Rt);
                        break;
                    case 5:
                        En(e, Fe, Rt);
                        break;
                    default:
                        throw Error(I(329));
                }
            }
        }
        return We(e, he()), e.callbackNode === n ? Cp.bind(null, e) : null;
    }
    function Ls(e, t) {
        var n = Zr;
        return e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256), e = Al(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && bs(t)), e;
    }
    function bs(e) {
        Fe === null ? Fe = e : Fe.push.apply(Fe, e);
    }
    function wx(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!gt(l(), o)) return !1;
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
    function Xt(e, t) {
        for(t &= ~Na, t &= ~ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - mt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Lc(e) {
        if (Q & 6) throw Error(I(327));
        cr();
        var t = wl(e, 0);
        if (!(t & 1)) return We(e, he()), null;
        var n = Al(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = is(e);
            r !== 0 && (t = r, n = Ls(e, r));
        }
        if (n === 1) throw n = xo, Rn(e, 0), Xt(e, t), We(e, he()), n;
        if (n === 6) throw Error(I(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, En(e, Fe, Rt), We(e, he()), null;
    }
    function Ia(e, t) {
        var n = Q;
        Q |= 1;
        try {
            return e(t);
        } finally{
            Q = n, Q === 0 && (xr = he() + 500, Yl && pn());
        }
    }
    function Dn(e) {
        Jt !== null && Jt.tag === 0 && !(Q & 6) && cr();
        var t = Q;
        Q |= 1;
        var n = rt.transition, r = Y;
        try {
            if (rt.transition = null, Y = 1, e) return e();
        } finally{
            Y = r, rt.transition = n, Q = t, !(Q & 6) && pn();
        }
    }
    function za() {
        He = rr.current, ne(rr);
    }
    function Rn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Xg(n)), ye !== null) for(n = ye.return; n !== null;){
            var r = n;
            switch(ua(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && El();
                    break;
                case 3:
                    hr(), ne(Be), ne(Pe), ya();
                    break;
                case 5:
                    xa(r);
                    break;
                case 4:
                    hr();
                    break;
                case 13:
                    ne(ie);
                    break;
                case 19:
                    ne(ie);
                    break;
                case 10:
                    pa(r.type._context);
                    break;
                case 22:
                case 23:
                    za();
            }
            n = n.return;
        }
        if (Ce = e, ye = e = an(e.current, null), Te = He = t, Se = 0, xo = null, Na = ql = On = 0, Fe = Zr = null, In !== null) {
            for(t = 0; t < In.length; t++)if (n = In[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            In = null;
        }
        return e;
    }
    function Ep(e, t) {
        do {
            var n = ye;
            try {
                if (fa(), sl.current = Ll, Ml) {
                    for(var r = ae.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Ml = !1;
                }
                if (bn = 0, _e = ke = ae = null, Yr = !1, mo = 0, Ea.current = null, n === null || n.return === null) {
                    Se = 1, xo = t, ye = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = Te, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, c = s, d = c.tag;
                        if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                            var f = c.alternate;
                            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
                        }
                        var y = kc(i);
                        if (y !== null) {
                            y.flags &= -257, Sc(y, i, s, l, t), y.mode & 1 && wc(l, u, t), t = y, a = u;
                            var w = t.updateQueue;
                            if (w === null) {
                                var g = new Set;
                                g.add(a), t.updateQueue = g;
                            } else w.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                wc(l, u, t), Ra();
                                break e;
                            }
                            a = Error(I(426));
                        }
                    } else if (le && s.mode & 1) {
                        var x = kc(i);
                        if (x !== null) {
                            !(x.flags & 65536) && (x.flags |= 256), Sc(x, i, s, l, t), ca(gr(a, s));
                            break e;
                        }
                    }
                    l = a = gr(a, s), Se !== 4 && (Se = 2), Zr === null ? Zr = [
                        l
                    ] : Zr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var m = ap(l, a, t);
                                mc(l, m);
                                break e;
                            case 1:
                                s = a;
                                var h = l.type, v = l.stateNode;
                                if (!(l.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (ln === null || !ln.has(v)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = up(l, s, t);
                                    mc(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                Ip(n);
            } catch (C) {
                t = C, ye === n && n !== null && (ye = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function Np() {
        var e = bl.current;
        return bl.current = Ll, e === null ? Ll : e;
    }
    function Ra() {
        (Se === 0 || Se === 3 || Se === 2) && (Se = 4), Ce === null || !(On & 268435455) && !(ql & 268435455) || Xt(Ce, Te);
    }
    function Al(e, t) {
        var n = Q;
        Q |= 2;
        var r = Np();
        (Ce !== e || Te !== t) && (Rt = null, Rn(e, t));
        do try {
            kx();
            break;
        } catch (o) {
            Ep(e, o);
        }
        while (!0);
        if (fa(), Q = n, bl.current = r, ye !== null) throw Error(I(261));
        return Ce = null, Te = 0, Se;
    }
    function kx() {
        for(; ye !== null;)Tp(ye);
    }
    function Sx() {
        for(; ye !== null && !Kh();)Tp(ye);
    }
    function Tp(e) {
        var t = Rp(e.alternate, e, He);
        e.memoizedProps = e.pendingProps, t === null ? Ip(e) : ye = t, Ea.current = null;
    }
    function Ip(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = hx(n, t), n !== null) {
                    n.flags &= 32767, ye = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Se = 6, ye = null;
                    return;
                }
            } else if (n = mx(n, t, He), n !== null) {
                ye = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                ye = t;
                return;
            }
            ye = t = e;
        }while (t !== null);
        Se === 0 && (Se = 5);
    }
    function En(e, t, n) {
        var r = Y, o = rt.transition;
        try {
            rt.transition = null, Y = 1, _x(e, t, n, r);
        } finally{
            rt.transition = o, Y = r;
        }
        return null;
    }
    function _x(e, t, n, r) {
        do cr();
        while (Jt !== null);
        if (Q & 6) throw Error(I(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(I(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (rg(e, l), e === Ce && (ye = Ce = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xo || (Xo = !0, jp(vl, function() {
            return cr(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = rt.transition, rt.transition = null;
            var i = Y;
            Y = 1;
            var s = Q;
            Q |= 4, Ea.current = null, xx(e, n), Sp(n, e), Vg(fs), kl = !!ds, fs = ds = null, e.current = n, yx(n), Qh(), Q = s, Y = i, rt.transition = l;
        } else e.current = n;
        if (Xo && (Xo = !1, Jt = e, Dl = o), l = e.pendingLanes, l === 0 && (ln = null), Zh(n.stateNode), We(e, he()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Ol) throw Ol = !1, e = Ps, Ps = null, e;
        return Dl & 1 && e.tag !== 0 && cr(), l = e.pendingLanes, l & 1 ? e === Ms ? Jr++ : (Jr = 0, Ms = e) : Jr = 0, pn(), null;
    }
    function cr() {
        if (Jt !== null) {
            var e = af(Dl), t = rt.transition, n = Y;
            try {
                if (rt.transition = null, Y = 16 > e ? 16 : e, Jt === null) var r = !1;
                else {
                    if (e = Jt, Jt = null, Dl = 0, Q & 6) throw Error(I(331));
                    var o = Q;
                    for(Q |= 4, L = e.current; L !== null;){
                        var l = L, i = l.child;
                        if (L.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var a = 0; a < s.length; a++){
                                    var u = s[a];
                                    for(L = u; L !== null;){
                                        var c = L;
                                        switch(c.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                Xr(8, c, l);
                                        }
                                        var d = c.child;
                                        if (d !== null) d.return = c, L = d;
                                        else for(; L !== null;){
                                            c = L;
                                            var f = c.sibling, y = c.return;
                                            if (vp(c), c === u) {
                                                L = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                f.return = y, L = f;
                                                break;
                                            }
                                            L = y;
                                        }
                                    }
                                }
                                var w = l.alternate;
                                if (w !== null) {
                                    var g = w.child;
                                    if (g !== null) {
                                        w.child = null;
                                        do {
                                            var x = g.sibling;
                                            g.sibling = null, g = x;
                                        }while (g !== null);
                                    }
                                }
                                L = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, L = i;
                        else e: for(; L !== null;){
                            if (l = L, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    Xr(9, l, l.return);
                            }
                            var m = l.sibling;
                            if (m !== null) {
                                m.return = l.return, L = m;
                                break e;
                            }
                            L = l.return;
                        }
                    }
                    var h = e.current;
                    for(L = h; L !== null;){
                        i = L;
                        var v = i.child;
                        if (i.subtreeFlags & 2064 && v !== null) v.return = i, L = v;
                        else e: for(i = h; L !== null;){
                            if (s = L, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Jl(9, s);
                                }
                            } catch (C) {
                                pe(s, s.return, C);
                            }
                            if (s === i) {
                                L = null;
                                break e;
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return, L = S;
                                break e;
                            }
                            L = s.return;
                        }
                    }
                    if (Q = o, pn(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                        _t.onPostCommitFiberRoot(Wl, e);
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
    function bc(e, t, n) {
        t = gr(n, t), t = ap(e, t, 1), e = on(e, t, 1), t = Le(), e !== null && (ko(e, 1, t), We(e, t));
    }
    function pe(e, t, n) {
        if (e.tag === 3) bc(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                bc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln === null || !ln.has(r))) {
                    e = gr(n, e), e = up(t, e, 1), t = on(t, e, 1), e = Le(), t !== null && (ko(t, 1, e), We(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Cx(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Te & n) === n && (Se === 4 || Se === 3 && (Te & 130023424) === Te && 500 > he() - Ta ? Rn(e, 0) : Na |= n), We(e, t);
    }
    function zp(e, t) {
        t === 0 && (e.mode & 1 ? (t = $o, $o <<= 1, !($o & 130023424) && ($o = 4194304)) : t = 1);
        var n = Le();
        e = At(e, t), e !== null && (ko(e, t, n), We(e, n));
    }
    function Ex(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), zp(e, n);
    }
    function Nx(e, t) {
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
        r !== null && r.delete(t), zp(e, n);
    }
    var Rp;
    Rp = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) Ue = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ue = !1, px(e, t, n);
            Ue = !!(e.flags & 131072);
        }
        else Ue = !1, le && t.flags & 1048576 && Lf(t, Il, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                ul(e, t), e = t.pendingProps;
                var o = fr(t, Pe.current);
                ur(t, n), o = wa(null, t, r, e, o, n);
                var l = ka();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ve(r) ? (l = !0, Nl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ha(t), o.updater = Zl, t.stateNode = o, o._reactInternals = t, ks(t, r, e, n), t = Cs(null, t, r, !0, l, n)) : (t.tag = 0, le && l && aa(t), Me(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(ul(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Ix(r), e = ct(r, e), o){
                        case 0:
                            t = _s(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ec(null, t, r, e, n);
                            break e;
                        case 11:
                            t = _c(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Cc(null, t, r, ct(r.type, e), n);
                            break e;
                    }
                    throw Error(I(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), _s(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), Ec(e, t, r, o, n);
            case 3:
                e: {
                    if (pp(t), e === null) throw Error(I(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, $f(e, t), jl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = gr(Error(I(423)), t), t = Nc(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = gr(Error(I(424)), t), t = Nc(e, t, r, n, o);
                        break e;
                    } else for(Ke = rn(t.stateNode.containerInfo.firstChild), Qe = t, le = !0, ft = null, n = Af(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (pr(), r === o) {
                            t = Ft(e, t, n);
                            break e;
                        }
                        Me(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Uf(t), e === null && ys(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, ps(r, o) ? i = null : l !== null && ps(r, l) && (t.flags |= 32), fp(e, t), Me(e, t, i, n), t.child;
            case 6:
                return e === null && ys(t), null;
            case 13:
                return mp(e, t, n);
            case 4:
                return ga(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mr(t, null, r, n) : Me(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), _c(e, t, r, o, n);
            case 7:
                return Me(e, t, t.pendingProps, n), t.child;
            case 8:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, ee(zl, r._currentValue), r._currentValue = i, l !== null) if (gt(l.value, i)) {
                        if (l.children === o.children && !Be.current) {
                            t = Ft(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var a = s.firstContext; a !== null;){
                                if (a.context === r) {
                                    if (l.tag === 1) {
                                        a = bt(-1, n & -n), a.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                                        }
                                    }
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), vs(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(I(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), vs(i, n, t), i = l.sibling;
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
                return o = t.type, r = t.pendingProps.children, ur(t, n), o = ot(o), r = r(o), t.flags |= 1, Me(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = ct(r, t.pendingProps), o = ct(r.type, o), Cc(e, t, r, o, n);
            case 15:
                return cp(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), ul(e, t), t.tag = 1, Ve(r) ? (e = !0, Nl(t)) : e = !1, ur(t, n), sp(t, r, o), ks(t, r, o, n), Cs(null, t, r, !0, e, n);
            case 19:
                return hp(e, t, n);
            case 22:
                return dp(e, t, n);
        }
        throw Error(I(156, t.tag));
    };
    function jp(e, t) {
        return rf(e, t);
    }
    function Tx(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function nt(e, t, n, r) {
        return new Tx(e, t, n, r);
    }
    function ja(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Ix(e) {
        if (typeof e == "function") return ja(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Xs) return 11;
            if (e === Zs) return 14;
        }
        return 2;
    }
    function an(e, t) {
        var n = e.alternate;
        return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function fl(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") ja(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Kn:
                return jn(n.children, o, l, t);
            case Ys:
                i = 8, o |= 8;
                break;
            case Gi:
                return e = nt(12, n, t, o | 2), e.elementType = Gi, e.lanes = l, e;
            case Hi:
                return e = nt(13, n, t, o), e.elementType = Hi, e.lanes = l, e;
            case Ki:
                return e = nt(19, n, t, o), e.elementType = Ki, e.lanes = l, e;
            case $d:
                return ei(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Ad:
                        i = 10;
                        break e;
                    case Fd:
                        i = 9;
                        break e;
                    case Xs:
                        i = 11;
                        break e;
                    case Zs:
                        i = 14;
                        break e;
                    case Kt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(I(130, e == null ? e : typeof e, ""));
        }
        return t = nt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function jn(e, t, n, r) {
        return e = nt(7, e, r, t), e.lanes = n, e;
    }
    function ei(e, t, n, r) {
        return e = nt(22, e, r, t), e.elementType = $d, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Fi(e, t, n) {
        return e = nt(6, e, null, t), e.lanes = n, e;
    }
    function $i(e, t, n) {
        return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function zx(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wi(0), this.expirationTimes = wi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Pa(e, t, n, r, o, l, i, s, a) {
        return e = new zx(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = nt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, ha(l), e;
    }
    function Rx(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Hn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Pp(e) {
        if (!e) return cn;
        e = e._reactInternals;
        e: {
            if (Fn(e) !== e || e.tag !== 1) throw Error(I(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Ve(t.type)) {
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
            if (Ve(n)) return Pf(e, n, t);
        }
        return t;
    }
    function Mp(e, t, n, r, o, l, i, s, a) {
        return e = Pa(n, r, !0, e, o, l, i, s, a), e.context = Pp(null), n = e.current, r = Le(), o = sn(n), l = bt(r, o), l.callback = t ?? null, on(n, l, o), e.current.lanes = o, ko(e, o, r), We(e, r), e;
    }
    function ti(e, t, n, r) {
        var o = t.current, l = Le(), i = sn(o);
        return n = Pp(n), t.context === null ? t.context = n : t.pendingContext = n, t = bt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = on(o, t, i), e !== null && (ht(e, o, i, l), il(e, o, i)), i;
    }
    function Fl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Oc(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Ma(e, t) {
        Oc(e, t), (e = e.alternate) && Oc(e, t);
    }
    function jx() {
        return null;
    }
    var Lp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function La(e) {
        this._internalRoot = e;
    }
    ni.prototype.render = La.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(I(409));
        ti(e, t, null, null);
    };
    ni.prototype.unmount = La.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Dn(function() {
                ti(null, e, null, null);
            }), t[Dt] = null;
        }
    };
    function ni(e) {
        this._internalRoot = e;
    }
    ni.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = df();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
            Yt.splice(n, 0, e), n === 0 && pf(e);
        }
    };
    function ba(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ri(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Dc() {}
    function Px(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = Fl(i);
                    l.call(u);
                };
            }
            var i = Mp(t, r, e, 0, null, !1, !1, "", Dc);
            return e._reactRootContainer = i, e[Dt] = i.current, ao(e.nodeType === 8 ? e.parentNode : e), Dn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Fl(a);
                s.call(u);
            };
        }
        var a = Pa(e, 0, !1, null, null, !1, !1, "", Dc);
        return e._reactRootContainer = a, e[Dt] = a.current, ao(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
            ti(t, a, n, r);
        }), a;
    }
    function oi(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = Fl(i);
                    s.call(a);
                };
            }
            ti(t, i, e, o);
        } else i = Px(n, t, e, o, r);
        return Fl(i);
    }
    uf = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Ur(t.pendingLanes);
                    n !== 0 && (ea(t, n | 1), We(t, he()), !(Q & 6) && (xr = he() + 500, pn()));
                }
                break;
            case 13:
                Dn(function() {
                    var r = At(e, 1);
                    if (r !== null) {
                        var o = Le();
                        ht(r, e, 1, o);
                    }
                }), Ma(e, 1);
        }
    };
    ta = function(e) {
        if (e.tag === 13) {
            var t = At(e, 134217728);
            if (t !== null) {
                var n = Le();
                ht(t, e, 134217728, n);
            }
            Ma(e, 134217728);
        }
    };
    cf = function(e) {
        if (e.tag === 13) {
            var t = sn(e), n = At(e, t);
            if (n !== null) {
                var r = Le();
                ht(n, e, t, r);
            }
            Ma(e, t);
        }
    };
    df = function() {
        return Y;
    };
    ff = function(e, t) {
        var n = Y;
        try {
            return Y = e, t();
        } finally{
            Y = n;
        }
    };
    rs = function(e, t, n) {
        switch(t){
            case "input":
                if (Xi(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = Ql(r);
                            if (!o) throw Error(I(90));
                            Bd(r), Xi(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Wd(e, n);
                break;
            case "select":
                t = n.value, t != null && lr(e, !!n.multiple, t, !1);
        }
    };
    Zd = Ia;
    Jd = Dn;
    var Mx = {
        usingClientEntryPoint: !1,
        Events: [
            _o,
            Zn,
            Ql,
            Yd,
            Xd,
            Ia
        ]
    }, br = {
        findFiberByHostInstance: Tn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Lx = {
        bundleType: br.bundleType,
        version: br.version,
        rendererPackageName: br.rendererPackageName,
        rendererConfig: br.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: $t.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = tf(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: br.findFiberByHostInstance || jx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Zo.isDisabled && Zo.supportsFiber) try {
            Wl = Zo.inject(Lx), _t = Zo;
        } catch  {}
    }
    Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mx;
    Xe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ba(t)) throw Error(I(200));
        return Rx(e, t, null, n);
    };
    Xe.createRoot = function(e, t) {
        if (!ba(e)) throw Error(I(299));
        var n = !1, r = "", o = Lp;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Pa(e, 1, !1, null, null, n, !1, r, o), e[Dt] = t.current, ao(e.nodeType === 8 ? e.parentNode : e), new La(t);
    };
    Xe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","), Error(I(268, e)));
        return e = tf(t), e = e === null ? null : e.stateNode, e;
    };
    Xe.flushSync = function(e) {
        return Dn(e);
    };
    Xe.hydrate = function(e, t, n) {
        if (!ri(t)) throw Error(I(200));
        return oi(null, e, t, !0, n);
    };
    Xe.hydrateRoot = function(e, t, n) {
        if (!ba(e)) throw Error(I(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Lp;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Mp(t, null, e, 1, n ?? null, o, !1, l, i), e[Dt] = t.current, ao(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new ni(t);
    };
    Xe.render = function(e, t, n) {
        if (!ri(t)) throw Error(I(200));
        return oi(null, e, t, !1, n);
    };
    Xe.unmountComponentAtNode = function(e) {
        if (!ri(e)) throw Error(I(40));
        return e._reactRootContainer ? (Dn(function() {
            oi(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Dt] = null;
            });
        }), !0) : !1;
    };
    Xe.unstable_batchedUpdates = Ia;
    Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ri(n)) throw Error(I(200));
        if (e == null || e._reactInternals === void 0) throw Error(I(38));
        return oi(e, t, n, !1, r);
    };
    Xe.version = "18.3.1-next-f1338f8080-20240426";
    function bp() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
        } catch (e) {
            console.error(e);
        }
    }
    bp(), Ld.exports = Xe;
    var bx = Ld.exports, Ac = bx;
    Vi.createRoot = Ac.createRoot, Vi.hydrateRoot = Ac.hydrateRoot;
    const Ox = "modulepreload", Dx = function(e) {
        return "/grid-draw/" + e;
    }, Fc = {}, Oa = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = Dx(a), a in Fc) return;
                Fc[a] = !0;
                const u = a.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${c}`)) return;
                const d = document.createElement("link");
                if (d.rel = u ? "stylesheet" : Ox, u || (d.as = "script"), d.crossOrigin = "", d.href = a, s && d.setAttribute("nonce", s), document.head.appendChild(d), u) return new Promise((f, y)=>{
                    d.addEventListener("load", f), d.addEventListener("error", ()=>y(new Error(`Unable to preload CSS for ${a}`)));
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
    }, $c = (e)=>{
        let t;
        const n = new Set, r = (u, c)=>{
            const d = typeof u == "function" ? u(t) : u;
            if (!Object.is(d, t)) {
                const f = t;
                t = c ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((y)=>y(t, f));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, Ax = (e)=>e ? $c(e) : $c, Fx = (e)=>e;
    function $x(e, t = Fx) {
        const n = oe.useSyncExternalStore(e.subscribe, oe.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), oe.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return oe.useDebugValue(n), n;
    }
    const Uc = (e)=>{
        const t = Ax(e), n = (r)=>$x(t, r);
        return Object.assign(n, t), n;
    }, Op = (e)=>e ? Uc(e) : Uc;
    function Ux(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    const Bx = 1.75;
    function Os(e) {
        return {
            r: e.minRow - Bx,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function Ds(e) {
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
    function Pt(e) {
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
    function Bc(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, c = (a - e) * (a - e) + (u - t) * (u - t);
            c <= i && (l = s, i = c);
        }
        return l;
    }
    const Vc = new Map;
    function Vx() {
        Oa(()=>Promise.resolve().then(()=>ay), void 0).then((e)=>e.useGridStore.getState().grid?.render());
    }
    function Da(e) {
        const t = Vc.get(e);
        if (t) return t;
        const n = new Image;
        return n.crossOrigin = "anonymous", n.decoding = "async", n.onload = ()=>{
            Vx();
        }, n.onerror = ()=>{}, n.src = e, Vc.set(e, n), n;
    }
    function Wx(e) {
        return new Promise((t, n)=>{
            const r = Da(e);
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
    function Gx(e, t) {
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
    function pl(e, t) {
        switch(Gx(e, t), t.kind){
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
                e.insert_image(t.idx, t.image.r1, t.image.c1, t.image.r2, t.image.c2, t.image.url, Da(t.image.url));
                break;
            case "deleteImage":
                e.delete_image(t.idx);
                break;
            case "batch":
                e.set_render_paused?.(!0);
                try {
                    for (const n of t.edits)pl(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function Dp(e) {
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
                    ].reverse().map(Dp)
                };
        }
    }
    function Ap(e, t) {
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
                        const o = Ap(e.edits[r], t.edits[r]);
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
    const Hx = 100, Kx = 600;
    class Qx {
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
            this.undoStack.push(t), this.undoStack.length > Hx && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (pl(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Kx) {
                const i = this.undoStack[this.undoStack.length - 1], s = Ap(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (pl(t, Dp(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (pl(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
    const at = new Qx;
    function Wc(e, t) {
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
    function Gc(e, t) {
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
    function Hc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Kc(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Qc(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            boxW: n[3],
            boxH: n[4]
        };
    }
    function Yc(e, t) {
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
    function Xc(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Zc(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            url: e.get_image_url(t)
        };
    }
    const Fp = [
        1,
        1.5,
        2,
        3,
        5
    ], $p = [
        1,
        1.5,
        2,
        3,
        5
    ], yr = 8, Vr = [
        1,
        2,
        4,
        8
    ], ml = (e)=>Math.round(e * 10), Yx = (e)=>e / 10;
    function Or(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Up(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" || e.type === "image" && t.type === "image" ? e.index === t.index : !1;
    }
    function Bp(e, t) {
        return t.some((n)=>Up(n, e));
    }
    function Xx(e, t) {
        return Bp(e, t) ? t : [
            ...t,
            e
        ];
    }
    function Zx(e, t) {
        return t.filter((n)=>!Up(n, e));
    }
    function $e(e, t) {
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
    function Jx(e, t) {
        const n = $e(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function qr(e, t, n = {}) {
        const r = $e(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, c = [], d = [], f = [], y = [], w = [];
        for (const g of t)if (g.type === "cell") c.push([
            g.row - a,
            g.col - u,
            e.get_cell_color(g.row, g.col)
        ]);
        else if (g.type === "line") {
            const x = e.get_line(g.index);
            d.push([
                x[0] - a,
                x[1] - u,
                x[2] - a,
                x[3] - u,
                x[4],
                x[5]
            ]);
        } else if (g.type === "rect") {
            const x = e.get_rect(g.index);
            f.push([
                x[0] - a,
                x[1] - u,
                x[2] - a,
                x[3] - u,
                x[4],
                x[5]
            ]);
        } else if (g.type === "text") {
            const x = e.get_text(g.index);
            y.push([
                x[0] - a,
                x[1] - u,
                x[2],
                e.get_text_size(g.index),
                x[3],
                x[4],
                x[5],
                x[6],
                e.get_text_string(g.index)
            ]);
        } else if (g.type === "image") {
            const x = e.get_image(g.index);
            w.push([
                x[0] - a,
                x[1] - u,
                x[2] - a,
                x[3] - u,
                e.get_image_url(g.index)
            ]);
        }
        return c.sort((g, x)=>g[0] - x[0] || g[1] - x[1]), {
            w: s - u + 1,
            h: i - a + 1,
            cells: c,
            lines: d,
            rects: f,
            texts: y,
            images: w,
            sub: yr
        };
    }
    function Jc(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function Wt(e, t, n, r, o) {
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
    function qc(e) {
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
    const se = Op((e, t)=>({
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
                    coalesceKey: `fill:${Or(o)}`
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
                    coalesceKey: `outline:${Or(o)}`
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
                    coalesceKey: `size:${Or(o)}`
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
                if (!r || (r.set_draw_line_width(ml(n)), o.length === 0)) return;
                const l = ml(n), i = [];
                for (const s of o)s.type === "line" && i.push({
                    kind: "resizeLine",
                    idx: s.index,
                    from: r.get_line(s.index)[5],
                    to: l
                });
                i.length !== 0 && (t().commitEdits(i, {
                    coalesceKey: `lineWidth:${Or(o)}`
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
                    coalesceKey: `align:${Or(l)}`
                }), t().renderSelection());
            },
            setSubdivision: (n)=>{
                const r = Vr.includes(n) ? n : 1;
                e({
                    subdivision: r
                });
                const { grid: o } = t();
                o?.set_subdivision(r);
            },
            cycleSubdivision: ()=>{
                const n = t().subdivision, r = Vr[(Vr.indexOf(n) + 1) % Vr.length];
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
            setSelectedItems: (n)=>{
                e({
                    selectedItems: n
                }), t().renderSelection(), setTimeout(()=>t().updateOutputs(), 0);
            },
            selectAll: ()=>{
                const { grid: n } = t();
                if (!n) return;
                t().textEdit && t().commitTextEdit();
                const r = qc(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = Xx(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = Zx(n, r);
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
                    for (const i of l)i.type === "cell" ? r.highlight_cell(i.row, i.col) : i.type === "line" ? r.highlight_line(i.index) : i.type === "rect" ? r.highlight_rect(i.index) : i.type === "text" ? r.highlight_text(i.index) : i.type === "image" && r.highlight_image(i.index);
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
                for(let x = i; x <= s; x++)for(let m = a; m <= u; m++)r.get_cell(x, m) && c.push({
                    type: "cell",
                    row: x,
                    col: m
                });
                const d = r.get_line_count();
                for(let x = 0; x < d; x++)r.line_intersects_box(x, i, a, s, u) && c.push({
                    type: "line",
                    index: x
                });
                const f = r.get_rect_count();
                for(let x = 0; x < f; x++)r.rect_intersects_box(x, i, a, s, u) && c.push({
                    type: "rect",
                    index: x
                });
                const y = r.get_text_count();
                for(let x = 0; x < y; x++)r.text_intersects_box(x, i, a, s, u) && c.push({
                    type: "text",
                    index: x
                });
                const w = r.get_image_count();
                for(let x = 0; x < w; x++)r.image_intersects_box(x, i, a, s, u) && c.push({
                    type: "image",
                    index: x
                });
                let g = [
                    ...l
                ];
                for (const x of c)Bp(x, g) || g.push(x);
                e({
                    selectedItems: g,
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
                    for (const C of l)if (C.type === "cell") {
                        if (!r.get_cell(C.row, C.col)) continue;
                        const R = r.get_cell_color(C.row, C.col), j = C.row + a, E = C.col + u;
                        d.push({
                            kind: "setCellState",
                            row: C.row,
                            col: C.col,
                            from: {
                                filled: !0,
                                color: R
                            },
                            to: {
                                filled: !1,
                                color: R
                            }
                        }), f.push({
                            kind: "setCellState",
                            row: j,
                            col: E,
                            from: {
                                filled: r.get_cell(j, E),
                                color: r.get_cell_color(j, E)
                            },
                            to: {
                                filled: !0,
                                color: R
                            }
                        }), c.push({
                            type: "cell",
                            row: j,
                            col: E
                        });
                    }
                    const y = [], w = l.filter((C)=>C.type === "line");
                    for (const C of w)y.push({
                        kind: "moveLine",
                        idx: C.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "line",
                        index: C.index
                    });
                    const g = [], x = l.filter((C)=>C.type === "rect");
                    for (const C of x)g.push({
                        kind: "moveRect",
                        idx: C.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "rect",
                        index: C.index
                    });
                    const m = [], h = l.filter((C)=>C.type === "text");
                    for (const C of h)m.push({
                        kind: "moveText",
                        idx: C.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "text",
                        index: C.index
                    });
                    const v = [], S = l.filter((C)=>C.type === "image");
                    for (const C of S)v.push({
                        kind: "moveImage",
                        idx: C.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "image",
                        index: C.index
                    });
                    t().commitEdits([
                        ...d,
                        ...f,
                        ...y,
                        ...g,
                        ...m,
                        ...v
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
                const { grid: r } = t(), o = r ? n.shape === "line" ? Hc(r, n.index) : n.shape === "rect" ? Kc(r, n.index) : n.shape === "image" ? Xc(r, n.index) : Qc(r, n.index) : null;
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
                r && o && (o.shape === "line" ? (r.set_line_endpoint(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setLineGeom",
                        idx: o.index,
                        from: l,
                        to: Hc(r, o.index)
                    }
                ])) : o.shape === "rect" ? (r.resize_rect(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Kc(r, o.index)
                    }
                ])) : o.shape === "image" ? (r.resize_image(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setImageGeom",
                        idx: o.index,
                        from: l,
                        to: Xc(r, o.index)
                    }
                ])) : (r.resize_text(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setTextFrame",
                        idx: o.index,
                        from: l,
                        to: Qc(r, o.index)
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
                if (n && r && o) if (r.shape === "text") {
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
                const i = $e(l, o);
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
                const { cx: s, cy: a, startAngle: u } = i, c = Jc(Math.atan2(r - a, n - s) - u);
                if (o.render(), c === 0) {
                    t().renderSelection();
                    return;
                }
                const d = $e(l, o);
                if (!d) return;
                const f = Math.round((d.minRow + d.maxRow) / 2), y = Math.round((d.minCol + d.maxCol) / 2);
                for (const w of l)if (w.type === "cell") {
                    const g = Wt(w.row, w.col, c, f, y);
                    o.preview_cell(g.r, g.c, o.get_cell_color(w.row, w.col));
                } else if (w.type === "line") {
                    const g = o.get_line(w.index);
                    if (g.length >= 6) {
                        const x = Wt(g[0], g[1], c, f, y), m = Wt(g[2], g[3], c, f, y);
                        o.preview_line(x.r, x.c, m.r, m.c, g[4], g[5]);
                    }
                } else if (w.type === "rect") {
                    const g = o.get_rect(w.index);
                    if (g.length >= 6) {
                        const x = Wt(g[0], g[1], c, f, y), m = Wt(g[2], g[3], c, f, y);
                        o.preview_rect(x.r, x.c, m.r, m.c, g[4], g[5]);
                    }
                } else if (w.type === "text") {
                    const g = o.get_text(w.index);
                    if (g.length >= 7) {
                        const x = Wt(g[0], g[1], c, f, y);
                        o.preview_text(x.r, x.c, g[2], o.get_text_size(w.index), g[3], g[4], g[5], g[6], o.get_text_string(w.index));
                    }
                } else if (w.type === "image") {
                    const g = o.get_image(w.index);
                    if (g.length >= 4) {
                        const x = Wt(g[0], g[1], c, f, y);
                        o.preview_image(x.r, x.c, x.r + (g[2] - g[0]), x.c + (g[3] - g[1]), Da(o.get_image_url(w.index)));
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
                const { cx: s, cy: a, startAngle: u } = i, c = Jc(Math.atan2(r - a, n - s) - u), d = $e(l, o);
                if (c === 0 || !d) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const f = Math.round((d.minRow + d.maxRow) / 2), y = Math.round((d.minCol + d.maxCol) / 2), w = (v, S)=>Wt(v, S, c, f, y), g = [], x = [], m = [], h = [];
                for (const v of l)if (v.type === "cell") {
                    if (!o.get_cell(v.row, v.col)) continue;
                    const S = o.get_cell_color(v.row, v.col), C = w(v.row, v.col);
                    g.push({
                        kind: "setCellState",
                        row: v.row,
                        col: v.col,
                        from: {
                            filled: !0,
                            color: S
                        },
                        to: {
                            filled: !1,
                            color: S
                        }
                    }), x.push({
                        kind: "setCellState",
                        row: C.r,
                        col: C.c,
                        from: {
                            filled: o.get_cell(C.r, C.c),
                            color: o.get_cell_color(C.r, C.c)
                        },
                        to: {
                            filled: !0,
                            color: S
                        }
                    }), h.push({
                        type: "cell",
                        row: C.r,
                        col: C.c
                    });
                } else if (v.type === "line") {
                    const S = o.get_line(v.index);
                    if (S.length < 5) continue;
                    const C = w(S[0], S[1]), R = w(S[2], S[3]);
                    m.push({
                        kind: "setLineGeom",
                        idx: v.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: C.r,
                            c1: C.c,
                            r2: R.r,
                            c2: R.c
                        }
                    }), h.push({
                        type: "line",
                        index: v.index
                    });
                } else if (v.type === "rect") {
                    const S = o.get_rect(v.index);
                    if (S.length < 6) continue;
                    const C = w(S[0], S[1]), R = w(S[2], S[3]);
                    m.push({
                        kind: "setRectGeom",
                        idx: v.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: C.r,
                            c1: C.c,
                            r2: R.r,
                            c2: R.c
                        }
                    }), h.push({
                        type: "rect",
                        index: v.index
                    });
                } else if (v.type === "text") {
                    const S = o.get_text(v.index);
                    if (S.length < 3) continue;
                    const C = w(S[0], S[1]);
                    m.push({
                        kind: "moveText",
                        idx: v.index,
                        dRow: C.r - S[0],
                        dCol: C.c - S[1]
                    }), h.push({
                        type: "text",
                        index: v.index
                    });
                } else if (v.type === "image") {
                    const S = o.get_image(v.index);
                    if (S.length < 4) continue;
                    const C = w(S[0], S[1]);
                    m.push({
                        kind: "moveImage",
                        idx: v.index,
                        dRow: C.r - S[0],
                        dCol: C.c - S[1]
                    }), h.push({
                        type: "image",
                        index: v.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits([
                    ...g,
                    ...x,
                    ...m
                ]), e({
                    selectedItems: h
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
                const { grid: l, colorIdx: i, subdivision: s } = t();
                if (!l) return;
                const a = yr / s, u = [];
                for(let c = 0; c < a; c++)for(let d = 0; d < a; d++){
                    const f = n + c, y = r + d, w = o && i < 6 ? {
                        filled: !0,
                        color: i
                    } : {
                        filled: !1,
                        color: i < 6 ? i : l.get_cell_color(f, y)
                    }, g = {
                        filled: l.get_cell(f, y),
                        color: l.get_cell_color(f, y)
                    };
                    g.filled === w.filled && (!w.filled || g.color === w.color) || u.push({
                        kind: "setCellState",
                        row: f,
                        col: y,
                        from: g,
                        to: w
                    });
                }
                u.length > 0 && t().commitEdits(u);
            },
            endDrawStroke: ()=>{
                at.endBatch(), e({
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
                            width: ml(a)
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
                const a = o.hit_test_image(n, r);
                if (a >= 0) return {
                    type: "image",
                    index: a
                };
                const u = o.get_cell_size(), c = Math.floor(n / u), d = Math.floor(r / u);
                return o.get_cell(d, c) ? {
                    type: "cell",
                    row: d,
                    col: c
                } : null;
            },
            copy: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n || r.length === 0) return;
                const o = Jx(r, n);
                if (!o) return;
                const l = [], i = [], s = [], a = [], u = [];
                for (const c of r)if (c.type === "cell") l.push({
                    relRow: c.row - o.minRow,
                    relCol: c.col - o.minCol,
                    color: n.get_cell_color(c.row, c.col)
                });
                else if (c.type === "line") {
                    const d = n.get_line(c.index);
                    d.length >= 6 && i.push({
                        relR1: d[0] - o.minRow,
                        relC1: d[1] - o.minCol,
                        relR2: d[2] - o.minRow,
                        relC2: d[3] - o.minCol,
                        color: d[4],
                        width: d[5]
                    });
                } else if (c.type === "rect") {
                    const d = n.get_rect(c.index);
                    d.length >= 6 && s.push({
                        relR1: d[0] - o.minRow,
                        relC1: d[1] - o.minCol,
                        relR2: d[2] - o.minRow,
                        relC2: d[3] - o.minCol,
                        color: d[4],
                        outline: d[5]
                    });
                } else if (c.type === "text") {
                    const d = n.get_text(c.index);
                    d.length >= 7 && a.push({
                        relR: d[0] - o.minRow,
                        relC: d[1] - o.minCol,
                        color: d[2],
                        size: n.get_text_size(c.index),
                        boxW: d[3],
                        boxH: d[4],
                        halign: d[5],
                        valign: d[6],
                        text: n.get_text_string(c.index)
                    });
                } else if (c.type === "image") {
                    const d = n.get_image(c.index);
                    d.length >= 4 && u.push({
                        relR1: d[0] - o.minRow,
                        relC1: d[1] - o.minCol,
                        relR2: d[2] - o.minRow,
                        relC2: d[3] - o.minCol,
                        url: n.get_image_url(c.index)
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
                let u = n.get_line_count(), c = n.get_rect_count(), d = n.get_text_count(), f = n.get_image_count();
                for (const y of r.cells){
                    const w = s.row + y.relRow, g = s.col + y.relCol;
                    a.push({
                        kind: "setCellState",
                        row: w,
                        col: g,
                        from: {
                            filled: n.get_cell(w, g),
                            color: n.get_cell_color(w, g)
                        },
                        to: {
                            filled: !0,
                            color: y.color
                        }
                    }), l.push({
                        type: "cell",
                        row: w,
                        col: g
                    });
                }
                for (const y of r.lines){
                    const w = s.row + y.relR1, g = s.col + y.relC1, x = s.row + y.relR2, m = s.col + y.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: w,
                            c1: g,
                            r2: x,
                            c2: m,
                            color: y.color,
                            width: y.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const y of r.rects){
                    const w = s.row + y.relR1, g = s.col + y.relC1, x = s.row + y.relR2, m = s.col + y.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: w,
                            c1: g,
                            r2: x,
                            c2: m,
                            fill: y.color,
                            outline: y.outline
                        }
                    }), l.push({
                        type: "rect",
                        index: c
                    }), c++;
                }
                for (const y of r.texts ?? []){
                    const w = s.row + y.relR, g = s.col + y.relC;
                    a.push({
                        kind: "addText",
                        idx: d,
                        text: {
                            r: w,
                            c: g,
                            color: y.color,
                            size: y.size,
                            boxW: y.boxW,
                            boxH: y.boxH,
                            halign: y.halign,
                            valign: y.valign,
                            text: y.text
                        }
                    }), l.push({
                        type: "text",
                        index: d
                    }), d++;
                }
                for (const y of r.images ?? [])a.push({
                    kind: "addImage",
                    idx: f,
                    image: {
                        r1: s.row + y.relR1,
                        c1: s.col + y.relC1,
                        r2: s.row + y.relR2,
                        c2: s.col + y.relC2,
                        url: y.url
                    }
                }), l.push({
                    type: "image",
                    index: f
                }), f++;
                t().commitEdits(a), n.render(), e({
                    selectedItems: l
                }), t().renderSelection(), o();
            },
            deleteSelected: ()=>{
                const { grid: n, selectedItems: r, updateOutputs: o } = t();
                if (!n || r.length === 0) return;
                const l = r.filter((c)=>c.type === "line").map((c)=>c.index).sort((c, d)=>d - c), i = r.filter((c)=>c.type === "rect").map((c)=>c.index).sort((c, d)=>d - c), s = r.filter((c)=>c.type === "text").map((c)=>c.index).sort((c, d)=>d - c), a = r.filter((c)=>c.type === "image").map((c)=>c.index).sort((c, d)=>d - c), u = [];
                for (const c of r)if (c.type === "cell") {
                    const d = n.get_cell_color(c.row, c.col);
                    u.push({
                        kind: "setCellState",
                        row: c.row,
                        col: c.col,
                        from: {
                            filled: !0,
                            color: d
                        },
                        to: {
                            filled: !1,
                            color: d
                        }
                    });
                }
                for (const c of l)u.push({
                    kind: "deleteLine",
                    idx: c,
                    line: Wc(n, c)
                });
                for (const c of i)u.push({
                    kind: "deleteRect",
                    idx: c,
                    rect: Gc(n, c)
                });
                for (const c of s)u.push({
                    kind: "deleteText",
                    idx: c,
                    text: Yc(n, c)
                });
                for (const c of a)u.push({
                    kind: "deleteImage",
                    idx: c,
                    image: Zc(n, c)
                });
                t().commitEdits(u), e({
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
                const o = qr(n, r);
                if (!o) return;
                const l = $e(r, n), i = l ? [
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
                const i = qr(n, r);
                if (!i) return null;
                const s = $e(r, n), a = l ?? [
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
                let a = l.get_line_count(), u = l.get_rect_count(), c = l.get_text_count(), d = l.get_image_count();
                const f = yr / (n.sub ?? 1);
                for (const [y, w, g] of n.cells ?? []){
                    const x = r + y * f, m = o + w * f;
                    i.push({
                        kind: "setCellState",
                        row: x,
                        col: m,
                        from: {
                            filled: l.get_cell(x, m),
                            color: l.get_cell_color(x, m)
                        },
                        to: {
                            filled: !0,
                            color: g
                        }
                    }), s.push({
                        type: "cell",
                        row: x,
                        col: m
                    });
                }
                for (const [y, w, g, x, m, h] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + y * f,
                        c1: o + w * f,
                        r2: r + g * f,
                        c2: o + x * f,
                        color: m,
                        width: h ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [y, w, g, x, m, h] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + y * f,
                        c1: o + w * f,
                        r2: r + g * f,
                        c2: o + x * f,
                        fill: m,
                        outline: h
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const y of n.texts ?? []){
                    const w = Array.isArray(y) ? y.length >= 9 ? {
                        r: y[0],
                        c: y[1],
                        color: y[2],
                        size: y[3],
                        boxW: y[4],
                        boxH: y[5],
                        halign: y[6],
                        valign: y[7],
                        text: y[8]
                    } : {
                        r: y[0],
                        c: y[1],
                        color: y[2],
                        size: y[3],
                        text: y[4]
                    } : y;
                    if (!w || typeof w.r != "number" || typeof w.c != "number") continue;
                    const g = w;
                    i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + g.r * f,
                            c: o + g.c * f,
                            color: g.color ?? 0,
                            size: g.size ?? 1,
                            boxW: (g.boxW ?? 0) * f,
                            boxH: (g.boxH ?? 0) * f,
                            halign: g.halign ?? 0,
                            valign: g.valign ?? 0,
                            text: String(g.text ?? "")
                        }
                    }), s.push({
                        type: "text",
                        index: c
                    }), c++;
                }
                for (const y of n.images ?? []){
                    if (!Array.isArray(y) || y.length < 5) continue;
                    const [w, g, x, m, h] = y;
                    typeof h == "string" && (i.push({
                        kind: "addImage",
                        idx: d,
                        image: {
                            r1: r + w * f,
                            c1: o + g * f,
                            r2: r + x * f,
                            c2: o + m * f,
                            url: h
                        }
                    }), s.push({
                        type: "image",
                        index: d
                    }), d++);
                }
                i.length !== 0 && (t().commitEdits(i), l.render(), e({
                    selectedItems: s
                }), t().renderSelection(), t().updateOutputs());
            },
            serializeWholeGrid: ()=>{
                const { grid: n } = t();
                return n ? qr(n, qc(n), {
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
                const { grid: n, selectedItems: r } = t(), o = r.filter((g)=>g.type === "cell");
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
                ], i = [], s = o.map((g)=>({
                        row: g.row,
                        col: g.col
                    })), a = Ux(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const g of o)if (n.get_cell(g.row, g.col)) {
                    const x = n.get_cell_color(g.row, g.col), m = l[x] ?? "#000000";
                    i.push({
                        row: g.row - a.minRow,
                        col: g.col - a.minCol,
                        color: m
                    });
                }
                i.sort((g, x)=>g.row - x.row || g.col - x.col);
                const u = a.maxRow - a.minRow + 1, c = a.maxCol - a.minCol + 1, d = [], f = [];
                for (const g of i)g.color === "#000000" && (d.push(g.row), f.push(g.col));
                const y = d.map(()=>"1.0").join(", "), w = `import torch

indices = torch.tensor([[${d.join(", ")}], [${f.join(", ")}]])
values = torch.tensor([${y}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${u}, ${c}))
sparse = sparse.coalesce()`;
                e({
                    jsonOutput: JSON.stringify(i, null, 2),
                    tensorOutput: w
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
                        const y = o.row + c, w = o.col + d, g = l[f] ?? 0;
                        r.set_draw_color(g), r.set_cell(y, w, !0), s.push({
                            type: "cell",
                            row: y,
                            col: w
                        });
                    }
                    else for(let u = 0; u < i.length; u++){
                        const c = i[u];
                        if (Array.isArray(c)) for(let d = 0; d < c.length; d++){
                            const f = o.row + u, y = o.col + d, w = c[d];
                            if (w && typeof w == "object" && w.color) {
                                const g = l[w.color] ?? 0;
                                r.set_draw_color(g), r.set_cell(f, y, !0), s.push({
                                    type: "cell",
                                    row: f,
                                    col: y
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
                for(let i = n.get_image_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteImage",
                    idx: i,
                    image: Zc(n, i)
                });
                for(let i = n.get_text_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteText",
                    idx: i,
                    text: Yc(n, i)
                });
                for(let i = n.get_rect_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteRect",
                    idx: i,
                    rect: Gc(n, i)
                });
                for(let i = n.get_line_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteLine",
                    idx: i,
                    line: Wc(n, i)
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
                    for (const o of r)o.type === "cell" ? n.highlight_cell(o.row, o.col) : o.type === "line" ? n.highlight_line(o.index) : o.type === "rect" ? n.highlight_rect(o.index) : o.type === "text" ? n.highlight_text(o.index) : o.type === "image" && n.highlight_image(o.index);
                    if (r.length === 1) {
                        const o = r[0];
                        if (o.type === "line") {
                            const l = Ds(n.get_line(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "rect") {
                            const l = Pt(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "text") {
                            const l = n.get_text(o.index), i = Pt([
                                l[0],
                                l[1],
                                l[0] + l[4],
                                l[1] + l[3]
                            ]);
                            for (const s of i)n.draw_handle(s.r, s.c);
                        } else if (o.type === "image") {
                            const l = Pt(n.get_image(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = $e(r, n);
                        if (o) {
                            const l = Os(o);
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
        })), qx = ()=>se((e)=>e.grid), ey = ()=>se((e)=>e.tool), ty = ()=>se((e)=>e.colorIdx), ny = ()=>se((e)=>e.outlineIdx), ry = ()=>se((e)=>e.selectedItems), oy = ()=>se((e)=>e.clipboard), ly = ()=>se((e)=>e.jsonOutput), iy = ()=>se((e)=>e.tensorOutput), sy = ()=>se((e)=>e.selectMode), ay = Object.freeze(Object.defineProperty({
        __proto__: null,
        CELL_UNITS: yr,
        LINE_WIDTHS: $p,
        SUBDIVISIONS: Vr,
        TEXT_SIZES: Fp,
        getSelectionBoundsAll: $e,
        serializeSelection: qr,
        tenthsToWidth: Yx,
        useClipboard: oy,
        useColorIdx: ty,
        useGrid: qx,
        useGridStore: se,
        useJsonOutput: ly,
        useOutlineIdx: ny,
        useSelectMode: sy,
        useSelectedItems: ry,
        useTensorOutput: iy,
        useTool: ey,
        widthToTenths: ml
    }, Symbol.toStringTag, {
        value: "Module"
    })), ed = 7;
    function uy(e) {
        const t = e.get_schema_version?.();
        (t !== ed || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${ed}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function cy(e, t, n) {
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
                    const s = await Oa(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    uy(a), se.getState().setGrid(a), o({
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
    const dy = {}, Vp = dy?.VITE_API_URL ?? "https://api.seanneilan.com", Aa = "grid-draw-token", As = "grid-draw-auth-expired";
    function Wp() {
        return localStorage.getItem(Aa);
    }
    function Gp() {
        localStorage.removeItem(Aa);
    }
    async function fy(e, t) {
        const n = await fetch(`${Vp}/api/login`, {
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
        const { token: r } = await n.json();
        localStorage.setItem(Aa, r);
    }
    async function Et(e, t, n) {
        const r = {}, o = Wp();
        o && (r.Authorization = `Bearer ${o}`), n !== void 0 && (r["Content-Type"] = "application/json");
        const l = await fetch(`${Vp}${t}`, {
            method: e,
            headers: r,
            body: n === void 0 ? void 0 : JSON.stringify(n)
        });
        if (l.status === 401) throw Gp(), window.dispatchEvent(new Event(As)), new Error("session expired — please log in again");
        if (!l.ok) {
            const i = await l.json().catch(()=>null);
            throw new Error(i?.error ?? `${e} ${t} failed (${l.status})`);
        }
        if (l.status !== 204) return await l.json();
    }
    function py() {
        return Et("GET", "/api/designs");
    }
    function my(e) {
        return Et("GET", `/api/designs/${e}`);
    }
    function hy(e) {
        return Et("GET", `/api/designs?name=${encodeURIComponent(e)}`);
    }
    async function gy(e, t, n) {
        return (await Et("PUT", "/api/designs", {
            name: e,
            design: t,
            history: n
        })).id;
    }
    function xy(e) {
        return Et("DELETE", `/api/designs/${e}`);
    }
    function td() {
        return Et("GET", "/api/examples");
    }
    async function yy(e, t, n) {
        return (await Et("POST", "/api/examples", {
            input: e,
            output: t,
            delta: n
        })).id;
    }
    function vy(e, t, n, r) {
        return Et("PUT", `/api/examples/${e}`, {
            input: t,
            output: n,
            delta: r
        }).then(()=>{});
    }
    function wy(e) {
        return Et("DELETE", `/api/examples/${e}`);
    }
    async function ky(e) {
        const t = e.type || "application/octet-stream", { uploadUrl: n, publicUrl: r } = await Et("POST", "/api/images/presign", {
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
    const Hp = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const Sy = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const _y = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const nd = (e)=>{
        const t = _y(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var Cy = {
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
    const Ey = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const Ny = N.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>N.createElement("svg", {
            ref: a,
            ...Cy,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Hp("lucide", o),
            ...!l && !Ey(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, c])=>N.createElement(u, c)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const Kp = (e, t)=>{
        const n = N.forwardRef(({ className: r, ...o }, l)=>N.createElement(Ny, {
                ref: l,
                iconNode: t,
                className: Hp(`lucide-${Sy(nd(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = nd(e), n;
    };
    const Ty = [
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
    ], Iy = Kp("redo-2", Ty);
    const zy = [
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
    ], Ry = Kp("undo-2", zy);
    function Qp(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Qp(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Yp() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Qp(e)) && (r && (r += " "), r += t);
        return r;
    }
    const rd = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, od = Yp, Xp = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return od(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const c = n?.[u], d = l?.[u];
                if (c === null) return null;
                const f = rd(c) || rd(d);
                return o[u][f];
            }), s = n && Object.entries(n).reduce((u, c)=>{
                let [d, f] = c;
                return f === void 0 || (u[d] = f), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c)=>{
                let { class: d, className: f, ...y } = c;
                return Object.entries(y).every((w)=>{
                    let [g, x] = w;
                    return Array.isArray(x) ? x.includes({
                        ...l,
                        ...s
                    }[g]) : {
                        ...l,
                        ...s
                    }[g] === x;
                }) ? [
                    ...u,
                    d,
                    f
                ] : u;
            }, []);
            return od(e, i, a, n?.class, n?.className);
        };
    function ld(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Zp(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = ld(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : ld(e[o], null);
                }
            };
        };
    }
    function Fs(...e) {
        return N.useCallback(Zp(...e), e);
    }
    function $l(e) {
        const t = Py(e), n = N.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = N.Children.toArray(l), a = s.find(Ly);
            if (a) {
                const u = a.props.children, c = s.map((d)=>d === a ? N.Children.count(u) > 1 ? N.Children.only(null) : N.isValidElement(u) ? u.props.children : null : d);
                return p.jsx(t, {
                    ...i,
                    ref: o,
                    children: N.isValidElement(u) ? N.cloneElement(u, void 0, c) : null
                });
            }
            return p.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var jy = $l("Slot");
    function Py(e) {
        const t = N.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (N.isValidElement(o)) {
                const i = Oy(o), s = by(l, o.props);
                return o.type !== N.Fragment && (s.ref = r ? Zp(r, i) : i), N.cloneElement(o, s);
            }
            return N.Children.count(o) > 1 ? N.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var My = Symbol("radix.slottable");
    function Ly(e) {
        return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === My;
    }
    function by(e, t) {
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
    function Oy(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var Dy = [
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
    ], yo = Dy.reduce((e, t)=>{
        const n = $l(`Primitive.${t}`), r = N.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, a = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), p.jsx(a, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function Fa(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = N.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (d)=>{
                const { scope: f, children: y, ...w } = d, g = f?.[e]?.[a] || s, x = N.useMemo(()=>w, Object.values(w));
                return p.jsx(g.Provider, {
                    value: x,
                    children: y
                });
            };
            u.displayName = l + "Provider";
            function c(d, f) {
                const y = f?.[e]?.[a] || s, w = N.useContext(y);
                if (w) return w;
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
            Ay(o, ...t)
        ];
    }
    function Ay(...e) {
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
    function Fy(e) {
        const t = e + "CollectionProvider", [n, r] = Fa(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (g)=>{
            const { scope: x, children: m } = g, h = oe.useRef(null), v = oe.useRef(new Map).current;
            return p.jsx(o, {
                scope: x,
                itemMap: v,
                collectionRef: h,
                children: m
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = $l(s), u = oe.forwardRef((g, x)=>{
            const { scope: m, children: h } = g, v = l(s, m), S = Fs(x, v.collectionRef);
            return p.jsx(a, {
                ref: S,
                children: h
            });
        });
        u.displayName = s;
        const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = $l(c), y = oe.forwardRef((g, x)=>{
            const { scope: m, children: h, ...v } = g, S = oe.useRef(null), C = Fs(x, S), R = l(c, m);
            return oe.useEffect(()=>(R.itemMap.set(S, {
                    ref: S,
                    ...v
                }), ()=>void R.itemMap.delete(S))), p.jsx(f, {
                [d]: "",
                ref: C,
                children: h
            });
        });
        y.displayName = c;
        function w(g) {
            const x = l(e + "CollectionConsumer", g);
            return oe.useCallback(()=>{
                const h = x.collectionRef.current;
                if (!h) return [];
                const v = Array.from(h.querySelectorAll(`[${d}]`));
                return Array.from(x.itemMap.values()).sort((R, j)=>v.indexOf(R.ref.current) - v.indexOf(j.ref.current));
            }, [
                x.collectionRef,
                x.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: u,
                ItemSlot: y
            },
            w,
            r
        ];
    }
    function Pn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Jp = globalThis?.document ? N.useLayoutEffect : ()=>{}, $y = Pd[" useInsertionEffect ".trim().toString()] || Jp;
    function li({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = Uy({
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
                const d = By(c) ? c(e) : c;
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
    function Uy({ defaultProp: e, onChange: t }) {
        const [n, r] = N.useState(e), o = N.useRef(n), l = N.useRef(t);
        return $y(()=>{
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
    function By(e) {
        return typeof e == "function";
    }
    var Vy = Pd[" useId ".trim().toString()] || (()=>{}), Wy = 0;
    function Gy(e) {
        const [t, n] = N.useState(Vy());
        return Jp(()=>{
            n((r)=>r ?? String(Wy++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var Hy = N.createContext(void 0);
    function qp(e) {
        const t = N.useContext(Hy);
        return e || t || "ltr";
    }
    function Ky(e) {
        const t = N.useRef(e);
        return N.useEffect(()=>{
            t.current = e;
        }), N.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Ui = "rovingFocusGroup.onEntryFocus", Qy = {
        bubbles: !1,
        cancelable: !0
    }, Eo = "RovingFocusGroup", [$s, em, Yy] = Fy(Eo), [Xy, tm] = Fa(Eo, [
        Yy
    ]), [Zy, Jy] = Xy(Eo), nm = N.forwardRef((e, t)=>p.jsx($s.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: p.jsx($s.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: p.jsx(qy, {
                    ...e,
                    ref: t
                })
            })
        }));
    nm.displayName = Eo;
    var qy = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: c = !1, ...d } = e, f = N.useRef(null), y = Fs(t, f), w = qp(l), [g, x] = li({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: Eo
        }), [m, h] = N.useState(!1), v = Ky(u), S = em(n), C = N.useRef(!1), [R, j] = N.useState(0);
        return N.useEffect(()=>{
            const E = f.current;
            if (E) return E.addEventListener(Ui, v), ()=>E.removeEventListener(Ui, v);
        }, [
            v
        ]), p.jsx(Zy, {
            scope: n,
            orientation: r,
            dir: w,
            loop: o,
            currentTabStopId: g,
            onItemFocus: N.useCallback((E)=>x(E), [
                x
            ]),
            onItemShiftTab: N.useCallback(()=>h(!0), []),
            onFocusableItemAdd: N.useCallback(()=>j((E)=>E + 1), []),
            onFocusableItemRemove: N.useCallback(()=>j((E)=>E - 1), []),
            children: p.jsx(yo.div, {
                tabIndex: m || R === 0 ? -1 : 0,
                "data-orientation": r,
                ...d,
                ref: y,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: Pn(e.onMouseDown, ()=>{
                    C.current = !0;
                }),
                onFocus: Pn(e.onFocus, (E)=>{
                    const V = !C.current;
                    if (E.target === E.currentTarget && V && !m) {
                        const U = new CustomEvent(Ui, Qy);
                        if (E.currentTarget.dispatchEvent(U), !U.defaultPrevented) {
                            const ge = S().filter((X)=>X.focusable), ve = ge.find((X)=>X.active), Ge = ge.find((X)=>X.id === g), Je = [
                                ve,
                                Ge,
                                ...ge
                            ].filter(Boolean).map((X)=>X.ref.current);
                            lm(Je, c);
                        }
                    }
                    C.current = !1;
                }),
                onBlur: Pn(e.onBlur, ()=>h(!1))
            })
        });
    }), rm = "RovingFocusGroupItem", om = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = Gy(), u = l || a, c = Jy(rm, n), d = c.currentTabStopId === u, f = em(n), { onFocusableItemAdd: y, onFocusableItemRemove: w, currentTabStopId: g } = c;
        return N.useEffect(()=>{
            if (r) return y(), ()=>w();
        }, [
            r,
            y,
            w
        ]), p.jsx($s.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: p.jsx(yo.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": c.orientation,
                ...s,
                ref: t,
                onMouseDown: Pn(e.onMouseDown, (x)=>{
                    r ? c.onItemFocus(u) : x.preventDefault();
                }),
                onFocus: Pn(e.onFocus, ()=>c.onItemFocus(u)),
                onKeyDown: Pn(e.onKeyDown, (x)=>{
                    if (x.key === "Tab" && x.shiftKey) {
                        c.onItemShiftTab();
                        return;
                    }
                    if (x.target !== x.currentTarget) return;
                    const m = nv(x, c.orientation, c.dir);
                    if (m !== void 0) {
                        if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                        x.preventDefault();
                        let v = f().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (m === "last") v.reverse();
                        else if (m === "prev" || m === "next") {
                            m === "prev" && v.reverse();
                            const S = v.indexOf(x.currentTarget);
                            v = c.loop ? rv(v, S + 1) : v.slice(S + 1);
                        }
                        setTimeout(()=>lm(v));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: d,
                    hasTabStop: g != null
                }) : i
            })
        });
    });
    om.displayName = rm;
    var ev = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function tv(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function nv(e, t, n) {
        const r = tv(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return ev[r];
    }
    function lm(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function rv(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var ov = nm, lv = om, im = "Toggle", sm = N.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = li({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: im
        });
        return p.jsx(yo.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: Pn(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    sm.displayName = im;
    var mn = "ToggleGroup", [am] = Fa(mn, [
        tm
    ]), um = tm(), $a = oe.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return p.jsx(iv, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return p.jsx(sv, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${mn}\``);
    });
    $a.displayName = mn;
    var [cm, dm] = am(mn), iv = oe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = li({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: mn
        });
        return p.jsx(cm, {
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
            children: p.jsx(fm, {
                ...l,
                ref: t
            })
        });
    }), sv = oe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = li({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: mn
        }), a = oe.useCallback((c)=>s((d = [])=>[
                    ...d,
                    c
                ]), [
            s
        ]), u = oe.useCallback((c)=>s((d = [])=>d.filter((f)=>f !== c)), [
            s
        ]);
        return p.jsx(cm, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: p.jsx(fm, {
                ...l,
                ref: t
            })
        });
    });
    $a.displayName = mn;
    var [av, uv] = am(mn), fm = oe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = um(n), c = qp(i), d = {
            role: "group",
            dir: c,
            ...a
        };
        return p.jsx(av, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? p.jsx(ov, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: c,
                loop: s,
                children: p.jsx(yo.div, {
                    ...d,
                    ref: t
                })
            }) : p.jsx(yo.div, {
                ...d,
                ref: t
            })
        });
    }), Ul = "ToggleGroupItem", pm = oe.forwardRef((e, t)=>{
        const n = dm(Ul, e.__scopeToggleGroup), r = uv(Ul, e.__scopeToggleGroup), o = um(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = oe.useRef(null);
        return r.rovingFocus ? p.jsx(lv, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: p.jsx(id, {
                ...s,
                ref: t
            })
        }) : p.jsx(id, {
            ...s,
            ref: t
        });
    });
    pm.displayName = Ul;
    var id = oe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = dm(Ul, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return p.jsx(sm, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), cv = $a, dv = pm;
    const fv = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, pv = (e, t)=>({
            classGroupId: e,
            validator: t
        }), mm = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Bl = "-", sd = [], mv = "arbitrary..", hv = (e)=>{
        const t = xv(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return gv(i);
                const s = i.split(Bl), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return hm(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? fv(u, a) : a : u || sd;
                }
                return n[i] || sd;
            }
        };
    }, hm = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = hm(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Bl) : e.slice(t).join(Bl), a = i.length;
        for(let u = 0; u < a; u++){
            const c = i[u];
            if (c.validator(s)) return c.classGroupId;
        }
    }, gv = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? mv + r : void 0;
        })(), xv = (e)=>{
        const { theme: t, classGroups: n } = e;
        return yv(n, t);
    }, yv = (e, t)=>{
        const n = mm();
        for(const r in e){
            const o = e[r];
            Ua(o, n, r, t);
        }
        return n;
    }, Ua = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            vv(i, t, n, r);
        }
    }, vv = (e, t, n, r)=>{
        if (typeof e == "string") {
            wv(e, t, n);
            return;
        }
        if (typeof e == "function") {
            kv(e, t, n, r);
            return;
        }
        Sv(e, t, n, r);
    }, wv = (e, t, n)=>{
        const r = e === "" ? t : gm(t, e);
        r.classGroupId = n;
    }, kv = (e, t, n, r)=>{
        if (_v(e)) {
            Ua(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(pv(n, e));
    }, Sv = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            Ua(a, gm(t, s), n, r);
        }
    }, gm = (e, t)=>{
        let n = e;
        const r = t.split(Bl), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = mm(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, _v = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Cv = (e)=>{
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
    }, Us = "!", ad = ":", Ev = [], ud = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Nv = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const c = o.length;
            for(let g = 0; g < c; g++){
                const x = o[g];
                if (i === 0 && s === 0) {
                    if (x === ad) {
                        l.push(o.slice(a, g)), a = g + 1;
                        continue;
                    }
                    if (x === "/") {
                        u = g;
                        continue;
                    }
                }
                x === "[" ? i++ : x === "]" ? i-- : x === "(" ? s++ : x === ")" && s--;
            }
            const d = l.length === 0 ? o : o.slice(a);
            let f = d, y = !1;
            d.endsWith(Us) ? (f = d.slice(0, -1), y = !0) : d.startsWith(Us) && (f = d.slice(1), y = !0);
            const w = u && u > a ? u - a : void 0;
            return ud(l, y, f, w);
        };
        if (t) {
            const o = t + ad, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : ud(Ev, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Tv = (e)=>{
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
    }, Iv = (e)=>({
            cache: Cv(e.cacheSize),
            parseClassName: Nv(e),
            sortModifiers: Tv(e),
            ...hv(e)
        }), zv = /\s+/, Rv = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(zv);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const c = s[u], { isExternal: d, modifiers: f, hasImportantModifier: y, baseClassName: w, maybePostfixModifierPosition: g } = n(c);
            if (d) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            let x = !!g, m = r(x ? w.substring(0, g) : w);
            if (!m) {
                if (!x) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (m = r(w), !m) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                x = !1;
            }
            const h = f.length === 0 ? "" : f.length === 1 ? f[0] : l(f).join(":"), v = y ? h + Us : h, S = v + m;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const C = o(m, x);
            for(let R = 0; R < C.length; ++R){
                const j = C[R];
                i.push(v + j);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, jv = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = xm(n)) && (o && (o += " "), o += r);
        return o;
    }, xm = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = xm(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Pv = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((c, d)=>d(c), e());
            return n = Iv(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const c = Rv(a, n);
            return o(a, c), c;
        };
        return l = i, (...a)=>l(jv(...a));
    }, Mv = [], we = (e)=>{
        const t = (n)=>n[e] || Mv;
        return t.isThemeGetter = !0, t;
    }, ym = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, vm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Lv = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, bv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ov = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Av = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Gt = (e)=>Lv.test(e), G = (e)=>!!e && !Number.isNaN(Number(e)), Ht = (e)=>!!e && Number.isInteger(Number(e)), Bi = (e)=>e.endsWith("%") && G(e.slice(0, -1)), It = (e)=>bv.test(e), wm = ()=>!0, $v = (e)=>Ov.test(e) && !Dv.test(e), Ba = ()=>!1, Uv = (e)=>Av.test(e), Bv = (e)=>Fv.test(e), Vv = (e)=>!b(e) && !O(e), Wv = (e)=>hn(e, _m, Ba), b = (e)=>ym.test(e), _n = (e)=>hn(e, Cm, $v), cd = (e)=>hn(e, Jv, G), Gv = (e)=>hn(e, Nm, wm), Hv = (e)=>hn(e, Em, Ba), dd = (e)=>hn(e, km, Ba), Kv = (e)=>hn(e, Sm, Bv), Jo = (e)=>hn(e, Tm, Uv), O = (e)=>vm.test(e), Dr = (e)=>$n(e, Cm), Qv = (e)=>$n(e, Em), fd = (e)=>$n(e, km), Yv = (e)=>$n(e, _m), Xv = (e)=>$n(e, Sm), qo = (e)=>$n(e, Tm, !0), Zv = (e)=>$n(e, Nm, !0), hn = (e, t, n)=>{
        const r = ym.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, $n = (e, t, n = !1)=>{
        const r = vm.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, km = (e)=>e === "position" || e === "percentage", Sm = (e)=>e === "image" || e === "url", _m = (e)=>e === "length" || e === "size" || e === "bg-size", Cm = (e)=>e === "length", Jv = (e)=>e === "number", Em = (e)=>e === "family-name", Nm = (e)=>e === "number" || e === "weight", Tm = (e)=>e === "shadow", qv = ()=>{
        const e = we("color"), t = we("font"), n = we("text"), r = we("font-weight"), o = we("tracking"), l = we("leading"), i = we("breakpoint"), s = we("container"), a = we("spacing"), u = we("radius"), c = we("shadow"), d = we("inset-shadow"), f = we("text-shadow"), y = we("drop-shadow"), w = we("blur"), g = we("perspective"), x = we("aspect"), m = we("ease"), h = we("animate"), v = ()=>[
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
            ], C = ()=>[
                ...S(),
                O,
                b
            ], R = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], j = ()=>[
                "auto",
                "contain",
                "none"
            ], E = ()=>[
                O,
                b,
                a
            ], V = ()=>[
                Gt,
                "full",
                "auto",
                ...E()
            ], U = ()=>[
                Ht,
                "none",
                "subgrid",
                O,
                b
            ], ge = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Ht,
                        O,
                        b
                    ]
                },
                Ht,
                O,
                b
            ], ve = ()=>[
                Ht,
                "auto",
                O,
                b
            ], Ge = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                O,
                b
            ], xt = ()=>[
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
            ], Je = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], X = ()=>[
                "auto",
                ...E()
            ], De = ()=>[
                Gt,
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
                ...E()
            ], M = ()=>[
                Gt,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...E()
            ], F = ()=>[
                Gt,
                "screen",
                "full",
                "lh",
                "dvh",
                "lvh",
                "svh",
                "min",
                "max",
                "fit",
                ...E()
            ], z = ()=>[
                e,
                O,
                b
            ], D = ()=>[
                ...S(),
                fd,
                dd,
                {
                    position: [
                        O,
                        b
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
            ], yt = ()=>[
                "auto",
                "cover",
                "contain",
                Yv,
                Wv,
                {
                    size: [
                        O,
                        b
                    ]
                }
            ], Ae = ()=>[
                Bi,
                Dr,
                _n
            ], ce = ()=>[
                "",
                "none",
                "full",
                u,
                O,
                b
            ], Z = ()=>[
                "",
                G,
                Dr,
                _n
            ], qe = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], me = ()=>[
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
            ], J = ()=>[
                G,
                Bi,
                fd,
                dd
            ], _r = ()=>[
                "",
                "none",
                w,
                O,
                b
            ], Nt = ()=>[
                "none",
                G,
                O,
                b
            ], gn = ()=>[
                "none",
                G,
                O,
                b
            ], Un = ()=>[
                G,
                O,
                b
            ], xn = ()=>[
                Gt,
                "full",
                ...E()
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
                    It
                ],
                breakpoint: [
                    It
                ],
                color: [
                    wm
                ],
                container: [
                    It
                ],
                "drop-shadow": [
                    It
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    Vv
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
                    It
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
                    It
                ],
                shadow: [
                    It
                ],
                spacing: [
                    "px",
                    G
                ],
                text: [
                    It
                ],
                "text-shadow": [
                    It
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
                            Gt,
                            b,
                            O,
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
                            G,
                            b,
                            O,
                            s
                        ]
                    }
                ],
                "break-after": [
                    {
                        "break-after": v()
                    }
                ],
                "break-before": [
                    {
                        "break-before": v()
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
                        object: C()
                    }
                ],
                overflow: [
                    {
                        overflow: R()
                    }
                ],
                "overflow-x": [
                    {
                        "overflow-x": R()
                    }
                ],
                "overflow-y": [
                    {
                        "overflow-y": R()
                    }
                ],
                overscroll: [
                    {
                        overscroll: j()
                    }
                ],
                "overscroll-x": [
                    {
                        "overscroll-x": j()
                    }
                ],
                "overscroll-y": [
                    {
                        "overscroll-y": j()
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
                        inset: V()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": V()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": V()
                    }
                ],
                start: [
                    {
                        "inset-s": V(),
                        start: V()
                    }
                ],
                end: [
                    {
                        "inset-e": V(),
                        end: V()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": V()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": V()
                    }
                ],
                top: [
                    {
                        top: V()
                    }
                ],
                right: [
                    {
                        right: V()
                    }
                ],
                bottom: [
                    {
                        bottom: V()
                    }
                ],
                left: [
                    {
                        left: V()
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
                            Ht,
                            "auto",
                            O,
                            b
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            Gt,
                            "full",
                            "auto",
                            s,
                            ...E()
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
                            G,
                            Gt,
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
                            G,
                            O,
                            b
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            G,
                            O,
                            b
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            Ht,
                            "first",
                            "last",
                            "none",
                            O,
                            b
                        ]
                    }
                ],
                "grid-cols": [
                    {
                        "grid-cols": U()
                    }
                ],
                "col-start-end": [
                    {
                        col: ge()
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
                        "grid-rows": U()
                    }
                ],
                "row-start-end": [
                    {
                        row: ge()
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
                        "auto-cols": Ge()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": Ge()
                    }
                ],
                gap: [
                    {
                        gap: E()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": E()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": E()
                    }
                ],
                "justify-content": [
                    {
                        justify: [
                            ...xt(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...Je(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...Je()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...xt()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...Je(),
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
                            ...Je(),
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
                        "place-content": xt()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...Je(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...Je()
                        ]
                    }
                ],
                p: [
                    {
                        p: E()
                    }
                ],
                px: [
                    {
                        px: E()
                    }
                ],
                py: [
                    {
                        py: E()
                    }
                ],
                ps: [
                    {
                        ps: E()
                    }
                ],
                pe: [
                    {
                        pe: E()
                    }
                ],
                pbs: [
                    {
                        pbs: E()
                    }
                ],
                pbe: [
                    {
                        pbe: E()
                    }
                ],
                pt: [
                    {
                        pt: E()
                    }
                ],
                pr: [
                    {
                        pr: E()
                    }
                ],
                pb: [
                    {
                        pb: E()
                    }
                ],
                pl: [
                    {
                        pl: E()
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
                        "space-x": E()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": E()
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
                            ...F()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...F()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...F()
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
                            Dr,
                            _n
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
                            Zv,
                            Gv
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
                            Bi,
                            b
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            Qv,
                            Hv,
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
                            O,
                            b
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            G,
                            "none",
                            O,
                            cd
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ...E()
                        ]
                    }
                ],
                "list-image": [
                    {
                        "list-image": [
                            "none",
                            O,
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
                            O,
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
                        placeholder: z()
                    }
                ],
                "text-color": [
                    {
                        text: z()
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
                            G,
                            "from-font",
                            "auto",
                            O,
                            _n
                        ]
                    }
                ],
                "text-decoration-color": [
                    {
                        decoration: z()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            G,
                            "auto",
                            O,
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
                        indent: E()
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
                            O,
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
                        bg: D()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: re()
                    }
                ],
                "bg-size": [
                    {
                        bg: yt()
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
                                    Ht,
                                    O,
                                    b
                                ],
                                radial: [
                                    "",
                                    O,
                                    b
                                ],
                                conic: [
                                    Ht,
                                    O,
                                    b
                                ]
                            },
                            Xv,
                            Kv
                        ]
                    }
                ],
                "bg-color": [
                    {
                        bg: z()
                    }
                ],
                "gradient-from-pos": [
                    {
                        from: Ae()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Ae()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Ae()
                    }
                ],
                "gradient-from": [
                    {
                        from: z()
                    }
                ],
                "gradient-via": [
                    {
                        via: z()
                    }
                ],
                "gradient-to": [
                    {
                        to: z()
                    }
                ],
                rounded: [
                    {
                        rounded: ce()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": ce()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": ce()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": ce()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": ce()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": ce()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": ce()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": ce()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": ce()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": ce()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": ce()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": ce()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": ce()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": ce()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": ce()
                    }
                ],
                "border-w": [
                    {
                        border: Z()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": Z()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": Z()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": Z()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": Z()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": Z()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": Z()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": Z()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": Z()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": Z()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": Z()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": Z()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": Z()
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
                        border: z()
                    }
                ],
                "border-color-x": [
                    {
                        "border-x": z()
                    }
                ],
                "border-color-y": [
                    {
                        "border-y": z()
                    }
                ],
                "border-color-s": [
                    {
                        "border-s": z()
                    }
                ],
                "border-color-e": [
                    {
                        "border-e": z()
                    }
                ],
                "border-color-bs": [
                    {
                        "border-bs": z()
                    }
                ],
                "border-color-be": [
                    {
                        "border-be": z()
                    }
                ],
                "border-color-t": [
                    {
                        "border-t": z()
                    }
                ],
                "border-color-r": [
                    {
                        "border-r": z()
                    }
                ],
                "border-color-b": [
                    {
                        "border-b": z()
                    }
                ],
                "border-color-l": [
                    {
                        "border-l": z()
                    }
                ],
                "divide-color": [
                    {
                        divide: z()
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
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            G,
                            Dr,
                            _n
                        ]
                    }
                ],
                "outline-color": [
                    {
                        outline: z()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            c,
                            qo,
                            Jo
                        ]
                    }
                ],
                "shadow-color": [
                    {
                        shadow: z()
                    }
                ],
                "inset-shadow": [
                    {
                        "inset-shadow": [
                            "none",
                            d,
                            qo,
                            Jo
                        ]
                    }
                ],
                "inset-shadow-color": [
                    {
                        "inset-shadow": z()
                    }
                ],
                "ring-w": [
                    {
                        ring: Z()
                    }
                ],
                "ring-w-inset": [
                    "ring-inset"
                ],
                "ring-color": [
                    {
                        ring: z()
                    }
                ],
                "ring-offset-w": [
                    {
                        "ring-offset": [
                            G,
                            _n
                        ]
                    }
                ],
                "ring-offset-color": [
                    {
                        "ring-offset": z()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": Z()
                    }
                ],
                "inset-ring-color": [
                    {
                        "inset-ring": z()
                    }
                ],
                "text-shadow": [
                    {
                        "text-shadow": [
                            "none",
                            f,
                            qo,
                            Jo
                        ]
                    }
                ],
                "text-shadow-color": [
                    {
                        "text-shadow": z()
                    }
                ],
                opacity: [
                    {
                        opacity: [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...me(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": me()
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
                            G
                        ]
                    }
                ],
                "mask-image-linear-from-pos": [
                    {
                        "mask-linear-from": J()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": J()
                    }
                ],
                "mask-image-linear-from-color": [
                    {
                        "mask-linear-from": z()
                    }
                ],
                "mask-image-linear-to-color": [
                    {
                        "mask-linear-to": z()
                    }
                ],
                "mask-image-t-from-pos": [
                    {
                        "mask-t-from": J()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": J()
                    }
                ],
                "mask-image-t-from-color": [
                    {
                        "mask-t-from": z()
                    }
                ],
                "mask-image-t-to-color": [
                    {
                        "mask-t-to": z()
                    }
                ],
                "mask-image-r-from-pos": [
                    {
                        "mask-r-from": J()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": J()
                    }
                ],
                "mask-image-r-from-color": [
                    {
                        "mask-r-from": z()
                    }
                ],
                "mask-image-r-to-color": [
                    {
                        "mask-r-to": z()
                    }
                ],
                "mask-image-b-from-pos": [
                    {
                        "mask-b-from": J()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": J()
                    }
                ],
                "mask-image-b-from-color": [
                    {
                        "mask-b-from": z()
                    }
                ],
                "mask-image-b-to-color": [
                    {
                        "mask-b-to": z()
                    }
                ],
                "mask-image-l-from-pos": [
                    {
                        "mask-l-from": J()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": J()
                    }
                ],
                "mask-image-l-from-color": [
                    {
                        "mask-l-from": z()
                    }
                ],
                "mask-image-l-to-color": [
                    {
                        "mask-l-to": z()
                    }
                ],
                "mask-image-x-from-pos": [
                    {
                        "mask-x-from": J()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": J()
                    }
                ],
                "mask-image-x-from-color": [
                    {
                        "mask-x-from": z()
                    }
                ],
                "mask-image-x-to-color": [
                    {
                        "mask-x-to": z()
                    }
                ],
                "mask-image-y-from-pos": [
                    {
                        "mask-y-from": J()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": J()
                    }
                ],
                "mask-image-y-from-color": [
                    {
                        "mask-y-from": z()
                    }
                ],
                "mask-image-y-to-color": [
                    {
                        "mask-y-to": z()
                    }
                ],
                "mask-image-radial": [
                    {
                        "mask-radial": [
                            O,
                            b
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": J()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": J()
                    }
                ],
                "mask-image-radial-from-color": [
                    {
                        "mask-radial-from": z()
                    }
                ],
                "mask-image-radial-to-color": [
                    {
                        "mask-radial-to": z()
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
                            G
                        ]
                    }
                ],
                "mask-image-conic-from-pos": [
                    {
                        "mask-conic-from": J()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": J()
                    }
                ],
                "mask-image-conic-from-color": [
                    {
                        "mask-conic-from": z()
                    }
                ],
                "mask-image-conic-to-color": [
                    {
                        "mask-conic-to": z()
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
                        mask: D()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: re()
                    }
                ],
                "mask-size": [
                    {
                        mask: yt()
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
                            b
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            O,
                            b
                        ]
                    }
                ],
                blur: [
                    {
                        blur: _r()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            y,
                            qo,
                            Jo
                        ]
                    }
                ],
                "drop-shadow-color": [
                    {
                        "drop-shadow": z()
                    }
                ],
                grayscale: [
                    {
                        grayscale: [
                            "",
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            G,
                            O,
                            b
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": _r()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            G,
                            O,
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
                        "border-spacing": E()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": E()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": E()
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
                            G,
                            "initial",
                            O,
                            b
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            m,
                            O,
                            b
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            G,
                            O,
                            b
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            h,
                            O,
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
                            g,
                            O,
                            b
                        ]
                    }
                ],
                "perspective-origin": [
                    {
                        "perspective-origin": C()
                    }
                ],
                rotate: [
                    {
                        rotate: Nt()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": Nt()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": Nt()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": Nt()
                    }
                ],
                scale: [
                    {
                        scale: gn()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": gn()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": gn()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": gn()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: Un()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": Un()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": Un()
                    }
                ],
                transform: [
                    {
                        transform: [
                            O,
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
                        origin: C()
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
                        translate: xn()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": xn()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": xn()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": xn()
                    }
                ],
                "translate-none": [
                    "translate-none"
                ],
                accent: [
                    {
                        accent: z()
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
                        caret: z()
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
                        "scroll-m": E()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": E()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": E()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": E()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": E()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": E()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": E()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": E()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": E()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": E()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": E()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": E()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": E()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": E()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": E()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": E()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": E()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": E()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": E()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": E()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": E()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": E()
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
                            b
                        ]
                    }
                ],
                fill: [
                    {
                        fill: [
                            "none",
                            ...z()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            G,
                            Dr,
                            _n,
                            cd
                        ]
                    }
                ],
                stroke: [
                    {
                        stroke: [
                            "none",
                            ...z()
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
    }, e0 = Pv(qv);
    function qt(...e) {
        return e0(Yp(e));
    }
    const t0 = Xp("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function K({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? jy : "button";
        return p.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: qt(t0({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const n0 = Xp("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), Im = N.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function el({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return p.jsx(cv, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: qt("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: p.jsx(Im.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function ut({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = N.useContext(Im);
        return p.jsx(dv, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: qt(n0({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function or({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = N.useState(t), s = N.useRef(!1), a = N.useRef({
            x: 0,
            y: 0
        }), u = N.useCallback((c)=>{
            s.current = !0, a.current = {
                x: c.clientX - l.x,
                y: c.clientY - l.y
            };
            const d = (y)=>{
                if (!s.current) return;
                const w = Math.max(0, y.clientX - a.current.x), g = Math.max(0, y.clientY - a.current.y);
                i({
                    x: w,
                    y: g
                });
            }, f = ()=>{
                s.current = !1, window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", f);
            };
            window.addEventListener("mousemove", d), window.addEventListener("mouseup", f);
        }, [
            l
        ]);
        return p.jsxs("div", {
            className: qt("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: l.x,
                top: l.y
            },
            children: [
                p.jsxs("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg flex items-center justify-between gap-2",
                    onMouseDown: u,
                    children: [
                        p.jsx("span", {
                            children: e
                        }),
                        o && p.jsx("button", {
                            type: "button",
                            "aria-label": "Close",
                            className: "text-gray-400 hover:text-gray-700 cursor-pointer leading-none px-1",
                            onMouseDown: (c)=>c.stopPropagation(),
                            onClick: o,
                            children: "✕"
                        })
                    ]
                }),
                p.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const r0 = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Ar(e) {
        return r0[e] ?? "#000000";
    }
    function o0(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, c = s * a + o * 2;
        e.width = u, e.height = c;
        const d = e.getContext("2d");
        if (d) {
            l && (d.fillStyle = l, d.fillRect(0, 0, u, c)), d.translate(o, o);
            for (const [f, y, w] of t.cells ?? []){
                const g = Ar(w);
                g && (d.fillStyle = g, d.fillRect(y * a, f * a, a, a));
            }
            for (const f of t.images ?? []){
                if (!Array.isArray(f) || f.length < 4) continue;
                const [y, w, g, x] = f, m = Math.min(w, x) * a, h = Math.min(y, g) * a, v = Math.abs(x - w) * a, S = Math.abs(g - y) * a;
                d.fillStyle = "#eef2f7", d.fillRect(m, h, v, S), d.strokeStyle = "#c3ccd8", d.lineWidth = 1, d.strokeRect(m + .5, h + .5, v - 1, S - 1);
            }
            for (const [f, y, w, g, x, m] of t.rects ?? []){
                const h = Math.min(y, g) * a, v = Math.min(f, w) * a, S = Math.abs(g - y) * a, C = Math.abs(w - f) * a, R = Ar(x);
                R && (d.fillStyle = R, d.fillRect(h, v, S, C));
                const j = Ar(m);
                j && (d.strokeStyle = j, d.lineWidth = Math.max(1, a / 8), d.strokeRect(h, v, S, C));
            }
            for (const [f, y, w, g, x] of t.lines ?? []){
                const m = Ar(x);
                m && (d.strokeStyle = m, d.lineWidth = Math.max(1, a / 6), d.beginPath(), d.moveTo(y * a, f * a), d.lineTo(g * a, w * a), d.stroke());
            }
            d.textBaseline = "alphabetic";
            for (const f of t.texts ?? []){
                const y = Array.isArray(f) ? f.length >= 9 ? {
                    r: f[0],
                    c: f[1],
                    color: f[2],
                    size: f[3],
                    text: f[8]
                } : {
                    r: f[0],
                    c: f[1],
                    color: f[2],
                    size: f[3],
                    text: f[4]
                } : f;
                if (!y || typeof y.r != "number" || typeof y.c != "number") continue;
                d.fillStyle = Ar(y.color) ?? "#000000";
                const w = y.size ?? 1;
                d.font = `${Math.max(6, w * a * yr)}px 'BigBlue Terminal', monospace`, d.fillText(String(y.text ?? ""), y.c * a, (y.r + w * yr) * a);
            }
            d.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function hl({ design: e, size: t = 96, className: n }) {
        const r = N.useRef(null);
        return N.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            o0(r.current, e, o);
        }, [
            e,
            t
        ]), p.jsx("canvas", {
            ref: r,
            className: n,
            style: {
                imageRendering: "pixelated"
            }
        });
    }
    const vo = 31;
    function l0(e) {
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
    function i0(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = l0(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function pd(e, t) {
        return e >= 0 && e <= vo && t >= 0 && t <= vo;
    }
    const pt = vo + 1, zm = "indexeddb://grid-draw-coord-model";
    let md, vr = null;
    async function Va() {
        return md ??= Oa(()=>import("./index2.js"), []), md;
    }
    function s0(e) {
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
        const r = e.layers.dense({
            units: pt,
            activation: "softmax",
            name: "r"
        }).apply(n), o = e.layers.dense({
            units: pt,
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
    function Rm(e, t) {
        const n = new Float32Array(t.length * 2 * pt);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * pt + r] = 1, n[l * 2 * pt + pt + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * pt
        ]);
    }
    function hd(e, t) {
        const n = new Float32Array(t.length * pt);
        return t.forEach((r, o)=>{
            n[o * pt + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            pt
        ]);
    }
    async function a0() {
        const e = await Va();
        try {
            return vr = await e.loadLayersModel(zm), !0;
        } catch  {
            return vr = null, !1;
        }
    }
    async function u0(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await Va(), { pairs: s, skippedExamples: a } = i0(e), u = [];
        let c = 0;
        for (const x of s)pd(x[0], x[1]) && pd(x[2], x[3]) ? u.push(x) : c++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const d = Rm(i, u.map((x)=>[
                x[0],
                x[1]
            ])), f = hd(i, u.map((x)=>x[2])), y = hd(i, u.map((x)=>x[3])), w = s0(i);
        w.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let g = NaN;
        return await w.fit(d, [
            f,
            y
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (x, m)=>{
                    g = m?.loss ?? g, l?.(x + 1, n, g), await i.nextFrame();
                }
            }
        }), d.dispose(), f.dispose(), y.dispose(), vr?.dispose(), vr = w, await w.save(zm), {
            pairs: u.length,
            droppedPoints: c,
            skippedExamples: a,
            finalLoss: g
        };
    }
    async function c0(e) {
        if (!vr) throw new Error("No model yet — train one first.");
        const t = await Va(), n = e.cells ?? [];
        if (n.length === 0) return {
            w: 1,
            h: 1,
            cells: [],
            lines: [],
            rects: [],
            texts: []
        };
        const r = n.map(([a, u])=>[
                Math.max(0, Math.min(vo, a)),
                Math.max(0, Math.min(vo, u))
            ]), o = t.tidy(()=>{
            const a = Rm(t, r), [u, c] = vr.predict(a), d = u.argMax(1).dataSync(), f = c.argMax(1).dataSync();
            return n.map(([, , y], w)=>[
                    d[w],
                    f[w],
                    y
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
    const fe = Op((e, t)=>({
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
                        designs: await py(),
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
                        examples: await td(),
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
                const l = await gy(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>hy(n),
            getDrawingById: (n)=>my(n),
            saveExamplePair: async (n, r, o)=>{
                await yy(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await vy(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await xy(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await wy(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await a0();
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
                const n = await td();
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
                    const r = await u0(n, {
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
            runPredict: (n)=>c0(n)
        })), jm = "/grid-draw/";
    function d0(e) {
        window.location.href = `${jm}design/${encodeURIComponent(e)}/`;
    }
    function f0() {
        window.location.href = jm;
    }
    function Pm({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = fe((x)=>x.designs), o = fe((x)=>x.examples), l = fe((x)=>x.loadingDesigns || x.loadingExamples), i = fe((x)=>x.error), s = fe((x)=>x.loadDesigns), a = fe((x)=>x.loadExamples), u = fe((x)=>x.deleteDrawing), c = fe((x)=>x.deleteExamplePair), d = N.useCallback(()=>{
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
        const f = N.useCallback((x, m)=>{
            window.confirm(`Delete drawing “${m}”? This can't be undone.`) && u(x);
        }, [
            u
        ]), y = N.useCallback((x)=>{
            window.confirm("Delete this training example? This can't be undone.") && c(x);
        }, [
            c
        ]), w = N.useCallback((x)=>{
            n ? n(x) : d0(x);
        }, [
            n
        ]), g = p.jsxs(p.Fragment, {
            children: [
                l && p.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "Loading…"
                }),
                p.jsxs("section", {
                    className: "mb-10",
                    children: [
                        p.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Saved drawings (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && !l && p.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No saved drawings yet — use “Save to Gallery” in the editor."
                        }),
                        p.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4",
                            children: r.map((x)=>p.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        p.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: p.jsx(hl, {
                                                design: x.design,
                                                size: 120
                                            })
                                        }),
                                        p.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: x.name,
                                            children: x.name
                                        }),
                                        p.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                p.jsx(K, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>w(x.name),
                                                    children: "Open"
                                                }),
                                                p.jsx(K, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-red-600",
                                                    onClick: ()=>f(x.id, x.name),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, x.id))
                        })
                    ]
                }),
                p.jsxs("section", {
                    children: [
                        p.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                o.length,
                                ")"
                            ]
                        }),
                        o.length === 0 && !l && p.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — capture some with “Make Training Data”."
                        }),
                        p.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4",
                            children: o.map((x)=>p.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        p.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                p.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        p.jsx(hl, {
                                                            design: x.input,
                                                            size: 80
                                                        }),
                                                        p.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "input"
                                                        })
                                                    ]
                                                }),
                                                p.jsx("span", {
                                                    className: "text-gray-300",
                                                    children: "→"
                                                }),
                                                p.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        p.jsx(hl, {
                                                            design: x.output,
                                                            size: 80
                                                        }),
                                                        p.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "output"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        p.jsx(K, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full text-xs text-red-600",
                                            onClick: ()=>y(x.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, x.id))
                        })
                    ]
                })
            ]
        });
        return e ? p.jsxs(or, {
            title: "Gallery",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 880) / 2),
                y: 64
            },
            className: "w-[880px] max-w-[95vw] z-30",
            children: [
                p.jsxs("div", {
                    className: "mb-3 flex items-center gap-3",
                    children: [
                        p.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: d,
                            children: "Refresh"
                        }),
                        i && p.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                p.jsx("div", {
                    className: "max-h-[70vh] overflow-auto pr-1",
                    children: g
                })
            ]
        }) : p.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                p.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        p.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Gallery"
                        }),
                        p.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: f0,
                            children: "← Editor"
                        }),
                        p.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: d,
                            children: "Refresh"
                        }),
                        p.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                Gp(), window.location.reload();
                            },
                            children: "Log out"
                        }),
                        i && p.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                g
            ]
        });
    }
    const p0 = "/grid-draw/";
    function gd({ design: e, label: t, onClick: n }) {
        const r = p.jsx(hl, {
            design: e,
            size: 84
        });
        return p.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
                n ? p.jsx("button", {
                    type: "button",
                    onClick: n,
                    title: `Load this ${t} into the editor`,
                    className: "rounded ring-1 ring-transparent hover:ring-blue-400 hover:ring-2 focus:outline-none focus:ring-blue-500 cursor-pointer",
                    children: r
                }) : r,
                p.jsx("span", {
                    className: "text-[10px] text-gray-400 mt-1",
                    children: t
                })
            ]
        });
    }
    function m0({ input: e, output: t, onInput: n, onOutput: r }) {
        return p.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                p.jsx(gd, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                p.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                p.jsx(gd, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function Mm({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = fe((a)=>a.examples), o = fe((a)=>a.error), l = fe((a)=>a.loadExamples);
        N.useEffect(()=>{
            l();
        }, [
            l
        ]);
        const s = p.jsxs(p.Fragment, {
            children: [
                p.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        p.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: l,
                            children: "Refresh"
                        }),
                        o && p.jsx("span", {
                            className: "text-sm text-red-500",
                            children: o
                        })
                    ]
                }),
                p.jsxs("section", {
                    children: [
                        p.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && p.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — use “Make Training Data”."
                        }),
                        p.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4",
                            children: r.map((a)=>p.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-1",
                                    children: [
                                        p.jsx(m0, {
                                            input: a.input,
                                            output: a.output,
                                            onInput: n && (()=>n(a, "input")),
                                            onOutput: n && (()=>n(a, "output"))
                                        }),
                                        p.jsxs("span", {
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
        return e ? p.jsx(or, {
            title: "Training Data",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 900) / 2),
                y: 64
            },
            className: "w-[900px] max-w-[95vw] z-30",
            children: p.jsx("div", {
                className: "max-h-[72vh] overflow-auto pr-1",
                children: s
            })
        }) : p.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                p.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        p.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Training Data"
                        }),
                        p.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = p0;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const wt = 2, zt = 8, Nn = 48;
    function xd(e) {
        return [
            e[0],
            e[1],
            e[0] + e[4],
            e[1] + e[3]
        ];
    }
    const Gn = "/grid-draw/", yd = [
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
    function h0() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function g0(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function vd() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - Nn)
        };
    }
    function x0() {
        const [e, t] = N.useState(()=>vd()), n = N.useRef(null), { grid: r, loading: o, error: l } = cy(n, e.w, e.h), i = se(), { tool: s, setTool: a, colorIdx: u, setColorIdx: c, pickColor: d, outlineIdx: f, pickOutline: y, isDrawing: w, drawMode: g, startDrawing: x, stopDrawing: m, lineStart: h, startLine: v, finishLine: S, rectStart: C, startRect: R, finishRect: j, textSize: E, pickTextSize: V, lineWidth: U, pickLineWidth: ge, pickTextAlign: ve, subdivision: Ge, cycleSubdivision: xt, setSubdivision: Je, beginTextEdit: X, typeTextChar: De, backspaceText: M, commitTextEdit: F, cancelTextEdit: z, selectedItems: D, setSelectedItems: re, selectAll: yt, clipboard: Ae, copy: ce, paste: Z, deleteSelected: qe, selectMode: me, isSelecting: J, selectBoxStart: _r, selectDragStart: Nt, startBoxSelection: gn, updateBoxSelection: Un, finishBoxSelection: xn, cancelBoxSelection: Wa, startDragSelection: No, finishDragSelection: Ga, cancelDragSelection: Ha, startResize: Ka, updateResize: Qa, finishResize: Ya, cancelResize: Xa, startRotate: Za, updateRotate: Ja, finishRotate: qa, cancelRotate: eu, setMousePos: tu, addItemToSelection: nu, removeItemFromSelection: ru, hitTestShapes: To, getSelectedCells: Lm, jsonOutput: bm, tensorOutput: Om, importJson: Dm, importTensor: Am, clear: ii, updateOutputs: Cr, renderSelection: si, beginDrawStroke: ou, drawCellAt: Io, endDrawStroke: lu, commitLine: iu, commitRect: su, placeImage: au, undo: ai, redo: ui, canUndo: Fm, canRedo: $m, captureMode: ci, captureInput: Er, startTrainingCapture: Um, captureSetInput: Bm, buildTrainingExample: uu, finishTrainingCapture: cu, cancelTrainingCapture: du, serializeWholeGrid: zo, exportHistory: fu, loadDesignWithHistory: yn, currentName: pu, setCurrentName: it, saveState: di, setSaveState: mu, resetHistory: hu } = i;
        i.historyTick;
        const gu = fe((k)=>k.saveDrawing), Ro = fe((k)=>k.getDrawing), xu = fe((k)=>k.getDrawingById), yu = fe((k)=>k.saveExamplePair), vu = fe((k)=>k.updateExamplePair), wu = fe((k)=>k.runPredict), ku = fe((k)=>k.trainModel), Su = fe((k)=>k.initModel), _u = fe((k)=>k.modelStatus), Ee = fe((k)=>k.training), Nr = Lm(), [Cu, de] = N.useState(""), [Vm, fi] = N.useState(!1), [Wm, pi] = N.useState(!1), [Ut, mi] = N.useState(null), Eu = N.useRef(null), [Nu, jo] = N.useState(""), Tu = 16, Po = N.useCallback(async (k)=>{
            try {
                let _;
                typeof k == "string" ? _ = k : (jo("Uploading…"), _ = await ky(k)), jo("Loading…");
                const { width: T, height: P } = await Wx(_), W = Math.max(T, P) || 1, B = Math.max(1, Math.round(T / W * Tu)), A = Math.max(1, Math.round(P / W * Tu)), $ = Tt.current, q = Math.round(($.x + e.w / 2 / $.zoom) / wt / zt) * zt, xe = Math.round(($.y + e.h / 2 / $.zoom) / wt / zt) * zt, kn = q - Math.round(B / 2) * zt, Sn = xe - Math.round(A / 2) * zt;
                au(_, {
                    r1: Sn,
                    c1: kn,
                    r2: Sn + A * zt,
                    c2: kn + B * zt
                }), jo("");
            } catch (_) {
                jo(_ instanceof Error ? _.message : "image failed");
            }
        }, [
            au,
            e.w,
            e.h
        ]);
        N.useEffect(()=>{
            const k = (_)=>{
                if (se.getState().textEdit) return;
                const T = _.clipboardData?.items;
                if (T) {
                    for (const P of T)if (P.kind === "file" && P.type.startsWith("image/")) {
                        const W = P.getAsFile();
                        if (W) {
                            _.preventDefault(), Po(W);
                            return;
                        }
                    }
                }
            };
            return document.addEventListener("paste", k), ()=>document.removeEventListener("paste", k);
        }, [
            Po
        ]);
        const [Bn, Gm] = N.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), Hm = .25, Km = 12, Tt = N.useRef(Bn);
        Tt.current = Bn;
        const Tr = N.useCallback((k)=>{
            Gm(k), r?.set_camera(k.x, k.y, k.zoom);
        }, [
            r
        ]), Mo = N.useRef(!1), [Qm, Iu] = N.useState(!1), vn = N.useRef(null), Ym = N.useCallback(async ()=>{
            const k = zo();
            if (!k || k.cells.length + k.lines.length + k.rects.length + k.texts.length === 0) {
                de("Nothing to save — draw something first.");
                return;
            }
            const _ = h0();
            de("Saving to gallery…");
            try {
                await gu(_, k, fu()), it(_), window.history.replaceState({}, "", `${Gn}design/${_}/`), de(`Saved as ${_}. Auto-saving changes.`);
            } catch (T) {
                de(`Save failed: ${T instanceof Error ? T.message : String(T)}`);
            }
        }, [
            zo,
            fu,
            it,
            gu
        ]);
        N.useEffect(()=>{
            if (!r) return;
            let k = !1;
            const _ = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (_) return Ro(_[1]).then((P)=>{
                k || (yn(P.design, P.history ?? null), it(P.name));
            }).catch(()=>de(`No drawing named "${_[1]}".`)), ()=>{
                k = !0;
            };
            const T = new URLSearchParams(window.location.search).get("load");
            if (T) return xu(Number(T)).then((P)=>{
                k || (yn(P.design, P.history ?? null), it(P.name), window.history.replaceState({}, "", `${Gn}design/${encodeURIComponent(P.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Gn);
            }), ()=>{
                k = !0;
            };
        }, [
            r,
            yn,
            it,
            Ro,
            xu
        ]), N.useEffect(()=>{
            Su();
        }, [
            Su
        ]);
        const Xm = N.useCallback(async ()=>{
            const k = uu();
            if (!k) {
                de("Select the output region first.");
                return;
            }
            de("Saving…");
            try {
                await yu(k.input, k.output, k.delta), cu(), de("Saved.");
            } catch (_) {
                de(`Save failed: ${_ instanceof Error ? _.message : String(_)}`);
            }
        }, [
            uu,
            cu,
            yu
        ]), Zm = N.useCallback(async ()=>{
            de("Training in the browser…");
            try {
                await ku(), de("Model trained. Try Predict from Selection.");
            } catch (k) {
                de(`Train failed: ${k instanceof Error ? k.message : String(k)}`);
            }
        }, [
            ku
        ]), Jm = N.useCallback(async ()=>{
            const { grid: k, selectedItems: _ } = se.getState();
            if (!k) return;
            const T = qr(k, _);
            if (!T) {
                de("Select an input region to predict from.");
                return;
            }
            const P = $e(_, k), W = P ? P.minRow : 0, B = P ? P.minCol : 0;
            de("Predicting…");
            try {
                const A = await wu(T);
                se.getState().placeDesign(A, W, B), de(g0(A) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (A) {
                de(`Predict failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            wu
        ]), qm = N.useCallback(async (k)=>{
            const _ = await Ro(k);
            yn(_.design, _.history ?? null), it(_.name), mi(null), window.history.replaceState({}, "", `${Gn}design/${encodeURIComponent(_.name)}/`), fi(!1);
        }, [
            yn,
            it,
            Ro
        ]), eh = N.useCallback((k, _)=>{
            const T = _ === "input" ? k.input : k.output, P = _ === "input" ? k.output : k.input;
            yn(T, null), it(null), mi({
                id: k.id,
                half: _,
                otherHalf: P
            }), window.history.replaceState({}, "", Gn), pi(!1), de(`Editing example #${k.id} (${_}) — click "Update example" to save over it.`);
        }, [
            yn,
            it
        ]), th = N.useCallback(async ()=>{
            if (!Ut) return;
            const k = zo();
            if (!k) {
                de("Nothing to save — draw something first.");
                return;
            }
            const { id: _, half: T, otherHalf: P } = Ut, W = T === "input" ? k : P, B = T === "output" ? k : P;
            de(`Updating example #${_}…`);
            try {
                await vu(_, W, B), de(`Example #${_} (${T}) updated.`);
            } catch (A) {
                de(`Update failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            Ut,
            zo,
            vu
        ]), nh = N.useCallback(()=>{
            it(null), mi(null), ii(), hu(), mu("idle"), window.history.replaceState({}, "", Gn), de("");
        }, [
            it,
            ii,
            hu,
            mu
        ]);
        N.useEffect(()=>{
            const k = ()=>{
                const _ = vd();
                t(_), r?.set_viewport(_.w, _.h);
            };
            return window.addEventListener("resize", k), ()=>window.removeEventListener("resize", k);
        }, [
            r
        ]), N.useEffect(()=>{
            const k = (_)=>{
                if (se.getState().textEdit) return;
                _.key === "\\" && a(s === "line" ? "draw" : "line"), _.key === "m" && a(s === "rect" ? "draw" : "rect"), _.key === "t" && a(s === "text" ? "draw" : "text"), _.key === "s" && a(s === "select" ? "draw" : "select"), (_.key === "Delete" || _.key === "Backspace") && D.length > 0 && (_.preventDefault(), qe()), (_.ctrlKey || _.metaKey) && _.key.toLowerCase() === "a" && (_.preventDefault(), yt()), (_.ctrlKey || _.metaKey) && _.key === "c" && D.length > 0 && (_.preventDefault(), ce()), (_.ctrlKey || _.metaKey) && _.key === "v" && Ae && (_.preventDefault(), Z()), (_.ctrlKey || _.metaKey) && _.key.toLowerCase() === "g" && (_.preventDefault(), xt()), (_.ctrlKey || _.metaKey) && !_.shiftKey && _.key.toLowerCase() === "z" && (_.preventDefault(), ai()), (_.ctrlKey || _.metaKey) && (_.shiftKey && _.key.toLowerCase() === "z" || _.key.toLowerCase() === "y") && (_.preventDefault(), ui());
                const T = parseInt(_.key);
                T >= 1 && T <= 7 && c(T - 1);
            };
            return window.addEventListener("keydown", k), ()=>window.removeEventListener("keydown", k);
        }, [
            s,
            a,
            c,
            D,
            qe,
            ce,
            Z,
            Ae,
            ai,
            ui,
            yt,
            xt
        ]), N.useEffect(()=>{
            const k = (_)=>{
                if (se.getState().textEdit) {
                    if (_.key === "Enter") {
                        _.preventDefault(), F();
                        return;
                    }
                    if (_.key === "Escape") {
                        _.preventDefault(), z();
                        return;
                    }
                    if (_.key === "Backspace") {
                        _.preventDefault(), M();
                        return;
                    }
                    _.key.length === 1 && !_.ctrlKey && !_.metaKey && !_.altKey && (_.preventDefault(), De(_.key));
                }
            };
            return window.addEventListener("keydown", k), ()=>window.removeEventListener("keydown", k);
        }, [
            F,
            z,
            M,
            De
        ]), N.useEffect(()=>{
            const k = n.current;
            if (!k) return;
            const _ = (T)=>{
                T.preventDefault();
                const P = Tt.current, W = T.deltaY < 0 ? 1.1 : 1 / 1.1, B = Math.min(Km, Math.max(Hm, P.zoom * W));
                if (B === P.zoom) return;
                const A = T.clientX, $ = T.clientY - Nn, q = P.x + A * (1 / P.zoom - 1 / B), xe = P.y + $ * (1 / P.zoom - 1 / B);
                Tr({
                    x: q,
                    y: xe,
                    zoom: B
                });
            };
            return k.addEventListener("wheel", _, {
                passive: !1
            }), ()=>k.removeEventListener("wheel", _);
        }, [
            Tr
        ]), N.useEffect(()=>{
            const k = (T)=>{
                T.code !== "Space" || se.getState().textEdit || (T.preventDefault(), Mo.current = !0, Iu(!0));
            }, _ = (T)=>{
                T.code === "Space" && (Mo.current = !1, Iu(!1));
            };
            return window.addEventListener("keydown", k), window.addEventListener("keyup", _), ()=>{
                window.removeEventListener("keydown", k), window.removeEventListener("keyup", _);
            };
        }, []);
        const rh = N.useCallback(()=>Tr({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            Tr
        ]), Vn = (k)=>{
            const _ = k.currentTarget, T = _.getBoundingClientRect(), P = (k.clientX - T.left) * (_.width / T.width), W = (k.clientY - T.top) * (_.height / T.height), B = Tt.current;
            return {
                x: P / B.zoom + B.x,
                y: W / B.zoom + B.y
            };
        }, zu = ()=>zt / Ge, wn = (k)=>{
            const { x: _, y: T } = Vn(k), P = zu(), W = (B)=>Math.floor(Math.floor(B / wt) / P) * P;
            return {
                col: W(_),
                row: W(T)
            };
        }, Bt = (k)=>{
            const { x: _, y: T } = Vn(k), P = zu(), W = (B)=>Math.round(B / wt / P) * P;
            return {
                col: W(_),
                row: W(T)
            };
        }, Lo = (k)=>D.some((_)=>_.type !== k.type ? !1 : _.type === "cell" && k.type === "cell" ? _.row === k.row && _.col === k.col : _.type === "line" && k.type === "line" || _.type === "rect" && k.type === "rect" || _.type === "text" && k.type === "text" || _.type === "image" && k.type === "image" ? _.index === k.index : !1), oh = N.useCallback((k)=>{
            if (r) {
                if (k.button === 1 || k.button === 0 && Mo.current) {
                    k.preventDefault(), vn.current = {
                        x: k.clientX,
                        y: k.clientY,
                        camX: Tt.current.x,
                        camY: Tt.current.y
                    }, k.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (r.set_draw_color(u), r.set_outline_color(f), s === "draw") {
                    const { col: _, row: T } = wn(k), P = u === 6 ? !1 : !r.get_cell(T, _);
                    x(P), ou(), Io(T, _, P), Cr();
                } else if (s === "line") {
                    const { col: _, row: T } = Bt(k);
                    v({
                        row: T,
                        col: _
                    }), r.render_with_line(T, _, T, _);
                } else if (s === "rect") {
                    const { col: _, row: T } = Bt(k);
                    R({
                        row: T,
                        col: _
                    }), r.render_with_rect(T, _, T, _);
                } else if (s === "text") {
                    const { col: _, row: T } = wn(k);
                    X({
                        row: T,
                        col: _
                    });
                } else if (s === "select") {
                    const { col: _, row: T } = wn(k), { x: P, y: W } = Vn(k), B = k.shiftKey;
                    if (D.length > 0 && !B) {
                        const xe = $e(D, r);
                        if (xe) {
                            const kn = Os(xe), Sn = 10 / Tt.current.zoom;
                            if (Math.hypot(P - kn.c * wt, W - kn.r * wt) <= Sn) {
                                Za(P, W);
                                return;
                            }
                        }
                    }
                    if (D.length === 1 && !B) {
                        const xe = D[0];
                        if (xe.type === "line" || xe.type === "rect" || xe.type === "text" || xe.type === "image") {
                            const kn = xe.type === "line" ? Ds(r.get_line(xe.index)) : xe.type === "rect" ? Pt(r.get_rect(xe.index)) : xe.type === "image" ? Pt(r.get_image(xe.index)) : Pt(xd(r.get_text(xe.index))), Sn = Bc(P, W, kn, wt, 9);
                            if (Sn) {
                                Ka({
                                    shape: xe.type,
                                    index: xe.index,
                                    handle: Sn.handle
                                });
                                return;
                            }
                        }
                    }
                    const A = $e(D, r), $ = A && T >= A.minRow && T <= A.maxRow && _ >= A.minCol && _ <= A.maxCol, q = To(P, W);
                    q && !B && Lo(q) && D.length > 1 ? (No({
                        row: T,
                        col: _
                    }), si()) : $ && D.length > 0 && !B && !q ? (No({
                        row: T,
                        col: _
                    }, !0), si()) : q ? B && !Lo(q) ? nu(q) : B && Lo(q) ? ru(q) : (re([
                        q
                    ]), No({
                        row: T,
                        col: _
                    }), r.render(), q.type === "cell" ? r.highlight_cell(q.row, q.col) : q.type === "line" ? r.highlight_line(q.index) : q.type === "rect" ? r.highlight_rect(q.index) : q.type === "image" && r.highlight_image(q.index)) : gn({
                        row: T,
                        col: _
                    }, B);
                }
            }
        }, [
            r,
            s,
            u,
            f,
            D,
            Nr,
            To,
            x,
            v,
            R,
            gn,
            No,
            Ka,
            Za,
            nu,
            ru,
            re,
            Cr,
            si,
            ou,
            Io,
            X
        ]), lh = N.useCallback((k)=>{
            if (!r) return;
            if (vn.current) {
                const T = vn.current, P = Tt.current.zoom;
                Tr({
                    x: T.camX - (k.clientX - T.x) / P,
                    y: T.camY - (k.clientY - T.y) / P,
                    zoom: P
                });
                return;
            }
            const _ = wn(k);
            if (tu(_), s === "select") {
                const T = k.currentTarget;
                if (J && (me === "resize" || me === "rotate")) T.style.cursor = "grabbing";
                else if (J && me === "drag") T.style.cursor = "move";
                else {
                    const { x: P, y: W } = Vn(k);
                    let B = "crosshair";
                    if (D.length > 0) {
                        const A = $e(D, r);
                        if (A) {
                            const $ = Os(A);
                            Math.hypot(P - $.c * wt, W - $.r * wt) <= 10 / Tt.current.zoom && (B = "grab");
                        }
                    }
                    if (B === "crosshair" && D.length === 1) {
                        const A = D[0];
                        if (A.type === "line" || A.type === "rect" || A.type === "text" || A.type === "image") {
                            const $ = A.type === "line" ? Ds(r.get_line(A.index)) : A.type === "rect" ? Pt(r.get_rect(A.index)) : A.type === "image" ? Pt(r.get_image(A.index)) : Pt(xd(r.get_text(A.index)));
                            Bc(P, W, $, wt, 9) && (B = "grab");
                        }
                    }
                    if (B === "crosshair" && D.length > 0) {
                        const A = To(P, W), $ = $e(D, r), q = $ && _.row >= $.minRow && _.row <= $.maxRow && _.col >= $.minCol && _.col <= $.maxCol;
                        (A && Lo(A) || q) && (B = "move");
                    }
                    T.style.cursor = B;
                }
            } else k.currentTarget.style.cursor = "crosshair";
            if (!(!w && !J)) {
                if (s === "draw" && w) {
                    const { col: T, row: P } = wn(k);
                    Io(P, T, g), Cr();
                } else if (s === "line" && h) {
                    const { col: T, row: P } = Bt(k);
                    r.render_with_line(h.row, h.col, P, T);
                } else if (s === "rect" && C) {
                    const { col: T, row: P } = Bt(k);
                    r.render_with_rect(C.row, C.col, P, T);
                } else if (s === "select" && J && me === "resize") {
                    const { col: T, row: P } = Bt(k);
                    Qa({
                        row: P,
                        col: T
                    });
                } else if (s === "select" && J && me === "rotate") {
                    const { x: T, y: P } = Vn(k);
                    Ja(T, P);
                } else if (s === "select" && J) {
                    const { col: T, row: P } = wn(k);
                    if (me === "box" && _r) Un({
                        row: P,
                        col: T
                    });
                    else if (me === "drag" && Nt && D.length > 0) {
                        const W = P - Nt.row, B = T - Nt.col;
                        r.render();
                        for (const A of D)if (A.type === "cell") {
                            const $ = A.row + W, q = A.col + B;
                            r.preview_cell($, q, r.get_cell_color(A.row, A.col));
                        } else if (A.type === "line") {
                            const $ = r.get_line(A.index);
                            $.length >= 6 && r.preview_line($[0] + W, $[1] + B, $[2] + W, $[3] + B, $[4], $[5]);
                        } else if (A.type === "rect") {
                            const $ = r.get_rect(A.index);
                            $.length >= 6 && r.preview_rect($[0] + W, $[1] + B, $[2] + W, $[3] + B, $[4], $[5]);
                        } else if (A.type === "text") {
                            const $ = r.get_text(A.index);
                            $.length >= 7 && r.preview_text($[0] + W, $[1] + B, $[2], r.get_text_size(A.index), $[3], $[4], $[5], $[6], r.get_text_string(A.index));
                        }
                    }
                }
            }
        }, [
            r,
            s,
            w,
            J,
            g,
            h,
            C,
            me,
            _r,
            Nt,
            D,
            To,
            tu,
            Un,
            Qa,
            Ja,
            Cr,
            Io
        ]), ih = N.useCallback((k)=>{
            if (r) {
                if (vn.current) {
                    vn.current = null, k.currentTarget.style.cursor = Mo.current ? "grab" : "crosshair";
                    return;
                }
                if (s === "draw") lu(), m();
                else if (s === "line") {
                    if (h) {
                        const { col: _, row: T } = Bt(k);
                        iu(h.row, h.col, T, _);
                    }
                    S();
                } else if (s === "rect") {
                    if (C) {
                        const { col: _, row: T } = Bt(k);
                        su(C.row, C.col, T, _);
                    }
                    j();
                } else if (s === "select") {
                    const { col: _, row: T } = wn(k);
                    if (me === "rotate") {
                        const { x: P, y: W } = Vn(k);
                        qa(P, W);
                    } else if (me === "resize") {
                        const { col: P, row: W } = Bt(k);
                        Ya({
                            row: W,
                            col: P
                        });
                    } else me === "box" ? xn({
                        row: T,
                        col: _
                    }) : me === "drag" && Ga({
                        row: T,
                        col: _
                    });
                }
            }
        }, [
            r,
            s,
            h,
            C,
            me,
            m,
            S,
            j,
            xn,
            Ga,
            Ya,
            qa,
            Cr,
            lu,
            iu,
            su
        ]), sh = N.useCallback(()=>{
            if (vn.current) {
                vn.current = null;
                return;
            }
            s === "draw" ? m() : s === "line" ? (r && r.render(), S()) : s === "rect" ? (r && r.render(), j()) : s === "select" && (me === "box" ? Wa() : me === "drag" ? Ha() : me === "resize" ? Xa() : me === "rotate" && eu());
        }, [
            r,
            s,
            me,
            m,
            S,
            j,
            Wa,
            Ha,
            Xa,
            eu
        ]);
        return l ? p.jsx("div", {
            className: "flex items-center justify-center bg-gray-100 min-h-screen",
            children: p.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: p.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        l
                    ]
                })
            })
        }) : p.jsxs(p.Fragment, {
            children: [
                p.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        p.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Grid Draw"
                        }),
                        o && p.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        }),
                        p.jsxs("div", {
                            className: "ml-auto flex items-center gap-3",
                            children: [
                                pu && p.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        pu,
                                        di === "saving" && " · saving…",
                                        di === "saved" && " · saved",
                                        di === "error" && " · save failed"
                                    ]
                                }),
                                (Bn.zoom !== 1 || Bn.x !== 0 || Bn.y !== 0) && p.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        p.jsxs("span", {
                                            className: "text-sm text-gray-500 tabular-nums",
                                            children: [
                                                Math.round(Bn.zoom * 100),
                                                "%"
                                            ]
                                        }),
                                        p.jsx(K, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: rh,
                                            children: "Reset view"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                p.jsx("canvas", {
                    ref: n,
                    className: qt("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: Nn,
                        cursor: o ? "wait" : Qm ? "grab" : "crosshair"
                    },
                    onMouseDown: oh,
                    onMouseMove: lh,
                    onMouseUp: ih,
                    onMouseLeave: sh
                }),
                p.jsx(or, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: Nn + 20
                    },
                    children: p.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    p.jsxs(el, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (k)=>k && a(k),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            p.jsx(ut, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            p.jsx(ut, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            p.jsx(ut, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            p.jsx(ut, {
                                                value: "text",
                                                className: "text-xs",
                                                children: "Text"
                                            }),
                                            p.jsx(ut, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Grid (Ctrl+G)"
                                    }),
                                    p.jsxs(el, {
                                        type: "single",
                                        value: String(Ge),
                                        onValueChange: (k)=>k && Je(Number(k)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            p.jsx(ut, {
                                                value: "1",
                                                className: "text-xs",
                                                title: "Whole cells",
                                                children: "1×"
                                            }),
                                            p.jsx(ut, {
                                                value: "2",
                                                className: "text-xs",
                                                title: "Half cells",
                                                children: "½"
                                            }),
                                            p.jsx(ut, {
                                                value: "4",
                                                className: "text-xs",
                                                title: "Quarter cells",
                                                children: "¼"
                                            }),
                                            p.jsx(ut, {
                                                value: "8",
                                                className: "text-xs",
                                                title: "Eighth cells",
                                                children: "⅛"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Image"
                                    }),
                                    p.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>Eu.current?.click(),
                                                title: "Upload an image (transparent PNG works best)",
                                                children: "Upload"
                                            }),
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>{
                                                    const k = window.prompt("Image URL (transparent PNG works best):");
                                                    k && k.trim() && Po(k.trim());
                                                },
                                                title: "Add an image by URL",
                                                children: "From URL"
                                            })
                                        ]
                                    }),
                                    p.jsx("p", {
                                        className: "text-[10px] text-gray-400 mt-1",
                                        children: "…or paste an image (Ctrl/Cmd+V)"
                                    }),
                                    Nu && p.jsx("p", {
                                        className: "text-[10px] text-gray-500 mt-1",
                                        children: Nu
                                    }),
                                    p.jsx("input", {
                                        ref: Eu,
                                        type: "file",
                                        accept: "image/png,image/jpeg,image/webp,image/gif",
                                        className: "hidden",
                                        onChange: (k)=>{
                                            const _ = k.target.files?.[0];
                                            _ && Po(_), k.target.value = "";
                                        }
                                    })
                                ]
                            }),
                            s === "text" && p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Text size"
                                    }),
                                    p.jsx(el, {
                                        type: "single",
                                        value: String(E),
                                        onValueChange: (k)=>k && V(Number(k)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Fp.map((k)=>p.jsxs(ut, {
                                                value: String(k),
                                                className: "text-xs",
                                                children: [
                                                    k,
                                                    "×"
                                                ]
                                            }, k))
                                    })
                                ]
                            }),
                            D.some((k)=>k.type === "text") && p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Text align (drag the box to resize)"
                                    }),
                                    p.jsxs("div", {
                                        className: "flex gap-1 mb-1",
                                        children: [
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ve(0, null),
                                                children: "Left"
                                            }),
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ve(1, null),
                                                children: "Center"
                                            }),
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ve(2, null),
                                                children: "Right"
                                            })
                                        ]
                                    }),
                                    p.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ve(null, 0),
                                                children: "Top"
                                            }),
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ve(null, 1),
                                                children: "Middle"
                                            }),
                                            p.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ve(null, 2),
                                                children: "Bottom"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            s === "line" && p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Line width"
                                    }),
                                    p.jsx(el, {
                                        type: "single",
                                        value: String(U),
                                        onValueChange: (k)=>k && ge(Number(k)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: $p.map((k)=>p.jsxs(ut, {
                                                value: String(k),
                                                className: "text-xs",
                                                children: [
                                                    k,
                                                    "×"
                                                ]
                                            }, k))
                                    })
                                ]
                            }),
                            p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    p.jsx("div", {
                                        className: "flex gap-1",
                                        children: yd.map((k, _)=>p.jsx("button", {
                                                onClick: ()=>d(_),
                                                title: `${_ + 1}: ${k.name}`,
                                                className: qt("w-6 h-6 rounded border-2 transition-all", u === _ ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", k.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: k.hex ?? "transparent",
                                                    backgroundImage: k.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: k.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: k.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, _))
                                    })
                                ]
                            }),
                            p.jsxs("div", {
                                children: [
                                    p.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Outline (rects)"
                                    }),
                                    p.jsx("div", {
                                        className: "flex gap-1",
                                        children: yd.map((k, _)=>p.jsx("button", {
                                                onClick: ()=>y(_),
                                                title: _ === 6 ? "No outline" : k.name,
                                                className: qt("w-6 h-6 rounded border-2 transition-all", f === _ ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", k.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: k.hex ?? "transparent",
                                                    backgroundImage: k.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: k.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: k.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, _))
                                    })
                                ]
                            }),
                            p.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    p.jsx(K, {
                                        variant: "outline",
                                        onClick: ai,
                                        disabled: o || !Fm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Undo (Ctrl/Cmd+Z)",
                                        children: p.jsx(Ry, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    p.jsx(K, {
                                        variant: "outline",
                                        onClick: ui,
                                        disabled: o || !$m(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Redo (Ctrl/Cmd+Shift+Z)",
                                        children: p.jsx(Iy, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            p.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    p.jsx(K, {
                                        variant: "outline",
                                        onClick: Ym,
                                        disabled: o,
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Save the whole drawing to the gallery",
                                        children: "Save to Gallery"
                                    }),
                                    p.jsx(K, {
                                        variant: "outline",
                                        onClick: ()=>fi(!0),
                                        size: "sm",
                                        className: "flex-1",
                                        children: "Gallery"
                                    })
                                ]
                            }),
                            Ut && p.jsxs(K, {
                                variant: "outline",
                                onClick: th,
                                disabled: o,
                                size: "sm",
                                className: "w-full border-amber-400 text-amber-700 hover:bg-amber-50",
                                title: `Overwrite training example #${Ut.id}'s ${Ut.half} with the current canvas`,
                                children: [
                                    "Update example #",
                                    Ut.id,
                                    " (",
                                    Ut.half,
                                    ")"
                                ]
                            }),
                            p.jsx(K, {
                                variant: "destructive",
                                onClick: ii,
                                disabled: o,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            p.jsx(K, {
                                onClick: nh,
                                disabled: o,
                                size: "sm",
                                className: "w-full bg-green-600 hover:bg-green-700 text-white",
                                children: "New Drawing"
                            }),
                            p.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, t text, s select, 1-7 colors, ⌘Z undo"
                            })
                        ]
                    })
                }),
                p.jsx(or, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Nn + 20
                    },
                    children: p.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            Nr.length > 0 && p.jsxs(p.Fragment, {
                                children: [
                                    p.jsxs("div", {
                                        children: [
                                            p.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "JSON (sparse)"
                                            }),
                                            p.jsx("textarea", {
                                                value: bm,
                                                onChange: (k)=>Dm(k.target.value),
                                                placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    }),
                                    p.jsxs("div", {
                                        children: [
                                            p.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "2D Array (black = 1)"
                                            }),
                                            p.jsx("textarea", {
                                                value: Om,
                                                onChange: (k)=>Am(k.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            p.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: D.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${D.length} item${D.length !== 1 ? "s" : ""} selected${Nr.length > 0 ? ` (${Nr.length} cell${Nr.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                }),
                p.jsx(or, {
                    title: "Training Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Nn + 360
                    },
                    children: p.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            ci === "idle" && p.jsxs(p.Fragment, {
                                children: [
                                    p.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                                    }),
                                    p.jsx(K, {
                                        size: "sm",
                                        className: "w-full",
                                        onClick: Um,
                                        disabled: o,
                                        children: "Make Training Data"
                                    }),
                                    p.jsx(K, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Jm,
                                        disabled: o || D.length === 0 || _u !== "ready",
                                        title: _u !== "ready" ? "Train a model first" : "Map the selection through the model",
                                        children: "Predict from Selection"
                                    }),
                                    p.jsx(K, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Zm,
                                        disabled: o || Ee?.status === "running",
                                        children: Ee?.status === "running" ? "Training…" : "Start Training Run"
                                    }),
                                    p.jsx(K, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: ()=>pi(!0),
                                        children: "View Training Data"
                                    })
                                ]
                            }),
                            ci === "input" && p.jsxs(p.Fragment, {
                                children: [
                                    p.jsx("p", {
                                        className: "text-xs font-medium text-blue-600",
                                        children: "Step 1/2 — select the INPUT, then click Next."
                                    }),
                                    p.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            D.length,
                                            " item(s) selected."
                                        ]
                                    }),
                                    p.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            p.jsx(K, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Bm,
                                                disabled: D.length === 0,
                                                children: "Next →"
                                            }),
                                            p.jsx(K, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: du,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ci === "output" && p.jsxs(p.Fragment, {
                                children: [
                                    p.jsx("p", {
                                        className: "text-xs font-medium text-green-600",
                                        children: "Step 2/2 — select the OUTPUT, then Save."
                                    }),
                                    p.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Input: ",
                                            Er ? `${Er.cells.length}c ${Er.lines.length}l ${Er.rects.length}r ${Er.texts.length}t` : "—",
                                            " · Output: ",
                                            D.length,
                                            " item(s)"
                                        ]
                                    }),
                                    p.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            p.jsx(K, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Xm,
                                                disabled: D.length === 0,
                                                children: "Save Example"
                                            }),
                                            p.jsx(K, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: du,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            Cu && p.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: Cu
                            })
                        ]
                    })
                }),
                Ee && p.jsx(or, {
                    title: "Training",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Nn + 540
                    },
                    children: p.jsx("div", {
                        className: "space-y-2 w-72 text-xs",
                        children: (()=>{
                            const k = Ee.total > 0 ? Math.min(100, Math.round(Ee.epoch / Ee.total * 100)) : Ee.status === "done" ? 100 : 0, _ = Ee.status === "error" ? "bg-red-500" : Ee.status === "done" ? "bg-green-500" : "bg-blue-500";
                            return p.jsxs(p.Fragment, {
                                children: [
                                    p.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                            p.jsx("span", {
                                                className: "font-medium",
                                                children: "In-browser model"
                                            }),
                                            p.jsx("span", {
                                                className: "text-gray-400",
                                                children: Ee.status
                                            })
                                        ]
                                    }),
                                    p.jsx("div", {
                                        className: "h-1.5 bg-gray-200 rounded overflow-hidden",
                                        children: p.jsx("div", {
                                            className: qt("h-full", _),
                                            style: {
                                                width: `${k}%`
                                            }
                                        })
                                    }),
                                    p.jsxs("div", {
                                        className: "flex justify-between text-gray-400",
                                        children: [
                                            p.jsx("span", {
                                                children: Ee.total > 0 ? `epoch ${Ee.epoch}/${Ee.total} (${k}%)` : ""
                                            }),
                                            Number.isFinite(Ee.loss) && p.jsxs("span", {
                                                children: [
                                                    "loss ",
                                                    Ee.loss.toFixed(4)
                                                ]
                                            })
                                        ]
                                    }),
                                    Ee.message && p.jsx("p", {
                                        className: "text-gray-400",
                                        children: Ee.message
                                    })
                                ]
                            });
                        })()
                    })
                }),
                Vm && p.jsx(Pm, {
                    asModal: !0,
                    onClose: ()=>fi(!1),
                    onOpenDesign: qm
                }),
                Wm && p.jsx(Mm, {
                    asModal: !0,
                    onClose: ()=>pi(!1),
                    onEditExample: eh
                })
            ]
        });
    }
    function y0({ onSuccess: e }) {
        const [t, n] = N.useState(""), [r, o] = N.useState(""), [l, i] = N.useState(null), [s, a] = N.useState(!1), u = async (c)=>{
            c.preventDefault(), a(!0), i(null);
            try {
                await fy(t, r), e();
            } catch (d) {
                i(String(d instanceof Error ? d.message : d));
            } finally{
                a(!1);
            }
        };
        return p.jsx("div", {
            className: "min-h-screen w-full bg-gray-50 flex items-center justify-center p-6",
            children: p.jsxs("form", {
                onSubmit: u,
                className: "bg-white rounded border p-6 w-80 flex flex-col gap-3",
                children: [
                    p.jsx("h1", {
                        className: "text-lg font-semibold",
                        children: "grid-draw"
                    }),
                    p.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        placeholder: "username",
                        autoComplete: "username",
                        value: t,
                        onChange: (c)=>n(c.target.value)
                    }),
                    p.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        type: "password",
                        placeholder: "password",
                        autoComplete: "current-password",
                        value: r,
                        onChange: (c)=>o(c.target.value)
                    }),
                    l && p.jsx("p", {
                        className: "text-sm text-red-500",
                        children: l
                    }),
                    p.jsx(K, {
                        type: "submit",
                        disabled: s || !t || !r,
                        children: s ? "Signing in…" : "Sign in"
                    })
                ]
            })
        });
    }
    function v0() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function w0() {
        const e = v0(), [t, n] = N.useState(()=>Wp() !== null);
        return N.useEffect(()=>{
            const r = ()=>n(!1);
            return window.addEventListener(As, r), ()=>window.removeEventListener(As, r);
        }, []), t ? p.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? p.jsx(Pm, {}) : e === "training" ? p.jsx(Mm, {}) : p.jsx(x0, {})
        }) : p.jsx(y0, {
            onSuccess: ()=>n(!0)
        });
    }
    const k0 = 600;
    let wd;
    function S0() {
        se.getState().currentName && (clearTimeout(wd), wd = setTimeout(_0, k0));
    }
    async function _0() {
        const e = se.getState();
        if (!e.currentName || !e.grid) return;
        const t = e.serializeWholeGrid();
        if (t) {
            e.setSaveState("saving");
            try {
                await fe.getState().saveDrawing(e.currentName, t, e.exportHistory()), se.getState().setSaveState("saved");
            } catch (n) {
                se.getState().setSaveState("error", n instanceof Error ? n.message : String(n));
            }
        }
    }
    se.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && S0();
    });
    const kd = document.getElementById("grid-draw-root");
    kd && Vi.createRoot(kd).render(p.jsx(oe.StrictMode, {
        children: p.jsx(w0, {})
    }));
})();
export { E0 as a, C0 as c, uh as g, __tla };
