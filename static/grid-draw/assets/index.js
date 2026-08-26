let j0, z0, dh;
let __tla = (async ()=>{
    function ch(e, t) {
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
    z0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    dh = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    j0 = function(e) {
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
    var _d = {
        exports: {}
    }, Bl = {}, Cd = {
        exports: {}
    }, H = {};
    var ko = Symbol.for("react.element"), fh = Symbol.for("react.portal"), ph = Symbol.for("react.fragment"), mh = Symbol.for("react.strict_mode"), hh = Symbol.for("react.profiler"), gh = Symbol.for("react.provider"), xh = Symbol.for("react.context"), yh = Symbol.for("react.forward_ref"), vh = Symbol.for("react.suspense"), wh = Symbol.for("react.memo"), kh = Symbol.for("react.lazy"), ju = Symbol.iterator;
    function Sh(e) {
        return e === null || typeof e != "object" ? null : (e = ju && e[ju] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Ed = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, Nd = Object.assign, Td = {};
    function vr(e, t, n) {
        this.props = e, this.context = t, this.refs = Td, this.updater = n || Ed;
    }
    vr.prototype.isReactComponent = {};
    vr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    vr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Id() {}
    Id.prototype = vr.prototype;
    function Vs(e, t, n) {
        this.props = e, this.context = t, this.refs = Td, this.updater = n || Ed;
    }
    var Gs = Vs.prototype = new Id;
    Gs.constructor = Vs;
    Nd(Gs, vr.prototype);
    Gs.isPureReactComponent = !0;
    var Pu = Array.isArray, Rd = Object.prototype.hasOwnProperty, Hs = {
        current: null
    }, zd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function jd(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)Rd.call(t, r) && !zd.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: ko,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Hs.current
        };
    }
    function _h(e, t) {
        return {
            $$typeof: ko,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Ks(e) {
        return typeof e == "object" && e !== null && e.$$typeof === ko;
    }
    function Ch(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Mu = /\/+/g;
    function gi(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Ch("" + e.key) : t.toString(36);
    }
    function el(e, t, n, r, o) {
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
                    case ko:
                    case fh:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + gi(i, 0) : r, Pu(o) ? (n = "", e != null && (n = e.replace(Mu, "$&/") + "/"), el(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Ks(o) && (o = _h(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Mu, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Pu(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + gi(l, s);
            i += el(l, t, n, a, o);
        }
        else if (a = Sh(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + gi(l, s++), i += el(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function bo(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return el(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Eh(e) {
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
    }, tl = {
        transition: null
    }, Nh = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: tl,
        ReactCurrentOwner: Hs
    };
    function Pd() {
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
            if (!Ks(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    H.Component = vr;
    H.Fragment = ph;
    H.Profiler = hh;
    H.PureComponent = Vs;
    H.StrictMode = mh;
    H.Suspense = vh;
    H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nh;
    H.act = Pd;
    H.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = Nd({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Hs.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)Rd.call(t, a) && !zd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: ko,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    H.createContext = function(e) {
        return e = {
            $$typeof: xh,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: gh,
            _context: e
        }, e.Consumer = e;
    };
    H.createElement = jd;
    H.createFactory = function(e) {
        var t = jd.bind(null, e);
        return t.type = e, t;
    };
    H.createRef = function() {
        return {
            current: null
        };
    };
    H.forwardRef = function(e) {
        return {
            $$typeof: yh,
            render: e
        };
    };
    H.isValidElement = Ks;
    H.lazy = function(e) {
        return {
            $$typeof: kh,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Eh
        };
    };
    H.memo = function(e, t) {
        return {
            $$typeof: wh,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    H.startTransition = function(e) {
        var t = tl.transition;
        tl.transition = {};
        try {
            e();
        } finally{
            tl.transition = t;
        }
    };
    H.unstable_act = Pd;
    H.useCallback = function(e, t) {
        return Le.current.useCallback(e, t);
    };
    H.useContext = function(e) {
        return Le.current.useContext(e);
    };
    H.useDebugValue = function() {};
    H.useDeferredValue = function(e) {
        return Le.current.useDeferredValue(e);
    };
    H.useEffect = function(e, t) {
        return Le.current.useEffect(e, t);
    };
    H.useId = function() {
        return Le.current.useId();
    };
    H.useImperativeHandle = function(e, t, n) {
        return Le.current.useImperativeHandle(e, t, n);
    };
    H.useInsertionEffect = function(e, t) {
        return Le.current.useInsertionEffect(e, t);
    };
    H.useLayoutEffect = function(e, t) {
        return Le.current.useLayoutEffect(e, t);
    };
    H.useMemo = function(e, t) {
        return Le.current.useMemo(e, t);
    };
    H.useReducer = function(e, t, n) {
        return Le.current.useReducer(e, t, n);
    };
    H.useRef = function(e) {
        return Le.current.useRef(e);
    };
    H.useState = function(e) {
        return Le.current.useState(e);
    };
    H.useSyncExternalStore = function(e, t, n) {
        return Le.current.useSyncExternalStore(e, t, n);
    };
    H.useTransition = function() {
        return Le.current.useTransition();
    };
    H.version = "18.3.1";
    Cd.exports = H;
    var N = Cd.exports;
    const oe = dh(N), Md = ch({
        __proto__: null,
        default: oe
    }, [
        N
    ]);
    var Th = N, Ih = Symbol.for("react.element"), Rh = Symbol.for("react.fragment"), zh = Object.prototype.hasOwnProperty, jh = Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ph = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function bd(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)zh.call(t, r) && !Ph.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: Ih,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: jh.current
        };
    }
    Bl.Fragment = Rh;
    Bl.jsx = bd;
    Bl.jsxs = bd;
    _d.exports = Bl;
    var g = _d.exports, Gi = {}, Ld = {
        exports: {}
    }, Xe = {}, Od = {
        exports: {}
    }, Dd = {};
    (function(e) {
        function t(M, F) {
            var I = M.length;
            M.push(F);
            e: for(; 0 < I;){
                var D = I - 1 >>> 1, re = M[D];
                if (0 < o(re, F)) M[D] = F, M[I] = re, I = D;
                else break e;
            }
        }
        function n(M) {
            return M.length === 0 ? null : M[0];
        }
        function r(M) {
            if (M.length === 0) return null;
            var F = M[0], I = M.pop();
            if (I !== F) {
                M[0] = I;
                e: for(var D = 0, re = M.length, xt = re >>> 1; D < xt;){
                    var Ae = 2 * (D + 1) - 1, ue = M[Ae], Z = Ae + 1, qe = M[Z];
                    if (0 > o(ue, I)) Z < re && 0 > o(qe, ue) ? (M[D] = qe, M[Z] = I, D = Z) : (M[D] = ue, M[Ae] = I, D = Ae);
                    else if (Z < re && 0 > o(qe, I)) M[D] = qe, M[Z] = I, D = Z;
                    else break e;
                }
            }
            return F;
        }
        function o(M, F) {
            var I = M.sortIndex - F.sortIndex;
            return I !== 0 ? I : M.id - F.id;
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
        var a = [], u = [], c = 1, d = null, f = 3, w = !1, x = !1, p = !1, y = typeof setTimeout == "function" ? setTimeout : null, h = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
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
            if (p = !1, v(M), !x) if (n(a) !== null) x = !0, X(C);
            else {
                var F = n(u);
                F !== null && De(S, F.startTime - M);
            }
        }
        function C(M, F) {
            x = !1, p && (p = !1, h(E), E = -1), w = !0;
            var I = f;
            try {
                for(v(F), d = n(a); d !== null && (!(d.expirationTime > F) || M && !he());){
                    var D = d.callback;
                    if (typeof D == "function") {
                        d.callback = null, f = d.priorityLevel;
                        var re = D(d.expirationTime <= F);
                        F = e.unstable_now(), typeof re == "function" ? d.callback = re : d === n(a) && r(a), v(F);
                    } else r(a);
                    d = n(a);
                }
                if (d !== null) var xt = !0;
                else {
                    var Ae = n(u);
                    Ae !== null && De(S, Ae.startTime - F), xt = !1;
                }
                return xt;
            } finally{
                d = null, f = I, w = !1;
            }
        }
        var z = !1, j = null, E = -1, W = 5, U = -1;
        function he() {
            return !(e.unstable_now() - U < W);
        }
        function ye() {
            if (j !== null) {
                var M = e.unstable_now();
                U = M;
                var F = !0;
                try {
                    F = j(!0, M);
                } finally{
                    F ? Ge() : (z = !1, j = null);
                }
            } else z = !1;
        }
        var Ge;
        if (typeof m == "function") Ge = function() {
            m(ye);
        };
        else if (typeof MessageChannel < "u") {
            var gt = new MessageChannel, Je = gt.port2;
            gt.port1.onmessage = ye, Ge = function() {
                Je.postMessage(null);
            };
        } else Ge = function() {
            y(ye, 0);
        };
        function X(M) {
            j = M, z || (z = !0, Ge());
        }
        function De(M, F) {
            E = y(function() {
                M(e.unstable_now());
            }, F);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
            M.callback = null;
        }, e.unstable_continueExecution = function() {
            x || w || (x = !0, X(C));
        }, e.unstable_forceFrameRate = function(M) {
            0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < M ? Math.floor(1e3 / M) : 5;
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
            var I = f;
            f = F;
            try {
                return M();
            } finally{
                f = I;
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
            var I = f;
            f = M;
            try {
                return F();
            } finally{
                f = I;
            }
        }, e.unstable_scheduleCallback = function(M, F, I) {
            var D = e.unstable_now();
            switch(typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? D + I : D) : I = D, M){
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
            return re = I + re, M = {
                id: c++,
                callback: F,
                priorityLevel: M,
                startTime: I,
                expirationTime: re,
                sortIndex: -1
            }, I > D ? (M.sortIndex = I, t(u, M), n(a) === null && M === n(u) && (p ? (h(E), E = -1) : p = !0, De(S, I - D))) : (M.sortIndex = re, t(a, M), x || w || (x = !0, X(C))), M;
        }, e.unstable_shouldYield = he, e.unstable_wrapCallback = function(M) {
            var F = f;
            return function() {
                var I = f;
                f = F;
                try {
                    return M.apply(this, arguments);
                } finally{
                    f = I;
                }
            };
        };
    })(Dd);
    Od.exports = Dd;
    var Mh = Od.exports;
    var bh = N, Ye = Mh;
    function T(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Ad = new Set, to = {};
    function An(e, t) {
        cr(e, t), cr(e + "Capture", t);
    }
    function cr(e, t) {
        for(to[e] = t, e = 0; e < t.length; e++)Ad.add(t[e]);
    }
    var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Hi = Object.prototype.hasOwnProperty, Lh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bu = {}, Lu = {};
    function Oh(e) {
        return Hi.call(Lu, e) ? !0 : Hi.call(bu, e) ? !1 : Lh.test(e) ? Lu[e] = !0 : (bu[e] = !0, !1);
    }
    function Dh(e, t, n, r) {
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
    function Ah(e, t, n, r) {
        if (t === null || typeof t > "u" || Dh(e, t, n, r)) return !0;
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
    var Qs = /[\-:]([a-z])/g;
    function Ys(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Qs, Ys);
        Ie[t] = new Oe(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Qs, Ys);
        Ie[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Qs, Ys);
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
    function Xs(e, t, n, r) {
        var o = Ie.hasOwnProperty(t) ? Ie[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ah(t, n, o, r) && (n = null), r || o === null ? Oh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var $t = bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Lo = Symbol.for("react.element"), Gn = Symbol.for("react.portal"), Hn = Symbol.for("react.fragment"), Zs = Symbol.for("react.strict_mode"), Ki = Symbol.for("react.profiler"), Fd = Symbol.for("react.provider"), $d = Symbol.for("react.context"), Js = Symbol.for("react.forward_ref"), Qi = Symbol.for("react.suspense"), Yi = Symbol.for("react.suspense_list"), qs = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), Ud = Symbol.for("react.offscreen"), Ou = Symbol.iterator;
    function Ir(e) {
        return e === null || typeof e != "object" ? null : (e = Ou && e[Ou] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ae = Object.assign, xi;
    function $r(e) {
        if (xi === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            xi = t && t[1] || "";
        }
        return `
` + xi + e;
    }
    var yi = !1;
    function vi(e, t) {
        if (!e || yi) return "";
        yi = !0;
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
            yi = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? $r(e) : "";
    }
    function Fh(e) {
        switch(e.tag){
            case 5:
                return $r(e.type);
            case 16:
                return $r("Lazy");
            case 13:
                return $r("Suspense");
            case 19:
                return $r("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = vi(e.type, !1), e;
            case 11:
                return e = vi(e.type.render, !1), e;
            case 1:
                return e = vi(e.type, !0), e;
            default:
                return "";
        }
    }
    function Xi(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Hn:
                return "Fragment";
            case Gn:
                return "Portal";
            case Ki:
                return "Profiler";
            case Zs:
                return "StrictMode";
            case Qi:
                return "Suspense";
            case Yi:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case $d:
                return (e.displayName || "Context") + ".Consumer";
            case Fd:
                return (e._context.displayName || "Context") + ".Provider";
            case Js:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case qs:
                return t = e.displayName || null, t !== null ? t : Xi(e.type) || "Memo";
            case Kt:
                t = e._payload, e = e._init;
                try {
                    return Xi(e(t));
                } catch  {}
        }
        return null;
    }
    function $h(e) {
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
                return Xi(t);
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
    function Bd(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Uh(e) {
        var t = Bd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Oo(e) {
        e._valueTracker || (e._valueTracker = Uh(e));
    }
    function Wd(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Bd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function hl(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Zi(e, t) {
        var n = t.checked;
        return ae({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Du(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = un(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Vd(e, t) {
        t = t.checked, t != null && Xs(e, "checked", t, !1);
    }
    function Ji(e, t) {
        Vd(e, t);
        var n = un(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? qi(e, t.type, n) : t.hasOwnProperty("defaultValue") && qi(e, t.type, un(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Au(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function qi(e, t, n) {
        (t !== "number" || hl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Ur = Array.isArray;
    function or(e, t, n, r) {
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
    function es(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
        return ae({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Fu(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(T(92));
                if (Ur(n)) {
                    if (1 < n.length) throw Error(T(93));
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
    function Gd(e, t) {
        var n = un(t.value), r = un(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function $u(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Hd(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function ts(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Hd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Do, Kd = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Do = Do || document.createElement("div"), Do.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Do.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function no(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Gr = {
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
    }, Bh = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Gr).forEach(function(e) {
        Bh.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Gr[t] = Gr[e];
        });
    });
    function Qd(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Gr.hasOwnProperty(e) && Gr[e] ? ("" + t).trim() : t + "px";
    }
    function Yd(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Qd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Wh = ae({
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
    function ns(e, t) {
        if (t) {
            if (Wh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(T(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(T(62));
        }
    }
    function rs(e, t) {
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
    var os = null;
    function ea(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ls = null, lr = null, ir = null;
    function Uu(e) {
        if (e = Co(e)) {
            if (typeof ls != "function") throw Error(T(280));
            var t = e.stateNode;
            t && (t = Kl(t), ls(e.stateNode, e.type, t));
        }
    }
    function Xd(e) {
        lr ? ir ? ir.push(e) : ir = [
            e
        ] : lr = e;
    }
    function Zd() {
        if (lr) {
            var e = lr, t = ir;
            if (ir = lr = null, Uu(e), t) for(e = 0; e < t.length; e++)Uu(t[e]);
        }
    }
    function Jd(e, t) {
        return e(t);
    }
    function qd() {}
    var wi = !1;
    function ef(e, t, n) {
        if (wi) return e(t, n);
        wi = !0;
        try {
            return Jd(e, t, n);
        } finally{
            wi = !1, (lr !== null || ir !== null) && (qd(), Zd());
        }
    }
    function ro(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Kl(n);
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
        if (n && typeof n != "function") throw Error(T(231, t, typeof n));
        return n;
    }
    var is = !1;
    if (Ot) try {
        var Rr = {};
        Object.defineProperty(Rr, "passive", {
            get: function() {
                is = !0;
            }
        }), window.addEventListener("test", Rr, Rr), window.removeEventListener("test", Rr, Rr);
    } catch  {
        is = !1;
    }
    function Vh(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (c) {
            this.onError(c);
        }
    }
    var Hr = !1, gl = null, xl = !1, ss = null, Gh = {
        onError: function(e) {
            Hr = !0, gl = e;
        }
    };
    function Hh(e, t, n, r, o, l, i, s, a) {
        Hr = !1, gl = null, Vh.apply(Gh, arguments);
    }
    function Kh(e, t, n, r, o, l, i, s, a) {
        if (Hh.apply(this, arguments), Hr) {
            if (Hr) {
                var u = gl;
                Hr = !1, gl = null;
            } else throw Error(T(198));
            xl || (xl = !0, ss = u);
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
    function tf(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Bu(e) {
        if (Fn(e) !== e) throw Error(T(188));
    }
    function Qh(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Fn(e), t === null) throw Error(T(188));
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
                    if (l === n) return Bu(o), e;
                    if (l === r) return Bu(o), t;
                    l = l.sibling;
                }
                throw Error(T(188));
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
                    if (!i) throw Error(T(189));
                }
            }
            if (n.alternate !== r) throw Error(T(190));
        }
        if (n.tag !== 3) throw Error(T(188));
        return n.stateNode.current === n ? e : t;
    }
    function nf(e) {
        return e = Qh(e), e !== null ? rf(e) : null;
    }
    function rf(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = rf(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var of = Ye.unstable_scheduleCallback, Wu = Ye.unstable_cancelCallback, Yh = Ye.unstable_shouldYield, Xh = Ye.unstable_requestPaint, me = Ye.unstable_now, Zh = Ye.unstable_getCurrentPriorityLevel, ta = Ye.unstable_ImmediatePriority, lf = Ye.unstable_UserBlockingPriority, yl = Ye.unstable_NormalPriority, Jh = Ye.unstable_LowPriority, sf = Ye.unstable_IdlePriority, Wl = null, St = null;
    function qh(e) {
        if (St && typeof St.onCommitFiberRoot == "function") try {
            St.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var pt = Math.clz32 ? Math.clz32 : ng, eg = Math.log, tg = Math.LN2;
    function ng(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (eg(e) / tg | 0) | 0;
    }
    var Ao = 64, Fo = 4194304;
    function Br(e) {
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
    function vl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = Br(s) : (l &= i, l !== 0 && (r = Br(l)));
        } else i = n & ~o, i !== 0 ? r = Br(i) : l !== 0 && (r = Br(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - pt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function rg(e, t) {
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
    function og(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - pt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = rg(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function as(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function af() {
        var e = Ao;
        return Ao <<= 1, !(Ao & 4194240) && (Ao = 64), e;
    }
    function ki(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function So(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
    }
    function lg(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - pt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function na(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - pt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Y = 0;
    function uf(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var cf, ra, df, ff, pf, us = !1, $o = [], en = null, tn = null, nn = null, oo = new Map, lo = new Map, Yt = [], ig = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
                oo.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                lo.delete(t.pointerId);
        }
    }
    function zr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = Co(t), t !== null && ra(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function sg(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return en = zr(en, e, t, n, r, o), !0;
            case "dragenter":
                return tn = zr(tn, e, t, n, r, o), !0;
            case "mouseover":
                return nn = zr(nn, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return oo.set(l, zr(oo.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, lo.set(l, zr(lo.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function mf(e) {
        var t = Tn(e.target);
        if (t !== null) {
            var n = Fn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = tf(n), t !== null) {
                        e.blockedOn = t, pf(e.priority, function() {
                            df(n);
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
    function nl(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = cs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                os = r, n.target.dispatchEvent(r), os = null;
            } else return t = Co(n), t !== null && ra(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Gu(e, t, n) {
        nl(e) && n.delete(t);
    }
    function ag() {
        us = !1, en !== null && nl(en) && (en = null), tn !== null && nl(tn) && (tn = null), nn !== null && nl(nn) && (nn = null), oo.forEach(Gu), lo.forEach(Gu);
    }
    function jr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, us || (us = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, ag)));
    }
    function io(e) {
        function t(o) {
            return jr(o, e);
        }
        if (0 < $o.length) {
            jr($o[0], e);
            for(var n = 1; n < $o.length; n++){
                var r = $o[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(en !== null && jr(en, e), tn !== null && jr(tn, e), nn !== null && jr(nn, e), oo.forEach(t), lo.forEach(t), n = 0; n < Yt.length; n++)r = Yt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Yt.length && (n = Yt[0], n.blockedOn === null);)mf(n), n.blockedOn === null && Yt.shift();
    }
    var sr = $t.ReactCurrentBatchConfig, wl = !0;
    function ug(e, t, n, r) {
        var o = Y, l = sr.transition;
        sr.transition = null;
        try {
            Y = 1, oa(e, t, n, r);
        } finally{
            Y = o, sr.transition = l;
        }
    }
    function cg(e, t, n, r) {
        var o = Y, l = sr.transition;
        sr.transition = null;
        try {
            Y = 4, oa(e, t, n, r);
        } finally{
            Y = o, sr.transition = l;
        }
    }
    function oa(e, t, n, r) {
        if (wl) {
            var o = cs(e, t, n, r);
            if (o === null) ji(e, t, r, kl, n), Vu(e, r);
            else if (sg(o, e, t, n, r)) r.stopPropagation();
            else if (Vu(e, r), t & 4 && -1 < ig.indexOf(e)) {
                for(; o !== null;){
                    var l = Co(o);
                    if (l !== null && cf(l), l = cs(e, t, n, r), l === null && ji(e, t, r, kl, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else ji(e, t, r, null, n);
        }
    }
    var kl = null;
    function cs(e, t, n, r) {
        if (kl = null, e = ea(r), e = Tn(e), e !== null) if (t = Fn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = tf(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return kl = e, null;
    }
    function hf(e) {
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
                switch(Zh()){
                    case ta:
                        return 1;
                    case lf:
                        return 4;
                    case yl:
                    case Jh:
                        return 16;
                    case sf:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Zt = null, la = null, rl = null;
    function gf() {
        if (rl) return rl;
        var e, t = la, n = t.length, r, o = "value" in Zt ? Zt.value : Zt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return rl = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function ol(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Uo() {
        return !0;
    }
    function Hu() {
        return !1;
    }
    function Ze(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Uo : Hu, this.isPropagationStopped = Hu, this;
        }
        return ae(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Uo);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Uo);
            },
            persist: function() {},
            isPersistent: Uo
        }), t;
    }
    var wr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ia = Ze(wr), _o = ae({}, wr, {
        view: 0,
        detail: 0
    }), dg = Ze(_o), Si, _i, Pr, Vl = ae({}, _o, {
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
            return "movementX" in e ? e.movementX : (e !== Pr && (Pr && e.type === "mousemove" ? (Si = e.screenX - Pr.screenX, _i = e.screenY - Pr.screenY) : _i = Si = 0, Pr = e), Si);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : _i;
        }
    }), Ku = Ze(Vl), fg = ae({}, Vl, {
        dataTransfer: 0
    }), pg = Ze(fg), mg = ae({}, _o, {
        relatedTarget: 0
    }), Ci = Ze(mg), hg = ae({}, wr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), gg = Ze(hg), xg = ae({}, wr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), yg = Ze(xg), vg = ae({}, wr, {
        data: 0
    }), Qu = Ze(vg), wg = {
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
    }, kg = {
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
    }, Sg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function _g(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Sg[e]) ? !!t[e] : !1;
    }
    function sa() {
        return _g;
    }
    var Cg = ae({}, _o, {
        key: function(e) {
            if (e.key) {
                var t = wg[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = ol(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kg[e.keyCode] || "Unidentified" : "";
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
            return e.type === "keypress" ? ol(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Eg = Ze(Cg), Ng = ae({}, Vl, {
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
    }), Yu = Ze(Ng), Tg = ae({}, _o, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: sa
    }), Ig = Ze(Tg), Rg = ae({}, wr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), zg = Ze(Rg), jg = ae({}, Vl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Pg = Ze(jg), Mg = [
        9,
        13,
        27,
        32
    ], aa = Ot && "CompositionEvent" in window, Kr = null;
    Ot && "documentMode" in document && (Kr = document.documentMode);
    var bg = Ot && "TextEvent" in window && !Kr, xf = Ot && (!aa || Kr && 8 < Kr && 11 >= Kr), Xu = " ", Zu = !1;
    function yf(e, t) {
        switch(e){
            case "keyup":
                return Mg.indexOf(t.keyCode) !== -1;
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
    function vf(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Kn = !1;
    function Lg(e, t) {
        switch(e){
            case "compositionend":
                return vf(t);
            case "keypress":
                return t.which !== 32 ? null : (Zu = !0, Xu);
            case "textInput":
                return e = t.data, e === Xu && Zu ? null : e;
            default:
                return null;
        }
    }
    function Og(e, t) {
        if (Kn) return e === "compositionend" || !aa && yf(e, t) ? (e = gf(), rl = la = Zt = null, Kn = !1, e) : null;
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
                return xf && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Dg = {
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
    function Ju(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Dg[e.type] : t === "textarea";
    }
    function wf(e, t, n, r) {
        Xd(r), t = Sl(t, "onChange"), 0 < t.length && (n = new ia("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Qr = null, so = null;
    function Ag(e) {
        jf(e, 0);
    }
    function Gl(e) {
        var t = Xn(e);
        if (Wd(t)) return e;
    }
    function Fg(e, t) {
        if (e === "change") return t;
    }
    var kf = !1;
    if (Ot) {
        var Ei;
        if (Ot) {
            var Ni = "oninput" in document;
            if (!Ni) {
                var qu = document.createElement("div");
                qu.setAttribute("oninput", "return;"), Ni = typeof qu.oninput == "function";
            }
            Ei = Ni;
        } else Ei = !1;
        kf = Ei && (!document.documentMode || 9 < document.documentMode);
    }
    function ec() {
        Qr && (Qr.detachEvent("onpropertychange", Sf), so = Qr = null);
    }
    function Sf(e) {
        if (e.propertyName === "value" && Gl(so)) {
            var t = [];
            wf(t, so, e, ea(e)), ef(Ag, t);
        }
    }
    function $g(e, t, n) {
        e === "focusin" ? (ec(), Qr = t, so = n, Qr.attachEvent("onpropertychange", Sf)) : e === "focusout" && ec();
    }
    function Ug(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Gl(so);
    }
    function Bg(e, t) {
        if (e === "click") return Gl(t);
    }
    function Wg(e, t) {
        if (e === "input" || e === "change") return Gl(t);
    }
    function Vg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ht = typeof Object.is == "function" ? Object.is : Vg;
    function ao(e, t) {
        if (ht(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Hi.call(t, o) || !ht(e[o], t[o])) return !1;
        }
        return !0;
    }
    function tc(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function nc(e, t) {
        var n = tc(e);
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
            n = tc(n);
        }
    }
    function _f(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Cf() {
        for(var e = window, t = hl(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = hl(e.document);
        }
        return t;
    }
    function ua(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Gg(e) {
        var t = Cf(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && _f(n.ownerDocument.documentElement, n)) {
            if (r !== null && ua(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = nc(n, l);
                    var i = nc(n, r);
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
    var Hg = Ot && "documentMode" in document && 11 >= document.documentMode, Qn = null, ds = null, Yr = null, fs = !1;
    function rc(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        fs || Qn == null || Qn !== hl(r) || (r = Qn, "selectionStart" in r && ua(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Yr && ao(Yr, r) || (Yr = r, r = Sl(ds, "onSelect"), 0 < r.length && (t = new ia("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Qn)));
    }
    function Bo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Yn = {
        animationend: Bo("Animation", "AnimationEnd"),
        animationiteration: Bo("Animation", "AnimationIteration"),
        animationstart: Bo("Animation", "AnimationStart"),
        transitionend: Bo("Transition", "TransitionEnd")
    }, Ti = {}, Ef = {};
    Ot && (Ef = document.createElement("div").style, "AnimationEvent" in window || (delete Yn.animationend.animation, delete Yn.animationiteration.animation, delete Yn.animationstart.animation), "TransitionEvent" in window || delete Yn.transitionend.transition);
    function Hl(e) {
        if (Ti[e]) return Ti[e];
        if (!Yn[e]) return e;
        var t = Yn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in Ef) return Ti[e] = t[n];
        return e;
    }
    var Nf = Hl("animationend"), Tf = Hl("animationiteration"), If = Hl("animationstart"), Rf = Hl("transitionend"), zf = new Map, oc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function dn(e, t) {
        zf.set(e, t), An(t, [
            e
        ]);
    }
    for(var Ii = 0; Ii < oc.length; Ii++){
        var Ri = oc[Ii], Kg = Ri.toLowerCase(), Qg = Ri[0].toUpperCase() + Ri.slice(1);
        dn(Kg, "on" + Qg);
    }
    dn(Nf, "onAnimationEnd");
    dn(Tf, "onAnimationIteration");
    dn(If, "onAnimationStart");
    dn("dblclick", "onDoubleClick");
    dn("focusin", "onFocus");
    dn("focusout", "onBlur");
    dn(Rf, "onTransitionEnd");
    cr("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    cr("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    cr("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    cr("onPointerLeave", [
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
    var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
    function lc(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Kh(r, t, void 0, e), e.currentTarget = null;
    }
    function jf(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    lc(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    lc(o, s, u), l = a;
                }
            }
        }
        if (xl) throw e = ss, xl = !1, ss = null, e;
    }
    function te(e, t) {
        var n = t[xs];
        n === void 0 && (n = t[xs] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Pf(t, e, 2, !1), n.add(r));
    }
    function zi(e, t, n) {
        var r = 0;
        t && (r |= 4), Pf(n, e, r, t);
    }
    var Wo = "_reactListening" + Math.random().toString(36).slice(2);
    function uo(e) {
        if (!e[Wo]) {
            e[Wo] = !0, Ad.forEach(function(n) {
                n !== "selectionchange" && (Yg.has(n) || zi(n, !1, e), zi(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Wo] || (t[Wo] = !0, zi("selectionchange", !1, t));
        }
    }
    function Pf(e, t, n, r) {
        switch(hf(t)){
            case 1:
                var o = ug;
                break;
            case 4:
                o = cg;
                break;
            default:
                o = oa;
        }
        n = o.bind(null, t, n, e), o = void 0, !is || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function ji(e, t, n, r, o) {
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
        ef(function() {
            var u = l, c = ea(n), d = [];
            e: {
                var f = zf.get(e);
                if (f !== void 0) {
                    var w = ia, x = e;
                    switch(e){
                        case "keypress":
                            if (ol(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            w = Eg;
                            break;
                        case "focusin":
                            x = "focus", w = Ci;
                            break;
                        case "focusout":
                            x = "blur", w = Ci;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            w = Ci;
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
                            w = Ku;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            w = pg;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            w = Ig;
                            break;
                        case Nf:
                        case Tf:
                        case If:
                            w = gg;
                            break;
                        case Rf:
                            w = zg;
                            break;
                        case "scroll":
                            w = dg;
                            break;
                        case "wheel":
                            w = Pg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            w = yg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            w = Yu;
                    }
                    var p = (t & 4) !== 0, y = !p && e === "scroll", h = p ? f !== null ? f + "Capture" : null : f;
                    p = [];
                    for(var m = u, v; m !== null;){
                        v = m;
                        var S = v.stateNode;
                        if (v.tag === 5 && S !== null && (v = S, h !== null && (S = ro(m, h), S != null && p.push(co(m, S, v)))), y) break;
                        m = m.return;
                    }
                    0 < p.length && (f = new w(f, x, null, n, c), d.push({
                        event: f,
                        listeners: p
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (f = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", f && n !== os && (x = n.relatedTarget || n.fromElement) && (Tn(x) || x[Dt])) break e;
                    if ((w || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, w ? (x = n.relatedTarget || n.toElement, w = u, x = x ? Tn(x) : null, x !== null && (y = Fn(x), x !== y || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = u), w !== x)) {
                        if (p = Ku, S = "onMouseLeave", h = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (p = Yu, S = "onPointerLeave", h = "onPointerEnter", m = "pointer"), y = w == null ? f : Xn(w), v = x == null ? f : Xn(x), f = new p(S, m + "leave", w, n, c), f.target = y, f.relatedTarget = v, S = null, Tn(c) === u && (p = new p(h, m + "enter", x, n, c), p.target = v, p.relatedTarget = y, S = p), y = S, w && x) t: {
                            for(p = w, h = x, m = 0, v = p; v; v = Vn(v))m++;
                            for(v = 0, S = h; S; S = Vn(S))v++;
                            for(; 0 < m - v;)p = Vn(p), m--;
                            for(; 0 < v - m;)h = Vn(h), v--;
                            for(; m--;){
                                if (p === h || h !== null && p === h.alternate) break t;
                                p = Vn(p), h = Vn(h);
                            }
                            p = null;
                        }
                        else p = null;
                        w !== null && ic(d, f, w, p, !1), x !== null && y !== null && ic(d, y, x, p, !0);
                    }
                }
                e: {
                    if (f = u ? Xn(u) : window, w = f.nodeName && f.nodeName.toLowerCase(), w === "select" || w === "input" && f.type === "file") var C = Fg;
                    else if (Ju(f)) if (kf) C = Wg;
                    else {
                        C = Ug;
                        var z = $g;
                    }
                    else (w = f.nodeName) && w.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (C = Bg);
                    if (C && (C = C(e, u))) {
                        wf(d, C, n, c);
                        break e;
                    }
                    z && z(e, f, u), e === "focusout" && (z = f._wrapperState) && z.controlled && f.type === "number" && qi(f, "number", f.value);
                }
                switch(z = u ? Xn(u) : window, e){
                    case "focusin":
                        (Ju(z) || z.contentEditable === "true") && (Qn = z, ds = u, Yr = null);
                        break;
                    case "focusout":
                        Yr = ds = Qn = null;
                        break;
                    case "mousedown":
                        fs = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        fs = !1, rc(d, n, c);
                        break;
                    case "selectionchange":
                        if (Hg) break;
                    case "keydown":
                    case "keyup":
                        rc(d, n, c);
                }
                var j;
                if (aa) e: {
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
                else Kn ? yf(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
                E && (xf && n.locale !== "ko" && (Kn || E !== "onCompositionStart" ? E === "onCompositionEnd" && Kn && (j = gf()) : (Zt = c, la = "value" in Zt ? Zt.value : Zt.textContent, Kn = !0)), z = Sl(u, E), 0 < z.length && (E = new Qu(E, e, null, n, c), d.push({
                    event: E,
                    listeners: z
                }), j ? E.data = j : (j = vf(n), j !== null && (E.data = j)))), (j = bg ? Lg(e, n) : Og(e, n)) && (u = Sl(u, "onBeforeInput"), 0 < u.length && (c = new Qu("onBeforeInput", "beforeinput", null, n, c), d.push({
                    event: c,
                    listeners: u
                }), c.data = j));
            }
            jf(d, t);
        });
    }
    function co(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function Sl(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = ro(e, n), l != null && r.unshift(co(e, l, o)), l = ro(e, t), l != null && r.push(co(e, l, o))), e = e.return;
        }
        return r;
    }
    function Vn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function ic(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = ro(n, l), a != null && i.unshift(co(n, a, s))) : o || (a = ro(n, l), a != null && i.push(co(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Xg = /\r\n?/g, Zg = /\u0000|\uFFFD/g;
    function sc(e) {
        return (typeof e == "string" ? e : "" + e).replace(Xg, `
`).replace(Zg, "");
    }
    function Vo(e, t, n) {
        if (t = sc(t), sc(e) !== t && n) throw Error(T(425));
    }
    function _l() {}
    var ps = null, ms = null;
    function hs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var gs = typeof setTimeout == "function" ? setTimeout : void 0, Jg = typeof clearTimeout == "function" ? clearTimeout : void 0, ac = typeof Promise == "function" ? Promise : void 0, qg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ac < "u" ? function(e) {
        return ac.resolve(null).then(e).catch(ex);
    } : gs;
    function ex(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Pi(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), io(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        io(t);
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
    function uc(e) {
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
    var kr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + kr, fo = "__reactProps$" + kr, Dt = "__reactContainer$" + kr, xs = "__reactEvents$" + kr, tx = "__reactListeners$" + kr, nx = "__reactHandles$" + kr;
    function Tn(e) {
        var t = e[kt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Dt] || n[kt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = uc(e); e !== null;){
                    if (n = e[kt]) return n;
                    e = uc(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function Co(e) {
        return e = e[kt] || e[Dt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Xn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(T(33));
    }
    function Kl(e) {
        return e[fo] || null;
    }
    var ys = [], Zn = -1;
    function fn(e) {
        return {
            current: e
        };
    }
    function ne(e) {
        0 > Zn || (e.current = ys[Zn], ys[Zn] = null, Zn--);
    }
    function ee(e, t) {
        Zn++, ys[Zn] = e.current, e.current = t;
    }
    var cn = {}, Pe = fn(cn), Be = fn(!1), Mn = cn;
    function dr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return cn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function We(e) {
        return e = e.childContextTypes, e != null;
    }
    function Cl() {
        ne(Be), ne(Pe);
    }
    function cc(e, t, n) {
        if (Pe.current !== cn) throw Error(T(168));
        ee(Pe, t), ee(Be, n);
    }
    function Mf(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(T(108, $h(e) || "Unknown", o));
        return ae({}, n, r);
    }
    function El(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, Mn = Pe.current, ee(Pe, e), ee(Be, Be.current), !0;
    }
    function dc(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(T(169));
        n ? (e = Mf(e, t, Mn), r.__reactInternalMemoizedMergedChildContext = e, ne(Be), ne(Pe), ee(Pe, e)) : ne(Be), ee(Be, n);
    }
    var jt = null, Ql = !1, Mi = !1;
    function bf(e) {
        jt === null ? jt = [
            e
        ] : jt.push(e);
    }
    function rx(e) {
        Ql = !0, bf(e);
    }
    function pn() {
        if (!Mi && jt !== null) {
            Mi = !0;
            var e = 0, t = Y;
            try {
                var n = jt;
                for(Y = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                jt = null, Ql = !1;
            } catch (o) {
                throw jt !== null && (jt = jt.slice(e + 1)), of(ta, pn), o;
            } finally{
                Y = t, Mi = !1;
            }
        }
        return null;
    }
    var Jn = [], qn = 0, Nl = null, Tl = 0, et = [], tt = 0, bn = null, Mt = 1, bt = "";
    function Cn(e, t) {
        Jn[qn++] = Tl, Jn[qn++] = Nl, Nl = e, Tl = t;
    }
    function Lf(e, t, n) {
        et[tt++] = Mt, et[tt++] = bt, et[tt++] = bn, bn = e;
        var r = Mt;
        e = bt;
        var o = 32 - pt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - pt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Mt = 1 << 32 - pt(t) + o | n << o | r, bt = l + e;
        } else Mt = 1 << l | n << o | r, bt = e;
    }
    function ca(e) {
        e.return !== null && (Cn(e, 1), Lf(e, 1, 0));
    }
    function da(e) {
        for(; e === Nl;)Nl = Jn[--qn], Jn[qn] = null, Tl = Jn[--qn], Jn[qn] = null;
        for(; e === bn;)bn = et[--tt], et[tt] = null, bt = et[--tt], et[tt] = null, Mt = et[--tt], et[tt] = null;
    }
    var Qe = null, Ke = null, le = !1, dt = null;
    function Of(e, t) {
        var n = nt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function fc(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = rn(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qe = e, Ke = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bn !== null ? {
                    id: Mt,
                    overflow: bt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qe = e, Ke = null, !0) : !1;
            default:
                return !1;
        }
    }
    function vs(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ws(e) {
        if (le) {
            var t = Ke;
            if (t) {
                var n = t;
                if (!fc(e, t)) {
                    if (vs(e)) throw Error(T(418));
                    t = rn(n.nextSibling);
                    var r = Qe;
                    t && fc(e, t) ? Of(r, n) : (e.flags = e.flags & -4097 | 2, le = !1, Qe = e);
                }
            } else {
                if (vs(e)) throw Error(T(418));
                e.flags = e.flags & -4097 | 2, le = !1, Qe = e;
            }
        }
    }
    function pc(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Qe = e;
    }
    function Go(e) {
        if (e !== Qe) return !1;
        if (!le) return pc(e), le = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hs(e.type, e.memoizedProps)), t && (t = Ke)) {
            if (vs(e)) throw Df(), Error(T(418));
            for(; t;)Of(e, t), t = rn(t.nextSibling);
        }
        if (pc(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
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
    function Df() {
        for(var e = Ke; e;)e = rn(e.nextSibling);
    }
    function fr() {
        Ke = Qe = null, le = !1;
    }
    function fa(e) {
        dt === null ? dt = [
            e
        ] : dt.push(e);
    }
    var ox = $t.ReactCurrentBatchConfig;
    function Mr(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(T(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(T(147, e));
                var o = r, l = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                    var s = o.refs;
                    i === null ? delete s[l] : s[l] = i;
                }, t._stringRef = l, t);
            }
            if (typeof e != "string") throw Error(T(284));
            if (!n._owner) throw Error(T(290, e));
        }
        return e;
    }
    function Ho(e, t) {
        throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function mc(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Af(e) {
        function t(h, m) {
            if (e) {
                var v = h.deletions;
                v === null ? (h.deletions = [
                    m
                ], h.flags |= 16) : v.push(m);
            }
        }
        function n(h, m) {
            if (!e) return null;
            for(; m !== null;)t(h, m), m = m.sibling;
            return null;
        }
        function r(h, m) {
            for(h = new Map; m !== null;)m.key !== null ? h.set(m.key, m) : h.set(m.index, m), m = m.sibling;
            return h;
        }
        function o(h, m) {
            return h = an(h, m), h.index = 0, h.sibling = null, h;
        }
        function l(h, m, v) {
            return h.index = v, e ? (v = h.alternate, v !== null ? (v = v.index, v < m ? (h.flags |= 2, m) : v) : (h.flags |= 2, m)) : (h.flags |= 1048576, m);
        }
        function i(h) {
            return e && h.alternate === null && (h.flags |= 2), h;
        }
        function s(h, m, v, S) {
            return m === null || m.tag !== 6 ? (m = $i(v, h.mode, S), m.return = h, m) : (m = o(m, v), m.return = h, m);
        }
        function a(h, m, v, S) {
            var C = v.type;
            return C === Hn ? c(h, m, v.props.children, S, v.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Kt && mc(C) === m.type) ? (S = o(m, v.props), S.ref = Mr(h, m, v), S.return = h, S) : (S = dl(v.type, v.key, v.props, null, h.mode, S), S.ref = Mr(h, m, v), S.return = h, S);
        }
        function u(h, m, v, S) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = Ui(v, h.mode, S), m.return = h, m) : (m = o(m, v.children || []), m.return = h, m);
        }
        function c(h, m, v, S, C) {
            return m === null || m.tag !== 7 ? (m = jn(v, h.mode, S, C), m.return = h, m) : (m = o(m, v), m.return = h, m);
        }
        function d(h, m, v) {
            if (typeof m == "string" && m !== "" || typeof m == "number") return m = $i("" + m, h.mode, v), m.return = h, m;
            if (typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case Lo:
                        return v = dl(m.type, m.key, m.props, null, h.mode, v), v.ref = Mr(h, null, m), v.return = h, v;
                    case Gn:
                        return m = Ui(m, h.mode, v), m.return = h, m;
                    case Kt:
                        var S = m._init;
                        return d(h, S(m._payload), v);
                }
                if (Ur(m) || Ir(m)) return m = jn(m, h.mode, v, null), m.return = h, m;
                Ho(h, m);
            }
            return null;
        }
        function f(h, m, v, S) {
            var C = m !== null ? m.key : null;
            if (typeof v == "string" && v !== "" || typeof v == "number") return C !== null ? null : s(h, m, "" + v, S);
            if (typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case Lo:
                        return v.key === C ? a(h, m, v, S) : null;
                    case Gn:
                        return v.key === C ? u(h, m, v, S) : null;
                    case Kt:
                        return C = v._init, f(h, m, C(v._payload), S);
                }
                if (Ur(v) || Ir(v)) return C !== null ? null : c(h, m, v, S, null);
                Ho(h, v);
            }
            return null;
        }
        function w(h, m, v, S, C) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return h = h.get(v) || null, s(m, h, "" + S, C);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case Lo:
                        return h = h.get(S.key === null ? v : S.key) || null, a(m, h, S, C);
                    case Gn:
                        return h = h.get(S.key === null ? v : S.key) || null, u(m, h, S, C);
                    case Kt:
                        var z = S._init;
                        return w(h, m, v, z(S._payload), C);
                }
                if (Ur(S) || Ir(S)) return h = h.get(v) || null, c(m, h, S, C, null);
                Ho(m, S);
            }
            return null;
        }
        function x(h, m, v, S) {
            for(var C = null, z = null, j = m, E = m = 0, W = null; j !== null && E < v.length; E++){
                j.index > E ? (W = j, j = null) : W = j.sibling;
                var U = f(h, j, v[E], S);
                if (U === null) {
                    j === null && (j = W);
                    break;
                }
                e && j && U.alternate === null && t(h, j), m = l(U, m, E), z === null ? C = U : z.sibling = U, z = U, j = W;
            }
            if (E === v.length) return n(h, j), le && Cn(h, E), C;
            if (j === null) {
                for(; E < v.length; E++)j = d(h, v[E], S), j !== null && (m = l(j, m, E), z === null ? C = j : z.sibling = j, z = j);
                return le && Cn(h, E), C;
            }
            for(j = r(h, j); E < v.length; E++)W = w(j, h, E, v[E], S), W !== null && (e && W.alternate !== null && j.delete(W.key === null ? E : W.key), m = l(W, m, E), z === null ? C = W : z.sibling = W, z = W);
            return e && j.forEach(function(he) {
                return t(h, he);
            }), le && Cn(h, E), C;
        }
        function p(h, m, v, S) {
            var C = Ir(v);
            if (typeof C != "function") throw Error(T(150));
            if (v = C.call(v), v == null) throw Error(T(151));
            for(var z = C = null, j = m, E = m = 0, W = null, U = v.next(); j !== null && !U.done; E++, U = v.next()){
                j.index > E ? (W = j, j = null) : W = j.sibling;
                var he = f(h, j, U.value, S);
                if (he === null) {
                    j === null && (j = W);
                    break;
                }
                e && j && he.alternate === null && t(h, j), m = l(he, m, E), z === null ? C = he : z.sibling = he, z = he, j = W;
            }
            if (U.done) return n(h, j), le && Cn(h, E), C;
            if (j === null) {
                for(; !U.done; E++, U = v.next())U = d(h, U.value, S), U !== null && (m = l(U, m, E), z === null ? C = U : z.sibling = U, z = U);
                return le && Cn(h, E), C;
            }
            for(j = r(h, j); !U.done; E++, U = v.next())U = w(j, h, E, U.value, S), U !== null && (e && U.alternate !== null && j.delete(U.key === null ? E : U.key), m = l(U, m, E), z === null ? C = U : z.sibling = U, z = U);
            return e && j.forEach(function(ye) {
                return t(h, ye);
            }), le && Cn(h, E), C;
        }
        function y(h, m, v, S) {
            if (typeof v == "object" && v !== null && v.type === Hn && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case Lo:
                        e: {
                            for(var C = v.key, z = m; z !== null;){
                                if (z.key === C) {
                                    if (C = v.type, C === Hn) {
                                        if (z.tag === 7) {
                                            n(h, z.sibling), m = o(z, v.props.children), m.return = h, h = m;
                                            break e;
                                        }
                                    } else if (z.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Kt && mc(C) === z.type) {
                                        n(h, z.sibling), m = o(z, v.props), m.ref = Mr(h, z, v), m.return = h, h = m;
                                        break e;
                                    }
                                    n(h, z);
                                    break;
                                } else t(h, z);
                                z = z.sibling;
                            }
                            v.type === Hn ? (m = jn(v.props.children, h.mode, S, v.key), m.return = h, h = m) : (S = dl(v.type, v.key, v.props, null, h.mode, S), S.ref = Mr(h, m, v), S.return = h, h = S);
                        }
                        return i(h);
                    case Gn:
                        e: {
                            for(z = v.key; m !== null;){
                                if (m.key === z) if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                    n(h, m.sibling), m = o(m, v.children || []), m.return = h, h = m;
                                    break e;
                                } else {
                                    n(h, m);
                                    break;
                                }
                                else t(h, m);
                                m = m.sibling;
                            }
                            m = Ui(v, h.mode, S), m.return = h, h = m;
                        }
                        return i(h);
                    case Kt:
                        return z = v._init, y(h, m, z(v._payload), S);
                }
                if (Ur(v)) return x(h, m, v, S);
                if (Ir(v)) return p(h, m, v, S);
                Ho(h, v);
            }
            return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, m !== null && m.tag === 6 ? (n(h, m.sibling), m = o(m, v), m.return = h, h = m) : (n(h, m), m = $i(v, h.mode, S), m.return = h, h = m), i(h)) : n(h, m);
        }
        return y;
    }
    var pr = Af(!0), Ff = Af(!1), Il = fn(null), Rl = null, er = null, pa = null;
    function ma() {
        pa = er = Rl = null;
    }
    function ha(e) {
        var t = Il.current;
        ne(Il), e._currentValue = t;
    }
    function ks(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function ar(e, t) {
        Rl = e, pa = er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ue = !0), e.firstContext = null);
    }
    function ot(e) {
        var t = e._currentValue;
        if (pa !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, er === null) {
            if (Rl === null) throw Error(T(308));
            er = e, Rl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else er = er.next = e;
        return t;
    }
    var In = null;
    function ga(e) {
        In === null ? In = [
            e
        ] : In.push(e);
    }
    function $f(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, ga(t)) : (n.next = o.next, o.next = n), t.interleaved = n, At(e, r);
    }
    function At(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Qt = !1;
    function xa(e) {
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
    function Uf(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Lt(e, t) {
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
        return o = r.interleaved, o === null ? (t.next = t, ga(r)) : (t.next = o.next, o.next = t), r.interleaved = t, At(e, n);
    }
    function ll(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
        }
    }
    function hc(e, t) {
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
    function zl(e, t, n, r) {
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
                var f = s.lane, w = s.eventTime;
                if ((r & f) === f) {
                    c !== null && (c = c.next = {
                        eventTime: w,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var x = e, p = s;
                        switch(f = t, w = n, p.tag){
                            case 1:
                                if (x = p.payload, typeof x == "function") {
                                    d = x.call(w, d, f);
                                    break e;
                                }
                                d = x;
                                break e;
                            case 3:
                                x.flags = x.flags & -65537 | 128;
                            case 0:
                                if (x = p.payload, f = typeof x == "function" ? x.call(w, d, f) : x, f == null) break e;
                                d = ae({}, d, f);
                                break e;
                            case 2:
                                Qt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [
                        s
                    ] : f.push(s));
                } else w = {
                    eventTime: w,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, c === null ? (u = c = w, a = d) : c = c.next = w, i |= f;
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
    function gc(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(T(191, o));
                o.call(r);
            }
        }
    }
    var Eo = {}, _t = fn(Eo), po = fn(Eo), mo = fn(Eo);
    function Rn(e) {
        if (e === Eo) throw Error(T(174));
        return e;
    }
    function ya(e, t) {
        switch(ee(mo, t), ee(po, e), ee(_t, Eo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ts(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ts(t, e);
        }
        ne(_t), ee(_t, t);
    }
    function mr() {
        ne(_t), ne(po), ne(mo);
    }
    function Bf(e) {
        Rn(mo.current);
        var t = Rn(_t.current), n = ts(t, e.type);
        t !== n && (ee(po, e), ee(_t, n));
    }
    function va(e) {
        po.current === e && (ne(_t), ne(po));
    }
    var ie = fn(0);
    function jl(e) {
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
    var bi = [];
    function wa() {
        for(var e = 0; e < bi.length; e++)bi[e]._workInProgressVersionPrimary = null;
        bi.length = 0;
    }
    var il = $t.ReactCurrentDispatcher, Li = $t.ReactCurrentBatchConfig, Ln = 0, se = null, we = null, _e = null, Pl = !1, Xr = !1, ho = 0, lx = 0;
    function Re() {
        throw Error(T(321));
    }
    function ka(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!ht(e[n], t[n])) return !1;
        return !0;
    }
    function Sa(e, t, n, r, o, l) {
        if (Ln = l, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, il.current = e === null || e.memoizedState === null ? ux : cx, e = n(r, o), Xr) {
            l = 0;
            do {
                if (Xr = !1, ho = 0, 25 <= l) throw Error(T(301));
                l += 1, _e = we = null, t.updateQueue = null, il.current = dx, e = n(r, o);
            }while (Xr);
        }
        if (il.current = Ml, t = we !== null && we.next !== null, Ln = 0, _e = we = se = null, Pl = !1, t) throw Error(T(300));
        return e;
    }
    function _a() {
        var e = ho !== 0;
        return ho = 0, e;
    }
    function wt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return _e === null ? se.memoizedState = _e = e : _e = _e.next = e, _e;
    }
    function lt() {
        if (we === null) {
            var e = se.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = we.next;
        var t = _e === null ? se.memoizedState : _e.next;
        if (t !== null) _e = t, we = e;
        else {
            if (e === null) throw Error(T(310));
            we = e, e = {
                memoizedState: we.memoizedState,
                baseState: we.baseState,
                baseQueue: we.baseQueue,
                queue: we.queue,
                next: null
            }, _e === null ? se.memoizedState = _e = e : _e = _e.next = e;
        }
        return _e;
    }
    function go(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Oi(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(T(311));
        n.lastRenderedReducer = e;
        var r = we, o = r.baseQueue, l = n.pending;
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
                if ((Ln & c) === c) a !== null && (a = a.next = {
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
                    a === null ? (s = a = d, i = r) : a = a.next = d, se.lanes |= c, On |= c;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, ht(r, t.memoizedState) || (Ue = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, se.lanes |= l, On |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Di(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(T(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            ht(l, t.memoizedState) || (Ue = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Wf() {}
    function Vf(e, t) {
        var n = se, r = lt(), o = t(), l = !ht(r.memoizedState, o);
        if (l && (r.memoizedState = o, Ue = !0), r = r.queue, Ca(Kf.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || _e !== null && _e.memoizedState.tag & 1) {
            if (n.flags |= 2048, xo(9, Hf.bind(null, n, r, o, t), void 0, null), Ce === null) throw Error(T(349));
            Ln & 30 || Gf(n, t, o);
        }
        return o;
    }
    function Gf(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = se.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, se.updateQueue = t, t.stores = [
            e
        ]) : (n = t.stores, n === null ? t.stores = [
            e
        ] : n.push(e));
    }
    function Hf(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Qf(t) && Yf(e);
    }
    function Kf(e, t, n) {
        return n(function() {
            Qf(t) && Yf(e);
        });
    }
    function Qf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ht(e, n);
        } catch  {
            return !0;
        }
    }
    function Yf(e) {
        var t = At(e, 1);
        t !== null && mt(t, e, 1, -1);
    }
    function xc(e) {
        var t = wt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: go,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ax.bind(null, se, e), [
            t.memoizedState,
            e
        ];
    }
    function xo(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = se.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, se.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Xf() {
        return lt().memoizedState;
    }
    function sl(e, t, n, r) {
        var o = wt();
        se.flags |= e, o.memoizedState = xo(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Yl(e, t, n, r) {
        var o = lt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (we !== null) {
            var i = we.memoizedState;
            if (l = i.destroy, r !== null && ka(r, i.deps)) {
                o.memoizedState = xo(t, n, l, r);
                return;
            }
        }
        se.flags |= e, o.memoizedState = xo(1 | t, n, l, r);
    }
    function yc(e, t) {
        return sl(8390656, 8, e, t);
    }
    function Ca(e, t) {
        return Yl(2048, 8, e, t);
    }
    function Zf(e, t) {
        return Yl(4, 2, e, t);
    }
    function Jf(e, t) {
        return Yl(4, 4, e, t);
    }
    function qf(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function ep(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Yl(4, 4, qf.bind(null, t, e), n);
    }
    function Ea() {}
    function tp(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ka(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function np(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ka(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function rp(e, t, n) {
        return Ln & 21 ? (ht(n, t) || (n = af(), se.lanes |= n, On |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ue = !0), e.memoizedState = n);
    }
    function ix(e, t) {
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
    function op() {
        return lt().memoizedState;
    }
    function sx(e, t, n) {
        var r = sn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, lp(e)) ip(t, n);
        else if (n = $f(e, t, n, r), n !== null) {
            var o = be();
            mt(n, e, r, o), sp(n, t, r);
        }
    }
    function ax(e, t, n) {
        var r = sn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (lp(e)) ip(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, ht(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, ga(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = $f(e, t, o, r), n !== null && (o = be(), mt(n, e, r, o), sp(n, t, r));
        }
    }
    function lp(e) {
        var t = e.alternate;
        return e === se || t !== null && t === se;
    }
    function ip(e, t) {
        Xr = Pl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function sp(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, na(e, n);
        }
    }
    var Ml = {
        readContext: ot,
        useCallback: Re,
        useContext: Re,
        useEffect: Re,
        useImperativeHandle: Re,
        useInsertionEffect: Re,
        useLayoutEffect: Re,
        useMemo: Re,
        useReducer: Re,
        useRef: Re,
        useState: Re,
        useDebugValue: Re,
        useDeferredValue: Re,
        useTransition: Re,
        useMutableSource: Re,
        useSyncExternalStore: Re,
        useId: Re,
        unstable_isNewReconciler: !1
    }, ux = {
        readContext: ot,
        useCallback: function(e, t) {
            return wt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: ot,
        useEffect: yc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, sl(4194308, 4, qf.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return sl(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return sl(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = wt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = wt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = sx.bind(null, se, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = wt();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: xc,
        useDebugValue: Ea,
        useDeferredValue: function(e) {
            return wt().memoizedState = e;
        },
        useTransition: function() {
            var e = xc(!1), t = e[0];
            return e = ix.bind(null, e[1]), wt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = se, o = wt();
            if (le) {
                if (n === void 0) throw Error(T(407));
                n = n();
            } else {
                if (n = t(), Ce === null) throw Error(T(349));
                Ln & 30 || Gf(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, yc(Kf.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, xo(9, Hf.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = wt(), t = Ce.identifierPrefix;
            if (le) {
                var n = bt, r = Mt;
                n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ho++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = lx++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, cx = {
        readContext: ot,
        useCallback: tp,
        useContext: ot,
        useEffect: Ca,
        useImperativeHandle: ep,
        useInsertionEffect: Zf,
        useLayoutEffect: Jf,
        useMemo: np,
        useReducer: Oi,
        useRef: Xf,
        useState: function() {
            return Oi(go);
        },
        useDebugValue: Ea,
        useDeferredValue: function(e) {
            var t = lt();
            return rp(t, we.memoizedState, e);
        },
        useTransition: function() {
            var e = Oi(go)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Wf,
        useSyncExternalStore: Vf,
        useId: op,
        unstable_isNewReconciler: !1
    }, dx = {
        readContext: ot,
        useCallback: tp,
        useContext: ot,
        useEffect: Ca,
        useImperativeHandle: ep,
        useInsertionEffect: Zf,
        useLayoutEffect: Jf,
        useMemo: np,
        useReducer: Di,
        useRef: Xf,
        useState: function() {
            return Di(go);
        },
        useDebugValue: Ea,
        useDeferredValue: function(e) {
            var t = lt();
            return we === null ? t.memoizedState = e : rp(t, we.memoizedState, e);
        },
        useTransition: function() {
            var e = Di(go)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Wf,
        useSyncExternalStore: Vf,
        useId: op,
        unstable_isNewReconciler: !1
    };
    function ut(e, t) {
        if (e && e.defaultProps) {
            t = ae({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function Ss(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Xl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Fn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = be(), o = sn(e), l = Lt(r, o);
            l.payload = t, n != null && (l.callback = n), t = on(e, l, o), t !== null && (mt(t, e, o, r), ll(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = be(), o = sn(e), l = Lt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = on(e, l, o), t !== null && (mt(t, e, o, r), ll(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = be(), r = sn(e), o = Lt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = on(e, o, r), t !== null && (mt(t, e, r, n), ll(t, e, r));
        }
    };
    function vc(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !ao(n, r) || !ao(o, l) : !0;
    }
    function ap(e, t, n) {
        var r = !1, o = cn, l = t.contextType;
        return typeof l == "object" && l !== null ? l = ot(l) : (o = We(t) ? Mn : Pe.current, r = t.contextTypes, l = (r = r != null) ? dr(e, o) : cn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Xl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function wc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Xl.enqueueReplaceState(t, t.state, null);
    }
    function _s(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, xa(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = ot(l) : (l = We(t) ? Mn : Pe.current, o.context = dr(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Ss(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Xl.enqueueReplaceState(o, o.state, null), zl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function hr(e, t) {
        try {
            var n = "", r = t;
            do n += Fh(r), r = r.return;
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
    function Ai(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function Cs(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var fx = typeof WeakMap == "function" ? WeakMap : Map;
    function up(e, t, n) {
        n = Lt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Ll || (Ll = !0, bs = r), Cs(e, t);
        }, n;
    }
    function cp(e, t, n) {
        n = Lt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                Cs(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Cs(e, t), typeof r != "function" && (ln === null ? ln = new Set([
                this
            ]) : ln.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function kc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new fx;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Nx.bind(null, e, t, n), t.then(e, e));
    }
    function Sc(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function _c(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, on(n, t, 1))), n.lanes |= 1), e);
    }
    var px = $t.ReactCurrentOwner, Ue = !1;
    function Me(e, t, n, r) {
        t.child = e === null ? Ff(t, null, n, r) : pr(t, e.child, n, r);
    }
    function Cc(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return ar(t, o), r = Sa(e, t, n, r, l, o), n = _a(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (le && n && ca(t), t.flags |= 1, Me(e, t, r, o), t.child);
    }
    function Ec(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Ma(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, dp(e, t, l, r, o)) : (e = dl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : ao, n(i, r) && e.ref === t.ref) return Ft(e, t, o);
        }
        return t.flags |= 1, e = an(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function dp(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (ao(l, r) && e.ref === t.ref) if (Ue = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Ue = !0);
            else return t.lanes = e.lanes, Ft(e, t, o);
        }
        return Es(e, t, n, r, o);
    }
    function fp(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ee(nr, He), He |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ee(nr, He), He |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, ee(nr, He), He |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ee(nr, He), He |= r;
        return Me(e, t, o, n), t.child;
    }
    function pp(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Es(e, t, n, r, o) {
        var l = We(n) ? Mn : Pe.current;
        return l = dr(t, l), ar(t, o), n = Sa(e, t, n, r, l, o), r = _a(), e !== null && !Ue ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ft(e, t, o)) : (le && r && ca(t), t.flags |= 1, Me(e, t, n, o), t.child);
    }
    function Nc(e, t, n, r, o) {
        if (We(n)) {
            var l = !0;
            El(t);
        } else l = !1;
        if (ar(t, o), t.stateNode === null) al(e, t), ap(t, n, r), _s(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = ot(u) : (u = We(n) ? Mn : Pe.current, u = dr(t, u));
            var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && wc(t, i, r, u), Qt = !1;
            var f = t.memoizedState;
            i.state = f, zl(t, r, i, o), a = t.memoizedState, s !== r || f !== a || Be.current || Qt ? (typeof c == "function" && (Ss(t, n, c, r), a = t.memoizedState), (s = Qt || vc(t, n, s, r, f, a, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Uf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ut(t.type, s), i.props = u, d = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = We(n) ? Mn : Pe.current, a = dr(t, a));
            var w = n.getDerivedStateFromProps;
            (c = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || f !== a) && wc(t, i, r, a), Qt = !1, f = t.memoizedState, i.state = f, zl(t, r, i, o);
            var x = t.memoizedState;
            s !== d || f !== x || Be.current || Qt ? (typeof w == "function" && (Ss(t, n, w, r), x = t.memoizedState), (u = Qt || vc(t, n, u, r, f, x, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), i.props = r, i.state = x, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Ns(e, t, n, r, l, o);
    }
    function Ns(e, t, n, r, o, l) {
        pp(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && dc(t, n, !1), Ft(e, t, l);
        r = t.stateNode, px.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = pr(t, e.child, null, l), t.child = pr(t, null, s, l)) : Me(e, t, s, l), t.memoizedState = r.state, o && dc(t, n, !0), t.child;
    }
    function mp(e) {
        var t = e.stateNode;
        t.pendingContext ? cc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cc(e, t.context, !1), ya(e, t.containerInfo);
    }
    function Tc(e, t, n, r, o) {
        return fr(), fa(o), t.flags |= 256, Me(e, t, n, r), t.child;
    }
    var Ts = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Is(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function hp(e, t, n) {
        var r = t.pendingProps, o = ie.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ee(ie, o & 1), e === null) return ws(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = ql(i, r, 0, null), e = jn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Is(n), t.memoizedState = Ts, e) : Na(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return mx(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = an(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = an(s, l) : (l = jn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Is(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ts, r;
        }
        return l = e.child, e = l.sibling, r = an(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function Na(e, t) {
        return t = ql({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Ko(e, t, n, r) {
        return r !== null && fa(r), pr(t, e.child, null, n), e = Na(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function mx(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Ai(Error(T(422))), Ko(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = ql({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = jn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && pr(t, e.child, null, i), t.child.memoizedState = Is(i), t.memoizedState = Ts, l);
        if (!(t.mode & 1)) return Ko(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(T(419)), r = Ai(l, r, void 0), Ko(e, t, i, r);
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, At(e, o), mt(r, e, o, -1));
            }
            return Pa(), r = Ai(Error(T(421))), Ko(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Tx.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ke = rn(o.nextSibling), Qe = t, le = !0, dt = null, e !== null && (et[tt++] = Mt, et[tt++] = bt, et[tt++] = bn, Mt = e.id, bt = e.overflow, bn = t), t = Na(t, r.children), t.flags |= 4096, t);
    }
    function Ic(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), ks(e.return, t, n);
    }
    function Fi(e, t, n, r, o) {
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
    function gp(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Me(e, t, r.children, n), r = ie.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Ic(e, n, t);
                else if (e.tag === 19) Ic(e, n, t);
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
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && jl(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Fi(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && jl(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                Fi(t, !0, n, null, l);
                break;
            case "together":
                Fi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function al(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Ft(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), On |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(T(153));
        if (t.child !== null) {
            for(e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = an(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function hx(e, t, n) {
        switch(t.tag){
            case 3:
                mp(t), fr();
                break;
            case 5:
                Bf(t);
                break;
            case 1:
                We(t.type) && El(t);
                break;
            case 4:
                ya(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                ee(Il, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ee(ie, ie.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? hp(e, t, n) : (ee(ie, ie.current & 1), e = Ft(e, t, n), e !== null ? e.sibling : null);
                ee(ie, ie.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return gp(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ee(ie, ie.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, fp(e, t, n);
        }
        return Ft(e, t, n);
    }
    var xp, Rs, yp, vp;
    xp = function(e, t) {
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
    Rs = function() {};
    yp = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, Rn(_t.current);
            var l = null;
            switch(n){
                case "input":
                    o = Zi(e, o), r = Zi(e, r), l = [];
                    break;
                case "select":
                    o = ae({}, o, {
                        value: void 0
                    }), r = ae({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = es(e, o), r = es(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _l);
            }
            ns(n, r);
            var i;
            n = null;
            for(u in o)if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
                var s = o[u];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (to.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
            for(u in r){
                var a = r[u];
                if (s = o?.[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in a)a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (to.hasOwnProperty(u) ? (a != null && u === "onScroll" && te("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    vp = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function br(e, t) {
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
    function ze(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function gx(e, t, n) {
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
                return ze(t), null;
            case 1:
                return We(t.type) && Cl(), ze(t), null;
            case 3:
                return r = t.stateNode, mr(), ne(Be), ne(Pe), wa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Go(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Ds(dt), dt = null))), Rs(e, t), ze(t), null;
            case 5:
                va(t);
                var o = Rn(mo.current);
                if (n = t.type, e !== null && t.stateNode != null) yp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(T(166));
                        return ze(t), null;
                    }
                    if (e = Rn(_t.current), Go(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[kt] = t, r[fo] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < Wr.length; o++)te(Wr[o], r);
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
                                Du(r, l), te("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, te("invalid", r);
                                break;
                            case "textarea":
                                Fu(r, l), te("invalid", r);
                        }
                        ns(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Vo(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Vo(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : to.hasOwnProperty(i) && s != null && i === "onScroll" && te("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Oo(r), Au(r, l, !0);
                                break;
                            case "textarea":
                                Oo(r), $u(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = _l);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[kt] = t, e[fo] = r, xp(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = rs(n, r), n){
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
                                    for(o = 0; o < Wr.length; o++)te(Wr[o], e);
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
                                    Du(e, r), o = Zi(e, r), te("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = ae({}, r, {
                                        value: void 0
                                    }), te("invalid", e);
                                    break;
                                case "textarea":
                                    Fu(e, r), o = es(e, r), te("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            ns(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? Yd(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Kd(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && no(e, a) : typeof a == "number" && no(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (to.hasOwnProperty(l) ? a != null && l === "onScroll" && te("scroll", e) : a != null && Xs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    Oo(e), Au(e, r, !1);
                                    break;
                                case "textarea":
                                    Oo(e), $u(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + un(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? or(e, !!r.multiple, l, !1) : r.defaultValue != null && or(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = _l);
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
                return ze(t), null;
            case 6:
                if (e && t.stateNode != null) vp(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
                    if (n = Rn(mo.current), Rn(_t.current), Go(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (l = r.nodeValue !== n) && (e = Qe, e !== null)) switch(e.tag){
                            case 3:
                                Vo(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Vo(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
                }
                return ze(t), null;
            case 13:
                if (ne(ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (le && Ke !== null && t.mode & 1 && !(t.flags & 128)) Df(), fr(), t.flags |= 98560, l = !1;
                    else if (l = Go(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(T(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
                            l[kt] = t;
                        } else fr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        ze(t), l = !1;
                    } else dt !== null && (Ds(dt), dt = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ie.current & 1 ? ke === 0 && (ke = 3) : Pa())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
            case 4:
                return mr(), Rs(e, t), e === null && uo(t.stateNode.containerInfo), ze(t), null;
            case 10:
                return ha(t.type._context), ze(t), null;
            case 17:
                return We(t.type) && Cl(), ze(t), null;
            case 19:
                if (ne(ie), l = t.memoizedState, l === null) return ze(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) br(l, !1);
                else {
                    if (ke !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = jl(e), i !== null) {
                            for(t.flags |= 128, br(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return ee(ie, ie.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && me() > gr && (t.flags |= 128, r = !0, br(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = jl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), br(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !le) return ze(t), null;
                    } else 2 * me() - l.renderingStartTime > gr && n !== 1073741824 && (t.flags |= 128, r = !0, br(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = me(), t.sibling = null, n = ie.current, ee(ie, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
            case 22:
            case 23:
                return ja(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? He & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(T(156, t.tag));
    }
    function xx(e, t) {
        switch(da(t), t.tag){
            case 1:
                return We(t.type) && Cl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return mr(), ne(Be), ne(Pe), wa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return va(t), null;
            case 13:
                if (ne(ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(T(340));
                    fr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ne(ie), null;
            case 4:
                return mr(), null;
            case 10:
                return ha(t.type._context), null;
            case 22:
            case 23:
                return ja(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Qo = !1, je = !1, yx = typeof WeakSet == "function" ? WeakSet : Set, b = null;
    function tr(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            ce(e, t, r);
        }
        else n.current = null;
    }
    function zs(e, t, n) {
        try {
            n();
        } catch (r) {
            ce(e, t, r);
        }
    }
    var Rc = !1;
    function vx(e, t) {
        if (ps = wl, e = Cf(), ua(e)) {
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
                        for(var w; d !== n || o !== 0 && d.nodeType !== 3 || (s = i + o), d !== l || r !== 0 && d.nodeType !== 3 || (a = i + r), d.nodeType === 3 && (i += d.nodeValue.length), (w = d.firstChild) !== null;)f = d, d = w;
                        for(;;){
                            if (d === e) break t;
                            if (f === n && ++u === o && (s = i), f === l && ++c === r && (a = i), (w = d.nextSibling) !== null) break;
                            d = f, f = d.parentNode;
                        }
                        d = w;
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
        for(ms = {
            focusedElem: e,
            selectionRange: n
        }, wl = !1, b = t; b !== null;)if (t = b, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, b = e;
        else for(; b !== null;){
            t = b;
            try {
                var x = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (x !== null) {
                            var p = x.memoizedProps, y = x.memoizedState, h = t.stateNode, m = h.getSnapshotBeforeUpdate(t.elementType === t.type ? p : ut(t.type, p), y);
                            h.__reactInternalSnapshotBeforeUpdate = m;
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
                        throw Error(T(163));
                }
            } catch (S) {
                ce(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, b = e;
                break;
            }
            b = t.return;
        }
        return x = Rc, Rc = !1, x;
    }
    function Zr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && zs(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function Zl(e, t) {
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
    function js(e) {
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
    function wp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, wp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[fo], delete t[xs], delete t[tx], delete t[nx])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function kp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function zc(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || kp(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Ps(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = _l));
        else if (r !== 4 && (e = e.child, e !== null)) for(Ps(e, t, n), e = e.sibling; e !== null;)Ps(e, t, n), e = e.sibling;
    }
    function Ms(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Ms(e, t, n), e = e.sibling; e !== null;)Ms(e, t, n), e = e.sibling;
    }
    var Ne = null, ct = !1;
    function Wt(e, t, n) {
        for(n = n.child; n !== null;)Sp(e, t, n), n = n.sibling;
    }
    function Sp(e, t, n) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
            St.onCommitFiberUnmount(Wl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                je || tr(n, t);
            case 6:
                var r = Ne, o = ct;
                Ne = null, Wt(e, t, n), Ne = r, ct = o, Ne !== null && (ct ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ne.removeChild(n.stateNode));
                break;
            case 18:
                Ne !== null && (ct ? (e = Ne, n = n.stateNode, e.nodeType === 8 ? Pi(e.parentNode, n) : e.nodeType === 1 && Pi(e, n), io(e)) : Pi(Ne, n.stateNode));
                break;
            case 4:
                r = Ne, o = ct, Ne = n.stateNode.containerInfo, ct = !0, Wt(e, t, n), Ne = r, ct = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && zs(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Wt(e, t, n);
                break;
            case 1:
                if (!je && (tr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    ce(n, t, s);
                }
                Wt(e, t, n);
                break;
            case 21:
                Wt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (je = (r = je) || n.memoizedState !== null, Wt(e, t, n), je = r) : Wt(e, t, n);
                break;
            default:
                Wt(e, t, n);
        }
    }
    function jc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new yx), t.forEach(function(r) {
                var o = Ix.bind(null, e, r);
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
                if (Ne === null) throw Error(T(160));
                Sp(l, i, o), Ne = null, ct = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                ce(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)_p(t, e), t = t.sibling;
    }
    function _p(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (it(t, e), yt(e), r & 4) {
                    try {
                        Zr(3, e, e.return), Zl(3, e);
                    } catch (p) {
                        ce(e, e.return, p);
                    }
                    try {
                        Zr(5, e, e.return);
                    } catch (p) {
                        ce(e, e.return, p);
                    }
                }
                break;
            case 1:
                it(t, e), yt(e), r & 512 && n !== null && tr(n, n.return);
                break;
            case 5:
                if (it(t, e), yt(e), r & 512 && n !== null && tr(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        no(o, "");
                    } catch (p) {
                        ce(e, e.return, p);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Vd(o, l), rs(s, i);
                        var u = rs(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var c = a[i], d = a[i + 1];
                            c === "style" ? Yd(o, d) : c === "dangerouslySetInnerHTML" ? Kd(o, d) : c === "children" ? no(o, d) : Xs(o, c, d, u);
                        }
                        switch(s){
                            case "input":
                                Ji(o, l);
                                break;
                            case "textarea":
                                Gd(o, l);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var w = l.value;
                                w != null ? or(o, !!l.multiple, w, !1) : f !== !!l.multiple && (l.defaultValue != null ? or(o, !!l.multiple, l.defaultValue, !0) : or(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[fo] = l;
                    } catch (p) {
                        ce(e, e.return, p);
                    }
                }
                break;
            case 6:
                if (it(t, e), yt(e), r & 4) {
                    if (e.stateNode === null) throw Error(T(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (p) {
                        ce(e, e.return, p);
                    }
                }
                break;
            case 3:
                if (it(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    io(t.containerInfo);
                } catch (p) {
                    ce(e, e.return, p);
                }
                break;
            case 4:
                it(t, e), yt(e);
                break;
            case 13:
                it(t, e), yt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Ra = me())), r & 4 && jc(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (je = (u = je) || c, it(t, e), je = u) : it(t, e), yt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for(b = e, c = e.child; c !== null;){
                        for(d = b = c; b !== null;){
                            switch(f = b, w = f.child, f.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Zr(4, f, f.return);
                                    break;
                                case 1:
                                    tr(f, f.return);
                                    var x = f.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                                        } catch (p) {
                                            ce(r, n, p);
                                        }
                                    }
                                    break;
                                case 5:
                                    tr(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Mc(d);
                                        continue;
                                    }
                            }
                            w !== null ? (w.return = f, b = w) : Mc(d);
                        }
                        c = c.sibling;
                    }
                    e: for(c = null, d = e;;){
                        if (d.tag === 5) {
                            if (c === null) {
                                c = d;
                                try {
                                    o = d.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Qd("display", i));
                                } catch (p) {
                                    ce(e, e.return, p);
                                }
                            }
                        } else if (d.tag === 6) {
                            if (c === null) try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                            } catch (p) {
                                ce(e, e.return, p);
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
                it(t, e), yt(e), r & 4 && jc(e);
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
                        if (kp(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(T(160));
                }
                switch(r.tag){
                    case 5:
                        var o = r.stateNode;
                        r.flags & 32 && (no(o, ""), r.flags &= -33);
                        var l = zc(e);
                        Ms(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = zc(e);
                        Ps(e, s, i);
                        break;
                    default:
                        throw Error(T(161));
                }
            } catch (a) {
                ce(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function wx(e, t, n) {
        b = e, Cp(e);
    }
    function Cp(e, t, n) {
        for(var r = (e.mode & 1) !== 0; b !== null;){
            var o = b, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Qo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || je;
                    s = Qo;
                    var u = je;
                    if (Qo = i, (je = a) && !u) for(b = o; b !== null;)i = b, a = i.child, i.tag === 22 && i.memoizedState !== null ? bc(o) : a !== null ? (a.return = i, b = a) : bc(o);
                    for(; l !== null;)b = l, Cp(l), l = l.sibling;
                    b = o, Qo = s, je = u;
                }
                Pc(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, b = l) : Pc(e);
        }
    }
    function Pc(e) {
        for(; b !== null;){
            var t = b;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            je || Zl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !je) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && gc(t, l, r);
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
                                gc(t, i, n);
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
                                        d !== null && io(d);
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
                            throw Error(T(163));
                    }
                    je || t.flags & 512 && js(t);
                } catch (f) {
                    ce(t, t.return, f);
                }
            }
            if (t === e) {
                b = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, b = n;
                break;
            }
            b = t.return;
        }
    }
    function Mc(e) {
        for(; b !== null;){
            var t = b;
            if (t === e) {
                b = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, b = n;
                break;
            }
            b = t.return;
        }
    }
    function bc(e) {
        for(; b !== null;){
            var t = b;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Zl(4, t);
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
                            js(t);
                        } catch (a) {
                            ce(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            js(t);
                        } catch (a) {
                            ce(t, i, a);
                        }
                }
            } catch (a) {
                ce(t, t.return, a);
            }
            if (t === e) {
                b = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, b = s;
                break;
            }
            b = t.return;
        }
    }
    var kx = Math.ceil, bl = $t.ReactCurrentDispatcher, Ta = $t.ReactCurrentOwner, rt = $t.ReactCurrentBatchConfig, Q = 0, Ce = null, xe = null, Te = 0, He = 0, nr = fn(0), ke = 0, yo = null, On = 0, Jl = 0, Ia = 0, Jr = null, Fe = null, Ra = 0, gr = 1 / 0, zt = null, Ll = !1, bs = null, ln = null, Yo = !1, Jt = null, Ol = 0, qr = 0, Ls = null, ul = -1, cl = 0;
    function be() {
        return Q & 6 ? me() : ul !== -1 ? ul : ul = me();
    }
    function sn(e) {
        return e.mode & 1 ? Q & 2 && Te !== 0 ? Te & -Te : ox.transition !== null ? (cl === 0 && (cl = af()), cl) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hf(e.type)), e) : 1;
    }
    function mt(e, t, n, r) {
        if (50 < qr) throw qr = 0, Ls = null, Error(T(185));
        So(e, n, r), (!(Q & 2) || e !== Ce) && (e === Ce && (!(Q & 2) && (Jl |= n), ke === 4 && Xt(e, Te)), Ve(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (gr = me() + 500, Ql && pn()));
    }
    function Ve(e, t) {
        var n = e.callbackNode;
        og(e, t);
        var r = vl(e, e === Ce ? Te : 0);
        if (r === 0) n !== null && Wu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Wu(n), t === 1) e.tag === 0 ? rx(Lc.bind(null, e)) : bf(Lc.bind(null, e)), qg(function() {
                !(Q & 6) && pn();
            }), n = null;
            else {
                switch(uf(r)){
                    case 1:
                        n = ta;
                        break;
                    case 4:
                        n = lf;
                        break;
                    case 16:
                        n = yl;
                        break;
                    case 536870912:
                        n = sf;
                        break;
                    default:
                        n = yl;
                }
                n = Pp(n, Ep.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function Ep(e, t) {
        if (ul = -1, cl = 0, Q & 6) throw Error(T(327));
        var n = e.callbackNode;
        if (ur() && e.callbackNode !== n) return null;
        var r = vl(e, e === Ce ? Te : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Dl(e, r);
        else {
            t = r;
            var o = Q;
            Q |= 2;
            var l = Tp();
            (Ce !== e || Te !== t) && (zt = null, gr = me() + 500, zn(e, t));
            do try {
                Cx();
                break;
            } catch (s) {
                Np(e, s);
            }
            while (!0);
            ma(), bl.current = l, Q = o, xe !== null ? t = 0 : (Ce = null, Te = 0, t = ke);
        }
        if (t !== 0) {
            if (t === 2 && (o = as(e), o !== 0 && (r = o, t = Os(e, o))), t === 1) throw n = yo, zn(e, 0), Xt(e, r), Ve(e, me()), n;
            if (t === 6) Xt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Sx(o) && (t = Dl(e, r), t === 2 && (l = as(e), l !== 0 && (r = l, t = Os(e, l))), t === 1)) throw n = yo, zn(e, 0), Xt(e, r), Ve(e, me()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(T(345));
                    case 2:
                        En(e, Fe, zt);
                        break;
                    case 3:
                        if (Xt(e, r), (r & 130023424) === r && (t = Ra + 500 - me(), 10 < t)) {
                            if (vl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                be(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = gs(En.bind(null, e, Fe, zt), t);
                            break;
                        }
                        En(e, Fe, zt);
                        break;
                    case 4:
                        if (Xt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - pt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kx(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = gs(En.bind(null, e, Fe, zt), r);
                            break;
                        }
                        En(e, Fe, zt);
                        break;
                    case 5:
                        En(e, Fe, zt);
                        break;
                    default:
                        throw Error(T(329));
                }
            }
        }
        return Ve(e, me()), e.callbackNode === n ? Ep.bind(null, e) : null;
    }
    function Os(e, t) {
        var n = Jr;
        return e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256), e = Dl(e, t), e !== 2 && (t = Fe, Fe = n, t !== null && Ds(t)), e;
    }
    function Ds(e) {
        Fe === null ? Fe = e : Fe.push.apply(Fe, e);
    }
    function Sx(e) {
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
    function Xt(e, t) {
        for(t &= ~Ia, t &= ~Jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - pt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Lc(e) {
        if (Q & 6) throw Error(T(327));
        ur();
        var t = vl(e, 0);
        if (!(t & 1)) return Ve(e, me()), null;
        var n = Dl(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = as(e);
            r !== 0 && (t = r, n = Os(e, r));
        }
        if (n === 1) throw n = yo, zn(e, 0), Xt(e, t), Ve(e, me()), n;
        if (n === 6) throw Error(T(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, En(e, Fe, zt), Ve(e, me()), null;
    }
    function za(e, t) {
        var n = Q;
        Q |= 1;
        try {
            return e(t);
        } finally{
            Q = n, Q === 0 && (gr = me() + 500, Ql && pn());
        }
    }
    function Dn(e) {
        Jt !== null && Jt.tag === 0 && !(Q & 6) && ur();
        var t = Q;
        Q |= 1;
        var n = rt.transition, r = Y;
        try {
            if (rt.transition = null, Y = 1, e) return e();
        } finally{
            Y = r, rt.transition = n, Q = t, !(Q & 6) && pn();
        }
    }
    function ja() {
        He = nr.current, ne(nr);
    }
    function zn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Jg(n)), xe !== null) for(n = xe.return; n !== null;){
            var r = n;
            switch(da(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && Cl();
                    break;
                case 3:
                    mr(), ne(Be), ne(Pe), wa();
                    break;
                case 5:
                    va(r);
                    break;
                case 4:
                    mr();
                    break;
                case 13:
                    ne(ie);
                    break;
                case 19:
                    ne(ie);
                    break;
                case 10:
                    ha(r.type._context);
                    break;
                case 22:
                case 23:
                    ja();
            }
            n = n.return;
        }
        if (Ce = e, xe = e = an(e.current, null), Te = He = t, ke = 0, yo = null, Ia = Jl = On = 0, Fe = Jr = null, In !== null) {
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
    function Np(e, t) {
        do {
            var n = xe;
            try {
                if (ma(), il.current = Ml, Pl) {
                    for(var r = se.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Pl = !1;
                }
                if (Ln = 0, _e = we = se = null, Xr = !1, ho = 0, Ta.current = null, n === null || n.return === null) {
                    ke = 1, yo = t, xe = null;
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
                        var w = Sc(i);
                        if (w !== null) {
                            w.flags &= -257, _c(w, i, s, l, t), w.mode & 1 && kc(l, u, t), t = w, a = u;
                            var x = t.updateQueue;
                            if (x === null) {
                                var p = new Set;
                                p.add(a), t.updateQueue = p;
                            } else x.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                kc(l, u, t), Pa();
                                break e;
                            }
                            a = Error(T(426));
                        }
                    } else if (le && s.mode & 1) {
                        var y = Sc(i);
                        if (y !== null) {
                            !(y.flags & 65536) && (y.flags |= 256), _c(y, i, s, l, t), fa(hr(a, s));
                            break e;
                        }
                    }
                    l = a = hr(a, s), ke !== 4 && (ke = 2), Jr === null ? Jr = [
                        l
                    ] : Jr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var h = up(l, a, t);
                                hc(l, h);
                                break e;
                            case 1:
                                s = a;
                                var m = l.type, v = l.stateNode;
                                if (!(l.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (ln === null || !ln.has(v)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = cp(l, s, t);
                                    hc(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                Rp(n);
            } catch (C) {
                t = C, xe === n && n !== null && (xe = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function Tp() {
        var e = bl.current;
        return bl.current = Ml, e === null ? Ml : e;
    }
    function Pa() {
        (ke === 0 || ke === 3 || ke === 2) && (ke = 4), Ce === null || !(On & 268435455) && !(Jl & 268435455) || Xt(Ce, Te);
    }
    function Dl(e, t) {
        var n = Q;
        Q |= 2;
        var r = Tp();
        (Ce !== e || Te !== t) && (zt = null, zn(e, t));
        do try {
            _x();
            break;
        } catch (o) {
            Np(e, o);
        }
        while (!0);
        if (ma(), Q = n, bl.current = r, xe !== null) throw Error(T(261));
        return Ce = null, Te = 0, ke;
    }
    function _x() {
        for(; xe !== null;)Ip(xe);
    }
    function Cx() {
        for(; xe !== null && !Yh();)Ip(xe);
    }
    function Ip(e) {
        var t = jp(e.alternate, e, He);
        e.memoizedProps = e.pendingProps, t === null ? Rp(e) : xe = t, Ta.current = null;
    }
    function Rp(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = xx(n, t), n !== null) {
                    n.flags &= 32767, xe = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    ke = 6, xe = null;
                    return;
                }
            } else if (n = gx(n, t, He), n !== null) {
                xe = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                xe = t;
                return;
            }
            xe = t = e;
        }while (t !== null);
        ke === 0 && (ke = 5);
    }
    function En(e, t, n) {
        var r = Y, o = rt.transition;
        try {
            rt.transition = null, Y = 1, Ex(e, t, n, r);
        } finally{
            rt.transition = o, Y = r;
        }
        return null;
    }
    function Ex(e, t, n, r) {
        do ur();
        while (Jt !== null);
        if (Q & 6) throw Error(T(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (lg(e, l), e === Ce && (xe = Ce = null, Te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Yo || (Yo = !0, Pp(yl, function() {
            return ur(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = rt.transition, rt.transition = null;
            var i = Y;
            Y = 1;
            var s = Q;
            Q |= 4, Ta.current = null, vx(e, n), _p(n, e), Gg(ms), wl = !!ps, ms = ps = null, e.current = n, wx(n), Xh(), Q = s, Y = i, rt.transition = l;
        } else e.current = n;
        if (Yo && (Yo = !1, Jt = e, Ol = o), l = e.pendingLanes, l === 0 && (ln = null), qh(n.stateNode), Ve(e, me()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Ll) throw Ll = !1, e = bs, bs = null, e;
        return Ol & 1 && e.tag !== 0 && ur(), l = e.pendingLanes, l & 1 ? e === Ls ? qr++ : (qr = 0, Ls = e) : qr = 0, pn(), null;
    }
    function ur() {
        if (Jt !== null) {
            var e = uf(Ol), t = rt.transition, n = Y;
            try {
                if (rt.transition = null, Y = 16 > e ? 16 : e, Jt === null) var r = !1;
                else {
                    if (e = Jt, Jt = null, Ol = 0, Q & 6) throw Error(T(331));
                    var o = Q;
                    for(Q |= 4, b = e.current; b !== null;){
                        var l = b, i = l.child;
                        if (b.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var a = 0; a < s.length; a++){
                                    var u = s[a];
                                    for(b = u; b !== null;){
                                        var c = b;
                                        switch(c.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                Zr(8, c, l);
                                        }
                                        var d = c.child;
                                        if (d !== null) d.return = c, b = d;
                                        else for(; b !== null;){
                                            c = b;
                                            var f = c.sibling, w = c.return;
                                            if (wp(c), c === u) {
                                                b = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                f.return = w, b = f;
                                                break;
                                            }
                                            b = w;
                                        }
                                    }
                                }
                                var x = l.alternate;
                                if (x !== null) {
                                    var p = x.child;
                                    if (p !== null) {
                                        x.child = null;
                                        do {
                                            var y = p.sibling;
                                            p.sibling = null, p = y;
                                        }while (p !== null);
                                    }
                                }
                                b = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, b = i;
                        else e: for(; b !== null;){
                            if (l = b, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    Zr(9, l, l.return);
                            }
                            var h = l.sibling;
                            if (h !== null) {
                                h.return = l.return, b = h;
                                break e;
                            }
                            b = l.return;
                        }
                    }
                    var m = e.current;
                    for(b = m; b !== null;){
                        i = b;
                        var v = i.child;
                        if (i.subtreeFlags & 2064 && v !== null) v.return = i, b = v;
                        else e: for(i = m; b !== null;){
                            if (s = b, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Zl(9, s);
                                }
                            } catch (C) {
                                ce(s, s.return, C);
                            }
                            if (s === i) {
                                b = null;
                                break e;
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return, b = S;
                                break e;
                            }
                            b = s.return;
                        }
                    }
                    if (Q = o, pn(), St && typeof St.onPostCommitFiberRoot == "function") try {
                        St.onPostCommitFiberRoot(Wl, e);
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
    function Oc(e, t, n) {
        t = hr(n, t), t = up(e, t, 1), e = on(e, t, 1), t = be(), e !== null && (So(e, 1, t), Ve(e, t));
    }
    function ce(e, t, n) {
        if (e.tag === 3) Oc(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Oc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ln === null || !ln.has(r))) {
                    e = hr(n, e), e = cp(t, e, 1), t = on(t, e, 1), e = be(), t !== null && (So(t, 1, e), Ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Nx(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, Ce === e && (Te & n) === n && (ke === 4 || ke === 3 && (Te & 130023424) === Te && 500 > me() - Ra ? zn(e, 0) : Ia |= n), Ve(e, t);
    }
    function zp(e, t) {
        t === 0 && (e.mode & 1 ? (t = Fo, Fo <<= 1, !(Fo & 130023424) && (Fo = 4194304)) : t = 1);
        var n = be();
        e = At(e, t), e !== null && (So(e, t, n), Ve(e, n));
    }
    function Tx(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), zp(e, n);
    }
    function Ix(e, t) {
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
                throw Error(T(314));
        }
        r !== null && r.delete(t), zp(e, n);
    }
    var jp;
    jp = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) Ue = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ue = !1, hx(e, t, n);
            Ue = !!(e.flags & 131072);
        }
        else Ue = !1, le && t.flags & 1048576 && Lf(t, Tl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                al(e, t), e = t.pendingProps;
                var o = dr(t, Pe.current);
                ar(t, n), o = Sa(null, t, r, e, o, n);
                var l = _a();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (l = !0, El(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, xa(t), o.updater = Xl, t.stateNode = o, o._reactInternals = t, _s(t, r, e, n), t = Ns(null, t, r, !0, l, n)) : (t.tag = 0, le && l && ca(t), Me(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(al(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = zx(r), e = ut(r, e), o){
                        case 0:
                            t = Es(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Nc(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Cc(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ec(null, t, r, ut(r.type, e), n);
                            break e;
                    }
                    throw Error(T(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Es(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Nc(e, t, r, o, n);
            case 3:
                e: {
                    if (mp(t), e === null) throw Error(T(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Uf(e, t), zl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = hr(Error(T(423)), t), t = Tc(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = hr(Error(T(424)), t), t = Tc(e, t, r, n, o);
                        break e;
                    } else for(Ke = rn(t.stateNode.containerInfo.firstChild), Qe = t, le = !0, dt = null, n = Ff(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (fr(), r === o) {
                            t = Ft(e, t, n);
                            break e;
                        }
                        Me(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Bf(t), e === null && ws(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, hs(r, o) ? i = null : l !== null && hs(r, l) && (t.flags |= 32), pp(e, t), Me(e, t, i, n), t.child;
            case 6:
                return e === null && ws(t), null;
            case 13:
                return hp(e, t, n);
            case 4:
                return ya(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pr(t, null, r, n) : Me(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Cc(e, t, r, o, n);
            case 7:
                return Me(e, t, t.pendingProps, n), t.child;
            case 8:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Me(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, ee(Il, r._currentValue), r._currentValue = i, l !== null) if (ht(l.value, i)) {
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
                                        a = Lt(-1, n & -n), a.tag = 2;
                                        var u = l.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a;
                                        }
                                    }
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), ks(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(T(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ks(i, n, t), i = l.sibling;
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
                return o = t.type, r = t.pendingProps.children, ar(t, n), o = ot(o), r = r(o), t.flags |= 1, Me(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), Ec(e, t, r, o, n);
            case 15:
                return dp(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), al(e, t), t.tag = 1, We(r) ? (e = !0, El(t)) : e = !1, ar(t, n), ap(t, r, o), _s(t, r, o, n), Ns(null, t, r, !0, e, n);
            case 19:
                return gp(e, t, n);
            case 22:
                return fp(e, t, n);
        }
        throw Error(T(156, t.tag));
    };
    function Pp(e, t) {
        return of(e, t);
    }
    function Rx(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function nt(e, t, n, r) {
        return new Rx(e, t, n, r);
    }
    function Ma(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function zx(e) {
        if (typeof e == "function") return Ma(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Js) return 11;
            if (e === qs) return 14;
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
    function dl(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") Ma(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Hn:
                return jn(n.children, o, l, t);
            case Zs:
                i = 8, o |= 8;
                break;
            case Ki:
                return e = nt(12, n, t, o | 2), e.elementType = Ki, e.lanes = l, e;
            case Qi:
                return e = nt(13, n, t, o), e.elementType = Qi, e.lanes = l, e;
            case Yi:
                return e = nt(19, n, t, o), e.elementType = Yi, e.lanes = l, e;
            case Ud:
                return ql(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Fd:
                        i = 10;
                        break e;
                    case $d:
                        i = 9;
                        break e;
                    case Js:
                        i = 11;
                        break e;
                    case qs:
                        i = 14;
                        break e;
                    case Kt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(T(130, e == null ? e : typeof e, ""));
        }
        return t = nt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function jn(e, t, n, r) {
        return e = nt(7, e, r, t), e.lanes = n, e;
    }
    function ql(e, t, n, r) {
        return e = nt(22, e, r, t), e.elementType = Ud, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function $i(e, t, n) {
        return e = nt(6, e, null, t), e.lanes = n, e;
    }
    function Ui(e, t, n) {
        return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function jx(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ki(0), this.expirationTimes = ki(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ki(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function ba(e, t, n, r, o, l, i, s, a) {
        return e = new jx(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = nt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, xa(l), e;
    }
    function Px(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Gn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Mp(e) {
        if (!e) return cn;
        e = e._reactInternals;
        e: {
            if (Fn(e) !== e || e.tag !== 1) throw Error(T(170));
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
            throw Error(T(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (We(n)) return Mf(e, n, t);
        }
        return t;
    }
    function bp(e, t, n, r, o, l, i, s, a) {
        return e = ba(n, r, !0, e, o, l, i, s, a), e.context = Mp(null), n = e.current, r = be(), o = sn(n), l = Lt(r, o), l.callback = t ?? null, on(n, l, o), e.current.lanes = o, So(e, o, r), Ve(e, r), e;
    }
    function ei(e, t, n, r) {
        var o = t.current, l = be(), i = sn(o);
        return n = Mp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = on(o, t, i), e !== null && (mt(e, o, i, l), ll(e, o, i)), i;
    }
    function Al(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Dc(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function La(e, t) {
        Dc(e, t), (e = e.alternate) && Dc(e, t);
    }
    function Mx() {
        return null;
    }
    var Lp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Oa(e) {
        this._internalRoot = e;
    }
    ti.prototype.render = Oa.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(T(409));
        ei(e, t, null, null);
    };
    ti.prototype.unmount = Oa.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Dn(function() {
                ei(null, e, null, null);
            }), t[Dt] = null;
        }
    };
    function ti(e) {
        this._internalRoot = e;
    }
    ti.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ff();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
            Yt.splice(n, 0, e), n === 0 && mf(e);
        }
    };
    function Da(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ni(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Ac() {}
    function bx(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = Al(i);
                    l.call(u);
                };
            }
            var i = bp(t, r, e, 0, null, !1, !1, "", Ac);
            return e._reactRootContainer = i, e[Dt] = i.current, uo(e.nodeType === 8 ? e.parentNode : e), Dn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Al(a);
                s.call(u);
            };
        }
        var a = ba(e, 0, !1, null, null, !1, !1, "", Ac);
        return e._reactRootContainer = a, e[Dt] = a.current, uo(e.nodeType === 8 ? e.parentNode : e), Dn(function() {
            ei(t, a, n, r);
        }), a;
    }
    function ri(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = Al(i);
                    s.call(a);
                };
            }
            ei(t, i, e, o);
        } else i = bx(n, t, e, o, r);
        return Al(i);
    }
    cf = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Br(t.pendingLanes);
                    n !== 0 && (na(t, n | 1), Ve(t, me()), !(Q & 6) && (gr = me() + 500, pn()));
                }
                break;
            case 13:
                Dn(function() {
                    var r = At(e, 1);
                    if (r !== null) {
                        var o = be();
                        mt(r, e, 1, o);
                    }
                }), La(e, 1);
        }
    };
    ra = function(e) {
        if (e.tag === 13) {
            var t = At(e, 134217728);
            if (t !== null) {
                var n = be();
                mt(t, e, 134217728, n);
            }
            La(e, 134217728);
        }
    };
    df = function(e) {
        if (e.tag === 13) {
            var t = sn(e), n = At(e, t);
            if (n !== null) {
                var r = be();
                mt(n, e, t, r);
            }
            La(e, t);
        }
    };
    ff = function() {
        return Y;
    };
    pf = function(e, t) {
        var n = Y;
        try {
            return Y = e, t();
        } finally{
            Y = n;
        }
    };
    ls = function(e, t, n) {
        switch(t){
            case "input":
                if (Ji(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = Kl(r);
                            if (!o) throw Error(T(90));
                            Wd(r), Ji(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Gd(e, n);
                break;
            case "select":
                t = n.value, t != null && or(e, !!n.multiple, t, !1);
        }
    };
    Jd = za;
    qd = Dn;
    var Lx = {
        usingClientEntryPoint: !1,
        Events: [
            Co,
            Xn,
            Kl,
            Xd,
            Zd,
            za
        ]
    }, Lr = {
        findFiberByHostInstance: Tn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Ox = {
        bundleType: Lr.bundleType,
        version: Lr.version,
        rendererPackageName: Lr.rendererPackageName,
        rendererConfig: Lr.rendererConfig,
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
            return e = nf(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Lr.findFiberByHostInstance || Mx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Xo.isDisabled && Xo.supportsFiber) try {
            Wl = Xo.inject(Ox), St = Xo;
        } catch  {}
    }
    Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lx;
    Xe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Da(t)) throw Error(T(200));
        return Px(e, t, null, n);
    };
    Xe.createRoot = function(e, t) {
        if (!Da(e)) throw Error(T(299));
        var n = !1, r = "", o = Lp;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ba(e, 1, !1, null, null, n, !1, r, o), e[Dt] = t.current, uo(e.nodeType === 8 ? e.parentNode : e), new Oa(t);
    };
    Xe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
        return e = nf(t), e = e === null ? null : e.stateNode, e;
    };
    Xe.flushSync = function(e) {
        return Dn(e);
    };
    Xe.hydrate = function(e, t, n) {
        if (!ni(t)) throw Error(T(200));
        return ri(null, e, t, !0, n);
    };
    Xe.hydrateRoot = function(e, t, n) {
        if (!Da(e)) throw Error(T(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Lp;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = bp(t, null, e, 1, n ?? null, o, !1, l, i), e[Dt] = t.current, uo(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new ti(t);
    };
    Xe.render = function(e, t, n) {
        if (!ni(t)) throw Error(T(200));
        return ri(null, e, t, !1, n);
    };
    Xe.unmountComponentAtNode = function(e) {
        if (!ni(e)) throw Error(T(40));
        return e._reactRootContainer ? (Dn(function() {
            ri(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Dt] = null;
            });
        }), !0) : !1;
    };
    Xe.unstable_batchedUpdates = za;
    Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ni(n)) throw Error(T(200));
        if (e == null || e._reactInternals === void 0) throw Error(T(38));
        return ri(e, t, n, !1, r);
    };
    Xe.version = "18.3.1-next-f1338f8080-20240426";
    function Op() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Op);
        } catch (e) {
            console.error(e);
        }
    }
    Op(), Ld.exports = Xe;
    var Dx = Ld.exports, Fc = Dx;
    Gi.createRoot = Fc.createRoot, Gi.hydrateRoot = Fc.hydrateRoot;
    const Ax = "modulepreload", Fx = function(e) {
        return "/grid-draw/" + e;
    }, $c = {}, Aa = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = Fx(a), a in $c) return;
                $c[a] = !0;
                const u = a.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${c}`)) return;
                const d = document.createElement("link");
                if (d.rel = u ? "stylesheet" : Ax, u || (d.as = "script"), d.crossOrigin = "", d.href = a, s && d.setAttribute("nonce", s), document.head.appendChild(d), u) return new Promise((f, w)=>{
                    d.addEventListener("load", f), d.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${a}`)));
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
    }, Uc = (e)=>{
        let t;
        const n = new Set, r = (u, c)=>{
            const d = typeof u == "function" ? u(t) : u;
            if (!Object.is(d, t)) {
                const f = t;
                t = c ?? (typeof d != "object" || d === null) ? d : Object.assign({}, t, d), n.forEach((w)=>w(t, f));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, $x = (e)=>e ? Uc(e) : Uc, Ux = (e)=>e;
    function Bx(e, t = Ux) {
        const n = oe.useSyncExternalStore(e.subscribe, oe.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), oe.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return oe.useDebugValue(n), n;
    }
    const Bc = (e)=>{
        const t = $x(e), n = (r)=>Bx(t, r);
        return Object.assign(n, t), n;
    }, Dp = (e)=>e ? Bc(e) : Bc;
    function Wx(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    const Vx = 1.75;
    function As(e) {
        return {
            r: e.minRow - Vx,
            c: (e.minCol + e.maxCol) / 2
        };
    }
    function Fs(e) {
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
    function Wc(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, c = (a - e) * (a - e) + (u - t) * (u - t);
            c <= i && (l = s, i = c);
        }
        return l;
    }
    const Vc = new Map;
    function Gx() {
        Aa(()=>Promise.resolve().then(()=>cy), void 0).then((e)=>e.useGridStore.getState().grid?.render());
    }
    function Fa(e) {
        const t = Vc.get(e);
        if (t) return t;
        const n = new Image;
        return n.crossOrigin = "anonymous", n.decoding = "async", n.onload = ()=>{
            Gx();
        }, n.onerror = ()=>{}, n.src = e, Vc.set(e, n), n;
    }
    function Hx(e) {
        return new Promise((t, n)=>{
            const r = Fa(e);
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
    function Kx(e, t) {
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
    function fl(e, t) {
        switch(Kx(e, t), t.kind){
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
                e.insert_image(t.idx, t.image.r1, t.image.c1, t.image.r2, t.image.c2, t.image.url, Fa(t.image.url));
                break;
            case "deleteImage":
                e.delete_image(t.idx);
                break;
            case "batch":
                e.set_render_paused?.(!0);
                try {
                    for (const n of t.edits)fl(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function Ap(e) {
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
                    ].reverse().map(Ap)
                };
        }
    }
    function Fp(e, t) {
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
                        const o = Fp(e.edits[r], t.edits[r]);
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
    const Qx = 100, Yx = 600;
    class Xx {
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
            this.undoStack.push(t), this.undoStack.length > Qx && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (fl(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Yx) {
                const i = this.undoStack[this.undoStack.length - 1], s = Fp(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (fl(t, Ap(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (fl(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
    const st = new Xx;
    function Gc(e, t) {
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
    function Hc(e, t) {
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
    function Kc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Qc(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Yc(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            boxW: n[3],
            boxH: n[4]
        };
    }
    function Xc(e, t) {
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
    function Zc(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Jc(e, t) {
        const n = e.get_image(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            url: e.get_image_url(t)
        };
    }
    const $p = [
        1,
        1.5,
        2,
        3,
        5
    ], Up = [
        1,
        1.5,
        2,
        3,
        5
    ], xr = 8, Vr = [
        1,
        2,
        4,
        8
    ], pl = (e)=>Math.round(e * 10), Zx = (e)=>e / 10;
    function Or(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Bp(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" || e.type === "image" && t.type === "image" ? e.index === t.index : !1;
    }
    function Wp(e, t) {
        return t.some((n)=>Bp(n, e));
    }
    function Jx(e, t) {
        return Wp(e, t) ? t : [
            ...t,
            e
        ];
    }
    function qx(e, t) {
        return t.filter((n)=>!Bp(n, e));
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
    function ey(e, t) {
        const n = $e(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function eo(e, t, n = {}) {
        const r = $e(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, c = [], d = [], f = [], w = [], x = [];
        for (const p of t)if (p.type === "cell") c.push([
            p.row - a,
            p.col - u,
            e.get_cell_color(p.row, p.col)
        ]);
        else if (p.type === "line") {
            const y = e.get_line(p.index);
            d.push([
                y[0] - a,
                y[1] - u,
                y[2] - a,
                y[3] - u,
                y[4],
                y[5]
            ]);
        } else if (p.type === "rect") {
            const y = e.get_rect(p.index);
            f.push([
                y[0] - a,
                y[1] - u,
                y[2] - a,
                y[3] - u,
                y[4],
                y[5]
            ]);
        } else if (p.type === "text") {
            const y = e.get_text(p.index);
            w.push([
                y[0] - a,
                y[1] - u,
                y[2],
                e.get_text_size(p.index),
                y[3],
                y[4],
                y[5],
                y[6],
                e.get_text_string(p.index)
            ]);
        } else if (p.type === "image") {
            const y = e.get_image(p.index);
            x.push([
                y[0] - a,
                y[1] - u,
                y[2] - a,
                y[3] - u,
                e.get_image_url(p.index)
            ]);
        }
        return c.sort((p, y)=>p[0] - y[0] || p[1] - y[1]), {
            w: s - u + 1,
            h: i - a + 1,
            cells: c,
            lines: d,
            rects: f,
            texts: w,
            images: x,
            sub: xr
        };
    }
    function qc(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function Vt(e, t, n, r, o) {
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
    function ed(e) {
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
    const de = Dp((e, t)=>({
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
                if (!r || (r.set_draw_line_width(pl(n)), o.length === 0)) return;
                const l = pl(n), i = [];
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
                const r = ed(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = Jx(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = qx(n, r);
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
                for(let y = i; y <= s; y++)for(let h = a; h <= u; h++)r.get_cell(y, h) && c.push({
                    type: "cell",
                    row: y,
                    col: h
                });
                const d = r.get_line_count();
                for(let y = 0; y < d; y++)r.line_intersects_box(y, i, a, s, u) && c.push({
                    type: "line",
                    index: y
                });
                const f = r.get_rect_count();
                for(let y = 0; y < f; y++)r.rect_intersects_box(y, i, a, s, u) && c.push({
                    type: "rect",
                    index: y
                });
                const w = r.get_text_count();
                for(let y = 0; y < w; y++)r.text_intersects_box(y, i, a, s, u) && c.push({
                    type: "text",
                    index: y
                });
                const x = r.get_image_count();
                for(let y = 0; y < x; y++)r.image_intersects_box(y, i, a, s, u) && c.push({
                    type: "image",
                    index: y
                });
                let p = [
                    ...l
                ];
                for (const y of c)Wp(y, p) || p.push(y);
                e({
                    selectedItems: p,
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
                        const z = r.get_cell_color(C.row, C.col), j = C.row + a, E = C.col + u;
                        d.push({
                            kind: "setCellState",
                            row: C.row,
                            col: C.col,
                            from: {
                                filled: !0,
                                color: z
                            },
                            to: {
                                filled: !1,
                                color: z
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
                                color: z
                            }
                        }), c.push({
                            type: "cell",
                            row: j,
                            col: E
                        });
                    }
                    const w = [], x = l.filter((C)=>C.type === "line");
                    for (const C of x)w.push({
                        kind: "moveLine",
                        idx: C.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "line",
                        index: C.index
                    });
                    const p = [], y = l.filter((C)=>C.type === "rect");
                    for (const C of y)p.push({
                        kind: "moveRect",
                        idx: C.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "rect",
                        index: C.index
                    });
                    const h = [], m = l.filter((C)=>C.type === "text");
                    for (const C of m)h.push({
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
                        ...w,
                        ...p,
                        ...h,
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
                const { grid: r } = t(), o = r ? n.shape === "line" ? Kc(r, n.index) : n.shape === "rect" ? Qc(r, n.index) : n.shape === "image" ? Zc(r, n.index) : Yc(r, n.index) : null;
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
                        to: Kc(r, o.index)
                    }
                ])) : o.shape === "rect" ? (r.resize_rect(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Qc(r, o.index)
                    }
                ])) : o.shape === "image" ? (r.resize_image(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setImageGeom",
                        idx: o.index,
                        from: l,
                        to: Zc(r, o.index)
                    }
                ])) : (r.resize_text(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setTextFrame",
                        idx: o.index,
                        from: l,
                        to: Yc(r, o.index)
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
                const { cx: s, cy: a, startAngle: u } = i, c = qc(Math.atan2(r - a, n - s) - u);
                if (o.render(), c === 0) {
                    t().renderSelection();
                    return;
                }
                const d = $e(l, o);
                if (!d) return;
                const f = Math.round((d.minRow + d.maxRow) / 2), w = Math.round((d.minCol + d.maxCol) / 2);
                for (const x of l)if (x.type === "cell") {
                    const p = Vt(x.row, x.col, c, f, w);
                    o.preview_cell(p.r, p.c, o.get_cell_color(x.row, x.col));
                } else if (x.type === "line") {
                    const p = o.get_line(x.index);
                    if (p.length >= 6) {
                        const y = Vt(p[0], p[1], c, f, w), h = Vt(p[2], p[3], c, f, w);
                        o.preview_line(y.r, y.c, h.r, h.c, p[4], p[5]);
                    }
                } else if (x.type === "rect") {
                    const p = o.get_rect(x.index);
                    if (p.length >= 6) {
                        const y = Vt(p[0], p[1], c, f, w), h = Vt(p[2], p[3], c, f, w);
                        o.preview_rect(y.r, y.c, h.r, h.c, p[4], p[5]);
                    }
                } else if (x.type === "text") {
                    const p = o.get_text(x.index);
                    if (p.length >= 7) {
                        const y = Vt(p[0], p[1], c, f, w);
                        o.preview_text(y.r, y.c, p[2], o.get_text_size(x.index), p[3], p[4], p[5], p[6], o.get_text_string(x.index));
                    }
                } else if (x.type === "image") {
                    const p = o.get_image(x.index);
                    if (p.length >= 4) {
                        const y = Vt(p[0], p[1], c, f, w);
                        o.preview_image(y.r, y.c, y.r + (p[2] - p[0]), y.c + (p[3] - p[1]), Fa(o.get_image_url(x.index)));
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
                const { cx: s, cy: a, startAngle: u } = i, c = qc(Math.atan2(r - a, n - s) - u), d = $e(l, o);
                if (c === 0 || !d) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const f = Math.round((d.minRow + d.maxRow) / 2), w = Math.round((d.minCol + d.maxCol) / 2), x = (v, S)=>Vt(v, S, c, f, w), p = [], y = [], h = [], m = [];
                for (const v of l)if (v.type === "cell") {
                    if (!o.get_cell(v.row, v.col)) continue;
                    const S = o.get_cell_color(v.row, v.col), C = x(v.row, v.col);
                    p.push({
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
                    }), y.push({
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
                    }), m.push({
                        type: "cell",
                        row: C.r,
                        col: C.c
                    });
                } else if (v.type === "line") {
                    const S = o.get_line(v.index);
                    if (S.length < 5) continue;
                    const C = x(S[0], S[1]), z = x(S[2], S[3]);
                    h.push({
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
                            r2: z.r,
                            c2: z.c
                        }
                    }), m.push({
                        type: "line",
                        index: v.index
                    });
                } else if (v.type === "rect") {
                    const S = o.get_rect(v.index);
                    if (S.length < 6) continue;
                    const C = x(S[0], S[1]), z = x(S[2], S[3]);
                    h.push({
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
                            r2: z.r,
                            c2: z.c
                        }
                    }), m.push({
                        type: "rect",
                        index: v.index
                    });
                } else if (v.type === "text") {
                    const S = o.get_text(v.index);
                    if (S.length < 3) continue;
                    const C = x(S[0], S[1]);
                    h.push({
                        kind: "moveText",
                        idx: v.index,
                        dRow: C.r - S[0],
                        dCol: C.c - S[1]
                    }), m.push({
                        type: "text",
                        index: v.index
                    });
                } else if (v.type === "image") {
                    const S = o.get_image(v.index);
                    if (S.length < 4) continue;
                    const C = x(S[0], S[1]);
                    h.push({
                        kind: "moveImage",
                        idx: v.index,
                        dRow: C.r - S[0],
                        dCol: C.c - S[1]
                    }), m.push({
                        type: "image",
                        index: v.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits([
                    ...p,
                    ...y,
                    ...h
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
                const { grid: l, colorIdx: i, subdivision: s } = t();
                if (!l) return;
                const a = xr / s, u = [];
                for(let c = 0; c < a; c++)for(let d = 0; d < a; d++){
                    const f = n + c, w = r + d, x = o && i < 6 ? {
                        filled: !0,
                        color: i
                    } : {
                        filled: !1,
                        color: i < 6 ? i : l.get_cell_color(f, w)
                    }, p = {
                        filled: l.get_cell(f, w),
                        color: l.get_cell_color(f, w)
                    };
                    p.filled === x.filled && (!x.filled || p.color === x.color) || u.push({
                        kind: "setCellState",
                        row: f,
                        col: w,
                        from: p,
                        to: x
                    });
                }
                u.length > 0 && t().commitEdits(u);
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
                            width: pl(a)
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
                const o = ey(r, n);
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
                for (const w of r.cells){
                    const x = s.row + w.relRow, p = s.col + w.relCol;
                    a.push({
                        kind: "setCellState",
                        row: x,
                        col: p,
                        from: {
                            filled: n.get_cell(x, p),
                            color: n.get_cell_color(x, p)
                        },
                        to: {
                            filled: !0,
                            color: w.color
                        }
                    }), l.push({
                        type: "cell",
                        row: x,
                        col: p
                    });
                }
                for (const w of r.lines){
                    const x = s.row + w.relR1, p = s.col + w.relC1, y = s.row + w.relR2, h = s.col + w.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: x,
                            c1: p,
                            r2: y,
                            c2: h,
                            color: w.color,
                            width: w.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const w of r.rects){
                    const x = s.row + w.relR1, p = s.col + w.relC1, y = s.row + w.relR2, h = s.col + w.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: x,
                            c1: p,
                            r2: y,
                            c2: h,
                            fill: w.color,
                            outline: w.outline
                        }
                    }), l.push({
                        type: "rect",
                        index: c
                    }), c++;
                }
                for (const w of r.texts ?? []){
                    const x = s.row + w.relR, p = s.col + w.relC;
                    a.push({
                        kind: "addText",
                        idx: d,
                        text: {
                            r: x,
                            c: p,
                            color: w.color,
                            size: w.size,
                            boxW: w.boxW,
                            boxH: w.boxH,
                            halign: w.halign,
                            valign: w.valign,
                            text: w.text
                        }
                    }), l.push({
                        type: "text",
                        index: d
                    }), d++;
                }
                for (const w of r.images ?? [])a.push({
                    kind: "addImage",
                    idx: f,
                    image: {
                        r1: s.row + w.relR1,
                        c1: s.col + w.relC1,
                        r2: s.row + w.relR2,
                        c2: s.col + w.relC2,
                        url: w.url
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
                    line: Gc(n, c)
                });
                for (const c of i)u.push({
                    kind: "deleteRect",
                    idx: c,
                    rect: Hc(n, c)
                });
                for (const c of s)u.push({
                    kind: "deleteText",
                    idx: c,
                    text: Xc(n, c)
                });
                for (const c of a)u.push({
                    kind: "deleteImage",
                    idx: c,
                    image: Jc(n, c)
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
                const o = eo(n, r);
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
                const i = eo(n, r);
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
                const f = xr / (n.sub ?? 1);
                for (const [w, x, p] of n.cells ?? []){
                    const y = r + w * f, h = o + x * f;
                    i.push({
                        kind: "setCellState",
                        row: y,
                        col: h,
                        from: {
                            filled: l.get_cell(y, h),
                            color: l.get_cell_color(y, h)
                        },
                        to: {
                            filled: !0,
                            color: p
                        }
                    }), s.push({
                        type: "cell",
                        row: y,
                        col: h
                    });
                }
                for (const [w, x, p, y, h, m] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + w * f,
                        c1: o + x * f,
                        r2: r + p * f,
                        c2: o + y * f,
                        color: h,
                        width: m ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [w, x, p, y, h, m] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + w * f,
                        c1: o + x * f,
                        r2: r + p * f,
                        c2: o + y * f,
                        fill: h,
                        outline: m
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const w of n.texts ?? []){
                    const x = Array.isArray(w) ? w.length >= 9 ? {
                        r: w[0],
                        c: w[1],
                        color: w[2],
                        size: w[3],
                        boxW: w[4],
                        boxH: w[5],
                        halign: w[6],
                        valign: w[7],
                        text: w[8]
                    } : {
                        r: w[0],
                        c: w[1],
                        color: w[2],
                        size: w[3],
                        text: w[4]
                    } : w;
                    if (!x || typeof x.r != "number" || typeof x.c != "number") continue;
                    const p = x;
                    i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + p.r * f,
                            c: o + p.c * f,
                            color: p.color ?? 0,
                            size: p.size ?? 1,
                            boxW: (p.boxW ?? 0) * f,
                            boxH: (p.boxH ?? 0) * f,
                            halign: p.halign ?? 0,
                            valign: p.valign ?? 0,
                            text: String(p.text ?? "")
                        }
                    }), s.push({
                        type: "text",
                        index: c
                    }), c++;
                }
                for (const w of n.images ?? []){
                    if (!Array.isArray(w) || w.length < 5) continue;
                    const [x, p, y, h, m] = w;
                    typeof m == "string" && (i.push({
                        kind: "addImage",
                        idx: d,
                        image: {
                            r1: r + x * f,
                            c1: o + p * f,
                            r2: r + y * f,
                            c2: o + h * f,
                            url: m
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
                return n ? eo(n, ed(n), {
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
                const { grid: n, selectedItems: r } = t(), o = r.filter((p)=>p.type === "cell");
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
                ], i = [], s = o.map((p)=>({
                        row: p.row,
                        col: p.col
                    })), a = Wx(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const p of o)if (n.get_cell(p.row, p.col)) {
                    const y = n.get_cell_color(p.row, p.col), h = l[y] ?? "#000000";
                    i.push({
                        row: p.row - a.minRow,
                        col: p.col - a.minCol,
                        color: h
                    });
                }
                i.sort((p, y)=>p.row - y.row || p.col - y.col);
                const u = a.maxRow - a.minRow + 1, c = a.maxCol - a.minCol + 1, d = [], f = [];
                for (const p of i)p.color === "#000000" && (d.push(p.row), f.push(p.col));
                const w = d.map(()=>"1.0").join(", "), x = `import torch

indices = torch.tensor([[${d.join(", ")}], [${f.join(", ")}]])
values = torch.tensor([${w}])
sparse = torch.sparse_coo_tensor(indices, values, size=(${u}, ${c}))
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
                        const c = u.row, d = u.col, f = u.color;
                        if (typeof c != "number" || typeof d != "number") continue;
                        const w = o.row + c, x = o.col + d, p = l[f] ?? 0;
                        r.set_draw_color(p), r.set_cell(w, x, !0), s.push({
                            type: "cell",
                            row: w,
                            col: x
                        });
                    }
                    else for(let u = 0; u < i.length; u++){
                        const c = i[u];
                        if (Array.isArray(c)) for(let d = 0; d < c.length; d++){
                            const f = o.row + u, w = o.col + d, x = c[d];
                            if (x && typeof x == "object" && x.color) {
                                const p = l[x.color] ?? 0;
                                r.set_draw_color(p), r.set_cell(f, w, !0), s.push({
                                    type: "cell",
                                    row: f,
                                    col: w
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
                    image: Jc(n, i)
                });
                for(let i = n.get_text_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteText",
                    idx: i,
                    text: Xc(n, i)
                });
                for(let i = n.get_rect_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteRect",
                    idx: i,
                    rect: Hc(n, i)
                });
                for(let i = n.get_line_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteLine",
                    idx: i,
                    line: Gc(n, i)
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
                            const l = Fs(n.get_line(o.index));
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
                            const l = As(o);
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
        })), ty = ()=>de((e)=>e.grid), ny = ()=>de((e)=>e.tool), ry = ()=>de((e)=>e.colorIdx), oy = ()=>de((e)=>e.outlineIdx), ly = ()=>de((e)=>e.selectedItems), iy = ()=>de((e)=>e.clipboard), sy = ()=>de((e)=>e.jsonOutput), ay = ()=>de((e)=>e.tensorOutput), uy = ()=>de((e)=>e.selectMode), cy = Object.freeze(Object.defineProperty({
        __proto__: null,
        CELL_UNITS: xr,
        LINE_WIDTHS: Up,
        SUBDIVISIONS: Vr,
        TEXT_SIZES: $p,
        getSelectionBoundsAll: $e,
        serializeSelection: eo,
        tenthsToWidth: Zx,
        useClipboard: iy,
        useColorIdx: ry,
        useGrid: ty,
        useGridStore: de,
        useJsonOutput: sy,
        useOutlineIdx: oy,
        useSelectMode: uy,
        useSelectedItems: ly,
        useTensorOutput: ay,
        useTool: ny,
        widthToTenths: pl
    }, Symbol.toStringTag, {
        value: "Module"
    })), td = 7;
    function dy(e) {
        const t = e.get_schema_version?.();
        (t !== td || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${td}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function fy(e, t, n) {
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
                    const s = await Aa(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    dy(a), de.getState().setGrid(a), o({
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
    const py = {}, Vp = py?.VITE_API_URL ?? "https://api.seanneilan.com", $a = "grid-draw-token", $s = "grid-draw-auth-expired";
    function Gp() {
        return localStorage.getItem($a);
    }
    function Hp() {
        localStorage.removeItem($a);
    }
    async function my(e, t) {
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
        localStorage.setItem($a, r);
    }
    async function Ct(e, t, n) {
        const r = {}, o = Gp();
        o && (r.Authorization = `Bearer ${o}`), n !== void 0 && (r["Content-Type"] = "application/json");
        const l = await fetch(`${Vp}${t}`, {
            method: e,
            headers: r,
            body: n === void 0 ? void 0 : JSON.stringify(n)
        });
        if (l.status === 401) throw Hp(), window.dispatchEvent(new Event($s)), new Error("session expired — please log in again");
        if (!l.ok) {
            const i = await l.json().catch(()=>null);
            throw new Error(i?.error ?? `${e} ${t} failed (${l.status})`);
        }
        if (l.status !== 204) return await l.json();
    }
    function hy() {
        return Ct("GET", "/api/designs");
    }
    function gy(e) {
        return Ct("GET", `/api/designs/${e}`);
    }
    function xy(e) {
        return Ct("GET", `/api/designs?name=${encodeURIComponent(e)}`);
    }
    async function yy(e, t, n) {
        return (await Ct("PUT", "/api/designs", {
            name: e,
            design: t,
            history: n
        })).id;
    }
    function vy(e) {
        return Ct("DELETE", `/api/designs/${e}`);
    }
    function nd() {
        return Ct("GET", "/api/examples");
    }
    async function wy(e, t, n) {
        return (await Ct("POST", "/api/examples", {
            input: e,
            output: t,
            delta: n
        })).id;
    }
    function ky(e, t, n, r) {
        return Ct("PUT", `/api/examples/${e}`, {
            input: t,
            output: n,
            delta: r
        }).then(()=>{});
    }
    function Sy(e) {
        return Ct("DELETE", `/api/examples/${e}`);
    }
    async function _y(e) {
        const t = e.type || "application/octet-stream", { uploadUrl: n, publicUrl: r } = await Ct("POST", "/api/images/presign", {
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
    const vo = 31;
    function Cy(e) {
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
    function Ey(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = Cy(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function rd(e, t) {
        return e >= 0 && e <= vo && t >= 0 && t <= vo;
    }
    const ft = vo + 1, Kp = "indexeddb://grid-draw-coord-model";
    let od, yr = null;
    async function Ua() {
        return od ??= Aa(()=>import("./index2.js"), []), od;
    }
    function Ny(e) {
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
    function Qp(e, t) {
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
    async function Ty() {
        const e = await Ua();
        try {
            return yr = await e.loadLayersModel(Kp), !0;
        } catch  {
            return yr = null, !1;
        }
    }
    async function Iy(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await Ua(), { pairs: s, skippedExamples: a } = Ey(e), u = [];
        let c = 0;
        for (const y of s)rd(y[0], y[1]) && rd(y[2], y[3]) ? u.push(y) : c++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const d = Qp(i, u.map((y)=>[
                y[0],
                y[1]
            ])), f = ld(i, u.map((y)=>y[2])), w = ld(i, u.map((y)=>y[3])), x = Ny(i);
        x.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let p = NaN;
        return await x.fit(d, [
            f,
            w
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (y, h)=>{
                    p = h?.loss ?? p, l?.(y + 1, n, p), await i.nextFrame();
                }
            }
        }), d.dispose(), f.dispose(), w.dispose(), yr?.dispose(), yr = x, await x.save(Kp), {
            pairs: u.length,
            droppedPoints: c,
            skippedExamples: a,
            finalLoss: p
        };
    }
    async function Ry(e) {
        if (!yr) throw new Error("No model yet — train one first.");
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
                Math.max(0, Math.min(vo, a)),
                Math.max(0, Math.min(vo, u))
            ]), o = t.tidy(()=>{
            const a = Qp(t, r), [u, c] = yr.predict(a), d = u.argMax(1).dataSync(), f = c.argMax(1).dataSync();
            return n.map(([, , w], x)=>[
                    d[x],
                    f[x],
                    w
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
    const pe = Dp((e, t)=>({
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
                        designs: await hy(),
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
                const l = await yy(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>xy(n),
            getDrawingById: (n)=>gy(n),
            saveExamplePair: async (n, r, o)=>{
                await wy(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await ky(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await vy(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await Sy(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Ty();
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
                    const r = await Iy(n, {
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
            runPredict: (n)=>Ry(n)
        })), zy = 600, jy = "/grid-draw/";
    let id, Yp = !1;
    function Bi(e) {
        Yp = e;
    }
    function Py() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function My(e) {
        return e.cells.length + e.lines.length + e.rects.length + e.texts.length + (e.images?.length ?? 0) > 0;
    }
    function by() {
        clearTimeout(id), id = setTimeout(Ly, zy);
    }
    async function Ly() {
        const e = de.getState();
        if (!e.grid) return;
        const t = e.serializeWholeGrid();
        if (!t) return;
        let n = e.currentName;
        if (!n) {
            if (Yp || !My(t)) return;
            n = Py(), e.setCurrentName(n), window.history.replaceState({}, "", `${jy}design/${n}/`);
        }
        e.setSaveState("saving");
        try {
            await pe.getState().saveDrawing(n, t, e.exportHistory()), de.getState().setSaveState("saved");
        } catch (r) {
            de.getState().setSaveState("error", r instanceof Error ? r.message : String(r));
        }
    }
    de.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && by();
    });
    function Oy(e, t, n, r) {
        const i = (x)=>e[x * 4] > 227 && e[x * 4 + 1] > 227 && e[x * 4 + 2] > 227, s = new Uint8Array(t * n), a = new Int32Array(t * n);
        let u = 0, c = 0;
        const d = (x)=>{
            !s[x] && i(x) && (s[x] = 1, a[c++] = x);
        };
        for(let x = 0; x < t; x++)d(x), d((n - 1) * t + x);
        for(let x = 0; x < n; x++)d(x * t), d(x * t + (t - 1));
        for(; u < c;){
            const x = a[u++], p = x % t;
            p > 0 && d(x - 1), p < t - 1 && d(x + 1), x >= t && d(x - t), x < t * (n - 1) && d(x + t);
        }
        let f = 0;
        for(let x = 0; x < t * n; x++)s[x] && (e[x * 4 + 3] = 0, f++);
        if (f === 0 || r?.feather === !1) return f;
        const w = new Uint8ClampedArray(t * n);
        for(let x = 0; x < n; x++)for(let p = 0; p < t; p++){
            let y = 0, h = 0;
            for(let m = -1; m <= 1; m++)for(let v = -1; v <= 1; v++){
                const S = p + v, C = x + m;
                S >= 0 && S < t && C >= 0 && C < n && (y += e[(C * t + S) * 4 + 3], h++);
            }
            w[x * t + p] = y / h;
        }
        for(let x = 0; x < t * n; x++)e[x * 4 + 3] = w[x];
        return f;
    }
    async function Dy(e) {
        const t = await createImageBitmap(e);
        try {
            const n = document.createElement("canvas");
            n.width = t.width, n.height = t.height;
            const r = n.getContext("2d");
            if (!r) throw new Error("canvas 2d context unavailable");
            r.drawImage(t, 0, 0);
            const o = r.getImageData(0, 0, t.width, t.height);
            if (Oy(o.data, t.width, t.height) === 0) return e;
            r.putImageData(o, 0, 0);
            const i = await new Promise((s)=>n.toBlob(s, "image/png"));
            if (!i) throw new Error("PNG encode failed");
            return i;
        } finally{
            t.close();
        }
    }
    const Xp = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const Ay = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const Fy = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const sd = (e)=>{
        const t = Fy(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var $y = {
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
    const Uy = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const By = N.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>N.createElement("svg", {
            ref: a,
            ...$y,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Xp("lucide", o),
            ...!l && !Uy(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, c])=>N.createElement(u, c)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const Zp = (e, t)=>{
        const n = N.forwardRef(({ className: r, ...o }, l)=>N.createElement(By, {
                ref: l,
                iconNode: t,
                className: Xp(`lucide-${Ay(sd(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = sd(e), n;
    };
    const Wy = [
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
    ], Vy = Zp("redo-2", Wy);
    const Gy = [
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
    ], Hy = Zp("undo-2", Gy);
    function Jp(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Jp(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function qp() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Jp(e)) && (r && (r += " "), r += t);
        return r;
    }
    const ad = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ud = qp, em = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return ud(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const c = n?.[u], d = l?.[u];
                if (c === null) return null;
                const f = ad(c) || ad(d);
                return o[u][f];
            }), s = n && Object.entries(n).reduce((u, c)=>{
                let [d, f] = c;
                return f === void 0 || (u[d] = f), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c)=>{
                let { class: d, className: f, ...w } = c;
                return Object.entries(w).every((x)=>{
                    let [p, y] = x;
                    return Array.isArray(y) ? y.includes({
                        ...l,
                        ...s
                    }[p]) : {
                        ...l,
                        ...s
                    }[p] === y;
                }) ? [
                    ...u,
                    d,
                    f
                ] : u;
            }, []);
            return ud(e, i, a, n?.class, n?.className);
        };
    function cd(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function tm(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = cd(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : cd(e[o], null);
                }
            };
        };
    }
    function Us(...e) {
        return N.useCallback(tm(...e), e);
    }
    function Fl(e) {
        const t = Qy(e), n = N.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = N.Children.toArray(l), a = s.find(Xy);
            if (a) {
                const u = a.props.children, c = s.map((d)=>d === a ? N.Children.count(u) > 1 ? N.Children.only(null) : N.isValidElement(u) ? u.props.children : null : d);
                return g.jsx(t, {
                    ...i,
                    ref: o,
                    children: N.isValidElement(u) ? N.cloneElement(u, void 0, c) : null
                });
            }
            return g.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var Ky = Fl("Slot");
    function Qy(e) {
        const t = N.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (N.isValidElement(o)) {
                const i = Jy(o), s = Zy(l, o.props);
                return o.type !== N.Fragment && (s.ref = r ? tm(r, i) : i), N.cloneElement(o, s);
            }
            return N.Children.count(o) > 1 ? N.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var Yy = Symbol("radix.slottable");
    function Xy(e) {
        return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Yy;
    }
    function Zy(e, t) {
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
    function Jy(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var qy = [
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
    ], wo = qy.reduce((e, t)=>{
        const n = Fl(`Primitive.${t}`), r = N.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, a = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), g.jsx(a, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function Ba(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = N.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (d)=>{
                const { scope: f, children: w, ...x } = d, p = f?.[e]?.[a] || s, y = N.useMemo(()=>x, Object.values(x));
                return g.jsx(p.Provider, {
                    value: y,
                    children: w
                });
            };
            u.displayName = l + "Provider";
            function c(d, f) {
                const w = f?.[e]?.[a] || s, x = N.useContext(w);
                if (x) return x;
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
            ev(o, ...t)
        ];
    }
    function ev(...e) {
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
    function tv(e) {
        const t = e + "CollectionProvider", [n, r] = Ba(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (p)=>{
            const { scope: y, children: h } = p, m = oe.useRef(null), v = oe.useRef(new Map).current;
            return g.jsx(o, {
                scope: y,
                itemMap: v,
                collectionRef: m,
                children: h
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = Fl(s), u = oe.forwardRef((p, y)=>{
            const { scope: h, children: m } = p, v = l(s, h), S = Us(y, v.collectionRef);
            return g.jsx(a, {
                ref: S,
                children: m
            });
        });
        u.displayName = s;
        const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = Fl(c), w = oe.forwardRef((p, y)=>{
            const { scope: h, children: m, ...v } = p, S = oe.useRef(null), C = Us(y, S), z = l(c, h);
            return oe.useEffect(()=>(z.itemMap.set(S, {
                    ref: S,
                    ...v
                }), ()=>void z.itemMap.delete(S))), g.jsx(f, {
                [d]: "",
                ref: C,
                children: m
            });
        });
        w.displayName = c;
        function x(p) {
            const y = l(e + "CollectionConsumer", p);
            return oe.useCallback(()=>{
                const m = y.collectionRef.current;
                if (!m) return [];
                const v = Array.from(m.querySelectorAll(`[${d}]`));
                return Array.from(y.itemMap.values()).sort((z, j)=>v.indexOf(z.ref.current) - v.indexOf(j.ref.current));
            }, [
                y.collectionRef,
                y.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: u,
                ItemSlot: w
            },
            x,
            r
        ];
    }
    function Pn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var nm = globalThis?.document ? N.useLayoutEffect : ()=>{}, nv = Md[" useInsertionEffect ".trim().toString()] || nm;
    function oi({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = rv({
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
                const d = ov(c) ? c(e) : c;
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
    function rv({ defaultProp: e, onChange: t }) {
        const [n, r] = N.useState(e), o = N.useRef(n), l = N.useRef(t);
        return nv(()=>{
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
    function ov(e) {
        return typeof e == "function";
    }
    var lv = Md[" useId ".trim().toString()] || (()=>{}), iv = 0;
    function sv(e) {
        const [t, n] = N.useState(lv());
        return nm(()=>{
            n((r)=>r ?? String(iv++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var av = N.createContext(void 0);
    function rm(e) {
        const t = N.useContext(av);
        return e || t || "ltr";
    }
    function uv(e) {
        const t = N.useRef(e);
        return N.useEffect(()=>{
            t.current = e;
        }), N.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Wi = "rovingFocusGroup.onEntryFocus", cv = {
        bubbles: !1,
        cancelable: !0
    }, No = "RovingFocusGroup", [Bs, om, dv] = tv(No), [fv, lm] = Ba(No, [
        dv
    ]), [pv, mv] = fv(No), im = N.forwardRef((e, t)=>g.jsx(Bs.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: g.jsx(Bs.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: g.jsx(hv, {
                    ...e,
                    ref: t
                })
            })
        }));
    im.displayName = No;
    var hv = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: c = !1, ...d } = e, f = N.useRef(null), w = Us(t, f), x = rm(l), [p, y] = oi({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: No
        }), [h, m] = N.useState(!1), v = uv(u), S = om(n), C = N.useRef(!1), [z, j] = N.useState(0);
        return N.useEffect(()=>{
            const E = f.current;
            if (E) return E.addEventListener(Wi, v), ()=>E.removeEventListener(Wi, v);
        }, [
            v
        ]), g.jsx(pv, {
            scope: n,
            orientation: r,
            dir: x,
            loop: o,
            currentTabStopId: p,
            onItemFocus: N.useCallback((E)=>y(E), [
                y
            ]),
            onItemShiftTab: N.useCallback(()=>m(!0), []),
            onFocusableItemAdd: N.useCallback(()=>j((E)=>E + 1), []),
            onFocusableItemRemove: N.useCallback(()=>j((E)=>E - 1), []),
            children: g.jsx(wo.div, {
                tabIndex: h || z === 0 ? -1 : 0,
                "data-orientation": r,
                ...d,
                ref: w,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: Pn(e.onMouseDown, ()=>{
                    C.current = !0;
                }),
                onFocus: Pn(e.onFocus, (E)=>{
                    const W = !C.current;
                    if (E.target === E.currentTarget && W && !h) {
                        const U = new CustomEvent(Wi, cv);
                        if (E.currentTarget.dispatchEvent(U), !U.defaultPrevented) {
                            const he = S().filter((X)=>X.focusable), ye = he.find((X)=>X.active), Ge = he.find((X)=>X.id === p), Je = [
                                ye,
                                Ge,
                                ...he
                            ].filter(Boolean).map((X)=>X.ref.current);
                            um(Je, c);
                        }
                    }
                    C.current = !1;
                }),
                onBlur: Pn(e.onBlur, ()=>m(!1))
            })
        });
    }), sm = "RovingFocusGroupItem", am = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = sv(), u = l || a, c = mv(sm, n), d = c.currentTabStopId === u, f = om(n), { onFocusableItemAdd: w, onFocusableItemRemove: x, currentTabStopId: p } = c;
        return N.useEffect(()=>{
            if (r) return w(), ()=>x();
        }, [
            r,
            w,
            x
        ]), g.jsx(Bs.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: g.jsx(wo.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": c.orientation,
                ...s,
                ref: t,
                onMouseDown: Pn(e.onMouseDown, (y)=>{
                    r ? c.onItemFocus(u) : y.preventDefault();
                }),
                onFocus: Pn(e.onFocus, ()=>c.onItemFocus(u)),
                onKeyDown: Pn(e.onKeyDown, (y)=>{
                    if (y.key === "Tab" && y.shiftKey) {
                        c.onItemShiftTab();
                        return;
                    }
                    if (y.target !== y.currentTarget) return;
                    const h = yv(y, c.orientation, c.dir);
                    if (h !== void 0) {
                        if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                        y.preventDefault();
                        let v = f().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (h === "last") v.reverse();
                        else if (h === "prev" || h === "next") {
                            h === "prev" && v.reverse();
                            const S = v.indexOf(y.currentTarget);
                            v = c.loop ? vv(v, S + 1) : v.slice(S + 1);
                        }
                        setTimeout(()=>um(v));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: d,
                    hasTabStop: p != null
                }) : i
            })
        });
    });
    am.displayName = sm;
    var gv = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function xv(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function yv(e, t, n) {
        const r = xv(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return gv[r];
    }
    function um(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function vv(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var wv = im, kv = am, cm = "Toggle", dm = N.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = oi({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: cm
        });
        return g.jsx(wo.button, {
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
    dm.displayName = cm;
    var mn = "ToggleGroup", [fm] = Ba(mn, [
        lm
    ]), pm = lm(), Wa = oe.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return g.jsx(Sv, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return g.jsx(_v, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${mn}\``);
    });
    Wa.displayName = mn;
    var [mm, hm] = fm(mn), Sv = oe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = oi({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: mn
        });
        return g.jsx(mm, {
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
            children: g.jsx(gm, {
                ...l,
                ref: t
            })
        });
    }), _v = oe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = oi({
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
        return g.jsx(mm, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: g.jsx(gm, {
                ...l,
                ref: t
            })
        });
    });
    Wa.displayName = mn;
    var [Cv, Ev] = fm(mn), gm = oe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = pm(n), c = rm(i), d = {
            role: "group",
            dir: c,
            ...a
        };
        return g.jsx(Cv, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? g.jsx(wv, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: c,
                loop: s,
                children: g.jsx(wo.div, {
                    ...d,
                    ref: t
                })
            }) : g.jsx(wo.div, {
                ...d,
                ref: t
            })
        });
    }), $l = "ToggleGroupItem", xm = oe.forwardRef((e, t)=>{
        const n = hm($l, e.__scopeToggleGroup), r = Ev($l, e.__scopeToggleGroup), o = pm(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = oe.useRef(null);
        return r.rovingFocus ? g.jsx(kv, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: g.jsx(dd, {
                ...s,
                ref: t
            })
        }) : g.jsx(dd, {
            ...s,
            ref: t
        });
    });
    xm.displayName = $l;
    var dd = oe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = hm($l, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return g.jsx(dm, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Nv = Wa, Tv = xm;
    const Iv = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Rv = (e, t)=>({
            classGroupId: e,
            validator: t
        }), ym = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Ul = "-", fd = [], zv = "arbitrary..", jv = (e)=>{
        const t = Mv(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Pv(i);
                const s = i.split(Ul), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return vm(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Iv(u, a) : a : u || fd;
                }
                return n[i] || fd;
            }
        };
    }, vm = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = vm(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Ul) : e.slice(t).join(Ul), a = i.length;
        for(let u = 0; u < a; u++){
            const c = i[u];
            if (c.validator(s)) return c.classGroupId;
        }
    }, Pv = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? zv + r : void 0;
        })(), Mv = (e)=>{
        const { theme: t, classGroups: n } = e;
        return bv(n, t);
    }, bv = (e, t)=>{
        const n = ym();
        for(const r in e){
            const o = e[r];
            Va(o, n, r, t);
        }
        return n;
    }, Va = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Lv(i, t, n, r);
        }
    }, Lv = (e, t, n, r)=>{
        if (typeof e == "string") {
            Ov(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Dv(e, t, n, r);
            return;
        }
        Av(e, t, n, r);
    }, Ov = (e, t, n)=>{
        const r = e === "" ? t : wm(t, e);
        r.classGroupId = n;
    }, Dv = (e, t, n, r)=>{
        if (Fv(e)) {
            Va(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Rv(n, e));
    }, Av = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            Va(a, wm(t, s), n, r);
        }
    }, wm = (e, t)=>{
        let n = e;
        const r = t.split(Ul), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = ym(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Fv = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, $v = (e)=>{
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
    }, Ws = "!", pd = ":", Uv = [], md = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Bv = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const c = o.length;
            for(let p = 0; p < c; p++){
                const y = o[p];
                if (i === 0 && s === 0) {
                    if (y === pd) {
                        l.push(o.slice(a, p)), a = p + 1;
                        continue;
                    }
                    if (y === "/") {
                        u = p;
                        continue;
                    }
                }
                y === "[" ? i++ : y === "]" ? i-- : y === "(" ? s++ : y === ")" && s--;
            }
            const d = l.length === 0 ? o : o.slice(a);
            let f = d, w = !1;
            d.endsWith(Ws) ? (f = d.slice(0, -1), w = !0) : d.startsWith(Ws) && (f = d.slice(1), w = !0);
            const x = u && u > a ? u - a : void 0;
            return md(l, w, f, x);
        };
        if (t) {
            const o = t + pd, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : md(Uv, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Wv = (e)=>{
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
    }, Vv = (e)=>({
            cache: $v(e.cacheSize),
            parseClassName: Bv(e),
            sortModifiers: Wv(e),
            ...jv(e)
        }), Gv = /\s+/, Hv = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Gv);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const c = s[u], { isExternal: d, modifiers: f, hasImportantModifier: w, baseClassName: x, maybePostfixModifierPosition: p } = n(c);
            if (d) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            let y = !!p, h = r(y ? x.substring(0, p) : x);
            if (!h) {
                if (!y) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (h = r(x), !h) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                y = !1;
            }
            const m = f.length === 0 ? "" : f.length === 1 ? f[0] : l(f).join(":"), v = w ? m + Ws : m, S = v + h;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const C = o(h, y);
            for(let z = 0; z < C.length; ++z){
                const j = C[z];
                i.push(v + j);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, Kv = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = km(n)) && (o && (o += " "), o += r);
        return o;
    }, km = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = km(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Qv = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((c, d)=>d(c), e());
            return n = Vv(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const c = Hv(a, n);
            return o(a, c), c;
        };
        return l = i, (...a)=>l(Kv(...a));
    }, Yv = [], ve = (e)=>{
        const t = (n)=>n[e] || Yv;
        return t.isThemeGetter = !0, t;
    }, Sm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, _m = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Xv = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Zv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jv = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, e0 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, t0 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Gt = (e)=>Xv.test(e), G = (e)=>!!e && !Number.isNaN(Number(e)), Ht = (e)=>!!e && Number.isInteger(Number(e)), Vi = (e)=>e.endsWith("%") && G(e.slice(0, -1)), It = (e)=>Zv.test(e), Cm = ()=>!0, n0 = (e)=>Jv.test(e) && !qv.test(e), Ga = ()=>!1, r0 = (e)=>e0.test(e), o0 = (e)=>t0.test(e), l0 = (e)=>!L(e) && !O(e), i0 = (e)=>hn(e, Tm, Ga), L = (e)=>Sm.test(e), _n = (e)=>hn(e, Im, n0), hd = (e)=>hn(e, m0, G), s0 = (e)=>hn(e, zm, Cm), a0 = (e)=>hn(e, Rm, Ga), gd = (e)=>hn(e, Em, Ga), u0 = (e)=>hn(e, Nm, o0), Zo = (e)=>hn(e, jm, r0), O = (e)=>_m.test(e), Dr = (e)=>$n(e, Im), c0 = (e)=>$n(e, Rm), xd = (e)=>$n(e, Em), d0 = (e)=>$n(e, Tm), f0 = (e)=>$n(e, Nm), Jo = (e)=>$n(e, jm, !0), p0 = (e)=>$n(e, zm, !0), hn = (e, t, n)=>{
        const r = Sm.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, $n = (e, t, n = !1)=>{
        const r = _m.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, Em = (e)=>e === "position" || e === "percentage", Nm = (e)=>e === "image" || e === "url", Tm = (e)=>e === "length" || e === "size" || e === "bg-size", Im = (e)=>e === "length", m0 = (e)=>e === "number", Rm = (e)=>e === "family-name", zm = (e)=>e === "number" || e === "weight", jm = (e)=>e === "shadow", h0 = ()=>{
        const e = ve("color"), t = ve("font"), n = ve("text"), r = ve("font-weight"), o = ve("tracking"), l = ve("leading"), i = ve("breakpoint"), s = ve("container"), a = ve("spacing"), u = ve("radius"), c = ve("shadow"), d = ve("inset-shadow"), f = ve("text-shadow"), w = ve("drop-shadow"), x = ve("blur"), p = ve("perspective"), y = ve("aspect"), h = ve("ease"), m = ve("animate"), v = ()=>[
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
                L
            ], z = ()=>[
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
                L,
                a
            ], W = ()=>[
                Gt,
                "full",
                "auto",
                ...E()
            ], U = ()=>[
                Ht,
                "none",
                "subgrid",
                O,
                L
            ], he = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Ht,
                        O,
                        L
                    ]
                },
                Ht,
                O,
                L
            ], ye = ()=>[
                Ht,
                "auto",
                O,
                L
            ], Ge = ()=>[
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
            ], I = ()=>[
                e,
                O,
                L
            ], D = ()=>[
                ...S(),
                xd,
                gd,
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
            ], xt = ()=>[
                "auto",
                "cover",
                "contain",
                d0,
                i0,
                {
                    size: [
                        O,
                        L
                    ]
                }
            ], Ae = ()=>[
                Vi,
                Dr,
                _n
            ], ue = ()=>[
                "",
                "none",
                "full",
                u,
                O,
                L
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
            ], fe = ()=>[
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
                Vi,
                xd,
                gd
            ], Sr = ()=>[
                "",
                "none",
                x,
                O,
                L
            ], Et = ()=>[
                "none",
                G,
                O,
                L
            ], gn = ()=>[
                "none",
                G,
                O,
                L
            ], Un = ()=>[
                G,
                O,
                L
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
                    Cm
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
                    l0
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
                            L,
                            O,
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
                            G,
                            L,
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
                        inset: W()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": W()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": W()
                    }
                ],
                start: [
                    {
                        "inset-s": W(),
                        start: W()
                    }
                ],
                end: [
                    {
                        "inset-e": W(),
                        end: W()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": W()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": W()
                    }
                ],
                top: [
                    {
                        top: W()
                    }
                ],
                right: [
                    {
                        right: W()
                    }
                ],
                bottom: [
                    {
                        bottom: W()
                    }
                ],
                left: [
                    {
                        left: W()
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
                            L
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
                            L
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            G,
                            O,
                            L
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            G,
                            O,
                            L
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
                            L
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
                        col: he()
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
                        "grid-rows": U()
                    }
                ],
                "row-start-end": [
                    {
                        row: he()
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
                            ...gt(),
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
                            ...gt()
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
                        "place-content": gt()
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
                            p0,
                            s0
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
                            Vi,
                            L
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            c0,
                            a0,
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
                            G,
                            "none",
                            O,
                            hd
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
                        decoration: I()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            G,
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
                        bg: xt()
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
                                    L
                                ],
                                radial: [
                                    "",
                                    O,
                                    L
                                ],
                                conic: [
                                    Ht,
                                    O,
                                    L
                                ]
                            },
                            f0,
                            u0
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
                        rounded: ue()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": ue()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": ue()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": ue()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": ue()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": ue()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": ue()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": ue()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": ue()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": ue()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": ue()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": ue()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": ue()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": ue()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": ue()
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
                            L
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
                        outline: I()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            c,
                            Jo,
                            Zo
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
                            d,
                            Jo,
                            Zo
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
                        ring: Z()
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
                            G,
                            _n
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
                        "inset-ring": Z()
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
                            f,
                            Jo,
                            Zo
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
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...fe(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": fe()
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
                        mask: xt()
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
                        blur: Sr()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            G,
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
                            w,
                            Jo,
                            Zo
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
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            G,
                            O,
                            L
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            G,
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
                        "backdrop-blur": Sr()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            G,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            G,
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
                            G,
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
                            h,
                            O,
                            L
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            G,
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
                            p,
                            O,
                            L
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
                        rotate: Et()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": Et()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": Et()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": Et()
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
                            G,
                            Dr,
                            _n,
                            hd
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
    }, g0 = Qv(h0);
    function qt(...e) {
        return g0(qp(e));
    }
    const x0 = em("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
        const l = r ? Ky : "button";
        return g.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: qt(x0({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const y0 = em("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), Pm = N.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function qo({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return g.jsx(Nv, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: qt("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: g.jsx(Pm.Provider, {
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
        const l = N.useContext(Pm);
        return g.jsx(Tv, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: qt(y0({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function rr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = N.useState(t), s = N.useRef(!1), a = N.useRef({
            x: 0,
            y: 0
        }), u = N.useCallback((c)=>{
            s.current = !0, a.current = {
                x: c.clientX - l.x,
                y: c.clientY - l.y
            };
            const d = (w)=>{
                if (!s.current) return;
                const x = Math.max(0, w.clientX - a.current.x), p = Math.max(0, w.clientY - a.current.y);
                i({
                    x,
                    y: p
                });
            }, f = ()=>{
                s.current = !1, window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", f);
            };
            window.addEventListener("mousemove", d), window.addEventListener("mouseup", f);
        }, [
            l
        ]);
        return g.jsxs("div", {
            className: qt("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: l.x,
                top: l.y
            },
            children: [
                g.jsxs("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg flex items-center justify-between gap-2",
                    onMouseDown: u,
                    children: [
                        g.jsx("span", {
                            children: e
                        }),
                        o && g.jsx("button", {
                            type: "button",
                            "aria-label": "Close",
                            className: "text-gray-400 hover:text-gray-700 cursor-pointer leading-none px-1",
                            onMouseDown: (c)=>c.stopPropagation(),
                            onClick: o,
                            children: "✕"
                        })
                    ]
                }),
                g.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const v0 = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Ar(e) {
        return v0[e] ?? "#000000";
    }
    function w0(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, c = s * a + o * 2;
        e.width = u, e.height = c;
        const d = e.getContext("2d");
        if (d) {
            l && (d.fillStyle = l, d.fillRect(0, 0, u, c)), d.translate(o, o);
            for (const [f, w, x] of t.cells ?? []){
                const p = Ar(x);
                p && (d.fillStyle = p, d.fillRect(w * a, f * a, a, a));
            }
            for (const f of t.images ?? []){
                if (!Array.isArray(f) || f.length < 4) continue;
                const [w, x, p, y] = f, h = Math.min(x, y) * a, m = Math.min(w, p) * a, v = Math.abs(y - x) * a, S = Math.abs(p - w) * a;
                d.fillStyle = "#eef2f7", d.fillRect(h, m, v, S), d.strokeStyle = "#c3ccd8", d.lineWidth = 1, d.strokeRect(h + .5, m + .5, v - 1, S - 1);
            }
            for (const [f, w, x, p, y, h] of t.rects ?? []){
                const m = Math.min(w, p) * a, v = Math.min(f, x) * a, S = Math.abs(p - w) * a, C = Math.abs(x - f) * a, z = Ar(y);
                z && (d.fillStyle = z, d.fillRect(m, v, S, C));
                const j = Ar(h);
                j && (d.strokeStyle = j, d.lineWidth = Math.max(1, a / 8), d.strokeRect(m, v, S, C));
            }
            for (const [f, w, x, p, y] of t.lines ?? []){
                const h = Ar(y);
                h && (d.strokeStyle = h, d.lineWidth = Math.max(1, a / 6), d.beginPath(), d.moveTo(w * a, f * a), d.lineTo(p * a, x * a), d.stroke());
            }
            d.textBaseline = "alphabetic";
            for (const f of t.texts ?? []){
                const w = Array.isArray(f) ? f.length >= 9 ? {
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
                if (!w || typeof w.r != "number" || typeof w.c != "number") continue;
                d.fillStyle = Ar(w.color) ?? "#000000";
                const x = w.size ?? 1;
                d.font = `${Math.max(6, x * a * xr)}px 'BigBlue Terminal', monospace`, d.fillText(String(w.text ?? ""), w.c * a, (w.r + x * xr) * a);
            }
            d.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function ml({ design: e, size: t = 96, className: n }) {
        const r = N.useRef(null);
        return N.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            w0(r.current, e, o);
        }, [
            e,
            t
        ]), g.jsx("canvas", {
            ref: r,
            className: n,
            style: {
                imageRendering: "pixelated"
            }
        });
    }
    const Mm = "/grid-draw/";
    function k0(e) {
        window.location.href = `${Mm}design/${encodeURIComponent(e)}/`;
    }
    function S0() {
        window.location.href = Mm;
    }
    function bm({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = pe((y)=>y.designs), o = pe((y)=>y.examples), l = pe((y)=>y.loadingDesigns || y.loadingExamples), i = pe((y)=>y.error), s = pe((y)=>y.loadDesigns), a = pe((y)=>y.loadExamples), u = pe((y)=>y.deleteDrawing), c = pe((y)=>y.deleteExamplePair), d = N.useCallback(()=>{
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
        const f = N.useCallback((y, h)=>{
            window.confirm(`Delete drawing “${h}”? This can't be undone.`) && u(y);
        }, [
            u
        ]), w = N.useCallback((y)=>{
            window.confirm("Delete this training example? This can't be undone.") && c(y);
        }, [
            c
        ]), x = N.useCallback((y)=>{
            n ? n(y) : k0(y);
        }, [
            n
        ]), p = g.jsxs(g.Fragment, {
            children: [
                l && g.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "Loading…"
                }),
                g.jsxs("section", {
                    className: "mb-10",
                    children: [
                        g.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Saved drawings (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && !l && g.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No saved drawings yet — use “Save to Gallery” in the editor."
                        }),
                        g.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4",
                            children: r.map((y)=>g.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        g.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: g.jsx(ml, {
                                                design: y.design,
                                                size: 120
                                            })
                                        }),
                                        g.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: y.name,
                                            children: y.name
                                        }),
                                        g.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                g.jsx(K, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>x(y.name),
                                                    children: "Open"
                                                }),
                                                g.jsx(K, {
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
                g.jsxs("section", {
                    children: [
                        g.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                o.length,
                                ")"
                            ]
                        }),
                        o.length === 0 && !l && g.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — capture some with “Make Training Data”."
                        }),
                        g.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4",
                            children: o.map((y)=>g.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        g.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                g.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        g.jsx(ml, {
                                                            design: y.input,
                                                            size: 80
                                                        }),
                                                        g.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "input"
                                                        })
                                                    ]
                                                }),
                                                g.jsx("span", {
                                                    className: "text-gray-300",
                                                    children: "→"
                                                }),
                                                g.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        g.jsx(ml, {
                                                            design: y.output,
                                                            size: 80
                                                        }),
                                                        g.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "output"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        g.jsx(K, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full text-xs text-red-600",
                                            onClick: ()=>w(y.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, y.id))
                        })
                    ]
                })
            ]
        });
        return e ? g.jsxs(rr, {
            title: "Gallery",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 880) / 2),
                y: 64
            },
            className: "w-[880px] max-w-[95vw] z-30",
            children: [
                g.jsxs("div", {
                    className: "mb-3 flex items-center gap-3",
                    children: [
                        g.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: d,
                            children: "Refresh"
                        }),
                        i && g.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                g.jsx("div", {
                    className: "max-h-[70vh] overflow-auto pr-1",
                    children: p
                })
            ]
        }) : g.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                g.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        g.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Gallery"
                        }),
                        g.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: S0,
                            children: "← Editor"
                        }),
                        g.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: d,
                            children: "Refresh"
                        }),
                        g.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                Hp(), window.location.reload();
                            },
                            children: "Log out"
                        }),
                        i && g.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                p
            ]
        });
    }
    const _0 = "/grid-draw/";
    function yd({ design: e, label: t, onClick: n }) {
        const r = g.jsx(ml, {
            design: e,
            size: 84
        });
        return g.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
                n ? g.jsx("button", {
                    type: "button",
                    onClick: n,
                    title: `Load this ${t} into the editor`,
                    className: "rounded ring-1 ring-transparent hover:ring-blue-400 hover:ring-2 focus:outline-none focus:ring-blue-500 cursor-pointer",
                    children: r
                }) : r,
                g.jsx("span", {
                    className: "text-[10px] text-gray-400 mt-1",
                    children: t
                })
            ]
        });
    }
    function C0({ input: e, output: t, onInput: n, onOutput: r }) {
        return g.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                g.jsx(yd, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                g.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                g.jsx(yd, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function Lm({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = pe((a)=>a.examples), o = pe((a)=>a.error), l = pe((a)=>a.loadExamples);
        N.useEffect(()=>{
            l();
        }, [
            l
        ]);
        const s = g.jsxs(g.Fragment, {
            children: [
                g.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        g.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: l,
                            children: "Refresh"
                        }),
                        o && g.jsx("span", {
                            className: "text-sm text-red-500",
                            children: o
                        })
                    ]
                }),
                g.jsxs("section", {
                    children: [
                        g.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && g.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — use “Make Training Data”."
                        }),
                        g.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4",
                            children: r.map((a)=>g.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-1",
                                    children: [
                                        g.jsx(C0, {
                                            input: a.input,
                                            output: a.output,
                                            onInput: n && (()=>n(a, "input")),
                                            onOutput: n && (()=>n(a, "output"))
                                        }),
                                        g.jsxs("span", {
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
        return e ? g.jsx(rr, {
            title: "Training Data",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 900) / 2),
                y: 64
            },
            className: "w-[900px] max-w-[95vw] z-30",
            children: g.jsx("div", {
                className: "max-h-[72vh] overflow-auto pr-1",
                children: s
            })
        }) : g.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                g.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        g.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Training Data"
                        }),
                        g.jsx(K, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = _0;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const vt = 2, Rt = 8, Nn = 48;
    function vd(e) {
        return [
            e[0],
            e[1],
            e[0] + e[4],
            e[1] + e[3]
        ];
    }
    const Fr = "/grid-draw/", wd = [
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
    function E0(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function kd() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - Nn)
        };
    }
    function N0() {
        const [e, t] = N.useState(()=>kd()), n = N.useRef(null), { grid: r, loading: o, error: l } = fy(n, e.w, e.h), i = de(), { tool: s, setTool: a, colorIdx: u, setColorIdx: c, pickColor: d, outlineIdx: f, pickOutline: w, isDrawing: x, drawMode: p, startDrawing: y, stopDrawing: h, lineStart: m, startLine: v, finishLine: S, rectStart: C, startRect: z, finishRect: j, textSize: E, pickTextSize: W, lineWidth: U, pickLineWidth: he, pickTextAlign: ye, subdivision: Ge, cycleSubdivision: gt, setSubdivision: Je, beginTextEdit: X, typeTextChar: De, backspaceText: M, commitTextEdit: F, cancelTextEdit: I, selectedItems: D, setSelectedItems: re, selectAll: xt, clipboard: Ae, copy: ue, paste: Z, deleteSelected: qe, selectMode: fe, isSelecting: J, selectBoxStart: Sr, selectDragStart: Et, startBoxSelection: gn, updateBoxSelection: Un, finishBoxSelection: xn, cancelBoxSelection: Ha, startDragSelection: To, finishDragSelection: Ka, cancelDragSelection: Qa, startResize: Ya, updateResize: Xa, finishResize: Za, cancelResize: Ja, startRotate: qa, updateRotate: eu, finishRotate: tu, cancelRotate: nu, setMousePos: ru, addItemToSelection: ou, removeItemFromSelection: lu, hitTestShapes: Io, getSelectedCells: Om, jsonOutput: Dm, tensorOutput: Am, importJson: Fm, importTensor: $m, clear: li, updateOutputs: _r, renderSelection: ii, beginDrawStroke: iu, drawCellAt: Ro, endDrawStroke: su, commitLine: au, commitRect: uu, placeImage: cu, undo: si, redo: ai, canUndo: Um, canRedo: Bm, captureMode: ui, captureInput: Cr, startTrainingCapture: Wm, captureSetInput: Vm, buildTrainingExample: du, finishTrainingCapture: fu, cancelTrainingCapture: pu, serializeWholeGrid: mu, loadDesignWithHistory: yn, currentName: hu, setCurrentName: Nt, saveState: ci, setSaveState: gu, resetHistory: xu } = i;
        i.historyTick;
        const zo = pe((k)=>k.getDrawing), yu = pe((k)=>k.getDrawingById), vu = pe((k)=>k.saveExamplePair), wu = pe((k)=>k.updateExamplePair), ku = pe((k)=>k.runPredict), Su = pe((k)=>k.trainModel), _u = pe((k)=>k.initModel), Cu = pe((k)=>k.modelStatus), Ee = pe((k)=>k.training), Er = Om(), [Eu, Se] = N.useState(""), [Gm, di] = N.useState(!1), [Hm, fi] = N.useState(!1), [Ut, pi] = N.useState(null), Nu = N.useRef(null), [Tu, Nr] = N.useState(""), [mi, Km] = N.useState(!1), Iu = 16, jo = N.useCallback(async (k)=>{
            try {
                let _;
                if (typeof k == "string") _ = k;
                else {
                    let hi = k;
                    mi && (Nr("Removing background…"), hi = await Dy(hi)), Nr("Uploading…"), _ = await _y(hi);
                }
                Nr("Loading…");
                const { width: R, height: P } = await Hx(_), V = Math.max(R, P) || 1, B = Math.max(1, Math.round(R / V * Iu)), A = Math.max(1, Math.round(P / V * Iu)), $ = Tt.current, q = Math.round(($.x + e.w / 2 / $.zoom) / vt / Rt) * Rt, ge = Math.round(($.y + e.h / 2 / $.zoom) / vt / Rt) * Rt, kn = q - Math.round(B / 2) * Rt, Sn = ge - Math.round(A / 2) * Rt;
                cu(_, {
                    r1: Sn,
                    c1: kn,
                    r2: Sn + A * Rt,
                    c2: kn + B * Rt
                }), Nr("");
            } catch (_) {
                Nr(_ instanceof Error ? _.message : "image failed");
            }
        }, [
            cu,
            e.w,
            e.h,
            mi
        ]);
        N.useEffect(()=>{
            const k = (_)=>{
                if (de.getState().textEdit) return;
                const R = _.clipboardData?.items;
                if (R) {
                    for (const P of R)if (P.kind === "file" && P.type.startsWith("image/")) {
                        const V = P.getAsFile();
                        if (V) {
                            _.preventDefault(), jo(V);
                            return;
                        }
                    }
                }
            };
            return document.addEventListener("paste", k), ()=>document.removeEventListener("paste", k);
        }, [
            jo
        ]);
        const [Bn, Qm] = N.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), Ym = .25, Xm = 12, Tt = N.useRef(Bn);
        Tt.current = Bn;
        const Tr = N.useCallback((k)=>{
            Qm(k), r?.set_camera(k.x, k.y, k.zoom);
        }, [
            r
        ]), Po = N.useRef(!1), [Zm, Ru] = N.useState(!1), vn = N.useRef(null);
        N.useEffect(()=>{
            if (!r) return;
            let k = !1;
            const _ = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (_) return zo(_[1]).then((P)=>{
                k || (yn(P.design, P.history ?? null), Nt(P.name));
            }).catch(()=>Se(`No drawing named "${_[1]}".`)), ()=>{
                k = !0;
            };
            const R = new URLSearchParams(window.location.search).get("load");
            if (R) return yu(Number(R)).then((P)=>{
                k || (yn(P.design, P.history ?? null), Nt(P.name), window.history.replaceState({}, "", `${Fr}design/${encodeURIComponent(P.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Fr);
            }), ()=>{
                k = !0;
            };
        }, [
            r,
            yn,
            Nt,
            zo,
            yu
        ]), N.useEffect(()=>{
            _u();
        }, [
            _u
        ]);
        const Jm = N.useCallback(async ()=>{
            const k = du();
            if (!k) {
                Se("Select the output region first.");
                return;
            }
            Se("Saving…");
            try {
                await vu(k.input, k.output, k.delta), fu(), Se("Saved.");
            } catch (_) {
                Se(`Save failed: ${_ instanceof Error ? _.message : String(_)}`);
            }
        }, [
            du,
            fu,
            vu
        ]), qm = N.useCallback(async ()=>{
            Se("Training in the browser…");
            try {
                await Su(), Se("Model trained. Try Predict from Selection.");
            } catch (k) {
                Se(`Train failed: ${k instanceof Error ? k.message : String(k)}`);
            }
        }, [
            Su
        ]), eh = N.useCallback(async ()=>{
            const { grid: k, selectedItems: _ } = de.getState();
            if (!k) return;
            const R = eo(k, _);
            if (!R) {
                Se("Select an input region to predict from.");
                return;
            }
            const P = $e(_, k), V = P ? P.minRow : 0, B = P ? P.minCol : 0;
            Se("Predicting…");
            try {
                const A = await ku(R);
                de.getState().placeDesign(A, V, B), Se(E0(A) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (A) {
                Se(`Predict failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            ku
        ]), th = N.useCallback(async (k)=>{
            const _ = await zo(k);
            yn(_.design, _.history ?? null), Nt(_.name), pi(null), Bi(!1), window.history.replaceState({}, "", `${Fr}design/${encodeURIComponent(_.name)}/`), di(!1);
        }, [
            yn,
            Nt,
            zo
        ]), nh = N.useCallback((k, _)=>{
            const R = _ === "input" ? k.input : k.output, P = _ === "input" ? k.output : k.input;
            yn(R, null), Nt(null), Bi(!0), pi({
                id: k.id,
                half: _,
                otherHalf: P
            }), window.history.replaceState({}, "", Fr), fi(!1), Se(`Editing example #${k.id} (${_}) — click "Update example" to save over it.`);
        }, [
            yn,
            Nt
        ]), rh = N.useCallback(async ()=>{
            if (!Ut) return;
            const k = mu();
            if (!k) {
                Se("Nothing to save — draw something first.");
                return;
            }
            const { id: _, half: R, otherHalf: P } = Ut, V = R === "input" ? k : P, B = R === "output" ? k : P;
            Se(`Updating example #${_}…`);
            try {
                await wu(_, V, B), Se(`Example #${_} (${R}) updated.`);
            } catch (A) {
                Se(`Update failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            Ut,
            mu,
            wu
        ]), oh = N.useCallback(()=>{
            Nt(null), pi(null), Bi(!1), li(), xu(), gu("idle"), window.history.replaceState({}, "", Fr), Se("");
        }, [
            Nt,
            li,
            xu,
            gu
        ]);
        N.useEffect(()=>{
            const k = ()=>{
                const _ = kd();
                t(_), r?.set_viewport(_.w, _.h);
            };
            return window.addEventListener("resize", k), ()=>window.removeEventListener("resize", k);
        }, [
            r
        ]), N.useEffect(()=>{
            const k = (_)=>{
                if (de.getState().textEdit) return;
                _.key === "\\" && a(s === "line" ? "draw" : "line"), _.key === "m" && a(s === "rect" ? "draw" : "rect"), _.key === "t" && a(s === "text" ? "draw" : "text"), _.key === "s" && a(s === "select" ? "draw" : "select"), (_.key === "Delete" || _.key === "Backspace") && D.length > 0 && (_.preventDefault(), qe()), (_.ctrlKey || _.metaKey) && _.key.toLowerCase() === "a" && (_.preventDefault(), xt()), (_.ctrlKey || _.metaKey) && _.key === "c" && D.length > 0 && (_.preventDefault(), ue()), (_.ctrlKey || _.metaKey) && _.key === "v" && Ae && (_.preventDefault(), Z()), (_.ctrlKey || _.metaKey) && _.key.toLowerCase() === "g" && (_.preventDefault(), gt()), (_.ctrlKey || _.metaKey) && !_.shiftKey && _.key.toLowerCase() === "z" && (_.preventDefault(), si()), (_.ctrlKey || _.metaKey) && (_.shiftKey && _.key.toLowerCase() === "z" || _.key.toLowerCase() === "y") && (_.preventDefault(), ai());
                const R = parseInt(_.key);
                R >= 1 && R <= 7 && c(R - 1);
            };
            return window.addEventListener("keydown", k), ()=>window.removeEventListener("keydown", k);
        }, [
            s,
            a,
            c,
            D,
            qe,
            ue,
            Z,
            Ae,
            si,
            ai,
            xt,
            gt
        ]), N.useEffect(()=>{
            const k = (_)=>{
                if (de.getState().textEdit) {
                    if (_.key === "Enter") {
                        _.preventDefault(), F();
                        return;
                    }
                    if (_.key === "Escape") {
                        _.preventDefault(), I();
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
            I,
            M,
            De
        ]), N.useEffect(()=>{
            const k = n.current;
            if (!k) return;
            const _ = (R)=>{
                R.preventDefault();
                const P = Tt.current, V = R.deltaY < 0 ? 1.1 : 1 / 1.1, B = Math.min(Xm, Math.max(Ym, P.zoom * V));
                if (B === P.zoom) return;
                const A = R.clientX, $ = R.clientY - Nn, q = P.x + A * (1 / P.zoom - 1 / B), ge = P.y + $ * (1 / P.zoom - 1 / B);
                Tr({
                    x: q,
                    y: ge,
                    zoom: B
                });
            };
            return k.addEventListener("wheel", _, {
                passive: !1
            }), ()=>k.removeEventListener("wheel", _);
        }, [
            Tr
        ]), N.useEffect(()=>{
            const k = (R)=>{
                R.code !== "Space" || de.getState().textEdit || (R.preventDefault(), Po.current = !0, Ru(!0));
            }, _ = (R)=>{
                R.code === "Space" && (Po.current = !1, Ru(!1));
            };
            return window.addEventListener("keydown", k), window.addEventListener("keyup", _), ()=>{
                window.removeEventListener("keydown", k), window.removeEventListener("keyup", _);
            };
        }, []);
        const lh = N.useCallback(()=>Tr({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            Tr
        ]), Wn = (k)=>{
            const _ = k.currentTarget, R = _.getBoundingClientRect(), P = (k.clientX - R.left) * (_.width / R.width), V = (k.clientY - R.top) * (_.height / R.height), B = Tt.current;
            return {
                x: P / B.zoom + B.x,
                y: V / B.zoom + B.y
            };
        }, zu = ()=>Rt / Ge, wn = (k)=>{
            const { x: _, y: R } = Wn(k), P = zu(), V = (B)=>Math.floor(Math.floor(B / vt) / P) * P;
            return {
                col: V(_),
                row: V(R)
            };
        }, Bt = (k)=>{
            const { x: _, y: R } = Wn(k), P = zu(), V = (B)=>Math.round(B / vt / P) * P;
            return {
                col: V(_),
                row: V(R)
            };
        }, Mo = (k)=>D.some((_)=>_.type !== k.type ? !1 : _.type === "cell" && k.type === "cell" ? _.row === k.row && _.col === k.col : _.type === "line" && k.type === "line" || _.type === "rect" && k.type === "rect" || _.type === "text" && k.type === "text" || _.type === "image" && k.type === "image" ? _.index === k.index : !1), ih = N.useCallback((k)=>{
            if (r) {
                if (k.button === 1 || k.button === 0 && Po.current) {
                    k.preventDefault(), vn.current = {
                        x: k.clientX,
                        y: k.clientY,
                        camX: Tt.current.x,
                        camY: Tt.current.y
                    }, k.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (r.set_draw_color(u), r.set_outline_color(f), s === "draw") {
                    const { col: _, row: R } = wn(k), P = u === 6 ? !1 : !r.get_cell(R, _);
                    y(P), iu(), Ro(R, _, P), _r();
                } else if (s === "line") {
                    const { col: _, row: R } = Bt(k);
                    v({
                        row: R,
                        col: _
                    }), r.render_with_line(R, _, R, _);
                } else if (s === "rect") {
                    const { col: _, row: R } = Bt(k);
                    z({
                        row: R,
                        col: _
                    }), r.render_with_rect(R, _, R, _);
                } else if (s === "text") {
                    const { col: _, row: R } = wn(k);
                    X({
                        row: R,
                        col: _
                    });
                } else if (s === "select") {
                    const { col: _, row: R } = wn(k), { x: P, y: V } = Wn(k), B = k.shiftKey;
                    if (D.length > 0 && !B) {
                        const ge = $e(D, r);
                        if (ge) {
                            const kn = As(ge), Sn = 10 / Tt.current.zoom;
                            if (Math.hypot(P - kn.c * vt, V - kn.r * vt) <= Sn) {
                                qa(P, V);
                                return;
                            }
                        }
                    }
                    if (D.length === 1 && !B) {
                        const ge = D[0];
                        if (ge.type === "line" || ge.type === "rect" || ge.type === "text" || ge.type === "image") {
                            const kn = ge.type === "line" ? Fs(r.get_line(ge.index)) : ge.type === "rect" ? Pt(r.get_rect(ge.index)) : ge.type === "image" ? Pt(r.get_image(ge.index)) : Pt(vd(r.get_text(ge.index))), Sn = Wc(P, V, kn, vt, 9);
                            if (Sn) {
                                Ya({
                                    shape: ge.type,
                                    index: ge.index,
                                    handle: Sn.handle
                                });
                                return;
                            }
                        }
                    }
                    const A = $e(D, r), $ = A && R >= A.minRow && R <= A.maxRow && _ >= A.minCol && _ <= A.maxCol, q = Io(P, V);
                    q && !B && Mo(q) && D.length > 1 ? (To({
                        row: R,
                        col: _
                    }), ii()) : $ && D.length > 0 && !B && !q ? (To({
                        row: R,
                        col: _
                    }, !0), ii()) : q ? B && !Mo(q) ? ou(q) : B && Mo(q) ? lu(q) : (re([
                        q
                    ]), To({
                        row: R,
                        col: _
                    }), r.render(), q.type === "cell" ? r.highlight_cell(q.row, q.col) : q.type === "line" ? r.highlight_line(q.index) : q.type === "rect" ? r.highlight_rect(q.index) : q.type === "image" && r.highlight_image(q.index)) : gn({
                        row: R,
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
            Er,
            Io,
            y,
            v,
            z,
            gn,
            To,
            Ya,
            qa,
            ou,
            lu,
            re,
            _r,
            ii,
            iu,
            Ro,
            X
        ]), sh = N.useCallback((k)=>{
            if (!r) return;
            if (vn.current) {
                const R = vn.current, P = Tt.current.zoom;
                Tr({
                    x: R.camX - (k.clientX - R.x) / P,
                    y: R.camY - (k.clientY - R.y) / P,
                    zoom: P
                });
                return;
            }
            const _ = wn(k);
            if (ru(_), s === "select") {
                const R = k.currentTarget;
                if (J && (fe === "resize" || fe === "rotate")) R.style.cursor = "grabbing";
                else if (J && fe === "drag") R.style.cursor = "move";
                else {
                    const { x: P, y: V } = Wn(k);
                    let B = "crosshair";
                    if (D.length > 0) {
                        const A = $e(D, r);
                        if (A) {
                            const $ = As(A);
                            Math.hypot(P - $.c * vt, V - $.r * vt) <= 10 / Tt.current.zoom && (B = "grab");
                        }
                    }
                    if (B === "crosshair" && D.length === 1) {
                        const A = D[0];
                        if (A.type === "line" || A.type === "rect" || A.type === "text" || A.type === "image") {
                            const $ = A.type === "line" ? Fs(r.get_line(A.index)) : A.type === "rect" ? Pt(r.get_rect(A.index)) : A.type === "image" ? Pt(r.get_image(A.index)) : Pt(vd(r.get_text(A.index)));
                            Wc(P, V, $, vt, 9) && (B = "grab");
                        }
                    }
                    if (B === "crosshair" && D.length > 0) {
                        const A = Io(P, V), $ = $e(D, r), q = $ && _.row >= $.minRow && _.row <= $.maxRow && _.col >= $.minCol && _.col <= $.maxCol;
                        (A && Mo(A) || q) && (B = "move");
                    }
                    R.style.cursor = B;
                }
            } else k.currentTarget.style.cursor = "crosshair";
            if (!(!x && !J)) {
                if (s === "draw" && x) {
                    const { col: R, row: P } = wn(k);
                    Ro(P, R, p), _r();
                } else if (s === "line" && m) {
                    const { col: R, row: P } = Bt(k);
                    r.render_with_line(m.row, m.col, P, R);
                } else if (s === "rect" && C) {
                    const { col: R, row: P } = Bt(k);
                    r.render_with_rect(C.row, C.col, P, R);
                } else if (s === "select" && J && fe === "resize") {
                    const { col: R, row: P } = Bt(k);
                    Xa({
                        row: P,
                        col: R
                    });
                } else if (s === "select" && J && fe === "rotate") {
                    const { x: R, y: P } = Wn(k);
                    eu(R, P);
                } else if (s === "select" && J) {
                    const { col: R, row: P } = wn(k);
                    if (fe === "box" && Sr) Un({
                        row: P,
                        col: R
                    });
                    else if (fe === "drag" && Et && D.length > 0) {
                        const V = P - Et.row, B = R - Et.col;
                        r.render();
                        for (const A of D)if (A.type === "cell") {
                            const $ = A.row + V, q = A.col + B;
                            r.preview_cell($, q, r.get_cell_color(A.row, A.col));
                        } else if (A.type === "line") {
                            const $ = r.get_line(A.index);
                            $.length >= 6 && r.preview_line($[0] + V, $[1] + B, $[2] + V, $[3] + B, $[4], $[5]);
                        } else if (A.type === "rect") {
                            const $ = r.get_rect(A.index);
                            $.length >= 6 && r.preview_rect($[0] + V, $[1] + B, $[2] + V, $[3] + B, $[4], $[5]);
                        } else if (A.type === "text") {
                            const $ = r.get_text(A.index);
                            $.length >= 7 && r.preview_text($[0] + V, $[1] + B, $[2], r.get_text_size(A.index), $[3], $[4], $[5], $[6], r.get_text_string(A.index));
                        }
                    }
                }
            }
        }, [
            r,
            s,
            x,
            J,
            p,
            m,
            C,
            fe,
            Sr,
            Et,
            D,
            Io,
            ru,
            Un,
            Xa,
            eu,
            _r,
            Ro
        ]), ah = N.useCallback((k)=>{
            if (r) {
                if (vn.current) {
                    vn.current = null, k.currentTarget.style.cursor = Po.current ? "grab" : "crosshair";
                    return;
                }
                if (s === "draw") su(), h();
                else if (s === "line") {
                    if (m) {
                        const { col: _, row: R } = Bt(k);
                        au(m.row, m.col, R, _);
                    }
                    S();
                } else if (s === "rect") {
                    if (C) {
                        const { col: _, row: R } = Bt(k);
                        uu(C.row, C.col, R, _);
                    }
                    j();
                } else if (s === "select") {
                    const { col: _, row: R } = wn(k);
                    if (fe === "rotate") {
                        const { x: P, y: V } = Wn(k);
                        tu(P, V);
                    } else if (fe === "resize") {
                        const { col: P, row: V } = Bt(k);
                        Za({
                            row: V,
                            col: P
                        });
                    } else fe === "box" ? xn({
                        row: R,
                        col: _
                    }) : fe === "drag" && Ka({
                        row: R,
                        col: _
                    });
                }
            }
        }, [
            r,
            s,
            m,
            C,
            fe,
            h,
            S,
            j,
            xn,
            Ka,
            Za,
            tu,
            _r,
            su,
            au,
            uu
        ]), uh = N.useCallback(()=>{
            if (vn.current) {
                vn.current = null;
                return;
            }
            s === "draw" ? h() : s === "line" ? (r && r.render(), S()) : s === "rect" ? (r && r.render(), j()) : s === "select" && (fe === "box" ? Ha() : fe === "drag" ? Qa() : fe === "resize" ? Ja() : fe === "rotate" && nu());
        }, [
            r,
            s,
            fe,
            h,
            S,
            j,
            Ha,
            Qa,
            Ja,
            nu
        ]);
        return l ? g.jsx("div", {
            className: "flex items-center justify-center bg-gray-100 min-h-screen",
            children: g.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: g.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        l
                    ]
                })
            })
        }) : g.jsxs(g.Fragment, {
            children: [
                g.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        g.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Sean's Autism World"
                        }),
                        o && g.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        }),
                        g.jsxs("div", {
                            className: "ml-auto flex items-center gap-3",
                            children: [
                                hu && g.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        hu,
                                        ci === "saving" && " · saving…",
                                        ci === "saved" && " · saved",
                                        ci === "error" && " · save failed"
                                    ]
                                }),
                                (Bn.zoom !== 1 || Bn.x !== 0 || Bn.y !== 0) && g.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        g.jsxs("span", {
                                            className: "text-sm text-gray-500 tabular-nums",
                                            children: [
                                                Math.round(Bn.zoom * 100),
                                                "%"
                                            ]
                                        }),
                                        g.jsx(K, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: lh,
                                            children: "Reset view"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                g.jsx("canvas", {
                    ref: n,
                    className: qt("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: Nn,
                        cursor: o ? "wait" : Zm ? "grab" : "crosshair"
                    },
                    onMouseDown: ih,
                    onMouseMove: sh,
                    onMouseUp: ah,
                    onMouseLeave: uh
                }),
                g.jsx(rr, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: Nn + 20
                    },
                    children: g.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    g.jsxs(qo, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (k)=>k && a(k),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            g.jsx(at, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            g.jsx(at, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            g.jsx(at, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            g.jsx(at, {
                                                value: "text",
                                                className: "text-xs",
                                                children: "Text"
                                            }),
                                            g.jsx(at, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Grid (Ctrl+G)"
                                    }),
                                    g.jsxs(qo, {
                                        type: "single",
                                        value: String(Ge),
                                        onValueChange: (k)=>k && Je(Number(k)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            g.jsx(at, {
                                                value: "1",
                                                className: "text-xs",
                                                title: "Whole cells",
                                                children: "1×"
                                            }),
                                            g.jsx(at, {
                                                value: "2",
                                                className: "text-xs",
                                                title: "Half cells",
                                                children: "½"
                                            }),
                                            g.jsx(at, {
                                                value: "4",
                                                className: "text-xs",
                                                title: "Quarter cells",
                                                children: "¼"
                                            }),
                                            g.jsx(at, {
                                                value: "8",
                                                className: "text-xs",
                                                title: "Eighth cells",
                                                children: "⅛"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Image"
                                    }),
                                    g.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>Nu.current?.click(),
                                                title: "Upload an image (transparent PNG works best)",
                                                children: "Upload"
                                            }),
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>{
                                                    const k = window.prompt("Image URL (transparent PNG works best):");
                                                    k && k.trim() && jo(k.trim());
                                                },
                                                title: "Add an image by URL",
                                                children: "From URL"
                                            })
                                        ]
                                    }),
                                    g.jsx("p", {
                                        className: "text-[10px] text-gray-400 mt-1",
                                        children: "…or paste an image (Ctrl/Cmd+V)"
                                    }),
                                    g.jsxs("label", {
                                        className: "flex items-center gap-1.5 text-[10px] text-gray-500 mt-1 cursor-pointer",
                                        title: "Flood-fills the white backdrop (connected to the image edges) into transparency before upload. White areas inside the subject are kept.",
                                        children: [
                                            g.jsx("input", {
                                                type: "checkbox",
                                                checked: mi,
                                                onChange: (k)=>Km(k.target.checked)
                                            }),
                                            "Remove white background"
                                        ]
                                    }),
                                    Tu && g.jsx("p", {
                                        className: "text-[10px] text-gray-500 mt-1",
                                        children: Tu
                                    }),
                                    g.jsx("input", {
                                        ref: Nu,
                                        type: "file",
                                        accept: "image/png,image/jpeg,image/webp,image/gif",
                                        className: "hidden",
                                        onChange: (k)=>{
                                            const _ = k.target.files?.[0];
                                            _ && jo(_), k.target.value = "";
                                        }
                                    })
                                ]
                            }),
                            s === "text" && g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Text size"
                                    }),
                                    g.jsx(qo, {
                                        type: "single",
                                        value: String(E),
                                        onValueChange: (k)=>k && W(Number(k)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: $p.map((k)=>g.jsxs(at, {
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
                            D.some((k)=>k.type === "text") && g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Text align (drag the box to resize)"
                                    }),
                                    g.jsxs("div", {
                                        className: "flex gap-1 mb-1",
                                        children: [
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(0, null),
                                                children: "Left"
                                            }),
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(1, null),
                                                children: "Center"
                                            }),
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(2, null),
                                                children: "Right"
                                            })
                                        ]
                                    }),
                                    g.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(null, 0),
                                                children: "Top"
                                            }),
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(null, 1),
                                                children: "Middle"
                                            }),
                                            g.jsx(K, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(null, 2),
                                                children: "Bottom"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            s === "line" && g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Line width"
                                    }),
                                    g.jsx(qo, {
                                        type: "single",
                                        value: String(U),
                                        onValueChange: (k)=>k && he(Number(k)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Up.map((k)=>g.jsxs(at, {
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
                            g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    g.jsx("div", {
                                        className: "flex gap-1",
                                        children: wd.map((k, _)=>g.jsx("button", {
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
                            g.jsxs("div", {
                                children: [
                                    g.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Outline (rects)"
                                    }),
                                    g.jsx("div", {
                                        className: "flex gap-1",
                                        children: wd.map((k, _)=>g.jsx("button", {
                                                onClick: ()=>w(_),
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
                            g.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    g.jsx(K, {
                                        variant: "outline",
                                        onClick: si,
                                        disabled: o || !Um(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Undo (Ctrl/Cmd+Z)",
                                        children: g.jsx(Hy, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    g.jsx(K, {
                                        variant: "outline",
                                        onClick: ai,
                                        disabled: o || !Bm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Redo (Ctrl/Cmd+Shift+Z)",
                                        children: g.jsx(Vy, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            g.jsx(K, {
                                variant: "outline",
                                onClick: ()=>di(!0),
                                size: "sm",
                                className: "w-full",
                                children: "Gallery"
                            }),
                            Ut && g.jsxs(K, {
                                variant: "outline",
                                onClick: rh,
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
                            g.jsx(K, {
                                variant: "destructive",
                                onClick: li,
                                disabled: o,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            g.jsx(K, {
                                onClick: oh,
                                disabled: o,
                                size: "sm",
                                className: "w-full bg-green-600 hover:bg-green-700 text-white",
                                children: "New Drawing"
                            }),
                            g.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, t text, s select, 1-7 colors, ⌘Z undo"
                            })
                        ]
                    })
                }),
                g.jsx(rr, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Nn + 20
                    },
                    children: g.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            Er.length > 0 && g.jsxs(g.Fragment, {
                                children: [
                                    g.jsxs("div", {
                                        children: [
                                            g.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "JSON (sparse)"
                                            }),
                                            g.jsx("textarea", {
                                                value: Dm,
                                                onChange: (k)=>Fm(k.target.value),
                                                placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    }),
                                    g.jsxs("div", {
                                        children: [
                                            g.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "2D Array (black = 1)"
                                            }),
                                            g.jsx("textarea", {
                                                value: Am,
                                                onChange: (k)=>$m(k.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            g.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: D.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${D.length} item${D.length !== 1 ? "s" : ""} selected${Er.length > 0 ? ` (${Er.length} cell${Er.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                }),
                g.jsx(rr, {
                    title: "Training Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Nn + 360
                    },
                    children: g.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            ui === "idle" && g.jsxs(g.Fragment, {
                                children: [
                                    g.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                                    }),
                                    g.jsx(K, {
                                        size: "sm",
                                        className: "w-full",
                                        onClick: Wm,
                                        disabled: o,
                                        children: "Make Training Data"
                                    }),
                                    g.jsx(K, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: eh,
                                        disabled: o || D.length === 0 || Cu !== "ready",
                                        title: Cu !== "ready" ? "Train a model first" : "Map the selection through the model",
                                        children: "Predict from Selection"
                                    }),
                                    g.jsx(K, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: qm,
                                        disabled: o || Ee?.status === "running",
                                        children: Ee?.status === "running" ? "Training…" : "Start Training Run"
                                    }),
                                    g.jsx(K, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: ()=>fi(!0),
                                        children: "View Training Data"
                                    })
                                ]
                            }),
                            ui === "input" && g.jsxs(g.Fragment, {
                                children: [
                                    g.jsx("p", {
                                        className: "text-xs font-medium text-blue-600",
                                        children: "Step 1/2 — select the INPUT, then click Next."
                                    }),
                                    g.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            D.length,
                                            " item(s) selected."
                                        ]
                                    }),
                                    g.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            g.jsx(K, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Vm,
                                                disabled: D.length === 0,
                                                children: "Next →"
                                            }),
                                            g.jsx(K, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: pu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ui === "output" && g.jsxs(g.Fragment, {
                                children: [
                                    g.jsx("p", {
                                        className: "text-xs font-medium text-green-600",
                                        children: "Step 2/2 — select the OUTPUT, then Save."
                                    }),
                                    g.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Input: ",
                                            Cr ? `${Cr.cells.length}c ${Cr.lines.length}l ${Cr.rects.length}r ${Cr.texts.length}t` : "—",
                                            " · Output: ",
                                            D.length,
                                            " item(s)"
                                        ]
                                    }),
                                    g.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            g.jsx(K, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Jm,
                                                disabled: D.length === 0,
                                                children: "Save Example"
                                            }),
                                            g.jsx(K, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: pu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            Eu && g.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: Eu
                            })
                        ]
                    })
                }),
                Ee && g.jsx(rr, {
                    title: "Training",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Nn + 540
                    },
                    children: g.jsx("div", {
                        className: "space-y-2 w-72 text-xs",
                        children: (()=>{
                            const k = Ee.total > 0 ? Math.min(100, Math.round(Ee.epoch / Ee.total * 100)) : Ee.status === "done" ? 100 : 0, _ = Ee.status === "error" ? "bg-red-500" : Ee.status === "done" ? "bg-green-500" : "bg-blue-500";
                            return g.jsxs(g.Fragment, {
                                children: [
                                    g.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                            g.jsx("span", {
                                                className: "font-medium",
                                                children: "In-browser model"
                                            }),
                                            g.jsx("span", {
                                                className: "text-gray-400",
                                                children: Ee.status
                                            })
                                        ]
                                    }),
                                    g.jsx("div", {
                                        className: "h-1.5 bg-gray-200 rounded overflow-hidden",
                                        children: g.jsx("div", {
                                            className: qt("h-full", _),
                                            style: {
                                                width: `${k}%`
                                            }
                                        })
                                    }),
                                    g.jsxs("div", {
                                        className: "flex justify-between text-gray-400",
                                        children: [
                                            g.jsx("span", {
                                                children: Ee.total > 0 ? `epoch ${Ee.epoch}/${Ee.total} (${k}%)` : ""
                                            }),
                                            Number.isFinite(Ee.loss) && g.jsxs("span", {
                                                children: [
                                                    "loss ",
                                                    Ee.loss.toFixed(4)
                                                ]
                                            })
                                        ]
                                    }),
                                    Ee.message && g.jsx("p", {
                                        className: "text-gray-400",
                                        children: Ee.message
                                    })
                                ]
                            });
                        })()
                    })
                }),
                Gm && g.jsx(bm, {
                    asModal: !0,
                    onClose: ()=>di(!1),
                    onOpenDesign: th
                }),
                Hm && g.jsx(Lm, {
                    asModal: !0,
                    onClose: ()=>fi(!1),
                    onEditExample: nh
                })
            ]
        });
    }
    function T0({ onSuccess: e }) {
        const [t, n] = N.useState(""), [r, o] = N.useState(""), [l, i] = N.useState(null), [s, a] = N.useState(!1), u = async (c)=>{
            c.preventDefault(), a(!0), i(null);
            try {
                await my(t, r), e();
            } catch (d) {
                i(String(d instanceof Error ? d.message : d));
            } finally{
                a(!1);
            }
        };
        return g.jsx("div", {
            className: "min-h-screen w-full bg-gray-50 flex items-center justify-center p-6",
            children: g.jsxs("form", {
                onSubmit: u,
                className: "bg-white rounded border p-6 w-80 flex flex-col gap-3",
                children: [
                    g.jsx("h1", {
                        className: "text-lg font-semibold",
                        children: "grid-draw"
                    }),
                    g.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        placeholder: "username",
                        autoComplete: "username",
                        value: t,
                        onChange: (c)=>n(c.target.value)
                    }),
                    g.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        type: "password",
                        placeholder: "password",
                        autoComplete: "current-password",
                        value: r,
                        onChange: (c)=>o(c.target.value)
                    }),
                    l && g.jsx("p", {
                        className: "text-sm text-red-500",
                        children: l
                    }),
                    g.jsx(K, {
                        type: "submit",
                        disabled: s || !t || !r,
                        children: s ? "Signing in…" : "Sign in"
                    })
                ]
            })
        });
    }
    function I0() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function R0() {
        const e = I0(), [t, n] = N.useState(()=>Gp() !== null);
        return N.useEffect(()=>{
            const r = ()=>n(!1);
            return window.addEventListener($s, r), ()=>window.removeEventListener($s, r);
        }, []), t ? g.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? g.jsx(bm, {}) : e === "training" ? g.jsx(Lm, {}) : g.jsx(N0, {})
        }) : g.jsx(T0, {
            onSuccess: ()=>n(!0)
        });
    }
    const Sd = document.getElementById("grid-draw-root");
    Sd && Gi.createRoot(Sd).render(g.jsx(oe.StrictMode, {
        children: g.jsx(R0, {})
    }));
})();
export { j0 as a, z0 as c, dh as g, __tla };
