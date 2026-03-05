(async ()=>{
    function Jf(e, t) {
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
    function qf(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var ra = {
        exports: {}
    }, Ko = {}, oa = {
        exports: {}
    }, W = {};
    var Or = Symbol.for("react.element"), ed = Symbol.for("react.portal"), td = Symbol.for("react.fragment"), nd = Symbol.for("react.strict_mode"), rd = Symbol.for("react.profiler"), od = Symbol.for("react.provider"), ld = Symbol.for("react.context"), id = Symbol.for("react.forward_ref"), sd = Symbol.for("react.suspense"), ud = Symbol.for("react.memo"), ad = Symbol.for("react.lazy"), Ls = Symbol.iterator;
    function cd(e) {
        return e === null || typeof e != "object" ? null : (e = Ls && e[Ls] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var la = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, ia = Object.assign, sa = {};
    function Hn(e, t, n) {
        this.props = e, this.context = t, this.refs = sa, this.updater = n || la;
    }
    Hn.prototype.isReactComponent = {};
    Hn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    Hn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function ua() {}
    ua.prototype = Hn.prototype;
    function Oi(e, t, n) {
        this.props = e, this.context = t, this.refs = sa, this.updater = n || la;
    }
    var Di = Oi.prototype = new ua;
    Di.constructor = Oi;
    ia(Di, Hn.prototype);
    Di.isPureReactComponent = !0;
    var js = Array.isArray, aa = Object.prototype.hasOwnProperty, Fi = {
        current: null
    }, ca = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function fa(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)aa.call(t, r) && !ca.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var u = Array(s), a = 0; a < s; a++)u[a] = arguments[a + 2];
            o.children = u;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: Or,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Fi.current
        };
    }
    function fd(e, t) {
        return {
            $$typeof: Or,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function Ai(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Or;
    }
    function dd(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Os = /\/+/g;
    function fl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? dd("" + e.key) : t.toString(36);
    }
    function so(e, t, n, r, o) {
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
                    case Or:
                    case ed:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + fl(i, 0) : r, js(o) ? (n = "", e != null && (n = e.replace(Os, "$&/") + "/"), so(o, t, n, "", function(a) {
            return a;
        })) : o != null && (Ai(o) && (o = fd(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Os, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", js(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var u = r + fl(l, s);
            i += so(l, t, n, u, o);
        }
        else if (u = cd(e), typeof u == "function") for(e = u.call(e), s = 0; !(l = e.next()).done;)l = l.value, u = r + fl(l, s++), i += so(l, t, n, u, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function $r(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return so(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function pd(e) {
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
    var Ie = {
        current: null
    }, uo = {
        transition: null
    }, md = {
        ReactCurrentDispatcher: Ie,
        ReactCurrentBatchConfig: uo,
        ReactCurrentOwner: Fi
    };
    function da() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    W.Children = {
        map: $r,
        forEach: function(e, t, n) {
            $r(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return $r(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return $r(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!Ai(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    W.Component = Hn;
    W.Fragment = td;
    W.Profiler = rd;
    W.PureComponent = Oi;
    W.StrictMode = nd;
    W.Suspense = sd;
    W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = md;
    W.act = da;
    W.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = ia({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Fi.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(u in t)aa.call(t, u) && !ca.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (u === 1) r.children = n;
        else if (1 < u) {
            s = Array(u);
            for(var a = 0; a < u; a++)s[a] = arguments[a + 2];
            r.children = s;
        }
        return {
            $$typeof: Or,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    W.createContext = function(e) {
        return e = {
            $$typeof: ld,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: od,
            _context: e
        }, e.Consumer = e;
    };
    W.createElement = fa;
    W.createFactory = function(e) {
        var t = fa.bind(null, e);
        return t.type = e, t;
    };
    W.createRef = function() {
        return {
            current: null
        };
    };
    W.forwardRef = function(e) {
        return {
            $$typeof: id,
            render: e
        };
    };
    W.isValidElement = Ai;
    W.lazy = function(e) {
        return {
            $$typeof: ad,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: pd
        };
    };
    W.memo = function(e, t) {
        return {
            $$typeof: ud,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    W.startTransition = function(e) {
        var t = uo.transition;
        uo.transition = {};
        try {
            e();
        } finally{
            uo.transition = t;
        }
    };
    W.unstable_act = da;
    W.useCallback = function(e, t) {
        return Ie.current.useCallback(e, t);
    };
    W.useContext = function(e) {
        return Ie.current.useContext(e);
    };
    W.useDebugValue = function() {};
    W.useDeferredValue = function(e) {
        return Ie.current.useDeferredValue(e);
    };
    W.useEffect = function(e, t) {
        return Ie.current.useEffect(e, t);
    };
    W.useId = function() {
        return Ie.current.useId();
    };
    W.useImperativeHandle = function(e, t, n) {
        return Ie.current.useImperativeHandle(e, t, n);
    };
    W.useInsertionEffect = function(e, t) {
        return Ie.current.useInsertionEffect(e, t);
    };
    W.useLayoutEffect = function(e, t) {
        return Ie.current.useLayoutEffect(e, t);
    };
    W.useMemo = function(e, t) {
        return Ie.current.useMemo(e, t);
    };
    W.useReducer = function(e, t, n) {
        return Ie.current.useReducer(e, t, n);
    };
    W.useRef = function(e) {
        return Ie.current.useRef(e);
    };
    W.useState = function(e) {
        return Ie.current.useState(e);
    };
    W.useSyncExternalStore = function(e, t, n) {
        return Ie.current.useSyncExternalStore(e, t, n);
    };
    W.useTransition = function() {
        return Ie.current.useTransition();
    };
    W.version = "18.3.1";
    oa.exports = W;
    var S = oa.exports;
    const fe = qf(S), pa = Jf({
        __proto__: null,
        default: fe
    }, [
        S
    ]);
    var hd = S, gd = Symbol.for("react.element"), vd = Symbol.for("react.fragment"), yd = Object.prototype.hasOwnProperty, wd = hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xd = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function ma(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)yd.call(t, r) && !xd.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: gd,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: wd.current
        };
    }
    Ko.Fragment = vd;
    Ko.jsx = ma;
    Ko.jsxs = ma;
    ra.exports = Ko;
    var T = ra.exports, Ul = {}, ha = {
        exports: {}
    }, Qe = {}, ga = {
        exports: {}
    }, va = {};
    (function(e) {
        function t(R, A) {
            var _ = R.length;
            R.push(A);
            e: for(; 0 < _;){
                var K = _ - 1 >>> 1, ee = R[K];
                if (0 < o(ee, A)) R[K] = A, R[_] = ee, _ = K;
                else break e;
            }
        }
        function n(R) {
            return R.length === 0 ? null : R[0];
        }
        function r(R) {
            if (R.length === 0) return null;
            var A = R[0], _ = R.pop();
            if (_ !== A) {
                R[0] = _;
                e: for(var K = 0, ee = R.length, vt = ee >>> 1; K < vt;){
                    var $e = 2 * (K + 1) - 1, ue = R[$e], X = $e + 1, Xe = R[X];
                    if (0 > o(ue, _)) X < ee && 0 > o(Xe, ue) ? (R[K] = Xe, R[X] = _, K = X) : (R[K] = ue, R[$e] = _, K = $e);
                    else if (X < ee && 0 > o(Xe, _)) R[K] = Xe, R[X] = _, K = X;
                    else break e;
                }
            }
            return A;
        }
        function o(R, A) {
            var _ = R.sortIndex - A.sortIndex;
            return _ !== 0 ? _ : R.id - A.id;
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
        var u = [], a = [], p = 1, m = null, h = 3, w = !1, k = !1, x = !1, y = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function d(R) {
            for(var A = n(a); A !== null;){
                if (A.callback === null) r(a);
                else if (A.startTime <= R) r(a), A.sortIndex = A.expirationTime, t(u, A);
                else break;
                A = n(a);
            }
        }
        function v(R) {
            if (x = !1, d(R), !k) if (n(u) !== null) k = !0, Q(N);
            else {
                var A = n(a);
                A !== null && Oe(v, A.startTime - R);
            }
        }
        function N(R, A) {
            k = !1, x && (x = !1, f(g), g = -1), w = !0;
            var _ = h;
            try {
                for(d(A), m = n(u); m !== null && (!(m.expirationTime > A) || R && !se());){
                    var K = m.callback;
                    if (typeof K == "function") {
                        m.callback = null, h = m.priorityLevel;
                        var ee = K(m.expirationTime <= A);
                        A = e.unstable_now(), typeof ee == "function" ? m.callback = ee : m === n(u) && r(u), d(A);
                    } else r(u);
                    m = n(u);
                }
                if (m !== null) var vt = !0;
                else {
                    var $e = n(a);
                    $e !== null && Oe(v, $e.startTime - A), vt = !1;
                }
                return vt;
            } finally{
                m = null, h = _, w = !1;
            }
        }
        var z = !1, P = null, g = -1, U = 5, F = -1;
        function se() {
            return !(e.unstable_now() - F < U);
        }
        function ge() {
            if (P !== null) {
                var R = e.unstable_now();
                F = R;
                var A = !0;
                try {
                    A = P(!0, R);
                } finally{
                    A ? Ye() : (z = !1, P = null);
                }
            } else z = !1;
        }
        var Ye;
        if (typeof c == "function") Ye = function() {
            c(ge);
        };
        else if (typeof MessageChannel < "u") {
            var ft = new MessageChannel, je = ft.port2;
            ft.port1.onmessage = ge, Ye = function() {
                je.postMessage(null);
            };
        } else Ye = function() {
            y(ge, 0);
        };
        function Q(R) {
            P = R, z || (z = !0, Ye());
        }
        function Oe(R, A) {
            g = y(function() {
                R(e.unstable_now());
            }, A);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
            R.callback = null;
        }, e.unstable_continueExecution = function() {
            k || w || (k = !0, Q(N));
        }, e.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < R ? Math.floor(1e3 / R) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return h;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(u);
        }, e.unstable_next = function(R) {
            switch(h){
                case 1:
                case 2:
                case 3:
                    var A = 3;
                    break;
                default:
                    A = h;
            }
            var _ = h;
            h = A;
            try {
                return R();
            } finally{
                h = _;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, A) {
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
            var _ = h;
            h = R;
            try {
                return A();
            } finally{
                h = _;
            }
        }, e.unstable_scheduleCallback = function(R, A, _) {
            var K = e.unstable_now();
            switch(typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? K + _ : K) : _ = K, R){
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
            return ee = _ + ee, R = {
                id: p++,
                callback: A,
                priorityLevel: R,
                startTime: _,
                expirationTime: ee,
                sortIndex: -1
            }, _ > K ? (R.sortIndex = _, t(a, R), n(u) === null && R === n(a) && (x ? (f(g), g = -1) : x = !0, Oe(v, _ - K))) : (R.sortIndex = ee, t(u, R), k || w || (k = !0, Q(N))), R;
        }, e.unstable_shouldYield = se, e.unstable_wrapCallback = function(R) {
            var A = h;
            return function() {
                var _ = h;
                h = A;
                try {
                    return R.apply(this, arguments);
                } finally{
                    h = _;
                }
            };
        };
    })(va);
    ga.exports = va;
    var kd = ga.exports;
    var Sd = S, be = kd;
    function E(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var ya = new Set, vr = {};
    function hn(e, t) {
        Fn(e, t), Fn(e + "Capture", t);
    }
    function Fn(e, t) {
        for(vr[e] = t, e = 0; e < t.length; e++)ya.add(t[e]);
    }
    var Et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vl = Object.prototype.hasOwnProperty, Cd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ds = {}, Fs = {};
    function Ed(e) {
        return Vl.call(Fs, e) ? !0 : Vl.call(Ds, e) ? !1 : Cd.test(e) ? Fs[e] = !0 : (Ds[e] = !0, !1);
    }
    function _d(e, t, n, r) {
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
    function Pd(e, t, n, r) {
        if (t === null || typeof t > "u" || _d(e, t, n, r)) return !0;
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
    var Ui = /[\-:]([a-z])/g;
    function Vi(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Ui, Vi);
        Ee[t] = new Le(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Ui, Vi);
        Ee[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Ui, Vi);
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
    function $i(e, t, n, r) {
        var o = Ee.hasOwnProperty(t) ? Ee[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pd(t, n, o, r) && (n = null), r || o === null ? Ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var zt = Sd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Br = Symbol.for("react.element"), wn = Symbol.for("react.portal"), xn = Symbol.for("react.fragment"), Bi = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), wa = Symbol.for("react.provider"), xa = Symbol.for("react.context"), Wi = Symbol.for("react.forward_ref"), Bl = Symbol.for("react.suspense"), Wl = Symbol.for("react.suspense_list"), Gi = Symbol.for("react.memo"), It = Symbol.for("react.lazy"), ka = Symbol.for("react.offscreen"), As = Symbol.iterator;
    function Yn(e) {
        return e === null || typeof e != "object" ? null : (e = As && e[As] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var re = Object.assign, dl;
    function or(e) {
        if (dl === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            dl = t && t[1] || "";
        }
        return `
` + dl + e;
    }
    var pl = !1;
    function ml(e, t) {
        if (!e || pl) return "";
        pl = !0;
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
            pl = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? or(e) : "";
    }
    function Nd(e) {
        switch(e.tag){
            case 5:
                return or(e.type);
            case 16:
                return or("Lazy");
            case 13:
                return or("Suspense");
            case 19:
                return or("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = ml(e.type, !1), e;
            case 11:
                return e = ml(e.type.render, !1), e;
            case 1:
                return e = ml(e.type, !0), e;
            default:
                return "";
        }
    }
    function Gl(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case xn:
                return "Fragment";
            case wn:
                return "Portal";
            case $l:
                return "Profiler";
            case Bi:
                return "StrictMode";
            case Bl:
                return "Suspense";
            case Wl:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case xa:
                return (e.displayName || "Context") + ".Consumer";
            case wa:
                return (e._context.displayName || "Context") + ".Provider";
            case Wi:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Gi:
                return t = e.displayName || null, t !== null ? t : Gl(e.type) || "Memo";
            case It:
                t = e._payload, e = e._init;
                try {
                    return Gl(e(t));
                } catch  {}
        }
        return null;
    }
    function zd(e) {
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
                return Gl(t);
            case 8:
                return t === Bi ? "StrictMode" : "Mode";
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
    function Qt(e) {
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
    function Sa(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Rd(e) {
        var t = Sa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Wr(e) {
        e._valueTracker || (e._valueTracker = Rd(e));
    }
    function Ca(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Sa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function ko(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function Hl(e, t) {
        var n = t.checked;
        return re({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Us(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = Qt(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Ea(e, t) {
        t = t.checked, t != null && $i(e, "checked", t, !1);
    }
    function bl(e, t) {
        Ea(e, t);
        var n = Qt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? Ql(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ql(e, t.type, Qt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Vs(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function Ql(e, t, n) {
        (t !== "number" || ko(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var lr = Array.isArray;
    function Mn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + Qt(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function Kl(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
        return re({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function $s(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(E(92));
                if (lr(n)) {
                    if (1 < n.length) throw Error(E(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: Qt(n)
        };
    }
    function _a(e, t) {
        var n = Qt(t.value), r = Qt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Bs(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Pa(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Yl(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Pa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Gr, Na = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Gr = Gr || document.createElement("div"), Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gr.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function yr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var ur = {
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
    }, Td = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(ur).forEach(function(e) {
        Td.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), ur[t] = ur[e];
        });
    });
    function za(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ur.hasOwnProperty(e) && ur[e] ? ("" + t).trim() : t + "px";
    }
    function Ra(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = za(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Md = re({
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
    function Xl(e, t) {
        if (t) {
            if (Md[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(E(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(E(62));
        }
    }
    function Zl(e, t) {
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
    var Jl = null;
    function Hi(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var ql = null, In = null, Ln = null;
    function Ws(e) {
        if (e = Ar(e)) {
            if (typeof ql != "function") throw Error(E(280));
            var t = e.stateNode;
            t && (t = qo(t), ql(e.stateNode, e.type, t));
        }
    }
    function Ta(e) {
        In ? Ln ? Ln.push(e) : Ln = [
            e
        ] : In = e;
    }
    function Ma() {
        if (In) {
            var e = In, t = Ln;
            if (Ln = In = null, Ws(e), t) for(e = 0; e < t.length; e++)Ws(t[e]);
        }
    }
    function Ia(e, t) {
        return e(t);
    }
    function La() {}
    var hl = !1;
    function ja(e, t, n) {
        if (hl) return e(t, n);
        hl = !0;
        try {
            return Ia(e, t, n);
        } finally{
            hl = !1, (In !== null || Ln !== null) && (La(), Ma());
        }
    }
    function wr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = qo(n);
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
        if (n && typeof n != "function") throw Error(E(231, t, typeof n));
        return n;
    }
    var ei = !1;
    if (Et) try {
        var Xn = {};
        Object.defineProperty(Xn, "passive", {
            get: function() {
                ei = !0;
            }
        }), window.addEventListener("test", Xn, Xn), window.removeEventListener("test", Xn, Xn);
    } catch  {
        ei = !1;
    }
    function Id(e, t, n, r, o, l, i, s, u) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a);
        } catch (p) {
            this.onError(p);
        }
    }
    var ar = !1, So = null, Co = !1, ti = null, Ld = {
        onError: function(e) {
            ar = !0, So = e;
        }
    };
    function jd(e, t, n, r, o, l, i, s, u) {
        ar = !1, So = null, Id.apply(Ld, arguments);
    }
    function Od(e, t, n, r, o, l, i, s, u) {
        if (jd.apply(this, arguments), ar) {
            if (ar) {
                var a = So;
                ar = !1, So = null;
            } else throw Error(E(198));
            Co || (Co = !0, ti = a);
        }
    }
    function gn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Oa(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function Gs(e) {
        if (gn(e) !== e) throw Error(E(188));
    }
    function Dd(e) {
        var t = e.alternate;
        if (!t) {
            if (t = gn(e), t === null) throw Error(E(188));
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
                    if (l === n) return Gs(o), e;
                    if (l === r) return Gs(o), t;
                    l = l.sibling;
                }
                throw Error(E(188));
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
                    if (!i) throw Error(E(189));
                }
            }
            if (n.alternate !== r) throw Error(E(190));
        }
        if (n.tag !== 3) throw Error(E(188));
        return n.stateNode.current === n ? e : t;
    }
    function Da(e) {
        return e = Dd(e), e !== null ? Fa(e) : null;
    }
    function Fa(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Fa(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Aa = be.unstable_scheduleCallback, Hs = be.unstable_cancelCallback, Fd = be.unstable_shouldYield, Ad = be.unstable_requestPaint, ce = be.unstable_now, Ud = be.unstable_getCurrentPriorityLevel, bi = be.unstable_ImmediatePriority, Ua = be.unstable_UserBlockingPriority, Eo = be.unstable_NormalPriority, Vd = be.unstable_LowPriority, Va = be.unstable_IdlePriority, Yo = null, ht = null;
    function $d(e) {
        if (ht && typeof ht.onCommitFiberRoot == "function") try {
            ht.onCommitFiberRoot(Yo, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var ut = Math.clz32 ? Math.clz32 : Gd, Bd = Math.log, Wd = Math.LN2;
    function Gd(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Bd(e) / Wd | 0) | 0;
    }
    var Hr = 64, br = 4194304;
    function ir(e) {
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
    function _o(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = ir(s) : (l &= i, l !== 0 && (r = ir(l)));
        } else i = n & ~o, i !== 0 ? r = ir(i) : l !== 0 && (r = ir(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - ut(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function Hd(e, t) {
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
    function bd(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - ut(l), s = 1 << i, u = o[i];
            u === -1 ? (!(s & n) || s & r) && (o[i] = Hd(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function ni(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function $a() {
        var e = Hr;
        return Hr <<= 1, !(Hr & 4194240) && (Hr = 64), e;
    }
    function gl(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function Dr(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n;
    }
    function Qd(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - ut(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function Qi(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - ut(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var H = 0;
    function Ba(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var Wa, Ki, Ga, Ha, ba, ri = !1, Qr = [], Ut = null, Vt = null, $t = null, xr = new Map, kr = new Map, Ot = [], Kd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function bs(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Ut = null;
                break;
            case "dragenter":
            case "dragleave":
                Vt = null;
                break;
            case "mouseover":
            case "mouseout":
                $t = null;
                break;
            case "pointerover":
            case "pointerout":
                xr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                kr.delete(t.pointerId);
        }
    }
    function Zn(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = Ar(t), t !== null && Ki(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Yd(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Ut = Zn(Ut, e, t, n, r, o), !0;
            case "dragenter":
                return Vt = Zn(Vt, e, t, n, r, o), !0;
            case "mouseover":
                return $t = Zn($t, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return xr.set(l, Zn(xr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, kr.set(l, Zn(kr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function Qa(e) {
        var t = rn(e.target);
        if (t !== null) {
            var n = gn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Oa(n), t !== null) {
                        e.blockedOn = t, ba(e.priority, function() {
                            Ga(n);
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
    function ao(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                Jl = r, n.target.dispatchEvent(r), Jl = null;
            } else return t = Ar(n), t !== null && Ki(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function Qs(e, t, n) {
        ao(e) && n.delete(t);
    }
    function Xd() {
        ri = !1, Ut !== null && ao(Ut) && (Ut = null), Vt !== null && ao(Vt) && (Vt = null), $t !== null && ao($t) && ($t = null), xr.forEach(Qs), kr.forEach(Qs);
    }
    function Jn(e, t) {
        e.blockedOn === t && (e.blockedOn = null, ri || (ri = !0, be.unstable_scheduleCallback(be.unstable_NormalPriority, Xd)));
    }
    function Sr(e) {
        function t(o) {
            return Jn(o, e);
        }
        if (0 < Qr.length) {
            Jn(Qr[0], e);
            for(var n = 1; n < Qr.length; n++){
                var r = Qr[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Ut !== null && Jn(Ut, e), Vt !== null && Jn(Vt, e), $t !== null && Jn($t, e), xr.forEach(t), kr.forEach(t), n = 0; n < Ot.length; n++)r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Ot.length && (n = Ot[0], n.blockedOn === null);)Qa(n), n.blockedOn === null && Ot.shift();
    }
    var jn = zt.ReactCurrentBatchConfig, Po = !0;
    function Zd(e, t, n, r) {
        var o = H, l = jn.transition;
        jn.transition = null;
        try {
            H = 1, Yi(e, t, n, r);
        } finally{
            H = o, jn.transition = l;
        }
    }
    function Jd(e, t, n, r) {
        var o = H, l = jn.transition;
        jn.transition = null;
        try {
            H = 4, Yi(e, t, n, r);
        } finally{
            H = o, jn.transition = l;
        }
    }
    function Yi(e, t, n, r) {
        if (Po) {
            var o = oi(e, t, n, r);
            if (o === null) Pl(e, t, r, No, n), bs(e, r);
            else if (Yd(o, e, t, n, r)) r.stopPropagation();
            else if (bs(e, r), t & 4 && -1 < Kd.indexOf(e)) {
                for(; o !== null;){
                    var l = Ar(o);
                    if (l !== null && Wa(l), l = oi(e, t, n, r), l === null && Pl(e, t, r, No, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Pl(e, t, r, null, n);
        }
    }
    var No = null;
    function oi(e, t, n, r) {
        if (No = null, e = Hi(r), e = rn(e), e !== null) if (t = gn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Oa(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return No = e, null;
    }
    function Ka(e) {
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
                switch(Ud()){
                    case bi:
                        return 1;
                    case Ua:
                        return 4;
                    case Eo:
                    case Vd:
                        return 16;
                    case Va:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Ft = null, Xi = null, co = null;
    function Ya() {
        if (co) return co;
        var e, t = Xi, n = t.length, r, o = "value" in Ft ? Ft.value : Ft.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return co = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function fo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Kr() {
        return !0;
    }
    function Ks() {
        return !1;
    }
    function Ke(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Kr : Ks, this.isPropagationStopped = Ks, this;
        }
        return re(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Kr);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Kr);
            },
            persist: function() {},
            isPersistent: Kr
        }), t;
    }
    var bn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Zi = Ke(bn), Fr = re({}, bn, {
        view: 0,
        detail: 0
    }), qd = Ke(Fr), vl, yl, qn, Xo = re({}, Fr, {
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
        getModifierState: Ji,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (vl = e.screenX - qn.screenX, yl = e.screenY - qn.screenY) : yl = vl = 0, qn = e), vl);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : yl;
        }
    }), Ys = Ke(Xo), ep = re({}, Xo, {
        dataTransfer: 0
    }), tp = Ke(ep), np = re({}, Fr, {
        relatedTarget: 0
    }), wl = Ke(np), rp = re({}, bn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), op = Ke(rp), lp = re({}, bn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), ip = Ke(lp), sp = re({}, bn, {
        data: 0
    }), Xs = Ke(sp), up = {
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
    }, ap = {
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
    }, cp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function fp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = cp[e]) ? !!t[e] : !1;
    }
    function Ji() {
        return fp;
    }
    var dp = re({}, Fr, {
        key: function(e) {
            if (e.key) {
                var t = up[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = fo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ap[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ji,
        charCode: function(e) {
            return e.type === "keypress" ? fo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), pp = Ke(dp), mp = re({}, Xo, {
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
    }), Zs = Ke(mp), hp = re({}, Fr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ji
    }), gp = Ke(hp), vp = re({}, bn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), yp = Ke(vp), wp = re({}, Xo, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), xp = Ke(wp), kp = [
        9,
        13,
        27,
        32
    ], qi = Et && "CompositionEvent" in window, cr = null;
    Et && "documentMode" in document && (cr = document.documentMode);
    var Sp = Et && "TextEvent" in window && !cr, Xa = Et && (!qi || cr && 8 < cr && 11 >= cr), Js = " ", qs = !1;
    function Za(e, t) {
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
    function Ja(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var kn = !1;
    function Cp(e, t) {
        switch(e){
            case "compositionend":
                return Ja(t);
            case "keypress":
                return t.which !== 32 ? null : (qs = !0, Js);
            case "textInput":
                return e = t.data, e === Js && qs ? null : e;
            default:
                return null;
        }
    }
    function Ep(e, t) {
        if (kn) return e === "compositionend" || !qi && Za(e, t) ? (e = Ya(), co = Xi = Ft = null, kn = !1, e) : null;
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
                return Xa && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var _p = {
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
    function eu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!_p[e.type] : t === "textarea";
    }
    function qa(e, t, n, r) {
        Ta(r), t = zo(t, "onChange"), 0 < t.length && (n = new Zi("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var fr = null, Cr = null;
    function Pp(e) {
        cc(e, 0);
    }
    function Zo(e) {
        var t = En(e);
        if (Ca(t)) return e;
    }
    function Np(e, t) {
        if (e === "change") return t;
    }
    var ec = !1;
    if (Et) {
        var xl;
        if (Et) {
            var kl = "oninput" in document;
            if (!kl) {
                var tu = document.createElement("div");
                tu.setAttribute("oninput", "return;"), kl = typeof tu.oninput == "function";
            }
            xl = kl;
        } else xl = !1;
        ec = xl && (!document.documentMode || 9 < document.documentMode);
    }
    function nu() {
        fr && (fr.detachEvent("onpropertychange", tc), Cr = fr = null);
    }
    function tc(e) {
        if (e.propertyName === "value" && Zo(Cr)) {
            var t = [];
            qa(t, Cr, e, Hi(e)), ja(Pp, t);
        }
    }
    function zp(e, t, n) {
        e === "focusin" ? (nu(), fr = t, Cr = n, fr.attachEvent("onpropertychange", tc)) : e === "focusout" && nu();
    }
    function Rp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zo(Cr);
    }
    function Tp(e, t) {
        if (e === "click") return Zo(t);
    }
    function Mp(e, t) {
        if (e === "input" || e === "change") return Zo(t);
    }
    function Ip(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ct = typeof Object.is == "function" ? Object.is : Ip;
    function Er(e, t) {
        if (ct(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Vl.call(t, o) || !ct(e[o], t[o])) return !1;
        }
        return !0;
    }
    function ru(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function ou(e, t) {
        var n = ru(e);
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
            n = ru(n);
        }
    }
    function nc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function rc() {
        for(var e = window, t = ko(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = ko(e.document);
        }
        return t;
    }
    function es(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Lp(e) {
        var t = rc(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && nc(n.ownerDocument.documentElement, n)) {
            if (r !== null && es(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ou(n, l);
                    var i = ou(n, r);
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
    var jp = Et && "documentMode" in document && 11 >= document.documentMode, Sn = null, li = null, dr = null, ii = !1;
    function lu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ii || Sn == null || Sn !== ko(r) || (r = Sn, "selectionStart" in r && es(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), dr && Er(dr, r) || (dr = r, r = zo(li, "onSelect"), 0 < r.length && (t = new Zi("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Sn)));
    }
    function Yr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Cn = {
        animationend: Yr("Animation", "AnimationEnd"),
        animationiteration: Yr("Animation", "AnimationIteration"),
        animationstart: Yr("Animation", "AnimationStart"),
        transitionend: Yr("Transition", "TransitionEnd")
    }, Sl = {}, oc = {};
    Et && (oc = document.createElement("div").style, "AnimationEvent" in window || (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation), "TransitionEvent" in window || delete Cn.transitionend.transition);
    function Jo(e) {
        if (Sl[e]) return Sl[e];
        if (!Cn[e]) return e;
        var t = Cn[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in oc) return Sl[e] = t[n];
        return e;
    }
    var lc = Jo("animationend"), ic = Jo("animationiteration"), sc = Jo("animationstart"), uc = Jo("transitionend"), ac = new Map, iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Yt(e, t) {
        ac.set(e, t), hn(t, [
            e
        ]);
    }
    for(var Cl = 0; Cl < iu.length; Cl++){
        var El = iu[Cl], Op = El.toLowerCase(), Dp = El[0].toUpperCase() + El.slice(1);
        Yt(Op, "on" + Dp);
    }
    Yt(lc, "onAnimationEnd");
    Yt(ic, "onAnimationIteration");
    Yt(sc, "onAnimationStart");
    Yt("dblclick", "onDoubleClick");
    Yt("focusin", "onFocus");
    Yt("focusout", "onBlur");
    Yt(uc, "onTransitionEnd");
    Fn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    Fn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    Fn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    Fn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    hn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    hn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    hn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    hn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    hn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    hn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var sr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Fp = new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));
    function su(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, Od(r, t, void 0, e), e.currentTarget = null;
    }
    function cc(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], u = s.instance, a = s.currentTarget;
                    if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    su(o, s, a), l = u;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    su(o, s, a), l = u;
                }
            }
        }
        if (Co) throw e = ti, Co = !1, ti = null, e;
    }
    function Z(e, t) {
        var n = t[fi];
        n === void 0 && (n = t[fi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (fc(t, e, 2, !1), n.add(r));
    }
    function _l(e, t, n) {
        var r = 0;
        t && (r |= 4), fc(n, e, r, t);
    }
    var Xr = "_reactListening" + Math.random().toString(36).slice(2);
    function _r(e) {
        if (!e[Xr]) {
            e[Xr] = !0, ya.forEach(function(n) {
                n !== "selectionchange" && (Fp.has(n) || _l(n, !1, e), _l(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Xr] || (t[Xr] = !0, _l("selectionchange", !1, t));
        }
    }
    function fc(e, t, n, r) {
        switch(Ka(t)){
            case 1:
                var o = Zd;
                break;
            case 4:
                o = Jd;
                break;
            default:
                o = Yi;
        }
        n = o.bind(null, t, n, e), o = void 0, !ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function Pl(e, t, n, r, o) {
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
                    if (i = rn(s), i === null) return;
                    if (u = i.tag, u === 5 || u === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        ja(function() {
            var a = l, p = Hi(n), m = [];
            e: {
                var h = ac.get(e);
                if (h !== void 0) {
                    var w = Zi, k = e;
                    switch(e){
                        case "keypress":
                            if (fo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            w = pp;
                            break;
                        case "focusin":
                            k = "focus", w = wl;
                            break;
                        case "focusout":
                            k = "blur", w = wl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            w = wl;
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
                            w = Ys;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            w = tp;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            w = gp;
                            break;
                        case lc:
                        case ic:
                        case sc:
                            w = op;
                            break;
                        case uc:
                            w = yp;
                            break;
                        case "scroll":
                            w = qd;
                            break;
                        case "wheel":
                            w = xp;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            w = ip;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            w = Zs;
                    }
                    var x = (t & 4) !== 0, y = !x && e === "scroll", f = x ? h !== null ? h + "Capture" : null : h;
                    x = [];
                    for(var c = a, d; c !== null;){
                        d = c;
                        var v = d.stateNode;
                        if (d.tag === 5 && v !== null && (d = v, f !== null && (v = wr(c, f), v != null && x.push(Pr(c, v, d)))), y) break;
                        c = c.return;
                    }
                    0 < x.length && (h = new w(h, k, null, n, p), m.push({
                        event: h,
                        listeners: x
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (h = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", h && n !== Jl && (k = n.relatedTarget || n.fromElement) && (rn(k) || k[_t])) break e;
                    if ((w || h) && (h = p.window === p ? p : (h = p.ownerDocument) ? h.defaultView || h.parentWindow : window, w ? (k = n.relatedTarget || n.toElement, w = a, k = k ? rn(k) : null, k !== null && (y = gn(k), k !== y || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null, k = a), w !== k)) {
                        if (x = Ys, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Zs, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), y = w == null ? h : En(w), d = k == null ? h : En(k), h = new x(v, c + "leave", w, n, p), h.target = y, h.relatedTarget = d, v = null, rn(p) === a && (x = new x(f, c + "enter", k, n, p), x.target = d, x.relatedTarget = y, v = x), y = v, w && k) t: {
                            for(x = w, f = k, c = 0, d = x; d; d = yn(d))c++;
                            for(d = 0, v = f; v; v = yn(v))d++;
                            for(; 0 < c - d;)x = yn(x), c--;
                            for(; 0 < d - c;)f = yn(f), d--;
                            for(; c--;){
                                if (x === f || f !== null && x === f.alternate) break t;
                                x = yn(x), f = yn(f);
                            }
                            x = null;
                        }
                        else x = null;
                        w !== null && uu(m, h, w, x, !1), k !== null && y !== null && uu(m, y, k, x, !0);
                    }
                }
                e: {
                    if (h = a ? En(a) : window, w = h.nodeName && h.nodeName.toLowerCase(), w === "select" || w === "input" && h.type === "file") var N = Np;
                    else if (eu(h)) if (ec) N = Mp;
                    else {
                        N = Rp;
                        var z = zp;
                    }
                    else (w = h.nodeName) && w.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = Tp);
                    if (N && (N = N(e, a))) {
                        qa(m, N, n, p);
                        break e;
                    }
                    z && z(e, h, a), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Ql(h, "number", h.value);
                }
                switch(z = a ? En(a) : window, e){
                    case "focusin":
                        (eu(z) || z.contentEditable === "true") && (Sn = z, li = a, dr = null);
                        break;
                    case "focusout":
                        dr = li = Sn = null;
                        break;
                    case "mousedown":
                        ii = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        ii = !1, lu(m, n, p);
                        break;
                    case "selectionchange":
                        if (jp) break;
                    case "keydown":
                    case "keyup":
                        lu(m, n, p);
                }
                var P;
                if (qi) e: {
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
                else kn ? Za(e, n) && (g = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
                g && (Xa && n.locale !== "ko" && (kn || g !== "onCompositionStart" ? g === "onCompositionEnd" && kn && (P = Ya()) : (Ft = p, Xi = "value" in Ft ? Ft.value : Ft.textContent, kn = !0)), z = zo(a, g), 0 < z.length && (g = new Xs(g, e, null, n, p), m.push({
                    event: g,
                    listeners: z
                }), P ? g.data = P : (P = Ja(n), P !== null && (g.data = P)))), (P = Sp ? Cp(e, n) : Ep(e, n)) && (a = zo(a, "onBeforeInput"), 0 < a.length && (p = new Xs("onBeforeInput", "beforeinput", null, n, p), m.push({
                    event: p,
                    listeners: a
                }), p.data = P));
            }
            cc(m, t);
        });
    }
    function Pr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function zo(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = wr(e, n), l != null && r.unshift(Pr(e, l, o)), l = wr(e, t), l != null && r.push(Pr(e, l, o))), e = e.return;
        }
        return r;
    }
    function yn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function uu(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, u = s.alternate, a = s.stateNode;
            if (u !== null && u === r) break;
            s.tag === 5 && a !== null && (s = a, o ? (u = wr(n, l), u != null && i.unshift(Pr(n, u, s))) : o || (u = wr(n, l), u != null && i.push(Pr(n, u, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var Ap = /\r\n?/g, Up = /\u0000|\uFFFD/g;
    function au(e) {
        return (typeof e == "string" ? e : "" + e).replace(Ap, `
`).replace(Up, "");
    }
    function Zr(e, t, n) {
        if (t = au(t), au(e) !== t && n) throw Error(E(425));
    }
    function Ro() {}
    var si = null, ui = null;
    function ai(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ci = typeof setTimeout == "function" ? setTimeout : void 0, Vp = typeof clearTimeout == "function" ? clearTimeout : void 0, cu = typeof Promise == "function" ? Promise : void 0, $p = typeof queueMicrotask == "function" ? queueMicrotask : typeof cu < "u" ? function(e) {
        return cu.resolve(null).then(e).catch(Bp);
    } : ci;
    function Bp(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function Nl(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Sr(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        Sr(t);
    }
    function Bt(e) {
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
    function fu(e) {
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
    var Qn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Qn, Nr = "__reactProps$" + Qn, _t = "__reactContainer$" + Qn, fi = "__reactEvents$" + Qn, Wp = "__reactListeners$" + Qn, Gp = "__reactHandles$" + Qn;
    function rn(e) {
        var t = e[mt];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[_t] || n[mt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = fu(e); e !== null;){
                    if (n = e[mt]) return n;
                    e = fu(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function Ar(e) {
        return e = e[mt] || e[_t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function En(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(E(33));
    }
    function qo(e) {
        return e[Nr] || null;
    }
    var di = [], _n = -1;
    function Xt(e) {
        return {
            current: e
        };
    }
    function J(e) {
        0 > _n || (e.current = di[_n], di[_n] = null, _n--);
    }
    function Y(e, t) {
        _n++, di[_n] = e.current, e.current = t;
    }
    var Kt = {}, Re = Xt(Kt), Ae = Xt(!1), cn = Kt;
    function An(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Kt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Ue(e) {
        return e = e.childContextTypes, e != null;
    }
    function To() {
        J(Ae), J(Re);
    }
    function du(e, t, n) {
        if (Re.current !== Kt) throw Error(E(168));
        Y(Re, t), Y(Ae, n);
    }
    function dc(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(E(108, zd(e) || "Unknown", o));
        return re({}, n, r);
    }
    function Mo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kt, cn = Re.current, Y(Re, e), Y(Ae, Ae.current), !0;
    }
    function pu(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(E(169));
        n ? (e = dc(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, J(Ae), J(Re), Y(Re, e)) : J(Ae), Y(Ae, n);
    }
    var xt = null, el = !1, zl = !1;
    function pc(e) {
        xt === null ? xt = [
            e
        ] : xt.push(e);
    }
    function Hp(e) {
        el = !0, pc(e);
    }
    function Zt() {
        if (!zl && xt !== null) {
            zl = !0;
            var e = 0, t = H;
            try {
                var n = xt;
                for(H = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                xt = null, el = !1;
            } catch (o) {
                throw xt !== null && (xt = xt.slice(e + 1)), Aa(bi, Zt), o;
            } finally{
                H = t, zl = !1;
            }
        }
        return null;
    }
    var Pn = [], Nn = 0, Io = null, Lo = 0, Je = [], qe = 0, fn = null, kt = 1, St = "";
    function tn(e, t) {
        Pn[Nn++] = Lo, Pn[Nn++] = Io, Io = e, Lo = t;
    }
    function mc(e, t, n) {
        Je[qe++] = kt, Je[qe++] = St, Je[qe++] = fn, fn = e;
        var r = kt;
        e = St;
        var o = 32 - ut(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - ut(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, kt = 1 << 32 - ut(t) + o | n << o | r, St = l + e;
        } else kt = 1 << l | n << o | r, St = e;
    }
    function ts(e) {
        e.return !== null && (tn(e, 1), mc(e, 1, 0));
    }
    function ns(e) {
        for(; e === Io;)Io = Pn[--Nn], Pn[Nn] = null, Lo = Pn[--Nn], Pn[Nn] = null;
        for(; e === fn;)fn = Je[--qe], Je[qe] = null, St = Je[--qe], Je[qe] = null, kt = Je[--qe], Je[qe] = null;
    }
    var He = null, Ge = null, q = !1, st = null;
    function hc(e, t) {
        var n = et(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function mu(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, He = e, Ge = Bt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, He = e, Ge = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? {
                    id: kt,
                    overflow: St
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, He = e, Ge = null, !0) : !1;
            default:
                return !1;
        }
    }
    function pi(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function mi(e) {
        if (q) {
            var t = Ge;
            if (t) {
                var n = t;
                if (!mu(e, t)) {
                    if (pi(e)) throw Error(E(418));
                    t = Bt(n.nextSibling);
                    var r = He;
                    t && mu(e, t) ? hc(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, He = e);
                }
            } else {
                if (pi(e)) throw Error(E(418));
                e.flags = e.flags & -4097 | 2, q = !1, He = e;
            }
        }
    }
    function hu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        He = e;
    }
    function Jr(e) {
        if (e !== He) return !1;
        if (!q) return hu(e), q = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ai(e.type, e.memoizedProps)), t && (t = Ge)) {
            if (pi(e)) throw gc(), Error(E(418));
            for(; t;)hc(e, t), t = Bt(t.nextSibling);
        }
        if (hu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Ge = Bt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                Ge = null;
            }
        } else Ge = He ? Bt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function gc() {
        for(var e = Ge; e;)e = Bt(e.nextSibling);
    }
    function Un() {
        Ge = He = null, q = !1;
    }
    function rs(e) {
        st === null ? st = [
            e
        ] : st.push(e);
    }
    var bp = zt.ReactCurrentBatchConfig;
    function er(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(E(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(E(147, e));
                var o = r, l = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                    var s = o.refs;
                    i === null ? delete s[l] : s[l] = i;
                }, t._stringRef = l, t);
            }
            if (typeof e != "string") throw Error(E(284));
            if (!n._owner) throw Error(E(290, e));
        }
        return e;
    }
    function qr(e, t) {
        throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function gu(e) {
        var t = e._init;
        return t(e._payload);
    }
    function vc(e) {
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
            return f = bt(f, c), f.index = 0, f.sibling = null, f;
        }
        function l(f, c, d) {
            return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
        }
        function i(f) {
            return e && f.alternate === null && (f.flags |= 2), f;
        }
        function s(f, c, d, v) {
            return c === null || c.tag !== 6 ? (c = Ol(d, f.mode, v), c.return = f, c) : (c = o(c, d), c.return = f, c);
        }
        function u(f, c, d, v) {
            var N = d.type;
            return N === xn ? p(f, c, d.props.children, v, d.key) : c !== null && (c.elementType === N || typeof N == "object" && N !== null && N.$$typeof === It && gu(N) === c.type) ? (v = o(c, d.props), v.ref = er(f, c, d), v.return = f, v) : (v = wo(d.type, d.key, d.props, null, f.mode, v), v.ref = er(f, c, d), v.return = f, v);
        }
        function a(f, c, d, v) {
            return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = Dl(d, f.mode, v), c.return = f, c) : (c = o(c, d.children || []), c.return = f, c);
        }
        function p(f, c, d, v, N) {
            return c === null || c.tag !== 7 ? (c = un(d, f.mode, v, N), c.return = f, c) : (c = o(c, d), c.return = f, c);
        }
        function m(f, c, d) {
            if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ol("" + c, f.mode, d), c.return = f, c;
            if (typeof c == "object" && c !== null) {
                switch(c.$$typeof){
                    case Br:
                        return d = wo(c.type, c.key, c.props, null, f.mode, d), d.ref = er(f, null, c), d.return = f, d;
                    case wn:
                        return c = Dl(c, f.mode, d), c.return = f, c;
                    case It:
                        var v = c._init;
                        return m(f, v(c._payload), d);
                }
                if (lr(c) || Yn(c)) return c = un(c, f.mode, d, null), c.return = f, c;
                qr(f, c);
            }
            return null;
        }
        function h(f, c, d, v) {
            var N = c !== null ? c.key : null;
            if (typeof d == "string" && d !== "" || typeof d == "number") return N !== null ? null : s(f, c, "" + d, v);
            if (typeof d == "object" && d !== null) {
                switch(d.$$typeof){
                    case Br:
                        return d.key === N ? u(f, c, d, v) : null;
                    case wn:
                        return d.key === N ? a(f, c, d, v) : null;
                    case It:
                        return N = d._init, h(f, c, N(d._payload), v);
                }
                if (lr(d) || Yn(d)) return N !== null ? null : p(f, c, d, v, null);
                qr(f, d);
            }
            return null;
        }
        function w(f, c, d, v, N) {
            if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, s(c, f, "" + v, N);
            if (typeof v == "object" && v !== null) {
                switch(v.$$typeof){
                    case Br:
                        return f = f.get(v.key === null ? d : v.key) || null, u(c, f, v, N);
                    case wn:
                        return f = f.get(v.key === null ? d : v.key) || null, a(c, f, v, N);
                    case It:
                        var z = v._init;
                        return w(f, c, d, z(v._payload), N);
                }
                if (lr(v) || Yn(v)) return f = f.get(d) || null, p(c, f, v, N, null);
                qr(c, v);
            }
            return null;
        }
        function k(f, c, d, v) {
            for(var N = null, z = null, P = c, g = c = 0, U = null; P !== null && g < d.length; g++){
                P.index > g ? (U = P, P = null) : U = P.sibling;
                var F = h(f, P, d[g], v);
                if (F === null) {
                    P === null && (P = U);
                    break;
                }
                e && P && F.alternate === null && t(f, P), c = l(F, c, g), z === null ? N = F : z.sibling = F, z = F, P = U;
            }
            if (g === d.length) return n(f, P), q && tn(f, g), N;
            if (P === null) {
                for(; g < d.length; g++)P = m(f, d[g], v), P !== null && (c = l(P, c, g), z === null ? N = P : z.sibling = P, z = P);
                return q && tn(f, g), N;
            }
            for(P = r(f, P); g < d.length; g++)U = w(P, f, g, d[g], v), U !== null && (e && U.alternate !== null && P.delete(U.key === null ? g : U.key), c = l(U, c, g), z === null ? N = U : z.sibling = U, z = U);
            return e && P.forEach(function(se) {
                return t(f, se);
            }), q && tn(f, g), N;
        }
        function x(f, c, d, v) {
            var N = Yn(d);
            if (typeof N != "function") throw Error(E(150));
            if (d = N.call(d), d == null) throw Error(E(151));
            for(var z = N = null, P = c, g = c = 0, U = null, F = d.next(); P !== null && !F.done; g++, F = d.next()){
                P.index > g ? (U = P, P = null) : U = P.sibling;
                var se = h(f, P, F.value, v);
                if (se === null) {
                    P === null && (P = U);
                    break;
                }
                e && P && se.alternate === null && t(f, P), c = l(se, c, g), z === null ? N = se : z.sibling = se, z = se, P = U;
            }
            if (F.done) return n(f, P), q && tn(f, g), N;
            if (P === null) {
                for(; !F.done; g++, F = d.next())F = m(f, F.value, v), F !== null && (c = l(F, c, g), z === null ? N = F : z.sibling = F, z = F);
                return q && tn(f, g), N;
            }
            for(P = r(f, P); !F.done; g++, F = d.next())F = w(P, f, g, F.value, v), F !== null && (e && F.alternate !== null && P.delete(F.key === null ? g : F.key), c = l(F, c, g), z === null ? N = F : z.sibling = F, z = F);
            return e && P.forEach(function(ge) {
                return t(f, ge);
            }), q && tn(f, g), N;
        }
        function y(f, c, d, v) {
            if (typeof d == "object" && d !== null && d.type === xn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
                switch(d.$$typeof){
                    case Br:
                        e: {
                            for(var N = d.key, z = c; z !== null;){
                                if (z.key === N) {
                                    if (N = d.type, N === xn) {
                                        if (z.tag === 7) {
                                            n(f, z.sibling), c = o(z, d.props.children), c.return = f, f = c;
                                            break e;
                                        }
                                    } else if (z.elementType === N || typeof N == "object" && N !== null && N.$$typeof === It && gu(N) === z.type) {
                                        n(f, z.sibling), c = o(z, d.props), c.ref = er(f, z, d), c.return = f, f = c;
                                        break e;
                                    }
                                    n(f, z);
                                    break;
                                } else t(f, z);
                                z = z.sibling;
                            }
                            d.type === xn ? (c = un(d.props.children, f.mode, v, d.key), c.return = f, f = c) : (v = wo(d.type, d.key, d.props, null, f.mode, v), v.ref = er(f, c, d), v.return = f, f = v);
                        }
                        return i(f);
                    case wn:
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
                            c = Dl(d, f.mode, v), c.return = f, f = c;
                        }
                        return i(f);
                    case It:
                        return z = d._init, y(f, c, z(d._payload), v);
                }
                if (lr(d)) return k(f, c, d, v);
                if (Yn(d)) return x(f, c, d, v);
                qr(f, d);
            }
            return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, d), c.return = f, f = c) : (n(f, c), c = Ol(d, f.mode, v), c.return = f, f = c), i(f)) : n(f, c);
        }
        return y;
    }
    var Vn = vc(!0), yc = vc(!1), jo = Xt(null), Oo = null, zn = null, os = null;
    function ls() {
        os = zn = Oo = null;
    }
    function is(e) {
        var t = jo.current;
        J(jo), e._currentValue = t;
    }
    function hi(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function On(e, t) {
        Oo = e, os = zn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
    }
    function nt(e) {
        var t = e._currentValue;
        if (os !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, zn === null) {
            if (Oo === null) throw Error(E(308));
            zn = e, Oo.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else zn = zn.next = e;
        return t;
    }
    var on = null;
    function ss(e) {
        on === null ? on = [
            e
        ] : on.push(e);
    }
    function wc(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, ss(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Pt(e, r);
    }
    function Pt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Lt = !1;
    function us(e) {
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
    function xc(e, t) {
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
    function Wt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, G & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Pt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, ss(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Pt(e, n);
    }
    function po(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Qi(e, n);
        }
    }
    function vu(e, t) {
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
    function Do(e, t, n, r) {
        var o = e.updateQueue;
        Lt = !1;
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
                var h = s.lane, w = s.eventTime;
                if ((r & h) === h) {
                    p !== null && (p = p.next = {
                        eventTime: w,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var k = e, x = s;
                        switch(h = t, w = n, x.tag){
                            case 1:
                                if (k = x.payload, typeof k == "function") {
                                    m = k.call(w, m, h);
                                    break e;
                                }
                                m = k;
                                break e;
                            case 3:
                                k.flags = k.flags & -65537 | 128;
                            case 0:
                                if (k = x.payload, h = typeof k == "function" ? k.call(w, m, h) : k, h == null) break e;
                                m = re({}, m, h);
                                break e;
                            case 2:
                                Lt = !0;
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
                }, p === null ? (a = p = w, u = m) : p = p.next = w, i |= h;
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
            pn |= i, e.lanes = i, e.memoizedState = m;
        }
    }
    function yu(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(E(191, o));
                o.call(r);
            }
        }
    }
    var Ur = {}, gt = Xt(Ur), zr = Xt(Ur), Rr = Xt(Ur);
    function ln(e) {
        if (e === Ur) throw Error(E(174));
        return e;
    }
    function as(e, t) {
        switch(Y(Rr, t), Y(zr, e), Y(gt, Ur), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Yl(t, e);
        }
        J(gt), Y(gt, t);
    }
    function $n() {
        J(gt), J(zr), J(Rr);
    }
    function kc(e) {
        ln(Rr.current);
        var t = ln(gt.current), n = Yl(t, e.type);
        t !== n && (Y(zr, e), Y(gt, n));
    }
    function cs(e) {
        zr.current === e && (J(gt), J(zr));
    }
    var te = Xt(0);
    function Fo(e) {
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
    var Rl = [];
    function fs() {
        for(var e = 0; e < Rl.length; e++)Rl[e]._workInProgressVersionPrimary = null;
        Rl.length = 0;
    }
    var mo = zt.ReactCurrentDispatcher, Tl = zt.ReactCurrentBatchConfig, dn = 0, ne = null, me = null, we = null, Ao = !1, pr = !1, Tr = 0, Qp = 0;
    function Pe() {
        throw Error(E(321));
    }
    function ds(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!ct(e[n], t[n])) return !1;
        return !0;
    }
    function ps(e, t, n, r, o, l) {
        if (dn = l, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, mo.current = e === null || e.memoizedState === null ? Zp : Jp, e = n(r, o), pr) {
            l = 0;
            do {
                if (pr = !1, Tr = 0, 25 <= l) throw Error(E(301));
                l += 1, we = me = null, t.updateQueue = null, mo.current = qp, e = n(r, o);
            }while (pr);
        }
        if (mo.current = Uo, t = me !== null && me.next !== null, dn = 0, we = me = ne = null, Ao = !1, t) throw Error(E(300));
        return e;
    }
    function ms() {
        var e = Tr !== 0;
        return Tr = 0, e;
    }
    function pt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return we === null ? ne.memoizedState = we = e : we = we.next = e, we;
    }
    function rt() {
        if (me === null) {
            var e = ne.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = me.next;
        var t = we === null ? ne.memoizedState : we.next;
        if (t !== null) we = t, me = e;
        else {
            if (e === null) throw Error(E(310));
            me = e, e = {
                memoizedState: me.memoizedState,
                baseState: me.baseState,
                baseQueue: me.baseQueue,
                queue: me.queue,
                next: null
            }, we === null ? ne.memoizedState = we = e : we = we.next = e;
        }
        return we;
    }
    function Mr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Ml(e) {
        var t = rt(), n = t.queue;
        if (n === null) throw Error(E(311));
        n.lastRenderedReducer = e;
        var r = me, o = r.baseQueue, l = n.pending;
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
                if ((dn & p) === p) u !== null && (u = u.next = {
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
                    u === null ? (s = u = m, i = r) : u = u.next = m, ne.lanes |= p, pn |= p;
                }
                a = a.next;
            }while (a !== null && a !== l);
            u === null ? i = r : u.next = s, ct(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ne.lanes |= l, pn |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Il(e) {
        var t = rt(), n = t.queue;
        if (n === null) throw Error(E(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            ct(l, t.memoizedState) || (Fe = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Sc() {}
    function Cc(e, t) {
        var n = ne, r = rt(), o = t(), l = !ct(r.memoizedState, o);
        if (l && (r.memoizedState = o, Fe = !0), r = r.queue, hs(Pc.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || we !== null && we.memoizedState.tag & 1) {
            if (n.flags |= 2048, Ir(9, _c.bind(null, n, r, o, t), void 0, null), xe === null) throw Error(E(349));
            dn & 30 || Ec(n, t, o);
        }
        return o;
    }
    function Ec(e, t, n) {
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
    function _c(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Nc(t) && zc(e);
    }
    function Pc(e, t, n) {
        return n(function() {
            Nc(t) && zc(e);
        });
    }
    function Nc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !ct(e, n);
        } catch  {
            return !0;
        }
    }
    function zc(e) {
        var t = Pt(e, 1);
        t !== null && at(t, e, 1, -1);
    }
    function wu(e) {
        var t = pt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Mr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = Xp.bind(null, ne, e), [
            t.memoizedState,
            e
        ];
    }
    function Ir(e, t, n, r) {
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
    function Rc() {
        return rt().memoizedState;
    }
    function ho(e, t, n, r) {
        var o = pt();
        ne.flags |= e, o.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function tl(e, t, n, r) {
        var o = rt();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (me !== null) {
            var i = me.memoizedState;
            if (l = i.destroy, r !== null && ds(r, i.deps)) {
                o.memoizedState = Ir(t, n, l, r);
                return;
            }
        }
        ne.flags |= e, o.memoizedState = Ir(1 | t, n, l, r);
    }
    function xu(e, t) {
        return ho(8390656, 8, e, t);
    }
    function hs(e, t) {
        return tl(2048, 8, e, t);
    }
    function Tc(e, t) {
        return tl(4, 2, e, t);
    }
    function Mc(e, t) {
        return tl(4, 4, e, t);
    }
    function Ic(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Lc(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, tl(4, 4, Ic.bind(null, t, e), n);
    }
    function gs() {}
    function jc(e, t) {
        var n = rt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ds(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Oc(e, t) {
        var n = rt();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && ds(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Dc(e, t, n) {
        return dn & 21 ? (ct(n, t) || (n = $a(), ne.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
    }
    function Kp(e, t) {
        var n = H;
        H = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Tl.transition;
        Tl.transition = {};
        try {
            e(!1), t();
        } finally{
            H = n, Tl.transition = r;
        }
    }
    function Fc() {
        return rt().memoizedState;
    }
    function Yp(e, t, n) {
        var r = Ht(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ac(e)) Uc(t, n);
        else if (n = wc(e, t, n, r), n !== null) {
            var o = Me();
            at(n, e, r, o), Vc(n, t, r);
        }
    }
    function Xp(e, t, n) {
        var r = Ht(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ac(e)) Uc(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, ct(s, i)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o, ss(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = wc(e, t, o, r), n !== null && (o = Me(), at(n, e, r, o), Vc(n, t, r));
        }
    }
    function Ac(e) {
        var t = e.alternate;
        return e === ne || t !== null && t === ne;
    }
    function Uc(e, t) {
        pr = Ao = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Vc(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, Qi(e, n);
        }
    }
    var Uo = {
        readContext: nt,
        useCallback: Pe,
        useContext: Pe,
        useEffect: Pe,
        useImperativeHandle: Pe,
        useInsertionEffect: Pe,
        useLayoutEffect: Pe,
        useMemo: Pe,
        useReducer: Pe,
        useRef: Pe,
        useState: Pe,
        useDebugValue: Pe,
        useDeferredValue: Pe,
        useTransition: Pe,
        useMutableSource: Pe,
        useSyncExternalStore: Pe,
        useId: Pe,
        unstable_isNewReconciler: !1
    }, Zp = {
        readContext: nt,
        useCallback: function(e, t) {
            return pt().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: nt,
        useEffect: xu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, ho(4194308, 4, Ic.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return ho(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return ho(4, 2, e, t);
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
            }, r.queue = e, e = e.dispatch = Yp.bind(null, ne, e), [
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
        useState: wu,
        useDebugValue: gs,
        useDeferredValue: function(e) {
            return pt().memoizedState = e;
        },
        useTransition: function() {
            var e = wu(!1), t = e[0];
            return e = Kp.bind(null, e[1]), pt().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ne, o = pt();
            if (q) {
                if (n === void 0) throw Error(E(407));
                n = n();
            } else {
                if (n = t(), xe === null) throw Error(E(349));
                dn & 30 || Ec(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, xu(Pc.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, Ir(9, _c.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = pt(), t = xe.identifierPrefix;
            if (q) {
                var n = St, r = kt;
                n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = Qp++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, Jp = {
        readContext: nt,
        useCallback: jc,
        useContext: nt,
        useEffect: hs,
        useImperativeHandle: Lc,
        useInsertionEffect: Tc,
        useLayoutEffect: Mc,
        useMemo: Oc,
        useReducer: Ml,
        useRef: Rc,
        useState: function() {
            return Ml(Mr);
        },
        useDebugValue: gs,
        useDeferredValue: function(e) {
            var t = rt();
            return Dc(t, me.memoizedState, e);
        },
        useTransition: function() {
            var e = Ml(Mr)[0], t = rt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Sc,
        useSyncExternalStore: Cc,
        useId: Fc,
        unstable_isNewReconciler: !1
    }, qp = {
        readContext: nt,
        useCallback: jc,
        useContext: nt,
        useEffect: hs,
        useImperativeHandle: Lc,
        useInsertionEffect: Tc,
        useLayoutEffect: Mc,
        useMemo: Oc,
        useReducer: Il,
        useRef: Rc,
        useState: function() {
            return Il(Mr);
        },
        useDebugValue: gs,
        useDeferredValue: function(e) {
            var t = rt();
            return me === null ? t.memoizedState = e : Dc(t, me.memoizedState, e);
        },
        useTransition: function() {
            var e = Il(Mr)[0], t = rt().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Sc,
        useSyncExternalStore: Cc,
        useId: Fc,
        unstable_isNewReconciler: !1
    };
    function lt(e, t) {
        if (e && e.defaultProps) {
            t = re({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function gi(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var nl = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? gn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = Ht(e), l = Ct(r, o);
            l.payload = t, n != null && (l.callback = n), t = Wt(e, l, o), t !== null && (at(t, e, o, r), po(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Me(), o = Ht(e), l = Ct(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Wt(e, l, o), t !== null && (at(t, e, o, r), po(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Me(), r = Ht(e), o = Ct(n, r);
            o.tag = 2, t != null && (o.callback = t), t = Wt(e, o, r), t !== null && (at(t, e, r, n), po(t, e, r));
        }
    };
    function ku(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, r) || !Er(o, l) : !0;
    }
    function $c(e, t, n) {
        var r = !1, o = Kt, l = t.contextType;
        return typeof l == "object" && l !== null ? l = nt(l) : (o = Ue(t) ? cn : Re.current, r = t.contextTypes, l = (r = r != null) ? An(e, o) : Kt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function Su(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nl.enqueueReplaceState(t, t.state, null);
    }
    function vi(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, us(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = nt(l) : (l = Ue(t) ? cn : Re.current, o.context = An(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (gi(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && nl.enqueueReplaceState(o, o.state, null), Do(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Bn(e, t) {
        try {
            var n = "", r = t;
            do n += Nd(r), r = r.return;
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
    function Ll(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function yi(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var em = typeof WeakMap == "function" ? WeakMap : Map;
    function Bc(e, t, n) {
        n = Ct(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            $o || ($o = !0, zi = r), yi(e, t);
        }, n;
    }
    function Wc(e, t, n) {
        n = Ct(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                yi(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            yi(e, t), typeof r != "function" && (Gt === null ? Gt = new Set([
                this
            ]) : Gt.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function Cu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new em;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = mm.bind(null, e, t, n), t.then(e, e));
    }
    function Eu(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function _u(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ct(-1, 1), t.tag = 2, Wt(n, t, 1))), n.lanes |= 1), e);
    }
    var tm = zt.ReactCurrentOwner, Fe = !1;
    function Te(e, t, n, r) {
        t.child = e === null ? yc(t, null, n, r) : Vn(t, e.child, n, r);
    }
    function Pu(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return On(t, o), r = ps(e, t, n, r, l, o), n = ms(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nt(e, t, o)) : (q && n && ts(t), t.flags |= 1, Te(e, t, r, o), t.child);
    }
    function Nu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Es(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Gc(e, t, l, r, o)) : (e = wo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Er, n(i, r) && e.ref === t.ref) return Nt(e, t, o);
        }
        return t.flags |= 1, e = bt(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Gc(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Er(l, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
            else return t.lanes = e.lanes, Nt(e, t, o);
        }
        return wi(e, t, n, r, o);
    }
    function Hc(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Y(Tn, We), We |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Y(Tn, We), We |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, Y(Tn, We), We |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Y(Tn, We), We |= r;
        return Te(e, t, o, n), t.child;
    }
    function bc(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function wi(e, t, n, r, o) {
        var l = Ue(n) ? cn : Re.current;
        return l = An(t, l), On(t, o), n = ps(e, t, n, r, l, o), r = ms(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nt(e, t, o)) : (q && r && ts(t), t.flags |= 1, Te(e, t, n, o), t.child);
    }
    function zu(e, t, n, r, o) {
        if (Ue(n)) {
            var l = !0;
            Mo(t);
        } else l = !1;
        if (On(t, o), t.stateNode === null) go(e, t), $c(t, n, r), vi(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var u = i.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = nt(a) : (a = Ue(n) ? cn : Re.current, a = An(t, a));
            var p = n.getDerivedStateFromProps, m = typeof p == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && Su(t, i, r, a), Lt = !1;
            var h = t.memoizedState;
            i.state = h, Do(t, r, i, o), u = t.memoizedState, s !== r || h !== u || Ae.current || Lt ? (typeof p == "function" && (gi(t, n, p, r), u = t.memoizedState), (s = Lt || ku(t, n, s, r, h, u, a)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, xc(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : lt(t.type, s), i.props = a, m = t.pendingProps, h = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = nt(u) : (u = Ue(n) ? cn : Re.current, u = An(t, u));
            var w = n.getDerivedStateFromProps;
            (p = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== m || h !== u) && Su(t, i, r, u), Lt = !1, h = t.memoizedState, i.state = h, Do(t, r, i, o);
            var k = t.memoizedState;
            s !== m || h !== k || Ae.current || Lt ? (typeof w == "function" && (gi(t, n, w, r), k = t.memoizedState), (a = Lt || ku(t, n, a, r, h, k, u) || !1) ? (p || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, k, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, k, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), i.props = r, i.state = k, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return xi(e, t, n, r, l, o);
    }
    function xi(e, t, n, r, o, l) {
        bc(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && pu(t, n, !1), Nt(e, t, l);
        r = t.stateNode, tm.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = Vn(t, e.child, null, l), t.child = Vn(t, null, s, l)) : Te(e, t, s, l), t.memoizedState = r.state, o && pu(t, n, !0), t.child;
    }
    function Qc(e) {
        var t = e.stateNode;
        t.pendingContext ? du(e, t.pendingContext, t.pendingContext !== t.context) : t.context && du(e, t.context, !1), as(e, t.containerInfo);
    }
    function Ru(e, t, n, r, o) {
        return Un(), rs(o), t.flags |= 256, Te(e, t, n, r), t.child;
    }
    var ki = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Si(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function Kc(e, t, n) {
        var r = t.pendingProps, o = te.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Y(te, o & 1), e === null) return mi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = ll(i, r, 0, null), e = un(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Si(n), t.memoizedState = ki, e) : vs(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return nm(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var u = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = bt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = bt(s, l) : (l = un(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Si(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = ki, r;
        }
        return l = e.child, e = l.sibling, r = bt(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function vs(e, t) {
        return t = ll({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function eo(e, t, n, r) {
        return r !== null && rs(r), Vn(t, e.child, null, n), e = vs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function nm(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Ll(Error(E(422))), eo(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = ll({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = un(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Vn(t, e.child, null, i), t.child.memoizedState = Si(i), t.memoizedState = ki, l);
        if (!(t.mode & 1)) return eo(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(E(419)), r = Ll(l, r, void 0), eo(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Fe || s) {
            if (r = xe, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Pt(e, o), at(r, e, o, -1));
            }
            return Cs(), r = Ll(Error(E(421))), eo(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hm.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ge = Bt(o.nextSibling), He = t, q = !0, st = null, e !== null && (Je[qe++] = kt, Je[qe++] = St, Je[qe++] = fn, kt = e.id, St = e.overflow, fn = t), t = vs(t, r.children), t.flags |= 4096, t);
    }
    function Tu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), hi(e.return, t, n);
    }
    function jl(e, t, n, r, o) {
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
    function Yc(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (Te(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
                else if (e.tag === 19) Tu(e, n, t);
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
        if (Y(te, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Fo(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), jl(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Fo(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                jl(t, !0, n, null, l);
                break;
            case "together":
                jl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function go(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function Nt(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(E(153));
        if (t.child !== null) {
            for(e = t.child, n = bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = bt(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function rm(e, t, n) {
        switch(t.tag){
            case 3:
                Qc(t), Un();
                break;
            case 5:
                kc(t);
                break;
            case 1:
                Ue(t.type) && Mo(t);
                break;
            case 4:
                as(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                Y(jo, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Y(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Kc(e, t, n) : (Y(te, te.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
                Y(te, te.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return Yc(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Y(te, te.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Hc(e, t, n);
        }
        return Nt(e, t, n);
    }
    var Xc, Ci, Zc, Jc;
    Xc = function(e, t) {
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
    Ci = function() {};
    Zc = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, ln(gt.current);
            var l = null;
            switch(n){
                case "input":
                    o = Hl(e, o), r = Hl(e, r), l = [];
                    break;
                case "select":
                    o = re({}, o, {
                        value: void 0
                    }), r = re({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = Kl(e, o), r = Kl(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ro);
            }
            Xl(n, r);
            var i;
            n = null;
            for(a in o)if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
                var s = o[a];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (vr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
            for(a in r){
                var u = r[a];
                if (s = o?.[a], r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in u)u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
                } else n || (l || (l = []), l.push(a, n)), n = u;
                else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (vr.hasOwnProperty(a) ? (u != null && a === "onScroll" && Z("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
            }
            n && (l = l || []).push("style", n);
            var a = l;
            (t.updateQueue = a) && (t.flags |= 4);
        }
    };
    Jc = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function tr(e, t) {
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
    function Ne(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function om(e, t, n) {
        var r = t.pendingProps;
        switch(ns(t), t.tag){
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
                return Ne(t), null;
            case 1:
                return Ue(t.type) && To(), Ne(t), null;
            case 3:
                return r = t.stateNode, $n(), J(Ae), J(Re), fs(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Jr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (Mi(st), st = null))), Ci(e, t), Ne(t), null;
            case 5:
                cs(t);
                var o = ln(Rr.current);
                if (n = t.type, e !== null && t.stateNode != null) Zc(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(E(166));
                        return Ne(t), null;
                    }
                    if (e = ln(gt.current), Jr(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[mt] = t, r[Nr] = l, e = (t.mode & 1) !== 0, n){
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
                                for(o = 0; o < sr.length; o++)Z(sr[o], r);
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
                                Us(r, l), Z("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, Z("invalid", r);
                                break;
                            case "textarea":
                                $s(r, l), Z("invalid", r);
                        }
                        Xl(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && Zr(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && Zr(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : vr.hasOwnProperty(i) && s != null && i === "onScroll" && Z("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Wr(r), Vs(r, l, !0);
                                break;
                            case "textarea":
                                Wr(r), Bs(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = Ro);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Pa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[mt] = t, e[Nr] = r, Xc(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = Zl(n, r), n){
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
                                    for(o = 0; o < sr.length; o++)Z(sr[o], e);
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
                                    Us(e, r), o = Hl(e, r), Z("invalid", e);
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
                                    $s(e, r), o = Kl(e, r), Z("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            Xl(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                l === "style" ? Ra(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Na(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && yr(e, u) : typeof u == "number" && yr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (vr.hasOwnProperty(l) ? u != null && l === "onScroll" && Z("scroll", e) : u != null && $i(e, l, u, i));
                            }
                            switch(n){
                                case "input":
                                    Wr(e), Vs(e, r, !1);
                                    break;
                                case "textarea":
                                    Wr(e), Bs(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + Qt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? Mn(e, !!r.multiple, l, !1) : r.defaultValue != null && Mn(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = Ro);
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
                return Ne(t), null;
            case 6:
                if (e && t.stateNode != null) Jc(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
                    if (n = ln(Rr.current), ln(gt.current), Jr(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[mt] = t, (l = r.nodeValue !== n) && (e = He, e !== null)) switch(e.tag){
                            case 3:
                                Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Zr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[mt] = t, t.stateNode = r;
                }
                return Ne(t), null;
            case 13:
                if (J(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (q && Ge !== null && t.mode & 1 && !(t.flags & 128)) gc(), Un(), t.flags |= 98560, l = !1;
                    else if (l = Jr(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(E(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
                            l[mt] = t;
                        } else Un(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        Ne(t), l = !1;
                    } else st !== null && (Mi(st), st = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? he === 0 && (he = 3) : Cs())), t.updateQueue !== null && (t.flags |= 4), Ne(t), null);
            case 4:
                return $n(), Ci(e, t), e === null && _r(t.stateNode.containerInfo), Ne(t), null;
            case 10:
                return is(t.type._context), Ne(t), null;
            case 17:
                return Ue(t.type) && To(), Ne(t), null;
            case 19:
                if (J(te), l = t.memoizedState, l === null) return Ne(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) tr(l, !1);
                else {
                    if (he !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Fo(e), i !== null) {
                            for(t.flags |= 128, tr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return Y(te, te.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && ce() > Wn && (t.flags |= 128, r = !0, tr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Fo(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), tr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !q) return Ne(t), null;
                    } else 2 * ce() - l.renderingStartTime > Wn && n !== 1073741824 && (t.flags |= 128, r = !0, tr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ce(), t.sibling = null, n = te.current, Y(te, r ? n & 1 | 2 : n & 1), t) : (Ne(t), null);
            case 22:
            case 23:
                return Ss(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(E(156, t.tag));
    }
    function lm(e, t) {
        switch(ns(t), t.tag){
            case 1:
                return Ue(t.type) && To(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return $n(), J(Ae), J(Re), fs(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return cs(t), null;
            case 13:
                if (J(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(E(340));
                    Un();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return J(te), null;
            case 4:
                return $n(), null;
            case 10:
                return is(t.type._context), null;
            case 22:
            case 23:
                return Ss(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var to = !1, ze = !1, im = typeof WeakSet == "function" ? WeakSet : Set, L = null;
    function Rn(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            ie(e, t, r);
        }
        else n.current = null;
    }
    function Ei(e, t, n) {
        try {
            n();
        } catch (r) {
            ie(e, t, r);
        }
    }
    var Mu = !1;
    function sm(e, t) {
        if (si = Po, e = rc(), es(e)) {
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
                        for(var w; m !== n || o !== 0 && m.nodeType !== 3 || (s = i + o), m !== l || r !== 0 && m.nodeType !== 3 || (u = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (w = m.firstChild) !== null;)h = m, m = w;
                        for(;;){
                            if (m === e) break t;
                            if (h === n && ++a === o && (s = i), h === l && ++p === r && (u = i), (w = m.nextSibling) !== null) break;
                            m = h, h = m.parentNode;
                        }
                        m = w;
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
        for(ui = {
            focusedElem: e,
            selectionRange: n
        }, Po = !1, L = t; L !== null;)if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else for(; L !== null;){
            t = L;
            try {
                var k = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (k !== null) {
                            var x = k.memoizedProps, y = k.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : lt(t.type, x), y);
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
                        throw Error(E(163));
                }
            } catch (v) {
                ie(t, t.return, v);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, L = e;
                break;
            }
            L = t.return;
        }
        return k = Mu, Mu = !1, k;
    }
    function mr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && Ei(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function rl(e, t) {
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
    function _i(e) {
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
    function qc(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, qc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[mt], delete t[Nr], delete t[fi], delete t[Wp], delete t[Gp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function ef(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Iu(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || ef(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Pi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ro));
        else if (r !== 4 && (e = e.child, e !== null)) for(Pi(e, t, n), e = e.sibling; e !== null;)Pi(e, t, n), e = e.sibling;
    }
    function Ni(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(Ni(e, t, n), e = e.sibling; e !== null;)Ni(e, t, n), e = e.sibling;
    }
    var Se = null, it = !1;
    function Rt(e, t, n) {
        for(n = n.child; n !== null;)tf(e, t, n), n = n.sibling;
    }
    function tf(e, t, n) {
        if (ht && typeof ht.onCommitFiberUnmount == "function") try {
            ht.onCommitFiberUnmount(Yo, n);
        } catch  {}
        switch(n.tag){
            case 5:
                ze || Rn(n, t);
            case 6:
                var r = Se, o = it;
                Se = null, Rt(e, t, n), Se = r, it = o, Se !== null && (it ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
                break;
            case 18:
                Se !== null && (it ? (e = Se, n = n.stateNode, e.nodeType === 8 ? Nl(e.parentNode, n) : e.nodeType === 1 && Nl(e, n), Sr(e)) : Nl(Se, n.stateNode));
                break;
            case 4:
                r = Se, o = it, Se = n.stateNode.containerInfo, it = !0, Rt(e, t, n), Se = r, it = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Ei(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Rt(e, t, n);
                break;
            case 1:
                if (!ze && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    ie(n, t, s);
                }
                Rt(e, t, n);
                break;
            case 21:
                Rt(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, Rt(e, t, n), ze = r) : Rt(e, t, n);
                break;
            default:
                Rt(e, t, n);
        }
    }
    function Lu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new im), t.forEach(function(r) {
                var o = gm.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function ot(e, t) {
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
                if (Se === null) throw Error(E(160));
                tf(l, i, o), Se = null, it = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null;
            } catch (a) {
                ie(o, t, a);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)nf(t, e), t = t.sibling;
    }
    function nf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (ot(t, e), dt(e), r & 4) {
                    try {
                        mr(3, e, e.return), rl(3, e);
                    } catch (x) {
                        ie(e, e.return, x);
                    }
                    try {
                        mr(5, e, e.return);
                    } catch (x) {
                        ie(e, e.return, x);
                    }
                }
                break;
            case 1:
                ot(t, e), dt(e), r & 512 && n !== null && Rn(n, n.return);
                break;
            case 5:
                if (ot(t, e), dt(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        yr(o, "");
                    } catch (x) {
                        ie(e, e.return, x);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
                    if (e.updateQueue = null, u !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Ea(o, l), Zl(s, i);
                        var a = Zl(s, l);
                        for(i = 0; i < u.length; i += 2){
                            var p = u[i], m = u[i + 1];
                            p === "style" ? Ra(o, m) : p === "dangerouslySetInnerHTML" ? Na(o, m) : p === "children" ? yr(o, m) : $i(o, p, m, a);
                        }
                        switch(s){
                            case "input":
                                bl(o, l);
                                break;
                            case "textarea":
                                _a(o, l);
                                break;
                            case "select":
                                var h = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var w = l.value;
                                w != null ? Mn(o, !!l.multiple, w, !1) : h !== !!l.multiple && (l.defaultValue != null ? Mn(o, !!l.multiple, l.defaultValue, !0) : Mn(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[Nr] = l;
                    } catch (x) {
                        ie(e, e.return, x);
                    }
                }
                break;
            case 6:
                if (ot(t, e), dt(e), r & 4) {
                    if (e.stateNode === null) throw Error(E(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (x) {
                        ie(e, e.return, x);
                    }
                }
                break;
            case 3:
                if (ot(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Sr(t.containerInfo);
                } catch (x) {
                    ie(e, e.return, x);
                }
                break;
            case 4:
                ot(t, e), dt(e);
                break;
            case 13:
                ot(t, e), dt(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (xs = ce())), r & 4 && Lu(e);
                break;
            case 22:
                if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (a = ze) || p, ot(t, e), ze = a) : ot(t, e), dt(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !p && e.mode & 1) for(L = e, p = e.child; p !== null;){
                        for(m = L = p; L !== null;){
                            switch(h = L, w = h.child, h.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    mr(4, h, h.return);
                                    break;
                                case 1:
                                    Rn(h, h.return);
                                    var k = h.stateNode;
                                    if (typeof k.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                                        } catch (x) {
                                            ie(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    Rn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Ou(m);
                                        continue;
                                    }
                            }
                            w !== null ? (w.return = h, L = w) : Ou(m);
                        }
                        p = p.sibling;
                    }
                    e: for(p = null, m = e;;){
                        if (m.tag === 5) {
                            if (p === null) {
                                p = m;
                                try {
                                    o = m.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = m.stateNode, u = m.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = za("display", i));
                                } catch (x) {
                                    ie(e, e.return, x);
                                }
                            }
                        } else if (m.tag === 6) {
                            if (p === null) try {
                                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
                            } catch (x) {
                                ie(e, e.return, x);
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
                ot(t, e), dt(e), r & 4 && Lu(e);
                break;
            case 21:
                break;
            default:
                ot(t, e), dt(e);
        }
    }
    function dt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (ef(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(E(160));
                }
                switch(r.tag){
                    case 5:
                        var o = r.stateNode;
                        r.flags & 32 && (yr(o, ""), r.flags &= -33);
                        var l = Iu(e);
                        Ni(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = Iu(e);
                        Pi(e, s, i);
                        break;
                    default:
                        throw Error(E(161));
                }
            } catch (u) {
                ie(e, e.return, u);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function um(e, t, n) {
        L = e, rf(e);
    }
    function rf(e, t, n) {
        for(var r = (e.mode & 1) !== 0; L !== null;){
            var o = L, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || to;
                if (!i) {
                    var s = o.alternate, u = s !== null && s.memoizedState !== null || ze;
                    s = to;
                    var a = ze;
                    if (to = i, (ze = u) && !a) for(L = o; L !== null;)i = L, u = i.child, i.tag === 22 && i.memoizedState !== null ? Du(o) : u !== null ? (u.return = i, L = u) : Du(o);
                    for(; l !== null;)L = l, rf(l), l = l.sibling;
                    L = o, to = s, ze = a;
                }
                ju(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, L = l) : ju(e);
        }
    }
    function ju(e) {
        for(; L !== null;){
            var t = L;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            ze || rl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && yu(t, l, r);
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
                                yu(t, i, n);
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
                                        m !== null && Sr(m);
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
                            throw Error(E(163));
                    }
                    ze || t.flags & 512 && _i(t);
                } catch (h) {
                    ie(t, t.return, h);
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
    function Ou(e) {
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
    function Du(e) {
        for(; L !== null;){
            var t = L;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            rl(4, t);
                        } catch (u) {
                            ie(t, n, u);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (u) {
                                ie(t, o, u);
                            }
                        }
                        var l = t.return;
                        try {
                            _i(t);
                        } catch (u) {
                            ie(t, l, u);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            _i(t);
                        } catch (u) {
                            ie(t, i, u);
                        }
                }
            } catch (u) {
                ie(t, t.return, u);
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
    var am = Math.ceil, Vo = zt.ReactCurrentDispatcher, ys = zt.ReactCurrentOwner, tt = zt.ReactCurrentBatchConfig, G = 0, xe = null, de = null, Ce = 0, We = 0, Tn = Xt(0), he = 0, Lr = null, pn = 0, ol = 0, ws = 0, hr = null, De = null, xs = 0, Wn = 1 / 0, wt = null, $o = !1, zi = null, Gt = null, no = !1, At = null, Bo = 0, gr = 0, Ri = null, vo = -1, yo = 0;
    function Me() {
        return G & 6 ? ce() : vo !== -1 ? vo : vo = ce();
    }
    function Ht(e) {
        return e.mode & 1 ? G & 2 && Ce !== 0 ? Ce & -Ce : bp.transition !== null ? (yo === 0 && (yo = $a()), yo) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ka(e.type)), e) : 1;
    }
    function at(e, t, n, r) {
        if (50 < gr) throw gr = 0, Ri = null, Error(E(185));
        Dr(e, n, r), (!(G & 2) || e !== xe) && (e === xe && (!(G & 2) && (ol |= n), he === 4 && Dt(e, Ce)), Ve(e, r), n === 1 && G === 0 && !(t.mode & 1) && (Wn = ce() + 500, el && Zt()));
    }
    function Ve(e, t) {
        var n = e.callbackNode;
        bd(e, t);
        var r = _o(e, e === xe ? Ce : 0);
        if (r === 0) n !== null && Hs(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && Hs(n), t === 1) e.tag === 0 ? Hp(Fu.bind(null, e)) : pc(Fu.bind(null, e)), $p(function() {
                !(G & 6) && Zt();
            }), n = null;
            else {
                switch(Ba(r)){
                    case 1:
                        n = bi;
                        break;
                    case 4:
                        n = Ua;
                        break;
                    case 16:
                        n = Eo;
                        break;
                    case 536870912:
                        n = Va;
                        break;
                    default:
                        n = Eo;
                }
                n = df(n, of.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function of(e, t) {
        if (vo = -1, yo = 0, G & 6) throw Error(E(327));
        var n = e.callbackNode;
        if (Dn() && e.callbackNode !== n) return null;
        var r = _o(e, e === xe ? Ce : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Wo(e, r);
        else {
            t = r;
            var o = G;
            G |= 2;
            var l = sf();
            (xe !== e || Ce !== t) && (wt = null, Wn = ce() + 500, sn(e, t));
            do try {
                dm();
                break;
            } catch (s) {
                lf(e, s);
            }
            while (!0);
            ls(), Vo.current = l, G = o, de !== null ? t = 0 : (xe = null, Ce = 0, t = he);
        }
        if (t !== 0) {
            if (t === 2 && (o = ni(e), o !== 0 && (r = o, t = Ti(e, o))), t === 1) throw n = Lr, sn(e, 0), Dt(e, r), Ve(e, ce()), n;
            if (t === 6) Dt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !cm(o) && (t = Wo(e, r), t === 2 && (l = ni(e), l !== 0 && (r = l, t = Ti(e, l))), t === 1)) throw n = Lr, sn(e, 0), Dt(e, r), Ve(e, ce()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(E(345));
                    case 2:
                        nn(e, De, wt);
                        break;
                    case 3:
                        if (Dt(e, r), (r & 130023424) === r && (t = xs + 500 - ce(), 10 < t)) {
                            if (_o(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Me(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = ci(nn.bind(null, e, De, wt), t);
                            break;
                        }
                        nn(e, De, wt);
                        break;
                    case 4:
                        if (Dt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - ut(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = ce() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * am(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = ci(nn.bind(null, e, De, wt), r);
                            break;
                        }
                        nn(e, De, wt);
                        break;
                    case 5:
                        nn(e, De, wt);
                        break;
                    default:
                        throw Error(E(329));
                }
            }
        }
        return Ve(e, ce()), e.callbackNode === n ? of.bind(null, e) : null;
    }
    function Ti(e, t) {
        var n = hr;
        return e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256), e = Wo(e, t), e !== 2 && (t = De, De = n, t !== null && Mi(t)), e;
    }
    function Mi(e) {
        De === null ? De = e : De.push.apply(De, e);
    }
    function cm(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!ct(l(), o)) return !1;
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
        for(t &= ~ws, t &= ~ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - ut(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Fu(e) {
        if (G & 6) throw Error(E(327));
        Dn();
        var t = _o(e, 0);
        if (!(t & 1)) return Ve(e, ce()), null;
        var n = Wo(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ni(e);
            r !== 0 && (t = r, n = Ti(e, r));
        }
        if (n === 1) throw n = Lr, sn(e, 0), Dt(e, t), Ve(e, ce()), n;
        if (n === 6) throw Error(E(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, nn(e, De, wt), Ve(e, ce()), null;
    }
    function ks(e, t) {
        var n = G;
        G |= 1;
        try {
            return e(t);
        } finally{
            G = n, G === 0 && (Wn = ce() + 500, el && Zt());
        }
    }
    function mn(e) {
        At !== null && At.tag === 0 && !(G & 6) && Dn();
        var t = G;
        G |= 1;
        var n = tt.transition, r = H;
        try {
            if (tt.transition = null, H = 1, e) return e();
        } finally{
            H = r, tt.transition = n, G = t, !(G & 6) && Zt();
        }
    }
    function Ss() {
        We = Tn.current, J(Tn);
    }
    function sn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, Vp(n)), de !== null) for(n = de.return; n !== null;){
            var r = n;
            switch(ns(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && To();
                    break;
                case 3:
                    $n(), J(Ae), J(Re), fs();
                    break;
                case 5:
                    cs(r);
                    break;
                case 4:
                    $n();
                    break;
                case 13:
                    J(te);
                    break;
                case 19:
                    J(te);
                    break;
                case 10:
                    is(r.type._context);
                    break;
                case 22:
                case 23:
                    Ss();
            }
            n = n.return;
        }
        if (xe = e, de = e = bt(e.current, null), Ce = We = t, he = 0, Lr = null, ws = ol = pn = 0, De = hr = null, on !== null) {
            for(t = 0; t < on.length; t++)if (n = on[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            on = null;
        }
        return e;
    }
    function lf(e, t) {
        do {
            var n = de;
            try {
                if (ls(), mo.current = Uo, Ao) {
                    for(var r = ne.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Ao = !1;
                }
                if (dn = 0, we = me = ne = null, pr = !1, Tr = 0, ys.current = null, n === null || n.return === null) {
                    he = 1, Lr = t, de = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, u = t;
                    if (t = Ce, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                        var a = u, p = s, m = p.tag;
                        if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                            var h = p.alternate;
                            h ? (p.updateQueue = h.updateQueue, p.memoizedState = h.memoizedState, p.lanes = h.lanes) : (p.updateQueue = null, p.memoizedState = null);
                        }
                        var w = Eu(i);
                        if (w !== null) {
                            w.flags &= -257, _u(w, i, s, l, t), w.mode & 1 && Cu(l, a, t), t = w, u = a;
                            var k = t.updateQueue;
                            if (k === null) {
                                var x = new Set;
                                x.add(u), t.updateQueue = x;
                            } else k.add(u);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                Cu(l, a, t), Cs();
                                break e;
                            }
                            u = Error(E(426));
                        }
                    } else if (q && s.mode & 1) {
                        var y = Eu(i);
                        if (y !== null) {
                            !(y.flags & 65536) && (y.flags |= 256), _u(y, i, s, l, t), rs(Bn(u, s));
                            break e;
                        }
                    }
                    l = u = Bn(u, s), he !== 4 && (he = 2), hr === null ? hr = [
                        l
                    ] : hr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var f = Bc(l, u, t);
                                vu(l, f);
                                break e;
                            case 1:
                                s = u;
                                var c = l.type, d = l.stateNode;
                                if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Gt === null || !Gt.has(d)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var v = Wc(l, s, t);
                                    vu(l, v);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                af(n);
            } catch (N) {
                t = N, de === n && n !== null && (de = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function sf() {
        var e = Vo.current;
        return Vo.current = Uo, e === null ? Uo : e;
    }
    function Cs() {
        (he === 0 || he === 3 || he === 2) && (he = 4), xe === null || !(pn & 268435455) && !(ol & 268435455) || Dt(xe, Ce);
    }
    function Wo(e, t) {
        var n = G;
        G |= 2;
        var r = sf();
        (xe !== e || Ce !== t) && (wt = null, sn(e, t));
        do try {
            fm();
            break;
        } catch (o) {
            lf(e, o);
        }
        while (!0);
        if (ls(), G = n, Vo.current = r, de !== null) throw Error(E(261));
        return xe = null, Ce = 0, he;
    }
    function fm() {
        for(; de !== null;)uf(de);
    }
    function dm() {
        for(; de !== null && !Fd();)uf(de);
    }
    function uf(e) {
        var t = ff(e.alternate, e, We);
        e.memoizedProps = e.pendingProps, t === null ? af(e) : de = t, ys.current = null;
    }
    function af(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = lm(n, t), n !== null) {
                    n.flags &= 32767, de = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    he = 6, de = null;
                    return;
                }
            } else if (n = om(n, t, We), n !== null) {
                de = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                de = t;
                return;
            }
            de = t = e;
        }while (t !== null);
        he === 0 && (he = 5);
    }
    function nn(e, t, n) {
        var r = H, o = tt.transition;
        try {
            tt.transition = null, H = 1, pm(e, t, n, r);
        } finally{
            tt.transition = o, H = r;
        }
        return null;
    }
    function pm(e, t, n, r) {
        do Dn();
        while (At !== null);
        if (G & 6) throw Error(E(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (Qd(e, l), e === xe && (de = xe = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || no || (no = !0, df(Eo, function() {
            return Dn(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = tt.transition, tt.transition = null;
            var i = H;
            H = 1;
            var s = G;
            G |= 4, ys.current = null, sm(e, n), nf(n, e), Lp(ui), Po = !!si, ui = si = null, e.current = n, um(n), Ad(), G = s, H = i, tt.transition = l;
        } else e.current = n;
        if (no && (no = !1, At = e, Bo = o), l = e.pendingLanes, l === 0 && (Gt = null), $d(n.stateNode), Ve(e, ce()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if ($o) throw $o = !1, e = zi, zi = null, e;
        return Bo & 1 && e.tag !== 0 && Dn(), l = e.pendingLanes, l & 1 ? e === Ri ? gr++ : (gr = 0, Ri = e) : gr = 0, Zt(), null;
    }
    function Dn() {
        if (At !== null) {
            var e = Ba(Bo), t = tt.transition, n = H;
            try {
                if (tt.transition = null, H = 16 > e ? 16 : e, At === null) var r = !1;
                else {
                    if (e = At, At = null, Bo = 0, G & 6) throw Error(E(331));
                    var o = G;
                    for(G |= 4, L = e.current; L !== null;){
                        var l = L, i = l.child;
                        if (L.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var u = 0; u < s.length; u++){
                                    var a = s[u];
                                    for(L = a; L !== null;){
                                        var p = L;
                                        switch(p.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                mr(8, p, l);
                                        }
                                        var m = p.child;
                                        if (m !== null) m.return = p, L = m;
                                        else for(; L !== null;){
                                            p = L;
                                            var h = p.sibling, w = p.return;
                                            if (qc(p), p === a) {
                                                L = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                h.return = w, L = h;
                                                break;
                                            }
                                            L = w;
                                        }
                                    }
                                }
                                var k = l.alternate;
                                if (k !== null) {
                                    var x = k.child;
                                    if (x !== null) {
                                        k.child = null;
                                        do {
                                            var y = x.sibling;
                                            x.sibling = null, x = y;
                                        }while (x !== null);
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
                                    mr(9, l, l.return);
                            }
                            var f = l.sibling;
                            if (f !== null) {
                                f.return = l.return, L = f;
                                break e;
                            }
                            L = l.return;
                        }
                    }
                    var c = e.current;
                    for(L = c; L !== null;){
                        i = L;
                        var d = i.child;
                        if (i.subtreeFlags & 2064 && d !== null) d.return = i, L = d;
                        else e: for(i = c; L !== null;){
                            if (s = L, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        rl(9, s);
                                }
                            } catch (N) {
                                ie(s, s.return, N);
                            }
                            if (s === i) {
                                L = null;
                                break e;
                            }
                            var v = s.sibling;
                            if (v !== null) {
                                v.return = s.return, L = v;
                                break e;
                            }
                            L = s.return;
                        }
                    }
                    if (G = o, Zt(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
                        ht.onPostCommitFiberRoot(Yo, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                H = n, tt.transition = t;
            }
        }
        return !1;
    }
    function Au(e, t, n) {
        t = Bn(n, t), t = Bc(e, t, 1), e = Wt(e, t, 1), t = Me(), e !== null && (Dr(e, 1, t), Ve(e, t));
    }
    function ie(e, t, n) {
        if (e.tag === 3) Au(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Au(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gt === null || !Gt.has(r))) {
                    e = Bn(n, e), e = Wc(t, e, 1), t = Wt(t, e, 1), e = Me(), t !== null && (Dr(t, 1, e), Ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function mm(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Ce & n) === n && (he === 4 || he === 3 && (Ce & 130023424) === Ce && 500 > ce() - xs ? sn(e, 0) : ws |= n), Ve(e, t);
    }
    function cf(e, t) {
        t === 0 && (e.mode & 1 ? (t = br, br <<= 1, !(br & 130023424) && (br = 4194304)) : t = 1);
        var n = Me();
        e = Pt(e, t), e !== null && (Dr(e, t, n), Ve(e, n));
    }
    function hm(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), cf(e, n);
    }
    function gm(e, t) {
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
                throw Error(E(314));
        }
        r !== null && r.delete(t), cf(e, n);
    }
    var ff;
    ff = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Ae.current) Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, rm(e, t, n);
            Fe = !!(e.flags & 131072);
        }
        else Fe = !1, q && t.flags & 1048576 && mc(t, Lo, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                go(e, t), e = t.pendingProps;
                var o = An(t, Re.current);
                On(t, n), o = ps(null, t, r, e, o, n);
                var l = ms();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ue(r) ? (l = !0, Mo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, us(t), o.updater = nl, t.stateNode = o, o._reactInternals = t, vi(t, r, e, n), t = xi(null, t, r, !0, l, n)) : (t.tag = 0, q && l && ts(t), Te(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(go(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = ym(r), e = lt(r, e), o){
                        case 0:
                            t = wi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = zu(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Pu(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Nu(null, t, r, lt(r.type, e), n);
                            break e;
                    }
                    throw Error(E(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), wi(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), zu(e, t, r, o, n);
            case 3:
                e: {
                    if (Qc(t), e === null) throw Error(E(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, xc(e, t), Do(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = Bn(Error(E(423)), t), t = Ru(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = Bn(Error(E(424)), t), t = Ru(e, t, r, n, o);
                        break e;
                    } else for(Ge = Bt(t.stateNode.containerInfo.firstChild), He = t, q = !0, st = null, n = yc(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Un(), r === o) {
                            t = Nt(e, t, n);
                            break e;
                        }
                        Te(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return kc(t), e === null && mi(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, ai(r, o) ? i = null : l !== null && ai(r, l) && (t.flags |= 32), bc(e, t), Te(e, t, i, n), t.child;
            case 6:
                return e === null && mi(t), null;
            case 13:
                return Kc(e, t, n);
            case 4:
                return as(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vn(t, null, r, n) : Te(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Pu(e, t, r, o, n);
            case 7:
                return Te(e, t, t.pendingProps, n), t.child;
            case 8:
                return Te(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return Te(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, Y(jo, r._currentValue), r._currentValue = i, l !== null) if (ct(l.value, i)) {
                        if (l.children === o.children && !Ae.current) {
                            t = Nt(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var u = s.firstContext; u !== null;){
                                if (u.context === r) {
                                    if (l.tag === 1) {
                                        u = Ct(-1, n & -n), u.tag = 2;
                                        var a = l.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var p = a.pending;
                                            p === null ? u.next = u : (u.next = p.next, p.next = u), a.pending = u;
                                        }
                                    }
                                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), hi(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                u = u.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(E(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), hi(i, n, t), i = l.sibling;
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
                    Te(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, On(t, n), o = nt(o), r = r(o), t.flags |= 1, Te(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = lt(r, t.pendingProps), o = lt(r.type, o), Nu(e, t, r, o, n);
            case 15:
                return Gc(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), go(e, t), t.tag = 1, Ue(r) ? (e = !0, Mo(t)) : e = !1, On(t, n), $c(t, r, o), vi(t, r, o, n), xi(null, t, r, !0, e, n);
            case 19:
                return Yc(e, t, n);
            case 22:
                return Hc(e, t, n);
        }
        throw Error(E(156, t.tag));
    };
    function df(e, t) {
        return Aa(e, t);
    }
    function vm(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function et(e, t, n, r) {
        return new vm(e, t, n, r);
    }
    function Es(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function ym(e) {
        if (typeof e == "function") return Es(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Wi) return 11;
            if (e === Gi) return 14;
        }
        return 2;
    }
    function bt(e, t) {
        var n = e.alternate;
        return n === null ? (n = et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function wo(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") Es(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case xn:
                return un(n.children, o, l, t);
            case Bi:
                i = 8, o |= 8;
                break;
            case $l:
                return e = et(12, n, t, o | 2), e.elementType = $l, e.lanes = l, e;
            case Bl:
                return e = et(13, n, t, o), e.elementType = Bl, e.lanes = l, e;
            case Wl:
                return e = et(19, n, t, o), e.elementType = Wl, e.lanes = l, e;
            case ka:
                return ll(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case wa:
                        i = 10;
                        break e;
                    case xa:
                        i = 9;
                        break e;
                    case Wi:
                        i = 11;
                        break e;
                    case Gi:
                        i = 14;
                        break e;
                    case It:
                        i = 16, r = null;
                        break e;
                }
                throw Error(E(130, e == null ? e : typeof e, ""));
        }
        return t = et(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function un(e, t, n, r) {
        return e = et(7, e, r, t), e.lanes = n, e;
    }
    function ll(e, t, n, r) {
        return e = et(22, e, r, t), e.elementType = ka, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Ol(e, t, n) {
        return e = et(6, e, null, t), e.lanes = n, e;
    }
    function Dl(e, t, n) {
        return t = et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function wm(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gl(0), this.expirationTimes = gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function _s(e, t, n, r, o, l, i, s, u) {
        return e = new wm(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = et(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, us(l), e;
    }
    function xm(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: wn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function pf(e) {
        if (!e) return Kt;
        e = e._reactInternals;
        e: {
            if (gn(e) !== e || e.tag !== 1) throw Error(E(170));
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
            throw Error(E(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Ue(n)) return dc(e, n, t);
        }
        return t;
    }
    function mf(e, t, n, r, o, l, i, s, u) {
        return e = _s(n, r, !0, e, o, l, i, s, u), e.context = pf(null), n = e.current, r = Me(), o = Ht(n), l = Ct(r, o), l.callback = t ?? null, Wt(n, l, o), e.current.lanes = o, Dr(e, o, r), Ve(e, r), e;
    }
    function il(e, t, n, r) {
        var o = t.current, l = Me(), i = Ht(o);
        return n = pf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ct(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wt(o, t, i), e !== null && (at(e, o, i, l), po(e, o, i)), i;
    }
    function Go(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Uu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Ps(e, t) {
        Uu(e, t), (e = e.alternate) && Uu(e, t);
    }
    function km() {
        return null;
    }
    var hf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function Ns(e) {
        this._internalRoot = e;
    }
    sl.prototype.render = Ns.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(E(409));
        il(e, t, null, null);
    };
    sl.prototype.unmount = Ns.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            mn(function() {
                il(null, e, null, null);
            }), t[_t] = null;
        }
    };
    function sl(e) {
        this._internalRoot = e;
    }
    sl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Ha();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
            Ot.splice(n, 0, e), n === 0 && Qa(e);
        }
    };
    function zs(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ul(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Vu() {}
    function Sm(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var a = Go(i);
                    l.call(a);
                };
            }
            var i = mf(t, r, e, 0, null, !1, !1, "", Vu);
            return e._reactRootContainer = i, e[_t] = i.current, _r(e.nodeType === 8 ? e.parentNode : e), mn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var a = Go(u);
                s.call(a);
            };
        }
        var u = _s(e, 0, !1, null, null, !1, !1, "", Vu);
        return e._reactRootContainer = u, e[_t] = u.current, _r(e.nodeType === 8 ? e.parentNode : e), mn(function() {
            il(t, u, n, r);
        }), u;
    }
    function al(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var u = Go(i);
                    s.call(u);
                };
            }
            il(t, i, e, o);
        } else i = Sm(n, t, e, o, r);
        return Go(i);
    }
    Wa = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ir(t.pendingLanes);
                    n !== 0 && (Qi(t, n | 1), Ve(t, ce()), !(G & 6) && (Wn = ce() + 500, Zt()));
                }
                break;
            case 13:
                mn(function() {
                    var r = Pt(e, 1);
                    if (r !== null) {
                        var o = Me();
                        at(r, e, 1, o);
                    }
                }), Ps(e, 1);
        }
    };
    Ki = function(e) {
        if (e.tag === 13) {
            var t = Pt(e, 134217728);
            if (t !== null) {
                var n = Me();
                at(t, e, 134217728, n);
            }
            Ps(e, 134217728);
        }
    };
    Ga = function(e) {
        if (e.tag === 13) {
            var t = Ht(e), n = Pt(e, t);
            if (n !== null) {
                var r = Me();
                at(n, e, t, r);
            }
            Ps(e, t);
        }
    };
    Ha = function() {
        return H;
    };
    ba = function(e, t) {
        var n = H;
        try {
            return H = e, t();
        } finally{
            H = n;
        }
    };
    ql = function(e, t, n) {
        switch(t){
            case "input":
                if (bl(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = qo(r);
                            if (!o) throw Error(E(90));
                            Ca(r), bl(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                _a(e, n);
                break;
            case "select":
                t = n.value, t != null && Mn(e, !!n.multiple, t, !1);
        }
    };
    Ia = ks;
    La = mn;
    var Cm = {
        usingClientEntryPoint: !1,
        Events: [
            Ar,
            En,
            qo,
            Ta,
            Ma,
            ks
        ]
    }, nr = {
        findFiberByHostInstance: rn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Em = {
        bundleType: nr.bundleType,
        version: nr.version,
        rendererPackageName: nr.rendererPackageName,
        rendererConfig: nr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: zt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Da(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: nr.findFiberByHostInstance || km,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ro.isDisabled && ro.supportsFiber) try {
            Yo = ro.inject(Em), ht = ro;
        } catch  {}
    }
    Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cm;
    Qe.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!zs(t)) throw Error(E(200));
        return xm(e, t, null, n);
    };
    Qe.createRoot = function(e, t) {
        if (!zs(e)) throw Error(E(299));
        var n = !1, r = "", o = hf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = _s(e, 1, !1, null, null, n, !1, r, o), e[_t] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new Ns(t);
    };
    Qe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
        return e = Da(t), e = e === null ? null : e.stateNode, e;
    };
    Qe.flushSync = function(e) {
        return mn(e);
    };
    Qe.hydrate = function(e, t, n) {
        if (!ul(t)) throw Error(E(200));
        return al(null, e, t, !0, n);
    };
    Qe.hydrateRoot = function(e, t, n) {
        if (!zs(e)) throw Error(E(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = hf;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = mf(t, null, e, 1, n ?? null, o, !1, l, i), e[_t] = t.current, _r(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new sl(t);
    };
    Qe.render = function(e, t, n) {
        if (!ul(t)) throw Error(E(200));
        return al(null, e, t, !1, n);
    };
    Qe.unmountComponentAtNode = function(e) {
        if (!ul(e)) throw Error(E(40));
        return e._reactRootContainer ? (mn(function() {
            al(null, null, e, !1, function() {
                e._reactRootContainer = null, e[_t] = null;
            });
        }), !0) : !1;
    };
    Qe.unstable_batchedUpdates = ks;
    Qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ul(n)) throw Error(E(200));
        if (e == null || e._reactInternals === void 0) throw Error(E(38));
        return al(e, t, n, !1, r);
    };
    Qe.version = "18.3.1-next-f1338f8080-20240426";
    function gf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf);
        } catch (e) {
            console.error(e);
        }
    }
    gf(), ha.exports = Qe;
    var _m = ha.exports, $u = _m;
    Ul.createRoot = $u.createRoot, Ul.hydrateRoot = $u.hydrateRoot;
    const Pm = "modulepreload", Nm = function(e) {
        return "/grid-draw/" + e;
    }, Bu = {}, zm = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((u)=>{
                if (u = Nm(u), u in Bu) return;
                Bu[u] = !0;
                const a = u.endsWith(".css"), p = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${p}`)) return;
                const m = document.createElement("link");
                if (m.rel = a ? "stylesheet" : Pm, a || (m.as = "script"), m.crossOrigin = "", m.href = u, s && m.setAttribute("nonce", s), document.head.appendChild(m), a) return new Promise((h, w)=>{
                    m.addEventListener("load", h), m.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${u}`)));
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
    function Rm(e, t, n) {
        const [r, o] = S.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = S.useRef(!1);
        return S.useEffect(()=>{
            l.current || (l.current = !0, (async ()=>{
                try {
                    const i = await zm(()=>import("./grid_draw_wasm.js"), []);
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
    function vf(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = vf(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function yf() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = vf(e)) && (r && (r += " "), r += t);
        return r;
    }
    const Wu = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Gu = yf, wf = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return Gu(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((a)=>{
                const p = n?.[a], m = l?.[a];
                if (p === null) return null;
                const h = Wu(p) || Wu(m);
                return o[a][h];
            }), s = n && Object.entries(n).reduce((a, p)=>{
                let [m, h] = p;
                return h === void 0 || (a[m] = h), a;
            }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, p)=>{
                let { class: m, className: h, ...w } = p;
                return Object.entries(w).every((k)=>{
                    let [x, y] = k;
                    return Array.isArray(y) ? y.includes({
                        ...l,
                        ...s
                    }[x]) : {
                        ...l,
                        ...s
                    }[x] === y;
                }) ? [
                    ...a,
                    m,
                    h
                ] : a;
            }, []);
            return Gu(e, i, u, n?.class, n?.className);
        };
    function Hu(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function xf(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = Hu(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : Hu(e[o], null);
                }
            };
        };
    }
    function Ii(...e) {
        return S.useCallback(xf(...e), e);
    }
    function Ho(e) {
        const t = Mm(e), n = S.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = S.Children.toArray(l), u = s.find(Lm);
            if (u) {
                const a = u.props.children, p = s.map((m)=>m === u ? S.Children.count(a) > 1 ? S.Children.only(null) : S.isValidElement(a) ? a.props.children : null : m);
                return T.jsx(t, {
                    ...i,
                    ref: o,
                    children: S.isValidElement(a) ? S.cloneElement(a, void 0, p) : null
                });
            }
            return T.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var Tm = Ho("Slot");
    function Mm(e) {
        const t = S.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (S.isValidElement(o)) {
                const i = Om(o), s = jm(l, o.props);
                return o.type !== S.Fragment && (s.ref = r ? xf(r, i) : i), S.cloneElement(o, s);
            }
            return S.Children.count(o) > 1 ? S.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var Im = Symbol("radix.slottable");
    function Lm(e) {
        return S.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Im;
    }
    function jm(e, t) {
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
    function Om(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var Dm = [
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
    ], jr = Dm.reduce((e, t)=>{
        const n = Ho(`Primitive.${t}`), r = S.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, u = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), T.jsx(u, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function Rs(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = S.createContext(i), u = n.length;
            n = [
                ...n,
                i
            ];
            const a = (m)=>{
                const { scope: h, children: w, ...k } = m, x = h?.[e]?.[u] || s, y = S.useMemo(()=>k, Object.values(k));
                return T.jsx(x.Provider, {
                    value: y,
                    children: w
                });
            };
            a.displayName = l + "Provider";
            function p(m, h) {
                const w = h?.[e]?.[u] || s, k = S.useContext(w);
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
            Fm(o, ...t)
        ];
    }
    function Fm(...e) {
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
    function Am(e) {
        const t = e + "CollectionProvider", [n, r] = Rs(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (x)=>{
            const { scope: y, children: f } = x, c = fe.useRef(null), d = fe.useRef(new Map).current;
            return T.jsx(o, {
                scope: y,
                itemMap: d,
                collectionRef: c,
                children: f
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", u = Ho(s), a = fe.forwardRef((x, y)=>{
            const { scope: f, children: c } = x, d = l(s, f), v = Ii(y, d.collectionRef);
            return T.jsx(u, {
                ref: v,
                children: c
            });
        });
        a.displayName = s;
        const p = e + "CollectionItemSlot", m = "data-radix-collection-item", h = Ho(p), w = fe.forwardRef((x, y)=>{
            const { scope: f, children: c, ...d } = x, v = fe.useRef(null), N = Ii(y, v), z = l(p, f);
            return fe.useEffect(()=>(z.itemMap.set(v, {
                    ref: v,
                    ...d
                }), ()=>void z.itemMap.delete(v))), T.jsx(h, {
                [m]: "",
                ref: N,
                children: c
            });
        });
        w.displayName = p;
        function k(x) {
            const y = l(e + "CollectionConsumer", x);
            return fe.useCallback(()=>{
                const c = y.collectionRef.current;
                if (!c) return [];
                const d = Array.from(c.querySelectorAll(`[${m}]`));
                return Array.from(y.itemMap.values()).sort((z, P)=>d.indexOf(z.ref.current) - d.indexOf(P.ref.current));
            }, [
                y.collectionRef,
                y.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: a,
                ItemSlot: w
            },
            k,
            r
        ];
    }
    function an(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var kf = globalThis?.document ? S.useLayoutEffect : ()=>{}, Um = pa[" useInsertionEffect ".trim().toString()] || kf;
    function cl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = Vm({
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
                const m = $m(p) ? p(e) : p;
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
    function Vm({ defaultProp: e, onChange: t }) {
        const [n, r] = S.useState(e), o = S.useRef(n), l = S.useRef(t);
        return Um(()=>{
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
    function $m(e) {
        return typeof e == "function";
    }
    var Bm = pa[" useId ".trim().toString()] || (()=>{}), Wm = 0;
    function Gm(e) {
        const [t, n] = S.useState(Bm());
        return kf(()=>{
            n((r)=>r ?? String(Wm++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var Hm = S.createContext(void 0);
    function Sf(e) {
        const t = S.useContext(Hm);
        return e || t || "ltr";
    }
    function bm(e) {
        const t = S.useRef(e);
        return S.useEffect(()=>{
            t.current = e;
        }), S.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Fl = "rovingFocusGroup.onEntryFocus", Qm = {
        bubbles: !1,
        cancelable: !0
    }, Vr = "RovingFocusGroup", [Li, Cf, Km] = Am(Vr), [Ym, Ef] = Rs(Vr, [
        Km
    ]), [Xm, Zm] = Ym(Vr), _f = S.forwardRef((e, t)=>T.jsx(Li.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: T.jsx(Li.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: T.jsx(Jm, {
                    ...e,
                    ref: t
                })
            })
        }));
    _f.displayName = Vr;
    var Jm = S.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: u, onEntryFocus: a, preventScrollOnEntryFocus: p = !1, ...m } = e, h = S.useRef(null), w = Ii(t, h), k = Sf(l), [x, y] = cl({
            prop: i,
            defaultProp: s ?? null,
            onChange: u,
            caller: Vr
        }), [f, c] = S.useState(!1), d = bm(a), v = Cf(n), N = S.useRef(!1), [z, P] = S.useState(0);
        return S.useEffect(()=>{
            const g = h.current;
            if (g) return g.addEventListener(Fl, d), ()=>g.removeEventListener(Fl, d);
        }, [
            d
        ]), T.jsx(Xm, {
            scope: n,
            orientation: r,
            dir: k,
            loop: o,
            currentTabStopId: x,
            onItemFocus: S.useCallback((g)=>y(g), [
                y
            ]),
            onItemShiftTab: S.useCallback(()=>c(!0), []),
            onFocusableItemAdd: S.useCallback(()=>P((g)=>g + 1), []),
            onFocusableItemRemove: S.useCallback(()=>P((g)=>g - 1), []),
            children: T.jsx(jr.div, {
                tabIndex: f || z === 0 ? -1 : 0,
                "data-orientation": r,
                ...m,
                ref: w,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: an(e.onMouseDown, ()=>{
                    N.current = !0;
                }),
                onFocus: an(e.onFocus, (g)=>{
                    const U = !N.current;
                    if (g.target === g.currentTarget && U && !f) {
                        const F = new CustomEvent(Fl, Qm);
                        if (g.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                            const se = v().filter((Q)=>Q.focusable), ge = se.find((Q)=>Q.active), Ye = se.find((Q)=>Q.id === x), je = [
                                ge,
                                Ye,
                                ...se
                            ].filter(Boolean).map((Q)=>Q.ref.current);
                            zf(je, p);
                        }
                    }
                    N.current = !1;
                }),
                onBlur: an(e.onBlur, ()=>c(!1))
            })
        });
    }), Pf = "RovingFocusGroupItem", Nf = S.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, u = Gm(), a = l || u, p = Zm(Pf, n), m = p.currentTabStopId === a, h = Cf(n), { onFocusableItemAdd: w, onFocusableItemRemove: k, currentTabStopId: x } = p;
        return S.useEffect(()=>{
            if (r) return w(), ()=>k();
        }, [
            r,
            w,
            k
        ]), T.jsx(Li.ItemSlot, {
            scope: n,
            id: a,
            focusable: r,
            active: o,
            children: T.jsx(jr.span, {
                tabIndex: m ? 0 : -1,
                "data-orientation": p.orientation,
                ...s,
                ref: t,
                onMouseDown: an(e.onMouseDown, (y)=>{
                    r ? p.onItemFocus(a) : y.preventDefault();
                }),
                onFocus: an(e.onFocus, ()=>p.onItemFocus(a)),
                onKeyDown: an(e.onKeyDown, (y)=>{
                    if (y.key === "Tab" && y.shiftKey) {
                        p.onItemShiftTab();
                        return;
                    }
                    if (y.target !== y.currentTarget) return;
                    const f = th(y, p.orientation, p.dir);
                    if (f !== void 0) {
                        if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                        y.preventDefault();
                        let d = h().filter((v)=>v.focusable).map((v)=>v.ref.current);
                        if (f === "last") d.reverse();
                        else if (f === "prev" || f === "next") {
                            f === "prev" && d.reverse();
                            const v = d.indexOf(y.currentTarget);
                            d = p.loop ? nh(d, v + 1) : d.slice(v + 1);
                        }
                        setTimeout(()=>zf(d));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: m,
                    hasTabStop: x != null
                }) : i
            })
        });
    });
    Nf.displayName = Pf;
    var qm = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function eh(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function th(e, t, n) {
        const r = eh(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return qm[r];
    }
    function zf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function nh(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var rh = _f, oh = Nf, Rf = "Toggle", Tf = S.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = cl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Rf
        });
        return T.jsx(jr.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: an(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Tf.displayName = Rf;
    var Jt = "ToggleGroup", [Mf] = Rs(Jt, [
        Ef
    ]), If = Ef(), Ts = fe.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return T.jsx(lh, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return T.jsx(ih, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${Jt}\``);
    });
    Ts.displayName = Jt;
    var [Lf, jf] = Mf(Jt), lh = fe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = cl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: Jt
        });
        return T.jsx(Lf, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: fe.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: fe.useCallback(()=>s(""), [
                s
            ]),
            children: T.jsx(Of, {
                ...l,
                ref: t
            })
        });
    }), ih = fe.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = cl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: Jt
        }), u = fe.useCallback((p)=>s((m = [])=>[
                    ...m,
                    p
                ]), [
            s
        ]), a = fe.useCallback((p)=>s((m = [])=>m.filter((h)=>h !== p)), [
            s
        ]);
        return T.jsx(Lf, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: u,
            onItemDeactivate: a,
            children: T.jsx(Of, {
                ...l,
                ref: t
            })
        });
    });
    Ts.displayName = Jt;
    var [sh, uh] = Mf(Jt), Of = fe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...u } = e, a = If(n), p = Sf(i), m = {
            role: "group",
            dir: p,
            ...u
        };
        return T.jsx(sh, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? T.jsx(rh, {
                asChild: !0,
                ...a,
                orientation: l,
                dir: p,
                loop: s,
                children: T.jsx(jr.div, {
                    ...m,
                    ref: t
                })
            }) : T.jsx(jr.div, {
                ...m,
                ref: t
            })
        });
    }), bo = "ToggleGroupItem", Df = fe.forwardRef((e, t)=>{
        const n = jf(bo, e.__scopeToggleGroup), r = uh(bo, e.__scopeToggleGroup), o = If(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, u = fe.useRef(null);
        return r.rovingFocus ? T.jsx(oh, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: u,
            children: T.jsx(bu, {
                ...s,
                ref: t
            })
        }) : T.jsx(bu, {
            ...s,
            ref: t
        });
    });
    Df.displayName = bo;
    var bu = fe.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = jf(bo, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return T.jsx(Tf, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (u)=>{
                u ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), ah = Ts, ch = Df;
    const fh = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, dh = (e, t)=>({
            classGroupId: e,
            validator: t
        }), Ff = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), Qo = "-", Qu = [], ph = "arbitrary..", mh = (e)=>{
        const t = gh(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return hh(i);
                const s = i.split(Qo), u = s[0] === "" && s.length > 1 ? 1 : 0;
                return Af(s, u, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const u = r[i], a = n[i];
                    return u ? a ? fh(a, u) : u : a || Qu;
                }
                return n[i] || Qu;
            }
        };
    }, Af = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const a = Af(e, t + 1, l);
            if (a) return a;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(Qo) : e.slice(t).join(Qo), u = i.length;
        for(let a = 0; a < u; a++){
            const p = i[a];
            if (p.validator(s)) return p.classGroupId;
        }
    }, hh = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? ph + r : void 0;
        })(), gh = (e)=>{
        const { theme: t, classGroups: n } = e;
        return vh(n, t);
    }, vh = (e, t)=>{
        const n = Ff();
        for(const r in e){
            const o = e[r];
            Ms(o, n, r, t);
        }
        return n;
    }, Ms = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            yh(i, t, n, r);
        }
    }, yh = (e, t, n, r)=>{
        if (typeof e == "string") {
            wh(e, t, n);
            return;
        }
        if (typeof e == "function") {
            xh(e, t, n, r);
            return;
        }
        kh(e, t, n, r);
    }, wh = (e, t, n)=>{
        const r = e === "" ? t : Uf(t, e);
        r.classGroupId = n;
    }, xh = (e, t, n, r)=>{
        if (Sh(e)) {
            Ms(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(dh(n, e));
    }, kh = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, u] = o[i];
            Ms(u, Uf(t, s), n, r);
        }
    }, Uf = (e, t)=>{
        let n = e;
        const r = t.split(Qo), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = Ff(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Sh = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Ch = (e)=>{
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
    }, ji = "!", Ku = ":", Eh = [], Yu = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), _h = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, u = 0, a;
            const p = o.length;
            for(let x = 0; x < p; x++){
                const y = o[x];
                if (i === 0 && s === 0) {
                    if (y === Ku) {
                        l.push(o.slice(u, x)), u = x + 1;
                        continue;
                    }
                    if (y === "/") {
                        a = x;
                        continue;
                    }
                }
                y === "[" ? i++ : y === "]" ? i-- : y === "(" ? s++ : y === ")" && s--;
            }
            const m = l.length === 0 ? o : o.slice(u);
            let h = m, w = !1;
            m.endsWith(ji) ? (h = m.slice(0, -1), w = !0) : m.startsWith(ji) && (h = m.slice(1), w = !0);
            const k = a && a > u ? a - u : void 0;
            return Yu(l, w, h, k);
        };
        if (t) {
            const o = t + Ku, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : Yu(Eh, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, Ph = (e)=>{
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
    }, Nh = (e)=>({
            cache: Ch(e.cacheSize),
            parseClassName: _h(e),
            sortModifiers: Ph(e),
            ...mh(e)
        }), zh = /\s+/, Rh = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(zh);
        let u = "";
        for(let a = s.length - 1; a >= 0; a -= 1){
            const p = s[a], { isExternal: m, modifiers: h, hasImportantModifier: w, baseClassName: k, maybePostfixModifierPosition: x } = n(p);
            if (m) {
                u = p + (u.length > 0 ? " " + u : u);
                continue;
            }
            let y = !!x, f = r(y ? k.substring(0, x) : k);
            if (!f) {
                if (!y) {
                    u = p + (u.length > 0 ? " " + u : u);
                    continue;
                }
                if (f = r(k), !f) {
                    u = p + (u.length > 0 ? " " + u : u);
                    continue;
                }
                y = !1;
            }
            const c = h.length === 0 ? "" : h.length === 1 ? h[0] : l(h).join(":"), d = w ? c + ji : c, v = d + f;
            if (i.indexOf(v) > -1) continue;
            i.push(v);
            const N = o(f, y);
            for(let z = 0; z < N.length; ++z){
                const P = N[z];
                i.push(d + P);
            }
            u = p + (u.length > 0 ? " " + u : u);
        }
        return u;
    }, Th = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = Vf(n)) && (o && (o += " "), o += r);
        return o;
    }, Vf = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = Vf(e[r])) && (n && (n += " "), n += t);
        return n;
    }, Mh = (e, ...t)=>{
        let n, r, o, l;
        const i = (u)=>{
            const a = t.reduce((p, m)=>m(p), e());
            return n = Nh(a), r = n.cache.get, o = n.cache.set, l = s, s(u);
        }, s = (u)=>{
            const a = r(u);
            if (a) return a;
            const p = Rh(u, n);
            return o(u, p), p;
        };
        return l = i, (...u)=>l(Th(...u));
    }, Ih = [], pe = (e)=>{
        const t = (n)=>n[e] || Ih;
        return t.isThemeGetter = !0, t;
    }, $f = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Bf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Lh = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, jh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Oh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Dh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Fh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ah = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Tt = (e)=>Lh.test(e), B = (e)=>!!e && !Number.isNaN(Number(e)), Mt = (e)=>!!e && Number.isInteger(Number(e)), Al = (e)=>e.endsWith("%") && B(e.slice(0, -1)), yt = (e)=>jh.test(e), Wf = ()=>!0, Uh = (e)=>Oh.test(e) && !Dh.test(e), Is = ()=>!1, Vh = (e)=>Fh.test(e), $h = (e)=>Ah.test(e), Bh = (e)=>!O(e) && !D(e), Wh = (e)=>qt(e, bf, Is), O = (e)=>$f.test(e), en = (e)=>qt(e, Qf, Uh), Xu = (e)=>qt(e, Zh, B), Gh = (e)=>qt(e, Yf, Wf), Hh = (e)=>qt(e, Kf, Is), Zu = (e)=>qt(e, Gf, Is), bh = (e)=>qt(e, Hf, $h), oo = (e)=>qt(e, Xf, Vh), D = (e)=>Bf.test(e), rr = (e)=>vn(e, Qf), Qh = (e)=>vn(e, Kf), Ju = (e)=>vn(e, Gf), Kh = (e)=>vn(e, bf), Yh = (e)=>vn(e, Hf), lo = (e)=>vn(e, Xf, !0), Xh = (e)=>vn(e, Yf, !0), qt = (e, t, n)=>{
        const r = $f.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, vn = (e, t, n = !1)=>{
        const r = Bf.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, Gf = (e)=>e === "position" || e === "percentage", Hf = (e)=>e === "image" || e === "url", bf = (e)=>e === "length" || e === "size" || e === "bg-size", Qf = (e)=>e === "length", Zh = (e)=>e === "number", Kf = (e)=>e === "family-name", Yf = (e)=>e === "number" || e === "weight", Xf = (e)=>e === "shadow", Jh = ()=>{
        const e = pe("color"), t = pe("font"), n = pe("text"), r = pe("font-weight"), o = pe("tracking"), l = pe("leading"), i = pe("breakpoint"), s = pe("container"), u = pe("spacing"), a = pe("radius"), p = pe("shadow"), m = pe("inset-shadow"), h = pe("text-shadow"), w = pe("drop-shadow"), k = pe("blur"), x = pe("perspective"), y = pe("aspect"), f = pe("ease"), c = pe("animate"), d = ()=>[
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
            ], N = ()=>[
                ...v(),
                D,
                O
            ], z = ()=>[
                "auto",
                "hidden",
                "clip",
                "visible",
                "scroll"
            ], P = ()=>[
                "auto",
                "contain",
                "none"
            ], g = ()=>[
                D,
                O,
                u
            ], U = ()=>[
                Tt,
                "full",
                "auto",
                ...g()
            ], F = ()=>[
                Mt,
                "none",
                "subgrid",
                D,
                O
            ], se = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Mt,
                        D,
                        O
                    ]
                },
                Mt,
                D,
                O
            ], ge = ()=>[
                Mt,
                "auto",
                D,
                O
            ], Ye = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                D,
                O
            ], ft = ()=>[
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
            ], je = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], Q = ()=>[
                "auto",
                ...g()
            ], Oe = ()=>[
                Tt,
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
                Tt,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...g()
            ], A = ()=>[
                Tt,
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
            ], _ = ()=>[
                e,
                D,
                O
            ], K = ()=>[
                ...v(),
                Ju,
                Zu,
                {
                    position: [
                        D,
                        O
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
            ], vt = ()=>[
                "auto",
                "cover",
                "contain",
                Kh,
                Wh,
                {
                    size: [
                        D,
                        O
                    ]
                }
            ], $e = ()=>[
                Al,
                rr,
                en
            ], ue = ()=>[
                "",
                "none",
                "full",
                a,
                D,
                O
            ], X = ()=>[
                "",
                B,
                rr,
                en
            ], Xe = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], Kn = ()=>[
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
            ], C = ()=>[
                B,
                Al,
                Ju,
                Zu
            ], M = ()=>[
                "",
                "none",
                k,
                D,
                O
            ], V = ()=>[
                "none",
                B,
                D,
                O
            ], I = ()=>[
                "none",
                B,
                D,
                O
            ], j = ()=>[
                B,
                D,
                O
            ], $ = ()=>[
                Tt,
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
                    yt
                ],
                breakpoint: [
                    yt
                ],
                color: [
                    Wf
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
                    Bh
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
                    B
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
                            Tt,
                            O,
                            D,
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
                            B,
                            O,
                            D,
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
                        object: N()
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
                        inset: U()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": U()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": U()
                    }
                ],
                start: [
                    {
                        "inset-s": U(),
                        start: U()
                    }
                ],
                end: [
                    {
                        "inset-e": U(),
                        end: U()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": U()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": U()
                    }
                ],
                top: [
                    {
                        top: U()
                    }
                ],
                right: [
                    {
                        right: U()
                    }
                ],
                bottom: [
                    {
                        bottom: U()
                    }
                ],
                left: [
                    {
                        left: U()
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
                            D,
                            O
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            Tt,
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
                            B,
                            Tt,
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
                            B,
                            D,
                            O
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            B,
                            D,
                            O
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
                        col: se()
                    }
                ],
                "col-start": [
                    {
                        "col-start": ge()
                    }
                ],
                "col-end": [
                    {
                        "col-end": ge()
                    }
                ],
                "grid-rows": [
                    {
                        "grid-rows": F()
                    }
                ],
                "row-start-end": [
                    {
                        row: se()
                    }
                ],
                "row-start": [
                    {
                        "row-start": ge()
                    }
                ],
                "row-end": [
                    {
                        "row-end": ge()
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
                        "auto-cols": Ye()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": Ye()
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
                            ...ft(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...je(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...je()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...ft()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...je(),
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
                            ...je(),
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
                        "place-content": ft()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...je(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...je()
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
                        size: Oe()
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
                            rr,
                            en
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
                            Xh,
                            Gh
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
                            Al,
                            O
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            Qh,
                            Hh,
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
                            B,
                            "none",
                            D,
                            Xu
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
                        placeholder: _()
                    }
                ],
                "text-color": [
                    {
                        text: _()
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
                            B,
                            "from-font",
                            "auto",
                            D,
                            en
                        ]
                    }
                ],
                "text-decoration-color": [
                    {
                        decoration: _()
                    }
                ],
                "underline-offset": [
                    {
                        "underline-offset": [
                            B,
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
                        bg: K()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: ee()
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
                                    Mt,
                                    D,
                                    O
                                ],
                                radial: [
                                    "",
                                    D,
                                    O
                                ],
                                conic: [
                                    Mt,
                                    D,
                                    O
                                ]
                            },
                            Yh,
                            bh
                        ]
                    }
                ],
                "bg-color": [
                    {
                        bg: _()
                    }
                ],
                "gradient-from-pos": [
                    {
                        from: $e()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: $e()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: $e()
                    }
                ],
                "gradient-from": [
                    {
                        from: _()
                    }
                ],
                "gradient-via": [
                    {
                        via: _()
                    }
                ],
                "gradient-to": [
                    {
                        to: _()
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
                        border: X()
                    }
                ],
                "border-w-x": [
                    {
                        "border-x": X()
                    }
                ],
                "border-w-y": [
                    {
                        "border-y": X()
                    }
                ],
                "border-w-s": [
                    {
                        "border-s": X()
                    }
                ],
                "border-w-e": [
                    {
                        "border-e": X()
                    }
                ],
                "border-w-bs": [
                    {
                        "border-bs": X()
                    }
                ],
                "border-w-be": [
                    {
                        "border-be": X()
                    }
                ],
                "border-w-t": [
                    {
                        "border-t": X()
                    }
                ],
                "border-w-r": [
                    {
                        "border-r": X()
                    }
                ],
                "border-w-b": [
                    {
                        "border-b": X()
                    }
                ],
                "border-w-l": [
                    {
                        "border-l": X()
                    }
                ],
                "divide-x": [
                    {
                        "divide-x": X()
                    }
                ],
                "divide-x-reverse": [
                    "divide-x-reverse"
                ],
                "divide-y": [
                    {
                        "divide-y": X()
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
                        border: _()
                    }
                ],
                "border-color-x": [
                    {
                        "border-x": _()
                    }
                ],
                "border-color-y": [
                    {
                        "border-y": _()
                    }
                ],
                "border-color-s": [
                    {
                        "border-s": _()
                    }
                ],
                "border-color-e": [
                    {
                        "border-e": _()
                    }
                ],
                "border-color-bs": [
                    {
                        "border-bs": _()
                    }
                ],
                "border-color-be": [
                    {
                        "border-be": _()
                    }
                ],
                "border-color-t": [
                    {
                        "border-t": _()
                    }
                ],
                "border-color-r": [
                    {
                        "border-r": _()
                    }
                ],
                "border-color-b": [
                    {
                        "border-b": _()
                    }
                ],
                "border-color-l": [
                    {
                        "border-l": _()
                    }
                ],
                "divide-color": [
                    {
                        divide: _()
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
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            B,
                            rr,
                            en
                        ]
                    }
                ],
                "outline-color": [
                    {
                        outline: _()
                    }
                ],
                shadow: [
                    {
                        shadow: [
                            "",
                            "none",
                            p,
                            lo,
                            oo
                        ]
                    }
                ],
                "shadow-color": [
                    {
                        shadow: _()
                    }
                ],
                "inset-shadow": [
                    {
                        "inset-shadow": [
                            "none",
                            m,
                            lo,
                            oo
                        ]
                    }
                ],
                "inset-shadow-color": [
                    {
                        "inset-shadow": _()
                    }
                ],
                "ring-w": [
                    {
                        ring: X()
                    }
                ],
                "ring-w-inset": [
                    "ring-inset"
                ],
                "ring-color": [
                    {
                        ring: _()
                    }
                ],
                "ring-offset-w": [
                    {
                        "ring-offset": [
                            B,
                            en
                        ]
                    }
                ],
                "ring-offset-color": [
                    {
                        "ring-offset": _()
                    }
                ],
                "inset-ring-w": [
                    {
                        "inset-ring": X()
                    }
                ],
                "inset-ring-color": [
                    {
                        "inset-ring": _()
                    }
                ],
                "text-shadow": [
                    {
                        "text-shadow": [
                            "none",
                            h,
                            lo,
                            oo
                        ]
                    }
                ],
                "text-shadow-color": [
                    {
                        "text-shadow": _()
                    }
                ],
                opacity: [
                    {
                        opacity: [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...Kn(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": Kn()
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
                            B
                        ]
                    }
                ],
                "mask-image-linear-from-pos": [
                    {
                        "mask-linear-from": C()
                    }
                ],
                "mask-image-linear-to-pos": [
                    {
                        "mask-linear-to": C()
                    }
                ],
                "mask-image-linear-from-color": [
                    {
                        "mask-linear-from": _()
                    }
                ],
                "mask-image-linear-to-color": [
                    {
                        "mask-linear-to": _()
                    }
                ],
                "mask-image-t-from-pos": [
                    {
                        "mask-t-from": C()
                    }
                ],
                "mask-image-t-to-pos": [
                    {
                        "mask-t-to": C()
                    }
                ],
                "mask-image-t-from-color": [
                    {
                        "mask-t-from": _()
                    }
                ],
                "mask-image-t-to-color": [
                    {
                        "mask-t-to": _()
                    }
                ],
                "mask-image-r-from-pos": [
                    {
                        "mask-r-from": C()
                    }
                ],
                "mask-image-r-to-pos": [
                    {
                        "mask-r-to": C()
                    }
                ],
                "mask-image-r-from-color": [
                    {
                        "mask-r-from": _()
                    }
                ],
                "mask-image-r-to-color": [
                    {
                        "mask-r-to": _()
                    }
                ],
                "mask-image-b-from-pos": [
                    {
                        "mask-b-from": C()
                    }
                ],
                "mask-image-b-to-pos": [
                    {
                        "mask-b-to": C()
                    }
                ],
                "mask-image-b-from-color": [
                    {
                        "mask-b-from": _()
                    }
                ],
                "mask-image-b-to-color": [
                    {
                        "mask-b-to": _()
                    }
                ],
                "mask-image-l-from-pos": [
                    {
                        "mask-l-from": C()
                    }
                ],
                "mask-image-l-to-pos": [
                    {
                        "mask-l-to": C()
                    }
                ],
                "mask-image-l-from-color": [
                    {
                        "mask-l-from": _()
                    }
                ],
                "mask-image-l-to-color": [
                    {
                        "mask-l-to": _()
                    }
                ],
                "mask-image-x-from-pos": [
                    {
                        "mask-x-from": C()
                    }
                ],
                "mask-image-x-to-pos": [
                    {
                        "mask-x-to": C()
                    }
                ],
                "mask-image-x-from-color": [
                    {
                        "mask-x-from": _()
                    }
                ],
                "mask-image-x-to-color": [
                    {
                        "mask-x-to": _()
                    }
                ],
                "mask-image-y-from-pos": [
                    {
                        "mask-y-from": C()
                    }
                ],
                "mask-image-y-to-pos": [
                    {
                        "mask-y-to": C()
                    }
                ],
                "mask-image-y-from-color": [
                    {
                        "mask-y-from": _()
                    }
                ],
                "mask-image-y-to-color": [
                    {
                        "mask-y-to": _()
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
                        "mask-radial-from": C()
                    }
                ],
                "mask-image-radial-to-pos": [
                    {
                        "mask-radial-to": C()
                    }
                ],
                "mask-image-radial-from-color": [
                    {
                        "mask-radial-from": _()
                    }
                ],
                "mask-image-radial-to-color": [
                    {
                        "mask-radial-to": _()
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
                            B
                        ]
                    }
                ],
                "mask-image-conic-from-pos": [
                    {
                        "mask-conic-from": C()
                    }
                ],
                "mask-image-conic-to-pos": [
                    {
                        "mask-conic-to": C()
                    }
                ],
                "mask-image-conic-from-color": [
                    {
                        "mask-conic-from": _()
                    }
                ],
                "mask-image-conic-to-color": [
                    {
                        "mask-conic-to": _()
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
                        mask: ee()
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
                        blur: M()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            B,
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
                            lo,
                            oo
                        ]
                    }
                ],
                "drop-shadow-color": [
                    {
                        "drop-shadow": _()
                    }
                ],
                grayscale: [
                    {
                        grayscale: [
                            "",
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            B,
                            D,
                            O
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            B,
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
                        "backdrop-blur": M()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            B,
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
                            B,
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
                            f,
                            D,
                            O
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            B,
                            D,
                            O
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            c,
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
                            x,
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
                        rotate: V()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": V()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": V()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": V()
                    }
                ],
                scale: [
                    {
                        scale: I()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": I()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": I()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": I()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: j()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": j()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": j()
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
                        accent: _()
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
                        caret: _()
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
                            D,
                            O
                        ]
                    }
                ],
                fill: [
                    {
                        fill: [
                            "none",
                            ..._()
                        ]
                    }
                ],
                "stroke-w": [
                    {
                        stroke: [
                            B,
                            rr,
                            en,
                            Xu
                        ]
                    }
                ],
                stroke: [
                    {
                        stroke: [
                            "none",
                            ..._()
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
    }, qh = Mh(Jh);
    function Gn(...e) {
        return qh(yf(e));
    }
    const eg = wf("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function tg({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? Tm : "button";
        return T.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: Gn(eg({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const ng = wf("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), Zf = S.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function rg({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return T.jsx(ah, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: Gn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: T.jsx(Zf.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function io({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = S.useContext(Zf);
        return T.jsx(ch, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: Gn(ng({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function qu({ title: e, defaultPosition: t, children: n, className: r }) {
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
                const w = Math.max(0, h.clientX - s.current.x), k = Math.max(0, h.clientY - s.current.y);
                l({
                    x: w,
                    y: k
                });
            }, m = ()=>{
                i.current = !1, window.removeEventListener("mousemove", p), window.removeEventListener("mouseup", m);
            };
            window.addEventListener("mousemove", p), window.addEventListener("mouseup", m);
        }, [
            o
        ]);
        return T.jsxs("div", {
            className: Gn("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: o.x,
                top: o.y
            },
            children: [
                T.jsx("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg",
                    onMouseDown: u,
                    children: e
                }),
                T.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const ea = "grid-canvas", jt = 16, xo = 48, og = [
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
    function ta() {
        const e = Math.floor(window.innerWidth / jt), t = Math.floor((window.innerHeight - xo) / jt);
        return {
            rows: Math.max(10, t),
            cols: Math.max(10, e)
        };
    }
    function lg() {
        const [e, t] = S.useState(ta), { grid: n, loading: r, error: o } = Rm(ea, e.rows, e.cols), l = S.useRef(null), i = S.useRef(!1), s = S.useRef(!1), [u, a] = S.useState("draw"), [p, m] = S.useState(0), [h, w] = S.useState(""), [k, x] = S.useState(""), [y, f] = S.useState([]), [c, d] = S.useState(null), v = S.useRef({
            row: 0,
            col: 0
        }), N = S.useRef(null), z = S.useRef(null), P = S.useRef(null), g = S.useRef(null), U = S.useRef(null);
        S.useEffect(()=>{
            const C = ()=>{
                const M = ta();
                t(M), n && n.resize(M.rows, M.cols);
            };
            return window.addEventListener("resize", C), ()=>window.removeEventListener("resize", C);
        }, [
            n
        ]);
        const F = S.useCallback(()=>{
            n && (w(n.export_json()), x(n.export_pytorch_tensor()));
        }, [
            n
        ]), se = S.useCallback(()=>{
            if (n && y.length > 0) {
                for (const C of y)n.delete_cell(C.row, C.col);
                f([]), n.render(), F();
            }
        }, [
            n,
            y,
            F
        ]), ge = S.useCallback(()=>{
            if (n) {
                n.render();
                for (const C of y)n.highlight_cell(C.row, C.col);
                if (y.length > 1) {
                    const C = Math.min(...y.map((j)=>j.row)), M = Math.max(...y.map((j)=>j.row)), V = Math.min(...y.map((j)=>j.col)), I = Math.max(...y.map((j)=>j.col));
                    n.draw_selection_box(C, V, M + 1, I + 1);
                }
            }
        }, [
            n,
            y
        ]), Ye = S.useCallback((C, M)=>y.some((V)=>V.row === C && V.col === M), [
            y
        ]), ft = S.useCallback(()=>y.length === 0 ? null : {
                minRow: Math.min(...y.map((C)=>C.row)),
                maxRow: Math.max(...y.map((C)=>C.row)),
                minCol: Math.min(...y.map((C)=>C.col)),
                maxCol: Math.max(...y.map((C)=>C.col))
            }, [
            y
        ]), je = S.useCallback((C)=>{
            const M = l.current;
            if (!M) return {
                col: 0,
                row: 0
            };
            const V = M.getBoundingClientRect(), I = M.width / V.width, j = M.height / V.height, $ = (C.clientX - V.left) * I, oe = (C.clientY - V.top) * j, le = n?.get_cols() ?? e.cols, ke = n?.get_rows() ?? e.rows, ae = Math.max(0, Math.min(le - 1, Math.floor($ / jt))), b = Math.max(0, Math.min(ke - 1, Math.floor(oe / jt)));
            return {
                col: ae,
                row: b
            };
        }, [
            n,
            e
        ]), Q = S.useCallback((C, M)=>{
            U.current = "box", P.current = {
                row: C,
                col: M
            }, i.current = !0, f([]), n?.render();
            const V = (j)=>{
                if (!n || U.current !== "box" || !P.current) return;
                const { col: $, row: oe } = je(j);
                n.render_with_selection_box(P.current.row, P.current.col, oe, $);
            }, I = (j)=>{
                if (window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", I), !n || U.current !== "box" || !P.current) {
                    U.current = null, i.current = !1;
                    return;
                }
                const { col: $, row: oe } = je(j), le = Math.min(P.current.row, oe), ke = Math.max(P.current.row, oe), ae = Math.min(P.current.col, $), b = Math.max(P.current.col, $), _e = n.get_cols(), ve = n.get_rows(), Ze = [];
                for(let ye = le; ye <= ke && ye < ve; ye++)for(let Be = ae; Be <= b && Be < _e; Be++)n.get_cell(ye, Be) && Ze.push({
                    row: ye,
                    col: Be
                });
                f(Ze), n.render();
                for (const ye of Ze)n.highlight_cell(ye.row, ye.col);
                U.current = null, P.current = null, i.current = !1;
            };
            window.addEventListener("mousemove", V), window.addEventListener("mouseup", I);
        }, [
            n,
            je
        ]), Oe = (C)=>{
            const M = C.currentTarget, V = M.getBoundingClientRect(), I = M.width / V.width, j = M.height / V.height;
            return {
                x: (C.clientX - V.left) * I,
                y: (C.clientY - V.top) * j
            };
        }, R = (C)=>{
            const { x: M, y: V } = Oe(C);
            return {
                col: Math.floor(M / jt),
                row: Math.floor(V / jt)
            };
        }, A = (C)=>{
            const { x: M, y: V } = Oe(C), I = n?.get_cols() ?? e.cols, j = n?.get_rows() ?? e.rows, $ = Math.max(0, Math.min(I, Math.round(M / jt))), oe = Math.max(0, Math.min(j, Math.round(V / jt)));
            return {
                col: $,
                row: oe
            };
        }, _ = S.useCallback((C)=>{
            if (!n) return;
            n.set_draw_color(p);
            const M = n.get_cols(), V = n.get_rows();
            if (u === "draw") {
                const { col: I, row: j } = R(C);
                if (I >= M || j >= V) return;
                p === 6 ? s.current = !1 : s.current = !n.get_cell(j, I), i.current = !0, n.set_cell(j, I, s.current), F();
            } else if (u === "line") {
                const { col: I, row: j } = A(C);
                N.current = {
                    row: j,
                    col: I
                }, i.current = !0, n.render_with_line(j, I, j, I);
            } else if (u === "rect") {
                const { col: I, row: j } = A(C);
                z.current = {
                    row: j,
                    col: I
                }, i.current = !0, n.render_with_rect(j, I, j, I);
            } else if (u === "select") {
                const { col: I, row: j } = R(C);
                if (I >= M || j >= V) return;
                const $ = ft();
                $ && j >= $.minRow && j <= $.maxRow && I >= $.minCol && I <= $.maxCol && y.length > 0 ? (U.current = "drag", g.current = {
                    row: j,
                    col: I
                }, i.current = !0, ge()) : n.get_cell(j, I) ? (f([
                    {
                        row: j,
                        col: I
                    }
                ]), U.current = "drag", g.current = {
                    row: j,
                    col: I
                }, i.current = !0, n.render(), n.highlight_cell(j, I)) : Q(j, I);
            }
        }, [
            n,
            u,
            p,
            e,
            F,
            Ye,
            ge,
            Q,
            ft,
            y
        ]), K = S.useCallback((C)=>{
            if (!n) return;
            const M = R(C);
            if (v.current = {
                row: M.row,
                col: M.col
            }, !i.current) return;
            const V = n.get_cols(), I = n.get_rows();
            if (u === "draw") {
                const { col: j, row: $ } = R(C);
                if (j >= V || $ >= I) return;
                n.set_cell($, j, s.current), F();
            } else if (u === "line") {
                if (N.current) {
                    const { col: j, row: $ } = A(C);
                    n.render_with_line(N.current.row, N.current.col, $, j);
                }
            } else if (u === "rect") {
                if (z.current) {
                    const { col: j, row: $ } = A(C);
                    n.render_with_rect(z.current.row, z.current.col, $, j);
                }
            } else if (u === "select") {
                const { col: j, row: $ } = R(C), oe = Math.max(0, Math.min(V - 1, j)), le = Math.max(0, Math.min(I - 1, $));
                if (U.current === "box" && P.current) n.render_with_selection_box(P.current.row, P.current.col, le, oe);
                else if (U.current === "drag" && g.current && y.length > 0) {
                    const ke = le - g.current.row, ae = oe - g.current.col;
                    n.render();
                    const b = [];
                    for (const _e of y){
                        const ve = _e.row + ke, Ze = _e.col + ae;
                        ve >= 0 && ve < I && Ze >= 0 && Ze < V && (n.highlight_cell(ve, Ze), b.push({
                            row: ve,
                            col: Ze
                        }));
                    }
                    if (b.length > 1) {
                        const _e = Math.min(...b.map((Be)=>Be.row)), ve = Math.max(...b.map((Be)=>Be.row)), Ze = Math.min(...b.map((Be)=>Be.col)), ye = Math.max(...b.map((Be)=>Be.col));
                        n.draw_selection_box(_e, Ze, ve + 1, ye + 1);
                    }
                }
            }
        }, [
            n,
            u,
            e,
            F,
            y
        ]), ee = S.useCallback((C)=>{
            if (!n) return;
            const M = n.get_cols(), V = n.get_rows();
            if (u === "draw") i.current = !1;
            else if (u === "line") {
                if (N.current) {
                    const { col: I, row: j } = A(C);
                    n.draw_line(N.current.row, N.current.col, j, I), F();
                }
                N.current = null, i.current = !1;
            } else if (u === "rect") {
                if (z.current) {
                    const { col: I, row: j } = A(C);
                    n.draw_rect(z.current.row, z.current.col, j, I), F();
                }
                z.current = null, i.current = !1;
            } else if (u === "select") {
                const { col: I, row: j } = R(C);
                if (U.current === "box" && P.current) {
                    const $ = Math.min(P.current.row, j), oe = Math.max(P.current.row, j), le = Math.min(P.current.col, I), ke = Math.max(P.current.col, I), ae = [];
                    for(let b = $; b <= oe && b < V; b++)for(let _e = le; _e <= ke && _e < M; _e++)n.get_cell(b, _e) && ae.push({
                        row: b,
                        col: _e
                    });
                    f(ae), n.render();
                    for (const b of ae)n.highlight_cell(b.row, b.col);
                    if (ae.length > 1) {
                        const b = Math.min(...ae.map((ye)=>ye.row)), _e = Math.max(...ae.map((ye)=>ye.row)), ve = Math.min(...ae.map((ye)=>ye.col)), Ze = Math.max(...ae.map((ye)=>ye.col));
                        n.draw_selection_box(b, ve, _e + 1, Ze + 1);
                    }
                } else if (U.current === "drag" && g.current && y.length > 0) {
                    const $ = j - g.current.row, oe = I - g.current.col;
                    if ($ !== 0 || oe !== 0) {
                        const le = [];
                        for (const ke of y){
                            const ae = ke.row + $, b = ke.col + oe;
                            ae >= 0 && ae < V && b >= 0 && b < M && (n.move_cell(ke.row, ke.col, ae, b), le.push({
                                row: ae,
                                col: b
                            }));
                        }
                        f(le), F(), n.render();
                        for (const ke of le)n.highlight_cell(ke.row, ke.col);
                        if (le.length > 1) {
                            const ke = Math.min(...le.map((ve)=>ve.row)), ae = Math.max(...le.map((ve)=>ve.row)), b = Math.min(...le.map((ve)=>ve.col)), _e = Math.max(...le.map((ve)=>ve.col));
                            n.draw_selection_box(ke, b, ae + 1, _e + 1);
                        }
                    } else ge();
                }
                U.current = null, P.current = null, g.current = null, i.current = !1;
            }
        }, [
            n,
            u,
            e,
            F,
            y
        ]), vt = S.useCallback(()=>{
            u === "draw" ? i.current = !1 : u === "line" ? (n && n.render(), N.current = null, i.current = !1) : u === "rect" ? (n && n.render(), z.current = null, i.current = !1) : u === "select" && (ge(), U.current = null, P.current = null, g.current = null, i.current = !1);
        }, [
            n,
            u,
            y,
            ge
        ]), $e = S.useCallback(()=>{
            n?.clear(), f([]), F();
        }, [
            n,
            F
        ]), ue = S.useCallback((C)=>{
            if (w(C), n && C.trim()) try {
                n.import_json(C), f([]), x(n.export_pytorch_tensor());
            } catch  {}
        }, [
            n
        ]), X = S.useCallback((C)=>{
            if (x(C), n && C.trim()) try {
                let M = C.trim();
                M.startsWith("tensor(") && (M = M.slice(7), M.endsWith(")") && (M = M.slice(0, -1))), n.import_tensor(M), f([]), w(n.export_json());
            } catch  {}
        }, [
            n
        ]), Xe = S.useCallback(()=>{
            if (!n || y.length === 0) return;
            const C = Math.min(...y.map((I)=>I.row)), M = Math.min(...y.map((I)=>I.col)), V = y.map((I)=>({
                    relRow: I.row - C,
                    relCol: I.col - M,
                    color: n.get_cell_color(I.row, I.col)
                }));
            d({
                cells: V
            });
        }, [
            n,
            y
        ]), Kn = S.useCallback(()=>{
            if (!n || !c || c.cells.length === 0) return;
            const C = v.current.row, M = v.current.col, V = n.get_rows(), I = n.get_cols(), j = [];
            for (const $ of c.cells){
                const oe = C + $.relRow, le = M + $.relCol;
                oe >= 0 && oe < V && le >= 0 && le < I && (n.set_draw_color($.color), n.set_cell(oe, le, !0), j.push({
                    row: oe,
                    col: le
                }));
            }
            f(j), n.render();
            for (const $ of j)n.highlight_cell($.row, $.col);
            F();
        }, [
            n,
            c,
            F
        ]);
        return S.useEffect(()=>{
            const C = (M)=>{
                M.key === "\\" && a((I)=>I === "line" ? "draw" : "line"), M.key === "m" && a((I)=>I === "rect" ? "draw" : "rect"), M.key === "s" && a((I)=>I === "select" ? "draw" : "select"), (M.key === "Delete" || M.key === "Backspace") && y.length > 0 && (M.preventDefault(), se()), (M.ctrlKey || M.metaKey) && M.key === "c" && y.length > 0 && (M.preventDefault(), Xe()), (M.ctrlKey || M.metaKey) && M.key === "v" && c && (M.preventDefault(), Kn());
                const V = parseInt(M.key);
                V >= 1 && V <= 7 && m(V - 1);
            };
            return window.addEventListener("keydown", C), ()=>window.removeEventListener("keydown", C);
        }, [
            y,
            se,
            Xe,
            Kn,
            c
        ]), o ? T.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: T.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: T.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        o
                    ]
                })
            })
        }) : T.jsxs(T.Fragment, {
            children: [
                T.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        T.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Grid Draw"
                        }),
                        r && T.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        })
                    ]
                }),
                T.jsx("canvas", {
                    ref: l,
                    id: ea,
                    className: Gn("fixed left-0 right-0 bottom-0", r && "opacity-50"),
                    style: {
                        top: xo,
                        cursor: r ? "wait" : "crosshair"
                    },
                    onMouseDown: _,
                    onMouseMove: K,
                    onMouseUp: ee,
                    onMouseLeave: vt
                }),
                T.jsx(qu, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: xo + 20
                    },
                    children: T.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            T.jsxs("div", {
                                children: [
                                    T.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    T.jsxs(rg, {
                                        type: "single",
                                        value: u,
                                        onValueChange: (C)=>C && a(C),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            T.jsx(io, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            T.jsx(io, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            T.jsx(io, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            T.jsx(io, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            T.jsxs("div", {
                                children: [
                                    T.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    T.jsx("div", {
                                        className: "flex gap-1",
                                        children: og.map((C, M)=>T.jsx("button", {
                                                onClick: ()=>m(M),
                                                title: `${M + 1}: ${C.name}`,
                                                className: Gn("w-6 h-6 rounded border-2 transition-all", p === M ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", C.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: C.hex ?? "transparent",
                                                    backgroundImage: C.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: C.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: C.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, M))
                                    })
                                ]
                            }),
                            T.jsx(tg, {
                                variant: "destructive",
                                onClick: $e,
                                disabled: r,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            T.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, s select, 1-7 colors"
                            })
                        ]
                    })
                }),
                T.jsx(qu, {
                    title: "Data (10x10 zone)",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: xo + 20
                    },
                    children: T.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            T.jsxs("div", {
                                children: [
                                    T.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "JSON"
                                    }),
                                    T.jsx("textarea", {
                                        value: h,
                                        onChange: (C)=>ue(C.target.value),
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            }),
                            T.jsxs("div", {
                                children: [
                                    T.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "2D Array (black cells)"
                                    }),
                                    T.jsx("textarea", {
                                        value: k,
                                        onChange: (C)=>X(C.target.value),
                                        placeholder: "Paste tensor([[1., 0.], ...]) or [[1, 0], ...]",
                                        className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    })
                                ]
                            }),
                            T.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "Edit to import. Supports ints, floats, booleans."
                            })
                        ]
                    })
                })
            ]
        });
    }
    function ig() {
        return T.jsx("div", {
            className: "grid-draw-app",
            children: T.jsx(lg, {})
        });
    }
    const na = document.getElementById("grid-draw-root");
    na && Ul.createRoot(na).render(T.jsx(fe.StrictMode, {
        children: T.jsx(ig, {})
    }));
})();
