(async ()=>{
    function vd(e, t) {
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
    function yd(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var ha = {
        exports: {}
    }, el = {}, ga = {
        exports: {}
    }, U = {};
    var Fr = Symbol.for("react.element"), wd = Symbol.for("react.portal"), xd = Symbol.for("react.fragment"), Sd = Symbol.for("react.strict_mode"), kd = Symbol.for("react.profiler"), Cd = Symbol.for("react.provider"), _d = Symbol.for("react.context"), Ed = Symbol.for("react.forward_ref"), Pd = Symbol.for("react.suspense"), Nd = Symbol.for("react.memo"), zd = Symbol.for("react.lazy"), Gs = Symbol.iterator;
    function Rd(e) {
        return e === null || typeof e != "object" ? null : (e = Gs && e[Gs] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var va = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, ya = Object.assign, wa = {};
    function Qn(e, t, n) {
        this.props = e, this.context = t, this.refs = wa, this.updater = n || va;
    }
    Qn.prototype.isReactComponent = {};
    Qn.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    Qn.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function xa() {}
    xa.prototype = Qn.prototype;
    function Gi(e, t, n) {
        this.props = e, this.context = t, this.refs = wa, this.updater = n || va;
    }
    var Wi = Gi.prototype = new xa;
    Wi.constructor = Gi;
    ya(Wi, Qn.prototype);
    Wi.isPureReactComponent = !0;
    var Ws = Array.isArray, Sa = Object.prototype.hasOwnProperty, Hi = {
        current: null
    }, ka = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Ca(e, t, n) {
        var r, o = {}, l = null, i = null;
        if (t != null) for(r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (l = "" + t.key), t)Sa.call(t, r) && !ka.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (s === 1) o.children = n;
        else if (1 < s) {
            for(var u = Array(s), a = 0; a < s; a++)u[a] = arguments[a + 2];
            o.children = u;
        }
        if (e && e.defaultProps) for(r in s = e.defaultProps, s)o[r] === void 0 && (o[r] = s[r]);
        return {
            $$typeof: Fr,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Hi.current
        };
    }
    function Id(e, t) {
        return {
            $$typeof: Fr,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function bi(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Fr;
    }
    function Td(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(n) {
            return t[n];
        });
    }
    var Hs = /\/+/g;
    function wl(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? Td("" + e.key) : t.toString(36);
    }
    function mo(e, t, n, r, o) {
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
                    case Fr:
                    case wd:
                        i = !0;
                }
        }
        if (i) return i = e, o = o(i), e = r === "" ? "." + wl(i, 0) : r, Ws(o) ? (n = "", e != null && (n = e.replace(Hs, "$&/") + "/"), mo(o, t, n, "", function(a) {
            return a;
        })) : o != null && (bi(o) && (o = Id(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Hs, "$&/") + "/") + e)), t.push(o)), 1;
        if (i = 0, r = r === "" ? "." : r + ":", Ws(e)) for(var s = 0; s < e.length; s++){
            l = e[s];
            var u = r + wl(l, s);
            i += mo(l, t, n, u, o);
        }
        else if (u = Rd(e), typeof u == "function") for(e = u.call(e), s = 0; !(l = e.next()).done;)l = l.value, u = r + wl(l, s++), i += mo(l, t, n, u, o);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return i;
    }
    function Qr(e, t, n) {
        if (e == null) return e;
        var r = [], o = 0;
        return mo(e, r, "", "", function(l) {
            return t.call(n, l, o++);
        }), r;
    }
    function Md(e) {
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
    var Pe = {
        current: null
    }, ho = {
        transition: null
    }, Ld = {
        ReactCurrentDispatcher: Pe,
        ReactCurrentBatchConfig: ho,
        ReactCurrentOwner: Hi
    };
    function _a() {
        throw Error("act(...) is not supported in production builds of React.");
    }
    U.Children = {
        map: Qr,
        forEach: function(e, t, n) {
            Qr(e, function() {
                t.apply(this, arguments);
            }, n);
        },
        count: function(e) {
            var t = 0;
            return Qr(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return Qr(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!bi(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    U.Component = Qn;
    U.Fragment = xd;
    U.Profiler = kd;
    U.PureComponent = Gi;
    U.StrictMode = Sd;
    U.Suspense = Pd;
    U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ld;
    U.act = _a;
    U.cloneElement = function(e, t, n) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var r = ya({}, e.props), o = e.key, l = e.ref, i = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (l = t.ref, i = Hi.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
            for(u in t)Sa.call(t, u) && !ka.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
        }
        var u = arguments.length - 2;
        if (u === 1) r.children = n;
        else if (1 < u) {
            s = Array(u);
            for(var a = 0; a < u; a++)s[a] = arguments[a + 2];
            r.children = s;
        }
        return {
            $$typeof: Fr,
            type: e.type,
            key: o,
            ref: l,
            props: r,
            _owner: i
        };
    };
    U.createContext = function(e) {
        return e = {
            $$typeof: _d,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: Cd,
            _context: e
        }, e.Consumer = e;
    };
    U.createElement = Ca;
    U.createFactory = function(e) {
        var t = Ca.bind(null, e);
        return t.type = e, t;
    };
    U.createRef = function() {
        return {
            current: null
        };
    };
    U.forwardRef = function(e) {
        return {
            $$typeof: Ed,
            render: e
        };
    };
    U.isValidElement = bi;
    U.lazy = function(e) {
        return {
            $$typeof: zd,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: Md
        };
    };
    U.memo = function(e, t) {
        return {
            $$typeof: Nd,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    U.startTransition = function(e) {
        var t = ho.transition;
        ho.transition = {};
        try {
            e();
        } finally{
            ho.transition = t;
        }
    };
    U.unstable_act = _a;
    U.useCallback = function(e, t) {
        return Pe.current.useCallback(e, t);
    };
    U.useContext = function(e) {
        return Pe.current.useContext(e);
    };
    U.useDebugValue = function() {};
    U.useDeferredValue = function(e) {
        return Pe.current.useDeferredValue(e);
    };
    U.useEffect = function(e, t) {
        return Pe.current.useEffect(e, t);
    };
    U.useId = function() {
        return Pe.current.useId();
    };
    U.useImperativeHandle = function(e, t, n) {
        return Pe.current.useImperativeHandle(e, t, n);
    };
    U.useInsertionEffect = function(e, t) {
        return Pe.current.useInsertionEffect(e, t);
    };
    U.useLayoutEffect = function(e, t) {
        return Pe.current.useLayoutEffect(e, t);
    };
    U.useMemo = function(e, t) {
        return Pe.current.useMemo(e, t);
    };
    U.useReducer = function(e, t, n) {
        return Pe.current.useReducer(e, t, n);
    };
    U.useRef = function(e) {
        return Pe.current.useRef(e);
    };
    U.useState = function(e) {
        return Pe.current.useState(e);
    };
    U.useSyncExternalStore = function(e, t, n) {
        return Pe.current.useSyncExternalStore(e, t, n);
    };
    U.useTransition = function() {
        return Pe.current.useTransition();
    };
    U.version = "18.3.1";
    ga.exports = U;
    var N = ga.exports;
    const q = yd(N), Ea = vd({
        __proto__: null,
        default: q
    }, [
        N
    ]);
    var Od = N, jd = Symbol.for("react.element"), Dd = Symbol.for("react.fragment"), Fd = Object.prototype.hasOwnProperty, Ad = Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ud = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function Pa(e, t, n) {
        var r, o = {}, l = null, i = null;
        n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (i = t.ref);
        for(r in t)Fd.call(t, r) && !Ud.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps) for(r in t = e.defaultProps, t)o[r] === void 0 && (o[r] = t[r]);
        return {
            $$typeof: jd,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: Ad.current
        };
    }
    el.Fragment = Dd;
    el.jsx = Pa;
    el.jsxs = Pa;
    ha.exports = el;
    var P = ha.exports, Ql = {}, Na = {
        exports: {}
    }, $e = {}, za = {
        exports: {}
    }, Ra = {};
    (function(e) {
        function t(R, j) {
            var _ = R.length;
            R.push(j);
            e: for(; 0 < _;){
                var W = _ - 1 >>> 1, J = R[W];
                if (0 < o(J, j)) R[W] = j, R[_] = J, _ = W;
                else break e;
            }
        }
        function n(R) {
            return R.length === 0 ? null : R[0];
        }
        function r(R) {
            if (R.length === 0) return null;
            var j = R[0], _ = R.pop();
            if (_ !== j) {
                R[0] = _;
                e: for(var W = 0, J = R.length, it = J >>> 1; W < it;){
                    var Re = 2 * (W + 1) - 1, oe = R[Re], Y = Re + 1, Je = R[Y];
                    if (0 > o(oe, _)) Y < J && 0 > o(Je, oe) ? (R[W] = Je, R[Y] = _, W = Y) : (R[W] = oe, R[Re] = _, W = Re);
                    else if (Y < J && 0 > o(Je, _)) R[W] = Je, R[Y] = _, W = Y;
                    else break e;
                }
            }
            return j;
        }
        function o(R, j) {
            var _ = R.sortIndex - j.sortIndex;
            return _ !== 0 ? _ : R.id - j.id;
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
        var u = [], a = [], m = 1, f = null, d = 3, g = !1, v = !1, y = !1, S = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function h(R) {
            for(var j = n(a); j !== null;){
                if (j.callback === null) r(a);
                else if (j.startTime <= R) r(a), j.sortIndex = j.expirationTime, t(u, j);
                else break;
                j = n(a);
            }
        }
        function w(R) {
            if (y = !1, h(R), !v) if (n(u) !== null) v = !0, H(C);
            else {
                var j = n(a);
                j !== null && ze(w, j.startTime - R);
            }
        }
        function C(R, j) {
            v = !1, y && (y = !1, p(x), x = -1), g = !0;
            var _ = d;
            try {
                for(h(j), f = n(u); f !== null && (!(f.expirationTime > j) || R && !G());){
                    var W = f.callback;
                    if (typeof W == "function") {
                        f.callback = null, d = f.priorityLevel;
                        var J = W(f.expirationTime <= j);
                        j = e.unstable_now(), typeof J == "function" ? f.callback = J : f === n(u) && r(u), h(j);
                    } else r(u);
                    f = n(u);
                }
                if (f !== null) var it = !0;
                else {
                    var Re = n(a);
                    Re !== null && ze(w, Re.startTime - j), it = !1;
                }
                return it;
            } finally{
                f = null, d = _, g = !1;
            }
        }
        var E = !1, z = null, x = -1, F = 5, D = -1;
        function G() {
            return !(e.unstable_now() - D < F);
        }
        function ye() {
            if (z !== null) {
                var R = e.unstable_now();
                D = R;
                var j = !0;
                try {
                    j = z(!0, R);
                } finally{
                    j ? je() : (E = !1, z = null);
                }
            } else E = !1;
        }
        var je;
        if (typeof c == "function") je = function() {
            c(ye);
        };
        else if (typeof MessageChannel < "u") {
            var We = new MessageChannel, De = We.port2;
            We.port1.onmessage = ye, je = function() {
                De.postMessage(null);
            };
        } else je = function() {
            S(ye, 0);
        };
        function H(R) {
            z = R, E || (E = !0, je());
        }
        function ze(R, j) {
            x = S(function() {
                R(e.unstable_now());
            }, j);
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
            R.callback = null;
        }, e.unstable_continueExecution = function() {
            v || g || (v = !0, H(C));
        }, e.unstable_forceFrameRate = function(R) {
            0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < R ? Math.floor(1e3 / R) : 5;
        }, e.unstable_getCurrentPriorityLevel = function() {
            return d;
        }, e.unstable_getFirstCallbackNode = function() {
            return n(u);
        }, e.unstable_next = function(R) {
            switch(d){
                case 1:
                case 2:
                case 3:
                    var j = 3;
                    break;
                default:
                    j = d;
            }
            var _ = d;
            d = j;
            try {
                return R();
            } finally{
                d = _;
            }
        }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(R, j) {
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
            var _ = d;
            d = R;
            try {
                return j();
            } finally{
                d = _;
            }
        }, e.unstable_scheduleCallback = function(R, j, _) {
            var W = e.unstable_now();
            switch(typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? W + _ : W) : _ = W, R){
                case 1:
                    var J = -1;
                    break;
                case 2:
                    J = 250;
                    break;
                case 5:
                    J = 1073741823;
                    break;
                case 4:
                    J = 1e4;
                    break;
                default:
                    J = 5e3;
            }
            return J = _ + J, R = {
                id: m++,
                callback: j,
                priorityLevel: R,
                startTime: _,
                expirationTime: J,
                sortIndex: -1
            }, _ > W ? (R.sortIndex = _, t(a, R), n(u) === null && R === n(a) && (y ? (p(x), x = -1) : y = !0, ze(w, _ - W))) : (R.sortIndex = J, t(u, R), v || g || (v = !0, H(C))), R;
        }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(R) {
            var j = d;
            return function() {
                var _ = d;
                d = j;
                try {
                    return R.apply(this, arguments);
                } finally{
                    d = _;
                }
            };
        };
    })(Ra);
    za.exports = Ra;
    var Vd = za.exports;
    var Bd = N, Be = Vd;
    function k(e) {
        for(var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var Ia = new Set, wr = {};
    function fn(e, t) {
        Un(e, t), Un(e + "Capture", t);
    }
    function Un(e, t) {
        for(wr[e] = t, e = 0; e < t.length; e++)Ia.add(t[e]);
    }
    var yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Kl = Object.prototype.hasOwnProperty, $d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, bs = {}, Qs = {};
    function Gd(e) {
        return Kl.call(Qs, e) ? !0 : Kl.call(bs, e) ? !1 : $d.test(e) ? Qs[e] = !0 : (bs[e] = !0, !1);
    }
    function Wd(e, t, n, r) {
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
    function Hd(e, t, n, r) {
        if (t === null || typeof t > "u" || Wd(e, t, n, r)) return !0;
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
    function Ne(e, t, n, r, o, l, i) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
    }
    var ve = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ve[e] = new Ne(e, 0, !1, e, null, !1, !1);
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
        ve[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ve[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Qi = /[\-:]([a-z])/g;
    function Ki(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(Qi, Ki);
        ve[t] = new Ne(t, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(Qi, Ki);
        ve[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var t = e.replace(Qi, Ki);
        ve[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    ve.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        ve[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Yi(e, t, n, r) {
        var o = ve.hasOwnProperty(t) ? ve[t] : null;
        (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Hd(t, n, o, r) && (n = null), r || o === null ? Gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var kt = Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Kr = Symbol.for("react.element"), xn = Symbol.for("react.portal"), Sn = Symbol.for("react.fragment"), Xi = Symbol.for("react.strict_mode"), Yl = Symbol.for("react.profiler"), Ta = Symbol.for("react.provider"), Ma = Symbol.for("react.context"), Zi = Symbol.for("react.forward_ref"), Xl = Symbol.for("react.suspense"), Zl = Symbol.for("react.suspense_list"), Ji = Symbol.for("react.memo"), Pt = Symbol.for("react.lazy"), La = Symbol.for("react.offscreen"), Ks = Symbol.iterator;
    function Zn(e) {
        return e === null || typeof e != "object" ? null : (e = Ks && e[Ks] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var re = Object.assign, xl;
    function ir(e) {
        if (xl === void 0) try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            xl = t && t[1] || "";
        }
        return `
` + xl + e;
    }
    var Sl = !1;
    function kl(e, t) {
        if (!e || Sl) return "";
        Sl = !0;
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
            Sl = !1, Error.prepareStackTrace = n;
        }
        return (e = e ? e.displayName || e.name : "") ? ir(e) : "";
    }
    function bd(e) {
        switch(e.tag){
            case 5:
                return ir(e.type);
            case 16:
                return ir("Lazy");
            case 13:
                return ir("Suspense");
            case 19:
                return ir("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = kl(e.type, !1), e;
            case 11:
                return e = kl(e.type.render, !1), e;
            case 1:
                return e = kl(e.type, !0), e;
            default:
                return "";
        }
    }
    function Jl(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Sn:
                return "Fragment";
            case xn:
                return "Portal";
            case Yl:
                return "Profiler";
            case Xi:
                return "StrictMode";
            case Xl:
                return "Suspense";
            case Zl:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case Ma:
                return (e.displayName || "Context") + ".Consumer";
            case Ta:
                return (e._context.displayName || "Context") + ".Provider";
            case Zi:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Ji:
                return t = e.displayName || null, t !== null ? t : Jl(e.type) || "Memo";
            case Pt:
                t = e._payload, e = e._init;
                try {
                    return Jl(e(t));
                } catch  {}
        }
        return null;
    }
    function Qd(e) {
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
                return Jl(t);
            case 8:
                return t === Xi ? "StrictMode" : "Mode";
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
    function Vt(e) {
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
    function Oa(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Kd(e) {
        var t = Oa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
    function Yr(e) {
        e._valueTracker || (e._valueTracker = Kd(e));
    }
    function ja(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(), r = "";
        return e && (r = Oa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
    }
    function No(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function ql(e, t) {
        var n = t.checked;
        return re({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: n ?? e._wrapperState.initialChecked
        });
    }
    function Ys(e, t) {
        var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
        n = Vt(t.value != null ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        };
    }
    function Da(e, t) {
        t = t.checked, t != null && Yi(e, "checked", t, !1);
    }
    function ei(e, t) {
        Da(e, t);
        var n = Vt(t.value), r = t.type;
        if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        t.hasOwnProperty("value") ? ti(e, t.type, n) : t.hasOwnProperty("defaultValue") && ti(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
    }
    function Xs(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        }
        n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
    }
    function ti(e, t, n) {
        (t !== "number" || No(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var sr = Array.isArray;
    function Ln(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for(var o = 0; o < n.length; o++)t["$" + n[o]] = !0;
            for(n = 0; n < e.length; n++)o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
        } else {
            for(n = "" + Vt(n), t = null, o = 0; o < e.length; o++){
                if (e[o].value === n) {
                    e[o].selected = !0, r && (e[o].defaultSelected = !0);
                    return;
                }
                t !== null || e[o].disabled || (t = e[o]);
            }
            t !== null && (t.selected = !0);
        }
    }
    function ni(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
        return re({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function Zs(e, t) {
        var n = t.value;
        if (n == null) {
            if (n = t.children, t = t.defaultValue, n != null) {
                if (t != null) throw Error(k(92));
                if (sr(n)) {
                    if (1 < n.length) throw Error(k(93));
                    n = n[0];
                }
                t = n;
            }
            t == null && (t = ""), n = t;
        }
        e._wrapperState = {
            initialValue: Vt(n)
        };
    }
    function Fa(e, t) {
        var n = Vt(t.value), r = Vt(t.defaultValue);
        n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
    }
    function Js(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
    }
    function Aa(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function ri(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Aa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Xr, Ua = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o);
            });
        } : e;
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for(Xr = Xr || document.createElement("div"), Xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xr.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; t.firstChild;)e.appendChild(t.firstChild);
        }
    });
    function xr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return;
            }
        }
        e.textContent = t;
    }
    var cr = {
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
    }, Yd = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(cr).forEach(function(e) {
        Yd.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), cr[t] = cr[e];
        });
    });
    function Va(e, t, n) {
        return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px";
    }
    function Ba(e, t) {
        e = e.style;
        for(var n in t)if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0, o = Va(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
        }
    }
    var Xd = re({
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
    function oi(e, t) {
        if (t) {
            if (Xd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(k(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
            }
            if (t.style != null && typeof t.style != "object") throw Error(k(62));
        }
    }
    function li(e, t) {
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
    var ii = null;
    function qi(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var si = null, On = null, jn = null;
    function qs(e) {
        if (e = Vr(e)) {
            if (typeof si != "function") throw Error(k(280));
            var t = e.stateNode;
            t && (t = ll(t), si(e.stateNode, e.type, t));
        }
    }
    function $a(e) {
        On ? jn ? jn.push(e) : jn = [
            e
        ] : On = e;
    }
    function Ga() {
        if (On) {
            var e = On, t = jn;
            if (jn = On = null, qs(e), t) for(e = 0; e < t.length; e++)qs(t[e]);
        }
    }
    function Wa(e, t) {
        return e(t);
    }
    function Ha() {}
    var Cl = !1;
    function ba(e, t, n) {
        if (Cl) return e(t, n);
        Cl = !0;
        try {
            return Wa(e, t, n);
        } finally{
            Cl = !1, (On !== null || jn !== null) && (Ha(), Ga());
        }
    }
    function Sr(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = ll(n);
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
        if (n && typeof n != "function") throw Error(k(231, t, typeof n));
        return n;
    }
    var ui = !1;
    if (yt) try {
        var Jn = {};
        Object.defineProperty(Jn, "passive", {
            get: function() {
                ui = !0;
            }
        }), window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
    } catch  {
        ui = !1;
    }
    function Zd(e, t, n, r, o, l, i, s, u) {
        var a = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, a);
        } catch (m) {
            this.onError(m);
        }
    }
    var fr = !1, zo = null, Ro = !1, ai = null, Jd = {
        onError: function(e) {
            fr = !0, zo = e;
        }
    };
    function qd(e, t, n, r, o, l, i, s, u) {
        fr = !1, zo = null, Zd.apply(Jd, arguments);
    }
    function ep(e, t, n, r, o, l, i, s, u) {
        if (qd.apply(this, arguments), fr) {
            if (fr) {
                var a = zo;
                fr = !1, zo = null;
            } else throw Error(k(198));
            Ro || (Ro = !0, ai = a);
        }
    }
    function dn(e) {
        var t = e, n = e;
        if (e.alternate) for(; t.return;)t = t.return;
        else {
            e = t;
            do t = e, t.flags & 4098 && (n = t.return), e = t.return;
            while (e);
        }
        return t.tag === 3 ? n : null;
    }
    function Qa(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
        }
        return null;
    }
    function eu(e) {
        if (dn(e) !== e) throw Error(k(188));
    }
    function tp(e) {
        var t = e.alternate;
        if (!t) {
            if (t = dn(e), t === null) throw Error(k(188));
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
                    if (l === n) return eu(o), e;
                    if (l === r) return eu(o), t;
                    l = l.sibling;
                }
                throw Error(k(188));
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
                    if (!i) throw Error(k(189));
                }
            }
            if (n.alternate !== r) throw Error(k(190));
        }
        if (n.tag !== 3) throw Error(k(188));
        return n.stateNode.current === n ? e : t;
    }
    function Ka(e) {
        return e = tp(e), e !== null ? Ya(e) : null;
    }
    function Ya(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var t = Ya(e);
            if (t !== null) return t;
            e = e.sibling;
        }
        return null;
    }
    var Xa = Be.unstable_scheduleCallback, tu = Be.unstable_cancelCallback, np = Be.unstable_shouldYield, rp = Be.unstable_requestPaint, ie = Be.unstable_now, op = Be.unstable_getCurrentPriorityLevel, es = Be.unstable_ImmediatePriority, Za = Be.unstable_UserBlockingPriority, Io = Be.unstable_NormalPriority, lp = Be.unstable_LowPriority, Ja = Be.unstable_IdlePriority, tl = null, ct = null;
    function ip(e) {
        if (ct && typeof ct.onCommitFiberRoot == "function") try {
            ct.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var rt = Math.clz32 ? Math.clz32 : ap, sp = Math.log, up = Math.LN2;
    function ap(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (sp(e) / up | 0) | 0;
    }
    var Zr = 64, Jr = 4194304;
    function ur(e) {
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
    function To(e, t) {
        var n = e.pendingLanes;
        if (n === 0) return 0;
        var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
        if (i !== 0) {
            var s = i & ~o;
            s !== 0 ? r = ur(s) : (l &= i, l !== 0 && (r = ur(l)));
        } else i = n & ~o, i !== 0 ? r = ur(i) : l !== 0 && (r = ur(l));
        if (r === 0) return 0;
        if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
        if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for(e = e.entanglements, t &= r; 0 < t;)n = 31 - rt(t), o = 1 << n, r |= e[n], t &= ~o;
        return r;
    }
    function cp(e, t) {
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
    function fp(e, t) {
        for(var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;){
            var i = 31 - rt(l), s = 1 << i, u = o[i];
            u === -1 ? (!(s & n) || s & r) && (o[i] = cp(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s;
        }
    }
    function ci(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function qa() {
        var e = Zr;
        return Zr <<= 1, !(Zr & 4194240) && (Zr = 64), e;
    }
    function _l(e) {
        for(var t = [], n = 0; 31 > n; n++)t.push(e);
        return t;
    }
    function Ar(e, t, n) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - rt(t), e[t] = n;
    }
    function dp(e, t) {
        var n = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < n;){
            var o = 31 - rt(n), l = 1 << o;
            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
        }
    }
    function ts(e, t) {
        var n = e.entangledLanes |= t;
        for(e = e.entanglements; n;){
            var r = 31 - rt(n), o = 1 << r;
            o & t | e[r] & t && (e[r] |= t), n &= ~o;
        }
    }
    var $ = 0;
    function ec(e) {
        return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
    }
    var tc, ns, nc, rc, oc, fi = !1, qr = [], Mt = null, Lt = null, Ot = null, kr = new Map, Cr = new Map, zt = [], pp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function nu(e, t) {
        switch(e){
            case "focusin":
            case "focusout":
                Mt = null;
                break;
            case "dragenter":
            case "dragleave":
                Lt = null;
                break;
            case "mouseover":
            case "mouseout":
                Ot = null;
                break;
            case "pointerover":
            case "pointerout":
                kr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Cr.delete(t.pointerId);
        }
    }
    function qn(e, t, n, r, o, l) {
        return e === null || e.nativeEvent !== l ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [
                o
            ]
        }, t !== null && (t = Vr(t), t !== null && ns(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function mp(e, t, n, r, o) {
        switch(t){
            case "focusin":
                return Mt = qn(Mt, e, t, n, r, o), !0;
            case "dragenter":
                return Lt = qn(Lt, e, t, n, r, o), !0;
            case "mouseover":
                return Ot = qn(Ot, e, t, n, r, o), !0;
            case "pointerover":
                var l = o.pointerId;
                return kr.set(l, qn(kr.get(l) || null, e, t, n, r, o)), !0;
            case "gotpointercapture":
                return l = o.pointerId, Cr.set(l, qn(Cr.get(l) || null, e, t, n, r, o)), !0;
        }
        return !1;
    }
    function lc(e) {
        var t = qt(e.target);
        if (t !== null) {
            var n = dn(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = Qa(n), t !== null) {
                        e.blockedOn = t, oc(e.priority, function() {
                            nc(n);
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
    function go(e) {
        if (e.blockedOn !== null) return !1;
        for(var t = e.targetContainers; 0 < t.length;){
            var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type, n);
                ii = r, n.target.dispatchEvent(r), ii = null;
            } else return t = Vr(n), t !== null && ns(t), e.blockedOn = n, !1;
            t.shift();
        }
        return !0;
    }
    function ru(e, t, n) {
        go(e) && n.delete(t);
    }
    function hp() {
        fi = !1, Mt !== null && go(Mt) && (Mt = null), Lt !== null && go(Lt) && (Lt = null), Ot !== null && go(Ot) && (Ot = null), kr.forEach(ru), Cr.forEach(ru);
    }
    function er(e, t) {
        e.blockedOn === t && (e.blockedOn = null, fi || (fi = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, hp)));
    }
    function _r(e) {
        function t(o) {
            return er(o, e);
        }
        if (0 < qr.length) {
            er(qr[0], e);
            for(var n = 1; n < qr.length; n++){
                var r = qr[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Mt !== null && er(Mt, e), Lt !== null && er(Lt, e), Ot !== null && er(Ot, e), kr.forEach(t), Cr.forEach(t), n = 0; n < zt.length; n++)r = zt[n], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < zt.length && (n = zt[0], n.blockedOn === null);)lc(n), n.blockedOn === null && zt.shift();
    }
    var Dn = kt.ReactCurrentBatchConfig, Mo = !0;
    function gp(e, t, n, r) {
        var o = $, l = Dn.transition;
        Dn.transition = null;
        try {
            $ = 1, rs(e, t, n, r);
        } finally{
            $ = o, Dn.transition = l;
        }
    }
    function vp(e, t, n, r) {
        var o = $, l = Dn.transition;
        Dn.transition = null;
        try {
            $ = 4, rs(e, t, n, r);
        } finally{
            $ = o, Dn.transition = l;
        }
    }
    function rs(e, t, n, r) {
        if (Mo) {
            var o = di(e, t, n, r);
            if (o === null) Ol(e, t, r, Lo, n), nu(e, r);
            else if (mp(o, e, t, n, r)) r.stopPropagation();
            else if (nu(e, r), t & 4 && -1 < pp.indexOf(e)) {
                for(; o !== null;){
                    var l = Vr(o);
                    if (l !== null && tc(l), l = di(e, t, n, r), l === null && Ol(e, t, r, Lo, n), l === o) break;
                    o = l;
                }
                o !== null && r.stopPropagation();
            } else Ol(e, t, r, null, n);
        }
    }
    var Lo = null;
    function di(e, t, n, r) {
        if (Lo = null, e = qi(r), e = qt(e), e !== null) if (t = dn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
            if (e = Qa(t), e !== null) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
        return Lo = e, null;
    }
    function ic(e) {
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
                switch(op()){
                    case es:
                        return 1;
                    case Za:
                        return 4;
                    case Io:
                    case lp:
                        return 16;
                    case Ja:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var It = null, os = null, vo = null;
    function sc() {
        if (vo) return vo;
        var e, t = os, n = t.length, r, o = "value" in It ? It.value : It.textContent, l = o.length;
        for(e = 0; e < n && t[e] === o[e]; e++);
        var i = n - e;
        for(r = 1; r <= i && t[n - r] === o[l - r]; r++);
        return vo = o.slice(e, 1 < r ? 1 - r : void 0);
    }
    function yo(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function eo() {
        return !0;
    }
    function ou() {
        return !1;
    }
    function Ge(e) {
        function t(n, r, o, l, i) {
            this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
            for(var s in e)e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
            return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? eo : ou, this.isPropagationStopped = ou, this;
        }
        return re(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = eo);
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = eo);
            },
            persist: function() {},
            isPersistent: eo
        }), t;
    }
    var Kn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, ls = Ge(Kn), Ur = re({}, Kn, {
        view: 0,
        detail: 0
    }), yp = Ge(Ur), El, Pl, tr, nl = re({}, Ur, {
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
        getModifierState: is,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== tr && (tr && e.type === "mousemove" ? (El = e.screenX - tr.screenX, Pl = e.screenY - tr.screenY) : Pl = El = 0, tr = e), El);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Pl;
        }
    }), lu = Ge(nl), wp = re({}, nl, {
        dataTransfer: 0
    }), xp = Ge(wp), Sp = re({}, Ur, {
        relatedTarget: 0
    }), Nl = Ge(Sp), kp = re({}, Kn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Cp = Ge(kp), _p = re({}, Kn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), Ep = Ge(_p), Pp = re({}, Kn, {
        data: 0
    }), iu = Ge(Pp), Np = {
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
    }, zp = {
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
    }, Rp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Ip(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Rp[e]) ? !!t[e] : !1;
    }
    function is() {
        return Ip;
    }
    var Tp = re({}, Ur, {
        key: function(e) {
            if (e.key) {
                var t = Np[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? (e = yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zp[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: is,
        charCode: function(e) {
            return e.type === "keypress" ? yo(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), Mp = Ge(Tp), Lp = re({}, nl, {
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
    }), su = Ge(Lp), Op = re({}, Ur, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: is
    }), jp = Ge(Op), Dp = re({}, Kn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Fp = Ge(Dp), Ap = re({}, nl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Up = Ge(Ap), Vp = [
        9,
        13,
        27,
        32
    ], ss = yt && "CompositionEvent" in window, dr = null;
    yt && "documentMode" in document && (dr = document.documentMode);
    var Bp = yt && "TextEvent" in window && !dr, uc = yt && (!ss || dr && 8 < dr && 11 >= dr), uu = " ", au = !1;
    function ac(e, t) {
        switch(e){
            case "keyup":
                return Vp.indexOf(t.keyCode) !== -1;
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
    function cc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var kn = !1;
    function $p(e, t) {
        switch(e){
            case "compositionend":
                return cc(t);
            case "keypress":
                return t.which !== 32 ? null : (au = !0, uu);
            case "textInput":
                return e = t.data, e === uu && au ? null : e;
            default:
                return null;
        }
    }
    function Gp(e, t) {
        if (kn) return e === "compositionend" || !ss && ac(e, t) ? (e = sc(), vo = os = It = null, kn = !1, e) : null;
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
                return uc && t.locale !== "ko" ? null : t.data;
            default:
                return null;
        }
    }
    var Wp = {
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
    function cu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Wp[e.type] : t === "textarea";
    }
    function fc(e, t, n, r) {
        $a(r), t = Oo(t, "onChange"), 0 < t.length && (n = new ls("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }));
    }
    var pr = null, Er = null;
    function Hp(e) {
        kc(e, 0);
    }
    function rl(e) {
        var t = En(e);
        if (ja(t)) return e;
    }
    function bp(e, t) {
        if (e === "change") return t;
    }
    var dc = !1;
    if (yt) {
        var zl;
        if (yt) {
            var Rl = "oninput" in document;
            if (!Rl) {
                var fu = document.createElement("div");
                fu.setAttribute("oninput", "return;"), Rl = typeof fu.oninput == "function";
            }
            zl = Rl;
        } else zl = !1;
        dc = zl && (!document.documentMode || 9 < document.documentMode);
    }
    function du() {
        pr && (pr.detachEvent("onpropertychange", pc), Er = pr = null);
    }
    function pc(e) {
        if (e.propertyName === "value" && rl(Er)) {
            var t = [];
            fc(t, Er, e, qi(e)), ba(Hp, t);
        }
    }
    function Qp(e, t, n) {
        e === "focusin" ? (du(), pr = t, Er = n, pr.attachEvent("onpropertychange", pc)) : e === "focusout" && du();
    }
    function Kp(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return rl(Er);
    }
    function Yp(e, t) {
        if (e === "click") return rl(t);
    }
    function Xp(e, t) {
        if (e === "input" || e === "change") return rl(t);
    }
    function Zp(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var lt = typeof Object.is == "function" ? Object.is : Zp;
    function Pr(e, t) {
        if (lt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e), r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for(r = 0; r < n.length; r++){
            var o = n[r];
            if (!Kl.call(t, o) || !lt(e[o], t[o])) return !1;
        }
        return !0;
    }
    function pu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function mu(e, t) {
        var n = pu(e);
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
            n = pu(n);
        }
    }
    function mc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function hc() {
        for(var e = window, t = No(); t instanceof e.HTMLIFrameElement;){
            try {
                var n = typeof t.contentWindow.location.href == "string";
            } catch  {
                n = !1;
            }
            if (n) e = t.contentWindow;
            else break;
            t = No(e.document);
        }
        return t;
    }
    function us(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Jp(e) {
        var t = hc(), n = e.focusedElem, r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && mc(n.ownerDocument.documentElement, n)) {
            if (r !== null && us(n)) {
                if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var o = n.textContent.length, l = Math.min(r.start, o);
                    r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = mu(n, l);
                    var i = mu(n, r);
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
    var qp = yt && "documentMode" in document && 11 >= document.documentMode, Cn = null, pi = null, mr = null, mi = !1;
    function hu(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        mi || Cn == null || Cn !== No(r) || (r = Cn, "selectionStart" in r && us(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), mr && Pr(mr, r) || (mr = r, r = Oo(pi, "onSelect"), 0 < r.length && (t = new ls("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = Cn)));
    }
    function to(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var _n = {
        animationend: to("Animation", "AnimationEnd"),
        animationiteration: to("Animation", "AnimationIteration"),
        animationstart: to("Animation", "AnimationStart"),
        transitionend: to("Transition", "TransitionEnd")
    }, Il = {}, gc = {};
    yt && (gc = document.createElement("div").style, "AnimationEvent" in window || (delete _n.animationend.animation, delete _n.animationiteration.animation, delete _n.animationstart.animation), "TransitionEvent" in window || delete _n.transitionend.transition);
    function ol(e) {
        if (Il[e]) return Il[e];
        if (!_n[e]) return e;
        var t = _n[e], n;
        for(n in t)if (t.hasOwnProperty(n) && n in gc) return Il[e] = t[n];
        return e;
    }
    var vc = ol("animationend"), yc = ol("animationiteration"), wc = ol("animationstart"), xc = ol("transitionend"), Sc = new Map, gu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function $t(e, t) {
        Sc.set(e, t), fn(t, [
            e
        ]);
    }
    for(var Tl = 0; Tl < gu.length; Tl++){
        var Ml = gu[Tl], em = Ml.toLowerCase(), tm = Ml[0].toUpperCase() + Ml.slice(1);
        $t(em, "on" + tm);
    }
    $t(vc, "onAnimationEnd");
    $t(yc, "onAnimationIteration");
    $t(wc, "onAnimationStart");
    $t("dblclick", "onDoubleClick");
    $t("focusin", "onFocus");
    $t("focusout", "onBlur");
    $t(xc, "onTransitionEnd");
    Un("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    Un("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    Un("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    Un("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    fn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    fn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), nm = new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));
    function vu(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = n, ep(r, t, void 0, e), e.currentTarget = null;
    }
    function kc(e, t) {
        t = (t & 4) !== 0;
        for(var n = 0; n < e.length; n++){
            var r = e[n], o = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t) for(var i = r.length - 1; 0 <= i; i--){
                    var s = r[i], u = s.instance, a = s.currentTarget;
                    if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    vu(o, s, a), l = u;
                }
                else for(i = 0; i < r.length; i++){
                    if (s = r[i], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    vu(o, s, a), l = u;
                }
            }
        }
        if (Ro) throw e = ai, Ro = !1, ai = null, e;
    }
    function X(e, t) {
        var n = t[wi];
        n === void 0 && (n = t[wi] = new Set);
        var r = e + "__bubble";
        n.has(r) || (Cc(t, e, 2, !1), n.add(r));
    }
    function Ll(e, t, n) {
        var r = 0;
        t && (r |= 4), Cc(n, e, r, t);
    }
    var no = "_reactListening" + Math.random().toString(36).slice(2);
    function Nr(e) {
        if (!e[no]) {
            e[no] = !0, Ia.forEach(function(n) {
                n !== "selectionchange" && (nm.has(n) || Ll(n, !1, e), Ll(n, !0, e));
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[no] || (t[no] = !0, Ll("selectionchange", !1, t));
        }
    }
    function Cc(e, t, n, r) {
        switch(ic(t)){
            case 1:
                var o = gp;
                break;
            case 4:
                o = vp;
                break;
            default:
                o = rs;
        }
        n = o.bind(null, t, n, e), o = void 0, !ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: o
        }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
            passive: o
        }) : e.addEventListener(t, n, !1);
    }
    function Ol(e, t, n, r, o) {
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
                    if (i = qt(s), i === null) return;
                    if (u = i.tag, u === 5 || u === 6) {
                        r = l = i;
                        continue e;
                    }
                    s = s.parentNode;
                }
            }
            r = r.return;
        }
        ba(function() {
            var a = l, m = qi(n), f = [];
            e: {
                var d = Sc.get(e);
                if (d !== void 0) {
                    var g = ls, v = e;
                    switch(e){
                        case "keypress":
                            if (yo(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            g = Mp;
                            break;
                        case "focusin":
                            v = "focus", g = Nl;
                            break;
                        case "focusout":
                            v = "blur", g = Nl;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            g = Nl;
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
                            g = lu;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            g = xp;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            g = jp;
                            break;
                        case vc:
                        case yc:
                        case wc:
                            g = Cp;
                            break;
                        case xc:
                            g = Fp;
                            break;
                        case "scroll":
                            g = yp;
                            break;
                        case "wheel":
                            g = Up;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            g = Ep;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            g = su;
                    }
                    var y = (t & 4) !== 0, S = !y && e === "scroll", p = y ? d !== null ? d + "Capture" : null : d;
                    y = [];
                    for(var c = a, h; c !== null;){
                        h = c;
                        var w = h.stateNode;
                        if (h.tag === 5 && w !== null && (h = w, p !== null && (w = Sr(c, p), w != null && y.push(zr(c, w, h)))), S) break;
                        c = c.return;
                    }
                    0 < y.length && (d = new g(d, v, null, n, m), f.push({
                        event: d,
                        listeners: y
                    }));
                }
            }
            if (!(t & 7)) {
                e: {
                    if (d = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", d && n !== ii && (v = n.relatedTarget || n.fromElement) && (qt(v) || v[wt])) break e;
                    if ((g || d) && (d = m.window === m ? m : (d = m.ownerDocument) ? d.defaultView || d.parentWindow : window, g ? (v = n.relatedTarget || n.toElement, g = a, v = v ? qt(v) : null, v !== null && (S = dn(v), v !== S || v.tag !== 5 && v.tag !== 6) && (v = null)) : (g = null, v = a), g !== v)) {
                        if (y = lu, w = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = su, w = "onPointerLeave", p = "onPointerEnter", c = "pointer"), S = g == null ? d : En(g), h = v == null ? d : En(v), d = new y(w, c + "leave", g, n, m), d.target = S, d.relatedTarget = h, w = null, qt(m) === a && (y = new y(p, c + "enter", v, n, m), y.target = h, y.relatedTarget = S, w = y), S = w, g && v) t: {
                            for(y = g, p = v, c = 0, h = y; h; h = wn(h))c++;
                            for(h = 0, w = p; w; w = wn(w))h++;
                            for(; 0 < c - h;)y = wn(y), c--;
                            for(; 0 < h - c;)p = wn(p), h--;
                            for(; c--;){
                                if (y === p || p !== null && y === p.alternate) break t;
                                y = wn(y), p = wn(p);
                            }
                            y = null;
                        }
                        else y = null;
                        g !== null && yu(f, d, g, y, !1), v !== null && S !== null && yu(f, S, v, y, !0);
                    }
                }
                e: {
                    if (d = a ? En(a) : window, g = d.nodeName && d.nodeName.toLowerCase(), g === "select" || g === "input" && d.type === "file") var C = bp;
                    else if (cu(d)) if (dc) C = Xp;
                    else {
                        C = Kp;
                        var E = Qp;
                    }
                    else (g = d.nodeName) && g.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (C = Yp);
                    if (C && (C = C(e, a))) {
                        fc(f, C, n, m);
                        break e;
                    }
                    E && E(e, d, a), e === "focusout" && (E = d._wrapperState) && E.controlled && d.type === "number" && ti(d, "number", d.value);
                }
                switch(E = a ? En(a) : window, e){
                    case "focusin":
                        (cu(E) || E.contentEditable === "true") && (Cn = E, pi = a, mr = null);
                        break;
                    case "focusout":
                        mr = pi = Cn = null;
                        break;
                    case "mousedown":
                        mi = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        mi = !1, hu(f, n, m);
                        break;
                    case "selectionchange":
                        if (qp) break;
                    case "keydown":
                    case "keyup":
                        hu(f, n, m);
                }
                var z;
                if (ss) e: {
                    switch(e){
                        case "compositionstart":
                            var x = "onCompositionStart";
                            break e;
                        case "compositionend":
                            x = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            x = "onCompositionUpdate";
                            break e;
                    }
                    x = void 0;
                }
                else kn ? ac(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
                x && (uc && n.locale !== "ko" && (kn || x !== "onCompositionStart" ? x === "onCompositionEnd" && kn && (z = sc()) : (It = m, os = "value" in It ? It.value : It.textContent, kn = !0)), E = Oo(a, x), 0 < E.length && (x = new iu(x, e, null, n, m), f.push({
                    event: x,
                    listeners: E
                }), z ? x.data = z : (z = cc(n), z !== null && (x.data = z)))), (z = Bp ? $p(e, n) : Gp(e, n)) && (a = Oo(a, "onBeforeInput"), 0 < a.length && (m = new iu("onBeforeInput", "beforeinput", null, n, m), f.push({
                    event: m,
                    listeners: a
                }), m.data = z));
            }
            kc(f, t);
        });
    }
    function zr(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        };
    }
    function Oo(e, t) {
        for(var n = t + "Capture", r = []; e !== null;){
            var o = e, l = o.stateNode;
            o.tag === 5 && l !== null && (o = l, l = Sr(e, n), l != null && r.unshift(zr(e, l, o)), l = Sr(e, t), l != null && r.push(zr(e, l, o))), e = e.return;
        }
        return r;
    }
    function wn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5);
        return e || null;
    }
    function yu(e, t, n, r, o) {
        for(var l = t._reactName, i = []; n !== null && n !== r;){
            var s = n, u = s.alternate, a = s.stateNode;
            if (u !== null && u === r) break;
            s.tag === 5 && a !== null && (s = a, o ? (u = Sr(n, l), u != null && i.unshift(zr(n, u, s))) : o || (u = Sr(n, l), u != null && i.push(zr(n, u, s)))), n = n.return;
        }
        i.length !== 0 && e.push({
            event: t,
            listeners: i
        });
    }
    var rm = /\r\n?/g, om = /\u0000|\uFFFD/g;
    function wu(e) {
        return (typeof e == "string" ? e : "" + e).replace(rm, `
`).replace(om, "");
    }
    function ro(e, t, n) {
        if (t = wu(t), wu(e) !== t && n) throw Error(k(425));
    }
    function jo() {}
    var hi = null, gi = null;
    function vi(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var yi = typeof setTimeout == "function" ? setTimeout : void 0, lm = typeof clearTimeout == "function" ? clearTimeout : void 0, xu = typeof Promise == "function" ? Promise : void 0, im = typeof queueMicrotask == "function" ? queueMicrotask : typeof xu < "u" ? function(e) {
        return xu.resolve(null).then(e).catch(sm);
    } : yi;
    function sm(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function jl(e, t) {
        var n = t, r = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), _r(t);
                    return;
                }
                r--;
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
            n = o;
        }while (n);
        _r(t);
    }
    function jt(e) {
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
    function Su(e) {
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
    var Yn = Math.random().toString(36).slice(2), at = "__reactFiber$" + Yn, Rr = "__reactProps$" + Yn, wt = "__reactContainer$" + Yn, wi = "__reactEvents$" + Yn, um = "__reactListeners$" + Yn, am = "__reactHandles$" + Yn;
    function qt(e) {
        var t = e[at];
        if (t) return t;
        for(var n = e.parentNode; n;){
            if (t = n[wt] || n[at]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for(e = Su(e); e !== null;){
                    if (n = e[at]) return n;
                    e = Su(e);
                }
                return t;
            }
            e = n, n = e.parentNode;
        }
        return null;
    }
    function Vr(e) {
        return e = e[at] || e[wt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function En(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(k(33));
    }
    function ll(e) {
        return e[Rr] || null;
    }
    var xi = [], Pn = -1;
    function Gt(e) {
        return {
            current: e
        };
    }
    function Z(e) {
        0 > Pn || (e.current = xi[Pn], xi[Pn] = null, Pn--);
    }
    function K(e, t) {
        Pn++, xi[Pn] = e.current, e.current = t;
    }
    var Bt = {}, ke = Gt(Bt), Me = Gt(!1), ln = Bt;
    function Vn(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Bt;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o = {}, l;
        for(l in n)o[l] = t[l];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
    }
    function Le(e) {
        return e = e.childContextTypes, e != null;
    }
    function Do() {
        Z(Me), Z(ke);
    }
    function ku(e, t, n) {
        if (ke.current !== Bt) throw Error(k(168));
        K(ke, t), K(Me, n);
    }
    function _c(e, t, n) {
        var r = e.stateNode;
        if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
        r = r.getChildContext();
        for(var o in r)if (!(o in t)) throw Error(k(108, Qd(e) || "Unknown", o));
        return re({}, n, r);
    }
    function Fo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Bt, ln = ke.current, K(ke, e), K(Me, Me.current), !0;
    }
    function Cu(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(k(169));
        n ? (e = _c(e, t, ln), r.__reactInternalMemoizedMergedChildContext = e, Z(Me), Z(ke), K(ke, e)) : Z(Me), K(Me, n);
    }
    var mt = null, il = !1, Dl = !1;
    function Ec(e) {
        mt === null ? mt = [
            e
        ] : mt.push(e);
    }
    function cm(e) {
        il = !0, Ec(e);
    }
    function Wt() {
        if (!Dl && mt !== null) {
            Dl = !0;
            var e = 0, t = $;
            try {
                var n = mt;
                for($ = 1; e < n.length; e++){
                    var r = n[e];
                    do r = r(!0);
                    while (r !== null);
                }
                mt = null, il = !1;
            } catch (o) {
                throw mt !== null && (mt = mt.slice(e + 1)), Xa(es, Wt), o;
            } finally{
                $ = t, Dl = !1;
            }
        }
        return null;
    }
    var Nn = [], zn = 0, Ao = null, Uo = 0, be = [], Qe = 0, sn = null, ht = 1, gt = "";
    function Zt(e, t) {
        Nn[zn++] = Uo, Nn[zn++] = Ao, Ao = e, Uo = t;
    }
    function Pc(e, t, n) {
        be[Qe++] = ht, be[Qe++] = gt, be[Qe++] = sn, sn = e;
        var r = ht;
        e = gt;
        var o = 32 - rt(r) - 1;
        r &= ~(1 << o), n += 1;
        var l = 32 - rt(t) + o;
        if (30 < l) {
            var i = o - o % 5;
            l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, ht = 1 << 32 - rt(t) + o | n << o | r, gt = l + e;
        } else ht = 1 << l | n << o | r, gt = e;
    }
    function as(e) {
        e.return !== null && (Zt(e, 1), Pc(e, 1, 0));
    }
    function cs(e) {
        for(; e === Ao;)Ao = Nn[--zn], Nn[zn] = null, Uo = Nn[--zn], Nn[zn] = null;
        for(; e === sn;)sn = be[--Qe], be[Qe] = null, gt = be[--Qe], be[Qe] = null, ht = be[--Qe], be[Qe] = null;
    }
    var Ve = null, Ue = null, ee = !1, nt = null;
    function Nc(e, t) {
        var n = Ke(5, null, null, 0);
        n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
            n
        ], e.flags |= 16) : t.push(n);
    }
    function _u(e, t) {
        switch(e.tag){
            case 5:
                var n = e.type;
                return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ue = jt(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, Ue = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (n = sn !== null ? {
                    id: ht,
                    overflow: gt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824
                }, n = Ke(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, Ue = null, !0) : !1;
            default:
                return !1;
        }
    }
    function Si(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function ki(e) {
        if (ee) {
            var t = Ue;
            if (t) {
                var n = t;
                if (!_u(e, t)) {
                    if (Si(e)) throw Error(k(418));
                    t = jt(n.nextSibling);
                    var r = Ve;
                    t && _u(e, t) ? Nc(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Ve = e);
                }
            } else {
                if (Si(e)) throw Error(k(418));
                e.flags = e.flags & -4097 | 2, ee = !1, Ve = e;
            }
        }
    }
    function Eu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        Ve = e;
    }
    function oo(e) {
        if (e !== Ve) return !1;
        if (!ee) return Eu(e), ee = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !vi(e.type, e.memoizedProps)), t && (t = Ue)) {
            if (Si(e)) throw zc(), Error(k(418));
            for(; t;)Nc(e, t), t = jt(t.nextSibling);
        }
        if (Eu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
            e: {
                for(e = e.nextSibling, t = 0; e;){
                    if (e.nodeType === 8) {
                        var n = e.data;
                        if (n === "/$") {
                            if (t === 0) {
                                Ue = jt(e.nextSibling);
                                break e;
                            }
                            t--;
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    }
                    e = e.nextSibling;
                }
                Ue = null;
            }
        } else Ue = Ve ? jt(e.stateNode.nextSibling) : null;
        return !0;
    }
    function zc() {
        for(var e = Ue; e;)e = jt(e.nextSibling);
    }
    function Bn() {
        Ue = Ve = null, ee = !1;
    }
    function fs(e) {
        nt === null ? nt = [
            e
        ] : nt.push(e);
    }
    var fm = kt.ReactCurrentBatchConfig;
    function nr(e, t, n) {
        if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (n._owner) {
                if (n = n._owner, n) {
                    if (n.tag !== 1) throw Error(k(309));
                    var r = n.stateNode;
                }
                if (!r) throw Error(k(147, e));
                var o = r, l = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
                    var s = o.refs;
                    i === null ? delete s[l] : s[l] = i;
                }, t._stringRef = l, t);
            }
            if (typeof e != "string") throw Error(k(284));
            if (!n._owner) throw Error(k(290, e));
        }
        return e;
    }
    function lo(e, t) {
        throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
    }
    function Pu(e) {
        var t = e._init;
        return t(e._payload);
    }
    function Rc(e) {
        function t(p, c) {
            if (e) {
                var h = p.deletions;
                h === null ? (p.deletions = [
                    c
                ], p.flags |= 16) : h.push(c);
            }
        }
        function n(p, c) {
            if (!e) return null;
            for(; c !== null;)t(p, c), c = c.sibling;
            return null;
        }
        function r(p, c) {
            for(p = new Map; c !== null;)c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
            return p;
        }
        function o(p, c) {
            return p = Ut(p, c), p.index = 0, p.sibling = null, p;
        }
        function l(p, c, h) {
            return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < c ? (p.flags |= 2, c) : h) : (p.flags |= 2, c)) : (p.flags |= 1048576, c);
        }
        function i(p) {
            return e && p.alternate === null && (p.flags |= 2), p;
        }
        function s(p, c, h, w) {
            return c === null || c.tag !== 6 ? (c = Gl(h, p.mode, w), c.return = p, c) : (c = o(c, h), c.return = p, c);
        }
        function u(p, c, h, w) {
            var C = h.type;
            return C === Sn ? m(p, c, h.props.children, w, h.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pt && Pu(C) === c.type) ? (w = o(c, h.props), w.ref = nr(p, c, h), w.return = p, w) : (w = Eo(h.type, h.key, h.props, null, p.mode, w), w.ref = nr(p, c, h), w.return = p, w);
        }
        function a(p, c, h, w) {
            return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Wl(h, p.mode, w), c.return = p, c) : (c = o(c, h.children || []), c.return = p, c);
        }
        function m(p, c, h, w, C) {
            return c === null || c.tag !== 7 ? (c = rn(h, p.mode, w, C), c.return = p, c) : (c = o(c, h), c.return = p, c);
        }
        function f(p, c, h) {
            if (typeof c == "string" && c !== "" || typeof c == "number") return c = Gl("" + c, p.mode, h), c.return = p, c;
            if (typeof c == "object" && c !== null) {
                switch(c.$$typeof){
                    case Kr:
                        return h = Eo(c.type, c.key, c.props, null, p.mode, h), h.ref = nr(p, null, c), h.return = p, h;
                    case xn:
                        return c = Wl(c, p.mode, h), c.return = p, c;
                    case Pt:
                        var w = c._init;
                        return f(p, w(c._payload), h);
                }
                if (sr(c) || Zn(c)) return c = rn(c, p.mode, h, null), c.return = p, c;
                lo(p, c);
            }
            return null;
        }
        function d(p, c, h, w) {
            var C = c !== null ? c.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : s(p, c, "" + h, w);
            if (typeof h == "object" && h !== null) {
                switch(h.$$typeof){
                    case Kr:
                        return h.key === C ? u(p, c, h, w) : null;
                    case xn:
                        return h.key === C ? a(p, c, h, w) : null;
                    case Pt:
                        return C = h._init, d(p, c, C(h._payload), w);
                }
                if (sr(h) || Zn(h)) return C !== null ? null : m(p, c, h, w, null);
                lo(p, h);
            }
            return null;
        }
        function g(p, c, h, w, C) {
            if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(h) || null, s(c, p, "" + w, C);
            if (typeof w == "object" && w !== null) {
                switch(w.$$typeof){
                    case Kr:
                        return p = p.get(w.key === null ? h : w.key) || null, u(c, p, w, C);
                    case xn:
                        return p = p.get(w.key === null ? h : w.key) || null, a(c, p, w, C);
                    case Pt:
                        var E = w._init;
                        return g(p, c, h, E(w._payload), C);
                }
                if (sr(w) || Zn(w)) return p = p.get(h) || null, m(c, p, w, C, null);
                lo(c, w);
            }
            return null;
        }
        function v(p, c, h, w) {
            for(var C = null, E = null, z = c, x = c = 0, F = null; z !== null && x < h.length; x++){
                z.index > x ? (F = z, z = null) : F = z.sibling;
                var D = d(p, z, h[x], w);
                if (D === null) {
                    z === null && (z = F);
                    break;
                }
                e && z && D.alternate === null && t(p, z), c = l(D, c, x), E === null ? C = D : E.sibling = D, E = D, z = F;
            }
            if (x === h.length) return n(p, z), ee && Zt(p, x), C;
            if (z === null) {
                for(; x < h.length; x++)z = f(p, h[x], w), z !== null && (c = l(z, c, x), E === null ? C = z : E.sibling = z, E = z);
                return ee && Zt(p, x), C;
            }
            for(z = r(p, z); x < h.length; x++)F = g(z, p, x, h[x], w), F !== null && (e && F.alternate !== null && z.delete(F.key === null ? x : F.key), c = l(F, c, x), E === null ? C = F : E.sibling = F, E = F);
            return e && z.forEach(function(G) {
                return t(p, G);
            }), ee && Zt(p, x), C;
        }
        function y(p, c, h, w) {
            var C = Zn(h);
            if (typeof C != "function") throw Error(k(150));
            if (h = C.call(h), h == null) throw Error(k(151));
            for(var E = C = null, z = c, x = c = 0, F = null, D = h.next(); z !== null && !D.done; x++, D = h.next()){
                z.index > x ? (F = z, z = null) : F = z.sibling;
                var G = d(p, z, D.value, w);
                if (G === null) {
                    z === null && (z = F);
                    break;
                }
                e && z && G.alternate === null && t(p, z), c = l(G, c, x), E === null ? C = G : E.sibling = G, E = G, z = F;
            }
            if (D.done) return n(p, z), ee && Zt(p, x), C;
            if (z === null) {
                for(; !D.done; x++, D = h.next())D = f(p, D.value, w), D !== null && (c = l(D, c, x), E === null ? C = D : E.sibling = D, E = D);
                return ee && Zt(p, x), C;
            }
            for(z = r(p, z); !D.done; x++, D = h.next())D = g(z, p, x, D.value, w), D !== null && (e && D.alternate !== null && z.delete(D.key === null ? x : D.key), c = l(D, c, x), E === null ? C = D : E.sibling = D, E = D);
            return e && z.forEach(function(ye) {
                return t(p, ye);
            }), ee && Zt(p, x), C;
        }
        function S(p, c, h, w) {
            if (typeof h == "object" && h !== null && h.type === Sn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                switch(h.$$typeof){
                    case Kr:
                        e: {
                            for(var C = h.key, E = c; E !== null;){
                                if (E.key === C) {
                                    if (C = h.type, C === Sn) {
                                        if (E.tag === 7) {
                                            n(p, E.sibling), c = o(E, h.props.children), c.return = p, p = c;
                                            break e;
                                        }
                                    } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Pt && Pu(C) === E.type) {
                                        n(p, E.sibling), c = o(E, h.props), c.ref = nr(p, E, h), c.return = p, p = c;
                                        break e;
                                    }
                                    n(p, E);
                                    break;
                                } else t(p, E);
                                E = E.sibling;
                            }
                            h.type === Sn ? (c = rn(h.props.children, p.mode, w, h.key), c.return = p, p = c) : (w = Eo(h.type, h.key, h.props, null, p.mode, w), w.ref = nr(p, c, h), w.return = p, p = w);
                        }
                        return i(p);
                    case xn:
                        e: {
                            for(E = h.key; c !== null;){
                                if (c.key === E) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                                    n(p, c.sibling), c = o(c, h.children || []), c.return = p, p = c;
                                    break e;
                                } else {
                                    n(p, c);
                                    break;
                                }
                                else t(p, c);
                                c = c.sibling;
                            }
                            c = Wl(h, p.mode, w), c.return = p, p = c;
                        }
                        return i(p);
                    case Pt:
                        return E = h._init, S(p, c, E(h._payload), w);
                }
                if (sr(h)) return v(p, c, h, w);
                if (Zn(h)) return y(p, c, h, w);
                lo(p, h);
            }
            return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(p, c.sibling), c = o(c, h), c.return = p, p = c) : (n(p, c), c = Gl(h, p.mode, w), c.return = p, p = c), i(p)) : n(p, c);
        }
        return S;
    }
    var $n = Rc(!0), Ic = Rc(!1), Vo = Gt(null), Bo = null, Rn = null, ds = null;
    function ps() {
        ds = Rn = Bo = null;
    }
    function ms(e) {
        var t = Vo.current;
        Z(Vo), e._currentValue = t;
    }
    function Ci(e, t, n) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return;
        }
    }
    function Fn(e, t) {
        Bo = e, ds = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Te = !0), e.firstContext = null);
    }
    function Xe(e) {
        var t = e._currentValue;
        if (ds !== e) if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, Rn === null) {
            if (Bo === null) throw Error(k(308));
            Rn = e, Bo.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else Rn = Rn.next = e;
        return t;
    }
    var en = null;
    function hs(e) {
        en === null ? en = [
            e
        ] : en.push(e);
    }
    function Tc(e, t, n, r) {
        var o = t.interleaved;
        return o === null ? (n.next = n, hs(t)) : (n.next = o.next, o.next = n), t.interleaved = n, xt(e, r);
    }
    function xt(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for(n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
        return n.tag === 3 ? n.stateNode : null;
    }
    var Nt = !1;
    function gs(e) {
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
    function Mc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function vt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function Dt(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, V & 2) {
            var o = r.pending;
            return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, xt(e, n);
        }
        return o = r.interleaved, o === null ? (t.next = t, hs(r)) : (t.next = o.next, o.next = t), r.interleaved = t, xt(e, n);
    }
    function wo(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ts(e, n);
        }
    }
    function Nu(e, t) {
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
    function $o(e, t, n, r) {
        var o = e.updateQueue;
        Nt = !1;
        var l = o.firstBaseUpdate, i = o.lastBaseUpdate, s = o.shared.pending;
        if (s !== null) {
            o.shared.pending = null;
            var u = s, a = u.next;
            u.next = null, i === null ? l = a : i.next = a, i = u;
            var m = e.alternate;
            m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== i && (s === null ? m.firstBaseUpdate = a : s.next = a, m.lastBaseUpdate = u));
        }
        if (l !== null) {
            var f = o.baseState;
            i = 0, m = a = u = null, s = l;
            do {
                var d = s.lane, g = s.eventTime;
                if ((r & d) === d) {
                    m !== null && (m = m.next = {
                        eventTime: g,
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    });
                    e: {
                        var v = e, y = s;
                        switch(d = t, g = n, y.tag){
                            case 1:
                                if (v = y.payload, typeof v == "function") {
                                    f = v.call(g, f, d);
                                    break e;
                                }
                                f = v;
                                break e;
                            case 3:
                                v.flags = v.flags & -65537 | 128;
                            case 0:
                                if (v = y.payload, d = typeof v == "function" ? v.call(g, f, d) : v, d == null) break e;
                                f = re({}, f, d);
                                break e;
                            case 2:
                                Nt = !0;
                        }
                    }
                    s.callback !== null && s.lane !== 0 && (e.flags |= 64, d = o.effects, d === null ? o.effects = [
                        s
                    ] : d.push(s));
                } else g = {
                    eventTime: g,
                    lane: d,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, m === null ? (a = m = g, u = f) : m = m.next = g, i |= d;
                if (s = s.next, s === null) {
                    if (s = o.shared.pending, s === null) break;
                    d = s, s = d.next, d.next = null, o.lastBaseUpdate = d, o.shared.pending = null;
                }
            }while (!0);
            if (m === null && (u = f), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = m, t = o.shared.interleaved, t !== null) {
                o = t;
                do i |= o.lane, o = o.next;
                while (o !== t);
            } else l === null && (o.shared.lanes = 0);
            an |= i, e.lanes = i, e.memoizedState = f;
        }
    }
    function zu(e, t, n) {
        if (e = t.effects, t.effects = null, e !== null) for(t = 0; t < e.length; t++){
            var r = e[t], o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(k(191, o));
                o.call(r);
            }
        }
    }
    var Br = {}, ft = Gt(Br), Ir = Gt(Br), Tr = Gt(Br);
    function tn(e) {
        if (e === Br) throw Error(k(174));
        return e;
    }
    function vs(e, t) {
        switch(K(Tr, t), K(Ir, e), K(ft, Br), e = t.nodeType, e){
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ri(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ri(t, e);
        }
        Z(ft), K(ft, t);
    }
    function Gn() {
        Z(ft), Z(Ir), Z(Tr);
    }
    function Lc(e) {
        tn(Tr.current);
        var t = tn(ft.current), n = ri(t, e.type);
        t !== n && (K(Ir, e), K(ft, n));
    }
    function ys(e) {
        Ir.current === e && (Z(ft), Z(Ir));
    }
    var te = Gt(0);
    function Go(e) {
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
    var Fl = [];
    function ws() {
        for(var e = 0; e < Fl.length; e++)Fl[e]._workInProgressVersionPrimary = null;
        Fl.length = 0;
    }
    var xo = kt.ReactCurrentDispatcher, Al = kt.ReactCurrentBatchConfig, un = 0, ne = null, ce = null, pe = null, Wo = !1, hr = !1, Mr = 0, dm = 0;
    function we() {
        throw Error(k(321));
    }
    function xs(e, t) {
        if (t === null) return !1;
        for(var n = 0; n < t.length && n < e.length; n++)if (!lt(e[n], t[n])) return !1;
        return !0;
    }
    function Ss(e, t, n, r, o, l) {
        if (un = l, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xo.current = e === null || e.memoizedState === null ? gm : vm, e = n(r, o), hr) {
            l = 0;
            do {
                if (hr = !1, Mr = 0, 25 <= l) throw Error(k(301));
                l += 1, pe = ce = null, t.updateQueue = null, xo.current = ym, e = n(r, o);
            }while (hr);
        }
        if (xo.current = Ho, t = ce !== null && ce.next !== null, un = 0, pe = ce = ne = null, Wo = !1, t) throw Error(k(300));
        return e;
    }
    function ks() {
        var e = Mr !== 0;
        return Mr = 0, e;
    }
    function ut() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return pe === null ? ne.memoizedState = pe = e : pe = pe.next = e, pe;
    }
    function Ze() {
        if (ce === null) {
            var e = ne.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = ce.next;
        var t = pe === null ? ne.memoizedState : pe.next;
        if (t !== null) pe = t, ce = e;
        else {
            if (e === null) throw Error(k(310));
            ce = e, e = {
                memoizedState: ce.memoizedState,
                baseState: ce.baseState,
                baseQueue: ce.baseQueue,
                queue: ce.queue,
                next: null
            }, pe === null ? ne.memoizedState = pe = e : pe = pe.next = e;
        }
        return pe;
    }
    function Lr(e, t) {
        return typeof t == "function" ? t(e) : t;
    }
    function Ul(e) {
        var t = Ze(), n = t.queue;
        if (n === null) throw Error(k(311));
        n.lastRenderedReducer = e;
        var r = ce, o = r.baseQueue, l = n.pending;
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
                var m = a.lane;
                if ((un & m) === m) u !== null && (u = u.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
                else {
                    var f = {
                        lane: m,
                        action: a.action,
                        hasEagerState: a.hasEagerState,
                        eagerState: a.eagerState,
                        next: null
                    };
                    u === null ? (s = u = f, i = r) : u = u.next = f, ne.lanes |= m, an |= m;
                }
                a = a.next;
            }while (a !== null && a !== l);
            u === null ? i = r : u.next = s, lt(r, t.memoizedState) || (Te = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
        }
        if (e = n.interleaved, e !== null) {
            o = e;
            do l = o.lane, ne.lanes |= l, an |= l, o = o.next;
            while (o !== e);
        } else o === null && (n.lanes = 0);
        return [
            t.memoizedState,
            n.dispatch
        ];
    }
    function Vl(e) {
        var t = Ze(), n = t.queue;
        if (n === null) throw Error(k(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch, o = n.pending, l = t.memoizedState;
        if (o !== null) {
            n.pending = null;
            var i = o = o.next;
            do l = e(l, i.action), i = i.next;
            while (i !== o);
            lt(l, t.memoizedState) || (Te = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
        }
        return [
            l,
            r
        ];
    }
    function Oc() {}
    function jc(e, t) {
        var n = ne, r = Ze(), o = t(), l = !lt(r.memoizedState, o);
        if (l && (r.memoizedState = o, Te = !0), r = r.queue, Cs(Ac.bind(null, n, r, e), [
            e
        ]), r.getSnapshot !== t || l || pe !== null && pe.memoizedState.tag & 1) {
            if (n.flags |= 2048, Or(9, Fc.bind(null, n, r, o, t), void 0, null), me === null) throw Error(k(349));
            un & 30 || Dc(n, t, o);
        }
        return o;
    }
    function Dc(e, t, n) {
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
    function Fc(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Uc(t) && Vc(e);
    }
    function Ac(e, t, n) {
        return n(function() {
            Uc(t) && Vc(e);
        });
    }
    function Uc(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !lt(e, n);
        } catch  {
            return !0;
        }
    }
    function Vc(e) {
        var t = xt(e, 1);
        t !== null && ot(t, e, 1, -1);
    }
    function Ru(e) {
        var t = ut();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Lr,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = hm.bind(null, ne, e), [
            t.memoizedState,
            e
        ];
    }
    function Or(e, t, n, r) {
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
    function Bc() {
        return Ze().memoizedState;
    }
    function So(e, t, n, r) {
        var o = ut();
        ne.flags |= e, o.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r);
    }
    function sl(e, t, n, r) {
        var o = Ze();
        r = r === void 0 ? null : r;
        var l = void 0;
        if (ce !== null) {
            var i = ce.memoizedState;
            if (l = i.destroy, r !== null && xs(r, i.deps)) {
                o.memoizedState = Or(t, n, l, r);
                return;
            }
        }
        ne.flags |= e, o.memoizedState = Or(1 | t, n, l, r);
    }
    function Iu(e, t) {
        return So(8390656, 8, e, t);
    }
    function Cs(e, t) {
        return sl(2048, 8, e, t);
    }
    function $c(e, t) {
        return sl(4, 2, e, t);
    }
    function Gc(e, t) {
        return sl(4, 4, e, t);
    }
    function Wc(e, t) {
        if (typeof t == "function") return e = e(), t(e), function() {
            t(null);
        };
        if (t != null) return e = e(), t.current = e, function() {
            t.current = null;
        };
    }
    function Hc(e, t, n) {
        return n = n != null ? n.concat([
            e
        ]) : null, sl(4, 4, Wc.bind(null, t, e), n);
    }
    function _s() {}
    function bc(e, t) {
        var n = Ze();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && xs(t, r[1]) ? r[0] : (n.memoizedState = [
            e,
            t
        ], e);
    }
    function Qc(e, t) {
        var n = Ze();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return r !== null && t !== null && xs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
            e,
            t
        ], e);
    }
    function Kc(e, t, n) {
        return un & 21 ? (lt(n, t) || (n = qa(), ne.lanes |= n, an |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Te = !0), e.memoizedState = n);
    }
    function pm(e, t) {
        var n = $;
        $ = n !== 0 && 4 > n ? n : 4, e(!0);
        var r = Al.transition;
        Al.transition = {};
        try {
            e(!1), t();
        } finally{
            $ = n, Al.transition = r;
        }
    }
    function Yc() {
        return Ze().memoizedState;
    }
    function mm(e, t, n) {
        var r = At(e);
        if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Xc(e)) Zc(t, n);
        else if (n = Tc(e, t, n, r), n !== null) {
            var o = Ee();
            ot(n, e, r, o), Jc(n, t, r);
        }
    }
    function hm(e, t, n) {
        var r = At(e), o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Xc(e)) Zc(t, o);
        else {
            var l = e.alternate;
            if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
                var i = t.lastRenderedState, s = l(i, n);
                if (o.hasEagerState = !0, o.eagerState = s, lt(s, i)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o, hs(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
                    return;
                }
            } catch  {} finally{}
            n = Tc(e, t, o, r), n !== null && (o = Ee(), ot(n, e, r, o), Jc(n, t, r));
        }
    }
    function Xc(e) {
        var t = e.alternate;
        return e === ne || t !== null && t === ne;
    }
    function Zc(e, t) {
        hr = Wo = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Jc(e, t, n) {
        if (n & 4194240) {
            var r = t.lanes;
            r &= e.pendingLanes, n |= r, t.lanes = n, ts(e, n);
        }
    }
    var Ho = {
        readContext: Xe,
        useCallback: we,
        useContext: we,
        useEffect: we,
        useImperativeHandle: we,
        useInsertionEffect: we,
        useLayoutEffect: we,
        useMemo: we,
        useReducer: we,
        useRef: we,
        useState: we,
        useDebugValue: we,
        useDeferredValue: we,
        useTransition: we,
        useMutableSource: we,
        useSyncExternalStore: we,
        useId: we,
        unstable_isNewReconciler: !1
    }, gm = {
        readContext: Xe,
        useCallback: function(e, t) {
            return ut().memoizedState = [
                e,
                t === void 0 ? null : t
            ], e;
        },
        useContext: Xe,
        useEffect: Iu,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([
                e
            ]) : null, So(4194308, 4, Wc.bind(null, t, e), n);
        },
        useLayoutEffect: function(e, t) {
            return So(4194308, 4, e, t);
        },
        useInsertionEffect: function(e, t) {
            return So(4, 2, e, t);
        },
        useMemo: function(e, t) {
            var n = ut();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
                e,
                t
            ], e;
        },
        useReducer: function(e, t, n) {
            var r = ut();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = mm.bind(null, ne, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var t = ut();
            return e = {
                current: e
            }, t.memoizedState = e;
        },
        useState: Ru,
        useDebugValue: _s,
        useDeferredValue: function(e) {
            return ut().memoizedState = e;
        },
        useTransition: function() {
            var e = Ru(!1), t = e[0];
            return e = pm.bind(null, e[1]), ut().memoizedState = e, [
                t,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ne, o = ut();
            if (ee) {
                if (n === void 0) throw Error(k(407));
                n = n();
            } else {
                if (n = t(), me === null) throw Error(k(349));
                un & 30 || Dc(r, t, n);
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, Iu(Ac.bind(null, r, l, e), [
                e
            ]), r.flags |= 2048, Or(9, Fc.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function() {
            var e = ut(), t = me.identifierPrefix;
            if (ee) {
                var n = gt, r = ht;
                n = (r & ~(1 << 32 - rt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
            } else n = dm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t;
        },
        unstable_isNewReconciler: !1
    }, vm = {
        readContext: Xe,
        useCallback: bc,
        useContext: Xe,
        useEffect: Cs,
        useImperativeHandle: Hc,
        useInsertionEffect: $c,
        useLayoutEffect: Gc,
        useMemo: Qc,
        useReducer: Ul,
        useRef: Bc,
        useState: function() {
            return Ul(Lr);
        },
        useDebugValue: _s,
        useDeferredValue: function(e) {
            var t = Ze();
            return Kc(t, ce.memoizedState, e);
        },
        useTransition: function() {
            var e = Ul(Lr)[0], t = Ze().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Oc,
        useSyncExternalStore: jc,
        useId: Yc,
        unstable_isNewReconciler: !1
    }, ym = {
        readContext: Xe,
        useCallback: bc,
        useContext: Xe,
        useEffect: Cs,
        useImperativeHandle: Hc,
        useInsertionEffect: $c,
        useLayoutEffect: Gc,
        useMemo: Qc,
        useReducer: Vl,
        useRef: Bc,
        useState: function() {
            return Vl(Lr);
        },
        useDebugValue: _s,
        useDeferredValue: function(e) {
            var t = Ze();
            return ce === null ? t.memoizedState = e : Kc(t, ce.memoizedState, e);
        },
        useTransition: function() {
            var e = Vl(Lr)[0], t = Ze().memoizedState;
            return [
                e,
                t
            ];
        },
        useMutableSource: Oc,
        useSyncExternalStore: jc,
        useId: Yc,
        unstable_isNewReconciler: !1
    };
    function et(e, t) {
        if (e && e.defaultProps) {
            t = re({}, t), e = e.defaultProps;
            for(var n in e)t[n] === void 0 && (t[n] = e[n]);
            return t;
        }
        return t;
    }
    function _i(e, t, n, r) {
        t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var ul = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? dn(e) === e : !1;
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Ee(), o = At(e), l = vt(r, o);
            l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (ot(t, e, o, r), wo(t, e, o));
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Ee(), o = At(e), l = vt(r, o);
            l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Dt(e, l, o), t !== null && (ot(t, e, o, r), wo(t, e, o));
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Ee(), r = At(e), o = vt(n, r);
            o.tag = 2, t != null && (o.callback = t), t = Dt(e, o, r), t !== null && (ot(t, e, r, n), wo(t, e, r));
        }
    };
    function Tu(e, t, n, r, o, l, i) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !Pr(n, r) || !Pr(o, l) : !0;
    }
    function qc(e, t, n) {
        var r = !1, o = Bt, l = t.contextType;
        return typeof l == "object" && l !== null ? l = Xe(l) : (o = Le(t) ? ln : ke.current, r = t.contextTypes, l = (r = r != null) ? Vn(e, o) : Bt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ul, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
    }
    function Mu(e, t, n, r) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ul.enqueueReplaceState(t, t.state, null);
    }
    function Ei(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = {}, gs(e);
        var l = t.contextType;
        typeof l == "object" && l !== null ? o.context = Xe(l) : (l = Le(t) ? ln : ke.current, o.context = Vn(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (_i(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ul.enqueueReplaceState(o, o.state, null), $o(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Wn(e, t) {
        try {
            var n = "", r = t;
            do n += bd(r), r = r.return;
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
    function Bl(e, t, n) {
        return {
            value: e,
            source: null,
            stack: n ?? null,
            digest: t ?? null
        };
    }
    function Pi(e, t) {
        try {
            console.error(t.value);
        } catch (n) {
            setTimeout(function() {
                throw n;
            });
        }
    }
    var wm = typeof WeakMap == "function" ? WeakMap : Map;
    function ef(e, t, n) {
        n = vt(-1, n), n.tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Qo || (Qo = !0, Di = r), Pi(e, t);
        }, n;
    }
    function tf(e, t, n) {
        n = vt(-1, n), n.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var o = t.value;
            n.payload = function() {
                return r(o);
            }, n.callback = function() {
                Pi(e, t);
            };
        }
        var l = e.stateNode;
        return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
            Pi(e, t), typeof r != "function" && (Ft === null ? Ft = new Set([
                this
            ]) : Ft.add(this));
            var i = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: i !== null ? i : ""
            });
        }), n;
    }
    function Lu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new wm;
            var o = new Set;
            r.set(t, o);
        } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
        o.has(n) || (o.add(n), e = Lm.bind(null, e, t, n), t.then(e, e));
    }
    function Ou(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return;
        }while (e !== null);
        return null;
    }
    function ju(e, t, n, r, o) {
        return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, Dt(n, t, 1))), n.lanes |= 1), e);
    }
    var xm = kt.ReactCurrentOwner, Te = !1;
    function _e(e, t, n, r) {
        t.child = e === null ? Ic(t, null, n, r) : $n(t, e.child, n, r);
    }
    function Du(e, t, n, r, o) {
        n = n.render;
        var l = t.ref;
        return Fn(t, o), r = Ss(e, t, n, r, l, o), n = ks(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, St(e, t, o)) : (ee && n && as(t), t.flags |= 1, _e(e, t, r, o), t.child);
    }
    function Fu(e, t, n, r, o) {
        if (e === null) {
            var l = n.type;
            return typeof l == "function" && !Ms(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, nf(e, t, l, r, o)) : (e = Eo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
        }
        if (l = e.child, !(e.lanes & o)) {
            var i = l.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Pr, n(i, r) && e.ref === t.ref) return St(e, t, o);
        }
        return t.flags |= 1, e = Ut(l, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function nf(e, t, n, r, o) {
        if (e !== null) {
            var l = e.memoizedProps;
            if (Pr(l, r) && e.ref === t.ref) if (Te = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Te = !0);
            else return t.lanes = e.lanes, St(e, t, o);
        }
        return Ni(e, t, n, r, o);
    }
    function rf(e, t, n) {
        var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, K(Tn, Ae), Ae |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, K(Tn, Ae), Ae |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, K(Tn, Ae), Ae |= r;
        }
        else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, K(Tn, Ae), Ae |= r;
        return _e(e, t, o, n), t.child;
    }
    function of(e, t) {
        var n = t.ref;
        (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
    }
    function Ni(e, t, n, r, o) {
        var l = Le(n) ? ln : ke.current;
        return l = Vn(t, l), Fn(t, o), n = Ss(e, t, n, r, l, o), r = ks(), e !== null && !Te ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, St(e, t, o)) : (ee && r && as(t), t.flags |= 1, _e(e, t, n, o), t.child);
    }
    function Au(e, t, n, r, o) {
        if (Le(n)) {
            var l = !0;
            Fo(t);
        } else l = !1;
        if (Fn(t, o), t.stateNode === null) ko(e, t), qc(t, n, r), Ei(t, n, r, o), r = !0;
        else if (e === null) {
            var i = t.stateNode, s = t.memoizedProps;
            i.props = s;
            var u = i.context, a = n.contextType;
            typeof a == "object" && a !== null ? a = Xe(a) : (a = Le(n) ? ln : ke.current, a = Vn(t, a));
            var m = n.getDerivedStateFromProps, f = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
            f || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== a) && Mu(t, i, r, a), Nt = !1;
            var d = t.memoizedState;
            i.state = d, $o(t, r, i, o), u = t.memoizedState, s !== r || d !== u || Me.current || Nt ? (typeof m == "function" && (_i(t, n, m, r), u = t.memoizedState), (s = Nt || Tu(t, n, s, r, d, u, a)) ? (f || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
        } else {
            i = t.stateNode, Mc(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : et(t.type, s), i.props = a, f = t.pendingProps, d = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = Xe(u) : (u = Le(n) ? ln : ke.current, u = Vn(t, u));
            var g = n.getDerivedStateFromProps;
            (m = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== f || d !== u) && Mu(t, i, r, u), Nt = !1, d = t.memoizedState, i.state = d, $o(t, r, i, o);
            var v = t.memoizedState;
            s !== f || d !== v || Me.current || Nt ? (typeof g == "function" && (_i(t, n, g, r), v = t.memoizedState), (a = Nt || Tu(t, n, a, r, d, v, u) || !1) ? (m || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = u, r = a) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1);
        }
        return zi(e, t, n, r, l, o);
    }
    function zi(e, t, n, r, o, l) {
        of(e, t);
        var i = (t.flags & 128) !== 0;
        if (!r && !i) return o && Cu(t, n, !1), St(e, t, l);
        r = t.stateNode, xm.current = t;
        var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
        return t.flags |= 1, e !== null && i ? (t.child = $n(t, e.child, null, l), t.child = $n(t, null, s, l)) : _e(e, t, s, l), t.memoizedState = r.state, o && Cu(t, n, !0), t.child;
    }
    function lf(e) {
        var t = e.stateNode;
        t.pendingContext ? ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ku(e, t.context, !1), vs(e, t.containerInfo);
    }
    function Uu(e, t, n, r, o) {
        return Bn(), fs(o), t.flags |= 256, _e(e, t, n, r), t.child;
    }
    var Ri = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Ii(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function sf(e, t, n) {
        var r = t.pendingProps, o = te.current, l = !1, i = (t.flags & 128) !== 0, s;
        if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(te, o & 1), e === null) return ki(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
            mode: "hidden",
            children: i
        }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = fl(i, r, 0, null), e = rn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Ii(n), t.memoizedState = Ri, e) : Es(t, i));
        if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return Sm(e, t, i, r, s, o, n);
        if (l) {
            l = r.fallback, i = t.mode, o = e.child, s = o.sibling;
            var u = {
                mode: "hidden",
                children: r.children
            };
            return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Ut(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? l = Ut(s, l) : (l = rn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? Ii(n) : {
                baseLanes: i.baseLanes | n,
                cachePool: null,
                transitions: i.transitions
            }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = Ri, r;
        }
        return l = e.child, e = l.sibling, r = Ut(l, {
            mode: "visible",
            children: r.children
        }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
            e
        ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
    }
    function Es(e, t) {
        return t = fl({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t;
    }
    function io(e, t, n, r) {
        return r !== null && fs(r), $n(t, e.child, null, n), e = Es(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function Sm(e, t, n, r, o, l, i) {
        if (n) return t.flags & 256 ? (t.flags &= -257, r = Bl(Error(k(422))), io(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = fl({
            mode: "visible",
            children: r.children
        }, o, 0, null), l = rn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && $n(t, e.child, null, i), t.child.memoizedState = Ii(i), t.memoizedState = Ri, l);
        if (!(t.mode & 1)) return io(e, t, i, null);
        if (o.data === "$!") {
            if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
            return r = s, l = Error(k(419)), r = Bl(l, r, void 0), io(e, t, i, r);
        }
        if (s = (i & e.childLanes) !== 0, Te || s) {
            if (r = me, r !== null) {
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
                o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, xt(e, o), ot(r, e, o, -1));
            }
            return Ts(), r = Bl(Error(k(421))), io(e, t, i, r);
        }
        return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Om.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ue = jt(o.nextSibling), Ve = t, ee = !0, nt = null, e !== null && (be[Qe++] = ht, be[Qe++] = gt, be[Qe++] = sn, ht = e.id, gt = e.overflow, sn = t), t = Es(t, r.children), t.flags |= 4096, t);
    }
    function Vu(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t), Ci(e.return, t, n);
    }
    function $l(e, t, n, r, o) {
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
    function uf(e, t, n) {
        var r = t.pendingProps, o = r.revealOrder, l = r.tail;
        if (_e(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && e.flags & 128) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Vu(e, n, t);
                else if (e.tag === 19) Vu(e, n, t);
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
        if (K(te, r), !(t.mode & 1)) t.memoizedState = null;
        else switch(o){
            case "forwards":
                for(n = t.child, o = null; n !== null;)e = n.alternate, e !== null && Go(e) === null && (o = n), n = n.sibling;
                n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), $l(t, !1, o, n, l);
                break;
            case "backwards":
                for(n = null, o = t.child, t.child = null; o !== null;){
                    if (e = o.alternate, e !== null && Go(e) === null) {
                        t.child = o;
                        break;
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e;
                }
                $l(t, !0, n, null, l);
                break;
            case "together":
                $l(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
        return t.child;
    }
    function ko(e, t) {
        !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
    }
    function St(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), an |= t.lanes, !(n & t.childLanes)) return null;
        if (e !== null && t.child !== e.child) throw Error(k(153));
        if (t.child !== null) {
            for(e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)e = e.sibling, n = n.sibling = Ut(e, e.pendingProps), n.return = t;
            n.sibling = null;
        }
        return t.child;
    }
    function km(e, t, n) {
        switch(t.tag){
            case 3:
                lf(t), Bn();
                break;
            case 5:
                Lc(t);
                break;
            case 1:
                Le(t.type) && Fo(t);
                break;
            case 4:
                vs(t, t.stateNode.containerInfo);
                break;
            case 10:
                var r = t.type._context, o = t.memoizedProps.value;
                K(Vo, r._currentValue), r._currentValue = o;
                break;
            case 13:
                if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (K(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sf(e, t, n) : (K(te, te.current & 1), e = St(e, t, n), e !== null ? e.sibling : null);
                K(te, te.current & 1);
                break;
            case 19:
                if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                    if (r) return uf(e, t, n);
                    t.flags |= 128;
                }
                if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(te, te.current), r) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, rf(e, t, n);
        }
        return St(e, t, n);
    }
    var af, Ti, cf, ff;
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
    Ti = function() {};
    cf = function(e, t, n, r) {
        var o = e.memoizedProps;
        if (o !== r) {
            e = t.stateNode, tn(ft.current);
            var l = null;
            switch(n){
                case "input":
                    o = ql(e, o), r = ql(e, r), l = [];
                    break;
                case "select":
                    o = re({}, o, {
                        value: void 0
                    }), r = re({}, r, {
                        value: void 0
                    }), l = [];
                    break;
                case "textarea":
                    o = ni(e, o), r = ni(e, r), l = [];
                    break;
                default:
                    typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jo);
            }
            oi(n, r);
            var i;
            n = null;
            for(a in o)if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
                var s = o[a];
                for(i in s)s.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
            } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (wr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
            for(a in r){
                var u = r[a];
                if (s = o?.[a], r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
                    for(i in s)!s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                    for(i in u)u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i]);
                } else n || (l || (l = []), l.push(a, n)), n = u;
                else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (wr.hasOwnProperty(a) ? (u != null && a === "onScroll" && X("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u));
            }
            n && (l = l || []).push("style", n);
            var a = l;
            (t.updateQueue = a) && (t.flags |= 4);
        }
    };
    ff = function(e, t, n, r) {
        n !== r && (t.flags |= 4);
    };
    function rr(e, t) {
        if (!ee) switch(e.tailMode){
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
    function xe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
        if (t) for(var o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
        else for(o = e.child; o !== null;)n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function Cm(e, t, n) {
        var r = t.pendingProps;
        switch(cs(t), t.tag){
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
                return xe(t), null;
            case 1:
                return Le(t.type) && Do(), xe(t), null;
            case 3:
                return r = t.stateNode, Gn(), Z(Me), Z(ke), ws(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (oo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, nt !== null && (Ui(nt), nt = null))), Ti(e, t), xe(t), null;
            case 5:
                ys(t);
                var o = tn(Tr.current);
                if (n = t.type, e !== null && t.stateNode != null) cf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (t.stateNode === null) throw Error(k(166));
                        return xe(t), null;
                    }
                    if (e = tn(ft.current), oo(t)) {
                        r = t.stateNode, n = t.type;
                        var l = t.memoizedProps;
                        switch(r[at] = t, r[Rr] = l, e = (t.mode & 1) !== 0, n){
                            case "dialog":
                                X("cancel", r), X("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                X("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(o = 0; o < ar.length; o++)X(ar[o], r);
                                break;
                            case "source":
                                X("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                X("error", r), X("load", r);
                                break;
                            case "details":
                                X("toggle", r);
                                break;
                            case "input":
                                Ys(r, l), X("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!l.multiple
                                }, X("invalid", r);
                                break;
                            case "textarea":
                                Zs(r, l), X("invalid", r);
                        }
                        oi(n, l), o = null;
                        for(var i in l)if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && ro(r.textContent, s, e), o = [
                                "children",
                                s
                            ]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && ro(r.textContent, s, e), o = [
                                "children",
                                "" + s
                            ]) : wr.hasOwnProperty(i) && s != null && i === "onScroll" && X("scroll", r);
                        }
                        switch(n){
                            case "input":
                                Yr(r), Xs(r, l, !0);
                                break;
                            case "textarea":
                                Yr(r), Js(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof l.onClick == "function" && (r.onclick = jo);
                        }
                        r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
                    } else {
                        i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Aa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                            is: r.is
                        }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[at] = t, e[Rr] = r, af(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch(i = li(n, r), n){
                                case "dialog":
                                    X("cancel", e), X("close", e), o = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    X("load", e), o = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(o = 0; o < ar.length; o++)X(ar[o], e);
                                    o = r;
                                    break;
                                case "source":
                                    X("error", e), o = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    X("error", e), X("load", e), o = r;
                                    break;
                                case "details":
                                    X("toggle", e), o = r;
                                    break;
                                case "input":
                                    Ys(e, r), o = ql(e, r), X("invalid", e);
                                    break;
                                case "option":
                                    o = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, o = re({}, r, {
                                        value: void 0
                                    }), X("invalid", e);
                                    break;
                                case "textarea":
                                    Zs(e, r), o = ni(e, r), X("invalid", e);
                                    break;
                                default:
                                    o = r;
                            }
                            oi(n, o), s = o;
                            for(l in s)if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                l === "style" ? Ba(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ua(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && xr(e, u) : typeof u == "number" && xr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (wr.hasOwnProperty(l) ? u != null && l === "onScroll" && X("scroll", e) : u != null && Yi(e, l, u, i));
                            }
                            switch(n){
                                case "input":
                                    Yr(e), Xs(e, r, !1);
                                    break;
                                case "textarea":
                                    Yr(e), Js(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + Vt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, l = r.value, l != null ? Ln(e, !!r.multiple, l, !1) : r.defaultValue != null && Ln(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof o.onClick == "function" && (e.onclick = jo);
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
                return xe(t), null;
            case 6:
                if (e && t.stateNode != null) ff(e, t, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
                    if (n = tn(Tr.current), tn(ft.current), oo(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[at] = t, (l = r.nodeValue !== n) && (e = Ve, e !== null)) switch(e.tag){
                            case 3:
                                ro(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && ro(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                        l && (t.flags |= 4);
                    } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[at] = t, t.stateNode = r;
                }
                return xe(t), null;
            case 13:
                if (Z(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (ee && Ue !== null && t.mode & 1 && !(t.flags & 128)) zc(), Bn(), t.flags |= 98560, l = !1;
                    else if (l = oo(t), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!l) throw Error(k(318));
                            if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(k(317));
                            l[at] = t;
                        } else Bn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                        xe(t), l = !1;
                    } else nt !== null && (Ui(nt), nt = null), l = !0;
                    if (!l) return t.flags & 65536 ? t : null;
                }
                return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? fe === 0 && (fe = 3) : Ts())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
            case 4:
                return Gn(), Ti(e, t), e === null && Nr(t.stateNode.containerInfo), xe(t), null;
            case 10:
                return ms(t.type._context), xe(t), null;
            case 17:
                return Le(t.type) && Do(), xe(t), null;
            case 19:
                if (Z(te), l = t.memoizedState, l === null) return xe(t), null;
                if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) rr(l, !1);
                else {
                    if (fe !== 0 || e !== null && e.flags & 128) for(e = t.child; e !== null;){
                        if (i = Go(e), i !== null) {
                            for(t.flags |= 128, rr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), n = n.sibling;
                            return K(te, te.current & 1 | 2), t.child;
                        }
                        e = e.sibling;
                    }
                    l.tail !== null && ie() > Hn && (t.flags |= 128, r = !0, rr(l, !1), t.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Go(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !ee) return xe(t), null;
                    } else 2 * ie() - l.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = !0, rr(l, !1), t.lanes = 4194304);
                    l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
                }
                return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ie(), t.sibling = null, n = te.current, K(te, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
            case 22:
            case 23:
                return Is(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(k(156, t.tag));
    }
    function _m(e, t) {
        switch(cs(t), t.tag){
            case 1:
                return Le(t.type) && Do(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return Gn(), Z(Me), Z(ke), ws(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return ys(t), null;
            case 13:
                if (Z(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(k(340));
                    Bn();
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return Z(te), null;
            case 4:
                return Gn(), null;
            case 10:
                return ms(t.type._context), null;
            case 22:
            case 23:
                return Is(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var so = !1, Se = !1, Em = typeof WeakSet == "function" ? WeakSet : Set, I = null;
    function In(e, t) {
        var n = e.ref;
        if (n !== null) if (typeof n == "function") try {
            n(null);
        } catch (r) {
            le(e, t, r);
        }
        else n.current = null;
    }
    function Mi(e, t, n) {
        try {
            n();
        } catch (r) {
            le(e, t, r);
        }
    }
    var Bu = !1;
    function Pm(e, t) {
        if (hi = Mo, e = hc(), us(e)) {
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
                    var i = 0, s = -1, u = -1, a = 0, m = 0, f = e, d = null;
                    t: for(;;){
                        for(var g; f !== n || o !== 0 && f.nodeType !== 3 || (s = i + o), f !== l || r !== 0 && f.nodeType !== 3 || (u = i + r), f.nodeType === 3 && (i += f.nodeValue.length), (g = f.firstChild) !== null;)d = f, f = g;
                        for(;;){
                            if (f === e) break t;
                            if (d === n && ++a === o && (s = i), d === l && ++m === r && (u = i), (g = f.nextSibling) !== null) break;
                            f = d, d = f.parentNode;
                        }
                        f = g;
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
        for(gi = {
            focusedElem: e,
            selectionRange: n
        }, Mo = !1, I = t; I !== null;)if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
        else for(; I !== null;){
            t = I;
            try {
                var v = t.alternate;
                if (t.flags & 1024) switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (v !== null) {
                            var y = v.memoizedProps, S = v.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : et(t.type, y), S);
                            p.__reactInternalSnapshotBeforeUpdate = c;
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
                        throw Error(k(163));
                }
            } catch (w) {
                le(t, t.return, w);
            }
            if (e = t.sibling, e !== null) {
                e.return = t.return, I = e;
                break;
            }
            I = t.return;
        }
        return v = Bu, Bu = !1, v;
    }
    function gr(e, t, n) {
        var r = t.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var o = r = r.next;
            do {
                if ((o.tag & e) === e) {
                    var l = o.destroy;
                    o.destroy = void 0, l !== void 0 && Mi(t, n, l);
                }
                o = o.next;
            }while (o !== r);
        }
    }
    function al(e, t) {
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
    function Li(e) {
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
        t !== null && (e.alternate = null, df(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[at], delete t[Rr], delete t[wi], delete t[um], delete t[am])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function pf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function $u(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || pf(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function Oi(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = jo));
        else if (r !== 4 && (e = e.child, e !== null)) for(Oi(e, t, n), e = e.sibling; e !== null;)Oi(e, t, n), e = e.sibling;
    }
    function ji(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(ji(e, t, n), e = e.sibling; e !== null;)ji(e, t, n), e = e.sibling;
    }
    var he = null, tt = !1;
    function Ct(e, t, n) {
        for(n = n.child; n !== null;)mf(e, t, n), n = n.sibling;
    }
    function mf(e, t, n) {
        if (ct && typeof ct.onCommitFiberUnmount == "function") try {
            ct.onCommitFiberUnmount(tl, n);
        } catch  {}
        switch(n.tag){
            case 5:
                Se || In(n, t);
            case 6:
                var r = he, o = tt;
                he = null, Ct(e, t, n), he = r, tt = o, he !== null && (tt ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
                break;
            case 18:
                he !== null && (tt ? (e = he, n = n.stateNode, e.nodeType === 8 ? jl(e.parentNode, n) : e.nodeType === 1 && jl(e, n), _r(e)) : jl(he, n.stateNode));
                break;
            case 4:
                r = he, o = tt, he = n.stateNode.containerInfo, tt = !0, Ct(e, t, n), he = r, tt = o;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    o = r = r.next;
                    do {
                        var l = o, i = l.destroy;
                        l = l.tag, i !== void 0 && (l & 2 || l & 4) && Mi(n, t, i), o = o.next;
                    }while (o !== r);
                }
                Ct(e, t, n);
                break;
            case 1:
                if (!Se && (In(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                } catch (s) {
                    le(n, t, s);
                }
                Ct(e, t, n);
                break;
            case 21:
                Ct(e, t, n);
                break;
            case 22:
                n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Ct(e, t, n), Se = r) : Ct(e, t, n);
                break;
            default:
                Ct(e, t, n);
        }
    }
    function Gu(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var n = e.stateNode;
            n === null && (n = e.stateNode = new Em), t.forEach(function(r) {
                var o = jm.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
        }
    }
    function qe(e, t) {
        var n = t.deletions;
        if (n !== null) for(var r = 0; r < n.length; r++){
            var o = n[r];
            try {
                var l = e, i = t, s = i;
                e: for(; s !== null;){
                    switch(s.tag){
                        case 5:
                            he = s.stateNode, tt = !1;
                            break e;
                        case 3:
                            he = s.stateNode.containerInfo, tt = !0;
                            break e;
                        case 4:
                            he = s.stateNode.containerInfo, tt = !0;
                            break e;
                    }
                    s = s.return;
                }
                if (he === null) throw Error(k(160));
                mf(l, i, o), he = null, tt = !1;
                var u = o.alternate;
                u !== null && (u.return = null), o.return = null;
            } catch (a) {
                le(o, t, a);
            }
        }
        if (t.subtreeFlags & 12854) for(t = t.child; t !== null;)hf(t, e), t = t.sibling;
    }
    function hf(e, t) {
        var n = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (qe(t, e), st(e), r & 4) {
                    try {
                        gr(3, e, e.return), al(3, e);
                    } catch (y) {
                        le(e, e.return, y);
                    }
                    try {
                        gr(5, e, e.return);
                    } catch (y) {
                        le(e, e.return, y);
                    }
                }
                break;
            case 1:
                qe(t, e), st(e), r & 512 && n !== null && In(n, n.return);
                break;
            case 5:
                if (qe(t, e), st(e), r & 512 && n !== null && In(n, n.return), e.flags & 32) {
                    var o = e.stateNode;
                    try {
                        xr(o, "");
                    } catch (y) {
                        le(e, e.return, y);
                    }
                }
                if (r & 4 && (o = e.stateNode, o != null)) {
                    var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, s = e.type, u = e.updateQueue;
                    if (e.updateQueue = null, u !== null) try {
                        s === "input" && l.type === "radio" && l.name != null && Da(o, l), li(s, i);
                        var a = li(s, l);
                        for(i = 0; i < u.length; i += 2){
                            var m = u[i], f = u[i + 1];
                            m === "style" ? Ba(o, f) : m === "dangerouslySetInnerHTML" ? Ua(o, f) : m === "children" ? xr(o, f) : Yi(o, m, f, a);
                        }
                        switch(s){
                            case "input":
                                ei(o, l);
                                break;
                            case "textarea":
                                Fa(o, l);
                                break;
                            case "select":
                                var d = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!l.multiple;
                                var g = l.value;
                                g != null ? Ln(o, !!l.multiple, g, !1) : d !== !!l.multiple && (l.defaultValue != null ? Ln(o, !!l.multiple, l.defaultValue, !0) : Ln(o, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        o[Rr] = l;
                    } catch (y) {
                        le(e, e.return, y);
                    }
                }
                break;
            case 6:
                if (qe(t, e), st(e), r & 4) {
                    if (e.stateNode === null) throw Error(k(162));
                    o = e.stateNode, l = e.memoizedProps;
                    try {
                        o.nodeValue = l;
                    } catch (y) {
                        le(e, e.return, y);
                    }
                }
                break;
            case 3:
                if (qe(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    _r(t.containerInfo);
                } catch (y) {
                    le(e, e.return, y);
                }
                break;
            case 4:
                qe(t, e), st(e);
                break;
            case 13:
                qe(t, e), st(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (zs = ie())), r & 4 && Gu(e);
                break;
            case 22:
                if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || m, qe(t, e), Se = a) : qe(t, e), st(e), r & 8192) {
                    if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !m && e.mode & 1) for(I = e, m = e.child; m !== null;){
                        for(f = I = m; I !== null;){
                            switch(d = I, g = d.child, d.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    gr(4, d, d.return);
                                    break;
                                case 1:
                                    In(d, d.return);
                                    var v = d.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = d, n = d.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                                        } catch (y) {
                                            le(r, n, y);
                                        }
                                    }
                                    break;
                                case 5:
                                    In(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        Hu(f);
                                        continue;
                                    }
                            }
                            g !== null ? (g.return = d, I = g) : Hu(f);
                        }
                        m = m.sibling;
                    }
                    e: for(m = null, f = e;;){
                        if (f.tag === 5) {
                            if (m === null) {
                                m = f;
                                try {
                                    o = f.stateNode, a ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = f.stateNode, u = f.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Va("display", i));
                                } catch (y) {
                                    le(e, e.return, y);
                                }
                            }
                        } else if (f.tag === 6) {
                            if (m === null) try {
                                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
                            } catch (y) {
                                le(e, e.return, y);
                            }
                        } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === e) break e;
                        for(; f.sibling === null;){
                            if (f.return === null || f.return === e) break e;
                            m === f && (m = null), f = f.return;
                        }
                        m === f && (m = null), f.sibling.return = f.return, f = f.sibling;
                    }
                }
                break;
            case 19:
                qe(t, e), st(e), r & 4 && Gu(e);
                break;
            case 21:
                break;
            default:
                qe(t, e), st(e);
        }
    }
    function st(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for(var n = e.return; n !== null;){
                        if (pf(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(k(160));
                }
                switch(r.tag){
                    case 5:
                        var o = r.stateNode;
                        r.flags & 32 && (xr(o, ""), r.flags &= -33);
                        var l = $u(e);
                        ji(e, l, o);
                        break;
                    case 3:
                    case 4:
                        var i = r.stateNode.containerInfo, s = $u(e);
                        Oi(e, s, i);
                        break;
                    default:
                        throw Error(k(161));
                }
            } catch (u) {
                le(e, e.return, u);
            }
            e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
    }
    function Nm(e, t, n) {
        I = e, gf(e);
    }
    function gf(e, t, n) {
        for(var r = (e.mode & 1) !== 0; I !== null;){
            var o = I, l = o.child;
            if (o.tag === 22 && r) {
                var i = o.memoizedState !== null || so;
                if (!i) {
                    var s = o.alternate, u = s !== null && s.memoizedState !== null || Se;
                    s = so;
                    var a = Se;
                    if (so = i, (Se = u) && !a) for(I = o; I !== null;)i = I, u = i.child, i.tag === 22 && i.memoizedState !== null ? bu(o) : u !== null ? (u.return = i, I = u) : bu(o);
                    for(; l !== null;)I = l, gf(l), l = l.sibling;
                    I = o, so = s, Se = a;
                }
                Wu(e);
            } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, I = l) : Wu(e);
        }
    }
    function Wu(e) {
        for(; I !== null;){
            var t = I;
            if (t.flags & 8772) {
                var n = t.alternate;
                try {
                    if (t.flags & 8772) switch(t.tag){
                        case 0:
                        case 11:
                        case 15:
                            Se || al(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : et(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var l = t.updateQueue;
                            l !== null && zu(t, l, r);
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
                                zu(t, i, n);
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
                                    var m = a.memoizedState;
                                    if (m !== null) {
                                        var f = m.dehydrated;
                                        f !== null && _r(f);
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
                            throw Error(k(163));
                    }
                    Se || t.flags & 512 && Li(t);
                } catch (d) {
                    le(t, t.return, d);
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
    function Hu(e) {
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
    function bu(e) {
        for(; I !== null;){
            var t = I;
            try {
                switch(t.tag){
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            al(4, t);
                        } catch (u) {
                            le(t, n, u);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var o = t.return;
                            try {
                                r.componentDidMount();
                            } catch (u) {
                                le(t, o, u);
                            }
                        }
                        var l = t.return;
                        try {
                            Li(t);
                        } catch (u) {
                            le(t, l, u);
                        }
                        break;
                    case 5:
                        var i = t.return;
                        try {
                            Li(t);
                        } catch (u) {
                            le(t, i, u);
                        }
                }
            } catch (u) {
                le(t, t.return, u);
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
    var zm = Math.ceil, bo = kt.ReactCurrentDispatcher, Ps = kt.ReactCurrentOwner, Ye = kt.ReactCurrentBatchConfig, V = 0, me = null, ue = null, ge = 0, Ae = 0, Tn = Gt(0), fe = 0, jr = null, an = 0, cl = 0, Ns = 0, vr = null, Ie = null, zs = 0, Hn = 1 / 0, pt = null, Qo = !1, Di = null, Ft = null, uo = !1, Tt = null, Ko = 0, yr = 0, Fi = null, Co = -1, _o = 0;
    function Ee() {
        return V & 6 ? ie() : Co !== -1 ? Co : Co = ie();
    }
    function At(e) {
        return e.mode & 1 ? V & 2 && ge !== 0 ? ge & -ge : fm.transition !== null ? (_o === 0 && (_o = qa()), _o) : (e = $, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ic(e.type)), e) : 1;
    }
    function ot(e, t, n, r) {
        if (50 < yr) throw yr = 0, Fi = null, Error(k(185));
        Ar(e, n, r), (!(V & 2) || e !== me) && (e === me && (!(V & 2) && (cl |= n), fe === 4 && Rt(e, ge)), Oe(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Hn = ie() + 500, il && Wt()));
    }
    function Oe(e, t) {
        var n = e.callbackNode;
        fp(e, t);
        var r = To(e, e === me ? ge : 0);
        if (r === 0) n !== null && tu(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (n != null && tu(n), t === 1) e.tag === 0 ? cm(Qu.bind(null, e)) : Ec(Qu.bind(null, e)), im(function() {
                !(V & 6) && Wt();
            }), n = null;
            else {
                switch(ec(r)){
                    case 1:
                        n = es;
                        break;
                    case 4:
                        n = Za;
                        break;
                    case 16:
                        n = Io;
                        break;
                    case 536870912:
                        n = Ja;
                        break;
                    default:
                        n = Io;
                }
                n = _f(n, vf.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        }
    }
    function vf(e, t) {
        if (Co = -1, _o = 0, V & 6) throw Error(k(327));
        var n = e.callbackNode;
        if (An() && e.callbackNode !== n) return null;
        var r = To(e, e === me ? ge : 0);
        if (r === 0) return null;
        if (r & 30 || r & e.expiredLanes || t) t = Yo(e, r);
        else {
            t = r;
            var o = V;
            V |= 2;
            var l = wf();
            (me !== e || ge !== t) && (pt = null, Hn = ie() + 500, nn(e, t));
            do try {
                Tm();
                break;
            } catch (s) {
                yf(e, s);
            }
            while (!0);
            ps(), bo.current = l, V = o, ue !== null ? t = 0 : (me = null, ge = 0, t = fe);
        }
        if (t !== 0) {
            if (t === 2 && (o = ci(e), o !== 0 && (r = o, t = Ai(e, o))), t === 1) throw n = jr, nn(e, 0), Rt(e, r), Oe(e, ie()), n;
            if (t === 6) Rt(e, r);
            else {
                if (o = e.current.alternate, !(r & 30) && !Rm(o) && (t = Yo(e, r), t === 2 && (l = ci(e), l !== 0 && (r = l, t = Ai(e, l))), t === 1)) throw n = jr, nn(e, 0), Rt(e, r), Oe(e, ie()), n;
                switch(e.finishedWork = o, e.finishedLanes = r, t){
                    case 0:
                    case 1:
                        throw Error(k(345));
                    case 2:
                        Jt(e, Ie, pt);
                        break;
                    case 3:
                        if (Rt(e, r), (r & 130023424) === r && (t = zs + 500 - ie(), 10 < t)) {
                            if (To(e, 0) !== 0) break;
                            if (o = e.suspendedLanes, (o & r) !== r) {
                                Ee(), e.pingedLanes |= e.suspendedLanes & o;
                                break;
                            }
                            e.timeoutHandle = yi(Jt.bind(null, e, Ie, pt), t);
                            break;
                        }
                        Jt(e, Ie, pt);
                        break;
                    case 4:
                        if (Rt(e, r), (r & 4194240) === r) break;
                        for(t = e.eventTimes, o = -1; 0 < r;){
                            var i = 31 - rt(r);
                            l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
                        }
                        if (r = o, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zm(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = yi(Jt.bind(null, e, Ie, pt), r);
                            break;
                        }
                        Jt(e, Ie, pt);
                        break;
                    case 5:
                        Jt(e, Ie, pt);
                        break;
                    default:
                        throw Error(k(329));
                }
            }
        }
        return Oe(e, ie()), e.callbackNode === n ? vf.bind(null, e) : null;
    }
    function Ai(e, t) {
        var n = vr;
        return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = Yo(e, t), e !== 2 && (t = Ie, Ie = n, t !== null && Ui(t)), e;
    }
    function Ui(e) {
        Ie === null ? Ie = e : Ie.push.apply(Ie, e);
    }
    function Rm(e) {
        for(var t = e;;){
            if (t.flags & 16384) {
                var n = t.updateQueue;
                if (n !== null && (n = n.stores, n !== null)) for(var r = 0; r < n.length; r++){
                    var o = n[r], l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!lt(l(), o)) return !1;
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
    function Rt(e, t) {
        for(t &= ~Ns, t &= ~cl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;){
            var n = 31 - rt(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        }
    }
    function Qu(e) {
        if (V & 6) throw Error(k(327));
        An();
        var t = To(e, 0);
        if (!(t & 1)) return Oe(e, ie()), null;
        var n = Yo(e, t);
        if (e.tag !== 0 && n === 2) {
            var r = ci(e);
            r !== 0 && (t = r, n = Ai(e, r));
        }
        if (n === 1) throw n = jr, nn(e, 0), Rt(e, t), Oe(e, ie()), n;
        if (n === 6) throw Error(k(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, Ie, pt), Oe(e, ie()), null;
    }
    function Rs(e, t) {
        var n = V;
        V |= 1;
        try {
            return e(t);
        } finally{
            V = n, V === 0 && (Hn = ie() + 500, il && Wt());
        }
    }
    function cn(e) {
        Tt !== null && Tt.tag === 0 && !(V & 6) && An();
        var t = V;
        V |= 1;
        var n = Ye.transition, r = $;
        try {
            if (Ye.transition = null, $ = 1, e) return e();
        } finally{
            $ = r, Ye.transition = n, V = t, !(V & 6) && Wt();
        }
    }
    function Is() {
        Ae = Tn.current, Z(Tn);
    }
    function nn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var n = e.timeoutHandle;
        if (n !== -1 && (e.timeoutHandle = -1, lm(n)), ue !== null) for(n = ue.return; n !== null;){
            var r = n;
            switch(cs(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && Do();
                    break;
                case 3:
                    Gn(), Z(Me), Z(ke), ws();
                    break;
                case 5:
                    ys(r);
                    break;
                case 4:
                    Gn();
                    break;
                case 13:
                    Z(te);
                    break;
                case 19:
                    Z(te);
                    break;
                case 10:
                    ms(r.type._context);
                    break;
                case 22:
                case 23:
                    Is();
            }
            n = n.return;
        }
        if (me = e, ue = e = Ut(e.current, null), ge = Ae = t, fe = 0, jr = null, Ns = cl = an = 0, Ie = vr = null, en !== null) {
            for(t = 0; t < en.length; t++)if (n = en[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next, l = n.pending;
                if (l !== null) {
                    var i = l.next;
                    l.next = o, r.next = i;
                }
                n.pending = r;
            }
            en = null;
        }
        return e;
    }
    function yf(e, t) {
        do {
            var n = ue;
            try {
                if (ps(), xo.current = Ho, Wo) {
                    for(var r = ne.memoizedState; r !== null;){
                        var o = r.queue;
                        o !== null && (o.pending = null), r = r.next;
                    }
                    Wo = !1;
                }
                if (un = 0, pe = ce = ne = null, hr = !1, Mr = 0, Ps.current = null, n === null || n.return === null) {
                    fe = 1, jr = t, ue = null;
                    break;
                }
                e: {
                    var l = e, i = n.return, s = n, u = t;
                    if (t = ge, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                        var a = u, m = s, f = m.tag;
                        if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                            var d = m.alternate;
                            d ? (m.updateQueue = d.updateQueue, m.memoizedState = d.memoizedState, m.lanes = d.lanes) : (m.updateQueue = null, m.memoizedState = null);
                        }
                        var g = Ou(i);
                        if (g !== null) {
                            g.flags &= -257, ju(g, i, s, l, t), g.mode & 1 && Lu(l, a, t), t = g, u = a;
                            var v = t.updateQueue;
                            if (v === null) {
                                var y = new Set;
                                y.add(u), t.updateQueue = y;
                            } else v.add(u);
                            break e;
                        } else {
                            if (!(t & 1)) {
                                Lu(l, a, t), Ts();
                                break e;
                            }
                            u = Error(k(426));
                        }
                    } else if (ee && s.mode & 1) {
                        var S = Ou(i);
                        if (S !== null) {
                            !(S.flags & 65536) && (S.flags |= 256), ju(S, i, s, l, t), fs(Wn(u, s));
                            break e;
                        }
                    }
                    l = u = Wn(u, s), fe !== 4 && (fe = 2), vr === null ? vr = [
                        l
                    ] : vr.push(l), l = i;
                    do {
                        switch(l.tag){
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var p = ef(l, u, t);
                                Nu(l, p);
                                break e;
                            case 1:
                                s = u;
                                var c = l.type, h = l.stateNode;
                                if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Ft === null || !Ft.has(h)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t;
                                    var w = tf(l, s, t);
                                    Nu(l, w);
                                    break e;
                                }
                        }
                        l = l.return;
                    }while (l !== null);
                }
                Sf(n);
            } catch (C) {
                t = C, ue === n && n !== null && (ue = n = n.return);
                continue;
            }
            break;
        }while (!0);
    }
    function wf() {
        var e = bo.current;
        return bo.current = Ho, e === null ? Ho : e;
    }
    function Ts() {
        (fe === 0 || fe === 3 || fe === 2) && (fe = 4), me === null || !(an & 268435455) && !(cl & 268435455) || Rt(me, ge);
    }
    function Yo(e, t) {
        var n = V;
        V |= 2;
        var r = wf();
        (me !== e || ge !== t) && (pt = null, nn(e, t));
        do try {
            Im();
            break;
        } catch (o) {
            yf(e, o);
        }
        while (!0);
        if (ps(), V = n, bo.current = r, ue !== null) throw Error(k(261));
        return me = null, ge = 0, fe;
    }
    function Im() {
        for(; ue !== null;)xf(ue);
    }
    function Tm() {
        for(; ue !== null && !np();)xf(ue);
    }
    function xf(e) {
        var t = Cf(e.alternate, e, Ae);
        e.memoizedProps = e.pendingProps, t === null ? Sf(e) : ue = t, Ps.current = null;
    }
    function Sf(e) {
        var t = e;
        do {
            var n = t.alternate;
            if (e = t.return, t.flags & 32768) {
                if (n = _m(n, t), n !== null) {
                    n.flags &= 32767, ue = n;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    fe = 6, ue = null;
                    return;
                }
            } else if (n = Cm(n, t, Ae), n !== null) {
                ue = n;
                return;
            }
            if (t = t.sibling, t !== null) {
                ue = t;
                return;
            }
            ue = t = e;
        }while (t !== null);
        fe === 0 && (fe = 5);
    }
    function Jt(e, t, n) {
        var r = $, o = Ye.transition;
        try {
            Ye.transition = null, $ = 1, Mm(e, t, n, r);
        } finally{
            Ye.transition = o, $ = r;
        }
        return null;
    }
    function Mm(e, t, n, r) {
        do An();
        while (Tt !== null);
        if (V & 6) throw Error(k(327));
        n = e.finishedWork;
        var o = e.finishedLanes;
        if (n === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var l = n.lanes | n.childLanes;
        if (dp(e, l), e === me && (ue = me = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || uo || (uo = !0, _f(Io, function() {
            return An(), null;
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
            l = Ye.transition, Ye.transition = null;
            var i = $;
            $ = 1;
            var s = V;
            V |= 4, Ps.current = null, Pm(e, n), hf(n, e), Jp(gi), Mo = !!hi, gi = hi = null, e.current = n, Nm(n), rp(), V = s, $ = i, Ye.transition = l;
        } else e.current = n;
        if (uo && (uo = !1, Tt = e, Ko = o), l = e.pendingLanes, l === 0 && (Ft = null), ip(n.stateNode), Oe(e, ie()), t !== null) for(r = e.onRecoverableError, n = 0; n < t.length; n++)o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
        if (Qo) throw Qo = !1, e = Di, Di = null, e;
        return Ko & 1 && e.tag !== 0 && An(), l = e.pendingLanes, l & 1 ? e === Fi ? yr++ : (yr = 0, Fi = e) : yr = 0, Wt(), null;
    }
    function An() {
        if (Tt !== null) {
            var e = ec(Ko), t = Ye.transition, n = $;
            try {
                if (Ye.transition = null, $ = 16 > e ? 16 : e, Tt === null) var r = !1;
                else {
                    if (e = Tt, Tt = null, Ko = 0, V & 6) throw Error(k(331));
                    var o = V;
                    for(V |= 4, I = e.current; I !== null;){
                        var l = I, i = l.child;
                        if (I.flags & 16) {
                            var s = l.deletions;
                            if (s !== null) {
                                for(var u = 0; u < s.length; u++){
                                    var a = s[u];
                                    for(I = a; I !== null;){
                                        var m = I;
                                        switch(m.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                gr(8, m, l);
                                        }
                                        var f = m.child;
                                        if (f !== null) f.return = m, I = f;
                                        else for(; I !== null;){
                                            m = I;
                                            var d = m.sibling, g = m.return;
                                            if (df(m), m === a) {
                                                I = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                d.return = g, I = d;
                                                break;
                                            }
                                            I = g;
                                        }
                                    }
                                }
                                var v = l.alternate;
                                if (v !== null) {
                                    var y = v.child;
                                    if (y !== null) {
                                        v.child = null;
                                        do {
                                            var S = y.sibling;
                                            y.sibling = null, y = S;
                                        }while (y !== null);
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
                                    gr(9, l, l.return);
                            }
                            var p = l.sibling;
                            if (p !== null) {
                                p.return = l.return, I = p;
                                break e;
                            }
                            I = l.return;
                        }
                    }
                    var c = e.current;
                    for(I = c; I !== null;){
                        i = I;
                        var h = i.child;
                        if (i.subtreeFlags & 2064 && h !== null) h.return = i, I = h;
                        else e: for(i = c; I !== null;){
                            if (s = I, s.flags & 2048) try {
                                switch(s.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        al(9, s);
                                }
                            } catch (C) {
                                le(s, s.return, C);
                            }
                            if (s === i) {
                                I = null;
                                break e;
                            }
                            var w = s.sibling;
                            if (w !== null) {
                                w.return = s.return, I = w;
                                break e;
                            }
                            I = s.return;
                        }
                    }
                    if (V = o, Wt(), ct && typeof ct.onPostCommitFiberRoot == "function") try {
                        ct.onPostCommitFiberRoot(tl, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                $ = n, Ye.transition = t;
            }
        }
        return !1;
    }
    function Ku(e, t, n) {
        t = Wn(n, t), t = ef(e, t, 1), e = Dt(e, t, 1), t = Ee(), e !== null && (Ar(e, 1, t), Oe(e, t));
    }
    function le(e, t, n) {
        if (e.tag === 3) Ku(e, e, n);
        else for(; t !== null;){
            if (t.tag === 3) {
                Ku(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ft === null || !Ft.has(r))) {
                    e = Wn(n, e), e = tf(t, e, 1), t = Dt(t, e, 1), e = Ee(), t !== null && (Ar(t, 1, e), Oe(t, e));
                    break;
                }
            }
            t = t.return;
        }
    }
    function Lm(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t), t = Ee(), e.pingedLanes |= e.suspendedLanes & n, me === e && (ge & n) === n && (fe === 4 || fe === 3 && (ge & 130023424) === ge && 500 > ie() - zs ? nn(e, 0) : Ns |= n), Oe(e, t);
    }
    function kf(e, t) {
        t === 0 && (e.mode & 1 ? (t = Jr, Jr <<= 1, !(Jr & 130023424) && (Jr = 4194304)) : t = 1);
        var n = Ee();
        e = xt(e, t), e !== null && (Ar(e, t, n), Oe(e, n));
    }
    function Om(e) {
        var t = e.memoizedState, n = 0;
        t !== null && (n = t.retryLane), kf(e, n);
    }
    function jm(e, t) {
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
                throw Error(k(314));
        }
        r !== null && r.delete(t), kf(e, n);
    }
    var Cf;
    Cf = function(e, t, n) {
        if (e !== null) if (e.memoizedProps !== t.pendingProps || Me.current) Te = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Te = !1, km(e, t, n);
            Te = !!(e.flags & 131072);
        }
        else Te = !1, ee && t.flags & 1048576 && Pc(t, Uo, t.index);
        switch(t.lanes = 0, t.tag){
            case 2:
                var r = t.type;
                ko(e, t), e = t.pendingProps;
                var o = Vn(t, ke.current);
                Fn(t, n), o = Ss(null, t, r, e, o, n);
                var l = ks();
                return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Le(r) ? (l = !0, Fo(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, gs(t), o.updater = ul, t.stateNode = o, o._reactInternals = t, Ei(t, r, e, n), t = zi(null, t, r, !0, l, n)) : (t.tag = 0, ee && l && as(t), _e(null, t, o, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch(ko(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Fm(r), e = et(r, e), o){
                        case 0:
                            t = Ni(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Au(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Du(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Fu(null, t, r, et(r.type, e), n);
                            break e;
                    }
                    throw Error(k(306, r, ""));
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : et(r, o), Ni(e, t, r, o, n);
            case 1:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : et(r, o), Au(e, t, r, o, n);
            case 3:
                e: {
                    if (lf(t), e === null) throw Error(k(387));
                    r = t.pendingProps, l = t.memoizedState, o = l.element, Mc(e, t), $o(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, l.isDehydrated) if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        o = Wn(Error(k(423)), t), t = Uu(e, t, r, n, o);
                        break e;
                    } else if (r !== o) {
                        o = Wn(Error(k(424)), t), t = Uu(e, t, r, n, o);
                        break e;
                    } else for(Ue = jt(t.stateNode.containerInfo.firstChild), Ve = t, ee = !0, nt = null, n = Ic(t, null, r, n), t.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling;
                    else {
                        if (Bn(), r === o) {
                            t = St(e, t, n);
                            break e;
                        }
                        _e(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5:
                return Lc(t), e === null && ki(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, vi(r, o) ? i = null : l !== null && vi(r, l) && (t.flags |= 32), of(e, t), _e(e, t, i, n), t.child;
            case 6:
                return e === null && ki(t), null;
            case 13:
                return sf(e, t, n);
            case 4:
                return vs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = $n(t, null, r, n) : _e(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : et(r, o), Du(e, t, r, o, n);
            case 7:
                return _e(e, t, t.pendingProps, n), t.child;
            case 8:
                return _e(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return _e(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, K(Vo, r._currentValue), r._currentValue = i, l !== null) if (lt(l.value, i)) {
                        if (l.children === o.children && !Me.current) {
                            t = St(e, t, n);
                            break e;
                        }
                    } else for(l = t.child, l !== null && (l.return = t); l !== null;){
                        var s = l.dependencies;
                        if (s !== null) {
                            i = l.child;
                            for(var u = s.firstContext; u !== null;){
                                if (u.context === r) {
                                    if (l.tag === 1) {
                                        u = vt(-1, n & -n), u.tag = 2;
                                        var a = l.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var m = a.pending;
                                            m === null ? u.next = u : (u.next = m.next, m.next = u), a.pending = u;
                                        }
                                    }
                                    l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), Ci(l.return, n, t), s.lanes |= n;
                                    break;
                                }
                                u = u.next;
                            }
                        } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
                        else if (l.tag === 18) {
                            if (i = l.return, i === null) throw Error(k(341));
                            i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ci(i, n, t), i = l.sibling;
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
                    _e(e, t, o.children, n), t = t.child;
                }
                return t;
            case 9:
                return o = t.type, r = t.pendingProps.children, Fn(t, n), o = Xe(o), r = r(o), t.flags |= 1, _e(e, t, r, n), t.child;
            case 14:
                return r = t.type, o = et(r, t.pendingProps), o = et(r.type, o), Fu(e, t, r, o, n);
            case 15:
                return nf(e, t, t.type, t.pendingProps, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : et(r, o), ko(e, t), t.tag = 1, Le(r) ? (e = !0, Fo(t)) : e = !1, Fn(t, n), qc(t, r, o), Ei(t, r, o, n), zi(null, t, r, !0, e, n);
            case 19:
                return uf(e, t, n);
            case 22:
                return rf(e, t, n);
        }
        throw Error(k(156, t.tag));
    };
    function _f(e, t) {
        return Xa(e, t);
    }
    function Dm(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Ke(e, t, n, r) {
        return new Dm(e, t, n, r);
    }
    function Ms(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Fm(e) {
        if (typeof e == "function") return Ms(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === Zi) return 11;
            if (e === Ji) return 14;
        }
        return 2;
    }
    function Ut(e, t) {
        var n = e.alternate;
        return n === null ? (n = Ke(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
    }
    function Eo(e, t, n, r, o, l) {
        var i = 2;
        if (r = e, typeof e == "function") Ms(e) && (i = 1);
        else if (typeof e == "string") i = 5;
        else e: switch(e){
            case Sn:
                return rn(n.children, o, l, t);
            case Xi:
                i = 8, o |= 8;
                break;
            case Yl:
                return e = Ke(12, n, t, o | 2), e.elementType = Yl, e.lanes = l, e;
            case Xl:
                return e = Ke(13, n, t, o), e.elementType = Xl, e.lanes = l, e;
            case Zl:
                return e = Ke(19, n, t, o), e.elementType = Zl, e.lanes = l, e;
            case La:
                return fl(n, o, l, t);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case Ta:
                        i = 10;
                        break e;
                    case Ma:
                        i = 9;
                        break e;
                    case Zi:
                        i = 11;
                        break e;
                    case Ji:
                        i = 14;
                        break e;
                    case Pt:
                        i = 16, r = null;
                        break e;
                }
                throw Error(k(130, e == null ? e : typeof e, ""));
        }
        return t = Ke(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
    }
    function rn(e, t, n, r) {
        return e = Ke(7, e, r, t), e.lanes = n, e;
    }
    function fl(e, t, n, r) {
        return e = Ke(22, e, r, t), e.elementType = La, e.lanes = n, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function Gl(e, t, n) {
        return e = Ke(6, e, null, t), e.lanes = n, e;
    }
    function Wl(e, t, n) {
        return t = Ke(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t;
    }
    function Am(e, t, n, r, o) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _l(0), this.expirationTimes = _l(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _l(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
    }
    function Ls(e, t, n, r, o, l, i, s, u) {
        return e = new Am(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = Ke(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, gs(l), e;
    }
    function Um(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: xn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n
        };
    }
    function Ef(e) {
        if (!e) return Bt;
        e = e._reactInternals;
        e: {
            if (dn(e) !== e || e.tag !== 1) throw Error(k(170));
            var t = e;
            do {
                switch(t.tag){
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (Le(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                t = t.return;
            }while (t !== null);
            throw Error(k(171));
        }
        if (e.tag === 1) {
            var n = e.type;
            if (Le(n)) return _c(e, n, t);
        }
        return t;
    }
    function Pf(e, t, n, r, o, l, i, s, u) {
        return e = Ls(n, r, !0, e, o, l, i, s, u), e.context = Ef(null), n = e.current, r = Ee(), o = At(n), l = vt(r, o), l.callback = t ?? null, Dt(n, l, o), e.current.lanes = o, Ar(e, o, r), Oe(e, r), e;
    }
    function dl(e, t, n, r) {
        var o = t.current, l = Ee(), i = At(o);
        return n = Ef(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(l, i), t.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Dt(o, t, i), e !== null && (ot(e, o, i, l), wo(e, o, i)), i;
    }
    function Xo(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function Yu(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t;
        }
    }
    function Os(e, t) {
        Yu(e, t), (e = e.alternate) && Yu(e, t);
    }
    function Vm() {
        return null;
    }
    var Nf = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function js(e) {
        this._internalRoot = e;
    }
    pl.prototype.render = js.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(k(409));
        dl(e, t, null, null);
    };
    pl.prototype.unmount = js.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            cn(function() {
                dl(null, e, null, null);
            }), t[wt] = null;
        }
    };
    function pl(e) {
        this._internalRoot = e;
    }
    pl.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = rc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for(var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
            zt.splice(n, 0, e), n === 0 && lc(e);
        }
    };
    function Ds(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ml(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function Xu() {}
    function Bm(e, t, n, r, o) {
        if (o) {
            if (typeof r == "function") {
                var l = r;
                r = function() {
                    var a = Xo(i);
                    l.call(a);
                };
            }
            var i = Pf(t, r, e, 0, null, !1, !1, "", Xu);
            return e._reactRootContainer = i, e[wt] = i.current, Nr(e.nodeType === 8 ? e.parentNode : e), cn(), i;
        }
        for(; o = e.lastChild;)e.removeChild(o);
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var a = Xo(u);
                s.call(a);
            };
        }
        var u = Ls(e, 0, !1, null, null, !1, !1, "", Xu);
        return e._reactRootContainer = u, e[wt] = u.current, Nr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
            dl(t, u, n, r);
        }), u;
    }
    function hl(e, t, n, r, o) {
        var l = n._reactRootContainer;
        if (l) {
            var i = l;
            if (typeof o == "function") {
                var s = o;
                o = function() {
                    var u = Xo(i);
                    s.call(u);
                };
            }
            dl(t, i, e, o);
        } else i = Bm(n, t, e, o, r);
        return Xo(i);
    }
    tc = function(e) {
        switch(e.tag){
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = ur(t.pendingLanes);
                    n !== 0 && (ts(t, n | 1), Oe(t, ie()), !(V & 6) && (Hn = ie() + 500, Wt()));
                }
                break;
            case 13:
                cn(function() {
                    var r = xt(e, 1);
                    if (r !== null) {
                        var o = Ee();
                        ot(r, e, 1, o);
                    }
                }), Os(e, 1);
        }
    };
    ns = function(e) {
        if (e.tag === 13) {
            var t = xt(e, 134217728);
            if (t !== null) {
                var n = Ee();
                ot(t, e, 134217728, n);
            }
            Os(e, 134217728);
        }
    };
    nc = function(e) {
        if (e.tag === 13) {
            var t = At(e), n = xt(e, t);
            if (n !== null) {
                var r = Ee();
                ot(n, e, t, r);
            }
            Os(e, t);
        }
    };
    rc = function() {
        return $;
    };
    oc = function(e, t) {
        var n = $;
        try {
            return $ = e, t();
        } finally{
            $ = n;
        }
    };
    si = function(e, t, n) {
        switch(t){
            case "input":
                if (ei(e, n), t = n.name, n.type === "radio" && t != null) {
                    for(n = e; n.parentNode;)n = n.parentNode;
                    for(n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++){
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = ll(r);
                            if (!o) throw Error(k(90));
                            ja(r), ei(r, o);
                        }
                    }
                }
                break;
            case "textarea":
                Fa(e, n);
                break;
            case "select":
                t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
        }
    };
    Wa = Rs;
    Ha = cn;
    var $m = {
        usingClientEntryPoint: !1,
        Events: [
            Vr,
            En,
            ll,
            $a,
            Ga,
            Rs
        ]
    }, or = {
        findFiberByHostInstance: qt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }, Gm = {
        bundleType: or.bundleType,
        version: or.version,
        rendererPackageName: or.rendererPackageName,
        rendererConfig: or.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: kt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ka(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: or.findFiberByHostInstance || Vm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ao.isDisabled && ao.supportsFiber) try {
            tl = ao.inject(Gm), ct = ao;
        } catch  {}
    }
    $e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m;
    $e.createPortal = function(e, t) {
        var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Ds(t)) throw Error(k(200));
        return Um(e, t, null, n);
    };
    $e.createRoot = function(e, t) {
        if (!Ds(e)) throw Error(k(299));
        var n = !1, r = "", o = Nf;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ls(e, 1, !1, null, null, n, !1, r, o), e[wt] = t.current, Nr(e.nodeType === 8 ? e.parentNode : e), new js(t);
    };
    $e.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
        return e = Ka(t), e = e === null ? null : e.stateNode, e;
    };
    $e.flushSync = function(e) {
        return cn(e);
    };
    $e.hydrate = function(e, t, n) {
        if (!ml(t)) throw Error(k(200));
        return hl(null, e, t, !0, n);
    };
    $e.hydrateRoot = function(e, t, n) {
        if (!Ds(e)) throw Error(k(405));
        var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Nf;
        if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Pf(t, null, e, 1, n ?? null, o, !1, l, i), e[wt] = t.current, Nr(e), r) for(e = 0; e < r.length; e++)n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
            n,
            o
        ] : t.mutableSourceEagerHydrationData.push(n, o);
        return new pl(t);
    };
    $e.render = function(e, t, n) {
        if (!ml(t)) throw Error(k(200));
        return hl(null, e, t, !1, n);
    };
    $e.unmountComponentAtNode = function(e) {
        if (!ml(e)) throw Error(k(40));
        return e._reactRootContainer ? (cn(function() {
            hl(null, null, e, !1, function() {
                e._reactRootContainer = null, e[wt] = null;
            });
        }), !0) : !1;
    };
    $e.unstable_batchedUpdates = Rs;
    $e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
        if (!ml(n)) throw Error(k(200));
        if (e == null || e._reactInternals === void 0) throw Error(k(38));
        return hl(e, t, n, !1, r);
    };
    $e.version = "18.3.1-next-f1338f8080-20240426";
    function zf() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zf);
        } catch (e) {
            console.error(e);
        }
    }
    zf(), Na.exports = $e;
    var Wm = Na.exports, Zu = Wm;
    Ql.createRoot = Zu.createRoot, Ql.hydrateRoot = Zu.hydrateRoot;
    const Hm = "modulepreload", bm = function(e) {
        return "/grid-draw/" + e;
    }, Ju = {}, Qm = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"), s = i?.nonce || i?.getAttribute("nonce");
            o = Promise.allSettled(n.map((u)=>{
                if (u = bm(u), u in Ju) return;
                Ju[u] = !0;
                const a = u.endsWith(".css"), m = a ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${u}"]${m}`)) return;
                const f = document.createElement("link");
                if (f.rel = a ? "stylesheet" : Hm, a || (f.as = "script"), f.crossOrigin = "", f.href = u, s && f.setAttribute("nonce", s), document.head.appendChild(f), a) return new Promise((d, g)=>{
                    f.addEventListener("load", d), f.addEventListener("error", ()=>g(new Error(`Unable to preload CSS for ${u}`)));
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
    function Km(e, t, n) {
        const [r, o] = N.useState({
            grid: null,
            loading: !0,
            error: null,
            initialized: !1
        }), l = N.useRef(!1);
        return N.useEffect(()=>{
            l.current || (l.current = !0, (async ()=>{
                try {
                    const i = await Qm(()=>import("./grid_draw_wasm.js"), []);
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
    const qu = (e)=>{
        let t;
        const n = new Set, r = (a, m)=>{
            const f = typeof a == "function" ? a(t) : a;
            if (!Object.is(f, t)) {
                const d = t;
                t = m ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((g)=>g(t, d));
            }
        }, o = ()=>t, s = {
            setState: r,
            getState: o,
            getInitialState: ()=>u,
            subscribe: (a)=>(n.add(a), ()=>n.delete(a))
        }, u = t = e(r, o, s);
        return s;
    }, Ym = (e)=>e ? qu(e) : qu, Xm = (e)=>e;
    function Zm(e, t = Xm) {
        const n = q.useSyncExternalStore(e.subscribe, q.useCallback(()=>t(e.getState()), [
            e,
            t
        ]), q.useCallback(()=>t(e.getInitialState()), [
            e,
            t
        ]));
        return q.useDebugValue(n), n;
    }
    const ea = (e)=>{
        const t = Ym(e), n = (r)=>Zm(t, r);
        return Object.assign(n, t), n;
    }, Jm = (e)=>e ? ea(e) : ea;
    function Rf(e) {
        return e.length === 0 ? null : {
            minRow: Math.min(...e.map((t)=>t.row)),
            maxRow: Math.max(...e.map((t)=>t.row)),
            minCol: Math.min(...e.map((t)=>t.col)),
            maxCol: Math.max(...e.map((t)=>t.col))
        };
    }
    function If(e, t) {
        return e.type !== t.type ? !1 : e.type === "cell" && t.type === "cell" ? e.row === t.row && e.col === t.col : e.type === "line" && t.type === "line" || e.type === "rect" && t.type === "rect" ? e.index === t.index : !1;
    }
    function Tf(e, t) {
        return t.some((n)=>If(n, e));
    }
    function qm(e, t) {
        return Tf(e, t) ? t : [
            ...t,
            e
        ];
    }
    function eh(e, t) {
        return t.filter((n)=>!If(n, e));
    }
    function Fs(e, t) {
        if (e.length === 0) return null;
        let n = 1 / 0, r = 1 / 0, o = -1 / 0, l = -1 / 0;
        for (const i of e)if (i.type === "cell") n = Math.min(n, i.row), r = Math.min(r, i.col), o = Math.max(o, i.row), l = Math.max(l, i.col);
        else if (i.type === "line") {
            const s = t.get_line(i.index);
            s.length >= 4 && (n = Math.min(n, s[0], s[2]), r = Math.min(r, s[1], s[3]), o = Math.max(o, s[0], s[2]), l = Math.max(l, s[1], s[3]));
        } else if (i.type === "rect") {
            const s = t.get_rect(i.index);
            s.length >= 4 && (n = Math.min(n, s[0], s[2]), r = Math.min(r, s[1], s[3]), o = Math.max(o, s[0], s[2]), l = Math.max(l, s[1], s[3]));
        }
        return n === 1 / 0 ? null : {
            minRow: n,
            minCol: r,
            maxRow: o,
            maxCol: l
        };
    }
    function th(e, t) {
        const n = Fs(e, t);
        return n ? {
            minRow: n.minRow,
            minCol: n.minCol
        } : null;
    }
    const nh = Jm((e, t)=>({
            grid: null,
            gridSize: {
                rows: 10,
                cols: 10
            },
            tool: "draw",
            colorIdx: 0,
            isDrawing: !1,
            drawMode: !1,
            lineStart: null,
            rectStart: null,
            selectedItems: [],
            clipboard: null,
            mousePos: {
                row: 0,
                col: 0
            },
            selectMode: null,
            selectBoxStart: null,
            selectDragStart: null,
            isSelecting: !1,
            previousSelection: [],
            jsonOutput: "",
            tensorOutput: "",
            setGrid: (n)=>e({
                    grid: n
                }),
            setGridSize: (n)=>e({
                    gridSize: n
                }),
            setTool: (n)=>e({
                    tool: n
                }),
            setColorIdx: (n)=>e({
                    colorIdx: n
                }),
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
            setSelectedItems: (n)=>{
                e({
                    selectedItems: n
                }), setTimeout(()=>t().updateOutputs(), 0);
            },
            addItemToSelection: (n)=>{
                const { selectedItems: r } = t(), o = qm(n, r);
                e({
                    selectedItems: o
                }), t().renderSelection(), t().updateOutputs();
            },
            removeItemFromSelection: (n)=>{
                const { selectedItems: r } = t(), o = eh(n, r);
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
                    for (const i of l)i.type === "cell" ? r.highlight_cell(i.row, i.col) : i.type === "line" ? r.highlight_line(i.index) : i.type === "rect" && r.highlight_rect(i.index);
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
                const i = Math.min(o.row, n.row), s = Math.max(o.row, n.row), u = Math.min(o.col, n.col), a = Math.max(o.col, n.col), m = r.get_rows(), f = r.get_cols(), d = [];
                for(let S = i; S <= s && S < m; S++)for(let p = u; p <= a && p < f; p++)r.get_cell(S, p) && d.push({
                    type: "cell",
                    row: S,
                    col: p
                });
                const g = r.get_line_count();
                for(let S = 0; S < g; S++)r.line_intersects_box(S, i, u, s, a) && d.push({
                    type: "line",
                    index: S
                });
                const v = r.get_rect_count();
                for(let S = 0; S < v; S++)r.rect_intersects_box(S, i, u, s, a) && d.push({
                    type: "rect",
                    index: S
                });
                let y = [
                    ...l
                ];
                for (const S of d)Tf(S, y) || y.push(S);
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
            startDragSelection: (n)=>{
                e({
                    selectMode: "drag",
                    selectDragStart: n,
                    isSelecting: !0
                });
            },
            finishDragSelection: (n)=>{
                const { grid: r, selectDragStart: o, selectedItems: l, updateOutputs: i } = t();
                if (!r || !o || l.length === 0) {
                    e({
                        selectMode: null,
                        selectDragStart: null,
                        isSelecting: !1
                    });
                    return;
                }
                const s = n.row - o.row, u = n.col - o.col;
                if (s !== 0 || u !== 0) {
                    const a = r.get_rows(), m = r.get_cols(), f = [];
                    for (const v of l)if (v.type === "cell") {
                        const y = v.row + s, S = v.col + u;
                        y >= 0 && y < a && S >= 0 && S < m && (r.move_cell(v.row, v.col, y, S), f.push({
                            type: "cell",
                            row: y,
                            col: S
                        }));
                    }
                    const d = l.filter((v)=>v.type === "line");
                    for (const v of d)r.move_line(v.index, s, u), f.push({
                        type: "line",
                        index: v.index
                    });
                    const g = l.filter((v)=>v.type === "rect");
                    for (const v of g)r.move_rect(v.index, s, u), f.push({
                        type: "rect",
                        index: v.index
                    });
                    e({
                        selectedItems: f,
                        selectMode: null,
                        selectDragStart: null,
                        isSelecting: !1
                    }), i(), t().renderSelection();
                } else e({
                    selectMode: null,
                    selectDragStart: null,
                    isSelecting: !1
                }), t().renderSelection();
            },
            cancelDragSelection: ()=>{
                e({
                    selectMode: null,
                    selectDragStart: null,
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
                const i = o.hit_test_rect(n, r);
                if (i >= 0) return {
                    type: "rect",
                    index: i
                };
                const s = o.get_cell_size(), u = Math.floor(n / s), a = Math.floor(r / s);
                return a >= 0 && a < o.get_rows() && u >= 0 && u < o.get_cols() && o.get_cell(a, u) ? {
                    type: "cell",
                    row: a,
                    col: u
                } : null;
            },
            copy: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (!n || r.length === 0) return;
                const o = th(r, n);
                if (!o) return;
                const l = [], i = [], s = [];
                for (const u of r)if (u.type === "cell") l.push({
                    relRow: u.row - o.minRow,
                    relCol: u.col - o.minCol,
                    color: n.get_cell_color(u.row, u.col)
                });
                else if (u.type === "line") {
                    const a = n.get_line(u.index);
                    a.length >= 5 && i.push({
                        relR1: a[0] - o.minRow,
                        relC1: a[1] - o.minCol,
                        relR2: a[2] - o.minRow,
                        relC2: a[3] - o.minCol,
                        color: a[4]
                    });
                } else if (u.type === "rect") {
                    const a = n.get_rect(u.index);
                    a.length >= 5 && s.push({
                        relR1: a[0] - o.minRow,
                        relC1: a[1] - o.minCol,
                        relR2: a[2] - o.minRow,
                        relC2: a[3] - o.minCol,
                        color: a[4]
                    });
                }
                e({
                    clipboard: {
                        cells: l,
                        lines: i,
                        rects: s
                    }
                });
            },
            paste: ()=>{
                const { grid: n, clipboard: r, mousePos: o, updateOutputs: l } = t();
                if (!n || !r) return;
                const i = n.get_rows(), s = n.get_cols(), u = [];
                for (const a of r.cells){
                    const m = o.row + a.relRow, f = o.col + a.relCol;
                    m >= 0 && m < i && f >= 0 && f < s && (n.set_draw_color(a.color), n.set_cell(m, f, !0), u.push({
                        type: "cell",
                        row: m,
                        col: f
                    }));
                }
                for (const a of r.lines){
                    const m = o.row + a.relR1, f = o.col + a.relC1, d = o.row + a.relR2, g = o.col + a.relC2;
                    m >= 0 && f >= 0 && d >= 0 && g >= 0 && (n.add_line(m, f, d, g, a.color), u.push({
                        type: "line",
                        index: n.get_line_count() - 1
                    }));
                }
                for (const a of r.rects){
                    const m = o.row + a.relR1, f = o.col + a.relC1, d = o.row + a.relR2, g = o.col + a.relC2;
                    m >= 0 && f >= 0 && d >= 0 && g >= 0 && (n.add_rect(m, f, d, g, a.color), u.push({
                        type: "rect",
                        index: n.get_rect_count() - 1
                    }));
                }
                n.render(), e({
                    selectedItems: u
                }), t().renderSelection(), l();
            },
            deleteSelected: ()=>{
                const { grid: n, selectedItems: r, updateOutputs: o } = t();
                if (!n || r.length === 0) return;
                const l = r.filter((s)=>s.type === "line").map((s)=>s.index).sort((s, u)=>u - s), i = r.filter((s)=>s.type === "rect").map((s)=>s.index).sort((s, u)=>u - s);
                for (const s of r)s.type === "cell" && n.delete_cell(s.row, s.col);
                for (const s of l)n.delete_line(s);
                for (const s of i)n.delete_rect(s);
                e({
                    selectedItems: []
                }), n.render(), o();
            },
            updateOutputs: ()=>{
                const { grid: n, selectedItems: r } = t(), o = r.filter((d)=>d.type === "cell");
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
                ], i = [], s = o.map((d)=>({
                        row: d.row,
                        col: d.col
                    })), u = Rf(s);
                if (!u) {
                    e({
                        jsonOutput: "",
                        tensorOutput: ""
                    });
                    return;
                }
                for (const d of o)if (n.get_cell(d.row, d.col)) {
                    const g = n.get_cell_color(d.row, d.col), v = l[g] ?? "#000000";
                    i.push({
                        row: d.row - u.minRow,
                        col: d.col - u.minCol,
                        color: v
                    });
                }
                i.sort((d, g)=>d.row - g.row || d.col - g.col);
                const a = u.maxRow - u.minRow + 1, m = u.maxCol - u.minCol + 1, f = Array.from({
                    length: a
                }, ()=>Array(m).fill(0));
                for (const d of i)d.color === "#000000" && (f[d.row][d.col] = 1);
                e({
                    jsonOutput: JSON.stringify(i, null, 2),
                    tensorOutput: JSON.stringify(f)
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
                    const s = r.get_rows(), u = r.get_cols(), a = [];
                    if (i.length > 0 && typeof i[0] == "object" && "row" in i[0] && "col" in i[0]) for (const f of i){
                        if (typeof f != "object" || f === null) continue;
                        const d = f.row, g = f.col, v = f.color;
                        if (typeof d != "number" || typeof g != "number") continue;
                        const y = o.row + d, S = o.col + g;
                        if (y >= 0 && y < s && S >= 0 && S < u) {
                            const p = l[v] ?? 0;
                            r.set_draw_color(p), r.set_cell(y, S, !0), a.push({
                                type: "cell",
                                row: y,
                                col: S
                            });
                        }
                    }
                    else for(let f = 0; f < i.length; f++){
                        const d = i[f];
                        if (Array.isArray(d)) for(let g = 0; g < d.length; g++){
                            const v = o.row + f, y = o.col + g;
                            if (v >= s || y >= u) continue;
                            const S = d[g];
                            if (S && typeof S == "object" && S.color) {
                                const p = l[S.color] ?? 0;
                                r.set_draw_color(p), r.set_cell(v, y, !0), a.push({
                                    type: "cell",
                                    row: v,
                                    col: y
                                });
                            }
                        }
                    }
                    a.length > 0 && e({
                        selectedItems: a
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
                    const s = r.get_rows(), u = r.get_cols(), a = [];
                    r.set_draw_color(0);
                    for(let m = 0; m < i.length; m++){
                        const f = i[m];
                        if (Array.isArray(f)) for(let d = 0; d < f.length; d++){
                            const g = o.row + m, v = o.col + d;
                            if (g >= s || v >= u) continue;
                            Number(f[d]) > .5 && (r.set_cell(g, v, !0), a.push({
                                type: "cell",
                                row: g,
                                col: v
                            }));
                        }
                    }
                    a.length > 0 && e({
                        selectedItems: a
                    }), r.render(), t().renderSelection();
                } catch  {}
            },
            clear: ()=>{
                const { grid: n, updateOutputs: r } = t();
                n?.clear(), e({
                    selectedItems: []
                }), r();
            },
            renderSelection: ()=>{
                const { grid: n, selectedItems: r } = t();
                if (n) {
                    n.render();
                    for (const o of r)o.type === "cell" ? n.highlight_cell(o.row, o.col) : o.type === "line" ? n.highlight_line(o.index) : o.type === "rect" && n.highlight_rect(o.index);
                    if (r.length > 1) {
                        const o = Fs(r, n);
                        o && n.draw_selection_box(o.minRow, o.minCol, o.maxRow + 1, o.maxCol + 1);
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
        }));
    function Mf(e) {
        var t, n, r = "";
        if (typeof e == "string" || typeof e == "number") r += e;
        else if (typeof e == "object") if (Array.isArray(e)) {
            var o = e.length;
            for(t = 0; t < o; t++)e[t] && (n = Mf(e[t])) && (r && (r += " "), r += n);
        } else for(n in e)e[n] && (r && (r += " "), r += n);
        return r;
    }
    function Lf() {
        for(var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = Mf(e)) && (r && (r += " "), r += t);
        return r;
    }
    const ta = (e)=>typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, na = Lf, Of = (e, t)=>(n)=>{
            var r;
            if (t?.variants == null) return na(e, n?.class, n?.className);
            const { variants: o, defaultVariants: l } = t, i = Object.keys(o).map((a)=>{
                const m = n?.[a], f = l?.[a];
                if (m === null) return null;
                const d = ta(m) || ta(f);
                return o[a][d];
            }), s = n && Object.entries(n).reduce((a, m)=>{
                let [f, d] = m;
                return d === void 0 || (a[f] = d), a;
            }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((a, m)=>{
                let { class: f, className: d, ...g } = m;
                return Object.entries(g).every((v)=>{
                    let [y, S] = v;
                    return Array.isArray(S) ? S.includes({
                        ...l,
                        ...s
                    }[y]) : {
                        ...l,
                        ...s
                    }[y] === S;
                }) ? [
                    ...a,
                    f,
                    d
                ] : a;
            }, []);
            return na(e, i, u, n?.class, n?.className);
        };
    function ra(e, t) {
        if (typeof e == "function") return e(t);
        e != null && (e.current = t);
    }
    function jf(...e) {
        return (t)=>{
            let n = !1;
            const r = e.map((o)=>{
                const l = ra(o, t);
                return !n && typeof l == "function" && (n = !0), l;
            });
            if (n) return ()=>{
                for(let o = 0; o < r.length; o++){
                    const l = r[o];
                    typeof l == "function" ? l() : ra(e[o], null);
                }
            };
        };
    }
    function Vi(...e) {
        return N.useCallback(jf(...e), e);
    }
    function Zo(e) {
        const t = oh(e), n = N.forwardRef((r, o)=>{
            const { children: l, ...i } = r, s = N.Children.toArray(l), u = s.find(ih);
            if (u) {
                const a = u.props.children, m = s.map((f)=>f === u ? N.Children.count(a) > 1 ? N.Children.only(null) : N.isValidElement(a) ? a.props.children : null : f);
                return P.jsx(t, {
                    ...i,
                    ref: o,
                    children: N.isValidElement(a) ? N.cloneElement(a, void 0, m) : null
                });
            }
            return P.jsx(t, {
                ...i,
                ref: o,
                children: l
            });
        });
        return n.displayName = `${e}.Slot`, n;
    }
    var rh = Zo("Slot");
    function oh(e) {
        const t = N.forwardRef((n, r)=>{
            const { children: o, ...l } = n;
            if (N.isValidElement(o)) {
                const i = uh(o), s = sh(l, o.props);
                return o.type !== N.Fragment && (s.ref = r ? jf(r, i) : i), N.cloneElement(o, s);
            }
            return N.Children.count(o) > 1 ? N.Children.only(null) : null;
        });
        return t.displayName = `${e}.SlotClone`, t;
    }
    var lh = Symbol("radix.slottable");
    function ih(e) {
        return N.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === lh;
    }
    function sh(e, t) {
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
    function uh(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
    }
    var ah = [
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
    ], Dr = ah.reduce((e, t)=>{
        const n = Zo(`Primitive.${t}`), r = N.forwardRef((o, l)=>{
            const { asChild: i, ...s } = o, u = i ? n : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), P.jsx(u, {
                ...s,
                ref: l
            });
        });
        return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
        };
    }, {});
    function As(e, t = []) {
        let n = [];
        function r(l, i) {
            const s = N.createContext(i), u = n.length;
            n = [
                ...n,
                i
            ];
            const a = (f)=>{
                const { scope: d, children: g, ...v } = f, y = d?.[e]?.[u] || s, S = N.useMemo(()=>v, Object.values(v));
                return P.jsx(y.Provider, {
                    value: S,
                    children: g
                });
            };
            a.displayName = l + "Provider";
            function m(f, d) {
                const g = d?.[e]?.[u] || s, v = N.useContext(g);
                if (v) return v;
                if (i !== void 0) return i;
                throw new Error(`\`${f}\` must be used within \`${l}\``);
            }
            return [
                a,
                m
            ];
        }
        const o = ()=>{
            const l = n.map((i)=>N.createContext(i));
            return function(s) {
                const u = s?.[e] || l;
                return N.useMemo(()=>({
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
            ch(o, ...t)
        ];
    }
    function ch(...e) {
        const t = e[0];
        if (e.length === 1) return t;
        const n = ()=>{
            const r = e.map((o)=>({
                    useScope: o(),
                    scopeName: o.scopeName
                }));
            return function(l) {
                const i = r.reduce((s, { useScope: u, scopeName: a })=>{
                    const f = u(l)[`__scope${a}`];
                    return {
                        ...s,
                        ...f
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
    function fh(e) {
        const t = e + "CollectionProvider", [n, r] = As(t), [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }), i = (y)=>{
            const { scope: S, children: p } = y, c = q.useRef(null), h = q.useRef(new Map).current;
            return P.jsx(o, {
                scope: S,
                itemMap: h,
                collectionRef: c,
                children: p
            });
        };
        i.displayName = t;
        const s = e + "CollectionSlot", u = Zo(s), a = q.forwardRef((y, S)=>{
            const { scope: p, children: c } = y, h = l(s, p), w = Vi(S, h.collectionRef);
            return P.jsx(u, {
                ref: w,
                children: c
            });
        });
        a.displayName = s;
        const m = e + "CollectionItemSlot", f = "data-radix-collection-item", d = Zo(m), g = q.forwardRef((y, S)=>{
            const { scope: p, children: c, ...h } = y, w = q.useRef(null), C = Vi(S, w), E = l(m, p);
            return q.useEffect(()=>(E.itemMap.set(w, {
                    ref: w,
                    ...h
                }), ()=>void E.itemMap.delete(w))), P.jsx(d, {
                [f]: "",
                ref: C,
                children: c
            });
        });
        g.displayName = m;
        function v(y) {
            const S = l(e + "CollectionConsumer", y);
            return q.useCallback(()=>{
                const c = S.collectionRef.current;
                if (!c) return [];
                const h = Array.from(c.querySelectorAll(`[${f}]`));
                return Array.from(S.itemMap.values()).sort((E, z)=>h.indexOf(E.ref.current) - h.indexOf(z.ref.current));
            }, [
                S.collectionRef,
                S.itemMap
            ]);
        }
        return [
            {
                Provider: i,
                Slot: a,
                ItemSlot: g
            },
            v,
            r
        ];
    }
    function on(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function(o) {
            if (e?.(o), n === !1 || !o.defaultPrevented) return t?.(o);
        };
    }
    var Df = globalThis?.document ? N.useLayoutEffect : ()=>{}, dh = Ea[" useInsertionEffect ".trim().toString()] || Df;
    function gl({ prop: e, defaultProp: t, onChange: n = ()=>{}, caller: r }) {
        const [o, l, i] = ph({
            defaultProp: t,
            onChange: n
        }), s = e !== void 0, u = s ? e : o;
        {
            const m = N.useRef(e !== void 0);
            N.useEffect(()=>{
                const f = m.current;
                f !== s && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), m.current = s;
            }, [
                s,
                r
            ]);
        }
        const a = N.useCallback((m)=>{
            if (s) {
                const f = mh(m) ? m(e) : m;
                f !== e && i.current?.(f);
            } else l(m);
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
    function ph({ defaultProp: e, onChange: t }) {
        const [n, r] = N.useState(e), o = N.useRef(n), l = N.useRef(t);
        return dh(()=>{
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
    function mh(e) {
        return typeof e == "function";
    }
    var hh = Ea[" useId ".trim().toString()] || (()=>{}), gh = 0;
    function vh(e) {
        const [t, n] = N.useState(hh());
        return Df(()=>{
            n((r)=>r ?? String(gh++));
        }, [
            e
        ]), t ? `radix-${t}` : "";
    }
    var yh = N.createContext(void 0);
    function Ff(e) {
        const t = N.useContext(yh);
        return e || t || "ltr";
    }
    function wh(e) {
        const t = N.useRef(e);
        return N.useEffect(()=>{
            t.current = e;
        }), N.useMemo(()=>(...n)=>t.current?.(...n), []);
    }
    var Hl = "rovingFocusGroup.onEntryFocus", xh = {
        bubbles: !1,
        cancelable: !0
    }, $r = "RovingFocusGroup", [Bi, Af, Sh] = fh($r), [kh, Uf] = As($r, [
        Sh
    ]), [Ch, _h] = kh($r), Vf = N.forwardRef((e, t)=>P.jsx(Bi.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: P.jsx(Bi.Slot, {
                scope: e.__scopeRovingFocusGroup,
                children: P.jsx(Eh, {
                    ...e,
                    ref: t
                })
            })
        }));
    Vf.displayName = $r;
    var Eh = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, orientation: r, loop: o = !1, dir: l, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: u, onEntryFocus: a, preventScrollOnEntryFocus: m = !1, ...f } = e, d = N.useRef(null), g = Vi(t, d), v = Ff(l), [y, S] = gl({
            prop: i,
            defaultProp: s ?? null,
            onChange: u,
            caller: $r
        }), [p, c] = N.useState(!1), h = wh(a), w = Af(n), C = N.useRef(!1), [E, z] = N.useState(0);
        return N.useEffect(()=>{
            const x = d.current;
            if (x) return x.addEventListener(Hl, h), ()=>x.removeEventListener(Hl, h);
        }, [
            h
        ]), P.jsx(Ch, {
            scope: n,
            orientation: r,
            dir: v,
            loop: o,
            currentTabStopId: y,
            onItemFocus: N.useCallback((x)=>S(x), [
                S
            ]),
            onItemShiftTab: N.useCallback(()=>c(!0), []),
            onFocusableItemAdd: N.useCallback(()=>z((x)=>x + 1), []),
            onFocusableItemRemove: N.useCallback(()=>z((x)=>x - 1), []),
            children: P.jsx(Dr.div, {
                tabIndex: p || E === 0 ? -1 : 0,
                "data-orientation": r,
                ...f,
                ref: g,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: on(e.onMouseDown, ()=>{
                    C.current = !0;
                }),
                onFocus: on(e.onFocus, (x)=>{
                    const F = !C.current;
                    if (x.target === x.currentTarget && F && !p) {
                        const D = new CustomEvent(Hl, xh);
                        if (x.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const G = w().filter((H)=>H.focusable), ye = G.find((H)=>H.active), je = G.find((H)=>H.id === y), De = [
                                ye,
                                je,
                                ...G
                            ].filter(Boolean).map((H)=>H.ref.current);
                            Gf(De, m);
                        }
                    }
                    C.current = !1;
                }),
                onBlur: on(e.onBlur, ()=>c(!1))
            })
        });
    }), Bf = "RovingFocusGroupItem", $f = N.forwardRef((e, t)=>{
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: l, children: i, ...s } = e, u = vh(), a = l || u, m = _h(Bf, n), f = m.currentTabStopId === a, d = Af(n), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: y } = m;
        return N.useEffect(()=>{
            if (r) return g(), ()=>v();
        }, [
            r,
            g,
            v
        ]), P.jsx(Bi.ItemSlot, {
            scope: n,
            id: a,
            focusable: r,
            active: o,
            children: P.jsx(Dr.span, {
                tabIndex: f ? 0 : -1,
                "data-orientation": m.orientation,
                ...s,
                ref: t,
                onMouseDown: on(e.onMouseDown, (S)=>{
                    r ? m.onItemFocus(a) : S.preventDefault();
                }),
                onFocus: on(e.onFocus, ()=>m.onItemFocus(a)),
                onKeyDown: on(e.onKeyDown, (S)=>{
                    if (S.key === "Tab" && S.shiftKey) {
                        m.onItemShiftTab();
                        return;
                    }
                    if (S.target !== S.currentTarget) return;
                    const p = zh(S, m.orientation, m.dir);
                    if (p !== void 0) {
                        if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return;
                        S.preventDefault();
                        let h = d().filter((w)=>w.focusable).map((w)=>w.ref.current);
                        if (p === "last") h.reverse();
                        else if (p === "prev" || p === "next") {
                            p === "prev" && h.reverse();
                            const w = h.indexOf(S.currentTarget);
                            h = m.loop ? Rh(h, w + 1) : h.slice(w + 1);
                        }
                        setTimeout(()=>Gf(h));
                    }
                }),
                children: typeof i == "function" ? i({
                    isCurrentTabStop: f,
                    hasTabStop: y != null
                }) : i
            })
        });
    });
    $f.displayName = Bf;
    var Ph = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };
    function Nh(e, t) {
        return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
    }
    function zh(e, t, n) {
        const r = Nh(e.key, n);
        if (!(t === "vertical" && [
            "ArrowLeft",
            "ArrowRight"
        ].includes(r)) && !(t === "horizontal" && [
            "ArrowUp",
            "ArrowDown"
        ].includes(r))) return Ph[r];
    }
    function Gf(e, t = !1) {
        const n = document.activeElement;
        for (const r of e)if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return;
    }
    function Rh(e, t) {
        return e.map((n, r)=>e[(t + r) % e.length]);
    }
    var Ih = Vf, Th = $f, Wf = "Toggle", Hf = N.forwardRef((e, t)=>{
        const { pressed: n, defaultPressed: r, onPressedChange: o, ...l } = e, [i, s] = gl({
            prop: n,
            onChange: o,
            defaultProp: r ?? !1,
            caller: Wf
        });
        return P.jsx(Dr.button, {
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...l,
            ref: t,
            onClick: on(e.onClick, ()=>{
                e.disabled || s(!i);
            })
        });
    });
    Hf.displayName = Wf;
    var Ht = "ToggleGroup", [bf] = As(Ht, [
        Uf
    ]), Qf = Uf(), Us = q.forwardRef((e, t)=>{
        const { type: n, ...r } = e;
        if (n === "single") {
            const o = r;
            return P.jsx(Mh, {
                ...o,
                ref: t
            });
        }
        if (n === "multiple") {
            const o = r;
            return P.jsx(Lh, {
                ...o,
                ref: t
            });
        }
        throw new Error(`Missing prop \`type\` expected on \`${Ht}\``);
    });
    Us.displayName = Ht;
    var [Kf, Yf] = bf(Ht), Mh = q.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = gl({
            prop: n,
            defaultProp: r ?? "",
            onChange: o,
            caller: Ht
        });
        return P.jsx(Kf, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: q.useMemo(()=>i ? [
                    i
                ] : [], [
                i
            ]),
            onItemActivate: s,
            onItemDeactivate: q.useCallback(()=>s(""), [
                s
            ]),
            children: P.jsx(Xf, {
                ...l,
                ref: t
            })
        });
    }), Lh = q.forwardRef((e, t)=>{
        const { value: n, defaultValue: r, onValueChange: o = ()=>{}, ...l } = e, [i, s] = gl({
            prop: n,
            defaultProp: r ?? [],
            onChange: o,
            caller: Ht
        }), u = q.useCallback((m)=>s((f = [])=>[
                    ...f,
                    m
                ]), [
            s
        ]), a = q.useCallback((m)=>s((f = [])=>f.filter((d)=>d !== m)), [
            s
        ]);
        return P.jsx(Kf, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: u,
            onItemDeactivate: a,
            children: P.jsx(Xf, {
                ...l,
                ref: t
            })
        });
    });
    Us.displayName = Ht;
    var [Oh, jh] = bf(Ht), Xf = q.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, disabled: r = !1, rovingFocus: o = !0, orientation: l, dir: i, loop: s = !0, ...u } = e, a = Qf(n), m = Ff(i), f = {
            role: "group",
            dir: m,
            ...u
        };
        return P.jsx(Oh, {
            scope: n,
            rovingFocus: o,
            disabled: r,
            children: o ? P.jsx(Ih, {
                asChild: !0,
                ...a,
                orientation: l,
                dir: m,
                loop: s,
                children: P.jsx(Dr.div, {
                    ...f,
                    ref: t
                })
            }) : P.jsx(Dr.div, {
                ...f,
                ref: t
            })
        });
    }), Jo = "ToggleGroupItem", Zf = q.forwardRef((e, t)=>{
        const n = Yf(Jo, e.__scopeToggleGroup), r = jh(Jo, e.__scopeToggleGroup), o = Qf(e.__scopeToggleGroup), l = n.value.includes(e.value), i = r.disabled || e.disabled, s = {
            ...e,
            pressed: l,
            disabled: i
        }, u = q.useRef(null);
        return r.rovingFocus ? P.jsx(Th, {
            asChild: !0,
            ...o,
            focusable: !i,
            active: l,
            ref: u,
            children: P.jsx(oa, {
                ...s,
                ref: t
            })
        }) : P.jsx(oa, {
            ...s,
            ref: t
        });
    });
    Zf.displayName = Jo;
    var oa = q.forwardRef((e, t)=>{
        const { __scopeToggleGroup: n, value: r, ...o } = e, l = Yf(Jo, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = l.type === "single" ? i : void 0;
        return P.jsx(Hf, {
            ...s,
            ...o,
            ref: t,
            onPressedChange: (u)=>{
                u ? l.onItemActivate(r) : l.onItemDeactivate(r);
            }
        });
    }), Dh = Us, Fh = Zf;
    const Ah = (e, t)=>{
        const n = new Array(e.length + t.length);
        for(let r = 0; r < e.length; r++)n[r] = e[r];
        for(let r = 0; r < t.length; r++)n[e.length + r] = t[r];
        return n;
    }, Uh = (e, t)=>({
            classGroupId: e,
            validator: t
        }), Jf = (e = new Map, t = null, n)=>({
            nextPart: e,
            validators: t,
            classGroupId: n
        }), qo = "-", la = [], Vh = "arbitrary..", Bh = (e)=>{
        const t = Gh(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (i)=>{
                if (i.startsWith("[") && i.endsWith("]")) return $h(i);
                const s = i.split(qo), u = s[0] === "" && s.length > 1 ? 1 : 0;
                return qf(s, u, t);
            },
            getConflictingClassGroupIds: (i, s)=>{
                if (s) {
                    const u = r[i], a = n[i];
                    return u ? a ? Ah(a, u) : u : a || la;
                }
                return n[i] || la;
            }
        };
    }, qf = (e, t, n)=>{
        if (e.length - t === 0) return n.classGroupId;
        const o = e[t], l = n.nextPart.get(o);
        if (l) {
            const a = qf(e, t + 1, l);
            if (a) return a;
        }
        const i = n.validators;
        if (i === null) return;
        const s = t === 0 ? e.join(qo) : e.slice(t).join(qo), u = i.length;
        for(let a = 0; a < u; a++){
            const m = i[a];
            if (m.validator(s)) return m.classGroupId;
        }
    }, $h = (e)=>e.slice(1, -1).indexOf(":") === -1 ? void 0 : (()=>{
            const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
            return r ? Vh + r : void 0;
        })(), Gh = (e)=>{
        const { theme: t, classGroups: n } = e;
        return Wh(n, t);
    }, Wh = (e, t)=>{
        const n = Jf();
        for(const r in e){
            const o = e[r];
            Vs(o, n, r, t);
        }
        return n;
    }, Vs = (e, t, n, r)=>{
        const o = e.length;
        for(let l = 0; l < o; l++){
            const i = e[l];
            Hh(i, t, n, r);
        }
    }, Hh = (e, t, n, r)=>{
        if (typeof e == "string") {
            bh(e, t, n);
            return;
        }
        if (typeof e == "function") {
            Qh(e, t, n, r);
            return;
        }
        Kh(e, t, n, r);
    }, bh = (e, t, n)=>{
        const r = e === "" ? t : ed(t, e);
        r.classGroupId = n;
    }, Qh = (e, t, n, r)=>{
        if (Yh(e)) {
            Vs(e(r), t, n, r);
            return;
        }
        t.validators === null && (t.validators = []), t.validators.push(Uh(n, e));
    }, Kh = (e, t, n, r)=>{
        const o = Object.entries(e), l = o.length;
        for(let i = 0; i < l; i++){
            const [s, u] = o[i];
            Vs(u, ed(t, s), n, r);
        }
    }, ed = (e, t)=>{
        let n = e;
        const r = t.split(qo), o = r.length;
        for(let l = 0; l < o; l++){
            const i = r[l];
            let s = n.nextPart.get(i);
            s || (s = Jf(), n.nextPart.set(i, s)), n = s;
        }
        return n;
    }, Yh = (e)=>"isThemeGetter" in e && e.isThemeGetter === !0, Xh = (e)=>{
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
    }, $i = "!", ia = ":", Zh = [], sa = (e, t, n, r, o)=>({
            modifiers: e,
            hasImportantModifier: t,
            baseClassName: n,
            maybePostfixModifierPosition: r,
            isExternal: o
        }), Jh = (e)=>{
        const { prefix: t, experimentalParseClassName: n } = e;
        let r = (o)=>{
            const l = [];
            let i = 0, s = 0, u = 0, a;
            const m = o.length;
            for(let y = 0; y < m; y++){
                const S = o[y];
                if (i === 0 && s === 0) {
                    if (S === ia) {
                        l.push(o.slice(u, y)), u = y + 1;
                        continue;
                    }
                    if (S === "/") {
                        a = y;
                        continue;
                    }
                }
                S === "[" ? i++ : S === "]" ? i-- : S === "(" ? s++ : S === ")" && s--;
            }
            const f = l.length === 0 ? o : o.slice(u);
            let d = f, g = !1;
            f.endsWith($i) ? (d = f.slice(0, -1), g = !0) : f.startsWith($i) && (d = f.slice(1), g = !0);
            const v = a && a > u ? a - u : void 0;
            return sa(l, g, d, v);
        };
        if (t) {
            const o = t + ia, l = r;
            r = (i)=>i.startsWith(o) ? l(i.slice(o.length)) : sa(Zh, !1, i, void 0, !0);
        }
        if (n) {
            const o = r;
            r = (l)=>n({
                    className: l,
                    parseClassName: o
                });
        }
        return r;
    }, qh = (e)=>{
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
    }, eg = (e)=>({
            cache: Xh(e.cacheSize),
            parseClassName: Jh(e),
            sortModifiers: qh(e),
            ...Bh(e)
        }), tg = /\s+/, ng = (e, t)=>{
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o, sortModifiers: l } = t, i = [], s = e.trim().split(tg);
        let u = "";
        for(let a = s.length - 1; a >= 0; a -= 1){
            const m = s[a], { isExternal: f, modifiers: d, hasImportantModifier: g, baseClassName: v, maybePostfixModifierPosition: y } = n(m);
            if (f) {
                u = m + (u.length > 0 ? " " + u : u);
                continue;
            }
            let S = !!y, p = r(S ? v.substring(0, y) : v);
            if (!p) {
                if (!S) {
                    u = m + (u.length > 0 ? " " + u : u);
                    continue;
                }
                if (p = r(v), !p) {
                    u = m + (u.length > 0 ? " " + u : u);
                    continue;
                }
                S = !1;
            }
            const c = d.length === 0 ? "" : d.length === 1 ? d[0] : l(d).join(":"), h = g ? c + $i : c, w = h + p;
            if (i.indexOf(w) > -1) continue;
            i.push(w);
            const C = o(p, S);
            for(let E = 0; E < C.length; ++E){
                const z = C[E];
                i.push(h + z);
            }
            u = m + (u.length > 0 ? " " + u : u);
        }
        return u;
    }, rg = (...e)=>{
        let t = 0, n, r, o = "";
        for(; t < e.length;)(n = e[t++]) && (r = td(n)) && (o && (o += " "), o += r);
        return o;
    }, td = (e)=>{
        if (typeof e == "string") return e;
        let t, n = "";
        for(let r = 0; r < e.length; r++)e[r] && (t = td(e[r])) && (n && (n += " "), n += t);
        return n;
    }, og = (e, ...t)=>{
        let n, r, o, l;
        const i = (u)=>{
            const a = t.reduce((m, f)=>f(m), e());
            return n = eg(a), r = n.cache.get, o = n.cache.set, l = s, s(u);
        }, s = (u)=>{
            const a = r(u);
            if (a) return a;
            const m = ng(u, n);
            return o(u, m), m;
        };
        return l = i, (...u)=>l(rg(...u));
    }, lg = [], ae = (e)=>{
        const t = (n)=>n[e] || lg;
        return t.isThemeGetter = !0, t;
    }, nd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, rd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ig = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, sg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ug = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ag = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, cg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, fg = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, _t = (e)=>ig.test(e), A = (e)=>!!e && !Number.isNaN(Number(e)), Et = (e)=>!!e && Number.isInteger(Number(e)), bl = (e)=>e.endsWith("%") && A(e.slice(0, -1)), dt = (e)=>sg.test(e), od = ()=>!0, dg = (e)=>ug.test(e) && !ag.test(e), Bs = ()=>!1, pg = (e)=>cg.test(e), mg = (e)=>fg.test(e), hg = (e)=>!T(e) && !M(e), gg = (e)=>bt(e, sd, Bs), T = (e)=>nd.test(e), Xt = (e)=>bt(e, ud, dg), ua = (e)=>bt(e, _g, A), vg = (e)=>bt(e, cd, od), yg = (e)=>bt(e, ad, Bs), aa = (e)=>bt(e, ld, Bs), wg = (e)=>bt(e, id, mg), co = (e)=>bt(e, fd, pg), M = (e)=>rd.test(e), lr = (e)=>pn(e, ud), xg = (e)=>pn(e, ad), ca = (e)=>pn(e, ld), Sg = (e)=>pn(e, sd), kg = (e)=>pn(e, id), fo = (e)=>pn(e, fd, !0), Cg = (e)=>pn(e, cd, !0), bt = (e, t, n)=>{
        const r = nd.exec(e);
        return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
    }, pn = (e, t, n = !1)=>{
        const r = rd.exec(e);
        return r ? r[1] ? t(r[1]) : n : !1;
    }, ld = (e)=>e === "position" || e === "percentage", id = (e)=>e === "image" || e === "url", sd = (e)=>e === "length" || e === "size" || e === "bg-size", ud = (e)=>e === "length", _g = (e)=>e === "number", ad = (e)=>e === "family-name", cd = (e)=>e === "number" || e === "weight", fd = (e)=>e === "shadow", Eg = ()=>{
        const e = ae("color"), t = ae("font"), n = ae("text"), r = ae("font-weight"), o = ae("tracking"), l = ae("leading"), i = ae("breakpoint"), s = ae("container"), u = ae("spacing"), a = ae("radius"), m = ae("shadow"), f = ae("inset-shadow"), d = ae("text-shadow"), g = ae("drop-shadow"), v = ae("blur"), y = ae("perspective"), S = ae("aspect"), p = ae("ease"), c = ae("animate"), h = ()=>[
                "auto",
                "avoid",
                "all",
                "avoid-page",
                "page",
                "left",
                "right",
                "column"
            ], w = ()=>[
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
                ...w(),
                M,
                T
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
            ], x = ()=>[
                M,
                T,
                u
            ], F = ()=>[
                _t,
                "full",
                "auto",
                ...x()
            ], D = ()=>[
                Et,
                "none",
                "subgrid",
                M,
                T
            ], G = ()=>[
                "auto",
                {
                    span: [
                        "full",
                        Et,
                        M,
                        T
                    ]
                },
                Et,
                M,
                T
            ], ye = ()=>[
                Et,
                "auto",
                M,
                T
            ], je = ()=>[
                "auto",
                "min",
                "max",
                "fr",
                M,
                T
            ], We = ()=>[
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
            ], De = ()=>[
                "start",
                "end",
                "center",
                "stretch",
                "center-safe",
                "end-safe"
            ], H = ()=>[
                "auto",
                ...x()
            ], ze = ()=>[
                _t,
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
                ...x()
            ], R = ()=>[
                _t,
                "screen",
                "full",
                "dvw",
                "lvw",
                "svw",
                "min",
                "max",
                "fit",
                ...x()
            ], j = ()=>[
                _t,
                "screen",
                "full",
                "lh",
                "dvh",
                "lvh",
                "svh",
                "min",
                "max",
                "fit",
                ...x()
            ], _ = ()=>[
                e,
                M,
                T
            ], W = ()=>[
                ...w(),
                ca,
                aa,
                {
                    position: [
                        M,
                        T
                    ]
                }
            ], J = ()=>[
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
            ], it = ()=>[
                "auto",
                "cover",
                "contain",
                Sg,
                gg,
                {
                    size: [
                        M,
                        T
                    ]
                }
            ], Re = ()=>[
                bl,
                lr,
                Xt
            ], oe = ()=>[
                "",
                "none",
                "full",
                a,
                M,
                T
            ], Y = ()=>[
                "",
                A,
                lr,
                Xt
            ], Je = ()=>[
                "solid",
                "dashed",
                "dotted",
                "double"
            ], Gr = ()=>[
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
                A,
                bl,
                ca,
                aa
            ], Wr = ()=>[
                "",
                "none",
                v,
                M,
                T
            ], mn = ()=>[
                "none",
                A,
                M,
                T
            ], He = ()=>[
                "none",
                A,
                M,
                T
            ], hn = ()=>[
                A,
                M,
                T
            ], Qt = ()=>[
                _t,
                "full",
                ...x()
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
                    dt
                ],
                breakpoint: [
                    dt
                ],
                color: [
                    od
                ],
                container: [
                    dt
                ],
                "drop-shadow": [
                    dt
                ],
                ease: [
                    "in",
                    "out",
                    "in-out"
                ],
                font: [
                    hg
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
                    dt
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
                    dt
                ],
                shadow: [
                    dt
                ],
                spacing: [
                    "px",
                    A
                ],
                text: [
                    dt
                ],
                "text-shadow": [
                    dt
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
                            _t,
                            T,
                            M,
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
                            A,
                            T,
                            M,
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
                        object: C()
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
                        inset: F()
                    }
                ],
                "inset-x": [
                    {
                        "inset-x": F()
                    }
                ],
                "inset-y": [
                    {
                        "inset-y": F()
                    }
                ],
                start: [
                    {
                        "inset-s": F(),
                        start: F()
                    }
                ],
                end: [
                    {
                        "inset-e": F(),
                        end: F()
                    }
                ],
                "inset-bs": [
                    {
                        "inset-bs": F()
                    }
                ],
                "inset-be": [
                    {
                        "inset-be": F()
                    }
                ],
                top: [
                    {
                        top: F()
                    }
                ],
                right: [
                    {
                        right: F()
                    }
                ],
                bottom: [
                    {
                        bottom: F()
                    }
                ],
                left: [
                    {
                        left: F()
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
                            Et,
                            "auto",
                            M,
                            T
                        ]
                    }
                ],
                basis: [
                    {
                        basis: [
                            _t,
                            "full",
                            "auto",
                            s,
                            ...x()
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
                            A,
                            _t,
                            "auto",
                            "initial",
                            "none",
                            T
                        ]
                    }
                ],
                grow: [
                    {
                        grow: [
                            "",
                            A,
                            M,
                            T
                        ]
                    }
                ],
                shrink: [
                    {
                        shrink: [
                            "",
                            A,
                            M,
                            T
                        ]
                    }
                ],
                order: [
                    {
                        order: [
                            Et,
                            "first",
                            "last",
                            "none",
                            M,
                            T
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
                        col: G()
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
                        row: G()
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
                        "auto-cols": je()
                    }
                ],
                "auto-rows": [
                    {
                        "auto-rows": je()
                    }
                ],
                gap: [
                    {
                        gap: x()
                    }
                ],
                "gap-x": [
                    {
                        "gap-x": x()
                    }
                ],
                "gap-y": [
                    {
                        "gap-y": x()
                    }
                ],
                "justify-content": [
                    {
                        justify: [
                            ...We(),
                            "normal"
                        ]
                    }
                ],
                "justify-items": [
                    {
                        "justify-items": [
                            ...De(),
                            "normal"
                        ]
                    }
                ],
                "justify-self": [
                    {
                        "justify-self": [
                            "auto",
                            ...De()
                        ]
                    }
                ],
                "align-content": [
                    {
                        content: [
                            "normal",
                            ...We()
                        ]
                    }
                ],
                "align-items": [
                    {
                        items: [
                            ...De(),
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
                            ...De(),
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
                        "place-content": We()
                    }
                ],
                "place-items": [
                    {
                        "place-items": [
                            ...De(),
                            "baseline"
                        ]
                    }
                ],
                "place-self": [
                    {
                        "place-self": [
                            "auto",
                            ...De()
                        ]
                    }
                ],
                p: [
                    {
                        p: x()
                    }
                ],
                px: [
                    {
                        px: x()
                    }
                ],
                py: [
                    {
                        py: x()
                    }
                ],
                ps: [
                    {
                        ps: x()
                    }
                ],
                pe: [
                    {
                        pe: x()
                    }
                ],
                pbs: [
                    {
                        pbs: x()
                    }
                ],
                pbe: [
                    {
                        pbe: x()
                    }
                ],
                pt: [
                    {
                        pt: x()
                    }
                ],
                pr: [
                    {
                        pr: x()
                    }
                ],
                pb: [
                    {
                        pb: x()
                    }
                ],
                pl: [
                    {
                        pl: x()
                    }
                ],
                m: [
                    {
                        m: H()
                    }
                ],
                mx: [
                    {
                        mx: H()
                    }
                ],
                my: [
                    {
                        my: H()
                    }
                ],
                ms: [
                    {
                        ms: H()
                    }
                ],
                me: [
                    {
                        me: H()
                    }
                ],
                mbs: [
                    {
                        mbs: H()
                    }
                ],
                mbe: [
                    {
                        mbe: H()
                    }
                ],
                mt: [
                    {
                        mt: H()
                    }
                ],
                mr: [
                    {
                        mr: H()
                    }
                ],
                mb: [
                    {
                        mb: H()
                    }
                ],
                ml: [
                    {
                        ml: H()
                    }
                ],
                "space-x": [
                    {
                        "space-x": x()
                    }
                ],
                "space-x-reverse": [
                    "space-x-reverse"
                ],
                "space-y": [
                    {
                        "space-y": x()
                    }
                ],
                "space-y-reverse": [
                    "space-y-reverse"
                ],
                size: [
                    {
                        size: ze()
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
                            ...j()
                        ]
                    }
                ],
                "min-block-size": [
                    {
                        "min-block": [
                            "auto",
                            ...j()
                        ]
                    }
                ],
                "max-block-size": [
                    {
                        "max-block": [
                            "none",
                            ...j()
                        ]
                    }
                ],
                w: [
                    {
                        w: [
                            s,
                            "screen",
                            ...ze()
                        ]
                    }
                ],
                "min-w": [
                    {
                        "min-w": [
                            s,
                            "screen",
                            "none",
                            ...ze()
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
                            ...ze()
                        ]
                    }
                ],
                h: [
                    {
                        h: [
                            "screen",
                            "lh",
                            ...ze()
                        ]
                    }
                ],
                "min-h": [
                    {
                        "min-h": [
                            "screen",
                            "lh",
                            "none",
                            ...ze()
                        ]
                    }
                ],
                "max-h": [
                    {
                        "max-h": [
                            "screen",
                            "lh",
                            ...ze()
                        ]
                    }
                ],
                "font-size": [
                    {
                        text: [
                            "base",
                            n,
                            lr,
                            Xt
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
                            Cg,
                            vg
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
                            bl,
                            T
                        ]
                    }
                ],
                "font-family": [
                    {
                        font: [
                            xg,
                            yg,
                            t
                        ]
                    }
                ],
                "font-features": [
                    {
                        "font-features": [
                            T
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
                            T
                        ]
                    }
                ],
                "line-clamp": [
                    {
                        "line-clamp": [
                            A,
                            "none",
                            M,
                            ua
                        ]
                    }
                ],
                leading: [
                    {
                        leading: [
                            l,
                            ...x()
                        ]
                    }
                ],
                "list-image": [
                    {
                        "list-image": [
                            "none",
                            M,
                            T
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
                            T
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
                            ...Je(),
                            "wavy"
                        ]
                    }
                ],
                "text-decoration-thickness": [
                    {
                        decoration: [
                            A,
                            "from-font",
                            "auto",
                            M,
                            Xt
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
                            A,
                            "auto",
                            M,
                            T
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
                        indent: x()
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
                            T
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
                            T
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
                        bg: W()
                    }
                ],
                "bg-repeat": [
                    {
                        bg: J()
                    }
                ],
                "bg-size": [
                    {
                        bg: it()
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
                                    Et,
                                    M,
                                    T
                                ],
                                radial: [
                                    "",
                                    M,
                                    T
                                ],
                                conic: [
                                    Et,
                                    M,
                                    T
                                ]
                            },
                            kg,
                            wg
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
                        from: Re()
                    }
                ],
                "gradient-via-pos": [
                    {
                        via: Re()
                    }
                ],
                "gradient-to-pos": [
                    {
                        to: Re()
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
                        rounded: oe()
                    }
                ],
                "rounded-s": [
                    {
                        "rounded-s": oe()
                    }
                ],
                "rounded-e": [
                    {
                        "rounded-e": oe()
                    }
                ],
                "rounded-t": [
                    {
                        "rounded-t": oe()
                    }
                ],
                "rounded-r": [
                    {
                        "rounded-r": oe()
                    }
                ],
                "rounded-b": [
                    {
                        "rounded-b": oe()
                    }
                ],
                "rounded-l": [
                    {
                        "rounded-l": oe()
                    }
                ],
                "rounded-ss": [
                    {
                        "rounded-ss": oe()
                    }
                ],
                "rounded-se": [
                    {
                        "rounded-se": oe()
                    }
                ],
                "rounded-ee": [
                    {
                        "rounded-ee": oe()
                    }
                ],
                "rounded-es": [
                    {
                        "rounded-es": oe()
                    }
                ],
                "rounded-tl": [
                    {
                        "rounded-tl": oe()
                    }
                ],
                "rounded-tr": [
                    {
                        "rounded-tr": oe()
                    }
                ],
                "rounded-br": [
                    {
                        "rounded-br": oe()
                    }
                ],
                "rounded-bl": [
                    {
                        "rounded-bl": oe()
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
                            ...Je(),
                            "none",
                            "hidden"
                        ]
                    }
                ],
                "outline-offset": [
                    {
                        "outline-offset": [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "outline-w": [
                    {
                        outline: [
                            "",
                            A,
                            lr,
                            Xt
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
                            m,
                            fo,
                            co
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
                            f,
                            fo,
                            co
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
                        ring: Y()
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
                            A,
                            Xt
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
                        "inset-ring": Y()
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
                            d,
                            fo,
                            co
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
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "mix-blend": [
                    {
                        "mix-blend": [
                            ...Gr(),
                            "plus-darker",
                            "plus-lighter"
                        ]
                    }
                ],
                "bg-blend": [
                    {
                        "bg-blend": Gr()
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
                            A
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
                            M,
                            T
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
                        "mask-radial-at": w()
                    }
                ],
                "mask-image-conic-pos": [
                    {
                        "mask-conic": [
                            A
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
                        mask: W()
                    }
                ],
                "mask-repeat": [
                    {
                        mask: J()
                    }
                ],
                "mask-size": [
                    {
                        mask: it()
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
                            T
                        ]
                    }
                ],
                filter: [
                    {
                        filter: [
                            "",
                            "none",
                            M,
                            T
                        ]
                    }
                ],
                blur: [
                    {
                        blur: Wr()
                    }
                ],
                brightness: [
                    {
                        brightness: [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                contrast: [
                    {
                        contrast: [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "drop-shadow": [
                    {
                        "drop-shadow": [
                            "",
                            "none",
                            g,
                            fo,
                            co
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
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "hue-rotate": [
                    {
                        "hue-rotate": [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                invert: [
                    {
                        invert: [
                            "",
                            A,
                            M,
                            T
                        ]
                    }
                ],
                saturate: [
                    {
                        saturate: [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                sepia: [
                    {
                        sepia: [
                            "",
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-filter": [
                    {
                        "backdrop-filter": [
                            "",
                            "none",
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-blur": [
                    {
                        "backdrop-blur": Wr()
                    }
                ],
                "backdrop-brightness": [
                    {
                        "backdrop-brightness": [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-contrast": [
                    {
                        "backdrop-contrast": [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-grayscale": [
                    {
                        "backdrop-grayscale": [
                            "",
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-hue-rotate": [
                    {
                        "backdrop-hue-rotate": [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-invert": [
                    {
                        "backdrop-invert": [
                            "",
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-opacity": [
                    {
                        "backdrop-opacity": [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-saturate": [
                    {
                        "backdrop-saturate": [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                "backdrop-sepia": [
                    {
                        "backdrop-sepia": [
                            "",
                            A,
                            M,
                            T
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
                        "border-spacing": x()
                    }
                ],
                "border-spacing-x": [
                    {
                        "border-spacing-x": x()
                    }
                ],
                "border-spacing-y": [
                    {
                        "border-spacing-y": x()
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
                            T
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
                            A,
                            "initial",
                            M,
                            T
                        ]
                    }
                ],
                ease: [
                    {
                        ease: [
                            "linear",
                            "initial",
                            p,
                            M,
                            T
                        ]
                    }
                ],
                delay: [
                    {
                        delay: [
                            A,
                            M,
                            T
                        ]
                    }
                ],
                animate: [
                    {
                        animate: [
                            "none",
                            c,
                            M,
                            T
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
                            T
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
                        rotate: mn()
                    }
                ],
                "rotate-x": [
                    {
                        "rotate-x": mn()
                    }
                ],
                "rotate-y": [
                    {
                        "rotate-y": mn()
                    }
                ],
                "rotate-z": [
                    {
                        "rotate-z": mn()
                    }
                ],
                scale: [
                    {
                        scale: He()
                    }
                ],
                "scale-x": [
                    {
                        "scale-x": He()
                    }
                ],
                "scale-y": [
                    {
                        "scale-y": He()
                    }
                ],
                "scale-z": [
                    {
                        "scale-z": He()
                    }
                ],
                "scale-3d": [
                    "scale-3d"
                ],
                skew: [
                    {
                        skew: hn()
                    }
                ],
                "skew-x": [
                    {
                        "skew-x": hn()
                    }
                ],
                "skew-y": [
                    {
                        "skew-y": hn()
                    }
                ],
                transform: [
                    {
                        transform: [
                            M,
                            T,
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
                        translate: Qt()
                    }
                ],
                "translate-x": [
                    {
                        "translate-x": Qt()
                    }
                ],
                "translate-y": [
                    {
                        "translate-y": Qt()
                    }
                ],
                "translate-z": [
                    {
                        "translate-z": Qt()
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
                            M,
                            T
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
                        "scroll-m": x()
                    }
                ],
                "scroll-mx": [
                    {
                        "scroll-mx": x()
                    }
                ],
                "scroll-my": [
                    {
                        "scroll-my": x()
                    }
                ],
                "scroll-ms": [
                    {
                        "scroll-ms": x()
                    }
                ],
                "scroll-me": [
                    {
                        "scroll-me": x()
                    }
                ],
                "scroll-mbs": [
                    {
                        "scroll-mbs": x()
                    }
                ],
                "scroll-mbe": [
                    {
                        "scroll-mbe": x()
                    }
                ],
                "scroll-mt": [
                    {
                        "scroll-mt": x()
                    }
                ],
                "scroll-mr": [
                    {
                        "scroll-mr": x()
                    }
                ],
                "scroll-mb": [
                    {
                        "scroll-mb": x()
                    }
                ],
                "scroll-ml": [
                    {
                        "scroll-ml": x()
                    }
                ],
                "scroll-p": [
                    {
                        "scroll-p": x()
                    }
                ],
                "scroll-px": [
                    {
                        "scroll-px": x()
                    }
                ],
                "scroll-py": [
                    {
                        "scroll-py": x()
                    }
                ],
                "scroll-ps": [
                    {
                        "scroll-ps": x()
                    }
                ],
                "scroll-pe": [
                    {
                        "scroll-pe": x()
                    }
                ],
                "scroll-pbs": [
                    {
                        "scroll-pbs": x()
                    }
                ],
                "scroll-pbe": [
                    {
                        "scroll-pbe": x()
                    }
                ],
                "scroll-pt": [
                    {
                        "scroll-pt": x()
                    }
                ],
                "scroll-pr": [
                    {
                        "scroll-pr": x()
                    }
                ],
                "scroll-pb": [
                    {
                        "scroll-pb": x()
                    }
                ],
                "scroll-pl": [
                    {
                        "scroll-pl": x()
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
                            T
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
                            A,
                            lr,
                            Xt,
                            ua
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
    }, Pg = og(Eg);
    function bn(...e) {
        return Pg(Lf(e));
    }
    const Ng = Of("inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    function zg({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...o }) {
        const l = r ? rh : "button";
        return P.jsx(l, {
            "data-slot": "button",
            "data-variant": t,
            "data-size": n,
            className: bn(Ng({
                variant: t,
                size: n,
                className: e
            })),
            ...o
        });
    }
    const Rg = Of("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-[color,box-shadow] outline-none hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
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
    }), dd = N.createContext({
        size: "default",
        variant: "default",
        spacing: 0
    });
    function Ig({ className: e, variant: t, size: n, spacing: r = 0, children: o, ...l }) {
        return P.jsx(Dh, {
            "data-slot": "toggle-group",
            "data-variant": t,
            "data-size": n,
            "data-spacing": r,
            style: {
                "--gap": r
            },
            className: bn("group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs", e),
            ...l,
            children: P.jsx(dd.Provider, {
                value: {
                    variant: t,
                    size: n,
                    spacing: r
                },
                children: o
            })
        });
    }
    function po({ className: e, children: t, variant: n, size: r, ...o }) {
        const l = N.useContext(dd);
        return P.jsx(Fh, {
            "data-slot": "toggle-group-item",
            "data-variant": l.variant || n,
            "data-size": l.size || r,
            "data-spacing": l.spacing,
            className: bn(Rg({
                variant: l.variant || n,
                size: l.size || r
            }), "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10", "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l", e),
            ...o,
            children: t
        });
    }
    function fa({ title: e, defaultPosition: t, children: n, className: r }) {
        const [o, l] = N.useState(t), i = N.useRef(!1), s = N.useRef({
            x: 0,
            y: 0
        }), u = N.useCallback((a)=>{
            i.current = !0, s.current = {
                x: a.clientX - o.x,
                y: a.clientY - o.y
            };
            const m = (d)=>{
                if (!i.current) return;
                const g = Math.max(0, d.clientX - s.current.x), v = Math.max(0, d.clientY - s.current.y);
                l({
                    x: g,
                    y: v
                });
            }, f = ()=>{
                i.current = !1, window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", f);
            };
            window.addEventListener("mousemove", m), window.addEventListener("mouseup", f);
        }, [
            o
        ]);
        return P.jsxs("div", {
            className: bn("fixed z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200", r),
            style: {
                left: o.x,
                top: o.y
            },
            children: [
                P.jsx("div", {
                    className: "px-3 py-2 border-b border-gray-200 cursor-move font-medium text-sm select-none bg-gray-50/50 rounded-t-lg",
                    onMouseDown: u,
                    children: e
                }),
                P.jsx("div", {
                    className: "p-3",
                    children: n
                })
            ]
        });
    }
    const da = "grid-canvas", Mn = 16, Po = 48, Tg = [
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
    function pa() {
        const e = Math.floor(window.innerWidth / Mn), t = Math.floor((window.innerHeight - Po) / Mn);
        return {
            rows: Math.max(10, t),
            cols: Math.max(10, e)
        };
    }
    function Mg() {
        const [e, t] = N.useState(pa), { grid: n, loading: r, error: o } = Km(da, e.rows, e.cols), l = N.useRef(null), i = nh(), { tool: s, setTool: u, colorIdx: a, setColorIdx: m, isDrawing: f, drawMode: d, startDrawing: g, stopDrawing: v, lineStart: y, startLine: S, finishLine: p, rectStart: c, startRect: h, finishRect: w, selectedItems: C, setSelectedItems: E, clipboard: z, copy: x, paste: F, deleteSelected: D, selectMode: G, isSelecting: ye, selectBoxStart: je, selectDragStart: We, startBoxSelection: De, updateBoxSelection: H, finishBoxSelection: ze, cancelBoxSelection: R, startDragSelection: j, finishDragSelection: _, cancelDragSelection: W, setMousePos: J, addItemToSelection: it, removeItemFromSelection: Re, hitTestShapes: oe, getSelectedCells: Y, jsonOutput: Je, tensorOutput: Gr, importJson: se, importTensor: Wr, clear: mn, updateOutputs: He, renderSelection: hn, setGrid: Qt } = i, Xn = Y();
        N.useEffect(()=>{
            Qt(n);
        }, [
            n,
            Qt
        ]), N.useEffect(()=>{
            const L = ()=>{
                const O = pa();
                t(O), n && n.resize(O.rows, O.cols);
            };
            return window.addEventListener("resize", L), ()=>window.removeEventListener("resize", L);
        }, [
            n
        ]), N.useEffect(()=>{
            const L = (O)=>{
                O.key === "\\" && u(s === "line" ? "draw" : "line"), O.key === "m" && u(s === "rect" ? "draw" : "rect"), O.key === "s" && u(s === "select" ? "draw" : "select"), (O.key === "Delete" || O.key === "Backspace") && C.length > 0 && (O.preventDefault(), D()), (O.ctrlKey || O.metaKey) && O.key === "c" && C.length > 0 && (O.preventDefault(), x()), (O.ctrlKey || O.metaKey) && O.key === "v" && z && (O.preventDefault(), F());
                const b = parseInt(O.key);
                b >= 1 && b <= 7 && m(b - 1);
            };
            return window.addEventListener("keydown", L), ()=>window.removeEventListener("keydown", L);
        }, [
            s,
            u,
            m,
            C,
            D,
            x,
            F,
            z
        ]);
        const vl = (L)=>{
            const O = L.currentTarget, b = O.getBoundingClientRect(), Q = O.width / b.width, B = O.height / b.height;
            return {
                x: (L.clientX - b.left) * Q,
                y: (L.clientY - b.top) * B
            };
        }, gn = (L)=>{
            const { x: O, y: b } = vl(L);
            return {
                col: Math.floor(O / Mn),
                row: Math.floor(b / Mn)
            };
        }, vn = (L)=>{
            const { x: O, y: b } = vl(L), Q = n?.get_cols() ?? e.cols, B = n?.get_rows() ?? e.rows, Ce = Math.max(0, Math.min(Q, Math.round(O / Mn))), yn = Math.max(0, Math.min(B, Math.round(b / Mn)));
            return {
                col: Ce,
                row: yn
            };
        }, $s = (L)=>C.some((O)=>O.type !== L.type ? !1 : O.type === "cell" && L.type === "cell" ? O.row === L.row && O.col === L.col : O.type === "line" && L.type === "line" || O.type === "rect" && L.type === "rect" ? O.index === L.index : !1), pd = N.useCallback((L)=>{
            if (!n) return;
            n.set_draw_color(a);
            const O = n.get_cols(), b = n.get_rows();
            if (s === "draw") {
                const { col: Q, row: B } = gn(L);
                if (Q >= O || B >= b) return;
                const Ce = a === 6 ? !1 : !n.get_cell(B, Q);
                g(Ce), n.set_cell(B, Q, Ce), He();
            } else if (s === "line") {
                const { col: Q, row: B } = vn(L);
                S({
                    row: B,
                    col: Q
                }), n.render_with_line(B, Q, B, Q);
            } else if (s === "rect") {
                const { col: Q, row: B } = vn(L);
                h({
                    row: B,
                    col: Q
                }), n.render_with_rect(B, Q, B, Q);
            } else if (s === "select") {
                const { col: Q, row: B } = gn(L), { x: Ce, y: yn } = vl(L);
                if (Q >= O || B >= b) return;
                const Kt = L.shiftKey, Yt = Fs(C, n), yl = Yt && B >= Yt.minRow && B <= Yt.maxRow && Q >= Yt.minCol && Q <= Yt.maxCol, de = oe(Ce, yn);
                yl && C.length > 0 && !Kt && !de ? (j({
                    row: B,
                    col: Q
                }), hn()) : de ? Kt && !$s(de) ? it(de) : Kt && $s(de) ? Re(de) : (E([
                    de
                ]), j({
                    row: B,
                    col: Q
                }), n.render(), de.type === "cell" ? n.highlight_cell(de.row, de.col) : de.type === "line" ? n.highlight_line(de.index) : de.type === "rect" && n.highlight_rect(de.index)) : De({
                    row: B,
                    col: Q
                }, Kt);
            }
        }, [
            n,
            s,
            a,
            C,
            Xn,
            oe,
            g,
            S,
            h,
            De,
            j,
            it,
            Re,
            E,
            He,
            hn
        ]), md = N.useCallback((L)=>{
            if (!n) return;
            const O = gn(L);
            if (J(O), !f && !ye) return;
            const b = n.get_cols(), Q = n.get_rows();
            if (s === "draw" && f) {
                const { col: B, row: Ce } = gn(L);
                if (B >= b || Ce >= Q) return;
                n.set_cell(Ce, B, d), He();
            } else if (s === "line" && y) {
                const { col: B, row: Ce } = vn(L);
                n.render_with_line(y.row, y.col, Ce, B);
            } else if (s === "rect" && c) {
                const { col: B, row: Ce } = vn(L);
                n.render_with_rect(c.row, c.col, Ce, B);
            } else if (s === "select" && ye) {
                const { col: B, row: Ce } = gn(L), yn = Math.max(0, Math.min(b - 1, B)), Kt = Math.max(0, Math.min(Q - 1, Ce));
                if (G === "box" && je) H({
                    row: Kt,
                    col: yn
                });
                else if (G === "drag" && We && C.length > 0) {
                    const Yt = Kt - We.row, yl = yn - We.col;
                    n.render();
                    const de = [];
                    for (const Fe of C)if (Fe.type === "cell") {
                        const Hr = Fe.row + Yt, br = Fe.col + yl;
                        Hr >= 0 && Hr < Q && br >= 0 && br < b && (n.highlight_cell(Hr, br), de.push({
                            row: Hr,
                            col: br
                        }));
                    } else Fe.type === "line" ? n.highlight_line(Fe.index) : Fe.type === "rect" && n.highlight_rect(Fe.index);
                    if (de.length > 1) {
                        const Fe = Rf(de);
                        Fe && n.draw_selection_box(Fe.minRow, Fe.minCol, Fe.maxRow + 1, Fe.maxCol + 1);
                    }
                }
            }
        }, [
            n,
            s,
            f,
            ye,
            d,
            y,
            c,
            G,
            je,
            We,
            C,
            J,
            H,
            He
        ]), hd = N.useCallback((L)=>{
            if (n) {
                if (s === "draw") v();
                else if (s === "line") {
                    if (y) {
                        const { col: O, row: b } = vn(L);
                        n.draw_line(y.row, y.col, b, O), He();
                    }
                    p();
                } else if (s === "rect") {
                    if (c) {
                        const { col: O, row: b } = vn(L);
                        n.draw_rect(c.row, c.col, b, O), He();
                    }
                    w();
                } else if (s === "select") {
                    const { col: O, row: b } = gn(L);
                    G === "box" ? ze({
                        row: b,
                        col: O
                    }) : G === "drag" && _({
                        row: b,
                        col: O
                    });
                }
            }
        }, [
            n,
            s,
            y,
            c,
            G,
            v,
            p,
            w,
            ze,
            _,
            He
        ]), gd = N.useCallback(()=>{
            s === "draw" ? v() : s === "line" ? (n && n.render(), p()) : s === "rect" ? (n && n.render(), w()) : s === "select" && (G === "box" ? R() : G === "drag" && W());
        }, [
            n,
            s,
            G,
            v,
            p,
            w,
            R,
            W
        ]);
        return o ? P.jsx("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100",
            children: P.jsx("div", {
                className: "bg-white p-6 rounded-lg shadow-lg",
                children: P.jsxs("p", {
                    className: "text-red-600",
                    children: [
                        "Error loading WASM: ",
                        o
                    ]
                })
            })
        }) : P.jsxs(P.Fragment, {
            children: [
                P.jsxs("header", {
                    className: "fixed top-0 left-0 right-0 h-12 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 flex items-center px-4",
                    children: [
                        P.jsx("h1", {
                            className: "text-xl font-bold",
                            children: "Grid Draw"
                        }),
                        r && P.jsx("span", {
                            className: "ml-4 text-sm text-gray-500",
                            children: "Loading..."
                        })
                    ]
                }),
                P.jsx("canvas", {
                    ref: l,
                    id: da,
                    className: bn("fixed left-0 right-0 bottom-0", r && "opacity-50"),
                    style: {
                        top: Po,
                        cursor: r ? "wait" : "crosshair"
                    },
                    onMouseDown: pd,
                    onMouseMove: md,
                    onMouseUp: hd,
                    onMouseLeave: gd
                }),
                P.jsx(fa, {
                    title: "Tools",
                    defaultPosition: {
                        x: 20,
                        y: Po + 20
                    },
                    children: P.jsxs("div", {
                        className: "space-y-3",
                        children: [
                            P.jsxs("div", {
                                children: [
                                    P.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Mode"
                                    }),
                                    P.jsxs(Ig, {
                                        type: "single",
                                        value: s,
                                        onValueChange: (L)=>L && u(L),
                                        variant: "outline",
                                        className: "flex-wrap",
                                        children: [
                                            P.jsx(po, {
                                                value: "draw",
                                                className: "text-xs",
                                                children: "Draw"
                                            }),
                                            P.jsx(po, {
                                                value: "line",
                                                className: "text-xs",
                                                children: "Line"
                                            }),
                                            P.jsx(po, {
                                                value: "rect",
                                                className: "text-xs",
                                                children: "Rect"
                                            }),
                                            P.jsx(po, {
                                                value: "select",
                                                className: "text-xs",
                                                children: "Select"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            P.jsxs("div", {
                                children: [
                                    P.jsx("label", {
                                        className: "text-xs font-medium text-gray-500 mb-1 block",
                                        children: "Color"
                                    }),
                                    P.jsx("div", {
                                        className: "flex gap-1",
                                        children: Tg.map((L, O)=>P.jsx("button", {
                                                onClick: ()=>m(O),
                                                title: `${O + 1}: ${L.name}`,
                                                className: bn("w-6 h-6 rounded border-2 transition-all", a === O ? "ring-2 ring-orange-500 ring-offset-1 border-orange-500" : "border-gray-300 hover:border-gray-400", L.hex === "#ffffff" && "shadow-sm"),
                                                style: {
                                                    backgroundColor: L.hex ?? "transparent",
                                                    backgroundImage: L.hex === null ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : void 0,
                                                    backgroundSize: L.hex === null ? "6px 6px" : void 0,
                                                    backgroundPosition: L.hex === null ? "0 0, 0 3px, 3px -3px, -3px 0px" : void 0
                                                }
                                            }, O))
                                    })
                                ]
                            }),
                            P.jsx(zg, {
                                variant: "destructive",
                                onClick: mn,
                                disabled: r,
                                size: "sm",
                                className: "w-full",
                                children: "Clear Grid"
                            }),
                            P.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: "\\ line, m rect, s select, 1-7 colors"
                            })
                        ]
                    })
                }),
                P.jsx(fa, {
                    title: "Selection Data",
                    defaultPosition: {
                        x: Math.max(20, window.innerWidth - 340),
                        y: Po + 20
                    },
                    children: P.jsxs("div", {
                        className: "space-y-3 w-72",
                        children: [
                            Xn.length > 0 && P.jsxs(P.Fragment, {
                                children: [
                                    P.jsxs("div", {
                                        children: [
                                            P.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "JSON (sparse)"
                                            }),
                                            P.jsx("textarea", {
                                                value: Je,
                                                onChange: (L)=>se(L.target.value),
                                                placeholder: '[{"row":0,"col":0,"color":"#000000"},...]',
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    }),
                                    P.jsxs("div", {
                                        children: [
                                            P.jsx("label", {
                                                className: "text-xs font-medium text-gray-500 mb-1 block",
                                                children: "2D Array (black = 1)"
                                            }),
                                            P.jsx("textarea", {
                                                value: Gr,
                                                onChange: (L)=>Wr(L.target.value),
                                                placeholder: "[[1, 0], [0, 1], ...]",
                                                className: "w-full h-32 p-2 font-mono text-xs bg-white border rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            P.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: C.length === 0 ? "Select items with Select tool (s). Paste imports at mouse position." : `${C.length} item${C.length !== 1 ? "s" : ""} selected${Xn.length > 0 ? ` (${Xn.length} cell${Xn.length !== 1 ? "s" : ""})` : ""}.`
                            })
                        ]
                    })
                })
            ]
        });
    }
    function Lg() {
        return P.jsx("div", {
            className: "grid-draw-app",
            children: P.jsx(Mg, {})
        });
    }
    const ma = document.getElementById("grid-draw-root");
    ma && Ql.createRoot(ma).render(P.jsx(q.StrictMode, {
        children: P.jsx(Lg, {})
    }));
})();
