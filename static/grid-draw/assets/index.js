let t0, e0, Xm;
let __tla = (async ()=>{
    function Ym(e, t) {
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
    e0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    Xm = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    t0 = function(e) {
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
    var cd = {
        exports: {}
    }, Fl = {}, dd = {
        exports: {}
    }, G = {};
    var ho = Symbol.for("react.element"), Zm = Symbol.for("react.portal"), Jm = Symbol.for("react.fragment"), qm = Symbol.for("react.strict_mode"), eh = Symbol.for("react.profiler"), th = Symbol.for("react.provider"), nh = Symbol.for("react.context"), rh = Symbol.for("react.forward_ref"), oh = Symbol.for("react.suspense"), lh = Symbol.for("react.memo"), ih = Symbol.for("react.lazy"), ku = Symbol.iterator;
    function sh(e) {
        return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var fd = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, pd = Object.assign, md = {};
    function gr(e, t, n) {
        this.props = e, this.context = t, this.refs = md, this.updater = n || fd;
    }
    gr.prototype.isReactComponent = {};
    gr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    gr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function hd() {}
    hd.prototype = gr.prototype;
    function Fs(e, t, n) {
        this.props = e, this.context = t, this.refs = md, this.updater = n || fd;
    }
    var $s = Fs.prototype = new hd;
    $s.constructor = Fs;
    pd($s, gr.prototype);
    $s.isPureReactComponent = !0;
    var Su = Array.isArray, gd = Object.prototype.hasOwnProperty, Us = {
        current: null
    }, yd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function vd(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)gd.call(t, r) && !yd.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: ho,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Us.current
        };
    }
    function ah(e, t) {
        return {
            $$typeof: ho,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Bs(e) {
        return typeof e == "object" && e !== null && e.$$typeof === ho;
    }
    function uh(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var _u = /\/+/g;
    function di(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? uh("" + e.key) : t.toString(36);
    }
    function Zo(e, t, n, r, o) {
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
                    case ho:
                    case Zm:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + di(i, 0) : r, Su(o) ? (n = "", e != null && (n = e.replace(_u, "$&/") + "/"), Zo(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Bs(o) && (o = ah(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(_u, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Su(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + di(l, s);
            i += Zo(l, t, n, a, o);
        }
        else if (a = sh(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + di(l, s++), i += Zo(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Io(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return Zo(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function ch(e) {
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
    }, Jo = {
        transition: null
    }, dh = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: Jo,
        ReactCurrentOwner: Us
    };
    function xd() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    G.Children = {
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
            if (!Bs(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    G.Component = gr;
    G.Fragment = Jm;
    G.Profiler = eh;
    G.PureComponent = Fs;
    G.StrictMode = qm;
    G.Suspense = oh;
    G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dh;
    G.act = xd;
    G.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = pd({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Us.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)gd.call(t, a) && !yd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: ho,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    G.createContext = function(e) {
        return e = {
            $$typeof: nh,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: th,
            _context: e
        }, e.Consumer = e;
    };
    G.createElement = vd;
    G.createFactory = function(e) {
        var t = vd.bind(null, e);
        return t.type = e, t;
    };
    G.createRef = function() {
        return {
            current: null
        };
    };
    G.forwardRef = function(e) {
        return {
            $$typeof: rh,
            render: e
        };
    };
    G.isValidElement = Bs;
    G.lazy = function(e) {
        return {
            $$typeof: ih,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: ch
        };
    };
    G.memo = function(e, t) {
        return {
            $$typeof: lh,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    G.startTransition = function(e) {
        var t = Jo.transition;
        Jo.transition = {};
        try {
            e();
        } finally{
            Jo.transition = t;
        }
    };
    G.unstable_act = xd;
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
    dd.exports = G;
    var E = dd.exports;
    const re = Xm(E), wd = Ym({
        __proto__: null,
        default: re
    }, [
        E
    ]);
    var fh = E, ph = Symbol.for("react.element"), mh = Symbol.for("react.fragment"), hh = Object.prototype.hasOwnProperty, gh = fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, yh = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function kd(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)hh.call(t, r) && !yh.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: ph,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: gh.current
        };
    }
    Fl.Fragment = mh;
    Fl.jsx = kd;
    Fl.jsxs = kd;
    cd.exports = Fl;
    var h = cd.exports, $i = {}, Sd = {
        exports: {}
    }, Ye = {}, _d = {
        exports: {}
    }, Cd = {};
    (function(e) {
        function t(P, A) {
            var z = P.length;
            P.push(A);
            e: for(; 0 < z;){
                var D = z - 1 >>> 1, ne = P[D];
                if (0 < o(ne, A)) P[D] = A, P[z] = ne, z = D;
                else break e;
            }
        }
        function n(P) {
            return P.length === 0 ? null : P[0];
        }
        function r(P) {
            if (P.length === 0) return null;
            var A = P[0], z = P.pop();
            if (z !== A) {
                P[0] = z;
                e: for(var D = 0, ne = P.length, vt = ne >>> 1; D < vt;){
                    var De = 2 * (D + 1) - 1, ae = P[De], Z = De + 1, Je = P[Z];
                    if (0 > o(ae, z)) Z < ne && 0 > o(Je, ae) ? (P[D] = Je, P[Z] = z, D = Z) : (P[D] = ae, P[De] = z, D = De);
                    else if (Z < ne && 0 > o(Je, z)) P[D] = Je, P[Z] = z, D = Z;
                    else break e;
                }
            }
            return A;
        }
        function o(P, A) {
            var z = P.sortIndex - A.sortIndex;
            return z !== 0 ? z : P.id - A.id;
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
        var a = [], u = [], c = 1, f = null, d = 3, x = !1, v = !1, m = !1, k = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, g = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function p(P) {
            for(var A = n(u); A !== null;){
                if (A.callback === null) r(u);
                else if (A.startTime <= P) r(u), A.sortIndex = A.expirationTime, t(a, A);
                else break;
                A = n(u);
            }
        }
        function S(P) {
            if (m = !1, p(P), !v) if (n(a) !== null) v = !0, X(N);
            else {
                var A = n(u);
                A !== null && Oe(S, A.startTime - P);
            }
        }
        function N(P, A) {
            v = !1, m && (m = !1, y(C), C = -1), x = !0;
            var z = d;
            try {
                for(p(A), f = n(a); f !== null && (!(f.expirationTime > A) || P && !he());){
                    var D = f.callback;
                    if (typeof D == "function") {
                        f.callback = null, d = f.priorityLevel;
                        var ne = D(f.expirationTime <= A);
                        A = e.unstable_now(), typeof ne == "function" ? f.callback = ne : f === n(a) && r(a), p(A);
                    } else r(a);
                    f = n(a);
                }
                if (f !== null) var vt = !0;
                else {
                    var De = n(u);
                    De !== null && Oe(S, De.startTime - A), vt = !1;
                }
                return vt;
            } finally{
                f = null, d = z, x = !1;
            }
        }
        var R = !1, j = null, C = -1, B = 5, $ = -1;
        function he() {
            return !(e.unstable_now() - $ < B);
        }
        function ye() {
            if (j !== null) {
                var P = e.unstable_now();
                $ = P;
                var A = !0;
                try {
                    A = j(!0, P);
                } finally{
                    A ? Ve() : (R = !1, j = null);
                }
            } else R = !1;
        }
        var Ve;
        if (typeof g == "function") Ve = function() {
            g(ye);
        };
        else if (typeof MessageChannel < "u") {
            var yt = new MessageChannel, Ze = yt.port2;
            yt.port1.onmessage = ye, Ve = function() {
                Ze.postMessage(null);
            };
        } else Ve = function() {
            k(ye, 0);
        };
        function X(P) {
            j = P, R || (R = !0, Ve());
        }
        function Oe(P, A) {
            C = k(function() {
                P(e.unstable_now());
            }, A);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
            P.callback = null;
        }, e.unstable_continueExecution = function() {
            v || x || (v = !0, X(N));
        }, e.unstable_forceFrameRate = function(P) {
            0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < P ? Math.floor(1e3 / P) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return d;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(P) {
            switch(d){
                case 1:
                case 2:
                case 3:
                    var A = 3;
                    break;
                default:
                    A = d;
            }
            var z = d;
            d = A;
            try {
                return P();
            } finally{
                d = z;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, A) {
            switch(P){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3;
            }
            var z = d;
            d = P;
            try {
                return A();
            } finally{
                d = z;
            }
        }, e.unstable_scheduleCallback = function(P, A, z) {
            var D = e.unstable_now();
            switch(typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? D + z : D) : z = D, P){
                case 1:
                    var ne = -1;
                    break;
                case 2:
                    ne = 250;
                    break;
                case 5:
                    ne = 1073741823;
                    break;
                case 4:
                    ne = 1e4;
                    break;
                default:
                    ne = 5e3;
            }
            return ne = z + ne, P = {
                id: c++,
                callback: A,
                priorityLevel: P,
                startTime: z,
                expirationTime: ne,
                sortIndex: -1
            }, z > D ? (P.sortIndex = z, t(u, P), n(a) === null && P === n(u) && (m ? (y(C), C = -1) : m = !0, Oe(S, z - D))) : (P.sortIndex = ne, t(a, P), v || x || (v = !0, X(N))), P;
        }, e.unstable_shouldYield = he, e.unstable_wrapCallback = function(P) {
            var A = d;
            return function() {
                var z = d;
                d = A;
                try {
                    return P.apply(this, arguments);
                } finally{
                    d = z;
                }
            };
        };
    })(Cd);
    _d.exports = Cd;
    var vh = _d.exports;
    var xh = E, Qe = vh;
    function T(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Ed = new Set, Qr = {};
    function Ln(e, t) {
        ar(e, t), ar(e + "Capture", t);
    }
    function ar(e, t) {
        for(Qr[e] = t, e = 0; e < t.length; e++)Ed.add(t[e]);
    }
    var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ui = Object.prototype.hasOwnProperty, wh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Cu = {}, Eu = {};
    function kh(e) {
        return Ui.call(Eu, e) ? !0 : Ui.call(Cu, e) ? !1 : wh.test(e) ? Eu[e] = !0 : (Cu[e] = !0, !1);
    }
    function Sh(e, t, n, r) {
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
        if (t === null || typeof t > "u" || Sh(e, t, n, r)) return !0;
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
    function be(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var Ne = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Ne[e] = new be(e, 0, !1, e, null, !1, !1);
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
        Ne[t] = new be(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        Ne[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        Ne[e] = new be(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Ne[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        Ne[e] = new be(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        Ne[e] = new be(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        Ne[e] = new be(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        Ne[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Vs = /[\-:]([a-z])/g;
    function Ws(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Vs, Ws);
        Ne[t] = new be(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Vs, Ws);
        Ne[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Vs, Ws);
        Ne[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        Ne[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Ne.xlinkHref = new be("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        Ne[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Gs(e, t, n, r) {
        var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_h(t, n, o, r) && (n = null), r || o === null ? kh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var bt = xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, jo = Symbol.for("react.element"), Bn = Symbol.for("react.portal"), Vn = Symbol.for("react.fragment"), Hs = Symbol.for("react.strict_mode"), Bi = Symbol.for("react.profiler"), Nd = Symbol.for("react.provider"), Td = Symbol.for("react.context"), Ks = Symbol.for("react.forward_ref"), Vi = Symbol.for("react.suspense"), Wi = Symbol.for("react.suspense_list"), Qs = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), zd = Symbol.for("react.offscreen"), Nu = Symbol.iterator;
    function Cr(e) {
        return e === null || typeof e != "object" ? null : (e = Nu && e[Nu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var se = Object.assign, fi;
    function br(e) {
        if (fi === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            fi = t && t[1] || "";
        }
        return `
` + fi + e;
    }
    var pi = !1;
    function mi(e, t) {
        if (!e || pi) return "";
        pi = !0;
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
            pi = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? br(e) : "";
    }
    function Ch(e) {
        switch(e.tag){
            case 5:
                return br(e.type);
            case 16:
                return br("Lazy");
            case 13:
                return br("Suspense");
            case 19:
                return br("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = mi(e.type, !1), e;
            case 11:
                return e = mi(e.type.render, !1), e;
            case 1:
                return e = mi(e.type, !0), e;
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
            case Bn:
                return "Portal";
            case Bi:
                return "Profiler";
            case Hs:
                return "StrictMode";
            case Vi:
                return "Suspense";
            case Wi:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Td:
                return (e.displayName || "Context") + ".Consumer";
            case Nd:
                return (e._context.displayName || "Context") + ".Provider";
            case Ks:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Qs:
                return t = e.displayName || null, t !== null ? t : Gi(e.type) || "Memo";
            case Wt:
                t = e._payload, e = e._init;
                try {
                    return Gi(e(t));
                } catch  {}
        }
        return null;
    }
    function Eh(e) {
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
                return t === Hs ? "StrictMode" : "Mode";
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
    function ln(e) {
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
    function Rd(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Nh(e) {
        var t = Rd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Po(e) {
        e._valueTracker || (e._valueTracker = Nh(e));
    }
    function Id(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Rd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function fl(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Hi(e, t) {
        var n = t.checked;
        return se({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Tu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = ln(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function jd(e, t) {
        t = t.checked, t != null && Gs(e, "checked", t, !1);
    }
    function Ki(e, t) {
        jd(e, t);
        var n = ln(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Qi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Qi(e, t.type, ln(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function zu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Qi(e, t, n) {
        (t !== "number" || fl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Or = Array.isArray;
    function nr(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + ln(n), t = null, o = 0; o < e.length; o++){
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
        if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
        return se({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Ru(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(T(92));
                if (Or(n)) {
                    if (1 < n.length) throw Error(T(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: ln(n)
        };
    }
    function Pd(e, t) {
        var n = ln(t.value), r = ln(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Iu(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Md(e) {
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
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Md(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Mo, Ld = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Mo = Mo || document.createElement("div"), Mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mo.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function Yr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var Fr = {
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
    }, Th = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Fr).forEach(function(e) {
        Th.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Fr[t] = Fr[e];
        });
    });
    function bd(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fr.hasOwnProperty(e) && Fr[e] ? ("" + t).trim() : t + "px";
    }
    function Od(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = bd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var zh = se({
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
            if (zh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(T(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(T(62));
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
    function Ys(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var es = null, rr = null, or = null;
    function ju(e) {
        if (e = vo(e)) {
            if (typeof es != "function") throw Error(T(280));
            var t = e.stateNode;
            t && (t = Wl(t), es(e.stateNode, e.type, t));
        }
    }
    function Dd(e) {
        rr ? or ? or.push(e) : or = [
            e
        ] : rr = e;
    }
    function Ad() {
        if (rr) {
            var e = rr, t = or;
            if (or = rr = null, ju(e), t) for(e = 0; e < t.length; e++)ju(t[e]);
        }
    }
    function Fd(e, t) {
        return e(t);
    }
    function $d() {}
    var hi = !1;
    function Ud(e, t, n) {
        if (hi) return e(t, n);
        hi = !0;
        try {
            return Fd(e, t, n);
        } finally{
            hi = !1, (rr !== null || or !== null) && ($d(), Ad());
        }
    }
    function Xr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Wl(n);
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
    var ts = !1;
    if (jt) try {
        var Er = {};
        Object.defineProperty(Er, "passive", {
            get: function() {
                ts = !0;
            }
        }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
    } catch  {
        ts = !1;
    }
    function Rh(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (c) {
            this.onError(c);
        }
    }
    var $r = !1, pl = null, ml = !1, ns = null, Ih = {
        onError: function(e) {
            $r = !0, pl = e;
        }
    };
    function jh(e, t, n, r, o, l, i, s, a) {
        $r = !1, pl = null, Rh.apply(Ih, arguments);
    }
    function Ph(e, t, n, r, o, l, i, s, a) {
        if (jh.apply(this, arguments), $r) {
            if ($r) {
                var u = pl;
                $r = !1, pl = null;
            } else throw Error(T(198));
            ml || (ml = !0, ns = u);
        }
    }
    function bn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Bd(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Pu(e) {
        if (bn(e) !== e) throw Error(T(188));
    }
    function Mh(e) {
        var t = e.alternate;
        if (!t) {
            if (t = bn(e), t === null) throw Error(T(188));
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
                    if (l === n) return Pu(o), e;
                    if (l === r) return Pu(o), t;
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
    function Vd(e) {
        return e = Mh(e), e !== null ? Wd(e) : null;
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
    var Gd = Qe.unstable_scheduleCallback, Mu = Qe.unstable_cancelCallback, Lh = Qe.unstable_shouldYield, bh = Qe.unstable_requestPaint, me = Qe.unstable_now, Oh = Qe.unstable_getCurrentPriorityLevel, Xs = Qe.unstable_ImmediatePriority, Hd = Qe.unstable_UserBlockingPriority, hl = Qe.unstable_NormalPriority, Dh = Qe.unstable_LowPriority, Kd = Qe.unstable_IdlePriority, $l = null, St = null;
    function Ah(e) {
        if (St && typeof St.onCommitFiberRoot == "function") try {
            St.onCommitFiberRoot($l, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var mt = Math.clz32 ? Math.clz32 : Uh, Fh = Math.log, $h = Math.LN2;
    function Uh(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Fh(e) / $h | 0) | 0;
    }
    var Lo = 64, bo = 4194304;
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
    function gl(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = Dr(s) : (l &= i, l !== 0 && (r = Dr(l)));
        } else i = n & ~o, i !== 0 ? r = Dr(i) : l !== 0 && (r = Dr(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - mt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function Bh(e, t) {
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
    function Vh(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - mt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = Bh(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function rs(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Qd() {
        var e = Lo;
        return Lo <<= 1, !(Lo & 4194240) && (Lo = 64), e;
    }
    function gi(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function go(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - mt(t), e[t] = n;
    }
    function Wh(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - mt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function Zs(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - mt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var Y = 0;
    function Yd(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Xd, Js, Zd, Jd, qd, os = !1, Oo = [], Zt = null, Jt = null, qt = null, Zr = new Map, Jr = new Map, Ht = [], Gh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Lu(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Zt = null;
                break;
            case "dragenter":
            case "dragleave":
                Jt = null;
                break;
            case "mouseover":
            case "mouseout":
                qt = null;
                break;
            case "pointerover":
            case "pointerout":
                Zr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Jr.delete(t.pointerId);
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
        }, t !== null && (t = vo(t), t !== null && Js(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Hh(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Zt = Nr(Zt, e, t, n, r, o), !0;
            case "dragenter":
                return Jt = Nr(Jt, e, t, n, r, o), !0;
            case "mouseover":
                return qt = Nr(qt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Zr.set(l, Nr(Zr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Jr.set(l, Nr(Jr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function ef(e) {
        var t = _n(e.target);
        if (t !== null) {
            var n = bn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Bd(n), t !== null) {
                        e.blockedOn = t, qd(e.priority, function() {
                            Zd(n);
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
    function qo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ls(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                qi = r, n.target.dispatchEvent(r), qi = null;
            } else return t = vo(n), t !== null && Js(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function bu(e, t, n) {
        qo(e) && n.delete(t);
    }
    function Kh() {
        os = !1, Zt !== null && qo(Zt) && (Zt = null), Jt !== null && qo(Jt) && (Jt = null), qt !== null && qo(qt) && (qt = null), Zr.forEach(bu), Jr.forEach(bu);
    }
    function Tr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, os || (os = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Kh)));
    }
    function qr(e) {
        function t(o) {
            return Tr(o, e);
        }
        if (0 < Oo.length) {
            Tr(Oo[0], e);
            for(var n = 1; n < Oo.length; n++){
                var r = Oo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Zt !== null && Tr(Zt, e), Jt !== null && Tr(Jt, e), qt !== null && Tr(qt, e), Zr.forEach(t), Jr.forEach(t), n = 0; n < Ht.length; n++)r = Ht[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Ht.length && (n = Ht[0], n.blockedOn === null);)ef(n), n.blockedOn === null && Ht.shift();
    }
    var lr = bt.ReactCurrentBatchConfig, yl = !0;
    function Qh(e, t, n, r) {
        var o = Y, l = lr.transition;
        lr.transition = null;
        try {
            Y = 1, qs(e, t, n, r);
        } finally{
            Y = o, lr.transition = l;
        }
    }
    function Yh(e, t, n, r) {
        var o = Y, l = lr.transition;
        lr.transition = null;
        try {
            Y = 4, qs(e, t, n, r);
        } finally{
            Y = o, lr.transition = l;
        }
    }
    function qs(e, t, n, r) {
        if (yl) {
            var o = ls(e, t, n, r);
            if (o === null) Ni(e, t, r, vl, n), Lu(e, r);
            else if (Hh(o, e, t, n, r)) r.stopPropagation();
            else if (Lu(e, r), t & 4 && -1 < Gh.indexOf(e)) {
                for(; o !== null;){
                    var l = vo(o);
                    if (l !== null && Xd(l), l = ls(e, t, n, r), l === null && Ni(e, t, r, vl, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Ni(e, t, r, null, n);
        }
    }
    var vl = null;
    function ls(e, t, n, r) {
        if (vl = null, e = Ys(r), e = _n(e), e !== null) if (t = bn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Bd(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return vl = e, null;
    }
    function tf(e) {
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
                switch(Oh()){
                    case Xs:
                        return 1;
                    case Hd:
                        return 4;
                    case hl:
                    case Dh:
                        return 16;
                    case Kd:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Qt = null, ea = null, el = null;
    function nf() {
        if (el) return el;
        var e, t = ea, n = t.length, r, o = "value" in Qt ? Qt.value : Qt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return el = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function tl(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Do() {
        return !0;
    }
    function Ou() {
        return !1;
    }
    function Xe(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Do : Ou, this.isPropagationStopped = Ou, this;
        }
        return se(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Do);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Do);
            },
            persist: function() {},
            isPersistent: Do
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
    }, ta = Xe(yr), yo = se({}, yr, {
        view: 0,
        detail: 0
    }), Xh = Xe(yo), yi, vi, zr, Ul = se({}, yo, {
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
        getModifierState: na,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (yi = e.screenX - zr.screenX, vi = e.screenY - zr.screenY) : vi = yi = 0, zr = e), yi);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : vi;
        }
    }), Du = Xe(Ul), Zh = se({}, Ul, {
        dataTransfer: 0
    }), Jh = Xe(Zh), qh = se({}, yo, {
        relatedTarget: 0
    }), xi = Xe(qh), eg = se({}, yr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), tg = Xe(eg), ng = se({}, yr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), rg = Xe(ng), og = se({}, yr, {
        data: 0
    }), Au = Xe(og), lg = {
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
    }, ig = {
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
    }, sg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function ag(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = sg[e]) ? !!t[e] : !1;
    }
    function na() {
        return ag;
    }
    var ug = se({}, yo, {
        key: function(e) {
            if (e.key) {
                var t = lg[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = tl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ig[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: na,
        charCode: function(e) {
            return e.type === "keypress" ? tl(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? tl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), cg = Xe(ug), dg = se({}, Ul, {
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
    }), Fu = Xe(dg), fg = se({}, yo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: na
    }), pg = Xe(fg), mg = se({}, yr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), hg = Xe(mg), gg = se({}, Ul, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), yg = Xe(gg), vg = [
        9,
        13,
        27,
        32
    ], ra = jt && "CompositionEvent" in window, Ur = null;
    jt && "documentMode" in document && (Ur = document.documentMode);
    var xg = jt && "TextEvent" in window && !Ur, rf = jt && (!ra || Ur && 8 < Ur && 11 >= Ur), $u = " ", Uu = !1;
    function of(e, t) {
        switch(e){
            case "keyup":
                return vg.indexOf(t.keyCode) !== -1;
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
    function lf(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Wn = !1;
    function wg(e, t) {
        switch(e){
            case "compositionend":
                return lf(t);
            case "keypress":
                return t.which !== 32 ? null : (Uu = !0, $u);
            case "textInput":
                return e = t.data, e === $u && Uu ? null : e;
            default:
                return null;
        }
    }
    function kg(e, t) {
        if (Wn) return e === "compositionend" || !ra && of(e, t) ? (e = nf(), el = ea = Qt = null, Wn = !1, e) : null;
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
                return rf && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Sg = {
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
    function Bu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Sg[e.type] : t === "textarea";
    }
    function sf(e, t, n, r) {
        Dd(r), t = xl(t, "onChange"), 0 < t.length && (n = new ta("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Br = null, eo = null;
    function _g(e) {
        vf(e, 0);
    }
    function Bl(e) {
        var t = Kn(e);
        if (Id(t)) return e;
    }
    function Cg(e, t) {
        if (e === "change") return t;
    }
    var af = !1;
    if (jt) {
        var wi;
        if (jt) {
            var ki = "oninput" in document;
            if (!ki) {
                var Vu = document.createElement("div");
                Vu.setAttribute("oninput", "return;"), ki = typeof Vu.oninput == "function";
            }
            wi = ki;
        } else wi = !1;
        af = wi && (!document.documentMode || 9 < document.documentMode);
    }
    function Wu() {
        Br && (Br.detachEvent("onpropertychange", uf), eo = Br = null);
    }
    function uf(e) {
        if (e.propertyName === "value" && Bl(eo)) {
            var t = [];
            sf(t, eo, e, Ys(e)), Ud(_g, t);
        }
    }
    function Eg(e, t, n) {
        e === "focusin" ? (Wu(), Br = t, eo = n, Br.attachEvent("onpropertychange", uf)) : e === "focusout" && Wu();
    }
    function Ng(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bl(eo);
    }
    function Tg(e, t) {
        if (e === "click") return Bl(t);
    }
    function zg(e, t) {
        if (e === "input" || e === "change") return Bl(t);
    }
    function Rg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var gt = typeof Object.is == "function" ? Object.is : Rg;
    function to(e, t) {
        if (gt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Ui.call(t, o) || !gt(e[o], t[o])) return !1;
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
    function cf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function df() {
        for(var e = window, t = fl(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = fl(e.document);
        }
        return t;
    }
    function oa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Ig(e) {
        var t = df(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && cf(n.ownerDocument.documentElement, n)) {
            if (r !== null && oa(n)) {
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
    var jg = jt && "documentMode" in document && 11 >= document.documentMode, Gn = null, is = null, Vr = null, ss = !1;
    function Ku(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ss || Gn == null || Gn !== fl(r) || (r = Gn, "selectionStart" in r && oa(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Vr && to(Vr, r) || (Vr = r, r = xl(is, "onSelect"), 0 < r.length && (t = new ta("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Gn)));
    }
    function Ao(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Hn = {
        animationend: Ao("Animation", "AnimationEnd"),
        animationiteration: Ao("Animation", "AnimationIteration"),
        animationstart: Ao("Animation", "AnimationStart"),
        transitionend: Ao("Transition", "TransitionEnd")
    }, Si = {}, ff = {};
    jt && (ff = document.createElement("div").style, "AnimationEvent" in window || (delete Hn.animationend.animation, delete Hn.animationiteration.animation, delete Hn.animationstart.animation), "TransitionEvent" in window || delete Hn.transitionend.transition);
    function Vl(e) {
        if (Si[e]) return Si[e];
        if (!Hn[e]) return e;
        var t = Hn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in ff) return Si[e] = t[n];
        return e;
    }
    var pf = Vl("animationend"), mf = Vl("animationiteration"), hf = Vl("animationstart"), gf = Vl("transitionend"), yf = new Map, Qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function an(e, t) {
        yf.set(e, t), Ln(t, [
            e
        ]);
    }
    for(var _i = 0; _i < Qu.length; _i++){
        var Ci = Qu[_i], Pg = Ci.toLowerCase(), Mg = Ci[0].toUpperCase() + Ci.slice(1);
        an(Pg, "on" + Mg);
    }
    an(pf, "onAnimationEnd");
    an(mf, "onAnimationIteration");
    an(hf, "onAnimationStart");
    an("dblclick", "onDoubleClick");
    an("focusin", "onFocus");
    an("focusout", "onBlur");
    an(gf, "onTransitionEnd");
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
    var Ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Lg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ar));
    function Yu(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Ph(r, t, void 0, e), e.currentTarget = null;
    }
    function vf(e, t) {
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
        if (ml) throw e = ns, ml = !1, ns = null, e;
    }
    function ee(e, t) {
        var n = t[fs];
        n === void 0 && (n = t[fs] = new Set);
        var r = e + "__bubble";
        n.has(r) || (xf(t, e, 2, !1), n.add(r));
    }
    function Ei(e, t, n) {
        var r = 0;
        t && (r |= 4), xf(n, e, r, t);
    }
    var Fo = "_reactListening" + Math.random().toString(36).slice(2);
    function no(e) {
        if (!e[Fo]) {
            e[Fo] = !0, Ed.forEach(function(n) {
                n !== "selectionchange" && (Lg.has(n) || Ei(n, !1, e), Ei(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Fo] || (t[Fo] = !0, Ei("selectionchange", !1, t));
        }
    }
    function xf(e, t, n, r) {
        switch(tf(t)){
            case 1:
                var o = Qh;
                break;
            case 4:
                o = Yh;
                break;
            default:
                o = qs;
        }
        n = o.bind(null, t, n, e), o = void 0, !ts || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function Ni(e, t, n, r, o) {
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
                    if (i = _n(s), i === null) return;
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
            var u = l, c = Ys(n), f = [];
            e: {
                var d = yf.get(e);
                if (d !== void 0) {
                    var x = ta, v = e;
                    switch(e){
                        case "keypress":
                            if (tl(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            x = cg;
                            break;
                        case "focusin":
                            v = "focus", x = xi;
                            break;
                        case "focusout":
                            v = "blur", x = xi;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            x = xi;
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
                            x = Du;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            x = Jh;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            x = pg;
                            break;
                        case pf:
                        case mf:
                        case hf:
                            x = tg;
                            break;
                        case gf:
                            x = hg;
                            break;
                        case "scroll":
                            x = Xh;
                            break;
                        case "wheel":
                            x = yg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            x = rg;
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
                    var m = (t & 4) !== 0, k = !m && e === "scroll", y = m ? d !== null ? d + "Capture" : null : d;
                    m = [];
                    for(var g = u, p; g !== null;){
                        p = g;
                        var S = p.stateNode;
                        if (p.tag === 5 && S !== null && (p = S, y !== null && (S = Xr(g, y), S != null && m.push(ro(g, S, p)))), k) break;
                        g = g.return;
                    }
                    0 < m.length && (d = new x(d, v, null, n, c), f.push({
                        event: d,
                        listeners: m
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (d = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", d && n !== qi && (v = n.relatedTarget || n.fromElement) && (_n(v) || v[Pt])) break e;
                    if ((x || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = u, v = v ? _n(v) : null, v !== null && (k = bn(v), v !== k || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = u), x !== v)) {
                        if (m = Du, S = "onMouseLeave", y = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (m = Fu, S = "onPointerLeave", y = "onPointerEnter", g = "pointer"), k = x == null ? d : Kn(x), p = v == null ? d : Kn(v), d = new m(S, g + "leave", x, n, c), d.target = k, d.relatedTarget = p, S = null, _n(c) === u && (m = new m(y, g + "enter", v, n, c), m.target = p, m.relatedTarget = k, S = m), k = S, x && v) t: {
                            for(m = x, y = v, g = 0, p = m; p; p = $n(p))g++;
                            for(p = 0, S = y; S; S = $n(S))p++;
                            for(; 0 < g - p;)m = $n(m), g--;
                            for(; 0 < p - g;)y = $n(y), p--;
                            for(; g--;){
                                if (m === y || y !== null && m === y.alternate) break t;
                                m = $n(m), y = $n(y);
                            }
                            m = null;
                        }
                        else m = null;
                        x !== null && Xu(f, d, x, m, !1), v !== null && k !== null && Xu(f, k, v, m, !0);
                    }
                }
                e: {
                    if (d = u ? Kn(u) : window, x = d.nodeName && d.nodeName.toLowerCase(), x === "select" || x === "input" && d.type === "file") var N = Cg;
                    else if (Bu(d)) if (af) N = zg;
                    else {
                        N = Ng;
                        var R = Eg;
                    }
                    else (x = d.nodeName) && x.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (N = Tg);
                    if (N && (N = N(e, u))) {
                        sf(f, N, n, c);
                        break e;
                    }
                    R && R(e, d, u), e === "focusout" && (R = d._wrapperState) && R.controlled && d.type === "number" && Qi(d, "number", d.value);
                }
                switch(R = u ? Kn(u) : window, e){
                    case "focusin":
                        (Bu(R) || R.contentEditable === "true") && (Gn = R, is = u, Vr = null);
                        break;
                    case "focusout":
                        Vr = is = Gn = null;
                        break;
                    case "mousedown":
                        ss = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ss = !1, Ku(f, n, c);
                        break;
                    case "selectionchange":
                        if (jg) break;
                    case "keydown":
                    case "keyup":
                        Ku(f, n, c);
                }
                var j;
                if (ra) e: {
                    switch(e){
                        case "compositionstart":
                            var C = "onCompositionStart";
                            break e;
                        case "compositionend":
                            C = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            C = "onCompositionUpdate";
                            break e;
                    }
                    C = void 0;
                }
                else Wn ? of(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
                C && (rf && n.locale !== "ko" && (Wn || C !== "onCompositionStart" ? C === "onCompositionEnd" && Wn && (j = nf()) : (Qt = c, ea = "value" in Qt ? Qt.value : Qt.textContent, Wn = !0)), R = xl(u, C), 0 < R.length && (C = new Au(C, e, null, n, c), f.push({
                    event: C,
                    listeners: R
                }), j ? C.data = j : (j = lf(n), j !== null && (C.data = j)))), (j = xg ? wg(e, n) : kg(e, n)) && (u = xl(u, "onBeforeInput"), 0 < u.length && (c = new Au("onBeforeInput", "beforeinput", null, n, c), f.push({
                    event: c,
                    listeners: u
                }), c.data = j));
            }
            vf(f, t);
        });
    }
    function ro(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function xl(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Xr(e, n), l != null && r.unshift(ro(e, l, o)), l = Xr(e, t), l != null && r.push(ro(e, l, o))), e = e.return;
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
            s.tag === 5 && u !== null && (s = u, o ? (a = Xr(n, l), a != null && i.unshift(ro(n, a, s))) : o || (a = Xr(n, l), a != null && i.push(ro(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var bg = /\r\n?/g, Og = /\u0000|\uFFFD/g;
    function Zu(e) {
        return (typeof e == "string" ? e : "" + e).replace(bg, `
`).replace(Og, "");
    }
    function $o(e, t, n) {
        if (t = Zu(t), Zu(e) !== t && n) throw Error(T(425));
    }
    function wl() {}
    var as = null, us = null;
    function cs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ds = typeof setTimeout == "function" ? setTimeout : void 0, Dg = typeof clearTimeout == "function" ? clearTimeout : void 0, Ju = typeof Promise == "function" ? Promise : void 0, Ag = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ju < "u" ? function(e) {
        return Ju.resolve(null).then(e).catch(Fg);
    } : ds;
    function Fg(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Ti(e, t) {
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
    function en(e) {
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
    var vr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + vr, oo = "__reactProps$" + vr, Pt = "__reactContainer$" + vr, fs = "__reactEvents$" + vr, $g = "__reactListeners$" + vr, Ug = "__reactHandles$" + vr;
    function _n(e) {
        var t = e[kt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Pt] || n[kt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = qu(e); e !== null;){
                    if (n = e[kt]) return n;
                    e = qu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function vo(e) {
        return e = e[kt] || e[Pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Kn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(T(33));
    }
    function Wl(e) {
        return e[oo] || null;
    }
    var ps = [], Qn = -1;
    function un(e) {
        return {
            current: e
        };
    }
    function te(e) {
        0 > Qn || (e.current = ps[Qn], ps[Qn] = null, Qn--);
    }
    function q(e, t) {
        Qn++, ps[Qn] = e.current, e.current = t;
    }
    var sn = {}, Ie = un(sn), $e = un(!1), Rn = sn;
    function ur(e, t) {
        var n = e.type.contextTypes;
        if (!n) return sn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Ue(e) {
        return e = e.childContextTypes, e != null;
    }
    function kl() {
        te($e), te(Ie);
    }
    function ec(e, t, n) {
        if (Ie.current !== sn) throw Error(T(168));
        q(Ie, t), q($e, n);
    }
    function wf(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(T(108, Eh(e) || "Unknown", o));
        return se({}, n, r);
    }
    function Sl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, Rn = Ie.current, q(Ie, e), q($e, $e.current), !0;
    }
    function tc(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(T(169));
        n ? (e = wf(e, t, Rn), r.__reactInternalMemoizedMergedChildContext = e, te($e), te(Ie), q(Ie, e)) : te($e), q($e, n);
    }
    var Tt = null, Gl = !1, zi = !1;
    function kf(e) {
        Tt === null ? Tt = [
            e
        ] : Tt.push(e);
    }
    function Bg(e) {
        Gl = !0, kf(e);
    }
    function cn() {
        if (!zi && Tt !== null) {
            zi = !0;
            var e = 0, t = Y;
            try {
                var n = Tt;
                for(Y = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Tt = null, Gl = !1;
            } catch (o) {
                throw Tt !== null && (Tt = Tt.slice(e + 1)), Gd(Xs, cn), o;
            } finally{
                Y = t, zi = !1;
            }
        }
        return null;
    }
    var Yn = [], Xn = 0, _l = null, Cl = 0, qe = [], et = 0, In = null, zt = 1, Rt = "";
    function wn(e, t) {
        Yn[Xn++] = Cl, Yn[Xn++] = _l, _l = e, Cl = t;
    }
    function Sf(e, t, n) {
        qe[et++] = zt, qe[et++] = Rt, qe[et++] = In, In = e;
        var r = zt;
        e = Rt;
        var o = 32 - mt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - mt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, zt = 1 << 32 - mt(t) + o | n << o | r, Rt = l + e;
        } else zt = 1 << l | n << o | r, Rt = e;
    }
    function la(e) {
        e.return !== null && (wn(e, 1), Sf(e, 1, 0));
    }
    function ia(e) {
        for(; e === _l;)_l = Yn[--Xn], Yn[Xn] = null, Cl = Yn[--Xn], Yn[Xn] = null;
        for(; e === In;)In = qe[--et], qe[et] = null, Rt = qe[--et], qe[et] = null, zt = qe[--et], qe[et] = null;
    }
    var Ke = null, He = null, oe = !1, ft = null;
    function _f(e, t) {
        var n = nt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function nc(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = en(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? {
                    id: zt,
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
    function ms(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function hs(e) {
        if (oe) {
            var t = He;
            if (t) {
                var n = t;
                if (!nc(e, t)) {
                    if (ms(e)) throw Error(T(418));
                    t = en(n.nextSibling);
                    var r = Ke;
                    t && nc(e, t) ? _f(r, n) : (e.flags = e.flags & -4097 | 2, oe = !1, Ke = e);
                }
            } else {
                if (ms(e)) throw Error(T(418));
                e.flags = e.flags & -4097 | 2, oe = !1, Ke = e;
            }
        }
    }
    function rc(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ke = e;
    }
    function Uo(e) {
        if (e !== Ke) return !1;
        if (!oe) return rc(e), oe = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !cs(e.type, e.memoizedProps)), t && (t = He)) {
            if (ms(e)) throw Cf(), Error(T(418));
            for(; t;)_f(e, t), t = en(t.nextSibling);
        }
        if (rc(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                He = en(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                He = null;
            }
        } else He = Ke ? en(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Cf() {
        for(var e = He; e;)e = en(e.nextSibling);
    }
    function cr() {
        He = Ke = null, oe = !1;
    }
    function sa(e) {
        ft === null ? ft = [
            e
        ] : ft.push(e);
    }
    var Vg = bt.ReactCurrentBatchConfig;
    function Rr(e, t, n) {
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
    function Bo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function oc(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Ef(e) {
        function t(y, g) {
            if (e) {
                var p = y.deletions;
                p === null ? (y.deletions = [
                    g
                ], y.flags |= 16) : p.push(g);
            }
        }
        function n(y, g) {
            if (!e) return null;
            for(; g !== null;)t(y, g), g = g.sibling;
            return null;
        }
        function r(y, g) {
            for(y = new Map; g !== null;)g.key !== null ? y.set(g.key, g) : y.set(g.index, g), g = g.sibling;
            return y;
        }
        function o(y, g) {
            return y = on(y, g), y.index = 0, y.sibling = null, y;
        }
        function l(y, g, p) {
            return y.index = p, e ? (p = y.alternate, p !== null ? (p = p.index, p < g ? (y.flags |= 2, g) : p) : (y.flags |= 2, g)) : (y.flags |= 1048576, g);
        }
        function i(y) {
            return e && y.alternate === null && (y.flags |= 2), y;
        }
        function s(y, g, p, S) {
            return g === null || g.tag !== 6 ? (g = bi(p, y.mode, S), g.return = y, g) : (g = o(g, p), g.return = y, g);
        }
        function a(y, g, p, S) {
            var N = p.type;
            return N === Vn ? c(y, g, p.props.children, S, p.key) : g !== null && (g.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Wt && oc(N) === g.type) ? (S = o(g, p.props), S.ref = Rr(y, g, p), S.return = y, S) : (S = al(p.type, p.key, p.props, null, y.mode, S), S.ref = Rr(y, g, p), S.return = y, S);
        }
        function u(y, g, p, S) {
            return g === null || g.tag !== 4 || g.stateNode.containerInfo !== p.containerInfo || g.stateNode.implementation !== p.implementation ? (g = Oi(p, y.mode, S), g.return = y, g) : (g = o(g, p.children || []), g.return = y, g);
        }
        function c(y, g, p, S, N) {
            return g === null || g.tag !== 7 ? (g = Tn(p, y.mode, S, N), g.return = y, g) : (g = o(g, p), g.return = y, g);
        }
        function f(y, g, p) {
            if (typeof g == "string" && g !== "" || typeof g == "number") return g = bi("" + g, y.mode, p), g.return = y, g;
            if (typeof g == "object" && g !== null) {
                switch(g.$$typeof){
                    case jo:
                        return p = al(g.type, g.key, g.props, null, y.mode, p), p.ref = Rr(y, null, g), p.return = y, p;
                    case Bn:
                        return g = Oi(g, y.mode, p), g.return = y, g;
                    case Wt:
                        var S = g._init;
                        return f(y, S(g._payload), p);
                }
                if (Or(g) || Cr(g)) return g = Tn(g, y.mode, p, null), g.return = y, g;
                Bo(y, g);
            }
            return null;
        }
        function d(y, g, p, S) {
            var N = g !== null ? g.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : s(y, g, "" + p, S);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case jo:
                        return p.key === N ? a(y, g, p, S) : null;
                    case Bn:
                        return p.key === N ? u(y, g, p, S) : null;
                    case Wt:
                        return N = p._init, d(y, g, N(p._payload), S);
                }
                if (Or(p) || Cr(p)) return N !== null ? null : c(y, g, p, S, null);
                Bo(y, p);
            }
            return null;
        }
        function x(y, g, p, S, N) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return y = y.get(p) || null, s(g, y, "" + S, N);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case jo:
                        return y = y.get(S.key === null ? p : S.key) || null, a(g, y, S, N);
                    case Bn:
                        return y = y.get(S.key === null ? p : S.key) || null, u(g, y, S, N);
                    case Wt:
                        var R = S._init;
                        return x(y, g, p, R(S._payload), N);
                }
                if (Or(S) || Cr(S)) return y = y.get(p) || null, c(g, y, S, N, null);
                Bo(g, S);
            }
            return null;
        }
        function v(y, g, p, S) {
            for(var N = null, R = null, j = g, C = g = 0, B = null; j !== null && C < p.length; C++){
                j.index > C ? (B = j, j = null) : B = j.sibling;
                var $ = d(y, j, p[C], S);
                if ($ === null) {
                    j === null && (j = B);
                    break;
                }
                e && j && $.alternate === null && t(y, j), g = l($, g, C), R === null ? N = $ : R.sibling = $, R = $, j = B;
            }
            if (C === p.length) return n(y, j), oe && wn(y, C), N;
            if (j === null) {
                for(; C < p.length; C++)j = f(y, p[C], S), j !== null && (g = l(j, g, C), R === null ? N = j : R.sibling = j, R = j);
                return oe && wn(y, C), N;
            }
            for(j = r(y, j); C < p.length; C++)B = x(j, y, C, p[C], S), B !== null && (e && B.alternate !== null && j.delete(B.key === null ? C : B.key), g = l(B, g, C), R === null ? N = B : R.sibling = B, R = B);
            return e && j.forEach(function(he) {
                return t(y, he);
            }), oe && wn(y, C), N;
        }
        function m(y, g, p, S) {
            var N = Cr(p);
            if (typeof N != "function") throw Error(T(150));
            if (p = N.call(p), p == null) throw Error(T(151));
            for(var R = N = null, j = g, C = g = 0, B = null, $ = p.next(); j !== null && !$.done; C++, $ = p.next()){
                j.index > C ? (B = j, j = null) : B = j.sibling;
                var he = d(y, j, $.value, S);
                if (he === null) {
                    j === null && (j = B);
                    break;
                }
                e && j && he.alternate === null && t(y, j), g = l(he, g, C), R === null ? N = he : R.sibling = he, R = he, j = B;
            }
            if ($.done) return n(y, j), oe && wn(y, C), N;
            if (j === null) {
                for(; !$.done; C++, $ = p.next())$ = f(y, $.value, S), $ !== null && (g = l($, g, C), R === null ? N = $ : R.sibling = $, R = $);
                return oe && wn(y, C), N;
            }
            for(j = r(y, j); !$.done; C++, $ = p.next())$ = x(j, y, C, $.value, S), $ !== null && (e && $.alternate !== null && j.delete($.key === null ? C : $.key), g = l($, g, C), R === null ? N = $ : R.sibling = $, R = $);
            return e && j.forEach(function(ye) {
                return t(y, ye);
            }), oe && wn(y, C), N;
        }
        function k(y, g, p, S) {
            if (typeof p == "object" && p !== null && p.type === Vn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case jo:
                        e: {
                            for(var N = p.key, R = g; R !== null;){
                                if (R.key === N) {
                                    if (N = p.type, N === Vn) {
                                        if (R.tag === 7) {
                                            n(y, R.sibling), g = o(R, p.props.children), g.return = y, y = g;
                                            break e;
                                        }
                                    } else if (R.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Wt && oc(N) === R.type) {
                                        n(y, R.sibling), g = o(R, p.props), g.ref = Rr(y, R, p), g.return = y, y = g;
                                        break e;
                                    }
                                    n(y, R);
                                    break;
                                } else t(y, R);
                                R = R.sibling;
                            }
                            p.type === Vn ? (g = Tn(p.props.children, y.mode, S, p.key), g.return = y, y = g) : (S = al(p.type, p.key, p.props, null, y.mode, S), S.ref = Rr(y, g, p), S.return = y, y = S);
                        }
                        return i(y);
                    case Bn:
                        e: {
                            for(R = p.key; g !== null;){
                                if (g.key === R) if (g.tag === 4 && g.stateNode.containerInfo === p.containerInfo && g.stateNode.implementation === p.implementation) {
                                    n(y, g.sibling), g = o(g, p.children || []), g.return = y, y = g;
                                    break e;
                                } else {
                                    n(y, g);
                                    break;
                                }
                                else t(y, g);
                                g = g.sibling;
                            }
                            g = Oi(p, y.mode, S), g.return = y, y = g;
                        }
                        return i(y);
                    case Wt:
                        return R = p._init, k(y, g, R(p._payload), S);
                }
                if (Or(p)) return v(y, g, p, S);
                if (Cr(p)) return m(y, g, p, S);
                Bo(y, p);
            }
            return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, g !== null && g.tag === 6 ? (n(y, g.sibling), g = o(g, p), g.return = y, y = g) : (n(y, g), g = bi(p, y.mode, S), g.return = y, y = g), i(y)) : n(y, g);
        }
        return k;
    }
    var dr = Ef(!0), Nf = Ef(!1), El = un(null), Nl = null, Zn = null, aa = null;
    function ua() {
        aa = Zn = Nl = null;
    }
    function ca(e) {
        var t = El.current;
        te(El), e._currentValue = t;
    }
    function gs(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function ir(e, t) {
        Nl = e, aa = Zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
    }
    function ot(e) {
        var t = e._currentValue;
        if (aa !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Zn === null) {
            if (Nl === null) throw Error(T(308));
            Zn = e, Nl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Zn = Zn.next = e;
        return t;
    }
    var Cn = null;
    function da(e) {
        Cn === null ? Cn = [
            e
        ] : Cn.push(e);
    }
    function Tf(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, da(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mt(e, r);
    }
    function Mt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Gt = !1;
    function fa(e) {
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
    function zf(e, t) {
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
    function tn(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, K & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, da(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mt(e, n);
    }
    function nl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Zs(e, n);
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
    function Tl(e, t, n, r) {
        var o = e.updateQueue;
        Gt = !1;
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
                        var v = e, m = s;
                        switch(d = t, x = n, m.tag){
                            case 1:
                                if (v = m.payload, typeof v == "function") {
                                    f = v.call(x, f, d);
                                    break e;
                                }
                                f = v;
                                break e;
                            case 3:
                                v.flags = v.flags & -65537 | 128;
                            case 0:
                                if (v = m.payload, d = typeof v == "function" ? v.call(x, f, d) : v, d == null) break e;
                                f = se({}, f, d);
                                break e;
                            case 2:
                                Gt = !0;
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
    function ic(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(T(191, o));
                o.call(r);
            }
        }
    }
    var xo = {}, _t = un(xo), lo = un(xo), io = un(xo);
    function En(e) {
        if (e === xo) throw Error(T(174));
        return e;
    }
    function pa(e, t) {
        switch(q(io, t), q(lo, e), q(_t, xo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Xi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Xi(t, e);
        }
        te(_t), q(_t, t);
    }
    function fr() {
        te(_t), te(lo), te(io);
    }
    function Rf(e) {
        En(io.current);
        var t = En(_t.current), n = Xi(t, e.type);
        t !== n && (q(lo, e), q(_t, n));
    }
    function ma(e) {
        lo.current === e && (te(_t), te(lo));
    }
    var le = un(0);
    function zl(e) {
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
    var Ri = [];
    function ha() {
        for(var e = 0; e < Ri.length; e++)Ri[e]._workInProgressVersionPrimary = null;
        Ri.length = 0;
    }
    var rl = bt.ReactCurrentDispatcher, Ii = bt.ReactCurrentBatchConfig, jn = 0, ie = null, xe = null, ke = null, Rl = !1, Wr = !1, so = 0, Wg = 0;
    function Te() {
        throw Error(T(321));
    }
    function ga(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!gt(e[n], t[n])) return !1;
        return !0;
    }
    function ya(e, t, n, r, o, l) {
        if (jn = l, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? Qg : Yg, e = n(r, o), Wr) {
            l = 0;
            do {
                if (Wr = !1, so = 0, 25 <= l) throw Error(T(301));
                l += 1, ke = xe = null, t.updateQueue = null, rl.current = Xg, e = n(r, o);
            }while (Wr);
        }
        if (rl.current = Il, t = xe !== null && xe.next !== null, jn = 0, ke = xe = ie = null, Rl = !1, t) throw Error(T(300));
        return e;
    }
    function va() {
        var e = so !== 0;
        return so = 0, e;
    }
    function wt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ke === null ? ie.memoizedState = ke = e : ke = ke.next = e, ke;
    }
    function lt() {
        if (xe === null) {
            var e = ie.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = xe.next;
        var t = ke === null ? ie.memoizedState : ke.next;
        if (t !== null) ke = t, xe = e;
        else {
            if (e === null) throw Error(T(310));
            xe = e, e = {
                memoizedState: xe.memoizedState,
                baseState: xe.baseState,
                baseQueue: xe.baseQueue,
                queue: xe.queue,
                next: null
            }, ke === null ? ie.memoizedState = ke = e : ke = ke.next = e;
        }
        return ke;
    }
    function ao(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function ji(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(T(311));
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
                if ((jn & c) === c) a !== null && (a = a.next = {
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
            a === null ? i = r : a.next = s, gt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
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
    function Pi(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(T(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            gt(l, t.memoizedState) || (Fe = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function If() {}
    function jf(e, t) {
        var n = ie, r = lt(), o = t(), l = !gt(r.memoizedState, o);
        if (l && (r.memoizedState = o, Fe = !0), r = r.queue, xa(Lf.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || ke !== null && ke.memoizedState.tag & 1) {
            if (n.flags |= 2048, uo(9, Mf.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(T(349));
            jn & 30 || Pf(n, t, o);
        }
        return o;
    }
    function Pf(e, t, n) {
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
    function Mf(e, t, n, r) {
        t.value = n, t.getSnapshot = r, bf(t) && Of(e);
    }
    function Lf(e, t, n) {
        return n(function() {
            bf(t) && Of(e);
        });
    }
    function bf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !gt(e, n);
        } catch  {
            return !0;
        }
    }
    function Of(e) {
        var t = Mt(e, 1);
        t !== null && ht(t, e, 1, -1);
    }
    function sc(e) {
        var t = wt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ao,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Kg.bind(null, ie, e), [
            t.memoizedState,
            e
        ];
    }
    function uo(e, t, n, r) {
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
    function Df() {
        return lt().memoizedState;
    }
    function ol(e, t, n, r) {
        var o = wt();
        ie.flags |= e, o.memoizedState = uo(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Hl(e, t, n, r) {
        var o = lt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (xe !== null) {
            var i = xe.memoizedState;
            if (l = i.destroy, r !== null && ga(r, i.deps)) {
                o.memoizedState = uo(t, n, l, r);
                return;
            }
        }
        ie.flags |= e, o.memoizedState = uo(1 | t, n, l, r);
    }
    function ac(e, t) {
        return ol(8390656, 8, e, t);
    }
    function xa(e, t) {
        return Hl(2048, 8, e, t);
    }
    function Af(e, t) {
        return Hl(4, 2, e, t);
    }
    function Ff(e, t) {
        return Hl(4, 4, e, t);
    }
    function $f(e, t) {
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
        ]) : null, Hl(4, 4, $f.bind(null, t, e), n);
    }
    function wa() {}
    function Bf(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ga(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Vf(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ga(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Wf(e, t, n) {
        return jn & 21 ? (gt(n, t) || (n = Qd(), ie.lanes |= n, Pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
    }
    function Gg(e, t) {
        var n = Y;
        Y = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Ii.transition;
        Ii.transition = {};
        try {
            e(!1), t();
        } finally{
            Y = n, Ii.transition = r;
        }
    }
    function Gf() {
        return lt().memoizedState;
    }
    function Hg(e, t, n) {
        var r = rn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Hf(e)) Kf(t, n);
        else if (n = Tf(e, t, n, r), n !== null) {
            var o = Me();
            ht(n, e, r, o), Qf(n, t, r);
        }
    }
    function Kg(e, t, n) {
        var r = rn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Hf(e)) Kf(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, gt(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, da(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Tf(e, t, o, r), n !== null && (o = Me(), ht(n, e, r, o), Qf(n, t, r));
        }
    }
    function Hf(e) {
        var t = e.alternate;
        return e === ie || t !== null && t === ie;
    }
    function Kf(e, t) {
        Wr = Rl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Qf(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Zs(e, n);
        }
    }
    var Il = {
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
    }, Qg = {
        readContext: ot,
        useCallback: function(e, t) {
            return wt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: ot,
        useEffect: ac,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, ol(4194308, 4, $f.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return ol(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return ol(4, 2, e, t);
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
            }, r.queue = e, e = e.dispatch = Hg.bind(null, ie, e), [
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
        useState: sc,
        useDebugValue: wa,
        useDeferredValue: function(e) {
            return wt().memoizedState = e;
        },
        useTransition: function() {
            var e = sc(!1), t = e[0];
            return e = Gg.bind(null, e[1]), wt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ie, o = wt();
            if (oe) {
                if (n === void 0) throw Error(T(407));
                n = n();
            } else {
                if (n = t(), Se === null) throw Error(T(349));
                jn & 30 || Pf(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, ac(Lf.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, uo(9, Mf.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = wt(), t = Se.identifierPrefix;
            if (oe) {
                var n = Rt, r = zt;
                n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = so++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Wg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Yg = {
        readContext: ot,
        useCallback: Bf,
        useContext: ot,
        useEffect: xa,
        useImperativeHandle: Uf,
        useInsertionEffect: Af,
        useLayoutEffect: Ff,
        useMemo: Vf,
        useReducer: ji,
        useRef: Df,
        useState: function() {
            return ji(ao);
        },
        useDebugValue: wa,
        useDeferredValue: function(e) {
            var t = lt();
            return Wf(t, xe.memoizedState, e);
        },
        useTransition: function() {
            var e = ji(ao)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: If,
        useSyncExternalStore: jf,
        useId: Gf,
        unstable_isNewReconciler: !1
    }, Xg = {
        readContext: ot,
        useCallback: Bf,
        useContext: ot,
        useEffect: xa,
        useImperativeHandle: Uf,
        useInsertionEffect: Af,
        useLayoutEffect: Ff,
        useMemo: Vf,
        useReducer: Pi,
        useRef: Df,
        useState: function() {
            return Pi(ao);
        },
        useDebugValue: wa,
        useDeferredValue: function(e) {
            var t = lt();
            return xe === null ? t.memoizedState = e : Wf(t, xe.memoizedState, e);
        },
        useTransition: function() {
            var e = Pi(ao)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: If,
        useSyncExternalStore: jf,
        useId: Gf,
        unstable_isNewReconciler: !1
    };
    function ct(e, t) {
        if (e && e.defaultProps) {
            t = se({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function ys(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Kl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? bn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = rn(e), l = It(r, o);
            l.payload = t, n != null && (l.callback = n), t = tn(e, l, o), t !== null && (ht(t, e, o, r), nl(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = rn(e), l = It(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = tn(e, l, o), t !== null && (ht(t, e, o, r), nl(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Me(), r = rn(e), o = It(n, r);
            o.tag = 2, t != null && (o.callback = t), t = tn(e, o, r), t !== null && (ht(t, e, r, n), nl(t, e, r));
        }
    };
    function uc(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !to(n, r) || !to(o, l) : !0;
    }
    function Yf(e, t, n) {
        var r = !1, o = sn, l = t.contextType;
        return typeof l == "object" && l !== null ? l = ot(l) : (o = Ue(t) ? Rn : Ie.current, r = t.contextTypes, l = (r = r != null) ? ur(e, o) : sn), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Kl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function cc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Kl.enqueueReplaceState(t, t.state, null);
    }
    function vs(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, fa(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = ot(l) : (l = Ue(t) ? Rn : Ie.current, o.context = ur(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ys(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Kl.enqueueReplaceState(o, o.state, null), Tl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function pr(e, t) {
        try {
            var n = "", r = t;
            do n += Ch(r), r = r.return;
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
    function Mi(e, t, n) {
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
    var Zg = typeof WeakMap == "function" ? WeakMap : Map;
    function Xf(e, t, n) {
        n = It(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Pl || (Pl = !0, Rs = r), xs(e, t);
        }, n;
    }
    function Zf(e, t, n) {
        n = It(-1, n), n.tag = 3;
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
            xs(e, t), typeof r != "function" && (nn === null ? nn = new Set([
                this
            ]) : nn.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function dc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Zg;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = dy.bind(null, e, t, n), t.then(e, e));
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
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = It(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
    }
    var Jg = bt.ReactCurrentOwner, Fe = !1;
    function Pe(e, t, n, r) {
        t.child = e === null ? Nf(t, null, n, r) : dr(t, e.child, n, r);
    }
    function mc(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return ir(t, o), r = ya(e, t, n, r, l, o), n = va(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Lt(e, t, o)) : (oe && n && la(t), t.flags |= 1, Pe(e, t, r, o), t.child);
    }
    function hc(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !za(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Jf(e, t, l, r, o)) : (e = al(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : to, n(i, r) && e.ref === t.ref) return Lt(e, t, o);
        }
        return t.flags |= 1, e = on(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Jf(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (to(l, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
            else return t.lanes = e.lanes, Lt(e, t, o);
        }
        return ws(e, t, n, r, o);
    }
    function qf(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, q(qn, We), We |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, q(qn, We), We |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, q(qn, We), We |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, q(qn, We), We |= r;
        return Pe(e, t, o, n), t.child;
    }
    function ep(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function ws(e, t, n, r, o) {
        var l = Ue(n) ? Rn : Ie.current;
        return l = ur(t, l), ir(t, o), n = ya(e, t, n, r, l, o), r = va(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Lt(e, t, o)) : (oe && r && la(t), t.flags |= 1, Pe(e, t, n, o), t.child);
    }
    function gc(e, t, n, r, o) {
        if (Ue(n)) {
            var l = !0;
            Sl(t);
        } else l = !1;
        if (ir(t, o), t.stateNode === null) ll(e, t), Yf(t, n, r), vs(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = ot(u) : (u = Ue(n) ? Rn : Ie.current, u = ur(t, u));
            var c = n.getDerivedStateFromProps, f = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && cc(t, i, r, u), Gt = !1;
            var d = t.memoizedState;
            i.state = d, Tl(t, r, i, o), a = t.memoizedState, s !== r || d !== a || $e.current || Gt ? (typeof c == "function" && (ys(t, n, c, r), a = t.memoizedState), (s = Gt || uc(t, n, s, r, d, a, u)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, zf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ct(t.type, s), i.props = u, f = t.pendingProps, d = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = Ue(n) ? Rn : Ie.current, a = ur(t, a));
            var x = n.getDerivedStateFromProps;
            (c = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== f || d !== a) && cc(t, i, r, a), Gt = !1, d = t.memoizedState, i.state = d, Tl(t, r, i, o);
            var v = t.memoizedState;
            s !== f || d !== v || $e.current || Gt ? (typeof x == "function" && (ys(t, n, x, r), v = t.memoizedState), (u = Gt || uc(t, n, u, r, d, v, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return ks(e, t, n, r, l, o);
    }
    function ks(e, t, n, r, o, l) {
        ep(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && tc(t, n, !1), Lt(e, t, l);
        r = t.stateNode, Jg.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = dr(t, e.child, null, l), t.child = dr(t, null, s, l)) : Pe(e, t, s, l), t.memoizedState = r.state, o && tc(t, n, !0), t.child;
    }
    function tp(e) {
        var t = e.stateNode;
        t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1), pa(e, t.containerInfo);
    }
    function yc(e, t, n, r, o) {
        return cr(), sa(o), t.flags |= 256, Pe(e, t, n, r), t.child;
    }
    var Ss = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function _s(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function np(e, t, n) {
        var r = t.pendingProps, o = le.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), q(le, o & 1), e === null) return hs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Xl(i, r, 0, null), e = Tn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = _s(n), t.memoizedState = Ss, e) : ka(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return qg(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = on(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = on(s, l) : (l = Tn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? _s(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ss, r;
        }
        return l = e.child, e = l.sibling, r = on(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function ka(e, t) {
        return t = Xl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Vo(e, t, n, r) {
        return r !== null && sa(r), dr(t, e.child, null, n), e = ka(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function qg(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Mi(Error(T(422))), Vo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Xl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = Tn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && dr(t, e.child, null, i), t.child.memoizedState = _s(i), t.memoizedState = Ss, l);
        if (!(t.mode & 1)) return Vo(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(T(419)), r = Mi(l, r, void 0), Vo(e, t, i, r);
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Mt(e, o), ht(r, e, o, -1));
            }
            return Ta(), r = Mi(Error(T(421))), Vo(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fy.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, He = en(o.nextSibling), Ke = t, oe = !0, ft = null, e !== null && (qe[et++] = zt, qe[et++] = Rt, qe[et++] = In, zt = e.id, Rt = e.overflow, In = t), t = ka(t, r.children), t.flags |= 4096, t);
    }
    function vc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), gs(e.return, t, n);
    }
    function Li(e, t, n, r, o) {
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
    function rp(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Pe(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
        if (q(le, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && zl(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Li(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && zl(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                Li(t, !0, n, null, l);
                break;
            case "together":
                Li(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function ll(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Lt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Pn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(T(153));
        if (t.child !== null) {
            for(e = t.child, n = on(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = on(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function ey(e, t, n) {
        switch(t.tag){
            case 3:
                tp(t), cr();
                break;
            case 5:
                Rf(t);
                break;
            case 1:
                Ue(t.type) && Sl(t);
                break;
            case 4:
                pa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                q(El, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (q(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? np(e, t, n) : (q(le, le.current & 1), e = Lt(e, t, n), e !== null ? e.sibling : null);
                q(le, le.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return rp(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), q(le, le.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, qf(e, t, n);
        }
        return Lt(e, t, n);
    }
    var op, Cs, lp, ip;
    op = function(e, t) {
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
    Cs = function() {};
    lp = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, En(_t.current);
            var l = null;
            switch(n){
                case "input":
                    o = Hi(e, o), r = Hi(e, r), l = [];
                    break;
                case "select":
                    o = se({}, o, {
                        value: void 0
                    }), r = se({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Yi(e, o), r = Yi(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = wl);
            }
            Zi(n, r);
            var i;
            n = null;
            for(u in o)if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
                var s = o[u];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Qr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
            for(u in r){
                var a = r[u];
                if (s = o?.[u], r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in a)a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
                } else n || (l || (l = []), l.push(u, n)), n = a;
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Qr.hasOwnProperty(u) ? (a != null && u === "onScroll" && ee("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    ip = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function Ir(e, t) {
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
    function ze(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function ty(e, t, n) {
        var r = t.pendingProps;
        switch(ia(t), t.tag){
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
                return Ue(t.type) && kl(), ze(t), null;
            case 3:
                return r = t.stateNode, fr(), te($e), te(Ie), ha(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Uo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Ps(ft), ft = null))), Cs(e, t), ze(t), null;
            case 5:
                ma(t);
                var o = En(io.current);
                if (n = t.type, e !== null && t.stateNode != null) lp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(T(166));
                        return ze(t), null;
                    }
                    if (e = En(_t.current), Uo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[kt] = t, r[oo] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < Ar.length; o++)ee(Ar[o], r);
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
                                Tu(r, l), ee("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, ee("invalid", r);
                                break;
                            case "textarea":
                                Ru(r, l), ee("invalid", r);
                        }
                        Zi(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && $o(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && $o(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Qr.hasOwnProperty(i) && s != null && i === "onScroll" && ee("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Po(r), zu(r, l, !0);
                                break;
                            case "textarea":
                                Po(r), Iu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = wl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Md(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[kt] = t, e[oo] = r, op(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = Ji(n, r), n){
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
                                    for(o = 0; o < Ar.length; o++)ee(Ar[o], e);
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
                                    Tu(e, r), o = Hi(e, r), ee("invalid", e);
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
                                    Ru(e, r), o = Yi(e, r), ee("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Zi(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? Od(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ld(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Yr(e, a) : typeof a == "number" && Yr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Qr.hasOwnProperty(l) ? a != null && l === "onScroll" && ee("scroll", e) : a != null && Gs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    Po(e), zu(e, r, !1);
                                    break;
                                case "textarea":
                                    Po(e), Iu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + ln(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? nr(e, !!r.multiple, l, !1) : r.defaultValue != null && nr(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = wl);
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
                if (e && t.stateNode != null) ip(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
                    if (n = En(io.current), En(_t.current), Uo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (l = r.nodeValue !== n) && (e = Ke, e !== null)) switch(e.tag){
                            case 3:
                                $o(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && $o(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
                }
                return ze(t), null;
            case 13:
                if (te(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (oe && He !== null && t.mode & 1 && !(t.flags & 128)) Cf(), cr(), t.flags |= 98560, l = !1;
                    else if (l = Uo(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(T(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(T(317));
                            l[kt] = t;
                        } else cr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        ze(t), l = !1;
                    } else ft !== null && (Ps(ft), ft = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? we === 0 && (we = 3) : Ta())), t.updateQueue !== null && (t.flags |= 4), ze(t), null);
            case 4:
                return fr(), Cs(e, t), e === null && no(t.stateNode.containerInfo), ze(t), null;
            case 10:
                return ca(t.type._context), ze(t), null;
            case 17:
                return Ue(t.type) && kl(), ze(t), null;
            case 19:
                if (te(le), l = t.memoizedState, l === null) return ze(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) Ir(l, !1);
                else {
                    if (we !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = zl(e), i !== null) {
                            for(t.flags |= 128, Ir(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return q(le, le.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && me() > mr && (t.flags |= 128, r = !0, Ir(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = zl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ir(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !oe) return ze(t), null;
                    } else 2 * me() - l.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, Ir(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = me(), t.sibling = null, n = le.current, q(le, r ? n & 1 | 2 : n & 1), t) : (ze(t), null);
            case 22:
            case 23:
                return Na(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(T(156, t.tag));
    }
    function ny(e, t) {
        switch(ia(t), t.tag){
            case 1:
                return Ue(t.type) && kl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return fr(), te($e), te(Ie), ha(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return ma(t), null;
            case 13:
                if (te(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(T(340));
                    cr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return te(le), null;
            case 4:
                return fr(), null;
            case 10:
                return ca(t.type._context), null;
            case 22:
            case 23:
                return Na(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Wo = !1, Re = !1, ry = typeof WeakSet == "function" ? WeakSet : Set, L = null;
    function Jn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            fe(e, t, r);
        }
        else n.current = null;
    }
    function Es(e, t, n) {
        try {
            n();
        } catch (r) {
            fe(e, t, r);
        }
    }
    var xc = !1;
    function oy(e, t) {
        if (as = yl, e = df(), oa(e)) {
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
        for(us = {
            focusedElem: e,
            selectionRange: n
        }, yl = !1, L = t; L !== null;)if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else for(; L !== null;){
            t = L;
            try {
                var v = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (v !== null) {
                            var m = v.memoizedProps, k = v.memoizedState, y = t.stateNode, g = y.getSnapshotBeforeUpdate(t.elementType === t.type ? m : ct(t.type, m), k);
                            y.__reactInternalSnapshotBeforeUpdate = g;
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
                        throw Error(T(163));
                }
            } catch (S) {
                fe(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, L = e;
                break;
            }
            L = t.return;
        }
        return v = xc, xc = !1, v;
    }
    function Gr(e, t, n) {
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
    function Ql(e, t) {
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
    function sp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, sp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[oo], delete t[fs], delete t[$g], delete t[Ug])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function ap(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function wc(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || ap(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Ts(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = wl));
        else if (r !== 4 && (e = e.child, e !== null)) for(Ts(e, t, n), e = e.sibling; e !== null;)Ts(e, t, n), e = e.sibling;
    }
    function zs(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(zs(e, t, n), e = e.sibling; e !== null;)zs(e, t, n), e = e.sibling;
    }
    var Ce = null, dt = !1;
    function $t(e, t, n) {
        for(n = n.child; n !== null;)up(e, t, n), n = n.sibling;
    }
    function up(e, t, n) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
            St.onCommitFiberUnmount($l, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Re || Jn(n, t);
            case 6:
                var r = Ce, o = dt;
                Ce = null, $t(e, t, n), Ce = r, dt = o, Ce !== null && (dt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
                break;
            case 18:
                Ce !== null && (dt ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? Ti(e.parentNode, n) : e.nodeType === 1 && Ti(e, n), qr(e)) : Ti(Ce, n.stateNode));
                break;
            case 4:
                r = Ce, o = dt, Ce = n.stateNode.containerInfo, dt = !0, $t(e, t, n), Ce = r, dt = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Es(n, t, i), o = o.next;
                    }while (o !== r);
                }
                $t(e, t, n);
                break;
            case 1:
                if (!Re && (Jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
                n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, $t(e, t, n), Re = r) : $t(e, t, n);
                break;
            default:
                $t(e, t, n);
        }
    }
    function kc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new ry), t.forEach(function(r) {
                var o = py.bind(null, e, r);
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
                            Ce = s.stateNode, dt = !1;
                            break e;
                        case 3:
                            Ce = s.stateNode.containerInfo, dt = !0;
                            break e;
                        case 4:
                            Ce = s.stateNode.containerInfo, dt = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (Ce === null) throw Error(T(160));
                up(l, i, o), Ce = null, dt = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                fe(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)cp(t, e), t = t.sibling;
    }
    function cp(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (st(t, e), xt(e), r & 4) {
                    try {
                        Gr(3, e, e.return), Ql(3, e);
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                    try {
                        Gr(5, e, e.return);
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                }
                break;
            case 1:
                st(t, e), xt(e), r & 512 && n !== null && Jn(n, n.return);
                break;
            case 5:
                if (st(t, e), xt(e), r & 512 && n !== null && Jn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        Yr(o, "");
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && jd(o, l), Ji(s, i);
                        var u = Ji(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var c = a[i], f = a[i + 1];
                            c === "style" ? Od(o, f) : c === "dangerouslySetInnerHTML" ? Ld(o, f) : c === "children" ? Yr(o, f) : Gs(o, c, f, u);
                        }
                        switch(s){
                            case "input":
                                Ki(o, l);
                                break;
                            case "textarea":
                                Pd(o, l);
                                break;
                            case "select":
                                var d = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var x = l.value;
                                x != null ? nr(o, !!l.multiple, x, !1) : d !== !!l.multiple && (l.defaultValue != null ? nr(o, !!l.multiple, l.defaultValue, !0) : nr(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[oo] = l;
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                }
                break;
            case 6:
                if (st(t, e), xt(e), r & 4) {
                    if (e.stateNode === null) throw Error(T(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                }
                break;
            case 3:
                if (st(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    qr(t.containerInfo);
                } catch (m) {
                    fe(e, e.return, m);
                }
                break;
            case 4:
                st(t, e), xt(e);
                break;
            case 13:
                st(t, e), xt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (Ca = me())), r & 4 && kc(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (u = Re) || c, st(t, e), Re = u) : st(t, e), xt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for(L = e, c = e.child; c !== null;){
                        for(f = L = c; L !== null;){
                            switch(d = L, x = d.child, d.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Gr(4, d, d.return);
                                    break;
                                case 1:
                                    Jn(d, d.return);
                                    var v = d.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = d, n = d.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                                        } catch (m) {
                                            fe(r, n, m);
                                        }
                                    }
                                    break;
                                case 5:
                                    Jn(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        _c(f);
                                        continue;
                                    }
                            }
                            x !== null ? (x.return = d, L = x) : _c(f);
                        }
                        c = c.sibling;
                    }
                    e: for(c = null, f = e;;){
                        if (f.tag === 5) {
                            if (c === null) {
                                c = f;
                                try {
                                    o = f.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = f.stateNode, a = f.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = bd("display", i));
                                } catch (m) {
                                    fe(e, e.return, m);
                                }
                            }
                        } else if (f.tag === 6) {
                            if (c === null) try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            } catch (m) {
                                fe(e, e.return, m);
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
                st(t, e), xt(e), r & 4 && kc(e);
                break;
            case 21:
                break;
            default:
                st(t, e), xt(e);
        }
    }
    function xt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (ap(n)) {
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
                        r.flags & 32 && (Yr(o, ""), r.flags &= -33);
                        var l = wc(e);
                        zs(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = wc(e);
                        Ts(e, s, i);
                        break;
                    default:
                        throw Error(T(161));
                }
            } catch (a) {
                fe(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function ly(e, t, n) {
        L = e, dp(e);
    }
    function dp(e, t, n) {
        for(var r = (e.mode & 1) !== 0; L !== null;){
            var o = L, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Wo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || Re;
                    s = Wo;
                    var u = Re;
                    if (Wo = i, (Re = a) && !u) for(L = o; L !== null;)i = L, a = i.child, i.tag === 22 && i.memoizedState !== null ? Cc(o) : a !== null ? (a.return = i, L = a) : Cc(o);
                    for(; l !== null;)L = l, dp(l), l = l.sibling;
                    L = o, Wo = s, Re = u;
                }
                Sc(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, L = l) : Sc(e);
        }
    }
    function Sc(e) {
        for(; L !== null;){
            var t = L;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Re || Ql(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Re) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
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
                                        var f = c.dehydrated;
                                        f !== null && qr(f);
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
                    Re || t.flags & 512 && Ns(t);
                } catch (d) {
                    fe(t, t.return, d);
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
    function _c(e) {
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
    function Cc(e) {
        for(; L !== null;){
            var t = L;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Ql(4, t);
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
                            Ns(t);
                        } catch (a) {
                            fe(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Ns(t);
                        } catch (a) {
                            fe(t, i, a);
                        }
                }
            } catch (a) {
                fe(t, t.return, a);
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
    var iy = Math.ceil, jl = bt.ReactCurrentDispatcher, Sa = bt.ReactCurrentOwner, rt = bt.ReactCurrentBatchConfig, K = 0, Se = null, ge = null, Ee = 0, We = 0, qn = un(0), we = 0, co = null, Pn = 0, Yl = 0, _a = 0, Hr = null, Ae = null, Ca = 0, mr = 1 / 0, Nt = null, Pl = !1, Rs = null, nn = null, Go = !1, Yt = null, Ml = 0, Kr = 0, Is = null, il = -1, sl = 0;
    function Me() {
        return K & 6 ? me() : il !== -1 ? il : il = me();
    }
    function rn(e) {
        return e.mode & 1 ? K & 2 && Ee !== 0 ? Ee & -Ee : Vg.transition !== null ? (sl === 0 && (sl = Qd()), sl) : (e = Y, e !== 0 || (e = window.event, e = e === void 0 ? 16 : tf(e.type)), e) : 1;
    }
    function ht(e, t, n, r) {
        if (50 < Kr) throw Kr = 0, Is = null, Error(T(185));
        go(e, n, r), (!(K & 2) || e !== Se) && (e === Se && (!(K & 2) && (Yl |= n), we === 4 && Kt(e, Ee)), Be(e, r), n === 1 && K === 0 && !(t.mode & 1) && (mr = me() + 500, Gl && cn()));
    }
    function Be(e, t) {
        var n = e.callbackNode;
        Vh(e, t);
        var r = gl(e, e === Se ? Ee : 0);
        if (r === 0) n !== null && Mu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Mu(n), t === 1) e.tag === 0 ? Bg(Ec.bind(null, e)) : kf(Ec.bind(null, e)), Ag(function() {
                !(K & 6) && cn();
            }), n = null;
            else {
                switch(Yd(r)){
                    case 1:
                        n = Xs;
                        break;
                    case 4:
                        n = Hd;
                        break;
                    case 16:
                        n = hl;
                        break;
                    case 536870912:
                        n = Kd;
                        break;
                    default:
                        n = hl;
                }
                n = xp(n, fp.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function fp(e, t) {
        if (il = -1, sl = 0, K & 6) throw Error(T(327));
        var n = e.callbackNode;
        if (sr() && e.callbackNode !== n) return null;
        var r = gl(e, e === Se ? Ee : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Ll(e, r);
        else {
            t = r;
            var o = K;
            K |= 2;
            var l = mp();
            (Se !== e || Ee !== t) && (Nt = null, mr = me() + 500, Nn(e, t));
            do try {
                uy();
                break;
            } catch (s) {
                pp(e, s);
            }
            while (!0);
            ua(), jl.current = l, K = o, ge !== null ? t = 0 : (Se = null, Ee = 0, t = we);
        }
        if (t !== 0) {
            if (t === 2 && (o = rs(e), o !== 0 && (r = o, t = js(e, o))), t === 1) throw n = co, Nn(e, 0), Kt(e, r), Be(e, me()), n;
            if (t === 6) Kt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !sy(o) && (t = Ll(e, r), t === 2 && (l = rs(e), l !== 0 && (r = l, t = js(e, l))), t === 1)) throw n = co, Nn(e, 0), Kt(e, r), Be(e, me()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(T(345));
                    case 2:
                        kn(e, Ae, Nt);
                        break;
                    case 3:
                        if (Kt(e, r), (r & 130023424) === r && (t = Ca + 500 - me(), 10 < t)) {
                            if (gl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Me(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ds(kn.bind(null, e, Ae, Nt), t);
                            break;
                        }
                        kn(e, Ae, Nt);
                        break;
                    case 4:
                        if (Kt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - mt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * iy(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ds(kn.bind(null, e, Ae, Nt), r);
                            break;
                        }
                        kn(e, Ae, Nt);
                        break;
                    case 5:
                        kn(e, Ae, Nt);
                        break;
                    default:
                        throw Error(T(329));
                }
            }
        }
        return Be(e, me()), e.callbackNode === n ? fp.bind(null, e) : null;
    }
    function js(e, t) {
        var n = Hr;
        return e.current.memoizedState.isDehydrated && (Nn(e, t).flags |= 256), e = Ll(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && Ps(t)), e;
    }
    function Ps(e) {
        Ae === null ? Ae = e : Ae.push.apply(Ae, e);
    }
    function sy(e) {
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
    function Kt(e, t) {
        for(t &= ~_a, t &= ~Yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - mt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Ec(e) {
        if (K & 6) throw Error(T(327));
        sr();
        var t = gl(e, 0);
        if (!(t & 1)) return Be(e, me()), null;
        var n = Ll(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = rs(e);
            r !== 0 && (t = r, n = js(e, r));
        }
        if (n === 1) throw n = co, Nn(e, 0), Kt(e, t), Be(e, me()), n;
        if (n === 6) throw Error(T(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, Ae, Nt), Be(e, me()), null;
    }
    function Ea(e, t) {
        var n = K;
        K |= 1;
        try {
            return e(t);
        } finally{
            K = n, K === 0 && (mr = me() + 500, Gl && cn());
        }
    }
    function Mn(e) {
        Yt !== null && Yt.tag === 0 && !(K & 6) && sr();
        var t = K;
        K |= 1;
        var n = rt.transition, r = Y;
        try {
            if (rt.transition = null, Y = 1, e) return e();
        } finally{
            Y = r, rt.transition = n, K = t, !(K & 6) && cn();
        }
    }
    function Na() {
        We = qn.current, te(qn);
    }
    function Nn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Dg(n)), ge !== null) for(n = ge.return; n !== null;){
            var r = n;
            switch(ia(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && kl();
                    break;
                case 3:
                    fr(), te($e), te(Ie), ha();
                    break;
                case 5:
                    ma(r);
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
                    ca(r.type._context);
                    break;
                case 22:
                case 23:
                    Na();
            }
            n = n.return;
        }
        if (Se = e, ge = e = on(e.current, null), Ee = We = t, we = 0, co = null, _a = Yl = Pn = 0, Ae = Hr = null, Cn !== null) {
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
    function pp(e, t) {
        do {
            var n = ge;
            try {
                if (ua(), rl.current = Il, Rl) {
                    for(var r = ie.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Rl = !1;
                }
                if (jn = 0, ke = xe = ie = null, Wr = !1, so = 0, Sa.current = null, n === null || n.return === null) {
                    we = 1, co = t, ge = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = Ee, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, c = s, f = c.tag;
                        if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                            var d = c.alternate;
                            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
                        }
                        var x = fc(i);
                        if (x !== null) {
                            x.flags &= -257, pc(x, i, s, l, t), x.mode & 1 && dc(l, u, t), t = x, a = u;
                            var v = t.updateQueue;
                            if (v === null) {
                                var m = new Set;
                                m.add(a), t.updateQueue = m;
                            } else v.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                dc(l, u, t), Ta();
                                break e;
                            }
                            a = Error(T(426));
                        }
                    } else if (oe && s.mode & 1) {
                        var k = fc(i);
                        if (k !== null) {
                            !(k.flags & 65536) && (k.flags |= 256), pc(k, i, s, l, t), sa(pr(a, s));
                            break e;
                        }
                    }
                    l = a = pr(a, s), we !== 4 && (we = 2), Hr === null ? Hr = [
                        l
                    ] : Hr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var y = Xf(l, a, t);
                                lc(l, y);
                                break e;
                            case 1:
                                s = a;
                                var g = l.type, p = l.stateNode;
                                if (!(l.flags & 128) && (typeof g.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (nn === null || !nn.has(p)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var S = Zf(l, s, t);
                                    lc(l, S);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                gp(n);
            } catch (N) {
                t = N, ge === n && n !== null && (ge = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function mp() {
        var e = jl.current;
        return jl.current = Il, e === null ? Il : e;
    }
    function Ta() {
        (we === 0 || we === 3 || we === 2) && (we = 4), Se === null || !(Pn & 268435455) && !(Yl & 268435455) || Kt(Se, Ee);
    }
    function Ll(e, t) {
        var n = K;
        K |= 2;
        var r = mp();
        (Se !== e || Ee !== t) && (Nt = null, Nn(e, t));
        do try {
            ay();
            break;
        } catch (o) {
            pp(e, o);
        }
        while (!0);
        if (ua(), K = n, jl.current = r, ge !== null) throw Error(T(261));
        return Se = null, Ee = 0, we;
    }
    function ay() {
        for(; ge !== null;)hp(ge);
    }
    function uy() {
        for(; ge !== null && !Lh();)hp(ge);
    }
    function hp(e) {
        var t = vp(e.alternate, e, We);
        e.memoizedProps = e.pendingProps, t === null ? gp(e) : ge = t, Sa.current = null;
    }
    function gp(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = ny(n, t), n !== null) {
                    n.flags &= 32767, ge = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    we = 6, ge = null;
                    return;
                }
            } else if (n = ty(n, t, We), n !== null) {
                ge = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                ge = t;
                return;
            }
            ge = t = e;
        }while (t !== null);
        we === 0 && (we = 5);
    }
    function kn(e, t, n) {
        var r = Y, o = rt.transition;
        try {
            rt.transition = null, Y = 1, cy(e, t, n, r);
        } finally{
            rt.transition = o, Y = r;
        }
        return null;
    }
    function cy(e, t, n, r) {
        do sr();
        while (Yt !== null);
        if (K & 6) throw Error(T(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Wh(e, l), e === Se && (ge = Se = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Go || (Go = !0, xp(hl, function() {
            return sr(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = rt.transition, rt.transition = null;
            var i = Y;
            Y = 1;
            var s = K;
            K |= 4, Sa.current = null, oy(e, n), cp(n, e), Ig(us), yl = !!as, us = as = null, e.current = n, ly(n), bh(), K = s, Y = i, rt.transition = l;
        } else e.current = n;
        if (Go && (Go = !1, Yt = e, Ml = o), l = e.pendingLanes, l === 0 && (nn = null), Ah(n.stateNode), Be(e, me()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Pl) throw Pl = !1, e = Rs, Rs = null, e;
        return Ml & 1 && e.tag !== 0 && sr(), l = e.pendingLanes, l & 1 ? e === Is ? Kr++ : (Kr = 0, Is = e) : Kr = 0, cn(), null;
    }
    function sr() {
        if (Yt !== null) {
            var e = Yd(Ml), t = rt.transition, n = Y;
            try {
                if (rt.transition = null, Y = 16 > e ? 16 : e, Yt === null) var r = !1;
                else {
                    if (e = Yt, Yt = null, Ml = 0, K & 6) throw Error(T(331));
                    var o = K;
                    for(K |= 4, L = e.current; L !== null;){
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
                                                Gr(8, c, l);
                                        }
                                        var f = c.child;
                                        if (f !== null) f.return = c, L = f;
                                        else for(; L !== null;){
                                            c = L;
                                            var d = c.sibling, x = c.return;
                                            if (sp(c), c === u) {
                                                L = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                d.return = x, L = d;
                                                break;
                                            }
                                            L = x;
                                        }
                                    }
                                }
                                var v = l.alternate;
                                if (v !== null) {
                                    var m = v.child;
                                    if (m !== null) {
                                        v.child = null;
                                        do {
                                            var k = m.sibling;
                                            m.sibling = null, m = k;
                                        }while (m !== null);
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
                                    Gr(9, l, l.return);
                            }
                            var y = l.sibling;
                            if (y !== null) {
                                y.return = l.return, L = y;
                                break e;
                            }
                            L = l.return;
                        }
                    }
                    var g = e.current;
                    for(L = g; L !== null;){
                        i = L;
                        var p = i.child;
                        if (i.subtreeFlags & 2064 && p !== null) p.return = i, L = p;
                        else e: for(i = g; L !== null;){
                            if (s = L, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ql(9, s);
                                }
                            } catch (N) {
                                fe(s, s.return, N);
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
                    if (K = o, cn(), St && typeof St.onPostCommitFiberRoot == "function") try {
                        St.onPostCommitFiberRoot($l, e);
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
    function Nc(e, t, n) {
        t = pr(n, t), t = Xf(e, t, 1), e = tn(e, t, 1), t = Me(), e !== null && (go(e, 1, t), Be(e, t));
    }
    function fe(e, t, n) {
        if (e.tag === 3) Nc(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Nc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
                    e = pr(n, e), e = Zf(t, e, 1), t = tn(t, e, 1), e = Me(), t !== null && (go(t, 1, e), Be(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function dy(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ee & n) === n && (we === 4 || we === 3 && (Ee & 130023424) === Ee && 500 > me() - Ca ? Nn(e, 0) : _a |= n), Be(e, t);
    }
    function yp(e, t) {
        t === 0 && (e.mode & 1 ? (t = bo, bo <<= 1, !(bo & 130023424) && (bo = 4194304)) : t = 1);
        var n = Me();
        e = Mt(e, t), e !== null && (go(e, t, n), Be(e, n));
    }
    function fy(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), yp(e, n);
    }
    function py(e, t) {
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
        r !== null && r.delete(t), yp(e, n);
    }
    var vp;
    vp = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || $e.current) Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, ey(e, t, n);
            Fe = !!(e.flags & 131072);
        }
        else Fe = !1, oe && t.flags & 1048576 && Sf(t, Cl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                ll(e, t), e = t.pendingProps;
                var o = ur(t, Ie.current);
                ir(t, n), o = ya(null, t, r, e, o, n);
                var l = va();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (l = !0, Sl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, fa(t), o.updater = Kl, t.stateNode = o, o._reactInternals = t, vs(t, r, e, n), t = ks(null, t, r, !0, l, n)) : (t.tag = 0, oe && l && la(t), Pe(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(ll(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = hy(r), e = ct(r, e), o){
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
                            t = hc(null, t, r, ct(r.type, e), n);
                            break e;
                    }
                    throw Error(T(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), ws(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), gc(e, t, r, o, n);
            case 3:
                e: {
                    if (tp(t), e === null) throw Error(T(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, zf(e, t), Tl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = pr(Error(T(423)), t), t = yc(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = pr(Error(T(424)), t), t = yc(e, t, r, n, o);
                        break e;
                    } else for(He = en(t.stateNode.containerInfo.firstChild), Ke = t, oe = !0, ft = null, n = Nf(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (cr(), r === o) {
                            t = Lt(e, t, n);
                            break e;
                        }
                        Pe(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Rf(t), e === null && hs(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, cs(r, o) ? i = null : l !== null && cs(r, l) && (t.flags |= 32), ep(e, t), Pe(e, t, i, n), t.child;
            case 6:
                return e === null && hs(t), null;
            case 13:
                return np(e, t, n);
            case 4:
                return pa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = dr(t, null, r, n) : Pe(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), mc(e, t, r, o, n);
            case 7:
                return Pe(e, t, t.pendingProps, n), t.child;
            case 8:
                return Pe(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Pe(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, q(El, r._currentValue), r._currentValue = i, l !== null) if (gt(l.value, i)) {
                        if (l.children === o.children && !$e.current) {
                            t = Lt(e, t, n);
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
                                    l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), gs(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                a = a.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(T(341));
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
                    Pe(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, ir(t, n), o = ot(o), r = r(o), t.flags |= 1, Pe(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = ct(r, t.pendingProps), o = ct(r.type, o), hc(e, t, r, o, n);
            case 15:
                return Jf(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ct(r, o), ll(e, t), t.tag = 1, Ue(r) ? (e = !0, Sl(t)) : e = !1, ir(t, n), Yf(t, r, o), vs(t, r, o, n), ks(null, t, r, !0, e, n);
            case 19:
                return rp(e, t, n);
            case 22:
                return qf(e, t, n);
        }
        throw Error(T(156, t.tag));
    };
    function xp(e, t) {
        return Gd(e, t);
    }
    function my(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function nt(e, t, n, r) {
        return new my(e, t, n, r);
    }
    function za(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function hy(e) {
        if (typeof e == "function") return za(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Ks) return 11;
            if (e === Qs) return 14;
        }
        return 2;
    }
    function on(e, t) {
        var n = e.alternate;
        return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function al(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") za(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Vn:
                return Tn(n.children, o, l, t);
            case Hs:
                i = 8, o |= 8;
                break;
            case Bi:
                return e = nt(12, n, t, o | 2), e.elementType = Bi, e.lanes = l, e;
            case Vi:
                return e = nt(13, n, t, o), e.elementType = Vi, e.lanes = l, e;
            case Wi:
                return e = nt(19, n, t, o), e.elementType = Wi, e.lanes = l, e;
            case zd:
                return Xl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Nd:
                        i = 10;
                        break e;
                    case Td:
                        i = 9;
                        break e;
                    case Ks:
                        i = 11;
                        break e;
                    case Qs:
                        i = 14;
                        break e;
                    case Wt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(T(130, e == null ? e : typeof e, ""));
        }
        return t = nt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function Tn(e, t, n, r) {
        return e = nt(7, e, r, t), e.lanes = n, e;
    }
    function Xl(e, t, n, r) {
        return e = nt(22, e, r, t), e.elementType = zd, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function bi(e, t, n) {
        return e = nt(6, e, null, t), e.lanes = n, e;
    }
    function Oi(e, t, n) {
        return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function gy(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gi(0), this.expirationTimes = gi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Ra(e, t, n, r, o, l, i, s, a) {
        return e = new gy(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = nt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, fa(l), e;
    }
    function yy(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Bn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function wp(e) {
        if (!e) return sn;
        e = e._reactInternals;
        e: {
            if (bn(e) !== e || e.tag !== 1) throw Error(T(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Ue(t.type)) {
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
            if (Ue(n)) return wf(e, n, t);
        }
        return t;
    }
    function kp(e, t, n, r, o, l, i, s, a) {
        return e = Ra(n, r, !0, e, o, l, i, s, a), e.context = wp(null), n = e.current, r = Me(), o = rn(n), l = It(r, o), l.callback = t ?? null, tn(n, l, o), e.current.lanes = o, go(e, o, r), Be(e, r), e;
    }
    function Zl(e, t, n, r) {
        var o = t.current, l = Me(), i = rn(o);
        return n = wp(n), t.context === null ? t.context = n : t.pendingContext = n, t = It(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(o, t, i), e !== null && (ht(e, o, i, l), nl(e, o, i)), i;
    }
    function bl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Tc(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Ia(e, t) {
        Tc(e, t), (e = e.alternate) && Tc(e, t);
    }
    function vy() {
        return null;
    }
    var Sp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function ja(e) {
        this._internalRoot = e;
    }
    Jl.prototype.render = ja.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(T(409));
        Zl(e, t, null, null);
    };
    Jl.prototype.unmount = ja.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Mn(function() {
                Zl(null, e, null, null);
            }), t[Pt] = null;
        }
    };
    function Jl(e) {
        this._internalRoot = e;
    }
    Jl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Jd();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
            Ht.splice(n, 0, e), n === 0 && ef(e);
        }
    };
    function Pa(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ql(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function zc() {}
    function xy(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = bl(i);
                    l.call(u);
                };
            }
            var i = kp(t, r, e, 0, null, !1, !1, "", zc);
            return e._reactRootContainer = i, e[Pt] = i.current, no(e.nodeType === 8 ? e.parentNode : e), Mn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = bl(a);
                s.call(u);
            };
        }
        var a = Ra(e, 0, !1, null, null, !1, !1, "", zc);
        return e._reactRootContainer = a, e[Pt] = a.current, no(e.nodeType === 8 ? e.parentNode : e), Mn(function() {
            Zl(t, a, n, r);
        }), a;
    }
    function ei(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = bl(i);
                    s.call(a);
                };
            }
            Zl(t, i, e, o);
        } else i = xy(n, t, e, o, r);
        return bl(i);
    }
    Xd = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Dr(t.pendingLanes);
                    n !== 0 && (Zs(t, n | 1), Be(t, me()), !(K & 6) && (mr = me() + 500, cn()));
                }
                break;
            case 13:
                Mn(function() {
                    var r = Mt(e, 1);
                    if (r !== null) {
                        var o = Me();
                        ht(r, e, 1, o);
                    }
                }), Ia(e, 1);
        }
    };
    Js = function(e) {
        if (e.tag === 13) {
            var t = Mt(e, 134217728);
            if (t !== null) {
                var n = Me();
                ht(t, e, 134217728, n);
            }
            Ia(e, 134217728);
        }
    };
    Zd = function(e) {
        if (e.tag === 13) {
            var t = rn(e), n = Mt(e, t);
            if (n !== null) {
                var r = Me();
                ht(n, e, t, r);
            }
            Ia(e, t);
        }
    };
    Jd = function() {
        return Y;
    };
    qd = function(e, t) {
        var n = Y;
        try {
            return Y = e, t();
        } finally{
            Y = n;
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
                            var o = Wl(r);
                            if (!o) throw Error(T(90));
                            Id(r), Ki(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Pd(e, n);
                break;
            case "select":
                t = n.value, t != null && nr(e, !!n.multiple, t, !1);
        }
    };
    Fd = Ea;
    $d = Mn;
    var wy = {
        usingClientEntryPoint: !1,
        Events: [
            vo,
            Kn,
            Wl,
            Dd,
            Ad,
            Ea
        ]
    }, jr = {
        findFiberByHostInstance: _n,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, ky = {
        bundleType: jr.bundleType,
        version: jr.version,
        rendererPackageName: jr.rendererPackageName,
        rendererConfig: jr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: bt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Vd(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: jr.findFiberByHostInstance || vy,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ho.isDisabled && Ho.supportsFiber) try {
            $l = Ho.inject(ky), St = Ho;
        } catch  {}
    }
    Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wy;
    Ye.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Pa(t)) throw Error(T(200));
        return yy(e, t, null, n);
    };
    Ye.createRoot = function(e, t) {
        if (!Pa(e)) throw Error(T(299));
        var n = !1, r = "", o = Sp;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ra(e, 1, !1, null, null, n, !1, r, o), e[Pt] = t.current, no(e.nodeType === 8 ? e.parentNode : e), new ja(t);
    };
    Ye.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
        return e = Vd(t), e = e === null ? null : e.stateNode, e;
    };
    Ye.flushSync = function(e) {
        return Mn(e);
    };
    Ye.hydrate = function(e, t, n) {
        if (!ql(t)) throw Error(T(200));
        return ei(null, e, t, !0, n);
    };
    Ye.hydrateRoot = function(e, t, n) {
        if (!Pa(e)) throw Error(T(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Sp;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = kp(t, null, e, 1, n ?? null, o, !1, l, i), e[Pt] = t.current, no(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Jl(t);
    };
    Ye.render = function(e, t, n) {
        if (!ql(t)) throw Error(T(200));
        return ei(null, e, t, !1, n);
    };
    Ye.unmountComponentAtNode = function(e) {
        if (!ql(e)) throw Error(T(40));
        return e._reactRootContainer ? (Mn(function() {
            ei(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Pt] = null;
            });
        }), !0) : !1;
    };
    Ye.unstable_batchedUpdates = Ea;
    Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ql(n)) throw Error(T(200));
        if (e == null || e._reactInternals === void 0) throw Error(T(38));
        return ei(e, t, n, !1, r);
    };
    Ye.version = "18.3.1-next-f1338f8080-20240426";
    function _p() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_p);
        } catch (e) {
            console.error(e);
        }
    }
    _p(), Sd.exports = Ye;
    var Sy = Sd.exports, Rc = Sy;
    $i.createRoot = Rc.createRoot, $i.hydrateRoot = Rc.hydrateRoot;
    const _y = "modulepreload", Cy = function(e) {
        return "/grid-draw/" + e;
    }, Ic = {}, Cp = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = Cy(a), a in Ic) return;
                Ic[a] = !0;
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
    }, jc = (e)=>{
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
    }, Ey = (e)=>e ? jc(e) : jc, Ny = (e)=>e;
    function Ty(e, t = Ny) {
        const n = re.useSyncExternalStore(e.subscribe, re.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), re.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return re.useDebugValue(n), n;
    }
    const Pc = (e)=>{
        const t = Ey(e), n = (r)=>Ty(t, r);
        return Object.assign(n, t), n;
    }, Ep = (e)=>e ? Pc(e) : Pc;
    function zy(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    const Ry = 1.75;
    function Ms(e) {
        return {
            r: e.minRow - Ry,
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
    function er(e) {
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
    function Mc(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, c = (a - e) * (a - e) + (u - t) * (u - t);
            c <= i && (l = s, i = c);
        }
        return l;
    }
    function Iy(e, t) {
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
            case "alignText":
            case "setTextFrame":
            case "moveText":
                l("texts", t.idx, o - 1);
                break;
        }
    }
    function ul(e, t) {
        switch(Iy(e, t), t.kind){
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
            case "batch":
                e.set_render_paused?.(!0);
                try {
                    for (const n of t.edits)ul(e, n);
                } finally{
                    e.set_render_paused?.(!1);
                }
                break;
        }
    }
    function Np(e) {
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
            case "batch":
                return {
                    kind: "batch",
                    edits: [
                        ...e.edits
                    ].reverse().map(Np)
                };
        }
    }
    function Tp(e, t) {
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
                        const o = Tp(e.edits[r], t.edits[r]);
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
    const jy = 100, Py = 600;
    class My {
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
            this.undoStack.push(t), this.undoStack.length > jy && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (ul(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Py) {
                const i = this.undoStack[this.undoStack.length - 1], s = Tp(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (ul(t, Np(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (ul(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
    const at = new My;
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
    function bc(e, t) {
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
    function Oc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Dc(e, t) {
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
            boxW: n[3],
            boxH: n[4]
        };
    }
    function Fc(e, t) {
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
    const Ly = [
        1,
        1.5,
        2,
        3,
        5
    ], by = [
        1,
        1.5,
        2,
        3,
        5
    ], fo = 8, Ko = [
        1,
        2,
        4,
        8
    ], Di = (e)=>Math.round(e * 10);
    function Pr(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function zp(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" ? e.index === t.index : !1;
    }
    function Rp(e, t) {
        return t.some((n)=>zp(n, e));
    }
    function Oy(e, t) {
        return Rp(e, t) ? t : [
            ...t,
            e
        ];
    }
    function Dy(e, t) {
        return t.filter((n)=>!zp(n, e));
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
            s.length >= 5 && (n = Math.min(n, s[0]), r = Math.min(r, s[1]), o = Math.max(o, s[0] + s[4]), l = Math.max(l, s[1] + s[3]));
        }
        return n === 1 / 0 ? null : {
            minRow: n,
            minCol: r,
            maxRow: o,
            maxCol: l
        };
    }
    function Ay(e, t) {
        const n = Ge(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function cl(e, t, n = {}) {
        const r = Ge(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, c = [], f = [], d = [], x = [];
        for (const v of t)if (v.type === "cell") c.push([
            v.row - a,
            v.col - u,
            e.get_cell_color(v.row, v.col)
        ]);
        else if (v.type === "line") {
            const m = e.get_line(v.index);
            f.push([
                m[0] - a,
                m[1] - u,
                m[2] - a,
                m[3] - u,
                m[4],
                m[5]
            ]);
        } else if (v.type === "rect") {
            const m = e.get_rect(v.index);
            d.push([
                m[0] - a,
                m[1] - u,
                m[2] - a,
                m[3] - u,
                m[4],
                m[5]
            ]);
        } else if (v.type === "text") {
            const m = e.get_text(v.index);
            x.push([
                m[0] - a,
                m[1] - u,
                m[2],
                e.get_text_size(v.index),
                m[3],
                m[4],
                m[5],
                m[6],
                e.get_text_string(v.index)
            ]);
        }
        return c.sort((v, m)=>v[0] - m[0] || v[1] - m[1]), {
            w: s - u + 1,
            h: i - a + 1,
            cells: c,
            lines: f,
            rects: d,
            texts: x,
            sub: fo
        };
    }
    function $c(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function vn(e, t, n, r, o) {
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
    function Uc(e) {
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
    const tt = Ep((e, t)=>({
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
                    coalesceKey: `fill:${Pr(o)}`
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
                    coalesceKey: `outline:${Pr(o)}`
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
                    coalesceKey: `size:${Pr(o)}`
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
                if (!r || (r.set_draw_line_width(Di(n)), o.length === 0)) return;
                const l = Di(n), i = [];
                for (const s of o)s.type === "line" && i.push({
                    kind: "resizeLine",
                    idx: s.index,
                    from: r.get_line(s.index)[5],
                    to: l
                });
                i.length !== 0 && (t().commitEdits(i, {
                    coalesceKey: `lineWidth:${Pr(o)}`
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
                    coalesceKey: `align:${Pr(l)}`
                }), t().renderSelection());
            },
            setSubdivision: (n)=>{
                const r = Ko.includes(n) ? n : 1;
                e({
                    subdivision: r
                });
                const { grid: o } = t();
                o?.set_subdivision(r);
            },
            cycleSubdivision: ()=>{
                const n = t().subdivision, r = Ko[(Ko.indexOf(n) + 1) % Ko.length];
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
                const r = Uc(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = Oy(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = Dy(n, r);
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
                for(let m = i; m <= s; m++)for(let k = a; k <= u; k++)r.get_cell(m, k) && c.push({
                    type: "cell",
                    row: m,
                    col: k
                });
                const f = r.get_line_count();
                for(let m = 0; m < f; m++)r.line_intersects_box(m, i, a, s, u) && c.push({
                    type: "line",
                    index: m
                });
                const d = r.get_rect_count();
                for(let m = 0; m < d; m++)r.rect_intersects_box(m, i, a, s, u) && c.push({
                    type: "rect",
                    index: m
                });
                const x = r.get_text_count();
                for(let m = 0; m < x; m++)r.text_intersects_box(m, i, a, s, u) && c.push({
                    type: "text",
                    index: m
                });
                let v = [
                    ...l
                ];
                for (const m of c)Rp(m, v) || v.push(m);
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
                        const S = r.get_cell_color(p.row, p.col), N = p.row + a, R = p.col + u;
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
                            row: N,
                            col: R,
                            from: {
                                filled: r.get_cell(N, R),
                                color: r.get_cell_color(N, R)
                            },
                            to: {
                                filled: !0,
                                color: S
                            }
                        }), c.push({
                            type: "cell",
                            row: N,
                            col: R
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
                    const m = [], k = l.filter((p)=>p.type === "rect");
                    for (const p of k)m.push({
                        kind: "moveRect",
                        idx: p.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "rect",
                        index: p.index
                    });
                    const y = [], g = l.filter((p)=>p.type === "text");
                    for (const p of g)y.push({
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
                        ...m,
                        ...y
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
                const { grid: r } = t(), o = r ? n.shape === "line" ? Oc(r, n.index) : n.shape === "rect" ? Dc(r, n.index) : Ac(r, n.index) : null;
                e({
                    selectMode: "resize",
                    resizeTarget: n,
                    resizeOrigin: o,
                    isSelecting: !0
                });
            },
            updateResize: (n)=>{
                const { grid: r, resizeTarget: o } = t();
                !r || !o || (o.shape === "line" ? r.set_line_endpoint(o.index, o.handle, n.row, n.col) : o.shape === "rect" ? r.resize_rect(o.index, o.handle, n.row, n.col) : r.resize_text(o.index, o.handle, n.row, n.col), t().renderSelection());
            },
            finishResize: (n)=>{
                const { grid: r, resizeTarget: o, resizeOrigin: l } = t();
                r && o && (o.shape === "line" ? (r.set_line_endpoint(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setLineGeom",
                        idx: o.index,
                        from: l,
                        to: Oc(r, o.index)
                    }
                ])) : o.shape === "rect" ? (r.resize_rect(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Dc(r, o.index)
                    }
                ])) : (r.resize_text(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setTextFrame",
                        idx: o.index,
                        from: l,
                        to: Ac(r, o.index)
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
                const { cx: s, cy: a, startAngle: u } = i, c = $c(Math.atan2(r - a, n - s) - u);
                if (o.render(), c === 0) {
                    t().renderSelection();
                    return;
                }
                const f = Ge(l, o);
                if (!f) return;
                const d = Math.round((f.minRow + f.maxRow) / 2), x = Math.round((f.minCol + f.maxCol) / 2);
                for (const v of l)if (v.type === "cell") {
                    const m = vn(v.row, v.col, c, d, x);
                    o.preview_cell(m.r, m.c, o.get_cell_color(v.row, v.col));
                } else if (v.type === "line") {
                    const m = o.get_line(v.index);
                    if (m.length >= 6) {
                        const k = vn(m[0], m[1], c, d, x), y = vn(m[2], m[3], c, d, x);
                        o.preview_line(k.r, k.c, y.r, y.c, m[4], m[5]);
                    }
                } else if (v.type === "rect") {
                    const m = o.get_rect(v.index);
                    if (m.length >= 6) {
                        const k = vn(m[0], m[1], c, d, x), y = vn(m[2], m[3], c, d, x);
                        o.preview_rect(k.r, k.c, y.r, y.c, m[4], m[5]);
                    }
                } else if (v.type === "text") {
                    const m = o.get_text(v.index);
                    if (m.length >= 7) {
                        const k = vn(m[0], m[1], c, d, x);
                        o.preview_text(k.r, k.c, m[2], o.get_text_size(v.index), m[3], m[4], m[5], m[6], o.get_text_string(v.index));
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
                const { cx: s, cy: a, startAngle: u } = i, c = $c(Math.atan2(r - a, n - s) - u), f = Ge(l, o);
                if (c === 0 || !f) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const d = Math.round((f.minRow + f.maxRow) / 2), x = Math.round((f.minCol + f.maxCol) / 2), v = (p, S)=>vn(p, S, c, d, x), m = [], k = [], y = [], g = [];
                for (const p of l)if (p.type === "cell") {
                    if (!o.get_cell(p.row, p.col)) continue;
                    const S = o.get_cell_color(p.row, p.col), N = v(p.row, p.col);
                    m.push({
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
                        row: N.r,
                        col: N.c,
                        from: {
                            filled: o.get_cell(N.r, N.c),
                            color: o.get_cell_color(N.r, N.c)
                        },
                        to: {
                            filled: !0,
                            color: S
                        }
                    }), g.push({
                        type: "cell",
                        row: N.r,
                        col: N.c
                    });
                } else if (p.type === "line") {
                    const S = o.get_line(p.index);
                    if (S.length < 5) continue;
                    const N = v(S[0], S[1]), R = v(S[2], S[3]);
                    y.push({
                        kind: "setLineGeom",
                        idx: p.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: N.r,
                            c1: N.c,
                            r2: R.r,
                            c2: R.c
                        }
                    }), g.push({
                        type: "line",
                        index: p.index
                    });
                } else if (p.type === "rect") {
                    const S = o.get_rect(p.index);
                    if (S.length < 6) continue;
                    const N = v(S[0], S[1]), R = v(S[2], S[3]);
                    y.push({
                        kind: "setRectGeom",
                        idx: p.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: N.r,
                            c1: N.c,
                            r2: R.r,
                            c2: R.c
                        }
                    }), g.push({
                        type: "rect",
                        index: p.index
                    });
                } else if (p.type === "text") {
                    const S = o.get_text(p.index);
                    if (S.length < 3) continue;
                    const N = v(S[0], S[1]);
                    y.push({
                        kind: "moveText",
                        idx: p.index,
                        dRow: N.r - S[0],
                        dCol: N.c - S[1]
                    }), g.push({
                        type: "text",
                        index: p.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits([
                    ...m,
                    ...k,
                    ...y
                ]), e({
                    selectedItems: g
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
                const a = fo / s, u = [];
                for(let c = 0; c < a; c++)for(let f = 0; f < a; f++){
                    const d = n + c, x = r + f, v = o && i < 6 ? {
                        filled: !0,
                        color: i
                    } : {
                        filled: !1,
                        color: i < 6 ? i : l.get_cell_color(d, x)
                    }, m = {
                        filled: l.get_cell(d, x),
                        color: l.get_cell_color(d, x)
                    };
                    m.filled === v.filled && (!v.filled || m.color === v.color) || u.push({
                        kind: "setCellState",
                        row: d,
                        col: x,
                        from: m,
                        to: v
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
                            width: Di(a)
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
                    c.length >= 7 && a.push({
                        relR: c[0] - o.minRow,
                        relC: c[1] - o.minCol,
                        color: c[2],
                        size: n.get_text_size(u.index),
                        boxW: c[3],
                        boxH: c[4],
                        halign: c[5],
                        valign: c[6],
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
                    const x = s.row + d.relR1, v = s.col + d.relC1, m = s.row + d.relR2, k = s.col + d.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: x,
                            c1: v,
                            r2: m,
                            c2: k,
                            color: d.color,
                            width: d.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const d of r.rects){
                    const x = s.row + d.relR1, v = s.col + d.relC1, m = s.row + d.relR2, k = s.col + d.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: x,
                            c1: v,
                            r2: m,
                            c2: k,
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
                            boxW: d.boxW,
                            boxH: d.boxH,
                            halign: d.halign,
                            valign: d.valign,
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
                    line: Lc(n, u)
                });
                for (const u of i)a.push({
                    kind: "deleteRect",
                    idx: u,
                    rect: bc(n, u)
                });
                for (const u of s)a.push({
                    kind: "deleteText",
                    idx: u,
                    text: Fc(n, u)
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
                const o = cl(n, r);
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
                const i = cl(n, r);
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
                const f = fo / (n.sub ?? 1);
                for (const [d, x, v] of n.cells ?? []){
                    const m = r + d * f, k = o + x * f;
                    i.push({
                        kind: "setCellState",
                        row: m,
                        col: k,
                        from: {
                            filled: l.get_cell(m, k),
                            color: l.get_cell_color(m, k)
                        },
                        to: {
                            filled: !0,
                            color: v
                        }
                    }), s.push({
                        type: "cell",
                        row: m,
                        col: k
                    });
                }
                for (const [d, x, v, m, k, y] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + d * f,
                        c1: o + x * f,
                        r2: r + v * f,
                        c2: o + m * f,
                        color: k,
                        width: y ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [d, x, v, m, k, y] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + d * f,
                        c1: o + x * f,
                        r2: r + v * f,
                        c2: o + m * f,
                        fill: k,
                        outline: y
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const d of n.texts ?? []){
                    const x = Array.isArray(d) ? d.length >= 9 ? {
                        r: d[0],
                        c: d[1],
                        color: d[2],
                        size: d[3],
                        boxW: d[4],
                        boxH: d[5],
                        halign: d[6],
                        valign: d[7],
                        text: d[8]
                    } : {
                        r: d[0],
                        c: d[1],
                        color: d[2],
                        size: d[3],
                        text: d[4]
                    } : d;
                    if (!x || typeof x.r != "number" || typeof x.c != "number") continue;
                    const v = x;
                    i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + v.r * f,
                            c: o + v.c * f,
                            color: v.color ?? 0,
                            size: v.size ?? 1,
                            boxW: (v.boxW ?? 0) * f,
                            boxH: (v.boxH ?? 0) * f,
                            halign: v.halign ?? 0,
                            valign: v.valign ?? 0,
                            text: String(v.text ?? "")
                        }
                    }), s.push({
                        type: "text",
                        index: c
                    }), c++;
                }
                i.length !== 0 && (t().commitEdits(i), l.render(), e({
                    selectedItems: s
                }), t().renderSelection(), t().updateOutputs());
            },
            serializeWholeGrid: ()=>{
                const { grid: n } = t();
                return n ? cl(n, Uc(n), {
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
                const { grid: n, selectedItems: r } = t(), o = r.filter((m)=>m.type === "cell");
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
                ], i = [], s = o.map((m)=>({
                        row: m.row,
                        col: m.col
                    })), a = zy(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const m of o)if (n.get_cell(m.row, m.col)) {
                    const k = n.get_cell_color(m.row, m.col), y = l[k] ?? "#000000";
                    i.push({
                        row: m.row - a.minRow,
                        col: m.col - a.minCol,
                        color: y
                    });
                }
                i.sort((m, k)=>m.row - k.row || m.col - k.col);
                const u = a.maxRow - a.minRow + 1, c = a.maxCol - a.minCol + 1, f = [], d = [];
                for (const m of i)m.color === "#000000" && (f.push(m.row), d.push(m.col));
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
                        const x = o.row + c, v = o.col + f, m = l[d] ?? 0;
                        r.set_draw_color(m), r.set_cell(x, v, !0), s.push({
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
                                const m = l[v.color] ?? 0;
                                r.set_draw_color(m), r.set_cell(d, x, !0), s.push({
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
                    text: Fc(n, i)
                });
                for(let i = n.get_rect_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteRect",
                    idx: i,
                    rect: bc(n, i)
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
                            const l = er(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "text") {
                            const l = n.get_text(o.index), i = er([
                                l[0],
                                l[1],
                                l[0] + l[4],
                                l[1] + l[3]
                            ]);
                            for (const s of i)n.draw_handle(s.r, s.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = Ge(r, n);
                        if (o) {
                            const l = Ms(o);
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
        })), Bc = 7;
    function Fy(e) {
        const t = e.get_schema_version?.();
        (t !== Bc || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${Bc}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function $y(e, t, n) {
        const [r, o] = E.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = E.useRef(!1);
        return E.useEffect(()=>{
            if (l.current) return;
            const i = e.current;
            i && (l.current = !0, (async ()=>{
                try {
                    const s = await Cp(()=>import("./grid_draw_wasm.js"), []);
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
    const Ip = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const Uy = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const By = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const Vc = (e)=>{
        const t = By(e);
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
    const Wy = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const Gy = E.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>E.createElement("svg", {
            ref: a,
            ...Vy,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Ip("lucide", o),
            ...!l && !Wy(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, c])=>E.createElement(u, c)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const jp = (e, t)=>{
        const n = E.forwardRef(({ className: r, ...o }, l)=>E.createElement(Gy, {
                ref: l,
                iconNode: t,
                className: Ip(`lucide-${Uy(Vc(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = Vc(e), n;
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
    ], Ky = jp("redo-2", Hy);
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
    ], Yy = jp("undo-2", Qy);
    function Pp(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Pp(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Mp() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Pp(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Wc = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Gc = Mp, Lp = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Gc(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const c = n?.[u], f = l?.[u];
                if (c === null) return null;
                const d = Wc(c) || Wc(f);
                return o[u][d];
            }), s = n && Object.entries(n).reduce((u, c)=>{
                let [f, d] = c;
                return d === void 0 || (u[f] = d), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c)=>{
                let { class: f, className: d, ...x } = c;
                return Object.entries(x).every((v)=>{
                    let [m, k] = v;
                    return Array.isArray(k) ? k.includes({
                        ...l,
                        ...s
                    }[m]) : {
                        ...l,
                        ...s
                    }[m] === k;
                }) ? [
                    ...u,
                    f,
                    d
                ] : u;
            }, []);
            return Gc(e, i, a, n?.class, n?.className);
        };
    function Hc(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function bp(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Hc(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Hc(e[o], null);
                }
            };
        };
    }
    function bs(...e) {
        return E.useCallback(bp(...e), e);
    }
    function Ol(e) {
        const t = Zy(e), n = E.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = E.Children.toArray(l), a = s.find(qy);
            if (a) {
                const u = a.props.children, c = s.map((f)=>f === a ? E.Children.count(u) > 1 ? E.Children.only(null) : E.isValidElement(u) ? u.props.children : null : f);
                return h.jsx(t, {
                    ...i,
                    ref: o,
                    children: E.isValidElement(u) ? E.cloneElement(u, void 0, c) : null
                });
            }
            return h.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var Xy = Ol("Slot");
    function Zy(e) {
        const t = E.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (E.isValidElement(o)) {
                const i = tv(o), s = ev(l, o.props);
                return o.type !== E.Fragment && (s.ref = r ? bp(r, i) : i), E.cloneElement(o, s);
            }
            return E.Children.count(o) > 1 ? E.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var Jy = Symbol("radix.slottable");
    function qy(e) {
        return E.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jy;
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
    ], po = nv.reduce((e, t)=>{
        const n = Ol(`Primitive.${t}`), r = E.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, a = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), h.jsx(a, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function Ma(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = E.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (f)=>{
                const { scope: d, children: x, ...v } = f, m = d?.[e]?.[a] || s, k = E.useMemo(()=>v, Object.values(v));
                return h.jsx(m.Provider, {
                    value: k,
                    children: x
                });
            };
            u.displayName = l + "Provider";
            function c(f, d) {
                const x = d?.[e]?.[a] || s, v = E.useContext(x);
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
            const l = n.map((i)=>E.createContext(i));
            return function(s) {
                const a = s?.[e] || l;
                return E.useMemo(()=>({
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
                return E.useMemo(()=>({
                        [`__scope${t.scopeName}`]: i
                    }), [
                    i
                ]);
            };
        };
        return n.scopeName = t.scopeName, n;
    }
    function ov(e) {
        const t = e + "CollectionProvider", [n, r] = Ma(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (m)=>{
            const { scope: k, children: y } = m, g = re.useRef(null), p = re.useRef(new Map).current;
            return h.jsx(o, {
                scope: k,
                itemMap: p,
                collectionRef: g,
                children: y
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = Ol(s), u = re.forwardRef((m, k)=>{
            const { scope: y, children: g } = m, p = l(s, y), S = bs(k, p.collectionRef);
            return h.jsx(a, {
                ref: S,
                children: g
            });
        });
        u.displayName = s;
        const c = e + "CollectionItemSlot", f = "data-radix-collection-item", d = Ol(c), x = re.forwardRef((m, k)=>{
            const { scope: y, children: g, ...p } = m, S = re.useRef(null), N = bs(k, S), R = l(c, y);
            return re.useEffect(()=>(R.itemMap.set(S, {
                    ref: S,
                    ...p
                }), ()=>void R.itemMap.delete(S))), h.jsx(d, {
                [f]: "",
                ref: N,
                children: g
            });
        });
        x.displayName = c;
        function v(m) {
            const k = l(e + "CollectionConsumer", m);
            return re.useCallback(()=>{
                const g = k.collectionRef.current;
                if (!g) return [];
                const p = Array.from(g.querySelectorAll(`[${f}]`));
                return Array.from(k.itemMap.values()).sort((R, j)=>p.indexOf(R.ref.current) - p.indexOf(j.ref.current));
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
    function zn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Op = globalThis?.document ? E.useLayoutEffect : ()=>{}, lv = wd[" useInsertionEffect ".trim().toString()] || Op;
    function ti({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = iv({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, a = s ? e : o;
        {
            const c = E.useRef(e !== void 0);
            E.useEffect(()=>{
                const f = c.current;
                f !== s && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = s;
            }, [
                s,
                r
            ]);
        }
        const u = E.useCallback((c)=>{
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
        const [n, r] = E.useState(e), o = E.useRef(n), l = E.useRef(t);
        return lv(()=>{
            l.current = t;
        }, [
            t
        ]), E.useEffect(()=>{
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
    var av = wd[" useId ".trim().toString()] || (()=>{}), uv = 0;
    function cv(e) {
        const [t, n] = E.useState(av());
        return Op(()=>{
            n((r)=>r ?? String(uv++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var dv = E.createContext(void 0);
    function Dp(e) {
        const t = E.useContext(dv);
        return e || t || "ltr";
    }
    function fv(e) {
        const t = E.useRef(e);
        return E.useEffect(()=>{
            t.current = e;
        }), E.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Ai = "rovingFocusGroup.onEntryFocus", pv = {
        bubbles: !1,
        cancelable: !0
    }, wo = "RovingFocusGroup", [Os, Ap, mv] = ov(wo), [hv, Fp] = Ma(wo, [
        mv
    ]), [gv, yv] = hv(wo), $p = E.forwardRef((e, t)=>h.jsx(Os.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: h.jsx(Os.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: h.jsx(vv, {
                    ...e,
                    ref: t
                })
            })
        }));
    $p.displayName = wo;
    var vv = E.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: c = !1, ...f } = e, d = E.useRef(null), x = bs(t, d), v = Dp(l), [m, k] = ti({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: wo
        }), [y, g] = E.useState(!1), p = fv(u), S = Ap(n), N = E.useRef(!1), [R, j] = E.useState(0);
        return E.useEffect(()=>{
            const C = d.current;
            if (C) return C.addEventListener(Ai, p), ()=>C.removeEventListener(Ai, p);
        }, [
            p
        ]), h.jsx(gv, {
            scope: n,
            orientation: r,
            dir: v,
            loop: o,
            currentTabStopId: m,
            onItemFocus: E.useCallback((C)=>k(C), [
                k
            ]),
            onItemShiftTab: E.useCallback(()=>g(!0), []),
            onFocusableItemAdd: E.useCallback(()=>j((C)=>C + 1), []),
            onFocusableItemRemove: E.useCallback(()=>j((C)=>C - 1), []),
            children: h.jsx(po.div, {
                tabIndex: y || R === 0 ? -1 : 0,
                "data-orientation": r,
                ...f,
                ref: x,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: zn(e.onMouseDown, ()=>{
                    N.current = !0;
                }),
                onFocus: zn(e.onFocus, (C)=>{
                    const B = !N.current;
                    if (C.target === C.currentTarget && B && !y) {
                        const $ = new CustomEvent(Ai, pv);
                        if (C.currentTarget.dispatchEvent($), !$.defaultPrevented) {
                            const he = S().filter((X)=>X.focusable), ye = he.find((X)=>X.active), Ve = he.find((X)=>X.id === m), Ze = [
                                ye,
                                Ve,
                                ...he
                            ].filter(Boolean).map((X)=>X.ref.current);
                            Vp(Ze, c);
                        }
                    }
                    N.current = !1;
                }),
                onBlur: zn(e.onBlur, ()=>g(!1))
            })
        });
    }), Up = "RovingFocusGroupItem", Bp = E.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = cv(), u = l || a, c = yv(Up, n), f = c.currentTabStopId === u, d = Ap(n), { onFocusableItemAdd: x, onFocusableItemRemove: v, currentTabStopId: m } = c;
        return E.useEffect(()=>{
            if (r) return x(), ()=>v();
        }, [
            r,
            x,
            v
        ]), h.jsx(Os.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: h.jsx(po.span, {
                tabIndex: f ? 0 : -1,
                "data-orientation": c.orientation,
                ...s,
                ref: t,
                onMouseDown: zn(e.onMouseDown, (k)=>{
                    r ? c.onItemFocus(u) : k.preventDefault();
                }),
                onFocus: zn(e.onFocus, ()=>c.onItemFocus(u)),
                onKeyDown: zn(e.onKeyDown, (k)=>{
                    if (k.key === "Tab" && k.shiftKey) {
                        c.onItemShiftTab();
                        return;
                    }
                    if (k.target !== k.currentTarget) return;
                    const y = kv(k, c.orientation, c.dir);
                    if (y !== void 0) {
                        if (k.metaKey || k.ctrlKey || k.altKey || k.shiftKey) return;
                        k.preventDefault();
                        let p = d().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (y === "last") p.reverse();
                        else if (y === "prev" || y === "next") {
                            y === "prev" && p.reverse();
                            const S = p.indexOf(k.currentTarget);
                            p = c.loop ? Sv(p, S + 1) : p.slice(S + 1);
                        }
                        setTimeout(()=>Vp(p));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: f,
                    hasTabStop: m != null
                }) : i
            })
        });
    });
    Bp.displayName = Up;
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
    function kv(e, t, n) {
        const r = wv(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return xv[r];
    }
    function Vp(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function Sv(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var _v = $p, Cv = Bp, Wp = "Toggle", Gp = E.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = ti({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Wp
        });
        return h.jsx(po.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: zn(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Gp.displayName = Wp;
    var dn = "ToggleGroup", [Hp] = Ma(dn, [
        Fp
    ]), Kp = Fp(), La = re.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return h.jsx(Ev, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return h.jsx(Nv, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${dn}\``);
    });
    La.displayName = dn;
    var [Qp, Yp] = Hp(dn), Ev = re.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = ti({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: dn
        });
        return h.jsx(Qp, {
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
            children: h.jsx(Xp, {
                ...l,
                ref: t
            })
        });
    }), Nv = re.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = ti({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: dn
        }), a = re.useCallback((c)=>s((f = [])=>[
                    ...f,
                    c
                ]), [
            s
        ]), u = re.useCallback((c)=>s((f = [])=>f.filter((d)=>d !== c)), [
            s
        ]);
        return h.jsx(Qp, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: h.jsx(Xp, {
                ...l,
                ref: t
            })
        });
    });
    La.displayName = dn;
    var [Tv, zv] = Hp(dn), Xp = re.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = Kp(n), c = Dp(i), f = {
            role: "group",
            dir: c,
            ...a
        };
        return h.jsx(Tv, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? h.jsx(_v, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: c,
                loop: s,
                children: h.jsx(po.div, {
                    ...f,
                    ref: t
                })
            }) : h.jsx(po.div, {
                ...f,
                ref: t
            })
        });
    }), Dl = "ToggleGroupItem", Zp = re.forwardRef((e, t)=>{
        const n = Yp(Dl, e.__scopeToggleGroup), r = zv(Dl, e.__scopeToggleGroup), o = Kp(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = re.useRef(null);
        return r.rovingFocus ? h.jsx(Cv, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: h.jsx(Kc, {
                ...s,
                ref: t
            })
        }) : h.jsx(Kc, {
            ...s,
            ref: t
        });
    });
    Zp.displayName = Dl;
    var Kc = re.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = Yp(Dl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return h.jsx(Gp, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Rv = La, Iv = Zp;
    const jv = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Pv = (e, t)=>({
            classGroupId: e,
            validator: t
        }), Jp = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Al = "-", Qc = [], Mv = "arbitrary..", Lv = (e)=>{
        const t = Ov(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return bv(i);
                const s = i.split(Al), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return qp(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? jv(u, a) : a : u || Qc;
                }
                return n[i] || Qc;
            }
        };
    }, qp = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = qp(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Al) : e.slice(t).join(Al), a = i.length;
        for(let u = 0; u < a; u++){
            const c = i[u];
            if (c.validator(s)) return c.classGroupId;
        }
    }, bv = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Mv + r : void 0;
        })(), Ov = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Dv(n, t);
    }, Dv = (e, t)=>{
        const n = Jp();
        for(const r in e){
            const o = e[r];
            ba(o, n, r, t);
        }
        return n;
    }, ba = (e, t, n, r)=>{
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
        Uv(e, t, n, r);
    }, Fv = (e, t, n)=>{
        const r = e === "" ? t : em(t, e);
        r.classGroupId = n;
    }, $v = (e, t, n, r)=>{
        if (Bv(e)) {
            ba(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Pv(n, e));
    }, Uv = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            ba(a, em(t, s), n, r);
        }
    }, em = (e, t)=>{
        let n = e;
        const r = t.split(Al), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = Jp(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Bv = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Vv = (e)=>{
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
    }, Ds = "!", Yc = ":", Wv = [], Xc = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Gv = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const c = o.length;
            for(let m = 0; m < c; m++){
                const k = o[m];
                if (i === 0 && s === 0) {
                    if (k === Yc) {
                        l.push(o.slice(a, m)), a = m + 1;
                        continue;
                    }
                    if (k === "/") {
                        u = m;
                        continue;
                    }
                }
                k === "[" ? i++ : k === "]" ? i-- : k === "(" ? s++ : k === ")" && s--;
            }
            const f = l.length === 0 ? o : o.slice(a);
            let d = f, x = !1;
            f.endsWith(Ds) ? (d = f.slice(0, -1), x = !0) : f.startsWith(Ds) && (d = f.slice(1), x = !0);
            const v = u && u > a ? u - a : void 0;
            return Xc(l, x, d, v);
        };
        if (t) {
            const o = t + Yc, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Xc(Wv, !1, i, void 0, !0);
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
            parseClassName: Gv(e),
            sortModifiers: Hv(e),
            ...Lv(e)
        }), Qv = /\s+/, Yv = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Qv);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const c = s[u], { isExternal: f, modifiers: d, hasImportantModifier: x, baseClassName: v, maybePostfixModifierPosition: m } = n(c);
            if (f) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            let k = !!m, y = r(k ? v.substring(0, m) : v);
            if (!y) {
                if (!k) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (y = r(v), !y) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                k = !1;
            }
            const g = d.length === 0 ? "" : d.length === 1 ? d[0] : l(d).join(":"), p = x ? g + Ds : g, S = p + y;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const N = o(y, k);
            for(let R = 0; R < N.length; ++R){
                const j = N[R];
                i.push(p + j);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, Xv = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = tm(n)) && (o && (o += " "), o += r);
        return o;
    }, tm = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = tm(e[r])) && (n && (n += " "), n += t);
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
    }, Jv = [], ve = (e)=>{
        const t = (n)=>n[e] || Jv;
        return t.isThemeGetter = !0, t;
    }, nm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, qv = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, rx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ox = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ut = (e)=>qv.test(e), W = (e)=>!!e && !Number.isNaN(Number(e)), Bt = (e)=>!!e && Number.isInteger(Number(e)), Fi = (e)=>e.endsWith("%") && W(e.slice(0, -1)), Et = (e)=>ex.test(e), om = ()=>!0, lx = (e)=>tx.test(e) && !nx.test(e), Oa = ()=>!1, ix = (e)=>rx.test(e), sx = (e)=>ox.test(e), ax = (e)=>!b(e) && !O(e), ux = (e)=>fn(e, sm, Oa), b = (e)=>nm.test(e), xn = (e)=>fn(e, am, lx), Zc = (e)=>fn(e, yx, W), cx = (e)=>fn(e, cm, om), dx = (e)=>fn(e, um, Oa), Jc = (e)=>fn(e, lm, Oa), fx = (e)=>fn(e, im, sx), Qo = (e)=>fn(e, dm, ix), O = (e)=>rm.test(e), Mr = (e)=>On(e, am), px = (e)=>On(e, um), qc = (e)=>On(e, lm), mx = (e)=>On(e, sm), hx = (e)=>On(e, im), Yo = (e)=>On(e, dm, !0), gx = (e)=>On(e, cm, !0), fn = (e, t, n)=>{
        const r = nm.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, On = (e, t, n = !1)=>{
        const r = rm.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, lm = (e)=>e === "position" || e === "percentage", im = (e)=>e === "image" || e === "url", sm = (e)=>e === "length" || e === "size" || e === "bg-size", am = (e)=>e === "length", yx = (e)=>e === "number", um = (e)=>e === "family-name", cm = (e)=>e === "number" || e === "weight", dm = (e)=>e === "shadow", vx = ()=>{
        const e = ve("color"), t = ve("font"), n = ve("text"), r = ve("font-weight"), o = ve("tracking"), l = ve("leading"), i = ve("breakpoint"), s = ve("container"), a = ve("spacing"), u = ve("radius"), c = ve("shadow"), f = ve("inset-shadow"), d = ve("text-shadow"), x = ve("drop-shadow"), v = ve("blur"), m = ve("perspective"), k = ve("aspect"), y = ve("ease"), g = ve("animate"), p = ()=>[
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
            ], N = ()=>[
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
            ], C = ()=>[
                O,
                b,
                a
            ], B = ()=>[
                Ut,
                "full",
                "auto",
                ...C()
            ], $ = ()=>[
                Bt,
                "none",
                "subgrid",
                O,
                b
            ], he = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Bt,
                        O,
                        b
                    ]
                },
                Bt,
                O,
                b
            ], ye = ()=>[
                Bt,
                "auto",
                O,
                b
            ], Ve = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                O,
                b
            ], yt = ()=>[
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
            ], Ze = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], X = ()=>[
                "auto",
                ...C()
            ], Oe = ()=>[
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
                ...C()
            ], P = ()=>[
                Ut,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...C()
            ], A = ()=>[
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
                ...C()
            ], z = ()=>[
                e,
                O,
                b
            ], D = ()=>[
                ...S(),
                qc,
                Jc,
                {
                    position: [
                        O,
                        b
                    ]
                }
            ], ne = ()=>[
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
            ], vt = ()=>[
                "auto",
                "cover",
                "contain",
                mx,
                ux,
                {
                    size: [
                        O,
                        b
                    ]
                }
            ], De = ()=>[
                Fi,
                Mr,
                xn
            ], ae = ()=>[
                "",
                "none",
                "full",
                u,
                O,
                b
            ], Z = ()=>[
                "",
                W,
                Mr,
                xn
            ], Je = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], pe = ()=>[
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
                W,
                Fi,
                qc,
                Jc
            ], xr = ()=>[
                "",
                "none",
                v,
                O,
                b
            ], Ct = ()=>[
                "none",
                W,
                O,
                b
            ], pn = ()=>[
                "none",
                W,
                O,
                b
            ], Dn = ()=>[
                W,
                O,
                b
            ], mn = ()=>[
                Ut,
                "full",
                ...C()
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
                    om
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
                    W
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
                            b,
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
                            W,
                            b,
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
                        object: N()
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
                            b
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
                            ...C()
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
                            W,
                            Ut,
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
                            W,
                            O,
                            b
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            W,
                            O,
                            b
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
                            b
                        ]
                    }
                ],
                "grid-cols": [
                    {
                        "grid-cols": $()
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
                        "grid-rows": $()
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
                        gap: C()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": C()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": C()
                    }
                ],
                "justify-content": [
                    {
                        justify: [
                            ...yt(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...Ze(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...Ze()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...yt()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...Ze(),
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
                            ...Ze(),
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
                        "place-content": yt()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...Ze(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...Ze()
                        ]
                    }
                ],
                p: [
                    {
                        p: C()
                    }
                ],
                px: [
                    {
                        px: C()
                    }
                ],
                py: [
                    {
                        py: C()
                    }
                ],
                ps: [
                    {
                        ps: C()
                    }
                ],
                pe: [
                    {
                        pe: C()
                    }
                ],
                pbs: [
                    {
                        pbs: C()
                    }
                ],
                pbe: [
                    {
                        pbe: C()
                    }
                ],
                pt: [
                    {
                        pt: C()
                    }
                ],
                pr: [
                    {
                        pr: C()
                    }
                ],
                pb: [
                    {
                        pb: C()
                    }
                ],
                pl: [
                    {
                        pl: C()
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
                        "space-x": C()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": C()
                    }
                ],
                "space-y-reverse": [
                    "space-y-reverse"
                ],
                size: [
                    {
                        size: Oe()
                    }
                ],
                "inline-size": [
                    {
                        inline: [
                            "auto",
                            ...P()
                        ]
                    }
                ],
                "min-inline-size": [
                    {
                        "min-inline": [
                            "auto",
                            ...P()
                        ]
                    }
                ],
                "max-inline-size": [
                    {
                        "max-inline": [
                            "none",
                            ...P()
                        ]
                    }
                ],
                "block-size": [
                    {
                        block: [
                            "auto",
                            ...A()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...A()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...A()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...Oe()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...Oe()
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
                            ...Oe()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...Oe()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...Oe()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...Oe()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            Mr,
                            xn
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
                            Fi,
                            b
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
                            W,
                            "none",
                            O,
                            Zc
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ...C()
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
                            ...Je(),
                            "wavy"
                        ]
                    }
                ],
                "text-decoration-thickness": [
                    {
                        decoration: [
                            W,
                            "from-font",
                            "auto",
                            O,
                            xn
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
                            W,
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
                        indent: C()
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
                        bg: ne()
                    }
                ],
                "bg-size": [
                    {
                        bg: vt()
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
                                    b
                                ],
                                radial: [
                                    "",
                                    O,
                                    b
                                ],
                                conic: [
                                    Bt,
                                    O,
                                    b
                                ]
                            },
                            hx,
                            fx
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
                        from: De()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: De()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: De()
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
                        rounded: ae()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": ae()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": ae()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": ae()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": ae()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": ae()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": ae()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": ae()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": ae()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": ae()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": ae()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": ae()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": ae()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": ae()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": ae()
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
                            ...Je(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            W,
                            Mr,
                            xn
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
                            Yo,
                            Qo
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
                            f,
                            Yo,
                            Qo
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
                            W,
                            xn
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
                            d,
                            Yo,
                            Qo
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
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...pe(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": pe()
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
                            W
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
                            W
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
                        mask: ne()
                    }
                ],
                "mask-size": [
                    {
                        mask: vt()
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
                        blur: xr()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            W,
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
                            x,
                            Yo,
                            Qo
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
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            W,
                            O,
                            b
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            W,
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
                        "backdrop-blur": xr()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            W,
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
                        "border-spacing": C()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": C()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": C()
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
                            W,
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
                            y,
                            O,
                            b
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            W,
                            O,
                            b
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            g,
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
                            m,
                            O,
                            b
                        ]
                    }
                ],
                "perspective-origin": [
                    {
                        "perspective-origin": N()
                    }
                ],
                rotate: [
                    {
                        rotate: Ct()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": Ct()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": Ct()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": Ct()
                    }
                ],
                scale: [
                    {
                        scale: pn()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": pn()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": pn()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": pn()
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
                        origin: N()
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
                        "scroll-m": C()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": C()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": C()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": C()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": C()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": C()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": C()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": C()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": C()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": C()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": C()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": C()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": C()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": C()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": C()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": C()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": C()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": C()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": C()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": C()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": C()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": C()
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
                            W,
                            Mr,
                            xn,
                            Zc
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
    }, xx = Zv(vx);
    function Xt(...e) {
        return xx(Mp(e));
    }
    const wx = Lp("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function Q({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? Xy : "button";
        return h.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Xt(wx({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const kx = Lp("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), fm = E.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Xo({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return h.jsx(Rv, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Xt("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: h.jsx(fm.Provider, {
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
        const l = E.useContext(fm);
        return h.jsx(Iv, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Xt(kx({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function tr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = E.useState(t), s = E.useRef(!1), a = E.useRef({
            x: 0,
            y: 0
        }), u = E.useCallback((c)=>{
            s.current = !0, a.current = {
                x: c.clientX - l.x,
                y: c.clientY - l.y
            };
            const f = (x)=>{
                if (!s.current) return;
                const v = Math.max(0, x.clientX - a.current.x), m = Math.max(0, x.clientY - a.current.y);
                i({
                    x: v,
                    y: m
                });
            }, d = ()=>{
                s.current = !1, window.removeEventListener("mousemove", f), window.removeEventListener("mouseup", d);
            };
            window.addEventListener("mousemove", f), window.addEventListener("mouseup", d);
        }, [
            l
        ]);
        return h.jsxs("div", {
            className: Xt("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: l.x,
                top: l.y
            },
            children: [
                h.jsxs("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg flex items-center justify-between gap-2",
                    onMouseDown: u,
                    children: [
                        h.jsx("span", {
                            children: e
                        }),
                        o && h.jsx("button", {
                            type: "button",
                            "aria-label": "Close",
                            className: "text-gray-400 hover:text-gray-700 cursor-pointer leading-none px-1",
                            onMouseDown: (c)=>c.stopPropagation(),
                            onClick: o,
                            children: "✕"
                        })
                    ]
                }),
                h.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const Sx = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Lr(e) {
        return Sx[e] ?? "#000000";
    }
    function _x(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, c = s * a + o * 2;
        e.width = u, e.height = c;
        const f = e.getContext("2d");
        if (f) {
            l && (f.fillStyle = l, f.fillRect(0, 0, u, c)), f.translate(o, o);
            for (const [d, x, v] of t.cells ?? []){
                const m = Lr(v);
                m && (f.fillStyle = m, f.fillRect(x * a, d * a, a, a));
            }
            for (const [d, x, v, m, k, y] of t.rects ?? []){
                const g = Math.min(x, m) * a, p = Math.min(d, v) * a, S = Math.abs(m - x) * a, N = Math.abs(v - d) * a, R = Lr(k);
                R && (f.fillStyle = R, f.fillRect(g, p, S, N));
                const j = Lr(y);
                j && (f.strokeStyle = j, f.lineWidth = Math.max(1, a / 8), f.strokeRect(g, p, S, N));
            }
            for (const [d, x, v, m, k] of t.lines ?? []){
                const y = Lr(k);
                y && (f.strokeStyle = y, f.lineWidth = Math.max(1, a / 6), f.beginPath(), f.moveTo(x * a, d * a), f.lineTo(m * a, v * a), f.stroke());
            }
            f.textBaseline = "alphabetic";
            for (const d of t.texts ?? []){
                const x = Array.isArray(d) ? d.length >= 9 ? {
                    r: d[0],
                    c: d[1],
                    color: d[2],
                    size: d[3],
                    text: d[8]
                } : {
                    r: d[0],
                    c: d[1],
                    color: d[2],
                    size: d[3],
                    text: d[4]
                } : d;
                if (!x || typeof x.r != "number" || typeof x.c != "number") continue;
                f.fillStyle = Lr(x.color) ?? "#000000";
                const v = x.size ?? 1;
                f.font = `${Math.max(6, v * a * fo)}px 'BigBlue Terminal', monospace`, f.fillText(String(x.text ?? ""), x.c * a, (x.r + v * fo) * a);
            }
            f.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function dl({ design: e, size: t = 96, className: n }) {
        const r = E.useRef(null);
        return E.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            _x(r.current, e, o);
        }, [
            e,
            t
        ]), h.jsx("canvas", {
            ref: r,
            className: n,
            style: {
                imageRendering: "pixelated"
            }
        });
    }
    const Cx = {}, pm = Cx?.VITE_API_URL ?? "https://api.seanneilan.com", Da = "grid-draw-token", As = "grid-draw-auth-expired";
    function mm() {
        return localStorage.getItem(Da);
    }
    function hm() {
        localStorage.removeItem(Da);
    }
    async function Ex(e, t) {
        const n = await fetch(`${pm}/api/login`, {
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
        localStorage.setItem(Da, r);
    }
    async function Ot(e, t, n) {
        const r = {}, o = mm();
        o && (r.Authorization = `Bearer ${o}`), n !== void 0 && (r["Content-Type"] = "application/json");
        const l = await fetch(`${pm}${t}`, {
            method: e,
            headers: r,
            body: n === void 0 ? void 0 : JSON.stringify(n)
        });
        if (l.status === 401) throw hm(), window.dispatchEvent(new Event(As)), new Error("session expired — please log in again");
        if (!l.ok) {
            const i = await l.json().catch(()=>null);
            throw new Error(i?.error ?? `${e} ${t} failed (${l.status})`);
        }
        if (l.status !== 204) return await l.json();
    }
    function Nx() {
        return Ot("GET", "/api/designs");
    }
    function Tx(e) {
        return Ot("GET", `/api/designs/${e}`);
    }
    function zx(e) {
        return Ot("GET", `/api/designs?name=${encodeURIComponent(e)}`);
    }
    async function Rx(e, t, n) {
        return (await Ot("PUT", "/api/designs", {
            name: e,
            design: t,
            history: n
        })).id;
    }
    function Ix(e) {
        return Ot("DELETE", `/api/designs/${e}`);
    }
    function ed() {
        return Ot("GET", "/api/examples");
    }
    async function jx(e, t, n) {
        return (await Ot("POST", "/api/examples", {
            input: e,
            output: t,
            delta: n
        })).id;
    }
    function Px(e, t, n, r) {
        return Ot("PUT", `/api/examples/${e}`, {
            input: t,
            output: n,
            delta: r
        }).then(()=>{});
    }
    function Mx(e) {
        return Ot("DELETE", `/api/examples/${e}`);
    }
    const mo = 31;
    function Lx(e) {
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
    function bx(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = Lx(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function td(e, t) {
        return e >= 0 && e <= mo && t >= 0 && t <= mo;
    }
    const pt = mo + 1, gm = "indexeddb://grid-draw-coord-model";
    let nd, hr = null;
    async function Aa() {
        return nd ??= Cp(()=>import("./index2.js"), []), nd;
    }
    function Ox(e) {
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
    function ym(e, t) {
        const n = new Float32Array(t.length * 2 * pt);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * pt + r] = 1, n[l * 2 * pt + pt + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * pt
        ]);
    }
    function rd(e, t) {
        const n = new Float32Array(t.length * pt);
        return t.forEach((r, o)=>{
            n[o * pt + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            pt
        ]);
    }
    async function Dx() {
        const e = await Aa();
        try {
            return hr = await e.loadLayersModel(gm), !0;
        } catch  {
            return hr = null, !1;
        }
    }
    async function Ax(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await Aa(), { pairs: s, skippedExamples: a } = bx(e), u = [];
        let c = 0;
        for (const k of s)td(k[0], k[1]) && td(k[2], k[3]) ? u.push(k) : c++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const f = ym(i, u.map((k)=>[
                k[0],
                k[1]
            ])), d = rd(i, u.map((k)=>k[2])), x = rd(i, u.map((k)=>k[3])), v = Ox(i);
        v.compile({
            optimizer: i.train.adam(o),
            loss: [
                "categoricalCrossentropy",
                "categoricalCrossentropy"
            ]
        });
        let m = NaN;
        return await v.fit(f, [
            d,
            x
        ], {
            epochs: n,
            batchSize: Math.min(r, u.length),
            shuffle: !0,
            callbacks: {
                onEpochEnd: async (k, y)=>{
                    m = y?.loss ?? m, l?.(k + 1, n, m), await i.nextFrame();
                }
            }
        }), f.dispose(), d.dispose(), x.dispose(), hr?.dispose(), hr = v, await v.save(gm), {
            pairs: u.length,
            droppedPoints: c,
            skippedExamples: a,
            finalLoss: m
        };
    }
    async function Fx(e) {
        if (!hr) throw new Error("No model yet — train one first.");
        const t = await Aa(), n = e.cells ?? [];
        if (n.length === 0) return {
            w: 1,
            h: 1,
            cells: [],
            lines: [],
            rects: [],
            texts: []
        };
        const r = n.map(([a, u])=>[
                Math.max(0, Math.min(mo, a)),
                Math.max(0, Math.min(mo, u))
            ]), o = t.tidy(()=>{
            const a = ym(t, r), [u, c] = hr.predict(a), f = u.argMax(1).dataSync(), d = c.argMax(1).dataSync();
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
    const de = Ep((e, t)=>({
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
                        designs: await Nx(),
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
                        examples: await ed(),
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
                const l = await Rx(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>zx(n),
            getDrawingById: (n)=>Tx(n),
            saveExamplePair: async (n, r, o)=>{
                await jx(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await Px(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await Ix(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await Mx(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await Dx();
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
                const n = await ed();
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
                    const r = await Ax(n, {
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
            runPredict: (n)=>Fx(n)
        })), vm = "/grid-draw/";
    function $x(e) {
        window.location.href = `${vm}design/${encodeURIComponent(e)}/`;
    }
    function Ux() {
        window.location.href = vm;
    }
    function xm({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = de((k)=>k.designs), o = de((k)=>k.examples), l = de((k)=>k.loadingDesigns || k.loadingExamples), i = de((k)=>k.error), s = de((k)=>k.loadDesigns), a = de((k)=>k.loadExamples), u = de((k)=>k.deleteDrawing), c = de((k)=>k.deleteExamplePair), f = E.useCallback(()=>{
            s(), a();
        }, [
            s,
            a
        ]);
        E.useEffect(()=>{
            f();
        }, [
            f
        ]);
        const d = E.useCallback((k, y)=>{
            window.confirm(`Delete drawing “${y}”? This can't be undone.`) && u(k);
        }, [
            u
        ]), x = E.useCallback((k)=>{
            window.confirm("Delete this training example? This can't be undone.") && c(k);
        }, [
            c
        ]), v = E.useCallback((k)=>{
            n ? n(k) : $x(k);
        }, [
            n
        ]), m = h.jsxs(h.Fragment, {
            children: [
                l && h.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "Loading…"
                }),
                h.jsxs("section", {
                    className: "mb-10",
                    children: [
                        h.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Saved drawings (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && !l && h.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No saved drawings yet — use “Save to Gallery” in the editor."
                        }),
                        h.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4",
                            children: r.map((k)=>h.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        h.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: h.jsx(dl, {
                                                design: k.design,
                                                size: 120
                                            })
                                        }),
                                        h.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: k.name,
                                            children: k.name
                                        }),
                                        h.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                h.jsx(Q, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>v(k.name),
                                                    children: "Open"
                                                }),
                                                h.jsx(Q, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-red-600",
                                                    onClick: ()=>d(k.id, k.name),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, k.id))
                        })
                    ]
                }),
                h.jsxs("section", {
                    children: [
                        h.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                o.length,
                                ")"
                            ]
                        }),
                        o.length === 0 && !l && h.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — capture some with “Make Training Data”."
                        }),
                        h.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4",
                            children: o.map((k)=>h.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        h.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                h.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        h.jsx(dl, {
                                                            design: k.input,
                                                            size: 80
                                                        }),
                                                        h.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "input"
                                                        })
                                                    ]
                                                }),
                                                h.jsx("span", {
                                                    className: "text-gray-300",
                                                    children: "→"
                                                }),
                                                h.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        h.jsx(dl, {
                                                            design: k.output,
                                                            size: 80
                                                        }),
                                                        h.jsx("span", {
                                                            className: "text-[10px] text-gray-400 mt-1",
                                                            children: "output"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        h.jsx(Q, {
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
        return e ? h.jsxs(tr, {
            title: "Gallery",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 880) / 2),
                y: 64
            },
            className: "w-[880px] max-w-[95vw] z-30",
            children: [
                h.jsxs("div", {
                    className: "mb-3 flex items-center gap-3",
                    children: [
                        h.jsx(Q, {
                            variant: "outline",
                            size: "sm",
                            onClick: f,
                            children: "Refresh"
                        }),
                        i && h.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                h.jsx("div", {
                    className: "max-h-[70vh] overflow-auto pr-1",
                    children: m
                })
            ]
        }) : h.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                h.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        h.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Gallery"
                        }),
                        h.jsx(Q, {
                            variant: "outline",
                            size: "sm",
                            onClick: Ux,
                            children: "← Editor"
                        }),
                        h.jsx(Q, {
                            variant: "outline",
                            size: "sm",
                            onClick: f,
                            children: "Refresh"
                        }),
                        h.jsx(Q, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                hm(), window.location.reload();
                            },
                            children: "Log out"
                        }),
                        i && h.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                String(i)
                            ]
                        })
                    ]
                }),
                m
            ]
        });
    }
    const Bx = "/grid-draw/";
    function od({ design: e, label: t, onClick: n }) {
        const r = h.jsx(dl, {
            design: e,
            size: 84
        });
        return h.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
                n ? h.jsx("button", {
                    type: "button",
                    onClick: n,
                    title: `Load this ${t} into the editor`,
                    className: "rounded ring-1 ring-transparent hover:ring-blue-400 hover:ring-2 focus:outline-none focus:ring-blue-500 cursor-pointer",
                    children: r
                }) : r,
                h.jsx("span", {
                    className: "text-[10px] text-gray-400 mt-1",
                    children: t
                })
            ]
        });
    }
    function Vx({ input: e, output: t, onInput: n, onOutput: r }) {
        return h.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                h.jsx(od, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                h.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                h.jsx(od, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function wm({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = de((a)=>a.examples), o = de((a)=>a.error), l = de((a)=>a.loadExamples);
        E.useEffect(()=>{
            l();
        }, [
            l
        ]);
        const s = h.jsxs(h.Fragment, {
            children: [
                h.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        h.jsx(Q, {
                            variant: "outline",
                            size: "sm",
                            onClick: l,
                            children: "Refresh"
                        }),
                        o && h.jsx("span", {
                            className: "text-sm text-red-500",
                            children: o
                        })
                    ]
                }),
                h.jsxs("section", {
                    children: [
                        h.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Training examples (",
                                r.length,
                                ")"
                            ]
                        }),
                        r.length === 0 && h.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No training examples yet — use “Make Training Data”."
                        }),
                        h.jsx("div", {
                            className: "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4",
                            children: r.map((a)=>h.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-1",
                                    children: [
                                        h.jsx(Vx, {
                                            input: a.input,
                                            output: a.output,
                                            onInput: n && (()=>n(a, "input")),
                                            onOutput: n && (()=>n(a, "output"))
                                        }),
                                        h.jsxs("span", {
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
        return e ? h.jsx(tr, {
            title: "Training Data",
            onClose: t,
            defaultPosition: {
                x: Math.max(20, (window.innerWidth - 900) / 2),
                y: 64
            },
            className: "w-[900px] max-w-[95vw] z-30",
            children: h.jsx("div", {
                className: "max-h-[72vh] overflow-auto pr-1",
                children: s
            })
        }) : h.jsxs("div", {
            className: "min-h-screen w-full bg-gray-50 p-6",
            children: [
                h.jsxs("header", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        h.jsx("h1", {
                            className: "text-xl font-semibold",
                            children: "Training Data"
                        }),
                        h.jsx(Q, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = Bx;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const Vt = 2, Wx = 8, Sn = 48;
    function ld(e) {
        return [
            e[0],
            e[1],
            e[0] + e[4],
            e[1] + e[3]
        ];
    }
    const Un = "/grid-draw/", id = [
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
    function Gx() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function Hx(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function sd() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - Sn)
        };
    }
    function Kx() {
        const [e, t] = E.useState(()=>sd()), n = E.useRef(null), { grid: r, loading: o, error: l } = $y(n, e.w, e.h), i = tt(), { tool: s, setTool: a, colorIdx: u, setColorIdx: c, pickColor: f, outlineIdx: d, pickOutline: x, isDrawing: v, drawMode: m, startDrawing: k, stopDrawing: y, lineStart: g, startLine: p, finishLine: S, rectStart: N, startRect: R, finishRect: j, textSize: C, pickTextSize: B, lineWidth: $, pickLineWidth: he, pickTextAlign: ye, subdivision: Ve, cycleSubdivision: yt, setSubdivision: Ze, beginTextEdit: X, typeTextChar: Oe, backspaceText: P, commitTextEdit: A, cancelTextEdit: z, selectedItems: D, setSelectedItems: ne, selectAll: vt, clipboard: De, copy: ae, paste: Z, deleteSelected: Je, selectMode: pe, isSelecting: J, selectBoxStart: xr, selectDragStart: Ct, startBoxSelection: pn, updateBoxSelection: Dn, finishBoxSelection: mn, cancelBoxSelection: Fa, startDragSelection: ko, finishDragSelection: $a, cancelDragSelection: Ua, startResize: Ba, updateResize: Va, finishResize: Wa, cancelResize: Ga, startRotate: Ha, updateRotate: Ka, finishRotate: Qa, cancelRotate: Ya, setMousePos: Xa, addItemToSelection: Za, removeItemFromSelection: Ja, hitTestShapes: So, getSelectedCells: km, jsonOutput: Sm, tensorOutput: _m, importJson: Cm, importTensor: Em, clear: ni, updateOutputs: wr, renderSelection: ri, beginDrawStroke: qa, drawCellAt: _o, endDrawStroke: eu, commitLine: tu, commitRect: nu, undo: oi, redo: li, canUndo: Nm, canRedo: Tm, captureMode: ii, captureInput: kr, startTrainingCapture: zm, captureSetInput: Rm, buildTrainingExample: ru, finishTrainingCapture: ou, cancelTrainingCapture: lu, serializeWholeGrid: Co, exportHistory: iu, loadDesignWithHistory: hn, currentName: su, setCurrentName: it, saveState: si, setSaveState: au, resetHistory: uu } = i;
        i.historyTick;
        const cu = de((w)=>w.saveDrawing), Eo = de((w)=>w.getDrawing), du = de((w)=>w.getDrawingById), fu = de((w)=>w.saveExamplePair), pu = de((w)=>w.updateExamplePair), mu = de((w)=>w.runPredict), hu = de((w)=>w.trainModel), gu = de((w)=>w.initModel), yu = de((w)=>w.modelStatus), _e = de((w)=>w.training), Sr = km(), [vu, ue] = E.useState(""), [Im, ai] = E.useState(!1), [jm, ui] = E.useState(!1), [Dt, ci] = E.useState(null), [An, Pm] = E.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), Mm = .25, Lm = 12, At = E.useRef(An);
        At.current = An;
        const _r = E.useCallback((w)=>{
            Pm(w), r?.set_camera(w.x, w.y, w.zoom);
        }, [
            r
        ]), No = E.useRef(!1), [bm, xu] = E.useState(!1), gn = E.useRef(null), Om = E.useCallback(async ()=>{
            const w = Co();
            if (!w || w.cells.length + w.lines.length + w.rects.length + w.texts.length === 0) {
                ue("Nothing to save — draw something first.");
                return;
            }
            const _ = Gx();
            ue("Saving to gallery…");
            try {
                await cu(_, w, iu()), it(_), window.history.replaceState({}, "", `${Un}design/${_}/`), ue(`Saved as ${_}. Auto-saving changes.`);
            } catch (I) {
                ue(`Save failed: ${I instanceof Error ? I.message : String(I)}`);
            }
        }, [
            Co,
            iu,
            it,
            cu
        ]);
        E.useEffect(()=>{
            if (!r) return;
            let w = !1;
            const _ = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (_) return Eo(_[1]).then((M)=>{
                w || (hn(M.design, M.history ?? null), it(M.name));
            }).catch(()=>ue(`No drawing named "${_[1]}".`)), ()=>{
                w = !0;
            };
            const I = new URLSearchParams(window.location.search).get("load");
            if (I) return du(Number(I)).then((M)=>{
                w || (hn(M.design, M.history ?? null), it(M.name), window.history.replaceState({}, "", `${Un}design/${encodeURIComponent(M.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Un);
            }), ()=>{
                w = !0;
            };
        }, [
            r,
            hn,
            it,
            Eo,
            du
        ]), E.useEffect(()=>{
            gu();
        }, [
            gu
        ]);
        const Dm = E.useCallback(async ()=>{
            const w = ru();
            if (!w) {
                ue("Select the output region first.");
                return;
            }
            ue("Saving…");
            try {
                await fu(w.input, w.output, w.delta), ou(), ue("Saved.");
            } catch (_) {
                ue(`Save failed: ${_ instanceof Error ? _.message : String(_)}`);
            }
        }, [
            ru,
            ou,
            fu
        ]), Am = E.useCallback(async ()=>{
            ue("Training in the browser…");
            try {
                await hu(), ue("Model trained. Try Predict from Selection.");
            } catch (w) {
                ue(`Train failed: ${w instanceof Error ? w.message : String(w)}`);
            }
        }, [
            hu
        ]), Fm = E.useCallback(async ()=>{
            const { grid: w, selectedItems: _ } = tt.getState();
            if (!w) return;
            const I = cl(w, _);
            if (!I) {
                ue("Select an input region to predict from.");
                return;
            }
            const M = Ge(_, w), H = M ? M.minRow : 0, V = M ? M.minCol : 0;
            ue("Predicting…");
            try {
                const F = await mu(I);
                tt.getState().placeDesign(F, H, V), ue(Hx(F) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (F) {
                ue(`Predict failed: ${F instanceof Error ? F.message : String(F)}`);
            }
        }, [
            mu
        ]), $m = E.useCallback(async (w)=>{
            const _ = await Eo(w);
            hn(_.design, _.history ?? null), it(_.name), ci(null), window.history.replaceState({}, "", `${Un}design/${encodeURIComponent(_.name)}/`), ai(!1);
        }, [
            hn,
            it,
            Eo
        ]), Um = E.useCallback((w, _)=>{
            const I = _ === "input" ? w.input : w.output, M = _ === "input" ? w.output : w.input;
            hn(I, null), it(null), ci({
                id: w.id,
                half: _,
                otherHalf: M
            }), window.history.replaceState({}, "", Un), ui(!1), ue(`Editing example #${w.id} (${_}) — click "Update example" to save over it.`);
        }, [
            hn,
            it
        ]), Bm = E.useCallback(async ()=>{
            if (!Dt) return;
            const w = Co();
            if (!w) {
                ue("Nothing to save — draw something first.");
                return;
            }
            const { id: _, half: I, otherHalf: M } = Dt, H = I === "input" ? w : M, V = I === "output" ? w : M;
            ue(`Updating example #${_}…`);
            try {
                await pu(_, H, V), ue(`Example #${_} (${I}) updated.`);
            } catch (F) {
                ue(`Update failed: ${F instanceof Error ? F.message : String(F)}`);
            }
        }, [
            Dt,
            Co,
            pu
        ]), Vm = E.useCallback(()=>{
            it(null), ci(null), ni(), uu(), au("idle"), window.history.replaceState({}, "", Un), ue("");
        }, [
            it,
            ni,
            uu,
            au
        ]);
        E.useEffect(()=>{
            const w = ()=>{
                const _ = sd();
                t(_), r?.set_viewport(_.w, _.h);
            };
            return window.addEventListener("resize", w), ()=>window.removeEventListener("resize", w);
        }, [
            r
        ]), E.useEffect(()=>{
            const w = (_)=>{
                if (tt.getState().textEdit) return;
                _.key === "\\" && a(s === "line" ? "draw" : "line"), _.key === "m" && a(s === "rect" ? "draw" : "rect"), _.key === "t" && a(s === "text" ? "draw" : "text"), _.key === "s" && a(s === "select" ? "draw" : "select"), (_.key === "Delete" || _.key === "Backspace") && D.length > 0 && (_.preventDefault(), Je()), (_.ctrlKey || _.metaKey) && _.key.toLowerCase() === "a" && (_.preventDefault(), vt()), (_.ctrlKey || _.metaKey) && _.key === "c" && D.length > 0 && (_.preventDefault(), ae()), (_.ctrlKey || _.metaKey) && _.key === "v" && De && (_.preventDefault(), Z()), (_.ctrlKey || _.metaKey) && _.key.toLowerCase() === "g" && (_.preventDefault(), yt()), (_.ctrlKey || _.metaKey) && !_.shiftKey && _.key.toLowerCase() === "z" && (_.preventDefault(), oi()), (_.ctrlKey || _.metaKey) && (_.shiftKey && _.key.toLowerCase() === "z" || _.key.toLowerCase() === "y") && (_.preventDefault(), li());
                const I = parseInt(_.key);
                I >= 1 && I <= 7 && c(I - 1);
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            s,
            a,
            c,
            D,
            Je,
            ae,
            Z,
            De,
            oi,
            li,
            vt,
            yt
        ]), E.useEffect(()=>{
            const w = (_)=>{
                if (tt.getState().textEdit) {
                    if (_.key === "Enter") {
                        _.preventDefault(), A();
                        return;
                    }
                    if (_.key === "Escape") {
                        _.preventDefault(), z();
                        return;
                    }
                    if (_.key === "Backspace") {
                        _.preventDefault(), P();
                        return;
                    }
                    _.key.length === 1 && !_.ctrlKey && !_.metaKey && !_.altKey && (_.preventDefault(), Oe(_.key));
                }
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            A,
            z,
            P,
            Oe
        ]), E.useEffect(()=>{
            const w = n.current;
            if (!w) return;
            const _ = (I)=>{
                I.preventDefault();
                const M = At.current, H = I.deltaY < 0 ? 1.1 : 1 / 1.1, V = Math.min(Lm, Math.max(Mm, M.zoom * H));
                if (V === M.zoom) return;
                const F = I.clientX, U = I.clientY - Sn, ce = M.x + F * (1 / M.zoom - 1 / V), je = M.y + U * (1 / M.zoom - 1 / V);
                _r({
                    x: ce,
                    y: je,
                    zoom: V
                });
            };
            return w.addEventListener("wheel", _, {
                passive: !1
            }), ()=>w.removeEventListener("wheel", _);
        }, [
            _r
        ]), E.useEffect(()=>{
            const w = (I)=>{
                I.code !== "Space" || tt.getState().textEdit || (I.preventDefault(), No.current = !0, xu(!0));
            }, _ = (I)=>{
                I.code === "Space" && (No.current = !1, xu(!1));
            };
            return window.addEventListener("keydown", w), window.addEventListener("keyup", _), ()=>{
                window.removeEventListener("keydown", w), window.removeEventListener("keyup", _);
            };
        }, []);
        const Wm = E.useCallback(()=>_r({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            _r
        ]), Fn = (w)=>{
            const _ = w.currentTarget, I = _.getBoundingClientRect(), M = (w.clientX - I.left) * (_.width / I.width), H = (w.clientY - I.top) * (_.height / I.height), V = At.current;
            return {
                x: M / V.zoom + V.x,
                y: H / V.zoom + V.y
            };
        }, wu = ()=>Wx / Ve, yn = (w)=>{
            const { x: _, y: I } = Fn(w), M = wu(), H = (V)=>Math.floor(Math.floor(V / Vt) / M) * M;
            return {
                col: H(_),
                row: H(I)
            };
        }, Ft = (w)=>{
            const { x: _, y: I } = Fn(w), M = wu(), H = (V)=>Math.round(V / Vt / M) * M;
            return {
                col: H(_),
                row: H(I)
            };
        }, To = (w)=>D.some((_)=>_.type !== w.type ? !1 : _.type === "cell" && w.type === "cell" ? _.row === w.row && _.col === w.col : _.type === "line" && w.type === "line" || _.type === "rect" && w.type === "rect" || _.type === "text" && w.type === "text" ? _.index === w.index : !1), Gm = E.useCallback((w)=>{
            if (r) {
                if (w.button === 1 || w.button === 0 && No.current) {
                    w.preventDefault(), gn.current = {
                        x: w.clientX,
                        y: w.clientY,
                        camX: At.current.x,
                        camY: At.current.y
                    }, w.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (r.set_draw_color(u), r.set_outline_color(d), s === "draw") {
                    const { col: _, row: I } = yn(w), M = u === 6 ? !1 : !r.get_cell(I, _);
                    k(M), qa(), _o(I, _, M), wr();
                } else if (s === "line") {
                    const { col: _, row: I } = Ft(w);
                    p({
                        row: I,
                        col: _
                    }), r.render_with_line(I, _, I, _);
                } else if (s === "rect") {
                    const { col: _, row: I } = Ft(w);
                    R({
                        row: I,
                        col: _
                    }), r.render_with_rect(I, _, I, _);
                } else if (s === "text") {
                    const { col: _, row: I } = yn(w);
                    X({
                        row: I,
                        col: _
                    });
                } else if (s === "select") {
                    const { col: _, row: I } = yn(w), { x: M, y: H } = Fn(w), V = w.shiftKey;
                    if (D.length > 0 && !V) {
                        const je = Ge(D, r);
                        if (je) {
                            const zo = Ms(je), Ro = 10 / At.current.zoom;
                            if (Math.hypot(M - zo.c * Vt, H - zo.r * Vt) <= Ro) {
                                Ha(M, H);
                                return;
                            }
                        }
                    }
                    if (D.length === 1 && !V) {
                        const je = D[0];
                        if (je.type === "line" || je.type === "rect" || je.type === "text") {
                            const zo = je.type === "line" ? Ls(r.get_line(je.index)) : je.type === "rect" ? er(r.get_rect(je.index)) : er(ld(r.get_text(je.index))), Ro = Mc(M, H, zo, Vt, 9);
                            if (Ro) {
                                Ba({
                                    shape: je.type,
                                    index: je.index,
                                    handle: Ro.handle
                                });
                                return;
                            }
                        }
                    }
                    const F = Ge(D, r), U = F && I >= F.minRow && I <= F.maxRow && _ >= F.minCol && _ <= F.maxCol, ce = So(M, H);
                    ce && !V && To(ce) && D.length > 1 ? (ko({
                        row: I,
                        col: _
                    }), ri()) : U && D.length > 0 && !V && !ce ? (ko({
                        row: I,
                        col: _
                    }, !0), ri()) : ce ? V && !To(ce) ? Za(ce) : V && To(ce) ? Ja(ce) : (ne([
                        ce
                    ]), ko({
                        row: I,
                        col: _
                    }), r.render(), ce.type === "cell" ? r.highlight_cell(ce.row, ce.col) : ce.type === "line" ? r.highlight_line(ce.index) : ce.type === "rect" && r.highlight_rect(ce.index)) : pn({
                        row: I,
                        col: _
                    }, V);
                }
            }
        }, [
            r,
            s,
            u,
            d,
            D,
            Sr,
            So,
            k,
            p,
            R,
            pn,
            ko,
            Ba,
            Ha,
            Za,
            Ja,
            ne,
            wr,
            ri,
            qa,
            _o,
            X
        ]), Hm = E.useCallback((w)=>{
            if (!r) return;
            if (gn.current) {
                const I = gn.current, M = At.current.zoom;
                _r({
                    x: I.camX - (w.clientX - I.x) / M,
                    y: I.camY - (w.clientY - I.y) / M,
                    zoom: M
                });
                return;
            }
            const _ = yn(w);
            if (Xa(_), s === "select") {
                const I = w.currentTarget;
                if (J && (pe === "resize" || pe === "rotate")) I.style.cursor = "grabbing";
                else if (J && pe === "drag") I.style.cursor = "move";
                else {
                    const { x: M, y: H } = Fn(w);
                    let V = "crosshair";
                    if (D.length > 0) {
                        const F = Ge(D, r);
                        if (F) {
                            const U = Ms(F);
                            Math.hypot(M - U.c * Vt, H - U.r * Vt) <= 10 / At.current.zoom && (V = "grab");
                        }
                    }
                    if (V === "crosshair" && D.length === 1) {
                        const F = D[0];
                        if (F.type === "line" || F.type === "rect" || F.type === "text") {
                            const U = F.type === "line" ? Ls(r.get_line(F.index)) : F.type === "rect" ? er(r.get_rect(F.index)) : er(ld(r.get_text(F.index)));
                            Mc(M, H, U, Vt, 9) && (V = "grab");
                        }
                    }
                    if (V === "crosshair" && D.length > 0) {
                        const F = So(M, H), U = Ge(D, r), ce = U && _.row >= U.minRow && _.row <= U.maxRow && _.col >= U.minCol && _.col <= U.maxCol;
                        (F && To(F) || ce) && (V = "move");
                    }
                    I.style.cursor = V;
                }
            } else w.currentTarget.style.cursor = "crosshair";
            if (!(!v && !J)) {
                if (s === "draw" && v) {
                    const { col: I, row: M } = yn(w);
                    _o(M, I, m), wr();
                } else if (s === "line" && g) {
                    const { col: I, row: M } = Ft(w);
                    r.render_with_line(g.row, g.col, M, I);
                } else if (s === "rect" && N) {
                    const { col: I, row: M } = Ft(w);
                    r.render_with_rect(N.row, N.col, M, I);
                } else if (s === "select" && J && pe === "resize") {
                    const { col: I, row: M } = Ft(w);
                    Va({
                        row: M,
                        col: I
                    });
                } else if (s === "select" && J && pe === "rotate") {
                    const { x: I, y: M } = Fn(w);
                    Ka(I, M);
                } else if (s === "select" && J) {
                    const { col: I, row: M } = yn(w);
                    if (pe === "box" && xr) Dn({
                        row: M,
                        col: I
                    });
                    else if (pe === "drag" && Ct && D.length > 0) {
                        const H = M - Ct.row, V = I - Ct.col;
                        r.render();
                        for (const F of D)if (F.type === "cell") {
                            const U = F.row + H, ce = F.col + V;
                            r.preview_cell(U, ce, r.get_cell_color(F.row, F.col));
                        } else if (F.type === "line") {
                            const U = r.get_line(F.index);
                            U.length >= 6 && r.preview_line(U[0] + H, U[1] + V, U[2] + H, U[3] + V, U[4], U[5]);
                        } else if (F.type === "rect") {
                            const U = r.get_rect(F.index);
                            U.length >= 6 && r.preview_rect(U[0] + H, U[1] + V, U[2] + H, U[3] + V, U[4], U[5]);
                        } else if (F.type === "text") {
                            const U = r.get_text(F.index);
                            U.length >= 7 && r.preview_text(U[0] + H, U[1] + V, U[2], r.get_text_size(F.index), U[3], U[4], U[5], U[6], r.get_text_string(F.index));
                        }
                    }
                }
            }
        }, [
            r,
            s,
            v,
            J,
            m,
            g,
            N,
            pe,
            xr,
            Ct,
            D,
            So,
            Xa,
            Dn,
            Va,
            Ka,
            wr,
            _o
        ]), Km = E.useCallback((w)=>{
            if (r) {
                if (gn.current) {
                    gn.current = null, w.currentTarget.style.cursor = No.current ? "grab" : "crosshair";
                    return;
                }
                if (s === "draw") eu(), y();
                else if (s === "line") {
                    if (g) {
                        const { col: _, row: I } = Ft(w);
                        tu(g.row, g.col, I, _);
                    }
                    S();
                } else if (s === "rect") {
                    if (N) {
                        const { col: _, row: I } = Ft(w);
                        nu(N.row, N.col, I, _);
                    }
                    j();
                } else if (s === "select") {
                    const { col: _, row: I } = yn(w);
                    if (pe === "rotate") {
                        const { x: M, y: H } = Fn(w);
                        Qa(M, H);
                    } else if (pe === "resize") {
                        const { col: M, row: H } = Ft(w);
                        Wa({
                            row: H,
                            col: M
                        });
                    } else pe === "box" ? mn({
                        row: I,
                        col: _
                    }) : pe === "drag" && $a({
                        row: I,
                        col: _
                    });
                }
            }
        }, [
            r,
            s,
            g,
            N,
            pe,
            y,
            S,
            j,
            mn,
            $a,
            Wa,
            Qa,
            wr,
            eu,
            tu,
            nu
        ]), Qm = E.useCallback(()=>{
            if (gn.current) {
                gn.current = null;
                return;
            }
            s === "draw" ? y() : s === "line" ? (r && r.render(), S()) : s === "rect" ? (r && r.render(), j()) : s === "select" && (pe === "box" ? Fa() : pe === "drag" ? Ua() : pe === "resize" ? Ga() : pe === "rotate" && Ya());
        }, [
            r,
            s,
            pe,
            y,
            S,
            j,
            Fa,
            Ua,
            Ga,
            Ya
        ]);
        return l ? h.jsx("div", {
            className: "flex items-center justify-center bg-gray-100 min-h-screen",
            children: h.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: h.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        l
                    ]
                })
            })
        }) : h.jsxs(h.Fragment, {
            children: [
                h.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        h.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Grid Draw"
                        }),
                        o && h.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        }),
                        h.jsxs("div", {
                            className: "ml-auto flex items-center gap-3",
                            children: [
                                su && h.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        su,
                                        si === "saving" && " · saving…",
                                        si === "saved" && " · saved",
                                        si === "error" && " · save failed"
                                    ]
                                }),
                                (An.zoom !== 1 || An.x !== 0 || An.y !== 0) && h.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        h.jsxs("span", {
                                            className: "text-sm text-gray-500 tabular-nums",
                                            children: [
                                                Math.round(An.zoom * 100),
                                                "%"
                                            ]
                                        }),
                                        h.jsx(Q, {
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
                h.jsx("canvas", {
                    ref: n,
                    className: Xt("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: Sn,
                        cursor: o ? "wait" : bm ? "grab" : "crosshair"
                    },
                    onMouseDown: Gm,
                    onMouseMove: Hm,
                    onMouseUp: Km,
                    onMouseLeave: Qm
                }),
                h.jsx(tr, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: Sn + 20
                    },
                    children: h.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            h.jsxs("div", {
                                children: [
                                    h.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    h.jsxs(Xo, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (w)=>w && a(w),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            h.jsx(ut, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            h.jsx(ut, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            h.jsx(ut, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            h.jsx(ut, {
                                                value: "text",
                                                className: "text-xs",
                                                children: "Text"
                                            }),
                                            h.jsx(ut, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            h.jsxs("div", {
                                children: [
                                    h.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Grid (Ctrl+G)"
                                    }),
                                    h.jsxs(Xo, {
                                        type: "single",
                                        value: String(Ve),
                                        onValueChange: (w)=>w && Ze(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            h.jsx(ut, {
                                                value: "1",
                                                className: "text-xs",
                                                title: "Whole cells",
                                                children: "1×"
                                            }),
                                            h.jsx(ut, {
                                                value: "2",
                                                className: "text-xs",
                                                title: "Half cells",
                                                children: "½"
                                            }),
                                            h.jsx(ut, {
                                                value: "4",
                                                className: "text-xs",
                                                title: "Quarter cells",
                                                children: "¼"
                                            }),
                                            h.jsx(ut, {
                                                value: "8",
                                                className: "text-xs",
                                                title: "Eighth cells",
                                                children: "⅛"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            s === "text" && h.jsxs("div", {
                                children: [
                                    h.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Text size"
                                    }),
                                    h.jsx(Xo, {
                                        type: "single",
                                        value: String(C),
                                        onValueChange: (w)=>w && B(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Ly.map((w)=>h.jsxs(ut, {
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
                            D.some((w)=>w.type === "text") && h.jsxs("div", {
                                children: [
                                    h.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Text align (drag the box to resize)"
                                    }),
                                    h.jsxs("div", {
                                        className: "flex gap-1 mb-1",
                                        children: [
                                            h.jsx(Q, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(0, null),
                                                children: "Left"
                                            }),
                                            h.jsx(Q, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(1, null),
                                                children: "Center"
                                            }),
                                            h.jsx(Q, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(2, null),
                                                children: "Right"
                                            })
                                        ]
                                    }),
                                    h.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            h.jsx(Q, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(null, 0),
                                                children: "Top"
                                            }),
                                            h.jsx(Q, {
                                                variant: "outline",
                                                size: "sm",
                                                className: "text-xs flex-1",
                                                onClick: ()=>ye(null, 1),
                                                children: "Middle"
                                            }),
                                            h.jsx(Q, {
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
                            s === "line" && h.jsxs("div", {
                                children: [
                                    h.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Line width"
                                    }),
                                    h.jsx(Xo, {
                                        type: "single",
                                        value: String($),
                                        onValueChange: (w)=>w && he(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: by.map((w)=>h.jsxs(ut, {
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
                            h.jsxs("div", {
                                children: [
                                    h.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    h.jsx("div", {
                                        className: "flex gap-1",
                                        children: id.map((w, _)=>h.jsx("button", {
                                                onClick: ()=>f(_),
                                                title: `${_ + 1}: ${w.name}`,
                                                className: Xt("w-6 h-6 rounded border-2 transition-all", u === _ ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: w.hex ?? "transparent",
                                                    backgroundImage: w.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: w.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: w.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, _))
                                    })
                                ]
                            }),
                            h.jsxs("div", {
                                children: [
                                    h.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Outline (rects)"
                                    }),
                                    h.jsx("div", {
                                        className: "flex gap-1",
                                        children: id.map((w, _)=>h.jsx("button", {
                                                onClick: ()=>x(_),
                                                title: _ === 6 ? "No outline" : w.name,
                                                className: Xt("w-6 h-6 rounded border-2 transition-all", d === _ ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: w.hex ?? "transparent",
                                                    backgroundImage: w.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: w.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: w.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, _))
                                    })
                                ]
                            }),
                            h.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    h.jsx(Q, {
                                        variant: "outline",
                                        onClick: oi,
                                        disabled: o || !Nm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Undo (Ctrl/Cmd+Z)",
                                        children: h.jsx(Yy, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    h.jsx(Q, {
                                        variant: "outline",
                                        onClick: li,
                                        disabled: o || !Tm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Redo (Ctrl/Cmd+Shift+Z)",
                                        children: h.jsx(Ky, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            h.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    h.jsx(Q, {
                                        variant: "outline",
                                        onClick: Om,
                                        disabled: o,
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Save the whole drawing to the gallery",
                                        children: "Save to Gallery"
                                    }),
                                    h.jsx(Q, {
                                        variant: "outline",
                                        onClick: ()=>ai(!0),
                                        size: "sm",
                                        className: "flex-1",
                                        children: "Gallery"
                                    })
                                ]
                            }),
                            Dt && h.jsxs(Q, {
                                variant: "outline",
                                onClick: Bm,
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
                            h.jsx(Q, {
                                variant: "destructive",
                                onClick: ni,
                                disabled: o,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            h.jsx(Q, {
                                onClick: Vm,
                                disabled: o,
                                size: "sm",
                                className: "w-full bg-green-600 hover:bg-green-700 text-white",
                                children: "New Drawing"
                            }),
                            h.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, t text, s select, 1-7 colors, ⌘Z undo"
                            })
                        ]
                    })
                }),
                h.jsx(tr, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Sn + 20
                    },
                    children: h.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            Sr.length > 0 && h.jsxs(h.Fragment, {
                                children: [
                                    h.jsxs("div", {
                                        children: [
                                            h.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "JSON (sparse)"
                                            }),
                                            h.jsx("textarea", {
                                                value: Sm,
                                                onChange: (w)=>Cm(w.target.value),
                                                placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    }),
                                    h.jsxs("div", {
                                        children: [
                                            h.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "2D Array (black = 1)"
                                            }),
                                            h.jsx("textarea", {
                                                value: _m,
                                                onChange: (w)=>Em(w.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            h.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: D.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${D.length} item${D.length !== 1 ? "s" : ""} selected${Sr.length > 0 ? ` (${Sr.length} cell${Sr.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                }),
                h.jsx(tr, {
                    title: "Training Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Sn + 360
                    },
                    children: h.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            ii === "idle" && h.jsxs(h.Fragment, {
                                children: [
                                    h.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                                    }),
                                    h.jsx(Q, {
                                        size: "sm",
                                        className: "w-full",
                                        onClick: zm,
                                        disabled: o,
                                        children: "Make Training Data"
                                    }),
                                    h.jsx(Q, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Fm,
                                        disabled: o || D.length === 0 || yu !== "ready",
                                        title: yu !== "ready" ? "Train a model first" : "Map the selection through the model",
                                        children: "Predict from Selection"
                                    }),
                                    h.jsx(Q, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Am,
                                        disabled: o || _e?.status === "running",
                                        children: _e?.status === "running" ? "Training…" : "Start Training Run"
                                    }),
                                    h.jsx(Q, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: ()=>ui(!0),
                                        children: "View Training Data"
                                    })
                                ]
                            }),
                            ii === "input" && h.jsxs(h.Fragment, {
                                children: [
                                    h.jsx("p", {
                                        className: "text-xs font-medium text-blue-600",
                                        children: "Step 1/2 — select the INPUT, then click Next."
                                    }),
                                    h.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            D.length,
                                            " item(s) selected."
                                        ]
                                    }),
                                    h.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            h.jsx(Q, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Rm,
                                                disabled: D.length === 0,
                                                children: "Next →"
                                            }),
                                            h.jsx(Q, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: lu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            ii === "output" && h.jsxs(h.Fragment, {
                                children: [
                                    h.jsx("p", {
                                        className: "text-xs font-medium text-green-600",
                                        children: "Step 2/2 — select the OUTPUT, then Save."
                                    }),
                                    h.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Input: ",
                                            kr ? `${kr.cells.length}c ${kr.lines.length}l ${kr.rects.length}r ${kr.texts.length}t` : "—",
                                            " · Output: ",
                                            D.length,
                                            " item(s)"
                                        ]
                                    }),
                                    h.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            h.jsx(Q, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Dm,
                                                disabled: D.length === 0,
                                                children: "Save Example"
                                            }),
                                            h.jsx(Q, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "flex-1",
                                                onClick: lu,
                                                children: "Cancel"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            vu && h.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: vu
                            })
                        ]
                    })
                }),
                _e && h.jsx(tr, {
                    title: "Training",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Sn + 540
                    },
                    children: h.jsx("div", {
                        className: "space-y-2 w-72 text-xs",
                        children: (()=>{
                            const w = _e.total > 0 ? Math.min(100, Math.round(_e.epoch / _e.total * 100)) : _e.status === "done" ? 100 : 0, _ = _e.status === "error" ? "bg-red-500" : _e.status === "done" ? "bg-green-500" : "bg-blue-500";
                            return h.jsxs(h.Fragment, {
                                children: [
                                    h.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                            h.jsx("span", {
                                                className: "font-medium",
                                                children: "In-browser model"
                                            }),
                                            h.jsx("span", {
                                                className: "text-gray-400",
                                                children: _e.status
                                            })
                                        ]
                                    }),
                                    h.jsx("div", {
                                        className: "h-1.5 bg-gray-200 rounded overflow-hidden",
                                        children: h.jsx("div", {
                                            className: Xt("h-full", _),
                                            style: {
                                                width: `${w}%`
                                            }
                                        })
                                    }),
                                    h.jsxs("div", {
                                        className: "flex justify-between text-gray-400",
                                        children: [
                                            h.jsx("span", {
                                                children: _e.total > 0 ? `epoch ${_e.epoch}/${_e.total} (${w}%)` : ""
                                            }),
                                            Number.isFinite(_e.loss) && h.jsxs("span", {
                                                children: [
                                                    "loss ",
                                                    _e.loss.toFixed(4)
                                                ]
                                            })
                                        ]
                                    }),
                                    _e.message && h.jsx("p", {
                                        className: "text-gray-400",
                                        children: _e.message
                                    })
                                ]
                            });
                        })()
                    })
                }),
                Im && h.jsx(xm, {
                    asModal: !0,
                    onClose: ()=>ai(!1),
                    onOpenDesign: $m
                }),
                jm && h.jsx(wm, {
                    asModal: !0,
                    onClose: ()=>ui(!1),
                    onEditExample: Um
                })
            ]
        });
    }
    function Qx({ onSuccess: e }) {
        const [t, n] = E.useState(""), [r, o] = E.useState(""), [l, i] = E.useState(null), [s, a] = E.useState(!1), u = async (c)=>{
            c.preventDefault(), a(!0), i(null);
            try {
                await Ex(t, r), e();
            } catch (f) {
                i(String(f instanceof Error ? f.message : f));
            } finally{
                a(!1);
            }
        };
        return h.jsx("div", {
            className: "min-h-screen w-full bg-gray-50 flex items-center justify-center p-6",
            children: h.jsxs("form", {
                onSubmit: u,
                className: "bg-white rounded border p-6 w-80 flex flex-col gap-3",
                children: [
                    h.jsx("h1", {
                        className: "text-lg font-semibold",
                        children: "grid-draw"
                    }),
                    h.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        placeholder: "username",
                        autoComplete: "username",
                        value: t,
                        onChange: (c)=>n(c.target.value)
                    }),
                    h.jsx("input", {
                        className: "border rounded px-3 py-2 text-sm",
                        type: "password",
                        placeholder: "password",
                        autoComplete: "current-password",
                        value: r,
                        onChange: (c)=>o(c.target.value)
                    }),
                    l && h.jsx("p", {
                        className: "text-sm text-red-500",
                        children: l
                    }),
                    h.jsx(Q, {
                        type: "submit",
                        disabled: s || !t || !r,
                        children: s ? "Signing in…" : "Sign in"
                    })
                ]
            })
        });
    }
    function Yx() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function Xx() {
        const e = Yx(), [t, n] = E.useState(()=>mm() !== null);
        return E.useEffect(()=>{
            const r = ()=>n(!1);
            return window.addEventListener(As, r), ()=>window.removeEventListener(As, r);
        }, []), t ? h.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? h.jsx(xm, {}) : e === "training" ? h.jsx(wm, {}) : h.jsx(Kx, {})
        }) : h.jsx(Qx, {
            onSuccess: ()=>n(!0)
        });
    }
    const Zx = 600;
    let ad;
    function Jx() {
        tt.getState().currentName && (clearTimeout(ad), ad = setTimeout(qx, Zx));
    }
    async function qx() {
        const e = tt.getState();
        if (!e.currentName || !e.grid) return;
        const t = e.serializeWholeGrid();
        if (t) {
            e.setSaveState("saving");
            try {
                await de.getState().saveDrawing(e.currentName, t, e.exportHistory()), tt.getState().setSaveState("saved");
            } catch (n) {
                tt.getState().setSaveState("error", n instanceof Error ? n.message : String(n));
            }
        }
    }
    tt.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && Jx();
    });
    const ud = document.getElementById("grid-draw-root");
    ud && $i.createRoot(ud).render(h.jsx(re.StrictMode, {
        children: h.jsx(Xx, {})
    }));
})();
export { t0 as a, e0 as c, Xm as g, __tla };
