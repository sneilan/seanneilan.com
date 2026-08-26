let w0, x0, ih;
let __tla = (async ()=>{
    function lh(e, t) {
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
    x0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
    ih = function(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    };
    w0 = function(e) {
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
    var wd = {
        exports: {}
    }, Al = {}, Sd = {
        exports: {}
    }, W = {};
    var po = Symbol.for("react.element"), sh = Symbol.for("react.portal"), ah = Symbol.for("react.fragment"), uh = Symbol.for("react.strict_mode"), ch = Symbol.for("react.profiler"), dh = Symbol.for("react.provider"), fh = Symbol.for("react.context"), ph = Symbol.for("react.forward_ref"), mh = Symbol.for("react.suspense"), hh = Symbol.for("react.memo"), gh = Symbol.for("react.lazy"), Iu = Symbol.iterator;
    function yh(e) {
        return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var kd = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, Cd = Object.assign, _d = {};
    function yr(e, t, n) {
        this.props = e, this.context = t, this.refs = _d, this.updater = n || kd;
    }
    yr.prototype.isReactComponent = {};
    yr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    yr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Ed() {}
    Ed.prototype = yr.prototype;
    function Ks(e, t, n) {
        this.props = e, this.context = t, this.refs = _d, this.updater = n || kd;
    }
    var Qs = Ks.prototype = new Ed;
    Qs.constructor = Ks;
    Cd(Qs, yr.prototype);
    Qs.isPureReactComponent = !0;
    var Ru = Array.isArray, Nd = Object.prototype.hasOwnProperty, Ys = {
        current: null
    }, Id = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Rd(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)Nd.call(t, r) && !Id.hasOwnProperty(r) && (o[r] = t[r]);
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
            _owner: Ys.current
        };
    }
    function vh(e, t) {
        return {
            $$typeof: po,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Xs(e) {
        return typeof e == "object" && e !== null && e.$$typeof === po;
    }
    function xh(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Tu = /\/+/g;
    function di(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? xh("" + e.key) : t.toString(36);
    }
    function Xo(e, t, n, r, o) {
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
                    case sh:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + di(i, 0) : r, Ru(o) ? (n = "", e != null && (n = e.replace(Tu, "$&/") + "/"), Xo(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Xs(o) && (o = vh(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Tu, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Ru(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + di(l, s);
            i += Xo(l, t, n, a, o);
        }
        else if (a = yh(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + di(l, s++), i += Xo(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Ro(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return Xo(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function wh(e) {
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
    var Me = {
        current: null
    }, Zo = {
        transition: null
    }, Sh = {
        ReactCurrentDispatcher: Me,
        ReactCurrentBatchConfig: Zo,
        ReactCurrentOwner: Ys
    };
    function Td() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    W.Children = {
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
            if (!Xs(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    W.Component = yr;
    W.Fragment = ah;
    W.Profiler = ch;
    W.PureComponent = Ks;
    W.StrictMode = uh;
    W.Suspense = mh;
    W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sh;
    W.act = Td;
    W.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = Cd({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Ys.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)Nd.call(t, a) && !Id.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
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
            $$typeof: fh,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: dh,
            _context: e
        }, e.Consumer = e;
    };
    W.createElement = Rd;
    W.createFactory = function(e) {
        var t = Rd.bind(null, e);
        return t.type = e, t;
    };
    W.createRef = function() {
        return {
            current: null
        };
    };
    W.forwardRef = function(e) {
        return {
            $$typeof: ph,
            render: e
        };
    };
    W.isValidElement = Xs;
    W.lazy = function(e) {
        return {
            $$typeof: gh,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: wh
        };
    };
    W.memo = function(e, t) {
        return {
            $$typeof: hh,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    W.startTransition = function(e) {
        var t = Zo.transition;
        Zo.transition = {};
        try {
            e();
        } finally{
            Zo.transition = t;
        }
    };
    W.unstable_act = Td;
    W.useCallback = function(e, t) {
        return Me.current.useCallback(e, t);
    };
    W.useContext = function(e) {
        return Me.current.useContext(e);
    };
    W.useDebugValue = function() {};
    W.useDeferredValue = function(e) {
        return Me.current.useDeferredValue(e);
    };
    W.useEffect = function(e, t) {
        return Me.current.useEffect(e, t);
    };
    W.useId = function() {
        return Me.current.useId();
    };
    W.useImperativeHandle = function(e, t, n) {
        return Me.current.useImperativeHandle(e, t, n);
    };
    W.useInsertionEffect = function(e, t) {
        return Me.current.useInsertionEffect(e, t);
    };
    W.useLayoutEffect = function(e, t) {
        return Me.current.useLayoutEffect(e, t);
    };
    W.useMemo = function(e, t) {
        return Me.current.useMemo(e, t);
    };
    W.useReducer = function(e, t, n) {
        return Me.current.useReducer(e, t, n);
    };
    W.useRef = function(e) {
        return Me.current.useRef(e);
    };
    W.useState = function(e) {
        return Me.current.useState(e);
    };
    W.useSyncExternalStore = function(e, t, n) {
        return Me.current.useSyncExternalStore(e, t, n);
    };
    W.useTransition = function() {
        return Me.current.useTransition();
    };
    W.version = "18.3.1";
    Sd.exports = W;
    var I = Sd.exports;
    const re = ih(I), zd = lh({
        __proto__: null,
        default: re
    }, [
        I
    ]);
    var kh = I, Ch = Symbol.for("react.element"), _h = Symbol.for("react.fragment"), Eh = Object.prototype.hasOwnProperty, Nh = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ih = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Pd(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Eh.call(t, r) && !Ih.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: Ch,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Nh.current
        };
    }
    Al.Fragment = _h;
    Al.jsx = Pd;
    Al.jsxs = Pd;
    wd.exports = Al;
    var y = wd.exports, Ui = {}, jd = {
        exports: {}
    }, Ye = {}, Md = {
        exports: {}
    }, Ld = {};
    (function(e) {
        function t(j, b) {
            var E = j.length;
            j.push(b);
            e: for(; 0 < E;){
                var Y = E - 1 >>> 1, te = j[Y];
                if (0 < o(te, b)) j[Y] = b, j[E] = te, E = Y;
                else break e;
            }
        }
        function n(j) {
            return j.length === 0 ? null : j[0];
        }
        function r(j) {
            if (j.length === 0) return null;
            var b = j[0], E = j.pop();
            if (E !== b) {
                j[0] = E;
                e: for(var Y = 0, te = j.length, gt = te >>> 1; Y < gt;){
                    var De = 2 * (Y + 1) - 1, ae = j[De], Z = De + 1, Q = j[Z];
                    if (0 > o(ae, E)) Z < te && 0 > o(Q, ae) ? (j[Y] = Q, j[Z] = E, Y = Z) : (j[Y] = ae, j[De] = E, Y = De);
                    else if (Z < te && 0 > o(Q, E)) j[Y] = Q, j[Z] = E, Y = Z;
                    else break e;
                }
            }
            return b;
        }
        function o(j, b) {
            var E = j.sortIndex - b.sortIndex;
            return E !== 0 ? E : j.id - b.id;
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
        var a = [], u = [], c = 1, d = null, f = 3, x = !1, v = !1, h = !1, S = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function p(j) {
            for(var b = n(u); b !== null;){
                if (b.callback === null) r(u);
                else if (b.startTime <= j) r(u), b.sortIndex = b.expirationTime, t(a, b);
                else break;
                b = n(u);
            }
        }
        function k(j) {
            if (h = !1, p(j), !v) if (n(a) !== null) v = !0, X(N);
            else {
                var b = n(u);
                b !== null && Oe(k, b.startTime - j);
            }
        }
        function N(j, b) {
            v = !1, h && (h = !1, g(_), _ = -1), x = !0;
            var E = f;
            try {
                for(p(b), d = n(a); d !== null && (!(d.expirationTime > b) || j && !he());){
                    var Y = d.callback;
                    if (typeof Y == "function") {
                        d.callback = null, f = d.priorityLevel;
                        var te = Y(d.expirationTime <= b);
                        b = e.unstable_now(), typeof te == "function" ? d.callback = te : d === n(a) && r(a), p(b);
                    } else r(a);
                    d = n(a);
                }
                if (d !== null) var gt = !0;
                else {
                    var De = n(u);
                    De !== null && Oe(k, De.startTime - b), gt = !1;
                }
                return gt;
            } finally{
                d = null, f = E, x = !1;
            }
        }
        var T = !1, P = null, _ = -1, $ = 5, F = -1;
        function he() {
            return !(e.unstable_now() - F < $);
        }
        function ze() {
            if (P !== null) {
                var j = e.unstable_now();
                F = j;
                var b = !0;
                try {
                    b = P(!0, j);
                } finally{
                    b ? Ue() : (T = !1, P = null);
                }
            } else T = !1;
        }
        var Ue;
        if (typeof m == "function") Ue = function() {
            m(ze);
        };
        else if (typeof MessageChannel < "u") {
            var Ct = new MessageChannel, Ve = Ct.port2;
            Ct.port1.onmessage = ze, Ue = function() {
                Ve.postMessage(null);
            };
        } else Ue = function() {
            S(ze, 0);
        };
        function X(j) {
            P = j, T || (T = !0, Ue());
        }
        function Oe(j, b) {
            _ = S(function() {
                j(e.unstable_now());
            }, b);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
            j.callback = null;
        }, e.unstable_continueExecution = function() {
            v || x || (v = !0, X(N));
        }, e.unstable_forceFrameRate = function(j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < j ? Math.floor(1e3 / j) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(j) {
            switch(f){
                case 1:
                case 2:
                case 3:
                    var b = 3;
                    break;
                default:
                    b = f;
            }
            var E = f;
            f = b;
            try {
                return j();
            } finally{
                f = E;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, b) {
            switch(j){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    j = 3;
            }
            var E = f;
            f = j;
            try {
                return b();
            } finally{
                f = E;
            }
        }, e.unstable_scheduleCallback = function(j, b, E) {
            var Y = e.unstable_now();
            switch(typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? Y + E : Y) : E = Y, j){
                case 1:
                    var te = -1;
                    break;
                case 2:
                    te = 250;
                    break;
                case 5:
                    te = 1073741823;
                    break;
                case 4:
                    te = 1e4;
                    break;
                default:
                    te = 5e3;
            }
            return te = E + te, j = {
                id: c++,
                callback: b,
                priorityLevel: j,
                startTime: E,
                expirationTime: te,
                sortIndex: -1
            }, E > Y ? (j.sortIndex = E, t(u, j), n(a) === null && j === n(u) && (h ? (g(_), _ = -1) : h = !0, Oe(k, E - Y))) : (j.sortIndex = te, t(a, j), v || x || (v = !0, X(N))), j;
        }, e.unstable_shouldYield = he, e.unstable_wrapCallback = function(j) {
            var b = f;
            return function() {
                var E = f;
                f = b;
                try {
                    return j.apply(this, arguments);
                } finally{
                    f = E;
                }
            };
        };
    })(Ld);
    Md.exports = Ld;
    var Rh = Md.exports;
    var Th = I, Qe = Rh;
    function R(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Od = new Set, Kr = {};
    function Dn(e, t) {
        ur(e, t), ur(e + "Capture", t);
    }
    function ur(e, t) {
        for(Kr[e] = t, e = 0; e < t.length; e++)Od.add(t[e]);
    }
    var zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vi = Object.prototype.hasOwnProperty, zh = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, zu = {}, Pu = {};
    function Ph(e) {
        return Vi.call(Pu, e) ? !0 : Vi.call(zu, e) ? !1 : zh.test(e) ? Pu[e] = !0 : (zu[e] = !0, !1);
    }
    function jh(e, t, n, r) {
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
    function Mh(e, t, n, r) {
        if (t === null || typeof t > "u" || jh(e, t, n, r)) return !0;
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
    function Le(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var Ee = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Ee[e] = new Le(e, 0, !1, e, null, !1, !1);
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
        Ee[t] = new Le(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Ee[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Zs = /[\-:]([a-z])/g;
    function Js(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Zs, Js);
        Ee[t] = new Le(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Zs, Js);
        Ee[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Zs, Js);
        Ee[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Ee.xlinkHref = new Le("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        Ee[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function qs(e, t, n, r) {
        var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Mh(t, n, o, r) && (n = null), r || o === null ? Ph(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Lt = Th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, To = Symbol.for("react.element"), Wn = Symbol.for("react.portal"), Gn = Symbol.for("react.fragment"), ea = Symbol.for("react.strict_mode"), Wi = Symbol.for("react.profiler"), Dd = Symbol.for("react.provider"), bd = Symbol.for("react.context"), ta = Symbol.for("react.forward_ref"), Gi = Symbol.for("react.suspense"), Hi = Symbol.for("react.suspense_list"), na = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), Ad = Symbol.for("react.offscreen"), ju = Symbol.iterator;
    function _r(e) {
        return e === null || typeof e != "object" ? null : (e = ju && e[ju] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var se = Object.assign, fi;
    function Lr(e) {
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
        return (e = e ? e.displayName || e.name : "") ? Lr(e) : "";
    }
    function Lh(e) {
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
                return e = mi(e.type, !1), e;
            case 11:
                return e = mi(e.type.render, !1), e;
            case 1:
                return e = mi(e.type, !0), e;
            default:
                return "";
        }
    }
    function Ki(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Gn:
                return "Fragment";
            case Wn:
                return "Portal";
            case Wi:
                return "Profiler";
            case ea:
                return "StrictMode";
            case Gi:
                return "Suspense";
            case Hi:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case bd:
                return (e.displayName || "Context") + ".Consumer";
            case Dd:
                return (e._context.displayName || "Context") + ".Provider";
            case ta:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case na:
                return t = e.displayName || null, t !== null ? t : Ki(e.type) || "Memo";
            case Vt:
                t = e._payload, e = e._init;
                try {
                    return Ki(e(t));
                } catch  {}
        }
        return null;
    }
    function Oh(e) {
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
                return Ki(t);
            case 8:
                return t === ea ? "StrictMode" : "Mode";
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
    function Fd(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Dh(e) {
        var t = Fd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
        e._valueTracker || (e._valueTracker = Dh(e));
    }
    function $d(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Fd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function dl(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Qi(e, t) {
        var n = t.checked;
        return se({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Mu(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = on(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Bd(e, t) {
        t = t.checked, t != null && qs(e, "checked", t, !1);
    }
    function Yi(e, t) {
        Bd(e, t);
        var n = on(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xi(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Lu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Xi(e, t, n) {
        (t !== "number" || dl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var Or = Array.isArray;
    function rr(e, t, n, r) {
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
    function Zi(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
        return se({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Ou(e, t) {
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
            initialValue: on(n)
        };
    }
    function Ud(e, t) {
        var n = on(t.value), r = on(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Du(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Vd(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Ji(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Vd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Po, Wd = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Po = Po || document.createElement("div"), Po.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Po.firstChild; e.firstChild;)e.removeChild(e.firstChild);
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
    }, bh = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Ar).forEach(function(e) {
        bh.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Ar[t] = Ar[e];
        });
    });
    function Gd(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ar.hasOwnProperty(e) && Ar[e] ? ("" + t).trim() : t + "px";
    }
    function Hd(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Gd(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Ah = se({
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
    function qi(e, t) {
        if (t) {
            if (Ah[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(R(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(R(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(R(62));
        }
    }
    function es(e, t) {
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
    var ts = null;
    function ra(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ns = null, or = null, lr = null;
    function bu(e) {
        if (e = go(e)) {
            if (typeof ns != "function") throw Error(R(280));
            var t = e.stateNode;
            t && (t = Vl(t), ns(e.stateNode, e.type, t));
        }
    }
    function Kd(e) {
        or ? lr ? lr.push(e) : lr = [
            e
        ] : or = e;
    }
    function Qd() {
        if (or) {
            var e = or, t = lr;
            if (lr = or = null, bu(e), t) for(e = 0; e < t.length; e++)bu(t[e]);
        }
    }
    function Yd(e, t) {
        return e(t);
    }
    function Xd() {}
    var hi = !1;
    function Zd(e, t, n) {
        if (hi) return e(t, n);
        hi = !0;
        try {
            return Yd(e, t, n);
        } finally{
            hi = !1, (or !== null || lr !== null) && (Xd(), Qd());
        }
    }
    function Yr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Vl(n);
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
    var rs = !1;
    if (zt) try {
        var Er = {};
        Object.defineProperty(Er, "passive", {
            get: function() {
                rs = !0;
            }
        }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
    } catch  {
        rs = !1;
    }
    function Fh(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (c) {
            this.onError(c);
        }
    }
    var Fr = !1, fl = null, pl = !1, os = null, $h = {
        onError: function(e) {
            Fr = !0, fl = e;
        }
    };
    function Bh(e, t, n, r, o, l, i, s, a) {
        Fr = !1, fl = null, Fh.apply($h, arguments);
    }
    function Uh(e, t, n, r, o, l, i, s, a) {
        if (Bh.apply(this, arguments), Fr) {
            if (Fr) {
                var u = fl;
                Fr = !1, fl = null;
            } else throw Error(R(198));
            pl || (pl = !0, os = u);
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
    function Jd(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Au(e) {
        if (bn(e) !== e) throw Error(R(188));
    }
    function Vh(e) {
        var t = e.alternate;
        if (!t) {
            if (t = bn(e), t === null) throw Error(R(188));
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
                    if (l === n) return Au(o), e;
                    if (l === r) return Au(o), t;
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
    function qd(e) {
        return e = Vh(e), e !== null ? ef(e) : null;
    }
    function ef(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = ef(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var tf = Qe.unstable_scheduleCallback, Fu = Qe.unstable_cancelCallback, Wh = Qe.unstable_shouldYield, Gh = Qe.unstable_requestPaint, me = Qe.unstable_now, Hh = Qe.unstable_getCurrentPriorityLevel, oa = Qe.unstable_ImmediatePriority, nf = Qe.unstable_UserBlockingPriority, ml = Qe.unstable_NormalPriority, Kh = Qe.unstable_LowPriority, rf = Qe.unstable_IdlePriority, Fl = null, St = null;
    function Qh(e) {
        if (St && typeof St.onCommitFiberRoot == "function") try {
            St.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var pt = Math.clz32 ? Math.clz32 : Zh, Yh = Math.log, Xh = Math.LN2;
    function Zh(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Yh(e) / Xh | 0) | 0;
    }
    var jo = 64, Mo = 4194304;
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
    function hl(e, t) {
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
    function Jh(e, t) {
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
    function qh(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - pt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = Jh(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function ls(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function of() {
        var e = jo;
        return jo <<= 1, !(jo & 4194240) && (jo = 64), e;
    }
    function gi(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function mo(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
    }
    function eg(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - pt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function la(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - pt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var K = 0;
    function lf(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var sf, ia, af, uf, cf, is = !1, Lo = [], Xt = null, Zt = null, Jt = null, Xr = new Map, Zr = new Map, Gt = [], tg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function $u(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Xt = null;
                break;
            case "dragenter":
            case "dragleave":
                Zt = null;
                break;
            case "mouseover":
            case "mouseout":
                Jt = null;
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
        }, t !== null && (t = go(t), t !== null && ia(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function ng(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Xt = Nr(Xt, e, t, n, r, o), !0;
            case "dragenter":
                return Zt = Nr(Zt, e, t, n, r, o), !0;
            case "mouseover":
                return Jt = Nr(Jt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Xr.set(l, Nr(Xr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Zr.set(l, Nr(Zr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function df(e) {
        var t = _n(e.target);
        if (t !== null) {
            var n = bn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Jd(n), t !== null) {
                        e.blockedOn = t, cf(e.priority, function() {
                            af(n);
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
    function Jo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ss(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                ts = r, n.target.dispatchEvent(r), ts = null;
            } else return t = go(n), t !== null && ia(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Bu(e, t, n) {
        Jo(e) && n.delete(t);
    }
    function rg() {
        is = !1, Xt !== null && Jo(Xt) && (Xt = null), Zt !== null && Jo(Zt) && (Zt = null), Jt !== null && Jo(Jt) && (Jt = null), Xr.forEach(Bu), Zr.forEach(Bu);
    }
    function Ir(e, t) {
        e.blockedOn === t && (e.blockedOn = null, is || (is = !0, Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, rg)));
    }
    function Jr(e) {
        function t(o) {
            return Ir(o, e);
        }
        if (0 < Lo.length) {
            Ir(Lo[0], e);
            for(var n = 1; n < Lo.length; n++){
                var r = Lo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Xt !== null && Ir(Xt, e), Zt !== null && Ir(Zt, e), Jt !== null && Ir(Jt, e), Xr.forEach(t), Zr.forEach(t), n = 0; n < Gt.length; n++)r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Gt.length && (n = Gt[0], n.blockedOn === null);)df(n), n.blockedOn === null && Gt.shift();
    }
    var ir = Lt.ReactCurrentBatchConfig, gl = !0;
    function og(e, t, n, r) {
        var o = K, l = ir.transition;
        ir.transition = null;
        try {
            K = 1, sa(e, t, n, r);
        } finally{
            K = o, ir.transition = l;
        }
    }
    function lg(e, t, n, r) {
        var o = K, l = ir.transition;
        ir.transition = null;
        try {
            K = 4, sa(e, t, n, r);
        } finally{
            K = o, ir.transition = l;
        }
    }
    function sa(e, t, n, r) {
        if (gl) {
            var o = ss(e, t, n, r);
            if (o === null) Ni(e, t, r, yl, n), $u(e, r);
            else if (ng(o, e, t, n, r)) r.stopPropagation();
            else if ($u(e, r), t & 4 && -1 < tg.indexOf(e)) {
                for(; o !== null;){
                    var l = go(o);
                    if (l !== null && sf(l), l = ss(e, t, n, r), l === null && Ni(e, t, r, yl, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Ni(e, t, r, null, n);
        }
    }
    var yl = null;
    function ss(e, t, n, r) {
        if (yl = null, e = ra(r), e = _n(e), e !== null) if (t = bn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Jd(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return yl = e, null;
    }
    function ff(e) {
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
                switch(Hh()){
                    case oa:
                        return 1;
                    case nf:
                        return 4;
                    case ml:
                    case Kh:
                        return 16;
                    case rf:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Kt = null, aa = null, qo = null;
    function pf() {
        if (qo) return qo;
        var e, t = aa, n = t.length, r, o = "value" in Kt ? Kt.value : Kt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return qo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function el(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Oo() {
        return !0;
    }
    function Uu() {
        return !1;
    }
    function Xe(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Oo : Uu, this.isPropagationStopped = Uu, this;
        }
        return se(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Oo);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Oo);
            },
            persist: function() {},
            isPersistent: Oo
        }), t;
    }
    var vr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ua = Xe(vr), ho = se({}, vr, {
        view: 0,
        detail: 0
    }), ig = Xe(ho), yi, vi, Rr, $l = se({}, ho, {
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
        getModifierState: ca,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Rr && (Rr && e.type === "mousemove" ? (yi = e.screenX - Rr.screenX, vi = e.screenY - Rr.screenY) : vi = yi = 0, Rr = e), yi);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : vi;
        }
    }), Vu = Xe($l), sg = se({}, $l, {
        dataTransfer: 0
    }), ag = Xe(sg), ug = se({}, ho, {
        relatedTarget: 0
    }), xi = Xe(ug), cg = se({}, vr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), dg = Xe(cg), fg = se({}, vr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), pg = Xe(fg), mg = se({}, vr, {
        data: 0
    }), Wu = Xe(mg), hg = {
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
    }, gg = {
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
    }, yg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function vg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = yg[e]) ? !!t[e] : !1;
    }
    function ca() {
        return vg;
    }
    var xg = se({}, ho, {
        key: function(e) {
            if (e.key) {
                var t = hg[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = el(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gg[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ca,
        charCode: function(e) {
            return e.type === "keypress" ? el(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? el(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), wg = Xe(xg), Sg = se({}, $l, {
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
    }), Gu = Xe(Sg), kg = se({}, ho, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ca
    }), Cg = Xe(kg), _g = se({}, vr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Eg = Xe(_g), Ng = se({}, $l, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Ig = Xe(Ng), Rg = [
        9,
        13,
        27,
        32
    ], da = zt && "CompositionEvent" in window, $r = null;
    zt && "documentMode" in document && ($r = document.documentMode);
    var Tg = zt && "TextEvent" in window && !$r, mf = zt && (!da || $r && 8 < $r && 11 >= $r), Hu = " ", Ku = !1;
    function hf(e, t) {
        switch(e){
            case "keyup":
                return Rg.indexOf(t.keyCode) !== -1;
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
    function gf(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var Hn = !1;
    function zg(e, t) {
        switch(e){
            case "compositionend":
                return gf(t);
            case "keypress":
                return t.which !== 32 ? null : (Ku = !0, Hu);
            case "textInput":
                return e = t.data, e === Hu && Ku ? null : e;
            default:
                return null;
        }
    }
    function Pg(e, t) {
        if (Hn) return e === "compositionend" || !da && hf(e, t) ? (e = pf(), qo = aa = Kt = null, Hn = !1, e) : null;
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
                return mf && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var jg = {
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
    function Qu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!jg[e.type] : t === "textarea";
    }
    function yf(e, t, n, r) {
        Kd(r), t = vl(t, "onChange"), 0 < t.length && (n = new ua("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Br = null, qr = null;
    function Mg(e) {
        Rf(e, 0);
    }
    function Bl(e) {
        var t = Yn(e);
        if ($d(t)) return e;
    }
    function Lg(e, t) {
        if (e === "change") return t;
    }
    var vf = !1;
    if (zt) {
        var wi;
        if (zt) {
            var Si = "oninput" in document;
            if (!Si) {
                var Yu = document.createElement("div");
                Yu.setAttribute("oninput", "return;"), Si = typeof Yu.oninput == "function";
            }
            wi = Si;
        } else wi = !1;
        vf = wi && (!document.documentMode || 9 < document.documentMode);
    }
    function Xu() {
        Br && (Br.detachEvent("onpropertychange", xf), qr = Br = null);
    }
    function xf(e) {
        if (e.propertyName === "value" && Bl(qr)) {
            var t = [];
            yf(t, qr, e, ra(e)), Zd(Mg, t);
        }
    }
    function Og(e, t, n) {
        e === "focusin" ? (Xu(), Br = t, qr = n, Br.attachEvent("onpropertychange", xf)) : e === "focusout" && Xu();
    }
    function Dg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Bl(qr);
    }
    function bg(e, t) {
        if (e === "click") return Bl(t);
    }
    function Ag(e, t) {
        if (e === "input" || e === "change") return Bl(t);
    }
    function Fg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ht = typeof Object.is == "function" ? Object.is : Fg;
    function eo(e, t) {
        if (ht(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Vi.call(t, o) || !ht(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Zu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Ju(e, t) {
        var n = Zu(e);
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
            n = Zu(n);
        }
    }
    function wf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? wf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Sf() {
        for(var e = window, t = dl(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = dl(e.document);
        }
        return t;
    }
    function fa(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function $g(e) {
        var t = Sf(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && wf(n.ownerDocument.documentElement, n)) {
            if (r !== null && fa(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Ju(n, l);
                    var i = Ju(n, r);
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
    var Bg = zt && "documentMode" in document && 11 >= document.documentMode, Kn = null, as = null, Ur = null, us = !1;
    function qu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        us || Kn == null || Kn !== dl(r) || (r = Kn, "selectionStart" in r && fa(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Ur && eo(Ur, r) || (Ur = r, r = vl(as, "onSelect"), 0 < r.length && (t = new ua("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Kn)));
    }
    function Do(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Qn = {
        animationend: Do("Animation", "AnimationEnd"),
        animationiteration: Do("Animation", "AnimationIteration"),
        animationstart: Do("Animation", "AnimationStart"),
        transitionend: Do("Transition", "TransitionEnd")
    }, ki = {}, kf = {};
    zt && (kf = document.createElement("div").style, "AnimationEvent" in window || (delete Qn.animationend.animation, delete Qn.animationiteration.animation, delete Qn.animationstart.animation), "TransitionEvent" in window || delete Qn.transitionend.transition);
    function Ul(e) {
        if (ki[e]) return ki[e];
        if (!Qn[e]) return e;
        var t = Qn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in kf) return ki[e] = t[n];
        return e;
    }
    var Cf = Ul("animationend"), _f = Ul("animationiteration"), Ef = Ul("animationstart"), Nf = Ul("transitionend"), If = new Map, ec = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function sn(e, t) {
        If.set(e, t), Dn(t, [
            e
        ]);
    }
    for(var Ci = 0; Ci < ec.length; Ci++){
        var _i = ec[Ci], Ug = _i.toLowerCase(), Vg = _i[0].toUpperCase() + _i.slice(1);
        sn(Ug, "on" + Vg);
    }
    sn(Cf, "onAnimationEnd");
    sn(_f, "onAnimationIteration");
    sn(Ef, "onAnimationStart");
    sn("dblclick", "onDoubleClick");
    sn("focusin", "onFocus");
    sn("focusout", "onBlur");
    sn(Nf, "onTransitionEnd");
    ur("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    ur("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    ur("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    ur("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    Dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Dn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    Dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wg = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
    function tc(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Uh(r, t, void 0, e), e.currentTarget = null;
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
                    tc(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    tc(o, s, u), l = a;
                }
            }
        }
        if (pl) throw e = os, pl = !1, os = null, e;
    }
    function q(e, t) {
        var n = t[ms];
        n === void 0 && (n = t[ms] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Tf(t, e, 2, !1), n.add(r));
    }
    function Ei(e, t, n) {
        var r = 0;
        t && (r |= 4), Tf(n, e, r, t);
    }
    var bo = "_reactListening" + Math.random().toString(36).slice(2);
    function to(e) {
        if (!e[bo]) {
            e[bo] = !0, Od.forEach(function(n) {
                n !== "selectionchange" && (Wg.has(n) || Ei(n, !1, e), Ei(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[bo] || (t[bo] = !0, Ei("selectionchange", !1, t));
        }
    }
    function Tf(e, t, n, r) {
        switch(ff(t)){
            case 1:
                var o = og;
                break;
            case 4:
                o = lg;
                break;
            default:
                o = sa;
        }
        n = o.bind(null, t, n, e), o = void 0, !rs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
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
        Zd(function() {
            var u = l, c = ra(n), d = [];
            e: {
                var f = If.get(e);
                if (f !== void 0) {
                    var x = ua, v = e;
                    switch(e){
                        case "keypress":
                            if (el(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            x = wg;
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
                            x = Vu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            x = ag;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            x = Cg;
                            break;
                        case Cf:
                        case _f:
                        case Ef:
                            x = dg;
                            break;
                        case Nf:
                            x = Eg;
                            break;
                        case "scroll":
                            x = ig;
                            break;
                        case "wheel":
                            x = Ig;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            x = pg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            x = Gu;
                    }
                    var h = (t & 4) !== 0, S = !h && e === "scroll", g = h ? f !== null ? f + "Capture" : null : f;
                    h = [];
                    for(var m = u, p; m !== null;){
                        p = m;
                        var k = p.stateNode;
                        if (p.tag === 5 && k !== null && (p = k, g !== null && (k = Yr(m, g), k != null && h.push(no(m, k, p)))), S) break;
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
                    if (f = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", f && n !== ts && (v = n.relatedTarget || n.fromElement) && (_n(v) || v[Pt])) break e;
                    if ((x || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, x ? (v = n.relatedTarget || n.toElement, x = u, v = v ? _n(v) : null, v !== null && (S = bn(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (x = null, v = u), x !== v)) {
                        if (h = Vu, k = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (h = Gu, k = "onPointerLeave", g = "onPointerEnter", m = "pointer"), S = x == null ? f : Yn(x), p = v == null ? f : Yn(v), f = new h(k, m + "leave", x, n, c), f.target = S, f.relatedTarget = p, k = null, _n(c) === u && (h = new h(g, m + "enter", v, n, c), h.target = p, h.relatedTarget = S, k = h), S = k, x && v) t: {
                            for(h = x, g = v, m = 0, p = h; p; p = Un(p))m++;
                            for(p = 0, k = g; k; k = Un(k))p++;
                            for(; 0 < m - p;)h = Un(h), m--;
                            for(; 0 < p - m;)g = Un(g), p--;
                            for(; m--;){
                                if (h === g || g !== null && h === g.alternate) break t;
                                h = Un(h), g = Un(g);
                            }
                            h = null;
                        }
                        else h = null;
                        x !== null && nc(d, f, x, h, !1), v !== null && S !== null && nc(d, S, v, h, !0);
                    }
                }
                e: {
                    if (f = u ? Yn(u) : window, x = f.nodeName && f.nodeName.toLowerCase(), x === "select" || x === "input" && f.type === "file") var N = Lg;
                    else if (Qu(f)) if (vf) N = Ag;
                    else {
                        N = Dg;
                        var T = Og;
                    }
                    else (x = f.nodeName) && x.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (N = bg);
                    if (N && (N = N(e, u))) {
                        yf(d, N, n, c);
                        break e;
                    }
                    T && T(e, f, u), e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && Xi(f, "number", f.value);
                }
                switch(T = u ? Yn(u) : window, e){
                    case "focusin":
                        (Qu(T) || T.contentEditable === "true") && (Kn = T, as = u, Ur = null);
                        break;
                    case "focusout":
                        Ur = as = Kn = null;
                        break;
                    case "mousedown":
                        us = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        us = !1, qu(d, n, c);
                        break;
                    case "selectionchange":
                        if (Bg) break;
                    case "keydown":
                    case "keyup":
                        qu(d, n, c);
                }
                var P;
                if (da) e: {
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
                else Hn ? hf(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
                _ && (mf && n.locale !== "ko" && (Hn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Hn && (P = pf()) : (Kt = c, aa = "value" in Kt ? Kt.value : Kt.textContent, Hn = !0)), T = vl(u, _), 0 < T.length && (_ = new Wu(_, e, null, n, c), d.push({
                    event: _,
                    listeners: T
                }), P ? _.data = P : (P = gf(n), P !== null && (_.data = P)))), (P = Tg ? zg(e, n) : Pg(e, n)) && (u = vl(u, "onBeforeInput"), 0 < u.length && (c = new Wu("onBeforeInput", "beforeinput", null, n, c), d.push({
                    event: c,
                    listeners: u
                }), c.data = P));
            }
            Rf(d, t);
        });
    }
    function no(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function vl(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Yr(e, n), l != null && r.unshift(no(e, l, o)), l = Yr(e, t), l != null && r.push(no(e, l, o))), e = e.return;
        }
        return r;
    }
    function Un(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function nc(e, t, n, r, o) {
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
    var Gg = /\r\n?/g, Hg = /\u0000|\uFFFD/g;
    function rc(e) {
        return (typeof e == "string" ? e : "" + e).replace(Gg, `
`).replace(Hg, "");
    }
    function Ao(e, t, n) {
        if (t = rc(t), rc(e) !== t && n) throw Error(R(425));
    }
    function xl() {}
    var cs = null, ds = null;
    function fs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ps = typeof setTimeout == "function" ? setTimeout : void 0, Kg = typeof clearTimeout == "function" ? clearTimeout : void 0, oc = typeof Promise == "function" ? Promise : void 0, Qg = typeof queueMicrotask == "function" ? queueMicrotask : typeof oc < "u" ? function(e) {
        return oc.resolve(null).then(e).catch(Yg);
    } : ps;
    function Yg(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Ii(e, t) {
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
    function qt(e) {
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
    function lc(e) {
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
    var xr = Math.random().toString(36).slice(2), wt = "__reactFiber$" + xr, ro = "__reactProps$" + xr, Pt = "__reactContainer$" + xr, ms = "__reactEvents$" + xr, Xg = "__reactListeners$" + xr, Zg = "__reactHandles$" + xr;
    function _n(e) {
        var t = e[wt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Pt] || n[wt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = lc(e); e !== null;){
                    if (n = e[wt]) return n;
                    e = lc(e);
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
    function Yn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(R(33));
    }
    function Vl(e) {
        return e[ro] || null;
    }
    var hs = [], Xn = -1;
    function an(e) {
        return {
            current: e
        };
    }
    function ee(e) {
        0 > Xn || (e.current = hs[Xn], hs[Xn] = null, Xn--);
    }
    function J(e, t) {
        Xn++, hs[Xn] = e.current, e.current = t;
    }
    var ln = {}, Te = an(ln), Fe = an(!1), Pn = ln;
    function cr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ln;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function $e(e) {
        return e = e.childContextTypes, e != null;
    }
    function wl() {
        ee(Fe), ee(Te);
    }
    function ic(e, t, n) {
        if (Te.current !== ln) throw Error(R(168));
        J(Te, t), J(Fe, n);
    }
    function zf(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(R(108, Oh(e) || "Unknown", o));
        return se({}, n, r);
    }
    function Sl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, Pn = Te.current, J(Te, e), J(Fe, Fe.current), !0;
    }
    function sc(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(R(169));
        n ? (e = zf(e, t, Pn), r.__reactInternalMemoizedMergedChildContext = e, ee(Fe), ee(Te), J(Te, e)) : ee(Fe), J(Fe, n);
    }
    var Nt = null, Wl = !1, Ri = !1;
    function Pf(e) {
        Nt === null ? Nt = [
            e
        ] : Nt.push(e);
    }
    function Jg(e) {
        Wl = !0, Pf(e);
    }
    function un() {
        if (!Ri && Nt !== null) {
            Ri = !0;
            var e = 0, t = K;
            try {
                var n = Nt;
                for(K = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Nt = null, Wl = !1;
            } catch (o) {
                throw Nt !== null && (Nt = Nt.slice(e + 1)), tf(oa, un), o;
            } finally{
                K = t, Ri = !1;
            }
        }
        return null;
    }
    var Zn = [], Jn = 0, kl = null, Cl = 0, Je = [], qe = 0, jn = null, It = 1, Rt = "";
    function Sn(e, t) {
        Zn[Jn++] = Cl, Zn[Jn++] = kl, kl = e, Cl = t;
    }
    function jf(e, t, n) {
        Je[qe++] = It, Je[qe++] = Rt, Je[qe++] = jn, jn = e;
        var r = It;
        e = Rt;
        var o = 32 - pt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - pt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, It = 1 << 32 - pt(t) + o | n << o | r, Rt = l + e;
        } else It = 1 << l | n << o | r, Rt = e;
    }
    function pa(e) {
        e.return !== null && (Sn(e, 1), jf(e, 1, 0));
    }
    function ma(e) {
        for(; e === kl;)kl = Zn[--Jn], Zn[Jn] = null, Cl = Zn[--Jn], Zn[Jn] = null;
        for(; e === jn;)jn = Je[--qe], Je[qe] = null, Rt = Je[--qe], Je[qe] = null, It = Je[--qe], Je[qe] = null;
    }
    var Ke = null, He = null, oe = !1, dt = null;
    function Mf(e, t) {
        var n = tt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function ac(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = qt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, He = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jn !== null ? {
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
    function gs(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ys(e) {
        if (oe) {
            var t = He;
            if (t) {
                var n = t;
                if (!ac(e, t)) {
                    if (gs(e)) throw Error(R(418));
                    t = qt(n.nextSibling);
                    var r = Ke;
                    t && ac(e, t) ? Mf(r, n) : (e.flags = e.flags & -4097 | 2, oe = !1, Ke = e);
                }
            } else {
                if (gs(e)) throw Error(R(418));
                e.flags = e.flags & -4097 | 2, oe = !1, Ke = e;
            }
        }
    }
    function uc(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ke = e;
    }
    function Fo(e) {
        if (e !== Ke) return !1;
        if (!oe) return uc(e), oe = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fs(e.type, e.memoizedProps)), t && (t = He)) {
            if (gs(e)) throw Lf(), Error(R(418));
            for(; t;)Mf(e, t), t = qt(t.nextSibling);
        }
        if (uc(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                He = qt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                He = null;
            }
        } else He = Ke ? qt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Lf() {
        for(var e = He; e;)e = qt(e.nextSibling);
    }
    function dr() {
        He = Ke = null, oe = !1;
    }
    function ha(e) {
        dt === null ? dt = [
            e
        ] : dt.push(e);
    }
    var qg = Lt.ReactCurrentBatchConfig;
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
    function $o(e, t) {
        throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function cc(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Of(e) {
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
            return g = rn(g, m), g.index = 0, g.sibling = null, g;
        }
        function l(g, m, p) {
            return g.index = p, e ? (p = g.alternate, p !== null ? (p = p.index, p < m ? (g.flags |= 2, m) : p) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
        }
        function i(g) {
            return e && g.alternate === null && (g.flags |= 2), g;
        }
        function s(g, m, p, k) {
            return m === null || m.tag !== 6 ? (m = Oi(p, g.mode, k), m.return = g, m) : (m = o(m, p), m.return = g, m);
        }
        function a(g, m, p, k) {
            var N = p.type;
            return N === Gn ? c(g, m, p.props.children, k, p.key) : m !== null && (m.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Vt && cc(N) === m.type) ? (k = o(m, p.props), k.ref = Tr(g, m, p), k.return = g, k) : (k = sl(p.type, p.key, p.props, null, g.mode, k), k.ref = Tr(g, m, p), k.return = g, k);
        }
        function u(g, m, p, k) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== p.containerInfo || m.stateNode.implementation !== p.implementation ? (m = Di(p, g.mode, k), m.return = g, m) : (m = o(m, p.children || []), m.return = g, m);
        }
        function c(g, m, p, k, N) {
            return m === null || m.tag !== 7 ? (m = Rn(p, g.mode, k, N), m.return = g, m) : (m = o(m, p), m.return = g, m);
        }
        function d(g, m, p) {
            if (typeof m == "string" && m !== "" || typeof m == "number") return m = Oi("" + m, g.mode, p), m.return = g, m;
            if (typeof m == "object" && m !== null) {
                switch(m.$$typeof){
                    case To:
                        return p = sl(m.type, m.key, m.props, null, g.mode, p), p.ref = Tr(g, null, m), p.return = g, p;
                    case Wn:
                        return m = Di(m, g.mode, p), m.return = g, m;
                    case Vt:
                        var k = m._init;
                        return d(g, k(m._payload), p);
                }
                if (Or(m) || _r(m)) return m = Rn(m, g.mode, p, null), m.return = g, m;
                $o(g, m);
            }
            return null;
        }
        function f(g, m, p, k) {
            var N = m !== null ? m.key : null;
            if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : s(g, m, "" + p, k);
            if (typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case To:
                        return p.key === N ? a(g, m, p, k) : null;
                    case Wn:
                        return p.key === N ? u(g, m, p, k) : null;
                    case Vt:
                        return N = p._init, f(g, m, N(p._payload), k);
                }
                if (Or(p) || _r(p)) return N !== null ? null : c(g, m, p, k, null);
                $o(g, p);
            }
            return null;
        }
        function x(g, m, p, k, N) {
            if (typeof k == "string" && k !== "" || typeof k == "number") return g = g.get(p) || null, s(m, g, "" + k, N);
            if (typeof k == "object" && k !== null) {
                switch(k.$$typeof){
                    case To:
                        return g = g.get(k.key === null ? p : k.key) || null, a(m, g, k, N);
                    case Wn:
                        return g = g.get(k.key === null ? p : k.key) || null, u(m, g, k, N);
                    case Vt:
                        var T = k._init;
                        return x(g, m, p, T(k._payload), N);
                }
                if (Or(k) || _r(k)) return g = g.get(p) || null, c(m, g, k, N, null);
                $o(m, k);
            }
            return null;
        }
        function v(g, m, p, k) {
            for(var N = null, T = null, P = m, _ = m = 0, $ = null; P !== null && _ < p.length; _++){
                P.index > _ ? ($ = P, P = null) : $ = P.sibling;
                var F = f(g, P, p[_], k);
                if (F === null) {
                    P === null && (P = $);
                    break;
                }
                e && P && F.alternate === null && t(g, P), m = l(F, m, _), T === null ? N = F : T.sibling = F, T = F, P = $;
            }
            if (_ === p.length) return n(g, P), oe && Sn(g, _), N;
            if (P === null) {
                for(; _ < p.length; _++)P = d(g, p[_], k), P !== null && (m = l(P, m, _), T === null ? N = P : T.sibling = P, T = P);
                return oe && Sn(g, _), N;
            }
            for(P = r(g, P); _ < p.length; _++)$ = x(P, g, _, p[_], k), $ !== null && (e && $.alternate !== null && P.delete($.key === null ? _ : $.key), m = l($, m, _), T === null ? N = $ : T.sibling = $, T = $);
            return e && P.forEach(function(he) {
                return t(g, he);
            }), oe && Sn(g, _), N;
        }
        function h(g, m, p, k) {
            var N = _r(p);
            if (typeof N != "function") throw Error(R(150));
            if (p = N.call(p), p == null) throw Error(R(151));
            for(var T = N = null, P = m, _ = m = 0, $ = null, F = p.next(); P !== null && !F.done; _++, F = p.next()){
                P.index > _ ? ($ = P, P = null) : $ = P.sibling;
                var he = f(g, P, F.value, k);
                if (he === null) {
                    P === null && (P = $);
                    break;
                }
                e && P && he.alternate === null && t(g, P), m = l(he, m, _), T === null ? N = he : T.sibling = he, T = he, P = $;
            }
            if (F.done) return n(g, P), oe && Sn(g, _), N;
            if (P === null) {
                for(; !F.done; _++, F = p.next())F = d(g, F.value, k), F !== null && (m = l(F, m, _), T === null ? N = F : T.sibling = F, T = F);
                return oe && Sn(g, _), N;
            }
            for(P = r(g, P); !F.done; _++, F = p.next())F = x(P, g, _, F.value, k), F !== null && (e && F.alternate !== null && P.delete(F.key === null ? _ : F.key), m = l(F, m, _), T === null ? N = F : T.sibling = F, T = F);
            return e && P.forEach(function(ze) {
                return t(g, ze);
            }), oe && Sn(g, _), N;
        }
        function S(g, m, p, k) {
            if (typeof p == "object" && p !== null && p.type === Gn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
                switch(p.$$typeof){
                    case To:
                        e: {
                            for(var N = p.key, T = m; T !== null;){
                                if (T.key === N) {
                                    if (N = p.type, N === Gn) {
                                        if (T.tag === 7) {
                                            n(g, T.sibling), m = o(T, p.props.children), m.return = g, g = m;
                                            break e;
                                        }
                                    } else if (T.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Vt && cc(N) === T.type) {
                                        n(g, T.sibling), m = o(T, p.props), m.ref = Tr(g, T, p), m.return = g, g = m;
                                        break e;
                                    }
                                    n(g, T);
                                    break;
                                } else t(g, T);
                                T = T.sibling;
                            }
                            p.type === Gn ? (m = Rn(p.props.children, g.mode, k, p.key), m.return = g, g = m) : (k = sl(p.type, p.key, p.props, null, g.mode, k), k.ref = Tr(g, m, p), k.return = g, g = k);
                        }
                        return i(g);
                    case Wn:
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
                            m = Di(p, g.mode, k), m.return = g, g = m;
                        }
                        return i(g);
                    case Vt:
                        return T = p._init, S(g, m, T(p._payload), k);
                }
                if (Or(p)) return v(g, m, p, k);
                if (_r(p)) return h(g, m, p, k);
                $o(g, p);
            }
            return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, p), m.return = g, g = m) : (n(g, m), m = Oi(p, g.mode, k), m.return = g, g = m), i(g)) : n(g, m);
        }
        return S;
    }
    var fr = Of(!0), Df = Of(!1), _l = an(null), El = null, qn = null, ga = null;
    function ya() {
        ga = qn = El = null;
    }
    function va(e) {
        var t = _l.current;
        ee(_l), e._currentValue = t;
    }
    function vs(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function sr(e, t) {
        El = e, ga = qn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ae = !0), e.firstContext = null);
    }
    function rt(e) {
        var t = e._currentValue;
        if (ga !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, qn === null) {
            if (El === null) throw Error(R(308));
            qn = e, El.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else qn = qn.next = e;
        return t;
    }
    var En = null;
    function xa(e) {
        En === null ? En = [
            e
        ] : En.push(e);
    }
    function bf(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, xa(t)) : (n.next = o.next, o.next = n), t.interleaved = n, jt(e, r);
    }
    function jt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Wt = !1;
    function wa(e) {
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
    function Af(e, t) {
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
    function en(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, H & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, jt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, xa(r)) : (t.next = o.next, o.next = t), r.interleaved = t, jt(e, n);
    }
    function tl(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, la(e, n);
        }
    }
    function dc(e, t) {
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
    function Nl(e, t, n, r) {
        var o = e.updateQueue;
        Wt = !1;
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
                                d = se({}, d, f);
                                break e;
                            case 2:
                                Wt = !0;
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
            Ln |= i, e.lanes = i, e.memoizedState = d;
        }
    }
    function fc(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
                o.call(r);
            }
        }
    }
    var yo = {}, kt = an(yo), oo = an(yo), lo = an(yo);
    function Nn(e) {
        if (e === yo) throw Error(R(174));
        return e;
    }
    function Sa(e, t) {
        switch(J(lo, t), J(oo, e), J(kt, yo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Ji(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ji(t, e);
        }
        ee(kt), J(kt, t);
    }
    function pr() {
        ee(kt), ee(oo), ee(lo);
    }
    function Ff(e) {
        Nn(lo.current);
        var t = Nn(kt.current), n = Ji(t, e.type);
        t !== n && (J(oo, e), J(kt, n));
    }
    function ka(e) {
        oo.current === e && (ee(kt), ee(oo));
    }
    var le = an(0);
    function Il(e) {
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
    var Ti = [];
    function Ca() {
        for(var e = 0; e < Ti.length; e++)Ti[e]._workInProgressVersionPrimary = null;
        Ti.length = 0;
    }
    var nl = Lt.ReactCurrentDispatcher, zi = Lt.ReactCurrentBatchConfig, Mn = 0, ie = null, ve = null, we = null, Rl = !1, Vr = !1, io = 0, ey = 0;
    function Ne() {
        throw Error(R(321));
    }
    function _a(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!ht(e[n], t[n])) return !1;
        return !0;
    }
    function Ea(e, t, n, r, o, l) {
        if (Mn = l, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, nl.current = e === null || e.memoizedState === null ? oy : ly, e = n(r, o), Vr) {
            l = 0;
            do {
                if (Vr = !1, io = 0, 25 <= l) throw Error(R(301));
                l += 1, we = ve = null, t.updateQueue = null, nl.current = iy, e = n(r, o);
            }while (Vr);
        }
        if (nl.current = Tl, t = ve !== null && ve.next !== null, Mn = 0, we = ve = ie = null, Rl = !1, t) throw Error(R(300));
        return e;
    }
    function Na() {
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
    function ot() {
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
    function Pi(e) {
        var t = ot(), n = t.queue;
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
                if ((Mn & c) === c) a !== null && (a = a.next = {
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
                    a === null ? (s = a = d, i = r) : a = a.next = d, ie.lanes |= c, Ln |= c;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, ht(r, t.memoizedState) || (Ae = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ie.lanes |= l, Ln |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function ji(e) {
        var t = ot(), n = t.queue;
        if (n === null) throw Error(R(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            ht(l, t.memoizedState) || (Ae = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function $f() {}
    function Bf(e, t) {
        var n = ie, r = ot(), o = t(), l = !ht(r.memoizedState, o);
        if (l && (r.memoizedState = o, Ae = !0), r = r.queue, Ia(Wf.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || we !== null && we.memoizedState.tag & 1) {
            if (n.flags |= 2048, ao(9, Vf.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(R(349));
            Mn & 30 || Uf(n, t, o);
        }
        return o;
    }
    function Uf(e, t, n) {
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
    function Vf(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Gf(t) && Hf(e);
    }
    function Wf(e, t, n) {
        return n(function() {
            Gf(t) && Hf(e);
        });
    }
    function Gf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ht(e, n);
        } catch  {
            return !0;
        }
    }
    function Hf(e) {
        var t = jt(e, 1);
        t !== null && mt(t, e, 1, -1);
    }
    function pc(e) {
        var t = xt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: so,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ry.bind(null, ie, e), [
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
    function Kf() {
        return ot().memoizedState;
    }
    function rl(e, t, n, r) {
        var o = xt();
        ie.flags |= e, o.memoizedState = ao(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Gl(e, t, n, r) {
        var o = ot();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ve !== null) {
            var i = ve.memoizedState;
            if (l = i.destroy, r !== null && _a(r, i.deps)) {
                o.memoizedState = ao(t, n, l, r);
                return;
            }
        }
        ie.flags |= e, o.memoizedState = ao(1 | t, n, l, r);
    }
    function mc(e, t) {
        return rl(8390656, 8, e, t);
    }
    function Ia(e, t) {
        return Gl(2048, 8, e, t);
    }
    function Qf(e, t) {
        return Gl(4, 2, e, t);
    }
    function Yf(e, t) {
        return Gl(4, 4, e, t);
    }
    function Xf(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Zf(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Gl(4, 4, Xf.bind(null, t, e), n);
    }
    function Ra() {}
    function Jf(e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && _a(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function qf(e, t) {
        var n = ot();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && _a(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function ep(e, t, n) {
        return Mn & 21 ? (ht(n, t) || (n = of(), ie.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ae = !0), e.memoizedState = n);
    }
    function ty(e, t) {
        var n = K;
        K = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = zi.transition;
        zi.transition = {};
        try {
            e(!1), t();
        } finally{
            K = n, zi.transition = r;
        }
    }
    function tp() {
        return ot().memoizedState;
    }
    function ny(e, t, n) {
        var r = nn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, np(e)) rp(t, n);
        else if (n = bf(e, t, n, r), n !== null) {
            var o = je();
            mt(n, e, r, o), op(n, t, r);
        }
    }
    function ry(e, t, n) {
        var r = nn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (np(e)) rp(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, ht(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, xa(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = bf(e, t, o, r), n !== null && (o = je(), mt(n, e, r, o), op(n, t, r));
        }
    }
    function np(e) {
        var t = e.alternate;
        return e === ie || t !== null && t === ie;
    }
    function rp(e, t) {
        Vr = Rl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function op(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, la(e, n);
        }
    }
    var Tl = {
        readContext: rt,
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
    }, oy = {
        readContext: rt,
        useCallback: function(e, t) {
            return xt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: rt,
        useEffect: mc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, rl(4194308, 4, Xf.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return rl(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return rl(4, 2, e, t);
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
            }, r.queue = e, e = e.dispatch = ny.bind(null, ie, e), [
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
        useState: pc,
        useDebugValue: Ra,
        useDeferredValue: function(e) {
            return xt().memoizedState = e;
        },
        useTransition: function() {
            var e = pc(!1), t = e[0];
            return e = ty.bind(null, e[1]), xt().memoizedState = e, [
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
                Mn & 30 || Uf(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, mc(Wf.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, ao(9, Vf.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = xt(), t = Se.identifierPrefix;
            if (oe) {
                var n = Rt, r = It;
                n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = io++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = ey++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, ly = {
        readContext: rt,
        useCallback: Jf,
        useContext: rt,
        useEffect: Ia,
        useImperativeHandle: Zf,
        useInsertionEffect: Qf,
        useLayoutEffect: Yf,
        useMemo: qf,
        useReducer: Pi,
        useRef: Kf,
        useState: function() {
            return Pi(so);
        },
        useDebugValue: Ra,
        useDeferredValue: function(e) {
            var t = ot();
            return ep(t, ve.memoizedState, e);
        },
        useTransition: function() {
            var e = Pi(so)[0], t = ot().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: $f,
        useSyncExternalStore: Bf,
        useId: tp,
        unstable_isNewReconciler: !1
    }, iy = {
        readContext: rt,
        useCallback: Jf,
        useContext: rt,
        useEffect: Ia,
        useImperativeHandle: Zf,
        useInsertionEffect: Qf,
        useLayoutEffect: Yf,
        useMemo: qf,
        useReducer: ji,
        useRef: Kf,
        useState: function() {
            return ji(so);
        },
        useDebugValue: Ra,
        useDeferredValue: function(e) {
            var t = ot();
            return ve === null ? t.memoizedState = e : ep(t, ve.memoizedState, e);
        },
        useTransition: function() {
            var e = ji(so)[0], t = ot().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: $f,
        useSyncExternalStore: Bf,
        useId: tp,
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
    function xs(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Hl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? bn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = je(), o = nn(e), l = Tt(r, o);
            l.payload = t, n != null && (l.callback = n), t = en(e, l, o), t !== null && (mt(t, e, o, r), tl(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = je(), o = nn(e), l = Tt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = en(e, l, o), t !== null && (mt(t, e, o, r), tl(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = je(), r = nn(e), o = Tt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = en(e, o, r), t !== null && (mt(t, e, r, n), tl(t, e, r));
        }
    };
    function hc(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !eo(n, r) || !eo(o, l) : !0;
    }
    function lp(e, t, n) {
        var r = !1, o = ln, l = t.contextType;
        return typeof l == "object" && l !== null ? l = rt(l) : (o = $e(t) ? Pn : Te.current, r = t.contextTypes, l = (r = r != null) ? cr(e, o) : ln), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Hl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function gc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Hl.enqueueReplaceState(t, t.state, null);
    }
    function ws(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, wa(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = rt(l) : (l = $e(t) ? Pn : Te.current, o.context = cr(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (xs(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Hl.enqueueReplaceState(o, o.state, null), Nl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function mr(e, t) {
        try {
            var n = "", r = t;
            do n += Lh(r), r = r.return;
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
    function Ss(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var sy = typeof WeakMap == "function" ? WeakMap : Map;
    function ip(e, t, n) {
        n = Tt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Pl || (Pl = !0, Ps = r), Ss(e, t);
        }, n;
    }
    function sp(e, t, n) {
        n = Tt(-1, n), n.tag = 3;
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
            Ss(e, t), typeof r != "function" && (tn === null ? tn = new Set([
                this
            ]) : tn.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function yc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new sy;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Sy.bind(null, e, t, n), t.then(e, e));
    }
    function vc(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function xc(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e);
    }
    var ay = Lt.ReactCurrentOwner, Ae = !1;
    function Pe(e, t, n, r) {
        t.child = e === null ? Df(t, null, n, r) : fr(t, e.child, n, r);
    }
    function wc(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return sr(t, o), r = Ea(e, t, n, r, l, o), n = Na(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mt(e, t, o)) : (oe && n && pa(t), t.flags |= 1, Pe(e, t, r, o), t.child);
    }
    function Sc(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Da(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, ap(e, t, l, r, o)) : (e = sl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : eo, n(i, r) && e.ref === t.ref) return Mt(e, t, o);
        }
        return t.flags |= 1, e = rn(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function ap(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (eo(l, r) && e.ref === t.ref) if (Ae = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Ae = !0);
            else return t.lanes = e.lanes, Mt(e, t, o);
        }
        return ks(e, t, n, r, o);
    }
    function up(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, J(tr, We), We |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, J(tr, We), We |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, J(tr, We), We |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, J(tr, We), We |= r;
        return Pe(e, t, o, n), t.child;
    }
    function cp(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function ks(e, t, n, r, o) {
        var l = $e(n) ? Pn : Te.current;
        return l = cr(t, l), sr(t, o), n = Ea(e, t, n, r, l, o), r = Na(), e !== null && !Ae ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Mt(e, t, o)) : (oe && r && pa(t), t.flags |= 1, Pe(e, t, n, o), t.child);
    }
    function kc(e, t, n, r, o) {
        if ($e(n)) {
            var l = !0;
            Sl(t);
        } else l = !1;
        if (sr(t, o), t.stateNode === null) ol(e, t), lp(t, n, r), ws(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = rt(u) : (u = $e(n) ? Pn : Te.current, u = cr(t, u));
            var c = n.getDerivedStateFromProps, d = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            d || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && gc(t, i, r, u), Wt = !1;
            var f = t.memoizedState;
            i.state = f, Nl(t, r, i, o), a = t.memoizedState, s !== r || f !== a || Fe.current || Wt ? (typeof c == "function" && (xs(t, n, c, r), a = t.memoizedState), (s = Wt || hc(t, n, s, r, f, a, u)) ? (d || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Af(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ut(t.type, s), i.props = u, d = t.pendingProps, f = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = rt(a) : (a = $e(n) ? Pn : Te.current, a = cr(t, a));
            var x = n.getDerivedStateFromProps;
            (c = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== d || f !== a) && gc(t, i, r, a), Wt = !1, f = t.memoizedState, i.state = f, Nl(t, r, i, o);
            var v = t.memoizedState;
            s !== d || f !== v || Fe.current || Wt ? (typeof x == "function" && (xs(t, n, x, r), v = t.memoizedState), (u = Wt || hc(t, n, u, r, f, v, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Cs(e, t, n, r, l, o);
    }
    function Cs(e, t, n, r, o, l) {
        cp(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && sc(t, n, !1), Mt(e, t, l);
        r = t.stateNode, ay.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = fr(t, e.child, null, l), t.child = fr(t, null, s, l)) : Pe(e, t, s, l), t.memoizedState = r.state, o && sc(t, n, !0), t.child;
    }
    function dp(e) {
        var t = e.stateNode;
        t.pendingContext ? ic(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ic(e, t.context, !1), Sa(e, t.containerInfo);
    }
    function Cc(e, t, n, r, o) {
        return dr(), ha(o), t.flags |= 256, Pe(e, t, n, r), t.child;
    }
    var _s = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Es(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function fp(e, t, n) {
        var r = t.pendingProps, o = le.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), J(le, o & 1), e === null) return ys(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Yl(i, r, 0, null), e = Rn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Es(n), t.memoizedState = _s, e) : Ta(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return uy(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = rn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = rn(s, l) : (l = Rn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Es(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = _s, r;
        }
        return l = e.child, e = l.sibling, r = rn(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function Ta(e, t) {
        return t = Yl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Bo(e, t, n, r) {
        return r !== null && ha(r), fr(t, e.child, null, n), e = Ta(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function uy(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Mi(Error(R(422))), Bo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Yl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = Rn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && fr(t, e.child, null, i), t.child.memoizedState = Es(i), t.memoizedState = _s, l);
        if (!(t.mode & 1)) return Bo(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(R(419)), r = Mi(l, r, void 0), Bo(e, t, i, r);
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, jt(e, o), mt(r, e, o, -1));
            }
            return Oa(), r = Mi(Error(R(421))), Bo(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ky.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, He = qt(o.nextSibling), Ke = t, oe = !0, dt = null, e !== null && (Je[qe++] = It, Je[qe++] = Rt, Je[qe++] = jn, It = e.id, Rt = e.overflow, jn = t), t = Ta(t, r.children), t.flags |= 4096, t);
    }
    function _c(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), vs(e.return, t, n);
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
    function pp(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Pe(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && _c(e, n, t);
                else if (e.tag === 19) _c(e, n, t);
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
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Il(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Li(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Il(e) === null) {
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
    function ol(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Mt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(R(153));
        if (t.child !== null) {
            for(e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function cy(e, t, n) {
        switch(t.tag){
            case 3:
                dp(t), dr();
                break;
            case 5:
                Ff(t);
                break;
            case 1:
                $e(t.type) && Sl(t);
                break;
            case 4:
                Sa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                J(_l, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (J(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fp(e, t, n) : (J(le, le.current & 1), e = Mt(e, t, n), e !== null ? e.sibling : null);
                J(le, le.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return pp(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), J(le, le.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, up(e, t, n);
        }
        return Mt(e, t, n);
    }
    var mp, Ns, hp, gp;
    mp = function(e, t) {
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
    Ns = function() {};
    hp = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, Nn(kt.current);
            var l = null;
            switch(n){
                case "input":
                    o = Qi(e, o), r = Qi(e, r), l = [];
                    break;
                case "select":
                    o = se({}, o, {
                        value: void 0
                    }), r = se({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Zi(e, o), r = Zi(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xl);
            }
            qi(n, r);
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
                else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Kr.hasOwnProperty(u) ? (a != null && u === "onScroll" && q("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a));
            }
            n && (l = l || []).push("style", n);
            var u = l;
            (t.updateQueue = u) && (t.flags |= 4);
        }
    };
    gp = function(e, t, n, r) {
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
    function Ie(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function dy(e, t, n) {
        var r = t.pendingProps;
        switch(ma(t), t.tag){
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
                return $e(t.type) && wl(), Ie(t), null;
            case 3:
                return r = t.stateNode, pr(), ee(Fe), ee(Te), Ca(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, dt !== null && (Ls(dt), dt = null))), Ns(e, t), Ie(t), null;
            case 5:
                ka(t);
                var o = Nn(lo.current);
                if (n = t.type, e !== null && t.stateNode != null) hp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(R(166));
                        return Ie(t), null;
                    }
                    if (e = Nn(kt.current), Fo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[wt] = t, r[ro] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                q("cancel", r), q("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                q("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < br.length; o++)q(br[o], r);
                                break;
                            case "source":
                                q("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                q("error", r), q("load", r);
                                break;
                            case "details":
                                q("toggle", r);
                                break;
                            case "input":
                                Mu(r, l), q("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, q("invalid", r);
                                break;
                            case "textarea":
                                Ou(r, l), q("invalid", r);
                        }
                        qi(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Ao(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Ao(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Kr.hasOwnProperty(i) && s != null && i === "onScroll" && q("scroll", r);
                        }
                        switch(n){
                            case "input":
                                zo(r), Lu(r, l, !0);
                                break;
                            case "textarea":
                                zo(r), Du(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = xl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[wt] = t, e[ro] = r, mp(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = es(n, r), n){
                                case "dialog":
                                    q("cancel", e), q("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    q("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < br.length; o++)q(br[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    q("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    q("error", e), q("load", e), o = r;
                                    break;
                                case "details":
                                    q("toggle", e), o = r;
                                    break;
                                case "input":
                                    Mu(e, r), o = Qi(e, r), q("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = se({}, r, {
                                        value: void 0
                                    }), q("invalid", e);
                                    break;
                                case "textarea":
                                    Ou(e, r), o = Zi(e, r), q("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            qi(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? Hd(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Wd(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Qr(e, a) : typeof a == "number" && Qr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Kr.hasOwnProperty(l) ? a != null && l === "onScroll" && q("scroll", e) : a != null && qs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    zo(e), Lu(e, r, !1);
                                    break;
                                case "textarea":
                                    zo(e), Du(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + on(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? rr(e, !!r.multiple, l, !1) : r.defaultValue != null && rr(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = xl);
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
                if (e && t.stateNode != null) gp(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                    if (n = Nn(lo.current), Nn(kt.current), Fo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (l = r.nodeValue !== n) && (e = Ke, e !== null)) switch(e.tag){
                            case 3:
                                Ao(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Ao(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
                }
                return Ie(t), null;
            case 13:
                if (ee(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (oe && He !== null && t.mode & 1 && !(t.flags & 128)) Lf(), dr(), t.flags |= 98560, l = !1;
                    else if (l = Fo(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(R(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(R(317));
                            l[wt] = t;
                        } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Ie(t), l = !1;
                    } else dt !== null && (Ls(dt), dt = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? xe === 0 && (xe = 3) : Oa())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
            case 4:
                return pr(), Ns(e, t), e === null && to(t.stateNode.containerInfo), Ie(t), null;
            case 10:
                return va(t.type._context), Ie(t), null;
            case 17:
                return $e(t.type) && wl(), Ie(t), null;
            case 19:
                if (ee(le), l = t.memoizedState, l === null) return Ie(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) zr(l, !1);
                else {
                    if (xe !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Il(e), i !== null) {
                            for(t.flags |= 128, zr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return J(le, le.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && me() > hr && (t.flags |= 128, r = !0, zr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Il(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), zr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !oe) return Ie(t), null;
                    } else 2 * me() - l.renderingStartTime > hr && n !== 1073741824 && (t.flags |= 128, r = !0, zr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = me(), t.sibling = null, n = le.current, J(le, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
            case 22:
            case 23:
                return La(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(R(156, t.tag));
    }
    function fy(e, t) {
        switch(ma(t), t.tag){
            case 1:
                return $e(t.type) && wl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return pr(), ee(Fe), ee(Te), Ca(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return ka(t), null;
            case 13:
                if (ee(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(R(340));
                    dr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ee(le), null;
            case 4:
                return pr(), null;
            case 10:
                return va(t.type._context), null;
            case 22:
            case 23:
                return La(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Uo = !1, Re = !1, py = typeof WeakSet == "function" ? WeakSet : Set, L = null;
    function er(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            fe(e, t, r);
        }
        else n.current = null;
    }
    function Is(e, t, n) {
        try {
            n();
        } catch (r) {
            fe(e, t, r);
        }
    }
    var Ec = !1;
    function my(e, t) {
        if (cs = gl, e = Sf(), fa(e)) {
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
        for(ds = {
            focusedElem: e,
            selectionRange: n
        }, gl = !1, L = t; L !== null;)if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
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
                            var h = v.memoizedProps, S = v.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? h : ut(t.type, h), S);
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
            } catch (k) {
                fe(t, t.return, k);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, L = e;
                break;
            }
            L = t.return;
        }
        return v = Ec, Ec = !1, v;
    }
    function Wr(e, t, n) {
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
    function Kl(e, t) {
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
    function Rs(e) {
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
    function yp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, yp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[ro], delete t[ms], delete t[Xg], delete t[Zg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function vp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Nc(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || vp(e.return)) return null;
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
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xl));
        else if (r !== 4 && (e = e.child, e !== null)) for(Ts(e, t, n), e = e.sibling; e !== null;)Ts(e, t, n), e = e.sibling;
    }
    function zs(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(zs(e, t, n), e = e.sibling; e !== null;)zs(e, t, n), e = e.sibling;
    }
    var Ce = null, ct = !1;
    function Ft(e, t, n) {
        for(n = n.child; n !== null;)xp(e, t, n), n = n.sibling;
    }
    function xp(e, t, n) {
        if (St && typeof St.onCommitFiberUnmount == "function") try {
            St.onCommitFiberUnmount(Fl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Re || er(n, t);
            case 6:
                var r = Ce, o = ct;
                Ce = null, Ft(e, t, n), Ce = r, ct = o, Ce !== null && (ct ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ce.removeChild(n.stateNode));
                break;
            case 18:
                Ce !== null && (ct ? (e = Ce, n = n.stateNode, e.nodeType === 8 ? Ii(e.parentNode, n) : e.nodeType === 1 && Ii(e, n), Jr(e)) : Ii(Ce, n.stateNode));
                break;
            case 4:
                r = Ce, o = ct, Ce = n.stateNode.containerInfo, ct = !0, Ft(e, t, n), Ce = r, ct = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Is(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Ft(e, t, n);
                break;
            case 1:
                if (!Re && (er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    fe(n, t, s);
                }
                Ft(e, t, n);
                break;
            case 21:
                Ft(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Re = (r = Re) || n.memoizedState !== null, Ft(e, t, n), Re = r) : Ft(e, t, n);
                break;
            default:
                Ft(e, t, n);
        }
    }
    function Ic(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new py), t.forEach(function(r) {
                var o = Cy.bind(null, e, r);
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
                xp(l, i, o), Ce = null, ct = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                fe(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)wp(t, e), t = t.sibling;
    }
    function wp(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (it(t, e), vt(e), r & 4) {
                    try {
                        Wr(3, e, e.return), Kl(3, e);
                    } catch (h) {
                        fe(e, e.return, h);
                    }
                    try {
                        Wr(5, e, e.return);
                    } catch (h) {
                        fe(e, e.return, h);
                    }
                }
                break;
            case 1:
                it(t, e), vt(e), r & 512 && n !== null && er(n, n.return);
                break;
            case 5:
                if (it(t, e), vt(e), r & 512 && n !== null && er(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        Qr(o, "");
                    } catch (h) {
                        fe(e, e.return, h);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Bd(o, l), es(s, i);
                        var u = es(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var c = a[i], d = a[i + 1];
                            c === "style" ? Hd(o, d) : c === "dangerouslySetInnerHTML" ? Wd(o, d) : c === "children" ? Qr(o, d) : qs(o, c, d, u);
                        }
                        switch(s){
                            case "input":
                                Yi(o, l);
                                break;
                            case "textarea":
                                Ud(o, l);
                                break;
                            case "select":
                                var f = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var x = l.value;
                                x != null ? rr(o, !!l.multiple, x, !1) : f !== !!l.multiple && (l.defaultValue != null ? rr(o, !!l.multiple, l.defaultValue, !0) : rr(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[ro] = l;
                    } catch (h) {
                        fe(e, e.return, h);
                    }
                }
                break;
            case 6:
                if (it(t, e), vt(e), r & 4) {
                    if (e.stateNode === null) throw Error(R(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (h) {
                        fe(e, e.return, h);
                    }
                }
                break;
            case 3:
                if (it(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Jr(t.containerInfo);
                } catch (h) {
                    fe(e, e.return, h);
                }
                break;
            case 4:
                it(t, e), vt(e);
                break;
            case 13:
                it(t, e), vt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ja = me())), r & 4 && Ic(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (u = Re) || c, it(t, e), Re = u) : it(t, e), vt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for(L = e, c = e.child; c !== null;){
                        for(d = L = c; L !== null;){
                            switch(f = L, x = f.child, f.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Wr(4, f, f.return);
                                    break;
                                case 1:
                                    er(f, f.return);
                                    var v = f.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                                        } catch (h) {
                                            fe(r, n, h);
                                        }
                                    }
                                    break;
                                case 5:
                                    er(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        Tc(d);
                                        continue;
                                    }
                            }
                            x !== null ? (x.return = f, L = x) : Tc(d);
                        }
                        c = c.sibling;
                    }
                    e: for(c = null, d = e;;){
                        if (d.tag === 5) {
                            if (c === null) {
                                c = d;
                                try {
                                    o = d.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = d.stateNode, a = d.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Gd("display", i));
                                } catch (h) {
                                    fe(e, e.return, h);
                                }
                            }
                        } else if (d.tag === 6) {
                            if (c === null) try {
                                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                            } catch (h) {
                                fe(e, e.return, h);
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
                it(t, e), vt(e), r & 4 && Ic(e);
                break;
            case 21:
                break;
            default:
                it(t, e), vt(e);
        }
    }
    function vt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (vp(n)) {
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
                        var l = Nc(e);
                        zs(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = Nc(e);
                        Ts(e, s, i);
                        break;
                    default:
                        throw Error(R(161));
                }
            } catch (a) {
                fe(e, e.return, a);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function hy(e, t, n) {
        L = e, Sp(e);
    }
    function Sp(e, t, n) {
        for(var r = (e.mode & 1) !== 0; L !== null;){
            var o = L, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Uo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || Re;
                    s = Uo;
                    var u = Re;
                    if (Uo = i, (Re = a) && !u) for(L = o; L !== null;)i = L, a = i.child, i.tag === 22 && i.memoizedState !== null ? zc(o) : a !== null ? (a.return = i, L = a) : zc(o);
                    for(; l !== null;)L = l, Sp(l), l = l.sibling;
                    L = o, Uo = s, Re = u;
                }
                Rc(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, L = l) : Rc(e);
        }
    }
    function Rc(e) {
        for(; L !== null;){
            var t = L;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Re || Kl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Re) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && fc(t, l, r);
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
                                fc(t, i, n);
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
                            throw Error(R(163));
                    }
                    Re || t.flags & 512 && Rs(t);
                } catch (f) {
                    fe(t, t.return, f);
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
    function Tc(e) {
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
    function zc(e) {
        for(; L !== null;){
            var t = L;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Kl(4, t);
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
                            Rs(t);
                        } catch (a) {
                            fe(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Rs(t);
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
    var gy = Math.ceil, zl = Lt.ReactCurrentDispatcher, za = Lt.ReactCurrentOwner, nt = Lt.ReactCurrentBatchConfig, H = 0, Se = null, ge = null, _e = 0, We = 0, tr = an(0), xe = 0, uo = null, Ln = 0, Ql = 0, Pa = 0, Gr = null, be = null, ja = 0, hr = 1 / 0, Et = null, Pl = !1, Ps = null, tn = null, Vo = !1, Qt = null, jl = 0, Hr = 0, js = null, ll = -1, il = 0;
    function je() {
        return H & 6 ? me() : ll !== -1 ? ll : ll = me();
    }
    function nn(e) {
        return e.mode & 1 ? H & 2 && _e !== 0 ? _e & -_e : qg.transition !== null ? (il === 0 && (il = of()), il) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ff(e.type)), e) : 1;
    }
    function mt(e, t, n, r) {
        if (50 < Hr) throw Hr = 0, js = null, Error(R(185));
        mo(e, n, r), (!(H & 2) || e !== Se) && (e === Se && (!(H & 2) && (Ql |= n), xe === 4 && Ht(e, _e)), Be(e, r), n === 1 && H === 0 && !(t.mode & 1) && (hr = me() + 500, Wl && un()));
    }
    function Be(e, t) {
        var n = e.callbackNode;
        qh(e, t);
        var r = hl(e, e === Se ? _e : 0);
        if (r === 0) n !== null && Fu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Fu(n), t === 1) e.tag === 0 ? Jg(Pc.bind(null, e)) : Pf(Pc.bind(null, e)), Qg(function() {
                !(H & 6) && un();
            }), n = null;
            else {
                switch(lf(r)){
                    case 1:
                        n = oa;
                        break;
                    case 4:
                        n = nf;
                        break;
                    case 16:
                        n = ml;
                        break;
                    case 536870912:
                        n = rf;
                        break;
                    default:
                        n = ml;
                }
                n = Tp(n, kp.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function kp(e, t) {
        if (ll = -1, il = 0, H & 6) throw Error(R(327));
        var n = e.callbackNode;
        if (ar() && e.callbackNode !== n) return null;
        var r = hl(e, e === Se ? _e : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Ml(e, r);
        else {
            t = r;
            var o = H;
            H |= 2;
            var l = _p();
            (Se !== e || _e !== t) && (Et = null, hr = me() + 500, In(e, t));
            do try {
                xy();
                break;
            } catch (s) {
                Cp(e, s);
            }
            while (!0);
            ya(), zl.current = l, H = o, ge !== null ? t = 0 : (Se = null, _e = 0, t = xe);
        }
        if (t !== 0) {
            if (t === 2 && (o = ls(e), o !== 0 && (r = o, t = Ms(e, o))), t === 1) throw n = uo, In(e, 0), Ht(e, r), Be(e, me()), n;
            if (t === 6) Ht(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !yy(o) && (t = Ml(e, r), t === 2 && (l = ls(e), l !== 0 && (r = l, t = Ms(e, l))), t === 1)) throw n = uo, In(e, 0), Ht(e, r), Be(e, me()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(R(345));
                    case 2:
                        kn(e, be, Et);
                        break;
                    case 3:
                        if (Ht(e, r), (r & 130023424) === r && (t = ja + 500 - me(), 10 < t)) {
                            if (hl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                je(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ps(kn.bind(null, e, be, Et), t);
                            break;
                        }
                        kn(e, be, Et);
                        break;
                    case 4:
                        if (Ht(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - pt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gy(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ps(kn.bind(null, e, be, Et), r);
                            break;
                        }
                        kn(e, be, Et);
                        break;
                    case 5:
                        kn(e, be, Et);
                        break;
                    default:
                        throw Error(R(329));
                }
            }
        }
        return Be(e, me()), e.callbackNode === n ? kp.bind(null, e) : null;
    }
    function Ms(e, t) {
        var n = Gr;
        return e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256), e = Ml(e, t), e !== 2 && (t = be, be = n, t !== null && Ls(t)), e;
    }
    function Ls(e) {
        be === null ? be = e : be.push.apply(be, e);
    }
    function yy(e) {
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
        for(t &= ~Pa, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - pt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Pc(e) {
        if (H & 6) throw Error(R(327));
        ar();
        var t = hl(e, 0);
        if (!(t & 1)) return Be(e, me()), null;
        var n = Ml(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ls(e);
            r !== 0 && (t = r, n = Ms(e, r));
        }
        if (n === 1) throw n = uo, In(e, 0), Ht(e, t), Be(e, me()), n;
        if (n === 6) throw Error(R(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, be, Et), Be(e, me()), null;
    }
    function Ma(e, t) {
        var n = H;
        H |= 1;
        try {
            return e(t);
        } finally{
            H = n, H === 0 && (hr = me() + 500, Wl && un());
        }
    }
    function On(e) {
        Qt !== null && Qt.tag === 0 && !(H & 6) && ar();
        var t = H;
        H |= 1;
        var n = nt.transition, r = K;
        try {
            if (nt.transition = null, K = 1, e) return e();
        } finally{
            K = r, nt.transition = n, H = t, !(H & 6) && un();
        }
    }
    function La() {
        We = tr.current, ee(tr);
    }
    function In(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Kg(n)), ge !== null) for(n = ge.return; n !== null;){
            var r = n;
            switch(ma(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && wl();
                    break;
                case 3:
                    pr(), ee(Fe), ee(Te), Ca();
                    break;
                case 5:
                    ka(r);
                    break;
                case 4:
                    pr();
                    break;
                case 13:
                    ee(le);
                    break;
                case 19:
                    ee(le);
                    break;
                case 10:
                    va(r.type._context);
                    break;
                case 22:
                case 23:
                    La();
            }
            n = n.return;
        }
        if (Se = e, ge = e = rn(e.current, null), _e = We = t, xe = 0, uo = null, Pa = Ql = Ln = 0, be = Gr = null, En !== null) {
            for(t = 0; t < En.length; t++)if (n = En[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            En = null;
        }
        return e;
    }
    function Cp(e, t) {
        do {
            var n = ge;
            try {
                if (ya(), nl.current = Tl, Rl) {
                    for(var r = ie.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Rl = !1;
                }
                if (Mn = 0, we = ve = ie = null, Vr = !1, io = 0, za.current = null, n === null || n.return === null) {
                    xe = 1, uo = t, ge = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = _e, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, c = s, d = c.tag;
                        if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                            var f = c.alternate;
                            f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null);
                        }
                        var x = vc(i);
                        if (x !== null) {
                            x.flags &= -257, xc(x, i, s, l, t), x.mode & 1 && yc(l, u, t), t = x, a = u;
                            var v = t.updateQueue;
                            if (v === null) {
                                var h = new Set;
                                h.add(a), t.updateQueue = h;
                            } else v.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                yc(l, u, t), Oa();
                                break e;
                            }
                            a = Error(R(426));
                        }
                    } else if (oe && s.mode & 1) {
                        var S = vc(i);
                        if (S !== null) {
                            !(S.flags & 65536) && (S.flags |= 256), xc(S, i, s, l, t), ha(mr(a, s));
                            break e;
                        }
                    }
                    l = a = mr(a, s), xe !== 4 && (xe = 2), Gr === null ? Gr = [
                        l
                    ] : Gr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var g = ip(l, a, t);
                                dc(l, g);
                                break e;
                            case 1:
                                s = a;
                                var m = l.type, p = l.stateNode;
                                if (!(l.flags & 128) && (typeof m.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (tn === null || !tn.has(p)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var k = sp(l, s, t);
                                    dc(l, k);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                Np(n);
            } catch (N) {
                t = N, ge === n && n !== null && (ge = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function _p() {
        var e = zl.current;
        return zl.current = Tl, e === null ? Tl : e;
    }
    function Oa() {
        (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Se === null || !(Ln & 268435455) && !(Ql & 268435455) || Ht(Se, _e);
    }
    function Ml(e, t) {
        var n = H;
        H |= 2;
        var r = _p();
        (Se !== e || _e !== t) && (Et = null, In(e, t));
        do try {
            vy();
            break;
        } catch (o) {
            Cp(e, o);
        }
        while (!0);
        if (ya(), H = n, zl.current = r, ge !== null) throw Error(R(261));
        return Se = null, _e = 0, xe;
    }
    function vy() {
        for(; ge !== null;)Ep(ge);
    }
    function xy() {
        for(; ge !== null && !Wh();)Ep(ge);
    }
    function Ep(e) {
        var t = Rp(e.alternate, e, We);
        e.memoizedProps = e.pendingProps, t === null ? Np(e) : ge = t, za.current = null;
    }
    function Np(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = fy(n, t), n !== null) {
                    n.flags &= 32767, ge = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    xe = 6, ge = null;
                    return;
                }
            } else if (n = dy(n, t, We), n !== null) {
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
    function kn(e, t, n) {
        var r = K, o = nt.transition;
        try {
            nt.transition = null, K = 1, wy(e, t, n, r);
        } finally{
            nt.transition = o, K = r;
        }
        return null;
    }
    function wy(e, t, n, r) {
        do ar();
        while (Qt !== null);
        if (H & 6) throw Error(R(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (eg(e, l), e === Se && (ge = Se = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vo || (Vo = !0, Tp(ml, function() {
            return ar(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = nt.transition, nt.transition = null;
            var i = K;
            K = 1;
            var s = H;
            H |= 4, za.current = null, my(e, n), wp(n, e), $g(ds), gl = !!cs, ds = cs = null, e.current = n, hy(n), Gh(), H = s, K = i, nt.transition = l;
        } else e.current = n;
        if (Vo && (Vo = !1, Qt = e, jl = o), l = e.pendingLanes, l === 0 && (tn = null), Qh(n.stateNode), Be(e, me()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Pl) throw Pl = !1, e = Ps, Ps = null, e;
        return jl & 1 && e.tag !== 0 && ar(), l = e.pendingLanes, l & 1 ? e === js ? Hr++ : (Hr = 0, js = e) : Hr = 0, un(), null;
    }
    function ar() {
        if (Qt !== null) {
            var e = lf(jl), t = nt.transition, n = K;
            try {
                if (nt.transition = null, K = 16 > e ? 16 : e, Qt === null) var r = !1;
                else {
                    if (e = Qt, Qt = null, jl = 0, H & 6) throw Error(R(331));
                    var o = H;
                    for(H |= 4, L = e.current; L !== null;){
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
                                                Wr(8, c, l);
                                        }
                                        var d = c.child;
                                        if (d !== null) d.return = c, L = d;
                                        else for(; L !== null;){
                                            c = L;
                                            var f = c.sibling, x = c.return;
                                            if (yp(c), c === u) {
                                                L = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                f.return = x, L = f;
                                                break;
                                            }
                                            L = x;
                                        }
                                    }
                                }
                                var v = l.alternate;
                                if (v !== null) {
                                    var h = v.child;
                                    if (h !== null) {
                                        v.child = null;
                                        do {
                                            var S = h.sibling;
                                            h.sibling = null, h = S;
                                        }while (h !== null);
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
                                    Wr(9, l, l.return);
                            }
                            var g = l.sibling;
                            if (g !== null) {
                                g.return = l.return, L = g;
                                break e;
                            }
                            L = l.return;
                        }
                    }
                    var m = e.current;
                    for(L = m; L !== null;){
                        i = L;
                        var p = i.child;
                        if (i.subtreeFlags & 2064 && p !== null) p.return = i, L = p;
                        else e: for(i = m; L !== null;){
                            if (s = L, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Kl(9, s);
                                }
                            } catch (N) {
                                fe(s, s.return, N);
                            }
                            if (s === i) {
                                L = null;
                                break e;
                            }
                            var k = s.sibling;
                            if (k !== null) {
                                k.return = s.return, L = k;
                                break e;
                            }
                            L = s.return;
                        }
                    }
                    if (H = o, un(), St && typeof St.onPostCommitFiberRoot == "function") try {
                        St.onPostCommitFiberRoot(Fl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                K = n, nt.transition = t;
            }
        }
        return !1;
    }
    function jc(e, t, n) {
        t = mr(n, t), t = ip(e, t, 1), e = en(e, t, 1), t = je(), e !== null && (mo(e, 1, t), Be(e, t));
    }
    function fe(e, t, n) {
        if (e.tag === 3) jc(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                jc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
                    e = mr(n, e), e = sp(t, e, 1), t = en(t, e, 1), e = je(), t !== null && (mo(t, 1, e), Be(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Sy(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (_e & n) === n && (xe === 4 || xe === 3 && (_e & 130023424) === _e && 500 > me() - ja ? In(e, 0) : Pa |= n), Be(e, t);
    }
    function Ip(e, t) {
        t === 0 && (e.mode & 1 ? (t = Mo, Mo <<= 1, !(Mo & 130023424) && (Mo = 4194304)) : t = 1);
        var n = je();
        e = jt(e, t), e !== null && (mo(e, t, n), Be(e, n));
    }
    function ky(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), Ip(e, n);
    }
    function Cy(e, t) {
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
        r !== null && r.delete(t), Ip(e, n);
    }
    var Rp;
    Rp = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) Ae = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ae = !1, cy(e, t, n);
            Ae = !!(e.flags & 131072);
        }
        else Ae = !1, oe && t.flags & 1048576 && jf(t, Cl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                ol(e, t), e = t.pendingProps;
                var o = cr(t, Te.current);
                sr(t, n), o = Ea(null, t, r, e, o, n);
                var l = Na();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (l = !0, Sl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, wa(t), o.updater = Hl, t.stateNode = o, o._reactInternals = t, ws(t, r, e, n), t = Cs(null, t, r, !0, l, n)) : (t.tag = 0, oe && l && pa(t), Pe(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(ol(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Ey(r), e = ut(r, e), o){
                        case 0:
                            t = ks(null, t, r, e, n);
                            break e;
                        case 1:
                            t = kc(null, t, r, e, n);
                            break e;
                        case 11:
                            t = wc(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Sc(null, t, r, ut(r.type, e), n);
                            break e;
                    }
                    throw Error(R(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), ks(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), kc(e, t, r, o, n);
            case 3:
                e: {
                    if (dp(t), e === null) throw Error(R(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Af(e, t), Nl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = mr(Error(R(423)), t), t = Cc(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = mr(Error(R(424)), t), t = Cc(e, t, r, n, o);
                        break e;
                    } else for(He = qt(t.stateNode.containerInfo.firstChild), Ke = t, oe = !0, dt = null, n = Df(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (dr(), r === o) {
                            t = Mt(e, t, n);
                            break e;
                        }
                        Pe(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Ff(t), e === null && ys(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, fs(r, o) ? i = null : l !== null && fs(r, l) && (t.flags |= 32), cp(e, t), Pe(e, t, i, n), t.child;
            case 6:
                return e === null && ys(t), null;
            case 13:
                return fp(e, t, n);
            case 4:
                return Sa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fr(t, null, r, n) : Pe(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), wc(e, t, r, o, n);
            case 7:
                return Pe(e, t, t.pendingProps, n), t.child;
            case 8:
                return Pe(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Pe(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, J(_l, r._currentValue), r._currentValue = i, l !== null) if (ht(l.value, i)) {
                        if (l.children === o.children && !Fe.current) {
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
                                        a = Tt(-1, n & -n), a.tag = 2;
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
                            if (i = l.return, i === null) throw Error(R(341));
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
                    Pe(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, sr(t, n), o = rt(o), r = r(o), t.flags |= 1, Pe(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), Sc(e, t, r, o, n);
            case 15:
                return ap(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), ol(e, t), t.tag = 1, $e(r) ? (e = !0, Sl(t)) : e = !1, sr(t, n), lp(t, r, o), ws(t, r, o, n), Cs(null, t, r, !0, e, n);
            case 19:
                return pp(e, t, n);
            case 22:
                return up(e, t, n);
        }
        throw Error(R(156, t.tag));
    };
    function Tp(e, t) {
        return tf(e, t);
    }
    function _y(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function tt(e, t, n, r) {
        return new _y(e, t, n, r);
    }
    function Da(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Ey(e) {
        if (typeof e == "function") return Da(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === ta) return 11;
            if (e === na) return 14;
        }
        return 2;
    }
    function rn(e, t) {
        var n = e.alternate;
        return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function sl(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") Da(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Gn:
                return Rn(n.children, o, l, t);
            case ea:
                i = 8, o |= 8;
                break;
            case Wi:
                return e = tt(12, n, t, o | 2), e.elementType = Wi, e.lanes = l, e;
            case Gi:
                return e = tt(13, n, t, o), e.elementType = Gi, e.lanes = l, e;
            case Hi:
                return e = tt(19, n, t, o), e.elementType = Hi, e.lanes = l, e;
            case Ad:
                return Yl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Dd:
                        i = 10;
                        break e;
                    case bd:
                        i = 9;
                        break e;
                    case ta:
                        i = 11;
                        break e;
                    case na:
                        i = 14;
                        break e;
                    case Vt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(R(130, e == null ? e : typeof e, ""));
        }
        return t = tt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function Rn(e, t, n, r) {
        return e = tt(7, e, r, t), e.lanes = n, e;
    }
    function Yl(e, t, n, r) {
        return e = tt(22, e, r, t), e.elementType = Ad, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Oi(e, t, n) {
        return e = tt(6, e, null, t), e.lanes = n, e;
    }
    function Di(e, t, n) {
        return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function Ny(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gi(0), this.expirationTimes = gi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function ba(e, t, n, r, o, l, i, s, a) {
        return e = new Ny(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = tt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, wa(l), e;
    }
    function Iy(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Wn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function zp(e) {
        if (!e) return ln;
        e = e._reactInternals;
        e: {
            if (bn(e) !== e || e.tag !== 1) throw Error(R(170));
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
            throw Error(R(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if ($e(n)) return zf(e, n, t);
        }
        return t;
    }
    function Pp(e, t, n, r, o, l, i, s, a) {
        return e = ba(n, r, !0, e, o, l, i, s, a), e.context = zp(null), n = e.current, r = je(), o = nn(n), l = Tt(r, o), l.callback = t ?? null, en(n, l, o), e.current.lanes = o, mo(e, o, r), Be(e, r), e;
    }
    function Xl(e, t, n, r) {
        var o = t.current, l = je(), i = nn(o);
        return n = zp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(o, t, i), e !== null && (mt(e, o, i, l), tl(e, o, i)), i;
    }
    function Ll(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Mc(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Aa(e, t) {
        Mc(e, t), (e = e.alternate) && Mc(e, t);
    }
    function Ry() {
        return null;
    }
    var jp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Fa(e) {
        this._internalRoot = e;
    }
    Zl.prototype.render = Fa.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(R(409));
        Xl(e, t, null, null);
    };
    Zl.prototype.unmount = Fa.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            On(function() {
                Xl(null, e, null, null);
            }), t[Pt] = null;
        }
    };
    function Zl(e) {
        this._internalRoot = e;
    }
    Zl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = uf();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
            Gt.splice(n, 0, e), n === 0 && df(e);
        }
    };
    function $a(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Jl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Lc() {}
    function Ty(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = Ll(i);
                    l.call(u);
                };
            }
            var i = Pp(t, r, e, 0, null, !1, !1, "", Lc);
            return e._reactRootContainer = i, e[Pt] = i.current, to(e.nodeType === 8 ? e.parentNode : e), On(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = Ll(a);
                s.call(u);
            };
        }
        var a = ba(e, 0, !1, null, null, !1, !1, "", Lc);
        return e._reactRootContainer = a, e[Pt] = a.current, to(e.nodeType === 8 ? e.parentNode : e), On(function() {
            Xl(t, a, n, r);
        }), a;
    }
    function ql(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = Ll(i);
                    s.call(a);
                };
            }
            Xl(t, i, e, o);
        } else i = Ty(n, t, e, o, r);
        return Ll(i);
    }
    sf = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Dr(t.pendingLanes);
                    n !== 0 && (la(t, n | 1), Be(t, me()), !(H & 6) && (hr = me() + 500, un()));
                }
                break;
            case 13:
                On(function() {
                    var r = jt(e, 1);
                    if (r !== null) {
                        var o = je();
                        mt(r, e, 1, o);
                    }
                }), Aa(e, 1);
        }
    };
    ia = function(e) {
        if (e.tag === 13) {
            var t = jt(e, 134217728);
            if (t !== null) {
                var n = je();
                mt(t, e, 134217728, n);
            }
            Aa(e, 134217728);
        }
    };
    af = function(e) {
        if (e.tag === 13) {
            var t = nn(e), n = jt(e, t);
            if (n !== null) {
                var r = je();
                mt(n, e, t, r);
            }
            Aa(e, t);
        }
    };
    uf = function() {
        return K;
    };
    cf = function(e, t) {
        var n = K;
        try {
            return K = e, t();
        } finally{
            K = n;
        }
    };
    ns = function(e, t, n) {
        switch(t){
            case "input":
                if (Yi(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = Vl(r);
                            if (!o) throw Error(R(90));
                            $d(r), Yi(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Ud(e, n);
                break;
            case "select":
                t = n.value, t != null && rr(e, !!n.multiple, t, !1);
        }
    };
    Yd = Ma;
    Xd = On;
    var zy = {
        usingClientEntryPoint: !1,
        Events: [
            go,
            Yn,
            Vl,
            Kd,
            Qd,
            Ma
        ]
    }, Pr = {
        findFiberByHostInstance: _n,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Py = {
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
            return e = qd(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Pr.findFiberByHostInstance || Ry,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Wo.isDisabled && Wo.supportsFiber) try {
            Fl = Wo.inject(Py), St = Wo;
        } catch  {}
    }
    Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zy;
    Ye.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!$a(t)) throw Error(R(200));
        return Iy(e, t, null, n);
    };
    Ye.createRoot = function(e, t) {
        if (!$a(e)) throw Error(R(299));
        var n = !1, r = "", o = jp;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = ba(e, 1, !1, null, null, n, !1, r, o), e[Pt] = t.current, to(e.nodeType === 8 ? e.parentNode : e), new Fa(t);
    };
    Ye.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
        return e = qd(t), e = e === null ? null : e.stateNode, e;
    };
    Ye.flushSync = function(e) {
        return On(e);
    };
    Ye.hydrate = function(e, t, n) {
        if (!Jl(t)) throw Error(R(200));
        return ql(null, e, t, !0, n);
    };
    Ye.hydrateRoot = function(e, t, n) {
        if (!$a(e)) throw Error(R(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = jp;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Pp(t, null, e, 1, n ?? null, o, !1, l, i), e[Pt] = t.current, to(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Zl(t);
    };
    Ye.render = function(e, t, n) {
        if (!Jl(t)) throw Error(R(200));
        return ql(null, e, t, !1, n);
    };
    Ye.unmountComponentAtNode = function(e) {
        if (!Jl(e)) throw Error(R(40));
        return e._reactRootContainer ? (On(function() {
            ql(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Pt] = null;
            });
        }), !0) : !1;
    };
    Ye.unstable_batchedUpdates = Ma;
    Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Jl(n)) throw Error(R(200));
        if (e == null || e._reactInternals === void 0) throw Error(R(38));
        return ql(e, t, n, !1, r);
    };
    Ye.version = "18.3.1-next-f1338f8080-20240426";
    function Mp() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp);
        } catch (e) {
            console.error(e);
        }
    }
    Mp(), jd.exports = Ye;
    var jy = jd.exports, Oc = jy;
    Ui.createRoot = Oc.createRoot, Ui.hydrateRoot = Oc.hydrateRoot;
    const My = "modulepreload", Ly = function(e) {
        return "/grid-draw/" + e;
    }, Dc = {}, Lp = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = Ly(a), a in Dc) return;
                Dc[a] = !0;
                const u = a.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${c}`)) return;
                const d = document.createElement("link");
                if (d.rel = u ? "stylesheet" : My, u || (d.as = "script"), d.crossOrigin = "", d.href = a, s && d.setAttribute("nonce", s), document.head.appendChild(d), u) return new Promise((f, x)=>{
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
    }, bc = (e)=>{
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
    }, Oy = (e)=>e ? bc(e) : bc, Dy = (e)=>e;
    function by(e, t = Dy) {
        const n = re.useSyncExternalStore(e.subscribe, re.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), re.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return re.useDebugValue(n), n;
    }
    const Ac = (e)=>{
        const t = Oy(e), n = (r)=>by(t, r);
        return Object.assign(n, t), n;
    }, Op = (e)=>e ? Ac(e) : Ac;
    function Ay(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    const Fy = 1.75;
    function Os(e) {
        return {
            r: e.minRow - Fy,
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
    function bs(e) {
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
    function Fc(e, t, n, r, o) {
        let l = null, i = o * o;
        for (const s of n){
            const a = s.c * r, u = s.r * r, c = (a - e) * (a - e) + (u - t) * (u - t);
            c <= i && (l = s, i = c);
        }
        return l;
    }
    function $y(e, t) {
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
    function al(e, t) {
        switch($y(e, t), t.kind){
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
                    for (const n of t.edits)al(e, n);
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
                    ].reverse().map(Dp)
                };
        }
    }
    function bp(e, t) {
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
                        const o = bp(e.edits[r], t.edits[r]);
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
    const By = 100, Uy = 600;
    class Vy {
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
            this.undoStack.push(t), this.undoStack.length > By && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (al(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Uy) {
                const i = this.undoStack[this.undoStack.length - 1], s = bp(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (al(t, Dp(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (al(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
    const st = new Vy;
    function $c(e, t) {
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
    function Bc(e, t) {
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
    function Uc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Vc(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Wc(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: e.get_text_size(t),
            text: e.get_text_string(t)
        };
    }
    const Wy = [
        1,
        1.5,
        2,
        3,
        5
    ], Gy = [
        1,
        1.5,
        2,
        3,
        5
    ], As = 8, Go = [
        1,
        2,
        4,
        8
    ], bi = (e)=>Math.round(e * 10);
    function Ho(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Ap(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" ? e.index === t.index : !1;
    }
    function Fp(e, t) {
        return t.some((n)=>Ap(n, e));
    }
    function Hy(e, t) {
        return Fp(e, t) ? t : [
            ...t,
            e
        ];
    }
    function Ky(e, t) {
        return t.filter((n)=>!Ap(n, e));
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
    function Qy(e, t) {
        const n = Ge(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function ul(e, t, n = {}) {
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
            texts: x,
            sub: As
        };
    }
    function Gc(e) {
        return (Math.round(e / (Math.PI / 2)) % 4 + 4) % 4;
    }
    function xn(e, t, n, r, o) {
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
    function Hc(e) {
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
    const et = Op((e, t)=>({
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
                    coalesceKey: `fill:${Ho(o)}`
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
                    coalesceKey: `outline:${Ho(o)}`
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
                    coalesceKey: `size:${Ho(o)}`
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
                if (!r || (r.set_draw_line_width(bi(n)), o.length === 0)) return;
                const l = bi(n), i = [];
                for (const s of o)s.type === "line" && i.push({
                    kind: "resizeLine",
                    idx: s.index,
                    from: r.get_line(s.index)[5],
                    to: l
                });
                i.length !== 0 && (t().commitEdits(i, {
                    coalesceKey: `lineWidth:${Ho(o)}`
                }), t().renderSelection());
            },
            setSubdivision: (n)=>{
                const r = Go.includes(n) ? n : 1;
                e({
                    subdivision: r
                });
                const { grid: o } = t();
                o?.set_subdivision(r);
            },
            cycleSubdivision: ()=>{
                const n = t().subdivision, r = Go[(Go.indexOf(n) + 1) % Go.length];
                t().setSubdivision(r);
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
                const r = Hc(n);
                r.length !== 0 && (e({
                    tool: "select",
                    selectedItems: r
                }), t().renderSelection(), t().updateOutputs());
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = Hy(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = Ky(n, r);
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
                for(let h = i; h <= s; h++)for(let S = a; S <= u; S++)r.get_cell(h, S) && c.push({
                    type: "cell",
                    row: h,
                    col: S
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
                for (const h of c)Fp(h, v) || v.push(h);
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
                        const k = r.get_cell_color(p.row, p.col), N = p.row + a, T = p.col + u;
                        d.push({
                            kind: "setCellState",
                            row: p.row,
                            col: p.col,
                            from: {
                                filled: !0,
                                color: k
                            },
                            to: {
                                filled: !1,
                                color: k
                            }
                        }), f.push({
                            kind: "setCellState",
                            row: N,
                            col: T,
                            from: {
                                filled: r.get_cell(N, T),
                                color: r.get_cell_color(N, T)
                            },
                            to: {
                                filled: !0,
                                color: k
                            }
                        }), c.push({
                            type: "cell",
                            row: N,
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
                    const h = [], S = l.filter((p)=>p.type === "rect");
                    for (const p of S)h.push({
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
                const { grid: r } = t(), o = r ? n.shape === "line" ? Uc(r, n.index) : Vc(r, n.index) : null;
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
                        to: Uc(r, o.index)
                    }
                ])) : (r.resize_rect(o.index, o.handle, n.row, n.col), l && t().commitEdits([
                    {
                        kind: "setRectGeom",
                        idx: o.index,
                        from: l,
                        to: Vc(r, o.index)
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
                const { cx: s, cy: a, startAngle: u } = i, c = Gc(Math.atan2(r - a, n - s) - u);
                if (o.render(), c === 0) {
                    t().renderSelection();
                    return;
                }
                const d = Ge(l, o);
                if (!d) return;
                const f = Math.round((d.minRow + d.maxRow) / 2), x = Math.round((d.minCol + d.maxCol) / 2);
                for (const v of l)if (v.type === "cell") {
                    const h = xn(v.row, v.col, c, f, x);
                    o.preview_cell(h.r, h.c, o.get_cell_color(v.row, v.col));
                } else if (v.type === "line") {
                    const h = o.get_line(v.index);
                    if (h.length >= 6) {
                        const S = xn(h[0], h[1], c, f, x), g = xn(h[2], h[3], c, f, x);
                        o.preview_line(S.r, S.c, g.r, g.c, h[4], h[5]);
                    }
                } else if (v.type === "rect") {
                    const h = o.get_rect(v.index);
                    if (h.length >= 6) {
                        const S = xn(h[0], h[1], c, f, x), g = xn(h[2], h[3], c, f, x);
                        o.preview_rect(S.r, S.c, g.r, g.c, h[4], h[5]);
                    }
                } else if (v.type === "text") {
                    const h = o.get_text(v.index);
                    if (h.length >= 3) {
                        const S = xn(h[0], h[1], c, f, x);
                        o.preview_text(S.r, S.c, h[2], o.get_text_size(v.index), o.get_text_string(v.index));
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
                const { cx: s, cy: a, startAngle: u } = i, c = Gc(Math.atan2(r - a, n - s) - u), d = Ge(l, o);
                if (c === 0 || !d) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const f = Math.round((d.minRow + d.maxRow) / 2), x = Math.round((d.minCol + d.maxCol) / 2), v = (p, k)=>xn(p, k, c, f, x), h = [], S = [], g = [], m = [];
                for (const p of l)if (p.type === "cell") {
                    if (!o.get_cell(p.row, p.col)) continue;
                    const k = o.get_cell_color(p.row, p.col), N = v(p.row, p.col);
                    h.push({
                        kind: "setCellState",
                        row: p.row,
                        col: p.col,
                        from: {
                            filled: !0,
                            color: k
                        },
                        to: {
                            filled: !1,
                            color: k
                        }
                    }), S.push({
                        kind: "setCellState",
                        row: N.r,
                        col: N.c,
                        from: {
                            filled: o.get_cell(N.r, N.c),
                            color: o.get_cell_color(N.r, N.c)
                        },
                        to: {
                            filled: !0,
                            color: k
                        }
                    }), m.push({
                        type: "cell",
                        row: N.r,
                        col: N.c
                    });
                } else if (p.type === "line") {
                    const k = o.get_line(p.index);
                    if (k.length < 5) continue;
                    const N = v(k[0], k[1]), T = v(k[2], k[3]);
                    g.push({
                        kind: "setLineGeom",
                        idx: p.index,
                        from: {
                            r1: k[0],
                            c1: k[1],
                            r2: k[2],
                            c2: k[3]
                        },
                        to: {
                            r1: N.r,
                            c1: N.c,
                            r2: T.r,
                            c2: T.c
                        }
                    }), m.push({
                        type: "line",
                        index: p.index
                    });
                } else if (p.type === "rect") {
                    const k = o.get_rect(p.index);
                    if (k.length < 6) continue;
                    const N = v(k[0], k[1]), T = v(k[2], k[3]);
                    g.push({
                        kind: "setRectGeom",
                        idx: p.index,
                        from: {
                            r1: k[0],
                            c1: k[1],
                            r2: k[2],
                            c2: k[3]
                        },
                        to: {
                            r1: N.r,
                            c1: N.c,
                            r2: T.r,
                            c2: T.c
                        }
                    }), m.push({
                        type: "rect",
                        index: p.index
                    });
                } else if (p.type === "text") {
                    const k = o.get_text(p.index);
                    if (k.length < 3) continue;
                    const N = v(k[0], k[1]);
                    g.push({
                        kind: "moveText",
                        idx: p.index,
                        dRow: N.r - k[0],
                        dCol: N.c - k[1]
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
                    ...S,
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
                const { grid: l, colorIdx: i, subdivision: s } = t();
                if (!l) return;
                const a = As / s, u = [];
                for(let c = 0; c < a; c++)for(let d = 0; d < a; d++){
                    const f = n + c, x = r + d, v = o && i < 6 ? {
                        filled: !0,
                        color: i
                    } : {
                        filled: !1,
                        color: i < 6 ? i : l.get_cell_color(f, x)
                    }, h = {
                        filled: l.get_cell(f, x),
                        color: l.get_cell_color(f, x)
                    };
                    h.filled === v.filled && (!v.filled || h.color === v.color) || u.push({
                        kind: "setCellState",
                        row: f,
                        col: x,
                        from: h,
                        to: v
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
                            width: bi(a)
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
                const o = Qy(r, n);
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
                    const x = s.row + f.relR1, v = s.col + f.relC1, h = s.row + f.relR2, S = s.col + f.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: x,
                            c1: v,
                            r2: h,
                            c2: S,
                            color: f.color,
                            width: f.width ?? 10
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const f of r.rects){
                    const x = s.row + f.relR1, v = s.col + f.relC1, h = s.row + f.relR2, S = s.col + f.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: x,
                            c1: v,
                            r2: h,
                            c2: S,
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
                    line: $c(n, u)
                });
                for (const u of i)a.push({
                    kind: "deleteRect",
                    idx: u,
                    rect: Bc(n, u)
                });
                for (const u of s)a.push({
                    kind: "deleteText",
                    idx: u,
                    text: Wc(n, u)
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
                const o = ul(n, r);
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
                const i = ul(n, r);
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
                const d = As / (n.sub ?? 1);
                for (const [f, x, v] of n.cells ?? []){
                    const h = r + f * d, S = o + x * d;
                    i.push({
                        kind: "setCellState",
                        row: h,
                        col: S,
                        from: {
                            filled: l.get_cell(h, S),
                            color: l.get_cell_color(h, S)
                        },
                        to: {
                            filled: !0,
                            color: v
                        }
                    }), s.push({
                        type: "cell",
                        row: h,
                        col: S
                    });
                }
                for (const [f, x, v, h, S, g] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + f * d,
                        c1: o + x * d,
                        r2: r + v * d,
                        c2: o + h * d,
                        color: S,
                        width: g ?? 10
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [f, x, v, h, S, g] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + f * d,
                        c1: o + x * d,
                        r2: r + v * d,
                        c2: o + h * d,
                        fill: S,
                        outline: g
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const f of n.texts ?? []){
                    const x = Array.isArray(f) ? {
                        r: f[0],
                        c: f[1],
                        color: f[2],
                        size: f[3],
                        text: f[4]
                    } : f;
                    !x || typeof x.r != "number" || typeof x.c != "number" || (i.push({
                        kind: "addText",
                        idx: c,
                        text: {
                            r: r + x.r * d,
                            c: o + x.c * d,
                            color: x.color ?? 0,
                            size: x.size ?? 1,
                            text: String(x.text ?? "")
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
                return n ? ul(n, Hc(n), {
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
                    })), a = Ay(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const h of o)if (n.get_cell(h.row, h.col)) {
                    const S = n.get_cell_color(h.row, h.col), g = l[S] ?? "#000000";
                    i.push({
                        row: h.row - a.minRow,
                        col: h.col - a.minCol,
                        color: g
                    });
                }
                i.sort((h, S)=>h.row - S.row || h.col - S.col);
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
                    text: Wc(n, i)
                });
                for(let i = n.get_rect_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteRect",
                    idx: i,
                    rect: Bc(n, i)
                });
                for(let i = n.get_line_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteLine",
                    idx: i,
                    line: $c(n, i)
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
                            const l = Ds(n.get_line(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        } else if (o.type === "rect") {
                            const l = bs(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = Ge(r, n);
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
        })), Kc = 6;
    function Yy(e) {
        const t = e.get_schema_version?.();
        (t !== Kc || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${Kc}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function Xy(e, t, n) {
        const [r, o] = I.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = I.useRef(!1);
        return I.useEffect(()=>{
            if (l.current) return;
            const i = e.current;
            i && (l.current = !0, (async ()=>{
                try {
                    const s = await Lp(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    Yy(a), et.getState().setGrid(a), o({
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
    const $p = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const Zy = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const Jy = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const Qc = (e)=>{
        const t = Jy(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var qy = {
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
    const ev = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const tv = I.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>I.createElement("svg", {
            ref: a,
            ...qy,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: $p("lucide", o),
            ...!l && !ev(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, c])=>I.createElement(u, c)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const Bp = (e, t)=>{
        const n = I.forwardRef(({ className: r, ...o }, l)=>I.createElement(tv, {
                ref: l,
                iconNode: t,
                className: $p(`lucide-${Zy(Qc(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = Qc(e), n;
    };
    const nv = [
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
    ], rv = Bp("redo-2", nv);
    const ov = [
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
    ], lv = Bp("undo-2", ov);
    function Up(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Up(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Vp() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Up(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Yc = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Xc = Vp, Wp = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Xc(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const c = n?.[u], d = l?.[u];
                if (c === null) return null;
                const f = Yc(c) || Yc(d);
                return o[u][f];
            }), s = n && Object.entries(n).reduce((u, c)=>{
                let [d, f] = c;
                return f === void 0 || (u[d] = f), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c)=>{
                let { class: d, className: f, ...x } = c;
                return Object.entries(x).every((v)=>{
                    let [h, S] = v;
                    return Array.isArray(S) ? S.includes({
                        ...l,
                        ...s
                    }[h]) : {
                        ...l,
                        ...s
                    }[h] === S;
                }) ? [
                    ...u,
                    d,
                    f
                ] : u;
            }, []);
            return Xc(e, i, a, n?.class, n?.className);
        };
    function Zc(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Gp(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Zc(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Zc(e[o], null);
                }
            };
        };
    }
    function Fs(...e) {
        return I.useCallback(Gp(...e), e);
    }
    function Ol(e) {
        const t = sv(e), n = I.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = I.Children.toArray(l), a = s.find(uv);
            if (a) {
                const u = a.props.children, c = s.map((d)=>d === a ? I.Children.count(u) > 1 ? I.Children.only(null) : I.isValidElement(u) ? u.props.children : null : d);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: I.isValidElement(u) ? I.cloneElement(u, void 0, c) : null
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
    var iv = Ol("Slot");
    function sv(e) {
        const t = I.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (I.isValidElement(o)) {
                const i = dv(o), s = cv(l, o.props);
                return o.type !== I.Fragment && (s.ref = r ? Gp(r, i) : i), I.cloneElement(o, s);
            }
            return I.Children.count(o) > 1 ? I.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var av = Symbol("radix.slottable");
    function uv(e) {
        return I.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === av;
    }
    function cv(e, t) {
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
    function dv(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var fv = [
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
    ], co = fv.reduce((e, t)=>{
        const n = Ol(`Primitive.${t}`), r = I.forwardRef((o, l)=>{
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
    function Ba(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = I.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (d)=>{
                const { scope: f, children: x, ...v } = d, h = f?.[e]?.[a] || s, S = I.useMemo(()=>v, Object.values(v));
                return y.jsx(h.Provider, {
                    value: S,
                    children: x
                });
            };
            u.displayName = l + "Provider";
            function c(d, f) {
                const x = f?.[e]?.[a] || s, v = I.useContext(x);
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
            const l = n.map((i)=>I.createContext(i));
            return function(s) {
                const a = s?.[e] || l;
                return I.useMemo(()=>({
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
            pv(o, ...t)
        ];
    }
    function pv(...e) {
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
                return I.useMemo(()=>({
                        [`__scope${t.scopeName}`]: i
                    }), [
                    i
                ]);
            };
        };
        return n.scopeName = t.scopeName, n;
    }
    function mv(e) {
        const t = e + "CollectionProvider", [n, r] = Ba(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (h)=>{
            const { scope: S, children: g } = h, m = re.useRef(null), p = re.useRef(new Map).current;
            return y.jsx(o, {
                scope: S,
                itemMap: p,
                collectionRef: m,
                children: g
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = Ol(s), u = re.forwardRef((h, S)=>{
            const { scope: g, children: m } = h, p = l(s, g), k = Fs(S, p.collectionRef);
            return y.jsx(a, {
                ref: k,
                children: m
            });
        });
        u.displayName = s;
        const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = Ol(c), x = re.forwardRef((h, S)=>{
            const { scope: g, children: m, ...p } = h, k = re.useRef(null), N = Fs(S, k), T = l(c, g);
            return re.useEffect(()=>(T.itemMap.set(k, {
                    ref: k,
                    ...p
                }), ()=>void T.itemMap.delete(k))), y.jsx(f, {
                [d]: "",
                ref: N,
                children: m
            });
        });
        x.displayName = c;
        function v(h) {
            const S = l(e + "CollectionConsumer", h);
            return re.useCallback(()=>{
                const m = S.collectionRef.current;
                if (!m) return [];
                const p = Array.from(m.querySelectorAll(`[${d}]`));
                return Array.from(S.itemMap.values()).sort((T, P)=>p.indexOf(T.ref.current) - p.indexOf(P.ref.current));
            }, [
                S.collectionRef,
                S.itemMap
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
    function Tn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Hp = globalThis?.document ? I.useLayoutEffect : ()=>{}, hv = zd[" useInsertionEffect ".trim().toString()] || Hp;
    function ei({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = gv({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, a = s ? e : o;
        {
            const c = I.useRef(e !== void 0);
            I.useEffect(()=>{
                const d = c.current;
                d !== s && console.warn(`${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = s;
            }, [
                s,
                r
            ]);
        }
        const u = I.useCallback((c)=>{
            if (s) {
                const d = yv(c) ? c(e) : c;
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
    function gv({ defaultProp: e, onChange: t }) {
        const [n, r] = I.useState(e), o = I.useRef(n), l = I.useRef(t);
        return hv(()=>{
            l.current = t;
        }, [
            t
        ]), I.useEffect(()=>{
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
    function yv(e) {
        return typeof e == "function";
    }
    var vv = zd[" useId ".trim().toString()] || (()=>{}), xv = 0;
    function wv(e) {
        const [t, n] = I.useState(vv());
        return Hp(()=>{
            n((r)=>r ?? String(xv++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var Sv = I.createContext(void 0);
    function Kp(e) {
        const t = I.useContext(Sv);
        return e || t || "ltr";
    }
    function kv(e) {
        const t = I.useRef(e);
        return I.useEffect(()=>{
            t.current = e;
        }), I.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Ai = "rovingFocusGroup.onEntryFocus", Cv = {
        bubbles: !1,
        cancelable: !0
    }, vo = "RovingFocusGroup", [$s, Qp, _v] = mv(vo), [Ev, Yp] = Ba(vo, [
        _v
    ]), [Nv, Iv] = Ev(vo), Xp = I.forwardRef((e, t)=>y.jsx($s.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: y.jsx($s.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: y.jsx(Rv, {
                    ...e,
                    ref: t
                })
            })
        }));
    Xp.displayName = vo;
    var Rv = I.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: c = !1, ...d } = e, f = I.useRef(null), x = Fs(t, f), v = Kp(l), [h, S] = ei({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: vo
        }), [g, m] = I.useState(!1), p = kv(u), k = Qp(n), N = I.useRef(!1), [T, P] = I.useState(0);
        return I.useEffect(()=>{
            const _ = f.current;
            if (_) return _.addEventListener(Ai, p), ()=>_.removeEventListener(Ai, p);
        }, [
            p
        ]), y.jsx(Nv, {
            scope: n,
            orientation: r,
            dir: v,
            loop: o,
            currentTabStopId: h,
            onItemFocus: I.useCallback((_)=>S(_), [
                S
            ]),
            onItemShiftTab: I.useCallback(()=>m(!0), []),
            onFocusableItemAdd: I.useCallback(()=>P((_)=>_ + 1), []),
            onFocusableItemRemove: I.useCallback(()=>P((_)=>_ - 1), []),
            children: y.jsx(co.div, {
                tabIndex: g || T === 0 ? -1 : 0,
                "data-orientation": r,
                ...d,
                ref: x,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: Tn(e.onMouseDown, ()=>{
                    N.current = !0;
                }),
                onFocus: Tn(e.onFocus, (_)=>{
                    const $ = !N.current;
                    if (_.target === _.currentTarget && $ && !g) {
                        const F = new CustomEvent(Ai, Cv);
                        if (_.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                            const he = k().filter((X)=>X.focusable), ze = he.find((X)=>X.active), Ue = he.find((X)=>X.id === h), Ve = [
                                ze,
                                Ue,
                                ...he
                            ].filter(Boolean).map((X)=>X.ref.current);
                            qp(Ve, c);
                        }
                    }
                    N.current = !1;
                }),
                onBlur: Tn(e.onBlur, ()=>m(!1))
            })
        });
    }), Zp = "RovingFocusGroupItem", Jp = I.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = wv(), u = l || a, c = Iv(Zp, n), d = c.currentTabStopId === u, f = Qp(n), { onFocusableItemAdd: x, onFocusableItemRemove: v, currentTabStopId: h } = c;
        return I.useEffect(()=>{
            if (r) return x(), ()=>v();
        }, [
            r,
            x,
            v
        ]), y.jsx($s.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: y.jsx(co.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": c.orientation,
                ...s,
                ref: t,
                onMouseDown: Tn(e.onMouseDown, (S)=>{
                    r ? c.onItemFocus(u) : S.preventDefault();
                }),
                onFocus: Tn(e.onFocus, ()=>c.onItemFocus(u)),
                onKeyDown: Tn(e.onKeyDown, (S)=>{
                    if (S.key === "Tab" && S.shiftKey) {
                        c.onItemShiftTab();
                        return;
                    }
                    if (S.target !== S.currentTarget) return;
                    const g = Pv(S, c.orientation, c.dir);
                    if (g !== void 0) {
                        if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                        S.preventDefault();
                        let p = f().filter((k)=>k.focusable).map((k)=>k.ref.current);
                        if (g === "last") p.reverse();
                        else if (g === "prev" || g === "next") {
                            g === "prev" && p.reverse();
                            const k = p.indexOf(S.currentTarget);
                            p = c.loop ? jv(p, k + 1) : p.slice(k + 1);
                        }
                        setTimeout(()=>qp(p));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: d,
                    hasTabStop: h != null
                }) : i
            })
        });
    });
    Jp.displayName = Zp;
    var Tv = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function zv(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function Pv(e, t, n) {
        const r = zv(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return Tv[r];
    }
    function qp(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function jv(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Mv = Xp, Lv = Jp, em = "Toggle", tm = I.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = ei({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: em
        });
        return y.jsx(co.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: Tn(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    tm.displayName = em;
    var cn = "ToggleGroup", [nm] = Ba(cn, [
        Yp
    ]), rm = Yp(), Ua = re.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return y.jsx(Ov, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return y.jsx(Dv, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${cn}\``);
    });
    Ua.displayName = cn;
    var [om, lm] = nm(cn), Ov = re.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = ei({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: cn
        });
        return y.jsx(om, {
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
            children: y.jsx(im, {
                ...l,
                ref: t
            })
        });
    }), Dv = re.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = ei({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: cn
        }), a = re.useCallback((c)=>s((d = [])=>[
                    ...d,
                    c
                ]), [
            s
        ]), u = re.useCallback((c)=>s((d = [])=>d.filter((f)=>f !== c)), [
            s
        ]);
        return y.jsx(om, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: y.jsx(im, {
                ...l,
                ref: t
            })
        });
    });
    Ua.displayName = cn;
    var [bv, Av] = nm(cn), im = re.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = rm(n), c = Kp(i), d = {
            role: "group",
            dir: c,
            ...a
        };
        return y.jsx(bv, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? y.jsx(Mv, {
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
    }), Dl = "ToggleGroupItem", sm = re.forwardRef((e, t)=>{
        const n = lm(Dl, e.__scopeToggleGroup), r = Av(Dl, e.__scopeToggleGroup), o = rm(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = re.useRef(null);
        return r.rovingFocus ? y.jsx(Lv, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: a,
            children: y.jsx(Jc, {
                ...s,
                ref: t
            })
        }) : y.jsx(Jc, {
            ...s,
            ref: t
        });
    });
    sm.displayName = Dl;
    var Jc = re.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = lm(Dl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return y.jsx(tm, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Fv = Ua, $v = sm;
    const Bv = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Uv = (e, t)=>({
            classGroupId: e,
            validator: t
        }), am = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), bl = "-", qc = [], Vv = "arbitrary..", Wv = (e)=>{
        const t = Hv(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Gv(i);
                const s = i.split(bl), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return um(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Bv(u, a) : a : u || qc;
                }
                return n[i] || qc;
            }
        };
    }, um = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = um(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(bl) : e.slice(t).join(bl), a = i.length;
        for(let u = 0; u < a; u++){
            const c = i[u];
            if (c.validator(s)) return c.classGroupId;
        }
    }, Gv = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Vv + r : void 0;
        })(), Hv = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Kv(n, t);
    }, Kv = (e, t)=>{
        const n = am();
        for(const r in e){
            const o = e[r];
            Va(o, n, r, t);
        }
        return n;
    }, Va = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Qv(i, t, n, r);
        }
    }, Qv = (e, t, n, r)=>{
        if (typeof e == "string") {
            Yv(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Xv(e, t, n, r);
            return;
        }
        Zv(e, t, n, r);
    }, Yv = (e, t, n)=>{
        const r = e === "" ? t : cm(t, e);
        r.classGroupId = n;
    }, Xv = (e, t, n, r)=>{
        if (Jv(e)) {
            Va(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Uv(n, e));
    }, Zv = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            Va(a, cm(t, s), n, r);
        }
    }, cm = (e, t)=>{
        let n = e;
        const r = t.split(bl), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = am(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Jv = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, qv = (e)=>{
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
    }, Bs = "!", ed = ":", ex = [], td = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), tx = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const c = o.length;
            for(let h = 0; h < c; h++){
                const S = o[h];
                if (i === 0 && s === 0) {
                    if (S === ed) {
                        l.push(o.slice(a, h)), a = h + 1;
                        continue;
                    }
                    if (S === "/") {
                        u = h;
                        continue;
                    }
                }
                S === "[" ? i++ : S === "]" ? i-- : S === "(" ? s++ : S === ")" && s--;
            }
            const d = l.length === 0 ? o : o.slice(a);
            let f = d, x = !1;
            d.endsWith(Bs) ? (f = d.slice(0, -1), x = !0) : d.startsWith(Bs) && (f = d.slice(1), x = !0);
            const v = u && u > a ? u - a : void 0;
            return td(l, x, f, v);
        };
        if (t) {
            const o = t + ed, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : td(ex, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, nx = (e)=>{
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
    }, rx = (e)=>({
            cache: qv(e.cacheSize),
            parseClassName: tx(e),
            sortModifiers: nx(e),
            ...Wv(e)
        }), ox = /\s+/, lx = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(ox);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const c = s[u], { isExternal: d, modifiers: f, hasImportantModifier: x, baseClassName: v, maybePostfixModifierPosition: h } = n(c);
            if (d) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            let S = !!h, g = r(S ? v.substring(0, h) : v);
            if (!g) {
                if (!S) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (g = r(v), !g) {
                    a = c + (a.length > 0 ? " " + a : a);
                    continue;
                }
                S = !1;
            }
            const m = f.length === 0 ? "" : f.length === 1 ? f[0] : l(f).join(":"), p = x ? m + Bs : m, k = p + g;
            if (i.indexOf(k) > -1) continue;
            i.push(k);
            const N = o(g, S);
            for(let T = 0; T < N.length; ++T){
                const P = N[T];
                i.push(p + P);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, ix = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = dm(n)) && (o && (o += " "), o += r);
        return o;
    }, dm = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = dm(e[r])) && (n && (n += " "), n += t);
        return n;
    }, sx = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((c, d)=>d(c), e());
            return n = rx(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const c = lx(a, n);
            return o(a, c), c;
        };
        return l = i, (...a)=>l(ix(...a));
    }, ax = [], ye = (e)=>{
        const t = (n)=>n[e] || ax;
        return t.isThemeGetter = !0, t;
    }, fm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, pm = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ux = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, cx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, dx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, px = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, mx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, $t = (e)=>ux.test(e), U = (e)=>!!e && !Number.isNaN(Number(e)), Bt = (e)=>!!e && Number.isInteger(Number(e)), Fi = (e)=>e.endsWith("%") && U(e.slice(0, -1)), _t = (e)=>cx.test(e), mm = ()=>!0, hx = (e)=>dx.test(e) && !fx.test(e), Wa = ()=>!1, gx = (e)=>px.test(e), yx = (e)=>mx.test(e), vx = (e)=>!O(e) && !D(e), xx = (e)=>dn(e, ym, Wa), O = (e)=>fm.test(e), wn = (e)=>dn(e, vm, hx), nd = (e)=>dn(e, Ix, U), wx = (e)=>dn(e, wm, mm), Sx = (e)=>dn(e, xm, Wa), rd = (e)=>dn(e, hm, Wa), kx = (e)=>dn(e, gm, yx), Ko = (e)=>dn(e, Sm, gx), D = (e)=>pm.test(e), jr = (e)=>An(e, vm), Cx = (e)=>An(e, xm), od = (e)=>An(e, hm), _x = (e)=>An(e, ym), Ex = (e)=>An(e, gm), Qo = (e)=>An(e, Sm, !0), Nx = (e)=>An(e, wm, !0), dn = (e, t, n)=>{
        const r = fm.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, An = (e, t, n = !1)=>{
        const r = pm.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, hm = (e)=>e === "position" || e === "percentage", gm = (e)=>e === "image" || e === "url", ym = (e)=>e === "length" || e === "size" || e === "bg-size", vm = (e)=>e === "length", Ix = (e)=>e === "number", xm = (e)=>e === "family-name", wm = (e)=>e === "number" || e === "weight", Sm = (e)=>e === "shadow", Rx = ()=>{
        const e = ye("color"), t = ye("font"), n = ye("text"), r = ye("font-weight"), o = ye("tracking"), l = ye("leading"), i = ye("breakpoint"), s = ye("container"), a = ye("spacing"), u = ye("radius"), c = ye("shadow"), d = ye("inset-shadow"), f = ye("text-shadow"), x = ye("drop-shadow"), v = ye("blur"), h = ye("perspective"), S = ye("aspect"), g = ye("ease"), m = ye("animate"), p = ()=>[
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column"
            ], k = ()=>[
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
                ...k(),
                D,
                O
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
                D,
                O,
                a
            ], $ = ()=>[
                $t,
                "full",
                "auto",
                ..._()
            ], F = ()=>[
                Bt,
                "none",
                "subgrid",
                D,
                O
            ], he = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Bt,
                        D,
                        O
                    ]
                },
                Bt,
                D,
                O
            ], ze = ()=>[
                Bt,
                "auto",
                D,
                O
            ], Ue = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                D,
                O
            ], Ct = ()=>[
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
            ], X = ()=>[
                "auto",
                ..._()
            ], Oe = ()=>[
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
            ], j = ()=>[
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
            ], E = ()=>[
                e,
                D,
                O
            ], Y = ()=>[
                ...k(),
                od,
                rd,
                {
                    position: [
                        D,
                        O
                    ]
                }
            ], te = ()=>[
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
                _x,
                xx,
                {
                    size: [
                        D,
                        O
                    ]
                }
            ], De = ()=>[
                Fi,
                jr,
                wn
            ], ae = ()=>[
                "",
                "none",
                "full",
                u,
                D,
                O
            ], Z = ()=>[
                "",
                U,
                jr,
                wn
            ], Q = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], yt = ()=>[
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
                U,
                Fi,
                od,
                rd
            ], fn = ()=>[
                "",
                "none",
                v,
                D,
                O
            ], pn = ()=>[
                "none",
                U,
                D,
                O
            ], mn = ()=>[
                "none",
                U,
                D,
                O
            ], Fn = ()=>[
                U,
                D,
                O
            ], hn = ()=>[
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
                    mm
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
                    vx
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
                            O,
                            D,
                            S
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
                            O,
                            D,
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
                        inset: $()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": $()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": $()
                    }
                ],
                start: [
                    {
                        "inset-s": $(),
                        start: $()
                    }
                ],
                end: [
                    {
                        "inset-e": $(),
                        end: $()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": $()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": $()
                    }
                ],
                top: [
                    {
                        top: $()
                    }
                ],
                right: [
                    {
                        right: $()
                    }
                ],
                bottom: [
                    {
                        bottom: $()
                    }
                ],
                left: [
                    {
                        left: $()
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
                            D,
                            O
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
                            O
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            U,
                            D,
                            O
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            U,
                            D,
                            O
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
                            D,
                            O
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
                        col: he()
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
                        "grid-rows": F()
                    }
                ],
                "row-start-end": [
                    {
                        row: he()
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
                            ...Ct(),
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
                            ...Ct()
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
                        "place-content": Ct()
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
                        size: Oe()
                    }
                ],
                "inline-size": [
                    {
                        inline: [
                            "auto",
                            ...j()
                        ]
                    }
                ],
                "min-inline-size": [
                    {
                        "min-inline": [
                            "auto",
                            ...j()
                        ]
                    }
                ],
                "max-inline-size": [
                    {
                        "max-inline": [
                            "none",
                            ...j()
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
                            jr,
                            wn
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
                            Nx,
                            wx
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
                            O
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            Cx,
                            Sx,
                            t
                        ]
                    }
                ],
                "font-features": [
                    {
                        "font-features": [
                            O
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
                            D,
                            O
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            U,
                            "none",
                            D,
                            nd
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
                            D,
                            O
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
                            D,
                            O
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
                            ...Q(),
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
                            D,
                            wn
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
                            U,
                            "auto",
                            D,
                            O
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
                            D,
                            O
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
                            D,
                            O
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
                        bg: te()
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
                                    D,
                                    O
                                ],
                                radial: [
                                    "",
                                    D,
                                    O
                                ],
                                conic: [
                                    Bt,
                                    D,
                                    O
                                ]
                            },
                            Ex,
                            kx
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
                            ...Q(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...Q(),
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
                            ...Q(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            U,
                            jr,
                            wn
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
                            c,
                            Qo,
                            Ko
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
                            d,
                            Qo,
                            Ko
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
                        ring: Z()
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
                            U,
                            wn
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
                        "inset-ring": Z()
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
                            Qo,
                            Ko
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
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...yt(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": yt()
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
                            D,
                            O
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
                        "mask-radial-at": k()
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
                        mask: Y()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: te()
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
                            D,
                            O
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            D,
                            O
                        ]
                    }
                ],
                blur: [
                    {
                        blur: fn()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            x,
                            Qo,
                            Ko
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
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            U,
                            D,
                            O
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": fn()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            U,
                            D,
                            O
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
                            D,
                            O
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
                            D,
                            O
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            g,
                            D,
                            O
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            U,
                            D,
                            O
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            m,
                            D,
                            O
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
                            D,
                            O
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
                        scale: mn()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": mn()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": mn()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": mn()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: Fn()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": Fn()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": Fn()
                    }
                ],
                transform: [
                    {
                        transform: [
                            D,
                            O,
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
                        translate: hn()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": hn()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": hn()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": hn()
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
                            D,
                            O
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
                            D,
                            O
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
                            U,
                            jr,
                            wn,
                            nd
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
    }, Tx = sx(Rx);
    function Yt(...e) {
        return Tx(Vp(e));
    }
    const zx = Wp("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function ne({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? iv : "button";
        return y.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Yt(zx({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const Px = Wp("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), km = I.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Yo({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return y.jsx(Fv, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Yt("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: y.jsx(km.Provider, {
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
        const l = I.useContext(km);
        return y.jsx($v, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Yt(Px({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function nr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = I.useState(t), s = I.useRef(!1), a = I.useRef({
            x: 0,
            y: 0
        }), u = I.useCallback((c)=>{
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
            className: Yt("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
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
    const jx = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Mr(e) {
        return jx[e] ?? "#000000";
    }
    function Mx(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, c = s * a + o * 2;
        e.width = u, e.height = c;
        const d = e.getContext("2d");
        if (d) {
            l && (d.fillStyle = l, d.fillRect(0, 0, u, c)), d.translate(o, o);
            for (const [f, x, v] of t.cells ?? []){
                const h = Mr(v);
                h && (d.fillStyle = h, d.fillRect(x * a, f * a, a, a));
            }
            for (const [f, x, v, h, S, g] of t.rects ?? []){
                const m = Math.min(x, h) * a, p = Math.min(f, v) * a, k = Math.abs(h - x) * a, N = Math.abs(v - f) * a, T = Mr(S);
                T && (d.fillStyle = T, d.fillRect(m, p, k, N));
                const P = Mr(g);
                P && (d.strokeStyle = P, d.lineWidth = Math.max(1, a / 8), d.strokeRect(m, p, k, N));
            }
            for (const [f, x, v, h, S] of t.lines ?? []){
                const g = Mr(S);
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
                !x || typeof x.r != "number" || typeof x.c != "number" || (d.fillStyle = Mr(x.color) ?? "#000000", d.font = `${Math.max(6, (x.size ?? 1) * a)}px 'BigBlue Terminal', monospace`, d.fillText(String(x.text ?? ""), x.c * a, x.r * a));
            }
            d.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function cl({ design: e, size: t = 96, className: n }) {
        const r = I.useRef(null);
        return I.useEffect(()=>{
            if (!r.current) return;
            const o = {
                maxSize: t
            };
            Mx(r.current, e, o);
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
    const Us = (e, t)=>t.some((n)=>e instanceof n);
    let ld, id;
    function Lx() {
        return ld || (ld = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction
        ]);
    }
    function Ox() {
        return id || (id = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey
        ]);
    }
    const Vs = new WeakMap, $i = new WeakMap, ti = new WeakMap;
    function Dx(e) {
        const t = new Promise((n, r)=>{
            const o = ()=>{
                e.removeEventListener("success", l), e.removeEventListener("error", i);
            }, l = ()=>{
                n(zn(e.result)), o();
            }, i = ()=>{
                r(e.error), o();
            };
            e.addEventListener("success", l), e.addEventListener("error", i);
        });
        return ti.set(t, e), t;
    }
    function bx(e) {
        if (Vs.has(e)) return;
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
        Vs.set(e, t);
    }
    let Ws = {
        get (e, t, n) {
            if (e instanceof IDBTransaction) {
                if (t === "done") return Vs.get(e);
                if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
            }
            return zn(e[t]);
        },
        set (e, t, n) {
            return e[t] = n, !0;
        },
        has (e, t) {
            return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
        }
    };
    function Cm(e) {
        Ws = e(Ws);
    }
    function Ax(e) {
        return Ox().includes(e) ? function(...t) {
            return e.apply(Gs(this), t), zn(this.request);
        } : function(...t) {
            return zn(e.apply(Gs(this), t));
        };
    }
    function Fx(e) {
        return typeof e == "function" ? Ax(e) : (e instanceof IDBTransaction && bx(e), Us(e, Lx()) ? new Proxy(e, Ws) : e);
    }
    function zn(e) {
        if (e instanceof IDBRequest) return Dx(e);
        if ($i.has(e)) return $i.get(e);
        const t = Fx(e);
        return t !== e && ($i.set(e, t), ti.set(t, e)), t;
    }
    const Gs = (e)=>ti.get(e);
    function $x(e, t, { blocked: n, upgrade: r, blocking: o, terminated: l } = {}) {
        const i = indexedDB.open(e, t), s = zn(i);
        return r && i.addEventListener("upgradeneeded", (a)=>{
            r(zn(i.result), a.oldVersion, a.newVersion, zn(i.transaction), a);
        }), n && i.addEventListener("blocked", (a)=>n(a.oldVersion, a.newVersion, a)), s.then((a)=>{
            l && a.addEventListener("close", ()=>l()), o && a.addEventListener("versionchange", (u)=>o(u.oldVersion, u.newVersion, u));
        }).catch(()=>{}), s;
    }
    const Bx = [
        "get",
        "getKey",
        "getAll",
        "getAllKeys",
        "count"
    ], Ux = [
        "put",
        "add",
        "delete",
        "clear"
    ], Bi = new Map;
    function sd(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
        if (Bi.get(t)) return Bi.get(t);
        const n = t.replace(/FromIndex$/, ""), r = t !== n, o = Ux.includes(n);
        if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(o || Bx.includes(n))) return;
        const l = async function(i, ...s) {
            const a = this.transaction(i, o ? "readwrite" : "readonly");
            let u = a.store;
            return r && (u = u.index(s.shift())), (await Promise.all([
                u[n](...s),
                o && a.done
            ]))[0];
        };
        return Bi.set(t, l), l;
    }
    Cm((e)=>({
            ...e,
            get: (t, n, r)=>sd(t, n) || e.get(t, n, r),
            has: (t, n)=>!!sd(t, n) || e.has(t, n)
        }));
    const Vx = [
        "continue",
        "continuePrimaryKey",
        "advance"
    ], ad = {}, Hs = new WeakMap, _m = new WeakMap, Wx = {
        get (e, t) {
            if (!Vx.includes(t)) return e[t];
            let n = ad[t];
            return n || (n = ad[t] = function(...r) {
                Hs.set(this, _m.get(this)[t](...r));
            }), n;
        }
    };
    async function* Gx(...e) {
        let t = this;
        if (t instanceof IDBCursor || (t = await t.openCursor(...e)), !t) return;
        t = t;
        const n = new Proxy(t, Wx);
        for(_m.set(n, t), ti.set(n, Gs(t)); t;)yield n, t = await (Hs.get(n) || t.continue()), Hs.delete(n);
    }
    function ud(e, t) {
        return t === Symbol.asyncIterator && Us(e, [
            IDBIndex,
            IDBObjectStore,
            IDBCursor
        ]) || t === "iterate" && Us(e, [
            IDBIndex,
            IDBObjectStore
        ]);
    }
    Cm((e)=>({
            ...e,
            get (t, n, r) {
                return ud(t, n) ? Gx : e.get(t, n, r);
            },
            has (t, n) {
                return ud(t, n) || e.has(t, n);
            }
        }));
    let cd;
    function Ot() {
        return cd ??= $x("grid-draw", 1, {
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
        }), cd;
    }
    function Em() {
        return new Date().toISOString();
    }
    async function Hx() {
        return (await Ot()).getAll("designs");
    }
    async function Kx(e) {
        const t = await (await Ot()).get("designs", e);
        if (!t) throw new Error(`design ${e} not found`);
        return t;
    }
    async function Qx(e) {
        const t = await (await Ot()).getFromIndex("designs", "by-name", e);
        if (!t) throw new Error(`design "${e}" not found`);
        return t;
    }
    async function Yx(e, t, n) {
        const r = (await Ot()).transaction("designs", "readwrite"), o = await r.store.index("by-name").get(e);
        if (o) return await r.store.put({
            ...o,
            name: e,
            design: t,
            history: n
        }), await r.done, o.id;
        const l = await r.store.add({
            createdAt: Em(),
            name: e,
            design: t,
            history: n
        });
        return await r.done, l;
    }
    async function Xx(e) {
        await (await Ot()).delete("designs", e);
    }
    async function dd() {
        return (await (await Ot()).getAll("examples")).reverse();
    }
    async function Zx(e, t, n) {
        return await (await Ot()).add("examples", {
            createdAt: Em(),
            input: e,
            output: t,
            delta: n
        });
    }
    async function Jx(e, t, n, r) {
        const o = (await Ot()).transaction("examples", "readwrite"), l = await o.store.get(e);
        if (!l) throw new Error(`example ${e} not found`);
        await o.store.put({
            ...l,
            input: t,
            output: n,
            delta: r ?? l.delta
        }), await o.done;
    }
    async function qx(e) {
        await (await Ot()).delete("examples", e);
    }
    const fo = 31;
    function e0(e) {
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
    function t0(e) {
        const t = [];
        let n = 0;
        for (const r of e){
            const { pairs: o, skipped: l } = e0(r);
            l ? n++ : t.push(...o);
        }
        return {
            pairs: t,
            skippedExamples: n
        };
    }
    function fd(e, t) {
        return e >= 0 && e <= fo && t >= 0 && t <= fo;
    }
    const ft = fo + 1, Nm = "indexeddb://grid-draw-coord-model";
    let pd, gr = null;
    async function Ga() {
        return pd ??= Lp(()=>import("./index2.js"), []), pd;
    }
    function n0(e) {
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
    function Im(e, t) {
        const n = new Float32Array(t.length * 2 * ft);
        return t.forEach(([r, o], l)=>{
            n[l * 2 * ft + r] = 1, n[l * 2 * ft + ft + o] = 1;
        }), e.tensor2d(n, [
            t.length,
            2 * ft
        ]);
    }
    function md(e, t) {
        const n = new Float32Array(t.length * ft);
        return t.forEach((r, o)=>{
            n[o * ft + r] = 1;
        }), e.tensor2d(n, [
            t.length,
            ft
        ]);
    }
    async function r0() {
        const e = await Ga();
        try {
            return gr = await e.loadLayersModel(Nm), !0;
        } catch  {
            return gr = null, !1;
        }
    }
    async function o0(e, t = {}) {
        const { epochs: n = 300, batchSize: r = 32, lr: o = .001, onEpoch: l } = t, i = await Ga(), { pairs: s, skippedExamples: a } = t0(e), u = [];
        let c = 0;
        for (const S of s)fd(S[0], S[1]) && fd(S[2], S[3]) ? u.push(S) : c++;
        if (u.length === 0) throw new Error("No trainable point pairs — capture examples where the input and output have the same number of cells (in range).");
        const d = Im(i, u.map((S)=>[
                S[0],
                S[1]
            ])), f = md(i, u.map((S)=>S[2])), x = md(i, u.map((S)=>S[3])), v = n0(i);
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
                onEpochEnd: async (S, g)=>{
                    h = g?.loss ?? h, l?.(S + 1, n, h), await i.nextFrame();
                }
            }
        }), d.dispose(), f.dispose(), x.dispose(), gr?.dispose(), gr = v, await v.save(Nm), {
            pairs: u.length,
            droppedPoints: c,
            skippedExamples: a,
            finalLoss: h
        };
    }
    async function l0(e) {
        if (!gr) throw new Error("No model yet — train one first.");
        const t = await Ga(), n = e.cells ?? [];
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
            const a = Im(t, r), [u, c] = gr.predict(a), d = u.argMax(1).dataSync(), f = c.argMax(1).dataSync();
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
    const de = Op((e, t)=>({
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
                        designs: await Hx(),
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
                        examples: await dd(),
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
                const l = await Yx(n, r, o);
                return await t().loadDesigns(), l;
            },
            getDrawing: (n)=>Qx(n),
            getDrawingById: (n)=>Kx(n),
            saveExamplePair: async (n, r, o)=>{
                await Zx(n, r, o), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o, l)=>{
                await Jx(n, r, o, l), await t().loadExamples();
            },
            deleteDrawing: async (n)=>{
                await Xx(n), await t().loadDesigns();
            },
            deleteExamplePair: async (n)=>{
                await qx(n), await t().loadExamples();
            },
            initModel: async ()=>{
                e({
                    modelStatus: "loading"
                });
                try {
                    const n = await r0();
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
                const n = await dd();
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
                    const r = await o0(n, {
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
            runPredict: (n)=>l0(n)
        })), Rm = "/grid-draw/";
    function i0(e) {
        window.location.href = `${Rm}design/${encodeURIComponent(e)}/`;
    }
    function s0() {
        window.location.href = Rm;
    }
    function Tm({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = de((S)=>S.designs), o = de((S)=>S.examples), l = de((S)=>S.loadingDesigns || S.loadingExamples), i = de((S)=>S.error), s = de((S)=>S.loadDesigns), a = de((S)=>S.loadExamples), u = de((S)=>S.deleteDrawing), c = de((S)=>S.deleteExamplePair), d = I.useCallback(()=>{
            s(), a();
        }, [
            s,
            a
        ]);
        I.useEffect(()=>{
            d();
        }, [
            d
        ]);
        const f = I.useCallback((S, g)=>{
            window.confirm(`Delete drawing “${g}”? This can't be undone.`) && u(S);
        }, [
            u
        ]), x = I.useCallback((S)=>{
            window.confirm("Delete this training example? This can't be undone.") && c(S);
        }, [
            c
        ]), v = I.useCallback((S)=>{
            n ? n(S) : i0(S);
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
                            children: r.map((S)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        y.jsx("div", {
                                            className: "flex items-center justify-center bg-gray-100 rounded h-28 overflow-hidden",
                                            children: y.jsx(cl, {
                                                design: S.design,
                                                size: 120
                                            })
                                        }),
                                        y.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: S.name,
                                            children: S.name
                                        }),
                                        y.jsxs("div", {
                                            className: "flex gap-1",
                                            children: [
                                                y.jsx(ne, {
                                                    size: "sm",
                                                    className: "flex-1 text-xs",
                                                    onClick: ()=>v(S.name),
                                                    children: "Open"
                                                }),
                                                y.jsx(ne, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-red-600",
                                                    onClick: ()=>f(S.id, S.name),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                }, S.id))
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
                            children: o.map((S)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-2",
                                    children: [
                                        y.jsxs("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                y.jsxs("div", {
                                                    className: "flex flex-col items-center",
                                                    children: [
                                                        y.jsx(cl, {
                                                            design: S.input,
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
                                                        y.jsx(cl, {
                                                            design: S.output,
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
                                        y.jsx(ne, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full text-xs text-red-600",
                                            onClick: ()=>x(S.id),
                                            children: "Delete"
                                        })
                                    ]
                                }, S.id))
                        })
                    ]
                })
            ]
        });
        return e ? y.jsxs(nr, {
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
                        y.jsx(ne, {
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
                        y.jsx(ne, {
                            variant: "outline",
                            size: "sm",
                            onClick: s0,
                            children: "← Editor"
                        }),
                        y.jsx(ne, {
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
    const a0 = "/grid-draw/";
    function hd({ design: e, label: t, onClick: n }) {
        const r = y.jsx(cl, {
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
    function u0({ input: e, output: t, onInput: n, onOutput: r }) {
        return y.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                y.jsx(hd, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                y.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                y.jsx(hd, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function zm({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = de((a)=>a.examples), o = de((a)=>a.error), l = de((a)=>a.loadExamples);
        I.useEffect(()=>{
            l();
        }, [
            l
        ]);
        const s = y.jsxs(y.Fragment, {
            children: [
                y.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        y.jsx(ne, {
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
                                        y.jsx(u0, {
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
        return e ? y.jsx(nr, {
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
                        y.jsx(ne, {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>{
                                window.location.href = a0;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                s
            ]
        });
    }
    const Ut = 2, c0 = 8, Cn = 48, Vn = "/grid-draw/", gd = [
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
    function d0() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function f0(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function yd() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - Cn)
        };
    }
    function p0() {
        const [e, t] = I.useState(()=>yd()), n = I.useRef(null), { grid: r, loading: o, error: l } = Xy(n, e.w, e.h), i = et(), { tool: s, setTool: a, colorIdx: u, setColorIdx: c, pickColor: d, outlineIdx: f, pickOutline: x, isDrawing: v, drawMode: h, startDrawing: S, stopDrawing: g, lineStart: m, startLine: p, finishLine: k, rectStart: N, startRect: T, finishRect: P, textSize: _, pickTextSize: $, lineWidth: F, pickLineWidth: he, subdivision: ze, cycleSubdivision: Ue, setSubdivision: Ct, beginTextEdit: Ve, typeTextChar: X, backspaceText: Oe, commitTextEdit: j, cancelTextEdit: b, selectedItems: E, setSelectedItems: Y, selectAll: te, clipboard: gt, copy: De, paste: ae, deleteSelected: Z, selectMode: Q, isSelecting: yt, selectBoxStart: pe, selectDragStart: fn, startBoxSelection: pn, updateBoxSelection: mn, finishBoxSelection: Fn, cancelBoxSelection: hn, startDragSelection: xo, finishDragSelection: Ha, cancelDragSelection: Ka, startResize: Qa, updateResize: Ya, finishResize: Xa, cancelResize: Za, startRotate: Ja, updateRotate: qa, finishRotate: eu, cancelRotate: tu, setMousePos: nu, addItemToSelection: ru, removeItemFromSelection: ou, hitTestShapes: wo, getSelectedCells: Pm, jsonOutput: jm, tensorOutput: Mm, importJson: Lm, importTensor: Om, clear: ni, updateOutputs: wr, renderSelection: ri, beginDrawStroke: lu, drawCellAt: So, endDrawStroke: iu, commitLine: su, commitRect: au, undo: oi, redo: li, canUndo: Dm, canRedo: bm, captureMode: ii, captureInput: Sr, startTrainingCapture: Am, captureSetInput: Fm, buildTrainingExample: uu, finishTrainingCapture: cu, cancelTrainingCapture: du, serializeWholeGrid: ko, exportHistory: fu, loadDesignWithHistory: gn, currentName: pu, setCurrentName: lt, saveState: si, setSaveState: mu, resetHistory: hu } = i;
        i.historyTick;
        const gu = de((w)=>w.saveDrawing), Co = de((w)=>w.getDrawing), yu = de((w)=>w.getDrawingById), vu = de((w)=>w.saveExamplePair), xu = de((w)=>w.updateExamplePair), wu = de((w)=>w.runPredict), Su = de((w)=>w.trainModel), ku = de((w)=>w.initModel), Cu = de((w)=>w.modelStatus), ke = de((w)=>w.training), kr = Pm(), [_u, ue] = I.useState(""), [$m, ai] = I.useState(!1), [Bm, ui] = I.useState(!1), [Dt, ci] = I.useState(null), [$n, Um] = I.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), Vm = .25, Wm = 12, bt = I.useRef($n);
        bt.current = $n;
        const Cr = I.useCallback((w)=>{
            Um(w), r?.set_camera(w.x, w.y, w.zoom);
        }, [
            r
        ]), _o = I.useRef(!1), [Gm, Eu] = I.useState(!1), yn = I.useRef(null), Hm = I.useCallback(async ()=>{
            const w = ko();
            if (!w || w.cells.length + w.lines.length + w.rects.length + w.texts.length === 0) {
                ue("Nothing to save — draw something first.");
                return;
            }
            const C = d0();
            ue("Saving to gallery…");
            try {
                await gu(C, w, fu()), lt(C), window.history.replaceState({}, "", `${Vn}design/${C}/`), ue(`Saved as ${C}. Auto-saving changes.`);
            } catch (z) {
                ue(`Save failed: ${z instanceof Error ? z.message : String(z)}`);
            }
        }, [
            ko,
            fu,
            lt,
            gu
        ]);
        I.useEffect(()=>{
            if (!r) return;
            let w = !1;
            const C = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (C) return Co(C[1]).then((M)=>{
                w || (gn(M.design, M.history ?? null), lt(M.name));
            }).catch(()=>ue(`No drawing named "${C[1]}".`)), ()=>{
                w = !0;
            };
            const z = new URLSearchParams(window.location.search).get("load");
            if (z) return yu(Number(z)).then((M)=>{
                w || (gn(M.design, M.history ?? null), lt(M.name), window.history.replaceState({}, "", `${Vn}design/${encodeURIComponent(M.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Vn);
            }), ()=>{
                w = !0;
            };
        }, [
            r,
            gn,
            lt,
            Co,
            yu
        ]), I.useEffect(()=>{
            ku();
        }, [
            ku
        ]);
        const Km = I.useCallback(async ()=>{
            const w = uu();
            if (!w) {
                ue("Select the output region first.");
                return;
            }
            ue("Saving…");
            try {
                await vu(w.input, w.output, w.delta), cu(), ue("Saved.");
            } catch (C) {
                ue(`Save failed: ${C instanceof Error ? C.message : String(C)}`);
            }
        }, [
            uu,
            cu,
            vu
        ]), Qm = I.useCallback(async ()=>{
            ue("Training in the browser…");
            try {
                await Su(), ue("Model trained. Try Predict from Selection.");
            } catch (w) {
                ue(`Train failed: ${w instanceof Error ? w.message : String(w)}`);
            }
        }, [
            Su
        ]), Ym = I.useCallback(async ()=>{
            const { grid: w, selectedItems: C } = et.getState();
            if (!w) return;
            const z = ul(w, C);
            if (!z) {
                ue("Select an input region to predict from.");
                return;
            }
            const M = Ge(C, w), G = M ? M.minRow : 0, B = M ? M.minCol : 0;
            ue("Predicting…");
            try {
                const A = await wu(z);
                et.getState().placeDesign(A, G, B), ue(f0(A) ? "Model returned nothing — capture more examples and train again." : "Prediction placed.");
            } catch (A) {
                ue(`Predict failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            wu
        ]), Xm = I.useCallback(async (w)=>{
            const C = await Co(w);
            gn(C.design, C.history ?? null), lt(C.name), ci(null), window.history.replaceState({}, "", `${Vn}design/${encodeURIComponent(C.name)}/`), ai(!1);
        }, [
            gn,
            lt,
            Co
        ]), Zm = I.useCallback((w, C)=>{
            const z = C === "input" ? w.input : w.output, M = C === "input" ? w.output : w.input;
            gn(z, null), lt(null), ci({
                id: w.id,
                half: C,
                otherHalf: M
            }), window.history.replaceState({}, "", Vn), ui(!1), ue(`Editing example #${w.id} (${C}) — click "Update example" to save over it.`);
        }, [
            gn,
            lt
        ]), Jm = I.useCallback(async ()=>{
            if (!Dt) return;
            const w = ko();
            if (!w) {
                ue("Nothing to save — draw something first.");
                return;
            }
            const { id: C, half: z, otherHalf: M } = Dt, G = z === "input" ? w : M, B = z === "output" ? w : M;
            ue(`Updating example #${C}…`);
            try {
                await xu(C, G, B), ue(`Example #${C} (${z}) updated.`);
            } catch (A) {
                ue(`Update failed: ${A instanceof Error ? A.message : String(A)}`);
            }
        }, [
            Dt,
            ko,
            xu
        ]), qm = I.useCallback(()=>{
            lt(null), ci(null), ni(), hu(), mu("idle"), window.history.replaceState({}, "", Vn), ue("");
        }, [
            lt,
            ni,
            hu,
            mu
        ]);
        I.useEffect(()=>{
            const w = ()=>{
                const C = yd();
                t(C), r?.set_viewport(C.w, C.h);
            };
            return window.addEventListener("resize", w), ()=>window.removeEventListener("resize", w);
        }, [
            r
        ]), I.useEffect(()=>{
            const w = (C)=>{
                if (et.getState().textEdit) return;
                C.key === "\\" && a(s === "line" ? "draw" : "line"), C.key === "m" && a(s === "rect" ? "draw" : "rect"), C.key === "t" && a(s === "text" ? "draw" : "text"), C.key === "s" && a(s === "select" ? "draw" : "select"), (C.key === "Delete" || C.key === "Backspace") && E.length > 0 && (C.preventDefault(), Z()), (C.ctrlKey || C.metaKey) && C.key.toLowerCase() === "a" && (C.preventDefault(), te()), (C.ctrlKey || C.metaKey) && C.key === "c" && E.length > 0 && (C.preventDefault(), De()), (C.ctrlKey || C.metaKey) && C.key === "v" && gt && (C.preventDefault(), ae()), (C.ctrlKey || C.metaKey) && C.key.toLowerCase() === "g" && (C.preventDefault(), Ue()), (C.ctrlKey || C.metaKey) && !C.shiftKey && C.key.toLowerCase() === "z" && (C.preventDefault(), oi()), (C.ctrlKey || C.metaKey) && (C.shiftKey && C.key.toLowerCase() === "z" || C.key.toLowerCase() === "y") && (C.preventDefault(), li());
                const z = parseInt(C.key);
                z >= 1 && z <= 7 && c(z - 1);
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            s,
            a,
            c,
            E,
            Z,
            De,
            ae,
            gt,
            oi,
            li,
            te,
            Ue
        ]), I.useEffect(()=>{
            const w = (C)=>{
                if (et.getState().textEdit) {
                    if (C.key === "Enter") {
                        C.preventDefault(), j();
                        return;
                    }
                    if (C.key === "Escape") {
                        C.preventDefault(), b();
                        return;
                    }
                    if (C.key === "Backspace") {
                        C.preventDefault(), Oe();
                        return;
                    }
                    C.key.length === 1 && !C.ctrlKey && !C.metaKey && !C.altKey && (C.preventDefault(), X(C.key));
                }
            };
            return window.addEventListener("keydown", w), ()=>window.removeEventListener("keydown", w);
        }, [
            j,
            b,
            Oe,
            X
        ]), I.useEffect(()=>{
            const w = n.current;
            if (!w) return;
            const C = (z)=>{
                z.preventDefault();
                const M = bt.current, G = z.deltaY < 0 ? 1.1 : 1 / 1.1, B = Math.min(Wm, Math.max(Vm, M.zoom * G));
                if (B === M.zoom) return;
                const A = z.clientX, V = z.clientY - Cn, ce = M.x + A * (1 / M.zoom - 1 / B), Ze = M.y + V * (1 / M.zoom - 1 / B);
                Cr({
                    x: ce,
                    y: Ze,
                    zoom: B
                });
            };
            return w.addEventListener("wheel", C, {
                passive: !1
            }), ()=>w.removeEventListener("wheel", C);
        }, [
            Cr
        ]), I.useEffect(()=>{
            const w = (z)=>{
                z.code !== "Space" || et.getState().textEdit || (z.preventDefault(), _o.current = !0, Eu(!0));
            }, C = (z)=>{
                z.code === "Space" && (_o.current = !1, Eu(!1));
            };
            return window.addEventListener("keydown", w), window.addEventListener("keyup", C), ()=>{
                window.removeEventListener("keydown", w), window.removeEventListener("keyup", C);
            };
        }, []);
        const eh = I.useCallback(()=>Cr({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            Cr
        ]), Bn = (w)=>{
            const C = w.currentTarget, z = C.getBoundingClientRect(), M = (w.clientX - z.left) * (C.width / z.width), G = (w.clientY - z.top) * (C.height / z.height), B = bt.current;
            return {
                x: M / B.zoom + B.x,
                y: G / B.zoom + B.y
            };
        }, Nu = ()=>c0 / ze, vn = (w)=>{
            const { x: C, y: z } = Bn(w), M = Nu(), G = (B)=>Math.floor(Math.floor(B / Ut) / M) * M;
            return {
                col: G(C),
                row: G(z)
            };
        }, At = (w)=>{
            const { x: C, y: z } = Bn(w), M = Nu(), G = (B)=>Math.round(B / Ut / M) * M;
            return {
                col: G(C),
                row: G(z)
            };
        }, Eo = (w)=>E.some((C)=>C.type !== w.type ? !1 : C.type === "cell" && w.type === "cell" ? C.row === w.row && C.col === w.col : C.type === "line" && w.type === "line" || C.type === "rect" && w.type === "rect" || C.type === "text" && w.type === "text" ? C.index === w.index : !1), th = I.useCallback((w)=>{
            if (r) {
                if (w.button === 1 || w.button === 0 && _o.current) {
                    w.preventDefault(), yn.current = {
                        x: w.clientX,
                        y: w.clientY,
                        camX: bt.current.x,
                        camY: bt.current.y
                    }, w.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (r.set_draw_color(u), r.set_outline_color(f), s === "draw") {
                    const { col: C, row: z } = vn(w), M = u === 6 ? !1 : !r.get_cell(z, C);
                    S(M), lu(), So(z, C, M), wr();
                } else if (s === "line") {
                    const { col: C, row: z } = At(w);
                    p({
                        row: z,
                        col: C
                    }), r.render_with_line(z, C, z, C);
                } else if (s === "rect") {
                    const { col: C, row: z } = At(w);
                    T({
                        row: z,
                        col: C
                    }), r.render_with_rect(z, C, z, C);
                } else if (s === "text") {
                    const { col: C, row: z } = vn(w);
                    Ve({
                        row: z,
                        col: C
                    });
                } else if (s === "select") {
                    const { col: C, row: z } = vn(w), { x: M, y: G } = Bn(w), B = w.shiftKey;
                    if (E.length > 0 && !B) {
                        const Ze = Ge(E, r);
                        if (Ze) {
                            const No = Os(Ze), Io = 10 / bt.current.zoom;
                            if (Math.hypot(M - No.c * Ut, G - No.r * Ut) <= Io) {
                                Ja(M, G);
                                return;
                            }
                        }
                    }
                    if (E.length === 1 && !B) {
                        const Ze = E[0];
                        if (Ze.type === "line" || Ze.type === "rect") {
                            const No = Ze.type === "line" ? Ds(r.get_line(Ze.index)) : bs(r.get_rect(Ze.index)), Io = Fc(M, G, No, Ut, 9);
                            if (Io) {
                                Qa({
                                    shape: Ze.type,
                                    index: Ze.index,
                                    handle: Io.handle
                                });
                                return;
                            }
                        }
                    }
                    const A = Ge(E, r), V = A && z >= A.minRow && z <= A.maxRow && C >= A.minCol && C <= A.maxCol, ce = wo(M, G);
                    ce && !B && Eo(ce) && E.length > 1 ? (xo({
                        row: z,
                        col: C
                    }), ri()) : V && E.length > 0 && !B && !ce ? (xo({
                        row: z,
                        col: C
                    }, !0), ri()) : ce ? B && !Eo(ce) ? ru(ce) : B && Eo(ce) ? ou(ce) : (Y([
                        ce
                    ]), xo({
                        row: z,
                        col: C
                    }), r.render(), ce.type === "cell" ? r.highlight_cell(ce.row, ce.col) : ce.type === "line" ? r.highlight_line(ce.index) : ce.type === "rect" && r.highlight_rect(ce.index)) : pn({
                        row: z,
                        col: C
                    }, B);
                }
            }
        }, [
            r,
            s,
            u,
            f,
            E,
            kr,
            wo,
            S,
            p,
            T,
            pn,
            xo,
            Qa,
            Ja,
            ru,
            ou,
            Y,
            wr,
            ri,
            lu,
            So,
            Ve
        ]), nh = I.useCallback((w)=>{
            if (!r) return;
            if (yn.current) {
                const z = yn.current, M = bt.current.zoom;
                Cr({
                    x: z.camX - (w.clientX - z.x) / M,
                    y: z.camY - (w.clientY - z.y) / M,
                    zoom: M
                });
                return;
            }
            const C = vn(w);
            if (nu(C), s === "select") {
                const z = w.currentTarget;
                if (yt && (Q === "resize" || Q === "rotate")) z.style.cursor = "grabbing";
                else if (yt && Q === "drag") z.style.cursor = "move";
                else {
                    const { x: M, y: G } = Bn(w);
                    let B = "crosshair";
                    if (E.length > 0) {
                        const A = Ge(E, r);
                        if (A) {
                            const V = Os(A);
                            Math.hypot(M - V.c * Ut, G - V.r * Ut) <= 10 / bt.current.zoom && (B = "grab");
                        }
                    }
                    if (B === "crosshair" && E.length === 1) {
                        const A = E[0];
                        if (A.type === "line" || A.type === "rect") {
                            const V = A.type === "line" ? Ds(r.get_line(A.index)) : bs(r.get_rect(A.index));
                            Fc(M, G, V, Ut, 9) && (B = "grab");
                        }
                    }
                    if (B === "crosshair" && E.length > 0) {
                        const A = wo(M, G), V = Ge(E, r), ce = V && C.row >= V.minRow && C.row <= V.maxRow && C.col >= V.minCol && C.col <= V.maxCol;
                        (A && Eo(A) || ce) && (B = "move");
                    }
                    z.style.cursor = B;
                }
            } else w.currentTarget.style.cursor = "crosshair";
            if (!(!v && !yt)) {
                if (s === "draw" && v) {
                    const { col: z, row: M } = vn(w);
                    So(M, z, h), wr();
                } else if (s === "line" && m) {
                    const { col: z, row: M } = At(w);
                    r.render_with_line(m.row, m.col, M, z);
                } else if (s === "rect" && N) {
                    const { col: z, row: M } = At(w);
                    r.render_with_rect(N.row, N.col, M, z);
                } else if (s === "select" && yt && Q === "resize") {
                    const { col: z, row: M } = At(w);
                    Ya({
                        row: M,
                        col: z
                    });
                } else if (s === "select" && yt && Q === "rotate") {
                    const { x: z, y: M } = Bn(w);
                    qa(z, M);
                } else if (s === "select" && yt) {
                    const { col: z, row: M } = vn(w);
                    if (Q === "box" && pe) mn({
                        row: M,
                        col: z
                    });
                    else if (Q === "drag" && fn && E.length > 0) {
                        const G = M - fn.row, B = z - fn.col;
                        r.render();
                        for (const A of E)if (A.type === "cell") {
                            const V = A.row + G, ce = A.col + B;
                            r.preview_cell(V, ce, r.get_cell_color(A.row, A.col));
                        } else if (A.type === "line") {
                            const V = r.get_line(A.index);
                            V.length >= 6 && r.preview_line(V[0] + G, V[1] + B, V[2] + G, V[3] + B, V[4], V[5]);
                        } else if (A.type === "rect") {
                            const V = r.get_rect(A.index);
                            V.length >= 6 && r.preview_rect(V[0] + G, V[1] + B, V[2] + G, V[3] + B, V[4], V[5]);
                        } else if (A.type === "text") {
                            const V = r.get_text(A.index);
                            V.length >= 3 && r.preview_text(V[0] + G, V[1] + B, V[2], r.get_text_size(A.index), r.get_text_string(A.index));
                        }
                    }
                }
            }
        }, [
            r,
            s,
            v,
            yt,
            h,
            m,
            N,
            Q,
            pe,
            fn,
            E,
            wo,
            nu,
            mn,
            Ya,
            qa,
            wr,
            So
        ]), rh = I.useCallback((w)=>{
            if (r) {
                if (yn.current) {
                    yn.current = null, w.currentTarget.style.cursor = _o.current ? "grab" : "crosshair";
                    return;
                }
                if (s === "draw") iu(), g();
                else if (s === "line") {
                    if (m) {
                        const { col: C, row: z } = At(w);
                        su(m.row, m.col, z, C);
                    }
                    k();
                } else if (s === "rect") {
                    if (N) {
                        const { col: C, row: z } = At(w);
                        au(N.row, N.col, z, C);
                    }
                    P();
                } else if (s === "select") {
                    const { col: C, row: z } = vn(w);
                    if (Q === "rotate") {
                        const { x: M, y: G } = Bn(w);
                        eu(M, G);
                    } else if (Q === "resize") {
                        const { col: M, row: G } = At(w);
                        Xa({
                            row: G,
                            col: M
                        });
                    } else Q === "box" ? Fn({
                        row: z,
                        col: C
                    }) : Q === "drag" && Ha({
                        row: z,
                        col: C
                    });
                }
            }
        }, [
            r,
            s,
            m,
            N,
            Q,
            g,
            k,
            P,
            Fn,
            Ha,
            Xa,
            eu,
            wr,
            iu,
            su,
            au
        ]), oh = I.useCallback(()=>{
            if (yn.current) {
                yn.current = null;
                return;
            }
            s === "draw" ? g() : s === "line" ? (r && r.render(), k()) : s === "rect" ? (r && r.render(), P()) : s === "select" && (Q === "box" ? hn() : Q === "drag" ? Ka() : Q === "resize" ? Za() : Q === "rotate" && tu());
        }, [
            r,
            s,
            Q,
            g,
            k,
            P,
            hn,
            Ka,
            Za,
            tu
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
                                pu && y.jsxs("span", {
                                    className: "text-sm text-gray-500",
                                    children: [
                                        pu,
                                        si === "saving" && " · saving…",
                                        si === "saved" && " · saved",
                                        si === "error" && " · save failed"
                                    ]
                                }),
                                ($n.zoom !== 1 || $n.x !== 0 || $n.y !== 0) && y.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        y.jsxs("span", {
                                            className: "text-sm text-gray-500 tabular-nums",
                                            children: [
                                                Math.round($n.zoom * 100),
                                                "%"
                                            ]
                                        }),
                                        y.jsx(ne, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: eh,
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
                    className: Yt("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: Cn,
                        cursor: o ? "wait" : Gm ? "grab" : "crosshair"
                    },
                    onMouseDown: th,
                    onMouseMove: nh,
                    onMouseUp: rh,
                    onMouseLeave: oh
                }),
                y.jsx(nr, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: Cn + 20
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
                                    y.jsxs(Yo, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (w)=>w && a(w),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            y.jsx(at, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            y.jsx(at, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            y.jsx(at, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            y.jsx(at, {
                                                value: "text",
                                                className: "text-xs",
                                                children: "Text"
                                            }),
                                            y.jsx(at, {
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
                                    y.jsxs(Yo, {
                                        type: "single",
                                        value: String(ze),
                                        onValueChange: (w)=>w && Ct(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            y.jsx(at, {
                                                value: "1",
                                                className: "text-xs",
                                                title: "Whole cells",
                                                children: "1×"
                                            }),
                                            y.jsx(at, {
                                                value: "2",
                                                className: "text-xs",
                                                title: "Half cells",
                                                children: "½"
                                            }),
                                            y.jsx(at, {
                                                value: "4",
                                                className: "text-xs",
                                                title: "Quarter cells",
                                                children: "¼"
                                            }),
                                            y.jsx(at, {
                                                value: "8",
                                                className: "text-xs",
                                                title: "Eighth cells",
                                                children: "⅛"
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
                                    y.jsx(Yo, {
                                        type: "single",
                                        value: String(_),
                                        onValueChange: (w)=>w && $(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Wy.map((w)=>y.jsxs(at, {
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
                                    y.jsx(Yo, {
                                        type: "single",
                                        value: String(F),
                                        onValueChange: (w)=>w && he(Number(w)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Gy.map((w)=>y.jsxs(at, {
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
                                        children: gd.map((w, C)=>y.jsx("button", {
                                                onClick: ()=>d(C),
                                                title: `${C + 1}: ${w.name}`,
                                                className: Yt("w-6 h-6 rounded border-2 transition-all", u === C ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
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
                                        children: gd.map((w, C)=>y.jsx("button", {
                                                onClick: ()=>x(C),
                                                title: C === 6 ? "No outline" : w.name,
                                                className: Yt("w-6 h-6 rounded border-2 transition-all", f === C ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", w.hex === "#ffffff" && "shadow-sm"),
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
                                    y.jsx(ne, {
                                        variant: "outline",
                                        onClick: oi,
                                        disabled: o || !Dm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Undo (Ctrl/Cmd+Z)",
                                        children: y.jsx(lv, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    y.jsx(ne, {
                                        variant: "outline",
                                        onClick: li,
                                        disabled: o || !bm(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Redo (Ctrl/Cmd+Shift+Z)",
                                        children: y.jsx(rv, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(ne, {
                                        variant: "outline",
                                        onClick: Hm,
                                        disabled: o,
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Save the whole drawing to the gallery",
                                        children: "Save to Gallery"
                                    }),
                                    y.jsx(ne, {
                                        variant: "outline",
                                        onClick: ()=>ai(!0),
                                        size: "sm",
                                        className: "flex-1",
                                        children: "Gallery"
                                    })
                                ]
                            }),
                            Dt && y.jsxs(ne, {
                                variant: "outline",
                                onClick: Jm,
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
                            y.jsx(ne, {
                                variant: "destructive",
                                onClick: ni,
                                disabled: o,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            y.jsx(ne, {
                                onClick: qm,
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
                y.jsx(nr, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Cn + 20
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
                                                value: jm,
                                                onChange: (w)=>Lm(w.target.value),
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
                                                value: Mm,
                                                onChange: (w)=>Om(w.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            y.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: E.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${E.length} item${E.length !== 1 ? "s" : ""} selected${kr.length > 0 ? ` (${kr.length} cell${kr.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                }),
                y.jsx(nr, {
                    title: "Training Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Cn + 360
                    },
                    children: y.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            ii === "idle" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Capture input→output pairs, train the tiny in-browser model, then predict a moved output from a selection."
                                    }),
                                    y.jsx(ne, {
                                        size: "sm",
                                        className: "w-full",
                                        onClick: Am,
                                        disabled: o,
                                        children: "Make Training Data"
                                    }),
                                    y.jsx(ne, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Ym,
                                        disabled: o || E.length === 0 || Cu !== "ready",
                                        title: Cu !== "ready" ? "Train a model first" : "Map the selection through the model",
                                        children: "Predict from Selection"
                                    }),
                                    y.jsx(ne, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Qm,
                                        disabled: o || ke?.status === "running",
                                        children: ke?.status === "running" ? "Training…" : "Start Training Run"
                                    }),
                                    y.jsx(ne, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: ()=>ui(!0),
                                        children: "View Training Data"
                                    })
                                ]
                            }),
                            ii === "input" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs font-medium text-blue-600",
                                        children: "Step 1/2 — select the INPUT, then click Next."
                                    }),
                                    y.jsxs("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            E.length,
                                            " item(s) selected."
                                        ]
                                    }),
                                    y.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            y.jsx(ne, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Fm,
                                                disabled: E.length === 0,
                                                children: "Next →"
                                            }),
                                            y.jsx(ne, {
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
                            ii === "output" && y.jsxs(y.Fragment, {
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
                                            E.length,
                                            " item(s)"
                                        ]
                                    }),
                                    y.jsxs("div", {
                                        className: "flex gap-1",
                                        children: [
                                            y.jsx(ne, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Km,
                                                disabled: E.length === 0,
                                                children: "Save Example"
                                            }),
                                            y.jsx(ne, {
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
                            _u && y.jsx("p", {
                                className: "text-xs text-gray-500",
                                children: _u
                            })
                        ]
                    })
                }),
                ke && y.jsx(nr, {
                    title: "Training",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Cn + 540
                    },
                    children: y.jsx("div", {
                        className: "space-y-2 w-72 text-xs",
                        children: (()=>{
                            const w = ke.total > 0 ? Math.min(100, Math.round(ke.epoch / ke.total * 100)) : ke.status === "done" ? 100 : 0, C = ke.status === "error" ? "bg-red-500" : ke.status === "done" ? "bg-green-500" : "bg-blue-500";
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
                                            className: Yt("h-full", C),
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
                $m && y.jsx(Tm, {
                    asModal: !0,
                    onClose: ()=>ai(!1),
                    onOpenDesign: Xm
                }),
                Bm && y.jsx(zm, {
                    asModal: !0,
                    onClose: ()=>ui(!1),
                    onEditExample: Zm
                })
            ]
        });
    }
    function m0() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function h0() {
        const e = m0();
        return y.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? y.jsx(Tm, {}) : e === "training" ? y.jsx(zm, {}) : y.jsx(p0, {})
        });
    }
    const g0 = 600;
    let vd;
    function y0() {
        et.getState().currentName && (clearTimeout(vd), vd = setTimeout(v0, g0));
    }
    async function v0() {
        const e = et.getState();
        if (!e.currentName || !e.grid) return;
        const t = e.serializeWholeGrid();
        if (t) {
            e.setSaveState("saving");
            try {
                await de.getState().saveDrawing(e.currentName, t, e.exportHistory()), et.getState().setSaveState("saved");
            } catch (n) {
                et.getState().setSaveState("error", n instanceof Error ? n.message : String(n));
            }
        }
    }
    et.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && y0();
    });
    const xd = document.getElementById("grid-draw-root");
    xd && Ui.createRoot(xd).render(y.jsx(re.StrictMode, {
        children: y.jsx(h0, {})
    }));
})();
export { w0 as a, x0 as c, ih as g, __tla };
