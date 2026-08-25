(async ()=>{
    function rm(e, t) {
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
    function om(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var hd = {
        exports: {}
    }, Ll = {}, md = {
        exports: {}
    }, H = {};
    var mo = Symbol.for("react.element"), lm = Symbol.for("react.portal"), im = Symbol.for("react.fragment"), sm = Symbol.for("react.strict_mode"), am = Symbol.for("react.profiler"), um = Symbol.for("react.provider"), cm = Symbol.for("react.context"), dm = Symbol.for("react.forward_ref"), fm = Symbol.for("react.suspense"), pm = Symbol.for("react.memo"), hm = Symbol.for("react.lazy"), Su = Symbol.iterator;
    function mm(e) {
        return e === null || typeof e != "object" ? null : (e = Su && e[Su] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var gd = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, yd = Object.assign, vd = {};
    function gr(e, t, n) {
        this.props = e, this.context = t, this.refs = vd, this.updater = n || gd;
    }
    gr.prototype.isReactComponent = {};
    gr.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    gr.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function xd() {}
    xd.prototype = gr.prototype;
    function Qs(e, t, n) {
        this.props = e, this.context = t, this.refs = vd, this.updater = n || gd;
    }
    var Hs = Qs.prototype = new xd;
    Hs.constructor = Qs;
    yd(Hs, gr.prototype);
    Hs.isPureReactComponent = !0;
    var ku = Array.isArray, wd = Object.prototype.hasOwnProperty, Ws = {
        current: null
    }, Sd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function kd(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)wd.call(t, r) && !Sd.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var a = Array(s), u = 0; u < s; u++)a[u] = arguments[u + 2];
            o.children = a;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: mo,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Ws.current
        };
    }
    function gm(e, t) {
        return {
            $$typeof: mo,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Ks(e) {
        return typeof e == "object" && e !== null && e.$$typeof === mo;
    }
    function ym(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Cu = /\/+/g;
    function fi(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? ym("" + e.key) : t.toString(36);
    }
    function qo(e, t, n, r, o) {
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
                    case mo:
                    case lm:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + fi(i, 0) : r, ku(o) ? (n = "", e != null && (n = e.replace(Cu, "$&/") + "/"), qo(o, t, n, "", function(u) {
            return u;
        })) : o != null && (Ks(o) && (o = gm(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Cu, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", ku(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var a = r + fi(l, s);
            i += qo(l, t, n, a, o);
        }
        else if (a = mm(e), typeof a == "function") for(e = a.call(e), s = 0; !(l = e.next()).done;)l = l.value, a = r + fi(l, s++), i += qo(l, t, n, a, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function No(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return qo(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function vm(e) {
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
    }, Yo = {
        transition: null
    }, xm = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: Yo,
        ReactCurrentOwner: Ws
    };
    function Cd() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    H.Children = {
        map: No,
        forEach: function(e, t, n) {
            No(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return No(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return No(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Ks(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    H.Component = gr;
    H.Fragment = im;
    H.Profiler = am;
    H.PureComponent = Qs;
    H.StrictMode = sm;
    H.Suspense = fm;
    H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xm;
    H.act = Cd;
    H.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = yd({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Ws.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(a in t)wd.call(t, a) && !Sd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
        }
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
            s = Array(a);
            for(var u = 0; u < a; u++)s[u] = arguments[u + 2];
            r.children = s;
        }
        return {
            $$typeof: mo,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    H.createContext = function(e) {
        return e = {
            $$typeof: cm,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: um,
            _context: e
        }, e.Consumer = e;
    };
    H.createElement = kd;
    H.createFactory = function(e) {
        var t = kd.bind(null, e);
        return t.type = e, t;
    };
    H.createRef = function() {
        return {
            current: null
        };
    };
    H.forwardRef = function(e) {
        return {
            $$typeof: dm,
            render: e
        };
    };
    H.isValidElement = Ks;
    H.lazy = function(e) {
        return {
            $$typeof: hm,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: vm
        };
    };
    H.memo = function(e, t) {
        return {
            $$typeof: pm,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    H.startTransition = function(e) {
        var t = Yo.transition;
        Yo.transition = {};
        try {
            e();
        } finally{
            Yo.transition = t;
        }
    };
    H.unstable_act = Cd;
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
    md.exports = H;
    var T = md.exports;
    const le = om(T), _d = rm({
        __proto__: null,
        default: le
    }, [
        T
    ]);
    var wm = T, Sm = Symbol.for("react.element"), km = Symbol.for("react.fragment"), Cm = Object.prototype.hasOwnProperty, _m = wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Em = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Ed(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Cm.call(t, r) && !Em.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: Sm,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: _m.current
        };
    }
    Ll.Fragment = km;
    Ll.jsx = Ed;
    Ll.jsxs = Ed;
    hd.exports = Ll;
    var y = hd.exports, Bi = {}, Td = {
        exports: {}
    }, qe = {}, Rd = {
        exports: {}
    }, Pd = {};
    (function(e) {
        function t(j, F) {
            var z = j.length;
            j.push(F);
            e: for(; 0 < z;){
                var Y = z - 1 >>> 1, U = j[Y];
                if (0 < o(U, F)) j[Y] = F, j[z] = U, z = Y;
                else break e;
            }
        }
        function n(j) {
            return j.length === 0 ? null : j[0];
        }
        function r(j) {
            if (j.length === 0) return null;
            var F = j[0], z = j.pop();
            if (z !== F) {
                j[0] = z;
                e: for(var Y = 0, U = j.length, ze = U >>> 1; Y < ze;){
                    var Le = 2 * (Y + 1) - 1, re = j[Le], Z = Le + 1, Xe = j[Z];
                    if (0 > o(re, z)) Z < U && 0 > o(Xe, re) ? (j[Y] = Xe, j[Z] = z, Y = Z) : (j[Y] = re, j[Le] = z, Y = Le);
                    else if (Z < U && 0 > o(Xe, z)) j[Y] = Xe, j[Z] = z, Y = Z;
                    else break e;
                }
            }
            return F;
        }
        function o(j, F) {
            var z = j.sortIndex - F.sortIndex;
            return z !== 0 ? z : j.id - F.id;
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
        var a = [], u = [], c = 1, p = null, d = 3, w = !1, v = !1, m = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function h(j) {
            for(var F = n(u); F !== null;){
                if (F.callback === null) r(u);
                else if (F.startTime <= j) r(u), F.sortIndex = F.expirationTime, t(a, F);
                else break;
                F = n(u);
            }
        }
        function S(j) {
            if (m = !1, h(j), !v) if (n(a) !== null) v = !0, X(E);
            else {
                var F = n(u);
                F !== null && De(S, F.startTime - j);
            }
        }
        function E(j, F) {
            v = !1, m && (m = !1, g(_), _ = -1), w = !0;
            var z = d;
            try {
                for(h(F), p = n(a); p !== null && (!(p.expirationTime > F) || j && !pe());){
                    var Y = p.callback;
                    if (typeof Y == "function") {
                        p.callback = null, d = p.priorityLevel;
                        var U = Y(p.expirationTime <= F);
                        F = e.unstable_now(), typeof U == "function" ? p.callback = U : p === n(a) && r(a), h(F);
                    } else r(a);
                    p = n(a);
                }
                if (p !== null) var ze = !0;
                else {
                    var Le = n(u);
                    Le !== null && De(S, Le.startTime - F), ze = !1;
                }
                return ze;
            } finally{
                p = null, d = z, w = !1;
            }
        }
        var P = !1, I = null, _ = -1, B = 5, A = -1;
        function pe() {
            return !(e.unstable_now() - A < B);
        }
        function Ne() {
            if (I !== null) {
                var j = e.unstable_now();
                A = j;
                var F = !0;
                try {
                    F = I(!0, j);
                } finally{
                    F ? Ge() : (P = !1, I = null);
                }
            } else P = !1;
        }
        var Ge;
        if (typeof f == "function") Ge = function() {
            f(Ne);
        };
        else if (typeof MessageChannel < "u") {
            var yt = new MessageChannel, $ = yt.port2;
            yt.port1.onmessage = Ne, Ge = function() {
                $.postMessage(null);
            };
        } else Ge = function() {
            C(Ne, 0);
        };
        function X(j) {
            I = j, P || (P = !0, Ge());
        }
        function De(j, F) {
            _ = C(function() {
                j(e.unstable_now());
            }, F);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
            j.callback = null;
        }, e.unstable_continueExecution = function() {
            v || w || (v = !0, X(E));
        }, e.unstable_forceFrameRate = function(j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < j ? Math.floor(1e3 / j) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return d;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(a);
        }, e.unstable_next = function(j) {
            switch(d){
                case 1:
                case 2:
                case 3:
                    var F = 3;
                    break;
                default:
                    F = d;
            }
            var z = d;
            d = F;
            try {
                return j();
            } finally{
                d = z;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, F) {
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
            var z = d;
            d = j;
            try {
                return F();
            } finally{
                d = z;
            }
        }, e.unstable_scheduleCallback = function(j, F, z) {
            var Y = e.unstable_now();
            switch(typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Y + z : Y) : z = Y, j){
                case 1:
                    var U = -1;
                    break;
                case 2:
                    U = 250;
                    break;
                case 5:
                    U = 1073741823;
                    break;
                case 4:
                    U = 1e4;
                    break;
                default:
                    U = 5e3;
            }
            return U = z + U, j = {
                id: c++,
                callback: F,
                priorityLevel: j,
                startTime: z,
                expirationTime: U,
                sortIndex: -1
            }, z > Y ? (j.sortIndex = z, t(u, j), n(a) === null && j === n(u) && (m ? (g(_), _ = -1) : m = !0, De(S, z - Y))) : (j.sortIndex = U, t(a, j), v || w || (v = !0, X(E))), j;
        }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(j) {
            var F = d;
            return function() {
                var z = d;
                d = F;
                try {
                    return j.apply(this, arguments);
                } finally{
                    d = z;
                }
            };
        };
    })(Pd);
    Rd.exports = Pd;
    var Tm = Rd.exports;
    var Rm = T, Ke = Tm;
    function R(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Nd = new Set, Kr = {};
    function On(e, t) {
        ur(e, t), ur(e + "Capture", t);
    }
    function ur(e, t) {
        for(Kr[e] = t, e = 0; e < t.length; e++)Nd.add(t[e]);
    }
    var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vi = Object.prototype.hasOwnProperty, Pm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _u = {}, Eu = {};
    function Nm(e) {
        return Vi.call(Eu, e) ? !0 : Vi.call(_u, e) ? !1 : Pm.test(e) ? Eu[e] = !0 : (_u[e] = !0, !1);
    }
    function zm(e, t, n, r) {
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
    function Im(e, t, n, r) {
        if (t === null || typeof t > "u" || zm(e, t, n, r)) return !0;
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
    var qs = /[\-:]([a-z])/g;
    function Ys(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(qs, Ys);
        _e[t] = new Oe(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(qs, Ys);
        _e[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(qs, Ys);
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
    function Xs(e, t, n, r) {
        var o = _e.hasOwnProperty(t) ? _e[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Im(t, n, o, r) && (n = null), r || o === null ? Nm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Dt = Rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, zo = Symbol.for("react.element"), Gn = Symbol.for("react.portal"), Qn = Symbol.for("react.fragment"), Zs = Symbol.for("react.strict_mode"), Gi = Symbol.for("react.profiler"), zd = Symbol.for("react.provider"), Id = Symbol.for("react.context"), Js = Symbol.for("react.forward_ref"), Qi = Symbol.for("react.suspense"), Hi = Symbol.for("react.suspense_list"), ea = Symbol.for("react.memo"), Vt = Symbol.for("react.lazy"), jd = Symbol.for("react.offscreen"), Tu = Symbol.iterator;
    function _r(e) {
        return e === null || typeof e != "object" ? null : (e = Tu && e[Tu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ce = Object.assign, pi;
    function br(e) {
        if (pi === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            pi = t && t[1] || "";
        }
        return `
` + pi + e;
    }
    var hi = !1;
    function mi(e, t) {
        if (!e || hi) return "";
        hi = !0;
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
            hi = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? br(e) : "";
    }
    function jm(e) {
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
    function Wi(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Qn:
                return "Fragment";
            case Gn:
                return "Portal";
            case Gi:
                return "Profiler";
            case Zs:
                return "StrictMode";
            case Qi:
                return "Suspense";
            case Hi:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Id:
                return (e.displayName || "Context") + ".Consumer";
            case zd:
                return (e._context.displayName || "Context") + ".Provider";
            case Js:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case ea:
                return t = e.displayName || null, t !== null ? t : Wi(e.type) || "Memo";
            case Vt:
                t = e._payload, e = e._init;
                try {
                    return Wi(e(t));
                } catch  {}
        }
        return null;
    }
    function Mm(e) {
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
                return Wi(t);
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
    function Md(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function bm(e) {
        var t = Md(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Io(e) {
        e._valueTracker || (e._valueTracker = bm(e));
    }
    function bd(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Md(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function ul(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Ki(e, t) {
        var n = t.checked;
        return ce({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Ru(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = on(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Od(e, t) {
        t = t.checked, t != null && Xs(e, "checked", t, !1);
    }
    function qi(e, t) {
        Od(e, t);
        var n = on(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Yi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yi(e, t.type, on(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Pu(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Yi(e, t, n) {
        (t !== "number" || ul(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
    function Xi(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
        return ce({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Nu(e, t) {
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
    function Dd(e, t) {
        var n = on(t.value), r = on(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function zu(e) {
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
    function Zi(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Ld(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var jo, Fd = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(jo = jo || document.createElement("div"), jo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = jo.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function qr(e, t) {
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
    }, Om = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(Fr).forEach(function(e) {
        Om.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Fr[t] = Fr[e];
        });
    });
    function Ad(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fr.hasOwnProperty(e) && Fr[e] ? ("" + t).trim() : t + "px";
    }
    function $d(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Ad(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Dm = ce({
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
    function Ji(e, t) {
        if (t) {
            if (Dm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(R(137, e));
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
    function ta(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ns = null, or = null, lr = null;
    function Iu(e) {
        if (e = vo(e)) {
            if (typeof ns != "function") throw Error(R(280));
            var t = e.stateNode;
            t && (t = Bl(t), ns(e.stateNode, e.type, t));
        }
    }
    function Ud(e) {
        or ? lr ? lr.push(e) : lr = [
            e
        ] : or = e;
    }
    function Bd() {
        if (or) {
            var e = or, t = lr;
            if (lr = or = null, Iu(e), t) for(e = 0; e < t.length; e++)Iu(t[e]);
        }
    }
    function Vd(e, t) {
        return e(t);
    }
    function Gd() {}
    var gi = !1;
    function Qd(e, t, n) {
        if (gi) return e(t, n);
        gi = !0;
        try {
            return Vd(e, t, n);
        } finally{
            gi = !1, (or !== null || lr !== null) && (Gd(), Bd());
        }
    }
    function Yr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Bl(n);
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
    if (jt) try {
        var Er = {};
        Object.defineProperty(Er, "passive", {
            get: function() {
                rs = !0;
            }
        }), window.addEventListener("test", Er, Er), window.removeEventListener("test", Er, Er);
    } catch  {
        rs = !1;
    }
    function Lm(e, t, n, r, o, l, i, s, a) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u);
        } catch (c) {
            this.onError(c);
        }
    }
    var Ar = !1, cl = null, dl = !1, os = null, Fm = {
        onError: function(e) {
            Ar = !0, cl = e;
        }
    };
    function Am(e, t, n, r, o, l, i, s, a) {
        Ar = !1, cl = null, Lm.apply(Fm, arguments);
    }
    function $m(e, t, n, r, o, l, i, s, a) {
        if (Am.apply(this, arguments), Ar) {
            if (Ar) {
                var u = cl;
                Ar = !1, cl = null;
            } else throw Error(R(198));
            dl || (dl = !0, os = u);
        }
    }
    function Dn(e) {
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
    function ju(e) {
        if (Dn(e) !== e) throw Error(R(188));
    }
    function Um(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Dn(e), t === null) throw Error(R(188));
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
                    if (l === n) return ju(o), e;
                    if (l === r) return ju(o), t;
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
    function Wd(e) {
        return e = Um(e), e !== null ? Kd(e) : null;
    }
    function Kd(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Kd(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var qd = Ke.unstable_scheduleCallback, Mu = Ke.unstable_cancelCallback, Bm = Ke.unstable_shouldYield, Vm = Ke.unstable_requestPaint, me = Ke.unstable_now, Gm = Ke.unstable_getCurrentPriorityLevel, na = Ke.unstable_ImmediatePriority, Yd = Ke.unstable_UserBlockingPriority, fl = Ke.unstable_NormalPriority, Qm = Ke.unstable_LowPriority, Xd = Ke.unstable_IdlePriority, Fl = null, _t = null;
    function Hm(e) {
        if (_t && typeof _t.onCommitFiberRoot == "function") try {
            _t.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var pt = Math.clz32 ? Math.clz32 : qm, Wm = Math.log, Km = Math.LN2;
    function qm(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Wm(e) / Km | 0) | 0;
    }
    var Mo = 64, bo = 4194304;
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
    function pl(e, t) {
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
    function Ym(e, t) {
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
    function Xm(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - pt(l), s = 1 << i, a = o[i];
            a === -1 ? (!(s & n) || s & r) && (o[i] = Ym(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function ls(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Zd() {
        var e = Mo;
        return Mo <<= 1, !(Mo & 4194240) && (Mo = 64), e;
    }
    function yi(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function go(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
    }
    function Zm(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - pt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function ra(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - pt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var q = 0;
    function Jd(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var ef, oa, tf, nf, rf, is = !1, Oo = [], Yt = null, Xt = null, Zt = null, Xr = new Map, Zr = new Map, Qt = [], Jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function bu(e, t) {
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
    function Tr(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = vo(t), t !== null && oa(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function eg(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Yt = Tr(Yt, e, t, n, r, o), !0;
            case "dragenter":
                return Xt = Tr(Xt, e, t, n, r, o), !0;
            case "mouseover":
                return Zt = Tr(Zt, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return Xr.set(l, Tr(Xr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Zr.set(l, Tr(Zr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function of(e) {
        var t = _n(e.target);
        if (t !== null) {
            var n = Dn(t);
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
    function Xo(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ss(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                ts = r, n.target.dispatchEvent(r), ts = null;
            } else return t = vo(n), t !== null && oa(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Ou(e, t, n) {
        Xo(e) && n.delete(t);
    }
    function tg() {
        is = !1, Yt !== null && Xo(Yt) && (Yt = null), Xt !== null && Xo(Xt) && (Xt = null), Zt !== null && Xo(Zt) && (Zt = null), Xr.forEach(Ou), Zr.forEach(Ou);
    }
    function Rr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, is || (is = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, tg)));
    }
    function Jr(e) {
        function t(o) {
            return Rr(o, e);
        }
        if (0 < Oo.length) {
            Rr(Oo[0], e);
            for(var n = 1; n < Oo.length; n++){
                var r = Oo[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Yt !== null && Rr(Yt, e), Xt !== null && Rr(Xt, e), Zt !== null && Rr(Zt, e), Xr.forEach(t), Zr.forEach(t), n = 0; n < Qt.length; n++)r = Qt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Qt.length && (n = Qt[0], n.blockedOn === null);)of(n), n.blockedOn === null && Qt.shift();
    }
    var ir = Dt.ReactCurrentBatchConfig, hl = !0;
    function ng(e, t, n, r) {
        var o = q, l = ir.transition;
        ir.transition = null;
        try {
            q = 1, la(e, t, n, r);
        } finally{
            q = o, ir.transition = l;
        }
    }
    function rg(e, t, n, r) {
        var o = q, l = ir.transition;
        ir.transition = null;
        try {
            q = 4, la(e, t, n, r);
        } finally{
            q = o, ir.transition = l;
        }
    }
    function la(e, t, n, r) {
        if (hl) {
            var o = ss(e, t, n, r);
            if (o === null) Ri(e, t, r, ml, n), bu(e, r);
            else if (eg(o, e, t, n, r)) r.stopPropagation();
            else if (bu(e, r), t & 4 && -1 < Jm.indexOf(e)) {
                for(; o !== null;){
                    var l = vo(o);
                    if (l !== null && ef(l), l = ss(e, t, n, r), l === null && Ri(e, t, r, ml, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Ri(e, t, r, null, n);
        }
    }
    var ml = null;
    function ss(e, t, n, r) {
        if (ml = null, e = ta(r), e = _n(e), e !== null) if (t = Dn(e), t === null) e = null;
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
                switch(Gm()){
                    case na:
                        return 1;
                    case Yd:
                        return 4;
                    case fl:
                    case Qm:
                        return 16;
                    case Xd:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Wt = null, ia = null, Zo = null;
    function sf() {
        if (Zo) return Zo;
        var e, t = ia, n = t.length, r, o = "value" in Wt ? Wt.value : Wt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return Zo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function Jo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Do() {
        return !0;
    }
    function Du() {
        return !1;
    }
    function Ye(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Do : Du, this.isPropagationStopped = Du, this;
        }
        return ce(t.prototype, {
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
    }, sa = Ye(yr), yo = ce({}, yr, {
        view: 0,
        detail: 0
    }), og = Ye(yo), vi, xi, Pr, Al = ce({}, yo, {
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
        getModifierState: aa,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Pr && (Pr && e.type === "mousemove" ? (vi = e.screenX - Pr.screenX, xi = e.screenY - Pr.screenY) : xi = vi = 0, Pr = e), vi);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : xi;
        }
    }), Lu = Ye(Al), lg = ce({}, Al, {
        dataTransfer: 0
    }), ig = Ye(lg), sg = ce({}, yo, {
        relatedTarget: 0
    }), wi = Ye(sg), ag = ce({}, yr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), ug = Ye(ag), cg = ce({}, yr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), dg = Ye(cg), fg = ce({}, yr, {
        data: 0
    }), Fu = Ye(fg), pg = {
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
    }, hg = {
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
    }, mg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function gg(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = mg[e]) ? !!t[e] : !1;
    }
    function aa() {
        return gg;
    }
    var yg = ce({}, yo, {
        key: function(e) {
            if (e.key) {
                var t = pg[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = Jo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hg[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: aa,
        charCode: function(e) {
            return e.type === "keypress" ? Jo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? Jo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), vg = Ye(yg), xg = ce({}, Al, {
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
    }), Au = Ye(xg), wg = ce({}, yo, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: aa
    }), Sg = Ye(wg), kg = ce({}, yr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Cg = Ye(kg), _g = ce({}, Al, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Eg = Ye(_g), Tg = [
        9,
        13,
        27,
        32
    ], ua = jt && "CompositionEvent" in window, $r = null;
    jt && "documentMode" in document && ($r = document.documentMode);
    var Rg = jt && "TextEvent" in window && !$r, af = jt && (!ua || $r && 8 < $r && 11 >= $r), $u = " ", Uu = !1;
    function uf(e, t) {
        switch(e){
            case "keyup":
                return Tg.indexOf(t.keyCode) !== -1;
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
    var Hn = !1;
    function Pg(e, t) {
        switch(e){
            case "compositionend":
                return cf(t);
            case "keypress":
                return t.which !== 32 ? null : (Uu = !0, $u);
            case "textInput":
                return e = t.data, e === $u && Uu ? null : e;
            default:
                return null;
        }
    }
    function Ng(e, t) {
        if (Hn) return e === "compositionend" || !ua && uf(e, t) ? (e = sf(), Zo = ia = Wt = null, Hn = !1, e) : null;
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
    var zg = {
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
        return t === "input" ? !!zg[e.type] : t === "textarea";
    }
    function df(e, t, n, r) {
        Ud(r), t = gl(t, "onChange"), 0 < t.length && (n = new sa("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var Ur = null, eo = null;
    function Ig(e) {
        kf(e, 0);
    }
    function $l(e) {
        var t = qn(e);
        if (bd(t)) return e;
    }
    function jg(e, t) {
        if (e === "change") return t;
    }
    var ff = !1;
    if (jt) {
        var Si;
        if (jt) {
            var ki = "oninput" in document;
            if (!ki) {
                var Vu = document.createElement("div");
                Vu.setAttribute("oninput", "return;"), ki = typeof Vu.oninput == "function";
            }
            Si = ki;
        } else Si = !1;
        ff = Si && (!document.documentMode || 9 < document.documentMode);
    }
    function Gu() {
        Ur && (Ur.detachEvent("onpropertychange", pf), eo = Ur = null);
    }
    function pf(e) {
        if (e.propertyName === "value" && $l(eo)) {
            var t = [];
            df(t, eo, e, ta(e)), Qd(Ig, t);
        }
    }
    function Mg(e, t, n) {
        e === "focusin" ? (Gu(), Ur = t, eo = n, Ur.attachEvent("onpropertychange", pf)) : e === "focusout" && Gu();
    }
    function bg(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return $l(eo);
    }
    function Og(e, t) {
        if (e === "click") return $l(t);
    }
    function Dg(e, t) {
        if (e === "input" || e === "change") return $l(t);
    }
    function Lg(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var mt = typeof Object.is == "function" ? Object.is : Lg;
    function to(e, t) {
        if (mt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Vi.call(t, o) || !mt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function Qu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Hu(e, t) {
        var n = Qu(e);
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
            n = Qu(n);
        }
    }
    function hf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function mf() {
        for(var e = window, t = ul(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = ul(e.document);
        }
        return t;
    }
    function ca(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Fg(e) {
        var t = mf(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && hf(n.ownerDocument.documentElement, n)) {
            if (r !== null && ca(n)) {
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
    var Ag = jt && "documentMode" in document && 11 >= document.documentMode, Wn = null, as = null, Br = null, us = !1;
    function Wu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        us || Wn == null || Wn !== ul(r) || (r = Wn, "selectionStart" in r && ca(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), Br && to(Br, r) || (Br = r, r = gl(as, "onSelect"), 0 < r.length && (t = new sa("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Wn)));
    }
    function Lo(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Kn = {
        animationend: Lo("Animation", "AnimationEnd"),
        animationiteration: Lo("Animation", "AnimationIteration"),
        animationstart: Lo("Animation", "AnimationStart"),
        transitionend: Lo("Transition", "TransitionEnd")
    }, Ci = {}, gf = {};
    jt && (gf = document.createElement("div").style, "AnimationEvent" in window || (delete Kn.animationend.animation, delete Kn.animationiteration.animation, delete Kn.animationstart.animation), "TransitionEvent" in window || delete Kn.transitionend.transition);
    function Ul(e) {
        if (Ci[e]) return Ci[e];
        if (!Kn[e]) return e;
        var t = Kn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in gf) return Ci[e] = t[n];
        return e;
    }
    var yf = Ul("animationend"), vf = Ul("animationiteration"), xf = Ul("animationstart"), wf = Ul("transitionend"), Sf = new Map, Ku = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function sn(e, t) {
        Sf.set(e, t), On(t, [
            e
        ]);
    }
    for(var _i = 0; _i < Ku.length; _i++){
        var Ei = Ku[_i], $g = Ei.toLowerCase(), Ug = Ei[0].toUpperCase() + Ei.slice(1);
        sn($g, "on" + Ug);
    }
    sn(yf, "onAnimationEnd");
    sn(vf, "onAnimationIteration");
    sn(xf, "onAnimationStart");
    sn("dblclick", "onDoubleClick");
    sn("focusin", "onFocus");
    sn("focusout", "onBlur");
    sn(wf, "onTransitionEnd");
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
    On("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    On("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    On("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    On("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    On("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    On("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));
    function qu(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, $m(r, t, void 0, e), e.currentTarget = null;
    }
    function kf(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], a = s.instance, u = s.currentTarget;
                    if (s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    qu(o, s, u), l = a;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && o.isPropagationStopped()) break e;
                    qu(o, s, u), l = a;
                }
            }
        }
        if (dl) throw e = os, dl = !1, os = null, e;
    }
    function te(e, t) {
        var n = t[hs];
        n === void 0 && (n = t[hs] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Cf(t, e, 2, !1), n.add(r));
    }
    function Ti(e, t, n) {
        var r = 0;
        t && (r |= 4), Cf(n, e, r, t);
    }
    var Fo = "_reactListening" + Math.random().toString(36).slice(2);
    function no(e) {
        if (!e[Fo]) {
            e[Fo] = !0, Nd.forEach(function(n) {
                n !== "selectionchange" && (Bg.has(n) || Ti(n, !1, e), Ti(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Fo] || (t[Fo] = !0, Ti("selectionchange", !1, t));
        }
    }
    function Cf(e, t, n, r) {
        switch(lf(t)){
            case 1:
                var o = ng;
                break;
            case 4:
                o = rg;
                break;
            default:
                o = la;
        }
        n = o.bind(null, t, n, e), o = void 0, !rs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
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
        Qd(function() {
            var u = l, c = ta(n), p = [];
            e: {
                var d = Sf.get(e);
                if (d !== void 0) {
                    var w = sa, v = e;
                    switch(e){
                        case "keypress":
                            if (Jo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            w = vg;
                            break;
                        case "focusin":
                            v = "focus", w = wi;
                            break;
                        case "focusout":
                            v = "blur", w = wi;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            w = wi;
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
                            w = Lu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            w = ig;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            w = Sg;
                            break;
                        case yf:
                        case vf:
                        case xf:
                            w = ug;
                            break;
                        case wf:
                            w = Cg;
                            break;
                        case "scroll":
                            w = og;
                            break;
                        case "wheel":
                            w = Eg;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            w = dg;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            w = Au;
                    }
                    var m = (t & 4) !== 0, C = !m && e === "scroll", g = m ? d !== null ? d + "Capture" : null : d;
                    m = [];
                    for(var f = u, h; f !== null;){
                        h = f;
                        var S = h.stateNode;
                        if (h.tag === 5 && S !== null && (h = S, g !== null && (S = Yr(f, g), S != null && m.push(ro(f, S, h)))), C) break;
                        f = f.return;
                    }
                    0 < m.length && (d = new w(d, v, null, n, c), p.push({
                        event: d,
                        listeners: m
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (d = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", d && n !== ts && (v = n.relatedTarget || n.fromElement) && (_n(v) || v[Mt])) break e;
                    if ((w || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window, w ? (v = n.relatedTarget || n.toElement, w = u, v = v ? _n(v) : null, v !== null && (C = Dn(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (w = null, v = u), w !== v)) {
                        if (m = Lu, S = "onMouseLeave", g = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (m = Au, S = "onPointerLeave", g = "onPointerEnter", f = "pointer"), C = w == null ? d : qn(w), h = v == null ? d : qn(v), d = new m(S, f + "leave", w, n, c), d.target = C, d.relatedTarget = h, S = null, _n(c) === u && (m = new m(g, f + "enter", v, n, c), m.target = h, m.relatedTarget = C, S = m), C = S, w && v) t: {
                            for(m = w, g = v, f = 0, h = m; h; h = Un(h))f++;
                            for(h = 0, S = g; S; S = Un(S))h++;
                            for(; 0 < f - h;)m = Un(m), f--;
                            for(; 0 < h - f;)g = Un(g), h--;
                            for(; f--;){
                                if (m === g || g !== null && m === g.alternate) break t;
                                m = Un(m), g = Un(g);
                            }
                            m = null;
                        }
                        else m = null;
                        w !== null && Yu(p, d, w, m, !1), v !== null && C !== null && Yu(p, C, v, m, !0);
                    }
                }
                e: {
                    if (d = u ? qn(u) : window, w = d.nodeName && d.nodeName.toLowerCase(), w === "select" || w === "input" && d.type === "file") var E = jg;
                    else if (Bu(d)) if (ff) E = Dg;
                    else {
                        E = bg;
                        var P = Mg;
                    }
                    else (w = d.nodeName) && w.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = Og);
                    if (E && (E = E(e, u))) {
                        df(p, E, n, c);
                        break e;
                    }
                    P && P(e, d, u), e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Yi(d, "number", d.value);
                }
                switch(P = u ? qn(u) : window, e){
                    case "focusin":
                        (Bu(P) || P.contentEditable === "true") && (Wn = P, as = u, Br = null);
                        break;
                    case "focusout":
                        Br = as = Wn = null;
                        break;
                    case "mousedown":
                        us = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        us = !1, Wu(p, n, c);
                        break;
                    case "selectionchange":
                        if (Ag) break;
                    case "keydown":
                    case "keyup":
                        Wu(p, n, c);
                }
                var I;
                if (ua) e: {
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
                else Hn ? uf(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
                _ && (af && n.locale !== "ko" && (Hn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Hn && (I = sf()) : (Wt = c, ia = "value" in Wt ? Wt.value : Wt.textContent, Hn = !0)), P = gl(u, _), 0 < P.length && (_ = new Fu(_, e, null, n, c), p.push({
                    event: _,
                    listeners: P
                }), I ? _.data = I : (I = cf(n), I !== null && (_.data = I)))), (I = Rg ? Pg(e, n) : Ng(e, n)) && (u = gl(u, "onBeforeInput"), 0 < u.length && (c = new Fu("onBeforeInput", "beforeinput", null, n, c), p.push({
                    event: c,
                    listeners: u
                }), c.data = I));
            }
            kf(p, t);
        });
    }
    function ro(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function gl(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Yr(e, n), l != null && r.unshift(ro(e, l, o)), l = Yr(e, t), l != null && r.push(ro(e, l, o))), e = e.return;
        }
        return r;
    }
    function Un(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function Yu(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, a = s.alternate, u = s.stateNode;
            if (a !== null && a === r) break;
            s.tag === 5 && u !== null && (s = u, o ? (a = Yr(n, l), a != null && i.unshift(ro(n, a, s))) : o || (a = Yr(n, l), a != null && i.push(ro(n, a, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Vg = /\r\n?/g, Gg = /\u0000|\uFFFD/g;
    function Xu(e) {
        return (typeof e == "string" ? e : "" + e).replace(Vg, `
`).replace(Gg, "");
    }
    function Ao(e, t, n) {
        if (t = Xu(t), Xu(e) !== t && n) throw Error(R(425));
    }
    function yl() {}
    var cs = null, ds = null;
    function fs(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ps = typeof setTimeout == "function" ? setTimeout : void 0, Qg = typeof clearTimeout == "function" ? clearTimeout : void 0, Zu = typeof Promise == "function" ? Promise : void 0, Hg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function(e) {
        return Zu.resolve(null).then(e).catch(Wg);
    } : ps;
    function Wg(e) {
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
    function Ju(e) {
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
    var vr = Math.random().toString(36).slice(2), Ct = "__reactFiber$" + vr, oo = "__reactProps$" + vr, Mt = "__reactContainer$" + vr, hs = "__reactEvents$" + vr, Kg = "__reactListeners$" + vr, qg = "__reactHandles$" + vr;
    function _n(e) {
        var t = e[Ct];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[Mt] || n[Ct]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = Ju(e); e !== null;){
                    if (n = e[Ct]) return n;
                    e = Ju(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function vo(e) {
        return e = e[Ct] || e[Mt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function qn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(R(33));
    }
    function Bl(e) {
        return e[oo] || null;
    }
    var ms = [], Yn = -1;
    function an(e) {
        return {
            current: e
        };
    }
    function ne(e) {
        0 > Yn || (e.current = ms[Yn], ms[Yn] = null, Yn--);
    }
    function ee(e, t) {
        Yn++, ms[Yn] = e.current, e.current = t;
    }
    var ln = {}, Pe = an(ln), Ue = an(!1), zn = ln;
    function cr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ln;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Be(e) {
        return e = e.childContextTypes, e != null;
    }
    function vl() {
        ne(Ue), ne(Pe);
    }
    function ec(e, t, n) {
        if (Pe.current !== ln) throw Error(R(168));
        ee(Pe, t), ee(Ue, n);
    }
    function _f(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(R(108, Mm(e) || "Unknown", o));
        return ce({}, n, r);
    }
    function xl(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, zn = Pe.current, ee(Pe, e), ee(Ue, Ue.current), !0;
    }
    function tc(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(R(169));
        n ? (e = _f(e, t, zn), r.__reactInternalMemoizedMergedChildContext = e, ne(Ue), ne(Pe), ee(Pe, e)) : ne(Ue), ee(Ue, n);
    }
    var Pt = null, Vl = !1, Ni = !1;
    function Ef(e) {
        Pt === null ? Pt = [
            e
        ] : Pt.push(e);
    }
    function Yg(e) {
        Vl = !0, Ef(e);
    }
    function un() {
        if (!Ni && Pt !== null) {
            Ni = !0;
            var e = 0, t = q;
            try {
                var n = Pt;
                for(q = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                Pt = null, Vl = !1;
            } catch (o) {
                throw Pt !== null && (Pt = Pt.slice(e + 1)), qd(na, un), o;
            } finally{
                q = t, Ni = !1;
            }
        }
        return null;
    }
    var Xn = [], Zn = 0, wl = null, Sl = 0, Je = [], et = 0, In = null, Nt = 1, zt = "";
    function Sn(e, t) {
        Xn[Zn++] = Sl, Xn[Zn++] = wl, wl = e, Sl = t;
    }
    function Tf(e, t, n) {
        Je[et++] = Nt, Je[et++] = zt, Je[et++] = In, In = e;
        var r = Nt;
        e = zt;
        var o = 32 - pt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - pt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Nt = 1 << 32 - pt(t) + o | n << o | r, zt = l + e;
        } else Nt = 1 << l | n << o | r, zt = e;
    }
    function da(e) {
        e.return !== null && (Sn(e, 1), Tf(e, 1, 0));
    }
    function fa(e) {
        for(; e === wl;)wl = Xn[--Zn], Xn[Zn] = null, Sl = Xn[--Zn], Xn[Zn] = null;
        for(; e === In;)In = Je[--et], Je[et] = null, zt = Je[--et], Je[et] = null, Nt = Je[--et], Je[et] = null;
    }
    var We = null, He = null, ie = !1, ft = null;
    function Rf(e, t) {
        var n = nt(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function nc(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, We = e, He = Jt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, We = e, He = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = In !== null ? {
                    id: Nt,
                    overflow: zt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, We = e, He = null, !0) : !1;
            default:
                return !1;
        }
    }
    function gs(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ys(e) {
        if (ie) {
            var t = He;
            if (t) {
                var n = t;
                if (!nc(e, t)) {
                    if (gs(e)) throw Error(R(418));
                    t = Jt(n.nextSibling);
                    var r = We;
                    t && nc(e, t) ? Rf(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, We = e);
                }
            } else {
                if (gs(e)) throw Error(R(418));
                e.flags = e.flags & -4097 | 2, ie = !1, We = e;
            }
        }
    }
    function rc(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        We = e;
    }
    function $o(e) {
        if (e !== We) return !1;
        if (!ie) return rc(e), ie = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fs(e.type, e.memoizedProps)), t && (t = He)) {
            if (gs(e)) throw Pf(), Error(R(418));
            for(; t;)Rf(e, t), t = Jt(t.nextSibling);
        }
        if (rc(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(R(317));
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
        } else He = We ? Jt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function Pf() {
        for(var e = He; e;)e = Jt(e.nextSibling);
    }
    function dr() {
        He = We = null, ie = !1;
    }
    function pa(e) {
        ft === null ? ft = [
            e
        ] : ft.push(e);
    }
    var Xg = Dt.ReactCurrentBatchConfig;
    function Nr(e, t, n) {
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
    function Uo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(R(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function oc(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Nf(e) {
        function t(g, f) {
            if (e) {
                var h = g.deletions;
                h === null ? (g.deletions = [
                    f
                ], g.flags |= 16) : h.push(f);
            }
        }
        function n(g, f) {
            if (!e) return null;
            for(; f !== null;)t(g, f), f = f.sibling;
            return null;
        }
        function r(g, f) {
            for(g = new Map; f !== null;)f.key !== null ? g.set(f.key, f) : g.set(f.index, f), f = f.sibling;
            return g;
        }
        function o(g, f) {
            return g = rn(g, f), g.index = 0, g.sibling = null, g;
        }
        function l(g, f, h) {
            return g.index = h, e ? (h = g.alternate, h !== null ? (h = h.index, h < f ? (g.flags |= 2, f) : h) : (g.flags |= 2, f)) : (g.flags |= 1048576, f);
        }
        function i(g) {
            return e && g.alternate === null && (g.flags |= 2), g;
        }
        function s(g, f, h, S) {
            return f === null || f.tag !== 6 ? (f = Di(h, g.mode, S), f.return = g, f) : (f = o(f, h), f.return = g, f);
        }
        function a(g, f, h, S) {
            var E = h.type;
            return E === Qn ? c(g, f, h.props.children, S, h.key) : f !== null && (f.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Vt && oc(E) === f.type) ? (S = o(f, h.props), S.ref = Nr(g, f, h), S.return = g, S) : (S = il(h.type, h.key, h.props, null, g.mode, S), S.ref = Nr(g, f, h), S.return = g, S);
        }
        function u(g, f, h, S) {
            return f === null || f.tag !== 4 || f.stateNode.containerInfo !== h.containerInfo || f.stateNode.implementation !== h.implementation ? (f = Li(h, g.mode, S), f.return = g, f) : (f = o(f, h.children || []), f.return = g, f);
        }
        function c(g, f, h, S, E) {
            return f === null || f.tag !== 7 ? (f = Pn(h, g.mode, S, E), f.return = g, f) : (f = o(f, h), f.return = g, f);
        }
        function p(g, f, h) {
            if (typeof f == "string" && f !== "" || typeof f == "number") return f = Di("" + f, g.mode, h), f.return = g, f;
            if (typeof f == "object" && f !== null) {
                switch(f.$$typeof){
                    case zo:
                        return h = il(f.type, f.key, f.props, null, g.mode, h), h.ref = Nr(g, null, f), h.return = g, h;
                    case Gn:
                        return f = Li(f, g.mode, h), f.return = g, f;
                    case Vt:
                        var S = f._init;
                        return p(g, S(f._payload), h);
                }
                if (Or(f) || _r(f)) return f = Pn(f, g.mode, h, null), f.return = g, f;
                Uo(g, f);
            }
            return null;
        }
        function d(g, f, h, S) {
            var E = f !== null ? f.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number") return E !== null ? null : s(g, f, "" + h, S);
            if (typeof h == "object" && h !== null) {
                switch(h.$$typeof){
                    case zo:
                        return h.key === E ? a(g, f, h, S) : null;
                    case Gn:
                        return h.key === E ? u(g, f, h, S) : null;
                    case Vt:
                        return E = h._init, d(g, f, E(h._payload), S);
                }
                if (Or(h) || _r(h)) return E !== null ? null : c(g, f, h, S, null);
                Uo(g, h);
            }
            return null;
        }
        function w(g, f, h, S, E) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(h) || null, s(f, g, "" + S, E);
            if (typeof S == "object" && S !== null) {
                switch(S.$$typeof){
                    case zo:
                        return g = g.get(S.key === null ? h : S.key) || null, a(f, g, S, E);
                    case Gn:
                        return g = g.get(S.key === null ? h : S.key) || null, u(f, g, S, E);
                    case Vt:
                        var P = S._init;
                        return w(g, f, h, P(S._payload), E);
                }
                if (Or(S) || _r(S)) return g = g.get(h) || null, c(f, g, S, E, null);
                Uo(f, S);
            }
            return null;
        }
        function v(g, f, h, S) {
            for(var E = null, P = null, I = f, _ = f = 0, B = null; I !== null && _ < h.length; _++){
                I.index > _ ? (B = I, I = null) : B = I.sibling;
                var A = d(g, I, h[_], S);
                if (A === null) {
                    I === null && (I = B);
                    break;
                }
                e && I && A.alternate === null && t(g, I), f = l(A, f, _), P === null ? E = A : P.sibling = A, P = A, I = B;
            }
            if (_ === h.length) return n(g, I), ie && Sn(g, _), E;
            if (I === null) {
                for(; _ < h.length; _++)I = p(g, h[_], S), I !== null && (f = l(I, f, _), P === null ? E = I : P.sibling = I, P = I);
                return ie && Sn(g, _), E;
            }
            for(I = r(g, I); _ < h.length; _++)B = w(I, g, _, h[_], S), B !== null && (e && B.alternate !== null && I.delete(B.key === null ? _ : B.key), f = l(B, f, _), P === null ? E = B : P.sibling = B, P = B);
            return e && I.forEach(function(pe) {
                return t(g, pe);
            }), ie && Sn(g, _), E;
        }
        function m(g, f, h, S) {
            var E = _r(h);
            if (typeof E != "function") throw Error(R(150));
            if (h = E.call(h), h == null) throw Error(R(151));
            for(var P = E = null, I = f, _ = f = 0, B = null, A = h.next(); I !== null && !A.done; _++, A = h.next()){
                I.index > _ ? (B = I, I = null) : B = I.sibling;
                var pe = d(g, I, A.value, S);
                if (pe === null) {
                    I === null && (I = B);
                    break;
                }
                e && I && pe.alternate === null && t(g, I), f = l(pe, f, _), P === null ? E = pe : P.sibling = pe, P = pe, I = B;
            }
            if (A.done) return n(g, I), ie && Sn(g, _), E;
            if (I === null) {
                for(; !A.done; _++, A = h.next())A = p(g, A.value, S), A !== null && (f = l(A, f, _), P === null ? E = A : P.sibling = A, P = A);
                return ie && Sn(g, _), E;
            }
            for(I = r(g, I); !A.done; _++, A = h.next())A = w(I, g, _, A.value, S), A !== null && (e && A.alternate !== null && I.delete(A.key === null ? _ : A.key), f = l(A, f, _), P === null ? E = A : P.sibling = A, P = A);
            return e && I.forEach(function(Ne) {
                return t(g, Ne);
            }), ie && Sn(g, _), E;
        }
        function C(g, f, h, S) {
            if (typeof h == "object" && h !== null && h.type === Qn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                switch(h.$$typeof){
                    case zo:
                        e: {
                            for(var E = h.key, P = f; P !== null;){
                                if (P.key === E) {
                                    if (E = h.type, E === Qn) {
                                        if (P.tag === 7) {
                                            n(g, P.sibling), f = o(P, h.props.children), f.return = g, g = f;
                                            break e;
                                        }
                                    } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Vt && oc(E) === P.type) {
                                        n(g, P.sibling), f = o(P, h.props), f.ref = Nr(g, P, h), f.return = g, g = f;
                                        break e;
                                    }
                                    n(g, P);
                                    break;
                                } else t(g, P);
                                P = P.sibling;
                            }
                            h.type === Qn ? (f = Pn(h.props.children, g.mode, S, h.key), f.return = g, g = f) : (S = il(h.type, h.key, h.props, null, g.mode, S), S.ref = Nr(g, f, h), S.return = g, g = S);
                        }
                        return i(g);
                    case Gn:
                        e: {
                            for(P = h.key; f !== null;){
                                if (f.key === P) if (f.tag === 4 && f.stateNode.containerInfo === h.containerInfo && f.stateNode.implementation === h.implementation) {
                                    n(g, f.sibling), f = o(f, h.children || []), f.return = g, g = f;
                                    break e;
                                } else {
                                    n(g, f);
                                    break;
                                }
                                else t(g, f);
                                f = f.sibling;
                            }
                            f = Li(h, g.mode, S), f.return = g, g = f;
                        }
                        return i(g);
                    case Vt:
                        return P = h._init, C(g, f, P(h._payload), S);
                }
                if (Or(h)) return v(g, f, h, S);
                if (_r(h)) return m(g, f, h, S);
                Uo(g, h);
            }
            return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, f !== null && f.tag === 6 ? (n(g, f.sibling), f = o(f, h), f.return = g, g = f) : (n(g, f), f = Di(h, g.mode, S), f.return = g, g = f), i(g)) : n(g, f);
        }
        return C;
    }
    var fr = Nf(!0), zf = Nf(!1), kl = an(null), Cl = null, Jn = null, ha = null;
    function ma() {
        ha = Jn = Cl = null;
    }
    function ga(e) {
        var t = kl.current;
        ne(kl), e._currentValue = t;
    }
    function vs(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function sr(e, t) {
        Cl = e, ha = Jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && ($e = !0), e.firstContext = null);
    }
    function ot(e) {
        var t = e._currentValue;
        if (ha !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Jn === null) {
            if (Cl === null) throw Error(R(308));
            Jn = e, Cl.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Jn = Jn.next = e;
        return t;
    }
    var En = null;
    function ya(e) {
        En === null ? En = [
            e
        ] : En.push(e);
    }
    function If(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, ya(t)) : (n.next = o.next, o.next = n), t.interleaved = n, bt(e, r);
    }
    function bt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Gt = !1;
    function va(e) {
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
    function jf(e, t) {
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
    function en(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, W & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, bt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, ya(r)) : (t.next = o.next, o.next = t), r.interleaved = t, bt(e, n);
    }
    function el(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ra(e, n);
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
    function _l(e, t, n, r) {
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
            var p = o.baseState;
            i = 0, c = u = a = null, s = l;
            do {
                var d = s.lane, w = s.eventTime;
                if ((r & d) === d) {
                    c !== null && (c = c.next = {
                        eventTime: w,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var v = e, m = s;
                        switch(d = t, w = n, m.tag){
                            case 1:
                                if (v = m.payload, typeof v == "function") {
                                    p = v.call(w, p, d);
                                    break e;
                                }
                                p = v;
                                break e;
                            case 3:
                                v.flags = v.flags & -65537 | 128;
                            case 0:
                                if (v = m.payload, d = typeof v == "function" ? v.call(w, p, d) : v, d == null) break e;
                                p = ce({}, p, d);
                                break e;
                            case 2:
                                Gt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [
                        s
                    ] : d.push(s));
                } else w = {
                    eventTime: w,
                    lane: d,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, c === null ? (u = c = w, a = p) : c = c.next = w, i |= d;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
                }
            }while (!0);
            if (c === null && (a = p), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            Mn |= i, e.lanes = i, e.memoizedState = p;
        }
    }
    function ic(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(R(191, o));
                o.call(r);
            }
        }
    }
    var xo = {}, Et = an(xo), lo = an(xo), io = an(xo);
    function Tn(e) {
        if (e === xo) throw Error(R(174));
        return e;
    }
    function xa(e, t) {
        switch(ee(io, t), ee(lo, e), ee(Et, xo), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Zi(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zi(t, e);
        }
        ne(Et), ee(Et, t);
    }
    function pr() {
        ne(Et), ne(lo), ne(io);
    }
    function Mf(e) {
        Tn(io.current);
        var t = Tn(Et.current), n = Zi(t, e.type);
        t !== n && (ee(lo, e), ee(Et, n));
    }
    function wa(e) {
        lo.current === e && (ne(Et), ne(lo));
    }
    var ae = an(0);
    function El(e) {
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
    var zi = [];
    function Sa() {
        for(var e = 0; e < zi.length; e++)zi[e]._workInProgressVersionPrimary = null;
        zi.length = 0;
    }
    var tl = Dt.ReactCurrentDispatcher, Ii = Dt.ReactCurrentBatchConfig, jn = 0, ue = null, ve = null, we = null, Tl = !1, Vr = !1, so = 0, Zg = 0;
    function Ee() {
        throw Error(R(321));
    }
    function ka(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!mt(e[n], t[n])) return !1;
        return !0;
    }
    function Ca(e, t, n, r, o, l) {
        if (jn = l, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, tl.current = e === null || e.memoizedState === null ? ny : ry, e = n(r, o), Vr) {
            l = 0;
            do {
                if (Vr = !1, so = 0, 25 <= l) throw Error(R(301));
                l += 1, we = ve = null, t.updateQueue = null, tl.current = oy, e = n(r, o);
            }while (Vr);
        }
        if (tl.current = Rl, t = ve !== null && ve.next !== null, jn = 0, we = ve = ue = null, Tl = !1, t) throw Error(R(300));
        return e;
    }
    function _a() {
        var e = so !== 0;
        return so = 0, e;
    }
    function kt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return we === null ? ue.memoizedState = we = e : we = we.next = e, we;
    }
    function lt() {
        if (ve === null) {
            var e = ue.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ve.next;
        var t = we === null ? ue.memoizedState : we.next;
        if (t !== null) we = t, ve = e;
        else {
            if (e === null) throw Error(R(310));
            ve = e, e = {
                memoizedState: ve.memoizedState,
                baseState: ve.baseState,
                baseQueue: ve.baseQueue,
                queue: ve.queue,
                next: null
            }, we === null ? ue.memoizedState = we = e : we = we.next = e;
        }
        return we;
    }
    function ao(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function ji(e) {
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
                if ((jn & c) === c) a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                else {
                    var p = {
                        lane: c,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    };
                    a === null ? (s = a = p, i = r) : a = a.next = p, ue.lanes |= c, Mn |= c;
                }
                u = u.next;
            }while (u !== null && u !== l);
            a === null ? i = r : a.next = s, mt(r, t.memoizedState) || ($e = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ue.lanes |= l, Mn |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Mi(e) {
        var t = lt(), n = t.queue;
        if (n === null) throw Error(R(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            mt(l, t.memoizedState) || ($e = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function bf() {}
    function Of(e, t) {
        var n = ue, r = lt(), o = t(), l = !mt(r.memoizedState, o);
        if (l && (r.memoizedState = o, $e = !0), r = r.queue, Ea(Ff.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || we !== null && we.memoizedState.tag & 1) {
            if (n.flags |= 2048, uo(9, Lf.bind(null, n, r, o, t), void 0, null), Se === null) throw Error(R(349));
            jn & 30 || Df(n, t, o);
        }
        return o;
    }
    function Df(e, t, n) {
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
    function Lf(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Af(t) && $f(e);
    }
    function Ff(e, t, n) {
        return n(function() {
            Af(t) && $f(e);
        });
    }
    function Af(e) {
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
        var t = bt(e, 1);
        t !== null && ht(t, e, 1, -1);
    }
    function sc(e) {
        var t = kt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ao,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = ty.bind(null, ue, e), [
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
        }, t = ue.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function Uf() {
        return lt().memoizedState;
    }
    function nl(e, t, n, r) {
        var o = kt();
        ue.flags |= e, o.memoizedState = uo(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function Gl(e, t, n, r) {
        var o = lt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ve !== null) {
            var i = ve.memoizedState;
            if (l = i.destroy, r !== null && ka(r, i.deps)) {
                o.memoizedState = uo(t, n, l, r);
                return;
            }
        }
        ue.flags |= e, o.memoizedState = uo(1 | t, n, l, r);
    }
    function ac(e, t) {
        return nl(8390656, 8, e, t);
    }
    function Ea(e, t) {
        return Gl(2048, 8, e, t);
    }
    function Bf(e, t) {
        return Gl(4, 2, e, t);
    }
    function Vf(e, t) {
        return Gl(4, 4, e, t);
    }
    function Gf(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Qf(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, Gl(4, 4, Gf.bind(null, t, e), n);
    }
    function Ta() {}
    function Hf(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ka(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Wf(e, t) {
        var n = lt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ka(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Kf(e, t, n) {
        return jn & 21 ? (mt(n, t) || (n = Zd(), ue.lanes |= n, Mn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, $e = !0), e.memoizedState = n);
    }
    function Jg(e, t) {
        var n = q;
        q = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Ii.transition;
        Ii.transition = {};
        try {
            e(!1), t();
        } finally{
            q = n, Ii.transition = r;
        }
    }
    function qf() {
        return lt().memoizedState;
    }
    function ey(e, t, n) {
        var r = nn(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Yf(e)) Xf(t, n);
        else if (n = If(e, t, n, r), n !== null) {
            var o = Me();
            ht(n, e, r, o), Zf(n, t, r);
        }
    }
    function ty(e, t, n) {
        var r = nn(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Yf(e)) Xf(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, mt(s, i)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o, ya(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = If(e, t, o, r), n !== null && (o = Me(), ht(n, e, r, o), Zf(n, t, r));
        }
    }
    function Yf(e) {
        var t = e.alternate;
        return e === ue || t !== null && t === ue;
    }
    function Xf(e, t) {
        Vr = Tl = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Zf(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ra(e, n);
        }
    }
    var Rl = {
        readContext: ot,
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
    }, ny = {
        readContext: ot,
        useCallback: function(e, t) {
            return kt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: ot,
        useEffect: ac,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, nl(4194308, 4, Gf.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return nl(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return nl(4, 2, e, t);
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
            }, r.queue = e, e = e.dispatch = ey.bind(null, ue, e), [
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
        useState: sc,
        useDebugValue: Ta,
        useDeferredValue: function(e) {
            return kt().memoizedState = e;
        },
        useTransition: function() {
            var e = sc(!1), t = e[0];
            return e = Jg.bind(null, e[1]), kt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue, o = kt();
            if (ie) {
                if (n === void 0) throw Error(R(407));
                n = n();
            } else {
                if (n = t(), Se === null) throw Error(R(349));
                jn & 30 || Df(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, ac(Ff.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, uo(9, Lf.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = kt(), t = Se.identifierPrefix;
            if (ie) {
                var n = zt, r = Nt;
                n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = so++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Zg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, ry = {
        readContext: ot,
        useCallback: Hf,
        useContext: ot,
        useEffect: Ea,
        useImperativeHandle: Qf,
        useInsertionEffect: Bf,
        useLayoutEffect: Vf,
        useMemo: Wf,
        useReducer: ji,
        useRef: Uf,
        useState: function() {
            return ji(ao);
        },
        useDebugValue: Ta,
        useDeferredValue: function(e) {
            var t = lt();
            return Kf(t, ve.memoizedState, e);
        },
        useTransition: function() {
            var e = ji(ao)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: bf,
        useSyncExternalStore: Of,
        useId: qf,
        unstable_isNewReconciler: !1
    }, oy = {
        readContext: ot,
        useCallback: Hf,
        useContext: ot,
        useEffect: Ea,
        useImperativeHandle: Qf,
        useInsertionEffect: Bf,
        useLayoutEffect: Vf,
        useMemo: Wf,
        useReducer: Mi,
        useRef: Uf,
        useState: function() {
            return Mi(ao);
        },
        useDebugValue: Ta,
        useDeferredValue: function(e) {
            var t = lt();
            return ve === null ? t.memoizedState = e : Kf(t, ve.memoizedState, e);
        },
        useTransition: function() {
            var e = Mi(ao)[0], t = lt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: bf,
        useSyncExternalStore: Of,
        useId: qf,
        unstable_isNewReconciler: !1
    };
    function ut(e, t) {
        if (e && e.defaultProps) {
            t = ce({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function xs(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var Ql = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Dn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = nn(e), l = It(r, o);
            l.payload = t, n != null && (l.callback = n), t = en(e, l, o), t !== null && (ht(t, e, o, r), el(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = nn(e), l = It(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = en(e, l, o), t !== null && (ht(t, e, o, r), el(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Me(), r = nn(e), o = It(n, r);
            o.tag = 2, t != null && (o.callback = t), t = en(e, o, r), t !== null && (ht(t, e, r, n), el(t, e, r));
        }
    };
    function uc(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !to(n, r) || !to(o, l) : !0;
    }
    function Jf(e, t, n) {
        var r = !1, o = ln, l = t.contextType;
        return typeof l == "object" && l !== null ? l = ot(l) : (o = Be(t) ? zn : Pe.current, r = t.contextTypes, l = (r = r != null) ? cr(e, o) : ln), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ql, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function cc(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ql.enqueueReplaceState(t, t.state, null);
    }
    function ws(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, va(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = ot(l) : (l = Be(t) ? zn : Pe.current, o.context = cr(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (xs(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ql.enqueueReplaceState(o, o.state, null), _l(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function hr(e, t) {
        try {
            var n = "", r = t;
            do n += jm(r), r = r.return;
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
    function bi(e, t, n) {
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
    var ly = typeof WeakMap == "function" ? WeakMap : Map;
    function ep(e, t, n) {
        n = It(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Nl || (Nl = !0, Is = r), Ss(e, t);
        }, n;
    }
    function tp(e, t, n) {
        n = It(-1, n), n.tag = 3;
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
    function dc(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new ly;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = xy.bind(null, e, t, n), t.then(e, e));
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
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = It(-1, 1), t.tag = 2, en(n, t, 1))), n.lanes |= 1), e);
    }
    var iy = Dt.ReactCurrentOwner, $e = !1;
    function Ie(e, t, n, r) {
        t.child = e === null ? zf(t, null, n, r) : fr(t, e.child, n, r);
    }
    function hc(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return sr(t, o), r = Ca(e, t, n, r, l, o), n = _a(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (ie && n && da(t), t.flags |= 1, Ie(e, t, r, o), t.child);
    }
    function mc(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !ba(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, np(e, t, l, r, o)) : (e = il(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : to, n(i, r) && e.ref === t.ref) return Ot(e, t, o);
        }
        return t.flags |= 1, e = rn(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function np(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (to(l, r) && e.ref === t.ref) if ($e = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && ($e = !0);
            else return t.lanes = e.lanes, Ot(e, t, o);
        }
        return ks(e, t, n, r, o);
    }
    function rp(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ee(tr, Qe), Qe |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ee(tr, Qe), Qe |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, ee(tr, Qe), Qe |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, ee(tr, Qe), Qe |= r;
        return Ie(e, t, o, n), t.child;
    }
    function op(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function ks(e, t, n, r, o) {
        var l = Be(n) ? zn : Pe.current;
        return l = cr(t, l), sr(t, o), n = Ca(e, t, n, r, l, o), r = _a(), e !== null && !$e ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (ie && r && da(t), t.flags |= 1, Ie(e, t, n, o), t.child);
    }
    function gc(e, t, n, r, o) {
        if (Be(n)) {
            var l = !0;
            xl(t);
        } else l = !1;
        if (sr(t, o), t.stateNode === null) rl(e, t), Jf(t, n, r), ws(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var a = i.context, u = n.contextType;
            typeof u == "object" && u !== null ? u = ot(u) : (u = Be(n) ? zn : Pe.current, u = cr(t, u));
            var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            p || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== u) && cc(t, i, r, u), Gt = !1;
            var d = t.memoizedState;
            i.state = d, _l(t, r, i, o), a = t.memoizedState, s !== r || d !== a || Ue.current || Gt ? (typeof c == "function" && (xs(t, n, c, r), a = t.memoizedState), (s = Gt || uc(t, n, s, r, d, a, u)) ? (p || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = u, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, jf(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ut(t.type, s), i.props = u, p = t.pendingProps, d = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = ot(a) : (a = Be(n) ? zn : Pe.current, a = cr(t, a));
            var w = n.getDerivedStateFromProps;
            (c = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== p || d !== a) && cc(t, i, r, a), Gt = !1, d = t.memoizedState, i.state = d, _l(t, r, i, o);
            var v = t.memoizedState;
            s !== p || d !== v || Ue.current || Gt ? (typeof w == "function" && (xs(t, n, w, r), v = t.memoizedState), (u = Gt || uc(t, n, u, r, d, v, a) || !1) ? (c || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = a, r = u) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return Cs(e, t, n, r, l, o);
    }
    function Cs(e, t, n, r, o, l) {
        op(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && tc(t, n, !1), Ot(e, t, l);
        r = t.stateNode, iy.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = fr(t, e.child, null, l), t.child = fr(t, null, s, l)) : Ie(e, t, s, l), t.memoizedState = r.state, o && tc(t, n, !0), t.child;
    }
    function lp(e) {
        var t = e.stateNode;
        t.pendingContext ? ec(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ec(e, t.context, !1), xa(e, t.containerInfo);
    }
    function yc(e, t, n, r, o) {
        return dr(), pa(o), t.flags |= 256, Ie(e, t, n, r), t.child;
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
    function ip(e, t, n) {
        var r = t.pendingProps, o = ae.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ee(ae, o & 1), e === null) return ys(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Kl(i, r, 0, null), e = Pn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Es(n), t.memoizedState = _s, e) : Ra(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return sy(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var a = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = rn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = rn(s, l) : (l = Pn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Es(n) : {
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
    function Ra(e, t) {
        return t = Kl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Bo(e, t, n, r) {
        return r !== null && pa(r), fr(t, e.child, null, n), e = Ra(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function sy(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = bi(Error(R(422))), Bo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Kl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = Pn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && fr(t, e.child, null, i), t.child.memoizedState = Es(i), t.memoizedState = _s, l);
        if (!(t.mode & 1)) return Bo(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(R(419)), r = bi(l, r, void 0), Bo(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, $e || s) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, bt(e, o), ht(r, e, o, -1));
            }
            return Ma(), r = bi(Error(R(421))), Bo(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = wy.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, He = Jt(o.nextSibling), We = t, ie = !0, ft = null, e !== null && (Je[et++] = Nt, Je[et++] = zt, Je[et++] = In, Nt = e.id, zt = e.overflow, In = t), t = Ra(t, r.children), t.flags |= 4096, t);
    }
    function vc(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), vs(e.return, t, n);
    }
    function Oi(e, t, n, r, o) {
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
        if (Ie(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
        if (ee(ae, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && El(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Oi(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && El(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                Oi(t, !0, n, null, l);
                break;
            case "together":
                Oi(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function rl(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Ot(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), Mn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(R(153));
        if (t.child !== null) {
            for(e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = rn(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function ay(e, t, n) {
        switch(t.tag){
            case 3:
                lp(t), dr();
                break;
            case 5:
                Mf(t);
                break;
            case 1:
                Be(t.type) && xl(t);
                break;
            case 4:
                xa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                ee(kl, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ee(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ip(e, t, n) : (ee(ae, ae.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
                ee(ae, ae.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return sp(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ee(ae, ae.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, rp(e, t, n);
        }
        return Ot(e, t, n);
    }
    var ap, Ts, up, cp;
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
    Ts = function() {};
    up = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, Tn(Et.current);
            var l = null;
            switch(n){
                case "input":
                    o = Ki(e, o), r = Ki(e, r), l = [];
                    break;
                case "select":
                    o = ce({}, o, {
                        value: void 0
                    }), r = ce({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Xi(e, o), r = Xi(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
            }
            Ji(n, r);
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
    function zr(e, t) {
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
    function Te(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function uy(e, t, n) {
        var r = t.pendingProps;
        switch(fa(t), t.tag){
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
                return Be(t.type) && vl(), Te(t), null;
            case 3:
                return r = t.stateNode, pr(), ne(Ue), ne(Pe), Sa(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($o(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (bs(ft), ft = null))), Ts(e, t), Te(t), null;
            case 5:
                wa(t);
                var o = Tn(io.current);
                if (n = t.type, e !== null && t.stateNode != null) up(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(R(166));
                        return Te(t), null;
                    }
                    if (e = Tn(Et.current), $o(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[Ct] = t, r[oo] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < Lr.length; o++)te(Lr[o], r);
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
                                Ru(r, l), te("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, te("invalid", r);
                                break;
                            case "textarea":
                                Nu(r, l), te("invalid", r);
                        }
                        Ji(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Ao(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Ao(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : Kr.hasOwnProperty(i) && s != null && i === "onScroll" && te("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Io(r), Pu(r, l, !0);
                                break;
                            case "textarea":
                                Io(r), zu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = yl);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ld(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ct] = t, e[oo] = r, ap(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = es(n, r), n){
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
                                    for(o = 0; o < Lr.length; o++)te(Lr[o], e);
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
                                    Ru(e, r), o = Ki(e, r), te("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = ce({}, r, {
                                        value: void 0
                                    }), te("invalid", e);
                                    break;
                                case "textarea":
                                    Nu(e, r), o = Xi(e, r), te("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Ji(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var a = s[l];
                                l === "style" ? $d(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Fd(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && qr(e, a) : typeof a == "number" && qr(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (Kr.hasOwnProperty(l) ? a != null && l === "onScroll" && te("scroll", e) : a != null && Xs(e, l, a, i));
                            }
                            switch(n){
                                case "input":
                                    Io(e), Pu(e, r, !1);
                                    break;
                                case "textarea":
                                    Io(e), zu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + on(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? rr(e, !!r.multiple, l, !1) : r.defaultValue != null && rr(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = yl);
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
                if (e && t.stateNode != null) cp(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
                    if (n = Tn(io.current), Tn(Et.current), $o(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[Ct] = t, (l = r.nodeValue !== n) && (e = We, e !== null)) switch(e.tag){
                            case 3:
                                Ao(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Ao(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ct] = t, t.stateNode = r;
                }
                return Te(t), null;
            case 13:
                if (ne(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ie && He !== null && t.mode & 1 && !(t.flags & 128)) Pf(), dr(), t.flags |= 98560, l = !1;
                    else if (l = $o(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(R(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(R(317));
                            l[Ct] = t;
                        } else dr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Te(t), l = !1;
                    } else ft !== null && (bs(ft), ft = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? xe === 0 && (xe = 3) : Ma())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
            case 4:
                return pr(), Ts(e, t), e === null && no(t.stateNode.containerInfo), Te(t), null;
            case 10:
                return ga(t.type._context), Te(t), null;
            case 17:
                return Be(t.type) && vl(), Te(t), null;
            case 19:
                if (ne(ae), l = t.memoizedState, l === null) return Te(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) zr(l, !1);
                else {
                    if (xe !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = El(e), i !== null) {
                            for(t.flags |= 128, zr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return ee(ae, ae.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && me() > mr && (t.flags |= 128, r = !0, zr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = El(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), zr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ie) return Te(t), null;
                    } else 2 * me() - l.renderingStartTime > mr && n !== 1073741824 && (t.flags |= 128, r = !0, zr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = me(), t.sibling = null, n = ae.current, ee(ae, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
            case 22:
            case 23:
                return ja(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Qe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(R(156, t.tag));
    }
    function cy(e, t) {
        switch(fa(t), t.tag){
            case 1:
                return Be(t.type) && vl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return pr(), ne(Ue), ne(Pe), Sa(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return wa(t), null;
            case 13:
                if (ne(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(R(340));
                    dr();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ne(ae), null;
            case 4:
                return pr(), null;
            case 10:
                return ga(t.type._context), null;
            case 22:
            case 23:
                return ja(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var Vo = !1, Re = !1, dy = typeof WeakSet == "function" ? WeakSet : Set, M = null;
    function er(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            fe(e, t, r);
        }
        else n.current = null;
    }
    function Rs(e, t, n) {
        try {
            n();
        } catch (r) {
            fe(e, t, r);
        }
    }
    var xc = !1;
    function fy(e, t) {
        if (cs = hl, e = mf(), ca(e)) {
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
                    var i = 0, s = -1, a = -1, u = 0, c = 0, p = e, d = null;
                    t: for(;;){
                        for(var w; p !== n || o !== 0 && p.nodeType !== 3 || (s = i + o), p !== l || r !== 0 && p.nodeType !== 3 || (a = i + r), p.nodeType === 3 && (i += p.nodeValue.length), (w = p.firstChild) !== null;)d = p, p = w;
                        for(;;){
                            if (p === e) break t;
                            if (d === n && ++u === o && (s = i), d === l && ++c === r && (a = i), (w = p.nextSibling) !== null) break;
                            p = d, d = p.parentNode;
                        }
                        p = w;
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
        }, hl = !1, M = t; M !== null;)if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
        else for(; M !== null;){
            t = M;
            try {
                var v = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (v !== null) {
                            var m = v.memoizedProps, C = v.memoizedState, g = t.stateNode, f = g.getSnapshotBeforeUpdate(t.elementType === t.type ? m : ut(t.type, m), C);
                            g.__reactInternalSnapshotBeforeUpdate = f;
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
                        throw Error(R(163));
                }
            } catch (S) {
                fe(t, t.return, S);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, M = e;
                break;
            }
            M = t.return;
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
                    o.destroy = void 0, l !== void 0 && Rs(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function Hl(e, t) {
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
    function Ps(e) {
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
        t !== null && (e.alternate = null, dp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ct], delete t[oo], delete t[hs], delete t[Kg], delete t[qg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
    function Ns(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yl));
        else if (r !== 4 && (e = e.child, e !== null)) for(Ns(e, t, n), e = e.sibling; e !== null;)Ns(e, t, n), e = e.sibling;
    }
    function zs(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(zs(e, t, n), e = e.sibling; e !== null;)zs(e, t, n), e = e.sibling;
    }
    var ke = null, dt = !1;
    function $t(e, t, n) {
        for(n = n.child; n !== null;)pp(e, t, n), n = n.sibling;
    }
    function pp(e, t, n) {
        if (_t && typeof _t.onCommitFiberUnmount == "function") try {
            _t.onCommitFiberUnmount(Fl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Re || er(n, t);
            case 6:
                var r = ke, o = dt;
                ke = null, $t(e, t, n), ke = r, dt = o, ke !== null && (dt ? (e = ke, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ke.removeChild(n.stateNode));
                break;
            case 18:
                ke !== null && (dt ? (e = ke, n = n.stateNode, e.nodeType === 8 ? Pi(e.parentNode, n) : e.nodeType === 1 && Pi(e, n), Jr(e)) : Pi(ke, n.stateNode));
                break;
            case 4:
                r = ke, o = dt, ke = n.stateNode.containerInfo, dt = !0, $t(e, t, n), ke = r, dt = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Re && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Rs(n, t, i), o = o.next;
                    }while (o !== r);
                }
                $t(e, t, n);
                break;
            case 1:
                if (!Re && (er(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
    function Sc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new dy), t.forEach(function(r) {
                var o = Sy.bind(null, e, r);
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
                            ke = s.stateNode, dt = !1;
                            break e;
                        case 3:
                            ke = s.stateNode.containerInfo, dt = !0;
                            break e;
                        case 4:
                            ke = s.stateNode.containerInfo, dt = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (ke === null) throw Error(R(160));
                pp(l, i, o), ke = null, dt = !1;
                var a = o.alternate;
                a !== null && (a.return = null), o.return = null;
            } catch (u) {
                fe(o, t, u);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)hp(t, e), t = t.sibling;
    }
    function hp(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (st(t, e), vt(e), r & 4) {
                    try {
                        Gr(3, e, e.return), Hl(3, e);
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
                st(t, e), vt(e), r & 512 && n !== null && er(n, n.return);
                break;
            case 5:
                if (st(t, e), vt(e), r & 512 && n !== null && er(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        qr(o, "");
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                    if (e.updateQueue = null, a !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Od(o, l), es(s, i);
                        var u = es(s, l);
                        for(i = 0; i < a.length; i += 2){
                            var c = a[i], p = a[i + 1];
                            c === "style" ? $d(o, p) : c === "dangerouslySetInnerHTML" ? Fd(o, p) : c === "children" ? qr(o, p) : Xs(o, c, p, u);
                        }
                        switch(s){
                            case "input":
                                qi(o, l);
                                break;
                            case "textarea":
                                Dd(o, l);
                                break;
                            case "select":
                                var d = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var w = l.value;
                                w != null ? rr(o, !!l.multiple, w, !1) : d !== !!l.multiple && (l.defaultValue != null ? rr(o, !!l.multiple, l.defaultValue, !0) : rr(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[oo] = l;
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                }
                break;
            case 6:
                if (st(t, e), vt(e), r & 4) {
                    if (e.stateNode === null) throw Error(R(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (m) {
                        fe(e, e.return, m);
                    }
                }
                break;
            case 3:
                if (st(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Jr(t.containerInfo);
                } catch (m) {
                    fe(e, e.return, m);
                }
                break;
            case 4:
                st(t, e), vt(e);
                break;
            case 13:
                st(t, e), vt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (za = me())), r & 4 && Sc(e);
                break;
            case 22:
                if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Re = (u = Re) || c, st(t, e), Re = u) : st(t, e), vt(e), r & 8192) {
                    if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1) for(M = e, c = e.child; c !== null;){
                        for(p = M = c; M !== null;){
                            switch(d = M, w = d.child, d.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Gr(4, d, d.return);
                                    break;
                                case 1:
                                    er(d, d.return);
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
                                    er(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Cc(p);
                                        continue;
                                    }
                            }
                            w !== null ? (w.return = d, M = w) : Cc(p);
                        }
                        c = c.sibling;
                    }
                    e: for(c = null, p = e;;){
                        if (p.tag === 5) {
                            if (c === null) {
                                c = p;
                                try {
                                    o = p.stateNode, u ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Ad("display", i));
                                } catch (m) {
                                    fe(e, e.return, m);
                                }
                            }
                        } else if (p.tag === 6) {
                            if (c === null) try {
                                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
                            } catch (m) {
                                fe(e, e.return, m);
                            }
                        } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                            p.child.return = p, p = p.child;
                            continue;
                        }
                        if (p === e) break e;
                        for(; p.sibling === null;){
                            if (p.return === null || p.return === e) break e;
                            c === p && (c = null), p = p.return;
                        }
                        c === p && (c = null), p.sibling.return = p.return, p = p.sibling;
                    }
                }
                break;
            case 19:
                st(t, e), vt(e), r & 4 && Sc(e);
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
                        if (fp(n)) {
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
                        r.flags & 32 && (qr(o, ""), r.flags &= -33);
                        var l = wc(e);
                        zs(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = wc(e);
                        Ns(e, s, i);
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
    function py(e, t, n) {
        M = e, mp(e);
    }
    function mp(e, t, n) {
        for(var r = (e.mode & 1) !== 0; M !== null;){
            var o = M, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || Vo;
                if (!i) {
                    var s = o.alternate, a = s !== null && s.memoizedState !== null || Re;
                    s = Vo;
                    var u = Re;
                    if (Vo = i, (Re = a) && !u) for(M = o; M !== null;)i = M, a = i.child, i.tag === 22 && i.memoizedState !== null ? _c(o) : a !== null ? (a.return = i, M = a) : _c(o);
                    for(; l !== null;)M = l, mp(l), l = l.sibling;
                    M = o, Vo = s, Re = u;
                }
                kc(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, M = l) : kc(e);
        }
    }
    function kc(e) {
        for(; M !== null;){
            var t = M;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Re || Hl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Re) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
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
                                        var p = c.dehydrated;
                                        p !== null && Jr(p);
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
                    Re || t.flags & 512 && Ps(t);
                } catch (d) {
                    fe(t, t.return, d);
                }
            }
            if (t === e) {
                M = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, M = n;
                break;
            }
            M = t.return;
        }
    }
    function Cc(e) {
        for(; M !== null;){
            var t = M;
            if (t === e) {
                M = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, M = n;
                break;
            }
            M = t.return;
        }
    }
    function _c(e) {
        for(; M !== null;){
            var t = M;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            Hl(4, t);
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
                            Ps(t);
                        } catch (a) {
                            fe(t, l, a);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Ps(t);
                        } catch (a) {
                            fe(t, i, a);
                        }
                }
            } catch (a) {
                fe(t, t.return, a);
            }
            if (t === e) {
                M = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, M = s;
                break;
            }
            M = t.return;
        }
    }
    var hy = Math.ceil, Pl = Dt.ReactCurrentDispatcher, Pa = Dt.ReactCurrentOwner, rt = Dt.ReactCurrentBatchConfig, W = 0, Se = null, ge = null, Ce = 0, Qe = 0, tr = an(0), xe = 0, co = null, Mn = 0, Wl = 0, Na = 0, Qr = null, Ae = null, za = 0, mr = 1 / 0, Rt = null, Nl = !1, Is = null, tn = null, Go = !1, Kt = null, zl = 0, Hr = 0, js = null, ol = -1, ll = 0;
    function Me() {
        return W & 6 ? me() : ol !== -1 ? ol : ol = me();
    }
    function nn(e) {
        return e.mode & 1 ? W & 2 && Ce !== 0 ? Ce & -Ce : Xg.transition !== null ? (ll === 0 && (ll = Zd()), ll) : (e = q, e !== 0 || (e = window.event, e = e === void 0 ? 16 : lf(e.type)), e) : 1;
    }
    function ht(e, t, n, r) {
        if (50 < Hr) throw Hr = 0, js = null, Error(R(185));
        go(e, n, r), (!(W & 2) || e !== Se) && (e === Se && (!(W & 2) && (Wl |= n), xe === 4 && Ht(e, Ce)), Ve(e, r), n === 1 && W === 0 && !(t.mode & 1) && (mr = me() + 500, Vl && un()));
    }
    function Ve(e, t) {
        var n = e.callbackNode;
        Xm(e, t);
        var r = pl(e, e === Se ? Ce : 0);
        if (r === 0) n !== null && Mu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Mu(n), t === 1) e.tag === 0 ? Yg(Ec.bind(null, e)) : Ef(Ec.bind(null, e)), Hg(function() {
                !(W & 6) && un();
            }), n = null;
            else {
                switch(Jd(r)){
                    case 1:
                        n = na;
                        break;
                    case 4:
                        n = Yd;
                        break;
                    case 16:
                        n = fl;
                        break;
                    case 536870912:
                        n = Xd;
                        break;
                    default:
                        n = fl;
                }
                n = Cp(n, gp.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function gp(e, t) {
        if (ol = -1, ll = 0, W & 6) throw Error(R(327));
        var n = e.callbackNode;
        if (ar() && e.callbackNode !== n) return null;
        var r = pl(e, e === Se ? Ce : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
        else {
            t = r;
            var o = W;
            W |= 2;
            var l = vp();
            (Se !== e || Ce !== t) && (Rt = null, mr = me() + 500, Rn(e, t));
            do try {
                yy();
                break;
            } catch (s) {
                yp(e, s);
            }
            while (!0);
            ma(), Pl.current = l, W = o, ge !== null ? t = 0 : (Se = null, Ce = 0, t = xe);
        }
        if (t !== 0) {
            if (t === 2 && (o = ls(e), o !== 0 && (r = o, t = Ms(e, o))), t === 1) throw n = co, Rn(e, 0), Ht(e, r), Ve(e, me()), n;
            if (t === 6) Ht(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !my(o) && (t = Il(e, r), t === 2 && (l = ls(e), l !== 0 && (r = l, t = Ms(e, l))), t === 1)) throw n = co, Rn(e, 0), Ht(e, r), Ve(e, me()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(R(345));
                    case 2:
                        kn(e, Ae, Rt);
                        break;
                    case 3:
                        if (Ht(e, r), (r & 130023424) === r && (t = za + 500 - me(), 10 < t)) {
                            if (pl(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Me(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ps(kn.bind(null, e, Ae, Rt), t);
                            break;
                        }
                        kn(e, Ae, Rt);
                        break;
                    case 4:
                        if (Ht(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - pt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = me() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hy(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ps(kn.bind(null, e, Ae, Rt), r);
                            break;
                        }
                        kn(e, Ae, Rt);
                        break;
                    case 5:
                        kn(e, Ae, Rt);
                        break;
                    default:
                        throw Error(R(329));
                }
            }
        }
        return Ve(e, me()), e.callbackNode === n ? gp.bind(null, e) : null;
    }
    function Ms(e, t) {
        var n = Qr;
        return e.current.memoizedState.isDehydrated && (Rn(e, t).flags |= 256), e = Il(e, t), e !== 2 && (t = Ae, Ae = n, t !== null && bs(t)), e;
    }
    function bs(e) {
        Ae === null ? Ae = e : Ae.push.apply(Ae, e);
    }
    function my(e) {
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
    function Ht(e, t) {
        for(t &= ~Na, t &= ~Wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - pt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Ec(e) {
        if (W & 6) throw Error(R(327));
        ar();
        var t = pl(e, 0);
        if (!(t & 1)) return Ve(e, me()), null;
        var n = Il(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ls(e);
            r !== 0 && (t = r, n = Ms(e, r));
        }
        if (n === 1) throw n = co, Rn(e, 0), Ht(e, t), Ve(e, me()), n;
        if (n === 6) throw Error(R(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, kn(e, Ae, Rt), Ve(e, me()), null;
    }
    function Ia(e, t) {
        var n = W;
        W |= 1;
        try {
            return e(t);
        } finally{
            W = n, W === 0 && (mr = me() + 500, Vl && un());
        }
    }
    function bn(e) {
        Kt !== null && Kt.tag === 0 && !(W & 6) && ar();
        var t = W;
        W |= 1;
        var n = rt.transition, r = q;
        try {
            if (rt.transition = null, q = 1, e) return e();
        } finally{
            q = r, rt.transition = n, W = t, !(W & 6) && un();
        }
    }
    function ja() {
        Qe = tr.current, ne(tr);
    }
    function Rn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Qg(n)), ge !== null) for(n = ge.return; n !== null;){
            var r = n;
            switch(fa(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && vl();
                    break;
                case 3:
                    pr(), ne(Ue), ne(Pe), Sa();
                    break;
                case 5:
                    wa(r);
                    break;
                case 4:
                    pr();
                    break;
                case 13:
                    ne(ae);
                    break;
                case 19:
                    ne(ae);
                    break;
                case 10:
                    ga(r.type._context);
                    break;
                case 22:
                case 23:
                    ja();
            }
            n = n.return;
        }
        if (Se = e, ge = e = rn(e.current, null), Ce = Qe = t, xe = 0, co = null, Na = Wl = Mn = 0, Ae = Qr = null, En !== null) {
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
    function yp(e, t) {
        do {
            var n = ge;
            try {
                if (ma(), tl.current = Rl, Tl) {
                    for(var r = ue.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Tl = !1;
                }
                if (jn = 0, we = ve = ue = null, Vr = !1, so = 0, Pa.current = null, n === null || n.return === null) {
                    xe = 1, co = t, ge = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, a = t;
                    if (t = Ce, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                        var u = a, c = s, p = c.tag;
                        if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
                            var d = c.alternate;
                            d ? (c.updateQueue = d.updateQueue, c.memoizedState = d.memoizedState, c.lanes = d.lanes) : (c.updateQueue = null, c.memoizedState = null);
                        }
                        var w = fc(i);
                        if (w !== null) {
                            w.flags &= -257, pc(w, i, s, l, t), w.mode & 1 && dc(l, u, t), t = w, a = u;
                            var v = t.updateQueue;
                            if (v === null) {
                                var m = new Set;
                                m.add(a), t.updateQueue = m;
                            } else v.add(a);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                dc(l, u, t), Ma();
                                break e;
                            }
                            a = Error(R(426));
                        }
                    } else if (ie && s.mode & 1) {
                        var C = fc(i);
                        if (C !== null) {
                            !(C.flags & 65536) && (C.flags |= 256), pc(C, i, s, l, t), pa(hr(a, s));
                            break e;
                        }
                    }
                    l = a = hr(a, s), xe !== 4 && (xe = 2), Qr === null ? Qr = [
                        l
                    ] : Qr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var g = ep(l, a, t);
                                lc(l, g);
                                break e;
                            case 1:
                                s = a;
                                var f = l.type, h = l.stateNode;
                                if (!(l.flags & 128) && (typeof f.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (tn === null || !tn.has(h)))) {
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
                t = E, ge === n && n !== null && (ge = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function vp() {
        var e = Pl.current;
        return Pl.current = Rl, e === null ? Rl : e;
    }
    function Ma() {
        (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Se === null || !(Mn & 268435455) && !(Wl & 268435455) || Ht(Se, Ce);
    }
    function Il(e, t) {
        var n = W;
        W |= 2;
        var r = vp();
        (Se !== e || Ce !== t) && (Rt = null, Rn(e, t));
        do try {
            gy();
            break;
        } catch (o) {
            yp(e, o);
        }
        while (!0);
        if (ma(), W = n, Pl.current = r, ge !== null) throw Error(R(261));
        return Se = null, Ce = 0, xe;
    }
    function gy() {
        for(; ge !== null;)xp(ge);
    }
    function yy() {
        for(; ge !== null && !Bm();)xp(ge);
    }
    function xp(e) {
        var t = kp(e.alternate, e, Qe);
        e.memoizedProps = e.pendingProps, t === null ? wp(e) : ge = t, Pa.current = null;
    }
    function wp(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = cy(n, t), n !== null) {
                    n.flags &= 32767, ge = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    xe = 6, ge = null;
                    return;
                }
            } else if (n = uy(n, t, Qe), n !== null) {
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
        var r = q, o = rt.transition;
        try {
            rt.transition = null, q = 1, vy(e, t, n, r);
        } finally{
            rt.transition = o, q = r;
        }
        return null;
    }
    function vy(e, t, n, r) {
        do ar();
        while (Kt !== null);
        if (W & 6) throw Error(R(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(R(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Zm(e, l), e === Se && (ge = Se = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Go || (Go = !0, Cp(fl, function() {
            return ar(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = rt.transition, rt.transition = null;
            var i = q;
            q = 1;
            var s = W;
            W |= 4, Pa.current = null, fy(e, n), hp(n, e), Fg(ds), hl = !!cs, ds = cs = null, e.current = n, py(n), Vm(), W = s, q = i, rt.transition = l;
        } else e.current = n;
        if (Go && (Go = !1, Kt = e, zl = o), l = e.pendingLanes, l === 0 && (tn = null), Hm(n.stateNode), Ve(e, me()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Nl) throw Nl = !1, e = Is, Is = null, e;
        return zl & 1 && e.tag !== 0 && ar(), l = e.pendingLanes, l & 1 ? e === js ? Hr++ : (Hr = 0, js = e) : Hr = 0, un(), null;
    }
    function ar() {
        if (Kt !== null) {
            var e = Jd(zl), t = rt.transition, n = q;
            try {
                if (rt.transition = null, q = 16 > e ? 16 : e, Kt === null) var r = !1;
                else {
                    if (e = Kt, Kt = null, zl = 0, W & 6) throw Error(R(331));
                    var o = W;
                    for(W |= 4, M = e.current; M !== null;){
                        var l = M, i = l.child;
                        if (M.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var a = 0; a < s.length; a++){
                                    var u = s[a];
                                    for(M = u; M !== null;){
                                        var c = M;
                                        switch(c.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                Gr(8, c, l);
                                        }
                                        var p = c.child;
                                        if (p !== null) p.return = c, M = p;
                                        else for(; M !== null;){
                                            c = M;
                                            var d = c.sibling, w = c.return;
                                            if (dp(c), c === u) {
                                                M = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                d.return = w, M = d;
                                                break;
                                            }
                                            M = w;
                                        }
                                    }
                                }
                                var v = l.alternate;
                                if (v !== null) {
                                    var m = v.child;
                                    if (m !== null) {
                                        v.child = null;
                                        do {
                                            var C = m.sibling;
                                            m.sibling = null, m = C;
                                        }while (m !== null);
                                    }
                                }
                                M = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, M = i;
                        else e: for(; M !== null;){
                            if (l = M, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    Gr(9, l, l.return);
                            }
                            var g = l.sibling;
                            if (g !== null) {
                                g.return = l.return, M = g;
                                break e;
                            }
                            M = l.return;
                        }
                    }
                    var f = e.current;
                    for(M = f; M !== null;){
                        i = M;
                        var h = i.child;
                        if (i.subtreeFlags & 2064 && h !== null) h.return = i, M = h;
                        else e: for(i = f; M !== null;){
                            if (s = M, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hl(9, s);
                                }
                            } catch (E) {
                                fe(s, s.return, E);
                            }
                            if (s === i) {
                                M = null;
                                break e;
                            }
                            var S = s.sibling;
                            if (S !== null) {
                                S.return = s.return, M = S;
                                break e;
                            }
                            M = s.return;
                        }
                    }
                    if (W = o, un(), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                        _t.onPostCommitFiberRoot(Fl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                q = n, rt.transition = t;
            }
        }
        return !1;
    }
    function Tc(e, t, n) {
        t = hr(n, t), t = ep(e, t, 1), e = en(e, t, 1), t = Me(), e !== null && (go(e, 1, t), Ve(e, t));
    }
    function fe(e, t, n) {
        if (e.tag === 3) Tc(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Tc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (tn === null || !tn.has(r))) {
                    e = hr(n, e), e = tp(t, e, 1), t = en(t, e, 1), e = Me(), t !== null && (go(t, 1, e), Ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function xy(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (Ce & n) === n && (xe === 4 || xe === 3 && (Ce & 130023424) === Ce && 500 > me() - za ? Rn(e, 0) : Na |= n), Ve(e, t);
    }
    function Sp(e, t) {
        t === 0 && (e.mode & 1 ? (t = bo, bo <<= 1, !(bo & 130023424) && (bo = 4194304)) : t = 1);
        var n = Me();
        e = bt(e, t), e !== null && (go(e, t, n), Ve(e, n));
    }
    function wy(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), Sp(e, n);
    }
    function Sy(e, t) {
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
        r !== null && r.delete(t), Sp(e, n);
    }
    var kp;
    kp = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Ue.current) $e = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return $e = !1, ay(e, t, n);
            $e = !!(e.flags & 131072);
        }
        else $e = !1, ie && t.flags & 1048576 && Tf(t, Sl, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                rl(e, t), e = t.pendingProps;
                var o = cr(t, Pe.current);
                sr(t, n), o = Ca(null, t, r, e, o, n);
                var l = _a();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (l = !0, xl(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, va(t), o.updater = Ql, t.stateNode = o, o._reactInternals = t, ws(t, r, e, n), t = Cs(null, t, r, !0, l, n)) : (t.tag = 0, ie && l && da(t), Ie(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(rl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Cy(r), e = ut(r, e), o){
                        case 0:
                            t = ks(null, t, r, e, n);
                            break e;
                        case 1:
                            t = gc(null, t, r, e, n);
                            break e;
                        case 11:
                            t = hc(null, t, r, e, n);
                            break e;
                        case 14:
                            t = mc(null, t, r, ut(r.type, e), n);
                            break e;
                    }
                    throw Error(R(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), ks(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), gc(e, t, r, o, n);
            case 3:
                e: {
                    if (lp(t), e === null) throw Error(R(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, jf(e, t), _l(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = hr(Error(R(423)), t), t = yc(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = hr(Error(R(424)), t), t = yc(e, t, r, n, o);
                        break e;
                    } else for(He = Jt(t.stateNode.containerInfo.firstChild), We = t, ie = !0, ft = null, n = zf(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (dr(), r === o) {
                            t = Ot(e, t, n);
                            break e;
                        }
                        Ie(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Mf(t), e === null && ys(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, fs(r, o) ? i = null : l !== null && fs(r, l) && (t.flags |= 32), op(e, t), Ie(e, t, i, n), t.child;
            case 6:
                return e === null && ys(t), null;
            case 13:
                return ip(e, t, n);
            case 4:
                return xa(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fr(t, null, r, n) : Ie(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), hc(e, t, r, o, n);
            case 7:
                return Ie(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ie(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ie(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, ee(kl, r._currentValue), r._currentValue = i, l !== null) if (mt(l.value, i)) {
                        if (l.children === o.children && !Ue.current) {
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
                                        a = It(-1, n & -n), a.tag = 2;
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
                    Ie(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, sr(t, n), o = ot(o), r = r(o), t.flags |= 1, Ie(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), mc(e, t, r, o, n);
            case 15:
                return np(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), rl(e, t), t.tag = 1, Be(r) ? (e = !0, xl(t)) : e = !1, sr(t, n), Jf(t, r, o), ws(t, r, o, n), Cs(null, t, r, !0, e, n);
            case 19:
                return sp(e, t, n);
            case 22:
                return rp(e, t, n);
        }
        throw Error(R(156, t.tag));
    };
    function Cp(e, t) {
        return qd(e, t);
    }
    function ky(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function nt(e, t, n, r) {
        return new ky(e, t, n, r);
    }
    function ba(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Cy(e) {
        if (typeof e == "function") return ba(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Js) return 11;
            if (e === ea) return 14;
        }
        return 2;
    }
    function rn(e, t) {
        var n = e.alternate;
        return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function il(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") ba(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Qn:
                return Pn(n.children, o, l, t);
            case Zs:
                i = 8, o |= 8;
                break;
            case Gi:
                return e = nt(12, n, t, o | 2), e.elementType = Gi, e.lanes = l, e;
            case Qi:
                return e = nt(13, n, t, o), e.elementType = Qi, e.lanes = l, e;
            case Hi:
                return e = nt(19, n, t, o), e.elementType = Hi, e.lanes = l, e;
            case jd:
                return Kl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case zd:
                        i = 10;
                        break e;
                    case Id:
                        i = 9;
                        break e;
                    case Js:
                        i = 11;
                        break e;
                    case ea:
                        i = 14;
                        break e;
                    case Vt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(R(130, e == null ? e : typeof e, ""));
        }
        return t = nt(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function Pn(e, t, n, r) {
        return e = nt(7, e, r, t), e.lanes = n, e;
    }
    function Kl(e, t, n, r) {
        return e = nt(22, e, r, t), e.elementType = jd, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Di(e, t, n) {
        return e = nt(6, e, null, t), e.lanes = n, e;
    }
    function Li(e, t, n) {
        return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function _y(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yi(0), this.expirationTimes = yi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Oa(e, t, n, r, o, l, i, s, a) {
        return e = new _y(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = nt(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, va(l), e;
    }
    function Ey(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: Gn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function _p(e) {
        if (!e) return ln;
        e = e._reactInternals;
        e: {
            if (Dn(e) !== e || e.tag !== 1) throw Error(R(170));
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
            if (Be(n)) return _f(e, n, t);
        }
        return t;
    }
    function Ep(e, t, n, r, o, l, i, s, a) {
        return e = Oa(n, r, !0, e, o, l, i, s, a), e.context = _p(null), n = e.current, r = Me(), o = nn(n), l = It(r, o), l.callback = t ?? null, en(n, l, o), e.current.lanes = o, go(e, o, r), Ve(e, r), e;
    }
    function ql(e, t, n, r) {
        var o = t.current, l = Me(), i = nn(o);
        return n = _p(n), t.context === null ? t.context = n : t.pendingContext = n, t = It(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = en(o, t, i), e !== null && (ht(e, o, i, l), el(e, o, i)), i;
    }
    function jl(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Rc(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Da(e, t) {
        Rc(e, t), (e = e.alternate) && Rc(e, t);
    }
    function Ty() {
        return null;
    }
    var Tp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function La(e) {
        this._internalRoot = e;
    }
    Yl.prototype.render = La.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(R(409));
        ql(e, t, null, null);
    };
    Yl.prototype.unmount = La.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            bn(function() {
                ql(null, e, null, null);
            }), t[Mt] = null;
        }
    };
    function Yl(e) {
        this._internalRoot = e;
    }
    Yl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = nf();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
            Qt.splice(n, 0, e), n === 0 && of(e);
        }
    };
    function Fa(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Xl(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Pc() {}
    function Ry(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var u = jl(i);
                    l.call(u);
                };
            }
            var i = Ep(t, r, e, 0, null, !1, !1, "", Pc);
            return e._reactRootContainer = i, e[Mt] = i.current, no(e.nodeType === 8 ? e.parentNode : e), bn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = jl(a);
                s.call(u);
            };
        }
        var a = Oa(e, 0, !1, null, null, !1, !1, "", Pc);
        return e._reactRootContainer = a, e[Mt] = a.current, no(e.nodeType === 8 ? e.parentNode : e), bn(function() {
            ql(t, a, n, r);
        }), a;
    }
    function Zl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var a = jl(i);
                    s.call(a);
                };
            }
            ql(t, i, e, o);
        } else i = Ry(n, t, e, o, r);
        return jl(i);
    }
    ef = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = Dr(t.pendingLanes);
                    n !== 0 && (ra(t, n | 1), Ve(t, me()), !(W & 6) && (mr = me() + 500, un()));
                }
                break;
            case 13:
                bn(function() {
                    var r = bt(e, 1);
                    if (r !== null) {
                        var o = Me();
                        ht(r, e, 1, o);
                    }
                }), Da(e, 1);
        }
    };
    oa = function(e) {
        if (e.tag === 13) {
            var t = bt(e, 134217728);
            if (t !== null) {
                var n = Me();
                ht(t, e, 134217728, n);
            }
            Da(e, 134217728);
        }
    };
    tf = function(e) {
        if (e.tag === 13) {
            var t = nn(e), n = bt(e, t);
            if (n !== null) {
                var r = Me();
                ht(n, e, t, r);
            }
            Da(e, t);
        }
    };
    nf = function() {
        return q;
    };
    rf = function(e, t) {
        var n = q;
        try {
            return q = e, t();
        } finally{
            q = n;
        }
    };
    ns = function(e, t, n) {
        switch(t){
            case "input":
                if (qi(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = Bl(r);
                            if (!o) throw Error(R(90));
                            bd(r), qi(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Dd(e, n);
                break;
            case "select":
                t = n.value, t != null && rr(e, !!n.multiple, t, !1);
        }
    };
    Vd = Ia;
    Gd = bn;
    var Py = {
        usingClientEntryPoint: !1,
        Events: [
            vo,
            qn,
            Bl,
            Ud,
            Bd,
            Ia
        ]
    }, Ir = {
        findFiberByHostInstance: _n,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Ny = {
        bundleType: Ir.bundleType,
        version: Ir.version,
        rendererPackageName: Ir.rendererPackageName,
        rendererConfig: Ir.rendererConfig,
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
            return e = Wd(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ir.findFiberByHostInstance || Ty,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Qo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Qo.isDisabled && Qo.supportsFiber) try {
            Fl = Qo.inject(Ny), _t = Qo;
        } catch  {}
    }
    qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Py;
    qe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Fa(t)) throw Error(R(200));
        return Ey(e, t, null, n);
    };
    qe.createRoot = function(e, t) {
        if (!Fa(e)) throw Error(R(299));
        var n = !1, r = "", o = Tp;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Oa(e, 1, !1, null, null, n, !1, r, o), e[Mt] = t.current, no(e.nodeType === 8 ? e.parentNode : e), new La(t);
    };
    qe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(R(188)) : (e = Object.keys(e).join(","), Error(R(268, e)));
        return e = Wd(t), e = e === null ? null : e.stateNode, e;
    };
    qe.flushSync = function(e) {
        return bn(e);
    };
    qe.hydrate = function(e, t, n) {
        if (!Xl(t)) throw Error(R(200));
        return Zl(null, e, t, !0, n);
    };
    qe.hydrateRoot = function(e, t, n) {
        if (!Fa(e)) throw Error(R(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Tp;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ep(t, null, e, 1, n ?? null, o, !1, l, i), e[Mt] = t.current, no(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new Yl(t);
    };
    qe.render = function(e, t, n) {
        if (!Xl(t)) throw Error(R(200));
        return Zl(null, e, t, !1, n);
    };
    qe.unmountComponentAtNode = function(e) {
        if (!Xl(e)) throw Error(R(40));
        return e._reactRootContainer ? (bn(function() {
            Zl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Mt] = null;
            });
        }), !0) : !1;
    };
    qe.unstable_batchedUpdates = Ia;
    qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!Xl(n)) throw Error(R(200));
        if (e == null || e._reactInternals === void 0) throw Error(R(38));
        return Zl(e, t, n, !1, r);
    };
    qe.version = "18.3.1-next-f1338f8080-20240426";
    function Rp() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rp);
        } catch (e) {
            console.error(e);
        }
    }
    Rp(), Td.exports = qe;
    var zy = Td.exports, Nc = zy;
    Bi.createRoot = Nc.createRoot, Bi.hydrateRoot = Nc.hydrateRoot;
    const Iy = "modulepreload", jy = function(e) {
        return "/grid-draw/" + e;
    }, zc = {}, My = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((a)=>{
                if (a = jy(a), a in zc) return;
                zc[a] = !0;
                const u = a.endsWith(".css"), c = u ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${a}"]${c}`)) return;
                const p = document.createElement("link");
                if (p.rel = u ? "stylesheet" : Iy, u || (p.as = "script"), p.crossOrigin = "", p.href = a, s && p.setAttribute("nonce", s), document.head.appendChild(p), u) return new Promise((d, w)=>{
                    p.addEventListener("load", d), p.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${a}`)));
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
    }, Ic = (e)=>{
        let t;
        const n = new Set, r = (u, c)=>{
            const p = typeof u == "function" ? u(t) : u;
            if (!Object.is(p, t)) {
                const d = t;
                t = c ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((w)=>w(t, d));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>a,
            subscribe: (u)=>(n.add(u), ()=>n.delete(u))
        }, a = t = e(r, o, s);
        return s;
    }, by = (e)=>e ? Ic(e) : Ic, Oy = (e)=>e;
    function Dy(e, t = Oy) {
        const n = le.useSyncExternalStore(e.subscribe, le.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), le.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return le.useDebugValue(n), n;
    }
    const jc = (e)=>{
        const t = by(e), n = (r)=>Dy(t, r);
        return Object.assign(n, t), n;
    }, Pp = (e)=>e ? jc(e) : jc;
    function Ly(e) {
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
    function Ls(e) {
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
    function Ay(e, t) {
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
    function sl(e, t) {
        switch(Ay(e, t), t.kind){
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
                    for (const n of t.edits)sl(e, n);
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
                    ].reverse().map(Np)
                };
        }
    }
    function zp(e, t) {
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
                        const o = zp(e.edits[r], t.edits[r]);
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
    const $y = 100, Uy = 600;
    class By {
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
            this.undoStack.push(t), this.undoStack.length > $y && this.undoStack.shift(), this.redoStack = [], this.lastCoalesceKey = null;
        }
        commit(t, n, r) {
            if (sl(t, n), this.pending) {
                this.pending.push(n);
                return;
            }
            const o = r?.coalesceKey, l = r?.now ?? Date.now();
            if (o != null && o === this.lastCoalesceKey && this.undoStack.length > 0 && l - this.lastCommitTime <= Uy) {
                const i = this.undoStack[this.undoStack.length - 1], s = zp(i, n);
                if (s) {
                    this.undoStack[this.undoStack.length - 1] = s, this.redoStack = [], this.lastCommitTime = l;
                    return;
                }
            }
            this.record(n), this.lastCoalesceKey = o ?? null, this.lastCommitTime = l;
        }
        undoLast(t) {
            const n = this.undoStack.pop();
            return n ? (sl(t, Np(n)), this.redoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
        }
        redoLast(t) {
            const n = this.redoStack.pop();
            return n ? (sl(t, n), this.undoStack.push(n), this.lastCoalesceKey = null, !0) : !1;
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
    const at = new By;
    function bc(e, t) {
        const n = e.get_line(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3],
            color: n[4]
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
    function Lc(e, t) {
        const n = e.get_rect(t);
        return {
            r1: n[0],
            c1: n[1],
            r2: n[2],
            c2: n[3]
        };
    }
    function Fc(e, t) {
        const n = e.get_text(t);
        return {
            r: n[0],
            c: n[1],
            color: n[2],
            size: e.get_text_size(t),
            text: e.get_text_string(t)
        };
    }
    const Vy = [
        1,
        1.5,
        2,
        3,
        5
    ];
    function Fi(e) {
        return e.map((t)=>t.type === "cell" ? `c:${t.row},${t.col}` : `${t.type[0]}:${t.index}`).sort().join("|");
    }
    function Ip(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" || e.type === "text" && t.type === "text" ? e.index === t.index : !1;
    }
    function jp(e, t) {
        return t.some((n)=>Ip(n, e));
    }
    function Gy(e, t) {
        return jp(e, t) ? t : [
            ...t,
            e
        ];
    }
    function Qy(e, t) {
        return t.filter((n)=>!Ip(n, e));
    }
    function tt(e, t) {
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
    function Hy(e, t) {
        const n = tt(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    function Wr(e, t, n = {}) {
        const r = tt(t, e);
        if (!r) return null;
        const { minRow: o, minCol: l, maxRow: i, maxCol: s } = r, a = n.absolute ? 0 : o, u = n.absolute ? 0 : l, c = [], p = [], d = [], w = [];
        for (const v of t)if (v.type === "cell") c.push([
            v.row - a,
            v.col - u,
            e.get_cell_color(v.row, v.col)
        ]);
        else if (v.type === "line") {
            const m = e.get_line(v.index);
            p.push([
                m[0] - a,
                m[1] - u,
                m[2] - a,
                m[3] - u,
                m[4]
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
            w.push([
                m[0] - a,
                m[1] - u,
                m[2],
                e.get_text_size(v.index),
                e.get_text_string(v.index)
            ]);
        }
        return c.sort((v, m)=>v[0] - m[0] || v[1] - m[1]), {
            w: s - u + 1,
            h: i - a + 1,
            cells: c,
            lines: p,
            rects: d,
            texts: w
        };
    }
    function Ac(e) {
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
    const Fe = Pp((e, t)=>({
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
                    coalesceKey: `fill:${Fi(o)}`
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
                    coalesceKey: `outline:${Fi(o)}`
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
                    coalesceKey: `size:${Fi(o)}`
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
                const { selectedItems: r } = t(), o = Gy(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = Qy(n, r);
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
                for(let m = i; m <= s; m++)for(let C = a; C <= u; C++)r.get_cell(m, C) && c.push({
                    type: "cell",
                    row: m,
                    col: C
                });
                const p = r.get_line_count();
                for(let m = 0; m < p; m++)r.line_intersects_box(m, i, a, s, u) && c.push({
                    type: "line",
                    index: m
                });
                const d = r.get_rect_count();
                for(let m = 0; m < d; m++)r.rect_intersects_box(m, i, a, s, u) && c.push({
                    type: "rect",
                    index: m
                });
                const w = r.get_text_count();
                for(let m = 0; m < w; m++)r.text_intersects_box(m, i, a, s, u) && c.push({
                    type: "text",
                    index: m
                });
                let v = [
                    ...l
                ];
                for (const m of c)jp(m, v) || v.push(m);
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
                    const c = [], p = [], d = [];
                    for (const h of l)if (h.type === "cell") {
                        if (!r.get_cell(h.row, h.col)) continue;
                        const S = r.get_cell_color(h.row, h.col), E = h.row + a, P = h.col + u;
                        p.push({
                            kind: "setCellState",
                            row: h.row,
                            col: h.col,
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
                            col: P,
                            from: {
                                filled: r.get_cell(E, P),
                                color: r.get_cell_color(E, P)
                            },
                            to: {
                                filled: !0,
                                color: S
                            }
                        }), c.push({
                            type: "cell",
                            row: E,
                            col: P
                        });
                    }
                    const w = [], v = l.filter((h)=>h.type === "line");
                    for (const h of v)w.push({
                        kind: "moveLine",
                        idx: h.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "line",
                        index: h.index
                    });
                    const m = [], C = l.filter((h)=>h.type === "rect");
                    for (const h of C)m.push({
                        kind: "moveRect",
                        idx: h.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "rect",
                        index: h.index
                    });
                    const g = [], f = l.filter((h)=>h.type === "text");
                    for (const h of f)g.push({
                        kind: "moveText",
                        idx: h.index,
                        dRow: a,
                        dCol: u
                    }), c.push({
                        type: "text",
                        index: h.index
                    });
                    t().commitEdits([
                        ...p,
                        ...d,
                        ...w,
                        ...m,
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
                const { grid: r } = t(), o = r ? n.shape === "line" ? Dc(r, n.index) : Lc(r, n.index) : null;
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
                        to: Lc(r, o.index)
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
                const i = tt(l, o);
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
                const { cx: s, cy: a, startAngle: u } = i, c = Ac(Math.atan2(r - a, n - s) - u);
                if (o.render(), c === 0) {
                    t().renderSelection();
                    return;
                }
                const p = tt(l, o);
                if (!p) return;
                const d = Math.round((p.minRow + p.maxRow) / 2), w = Math.round((p.minCol + p.maxCol) / 2);
                for (const v of l)if (v.type === "cell") {
                    const m = xn(v.row, v.col, c, d, w);
                    o.preview_cell(m.r, m.c, o.get_cell_color(v.row, v.col));
                } else if (v.type === "line") {
                    const m = o.get_line(v.index);
                    if (m.length >= 5) {
                        const C = xn(m[0], m[1], c, d, w), g = xn(m[2], m[3], c, d, w);
                        o.preview_line(C.r, C.c, g.r, g.c, m[4]);
                    }
                } else if (v.type === "rect") {
                    const m = o.get_rect(v.index);
                    if (m.length >= 6) {
                        const C = xn(m[0], m[1], c, d, w), g = xn(m[2], m[3], c, d, w);
                        o.preview_rect(C.r, C.c, g.r, g.c, m[4], m[5]);
                    }
                } else if (v.type === "text") {
                    const m = o.get_text(v.index);
                    if (m.length >= 3) {
                        const C = xn(m[0], m[1], c, d, w);
                        o.preview_text(C.r, C.c, m[2], o.get_text_size(v.index), o.get_text_string(v.index));
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
                const { cx: s, cy: a, startAngle: u } = i, c = Ac(Math.atan2(r - a, n - s) - u), p = tt(l, o);
                if (c === 0 || !p) {
                    e({
                        selectMode: null,
                        rotateOrigin: null,
                        isSelecting: !1
                    }), t().renderSelection();
                    return;
                }
                const d = Math.round((p.minRow + p.maxRow) / 2), w = Math.round((p.minCol + p.maxCol) / 2), v = (h, S)=>xn(h, S, c, d, w), m = [], C = [], g = [], f = [];
                for (const h of l)if (h.type === "cell") {
                    if (!o.get_cell(h.row, h.col)) continue;
                    const S = o.get_cell_color(h.row, h.col), E = v(h.row, h.col);
                    m.push({
                        kind: "setCellState",
                        row: h.row,
                        col: h.col,
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
                    }), f.push({
                        type: "cell",
                        row: E.r,
                        col: E.c
                    });
                } else if (h.type === "line") {
                    const S = o.get_line(h.index);
                    if (S.length < 5) continue;
                    const E = v(S[0], S[1]), P = v(S[2], S[3]);
                    g.push({
                        kind: "setLineGeom",
                        idx: h.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: E.r,
                            c1: E.c,
                            r2: P.r,
                            c2: P.c
                        }
                    }), f.push({
                        type: "line",
                        index: h.index
                    });
                } else if (h.type === "rect") {
                    const S = o.get_rect(h.index);
                    if (S.length < 6) continue;
                    const E = v(S[0], S[1]), P = v(S[2], S[3]);
                    g.push({
                        kind: "setRectGeom",
                        idx: h.index,
                        from: {
                            r1: S[0],
                            c1: S[1],
                            r2: S[2],
                            c2: S[3]
                        },
                        to: {
                            r1: E.r,
                            c1: E.c,
                            r2: P.r,
                            c2: P.c
                        }
                    }), f.push({
                        type: "rect",
                        index: h.index
                    });
                } else if (h.type === "text") {
                    const S = o.get_text(h.index);
                    if (S.length < 3) continue;
                    const E = v(S[0], S[1]);
                    g.push({
                        kind: "moveText",
                        idx: h.index,
                        dRow: E.r - S[0],
                        dCol: E.c - S[1]
                    }), f.push({
                        type: "text",
                        index: h.index
                    });
                }
                e({
                    selectMode: null,
                    rotateOrigin: null,
                    isSelecting: !1
                }), t().commitEdits([
                    ...m,
                    ...C,
                    ...g
                ]), e({
                    selectedItems: f
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
                const o = Hy(r, n);
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
                let u = n.get_line_count(), c = n.get_rect_count(), p = n.get_text_count();
                for (const d of r.cells){
                    const w = s.row + d.relRow, v = s.col + d.relCol;
                    a.push({
                        kind: "setCellState",
                        row: w,
                        col: v,
                        from: {
                            filled: n.get_cell(w, v),
                            color: n.get_cell_color(w, v)
                        },
                        to: {
                            filled: !0,
                            color: d.color
                        }
                    }), l.push({
                        type: "cell",
                        row: w,
                        col: v
                    });
                }
                for (const d of r.lines){
                    const w = s.row + d.relR1, v = s.col + d.relC1, m = s.row + d.relR2, C = s.col + d.relC2;
                    a.push({
                        kind: "addLine",
                        idx: u,
                        line: {
                            r1: w,
                            c1: v,
                            r2: m,
                            c2: C,
                            color: d.color
                        }
                    }), l.push({
                        type: "line",
                        index: u
                    }), u++;
                }
                for (const d of r.rects){
                    const w = s.row + d.relR1, v = s.col + d.relC1, m = s.row + d.relR2, C = s.col + d.relC2;
                    a.push({
                        kind: "addRect",
                        idx: c,
                        rect: {
                            r1: w,
                            c1: v,
                            r2: m,
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
                    const w = s.row + d.relR, v = s.col + d.relC;
                    a.push({
                        kind: "addText",
                        idx: p,
                        text: {
                            r: w,
                            c: v,
                            color: d.color,
                            size: d.size,
                            text: d.text
                        }
                    }), l.push({
                        type: "text",
                        index: p
                    }), p++;
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
                    line: bc(n, u)
                });
                for (const u of i)a.push({
                    kind: "deleteRect",
                    idx: u,
                    rect: Oc(n, u)
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
                    selectedItems: [],
                    tool: "select"
                }), t().renderSelection();
            },
            captureSetInput: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n) return;
                const o = Wr(n, r);
                o && (e({
                    captureInput: o,
                    captureMode: "output",
                    selectedItems: []
                }), t().renderSelection());
            },
            buildTrainingExample: ()=>{
                const { grid: n, selectedItems: r, captureInput: o } = t();
                if (!n || !o) return null;
                const l = Wr(n, r);
                return l ? {
                    input: o,
                    output: l
                } : null;
            },
            finishTrainingCapture: ()=>{
                e({
                    captureMode: "idle",
                    captureInput: null,
                    selectedItems: []
                }), t().renderSelection();
            },
            cancelTrainingCapture: ()=>{
                e({
                    captureMode: "idle",
                    captureInput: null,
                    selectedItems: []
                }), t().renderSelection();
            },
            placeDesign: (n, r, o)=>{
                const { grid: l } = t();
                if (!l) return;
                const i = [], s = [];
                let a = l.get_line_count(), u = l.get_rect_count(), c = l.get_text_count();
                for (const [p, d, w] of n.cells ?? []){
                    const v = r + p, m = o + d;
                    i.push({
                        kind: "setCellState",
                        row: v,
                        col: m,
                        from: {
                            filled: l.get_cell(v, m),
                            color: l.get_cell_color(v, m)
                        },
                        to: {
                            filled: !0,
                            color: w
                        }
                    }), s.push({
                        type: "cell",
                        row: v,
                        col: m
                    });
                }
                for (const [p, d, w, v, m] of n.lines ?? [])i.push({
                    kind: "addLine",
                    idx: a,
                    line: {
                        r1: r + p,
                        c1: o + d,
                        r2: r + w,
                        c2: o + v,
                        color: m
                    }
                }), s.push({
                    type: "line",
                    index: a
                }), a++;
                for (const [p, d, w, v, m, C] of n.rects ?? [])i.push({
                    kind: "addRect",
                    idx: u,
                    rect: {
                        r1: r + p,
                        c1: o + d,
                        r2: r + w,
                        c2: o + v,
                        fill: m,
                        outline: C
                    }
                }), s.push({
                    type: "rect",
                    index: u
                }), u++;
                for (const p of n.texts ?? []){
                    const d = Array.isArray(p) ? {
                        r: p[0],
                        c: p[1],
                        color: p[2],
                        size: p[3],
                        text: p[4]
                    } : p;
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
                return n ? Wr(n, $c(n), {
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
                    })), a = Ly(s);
                if (!a) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const m of o)if (n.get_cell(m.row, m.col)) {
                    const C = n.get_cell_color(m.row, m.col), g = l[C] ?? "#000000";
                    i.push({
                        row: m.row - a.minRow,
                        col: m.col - a.minCol,
                        color: g
                    });
                }
                i.sort((m, C)=>m.row - C.row || m.col - C.col);
                const u = a.maxRow - a.minRow + 1, c = a.maxCol - a.minCol + 1, p = [], d = [];
                for (const m of i)m.color === "#000000" && (p.push(m.row), d.push(m.col));
                const w = p.map(()=>"1.0").join(", "), v = `import torch

indices = torch.tensor([[${p.join(", ")}], [${d.join(", ")}]])
values = torch.tensor([${w}])
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
                        const c = u.row, p = u.col, d = u.color;
                        if (typeof c != "number" || typeof p != "number") continue;
                        const w = o.row + c, v = o.col + p, m = l[d] ?? 0;
                        r.set_draw_color(m), r.set_cell(w, v, !0), s.push({
                            type: "cell",
                            row: w,
                            col: v
                        });
                    }
                    else for(let u = 0; u < i.length; u++){
                        const c = i[u];
                        if (Array.isArray(c)) for(let p = 0; p < c.length; p++){
                            const d = o.row + u, w = o.col + p, v = c[p];
                            if (v && typeof v == "object" && v.color) {
                                const m = l[v.color] ?? 0;
                                r.set_draw_color(m), r.set_cell(d, w, !0), s.push({
                                    type: "cell",
                                    row: d,
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
                            const p = o.row + a, d = o.col + c;
                            Number(u[c]) > .5 && (r.set_cell(p, d, !0), s.push({
                                type: "cell",
                                row: p,
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
                    rect: Oc(n, i)
                });
                for(let i = n.get_line_count() - 1; i >= 0; i--)o.push({
                    kind: "deleteLine",
                    idx: i,
                    line: bc(n, i)
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
                            const l = Ls(n.get_rect(o.index));
                            for (const i of l)n.draw_handle(i.r, i.c);
                        }
                    }
                    if (r.length > 0 && typeof n.draw_rotate_handle == "function") {
                        const o = tt(r, n);
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
        })), Uc = 4;
    function Wy(e) {
        const t = e.get_schema_version?.();
        (t !== Uc || !e.rects_consistent?.()) && (console.warn(`[grid-draw] WASM schema mismatch (got ${t}, expected ${Uc}) or inconsistent buffer; clearing to avoid corrupted rendering.`), e.clear());
    }
    function Ky(e, t, n) {
        const [r, o] = T.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = T.useRef(!1);
        return T.useEffect(()=>{
            if (l.current) return;
            const i = e.current;
            i && (l.current = !0, (async ()=>{
                try {
                    const s = await My(()=>import("./grid_draw_wasm.js"), []);
                    await s.default();
                    const a = s.GridCanvas.from_canvas(i, t, n);
                    Wy(a), Fe.getState().setGrid(a), o({
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
    const Mp = (...e)=>e.filter((t, n, r)=>!!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
    const qy = (e)=>e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const Yy = (e)=>e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r)=>r ? r.toUpperCase() : n.toLowerCase());
    const Bc = (e)=>{
        const t = Yy(e);
        return t.charAt(0).toUpperCase() + t.slice(1);
    };
    var Xy = {
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
    const Zy = (e)=>{
        for(const t in e)if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
        return !1;
    };
    const Jy = T.forwardRef(({ color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: l, iconNode: i, ...s }, a)=>T.createElement("svg", {
            ref: a,
            ...Xy,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? Number(n) * 24 / Number(t) : n,
            className: Mp("lucide", o),
            ...!l && !Zy(s) && {
                "aria-hidden": "true"
            },
            ...s
        }, [
            ...i.map(([u, c])=>T.createElement(u, c)),
            ...Array.isArray(l) ? l : [
                l
            ]
        ]));
    const bp = (e, t)=>{
        const n = T.forwardRef(({ className: r, ...o }, l)=>T.createElement(Jy, {
                ref: l,
                iconNode: t,
                className: Mp(`lucide-${qy(Bc(e))}`, `lucide-${e}`, r),
                ...o
            }));
        return n.displayName = Bc(e), n;
    };
    const ev = [
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
    ], tv = bp("redo-2", ev);
    const nv = [
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
    ], rv = bp("undo-2", nv);
    function Op(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Op(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Dp() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Op(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Vc = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Gc = Dp, Lp = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Gc(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((u)=>{
                const c = n?.[u], p = l?.[u];
                if (c === null) return null;
                const d = Vc(c) || Vc(p);
                return o[u][d];
            }), s = n && Object.entries(n).reduce((u, c)=>{
                let [p, d] = c;
                return d === void 0 || (u[p] = d), u;
            }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c)=>{
                let { class: p, className: d, ...w } = c;
                return Object.entries(w).every((v)=>{
                    let [m, C] = v;
                    return Array.isArray(C) ? C.includes({
                        ...l,
                        ...s
                    }[m]) : {
                        ...l,
                        ...s
                    }[m] === C;
                }) ? [
                    ...u,
                    p,
                    d
                ] : u;
            }, []);
            return Gc(e, i, a, n?.class, n?.className);
        };
    function Qc(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function Fp(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Qc(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Qc(e[o], null);
                }
            };
        };
    }
    function Fs(...e) {
        return T.useCallback(Fp(...e), e);
    }
    function Ml(e) {
        const t = lv(e), n = T.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = T.Children.toArray(l), a = s.find(sv);
            if (a) {
                const u = a.props.children, c = s.map((p)=>p === a ? T.Children.count(u) > 1 ? T.Children.only(null) : T.isValidElement(u) ? u.props.children : null : p);
                return y.jsx(t, {
                    ...i,
                    ref: o,
                    children: T.isValidElement(u) ? T.cloneElement(u, void 0, c) : null
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
    var ov = Ml("Slot");
    function lv(e) {
        const t = T.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (T.isValidElement(o)) {
                const i = uv(o), s = av(l, o.props);
                return o.type !== T.Fragment && (s.ref = r ? Fp(r, i) : i), T.cloneElement(o, s);
            }
            return T.Children.count(o) > 1 ? T.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var iv = Symbol("radix.slottable");
    function sv(e) {
        return T.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === iv;
    }
    function av(e, t) {
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
    function uv(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var cv = [
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
    ], fo = cv.reduce((e, t)=>{
        const n = Ml(`Primitive.${t}`), r = T.forwardRef((o, l)=>{
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
            const s = T.createContext(i), a = n.length;
            n = [
                ...n,
                i
            ];
            const u = (p)=>{
                const { scope: d, children: w, ...v } = p, m = d?.[e]?.[a] || s, C = T.useMemo(()=>v, Object.values(v));
                return y.jsx(m.Provider, {
                    value: C,
                    children: w
                });
            };
            u.displayName = l + "Provider";
            function c(p, d) {
                const w = d?.[e]?.[a] || s, v = T.useContext(w);
                if (v) return v;
                if (i !== void 0) return i;
                throw new Error(`\`${p}\` must be used within \`${l}\``);
            }
            return [
                u,
                c
            ];
        }
        const o = ()=>{
            const l = n.map((i)=>T.createContext(i));
            return function(s) {
                const a = s?.[e] || l;
                return T.useMemo(()=>({
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
            dv(o, ...t)
        ];
    }
    function dv(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: a, scopeName: u })=>{
                    const p = a(l)[`__scope${u}`];
                    return {
                        ...s,
                        ...p
                    };
                }, {});
                return T.useMemo(()=>({
                        [`__scope${t.scopeName}`]: i
                    }), [
                    i
                ]);
            };
        };
        return n.scopeName = t.scopeName, n;
    }
    function fv(e) {
        const t = e + "CollectionProvider", [n, r] = Aa(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (m)=>{
            const { scope: C, children: g } = m, f = le.useRef(null), h = le.useRef(new Map).current;
            return y.jsx(o, {
                scope: C,
                itemMap: h,
                collectionRef: f,
                children: g
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", a = Ml(s), u = le.forwardRef((m, C)=>{
            const { scope: g, children: f } = m, h = l(s, g), S = Fs(C, h.collectionRef);
            return y.jsx(a, {
                ref: S,
                children: f
            });
        });
        u.displayName = s;
        const c = e + "CollectionItemSlot", p = "data-radix-collection-item", d = Ml(c), w = le.forwardRef((m, C)=>{
            const { scope: g, children: f, ...h } = m, S = le.useRef(null), E = Fs(C, S), P = l(c, g);
            return le.useEffect(()=>(P.itemMap.set(S, {
                    ref: S,
                    ...h
                }), ()=>void P.itemMap.delete(S))), y.jsx(d, {
                [p]: "",
                ref: E,
                children: f
            });
        });
        w.displayName = c;
        function v(m) {
            const C = l(e + "CollectionConsumer", m);
            return le.useCallback(()=>{
                const f = C.collectionRef.current;
                if (!f) return [];
                const h = Array.from(f.querySelectorAll(`[${p}]`));
                return Array.from(C.itemMap.values()).sort((P, I)=>h.indexOf(P.ref.current) - h.indexOf(I.ref.current));
            }, [
                C.collectionRef,
                C.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: u,
                ItemSlot: w
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
    var Ap = globalThis?.document ? T.useLayoutEffect : ()=>{}, pv = _d[" useInsertionEffect ".trim().toString()] || Ap;
    function Jl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = hv({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, a = s ? e : o;
        {
            const c = T.useRef(e !== void 0);
            T.useEffect(()=>{
                const p = c.current;
                p !== s && console.warn(`${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = s;
            }, [
                s,
                r
            ]);
        }
        const u = T.useCallback((c)=>{
            if (s) {
                const p = mv(c) ? c(e) : c;
                p !== e && i.current?.(p);
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
    function hv({ defaultProp: e, onChange: t }) {
        const [n, r] = T.useState(e), o = T.useRef(n), l = T.useRef(t);
        return pv(()=>{
            l.current = t;
        }, [
            t
        ]), T.useEffect(()=>{
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
    function mv(e) {
        return typeof e == "function";
    }
    var gv = _d[" useId ".trim().toString()] || (()=>{}), yv = 0;
    function vv(e) {
        const [t, n] = T.useState(gv());
        return Ap(()=>{
            n((r)=>r ?? String(yv++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var xv = T.createContext(void 0);
    function $p(e) {
        const t = T.useContext(xv);
        return e || t || "ltr";
    }
    function wv(e) {
        const t = T.useRef(e);
        return T.useEffect(()=>{
            t.current = e;
        }), T.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Ai = "rovingFocusGroup.onEntryFocus", Sv = {
        bubbles: !1,
        cancelable: !0
    }, wo = "RovingFocusGroup", [As, Up, kv] = fv(wo), [Cv, Bp] = Aa(wo, [
        kv
    ]), [_v, Ev] = Cv(wo), Vp = T.forwardRef((e, t)=>y.jsx(As.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: y.jsx(As.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: y.jsx(Tv, {
                    ...e,
                    ref: t
                })
            })
        }));
    Vp.displayName = wo;
    var Tv = T.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: a, onEntryFocus: u, preventScrollOnEntryFocus: c = !1, ...p } = e, d = T.useRef(null), w = Fs(t, d), v = $p(l), [m, C] = Jl({
            prop: i,
            defaultProp: s ?? null,
            onChange: a,
            caller: wo
        }), [g, f] = T.useState(!1), h = wv(u), S = Up(n), E = T.useRef(!1), [P, I] = T.useState(0);
        return T.useEffect(()=>{
            const _ = d.current;
            if (_) return _.addEventListener(Ai, h), ()=>_.removeEventListener(Ai, h);
        }, [
            h
        ]), y.jsx(_v, {
            scope: n,
            orientation: r,
            dir: v,
            loop: o,
            currentTabStopId: m,
            onItemFocus: T.useCallback((_)=>C(_), [
                C
            ]),
            onItemShiftTab: T.useCallback(()=>f(!0), []),
            onFocusableItemAdd: T.useCallback(()=>I((_)=>_ + 1), []),
            onFocusableItemRemove: T.useCallback(()=>I((_)=>_ - 1), []),
            children: y.jsx(fo.div, {
                tabIndex: g || P === 0 ? -1 : 0,
                "data-orientation": r,
                ...p,
                ref: w,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: Nn(e.onMouseDown, ()=>{
                    E.current = !0;
                }),
                onFocus: Nn(e.onFocus, (_)=>{
                    const B = !E.current;
                    if (_.target === _.currentTarget && B && !g) {
                        const A = new CustomEvent(Ai, Sv);
                        if (_.currentTarget.dispatchEvent(A), !A.defaultPrevented) {
                            const pe = S().filter((X)=>X.focusable), Ne = pe.find((X)=>X.active), Ge = pe.find((X)=>X.id === m), $ = [
                                Ne,
                                Ge,
                                ...pe
                            ].filter(Boolean).map((X)=>X.ref.current);
                            Hp($, c);
                        }
                    }
                    E.current = !1;
                }),
                onBlur: Nn(e.onBlur, ()=>f(!1))
            })
        });
    }), Gp = "RovingFocusGroupItem", Qp = T.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, a = vv(), u = l || a, c = Ev(Gp, n), p = c.currentTabStopId === u, d = Up(n), { onFocusableItemAdd: w, onFocusableItemRemove: v, currentTabStopId: m } = c;
        return T.useEffect(()=>{
            if (r) return w(), ()=>v();
        }, [
            r,
            w,
            v
        ]), y.jsx(As.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: y.jsx(fo.span, {
                tabIndex: p ? 0 : -1,
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
                    const g = Nv(C, c.orientation, c.dir);
                    if (g !== void 0) {
                        if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey) return;
                        C.preventDefault();
                        let h = d().filter((S)=>S.focusable).map((S)=>S.ref.current);
                        if (g === "last") h.reverse();
                        else if (g === "prev" || g === "next") {
                            g === "prev" && h.reverse();
                            const S = h.indexOf(C.currentTarget);
                            h = c.loop ? zv(h, S + 1) : h.slice(S + 1);
                        }
                        setTimeout(()=>Hp(h));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: p,
                    hasTabStop: m != null
                }) : i
            })
        });
    });
    Qp.displayName = Gp;
    var Rv = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function Pv(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function Nv(e, t, n) {
        const r = Pv(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return Rv[r];
    }
    function Hp(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function zv(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Iv = Vp, jv = Qp, Wp = "Toggle", Kp = T.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = Jl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Wp
        });
        return y.jsx(fo.button, {
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
    Kp.displayName = Wp;
    var cn = "ToggleGroup", [qp] = Aa(cn, [
        Bp
    ]), Yp = Bp(), $a = le.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return y.jsx(Mv, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return y.jsx(bv, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${cn}\``);
    });
    $a.displayName = cn;
    var [Xp, Zp] = qp(cn), Mv = le.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Jl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: cn
        });
        return y.jsx(Xp, {
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
            children: y.jsx(Jp, {
                ...l,
                ref: t
            })
        });
    }), bv = le.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = Jl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: cn
        }), a = le.useCallback((c)=>s((p = [])=>[
                    ...p,
                    c
                ]), [
            s
        ]), u = le.useCallback((c)=>s((p = [])=>p.filter((d)=>d !== c)), [
            s
        ]);
        return y.jsx(Xp, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: a,
            onItemDeactivate: u,
            children: y.jsx(Jp, {
                ...l,
                ref: t
            })
        });
    });
    $a.displayName = cn;
    var [Ov, Dv] = qp(cn), Jp = le.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...a } = e, u = Yp(n), c = $p(i), p = {
            role: "group",
            dir: c,
            ...a
        };
        return y.jsx(Ov, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? y.jsx(Iv, {
                asChild: !0,
                ...u,
                orientation: l,
                dir: c,
                loop: s,
                children: y.jsx(fo.div, {
                    ...p,
                    ref: t
                })
            }) : y.jsx(fo.div, {
                ...p,
                ref: t
            })
        });
    }), bl = "ToggleGroupItem", eh = le.forwardRef((e, t)=>{
        const n = Zp(bl, e.__scopeToggleGroup), r = Dv(bl, e.__scopeToggleGroup), o = Yp(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, a = le.useRef(null);
        return r.rovingFocus ? y.jsx(jv, {
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
    eh.displayName = bl;
    var Hc = le.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = Zp(bl, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return y.jsx(Kp, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (a)=>{
                a ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Lv = $a, Fv = eh;
    const Av = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, $v = (e, t)=>({
            classGroupId: e,
            validator: t
        }), th = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Ol = "-", Wc = [], Uv = "arbitrary..", Bv = (e)=>{
        const t = Gv(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return Vv(i);
                const s = i.split(Ol), a = s[0] === "" && s.length > 1 ? 1 : 0;
                return nh(s, a, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const a = r[i], u = n[i];
                    return a ? u ? Av(u, a) : a : u || Wc;
                }
                return n[i] || Wc;
            }
        };
    }, nh = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const u = nh(e, t + 1, l);
            if (u) return u;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Ol) : e.slice(t).join(Ol), a = i.length;
        for(let u = 0; u < a; u++){
            const c = i[u];
            if (c.validator(s)) return c.classGroupId;
        }
    }, Vv = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Uv + r : void 0;
        })(), Gv = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Qv(n, t);
    }, Qv = (e, t)=>{
        const n = th();
        for(const r in e){
            const o = e[r];
            Ua(o, n, r, t);
        }
        return n;
    }, Ua = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Hv(i, t, n, r);
        }
    }, Hv = (e, t, n, r)=>{
        if (typeof e == "string") {
            Wv(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Kv(e, t, n, r);
            return;
        }
        qv(e, t, n, r);
    }, Wv = (e, t, n)=>{
        const r = e === "" ? t : rh(t, e);
        r.classGroupId = n;
    }, Kv = (e, t, n, r)=>{
        if (Yv(e)) {
            Ua(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push($v(n, e));
    }, qv = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, a] = o[i];
            Ua(a, rh(t, s), n, r);
        }
    }, rh = (e, t)=>{
        let n = e;
        const r = t.split(Ol), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = th(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Yv = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Xv = (e)=>{
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
    }, $s = "!", Kc = ":", Zv = [], qc = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Jv = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, a = 0, u;
            const c = o.length;
            for(let m = 0; m < c; m++){
                const C = o[m];
                if (i === 0 && s === 0) {
                    if (C === Kc) {
                        l.push(o.slice(a, m)), a = m + 1;
                        continue;
                    }
                    if (C === "/") {
                        u = m;
                        continue;
                    }
                }
                C === "[" ? i++ : C === "]" ? i-- : C === "(" ? s++ : C === ")" && s--;
            }
            const p = l.length === 0 ? o : o.slice(a);
            let d = p, w = !1;
            p.endsWith($s) ? (d = p.slice(0, -1), w = !0) : p.startsWith($s) && (d = p.slice(1), w = !0);
            const v = u && u > a ? u - a : void 0;
            return qc(l, w, d, v);
        };
        if (t) {
            const o = t + Kc, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : qc(Zv, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, ex = (e)=>{
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
    }, tx = (e)=>({
            cache: Xv(e.cacheSize),
            parseClassName: Jv(e),
            sortModifiers: ex(e),
            ...Bv(e)
        }), nx = /\s+/, rx = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(nx);
        let a = "";
        for(let u = s.length - 1; u >= 0; u -= 1){
            const c = s[u], { isExternal: p, modifiers: d, hasImportantModifier: w, baseClassName: v, maybePostfixModifierPosition: m } = n(c);
            if (p) {
                a = c + (a.length > 0 ? " " + a : a);
                continue;
            }
            let C = !!m, g = r(C ? v.substring(0, m) : v);
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
            const f = d.length === 0 ? "" : d.length === 1 ? d[0] : l(d).join(":"), h = w ? f + $s : f, S = h + g;
            if (i.indexOf(S) > -1) continue;
            i.push(S);
            const E = o(g, C);
            for(let P = 0; P < E.length; ++P){
                const I = E[P];
                i.push(h + I);
            }
            a = c + (a.length > 0 ? " " + a : a);
        }
        return a;
    }, ox = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = oh(n)) && (o && (o += " "), o += r);
        return o;
    }, oh = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = oh(e[r])) && (n && (n += " "), n += t);
        return n;
    }, lx = (e, ...t)=>{
        let n, r, o, l;
        const i = (a)=>{
            const u = t.reduce((c, p)=>p(c), e());
            return n = tx(u), r = n.cache.get, o = n.cache.set, l = s, s(a);
        }, s = (a)=>{
            const u = r(a);
            if (u) return u;
            const c = rx(a, n);
            return o(a, c), c;
        };
        return l = i, (...a)=>l(ox(...a));
    }, ix = [], ye = (e)=>{
        const t = (n)=>n[e] || ix;
        return t.isThemeGetter = !0, t;
    }, lh = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ih = /^\((?:(\w[\w-]*):)?(.+)\)$/i, sx = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, ax = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ux = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, cx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, dx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ut = (e)=>sx.test(e), V = (e)=>!!e && !Number.isNaN(Number(e)), Bt = (e)=>!!e && Number.isInteger(Number(e)), $i = (e)=>e.endsWith("%") && V(e.slice(0, -1)), Tt = (e)=>ax.test(e), sh = ()=>!0, px = (e)=>ux.test(e) && !cx.test(e), Ba = ()=>!1, hx = (e)=>dx.test(e), mx = (e)=>fx.test(e), gx = (e)=>!O(e) && !D(e), yx = (e)=>dn(e, ch, Ba), O = (e)=>lh.test(e), wn = (e)=>dn(e, dh, px), Yc = (e)=>dn(e, Ex, V), vx = (e)=>dn(e, ph, sh), xx = (e)=>dn(e, fh, Ba), Xc = (e)=>dn(e, ah, Ba), wx = (e)=>dn(e, uh, mx), Ho = (e)=>dn(e, hh, hx), D = (e)=>ih.test(e), jr = (e)=>Ln(e, dh), Sx = (e)=>Ln(e, fh), Zc = (e)=>Ln(e, ah), kx = (e)=>Ln(e, ch), Cx = (e)=>Ln(e, uh), Wo = (e)=>Ln(e, hh, !0), _x = (e)=>Ln(e, ph, !0), dn = (e, t, n)=>{
        const r = lh.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, Ln = (e, t, n = !1)=>{
        const r = ih.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, ah = (e)=>e === "position" || e === "percentage", uh = (e)=>e === "image" || e === "url", ch = (e)=>e === "length" || e === "size" || e === "bg-size", dh = (e)=>e === "length", Ex = (e)=>e === "number", fh = (e)=>e === "family-name", ph = (e)=>e === "number" || e === "weight", hh = (e)=>e === "shadow", Tx = ()=>{
        const e = ye("color"), t = ye("font"), n = ye("text"), r = ye("font-weight"), o = ye("tracking"), l = ye("leading"), i = ye("breakpoint"), s = ye("container"), a = ye("spacing"), u = ye("radius"), c = ye("shadow"), p = ye("inset-shadow"), d = ye("text-shadow"), w = ye("drop-shadow"), v = ye("blur"), m = ye("perspective"), C = ye("aspect"), g = ye("ease"), f = ye("animate"), h = ()=>[
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
                D,
                O
            ], P = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], I = ()=>[
                "auto",
                "contain",
                "none"
            ], _ = ()=>[
                D,
                O,
                a
            ], B = ()=>[
                Ut,
                "full",
                "auto",
                ..._()
            ], A = ()=>[
                Bt,
                "none",
                "subgrid",
                D,
                O
            ], pe = ()=>[
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
            ], Ne = ()=>[
                Bt,
                "auto",
                D,
                O
            ], Ge = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                D,
                O
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
            ], $ = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], X = ()=>[
                "auto",
                ..._()
            ], De = ()=>[
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
                ..._()
            ], j = ()=>[
                Ut,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ..._()
            ], F = ()=>[
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
                ..._()
            ], z = ()=>[
                e,
                D,
                O
            ], Y = ()=>[
                ...S(),
                Zc,
                Xc,
                {
                    position: [
                        D,
                        O
                    ]
                }
            ], U = ()=>[
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
            ], ze = ()=>[
                "auto",
                "cover",
                "contain",
                kx,
                yx,
                {
                    size: [
                        D,
                        O
                    ]
                }
            ], Le = ()=>[
                $i,
                jr,
                wn
            ], re = ()=>[
                "",
                "none",
                "full",
                u,
                D,
                O
            ], Z = ()=>[
                "",
                V,
                jr,
                wn
            ], Xe = ()=>[
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
            ], he = ()=>[
                V,
                $i,
                Zc,
                Xc
            ], fn = ()=>[
                "",
                "none",
                v,
                D,
                O
            ], pn = ()=>[
                "none",
                V,
                D,
                O
            ], hn = ()=>[
                "none",
                V,
                D,
                O
            ], Fn = ()=>[
                V,
                D,
                O
            ], mn = ()=>[
                Ut,
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
                    Tt
                ],
                breakpoint: [
                    Tt
                ],
                color: [
                    sh
                ],
                container: [
                    Tt
                ],
                "drop-shadow": [
                    Tt
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    gx
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
                    Tt
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
                    Tt
                ],
                shadow: [
                    Tt
                ],
                spacing: [
                    "px",
                    V
                ],
                text: [
                    Tt
                ],
                "text-shadow": [
                    Tt
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
                            O,
                            D,
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
                            O,
                            D,
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
                        object: E()
                    }
                ],
                overflow: [
                    {
                        overflow: P()
                    }
                ],
                "overflow-x": [
                    {
                        "overflow-x": P()
                    }
                ],
                "overflow-y": [
                    {
                        "overflow-y": P()
                    }
                ],
                overscroll: [
                    {
                        overscroll: I()
                    }
                ],
                "overscroll-x": [
                    {
                        "overscroll-x": I()
                    }
                ],
                "overscroll-y": [
                    {
                        "overscroll-y": I()
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
                            D,
                            O
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
                            Ut,
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
                            V,
                            D,
                            O
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            V,
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
                        "grid-cols": A()
                    }
                ],
                "col-start-end": [
                    {
                        col: pe()
                    }
                ],
                "col-start": [
                    {
                        "col-start": Ne()
                    }
                ],
                "col-end": [
                    {
                        "col-end": Ne()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": A()
                    }
                ],
                "row-start-end": [
                    {
                        row: pe()
                    }
                ],
                "row-start": [
                    {
                        "row-start": Ne()
                    }
                ],
                "row-end": [
                    {
                        "row-end": Ne()
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
                            ...yt(),
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
                            ...yt()
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
                        "place-content": yt()
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
                        size: De()
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
                            _x,
                            vx
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
                            $i,
                            O
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            Sx,
                            xx,
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
                            V,
                            "none",
                            D,
                            Yc
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
                            ...Xe(),
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
                            D,
                            wn
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
                            V,
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
                        bg: U()
                    }
                ],
                "bg-size": [
                    {
                        bg: ze()
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
                            Cx,
                            wx
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
                        from: Le()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Le()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Le()
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
                        rounded: re()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": re()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": re()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": re()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": re()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": re()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": re()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": re()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": re()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": re()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": re()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": re()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": re()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": re()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": re()
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
                            ...Xe(),
                            "hidden",
                            "none"
                        ]
                    }
                ],
                "divide-style": [
                    {
                        divide: [
                            ...Xe(),
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
                            ...Xe(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            V,
                            jr,
                            wn
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
                            Wo,
                            Ho
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
                            p,
                            Wo,
                            Ho
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
                            V,
                            wn
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
                            Wo,
                            Ho
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
                            V,
                            D,
                            O
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
                        "mask-linear-from": he()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": he()
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
                        "mask-t-from": he()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": he()
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
                        "mask-r-from": he()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": he()
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
                        "mask-b-from": he()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": he()
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
                        "mask-l-from": he()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": he()
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
                        "mask-x-from": he()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": he()
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
                        "mask-y-from": he()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": he()
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
                            D,
                            O
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": he()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": he()
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
                            V
                        ]
                    }
                ],
                "mask-image-conic-from-pos": [
                    {
                        "mask-conic-from": he()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": he()
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
                        mask: Y()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: U()
                    }
                ],
                "mask-size": [
                    {
                        mask: ze()
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
                            V,
                            D,
                            O
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            V,
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
                            w,
                            Wo,
                            Ho
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
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            V,
                            D,
                            O
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            V,
                            D,
                            O
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            V,
                            D,
                            O
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            V,
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
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            V,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            V,
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
                            V,
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
                            V,
                            D,
                            O
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            f,
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
                            m,
                            D,
                            O
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
                        scale: hn()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": hn()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": hn()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": hn()
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
                            ...z()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            V,
                            jr,
                            wn,
                            Yc
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
    }, Rx = lx(Tx);
    function qt(...e) {
        return Rx(Dp(e));
    }
    const Px = Lp("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
        const l = r ? ov : "button";
        return y.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: qt(Px({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const Nx = Lp("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), mh = T.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Jc({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return y.jsx(Lv, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: qt("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: y.jsx(mh.Provider, {
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
        const l = T.useContext(mh);
        return y.jsx(Fv, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: qt(Nx({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function nr({ title: e, defaultPosition: t, children: n, className: r, onClose: o }) {
        const [l, i] = T.useState(t), s = T.useRef(!1), a = T.useRef({
            x: 0,
            y: 0
        }), u = T.useCallback((c)=>{
            s.current = !0, a.current = {
                x: c.clientX - l.x,
                y: c.clientY - l.y
            };
            const p = (w)=>{
                if (!s.current) return;
                const v = Math.max(0, w.clientX - a.current.x), m = Math.max(0, w.clientY - a.current.y);
                i({
                    x: v,
                    y: m
                });
            }, d = ()=>{
                s.current = !1, window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", d);
            };
            window.addEventListener("mousemove", p), window.addEventListener("mouseup", d);
        }, [
            l
        ]);
        return y.jsxs("div", {
            className: qt("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
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
    const zx = [
        "#000000",
        "#ffffff",
        "#cc3333",
        "#ffcc00",
        "#2266dd",
        "#22aa22",
        null
    ];
    function Mr(e) {
        return zx[e] ?? "#000000";
    }
    function Ix(e, t, n = {}) {
        const r = n.maxSize ?? 96, o = n.padding ?? 2, l = n.background === void 0 ? "#ffffff" : n.background, i = Math.max(1, t.w || 1), s = Math.max(1, t.h || 1), a = Math.max(1, Math.floor((r - o * 2) / Math.max(i, s))), u = i * a + o * 2, c = s * a + o * 2;
        e.width = u, e.height = c;
        const p = e.getContext("2d");
        if (p) {
            l && (p.fillStyle = l, p.fillRect(0, 0, u, c)), p.translate(o, o);
            for (const [d, w, v] of t.cells ?? []){
                const m = Mr(v);
                m && (p.fillStyle = m, p.fillRect(w * a, d * a, a, a));
            }
            for (const [d, w, v, m, C, g] of t.rects ?? []){
                const f = Math.min(w, m) * a, h = Math.min(d, v) * a, S = Math.abs(m - w) * a, E = Math.abs(v - d) * a, P = Mr(C);
                P && (p.fillStyle = P, p.fillRect(f, h, S, E));
                const I = Mr(g);
                I && (p.strokeStyle = I, p.lineWidth = Math.max(1, a / 8), p.strokeRect(f, h, S, E));
            }
            for (const [d, w, v, m, C] of t.lines ?? []){
                const g = Mr(C);
                g && (p.strokeStyle = g, p.lineWidth = Math.max(1, a / 6), p.beginPath(), p.moveTo(w * a, d * a), p.lineTo(m * a, v * a), p.stroke());
            }
            p.textBaseline = "alphabetic";
            for (const d of t.texts ?? []){
                const w = Array.isArray(d) ? {
                    r: d[0],
                    c: d[1],
                    color: d[2],
                    size: d[3],
                    text: d[4]
                } : d;
                !w || typeof w.r != "number" || typeof w.c != "number" || (p.fillStyle = Mr(w.color) ?? "#000000", p.font = `${Math.max(6, (w.size ?? 1) * a)}px 'BigBlue Terminal', monospace`, p.fillText(String(w.text ?? ""), w.c * a, w.r * a));
            }
            p.setTransform(1, 0, 0, 1, 0, 0);
        }
    }
    function al({ design: e, size: t = 96, className: n }) {
        const r = T.useRef(null);
        return T.useEffect(()=>{
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
    var ei = class {
        constructor(){
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this);
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), ()=>{
                this.listeners.delete(e), this.onUnsubscribe();
            };
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    }, jx = class extends ei {
        #e;
        #t;
        #n;
        constructor(){
            super(), this.#n = (e)=>{
                if (typeof window < "u" && window.addEventListener) {
                    const t = ()=>e();
                    return window.addEventListener("visibilitychange", t, !1), ()=>{
                        window.removeEventListener("visibilitychange", t);
                    };
                }
            };
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#n);
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0);
        }
        setEventListener(e) {
            this.#n = e, this.#t?.(), this.#t = e((t)=>{
                typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
            });
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus());
        }
        onFocus() {
            const e = this.isFocused();
            this.listeners.forEach((t)=>{
                t(e);
            });
        }
        isFocused() {
            return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
        }
    }, gh = new jx, Mx = {
        setTimeout: (e, t)=>setTimeout(e, t),
        clearTimeout: (e)=>clearTimeout(e),
        setInterval: (e, t)=>setInterval(e, t),
        clearInterval: (e)=>clearInterval(e)
    }, bx = class {
        #e = Mx;
        #t = !1;
        setTimeoutProvider(e) {
            this.#e = e;
        }
        setTimeout(e, t) {
            return this.#e.setTimeout(e, t);
        }
        clearTimeout(e) {
            this.#e.clearTimeout(e);
        }
        setInterval(e, t) {
            return this.#e.setInterval(e, t);
        }
        clearInterval(e) {
            this.#e.clearInterval(e);
        }
    }, Us = new bx;
    function Ox(e) {
        setTimeout(e, 0);
    }
    var Dx = typeof window > "u" || "Deno" in globalThis;
    function ct() {}
    function Lx(e, t) {
        return typeof e == "function" ? e(t) : e;
    }
    function Fx(e) {
        return typeof e == "number" && e >= 0 && e !== 1 / 0;
    }
    function Ax(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
    }
    function Bs(e, t) {
        return typeof e == "function" ? e(t) : e;
    }
    function $x(e, t) {
        return typeof e == "function" ? e(t) : e;
    }
    function ed(e, t) {
        const { type: n = "all", exact: r, fetchStatus: o, predicate: l, queryKey: i, stale: s } = e;
        if (i) {
            if (r) {
                if (t.queryHash !== Va(i, t.options)) return !1;
            } else if (!ho(t.queryKey, i)) return !1;
        }
        if (n !== "all") {
            const a = t.isActive();
            if (n === "active" && !a || n === "inactive" && a) return !1;
        }
        return !(typeof s == "boolean" && t.isStale() !== s || o && o !== t.state.fetchStatus || l && !l(t));
    }
    function td(e, t) {
        const { exact: n, status: r, predicate: o, mutationKey: l } = e;
        if (l) {
            if (!t.options.mutationKey) return !1;
            if (n) {
                if (po(t.options.mutationKey) !== po(l)) return !1;
            } else if (!ho(t.options.mutationKey, l)) return !1;
        }
        return !(r && t.state.status !== r || o && !o(t));
    }
    function Va(e, t) {
        return (t?.queryKeyHashFn || po)(e);
    }
    function po(e) {
        return JSON.stringify(e, (t, n)=>Vs(n) ? Object.keys(n).sort().reduce((r, o)=>(r[o] = n[o], r), {}) : n);
    }
    function ho(e, t) {
        return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((n)=>ho(e[n], t[n])) : !1;
    }
    var Ux = Object.prototype.hasOwnProperty;
    function yh(e, t, n = 0) {
        if (e === t) return e;
        if (n > 500) return t;
        const r = nd(e) && nd(t);
        if (!r && !(Vs(e) && Vs(t))) return t;
        const l = (r ? e : Object.keys(e)).length, i = r ? t : Object.keys(t), s = i.length, a = r ? new Array(s) : {};
        let u = 0;
        for(let c = 0; c < s; c++){
            const p = r ? c : i[c], d = e[p], w = t[p];
            if (d === w) {
                a[p] = d, (r ? c < l : Ux.call(e, p)) && u++;
                continue;
            }
            if (d === null || w === null || typeof d != "object" || typeof w != "object") {
                a[p] = w;
                continue;
            }
            const v = yh(d, w, n + 1);
            a[p] = v, v === d && u++;
        }
        return l === s && u === l ? e : a;
    }
    function nd(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
    }
    function Vs(e) {
        if (!rd(e)) return !1;
        const t = e.constructor;
        if (t === void 0) return !0;
        const n = t.prototype;
        return !(!rd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
    }
    function rd(e) {
        return Object.prototype.toString.call(e) === "[object Object]";
    }
    function Bx(e) {
        return new Promise((t)=>{
            Us.setTimeout(t, e);
        });
    }
    function Vx(e, t, n) {
        return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? yh(e, t) : t;
    }
    function Gx(e, t, n = 0) {
        const r = [
            ...e,
            t
        ];
        return n && r.length > n ? r.slice(1) : r;
    }
    function Qx(e, t, n = 0) {
        const r = [
            t,
            ...e
        ];
        return n && r.length > n ? r.slice(0, -1) : r;
    }
    var Ga = Symbol();
    function vh(e, t) {
        return !e.queryFn && t?.initialPromise ? ()=>t.initialPromise : !e.queryFn || e.queryFn === Ga ? ()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
    }
    function Hx(e, t, n) {
        let r = !1, o;
        return Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: ()=>(o ??= t(), r || (r = !0, o.aborted ? n() : o.addEventListener("abort", n, {
                    once: !0
                })), o)
        }), e;
    }
    var xh = (()=>{
        let e = ()=>Dx;
        return {
            isServer () {
                return e();
            },
            setIsServer (t) {
                e = t;
            }
        };
    })();
    function Wx() {
        let e, t;
        const n = new Promise((o, l)=>{
            e = o, t = l;
        });
        n.status = "pending", n.catch(()=>{});
        function r(o) {
            Object.assign(n, o), delete n.resolve, delete n.reject;
        }
        return n.resolve = (o)=>{
            r({
                status: "fulfilled",
                value: o
            }), e(o);
        }, n.reject = (o)=>{
            r({
                status: "rejected",
                reason: o
            }), t(o);
        }, n;
    }
    var Kx = Ox;
    function qx() {
        let e = [], t = 0, n = (s)=>{
            s();
        }, r = (s)=>{
            s();
        }, o = Kx;
        const l = (s)=>{
            t ? e.push(s) : o(()=>{
                n(s);
            });
        }, i = ()=>{
            const s = e;
            e = [], s.length && o(()=>{
                r(()=>{
                    s.forEach((a)=>{
                        n(a);
                    });
                });
            });
        };
        return {
            batch: (s)=>{
                let a;
                t++;
                try {
                    a = s();
                } finally{
                    t--, t || i();
                }
                return a;
            },
            batchCalls: (s)=>(...a)=>{
                    l(()=>{
                        s(...a);
                    });
                },
            schedule: l,
            setNotifyFunction: (s)=>{
                n = s;
            },
            setBatchNotifyFunction: (s)=>{
                r = s;
            },
            setScheduler: (s)=>{
                o = s;
            }
        };
    }
    var je = qx(), Yx = class extends ei {
        #e = !0;
        #t;
        #n;
        constructor(){
            super(), this.#n = (e)=>{
                if (typeof window < "u" && window.addEventListener) {
                    const t = ()=>e(!0), n = ()=>e(!1);
                    return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), ()=>{
                        window.removeEventListener("online", t), window.removeEventListener("offline", n);
                    };
                }
            };
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#n);
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0);
        }
        setEventListener(e) {
            this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
        }
        setOnline(e) {
            this.#e !== e && (this.#e = e, this.listeners.forEach((n)=>{
                n(e);
            }));
        }
        isOnline() {
            return this.#e;
        }
    }, Dl = new Yx;
    function Xx(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
    }
    function wh(e) {
        return (e ?? "online") === "online" ? Dl.isOnline() : !0;
    }
    var Gs = class extends Error {
        constructor(e){
            super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
        }
    };
    function Sh(e) {
        let t = !1, n = 0, r;
        const o = Wx(), l = ()=>o.status !== "pending", i = (m)=>{
            if (!l()) {
                const C = new Gs(m);
                d(C), e.onCancel?.(C);
            }
        }, s = ()=>{
            t = !0;
        }, a = ()=>{
            t = !1;
        }, u = ()=>gh.isFocused() && (e.networkMode === "always" || Dl.isOnline()) && e.canRun(), c = ()=>wh(e.networkMode) && e.canRun(), p = (m)=>{
            l() || (r?.(), o.resolve(m));
        }, d = (m)=>{
            l() || (r?.(), o.reject(m));
        }, w = ()=>new Promise((m)=>{
                r = (C)=>{
                    (l() || u()) && m(C);
                }, e.onPause?.();
            }).then(()=>{
                r = void 0, l() || e.onContinue?.();
            }), v = ()=>{
            if (l()) return;
            let m;
            const C = n === 0 ? e.initialPromise : void 0;
            try {
                m = C ?? e.fn();
            } catch (g) {
                m = Promise.reject(g);
            }
            Promise.resolve(m).then(p).catch((g)=>{
                if (l()) return;
                const f = e.retry ?? (xh.isServer() ? 0 : 3), h = e.retryDelay ?? Xx, S = typeof h == "function" ? h(n, g) : h, E = f === !0 || typeof f == "number" && n < f || typeof f == "function" && f(n, g);
                if (t || !E) {
                    d(g);
                    return;
                }
                n++, e.onFail?.(n, g), Bx(S).then(()=>u() ? void 0 : w()).then(()=>{
                    t ? d(g) : v();
                });
            });
        };
        return {
            promise: o,
            status: ()=>o.status,
            cancel: i,
            continue: ()=>(r?.(), o),
            cancelRetry: s,
            continueRetry: a,
            canStart: c,
            start: ()=>(c() ? v() : w().then(v), o)
        };
    }
    var kh = class {
        #e;
        destroy() {
            this.clearGcTimeout();
        }
        scheduleGc() {
            this.clearGcTimeout(), Fx(this.gcTime) && (this.#e = Us.setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime));
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (xh.isServer() ? 1 / 0 : 5 * 60 * 1e3));
        }
        clearGcTimeout() {
            this.#e !== void 0 && (Us.clearTimeout(this.#e), this.#e = void 0);
        }
    };
    function Zx(e) {
        return {
            onFetch: (t, n)=>{
                const r = t.options, o = t.fetchOptions?.meta?.fetchMore?.direction, l = t.state.data?.pages || [], i = t.state.data?.pageParams || [];
                let s = {
                    pages: [],
                    pageParams: []
                }, a = 0;
                const u = async ()=>{
                    let c = !1;
                    const p = (v)=>{
                        Hx(v, ()=>t.signal, ()=>c = !0);
                    }, d = vh(t.options, t.fetchOptions), w = async (v, m, C)=>{
                        if (c) return Promise.reject(t.signal.reason);
                        if (m == null && v.pages.length) return Promise.resolve(v);
                        const f = (()=>{
                            const P = {
                                client: t.client,
                                queryKey: t.queryKey,
                                pageParam: m,
                                direction: C ? "backward" : "forward",
                                meta: t.options.meta
                            };
                            return p(P), P;
                        })(), h = await d(f), { maxPages: S } = t.options, E = C ? Qx : Gx;
                        return {
                            pages: E(v.pages, h, S),
                            pageParams: E(v.pageParams, m, S)
                        };
                    };
                    if (o && l.length) {
                        const v = o === "backward", m = v ? Jx : od, C = {
                            pages: l,
                            pageParams: i
                        }, g = m(r, C);
                        s = await w(C, g, v);
                    } else {
                        const v = e ?? l.length;
                        do {
                            const m = a === 0 ? i[0] ?? r.initialPageParam : od(r, s);
                            if (a > 0 && m == null) break;
                            s = await w(s, m), a++;
                        }while (a < v);
                    }
                    return s;
                };
                t.options.persister ? t.fetchFn = ()=>t.options.persister?.(u, {
                        client: t.client,
                        queryKey: t.queryKey,
                        meta: t.options.meta,
                        signal: t.signal
                    }, n) : t.fetchFn = u;
            }
        };
    }
    function od(e, { pages: t, pageParams: n }) {
        const r = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
    }
    function Jx(e, { pages: t, pageParams: n }) {
        return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
    }
    var e0 = class extends kh {
        #e;
        #t;
        #n;
        #o;
        #l;
        #r;
        #a;
        #i;
        constructor(e){
            super(), this.#i = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#l = e.client, this.#o = this.#l.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = id(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
        }
        get meta() {
            return this.options.meta;
        }
        get queryType() {
            return this.#e;
        }
        get promise() {
            return this.#r?.promise;
        }
        setOptions(e) {
            if (this.options = {
                ...this.#a,
                ...e
            }, e?._type && (this.#e = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const t = id(this.options);
                t.data !== void 0 && (this.setState(ld(t.data, t.dataUpdatedAt)), this.#t = t);
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#o.remove(this);
        }
        setData(e, t) {
            const n = Vx(this.state.data, e, this.options);
            return this.#s({
                data: n,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual
            }), n;
        }
        setState(e) {
            this.#s({
                type: "setState",
                state: e
            });
        }
        cancel(e) {
            const t = this.#r?.promise;
            return this.#r?.cancel(e), t ? t.then(ct).catch(ct) : Promise.resolve();
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            });
        }
        get resetState() {
            return this.#t;
        }
        reset() {
            this.destroy(), this.setState(this.resetState);
        }
        isActive() {
            return this.observers.some((e)=>$x(e.options.enabled, this) !== !1);
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ga || !this.isFetched();
        }
        isFetched() {
            return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some((e)=>Bs(e.options.staleTime, this) === "static") : !1;
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some((e)=>e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
        }
        isStaleByTime(e = 0) {
            return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !Ax(this.state.dataUpdatedAt, e);
        }
        onFocus() {
            this.observers.find((t)=>t.shouldFetchOnWindowFocus())?.refetch({
                cancelRefetch: !1
            }), this.#r?.continue();
        }
        onOnline() {
            this.observers.find((t)=>t.shouldFetchOnReconnect())?.refetch({
                cancelRefetch: !1
            }), this.#r?.continue();
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#o.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }));
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter((t)=>t !== e), this.observers.length || (this.#r && (this.#i || this.#u() ? this.#r.cancel({
                revert: !0
            }) : this.#r.cancelRetry()), this.scheduleGc()), this.#o.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }));
        }
        getObserversCount() {
            return this.observers.length;
        }
        #u() {
            return this.state.fetchStatus === "paused" && this.state.status === "pending";
        }
        invalidate() {
            this.state.isInvalidated || this.#s({
                type: "invalidate"
            });
        }
        async fetch(e, t) {
            if (this.state.fetchStatus !== "idle" && this.#r?.status() !== "rejected") {
                if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                const a = this.observers.find((u)=>u.options.queryFn);
                a && this.setOptions(a.options);
            }
            const n = new AbortController, r = (a)=>{
                Object.defineProperty(a, "signal", {
                    enumerable: !0,
                    get: ()=>(this.#i = !0, n.signal)
                });
            }, o = ()=>{
                const a = vh(this.options, t), c = (()=>{
                    const p = {
                        client: this.#l,
                        queryKey: this.queryKey,
                        meta: this.meta
                    };
                    return r(p), p;
                })();
                return this.#i = !1, this.options.persister ? this.options.persister(a, c, this) : a(c);
            }, i = (()=>{
                const a = {
                    fetchOptions: t,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#l,
                    state: this.state,
                    fetchFn: o
                };
                return r(a), a;
            })();
            (this.#e === "infinite" ? Zx(this.options.pages) : this.options.behavior)?.onFetch(i, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== i.fetchOptions?.meta) && this.#s({
                type: "fetch",
                meta: i.fetchOptions?.meta
            }), this.#r = Sh({
                initialPromise: t?.initialPromise,
                fn: i.fetchFn,
                onCancel: (a)=>{
                    a instanceof Gs && a.revert && this.setState({
                        ...this.#n,
                        fetchStatus: "idle"
                    }), n.abort();
                },
                onFail: (a, u)=>{
                    this.#s({
                        type: "failed",
                        failureCount: a,
                        error: u
                    });
                },
                onPause: ()=>{
                    this.#s({
                        type: "pause"
                    });
                },
                onContinue: ()=>{
                    this.#s({
                        type: "continue"
                    });
                },
                retry: i.options.retry,
                retryDelay: i.options.retryDelay,
                networkMode: i.options.networkMode,
                canRun: ()=>!0
            });
            try {
                const a = await this.#r.start();
                if (a === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(a), this.#o.config.onSuccess?.(a, this), this.#o.config.onSettled?.(a, this.state.error, this), a;
            } catch (a) {
                if (a instanceof Gs) {
                    if (a.silent) return this.#r.promise;
                    if (a.revert) {
                        if (this.state.data === void 0) throw a;
                        return this.state.data;
                    }
                }
                throw this.#s({
                    type: "error",
                    error: a
                }), this.#o.config.onError?.(a, this), this.#o.config.onSettled?.(this.state.data, a, this), a;
            } finally{
                this.scheduleGc();
            }
        }
        #s(e) {
            const t = (n)=>{
                switch(e.type){
                    case "failed":
                        return {
                            ...n,
                            fetchFailureCount: e.failureCount,
                            fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...n,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...n,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...n,
                            ...t0(n.data, this.options),
                            fetchMeta: e.meta ?? null
                        };
                    case "success":
                        const r = {
                            ...n,
                            ...ld(e.data, e.dataUpdatedAt),
                            dataUpdateCount: n.dataUpdateCount + 1,
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#n = e.manual ? r : void 0, r;
                    case "error":
                        const o = e.error;
                        return {
                            ...n,
                            error: o,
                            errorUpdateCount: n.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: n.fetchFailureCount + 1,
                            fetchFailureReason: o,
                            fetchStatus: "idle",
                            status: "error",
                            isInvalidated: !0
                        };
                    case "invalidate":
                        return {
                            ...n,
                            isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...n,
                            ...e.state
                        };
                }
            };
            this.state = t(this.state), je.batch(()=>{
                this.observers.forEach((n)=>{
                    n.onQueryUpdate();
                }), this.#o.notify({
                    query: this,
                    type: "updated",
                    action: e
                });
            });
        }
    };
    function t0(e, t) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: wh(t.networkMode) ? "fetching" : "paused",
            ...e === void 0 && {
                error: null,
                status: "pending"
            }
        };
    }
    function ld(e, t) {
        return {
            data: e,
            dataUpdatedAt: t ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        };
    }
    function id(e) {
        const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
        return {
            data: t,
            dataUpdateCount: 0,
            dataUpdatedAt: n ? r ?? Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: n ? "success" : "pending",
            fetchStatus: "idle"
        };
    }
    var n0 = class extends kh {
        #e;
        #t;
        #n;
        #o;
        constructor(e){
            super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || r0(), this.setOptions(e.options), this.scheduleGc();
        }
        setOptions(e) {
            this.options = e, this.updateGcTime(this.options.gcTime);
        }
        get meta() {
            return this.options.meta;
        }
        addObserver(e) {
            this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
                type: "observerAdded",
                mutation: this,
                observer: e
            }));
        }
        removeObserver(e) {
            this.#t = this.#t.filter((t)=>t !== e), this.scheduleGc(), this.#n.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e
            });
        }
        optionalRemove() {
            this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
        }
        continue() {
            return this.#o?.continue() ?? this.execute(this.state.variables);
        }
        async execute(e) {
            const t = ()=>{
                this.#l({
                    type: "continue"
                });
            }, n = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
            this.#o = Sh({
                fn: ()=>this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(new Error("No mutationFn found")),
                onFail: (l, i)=>{
                    this.#l({
                        type: "failed",
                        failureCount: l,
                        error: i
                    });
                },
                onPause: ()=>{
                    this.#l({
                        type: "pause"
                    });
                },
                onContinue: t,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: ()=>this.#n.canRun(this)
            });
            const r = this.state.status === "pending", o = !this.#o.canStart();
            try {
                if (r) t();
                else {
                    this.#l({
                        type: "pending",
                        variables: e,
                        isPaused: o
                    }), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
                    const i = await this.options.onMutate?.(e, n);
                    i !== this.state.context && this.#l({
                        type: "pending",
                        context: i,
                        variables: e,
                        isPaused: o
                    });
                }
                const l = await this.#o.start();
                return await this.#n.config.onSuccess?.(l, e, this.state.context, this, n), await this.options.onSuccess?.(l, e, this.state.context, n), await this.#n.config.onSettled?.(l, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(l, null, e, this.state.context, n), this.#l({
                    type: "success",
                    data: l
                }), l;
            } catch (l) {
                try {
                    await this.#n.config.onError?.(l, e, this.state.context, this, n);
                } catch (i) {
                    Promise.reject(i);
                }
                try {
                    await this.options.onError?.(l, e, this.state.context, n);
                } catch (i) {
                    Promise.reject(i);
                }
                try {
                    await this.#n.config.onSettled?.(void 0, l, this.state.variables, this.state.context, this, n);
                } catch (i) {
                    Promise.reject(i);
                }
                try {
                    await this.options.onSettled?.(void 0, l, e, this.state.context, n);
                } catch (i) {
                    Promise.reject(i);
                }
                throw this.#l({
                    type: "error",
                    error: l
                }), l;
            } finally{
                this.#n.runNext(this);
            }
        }
        #l(e) {
            const t = (n)=>{
                switch(e.type){
                    case "failed":
                        return {
                            ...n,
                            failureCount: e.failureCount,
                            failureReason: e.error
                        };
                    case "pause":
                        return {
                            ...n,
                            isPaused: !0
                        };
                    case "continue":
                        return {
                            ...n,
                            isPaused: !1
                        };
                    case "pending":
                        return {
                            ...n,
                            context: e.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: e.isPaused,
                            status: "pending",
                            variables: e.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...n,
                            data: e.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return {
                            ...n,
                            data: void 0,
                            error: e.error,
                            failureCount: n.failureCount + 1,
                            failureReason: e.error,
                            isPaused: !1,
                            status: "error"
                        };
                }
            };
            this.state = t(this.state), je.batch(()=>{
                this.#t.forEach((n)=>{
                    n.onMutationUpdate(e);
                }), this.#n.notify({
                    mutation: this,
                    type: "updated",
                    action: e
                });
            });
        }
    };
    function r0() {
        return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
            submittedAt: 0
        };
    }
    var o0 = class extends ei {
        constructor(e = {}){
            super(), this.config = e, this.#e = new Set, this.#t = new Map, this.#n = 0;
        }
        #e;
        #t;
        #n;
        build(e, t, n) {
            const r = new n0({
                client: e,
                mutationCache: this,
                mutationId: ++this.#n,
                options: e.defaultMutationOptions(t),
                state: n
            });
            return this.add(r), r;
        }
        add(e) {
            this.#e.add(e);
            const t = Ko(e);
            if (typeof t == "string") {
                const n = this.#t.get(t);
                n ? n.push(e) : this.#t.set(t, [
                    e
                ]);
            }
            this.notify({
                type: "added",
                mutation: e
            });
        }
        remove(e) {
            if (this.#e.delete(e)) {
                const t = Ko(e);
                if (typeof t == "string") {
                    const n = this.#t.get(t);
                    if (n) if (n.length > 1) {
                        const r = n.indexOf(e);
                        r !== -1 && n.splice(r, 1);
                    } else n[0] === e && this.#t.delete(t);
                }
            }
            this.notify({
                type: "removed",
                mutation: e
            });
        }
        canRun(e) {
            const t = Ko(e);
            if (typeof t == "string") {
                const r = this.#t.get(t)?.find((o)=>o.state.status === "pending");
                return !r || r === e;
            } else return !0;
        }
        runNext(e) {
            const t = Ko(e);
            return typeof t == "string" ? this.#t.get(t)?.find((r)=>r !== e && r.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
        }
        clear() {
            je.batch(()=>{
                this.#e.forEach((e)=>{
                    this.notify({
                        type: "removed",
                        mutation: e
                    });
                }), this.#e.clear(), this.#t.clear();
            });
        }
        getAll() {
            return Array.from(this.#e);
        }
        find(e) {
            const t = {
                exact: !0,
                ...e
            };
            return this.getAll().find((n)=>td(t, n));
        }
        findAll(e = {}) {
            return this.getAll().filter((t)=>td(e, t));
        }
        notify(e) {
            je.batch(()=>{
                this.listeners.forEach((t)=>{
                    t(e);
                });
            });
        }
        resumePausedMutations() {
            const e = this.getAll().filter((t)=>t.state.isPaused);
            return je.batch(()=>Promise.all(e.map((t)=>t.continue().catch(ct))));
        }
    };
    function Ko(e) {
        return e.options.scope?.id;
    }
    var l0 = class extends ei {
        constructor(e = {}){
            super(), this.config = e, this.#e = new Map;
        }
        #e;
        build(e, t, n) {
            const r = t.queryKey, o = t.queryHash ?? Va(r, t);
            let l = this.get(o);
            return l || (l = new e0({
                client: e,
                queryKey: r,
                queryHash: o,
                options: e.defaultQueryOptions(t),
                state: n,
                defaultOptions: e.getQueryDefaults(r)
            }), this.add(l)), l;
        }
        add(e) {
            this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
                type: "added",
                query: e
            }));
        }
        remove(e) {
            const t = this.#e.get(e.queryHash);
            t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
                type: "removed",
                query: e
            }));
        }
        clear() {
            je.batch(()=>{
                this.getAll().forEach((e)=>{
                    this.remove(e);
                });
            });
        }
        get(e) {
            return this.#e.get(e);
        }
        getAll() {
            return [
                ...this.#e.values()
            ];
        }
        find(e) {
            const t = {
                exact: !0,
                ...e
            };
            return this.getAll().find((n)=>ed(t, n));
        }
        findAll(e = {}) {
            const t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((n)=>ed(e, n)) : t;
        }
        notify(e) {
            je.batch(()=>{
                this.listeners.forEach((t)=>{
                    t(e);
                });
            });
        }
        onFocus() {
            je.batch(()=>{
                this.getAll().forEach((e)=>{
                    e.onFocus();
                });
            });
        }
        onOnline() {
            je.batch(()=>{
                this.getAll().forEach((e)=>{
                    e.onOnline();
                });
            });
        }
    }, i0 = class {
        #e;
        #t;
        #n;
        #o;
        #l;
        #r;
        #a;
        #i;
        constructor(e = {}){
            this.#e = e.queryCache || new l0, this.#t = e.mutationCache || new o0, this.#n = e.defaultOptions || {}, this.#o = new Map, this.#l = new Map, this.#r = 0;
        }
        mount() {
            this.#r++, this.#r === 1 && (this.#a = gh.subscribe(async (e)=>{
                e && (await this.resumePausedMutations(), this.#e.onFocus());
            }), this.#i = Dl.subscribe(async (e)=>{
                e && (await this.resumePausedMutations(), this.#e.onOnline());
            }));
        }
        unmount() {
            this.#r--, this.#r === 0 && (this.#a?.(), this.#a = void 0, this.#i?.(), this.#i = void 0);
        }
        isFetching(e) {
            return this.#e.findAll({
                ...e,
                fetchStatus: "fetching"
            }).length;
        }
        isMutating(e) {
            return this.#t.findAll({
                ...e,
                status: "pending"
            }).length;
        }
        getQueryData(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e), n = this.#e.build(this, t), r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Bs(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
        }
        getQueriesData(e) {
            return this.#e.findAll(e).map(({ queryKey: t, state: n })=>{
                const r = n.data;
                return [
                    t,
                    r
                ];
            });
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                queryKey: e
            }), l = this.#e.get(r.queryHash)?.state.data, i = Lx(t, l);
            if (i !== void 0) return this.#e.build(this, r).setData(i, {
                ...n,
                manual: !0
            });
        }
        setQueriesData(e, t, n) {
            return je.batch(()=>this.#e.findAll(e).map(({ queryKey: r })=>[
                        r,
                        this.setQueryData(r, t, n)
                    ]));
        }
        getQueryState(e) {
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return this.#e.get(t.queryHash)?.state;
        }
        removeQueries(e) {
            const t = this.#e;
            je.batch(()=>{
                t.findAll(e).forEach((n)=>{
                    t.remove(n);
                });
            });
        }
        resetQueries(e, t) {
            const n = this.#e;
            return je.batch(()=>(n.findAll(e).forEach((r)=>{
                    r.reset();
                }), this.refetchQueries({
                    type: "active",
                    ...e
                }, t)));
        }
        cancelQueries(e, t = {}) {
            const n = {
                revert: !0,
                ...t
            }, r = je.batch(()=>this.#e.findAll(e).map((o)=>o.cancel(n)));
            return Promise.all(r).then(ct).catch(ct);
        }
        invalidateQueries(e, t = {}) {
            return je.batch(()=>(this.#e.findAll(e).forEach((n)=>{
                    n.invalidate();
                }), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
                    ...e,
                    type: e?.refetchType ?? e?.type ?? "active"
                }, t)));
        }
        refetchQueries(e, t = {}) {
            const n = {
                ...t,
                cancelRefetch: t.cancelRefetch ?? !0
            }, r = je.batch(()=>this.#e.findAll(e).filter((o)=>!o.isDisabled() && !o.isStatic()).map((o)=>{
                    let l = o.fetch(void 0, n);
                    return n.throwOnError || (l = l.catch(ct)), o.state.fetchStatus === "paused" ? Promise.resolve() : l;
                }));
            return Promise.all(r).then(ct);
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = this.#e.build(this, t);
            return n.isStaleByTime(Bs(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(ct).catch(ct);
        }
        fetchInfiniteQuery(e) {
            return e._type = "infinite", this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(ct).catch(ct);
        }
        ensureInfiniteQueryData(e) {
            return e._type = "infinite", this.ensureQueryData(e);
        }
        resumePausedMutations() {
            return Dl.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
            return this.#e;
        }
        getMutationCache() {
            return this.#t;
        }
        getDefaultOptions() {
            return this.#n;
        }
        setDefaultOptions(e) {
            this.#n = e;
        }
        setQueryDefaults(e, t) {
            this.#o.set(po(e), {
                queryKey: e,
                defaultOptions: t
            });
        }
        getQueryDefaults(e) {
            const t = [
                ...this.#o.values()
            ], n = {};
            return t.forEach((r)=>{
                ho(e, r.queryKey) && Object.assign(n, r.defaultOptions);
            }), n;
        }
        setMutationDefaults(e, t) {
            this.#l.set(po(e), {
                mutationKey: e,
                defaultOptions: t
            });
        }
        getMutationDefaults(e) {
            const t = [
                ...this.#l.values()
            ], n = {};
            return t.forEach((r)=>{
                ho(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
            }), n;
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = {
                ...this.#n.queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = Va(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Ga && (t.enabled = !1), t;
        }
        defaultMutationOptions(e) {
            return e?._defaulted ? e : {
                ...this.#n.mutations,
                ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            };
        }
        clear() {
            this.#e.clear(), this.#t.clear();
        }
    };
    const xt = new i0({
        defaultOptions: {
            queries: {
                staleTime: 5e3,
                retry: 1
            }
        }
    }), s0 = {}, Ch = s0?.VITE_DATA_SERVER ?? "http://localhost:7843";
    async function gt(e, t) {
        const n = await fetch(`${Ch}${e}`, t === void 0 ? void 0 : {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t)
        });
        if (!n.ok) throw new Error(`${e} → HTTP ${n.status}: ${(await n.text()).slice(0, 200)}`);
        return n.json();
    }
    async function a0() {
        return (await gt("/designs")).designs ?? [];
    }
    function u0(e) {
        return gt(`/designs/${e}`);
    }
    function c0(e) {
        return gt(`/designs/by-name/${encodeURIComponent(e)}`);
    }
    async function d0(e, t, n) {
        return (await gt("/designs", {
            name: e,
            design: t,
            history: n
        })).id;
    }
    async function f0() {
        return (await gt("/examples")).examples ?? [];
    }
    async function p0(e, t) {
        return (await gt("/examples", {
            input: e,
            output: t
        })).id;
    }
    async function h0(e, t, n) {
        const r = await fetch(`${Ch}/examples/${e}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input: t,
                output: n
            })
        });
        if (!r.ok) throw new Error(`/examples/${e} → HTTP ${r.status}: ${(await r.text()).slice(0, 200)}`);
    }
    function m0(e) {
        return gt("/predict", {
            input: e
        });
    }
    function g0(e, t) {
        return gt("/teacher", {
            input: e,
            save: t
        });
    }
    async function y0() {
        return (await gt("/predictions")).predictions ?? [];
    }
    async function v0() {
        return (await gt("/jobs")).jobs ?? [];
    }
    function x0() {
        return gt("/train", {});
    }
    const wt = {
        designs: [
            "designs"
        ],
        examples: [
            "examples"
        ],
        predictions: [
            "predictions"
        ],
        jobs: [
            "jobs"
        ]
    }, se = Pp((e, t)=>({
            designs: [],
            examples: [],
            predictions: [],
            jobs: [],
            loadingDesigns: !1,
            loadingExamples: !1,
            loadingPredictions: !1,
            error: null,
            loadDesigns: async ()=>{
                e({
                    loadingDesigns: !0
                });
                try {
                    const n = await xt.fetchQuery({
                        queryKey: wt.designs,
                        queryFn: a0
                    });
                    e({
                        designs: n,
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
                    const n = await xt.fetchQuery({
                        queryKey: wt.examples,
                        queryFn: f0
                    });
                    e({
                        examples: n,
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
            loadPredictions: async ()=>{
                e({
                    loadingPredictions: !0
                });
                try {
                    const n = await xt.fetchQuery({
                        queryKey: wt.predictions,
                        queryFn: y0
                    });
                    e({
                        predictions: n,
                        error: null
                    });
                } catch (n) {
                    e({
                        error: String(n)
                    });
                } finally{
                    e({
                        loadingPredictions: !1
                    });
                }
            },
            loadJobs: async ()=>{
                const n = await xt.fetchQuery({
                    queryKey: wt.jobs,
                    queryFn: v0,
                    staleTime: 0
                });
                e({
                    jobs: n
                });
            },
            saveDrawing: async (n, r, o)=>{
                const l = await d0(n, r, o);
                return xt.invalidateQueries({
                    queryKey: wt.designs
                }), l;
            },
            getDrawing: (n)=>c0(n),
            getDrawingById: (n)=>u0(n),
            saveExamplePair: async (n, r)=>{
                await p0(n, r), xt.invalidateQueries({
                    queryKey: wt.examples
                }), await t().loadExamples();
            },
            updateExamplePair: async (n, r, o)=>{
                await h0(n, r, o), xt.invalidateQueries({
                    queryKey: wt.examples
                }), await t().loadExamples();
            },
            runPredict: async (n)=>{
                const { output: r } = await m0(n);
                return xt.invalidateQueries({
                    queryKey: wt.predictions
                }), t().loadPredictions(), r;
            },
            runTeacher: async (n, r)=>{
                const o = await g0(n, r);
                return xt.invalidateQueries({
                    queryKey: wt.predictions
                }), t().loadPredictions(), r && (xt.invalidateQueries({
                    queryKey: wt.examples
                }), t().loadExamples()), o;
            },
            runTraining: async ()=>{
                const { id: n } = await x0();
                return n;
            }
        })), _h = "/grid-draw/";
    function w0(e) {
        window.location.href = `${_h}design/${encodeURIComponent(e)}/`;
    }
    function S0() {
        window.location.href = _h;
    }
    function Eh({ asModal: e, onClose: t, onOpenDesign: n } = {}) {
        const r = se((d)=>d.designs), o = se((d)=>d.examples), l = se((d)=>d.loadingDesigns || d.loadingExamples), i = se((d)=>d.error), s = se((d)=>d.loadDesigns), a = se((d)=>d.loadExamples), u = T.useCallback(()=>{
            s(), a();
        }, [
            s,
            a
        ]);
        T.useEffect(()=>{
            u();
        }, [
            u
        ]);
        const c = T.useCallback((d)=>{
            n ? n(d) : w0(d);
        }, [
            n
        ]), p = y.jsxs(y.Fragment, {
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
                                            children: y.jsx(al, {
                                                design: d.design,
                                                size: 120
                                            })
                                        }),
                                        y.jsx("div", {
                                            className: "text-xs font-medium truncate",
                                            title: d.name,
                                            children: d.name
                                        }),
                                        y.jsx(oe, {
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
                                                    y.jsx(al, {
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
                                                    y.jsx(al, {
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
                        y.jsx(oe, {
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
                    children: p
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
                            onClick: S0,
                            children: "← Editor"
                        }),
                        y.jsx(oe, {
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
                p
            ]
        });
    }
    function Ui(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    const k0 = "/grid-draw/";
    function sd({ design: e, label: t, onClick: n }) {
        const r = y.jsx(al, {
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
    function ad({ input: e, output: t, onInput: n, onOutput: r }) {
        return y.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
                y.jsx(sd, {
                    design: e,
                    label: "input",
                    onClick: n
                }),
                y.jsx("span", {
                    className: "text-gray-300",
                    children: "→"
                }),
                y.jsx(sd, {
                    design: t,
                    label: "output",
                    onClick: r
                })
            ]
        });
    }
    function Th({ asModal: e, onClose: t, onEditExample: n } = {}) {
        const r = se((f)=>f.examples), o = se((f)=>f.predictions), l = se((f)=>f.error), i = se((f)=>f.loadExamples), s = se((f)=>f.loadPredictions), a = se((f)=>f.runTeacher), [u, c] = T.useState(""), [p, d] = T.useState(null);
        T.useEffect(()=>{
            i(), s();
        }, [
            i,
            s
        ]);
        const w = ()=>{
            i(), s();
        }, v = async (f)=>{
            d(f.id), c(`#${f.id}: asking teacher (480B)…`);
            try {
                const h = await a(f.input, !0);
                c(h.saved && !Ui(h.output) ? `#${f.id}: teacher-labeled → saved to training data.` : `#${f.id}: teacher returned an empty design — not useful.`);
            } catch (h) {
                c(`#${f.id}: teacher failed — ${String(h)}`);
            } finally{
                d(null);
            }
        }, m = o.filter((f)=>Ui(f.output)).length, C = "grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4", g = y.jsxs(y.Fragment, {
            children: [
                y.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        y.jsx(oe, {
                            variant: "outline",
                            size: "sm",
                            onClick: w,
                            children: "Refresh"
                        }),
                        l && y.jsxs("span", {
                            className: "text-sm text-red-500",
                            children: [
                                "Data server: ",
                                l
                            ]
                        }),
                        u && y.jsx("span", {
                            className: "text-sm text-gray-500",
                            children: u
                        })
                    ]
                }),
                y.jsxs("section", {
                    className: "mb-8",
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
                            children: "No training examples yet — use “Make Training Data” or “Teacher (480B)”."
                        }),
                        y.jsx("div", {
                            className: C,
                            children: r.map((f)=>y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-1",
                                    children: [
                                        y.jsx(ad, {
                                            input: f.input,
                                            output: f.output,
                                            onInput: n && (()=>n(f, "input")),
                                            onOutput: n && (()=>n(f, "output"))
                                        }),
                                        y.jsxs("span", {
                                            className: "text-[10px] text-gray-400",
                                            children: [
                                                "#",
                                                f.id
                                            ]
                                        })
                                    ]
                                }, f.id))
                        })
                    ]
                }),
                y.jsxs("section", {
                    children: [
                        y.jsxs("h2", {
                            className: "text-sm font-medium text-gray-500 mb-3",
                            children: [
                                "Predictions (",
                                o.length,
                                " logged, ",
                                m,
                                " empty/failed)"
                            ]
                        }),
                        o.length === 0 && y.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "No predictions logged yet."
                        }),
                        y.jsx("div", {
                            className: C,
                            children: o.map((f)=>{
                                const h = Ui(f.output);
                                return y.jsxs("div", {
                                    className: "bg-white rounded border p-2 flex flex-col gap-1",
                                    children: [
                                        y.jsx(ad, {
                                            input: f.input,
                                            output: f.output
                                        }),
                                        y.jsxs("div", {
                                            className: "flex items-center justify-between gap-1",
                                            children: [
                                                y.jsxs("span", {
                                                    className: "text-[10px]",
                                                    style: {
                                                        color: h ? "#dc2626" : "#9ca3af"
                                                    },
                                                    children: [
                                                        "#",
                                                        f.id,
                                                        h ? " · empty" : ""
                                                    ]
                                                }),
                                                y.jsx(oe, {
                                                    size: "sm",
                                                    variant: "outline",
                                                    className: "text-[10px] h-6 px-2",
                                                    onClick: ()=>v(f),
                                                    disabled: p !== null,
                                                    children: p === f.id ? "labeling…" : "teacher-label"
                                                })
                                            ]
                                        })
                                    ]
                                }, f.id);
                            })
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
                children: g
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
                                window.location.href = k0;
                            },
                            children: "← Editor"
                        })
                    ]
                }),
                g
            ]
        });
    }
    const St = 16, Cn = 48, Vn = "/grid-draw/", ud = [
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
    function C0() {
        const e = "abcdefghijklmnopqrstuvwxyz0123456789", t = new Uint8Array(8);
        return crypto.getRandomValues(t), Array.from(t, (n)=>e[n % e.length]).join("");
    }
    function cd(e) {
        return (e.cells?.length ?? 0) + (e.lines?.length ?? 0) + (e.rects?.length ?? 0) + (e.texts?.length ?? 0) === 0;
    }
    function dd() {
        return {
            w: Math.max(1, window.innerWidth),
            h: Math.max(1, window.innerHeight - Cn)
        };
    }
    function _0() {
        const [e, t] = T.useState(()=>dd()), n = T.useRef(null), { grid: r, loading: o, error: l } = Ky(n, e.w, e.h), i = Fe(), { tool: s, setTool: a, colorIdx: u, setColorIdx: c, pickColor: p, outlineIdx: d, pickOutline: w, isDrawing: v, drawMode: m, startDrawing: C, stopDrawing: g, lineStart: f, startLine: h, finishLine: S, rectStart: E, startRect: P, finishRect: I, textSize: _, pickTextSize: B, beginTextEdit: A, typeTextChar: pe, backspaceText: Ne, commitTextEdit: Ge, cancelTextEdit: yt, selectedItems: $, setSelectedItems: X, selectAll: De, clipboard: j, copy: F, paste: z, deleteSelected: Y, selectMode: U, isSelecting: ze, selectBoxStart: Le, selectDragStart: re, startBoxSelection: Z, updateBoxSelection: Xe, finishBoxSelection: xr, cancelBoxSelection: he, startDragSelection: fn, finishDragSelection: pn, cancelDragSelection: hn, startResize: Fn, updateResize: mn, finishResize: Qa, cancelResize: Ha, startRotate: Wa, updateRotate: Ka, finishRotate: qa, cancelRotate: Ya, setMousePos: Xa, addItemToSelection: Za, removeItemFromSelection: Ja, hitTestShapes: So, getSelectedCells: Rh, jsonOutput: Ph, tensorOutput: Nh, importJson: zh, importTensor: Ih, clear: ti, updateOutputs: wr, renderSelection: ni, beginDrawStroke: eu, drawCellAt: ko, endDrawStroke: tu, commitLine: nu, commitRect: ru, undo: ri, redo: oi, canUndo: jh, canRedo: Mh, captureMode: li, captureInput: Sr, startTrainingCapture: bh, captureSetInput: Oh, buildTrainingExample: ou, finishTrainingCapture: lu, cancelTrainingCapture: iu, serializeWholeGrid: Co, exportHistory: su, loadDesignWithHistory: gn, currentName: au, setCurrentName: it, saveState: ii, setSaveState: uu, resetHistory: cu } = i;
        i.historyTick;
        const du = se((x)=>x.jobs), si = se((x)=>x.loadJobs), fu = se((x)=>x.saveDrawing), _o = se((x)=>x.getDrawing), pu = se((x)=>x.getDrawingById), hu = se((x)=>x.saveExamplePair), mu = se((x)=>x.updateExamplePair), gu = se((x)=>x.runPredict), yu = se((x)=>x.runTeacher), vu = se((x)=>x.runTraining), kr = Rh(), [xu, J] = T.useState(""), [ai, Dh] = T.useState(!1), [Lh, ui] = T.useState(!1), [Fh, ci] = T.useState(!1), [Lt, di] = T.useState(null), [An, Ah] = T.useState({
            x: 0,
            y: 0,
            zoom: 1
        }), $h = .25, Uh = 12, Ft = T.useRef(An);
        Ft.current = An;
        const Cr = T.useCallback((x)=>{
            Ah(x), r?.set_camera(x.x, x.y, x.zoom);
        }, [
            r
        ]), Eo = T.useRef(!1), [Bh, wu] = T.useState(!1), yn = T.useRef(null), Vh = T.useCallback(async ()=>{
            const x = Co();
            if (!x || x.cells.length + x.lines.length + x.rects.length + x.texts.length === 0) {
                J("Nothing to save — draw something first.");
                return;
            }
            const k = C0();
            J("Saving to gallery…");
            try {
                await fu(k, x, su()), it(k), window.history.replaceState({}, "", `${Vn}design/${k}/`), J(`Saved as ${k}. Auto-saving changes.`);
            } catch (N) {
                J(`Save failed: ${N instanceof Error ? N.message : String(N)}`);
            }
        }, [
            Co,
            su,
            it,
            fu
        ]);
        T.useEffect(()=>{
            if (!r) return;
            let x = !1;
            const k = window.location.pathname.match(/\/design\/([A-Za-z0-9_-]+)\/?$/);
            if (k) return _o(k[1]).then((b)=>{
                x || (gn(b.design, b.history ?? null), it(b.name));
            }).catch(()=>J(`No drawing named "${k[1]}".`)), ()=>{
                x = !0;
            };
            const N = new URLSearchParams(window.location.search).get("load");
            if (N) return pu(Number(N)).then((b)=>{
                x || (gn(b.design, b.history ?? null), it(b.name), window.history.replaceState({}, "", `${Vn}design/${encodeURIComponent(b.name)}/`));
            }).catch(()=>{
                window.history.replaceState({}, "", Vn);
            }), ()=>{
                x = !0;
            };
        }, [
            r,
            gn,
            it,
            _o,
            pu
        ]), T.useEffect(()=>{
            si();
            const x = setInterval(si, 2e3);
            return ()=>clearInterval(x);
        }, [
            si
        ]);
        const Gh = T.useCallback(async ()=>{
            const x = ou();
            if (!x) {
                J("Select the output region first.");
                return;
            }
            J("Saving…");
            try {
                await hu(x.input, x.output), lu(), J("Saved.");
            } catch (k) {
                J(`Save failed: ${k instanceof Error ? k.message : String(k)}`);
            }
        }, [
            ou,
            lu,
            hu
        ]), Qh = T.useCallback(async ()=>{
            J("Starting training…");
            try {
                const x = await vu();
                J(`Training started (${x}). See Training Jobs.`);
            } catch (x) {
                J(`Train failed: ${x instanceof Error ? x.message : String(x)}`);
            }
        }, [
            vu
        ]), Hh = T.useCallback(async ()=>{
            const { grid: x, selectedItems: k } = Fe.getState();
            if (!x) return;
            const N = Wr(x, k);
            if (!N) {
                J("Select an input region to predict from.");
                return;
            }
            const b = tt(k, x), K = b ? b.maxRow + 2 : 0, Q = b ? b.minCol : 0;
            J("Predicting…");
            try {
                const L = await gu(N);
                if (!L) throw new Error("no output in response");
                Fe.getState().placeDesign(L, K, Q), J(cd(L) ? "Model returned an EMPTY design (the local model is untrained — try Teacher 480B)." : "Prediction placed below the input.");
            } catch (L) {
                J(`Predict failed: ${L instanceof Error ? L.message : String(L)}`);
            }
        }, [
            gu
        ]), Wh = T.useCallback(async ()=>{
            const { grid: x, selectedItems: k } = Fe.getState();
            if (!x) return;
            const N = Wr(x, k);
            if (!N) {
                J("Select an input region for the teacher.");
                return;
            }
            const b = tt(k, x), K = b ? b.maxRow + 2 : 0, Q = b ? b.minCol : 0;
            J("Asking teacher (480B)…");
            try {
                const { output: L, saved: G } = await yu(N, ai);
                Fe.getState().placeDesign(L, K, Q), J(cd(L) ? "Teacher returned an EMPTY design." : G ? "Teacher output placed & saved to training data." : "Teacher output placed below the input — fix it, then Make Training Data.");
            } catch (L) {
                J(`Teacher failed: ${L instanceof Error ? L.message : String(L)}`);
            }
        }, [
            ai,
            yu
        ]), Kh = T.useCallback(async (x)=>{
            const k = await _o(x);
            gn(k.design, k.history ?? null), it(k.name), di(null), window.history.replaceState({}, "", `${Vn}design/${encodeURIComponent(k.name)}/`), ui(!1);
        }, [
            gn,
            it,
            _o
        ]), qh = T.useCallback((x, k)=>{
            const N = k === "input" ? x.input : x.output, b = k === "input" ? x.output : x.input;
            gn(N, null), it(null), di({
                id: x.id,
                half: k,
                otherHalf: b
            }), window.history.replaceState({}, "", Vn), ci(!1), J(`Editing example #${x.id} (${k}) — click "Update example" to save over it.`);
        }, [
            gn,
            it
        ]), Yh = T.useCallback(async ()=>{
            if (!Lt) return;
            const x = Co();
            if (!x) {
                J("Nothing to save — draw something first.");
                return;
            }
            const { id: k, half: N, otherHalf: b } = Lt, K = N === "input" ? x : b, Q = N === "output" ? x : b;
            J(`Updating example #${k}…`);
            try {
                await mu(k, K, Q), J(`Example #${k} (${N}) updated.`);
            } catch (L) {
                J(`Update failed: ${L instanceof Error ? L.message : String(L)}`);
            }
        }, [
            Lt,
            Co,
            mu
        ]), Xh = T.useCallback(()=>{
            it(null), di(null), ti(), cu(), uu("idle"), window.history.replaceState({}, "", Vn), J("");
        }, [
            it,
            ti,
            cu,
            uu
        ]);
        T.useEffect(()=>{
            const x = ()=>{
                const k = dd();
                t(k), r?.set_viewport(k.w, k.h);
            };
            return window.addEventListener("resize", x), ()=>window.removeEventListener("resize", x);
        }, [
            r
        ]), T.useEffect(()=>{
            const x = (k)=>{
                if (Fe.getState().textEdit) return;
                k.key === "\\" && a(s === "line" ? "draw" : "line"), k.key === "m" && a(s === "rect" ? "draw" : "rect"), k.key === "t" && a(s === "text" ? "draw" : "text"), k.key === "s" && a(s === "select" ? "draw" : "select"), (k.key === "Delete" || k.key === "Backspace") && $.length > 0 && (k.preventDefault(), Y()), (k.ctrlKey || k.metaKey) && k.key.toLowerCase() === "a" && (k.preventDefault(), De()), (k.ctrlKey || k.metaKey) && k.key === "c" && $.length > 0 && (k.preventDefault(), F()), (k.ctrlKey || k.metaKey) && k.key === "v" && j && (k.preventDefault(), z()), (k.ctrlKey || k.metaKey) && !k.shiftKey && k.key.toLowerCase() === "z" && (k.preventDefault(), ri()), (k.ctrlKey || k.metaKey) && (k.shiftKey && k.key.toLowerCase() === "z" || k.key.toLowerCase() === "y") && (k.preventDefault(), oi());
                const N = parseInt(k.key);
                N >= 1 && N <= 7 && c(N - 1);
            };
            return window.addEventListener("keydown", x), ()=>window.removeEventListener("keydown", x);
        }, [
            s,
            a,
            c,
            $,
            Y,
            F,
            z,
            j,
            ri,
            oi,
            De
        ]), T.useEffect(()=>{
            const x = (k)=>{
                if (Fe.getState().textEdit) {
                    if (k.key === "Enter") {
                        k.preventDefault(), Ge();
                        return;
                    }
                    if (k.key === "Escape") {
                        k.preventDefault(), yt();
                        return;
                    }
                    if (k.key === "Backspace") {
                        k.preventDefault(), Ne();
                        return;
                    }
                    k.key.length === 1 && !k.ctrlKey && !k.metaKey && !k.altKey && (k.preventDefault(), pe(k.key));
                }
            };
            return window.addEventListener("keydown", x), ()=>window.removeEventListener("keydown", x);
        }, [
            Ge,
            yt,
            Ne,
            pe
        ]), T.useEffect(()=>{
            const x = n.current;
            if (!x) return;
            const k = (N)=>{
                N.preventDefault();
                const b = Ft.current, K = N.deltaY < 0 ? 1.1 : 1 / 1.1, Q = Math.min(Uh, Math.max($h, b.zoom * K));
                if (Q === b.zoom) return;
                const L = N.clientX, G = N.clientY - Cn, de = b.x + L * (1 / b.zoom - 1 / Q), Ze = b.y + G * (1 / b.zoom - 1 / Q);
                Cr({
                    x: de,
                    y: Ze,
                    zoom: Q
                });
            };
            return x.addEventListener("wheel", k, {
                passive: !1
            }), ()=>x.removeEventListener("wheel", k);
        }, [
            Cr
        ]), T.useEffect(()=>{
            const x = (N)=>{
                N.code !== "Space" || Fe.getState().textEdit || (N.preventDefault(), Eo.current = !0, wu(!0));
            }, k = (N)=>{
                N.code === "Space" && (Eo.current = !1, wu(!1));
            };
            return window.addEventListener("keydown", x), window.addEventListener("keyup", k), ()=>{
                window.removeEventListener("keydown", x), window.removeEventListener("keyup", k);
            };
        }, []);
        const Zh = T.useCallback(()=>Cr({
                x: 0,
                y: 0,
                zoom: 1
            }), [
            Cr
        ]), $n = (x)=>{
            const k = x.currentTarget, N = k.getBoundingClientRect(), b = (x.clientX - N.left) * (k.width / N.width), K = (x.clientY - N.top) * (k.height / N.height), Q = Ft.current;
            return {
                x: b / Q.zoom + Q.x,
                y: K / Q.zoom + Q.y
            };
        }, vn = (x)=>{
            const { x: k, y: N } = $n(x);
            return {
                col: Math.floor(k / St),
                row: Math.floor(N / St)
            };
        }, At = (x)=>{
            const { x: k, y: N } = $n(x);
            return {
                col: Math.round(k / St),
                row: Math.round(N / St)
            };
        }, To = (x)=>$.some((k)=>k.type !== x.type ? !1 : k.type === "cell" && x.type === "cell" ? k.row === x.row && k.col === x.col : k.type === "line" && x.type === "line" || k.type === "rect" && x.type === "rect" || k.type === "text" && x.type === "text" ? k.index === x.index : !1), Jh = T.useCallback((x)=>{
            if (r) {
                if (x.button === 1 || x.button === 0 && Eo.current) {
                    x.preventDefault(), yn.current = {
                        x: x.clientX,
                        y: x.clientY,
                        camX: Ft.current.x,
                        camY: Ft.current.y
                    }, x.currentTarget.style.cursor = "grabbing";
                    return;
                }
                if (r.set_draw_color(u), r.set_outline_color(d), s === "draw") {
                    const { col: k, row: N } = vn(x), b = u === 6 ? !1 : !r.get_cell(N, k);
                    C(b), eu(), ko(N, k, b), wr();
                } else if (s === "line") {
                    const { col: k, row: N } = At(x);
                    h({
                        row: N,
                        col: k
                    }), r.render_with_line(N, k, N, k);
                } else if (s === "rect") {
                    const { col: k, row: N } = At(x);
                    P({
                        row: N,
                        col: k
                    }), r.render_with_rect(N, k, N, k);
                } else if (s === "text") {
                    const { col: k, row: N } = vn(x);
                    A({
                        row: N,
                        col: k
                    });
                } else if (s === "select") {
                    const { col: k, row: N } = vn(x), { x: b, y: K } = $n(x), Q = x.shiftKey;
                    if ($.length > 0 && !Q) {
                        const Ze = tt($, r);
                        if (Ze) {
                            const Ro = Os(Ze), Po = 10 / Ft.current.zoom;
                            if (Math.hypot(b - Ro.c * St, K - Ro.r * St) <= Po) {
                                Wa(b, K);
                                return;
                            }
                        }
                    }
                    if ($.length === 1 && !Q) {
                        const Ze = $[0];
                        if (Ze.type === "line" || Ze.type === "rect") {
                            const Ro = Ze.type === "line" ? Ds(r.get_line(Ze.index)) : Ls(r.get_rect(Ze.index)), Po = Mc(b, K, Ro, St, 9);
                            if (Po) {
                                Fn({
                                    shape: Ze.type,
                                    index: Ze.index,
                                    handle: Po.handle
                                });
                                return;
                            }
                        }
                    }
                    const L = tt($, r), G = L && N >= L.minRow && N <= L.maxRow && k >= L.minCol && k <= L.maxCol, de = So(b, K);
                    de && !Q && To(de) && $.length > 1 ? (fn({
                        row: N,
                        col: k
                    }), ni()) : G && $.length > 0 && !Q && !de ? (fn({
                        row: N,
                        col: k
                    }, !0), ni()) : de ? Q && !To(de) ? Za(de) : Q && To(de) ? Ja(de) : (X([
                        de
                    ]), fn({
                        row: N,
                        col: k
                    }), r.render(), de.type === "cell" ? r.highlight_cell(de.row, de.col) : de.type === "line" ? r.highlight_line(de.index) : de.type === "rect" && r.highlight_rect(de.index)) : Z({
                        row: N,
                        col: k
                    }, Q);
                }
            }
        }, [
            r,
            s,
            u,
            d,
            $,
            kr,
            So,
            C,
            h,
            P,
            Z,
            fn,
            Fn,
            Wa,
            Za,
            Ja,
            X,
            wr,
            ni,
            eu,
            ko,
            A
        ]), em = T.useCallback((x)=>{
            if (!r) return;
            if (yn.current) {
                const N = yn.current, b = Ft.current.zoom;
                Cr({
                    x: N.camX - (x.clientX - N.x) / b,
                    y: N.camY - (x.clientY - N.y) / b,
                    zoom: b
                });
                return;
            }
            const k = vn(x);
            if (Xa(k), s === "select") {
                const N = x.currentTarget;
                if (ze && (U === "resize" || U === "rotate")) N.style.cursor = "grabbing";
                else if (ze && U === "drag") N.style.cursor = "move";
                else {
                    const { x: b, y: K } = $n(x);
                    let Q = "crosshair";
                    if ($.length > 0) {
                        const L = tt($, r);
                        if (L) {
                            const G = Os(L);
                            Math.hypot(b - G.c * St, K - G.r * St) <= 10 / Ft.current.zoom && (Q = "grab");
                        }
                    }
                    if (Q === "crosshair" && $.length === 1) {
                        const L = $[0];
                        if (L.type === "line" || L.type === "rect") {
                            const G = L.type === "line" ? Ds(r.get_line(L.index)) : Ls(r.get_rect(L.index));
                            Mc(b, K, G, St, 9) && (Q = "grab");
                        }
                    }
                    if (Q === "crosshair" && $.length > 0) {
                        const L = So(b, K), G = tt($, r), de = G && k.row >= G.minRow && k.row <= G.maxRow && k.col >= G.minCol && k.col <= G.maxCol;
                        (L && To(L) || de) && (Q = "move");
                    }
                    N.style.cursor = Q;
                }
            } else x.currentTarget.style.cursor = "crosshair";
            if (!(!v && !ze)) {
                if (s === "draw" && v) {
                    const { col: N, row: b } = vn(x);
                    ko(b, N, m), wr();
                } else if (s === "line" && f) {
                    const { col: N, row: b } = At(x);
                    r.render_with_line(f.row, f.col, b, N);
                } else if (s === "rect" && E) {
                    const { col: N, row: b } = At(x);
                    r.render_with_rect(E.row, E.col, b, N);
                } else if (s === "select" && ze && U === "resize") {
                    const { col: N, row: b } = At(x);
                    mn({
                        row: b,
                        col: N
                    });
                } else if (s === "select" && ze && U === "rotate") {
                    const { x: N, y: b } = $n(x);
                    Ka(N, b);
                } else if (s === "select" && ze) {
                    const { col: N, row: b } = vn(x);
                    if (U === "box" && Le) Xe({
                        row: b,
                        col: N
                    });
                    else if (U === "drag" && re && $.length > 0) {
                        const K = b - re.row, Q = N - re.col;
                        r.render();
                        for (const L of $)if (L.type === "cell") {
                            const G = L.row + K, de = L.col + Q;
                            r.preview_cell(G, de, r.get_cell_color(L.row, L.col));
                        } else if (L.type === "line") {
                            const G = r.get_line(L.index);
                            G.length >= 5 && r.preview_line(G[0] + K, G[1] + Q, G[2] + K, G[3] + Q, G[4]);
                        } else if (L.type === "rect") {
                            const G = r.get_rect(L.index);
                            G.length >= 6 && r.preview_rect(G[0] + K, G[1] + Q, G[2] + K, G[3] + Q, G[4], G[5]);
                        } else if (L.type === "text") {
                            const G = r.get_text(L.index);
                            G.length >= 3 && r.preview_text(G[0] + K, G[1] + Q, G[2], r.get_text_size(L.index), r.get_text_string(L.index));
                        }
                    }
                }
            }
        }, [
            r,
            s,
            v,
            ze,
            m,
            f,
            E,
            U,
            Le,
            re,
            $,
            So,
            Xa,
            Xe,
            mn,
            Ka,
            wr,
            ko
        ]), tm = T.useCallback((x)=>{
            if (r) {
                if (yn.current) {
                    yn.current = null, x.currentTarget.style.cursor = Eo.current ? "grab" : "crosshair";
                    return;
                }
                if (s === "draw") tu(), g();
                else if (s === "line") {
                    if (f) {
                        const { col: k, row: N } = At(x);
                        nu(f.row, f.col, N, k);
                    }
                    S();
                } else if (s === "rect") {
                    if (E) {
                        const { col: k, row: N } = At(x);
                        ru(E.row, E.col, N, k);
                    }
                    I();
                } else if (s === "select") {
                    const { col: k, row: N } = vn(x);
                    if (U === "rotate") {
                        const { x: b, y: K } = $n(x);
                        qa(b, K);
                    } else if (U === "resize") {
                        const { col: b, row: K } = At(x);
                        Qa({
                            row: K,
                            col: b
                        });
                    } else U === "box" ? xr({
                        row: N,
                        col: k
                    }) : U === "drag" && pn({
                        row: N,
                        col: k
                    });
                }
            }
        }, [
            r,
            s,
            f,
            E,
            U,
            g,
            S,
            I,
            xr,
            pn,
            Qa,
            qa,
            wr,
            tu,
            nu,
            ru
        ]), nm = T.useCallback(()=>{
            if (yn.current) {
                yn.current = null;
                return;
            }
            s === "draw" ? g() : s === "line" ? (r && r.render(), S()) : s === "rect" ? (r && r.render(), I()) : s === "select" && (U === "box" ? he() : U === "drag" ? hn() : U === "resize" ? Ha() : U === "rotate" && Ya());
        }, [
            r,
            s,
            U,
            g,
            S,
            I,
            he,
            hn,
            Ha,
            Ya
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
                                        ii === "saving" && " · saving…",
                                        ii === "saved" && " · saved",
                                        ii === "error" && " · save failed"
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
                                            onClick: Zh,
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
                    className: qt("fixed left-0 right-0 bottom-0", o && "opacity-50"),
                    style: {
                        top: Cn,
                        cursor: o ? "wait" : Bh ? "grab" : "crosshair"
                    },
                    onMouseDown: Jh,
                    onMouseMove: em,
                    onMouseUp: tm,
                    onMouseLeave: nm
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
                                    y.jsxs(Jc, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (x)=>x && a(x),
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
                                    y.jsx(Jc, {
                                        type: "single",
                                        value: String(_),
                                        onValueChange: (x)=>x && B(Number(x)),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: Vy.map((x)=>y.jsxs(Bn, {
                                                value: String(x),
                                                className: "text-xs",
                                                children: [
                                                    x,
                                                    "×"
                                                ]
                                            }, x))
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
                                        children: ud.map((x, k)=>y.jsx("button", {
                                                onClick: ()=>p(k),
                                                title: `${k + 1}: ${x.name}`,
                                                className: qt("w-6 h-6 rounded border-2 transition-all", u === k ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", x.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: x.hex ?? "transparent",
                                                    backgroundImage: x.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: x.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: x.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
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
                                        children: ud.map((x, k)=>y.jsx("button", {
                                                onClick: ()=>w(k),
                                                title: k === 6 ? "No outline" : x.name,
                                                className: qt("w-6 h-6 rounded border-2 transition-all", d === k ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", x.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: x.hex ?? "transparent",
                                                    backgroundImage: x.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: x.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: x.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, k))
                                    })
                                ]
                            }),
                            y.jsxs("div", {
                                className: "flex gap-1",
                                children: [
                                    y.jsx(oe, {
                                        variant: "outline",
                                        onClick: ri,
                                        disabled: o || !jh(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Undo (Ctrl/Cmd+Z)",
                                        children: y.jsx(rv, {
                                            className: "w-4 h-4"
                                        })
                                    }),
                                    y.jsx(oe, {
                                        variant: "outline",
                                        onClick: oi,
                                        disabled: o || !Mh(),
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Redo (Ctrl/Cmd+Shift+Z)",
                                        children: y.jsx(tv, {
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
                                        onClick: Vh,
                                        disabled: o,
                                        size: "sm",
                                        className: "flex-1",
                                        title: "Save the whole drawing to the gallery",
                                        children: "Save to Gallery"
                                    }),
                                    y.jsx(oe, {
                                        variant: "outline",
                                        onClick: ()=>ui(!0),
                                        size: "sm",
                                        className: "flex-1",
                                        children: "Gallery"
                                    })
                                ]
                            }),
                            Lt && y.jsxs(oe, {
                                variant: "outline",
                                onClick: Yh,
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
                            y.jsx(oe, {
                                variant: "destructive",
                                onClick: ti,
                                disabled: o,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            y.jsx(oe, {
                                onClick: Xh,
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
                                                value: Ph,
                                                onChange: (x)=>zh(x.target.value),
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
                                                value: Nh,
                                                onChange: (x)=>Ih(x.target.value),
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
                y.jsx(nr, {
                    title: "Training Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Cn + 360
                    },
                    children: y.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            li === "idle" && y.jsxs(y.Fragment, {
                                children: [
                                    y.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: "Capture input→output pairs to train the model, or predict an output from a selection."
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        className: "w-full",
                                        onClick: bh,
                                        disabled: o,
                                        children: "Make Training Data"
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Hh,
                                        disabled: o || $.length === 0,
                                        children: "Predict from Selection"
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Wh,
                                        disabled: o || $.length === 0,
                                        title: "Draft the output with Qwen3-Coder-480B (OpenRouter)",
                                        children: "Teacher (480B)"
                                    }),
                                    y.jsxs("label", {
                                        className: "flex items-center gap-2 text-xs text-gray-600",
                                        children: [
                                            y.jsx("input", {
                                                type: "checkbox",
                                                checked: ai,
                                                onChange: (x)=>Dh(x.target.checked)
                                            }),
                                            "Auto-save teacher output to training data"
                                        ]
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: Qh,
                                        disabled: o,
                                        children: "Start Training Run"
                                    }),
                                    y.jsx(oe, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "w-full",
                                        onClick: ()=>ci(!0),
                                        children: "View Training Data"
                                    })
                                ]
                            }),
                            li === "input" && y.jsxs(y.Fragment, {
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
                                                onClick: Oh,
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
                            li === "output" && y.jsxs(y.Fragment, {
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
                                            y.jsx(oe, {
                                                size: "sm",
                                                className: "flex-1",
                                                onClick: Gh,
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
                du.length > 0 && y.jsx(nr, {
                    title: "Training Jobs",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Cn + 560
                    },
                    children: y.jsx("div", {
                        className: "space-y-2 w-72",
                        children: du.slice(0, 1).map((x)=>{
                            const k = x.total > 0 ? Math.min(100, Math.round(x.step / x.total * 100)) : 0, N = x.status === "error" ? "bg-red-500" : x.status === "done" ? "bg-green-500" : "bg-blue-500";
                            return y.jsxs("div", {
                                className: "text-xs",
                                children: [
                                    y.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [
                                            y.jsx("span", {
                                                className: "font-medium truncate",
                                                children: x.id
                                            }),
                                            y.jsx("span", {
                                                className: "text-gray-400",
                                                children: x.status
                                            })
                                        ]
                                    }),
                                    y.jsx("div", {
                                        className: "h-1.5 bg-gray-200 rounded mt-1 overflow-hidden",
                                        children: y.jsx("div", {
                                            className: qt("h-full", N),
                                            style: {
                                                width: `${k}%`
                                            }
                                        })
                                    }),
                                    y.jsxs("div", {
                                        className: "flex justify-between text-gray-400 mt-0.5",
                                        children: [
                                            y.jsx("span", {
                                                children: x.total > 0 ? `${x.step}/${x.total} (${k}%)` : `step ${x.step}`
                                            }),
                                            x.loss > 0 && y.jsxs("span", {
                                                children: [
                                                    "loss ",
                                                    x.loss.toFixed(3)
                                                ]
                                            })
                                        ]
                                    }),
                                    x.message && y.jsx("p", {
                                        className: "text-gray-400 truncate",
                                        children: x.message
                                    })
                                ]
                            }, x.id);
                        })
                    })
                }),
                Lh && y.jsx(Eh, {
                    asModal: !0,
                    onClose: ()=>ui(!1),
                    onOpenDesign: Kh
                }),
                Fh && y.jsx(Th, {
                    asModal: !0,
                    onClose: ()=>ci(!1),
                    onEditExample: qh
                })
            ]
        });
    }
    function E0() {
        const e = window.location.pathname;
        return /\/gallery\/?$/.test(e) ? "gallery" : /\/training\/?$/.test(e) ? "training" : "editor";
    }
    function T0() {
        const e = E0();
        return y.jsx("div", {
            className: "grid-draw-app",
            children: e === "gallery" ? y.jsx(Eh, {}) : e === "training" ? y.jsx(Th, {}) : y.jsx(_0, {})
        });
    }
    const R0 = 600;
    let fd;
    function P0() {
        Fe.getState().currentName && (clearTimeout(fd), fd = setTimeout(N0, R0));
    }
    async function N0() {
        const e = Fe.getState();
        if (!e.currentName || !e.grid) return;
        const t = e.serializeWholeGrid();
        if (t) {
            e.setSaveState("saving");
            try {
                await se.getState().saveDrawing(e.currentName, t, e.exportHistory()), Fe.getState().setSaveState("saved");
            } catch (n) {
                Fe.getState().setSaveState("error", n instanceof Error ? n.message : String(n));
            }
        }
    }
    Fe.subscribe((e, t)=>{
        e.historyTick !== t.historyTick && P0();
    });
    const pd = document.getElementById("grid-draw-root");
    pd && Bi.createRoot(pd).render(y.jsx(le.StrictMode, {
        children: y.jsx(T0, {})
    }));
})();
