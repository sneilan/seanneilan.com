(async ()=>{
    function Zf(e, t) {
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
    function Jf(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var na = {
        exports: {}
    }, Qo = {}, ra = {
        exports: {}
    }, B = {};
    var Lr = Symbol.for("react.element"), qf = Symbol.for("react.portal"), ed = Symbol.for("react.fragment"), td = Symbol.for("react.strict_mode"), nd = Symbol.for("react.profiler"), rd = Symbol.for("react.provider"), od = Symbol.for("react.context"), ld = Symbol.for("react.forward_ref"), id = Symbol.for("react.suspense"), sd = Symbol.for("react.memo"), ud = Symbol.for("react.lazy"), Is = Symbol.iterator;
    function ad(e) {
        return e === null || typeof e != "object" ? null : (e = Is && e[Is] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var oa = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, la = Object.assign, ia = {};
    function Bn(e, t, n) {
        this.props = e, this.context = t, this.refs = ia, this.updater = n || oa;
    }
    Bn.prototype.isReactComponent = {};
    Bn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    Bn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function sa() {}
    sa.prototype = Bn.prototype;
    function ji(e, t, n) {
        this.props = e, this.context = t, this.refs = ia, this.updater = n || oa;
    }
    var Oi = ji.prototype = new sa;
    Oi.constructor = ji;
    la(Oi, Bn.prototype);
    Oi.isPureReactComponent = !0;
    var Ls = Array.isArray, ua = Object.prototype.hasOwnProperty, Di = {
        current: null
    }, aa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ca(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)ua.call(t, r) && !aa.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var u = Array(s), a = 0; a < s; a++)u[a] = arguments[a + 2];
            o.children = u;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: Lr,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Di.current
        };
    }
    function cd(e, t) {
        return {
            $$typeof: Lr,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Fi(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Lr;
    }
    function fd(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var js = /\/+/g;
    function cl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? fd("" + e.key) : t.toString(36);
    }
    function lo(e, t, n, r, o) {
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
                    case Lr:
                    case qf:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + cl(i, 0) : r, Ls(o) ? (n = "", e != null && (n = e.replace(js, "$&/") + "/"), lo(o, t, n, "", function(a) {
            return a;
        })) : o != null && (Fi(o) && (o = cd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(js, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Ls(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var u = r + cl(l, s);
            i += lo(l, t, n, u, o);
        }
        else if (u = ad(e), typeof u == "function") for(e = u.call(e), s = 0; !(l = e.next()).done;)l = l.value, u = r + cl(l, s++), i += lo(l, t, n, u, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Ur(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return lo(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function dd(e) {
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
    var Re = {
        current: null
    }, io = {
        transition: null
    }, pd = {
        ReactCurrentDispatcher: Re,
        ReactCurrentBatchConfig: io,
        ReactCurrentOwner: Di
    };
    function fa() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    B.Children = {
        map: Ur,
        forEach: function(e, t, n) {
            Ur(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Ur(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Ur(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Fi(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    B.Component = Bn;
    B.Fragment = ed;
    B.Profiler = nd;
    B.PureComponent = ji;
    B.StrictMode = td;
    B.Suspense = id;
    B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pd;
    B.act = fa;
    B.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = la({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Di.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(u in t)ua.call(t, u) && !aa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (u === 1) r.children = n;
        else if (1 < u) {
            s = Array(u);
            for(var a = 0; a < u; a++)s[a] = arguments[a + 2];
            r.children = s;
        }
        return {
            $$typeof: Lr,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    B.createContext = function(e) {
        return e = {
            $$typeof: od,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: rd,
            _context: e
        }, e.Consumer = e;
    };
    B.createElement = ca;
    B.createFactory = function(e) {
        var t = ca.bind(null, e);
        return t.type = e, t;
    };
    B.createRef = function() {
        return {
            current: null
        };
    };
    B.forwardRef = function(e) {
        return {
            $$typeof: ld,
            render: e
        };
    };
    B.isValidElement = Fi;
    B.lazy = function(e) {
        return {
            $$typeof: ud,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: dd
        };
    };
    B.memo = function(e, t) {
        return {
            $$typeof: sd,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    B.startTransition = function(e) {
        var t = io.transition;
        io.transition = {};
        try {
            e();
        } finally{
            io.transition = t;
        }
    };
    B.unstable_act = fa;
    B.useCallback = function(e, t) {
        return Re.current.useCallback(e, t);
    };
    B.useContext = function(e) {
        return Re.current.useContext(e);
    };
    B.useDebugValue = function() {};
    B.useDeferredValue = function(e) {
        return Re.current.useDeferredValue(e);
    };
    B.useEffect = function(e, t) {
        return Re.current.useEffect(e, t);
    };
    B.useId = function() {
        return Re.current.useId();
    };
    B.useImperativeHandle = function(e, t, n) {
        return Re.current.useImperativeHandle(e, t, n);
    };
    B.useInsertionEffect = function(e, t) {
        return Re.current.useInsertionEffect(e, t);
    };
    B.useLayoutEffect = function(e, t) {
        return Re.current.useLayoutEffect(e, t);
    };
    B.useMemo = function(e, t) {
        return Re.current.useMemo(e, t);
    };
    B.useReducer = function(e, t, n) {
        return Re.current.useReducer(e, t, n);
    };
    B.useRef = function(e) {
        return Re.current.useRef(e);
    };
    B.useState = function(e) {
        return Re.current.useState(e);
    };
    B.useSyncExternalStore = function(e, t, n) {
        return Re.current.useSyncExternalStore(e, t, n);
    };
    B.useTransition = function() {
        return Re.current.useTransition();
    };
    B.version = "18.3.1";
    ra.exports = B;
    var S = ra.exports;
    const ce = Jf(S), da = Zf({
        __proto__: null,
        default: ce
    }, [
        S
    ]);
    var md = S, hd = Symbol.for("react.element"), gd = Symbol.for("react.fragment"), vd = Object.prototype.hasOwnProperty, yd = md.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, wd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function pa(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)vd.call(t, r) && !wd.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: hd,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: yd.current
        };
    }
    Qo.Fragment = gd;
    Qo.jsx = pa;
    Qo.jsxs = pa;
    na.exports = Qo;
    var M = na.exports, Al = {}, ma = {
        exports: {}
    }, Ge = {}, ha = {
        exports: {}
    }, ga = {};
    (function(e) {
        function t(R, U) {
            var E = R.length;
            R.push(U);
            e: for(; 0 < E;){
                var b = E - 1 >>> 1, ee = R[b];
                if (0 < o(ee, U)) R[b] = U, R[E] = ee, E = b;
                else break e;
            }
        }
        function n(R) {
            return R.length === 0 ? null : R[0];
        }
        function r(R) {
            if (R.length === 0) return null;
            var U = R[0], E = R.pop();
            if (E !== U) {
                R[0] = E;
                e: for(var b = 0, ee = R.length, pt = ee >>> 1; b < pt;){
                    var Ue = 2 * (b + 1) - 1, ie = R[Ue], K = Ue + 1, Qe = R[K];
                    if (0 > o(ie, E)) K < ee && 0 > o(Qe, ie) ? (R[b] = Qe, R[K] = E, b = K) : (R[b] = ie, R[Ue] = E, b = Ue);
                    else if (K < ee && 0 > o(Qe, E)) R[b] = Qe, R[K] = E, b = K;
                    else break e;
                }
            }
            return U;
        }
        function o(R, U) {
            var E = R.sortIndex - U.sortIndex;
            return E !== 0 ? E : R.id - U.id;
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
        var u = [], a = [], p = 1, m = null, h = 3, y = !1, k = !1, w = !1, x = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function d(R) {
            for(var U = n(a); U !== null;){
                if (U.callback === null) r(a);
                else if (U.startTime <= R) r(a), U.sortIndex = U.expirationTime, t(u, U);
                else break;
                U = n(a);
            }
        }
        function v(R) {
            if (w = !1, d(R), !k) if (n(u) !== null) k = !0, Q(P);
            else {
                var U = n(a);
                U !== null && he(v, U.startTime - R);
            }
        }
        function P(R, U) {
            k = !1, w && (w = !1, f(g), g = -1), y = !0;
            var E = h;
            try {
                for(d(U), m = n(u); m !== null && (!(m.expirationTime > U) || R && !le());){
                    var b = m.callback;
                    if (typeof b == "function") {
                        m.callback = null, h = m.priorityLevel;
                        var ee = b(m.expirationTime <= U);
                        U = e.unstable_now(), typeof ee == "function" ? m.callback = ee : m === n(u) && r(u), d(U);
                    } else r(u);
                    m = n(u);
                }
                if (m !== null) var pt = !0;
                else {
                    var Ue = n(a);
                    Ue !== null && he(v, Ue.startTime - U), pt = !1;
                }
                return pt;
            } finally{
                m = null, h = E, y = !1;
            }
        }
        var z = !1, _ = null, g = -1, A = 5, D = -1;
        function le() {
            return !(e.unstable_now() - D < A);
        }
        function _e() {
            if (_ !== null) {
                var R = e.unstable_now();
                D = R;
                var U = !0;
                try {
                    U = _(!0, R);
                } finally{
                    U ? Fe() : (z = !1, _ = null);
                }
            } else z = !1;
        }
        var Fe;
        if (typeof c == "function") Fe = function() {
            c(_e);
        };
        else if (typeof MessageChannel < "u") {
            var qe = new MessageChannel, Ae = qe.port2;
            qe.port1.onmessage = _e, Fe = function() {
                Ae.postMessage(null);
            };
        } else Fe = function() {
            x(_e, 0);
        };
        function Q(R) {
            _ = R, z || (z = !0, Fe());
        }
        function he(R, U) {
            g = x(function() {
                R(e.unstable_now());
            }, U);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
            R.callback = null;
        }, e.unstable_continueExecution = function() {
            k || y || (k = !0, Q(P));
        }, e.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < R ? Math.floor(1e3 / R) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return h;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(u);
        }, e.unstable_next = function(R) {
            switch(h){
                case 1:
                case 2:
                case 3:
                    var U = 3;
                    break;
                default:
                    U = h;
            }
            var E = h;
            h = U;
            try {
                return R();
            } finally{
                h = E;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, U) {
            switch(R){
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    R = 3;
            }
            var E = h;
            h = R;
            try {
                return U();
            } finally{
                h = E;
            }
        }, e.unstable_scheduleCallback = function(R, U, E) {
            var b = e.unstable_now();
            switch(typeof E == "object" && E !== null ? (E = E.delay, E = typeof E == "number" && 0 < E ? b + E : b) : E = b, R){
                case 1:
                    var ee = -1;
                    break;
                case 2:
                    ee = 250;
                    break;
                case 5:
                    ee = 1073741823;
                    break;
                case 4:
                    ee = 1e4;
                    break;
                default:
                    ee = 5e3;
            }
            return ee = E + ee, R = {
                id: p++,
                callback: U,
                priorityLevel: R,
                startTime: E,
                expirationTime: ee,
                sortIndex: -1
            }, E > b ? (R.sortIndex = E, t(a, R), n(u) === null && R === n(a) && (w ? (f(g), g = -1) : w = !0, he(v, E - b))) : (R.sortIndex = ee, t(u, R), k || y || (k = !0, Q(P))), R;
        }, e.unstable_shouldYield = le, e.unstable_wrapCallback = function(R) {
            var U = h;
            return function() {
                var E = h;
                h = U;
                try {
                    return R.apply(this, arguments);
                } finally{
                    h = E;
                }
            };
        };
    })(ga);
    ha.exports = ga;
    var kd = ha.exports;
    var xd = S, We = kd;
    function C(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var va = new Set, hr = {};
    function dn(e, t) {
        jn(e, t), jn(e + "Capture", t);
    }
    function jn(e, t) {
        for(hr[e] = t, e = 0; e < t.length; e++)va.add(t[e]);
    }
    var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ul = Object.prototype.hasOwnProperty, Sd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Os = {}, Ds = {};
    function Cd(e) {
        return Ul.call(Ds, e) ? !0 : Ul.call(Os, e) ? !1 : Sd.test(e) ? Ds[e] = !0 : (Os[e] = !0, !1);
    }
    function Ed(e, t, n, r) {
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
    function _d(e, t, n, r) {
        if (t === null || typeof t > "u" || Ed(e, t, n, r)) return !0;
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
    function Te(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var ke = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ke[e] = new Te(e, 0, !1, e, null, !1, !1);
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
        ke[t] = new Te(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        ke[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        ke[e] = new Te(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ke[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        ke[e] = new Te(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        ke[e] = new Te(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        ke[e] = new Te(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        ke[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Ai = /[\-:]([a-z])/g;
    function Ui(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Ai, Ui);
        ke[t] = new Te(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Ai, Ui);
        ke[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Ai, Ui);
        ke[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        ke[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    ke.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        ke[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Vi(e, t, n, r) {
        var o = ke.hasOwnProperty(t) ? ke[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_d(t, n, o, r) && (n = null), r || o === null ? Cd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Et = xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vr = Symbol.for("react.element"), gn = Symbol.for("react.portal"), vn = Symbol.for("react.fragment"), $i = Symbol.for("react.strict_mode"), Vl = Symbol.for("react.profiler"), ya = Symbol.for("react.provider"), wa = Symbol.for("react.context"), Bi = Symbol.for("react.forward_ref"), $l = Symbol.for("react.suspense"), Bl = Symbol.for("react.suspense_list"), Wi = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), ka = Symbol.for("react.offscreen"), Fs = Symbol.iterator;
    function bn(e) {
        return e === null || typeof e != "object" ? null : (e = Fs && e[Fs] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var re = Object.assign, fl;
    function nr(e) {
        if (fl === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            fl = t && t[1] || "";
        }
        return `
` + fl + e;
    }
    var dl = !1;
    function pl(e, t) {
        if (!e || dl) return "";
        dl = !0;
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
                } catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
            else {
                try {
                    throw Error();
                } catch (a) {
                    r = a;
                }
                e();
            }
        } catch (a) {
            if (a && r && typeof a.stack == "string") {
                for(var o = a.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s];)s--;
                for(; 1 <= i && 0 <= s; i--, s--)if (o[i] !== l[s]) {
                    if (i !== 1 || s !== 1) do if (i--, s--, 0 > s || o[i] !== l[s]) {
                        var u = `
` + o[i].replace(" at new ", " at ");
                        return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                    }
                    while (1 <= i && 0 <= s);
                    break;
                }
            }
        } finally{
            dl = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? nr(e) : "";
    }
    function Pd(e) {
        switch(e.tag){
            case 5:
                return nr(e.type);
            case 16:
                return nr("Lazy");
            case 13:
                return nr("Suspense");
            case 19:
                return nr("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = pl(e.type, !1), e;
            case 11:
                return e = pl(e.type.render, !1), e;
            case 1:
                return e = pl(e.type, !0), e;
            default:
                return "";
        }
    }
    function Wl(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case vn:
                return "Fragment";
            case gn:
                return "Portal";
            case Vl:
                return "Profiler";
            case $i:
                return "StrictMode";
            case $l:
                return "Suspense";
            case Bl:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case wa:
                return (e.displayName || "Context") + ".Consumer";
            case ya:
                return (e._context.displayName || "Context") + ".Provider";
            case Bi:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Wi:
                return t = e.displayName || null, t !== null ? t : Wl(e.type) || "Memo";
            case Rt:
                t = e._payload, e = e._init;
                try {
                    return Wl(e(t));
                } catch  {}
        }
        return null;
    }
    function Nd(e) {
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
                return Wl(t);
            case 8:
                return t === $i ? "StrictMode" : "Mode";
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
    function Gt(e) {
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
    function xa(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function zd(e) {
        var t = xa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function $r(e) {
        e._valueTracker || (e._valueTracker = zd(e));
    }
    function Sa(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = xa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function wo(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Gl(e, t) {
        var n = t.checked;
        return re({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function As(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = Gt(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Ca(e, t) {
        t = t.checked, t != null && Vi(e, "checked", t, !1);
    }
    function Hl(e, t) {
        Ca(e, t);
        var n = Gt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Ql(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ql(e, t.type, Gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Us(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Ql(e, t, n) {
        (t !== "number" || wo(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var rr = Array.isArray;
    function zn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + Gt(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function bl(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
        return re({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Vs(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(C(92));
                if (rr(n)) {
                    if (1 < n.length) throw Error(C(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: Gt(n)
        };
    }
    function Ea(e, t) {
        var n = Gt(t.value), r = Gt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function $s(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function _a(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Kl(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? _a(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Br, Pa = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Br = Br || document.createElement("div"), Br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Br.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function gr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var ir = {
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
    }, Rd = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(ir).forEach(function(e) {
        Rd.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), ir[t] = ir[e];
        });
    });
    function Na(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ir.hasOwnProperty(e) && ir[e] ? ("" + t).trim() : t + "px";
    }
    function za(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Na(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Td = re({
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
    function Yl(e, t) {
        if (t) {
            if (Td[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(C(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(C(62));
        }
    }
    function Xl(e, t) {
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
    var Zl = null;
    function Gi(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Jl = null, Rn = null, Tn = null;
    function Bs(e) {
        if (e = Dr(e)) {
            if (typeof Jl != "function") throw Error(C(280));
            var t = e.stateNode;
            t && (t = Zo(t), Jl(e.stateNode, e.type, t));
        }
    }
    function Ra(e) {
        Rn ? Tn ? Tn.push(e) : Tn = [
            e
        ] : Rn = e;
    }
    function Ta() {
        if (Rn) {
            var e = Rn, t = Tn;
            if (Tn = Rn = null, Bs(e), t) for(e = 0; e < t.length; e++)Bs(t[e]);
        }
    }
    function Ma(e, t) {
        return e(t);
    }
    function Ia() {}
    var ml = !1;
    function La(e, t, n) {
        if (ml) return e(t, n);
        ml = !0;
        try {
            return Ma(e, t, n);
        } finally{
            ml = !1, (Rn !== null || Tn !== null) && (Ia(), Ta());
        }
    }
    function vr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = Zo(n);
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
        if (n && typeof n != "function") throw Error(C(231, t, typeof n));
        return n;
    }
    var ql = !1;
    if (kt) try {
        var Kn = {};
        Object.defineProperty(Kn, "passive", {
            get: function() {
                ql = !0;
            }
        }), window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
    } catch  {
        ql = !1;
    }
    function Md(e, t, n, r, o, l, i, s, u) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a);
        } catch (p) {
            this.onError(p);
        }
    }
    var sr = !1, ko = null, xo = !1, ei = null, Id = {
        onError: function(e) {
            sr = !0, ko = e;
        }
    };
    function Ld(e, t, n, r, o, l, i, s, u) {
        sr = !1, ko = null, Md.apply(Id, arguments);
    }
    function jd(e, t, n, r, o, l, i, s, u) {
        if (Ld.apply(this, arguments), sr) {
            if (sr) {
                var a = ko;
                sr = !1, ko = null;
            } else throw Error(C(198));
            xo || (xo = !0, ei = a);
        }
    }
    function pn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function ja(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Ws(e) {
        if (pn(e) !== e) throw Error(C(188));
    }
    function Od(e) {
        var t = e.alternate;
        if (!t) {
            if (t = pn(e), t === null) throw Error(C(188));
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
                    if (l === n) return Ws(o), e;
                    if (l === r) return Ws(o), t;
                    l = l.sibling;
                }
                throw Error(C(188));
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
                    if (!i) throw Error(C(189));
                }
            }
            if (n.alternate !== r) throw Error(C(190));
        }
        if (n.tag !== 3) throw Error(C(188));
        return n.stateNode.current === n ? e : t;
    }
    function Oa(e) {
        return e = Od(e), e !== null ? Da(e) : null;
    }
    function Da(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Da(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Fa = We.unstable_scheduleCallback, Gs = We.unstable_cancelCallback, Dd = We.unstable_shouldYield, Fd = We.unstable_requestPaint, se = We.unstable_now, Ad = We.unstable_getCurrentPriorityLevel, Hi = We.unstable_ImmediatePriority, Aa = We.unstable_UserBlockingPriority, So = We.unstable_NormalPriority, Ud = We.unstable_LowPriority, Ua = We.unstable_IdlePriority, bo = null, ft = null;
    function Vd(e) {
        if (ft && typeof ft.onCommitFiberRoot == "function") try {
            ft.onCommitFiberRoot(bo, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var lt = Math.clz32 ? Math.clz32 : Wd, $d = Math.log, Bd = Math.LN2;
    function Wd(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - ($d(e) / Bd | 0) | 0;
    }
    var Wr = 64, Gr = 4194304;
    function or(e) {
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
    function Co(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = or(s) : (l &= i, l !== 0 && (r = or(l)));
        } else i = n & ~o, i !== 0 ? r = or(i) : l !== 0 && (r = or(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - lt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function Gd(e, t) {
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
    function Hd(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - lt(l), s = 1 << i, u = o[i];
            u === -1 ? (!(s & n) || s & r) && (o[i] = Gd(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function ti(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Va() {
        var e = Wr;
        return Wr <<= 1, !(Wr & 4194240) && (Wr = 64), e;
    }
    function hl(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function jr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - lt(t), e[t] = n;
    }
    function Qd(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - lt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function Qi(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - lt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var H = 0;
    function $a(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Ba, bi, Wa, Ga, Ha, ni = !1, Hr = [], Dt = null, Ft = null, At = null, yr = new Map, wr = new Map, It = [], bd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Hs(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Dt = null;
                break;
            case "dragenter":
            case "dragleave":
                Ft = null;
                break;
            case "mouseover":
            case "mouseout":
                At = null;
                break;
            case "pointerover":
            case "pointerout":
                yr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                wr.delete(t.pointerId);
        }
    }
    function Yn(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = Dr(t), t !== null && bi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Kd(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Dt = Yn(Dt, e, t, n, r, o), !0;
            case "dragenter":
                return Ft = Yn(Ft, e, t, n, r, o), !0;
            case "mouseover":
                return At = Yn(At, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return yr.set(l, Yn(yr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, wr.set(l, Yn(wr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function Qa(e) {
        var t = en(e.target);
        if (t !== null) {
            var n = pn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = ja(n), t !== null) {
                        e.blockedOn = t, Ha(e.priority, function() {
                            Wa(n);
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
    function so(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Zl = r, n.target.dispatchEvent(r), Zl = null;
            } else return t = Dr(n), t !== null && bi(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Qs(e, t, n) {
        so(e) && n.delete(t);
    }
    function Yd() {
        ni = !1, Dt !== null && so(Dt) && (Dt = null), Ft !== null && so(Ft) && (Ft = null), At !== null && so(At) && (At = null), yr.forEach(Qs), wr.forEach(Qs);
    }
    function Xn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, ni || (ni = !0, We.unstable_scheduleCallback(We.unstable_NormalPriority, Yd)));
    }
    function kr(e) {
        function t(o) {
            return Xn(o, e);
        }
        if (0 < Hr.length) {
            Xn(Hr[0], e);
            for(var n = 1; n < Hr.length; n++){
                var r = Hr[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Dt !== null && Xn(Dt, e), Ft !== null && Xn(Ft, e), At !== null && Xn(At, e), yr.forEach(t), wr.forEach(t), n = 0; n < It.length; n++)r = It[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < It.length && (n = It[0], n.blockedOn === null);)Qa(n), n.blockedOn === null && It.shift();
    }
    var Mn = Et.ReactCurrentBatchConfig, Eo = !0;
    function Xd(e, t, n, r) {
        var o = H, l = Mn.transition;
        Mn.transition = null;
        try {
            H = 1, Ki(e, t, n, r);
        } finally{
            H = o, Mn.transition = l;
        }
    }
    function Zd(e, t, n, r) {
        var o = H, l = Mn.transition;
        Mn.transition = null;
        try {
            H = 4, Ki(e, t, n, r);
        } finally{
            H = o, Mn.transition = l;
        }
    }
    function Ki(e, t, n, r) {
        if (Eo) {
            var o = ri(e, t, n, r);
            if (o === null) _l(e, t, r, _o, n), Hs(e, r);
            else if (Kd(o, e, t, n, r)) r.stopPropagation();
            else if (Hs(e, r), t & 4 && -1 < bd.indexOf(e)) {
                for(; o !== null;){
                    var l = Dr(o);
                    if (l !== null && Ba(l), l = ri(e, t, n, r), l === null && _l(e, t, r, _o, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else _l(e, t, r, null, n);
        }
    }
    var _o = null;
    function ri(e, t, n, r) {
        if (_o = null, e = Gi(r), e = en(e), e !== null) if (t = pn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = ja(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return _o = e, null;
    }
    function ba(e) {
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
                switch(Ad()){
                    case Hi:
                        return 1;
                    case Aa:
                        return 4;
                    case So:
                    case Ud:
                        return 16;
                    case Ua:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var jt = null, Yi = null, uo = null;
    function Ka() {
        if (uo) return uo;
        var e, t = Yi, n = t.length, r, o = "value" in jt ? jt.value : jt.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return uo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function ao(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Qr() {
        return !0;
    }
    function bs() {
        return !1;
    }
    function He(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Qr : bs, this.isPropagationStopped = bs, this;
        }
        return re(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
            },
            persist: function() {},
            isPersistent: Qr
        }), t;
    }
    var Wn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Xi = He(Wn), Or = re({}, Wn, {
        view: 0,
        detail: 0
    }), Jd = He(Or), gl, vl, Zn, Ko = re({}, Or, {
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
        getModifierState: Zi,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Zn && (Zn && e.type === "mousemove" ? (gl = e.screenX - Zn.screenX, vl = e.screenY - Zn.screenY) : vl = gl = 0, Zn = e), gl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : vl;
        }
    }), Ks = He(Ko), qd = re({}, Ko, {
        dataTransfer: 0
    }), ep = He(qd), tp = re({}, Or, {
        relatedTarget: 0
    }), yl = He(tp), np = re({}, Wn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), rp = He(np), op = re({}, Wn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), lp = He(op), ip = re({}, Wn, {
        data: 0
    }), Ys = He(ip), sp = {
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
    }, up = {
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
    }, ap = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function cp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ap[e]) ? !!t[e] : !1;
    }
    function Zi() {
        return cp;
    }
    var fp = re({}, Or, {
        key: function(e) {
            if (e.key) {
                var t = sp[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = ao(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? up[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Zi,
        charCode: function(e) {
            return e.type === "keypress" ? ao(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? ao(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), dp = He(fp), pp = re({}, Ko, {
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
    }), Xs = He(pp), mp = re({}, Or, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Zi
    }), hp = He(mp), gp = re({}, Wn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), vp = He(gp), yp = re({}, Ko, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), wp = He(yp), kp = [
        9,
        13,
        27,
        32
    ], Ji = kt && "CompositionEvent" in window, ur = null;
    kt && "documentMode" in document && (ur = document.documentMode);
    var xp = kt && "TextEvent" in window && !ur, Ya = kt && (!Ji || ur && 8 < ur && 11 >= ur), Zs = " ", Js = !1;
    function Xa(e, t) {
        switch(e){
            case "keyup":
                return kp.indexOf(t.keyCode) !== -1;
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
    function Za(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var yn = !1;
    function Sp(e, t) {
        switch(e){
            case "compositionend":
                return Za(t);
            case "keypress":
                return t.which !== 32 ? null : (Js = !0, Zs);
            case "textInput":
                return e = t.data, e === Zs && Js ? null : e;
            default:
                return null;
        }
    }
    function Cp(e, t) {
        if (yn) return e === "compositionend" || !Ji && Xa(e, t) ? (e = Ka(), uo = Yi = jt = null, yn = !1, e) : null;
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
                return Ya && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Ep = {
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
    function qs(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Ep[e.type] : t === "textarea";
    }
    function Ja(e, t, n, r) {
        Ra(r), t = Po(t, "onChange"), 0 < t.length && (n = new Xi("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var ar = null, xr = null;
    function _p(e) {
        ac(e, 0);
    }
    function Yo(e) {
        var t = xn(e);
        if (Sa(t)) return e;
    }
    function Pp(e, t) {
        if (e === "change") return t;
    }
    var qa = !1;
    if (kt) {
        var wl;
        if (kt) {
            var kl = "oninput" in document;
            if (!kl) {
                var eu = document.createElement("div");
                eu.setAttribute("oninput", "return;"), kl = typeof eu.oninput == "function";
            }
            wl = kl;
        } else wl = !1;
        qa = wl && (!document.documentMode || 9 < document.documentMode);
    }
    function tu() {
        ar && (ar.detachEvent("onpropertychange", ec), xr = ar = null);
    }
    function ec(e) {
        if (e.propertyName === "value" && Yo(xr)) {
            var t = [];
            Ja(t, xr, e, Gi(e)), La(_p, t);
        }
    }
    function Np(e, t, n) {
        e === "focusin" ? (tu(), ar = t, xr = n, ar.attachEvent("onpropertychange", ec)) : e === "focusout" && tu();
    }
    function zp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yo(xr);
    }
    function Rp(e, t) {
        if (e === "click") return Yo(t);
    }
    function Tp(e, t) {
        if (e === "input" || e === "change") return Yo(t);
    }
    function Mp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var st = typeof Object.is == "function" ? Object.is : Mp;
    function Sr(e, t) {
        if (st(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Ul.call(t, o) || !st(e[o], t[o])) return !1;
        }
        return !0;
    }
    function nu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function ru(e, t) {
        var n = nu(e);
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
            n = nu(n);
        }
    }
    function tc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function nc() {
        for(var e = window, t = wo(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = wo(e.document);
        }
        return t;
    }
    function qi(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Ip(e) {
        var t = nc(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && tc(n.ownerDocument.documentElement, n)) {
            if (r !== null && qi(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ru(n, l);
                    var i = ru(n, r);
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
    var Lp = kt && "documentMode" in document && 11 >= document.documentMode, wn = null, oi = null, cr = null, li = !1;
    function ou(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        li || wn == null || wn !== wo(r) || (r = wn, "selectionStart" in r && qi(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), cr && Sr(cr, r) || (cr = r, r = Po(oi, "onSelect"), 0 < r.length && (t = new Xi("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = wn)));
    }
    function br(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var kn = {
        animationend: br("Animation", "AnimationEnd"),
        animationiteration: br("Animation", "AnimationIteration"),
        animationstart: br("Animation", "AnimationStart"),
        transitionend: br("Transition", "TransitionEnd")
    }, xl = {}, rc = {};
    kt && (rc = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);
    function Xo(e) {
        if (xl[e]) return xl[e];
        if (!kn[e]) return e;
        var t = kn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in rc) return xl[e] = t[n];
        return e;
    }
    var oc = Xo("animationend"), lc = Xo("animationiteration"), ic = Xo("animationstart"), sc = Xo("transitionend"), uc = new Map, lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Qt(e, t) {
        uc.set(e, t), dn(t, [
            e
        ]);
    }
    for(var Sl = 0; Sl < lu.length; Sl++){
        var Cl = lu[Sl], jp = Cl.toLowerCase(), Op = Cl[0].toUpperCase() + Cl.slice(1);
        Qt(jp, "on" + Op);
    }
    Qt(oc, "onAnimationEnd");
    Qt(lc, "onAnimationIteration");
    Qt(ic, "onAnimationStart");
    Qt("dblclick", "onDoubleClick");
    Qt("focusin", "onFocus");
    Qt("focusout", "onBlur");
    Qt(sc, "onTransitionEnd");
    jn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    jn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    jn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    jn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    dn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dp = new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));
    function iu(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, jd(r, t, void 0, e), e.currentTarget = null;
    }
    function ac(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], u = s.instance, a = s.currentTarget;
                    if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    iu(o, s, a), l = u;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    iu(o, s, a), l = u;
                }
            }
        }
        if (xo) throw e = ei, xo = !1, ei = null, e;
    }
    function Z(e, t) {
        var n = t[ci];
        n === void 0 && (n = t[ci] = new Set);
        var r = e + "__bubble";
        n.has(r) || (cc(t, e, 2, !1), n.add(r));
    }
    function El(e, t, n) {
        var r = 0;
        t && (r |= 4), cc(n, e, r, t);
    }
    var Kr = "_reactListening" + Math.random().toString(36).slice(2);
    function Cr(e) {
        if (!e[Kr]) {
            e[Kr] = !0, va.forEach(function(n) {
                n !== "selectionchange" && (Dp.has(n) || El(n, !1, e), El(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Kr] || (t[Kr] = !0, El("selectionchange", !1, t));
        }
    }
    function cc(e, t, n, r) {
        switch(ba(t)){
            case 1:
                var o = Xd;
                break;
            case 4:
                o = Zd;
                break;
            default:
                o = Ki;
        }
        n = o.bind(null, t, n, e), o = void 0, !ql || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function _l(e, t, n, r, o) {
        var l = r;
        if (!(t & 1) && !(t & 2) && r !== null) e: for(;;){
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o) break;
                if (i === 4) for(i = r.return; i !== null;){
                    var u = i.tag;
                    if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
                    i = i.return;
                }
                for(; s !== null;){
                    if (i = en(s), i === null) return;
                    if (u = i.tag, u === 5 || u === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        La(function() {
            var a = l, p = Gi(n), m = [];
            e: {
                var h = uc.get(e);
                if (h !== void 0) {
                    var y = Xi, k = e;
                    switch(e){
                        case "keypress":
                            if (ao(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            y = dp;
                            break;
                        case "focusin":
                            k = "focus", y = yl;
                            break;
                        case "focusout":
                            k = "blur", y = yl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            y = yl;
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
                            y = Ks;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            y = ep;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            y = hp;
                            break;
                        case oc:
                        case lc:
                        case ic:
                            y = rp;
                            break;
                        case sc:
                            y = vp;
                            break;
                        case "scroll":
                            y = Jd;
                            break;
                        case "wheel":
                            y = wp;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            y = lp;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            y = Xs;
                    }
                    var w = (t & 4) !== 0, x = !w && e === "scroll", f = w ? h !== null ? h + "Capture" : null : h;
                    w = [];
                    for(var c = a, d; c !== null;){
                        d = c;
                        var v = d.stateNode;
                        if (d.tag === 5 && v !== null && (d = v, f !== null && (v = vr(c, f), v != null && w.push(Er(c, v, d)))), x) break;
                        c = c.return;
                    }
                    0 < w.length && (h = new y(h, k, null, n, p), m.push({
                        event: h,
                        listeners: w
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== Zl && (k = n.relatedTarget || n.fromElement) && (en(k) || k[xt])) break e;
                    if ((y || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (k = n.relatedTarget || n.toElement, y = a, k = k ? en(k) : null, k !== null && (x = pn(k), k !== x || k.tag !== 5 && k.tag !== 6) && (k = null)) : (y = null, k = a), y !== k)) {
                        if (w = Ks, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Xs, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), x = y == null ? h : xn(y), d = k == null ? h : xn(k), h = new w(v, c + "leave", y, n, p), h.target = x, h.relatedTarget = d, v = null, en(p) === a && (w = new w(f, c + "enter", k, n, p), w.target = d, w.relatedTarget = x, v = w), x = v, y && k) t: {
                            for(w = y, f = k, c = 0, d = w; d; d = hn(d))c++;
                            for(d = 0, v = f; v; v = hn(v))d++;
                            for(; 0 < c - d;)w = hn(w), c--;
                            for(; 0 < d - c;)f = hn(f), d--;
                            for(; c--;){
                                if (w === f || f !== null && w === f.alternate) break t;
                                w = hn(w), f = hn(f);
                            }
                            w = null;
                        }
                        else w = null;
                        y !== null && su(m, h, y, w, !1), k !== null && x !== null && su(m, x, k, w, !0);
                    }
                }
                e: {
                    if (h = a ? xn(a) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var P = Pp;
                    else if (qs(h)) if (qa) P = Tp;
                    else {
                        P = zp;
                        var z = Np;
                    }
                    else (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = Rp);
                    if (P && (P = P(e, a))) {
                        Ja(m, P, n, p);
                        break e;
                    }
                    z && z(e, h, a), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Ql(h, "number", h.value);
                }
                switch(z = a ? xn(a) : window, e){
                    case "focusin":
                        (qs(z) || z.contentEditable === "true") && (wn = z, oi = a, cr = null);
                        break;
                    case "focusout":
                        cr = oi = wn = null;
                        break;
                    case "mousedown":
                        li = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        li = !1, ou(m, n, p);
                        break;
                    case "selectionchange":
                        if (Lp) break;
                    case "keydown":
                    case "keyup":
                        ou(m, n, p);
                }
                var _;
                if (Ji) e: {
                    switch(e){
                        case "compositionstart":
                            var g = "onCompositionStart";
                            break e;
                        case "compositionend":
                            g = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            g = "onCompositionUpdate";
                            break e;
                    }
                    g = void 0;
                }
                else yn ? Xa(e, n) && (g = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
                g && (Ya && n.locale !== "ko" && (yn || g !== "onCompositionStart" ? g === "onCompositionEnd" && yn && (_ = Ka()) : (jt = p, Yi = "value" in jt ? jt.value : jt.textContent, yn = !0)), z = Po(a, g), 0 < z.length && (g = new Ys(g, e, null, n, p), m.push({
                    event: g,
                    listeners: z
                }), _ ? g.data = _ : (_ = Za(n), _ !== null && (g.data = _)))), (_ = xp ? Sp(e, n) : Cp(e, n)) && (a = Po(a, "onBeforeInput"), 0 < a.length && (p = new Ys("onBeforeInput", "beforeinput", null, n, p), m.push({
                    event: p,
                    listeners: a
                }), p.data = _));
            }
            ac(m, t);
        });
    }
    function Er(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function Po(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = vr(e, n), l != null && r.unshift(Er(e, l, o)), l = vr(e, t), l != null && r.push(Er(e, l, o))), e = e.return;
        }
        return r;
    }
    function hn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function su(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, u = s.alternate, a = s.stateNode;
            if (u !== null && u === r) break;
            s.tag === 5 && a !== null && (s = a, o ? (u = vr(n, l), u != null && i.unshift(Er(n, u, s))) : o || (u = vr(n, l), u != null && i.push(Er(n, u, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Fp = /\r\n?/g, Ap = /\u0000|\uFFFD/g;
    function uu(e) {
        return (typeof e == "string" ? e : "" + e).replace(Fp, `
`).replace(Ap, "");
    }
    function Yr(e, t, n) {
        if (t = uu(t), uu(e) !== t && n) throw Error(C(425));
    }
    function No() {}
    var ii = null, si = null;
    function ui(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ai = typeof setTimeout == "function" ? setTimeout : void 0, Up = typeof clearTimeout == "function" ? clearTimeout : void 0, au = typeof Promise == "function" ? Promise : void 0, Vp = typeof queueMicrotask == "function" ? queueMicrotask : typeof au < "u" ? function(e) {
        return au.resolve(null).then(e).catch($p);
    } : ai;
    function $p(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Pl(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), kr(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        kr(t);
    }
    function Ut(e) {
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
    function cu(e) {
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
    var Gn = Math.random().toString(36).slice(2), ct = "__reactFiber$" + Gn, _r = "__reactProps$" + Gn, xt = "__reactContainer$" + Gn, ci = "__reactEvents$" + Gn, Bp = "__reactListeners$" + Gn, Wp = "__reactHandles$" + Gn;
    function en(e) {
        var t = e[ct];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[xt] || n[ct]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = cu(e); e !== null;){
                    if (n = e[ct]) return n;
                    e = cu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function Dr(e) {
        return e = e[ct] || e[xt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function xn(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(C(33));
    }
    function Zo(e) {
        return e[_r] || null;
    }
    var fi = [], Sn = -1;
    function bt(e) {
        return {
            current: e
        };
    }
    function J(e) {
        0 > Sn || (e.current = fi[Sn], fi[Sn] = null, Sn--);
    }
    function X(e, t) {
        Sn++, fi[Sn] = e.current, e.current = t;
    }
    var Ht = {}, Ee = bt(Ht), je = bt(!1), sn = Ht;
    function On(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ht;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Oe(e) {
        return e = e.childContextTypes, e != null;
    }
    function zo() {
        J(je), J(Ee);
    }
    function fu(e, t, n) {
        if (Ee.current !== Ht) throw Error(C(168));
        X(Ee, t), X(je, n);
    }
    function fc(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(C(108, Nd(e) || "Unknown", o));
        return re({}, n, r);
    }
    function Ro(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht, sn = Ee.current, X(Ee, e), X(je, je.current), !0;
    }
    function du(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(C(169));
        n ? (e = fc(e, t, sn), r.__reactInternalMemoizedMergedChildContext = e, J(je), J(Ee), X(Ee, e)) : J(je), X(je, n);
    }
    var gt = null, Jo = !1, Nl = !1;
    function dc(e) {
        gt === null ? gt = [
            e
        ] : gt.push(e);
    }
    function Gp(e) {
        Jo = !0, dc(e);
    }
    function Kt() {
        if (!Nl && gt !== null) {
            Nl = !0;
            var e = 0, t = H;
            try {
                var n = gt;
                for(H = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                gt = null, Jo = !1;
            } catch (o) {
                throw gt !== null && (gt = gt.slice(e + 1)), Fa(Hi, Kt), o;
            } finally{
                H = t, Nl = !1;
            }
        }
        return null;
    }
    var Cn = [], En = 0, To = null, Mo = 0, be = [], Ke = 0, un = null, vt = 1, yt = "";
    function Jt(e, t) {
        Cn[En++] = Mo, Cn[En++] = To, To = e, Mo = t;
    }
    function pc(e, t, n) {
        be[Ke++] = vt, be[Ke++] = yt, be[Ke++] = un, un = e;
        var r = vt;
        e = yt;
        var o = 32 - lt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - lt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, vt = 1 << 32 - lt(t) + o | n << o | r, yt = l + e;
        } else vt = 1 << l | n << o | r, yt = e;
    }
    function es(e) {
        e.return !== null && (Jt(e, 1), pc(e, 1, 0));
    }
    function ts(e) {
        for(; e === To;)To = Cn[--En], Cn[En] = null, Mo = Cn[--En], Cn[En] = null;
        for(; e === un;)un = be[--Ke], be[Ke] = null, yt = be[--Ke], be[Ke] = null, vt = be[--Ke], be[Ke] = null;
    }
    var Be = null, $e = null, q = !1, ot = null;
    function mc(e, t) {
        var n = Ye(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function pu(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Be = e, $e = Ut(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Be = e, $e = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = un !== null ? {
                    id: vt,
                    overflow: yt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Ye(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Be = e, $e = null, !0) : !1;
            default:
                return !1;
        }
    }
    function di(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function pi(e) {
        if (q) {
            var t = $e;
            if (t) {
                var n = t;
                if (!pu(e, t)) {
                    if (di(e)) throw Error(C(418));
                    t = Ut(n.nextSibling);
                    var r = Be;
                    t && pu(e, t) ? mc(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, Be = e);
                }
            } else {
                if (di(e)) throw Error(C(418));
                e.flags = e.flags & -4097 | 2, q = !1, Be = e;
            }
        }
    }
    function mu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Be = e;
    }
    function Xr(e) {
        if (e !== Be) return !1;
        if (!q) return mu(e), q = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ui(e.type, e.memoizedProps)), t && (t = $e)) {
            if (di(e)) throw hc(), Error(C(418));
            for(; t;)mc(e, t), t = Ut(t.nextSibling);
        }
        if (mu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                $e = Ut(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                $e = null;
            }
        } else $e = Be ? Ut(e.stateNode.nextSibling) : null;
        return !0;
    }
    function hc() {
        for(var e = $e; e;)e = Ut(e.nextSibling);
    }
    function Dn() {
        $e = Be = null, q = !1;
    }
    function ns(e) {
        ot === null ? ot = [
            e
        ] : ot.push(e);
    }
    var Hp = Et.ReactCurrentBatchConfig;
    function Jn(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(C(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(C(147, e));
                var o = r, l = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                    var s = o.refs;
                    i === null ? delete s[l] : s[l] = i;
                }, t._stringRef = l, t);
            }
            if (typeof e != "string") throw Error(C(284));
            if (!n._owner) throw Error(C(290, e));
        }
        return e;
    }
    function Zr(e, t) {
        throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function hu(e) {
        var t = e._init;
        return t(e._payload);
    }
    function gc(e) {
        function t(f, c) {
            if (e) {
                var d = f.deletions;
                d === null ? (f.deletions = [
                    c
                ], f.flags |= 16) : d.push(c);
            }
        }
        function n(f, c) {
            if (!e) return null;
            for(; c !== null;)t(f, c), c = c.sibling;
            return null;
        }
        function r(f, c) {
            for(f = new Map; c !== null;)c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
            return f;
        }
        function o(f, c) {
            return f = Wt(f, c), f.index = 0, f.sibling = null, f;
        }
        function l(f, c, d) {
            return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
        }
        function i(f) {
            return e && f.alternate === null && (f.flags |= 2), f;
        }
        function s(f, c, d, v) {
            return c === null || c.tag !== 6 ? (c = jl(d, f.mode, v), c.return = f, c) : (c = o(c, d), c.return = f, c);
        }
        function u(f, c, d, v) {
            var P = d.type;
            return P === vn ? p(f, c, d.props.children, v, d.key) : c !== null && (c.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Rt && hu(P) === c.type) ? (v = o(c, d.props), v.ref = Jn(f, c, d), v.return = f, v) : (v = vo(d.type, d.key, d.props, null, f.mode, v), v.ref = Jn(f, c, d), v.return = f, v);
        }
        function a(f, c, d, v) {
            return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = Ol(d, f.mode, v), c.return = f, c) : (c = o(c, d.children || []), c.return = f, c);
        }
        function p(f, c, d, v, P) {
            return c === null || c.tag !== 7 ? (c = on(d, f.mode, v, P), c.return = f, c) : (c = o(c, d), c.return = f, c);
        }
        function m(f, c, d) {
            if (typeof c == "string" && c !== "" || typeof c == "number") return c = jl("" + c, f.mode, d), c.return = f, c;
            if (typeof c == "object" && c !== null) {
                switch(c.$$typeof){
                    case Vr:
                        return d = vo(c.type, c.key, c.props, null, f.mode, d), d.ref = Jn(f, null, c), d.return = f, d;
                    case gn:
                        return c = Ol(c, f.mode, d), c.return = f, c;
                    case Rt:
                        var v = c._init;
                        return m(f, v(c._payload), d);
                }
                if (rr(c) || bn(c)) return c = on(c, f.mode, d, null), c.return = f, c;
                Zr(f, c);
            }
            return null;
        }
        function h(f, c, d, v) {
            var P = c !== null ? c.key : null;
            if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : s(f, c, "" + d, v);
            if (typeof d == "object" && d !== null) {
                switch(d.$$typeof){
                    case Vr:
                        return d.key === P ? u(f, c, d, v) : null;
                    case gn:
                        return d.key === P ? a(f, c, d, v) : null;
                    case Rt:
                        return P = d._init, h(f, c, P(d._payload), v);
                }
                if (rr(d) || bn(d)) return P !== null ? null : p(f, c, d, v, null);
                Zr(f, d);
            }
            return null;
        }
        function y(f, c, d, v, P) {
            if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, s(c, f, "" + v, P);
            if (typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case Vr:
                        return f = f.get(v.key === null ? d : v.key) || null, u(c, f, v, P);
                    case gn:
                        return f = f.get(v.key === null ? d : v.key) || null, a(c, f, v, P);
                    case Rt:
                        var z = v._init;
                        return y(f, c, d, z(v._payload), P);
                }
                if (rr(v) || bn(v)) return f = f.get(d) || null, p(c, f, v, P, null);
                Zr(c, v);
            }
            return null;
        }
        function k(f, c, d, v) {
            for(var P = null, z = null, _ = c, g = c = 0, A = null; _ !== null && g < d.length; g++){
                _.index > g ? (A = _, _ = null) : A = _.sibling;
                var D = h(f, _, d[g], v);
                if (D === null) {
                    _ === null && (_ = A);
                    break;
                }
                e && _ && D.alternate === null && t(f, _), c = l(D, c, g), z === null ? P = D : z.sibling = D, z = D, _ = A;
            }
            if (g === d.length) return n(f, _), q && Jt(f, g), P;
            if (_ === null) {
                for(; g < d.length; g++)_ = m(f, d[g], v), _ !== null && (c = l(_, c, g), z === null ? P = _ : z.sibling = _, z = _);
                return q && Jt(f, g), P;
            }
            for(_ = r(f, _); g < d.length; g++)A = y(_, f, g, d[g], v), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? g : A.key), c = l(A, c, g), z === null ? P = A : z.sibling = A, z = A);
            return e && _.forEach(function(le) {
                return t(f, le);
            }), q && Jt(f, g), P;
        }
        function w(f, c, d, v) {
            var P = bn(d);
            if (typeof P != "function") throw Error(C(150));
            if (d = P.call(d), d == null) throw Error(C(151));
            for(var z = P = null, _ = c, g = c = 0, A = null, D = d.next(); _ !== null && !D.done; g++, D = d.next()){
                _.index > g ? (A = _, _ = null) : A = _.sibling;
                var le = h(f, _, D.value, v);
                if (le === null) {
                    _ === null && (_ = A);
                    break;
                }
                e && _ && le.alternate === null && t(f, _), c = l(le, c, g), z === null ? P = le : z.sibling = le, z = le, _ = A;
            }
            if (D.done) return n(f, _), q && Jt(f, g), P;
            if (_ === null) {
                for(; !D.done; g++, D = d.next())D = m(f, D.value, v), D !== null && (c = l(D, c, g), z === null ? P = D : z.sibling = D, z = D);
                return q && Jt(f, g), P;
            }
            for(_ = r(f, _); !D.done; g++, D = d.next())D = y(_, f, g, D.value, v), D !== null && (e && D.alternate !== null && _.delete(D.key === null ? g : D.key), c = l(D, c, g), z === null ? P = D : z.sibling = D, z = D);
            return e && _.forEach(function(_e) {
                return t(f, _e);
            }), q && Jt(f, g), P;
        }
        function x(f, c, d, v) {
            if (typeof d == "object" && d !== null && d.type === vn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
                switch(d.$$typeof){
                    case Vr:
                        e: {
                            for(var P = d.key, z = c; z !== null;){
                                if (z.key === P) {
                                    if (P = d.type, P === vn) {
                                        if (z.tag === 7) {
                                            n(f, z.sibling), c = o(z, d.props.children), c.return = f, f = c;
                                            break e;
                                        }
                                    } else if (z.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Rt && hu(P) === z.type) {
                                        n(f, z.sibling), c = o(z, d.props), c.ref = Jn(f, z, d), c.return = f, f = c;
                                        break e;
                                    }
                                    n(f, z);
                                    break;
                                } else t(f, z);
                                z = z.sibling;
                            }
                            d.type === vn ? (c = on(d.props.children, f.mode, v, d.key), c.return = f, f = c) : (v = vo(d.type, d.key, d.props, null, f.mode, v), v.ref = Jn(f, c, d), v.return = f, f = v);
                        }
                        return i(f);
                    case gn:
                        e: {
                            for(z = d.key; c !== null;){
                                if (c.key === z) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                    n(f, c.sibling), c = o(c, d.children || []), c.return = f, f = c;
                                    break e;
                                } else {
                                    n(f, c);
                                    break;
                                }
                                else t(f, c);
                                c = c.sibling;
                            }
                            c = Ol(d, f.mode, v), c.return = f, f = c;
                        }
                        return i(f);
                    case Rt:
                        return z = d._init, x(f, c, z(d._payload), v);
                }
                if (rr(d)) return k(f, c, d, v);
                if (bn(d)) return w(f, c, d, v);
                Zr(f, d);
            }
            return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, d), c.return = f, f = c) : (n(f, c), c = jl(d, f.mode, v), c.return = f, f = c), i(f)) : n(f, c);
        }
        return x;
    }
    var Fn = gc(!0), vc = gc(!1), Io = bt(null), Lo = null, _n = null, rs = null;
    function os() {
        rs = _n = Lo = null;
    }
    function ls(e) {
        var t = Io.current;
        J(Io), e._currentValue = t;
    }
    function mi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function In(e, t) {
        Lo = e, rs = _n = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Le = !0), e.firstContext = null);
    }
    function Ze(e) {
        var t = e._currentValue;
        if (rs !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, _n === null) {
            if (Lo === null) throw Error(C(308));
            _n = e, Lo.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else _n = _n.next = e;
        return t;
    }
    var tn = null;
    function is(e) {
        tn === null ? tn = [
            e
        ] : tn.push(e);
    }
    function yc(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, is(t)) : (n.next = o.next, o.next = n), t.interleaved = n, St(e, r);
    }
    function St(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Tt = !1;
    function ss(e) {
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
    function wc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function wt(e, t) {
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
        if (r = r.shared, G & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, St(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, is(r)) : (t.next = o.next, o.next = t), r.interleaved = t, St(e, n);
    }
    function co(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Qi(e, n);
        }
    }
    function gu(e, t) {
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
    function jo(e, t, n, r) {
        var o = e.updateQueue;
        Tt = !1;
        var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
        if (s !== null) {
            o.shared.pending = null;
            var u = s, a = u.next;
            u.next = null, i === null ? l = a : i.next = a, i = u;
            var p = e.alternate;
            p !== null && (p = p.updateQueue, s = p.lastBaseUpdate, s !== i && (s === null ? p.firstBaseUpdate = a : s.next = a, p.lastBaseUpdate = u));
        }
        if (l !== null) {
            var m = o.baseState;
            i = 0, p = a = u = null, s = l;
            do {
                var h = s.lane, y = s.eventTime;
                if ((r & h) === h) {
                    p !== null && (p = p.next = {
                        eventTime: y,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var k = e, w = s;
                        switch(h = t, y = n, w.tag){
                            case 1:
                                if (k = w.payload, typeof k == "function") {
                                    m = k.call(y, m, h);
                                    break e;
                                }
                                m = k;
                                break e;
                            case 3:
                                k.flags = k.flags & -65537 | 128;
                            case 0:
                                if (k = w.payload, h = typeof k == "function" ? k.call(y, m, h) : k, h == null) break e;
                                m = re({}, m, h);
                                break e;
                            case 2:
                                Tt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = o.effects, h === null ? o.effects = [
                        s
                    ] : h.push(s));
                } else y = {
                    eventTime: y,
                    lane: h,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, p === null ? (a = p = y, u = m) : p = p.next = y, i |= h;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    h = s, s = h.next, h.next = null, o.lastBaseUpdate = h, o.shared.pending = null;
                }
            }while (!0);
            if (p === null && (u = m), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            cn |= i, e.lanes = i, e.memoizedState = m;
        }
    }
    function vu(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(C(191, o));
                o.call(r);
            }
        }
    }
    var Fr = {}, dt = bt(Fr), Pr = bt(Fr), Nr = bt(Fr);
    function nn(e) {
        if (e === Fr) throw Error(C(174));
        return e;
    }
    function us(e, t) {
        switch(X(Nr, t), X(Pr, e), X(dt, Fr), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Kl(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Kl(t, e);
        }
        J(dt), X(dt, t);
    }
    function An() {
        J(dt), J(Pr), J(Nr);
    }
    function kc(e) {
        nn(Nr.current);
        var t = nn(dt.current), n = Kl(t, e.type);
        t !== n && (X(Pr, e), X(dt, n));
    }
    function as(e) {
        Pr.current === e && (J(dt), J(Pr));
    }
    var te = bt(0);
    function Oo(e) {
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
    var zl = [];
    function cs() {
        for(var e = 0; e < zl.length; e++)zl[e]._workInProgressVersionPrimary = null;
        zl.length = 0;
    }
    var fo = Et.ReactCurrentDispatcher, Rl = Et.ReactCurrentBatchConfig, an = 0, ne = null, pe = null, ge = null, Do = !1, fr = !1, zr = 0, Qp = 0;
    function xe() {
        throw Error(C(321));
    }
    function fs(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!st(e[n], t[n])) return !1;
        return !0;
    }
    function ds(e, t, n, r, o, l) {
        if (an = l, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = e === null || e.memoizedState === null ? Xp : Zp, e = n(r, o), fr) {
            l = 0;
            do {
                if (fr = !1, zr = 0, 25 <= l) throw Error(C(301));
                l += 1, ge = pe = null, t.updateQueue = null, fo.current = Jp, e = n(r, o);
            }while (fr);
        }
        if (fo.current = Fo, t = pe !== null && pe.next !== null, an = 0, ge = pe = ne = null, Do = !1, t) throw Error(C(300));
        return e;
    }
    function ps() {
        var e = zr !== 0;
        return zr = 0, e;
    }
    function at() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return ge === null ? ne.memoizedState = ge = e : ge = ge.next = e, ge;
    }
    function Je() {
        if (pe === null) {
            var e = ne.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = pe.next;
        var t = ge === null ? ne.memoizedState : ge.next;
        if (t !== null) ge = t, pe = e;
        else {
            if (e === null) throw Error(C(310));
            pe = e, e = {
                memoizedState: pe.memoizedState,
                baseState: pe.baseState,
                baseQueue: pe.baseQueue,
                queue: pe.queue,
                next: null
            }, ge === null ? ne.memoizedState = ge = e : ge = ge.next = e;
        }
        return ge;
    }
    function Rr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Tl(e) {
        var t = Je(), n = t.queue;
        if (n === null) throw Error(C(311));
        n.lastRenderedReducer = e;
        var r = pe, o = r.baseQueue, l = n.pending;
        if (l !== null) {
            if (o !== null) {
                var i = o.next;
                o.next = l.next, l.next = i;
            }
            r.baseQueue = o = l, n.pending = null;
        }
        if (o !== null) {
            l = o.next, r = r.baseState;
            var s = i = null, u = null, a = l;
            do {
                var p = a.lane;
                if ((an & p) === p) u !== null && (u = u.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
                else {
                    var m = {
                        lane: p,
                        action: a.action,
                        hasEagerState: a.hasEagerState,
                        eagerState: a.eagerState,
                        next: null
                    };
                    u === null ? (s = u = m, i = r) : u = u.next = m, ne.lanes |= p, cn |= p;
                }
                a = a.next;
            }while (a !== null && a !== l);
            u === null ? i = r : u.next = s, st(r, t.memoizedState) || (Le = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ne.lanes |= l, cn |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Ml(e) {
        var t = Je(), n = t.queue;
        if (n === null) throw Error(C(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            st(l, t.memoizedState) || (Le = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function xc() {}
    function Sc(e, t) {
        var n = ne, r = Je(), o = t(), l = !st(r.memoizedState, o);
        if (l && (r.memoizedState = o, Le = !0), r = r.queue, ms(_c.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || ge !== null && ge.memoizedState.tag & 1) {
            if (n.flags |= 2048, Tr(9, Ec.bind(null, n, r, o, t), void 0, null), ve === null) throw Error(C(349));
            an & 30 || Cc(n, t, o);
        }
        return o;
    }
    function Cc(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = ne.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ne.updateQueue = t, t.stores = [
            e
        ]) : (n = t.stores, n === null ? t.stores = [
            e
        ] : n.push(e));
    }
    function Ec(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Pc(t) && Nc(e);
    }
    function _c(e, t, n) {
        return n(function() {
            Pc(t) && Nc(e);
        });
    }
    function Pc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !st(e, n);
        } catch  {
            return !0;
        }
    }
    function Nc(e) {
        var t = St(e, 1);
        t !== null && it(t, e, 1, -1);
    }
    function yu(e) {
        var t = at();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Rr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Yp.bind(null, ne, e), [
            t.memoizedState,
            e
        ];
    }
    function Tr(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, t = ne.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
    }
    function zc() {
        return Je().memoizedState;
    }
    function po(e, t, n, r) {
        var o = at();
        ne.flags |= e, o.memoizedState = Tr(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function qo(e, t, n, r) {
        var o = Je();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (pe !== null) {
            var i = pe.memoizedState;
            if (l = i.destroy, r !== null && fs(r, i.deps)) {
                o.memoizedState = Tr(t, n, l, r);
                return;
            }
        }
        ne.flags |= e, o.memoizedState = Tr(1 | t, n, l, r);
    }
    function wu(e, t) {
        return po(8390656, 8, e, t);
    }
    function ms(e, t) {
        return qo(2048, 8, e, t);
    }
    function Rc(e, t) {
        return qo(4, 2, e, t);
    }
    function Tc(e, t) {
        return qo(4, 4, e, t);
    }
    function Mc(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Ic(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, qo(4, 4, Mc.bind(null, t, e), n);
    }
    function hs() {}
    function Lc(e, t) {
        var n = Je();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && fs(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function jc(e, t) {
        var n = Je();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && fs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Oc(e, t, n) {
        return an & 21 ? (st(n, t) || (n = Va(), ne.lanes |= n, cn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Le = !0), e.memoizedState = n);
    }
    function bp(e, t) {
        var n = H;
        H = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Rl.transition;
        Rl.transition = {};
        try {
            e(!1), t();
        } finally{
            H = n, Rl.transition = r;
        }
    }
    function Dc() {
        return Je().memoizedState;
    }
    function Kp(e, t, n) {
        var r = Bt(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Fc(e)) Ac(t, n);
        else if (n = yc(e, t, n, r), n !== null) {
            var o = ze();
            it(n, e, r, o), Uc(n, t, r);
        }
    }
    function Yp(e, t, n) {
        var r = Bt(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Fc(e)) Ac(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, st(s, i)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o, is(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = yc(e, t, o, r), n !== null && (o = ze(), it(n, e, r, o), Uc(n, t, r));
        }
    }
    function Fc(e) {
        var t = e.alternate;
        return e === ne || t !== null && t === ne;
    }
    function Ac(e, t) {
        fr = Do = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Uc(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Qi(e, n);
        }
    }
    var Fo = {
        readContext: Ze,
        useCallback: xe,
        useContext: xe,
        useEffect: xe,
        useImperativeHandle: xe,
        useInsertionEffect: xe,
        useLayoutEffect: xe,
        useMemo: xe,
        useReducer: xe,
        useRef: xe,
        useState: xe,
        useDebugValue: xe,
        useDeferredValue: xe,
        useTransition: xe,
        useMutableSource: xe,
        useSyncExternalStore: xe,
        useId: xe,
        unstable_isNewReconciler: !1
    }, Xp = {
        readContext: Ze,
        useCallback: function(e, t) {
            return at().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: Ze,
        useEffect: wu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, po(4194308, 4, Mc.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return po(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return po(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = at();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = at();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Kp.bind(null, ne, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = at();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: yu,
        useDebugValue: hs,
        useDeferredValue: function(e) {
            return at().memoizedState = e;
        },
        useTransition: function() {
            var e = yu(!1), t = e[0];
            return e = bp.bind(null, e[1]), at().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ne, o = at();
            if (q) {
                if (n === void 0) throw Error(C(407));
                n = n();
            } else {
                if (n = t(), ve === null) throw Error(C(349));
                an & 30 || Cc(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, wu(_c.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, Tr(9, Ec.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = at(), t = ve.identifierPrefix;
            if (q) {
                var n = yt, r = vt;
                n = (r & ~(1 << 32 - lt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = zr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Qp++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Zp = {
        readContext: Ze,
        useCallback: Lc,
        useContext: Ze,
        useEffect: ms,
        useImperativeHandle: Ic,
        useInsertionEffect: Rc,
        useLayoutEffect: Tc,
        useMemo: jc,
        useReducer: Tl,
        useRef: zc,
        useState: function() {
            return Tl(Rr);
        },
        useDebugValue: hs,
        useDeferredValue: function(e) {
            var t = Je();
            return Oc(t, pe.memoizedState, e);
        },
        useTransition: function() {
            var e = Tl(Rr)[0], t = Je().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: xc,
        useSyncExternalStore: Sc,
        useId: Dc,
        unstable_isNewReconciler: !1
    }, Jp = {
        readContext: Ze,
        useCallback: Lc,
        useContext: Ze,
        useEffect: ms,
        useImperativeHandle: Ic,
        useInsertionEffect: Rc,
        useLayoutEffect: Tc,
        useMemo: jc,
        useReducer: Ml,
        useRef: zc,
        useState: function() {
            return Ml(Rr);
        },
        useDebugValue: hs,
        useDeferredValue: function(e) {
            var t = Je();
            return pe === null ? t.memoizedState = e : Oc(t, pe.memoizedState, e);
        },
        useTransition: function() {
            var e = Ml(Rr)[0], t = Je().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: xc,
        useSyncExternalStore: Sc,
        useId: Dc,
        unstable_isNewReconciler: !1
    };
    function nt(e, t) {
        if (e && e.defaultProps) {
            t = re({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function hi(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var el = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? pn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = ze(), o = Bt(e), l = wt(r, o);
            l.payload = t, n != null && (l.callback = n), t = Vt(e, l, o), t !== null && (it(t, e, o, r), co(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = ze(), o = Bt(e), l = wt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Vt(e, l, o), t !== null && (it(t, e, o, r), co(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = ze(), r = Bt(e), o = wt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = Vt(e, o, r), t !== null && (it(t, e, r, n), co(t, e, r));
        }
    };
    function ku(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Sr(n, r) || !Sr(o, l) : !0;
    }
    function Vc(e, t, n) {
        var r = !1, o = Ht, l = t.contextType;
        return typeof l == "object" && l !== null ? l = Ze(l) : (o = Oe(t) ? sn : Ee.current, r = t.contextTypes, l = (r = r != null) ? On(e, o) : Ht), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = el, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function xu(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && el.enqueueReplaceState(t, t.state, null);
    }
    function gi(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, ss(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = Ze(l) : (l = Oe(t) ? sn : Ee.current, o.context = On(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (hi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && el.enqueueReplaceState(o, o.state, null), jo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Un(e, t) {
        try {
            var n = "", r = t;
            do n += Pd(r), r = r.return;
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
    function Il(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function vi(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var qp = typeof WeakMap == "function" ? WeakMap : Map;
    function $c(e, t, n) {
        n = wt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Uo || (Uo = !0, Ni = r), vi(e, t);
        }, n;
    }
    function Bc(e, t, n) {
        n = wt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                vi(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            vi(e, t), typeof r != "function" && ($t === null ? $t = new Set([
                this
            ]) : $t.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function Su(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new qp;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = pm.bind(null, e, t, n), t.then(e, e));
    }
    function Cu(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function Eu(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1), t.tag = 2, Vt(n, t, 1))), n.lanes |= 1), e);
    }
    var em = Et.ReactCurrentOwner, Le = !1;
    function Ne(e, t, n, r) {
        t.child = e === null ? vc(t, null, n, r) : Fn(t, e.child, n, r);
    }
    function _u(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return In(t, o), r = ds(e, t, n, r, l, o), n = ps(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (q && n && es(t), t.flags |= 1, Ne(e, t, r, o), t.child);
    }
    function Pu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Cs(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Wc(e, t, l, r, o)) : (e = vo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Sr, n(i, r) && e.ref === t.ref) return Ct(e, t, o);
        }
        return t.flags |= 1, e = Wt(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Wc(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Sr(l, r) && e.ref === t.ref) if (Le = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Le = !0);
            else return t.lanes = e.lanes, Ct(e, t, o);
        }
        return yi(e, t, n, r, o);
    }
    function Gc(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, X(Nn, Ve), Ve |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, X(Nn, Ve), Ve |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, X(Nn, Ve), Ve |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, X(Nn, Ve), Ve |= r;
        return Ne(e, t, o, n), t.child;
    }
    function Hc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function yi(e, t, n, r, o) {
        var l = Oe(n) ? sn : Ee.current;
        return l = On(t, l), In(t, o), n = ds(e, t, n, r, l, o), r = ps(), e !== null && !Le ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ct(e, t, o)) : (q && r && es(t), t.flags |= 1, Ne(e, t, n, o), t.child);
    }
    function Nu(e, t, n, r, o) {
        if (Oe(n)) {
            var l = !0;
            Ro(t);
        } else l = !1;
        if (In(t, o), t.stateNode === null) mo(e, t), Vc(t, n, r), gi(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var u = i.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = Ze(a) : (a = Oe(n) ? sn : Ee.current, a = On(t, a));
            var p = n.getDerivedStateFromProps, m = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && xu(t, i, r, a), Tt = !1;
            var h = t.memoizedState;
            i.state = h, jo(t, r, i, o), u = t.memoizedState, s !== r || h !== u || je.current || Tt ? (typeof p == "function" && (hi(t, n, p, r), u = t.memoizedState), (s = Tt || ku(t, n, s, r, h, u, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, wc(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : nt(t.type, s), i.props = a, m = t.pendingProps, h = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Ze(u) : (u = Oe(n) ? sn : Ee.current, u = On(t, u));
            var y = n.getDerivedStateFromProps;
            (p = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== m || h !== u) && xu(t, i, r, u), Tt = !1, h = t.memoizedState, i.state = h, jo(t, r, i, o);
            var k = t.memoizedState;
            s !== m || h !== k || je.current || Tt ? (typeof y == "function" && (hi(t, n, y, r), k = t.memoizedState), (a = Tt || ku(t, n, a, r, h, k, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return wi(e, t, n, r, l, o);
    }
    function wi(e, t, n, r, o, l) {
        Hc(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && du(t, n, !1), Ct(e, t, l);
        r = t.stateNode, em.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = Fn(t, e.child, null, l), t.child = Fn(t, null, s, l)) : Ne(e, t, s, l), t.memoizedState = r.state, o && du(t, n, !0), t.child;
    }
    function Qc(e) {
        var t = e.stateNode;
        t.pendingContext ? fu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && fu(e, t.context, !1), us(e, t.containerInfo);
    }
    function zu(e, t, n, r, o) {
        return Dn(), ns(o), t.flags |= 256, Ne(e, t, n, r), t.child;
    }
    var ki = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function xi(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function bc(e, t, n) {
        var r = t.pendingProps, o = te.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), X(te, o & 1), e === null) return pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = rl(i, r, 0, null), e = on(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = xi(n), t.memoizedState = ki, e) : gs(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return tm(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var u = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Wt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Wt(s, l) : (l = on(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? xi(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ki, r;
        }
        return l = e.child, e = l.sibling, r = Wt(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function gs(e, t) {
        return t = rl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function Jr(e, t, n, r) {
        return r !== null && ns(r), Fn(t, e.child, null, n), e = gs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function tm(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Il(Error(C(422))), Jr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = rl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = on(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Fn(t, e.child, null, i), t.child.memoizedState = xi(i), t.memoizedState = ki, l);
        if (!(t.mode & 1)) return Jr(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(C(419)), r = Il(l, r, void 0), Jr(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Le || s) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, St(e, o), it(r, e, o, -1));
            }
            return Ss(), r = Il(Error(C(421))), Jr(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mm.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, $e = Ut(o.nextSibling), Be = t, q = !0, ot = null, e !== null && (be[Ke++] = vt, be[Ke++] = yt, be[Ke++] = un, vt = e.id, yt = e.overflow, un = t), t = gs(t, r.children), t.flags |= 4096, t);
    }
    function Ru(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), mi(e.return, t, n);
    }
    function Ll(e, t, n, r, o) {
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
    function Kc(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Ne(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
                else if (e.tag === 19) Ru(e, n, t);
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
        if (X(te, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Oo(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ll(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Oo(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                Ll(t, !0, n, null, l);
                break;
            case "together":
                Ll(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function mo(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Ct(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(C(153));
        if (t.child !== null) {
            for(e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = Wt(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function nm(e, t, n) {
        switch(t.tag){
            case 3:
                Qc(t), Dn();
                break;
            case 5:
                kc(t);
                break;
            case 1:
                Oe(t.type) && Ro(t);
                break;
            case 4:
                us(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                X(Io, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (X(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? bc(e, t, n) : (X(te, te.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
                X(te, te.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return Kc(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), X(te, te.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Gc(e, t, n);
        }
        return Ct(e, t, n);
    }
    var Yc, Si, Xc, Zc;
    Yc = function(e, t) {
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
    Si = function() {};
    Xc = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, nn(dt.current);
            var l = null;
            switch(n){
                case "input":
                    o = Gl(e, o), r = Gl(e, r), l = [];
                    break;
                case "select":
                    o = re({}, o, {
                        value: void 0
                    }), r = re({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = bl(e, o), r = bl(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = No);
            }
            Yl(n, r);
            var i;
            n = null;
            for(a in o)if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
                var s = o[a];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (hr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
            for(a in r){
                var u = r[a];
                if (s = o?.[a], r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in u)u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
                } else n || (l || (l = []), l.push(a, n)), n = u;
                else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (hr.hasOwnProperty(a) ? (u != null && a === "onScroll" && Z("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
            }
            n && (l = l || []).push("style", n);
            var a = l;
            (t.updateQueue = a) && (t.flags |= 4);
        }
    };
    Zc = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function qn(e, t) {
        if (!q) switch(e.tailMode){
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
    function Se(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function rm(e, t, n) {
        var r = t.pendingProps;
        switch(ts(t), t.tag){
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
                return Se(t), null;
            case 1:
                return Oe(t.type) && zo(), Se(t), null;
            case 3:
                return r = t.stateNode, An(), J(je), J(Ee), cs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ot !== null && (Ti(ot), ot = null))), Si(e, t), Se(t), null;
            case 5:
                as(t);
                var o = nn(Nr.current);
                if (n = t.type, e !== null && t.stateNode != null) Xc(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(C(166));
                        return Se(t), null;
                    }
                    if (e = nn(dt.current), Xr(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[ct] = t, r[_r] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                Z("cancel", r), Z("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Z("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < lr.length; o++)Z(lr[o], r);
                                break;
                            case "source":
                                Z("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Z("error", r), Z("load", r);
                                break;
                            case "details":
                                Z("toggle", r);
                                break;
                            case "input":
                                As(r, l), Z("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, Z("invalid", r);
                                break;
                            case "textarea":
                                Vs(r, l), Z("invalid", r);
                        }
                        Yl(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Yr(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Yr(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : hr.hasOwnProperty(i) && s != null && i === "onScroll" && Z("scroll", r);
                        }
                        switch(n){
                            case "input":
                                $r(r), Us(r, l, !0);
                                break;
                            case "textarea":
                                $r(r), $s(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = No);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = _a(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[ct] = t, e[_r] = r, Yc(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = Xl(n, r), n){
                                case "dialog":
                                    Z("cancel", e), Z("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Z("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < lr.length; o++)Z(lr[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    Z("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Z("error", e), Z("load", e), o = r;
                                    break;
                                case "details":
                                    Z("toggle", e), o = r;
                                    break;
                                case "input":
                                    As(e, r), o = Gl(e, r), Z("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = re({}, r, {
                                        value: void 0
                                    }), Z("invalid", e);
                                    break;
                                case "textarea":
                                    Vs(e, r), o = bl(e, r), Z("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Yl(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                l === "style" ? za(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Pa(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && gr(e, u) : typeof u == "number" && gr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (hr.hasOwnProperty(l) ? u != null && l === "onScroll" && Z("scroll", e) : u != null && Vi(e, l, u, i));
                            }
                            switch(n){
                                case "input":
                                    $r(e), Us(e, r, !1);
                                    break;
                                case "textarea":
                                    $r(e), $s(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + Gt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? zn(e, !!r.multiple, l, !1) : r.defaultValue != null && zn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = No);
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
                return Se(t), null;
            case 6:
                if (e && t.stateNode != null) Zc(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
                    if (n = nn(Nr.current), nn(dt.current), Xr(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[ct] = t, (l = r.nodeValue !== n) && (e = Be, e !== null)) switch(e.tag){
                            case 3:
                                Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ct] = t, t.stateNode = r;
                }
                return Se(t), null;
            case 13:
                if (J(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (q && $e !== null && t.mode & 1 && !(t.flags & 128)) hc(), Dn(), t.flags |= 98560, l = !1;
                    else if (l = Xr(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(C(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
                            l[ct] = t;
                        } else Dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Se(t), l = !1;
                    } else ot !== null && (Ti(ot), ot = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? me === 0 && (me = 3) : Ss())), t.updateQueue !== null && (t.flags |= 4), Se(t), null);
            case 4:
                return An(), Si(e, t), e === null && Cr(t.stateNode.containerInfo), Se(t), null;
            case 10:
                return ls(t.type._context), Se(t), null;
            case 17:
                return Oe(t.type) && zo(), Se(t), null;
            case 19:
                if (J(te), l = t.memoizedState, l === null) return Se(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) qn(l, !1);
                else {
                    if (me !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Oo(e), i !== null) {
                            for(t.flags |= 128, qn(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return X(te, te.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && se() > Vn && (t.flags |= 128, r = !0, qn(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Oo(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qn(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !q) return Se(t), null;
                    } else 2 * se() - l.renderingStartTime > Vn && n !== 1073741824 && (t.flags |= 128, r = !0, qn(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = se(), t.sibling = null, n = te.current, X(te, r ? n & 1 | 2 : n & 1), t) : (Se(t), null);
            case 22:
            case 23:
                return xs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ve & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Se(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(C(156, t.tag));
    }
    function om(e, t) {
        switch(ts(t), t.tag){
            case 1:
                return Oe(t.type) && zo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return An(), J(je), J(Ee), cs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return as(t), null;
            case 13:
                if (J(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(C(340));
                    Dn();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return J(te), null;
            case 4:
                return An(), null;
            case 10:
                return ls(t.type._context), null;
            case 22:
            case 23:
                return xs(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var qr = !1, Ce = !1, lm = typeof WeakSet == "function" ? WeakSet : Set, I = null;
    function Pn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            oe(e, t, r);
        }
        else n.current = null;
    }
    function Ci(e, t, n) {
        try {
            n();
        } catch (r) {
            oe(e, t, r);
        }
    }
    var Tu = !1;
    function im(e, t) {
        if (ii = Eo, e = nc(), qi(e)) {
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
                    var i = 0, s = -1, u = -1, a = 0, p = 0, m = e, h = null;
                    t: for(;;){
                        for(var y; m !== n || o !== 0 && m.nodeType !== 3 || (s = i + o), m !== l || r !== 0 && m.nodeType !== 3 || (u = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (y = m.firstChild) !== null;)h = m, m = y;
                        for(;;){
                            if (m === e) break t;
                            if (h === n && ++a === o && (s = i), h === l && ++p === r && (u = i), (y = m.nextSibling) !== null) break;
                            m = h, h = m.parentNode;
                        }
                        m = y;
                    }
                    n = s === -1 || u === -1 ? null : {
                        start: s,
                        end: u
                    };
                } else n = null;
            }
            n = n || {
                start: 0,
                end: 0
            };
        } else n = null;
        for(si = {
            focusedElem: e,
            selectionRange: n
        }, Eo = !1, I = t; I !== null;)if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
        else for(; I !== null;){
            t = I;
            try {
                var k = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (k !== null) {
                            var w = k.memoizedProps, x = k.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : nt(t.type, w), x);
                            f.__reactInternalSnapshotBeforeUpdate = c;
                        }
                        break;
                    case 3:
                        var d = t.stateNode.containerInfo;
                        d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                        break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw Error(C(163));
                }
            } catch (v) {
                oe(t, t.return, v);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, I = e;
                break;
            }
            I = t.return;
        }
        return k = Tu, Tu = !1, k;
    }
    function dr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && Ci(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function tl(e, t) {
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
    function Ei(e) {
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
    function Jc(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Jc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ct], delete t[_r], delete t[ci], delete t[Bp], delete t[Wp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function qc(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Mu(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || qc(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function _i(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = No));
        else if (r !== 4 && (e = e.child, e !== null)) for(_i(e, t, n), e = e.sibling; e !== null;)_i(e, t, n), e = e.sibling;
    }
    function Pi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Pi(e, t, n), e = e.sibling; e !== null;)Pi(e, t, n), e = e.sibling;
    }
    var ye = null, rt = !1;
    function Pt(e, t, n) {
        for(n = n.child; n !== null;)ef(e, t, n), n = n.sibling;
    }
    function ef(e, t, n) {
        if (ft && typeof ft.onCommitFiberUnmount == "function") try {
            ft.onCommitFiberUnmount(bo, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Ce || Pn(n, t);
            case 6:
                var r = ye, o = rt;
                ye = null, Pt(e, t, n), ye = r, rt = o, ye !== null && (rt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
                break;
            case 18:
                ye !== null && (rt ? (e = ye, n = n.stateNode, e.nodeType === 8 ? Pl(e.parentNode, n) : e.nodeType === 1 && Pl(e, n), kr(e)) : Pl(ye, n.stateNode));
                break;
            case 4:
                r = ye, o = rt, ye = n.stateNode.containerInfo, rt = !0, Pt(e, t, n), ye = r, rt = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Ci(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Pt(e, t, n);
                break;
            case 1:
                if (!Ce && (Pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    oe(n, t, s);
                }
                Pt(e, t, n);
                break;
            case 21:
                Pt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Ce = (r = Ce) || n.memoizedState !== null, Pt(e, t, n), Ce = r) : Pt(e, t, n);
                break;
            default:
                Pt(e, t, n);
        }
    }
    function Iu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new lm), t.forEach(function(r) {
                var o = hm.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function tt(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var o = n[r];
            try {
                var l = e, i = t, s = i;
                e: for(; s !== null;){
                    switch(s.tag){
                        case 5:
                            ye = s.stateNode, rt = !1;
                            break e;
                        case 3:
                            ye = s.stateNode.containerInfo, rt = !0;
                            break e;
                        case 4:
                            ye = s.stateNode.containerInfo, rt = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (ye === null) throw Error(C(160));
                ef(l, i, o), ye = null, rt = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null;
            } catch (a) {
                oe(o, t, a);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)tf(t, e), t = t.sibling;
    }
    function tf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (tt(t, e), ut(e), r & 4) {
                    try {
                        dr(3, e, e.return), tl(3, e);
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                    try {
                        dr(5, e, e.return);
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                }
                break;
            case 1:
                tt(t, e), ut(e), r & 512 && n !== null && Pn(n, n.return);
                break;
            case 5:
                if (tt(t, e), ut(e), r & 512 && n !== null && Pn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        gr(o, "");
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
                    if (e.updateQueue = null, u !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Ca(o, l), Xl(s, i);
                        var a = Xl(s, l);
                        for(i = 0; i < u.length; i += 2){
                            var p = u[i], m = u[i + 1];
                            p === "style" ? za(o, m) : p === "dangerouslySetInnerHTML" ? Pa(o, m) : p === "children" ? gr(o, m) : Vi(o, p, m, a);
                        }
                        switch(s){
                            case "input":
                                Hl(o, l);
                                break;
                            case "textarea":
                                Ea(o, l);
                                break;
                            case "select":
                                var h = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var y = l.value;
                                y != null ? zn(o, !!l.multiple, y, !1) : h !== !!l.multiple && (l.defaultValue != null ? zn(o, !!l.multiple, l.defaultValue, !0) : zn(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[_r] = l;
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                }
                break;
            case 6:
                if (tt(t, e), ut(e), r & 4) {
                    if (e.stateNode === null) throw Error(C(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (w) {
                        oe(e, e.return, w);
                    }
                }
                break;
            case 3:
                if (tt(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    kr(t.containerInfo);
                } catch (w) {
                    oe(e, e.return, w);
                }
                break;
            case 4:
                tt(t, e), ut(e);
                break;
            case 13:
                tt(t, e), ut(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (ws = se())), r & 4 && Iu(e);
                break;
            case 22:
                if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ce = (a = Ce) || p, tt(t, e), Ce = a) : tt(t, e), ut(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1) for(I = e, p = e.child; p !== null;){
                        for(m = I = p; I !== null;){
                            switch(h = I, y = h.child, h.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    dr(4, h, h.return);
                                    break;
                                case 1:
                                    Pn(h, h.return);
                                    var k = h.stateNode;
                                    if (typeof k.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                                        } catch (w) {
                                            oe(r, n, w);
                                        }
                                    }
                                    break;
                                case 5:
                                    Pn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        ju(m);
                                        continue;
                                    }
                            }
                            y !== null ? (y.return = h, I = y) : ju(m);
                        }
                        p = p.sibling;
                    }
                    e: for(p = null, m = e;;){
                        if (m.tag === 5) {
                            if (p === null) {
                                p = m;
                                try {
                                    o = m.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = m.stateNode, u = m.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Na("display", i));
                                } catch (w) {
                                    oe(e, e.return, w);
                                }
                            }
                        } else if (m.tag === 6) {
                            if (p === null) try {
                                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                            } catch (w) {
                                oe(e, e.return, w);
                            }
                        } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                            m.child.return = m, m = m.child;
                            continue;
                        }
                        if (m === e) break e;
                        for(; m.sibling === null;){
                            if (m.return === null || m.return === e) break e;
                            p === m && (p = null), m = m.return;
                        }
                        p === m && (p = null), m.sibling.return = m.return, m = m.sibling;
                    }
                }
                break;
            case 19:
                tt(t, e), ut(e), r & 4 && Iu(e);
                break;
            case 21:
                break;
            default:
                tt(t, e), ut(e);
        }
    }
    function ut(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (qc(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(C(160));
                }
                switch(r.tag){
                    case 5:
                        var o = r.stateNode;
                        r.flags & 32 && (gr(o, ""), r.flags &= -33);
                        var l = Mu(e);
                        Pi(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = Mu(e);
                        _i(e, s, i);
                        break;
                    default:
                        throw Error(C(161));
                }
            } catch (u) {
                oe(e, e.return, u);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function sm(e, t, n) {
        I = e, nf(e);
    }
    function nf(e, t, n) {
        for(var r = (e.mode & 1) !== 0; I !== null;){
            var o = I, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || qr;
                if (!i) {
                    var s = o.alternate, u = s !== null && s.memoizedState !== null || Ce;
                    s = qr;
                    var a = Ce;
                    if (qr = i, (Ce = u) && !a) for(I = o; I !== null;)i = I, u = i.child, i.tag === 22 && i.memoizedState !== null ? Ou(o) : u !== null ? (u.return = i, I = u) : Ou(o);
                    for(; l !== null;)I = l, nf(l), l = l.sibling;
                    I = o, qr = s, Ce = a;
                }
                Lu(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, I = l) : Lu(e);
        }
    }
    function Lu(e) {
        for(; I !== null;){
            var t = I;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Ce || tl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Ce) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : nt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && vu(t, l, r);
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
                                vu(t, i, n);
                            }
                            break;
                        case 5:
                            var s = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = s;
                                var u = t.memoizedProps;
                                switch(t.type){
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        u.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        u.src && (n.src = u.src);
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
                                var a = t.alternate;
                                if (a !== null) {
                                    var p = a.memoizedState;
                                    if (p !== null) {
                                        var m = p.dehydrated;
                                        m !== null && kr(m);
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
                            throw Error(C(163));
                    }
                    Ce || t.flags & 512 && Ei(t);
                } catch (h) {
                    oe(t, t.return, h);
                }
            }
            if (t === e) {
                I = null;
                break;
            }
            if (n = t.sibling, n !== null) {
                n.return = t.return, I = n;
                break;
            }
            I = t.return;
        }
    }
    function ju(e) {
        for(; I !== null;){
            var t = I;
            if (t === e) {
                I = null;
                break;
            }
            var n = t.sibling;
            if (n !== null) {
                n.return = t.return, I = n;
                break;
            }
            I = t.return;
        }
    }
    function Ou(e) {
        for(; I !== null;){
            var t = I;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            tl(4, t);
                        } catch (u) {
                            oe(t, n, u);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (u) {
                                oe(t, o, u);
                            }
                        }
                        var l = t.return;
                        try {
                            Ei(t);
                        } catch (u) {
                            oe(t, l, u);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Ei(t);
                        } catch (u) {
                            oe(t, i, u);
                        }
                }
            } catch (u) {
                oe(t, t.return, u);
            }
            if (t === e) {
                I = null;
                break;
            }
            var s = t.sibling;
            if (s !== null) {
                s.return = t.return, I = s;
                break;
            }
            I = t.return;
        }
    }
    var um = Math.ceil, Ao = Et.ReactCurrentDispatcher, vs = Et.ReactCurrentOwner, Xe = Et.ReactCurrentBatchConfig, G = 0, ve = null, fe = null, we = 0, Ve = 0, Nn = bt(0), me = 0, Mr = null, cn = 0, nl = 0, ys = 0, pr = null, Ie = null, ws = 0, Vn = 1 / 0, ht = null, Uo = !1, Ni = null, $t = null, eo = !1, Ot = null, Vo = 0, mr = 0, zi = null, ho = -1, go = 0;
    function ze() {
        return G & 6 ? se() : ho !== -1 ? ho : ho = se();
    }
    function Bt(e) {
        return e.mode & 1 ? G & 2 && we !== 0 ? we & -we : Hp.transition !== null ? (go === 0 && (go = Va()), go) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ba(e.type)), e) : 1;
    }
    function it(e, t, n, r) {
        if (50 < mr) throw mr = 0, zi = null, Error(C(185));
        jr(e, n, r), (!(G & 2) || e !== ve) && (e === ve && (!(G & 2) && (nl |= n), me === 4 && Lt(e, we)), De(e, r), n === 1 && G === 0 && !(t.mode & 1) && (Vn = se() + 500, Jo && Kt()));
    }
    function De(e, t) {
        var n = e.callbackNode;
        Hd(e, t);
        var r = Co(e, e === ve ? we : 0);
        if (r === 0) n !== null && Gs(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Gs(n), t === 1) e.tag === 0 ? Gp(Du.bind(null, e)) : dc(Du.bind(null, e)), Vp(function() {
                !(G & 6) && Kt();
            }), n = null;
            else {
                switch($a(r)){
                    case 1:
                        n = Hi;
                        break;
                    case 4:
                        n = Aa;
                        break;
                    case 16:
                        n = So;
                        break;
                    case 536870912:
                        n = Ua;
                        break;
                    default:
                        n = So;
                }
                n = ff(n, rf.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function rf(e, t) {
        if (ho = -1, go = 0, G & 6) throw Error(C(327));
        var n = e.callbackNode;
        if (Ln() && e.callbackNode !== n) return null;
        var r = Co(e, e === ve ? we : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = $o(e, r);
        else {
            t = r;
            var o = G;
            G |= 2;
            var l = lf();
            (ve !== e || we !== t) && (ht = null, Vn = se() + 500, rn(e, t));
            do try {
                fm();
                break;
            } catch (s) {
                of(e, s);
            }
            while (!0);
            os(), Ao.current = l, G = o, fe !== null ? t = 0 : (ve = null, we = 0, t = me);
        }
        if (t !== 0) {
            if (t === 2 && (o = ti(e), o !== 0 && (r = o, t = Ri(e, o))), t === 1) throw n = Mr, rn(e, 0), Lt(e, r), De(e, se()), n;
            if (t === 6) Lt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !am(o) && (t = $o(e, r), t === 2 && (l = ti(e), l !== 0 && (r = l, t = Ri(e, l))), t === 1)) throw n = Mr, rn(e, 0), Lt(e, r), De(e, se()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(C(345));
                    case 2:
                        qt(e, Ie, ht);
                        break;
                    case 3:
                        if (Lt(e, r), (r & 130023424) === r && (t = ws + 500 - se(), 10 < t)) {
                            if (Co(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                ze(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ai(qt.bind(null, e, Ie, ht), t);
                            break;
                        }
                        qt(e, Ie, ht);
                        break;
                    case 4:
                        if (Lt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - lt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * um(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ai(qt.bind(null, e, Ie, ht), r);
                            break;
                        }
                        qt(e, Ie, ht);
                        break;
                    case 5:
                        qt(e, Ie, ht);
                        break;
                    default:
                        throw Error(C(329));
                }
            }
        }
        return De(e, se()), e.callbackNode === n ? rf.bind(null, e) : null;
    }
    function Ri(e, t) {
        var n = pr;
        return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = $o(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && Ti(t)), e;
    }
    function Ti(e) {
        Ie === null ? Ie = e : Ie.push.apply(Ie, e);
    }
    function am(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!st(l(), o)) return !1;
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
    function Lt(e, t) {
        for(t &= ~ys, t &= ~nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - lt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Du(e) {
        if (G & 6) throw Error(C(327));
        Ln();
        var t = Co(e, 0);
        if (!(t & 1)) return De(e, se()), null;
        var n = $o(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ti(e);
            r !== 0 && (t = r, n = Ri(e, r));
        }
        if (n === 1) throw n = Mr, rn(e, 0), Lt(e, t), De(e, se()), n;
        if (n === 6) throw Error(C(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, qt(e, Ie, ht), De(e, se()), null;
    }
    function ks(e, t) {
        var n = G;
        G |= 1;
        try {
            return e(t);
        } finally{
            G = n, G === 0 && (Vn = se() + 500, Jo && Kt());
        }
    }
    function fn(e) {
        Ot !== null && Ot.tag === 0 && !(G & 6) && Ln();
        var t = G;
        G |= 1;
        var n = Xe.transition, r = H;
        try {
            if (Xe.transition = null, H = 1, e) return e();
        } finally{
            H = r, Xe.transition = n, G = t, !(G & 6) && Kt();
        }
    }
    function xs() {
        Ve = Nn.current, J(Nn);
    }
    function rn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Up(n)), fe !== null) for(n = fe.return; n !== null;){
            var r = n;
            switch(ts(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && zo();
                    break;
                case 3:
                    An(), J(je), J(Ee), cs();
                    break;
                case 5:
                    as(r);
                    break;
                case 4:
                    An();
                    break;
                case 13:
                    J(te);
                    break;
                case 19:
                    J(te);
                    break;
                case 10:
                    ls(r.type._context);
                    break;
                case 22:
                case 23:
                    xs();
            }
            n = n.return;
        }
        if (ve = e, fe = e = Wt(e.current, null), we = Ve = t, me = 0, Mr = null, ys = nl = cn = 0, Ie = pr = null, tn !== null) {
            for(t = 0; t < tn.length; t++)if (n = tn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            tn = null;
        }
        return e;
    }
    function of(e, t) {
        do {
            var n = fe;
            try {
                if (os(), fo.current = Fo, Do) {
                    for(var r = ne.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Do = !1;
                }
                if (an = 0, ge = pe = ne = null, fr = !1, zr = 0, vs.current = null, n === null || n.return === null) {
                    me = 1, Mr = t, fe = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, u = t;
                    if (t = we, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                        var a = u, p = s, m = p.tag;
                        if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                            var h = p.alternate;
                            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
                        }
                        var y = Cu(i);
                        if (y !== null) {
                            y.flags &= -257, Eu(y, i, s, l, t), y.mode & 1 && Su(l, a, t), t = y, u = a;
                            var k = t.updateQueue;
                            if (k === null) {
                                var w = new Set;
                                w.add(u), t.updateQueue = w;
                            } else k.add(u);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                Su(l, a, t), Ss();
                                break e;
                            }
                            u = Error(C(426));
                        }
                    } else if (q && s.mode & 1) {
                        var x = Cu(i);
                        if (x !== null) {
                            !(x.flags & 65536) && (x.flags |= 256), Eu(x, i, s, l, t), ns(Un(u, s));
                            break e;
                        }
                    }
                    l = u = Un(u, s), me !== 4 && (me = 2), pr === null ? pr = [
                        l
                    ] : pr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var f = $c(l, u, t);
                                gu(l, f);
                                break e;
                            case 1:
                                s = u;
                                var c = l.type, d = l.stateNode;
                                if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && ($t === null || !$t.has(d)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var v = Bc(l, s, t);
                                    gu(l, v);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                uf(n);
            } catch (P) {
                t = P, fe === n && n !== null && (fe = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function lf() {
        var e = Ao.current;
        return Ao.current = Fo, e === null ? Fo : e;
    }
    function Ss() {
        (me === 0 || me === 3 || me === 2) && (me = 4), ve === null || !(cn & 268435455) && !(nl & 268435455) || Lt(ve, we);
    }
    function $o(e, t) {
        var n = G;
        G |= 2;
        var r = lf();
        (ve !== e || we !== t) && (ht = null, rn(e, t));
        do try {
            cm();
            break;
        } catch (o) {
            of(e, o);
        }
        while (!0);
        if (os(), G = n, Ao.current = r, fe !== null) throw Error(C(261));
        return ve = null, we = 0, me;
    }
    function cm() {
        for(; fe !== null;)sf(fe);
    }
    function fm() {
        for(; fe !== null && !Dd();)sf(fe);
    }
    function sf(e) {
        var t = cf(e.alternate, e, Ve);
        e.memoizedProps = e.pendingProps, t === null ? uf(e) : fe = t, vs.current = null;
    }
    function uf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = om(n, t), n !== null) {
                    n.flags &= 32767, fe = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    me = 6, fe = null;
                    return;
                }
            } else if (n = rm(n, t, Ve), n !== null) {
                fe = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                fe = t;
                return;
            }
            fe = t = e;
        }while (t !== null);
        me === 0 && (me = 5);
    }
    function qt(e, t, n) {
        var r = H, o = Xe.transition;
        try {
            Xe.transition = null, H = 1, dm(e, t, n, r);
        } finally{
            Xe.transition = o, H = r;
        }
        return null;
    }
    function dm(e, t, n, r) {
        do Ln();
        while (Ot !== null);
        if (G & 6) throw Error(C(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Qd(e, l), e === ve && (fe = ve = null, we = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || eo || (eo = !0, ff(So, function() {
            return Ln(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = Xe.transition, Xe.transition = null;
            var i = H;
            H = 1;
            var s = G;
            G |= 4, vs.current = null, im(e, n), tf(n, e), Ip(si), Eo = !!ii, si = ii = null, e.current = n, sm(n), Fd(), G = s, H = i, Xe.transition = l;
        } else e.current = n;
        if (eo && (eo = !1, Ot = e, Vo = o), l = e.pendingLanes, l === 0 && ($t = null), Vd(n.stateNode), De(e, se()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Uo) throw Uo = !1, e = Ni, Ni = null, e;
        return Vo & 1 && e.tag !== 0 && Ln(), l = e.pendingLanes, l & 1 ? e === zi ? mr++ : (mr = 0, zi = e) : mr = 0, Kt(), null;
    }
    function Ln() {
        if (Ot !== null) {
            var e = $a(Vo), t = Xe.transition, n = H;
            try {
                if (Xe.transition = null, H = 16 > e ? 16 : e, Ot === null) var r = !1;
                else {
                    if (e = Ot, Ot = null, Vo = 0, G & 6) throw Error(C(331));
                    var o = G;
                    for(G |= 4, I = e.current; I !== null;){
                        var l = I, i = l.child;
                        if (I.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var u = 0; u < s.length; u++){
                                    var a = s[u];
                                    for(I = a; I !== null;){
                                        var p = I;
                                        switch(p.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                dr(8, p, l);
                                        }
                                        var m = p.child;
                                        if (m !== null) m.return = p, I = m;
                                        else for(; I !== null;){
                                            p = I;
                                            var h = p.sibling, y = p.return;
                                            if (Jc(p), p === a) {
                                                I = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                h.return = y, I = h;
                                                break;
                                            }
                                            I = y;
                                        }
                                    }
                                }
                                var k = l.alternate;
                                if (k !== null) {
                                    var w = k.child;
                                    if (w !== null) {
                                        k.child = null;
                                        do {
                                            var x = w.sibling;
                                            w.sibling = null, w = x;
                                        }while (w !== null);
                                    }
                                }
                                I = l;
                            }
                        }
                        if (l.subtreeFlags & 2064 && i !== null) i.return = l, I = i;
                        else e: for(; I !== null;){
                            if (l = I, l.flags & 2048) switch(l.tag){
                                case 0:
                                case 11:
                                case 15:
                                    dr(9, l, l.return);
                            }
                            var f = l.sibling;
                            if (f !== null) {
                                f.return = l.return, I = f;
                                break e;
                            }
                            I = l.return;
                        }
                    }
                    var c = e.current;
                    for(I = c; I !== null;){
                        i = I;
                        var d = i.child;
                        if (i.subtreeFlags & 2064 && d !== null) d.return = i, I = d;
                        else e: for(i = c; I !== null;){
                            if (s = I, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        tl(9, s);
                                }
                            } catch (P) {
                                oe(s, s.return, P);
                            }
                            if (s === i) {
                                I = null;
                                break e;
                            }
                            var v = s.sibling;
                            if (v !== null) {
                                v.return = s.return, I = v;
                                break e;
                            }
                            I = s.return;
                        }
                    }
                    if (G = o, Kt(), ft && typeof ft.onPostCommitFiberRoot == "function") try {
                        ft.onPostCommitFiberRoot(bo, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                H = n, Xe.transition = t;
            }
        }
        return !1;
    }
    function Fu(e, t, n) {
        t = Un(n, t), t = $c(e, t, 1), e = Vt(e, t, 1), t = ze(), e !== null && (jr(e, 1, t), De(e, t));
    }
    function oe(e, t, n) {
        if (e.tag === 3) Fu(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Fu(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && ($t === null || !$t.has(r))) {
                    e = Un(n, e), e = Bc(t, e, 1), t = Vt(t, e, 1), e = ze(), t !== null && (jr(t, 1, e), De(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function pm(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n, ve === e && (we & n) === n && (me === 4 || me === 3 && (we & 130023424) === we && 500 > se() - ws ? rn(e, 0) : ys |= n), De(e, t);
    }
    function af(e, t) {
        t === 0 && (e.mode & 1 ? (t = Gr, Gr <<= 1, !(Gr & 130023424) && (Gr = 4194304)) : t = 1);
        var n = ze();
        e = St(e, t), e !== null && (jr(e, t, n), De(e, n));
    }
    function mm(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), af(e, n);
    }
    function hm(e, t) {
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
                throw Error(C(314));
        }
        r !== null && r.delete(t), af(e, n);
    }
    var cf;
    cf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || je.current) Le = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Le = !1, nm(e, t, n);
            Le = !!(e.flags & 131072);
        }
        else Le = !1, q && t.flags & 1048576 && pc(t, Mo, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                mo(e, t), e = t.pendingProps;
                var o = On(t, Ee.current);
                In(t, n), o = ds(null, t, r, e, o, n);
                var l = ps();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (l = !0, Ro(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, ss(t), o.updater = el, t.stateNode = o, o._reactInternals = t, gi(t, r, e, n), t = wi(null, t, r, !0, l, n)) : (t.tag = 0, q && l && es(t), Ne(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(mo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = vm(r), e = nt(r, e), o){
                        case 0:
                            t = yi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Nu(null, t, r, e, n);
                            break e;
                        case 11:
                            t = _u(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Pu(null, t, r, nt(r.type, e), n);
                            break e;
                    }
                    throw Error(C(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nt(r, o), yi(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nt(r, o), Nu(e, t, r, o, n);
            case 3:
                e: {
                    if (Qc(t), e === null) throw Error(C(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, wc(e, t), jo(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = Un(Error(C(423)), t), t = zu(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = Un(Error(C(424)), t), t = zu(e, t, r, n, o);
                        break e;
                    } else for($e = Ut(t.stateNode.containerInfo.firstChild), Be = t, q = !0, ot = null, n = vc(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Dn(), r === o) {
                            t = Ct(e, t, n);
                            break e;
                        }
                        Ne(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return kc(t), e === null && pi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, ui(r, o) ? i = null : l !== null && ui(r, l) && (t.flags |= 32), Hc(e, t), Ne(e, t, i, n), t.child;
            case 6:
                return e === null && pi(t), null;
            case 13:
                return bc(e, t, n);
            case 4:
                return us(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fn(t, null, r, n) : Ne(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nt(r, o), _u(e, t, r, o, n);
            case 7:
                return Ne(e, t, t.pendingProps, n), t.child;
            case 8:
                return Ne(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Ne(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, X(Io, r._currentValue), r._currentValue = i, l !== null) if (st(l.value, i)) {
                        if (l.children === o.children && !je.current) {
                            t = Ct(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var u = s.firstContext; u !== null;){
                                if (u.context === r) {
                                    if (l.tag === 1) {
                                        u = wt(-1, n & -n), u.tag = 2;
                                        var a = l.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var p = a.pending;
                                            p === null ? u.next = u : (u.next = p.next, p.next = u), a.pending = u;
                                        }
                                    }
                                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), mi(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                u = u.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(C(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), mi(i, n, t), i = l.sibling;
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
                    Ne(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, In(t, n), o = Ze(o), r = r(o), t.flags |= 1, Ne(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = nt(r, t.pendingProps), o = nt(r.type, o), Pu(e, t, r, o, n);
            case 15:
                return Wc(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nt(r, o), mo(e, t), t.tag = 1, Oe(r) ? (e = !0, Ro(t)) : e = !1, In(t, n), Vc(t, r, o), gi(t, r, o, n), wi(null, t, r, !0, e, n);
            case 19:
                return Kc(e, t, n);
            case 22:
                return Gc(e, t, n);
        }
        throw Error(C(156, t.tag));
    };
    function ff(e, t) {
        return Fa(e, t);
    }
    function gm(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ye(e, t, n, r) {
        return new gm(e, t, n, r);
    }
    function Cs(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function vm(e) {
        if (typeof e == "function") return Cs(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Bi) return 11;
            if (e === Wi) return 14;
        }
        return 2;
    }
    function Wt(e, t) {
        var n = e.alternate;
        return n === null ? (n = Ye(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function vo(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") Cs(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case vn:
                return on(n.children, o, l, t);
            case $i:
                i = 8, o |= 8;
                break;
            case Vl:
                return e = Ye(12, n, t, o | 2), e.elementType = Vl, e.lanes = l, e;
            case $l:
                return e = Ye(13, n, t, o), e.elementType = $l, e.lanes = l, e;
            case Bl:
                return e = Ye(19, n, t, o), e.elementType = Bl, e.lanes = l, e;
            case ka:
                return rl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case ya:
                        i = 10;
                        break e;
                    case wa:
                        i = 9;
                        break e;
                    case Bi:
                        i = 11;
                        break e;
                    case Wi:
                        i = 14;
                        break e;
                    case Rt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(C(130, e == null ? e : typeof e, ""));
        }
        return t = Ye(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function on(e, t, n, r) {
        return e = Ye(7, e, r, t), e.lanes = n, e;
    }
    function rl(e, t, n, r) {
        return e = Ye(22, e, r, t), e.elementType = ka, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function jl(e, t, n) {
        return e = Ye(6, e, null, t), e.lanes = n, e;
    }
    function Ol(e, t, n) {
        return t = Ye(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function ym(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = hl(0), this.expirationTimes = hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Es(e, t, n, r, o, l, i, s, u) {
        return e = new ym(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ye(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, ss(l), e;
    }
    function wm(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: gn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function df(e) {
        if (!e) return Ht;
        e = e._reactInternals;
        e: {
            if (pn(e) !== e || e.tag !== 1) throw Error(C(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Oe(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            }while (t !== null);
            throw Error(C(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Oe(n)) return fc(e, n, t);
        }
        return t;
    }
    function pf(e, t, n, r, o, l, i, s, u) {
        return e = Es(n, r, !0, e, o, l, i, s, u), e.context = df(null), n = e.current, r = ze(), o = Bt(n), l = wt(r, o), l.callback = t ?? null, Vt(n, l, o), e.current.lanes = o, jr(e, o, r), De(e, r), e;
    }
    function ol(e, t, n, r) {
        var o = t.current, l = ze(), i = Bt(o);
        return n = df(n), t.context === null ? t.context = n : t.pendingContext = n, t = wt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Vt(o, t, i), e !== null && (it(e, o, i, l), co(e, o, i)), i;
    }
    function Bo(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Au(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function _s(e, t) {
        Au(e, t), (e = e.alternate) && Au(e, t);
    }
    function km() {
        return null;
    }
    var mf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Ps(e) {
        this._internalRoot = e;
    }
    ll.prototype.render = Ps.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(C(409));
        ol(e, t, null, null);
    };
    ll.prototype.unmount = Ps.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            fn(function() {
                ol(null, e, null, null);
            }), t[xt] = null;
        }
    };
    function ll(e) {
        this._internalRoot = e;
    }
    ll.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ga();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++);
            It.splice(n, 0, e), n === 0 && Qa(e);
        }
    };
    function Ns(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function il(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Uu() {}
    function xm(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var a = Bo(i);
                    l.call(a);
                };
            }
            var i = pf(t, r, e, 0, null, !1, !1, "", Uu);
            return e._reactRootContainer = i, e[xt] = i.current, Cr(e.nodeType === 8 ? e.parentNode : e), fn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var a = Bo(u);
                s.call(a);
            };
        }
        var u = Es(e, 0, !1, null, null, !1, !1, "", Uu);
        return e._reactRootContainer = u, e[xt] = u.current, Cr(e.nodeType === 8 ? e.parentNode : e), fn(function() {
            ol(t, u, n, r);
        }), u;
    }
    function sl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var u = Bo(i);
                    s.call(u);
                };
            }
            ol(t, i, e, o);
        } else i = xm(n, t, e, o, r);
        return Bo(i);
    }
    Ba = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = or(t.pendingLanes);
                    n !== 0 && (Qi(t, n | 1), De(t, se()), !(G & 6) && (Vn = se() + 500, Kt()));
                }
                break;
            case 13:
                fn(function() {
                    var r = St(e, 1);
                    if (r !== null) {
                        var o = ze();
                        it(r, e, 1, o);
                    }
                }), _s(e, 1);
        }
    };
    bi = function(e) {
        if (e.tag === 13) {
            var t = St(e, 134217728);
            if (t !== null) {
                var n = ze();
                it(t, e, 134217728, n);
            }
            _s(e, 134217728);
        }
    };
    Wa = function(e) {
        if (e.tag === 13) {
            var t = Bt(e), n = St(e, t);
            if (n !== null) {
                var r = ze();
                it(n, e, t, r);
            }
            _s(e, t);
        }
    };
    Ga = function() {
        return H;
    };
    Ha = function(e, t) {
        var n = H;
        try {
            return H = e, t();
        } finally{
            H = n;
        }
    };
    Jl = function(e, t, n) {
        switch(t){
            case "input":
                if (Hl(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = Zo(r);
                            if (!o) throw Error(C(90));
                            Sa(r), Hl(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Ea(e, n);
                break;
            case "select":
                t = n.value, t != null && zn(e, !!n.multiple, t, !1);
        }
    };
    Ma = ks;
    Ia = fn;
    var Sm = {
        usingClientEntryPoint: !1,
        Events: [
            Dr,
            xn,
            Zo,
            Ra,
            Ta,
            ks
        ]
    }, er = {
        findFiberByHostInstance: en,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Cm = {
        bundleType: er.bundleType,
        version: er.version,
        rendererPackageName: er.rendererPackageName,
        rendererConfig: er.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Et.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Oa(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: er.findFiberByHostInstance || km,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!to.isDisabled && to.supportsFiber) try {
            bo = to.inject(Cm), ft = to;
        } catch  {}
    }
    Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm;
    Ge.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ns(t)) throw Error(C(200));
        return wm(e, t, null, n);
    };
    Ge.createRoot = function(e, t) {
        if (!Ns(e)) throw Error(C(299));
        var n = !1, r = "", o = mf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Es(e, 1, !1, null, null, n, !1, r, o), e[xt] = t.current, Cr(e.nodeType === 8 ? e.parentNode : e), new Ps(t);
    };
    Ge.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
        return e = Oa(t), e = e === null ? null : e.stateNode, e;
    };
    Ge.flushSync = function(e) {
        return fn(e);
    };
    Ge.hydrate = function(e, t, n) {
        if (!il(t)) throw Error(C(200));
        return sl(null, e, t, !0, n);
    };
    Ge.hydrateRoot = function(e, t, n) {
        if (!Ns(e)) throw Error(C(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = mf;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = pf(t, null, e, 1, n ?? null, o, !1, l, i), e[xt] = t.current, Cr(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new ll(t);
    };
    Ge.render = function(e, t, n) {
        if (!il(t)) throw Error(C(200));
        return sl(null, e, t, !1, n);
    };
    Ge.unmountComponentAtNode = function(e) {
        if (!il(e)) throw Error(C(40));
        return e._reactRootContainer ? (fn(function() {
            sl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[xt] = null;
            });
        }), !0) : !1;
    };
    Ge.unstable_batchedUpdates = ks;
    Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!il(n)) throw Error(C(200));
        if (e == null || e._reactInternals === void 0) throw Error(C(38));
        return sl(e, t, n, !1, r);
    };
    Ge.version = "18.3.1-next-f1338f8080-20240426";
    function hf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hf);
        } catch (e) {
            console.error(e);
        }
    }
    hf(), ma.exports = Ge;
    var Em = ma.exports, Vu = Em;
    Al.createRoot = Vu.createRoot, Al.hydrateRoot = Vu.hydrateRoot;
    const _m = "modulepreload", Pm = function(e) {
        return "/grid-draw/" + e;
    }, $u = {}, Nm = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((u)=>{
                if (u = Pm(u), u in $u) return;
                $u[u] = !0;
                const a = u.endsWith(".css"), p = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${p}`)) return;
                const m = document.createElement("link");
                if (m.rel = a ? "stylesheet" : _m, a || (m.as = "script"), m.crossOrigin = "", m.href = u, s && m.setAttribute("nonce", s), document.head.appendChild(m), a) return new Promise((h, y)=>{
                    m.addEventListener("load", h), m.addEventListener("error", ()=>y(new Error(`Unable to preload CSS for ${u}`)));
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
    };
    function zm(e, t, n) {
        const [r, o] = S.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = S.useRef(!1);
        return S.useEffect(()=>{
            l.current || (l.current = !0, (async ()=>{
                try {
                    const i = await Nm(()=>import("./grid_draw_wasm.js"), []);
                    await i.default();
                    const s = new i.GridCanvas(e, t, n);
                    o({
                        grid: s,
                        loading: !1,
                        error: null,
                        initialized: !0
                    });
                } catch (i) {
                    o((s)=>({
                            ...s,
                            loading: !1,
                            error: i instanceof Error ? i.message : String(i)
                        }));
                }
            })());
        }, [
            e,
            t,
            n
        ]), r;
    }
    function gf(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = gf(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function vf() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = gf(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Bu = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Wu = vf, yf = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Wu(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((a)=>{
                const p = n?.[a], m = l?.[a];
                if (p === null) return null;
                const h = Bu(p) || Bu(m);
                return o[a][h];
            }), s = n && Object.entries(n).reduce((a, p)=>{
                let [m, h] = p;
                return h === void 0 || (a[m] = h), a;
            }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, p)=>{
                let { class: m, className: h, ...y } = p;
                return Object.entries(y).every((k)=>{
                    let [w, x] = k;
                    return Array.isArray(x) ? x.includes({
                        ...l,
                        ...s
                    }[w]) : {
                        ...l,
                        ...s
                    }[w] === x;
                }) ? [
                    ...a,
                    m,
                    h
                ] : a;
            }, []);
            return Wu(e, i, u, n?.class, n?.className);
        };
    function Gu(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function wf(...e) {
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
    function Mi(...e) {
        return S.useCallback(wf(...e), e);
    }
    function Wo(e) {
        const t = Tm(e), n = S.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = S.Children.toArray(l), u = s.find(Im);
            if (u) {
                const a = u.props.children, p = s.map((m)=>m === u ? S.Children.count(a) > 1 ? S.Children.only(null) : S.isValidElement(a) ? a.props.children : null : m);
                return M.jsx(t, {
                    ...i,
                    ref: o,
                    children: S.isValidElement(a) ? S.cloneElement(a, void 0, p) : null
                });
            }
            return M.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var Rm = Wo("Slot");
    function Tm(e) {
        const t = S.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (S.isValidElement(o)) {
                const i = jm(o), s = Lm(l, o.props);
                return o.type !== S.Fragment && (s.ref = r ? wf(r, i) : i), S.cloneElement(o, s);
            }
            return S.Children.count(o) > 1 ? S.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var Mm = Symbol("radix.slottable");
    function Im(e) {
        return S.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Mm;
    }
    function Lm(e, t) {
        const n = {
            ...t
        };
        for(const r in t){
            const o = e[r], l = t[r];
            /^on[A-Z]/.test(r) ? o && l ? n[r] = (...s)=>{
                const u = l(...s);
                return o(...s), u;
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
    function jm(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var Om = [
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
    ], Ir = Om.reduce((e, t)=>{
        const n = Wo(`Primitive.${t}`), r = S.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, u = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), M.jsx(u, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function zs(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = S.createContext(i), u = n.length;
            n = [
                ...n,
                i
            ];
            const a = (m)=>{
                const { scope: h, children: y, ...k } = m, w = h?.[e]?.[u] || s, x = S.useMemo(()=>k, Object.values(k));
                return M.jsx(w.Provider, {
                    value: x,
                    children: y
                });
            };
            a.displayName = l + "Provider";
            function p(m, h) {
                const y = h?.[e]?.[u] || s, k = S.useContext(y);
                if (k) return k;
                if (i !== void 0) return i;
                throw new Error(`\`${m}\` must be used within \`${l}\``);
            }
            return [
                a,
                p
            ];
        }
        const o = ()=>{
            const l = n.map((i)=>S.createContext(i));
            return function(s) {
                const u = s?.[e] || l;
                return S.useMemo(()=>({
                        [`__scope${e}`]: {
                            ...s,
                            [e]: u
                        }
                    }), [
                    s,
                    u
                ]);
            };
        };
        return o.scopeName = e, [
            r,
            Dm(o, ...t)
        ];
    }
    function Dm(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: u, scopeName: a })=>{
                    const m = u(l)[`__scope${a}`];
                    return {
                        ...s,
                        ...m
                    };
                }, {});
                return S.useMemo(()=>({
                        [`__scope${t.scopeName}`]: i
                    }), [
                    i
                ]);
            };
        };
        return n.scopeName = t.scopeName, n;
    }
    function Fm(e) {
        const t = e + "CollectionProvider", [n, r] = zs(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (w)=>{
            const { scope: x, children: f } = w, c = ce.useRef(null), d = ce.useRef(new Map).current;
            return M.jsx(o, {
                scope: x,
                itemMap: d,
                collectionRef: c,
                children: f
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", u = Wo(s), a = ce.forwardRef((w, x)=>{
            const { scope: f, children: c } = w, d = l(s, f), v = Mi(x, d.collectionRef);
            return M.jsx(u, {
                ref: v,
                children: c
            });
        });
        a.displayName = s;
        const p = e + "CollectionItemSlot", m = "data-radix-collection-item", h = Wo(p), y = ce.forwardRef((w, x)=>{
            const { scope: f, children: c, ...d } = w, v = ce.useRef(null), P = Mi(x, v), z = l(p, f);
            return ce.useEffect(()=>(z.itemMap.set(v, {
                    ref: v,
                    ...d
                }), ()=>void z.itemMap.delete(v))), M.jsx(h, {
                [m]: "",
                ref: P,
                children: c
            });
        });
        y.displayName = p;
        function k(w) {
            const x = l(e + "CollectionConsumer", w);
            return ce.useCallback(()=>{
                const c = x.collectionRef.current;
                if (!c) return [];
                const d = Array.from(c.querySelectorAll(`[${m}]`));
                return Array.from(x.itemMap.values()).sort((z, _)=>d.indexOf(z.ref.current) - d.indexOf(_.ref.current));
            }, [
                x.collectionRef,
                x.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: a,
                ItemSlot: y
            },
            k,
            r
        ];
    }
    function ln(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var kf = globalThis?.document ? S.useLayoutEffect : ()=>{}, Am = da[" useInsertionEffect ".trim().toString()] || kf;
    function ul({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = Um({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, u = s ? e : o;
        {
            const p = S.useRef(e !== void 0);
            S.useEffect(()=>{
                const m = p.current;
                m !== s && console.warn(`${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), p.current = s;
            }, [
                s,
                r
            ]);
        }
        const a = S.useCallback((p)=>{
            if (s) {
                const m = Vm(p) ? p(e) : p;
                m !== e && i.current?.(m);
            } else l(p);
        }, [
            s,
            e,
            l,
            i
        ]);
        return [
            u,
            a
        ];
    }
    function Um({ defaultProp: e, onChange: t }) {
        const [n, r] = S.useState(e), o = S.useRef(n), l = S.useRef(t);
        return Am(()=>{
            l.current = t;
        }, [
            t
        ]), S.useEffect(()=>{
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
    function Vm(e) {
        return typeof e == "function";
    }
    var $m = da[" useId ".trim().toString()] || (()=>{}), Bm = 0;
    function Wm(e) {
        const [t, n] = S.useState($m());
        return kf(()=>{
            n((r)=>r ?? String(Bm++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var Gm = S.createContext(void 0);
    function xf(e) {
        const t = S.useContext(Gm);
        return e || t || "ltr";
    }
    function Hm(e) {
        const t = S.useRef(e);
        return S.useEffect(()=>{
            t.current = e;
        }), S.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Dl = "rovingFocusGroup.onEntryFocus", Qm = {
        bubbles: !1,
        cancelable: !0
    }, Ar = "RovingFocusGroup", [Ii, Sf, bm] = Fm(Ar), [Km, Cf] = zs(Ar, [
        bm
    ]), [Ym, Xm] = Km(Ar), Ef = S.forwardRef((e, t)=>M.jsx(Ii.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: M.jsx(Ii.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: M.jsx(Zm, {
                    ...e,
                    ref: t
                })
            })
        }));
    Ef.displayName = Ar;
    var Zm = S.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: u, onEntryFocus: a, preventScrollOnEntryFocus: p = !1, ...m } = e, h = S.useRef(null), y = Mi(t, h), k = xf(l), [w, x] = ul({
            prop: i,
            defaultProp: s ?? null,
            onChange: u,
            caller: Ar
        }), [f, c] = S.useState(!1), d = Hm(a), v = Sf(n), P = S.useRef(!1), [z, _] = S.useState(0);
        return S.useEffect(()=>{
            const g = h.current;
            if (g) return g.addEventListener(Dl, d), ()=>g.removeEventListener(Dl, d);
        }, [
            d
        ]), M.jsx(Ym, {
            scope: n,
            orientation: r,
            dir: k,
            loop: o,
            currentTabStopId: w,
            onItemFocus: S.useCallback((g)=>x(g), [
                x
            ]),
            onItemShiftTab: S.useCallback(()=>c(!0), []),
            onFocusableItemAdd: S.useCallback(()=>_((g)=>g + 1), []),
            onFocusableItemRemove: S.useCallback(()=>_((g)=>g - 1), []),
            children: M.jsx(Ir.div, {
                tabIndex: f || z === 0 ? -1 : 0,
                "data-orientation": r,
                ...m,
                ref: y,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: ln(e.onMouseDown, ()=>{
                    P.current = !0;
                }),
                onFocus: ln(e.onFocus, (g)=>{
                    const A = !P.current;
                    if (g.target === g.currentTarget && A && !f) {
                        const D = new CustomEvent(Dl, Qm);
                        if (g.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const le = v().filter((Q)=>Q.focusable), _e = le.find((Q)=>Q.active), Fe = le.find((Q)=>Q.id === w), Ae = [
                                _e,
                                Fe,
                                ...le
                            ].filter(Boolean).map((Q)=>Q.ref.current);
                            Nf(Ae, p);
                        }
                    }
                    P.current = !1;
                }),
                onBlur: ln(e.onBlur, ()=>c(!1))
            })
        });
    }), _f = "RovingFocusGroupItem", Pf = S.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, u = Wm(), a = l || u, p = Xm(_f, n), m = p.currentTabStopId === a, h = Sf(n), { onFocusableItemAdd: y, onFocusableItemRemove: k, currentTabStopId: w } = p;
        return S.useEffect(()=>{
            if (r) return y(), ()=>k();
        }, [
            r,
            y,
            k
        ]), M.jsx(Ii.ItemSlot, {
            scope: n,
            id: a,
            focusable: r,
            active: o,
            children: M.jsx(Ir.span, {
                tabIndex: m ? 0 : -1,
                "data-orientation": p.orientation,
                ...s,
                ref: t,
                onMouseDown: ln(e.onMouseDown, (x)=>{
                    r ? p.onItemFocus(a) : x.preventDefault();
                }),
                onFocus: ln(e.onFocus, ()=>p.onItemFocus(a)),
                onKeyDown: ln(e.onKeyDown, (x)=>{
                    if (x.key === "Tab" && x.shiftKey) {
                        p.onItemShiftTab();
                        return;
                    }
                    if (x.target !== x.currentTarget) return;
                    const f = eh(x, p.orientation, p.dir);
                    if (f !== void 0) {
                        if (x.metaKey || x.ctrlKey || x.altKey || x.shiftKey) return;
                        x.preventDefault();
                        let d = h().filter((v)=>v.focusable).map((v)=>v.ref.current);
                        if (f === "last") d.reverse();
                        else if (f === "prev" || f === "next") {
                            f === "prev" && d.reverse();
                            const v = d.indexOf(x.currentTarget);
                            d = p.loop ? th(d, v + 1) : d.slice(v + 1);
                        }
                        setTimeout(()=>Nf(d));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: m,
                    hasTabStop: w != null
                }) : i
            })
        });
    });
    Pf.displayName = _f;
    var Jm = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function qm(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function eh(e, t, n) {
        const r = qm(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return Jm[r];
    }
    function Nf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function th(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var nh = Ef, rh = Pf, zf = "Toggle", Rf = S.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = ul({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: zf
        });
        return M.jsx(Ir.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: ln(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Rf.displayName = zf;
    var Yt = "ToggleGroup", [Tf] = zs(Yt, [
        Cf
    ]), Mf = Cf(), Rs = ce.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return M.jsx(oh, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return M.jsx(lh, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${Yt}\``);
    });
    Rs.displayName = Yt;
    var [If, Lf] = Tf(Yt), oh = ce.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = ul({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: Yt
        });
        return M.jsx(If, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: ce.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: ce.useCallback(()=>s(""), [
                s
            ]),
            children: M.jsx(jf, {
                ...l,
                ref: t
            })
        });
    }), lh = ce.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = ul({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: Yt
        }), u = ce.useCallback((p)=>s((m = [])=>[
                    ...m,
                    p
                ]), [
            s
        ]), a = ce.useCallback((p)=>s((m = [])=>m.filter((h)=>h !== p)), [
            s
        ]);
        return M.jsx(If, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: u,
            onItemDeactivate: a,
            children: M.jsx(jf, {
                ...l,
                ref: t
            })
        });
    });
    Rs.displayName = Yt;
    var [ih, sh] = Tf(Yt), jf = ce.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...u } = e, a = Mf(n), p = xf(i), m = {
            role: "group",
            dir: p,
            ...u
        };
        return M.jsx(ih, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? M.jsx(nh, {
                asChild: !0,
                ...a,
                orientation: l,
                dir: p,
                loop: s,
                children: M.jsx(Ir.div, {
                    ...m,
                    ref: t
                })
            }) : M.jsx(Ir.div, {
                ...m,
                ref: t
            })
        });
    }), Go = "ToggleGroupItem", Of = ce.forwardRef((e, t)=>{
        const n = Lf(Go, e.__scopeToggleGroup), r = sh(Go, e.__scopeToggleGroup), o = Mf(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, u = ce.useRef(null);
        return r.rovingFocus ? M.jsx(rh, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: u,
            children: M.jsx(Hu, {
                ...s,
                ref: t
            })
        }) : M.jsx(Hu, {
            ...s,
            ref: t
        });
    });
    Of.displayName = Go;
    var Hu = ce.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = Lf(Go, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return M.jsx(Rf, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (u)=>{
                u ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), uh = Rs, ah = Of;
    const ch = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, fh = (e, t)=>({
            classGroupId: e,
            validator: t
        }), Df = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Ho = "-", Qu = [], dh = "arbitrary..", ph = (e)=>{
        const t = hh(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return mh(i);
                const s = i.split(Ho), u = s[0] === "" && s.length > 1 ? 1 : 0;
                return Ff(s, u, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const u = r[i], a = n[i];
                    return u ? a ? ch(a, u) : u : a || Qu;
                }
                return n[i] || Qu;
            }
        };
    }, Ff = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const a = Ff(e, t + 1, l);
            if (a) return a;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Ho) : e.slice(t).join(Ho), u = i.length;
        for(let a = 0; a < u; a++){
            const p = i[a];
            if (p.validator(s)) return p.classGroupId;
        }
    }, mh = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? dh + r : void 0;
        })(), hh = (e)=>{
        const { theme: t, classGroups: n } = e;
        return gh(n, t);
    }, gh = (e, t)=>{
        const n = Df();
        for(const r in e){
            const o = e[r];
            Ts(o, n, r, t);
        }
        return n;
    }, Ts = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            vh(i, t, n, r);
        }
    }, vh = (e, t, n, r)=>{
        if (typeof e == "string") {
            yh(e, t, n);
            return;
        }
        if (typeof e == "function") {
            wh(e, t, n, r);
            return;
        }
        kh(e, t, n, r);
    }, yh = (e, t, n)=>{
        const r = e === "" ? t : Af(t, e);
        r.classGroupId = n;
    }, wh = (e, t, n, r)=>{
        if (xh(e)) {
            Ts(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(fh(n, e));
    }, kh = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, u] = o[i];
            Ts(u, Af(t, s), n, r);
        }
    }, Af = (e, t)=>{
        let n = e;
        const r = t.split(Ho), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = Df(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, xh = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Sh = (e)=>{
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
    }, Li = "!", bu = ":", Ch = [], Ku = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Eh = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, u = 0, a;
            const p = o.length;
            for(let w = 0; w < p; w++){
                const x = o[w];
                if (i === 0 && s === 0) {
                    if (x === bu) {
                        l.push(o.slice(u, w)), u = w + 1;
                        continue;
                    }
                    if (x === "/") {
                        a = w;
                        continue;
                    }
                }
                x === "[" ? i++ : x === "]" ? i-- : x === "(" ? s++ : x === ")" && s--;
            }
            const m = l.length === 0 ? o : o.slice(u);
            let h = m, y = !1;
            m.endsWith(Li) ? (h = m.slice(0, -1), y = !0) : m.startsWith(Li) && (h = m.slice(1), y = !0);
            const k = a && a > u ? a - u : void 0;
            return Ku(l, y, h, k);
        };
        if (t) {
            const o = t + bu, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Ku(Ch, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, _h = (e)=>{
        const t = new Map;
        return e.orderSensitiveModifiers.forEach((n, r)=>{
            t.set(n, 1e6 + r);
        }), (n)=>{
            const r = [];
            let o = [];
            for(let l = 0; l < n.length; l++){
                const i = n[l], s = i[0] === "[", u = t.has(i);
                s || u ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
            }
            return o.length > 0 && (o.sort(), r.push(...o)), r;
        };
    }, Ph = (e)=>({
            cache: Sh(e.cacheSize),
            parseClassName: Eh(e),
            sortModifiers: _h(e),
            ...ph(e)
        }), Nh = /\s+/, zh = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(Nh);
        let u = "";
        for(let a = s.length - 1; a >= 0; a -= 1){
            const p = s[a], { isExternal: m, modifiers: h, hasImportantModifier: y, baseClassName: k, maybePostfixModifierPosition: w } = n(p);
            if (m) {
                u = p + (u.length > 0 ? " " + u : u);
                continue;
            }
            let x = !!w, f = r(x ? k.substring(0, w) : k);
            if (!f) {
                if (!x) {
                    u = p + (u.length > 0 ? " " + u : u);
                    continue;
                }
                if (f = r(k), !f) {
                    u = p + (u.length > 0 ? " " + u : u);
                    continue;
                }
                x = !1;
            }
            const c = h.length === 0 ? "" : h.length === 1 ? h[0] : l(h).join(":"), d = y ? c + Li : c, v = d + f;
            if (i.indexOf(v) > -1) continue;
            i.push(v);
            const P = o(f, x);
            for(let z = 0; z < P.length; ++z){
                const _ = P[z];
                i.push(d + _);
            }
            u = p + (u.length > 0 ? " " + u : u);
        }
        return u;
    }, Rh = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = Uf(n)) && (o && (o += " "), o += r);
        return o;
    }, Uf = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = Uf(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Th = (e, ...t)=>{
        let n, r, o, l;
        const i = (u)=>{
            const a = t.reduce((p, m)=>m(p), e());
            return n = Ph(a), r = n.cache.get, o = n.cache.set, l = s, s(u);
        }, s = (u)=>{
            const a = r(u);
            if (a) return a;
            const p = zh(u, n);
            return o(u, p), p;
        };
        return l = i, (...u)=>l(Rh(...u));
    }, Mh = [], de = (e)=>{
        const t = (n)=>n[e] || Mh;
        return t.isThemeGetter = !0, t;
    }, Vf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $f = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ih = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Lh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, jh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Oh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Dh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Nt = (e)=>Ih.test(e), $ = (e)=>!!e && !Number.isNaN(Number(e)), zt = (e)=>!!e && Number.isInteger(Number(e)), Fl = (e)=>e.endsWith("%") && $(e.slice(0, -1)), mt = (e)=>Lh.test(e), Bf = ()=>!0, Ah = (e)=>jh.test(e) && !Oh.test(e), Ms = ()=>!1, Uh = (e)=>Dh.test(e), Vh = (e)=>Fh.test(e), $h = (e)=>!L(e) && !O(e), Bh = (e)=>Xt(e, Hf, Ms), L = (e)=>Vf.test(e), Zt = (e)=>Xt(e, Qf, Ah), Yu = (e)=>Xt(e, Xh, $), Wh = (e)=>Xt(e, Kf, Bf), Gh = (e)=>Xt(e, bf, Ms), Xu = (e)=>Xt(e, Wf, Ms), Hh = (e)=>Xt(e, Gf, Vh), no = (e)=>Xt(e, Yf, Uh), O = (e)=>$f.test(e), tr = (e)=>mn(e, Qf), Qh = (e)=>mn(e, bf), Zu = (e)=>mn(e, Wf), bh = (e)=>mn(e, Hf), Kh = (e)=>mn(e, Gf), ro = (e)=>mn(e, Yf, !0), Yh = (e)=>mn(e, Kf, !0), Xt = (e, t, n)=>{
        const r = Vf.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, mn = (e, t, n = !1)=>{
        const r = $f.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, Wf = (e)=>e === "position" || e === "percentage", Gf = (e)=>e === "image" || e === "url", Hf = (e)=>e === "length" || e === "size" || e === "bg-size", Qf = (e)=>e === "length", Xh = (e)=>e === "number", bf = (e)=>e === "family-name", Kf = (e)=>e === "number" || e === "weight", Yf = (e)=>e === "shadow", Zh = ()=>{
        const e = de("color"), t = de("font"), n = de("text"), r = de("font-weight"), o = de("tracking"), l = de("leading"), i = de("breakpoint"), s = de("container"), u = de("spacing"), a = de("radius"), p = de("shadow"), m = de("inset-shadow"), h = de("text-shadow"), y = de("drop-shadow"), k = de("blur"), w = de("perspective"), x = de("aspect"), f = de("ease"), c = de("animate"), d = ()=>[
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column"
            ], v = ()=>[
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
            ], P = ()=>[
                ...v(),
                O,
                L
            ], z = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], _ = ()=>[
                "auto",
                "contain",
                "none"
            ], g = ()=>[
                O,
                L,
                u
            ], A = ()=>[
                Nt,
                "full",
                "auto",
                ...g()
            ], D = ()=>[
                zt,
                "none",
                "subgrid",
                O,
                L
            ], le = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        zt,
                        O,
                        L
                    ]
                },
                zt,
                O,
                L
            ], _e = ()=>[
                zt,
                "auto",
                O,
                L
            ], Fe = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                O,
                L
            ], qe = ()=>[
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
            ], Ae = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], Q = ()=>[
                "auto",
                ...g()
            ], he = ()=>[
                Nt,
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
                ...g()
            ], R = ()=>[
                Nt,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...g()
            ], U = ()=>[
                Nt,
                "screen",
                "full",
                "lh",
                "dvh",
                "lvh",
                "svh",
                "min",
                "max",
                "fit",
                ...g()
            ], E = ()=>[
                e,
                O,
                L
            ], b = ()=>[
                ...v(),
                Zu,
                Xu,
                {
                    position: [
                        O,
                        L
                    ]
                }
            ], ee = ()=>[
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
            ], pt = ()=>[
                "auto",
                "cover",
                "contain",
                bh,
                Bh,
                {
                    size: [
                        O,
                        L
                    ]
                }
            ], Ue = ()=>[
                Fl,
                tr,
                Zt
            ], ie = ()=>[
                "",
                "none",
                "full",
                a,
                O,
                L
            ], K = ()=>[
                "",
                $,
                tr,
                Zt
            ], Qe = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], T = ()=>[
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
            ], N = ()=>[
                $,
                Fl,
                Zu,
                Xu
            ], V = ()=>[
                "",
                "none",
                k,
                O,
                L
            ], j = ()=>[
                "none",
                $,
                O,
                L
            ], F = ()=>[
                "none",
                $,
                O,
                L
            ], W = ()=>[
                $,
                O,
                L
            ], Y = ()=>[
                Nt,
                "full",
                ...g()
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
                    mt
                ],
                breakpoint: [
                    mt
                ],
                color: [
                    Bf
                ],
                container: [
                    mt
                ],
                "drop-shadow": [
                    mt
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    $h
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
                    mt
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
                    mt
                ],
                shadow: [
                    mt
                ],
                spacing: [
                    "px",
                    $
                ],
                text: [
                    mt
                ],
                "text-shadow": [
                    mt
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
                            Nt,
                            L,
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
                            $,
                            L,
                            O,
                            s
                        ]
                    }
                ],
                "break-after": [
                    {
                        "break-after": d()
                    }
                ],
                "break-before": [
                    {
                        "break-before": d()
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
                        object: P()
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
                        overscroll: _()
                    }
                ],
                "overscroll-x": [
                    {
                        "overscroll-x": _()
                    }
                ],
                "overscroll-y": [
                    {
                        "overscroll-y": _()
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
                        inset: A()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": A()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": A()
                    }
                ],
                start: [
                    {
                        "inset-s": A(),
                        start: A()
                    }
                ],
                end: [
                    {
                        "inset-e": A(),
                        end: A()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": A()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": A()
                    }
                ],
                top: [
                    {
                        top: A()
                    }
                ],
                right: [
                    {
                        right: A()
                    }
                ],
                bottom: [
                    {
                        bottom: A()
                    }
                ],
                left: [
                    {
                        left: A()
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
                            zt,
                            "auto",
                            O,
                            L
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            Nt,
                            "full",
                            "auto",
                            s,
                            ...g()
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
                            Nt,
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
                            $,
                            O,
                            L
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            $,
                            O,
                            L
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            zt,
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
                        "grid-cols": D()
                    }
                ],
                "col-start-end": [
                    {
                        col: le()
                    }
                ],
                "col-start": [
                    {
                        "col-start": _e()
                    }
                ],
                "col-end": [
                    {
                        "col-end": _e()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": D()
                    }
                ],
                "row-start-end": [
                    {
                        row: le()
                    }
                ],
                "row-start": [
                    {
                        "row-start": _e()
                    }
                ],
                "row-end": [
                    {
                        "row-end": _e()
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
                        "auto-cols": Fe()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": Fe()
                    }
                ],
                gap: [
                    {
                        gap: g()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": g()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": g()
                    }
                ],
                "justify-content": [
                    {
                        justify: [
                            ...qe(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...Ae(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...Ae()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...qe()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...Ae(),
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
                            ...Ae(),
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
                        "place-content": qe()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...Ae(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...Ae()
                        ]
                    }
                ],
                p: [
                    {
                        p: g()
                    }
                ],
                px: [
                    {
                        px: g()
                    }
                ],
                py: [
                    {
                        py: g()
                    }
                ],
                ps: [
                    {
                        ps: g()
                    }
                ],
                pe: [
                    {
                        pe: g()
                    }
                ],
                pbs: [
                    {
                        pbs: g()
                    }
                ],
                pbe: [
                    {
                        pbe: g()
                    }
                ],
                pt: [
                    {
                        pt: g()
                    }
                ],
                pr: [
                    {
                        pr: g()
                    }
                ],
                pb: [
                    {
                        pb: g()
                    }
                ],
                pl: [
                    {
                        pl: g()
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
                        "space-x": g()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": g()
                    }
                ],
                "space-y-reverse": [
                    "space-y-reverse"
                ],
                size: [
                    {
                        size: he()
                    }
                ],
                "inline-size": [
                    {
                        inline: [
                            "auto",
                            ...R()
                        ]
                    }
                ],
                "min-inline-size": [
                    {
                        "min-inline": [
                            "auto",
                            ...R()
                        ]
                    }
                ],
                "max-inline-size": [
                    {
                        "max-inline": [
                            "none",
                            ...R()
                        ]
                    }
                ],
                "block-size": [
                    {
                        block: [
                            "auto",
                            ...U()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...U()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...U()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...he()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...he()
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
                            ...he()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...he()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...he()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...he()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            tr,
                            Zt
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
                            Yh,
                            Wh
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
                            Fl,
                            L
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            Qh,
                            Gh,
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
                            $,
                            "none",
                            O,
                            Yu
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ...g()
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
                            O,
                            Zt
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
                        indent: g()
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
                        bg: b()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: ee()
                    }
                ],
                "bg-size": [
                    {
                        bg: pt()
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
                                    zt,
                                    O,
                                    L
                                ],
                                radial: [
                                    "",
                                    O,
                                    L
                                ],
                                conic: [
                                    zt,
                                    O,
                                    L
                                ]
                            },
                            Kh,
                            Hh
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
                        from: Ue()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Ue()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Ue()
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
                        rounded: ie()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": ie()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": ie()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": ie()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": ie()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": ie()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": ie()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": ie()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": ie()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": ie()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": ie()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": ie()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": ie()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": ie()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": ie()
                    }
                ],
                "border-w": [
                    {
                        border: K()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": K()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": K()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": K()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": K()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": K()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": K()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": K()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": K()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": K()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": K()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": K()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": K()
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
                            O,
                            L
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            $,
                            tr,
                            Zt
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
                            p,
                            ro,
                            no
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
                            m,
                            ro,
                            no
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
                        ring: K()
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
                            Zt
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
                        "inset-ring": K()
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
                            ro,
                            no
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
                            O,
                            L
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...T(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": T()
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
                        "mask-linear-from": N()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": N()
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
                        "mask-t-from": N()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": N()
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
                        "mask-r-from": N()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": N()
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
                        "mask-b-from": N()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": N()
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
                        "mask-l-from": N()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": N()
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
                        "mask-x-from": N()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": N()
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
                        "mask-y-from": N()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": N()
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
                            O,
                            L
                        ]
                    }
                ],
                "mask-image-radial-from-pos": [
                    {
                        "mask-radial-from": N()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": N()
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
                        "mask-radial-at": v()
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
                        "mask-conic-from": N()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": N()
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
                        mask: b()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: ee()
                    }
                ],
                "mask-size": [
                    {
                        mask: pt()
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
                        blur: V()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            $,
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
                            y,
                            ro,
                            no
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
                            O,
                            L
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            $,
                            O,
                            L
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            $,
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
                        "backdrop-blur": V()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            $,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            $,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            $,
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
                        "border-spacing": g()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": g()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": g()
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
                            $,
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
                            f,
                            O,
                            L
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            $,
                            O,
                            L
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            c,
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
                            w,
                            O,
                            L
                        ]
                    }
                ],
                "perspective-origin": [
                    {
                        "perspective-origin": P()
                    }
                ],
                rotate: [
                    {
                        rotate: j()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": j()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": j()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": j()
                    }
                ],
                scale: [
                    {
                        scale: F()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": F()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": F()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": F()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: W()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": W()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": W()
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
                        origin: P()
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
                        translate: Y()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": Y()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": Y()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": Y()
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
                        "scroll-m": g()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": g()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": g()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": g()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": g()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": g()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": g()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": g()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": g()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": g()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": g()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": g()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": g()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": g()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": g()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": g()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": g()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": g()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": g()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": g()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": g()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": g()
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
                            ...E()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            $,
                            tr,
                            Zt,
                            Yu
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
    }, Jh = Th(Zh);
    function $n(...e) {
        return Jh(vf(e));
    }
    const qh = yf("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function eg({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? Rm : "button";
        return M.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: $n(qh({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const tg = yf("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), Xf = S.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function ng({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return M.jsx(uh, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: $n("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: M.jsx(Xf.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function oo({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = S.useContext(Xf);
        return M.jsx(ah, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: $n(tg({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function Ju({ title: e, defaultPosition: t, children: n, className: r }) {
        const [o, l] = S.useState(t), i = S.useRef(!1), s = S.useRef({
            x: 0,
            y: 0
        }), u = S.useCallback((a)=>{
            i.current = !0, s.current = {
                x: a.clientX - o.x,
                y: a.clientY - o.y
            };
            const p = (h)=>{
                if (!i.current) return;
                const y = Math.max(0, h.clientX - s.current.x), k = Math.max(0, h.clientY - s.current.y);
                l({
                    x: y,
                    y: k
                });
            }, m = ()=>{
                i.current = !1, window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", m);
            };
            window.addEventListener("mousemove", p), window.addEventListener("mouseup", m);
        }, [
            o
        ]);
        return M.jsxs("div", {
            className: $n("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: o.x,
                top: o.y
            },
            children: [
                M.jsx("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg",
                    onMouseDown: u,
                    children: e
                }),
                M.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const qu = "grid-canvas", Mt = 16, yo = 48, rg = [
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
    function ea() {
        const e = Math.floor(window.innerWidth / Mt), t = Math.floor((window.innerHeight - yo) / Mt);
        return {
            rows: Math.max(10, t),
            cols: Math.max(10, e)
        };
    }
    function og() {
        const [e, t] = S.useState(ea), { grid: n, loading: r, error: o } = zm(qu, e.rows, e.cols), l = S.useRef(null), i = S.useRef(!1), s = S.useRef(!1), [u, a] = S.useState("draw"), [p, m] = S.useState(0), [h, y] = S.useState(""), [k, w] = S.useState(""), [x, f] = S.useState([]), [c, d] = S.useState(null), v = S.useRef({
            row: 0,
            col: 0
        }), P = S.useRef(null), z = S.useRef(null), _ = S.useRef(null), g = S.useRef(null), A = S.useRef(null);
        S.useEffect(()=>{
            const T = ()=>{
                const N = ea();
                t(N), n && n.resize(N.rows, N.cols);
            };
            return window.addEventListener("resize", T), ()=>window.removeEventListener("resize", T);
        }, [
            n
        ]);
        const D = S.useCallback(()=>{
            n && (y(n.export_json()), w(n.export_pytorch_tensor()));
        }, [
            n
        ]), le = S.useCallback(()=>{
            if (n && x.length > 0) {
                for (const T of x)n.delete_cell(T.row, T.col);
                f([]), n.render(), D();
            }
        }, [
            n,
            x,
            D
        ]), _e = S.useCallback(()=>{
            if (n) {
                n.render();
                for (const T of x)n.highlight_cell(T.row, T.col);
            }
        }, [
            n,
            x
        ]), Fe = S.useCallback((T, N)=>x.some((V)=>V.row === T && V.col === N), [
            x
        ]), qe = S.useCallback((T)=>{
            const N = l.current;
            if (!N) return {
                col: 0,
                row: 0
            };
            const V = N.getBoundingClientRect(), j = N.width / V.width, F = N.height / V.height, W = (T.clientX - V.left) * j, Y = (T.clientY - V.top) * F, ue = n?.get_cols() ?? e.cols, Pe = n?.get_rows() ?? e.rows, Me = Math.max(0, Math.min(ue - 1, Math.floor(W / Mt))), ae = Math.max(0, Math.min(Pe - 1, Math.floor(Y / Mt)));
            return {
                col: Me,
                row: ae
            };
        }, [
            n,
            e
        ]), Ae = S.useCallback((T, N)=>{
            A.current = "box", _.current = {
                row: T,
                col: N
            }, i.current = !0, f([]), n?.render();
            const V = (F)=>{
                if (!n || A.current !== "box" || !_.current) return;
                const { col: W, row: Y } = qe(F);
                n.render_with_selection_box(_.current.row, _.current.col, Y, W);
            }, j = (F)=>{
                if (window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", j), !n || A.current !== "box" || !_.current) {
                    A.current = null, i.current = !1;
                    return;
                }
                const { col: W, row: Y } = qe(F), ue = Math.min(_.current.row, Y), Pe = Math.max(_.current.row, Y), Me = Math.min(_.current.col, W), ae = Math.max(_.current.col, W), et = n.get_cols(), Hn = n.get_rows(), al = [];
                for(let _t = ue; _t <= Pe && _t < Hn; _t++)for(let Qn = Me; Qn <= ae && Qn < et; Qn++)n.get_cell(_t, Qn) && al.push({
                    row: _t,
                    col: Qn
                });
                f(al), n.render();
                for (const _t of al)n.highlight_cell(_t.row, _t.col);
                A.current = null, _.current = null, i.current = !1;
            };
            window.addEventListener("mousemove", V), window.addEventListener("mouseup", j);
        }, [
            n,
            qe
        ]), Q = (T)=>{
            const N = T.currentTarget, V = N.getBoundingClientRect(), j = N.width / V.width, F = N.height / V.height;
            return {
                x: (T.clientX - V.left) * j,
                y: (T.clientY - V.top) * F
            };
        }, he = (T)=>{
            const { x: N, y: V } = Q(T);
            return {
                col: Math.floor(N / Mt),
                row: Math.floor(V / Mt)
            };
        }, R = (T)=>{
            const { x: N, y: V } = Q(T), j = n?.get_cols() ?? e.cols, F = n?.get_rows() ?? e.rows, W = Math.max(0, Math.min(j, Math.round(N / Mt))), Y = Math.max(0, Math.min(F, Math.round(V / Mt)));
            return {
                col: W,
                row: Y
            };
        }, U = S.useCallback((T)=>{
            if (!n) return;
            n.set_draw_color(p);
            const N = n.get_cols(), V = n.get_rows();
            if (u === "draw") {
                const { col: j, row: F } = he(T);
                if (j >= N || F >= V) return;
                p === 6 ? s.current = !1 : s.current = !n.get_cell(F, j), i.current = !0, n.set_cell(F, j, s.current), D();
            } else if (u === "line") {
                const { col: j, row: F } = R(T);
                P.current = {
                    row: F,
                    col: j
                }, i.current = !0, n.render_with_line(F, j, F, j);
            } else if (u === "rect") {
                const { col: j, row: F } = R(T);
                z.current = {
                    row: F,
                    col: j
                }, i.current = !0, n.render_with_rect(F, j, F, j);
            } else if (u === "select") {
                const { col: j, row: F } = he(T);
                if (j >= N || F >= V) return;
                Fe(F, j) ? (A.current = "drag", g.current = {
                    row: F,
                    col: j
                }, i.current = !0, _e()) : n.get_cell(F, j) ? (f([
                    {
                        row: F,
                        col: j
                    }
                ]), A.current = "drag", g.current = {
                    row: F,
                    col: j
                }, i.current = !0, n.render(), n.highlight_cell(F, j)) : Ae(F, j);
            }
        }, [
            n,
            u,
            p,
            e,
            D,
            Fe,
            _e,
            Ae
        ]), E = S.useCallback((T)=>{
            if (!n) return;
            const N = he(T);
            if (v.current = {
                row: N.row,
                col: N.col
            }, !i.current) return;
            const V = n.get_cols(), j = n.get_rows();
            if (u === "draw") {
                const { col: F, row: W } = he(T);
                if (F >= V || W >= j) return;
                n.set_cell(W, F, s.current), D();
            } else if (u === "line") {
                if (P.current) {
                    const { col: F, row: W } = R(T);
                    n.render_with_line(P.current.row, P.current.col, W, F);
                }
            } else if (u === "rect") {
                if (z.current) {
                    const { col: F, row: W } = R(T);
                    n.render_with_rect(z.current.row, z.current.col, W, F);
                }
            } else if (u === "select") {
                const { col: F, row: W } = he(T), Y = Math.max(0, Math.min(V - 1, F)), ue = Math.max(0, Math.min(j - 1, W));
                if (A.current === "box" && _.current) n.render_with_selection_box(_.current.row, _.current.col, ue, Y);
                else if (A.current === "drag" && g.current && x.length > 0) {
                    const Pe = ue - g.current.row, Me = Y - g.current.col;
                    n.render();
                    for (const ae of x){
                        const et = ae.row + Pe, Hn = ae.col + Me;
                        et >= 0 && et < j && Hn >= 0 && Hn < V && n.highlight_cell(et, Hn);
                    }
                }
            }
        }, [
            n,
            u,
            e,
            D,
            x
        ]), b = S.useCallback((T)=>{
            if (!n) return;
            const N = n.get_cols(), V = n.get_rows();
            if (u === "draw") i.current = !1;
            else if (u === "line") {
                if (P.current) {
                    const { col: j, row: F } = R(T);
                    n.draw_line(P.current.row, P.current.col, F, j), D();
                }
                P.current = null, i.current = !1;
            } else if (u === "rect") {
                if (z.current) {
                    const { col: j, row: F } = R(T);
                    n.draw_rect(z.current.row, z.current.col, F, j), D();
                }
                z.current = null, i.current = !1;
            } else if (u === "select") {
                const { col: j, row: F } = he(T);
                if (A.current === "box" && _.current) {
                    const W = Math.min(_.current.row, F), Y = Math.max(_.current.row, F), ue = Math.min(_.current.col, j), Pe = Math.max(_.current.col, j), Me = [];
                    for(let ae = W; ae <= Y && ae < V; ae++)for(let et = ue; et <= Pe && et < N; et++)n.get_cell(ae, et) && Me.push({
                        row: ae,
                        col: et
                    });
                    f(Me), n.render();
                    for (const ae of Me)n.highlight_cell(ae.row, ae.col);
                } else if (A.current === "drag" && g.current && x.length > 0) {
                    const W = F - g.current.row, Y = j - g.current.col;
                    if (W !== 0 || Y !== 0) {
                        const ue = [];
                        for (const Pe of x){
                            const Me = Pe.row + W, ae = Pe.col + Y;
                            Me >= 0 && Me < V && ae >= 0 && ae < N && (n.move_cell(Pe.row, Pe.col, Me, ae), ue.push({
                                row: Me,
                                col: ae
                            }));
                        }
                        f(ue), D(), n.render();
                        for (const Pe of ue)n.highlight_cell(Pe.row, Pe.col);
                    } else {
                        n.render();
                        for (const ue of x)n.highlight_cell(ue.row, ue.col);
                    }
                }
                A.current = null, _.current = null, g.current = null, i.current = !1;
            }
        }, [
            n,
            u,
            e,
            D,
            x
        ]), ee = S.useCallback(()=>{
            if (u === "draw") i.current = !1;
            else if (u === "line") n && n.render(), P.current = null, i.current = !1;
            else if (u === "rect") n && n.render(), z.current = null, i.current = !1;
            else if (u === "select") {
                if (n) {
                    n.render();
                    for (const T of x)n.highlight_cell(T.row, T.col);
                }
                A.current = null, _.current = null, g.current = null, i.current = !1;
            }
        }, [
            n,
            u,
            x
        ]), pt = S.useCallback(()=>{
            n?.clear(), f([]), D();
        }, [
            n,
            D
        ]), Ue = S.useCallback((T)=>{
            if (y(T), n && T.trim()) try {
                n.import_json(T), f([]), w(n.export_pytorch_tensor());
            } catch  {}
        }, [
            n
        ]), ie = S.useCallback((T)=>{
            if (w(T), n && T.trim()) try {
                let N = T.trim();
                N.startsWith("tensor(") && (N = N.slice(7), N.endsWith(")") && (N = N.slice(0, -1))), n.import_tensor(N), f([]), y(n.export_json());
            } catch  {}
        }, [
            n
        ]), K = S.useCallback(()=>{
            if (!n || x.length === 0) return;
            const T = Math.min(...x.map((j)=>j.row)), N = Math.min(...x.map((j)=>j.col)), V = x.map((j)=>({
                    relRow: j.row - T,
                    relCol: j.col - N,
                    color: n.get_cell_color(j.row, j.col)
                }));
            d({
                cells: V
            });
        }, [
            n,
            x
        ]), Qe = S.useCallback(()=>{
            if (!n || !c || c.cells.length === 0) return;
            const T = v.current.row, N = v.current.col, V = n.get_rows(), j = n.get_cols(), F = [];
            for (const W of c.cells){
                const Y = T + W.relRow, ue = N + W.relCol;
                Y >= 0 && Y < V && ue >= 0 && ue < j && (n.set_draw_color(W.color), n.set_cell(Y, ue, !0), F.push({
                    row: Y,
                    col: ue
                }));
            }
            f(F), n.render();
            for (const W of F)n.highlight_cell(W.row, W.col);
            D();
        }, [
            n,
            c,
            D
        ]);
        return S.useEffect(()=>{
            const T = (N)=>{
                N.key === "\\" && a((j)=>j === "line" ? "draw" : "line"), N.key === "m" && a((j)=>j === "rect" ? "draw" : "rect"), N.key === "s" && a((j)=>j === "select" ? "draw" : "select"), (N.key === "Delete" || N.key === "Backspace") && x.length > 0 && (N.preventDefault(), le()), (N.ctrlKey || N.metaKey) && N.key === "c" && x.length > 0 && (N.preventDefault(), K()), (N.ctrlKey || N.metaKey) && N.key === "v" && c && (N.preventDefault(), Qe());
                const V = parseInt(N.key);
                V >= 1 && V <= 7 && m(V - 1);
            };
            return window.addEventListener("keydown", T), ()=>window.removeEventListener("keydown", T);
        }, [
            x,
            le,
            K,
            Qe,
            c
        ]), o ? M.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: M.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: M.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        o
                    ]
                })
            })
        }) : M.jsxs(M.Fragment, {
            children: [
                M.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        M.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Grid Draw"
                        }),
                        r && M.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        })
                    ]
                }),
                M.jsx("canvas", {
                    ref: l,
                    id: qu,
                    className: $n("fixed left-0 right-0 bottom-0", r && "opacity-50"),
                    style: {
                        top: yo,
                        cursor: r ? "wait" : "crosshair"
                    },
                    onMouseDown: U,
                    onMouseMove: E,
                    onMouseUp: b,
                    onMouseLeave: ee
                }),
                M.jsx(Ju, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: yo + 20
                    },
                    children: M.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            M.jsxs("div", {
                                children: [
                                    M.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    M.jsxs(ng, {
                                        type: "single",
                                        value: u,
                                        onValueChange: (T)=>T && a(T),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            M.jsx(oo, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            M.jsx(oo, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            M.jsx(oo, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            M.jsx(oo, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            M.jsxs("div", {
                                children: [
                                    M.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    M.jsx("div", {
                                        className: "flex gap-1",
                                        children: rg.map((T, N)=>M.jsx("button", {
                                                onClick: ()=>m(N),
                                                title: `${N + 1}: ${T.name}`,
                                                className: $n("w-6 h-6 rounded border-2 transition-all", p === N ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", T.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: T.hex ?? "transparent",
                                                    backgroundImage: T.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: T.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: T.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, N))
                                    })
                                ]
                            }),
                            M.jsx(eg, {
                                variant: "destructive",
                                onClick: pt,
                                disabled: r,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            M.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, s select, 1-7 colors"
                            })
                        ]
                    })
                }),
                M.jsx(Ju, {
                    title: "Data (10x10 zone)",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: yo + 20
                    },
                    children: M.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            M.jsxs("div", {
                                children: [
                                    M.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "JSON"
                                    }),
                                    M.jsx("textarea", {
                                        value: h,
                                        onChange: (T)=>Ue(T.target.value),
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            }),
                            M.jsxs("div", {
                                children: [
                                    M.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "2D Array (black cells)"
                                    }),
                                    M.jsx("textarea", {
                                        value: k,
                                        onChange: (T)=>ie(T.target.value),
                                        placeholder: "Paste tensor([[1., 0.], ...]) or [[1, 0], ...]",
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            }),
                            M.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "Edit to import. Supports ints, floats, booleans."
                            })
                        ]
                    })
                })
            ]
        });
    }
    function lg() {
        return M.jsx("div", {
            className: "grid-draw-app",
            children: M.jsx(og, {})
        });
    }
    const ta = document.getElementById("grid-draw-root");
    ta && Al.createRoot(ta).render(M.jsx(ce.StrictMode, {
        children: M.jsx(lg, {})
    }));
})();
